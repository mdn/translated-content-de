---
title: touch-action
slug: Web/CSS/touch-action
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`touch-action`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Bereich eines Elements von einem Benutzer mit Touchscreen manipuliert werden kann (zum Beispiel durch Zoom-Funktionen, die im Browser eingebaut sind).

Standardmäßig werden Schwenk- (Scroll-) und Pinch-Gesten ausschließlich vom Browser verarbeitet. Eine Anwendung, die {{domxref("Pointer_events", "Pointer Events", "", 1)}} verwendet, erhält ein {{domxref("Element/pointercancel_event", "pointercancel")}} Ereignis, wenn der Browser beginnt, eine Touch-Geste zu verarbeiten. Indem explizit angegeben wird, welche Gesten vom Browser gehandhabt werden sollen, kann eine Anwendung ihr eigenes Verhalten in {{domxref("Element/pointermove_event", "pointermove")}} und {{domxref("Element/pointerup_event", "pointerup")}} Listenern für die verbleibenden Gesten bereitstellen. Anwendungen, die {{domxref("Touch_events", "Touch Events", "", 1)}} verwenden, deaktivieren die Browser-Verarbeitung von Gesten, indem sie {{domxref("Event.preventDefault", "preventDefault()")}} aufrufen, sollten jedoch auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor Event-Listener aufgerufen wurden.

Wenn eine Geste gestartet wird, schneidet der Browser die `touch-action` Werte des berührten Elements und seiner Vorfahren, bis zu demjenigen, der die Geste implementiert (mit anderen Worten, das erste scollende Element), ab. Dies bedeutet, dass in der Praxis `touch-action` typischerweise nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten haben, ohne `touch-action` explizit auf die Nachkommen dieses Elements anwenden zu müssen.

> [!NOTE]
> Nachdem eine Geste begonnen hat, haben Änderungen an `touch-action` keinen Einfluss mehr auf das Verhalten der aktuellen Geste.

## Syntax

```css
/* Schlüsselwortwerte */
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

/* Globale Werte */
touch-action: inherit;
touch-action: initial;
touch-action: revert;
touch-action: revert-layer;
touch-action: unset;
```

Die `touch-action` Eigenschaft kann entweder wie folgt angegeben werden:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right`, und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Ermöglicht die Verarbeitung aller Schwenk- und Zoom-Gesten durch den Browser.
- `none`
  - : Deaktiviert die Verarbeitung aller Schwenk- und Zoom-Gesten durch den Browser.
- `pan-x`
  - : Ermöglicht horizontale Ein-Finger-Schwenkgesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Ermöglicht vertikale Ein-Finger-Schwenkgesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Ermöglicht Schwenk- und Pinch-Zoom-Gesten, deaktiviert jedoch zusätzliche nicht standardmäßige Gesten wie Doppeltipp-Zoom. Das Deaktivieren von Doppeltipp-Zoom entfernt die Notwendigkeit für Browser, die Generierung von **Klick**-Ereignissen zu verzögern, wenn der Benutzer auf den Bildschirm tippt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was für die Kompatibilität selbst immer noch gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Ermöglicht Ein-Finger-Gesten, die mit einem Scrollen in die angegebene(n) Richtung(en) beginnen. Sobald das Scrollen begonnen hat, kann die Richtung trotzdem geändert werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger auf der Bildschirmoberfläche nach unten zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Ermöglicht Multi-Finger-Schwenk- und Zoombewegungen der Seite. Dies kann mit allen **pan-** Werten kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` kann die Nutzung der Zoomfunktionen eines Browsers verhindern. Dies wird Personen mit Sehbehinderung daran hindern, Seiteninhalte lesen und verstehen zu können.

- [MDN Understanding WCAG, Erklärung zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren aller Gesten

Der häufigste Gebrauch ist das Deaktivieren aller Gesten auf einem Element (und seinen nicht scrollbaren Nachfahren), das sein eigenes Dragging- und Zoomverhalten bereitstellt – wie eine Karte oder eine Spielfläche.

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
- WebKit-Blog [Mehr reaktionsschnelles Antippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Touch-Scrolling standardmäßig schnell machen](https://developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
