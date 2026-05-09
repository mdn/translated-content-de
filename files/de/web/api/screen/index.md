---
title: Bildschirm
slug: Web/API/Screen
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM view API")}}

Das `Screen`-Interface repräsentiert einen Bildschirm, normalerweise den, auf dem das aktuelle Fenster gerendert wird, und kann über [`window.screen`](/de/docs/Web/API/Window/screen) abgerufen werden.

Beachten Sie, dass Browser bestimmen, welcher Bildschirm als aktuell gemeldet wird, indem sie erkennen, welcher Bildschirm das Zentrum des Browserfensters enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight)
  - : Gibt die Höhe des Bildschirms in Pixeln an, abzüglich permanenter oder semipermanenter Benutzeroberflächenelemente des Betriebssystems, wie z.B. der Taskleiste unter Windows.
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
  - : Gibt den horizontalen Platz in Pixeln zurück, der für das Fenster verfügbar ist.
- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth)
  - : Gibt die Farbtiefe des Bildschirms zurück.
- [`Screen.height`](/de/docs/Web/API/Screen/height)
  - : Gibt die Höhe des Bildschirms in Pixeln zurück.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt `true` zurück, wenn das Gerät des Benutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
  - : Gibt die [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Instanz zurück, die mit diesem Bildschirm verbunden ist.
- [`Screen.pixelDepth`](/de/docs/Web/API/Screen/pixelDepth)
  - : Ruft die Bit-Tiefe des Bildschirms ab.
- [`Screen.width`](/de/docs/Web/API/Screen/width)
  - : Gibt die Breite des Bildschirms zurück.
- [`Screen.mozEnabled`](/de/docs/Web/API/Screen/mozEnabled) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Durch Setzen auf false wird der Bildschirm des Geräts ausgeschaltet.
- [`Screen.mozBrightness`](/de/docs/Web/API/Screen/mozBrightness) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Steuert die Helligkeit des Bildschirms eines Geräts. Ein Wert zwischen 0 und 1.0 wird erwartet.

## Nicht-standardisierte Eigenschaften

Die folgenden Eigenschaften sind Teil der [Window Management API](/de/docs/Web/API/Window_Management_API) spezifiziert, die sie auf dem [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interface verfügbar macht; hier haben wir uns entschieden, sie zu dokumentieren. Nicht-standardisierte Versionen dieser Eigenschaften sind jedoch im `Screen`-Interface in Browsern verfügbar, die diese API nicht unterstützen. Details zur nicht-standardisierten Unterstützung finden Sie in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) auf dieser Seite.

- [`Screen.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des verfügbaren Bildschirmbereichs darstellt.
- [`Screen.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des verfügbaren Bildschirmbereichs darstellt.
- [`Screen.left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs darstellt.
- [`Screen.top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des gesamten Bildschirmbereichs darstellt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.lockOrientation`](/de/docs/Web/API/Screen/lockOrientation) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder für installierte Apps)
- [`Screen.unlockOrientation`](/de/docs/Web/API/Screen/unlockOrientation) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Entsperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder für installierte Apps)

## Ereignisse

- [`change`](/de/docs/Web/API/Screen/change_event) {{experimental_inline}} {{securecontext_inline}}
  - : Wird ausgelöst, wenn ein spezifischer Bildschirm auf irgendeine Weise verändert wird – Breite oder Höhe, verfügbare Breite oder Höhe, Farbtiefe oder Ausrichtung.
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich die Bildschirmausrichtung ändert.

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
