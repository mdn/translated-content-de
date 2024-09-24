---
title: Bildschirm
slug: Web/API/Screen
l10n:
  sourceCommit: b4739fbae6832960058f513073b23b77244ddeef
---

{{APIRef("CSSOM")}}

Das `Screen`-Interface repräsentiert einen Bildschirm, normalerweise den, auf dem das aktuelle Fenster gerendert wird, und wird über {{DOMxRef("window.screen")}} abgerufen.

Beachten Sie, dass Browser bestimmen, welcher Bildschirm als aktuell gemeldet wird, indem sie erkennen, welcher Bildschirm das Zentrum des Browserfensters hat.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("EventTarget")}}._

- {{DOMxRef("Screen.availHeight")}}
  - : Gibt die Höhe des Bildschirms in Pixeln an, abzüglich dauerhafter oder halbdauerhafter Benutzeroberflächenelemente, die vom Betriebssystem angezeigt werden, wie z. B. die Taskleiste unter Windows.
- {{DOMxRef("Screen.availWidth")}}
  - : Gibt den verfügbaren horizontalen Platz in Pixeln für das Fenster zurück.
- {{DOMxRef("Screen.colorDepth")}}
  - : Gibt die Farbtiefe des Bildschirms zurück.
- {{DOMxRef("Screen.height")}}
  - : Gibt die Höhe des Bildschirms in Pixeln zurück.
- {{domxref("Screen.isExtended")}} {{experimental_inline}} {{securecontext_inline}}
  - : Gibt `true` zurück, wenn das Gerät des Benutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- {{DOMxRef("Screen.orientation")}}
  - : Gibt die {{DOMxRef("ScreenOrientation")}}-Instanz zurück, die mit diesem Bildschirm verknüpft ist.
- {{DOMxRef("Screen.pixelDepth")}}
  - : Ermittelt die Bittiefe des Bildschirms.
- {{DOMxRef("Screen.width")}}
  - : Gibt die Breite des Bildschirms zurück.
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Wird auf false gesetzt, schaltet den Bildschirm des Geräts aus.
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Steuert die Helligkeit des Bildschirms eines Geräts. Ein Wert zwischen 0 und 1.0 wird erwartet.

## Nicht-standardisierte Eigenschaften

Die folgenden Eigenschaften sind Teil der [Window Management API](/de/docs/Web/API/Window_Management_API), was sie auf dem {{domxref("ScreenDetailed")}}-Interface verfügbar macht; hier haben wir uns entschieden, sie zu dokumentieren. Allerdings sind nicht-standardisierte Versionen dieser Eigenschaften auf dem `Screen`-Interface in Browsern verfügbar, die diese API nicht unterstützen. Siehe die Tabelle "Browser-Kompatibilität" auf dieser Seite für Details zur nicht-standardisierten Unterstützung.

- {{domxref("ScreenDetailed.availLeft", "Screen.availLeft")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des verfügbaren Bildschirmbereichs repräsentiert.
- {{domxref("ScreenDetailed.availTop", "Screen.availTop")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des verfügbaren Bildschirmbereichs repräsentiert.
- {{domxref("ScreenDetailed.left", "Screen.left")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs repräsentiert.
- {{domxref("ScreenDetailed.top", "Screen.top")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des gesamten Bildschirmbereichs repräsentiert.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten {{domxref("EventTarget")}}._

- {{DOMxRef("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : Sperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder für installierte Apps)
- {{DOMxRef("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : Entsperrt die Bildschirmausrichtung (funktioniert nur im Vollbildmodus oder für installierte Apps)

## Ereignisse

- {{domxref("Screen.change_event", "change")}} {{experimental_inline}} {{securecontext_inline}}
  - : Wird ausgelöst, wenn sich ein Bildschirm auf irgendeine Weise ändert - Breite oder Höhe, verfügbare Breite oder Höhe, Farbtiefe oder Ausrichtung.
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
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
