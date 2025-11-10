---
title: touch-action
slug: Web/CSS/Reference/Properties/touch-action
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`touch-action`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Bereich eines Elements von einem Touchscreen-Benutzer manipuliert werden kann (zum Beispiel durch Zoom-Features, die im Browser integriert sind).

Standardmäßig werden Scroll- (Panning) und Pinch-Gesten ausschließlich vom Browser behandelt. Eine Anwendung, die [Pointer events](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis, wenn der Browser beginnt, eine Touch-Geste zu behandeln. Indem ausdrücklich angegeben wird, welche Gesten vom Browser behandelt werden sollen, kann eine Anwendung ihr eigenes Verhalten in [`pointermove`](/de/docs/Web/API/Element/pointermove_event)- und [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Listenern für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch events](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Browserbehandlung von Gesten, indem sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, sollten aber auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor irgendwelche Ereignis-Listener aufgerufen wurden.

Wenn eine Geste gestartet wird, schneidet der Browser die `touch-action`-Werte des berührten Elements und seiner Vorfahren mit demjenigen, der die Geste implementiert (also das erste enthaltende Scroll-Element), ab. Das bedeutet, dass `touch-action` in der Praxis typischerweise nur auf oberste Elemente angewendet wird, die ein eigenes Verhalten aufweisen, ohne dass `touch-action` explizit auf Nachfahren dieses Elements angegeben werden muss.

> [!NOTE]
> Nachdem eine Geste gestartet wurde, werden Änderungen an `touch-action` keine Auswirkungen auf das Verhalten der aktuellen Geste haben.

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
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right`, und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Ermöglicht dem Browser die Behandlung aller Scroll- und Zoom-Gesten.
- `none`
  - : Deaktiviert die Behandlung aller Scroll- und Zoom-Gesten durch den Browser.
- `pan-x`
  - : Ermöglicht einhändige horizontale Scroll-Gesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Ermöglicht einhändige vertikale Scroll-Gesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Ermöglicht Scroll- und Pinch-Zoom-Gesten, deaktiviert jedoch zusätzliche, nicht standardisierte Gesten wie Doppeltippen zum Zoomen. Das Deaktivieren des Doppeltippens zum Zoomen beseitigt die Notwendigkeit für Browser, die Erzeugung von **click**-Ereignissen zu verzögern, wenn der Benutzer den Bildschirm berührt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was aus Kompatibilitätsgründen immer noch gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Ermöglicht einhändige Gesten, die mit dem Scrollen in die angegebene(n) Richtung(en) beginnen. Sobald das Scrollen begonnen hat, kann die Richtung dennoch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Aktiviert das Mehrfinger-Scrollen und Zoomen der Seite. Dies kann mit jeder der **pan-**-Werte kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann die Bedienung der Zoom-Funktionen eines Browsers behindern. Dies wird Menschen mit Sehbehinderungen davon abhalten, den Seiteninhalt zu lesen und zu verstehen.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung aller Gesten

Der häufigste Anwendungsfall besteht darin, alle Gesten auf einem Element (und seinen nicht scrollbaren Nachfahren), das sein eigenes Zieh- und Zoomverhalten bietet – wie eine Karte oder eine Spielfläche – zu deaktivieren.

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
- WebKit-Blog [Mehr reaktionsschnelles Tippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Entwickler-Blog [Standardmäßig schnelles Scrollen durch Berührung](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)
