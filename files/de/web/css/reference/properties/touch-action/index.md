---
title: touch-action
slug: Web/CSS/Reference/Properties/touch-action
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`touch-action`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Bereich eines Elements von einem Touchscreen-Benutzer manipuliert werden kann (zum Beispiel durch Einzoomen, das im Browser eingebaut ist).

Standardmäßig werden Scroll- und Zoomgesten ausschließlich vom Browser verarbeitet. Eine Anwendung, die [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis, wenn der Browser beginnt, eine Touch-Geste zu verarbeiten. Durch die explizite Angabe, welche Gesten vom Browser behandelt werden sollen, kann eine Anwendung ihr eigenes Verhalten in den [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- und [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignislistenern für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch-Ereignisse](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Verarbeitung von Gesten durch den Browser, indem sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, sollten aber auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung versteht, bevor eventuelle Ereignislistener aufgerufen werden.

Wenn eine Geste gestartet wird, schneidet der Browser die `touch-action`-Werte des berührten Elements und seiner Vorfahren bis zu demjenigen, das die Geste implementiert (mit anderen Worten, das erste enthaltende Scroll-Element), ab. Das bedeutet, dass `touch-action` in der Praxis typischerweise nur auf oberste Elemente angewandt wird, die ein eigenes Verhalten haben, ohne dass `touch-action` explizit auf den Nachkommen dieses Elements angegeben werden muss.

> [!NOTE]
> Nach dem Beginn einer Geste haben Änderungen an `touch-action` keinen Einfluss auf das Verhalten der aktuellen Geste.

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

Die `touch-action`-Eigenschaft kann entweder festgelegt werden als:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right` und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Ermöglicht die Verarbeitung aller Scroll- und Zoomgesten durch den Browser.
- `none`
  - : Deaktiviert die Verarbeitung aller Scroll- und Zoomgesten durch den Browser.
- `pan-x`
  - : Ermöglicht horizontale Scrollgesten mit einem Finger. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Ermöglicht vertikale Scrollgesten mit einem Finger. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Ermöglicht Scroll- und Pinch-Zoom-Gesten, deaktiviert aber zusätzliche nicht standardisierte Gesten wie Doppeltippen zum Zoomen. Durch das Deaktivieren von Doppeltippen zum Zoomen wird verhindert, dass Browser die Erzeugung von **Klick**-Ereignissen verzögern, wenn der Benutzer den Bildschirm berührt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was für die Kompatibilität nach wie vor gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Erlauben Ein-Finger-Gesten, die durch Scrollen in die angegebenen Richtungen beginnen. Sobald das Scrollen begonnen hat, kann die Richtung dennoch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Erlaubt Mehrfinger-Scrollen und -Zoomen der Seite. Dies kann mit jedem der **pan-** Werte kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann verhindern, dass die Zoom-Funktion des Browsers genutzt wird. Dies verhindert, dass Personen mit Sehschwäche in der Lage sind, die Seiteninhalte zu lesen und zu verstehen.

- [MDN Verstehen von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTAND-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren aller Gesten

Die häufigste Verwendung ist das Deaktivieren aller Gesten auf einem Element (und seinen nicht scrollbaren Nachkommen), das über ein eigenes Dragging- und Zoom-Verhalten verfügt – wie eine Karte oder Spielfläche.

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
- WebKit Blog [Mehr reaktionsschnelles Antippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Schnelles Scrollen per Touch standardmäßig machen](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
