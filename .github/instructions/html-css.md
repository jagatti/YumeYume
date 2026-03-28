---
applyTo: ["**/*.html", "**/*.css"]
---

# HTML and CSS Guidelines

## HTML Structure

### Document Structure
- Use HTML5 doctype: `<!doctype html>`
- Include `lang="ja"` attribute for Japanese content
- Use semantic meta tags (charset, viewport)
- Keep structure minimal and clean

### Element Organization
- Canvas element for game rendering
- Overlay buttons for game controls (start, retry)
- Audio elements with preload attributes
- Hidden image elements for preloading assets

### Accessibility Considerations
- Use descriptive button text (even in Japanese)
- Include alt text for images where appropriate
- Ensure interactive elements are keyboard accessible
- Don't rely solely on color for important information

## CSS Style Guidelines

### Code Organization
- CSS reset/normalization at the top
- Layout rules before specific component styles
- Group related properties together
- Use consistent spacing (2 spaces for indentation)

### Naming and Selectors
- Use ID selectors for unique game elements (#game, #startBtn)
- Keep selectors simple and performant
- Avoid over-nesting
- No need for BEM or other naming conventions (simple project)

### Layout Patterns

#### Flexbox Centering
```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Absolute Positioning for Game UI
```css
.game-element {
  position: absolute;
  /* Use viewport units or percentages for responsive positioning */
}
```

### Visual Style

#### Colors
- Use hex color codes (#0f172a for background)
- Consistent dark theme throughout
- Bright accent colors (#39ff14 for primary actions)
- Semi-transparent overlays with alpha values

#### Effects
- Subtle border-radius for modern look
- Box shadows for depth (with alpha for glow effects)
- Smooth transitions on interactive elements
- Use `opacity` for fade effects

### Responsive Design

#### Mobile First
- Design primarily for landscape mobile devices
- Use viewport units (vw, vh) for sizing
- Disable user selection and touch-action where needed
- Show rotation message for portrait mode

#### Canvas Sizing
- Canvas should be the main visual element
- Use borders to frame the game area
- Ensure canvas scales appropriately

### Touch Optimization

```css
canvas {
  touch-action: none; /* Prevent scrolling on touch */
  user-select: none;  /* Prevent text selection */
  -webkit-user-select: none; /* Safari */
}
```

### Button Styles

#### Primary Button (Start)
- Large, prominent, centered
- Bright color (#39ff14)
- Clear hover states
- Positioned with transform for perfect centering

#### Secondary Button (Retry)
- Smaller, less prominent
- Corner positioning
- Different color (#ffa500)
- Hidden by default, shown during gameplay

### Z-Index Management
- Rotate message: z-index 10 (high priority)
- Buttons: z-index 100-101 (always on top)
- Game canvas: default layer
- Background elements: behind canvas

## Performance

### Optimization
- Use `display: none` for hidden elements (not `visibility: hidden`)
- Minimize repaints during gameplay
- Keep CSS simple to avoid unnecessary calculations
- Use hardware-accelerated properties (transform, opacity)

### Animation
- Prefer CSS transitions for simple UI animations
- Use `transition` property for smooth state changes
- Keep animation durations short (0.2s typical)
- JavaScript for complex game animations on canvas

## Typography

- Use `system-ui` font family (native, performant)
- Rem or em units for font sizes where appropriate
- Ensure text is readable on dark background
- Japanese text should render correctly in all browsers

## Best Practices

1. **Keep it simple**: This is a canvas game, HTML/CSS are for UI only
2. **Mobile-friendly**: Design for touch and small screens
3. **Performance**: Avoid heavy CSS during gameplay
4. **Consistency**: Match existing color scheme and style
5. **Testing**: Always test on mobile devices (or emulation)

## Common Modifications

### Adding a New Button
1. Add button element in HTML with unique ID
2. Position absolutely with viewport units
3. Style consistently with existing buttons
4. Add to appropriate z-index layer
5. Hide by default if not initially visible

### Changing Colors
- Update hex values consistently across elements
- Maintain sufficient contrast for readability
- Keep shadow colors coordinated with element colors

### Responsive Adjustments
- Use media queries sparingly (landscape-first design)
- Test on multiple screen sizes
- Adjust font sizes and spacing with viewport units
