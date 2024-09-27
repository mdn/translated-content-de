---
title: touch-action
slug: Web/CSS/touch-action
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`touch-action`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Bereich eines Elements von einem Benutzer mit Touchscreen manipuliert werden kann (zum Beispiel durch Zoomfunktionen, die im Browser integriert sind).

Standardmäßig werden Scroll- und Pinch-Gesten ausschließlich vom Browser verarbeitet. Eine Anwendung, die {{domxref("Pointer_events", "Pointer Events", "", 1)}} verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis, wenn der Browser beginnt, eine Touch-Geste zu verarbeiten. Indem explizit angegeben wird, welche Gesten vom Browser gehandhabt werden sollen, kann eine Anwendung ihr eigenes Verhalten in [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Listeners für die verbleibenden Gesten bereitstellen. Anwendungen, die {{domxref("Touch_events", "Touch Events", "", 1)}} verwenden, deaktivieren die Browserverarbeitung von Gesten durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), sollten jedoch auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor irgendwelche Ereignis-Listener aufgerufen wurden.

Wenn eine Geste begonnen wird, schneidet der Browser die `touch-action` Werte des berührten Elements und seiner Vorfahren bis zu dem Element, das die Geste ausführt (in anderen Worten, das erste enthaltende Scroll-Element), ab. Dies bedeutet, dass `touch-action` in der Praxis normalerweise nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten haben, ohne dass `touch-action` explizit auf Nachkommen dieses Elements angegeben werden muss.

> [!NOTE]
> Nachdem eine Geste begonnen hat, haben Änderungen an `touch-action` keinen Einfluss auf das Verhalten der aktuellen Geste.

## Syntax

```css
/* Keyword values */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* Global values */
touch-action: inherit;
touch-action: initial;
touch-action: revert;
touch-action: revert-layer;
touch-action: unset;
```

Die `touch-action` Eigenschaft kann entweder folgendermaßen angegeben werden:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right` und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Aktiviert die Browserverarbeitung aller Scroll- und Zoomgesten.
- `none`
  - : Deaktiviert die Browserverarbeitung aller Scroll- und Zoomgesten.
- `pan-x`
  - : Aktiviert einhändige horizontale Scroll-Gesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Aktiviert einhändige vertikale Scroll-Gesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Aktiviert Scroll- und Pinch-Zoom-Gesten, deaktiviert jedoch zusätzliche nicht standardisierte Gesten wie Doppeltippen zum Zoomen. Die Deaktivierung von Doppeltippen zum Zoomen beseitigt die Notwendigkeit für Browser, bei Antippen des Bildschirms die Erzeugung von **Klick**-Ereignissen zu verzögern. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (das aus Kompatibilitätsgründen selbst noch gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Aktiviert einhändig Gesten, die durch Scrollen in die angegebene(n) Richtung(en) beginnen. Einmal begonnenes Scrollen kann die Richtung noch umkehren. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (z.B. ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Aktiviert mehrfingrige Scroll- und Zoom-Gesten auf der Seite. Dies kann mit allen **pan-** Werten kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann die Bedienung der Zoomfunktionen eines Browsers verhindern. Dies kann Personen mit Sehschwäche daran hindern, die Inhalte der Seite zu lesen und zu verstehen.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung aller Gesten

Die häufigste Verwendung besteht darin, alle Gesten auf einem Element (und dessen nicht scrollbaren Nachfahren), das sein eigenes Drag- und Zoom-Verhalten bereitstellt - wie zum Beispiel eine Karte oder eine Spielfläche, zu deaktivieren.

#### HTML

```html
<div id="map"></div>
```

#### CSS

```css
#map {
  height: 150vh;
  width: 70vw;
  background: linear-gradient(blue, green);
  touch-action: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling_all_gestures')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("pointer-events","pointer-events")}}
- [Pointer Events](/de/docs/Web/API/Pointer_events)
- WebKit Blog [Reaktionsschnelleres Tippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Standardmäßig schnelles Touch-Scrolling](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
