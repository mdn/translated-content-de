---
title: Screen
slug: Web/API/Screen
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das `Screen`-Interface repräsentiert einen Bildschirm, normalerweise den, auf dem das aktuelle Fenster gerendert wird, und wird mit [`window.screen`](/de/docs/Web/API/Window/screen) abgerufen.

Beachten Sie, dass Browser bestimmen, welcher Bildschirm als aktuell gemeldet wird, indem sie erkennen, welcher Bildschirm das Zentrum des Browserfensters enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight)
  - : Gibt die Höhe des Bildschirms in Pixeln an, abzüglich permanenter oder semipermanenter Benutzerschnittstellenmerkmale, die vom Betriebssystem angezeigt werden, wie die Taskleiste in Windows.
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
  - : Gibt die Menge des horizontalen Raumes in Pixeln zurück, der dem Fenster zur Verfügung steht.
- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth)
  - : Gibt die Farbtiefe des Bildschirms zurück.
- [`Screen.height`](/de/docs/Web/API/Screen/height)
  - : Gibt die Höhe des Bildschirms in Pixeln zurück.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{experimental_inline}} {{securecontext_inline}}
  - : Gibt `true` zurück, wenn das Gerät des Benutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
  - : Gibt die [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Instanz zurück, die mit diesem Bildschirm assoziiert ist.
- [`Screen.pixelDepth`](/de/docs/Web/API/Screen/pixelDepth)
  - : Ermittelt die Bittiefe des Bildschirms.
- [`Screen.width`](/de/docs/Web/API/Screen/width)
  - : Gibt die Breite des Bildschirms zurück.
- [`Screen.mozEnabled`](/de/docs/Web/API/Screen/mozEnabled) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Wenn auf false gesetzt, wird der Bildschirm des Geräts ausgeschaltet.
- [`Screen.mozBrightness`](/de/docs/Web/API/Screen/mozBrightness) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Steuert die Helligkeit des Bildschirms eines Geräts. Ein Gleitkommawert zwischen 0 und 1,0 wird erwartet.

## Nicht-standardisierte Eigenschaften

Die folgenden Eigenschaften sind Teil der [Window Management API](/de/docs/Web/API/Window_Management_API), was sie auf dem [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interface verfügbar macht; dies ist der Ort, an dem wir sie dokumentiert haben. Nicht-standardisierte Versionen dieser Eigenschaften stehen jedoch auf dem `Screen`-Interface in Browsern zur Verfügung, die diese API nicht unterstützen. Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) dieser Seite für Details zur nicht-standardisierten Unterstützung.

- [`Screen.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des verfügbaren Bildschirmbereichs repräsentiert.
- [`Screen.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs repräsentiert.
- [`Screen.left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des gesamten Bildschirmbereichs repräsentiert.
- [`Screen.top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs repräsentiert.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Screen.lockOrientation`](/de/docs/Web/API/Screen/lockOrientation) {{Deprecated_Inline}}
  - : Sperrt die Bildschirmorientierung (funktioniert nur im Vollbildmodus oder für installierte Apps)
- [`Screen.unlockOrientation`](/de/docs/Web/API/Screen/unlockOrientation) {{Deprecated_Inline}}
  - : Entsperrt die Bildschirmorientierung (funktioniert nur im Vollbildmodus oder für installierte Apps)

## Ereignisse

- [`change`](/de/docs/Web/API/Screen/change_event) {{experimental_inline}} {{securecontext_inline}}
  - : Wird bei einem bestimmten Bildschirm ausgelöst, wenn dieser in irgendeiner Weise geändert wird – Breite oder Höhe, verfügbare Breite oder Höhe, Farbtiefe oder Orientierung.
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
