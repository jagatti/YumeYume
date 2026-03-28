---
applyTo: "**/*.json"
---

# Game Data and Configuration Guidelines

## Note Charts (notesChart.json)

### Structure
The note chart is a JSON array of note objects with timing and positioning data.

### Note Object Format
```json
{
  "time": 0.54,
  "side": "left"
}
```

### Properties
- **time**: Float value in seconds from the start of the song
  - Precision to 2 decimal places is sufficient
  - Must be in ascending order for optimal performance
  - Corresponds to audio currentTime value
  
- **side**: String, either "left" or "right"
  - Determines which side of the screen the note spawns
  - Must be exactly "left" or "right" (lowercase)

### Timing Precision
- Notes are judged based on timing windows (typically ±0.1s)
- Sync notes with musical beats and phrases
- Test note placement by playing the game
- Consider player reaction time when placing dense patterns

### Chart Design Guidelines

#### Difficulty Balancing
- Space notes appropriately for the target skill level
- Avoid physically impossible patterns (rapid alternating)
- Consider thumb reach on mobile devices
- Place rests between intense sections

#### Musical Sync
- Align notes with strong beats or melody
- Use note patterns to reflect musical phrases
- Consider the song's intensity when placing notes

#### Testing
- Always play through the chart after modifications
- Verify timing accuracy with audio
- Check that note patterns feel natural
- Ensure no overlap or collision issues

## Appeal Chance (AC) Configuration

### Structure
AC system is configured in JavaScript (`acList` array in main.js), not in JSON.

### AC Object Format
```javascript
{
  startTime: 12.99,
  endTime: 24.31,
  type: "score",
  target: 1000000,
  rewardScore: 500000,
  rewardSP: 3600,
  state: "waiting",
  progress: 0,
  cleared: false,
  desc: "スコアを100万獲得する",
  tapScore: 0,
  spScore: 0
}
```

### AC Properties
- **startTime/endTime**: Time window in seconds for the AC challenge
- **type**: Either "score" or "sp" (SP activation count)
- **target**: Goal value to achieve (score amount or SP count)
- **rewardScore**: Score bonus for completing the AC
- **rewardSP**: SP gauge bonus for completing the AC
- **desc**: Japanese description shown to player
- **state**: "waiting", "active", or "completed"

### AC Design Guidelines

#### Timing
- Place ACs during musically appropriate sections
- Allow sufficient time to complete the challenge
- Don't overlap ACs (can be confusing)
- Consider the natural flow of the song

#### Balance
- Make targets achievable but challenging
- Reward proportional to difficulty
- Earlier ACs typically easier than later ones
- SP-type ACs depend on note density

## Data Integrity

### Validation Checks
When modifying data files:
- JSON must be valid (use a validator)
- All required properties must be present
- Types must match expected format (number, string)
- No duplicate or conflicting entries

### Backup
- Keep a backup copy when making major changes
- Test changes incrementally
- Document significant modifications

## Audio Files

While not JSON, audio timing is critical:

### Audio Timing Sync
- Note times reference audio playback time
- Audio must be preloaded (`preload="auto"`)
- Consider audio latency on different devices
- Test synchronization on target platforms

### File Format
- WAV format for background music (YumeYume.wav)
- WAV format for sound effects (tap.wav)
- Keep file sizes reasonable for web loading

## Best Practices

### When Adding Notes
1. Listen to the song at the target timestamp
2. Determine appropriate side based on pattern flow
3. Add note object with precise timing
4. Test in-game immediately
5. Adjust timing if needed based on feel

### When Modifying ACs
1. Consider the song section's intensity
2. Calculate achievable targets based on note density
3. Test completion difficulty
4. Ensure rewards feel meaningful
5. Update descriptions to match changes

### Common Mistakes to Avoid
- Typos in "side" values (must be exact: "left" or "right")
- Timing values too close together (< 0.1s may be unplayable)
- Out-of-order timing (breaks optimization assumptions)
- Invalid JSON syntax (always validate)
- Forgetting to test changes in-game

## Performance Considerations

- Large note charts (1000+ notes) load quickly but consider memory
- Notes are processed sequentially during gameplay
- Keep chart data clean and minimal
- Remove unused or test entries before committing
