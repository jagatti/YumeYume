---
applyTo: "**/*.js"
---

# JavaScript Coding Guidelines

## Code Style

### Variable Declarations
- Use `const` for values that won't be reassigned
- Use `let` for values that will change
- Never use `var`
- Declare DOM element references at module/file top
- Group related variable declarations together

### Naming Conventions
- `camelCase` for variables and functions
- `UPPER_SNAKE_CASE` for true constants
- Descriptive names for game state variables
- Short names acceptable for loop counters (i, j) and coordinates (x, y)

### Functions
- Keep functions focused on a single responsibility
- Use arrow functions for callbacks and short utilities
- Use regular function declarations for main game functions
- Document complex game logic with comments

## Canvas Rendering

### Context Management
- Always use `ctx` as the canvas context variable name
- Use `ctx.save()` before transforms, `ctx.restore()` after
- Clear or redraw background at start of each frame
- Batch similar drawing operations for performance

### Drawing Patterns
```javascript
// Pattern for game objects with transforms
ctx.save();
ctx.translate(x, y);
ctx.rotate(angle);
// ... draw operations
ctx.restore();

// Pattern for alpha/transparency
ctx.save();
ctx.globalAlpha = 0.8;
// ... draw operations
ctx.restore();
```

## Game Logic

### Timing
- Use `performance.now()` or audio currentTime for game timing
- Store timing values in seconds (not milliseconds) to match audio
- Account for frame delta time in animations
- Use `requestAnimationFrame` for game loop

### State Management
- Use object literals for complex game state
- Keep state updates atomic and predictable
- Avoid mutating state in rendering code
- Use state flags (e.g., `state: "waiting"`, `state: "active"`)

### Arrays and Collections
- Use array methods (map, filter, forEach) over manual loops when appropriate
- Pre-allocate arrays for notes/objects if size is known
- Clean up old objects to prevent memory leaks

## Event Handling

### Input Events
- Support both touch and mouse events
- Use `addEventListener` (not inline handlers)
- Prevent default behavior where needed (e.g., touch scrolling)
- Clean up event listeners when no longer needed

### Audio
- Handle audio autoplay restrictions (user gesture required)
- Preload audio with `preload="auto"` attribute
- Set reasonable volume levels (0.0 to 1.0)
- Use `currentTime` for synchronization

## Performance

### Optimization Guidelines
- Avoid creating objects in the render loop
- Cache calculations used multiple times per frame
- Use simple collision detection for rhythm game hit boxes
- Minimize DOM manipulation during gameplay
- Use `display: none` instead of removing elements when possible

### Memory Management
- Remove completed notes from arrays
- Don't accumulate infinite arrays
- Be mindful of closures capturing large objects

## Comments

### When to Comment
- Japanese comments for game-specific concepts (譜面, AC, SP, etc.)
- English for technical implementation details
- Section headers with `// ---` style
- Complex algorithms or non-obvious logic
- Timing-sensitive code with exact values

### When Not to Comment
- Obvious code that's self-documenting
- Redundant descriptions of what code does
- Outdated comments (update or remove)

## Common Patterns

### Note Spawning
```javascript
const note = {
  time: audioTime,
  side: "left", // or "right"
  y: startY,
  hit: false
};
```

### Judgment System
- Timing windows in seconds (e.g., ±0.1s for "Perfect")
- Calculate difference between note time and hit time
- Award points based on timing accuracy

### Score Display
- Format large numbers with separators for readability
- Update score text without recreating UI elements
- Use animations for score changes (optional but nice)

## Error Handling

- Use try-catch for audio operations (may fail in some browsers)
- Validate user input before processing
- Handle missing or invalid note chart data gracefully
- Console.log errors for debugging but don't break game flow

## Browser Compatibility

- Use standard ES6+ features (supported in modern browsers)
- No need for transpilation or polyfills
- Test in both mobile and desktop browsers
- Handle touch events properly for mobile support
