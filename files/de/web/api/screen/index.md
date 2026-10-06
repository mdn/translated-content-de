---
title: Screen
slug: Web/API/Screen
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("CSSOM view API")}}

Die `Screen`-Schnittstelle repräsentiert einen Bildschirm, in der Regel den, auf dem das aktuelle Fenster dargestellt wird. Sie wird über [`window.screen`](/de/docs/Web/API/Window/screen) abgerufen.

Browser bestimmen den als aktuell gemeldeten Bildschirm anhand des Bildschirms, auf dem sich die Mitte des Browserfensters befindet.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des Bildschirms in Pixeln an, abzüglich dauerhaft oder über längere Zeit angezeigter Bedienelemente des Betriebssystems, etwa der Taskleiste unter Windows.
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) {{ReadOnlyInline}}
  - : Gibt den horizontalen Platz in Pixeln zurück, der für das Fenster verfügbar ist.
- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth) {{ReadOnlyInline}}
  - : Gibt die Farbtiefe des Bildschirms zurück.
- [`Screen.height`](/de/docs/Web/API/Screen/height) {{ReadOnlyInline}}
  - : Gibt die Höhe des Bildschirms in Pixeln zurück.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{ReadOnlyInline}} {{experimental_inline}} {{securecontext_inline}}
  - : Gibt `true` zurück, wenn das Gerät der nutzenden Person über mehrere Bildschirme verfügt, andernfalls `false`.
- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation) {{ReadOnlyInline}}
  - : Gibt die diesem Bildschirm zugeordnete [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Instanz zurück.
- [`Screen.pixelDepth`](/de/docs/Web/API/Screen/pixelDepth) {{ReadOnlyInline}}
  - : Gibt die Bittiefe des Bildschirms zurück.
- [`Screen.width`](/de/docs/Web/API/Screen/width) {{ReadOnlyInline}}
  - : Gibt die Breite des Bildschirms zurück.
- [`Screen.mozEnabled`](/de/docs/Web/API/Screen/mozEnabled) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolescher Wert. Wird er auf false gesetzt, schaltet sich der Bildschirm des Geräts aus.
- [`Screen.mozBrightness`](/de/docs/Web/API/Screen/mozBrightness) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Steuert die Helligkeit des Bildschirms eines Geräts. Erwartet wird eine Gleitkommazahl zwischen 0 und 1.0.

## Nicht standardisierte Eigenschaften

Die folgenden Eigenschaften sind Teil der [Window Management API](/de/docs/Web/API/Window_Management_API). Diese stellt sie über die [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle bereit; deshalb sind sie dort dokumentiert. In Browsern, die diese API nicht unterstützen, sind jedoch nicht standardisierte Versionen dieser Eigenschaften über die `Screen`-Schnittstelle verfügbar. Einzelheiten zu dieser nicht standardisierten Unterstützung finden Sie in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) auf dieser Seite.

- [`Screen.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des verfügbaren Bildschirmbereichs angibt.
- [`Screen.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des verfügbaren Bildschirmbereichs angibt.
- [`Screen.left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs angibt.
- [`Screen.top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des gesamten Bildschirmbereichs angibt.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Screen.lockOrientation`](/de/docs/Web/API/Screen/lockOrientation) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder bei installierten Apps).
- [`Screen.unlockOrientation`](/de/docs/Web/API/Screen/unlockOrientation) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Entsperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder bei installierten Apps).

## Ereignisse

- [`change`](/de/docs/Web/API/Screen/change_event) {{experimental_inline}} {{securecontext_inline}}
  - : Wird für einen bestimmten Bildschirm ausgelöst, wenn sich dessen Breite oder Höhe, verfügbare Breite oder Höhe, Farbtiefe oder Ausrichtung ändert.
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
