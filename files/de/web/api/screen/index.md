---
title: Screen
slug: Web/API/Screen
l10n:
  sourceCommit: b4739fbae6832960058f513073b23b77244ddeef
---

{{APIRef("CSSOM")}}

Das `Screen`-Interface repräsentiert einen Bildschirm, in der Regel den, auf dem das aktuelle Fenster gerendert wird, und wird mit [`window.screen`](/de/docs/Web/API/Window/screen) abgerufen.

Beachten Sie, dass Browser den aktuellen Bildschirm anhand der Position des Zentrums des Browserfensters bestimmen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight)
  - : Gibt die Höhe des Bildschirms in Pixeln an, abzüglich permanenter oder semipermanenter Benutzeroberflächenelemente, die vom Betriebssystem angezeigt werden, wie die Taskleiste unter Windows.
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
  - : Gibt die in Pixeln verfügbare horizontale Fläche für das Fenster zurück.
- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth)
  - : Gibt die Farbtiefe des Bildschirms zurück.
- [`Screen.height`](/de/docs/Web/API/Screen/height)
  - : Gibt die Höhe des Bildschirms in Pixeln zurück.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt `true` zurück, wenn das Gerät des Benutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
  - : Gibt die [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Instanz zurück, die mit diesem Bildschirm verbunden ist.
- [`Screen.pixelDepth`](/de/docs/Web/API/Screen/pixelDepth)
  - : Ruft die Bittiefe des Bildschirms ab.
- [`Screen.width`](/de/docs/Web/API/Screen/width)
  - : Gibt die Breite des Bildschirms zurück.
- [`Screen.mozEnabled`](/de/docs/Web/API/Screen/mozEnabled) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Das Setzen auf false schaltet den Bildschirm des Geräts aus.
- [`Screen.mozBrightness`](/de/docs/Web/API/Screen/mozBrightness) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Steuert die Helligkeit des Bildschirms eines Geräts. Ein Wert zwischen 0 und 1,0 wird erwartet.

## Nicht standardisierte Eigenschaften

Die folgenden Eigenschaften sind als Teil der [Window Management API](/de/docs/Web/API/Window_Management_API) festgelegt, die sie im [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interface verfügbar macht; dort haben wir uns entschieden, sie zu dokumentieren. Nicht standardisierte Versionen dieser Eigenschaften sind jedoch im `Screen`-Interface in Browsern verfügbar, die diese API nicht unterstützen. Siehe die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle dieser Seite für Details zur nicht standardisierten Unterstützung.

- [`Screen.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des verfügbaren Bildschirmbereichs repräsentiert.
- [`Screen.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs repräsentiert.
- [`Screen.left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) der gesamten Bildschirmfläche repräsentiert.
- [`Screen.top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) der gesamten Bildschirmfläche repräsentiert.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.lockOrientation`](/de/docs/Web/API/Screen/lockOrientation) {{Deprecated_Inline}}
  - : Sperrt die Bildschirmorientierung (funktioniert nur im Vollbildmodus oder für installierte Apps)
- [`Screen.unlockOrientation`](/de/docs/Web/API/Screen/unlockOrientation) {{Deprecated_Inline}}
  - : Entsperrt die Bildschirmorientierung (funktioniert nur im Vollbildmodus oder für installierte Apps)

## Ereignisse

- [`change`](/de/docs/Web/API/Screen/change_event) {{experimental_inline}} {{securecontext_inline}}
  - : Wird ausgelöst, wenn sich ein bestimmter Bildschirm in irgendeiner Weise ändert — Breite oder Höhe, verfügbare Breite oder Höhe, Farbtiefe oder Ausrichtung.
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich die Bildschirmorientierung ändert.

## Beispiele

```js
if (screen.colorDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
