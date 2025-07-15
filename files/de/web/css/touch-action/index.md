---
title: touch-action
slug: Web/CSS/touch-action
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`touch-action`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Bereich eines Elements von einem Benutzer über einen Touchscreen manipuliert werden kann (zum Beispiel durch Zoomfunktionen, die im Browser integriert sind).

Standardmäßig werden Scroll- und Pinch-Zoom-Gesten ausschließlich vom Browser behandelt. Eine Anwendung, die [Zeigerereignisse](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis, wenn der Browser beginnt, eine Touch-Geste zu behandeln. Indem Sie explizit angeben, welche Gesten vom Browser behandelt werden sollen, kann eine Anwendung ihr eigenes Verhalten in den [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- und [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Listenern für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch-Ereignisse](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Browserbehandlung von Gesten, indem sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, sollten jedoch auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor irgendwelche Ereignis-Listener aufgerufen wurden.

Wenn eine Geste begonnen wird, schneidet der Browser die `touch-action`-Werte des berührten Elements und seiner Vorfahren bis zu demjenigen, der die Geste implementiert (also das erste scrollbare übergeordnete Element), miteinander. Dies bedeutet, dass `touch-action` in der Praxis typischerweise nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten haben, ohne dass `touch-action` explizit bei Nachfahren dieses Elements angegeben werden muss.

> [!NOTE]
> Nachdem eine Geste begonnen hat, haben Änderungen an `touch-action` keinen Einfluss mehr auf das Verhalten der aktuellen Geste.

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

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right` und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Ermöglicht die Browserbehandlung aller Scroll- und Zoom-Gesten.
- `none`
  - : Deaktiviert die Browserbehandlung aller Scroll- und Zoom-Gesten.
- `pan-x`
  - : Ermöglicht einhändige horizontale Scroll-Gesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Ermöglicht einhändige vertikale Scroll-Gesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Ermöglicht Scroll- und Pinch-Zoom-Gesten, deaktiviert jedoch zusätzliche nicht-standardisierte Gesten wie Doppeltippen zum Zoomen. Das Deaktivieren des Doppeltippens zum Zoomen beseitigt die Notwendigkeit, dass Browser die Erzeugung von **klick**-Ereignissen verzögern, wenn der Benutzer den Bildschirm berührt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was aus Kompatibilitätsgründen selbst noch gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Ermöglicht einhändige Gesten, die mit dem Scrollen in der angegebenen Richtung beginnen. Sobald das Scrollen begonnen hat, kann die Richtung dennoch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche bewegt, und **pan-left** bedeutet, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right**" ungültig, da **"pan-x"** einfacher ist, aber **"pan-left pan-down"** ist gültig).
- `pinch-zoom`
  - : Ermöglicht mehrhändige Scroll- und Zoom-Gesten der Seite. Dies kann mit allen **pan-** Werten kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann die Bedienung der Zoom-Funktionen eines Browsers behindern. Dies verhindert, dass Personen mit Sehbehinderungen Seiteninhalte lesen und verstehen können.

- [MDN-Verständnis WCAG, Leitfaden 1.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren aller Gesten

Die häufigste Verwendung besteht darin, alle Gesten auf einem Element (und seinen nicht scrollbaren Nachfahren), das sein eigenes Zieh- und Zoomverhalten bietet – wie eine Karte oder Spielfläche – zu deaktivieren.

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
- [Zeigerereignisse](/de/docs/Web/API/Pointer_events)
- WebKit-Blog [Schnelleres Tippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Scroll-Geschwindigkeit standardmäßig erhöhen](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)
