---
title: "Screen: unlockOrientation()-Methode"
short-title: unlockOrientation()
slug: Web/API/Screen/unlockOrientation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

Die **`Screen.unlockOrientation()`**-Methode entfernt alle zuvor von der Seite/Anwendung gesetzten Bildschirmsperren. Stattdessen sollte die Methode {{DOMxRef("ScreenOrientation.unlock()")}} verwendet werden.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die Methode {{DOMxRef("ScreenOrientation.unlock()")}}.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
unlockOrientation()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung erfolgreich entsperrt wurde, oder `false`, wenn die Ausrichtung nicht entsperrt werden konnte.

## Beispiele

```js
const unlockOrientation =
  screen.unlockOrientation ||
  screen.mozUnlockOrientation ||
  screen.msUnlockOrientation ||
  (screen.orientation && screen.orientation.unlock);

if (unlockOrientation()) {
  // Ausrichtung wurde entsperrt
} else {
  // Entsperrung der Ausrichtung fehlgeschlagen
}
```

## Spezifikationen

Diese Funktion gehört zu keiner Spezifikation und ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen {{domxref("ScreenOrientation.unlock()")}}.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.lockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}}-Ereignis
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
