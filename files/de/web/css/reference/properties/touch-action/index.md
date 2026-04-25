---
title: "`touch-action` CSS property"
short-title: touch-action
slug: Web/CSS/Reference/Properties/touch-action
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`touch-action`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt fest, wie der Bereich eines Elements von einem Benutzer mit Touchscreen manipulierbar ist (z.B. durch im Browser integrierte Zoom-Funktionen).

Standardmäßig werden Scroll- und Pinch-Gesten ausschließlich vom Browser verarbeitet. Eine Anwendung, die [Zeigerereignisse](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis, wenn der Browser beginnt, eine Touch-Geste zu verarbeiten. Indem explizit festgelegt wird, welche Gesten vom Browser verarbeitet werden sollen, kann eine Anwendung in den [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- und [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Listenern eigenes Verhalten für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch-Ereignisse](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Verarbeitung von Gesten durch den Browser, indem sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, sollten jedoch auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor irgendwelche Ereignis-Listener aufgerufen wurden.

Wenn eine Geste beginnt, schneidet der Browser die `touch-action`-Werte des berührten Elements und seiner Vorfahren bis zu dem Element, das die Geste implementiert, d.h. dem ersten enthaltenden scrollbaren Element, ab. Dies bedeutet, dass `touch-action` in der Praxis typischerweise nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten haben, ohne dass `touch-action` explizit auf die Nachfolger dieser Elemente angewendet werden muss.

> [!NOTE]
> Nach Beginn einer Geste haben Änderungen an `touch-action` keinen Einfluss mehr auf das Verhalten der aktuellen Geste.

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

Die `touch-action`-Eigenschaft kann entweder wie folgt angegeben werden:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation) _oder_
- eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right` und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Ermöglicht die Verarbeitung aller Scroll- und Zoom-Gesten durch den Browser.
- `none`
  - : Deaktiviert die Verarbeitung aller Scroll- und Zoom-Gesten durch den Browser.
- `pan-x`
  - : Aktiviert Ein-Finger-horizontale-Scroll-Gesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Aktiviert Ein-Finger-vertikale-Scroll-Gesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Aktiviert Scroll- und Pinch-Zoom-Gesten, deaktiviert jedoch zusätzliche nicht standardisierte Gesten wie Doppeltippen zum Zoomen. Das Deaktivieren des Doppeltippens zum Zoomen beseitigt die Notwendigkeit für Browser, die Erzeugung von **click**-Events zu verzögern, wenn der Benutzer den Bildschirm antippt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was aus Kompatibilitätsgründen selbst weiterhin gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Aktiviert Ein-Finger-Gesten, die mit dem Scrollen in die angegebene(n) Richtung(en) beginnen. Sobald das Scrollen begonnen hat, kann die Richtung dennoch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, es sei denn, es gibt eine einfachere Darstellung (zum Beispiel ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Aktiviert Mehrfinger-Scroll- und Zoom-Gesten der Seite. Dies kann mit allen **pan-** Werten kombiniert werden.

## Barrierefreiheit

Eine Erklärung von `touch-action: none;` kann die Bedienung der Zoom-Funktionen eines Browsers behindern. Dadurch können Personen mit Sehbehinderungen möglicherweise den Inhalt der Seite nicht lesen und verstehen.

- [MDN Verständnis von WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren aller Gesten

Die häufigste Verwendung ist das Deaktivieren aller Gesten auf einem Element (und dessen nicht scrollbaren Nachfolgern), das sein eigenes Zieh- und Zoomverhalten bereitstellt – wie eine Karte oder Spielfläche.

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
- [Zeiger-Ereignisse](/de/docs/Web/API/Pointer_events)
- WebKit Blog [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Making touch scrolling fast by default](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)
