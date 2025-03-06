---
title: touch-action
slug: Web/CSS/touch-action
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`touch-action`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Bereich eines Elements von einem Benutzer mit Touchscreen manipuliert werden kann (zum Beispiel durch im Browser integrierte Zoomfunktionen).

Standardmäßig werden Wisch- (Scrolling) und Kneifgesten ausschließlich vom Browser verarbeitet. Eine Anwendung, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis, wenn der Browser beginnt, eine Touch-Geste zu verarbeiten. Durch das explizite Festlegen, welche Gesten vom Browser verarbeitet werden sollen, kann eine Anwendung ihr eigenes Verhalten in [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Listenern für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch Events](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Gestehandhabung des Browsers durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), sollten aber auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung erkennt, bevor irgendwelche Ereignislistener aufgerufen wurden.

Wenn eine Geste gestartet wird, schneidet der Browser die `touch-action` Werte des berührten Elements und seiner Vorfahren, bis zu dem Element, das die Geste implementiert (mit anderen Worten, das erste enthaltende Scrolling-Element), ab. Dies bedeutet, dass `touch-action` in der Praxis typischerweise nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten haben, ohne dass `touch-action` explizit auf die Nachfahren dieses Elements angewendet werden muss.

> [!NOTE]
> Nach dem Start einer Geste haben Änderungen an `touch-action` keinen Einfluss auf das Verhalten der aktuellen Geste.

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

Die `touch-action` Eigenschaft kann entweder als:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right`, und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom` angegeben werden.

### Werte

- `auto`
  - : Aktivieren Sie die Browser-Verarbeitung aller Wisch- und Zoomgesten.
- `none`
  - : Deaktivieren Sie die Browser-Verarbeitung aller Wisch- und Zoomgesten.
- `pan-x`
  - : Aktivieren Sie horizontale Ein-Finger-Wischgesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Aktivieren Sie vertikale Ein-Finger-Wischgesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Aktivieren Sie Wisch- und Pinch-Zoom-Gesten, deaktivieren Sie jedoch zusätzliche nicht standardisierte Gesten wie Doppeltippen zum Zoomen. Das Deaktivieren des Doppeltippens zum Zoomen beseitigt die Notwendigkeit für Browser, die Generierung von **click**-Ereignissen zu verzögern, wenn der Benutzer auf den Bildschirm tippt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was aus Kompatibilitätsgründen selbst noch gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Aktivieren Sie Ein-Finger-Gesten, die durch Scrollen in die angegebenen Richtungen beginnen. Sobald das Scrollen begonnen hat, kann die Richtung dennoch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger auf der Bildschirmoberfläche nach unten zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right"** ungültig, da **"pan-x"** einfacher ist, aber **"pan-left pan-down"** ist gültig).
- `pinch-zoom`
  - : Ermöglicht das Panning und Zoomen der Seite mit mehreren Fingern. Dies kann mit allen **pan-** Werten kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann das Bedienen der Zoomfunktionen eines Browsers verhindern. Dadurch wird es für Menschen mit Sehschwäche schwierig, den Seiteninhalt zu lesen und zu verstehen.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung aller Gesten

Die häufigste Verwendung besteht darin, alle Gesten auf einem Element (und dessen nicht scrollbaren Nachfahren) zu deaktivieren, das sein eigenes Dragging- und Zoomverhalten bereitstellt – wie eine Karte oder eine Spielfläche.

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
- WebKit Blog [Mehr responsives Tippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Touch-Scrolling standardmäßig schnell machen](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
