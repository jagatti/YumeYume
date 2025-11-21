# YumeYume Rhythm Game - Copilot Instructions

## Project Overview

This is a custom rhythm game built with vanilla HTML5, CSS, and JavaScript. The game features:
- Canvas-based rendering for smooth animations
- Audio synchronization with note charts
- Appeal Chance (AC) system for scoring bonuses
- SP (Special) gauge mechanics
- Touch and keyboard input support
- Japanese UI and text

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Graphics**: HTML5 Canvas API
- **Audio**: HTML5 Audio API
- **No build system**: Direct browser execution
- **No dependencies**: No package.json or npm packages

## Project Structure

- `index.html` - Main HTML structure
- `main.js` - Core game logic (~1656 lines)
- `style.css` - Game styling and layout
- `notesChart.json` - Note timing data
- `YumeYume.wav` - Background music
- `tap.wav` - Tap sound effect
- `bg.jpg` - Background image
- `favicon.ico` - Site icon

## Coding Conventions

### JavaScript Style
- Use `const` and `let` (no `var`)
- Two-space indentation
- Comments in Japanese for game-specific terminology (AC, SP, etc.)
- English for technical comments
- CamelCase for variables and functions
- Object literal property shorthand where appropriate
- Use template literals for string interpolation

### Code Organization
- Global constants and configuration at the top of files
- DOM element references declared early
- Game state variables grouped logically
- Functions organized by feature area (rendering, input handling, game logic)

### Canvas Rendering
- Use `ctx` as the canvas context variable name
- Clear canvas or redraw background before each frame
- Use `ctx.save()` and `ctx.restore()` for transform operations
- Apply alpha/transparency for visual effects

### Comments
- Use `// ---` style for section headers
- Japanese comments for domain-specific concepts (譜面, スコア, etc.)
- Keep inline comments concise and meaningful

## Testing Guidelines

Since this is a browser-based game without automated tests:
- **Always test changes in a browser**
- Test both touch and keyboard inputs
- Verify timing-sensitive features (note spawning, judgment)
- Check responsive behavior on different screen sizes
- Test portrait mode warning message
- Verify audio playback and synchronization

## Common Tasks

### Modifying Game Mechanics
- Score calculations are in the tap/judgment logic
- AC system is configured in `acList` array
- Note spawning is time-based using `notesChart`

### UI Changes
- Canvas-based UI elements are drawn in render functions
- HTML overlay buttons are styled in `style.css`
- Position calculations often use viewport width/height percentages

### Adding Notes
- Modify `notesChart` array with `{time, side}` objects
- Time is in seconds from song start
- Side must be "left" or "right"

## Important Notes

- The game relies on precise timing - be careful with changes that affect the game loop
- Japanese text should be preserved in UI elements
- Keep mobile-friendly touch interactions
- Maintain landscape orientation enforcement
- Audio elements have preload attributes for smooth playback

## Best Practices for Changes

1. **Minimal modifications**: Keep changes surgical and focused
2. **Test timing**: Always verify note timing and audio sync after changes
3. **Preserve gameplay**: Don't break existing game mechanics
4. **Visual consistency**: Match existing UI style and colors
5. **Performance**: Keep rendering efficient for smooth 60fps gameplay
