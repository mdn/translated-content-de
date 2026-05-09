---
title: "Screen: unlockOrientation() Methode"
short-title: unlockOrientation()
slug: Web/API/Screen/unlockOrientation
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`Screen.unlockOrientation()`**-Methode entfernt alle zuvor von der Seite/App gesetzten Bildschirmsperren. Stattdessen sollte die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode verwendet werden.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
unlockOrientation()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Orientierung erfolgreich entsperrt wurde, oder `false`, wenn die Orientierung nicht entsperrt werden konnte.

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

Diese Funktion ist nicht Teil einer Spezifikation. Sie wird nicht mehr als Standard verfolgt.

Verwenden Sie stattdessen [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
