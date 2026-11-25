# Pink Bear Cycle Tracker — standing project rules

This repository is the user's menstrual cycle tracker. Keep it separate from every other app project, especially Wawa Translator.

## Masters and first launch
- Treat the approved Pink Bear screen masters in `www/assets/masters/` as the source of truth for all four screens and their layout. Preserve the 814:1933 phone ratio; do not stretch or substitute an older master.
- This is a menstrual-cycle tracker, not only a symptom diary: after the first actual period start is saved, calculate the next expected start from the configured cycle length (then adapt to recorded cycle intervals), mark the expected period duration, let the user correct actual start/end dates, and schedule an on-device reminder. Keep first install empty and never invent a cycle.
- Each master already draws its own bottom tab bar and selected tab. Show only that embedded bar; never add a second rendered or fixed tab-bar image. Keep one shared nav as a direct child of the app shell, positioned over the active master's embedded bar with transparent, accessible tap targets. The active artwork itself must match the current page. Never use the blurred footer as the visible tab bar or replace the master art with generic symbols.
- The symptom and mood illustrations are already drawn into the Today master. Overlay transparent hit areas and selection marks; do not crop the full page as an icon sprite or put square backgrounds behind the icons. Keep the note master blank under the single live placeholder so text never doubles.
- A fresh install has no saved cycle data. Never seed example dates, symptoms, moods, notes, calendar markers, or statistics. Remove sample records embedded in master artwork; show empty-state text until the user saves real data.
- Preserve the user's existing local records when updating the app.

## Interaction and release checks
- Check every visible control end to end on its intended screen: all four bottom tabs, date/month navigation and selection, period dialog and save, symptom/mood selection, note entry/save, history add/edit/delete, statistics refresh, settings save, backup export/import, and dialog close buttons.
- Confirm the active tab shown in the artwork matches the current page. Confirm every tap target stays aligned to its artwork on the phone aspect ratio.
- Before calling an APK complete, confirm the Android build succeeded, inspect the packaged masters and first-launch state, and provide the actual newly built APK. Never relabel an older APK as the latest fix.
- Report what was checked and distinguish code-level interaction checks from visual checks on a physical handset.
