---
title: "Bildschirm: unlockOrientation()-Methode"
short-title: unlockOrientation()
slug: Web/API/Screen/unlockOrientation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Screen Orientation API")}}{{non-standard_header}}

Die **`Screen.unlockOrientation()`**-Methode entfernt alle vorherigen Bildschirmsperren, die von der Seite/App gesetzt wurden. Stattdessen sollte die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode verwendet werden.

> [!WARNING]
> Dieses Feature ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
unlockOrientation()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung erfolgreich entsperrt wurde, oder
`false`, wenn die Ausrichtung nicht entsperrt werden konnte.

## Beispiele

```js
const unlockOrientation =
  screen.unlockOrientation ||
  screen.mozUnlockOrientation ||
  screen.msUnlockOrientation ||
  (screen.orientation && screen.orientation.unlock);

if (unlockOrientation()) {
  // orientation was unlocked
} else {
  // orientation unlock failed
}
```

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es wird nicht mehr als Standard verfolgt.

Verwenden Sie stattdessen [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event)-Ereignis
- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
