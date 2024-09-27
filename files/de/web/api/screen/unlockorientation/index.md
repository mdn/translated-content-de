---
title: "Screen: unlockOrientation() Methode"
short-title: unlockOrientation()
slug: Web/API/Screen/unlockOrientation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

Die **`Screen.unlockOrientation()`** Methode entfernt alle zuvor von der Seite/App gesetzten Bildschirmsperren. Stattdessen sollte die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) Methode verwendet werden.

> [!WARNING]
> Dieses Feature ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) Methode.

> [!NOTE]
> Diese Methode funktioniert nur bei installierten Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

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

Dieses Feature gehört zu keiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
