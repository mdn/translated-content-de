---
title: touch-action
slug: Web/CSS/touch-action
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`touch-action`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Bereich eines Elements von einem Touchscreen-Nutzer manipuliert werden kann (zum Beispiel durch in den Browser integrierte Zoomfunktionen).

Standardmäßig werden Scroll- und Pinch-Gesten ausschließlich vom Browser behandelt. Eine Anwendung, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwendet, erhält ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis, wenn der Browser mit der Verarbeitung einer Touch-Geste beginnt. Durch das explizite Festlegen, welche Gesten vom Browser gehandhabt werden sollen, kann eine Anwendung ihr eigenes Verhalten in [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Listenern für die verbleibenden Gesten bereitstellen. Anwendungen, die [Touch Events](/de/docs/Web/API/Touch_events) verwenden, deaktivieren die Verarbeitung von Gesten durch den Browser, indem sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, sollten aber auch `touch-action` verwenden, um sicherzustellen, dass der Browser die Absicht der Anwendung kennt, bevor Listener aufgerufen wurden.

Wenn eine Geste begonnen wird, schneidet der Browser die `touch-action`-Werte des berührten Elements und seiner Vorfahren bis zu dem Element, das die Geste implementiert (also das erste übergeordnete scrollende Element) ab. Das bedeutet, dass `touch-action` in der Praxis in der Regel nur auf oberste Elemente angewendet wird, die ein benutzerdefiniertes Verhalten aufweisen, ohne dass `touch-action` explizit auf Nachkommen dieses Elements angegeben werden muss.

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

Die `touch-action` Eigenschaft kann wie folgt spezifiziert werden:

- Eines der Schlüsselwörter `auto`, `none`, [`manipulation`](#manipulation), _oder_
- Eines der Schlüsselwörter `pan-x`, `pan-left`, `pan-right`, und/oder eines der Schlüsselwörter `pan-y`, `pan-up`, `pan-down`, plus optional das Schlüsselwort `pinch-zoom`.

### Werte

- `auto`
  - : Aktivieren Sie die Behandlung aller Scroll- und Zoom-Gesten durch den Browser.
- `none`
  - : Deaktivieren Sie die Behandlung aller Scroll- und Zoom-Gesten durch den Browser.
- `pan-x`
  - : Aktivieren Sie einfingerige horizontale Scroll-Gesten. Kann mit **pan-y**, **pan-up**, **pan-down** und/oder **pinch-zoom** kombiniert werden.
- `pan-y`
  - : Aktivieren Sie einfingerige vertikale Scroll-Gesten. Kann mit **pan-x**, **pan-left**, **pan-right** und/oder **pinch-zoom** kombiniert werden.
- `manipulation`
  - : Aktivieren Sie Scroll- und Pinch-Zoom-Gesten, deaktivieren Sie jedoch zusätzliche nicht standardisierte Gesten wie Doppeltipp zum Zoomen. Das Deaktivieren von Doppeltipp zum Zoomen beseitigt die Notwendigkeit für Browser, die Erzeugung von **click**-Ereignissen zu verzögern, wenn der Nutzer auf den Bildschirm tippt. Dies ist ein Alias für "**pan-x pan-y pinch-zoom**" (was aus Kompatibilitätsgründen weiterhin gültig ist).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Aktivieren Sie einfingerige Gesten, die beim Scrollen in die angegebene(n) Richtung(en) beginnen. Sobald das Scrollen begonnen hat, kann die Richtung noch umgekehrt werden. Beachten Sie, dass Scrollen "nach oben" (**pan-up**) bedeutet, dass der Benutzer seinen Finger nach unten auf der Bildschirmoberfläche zieht, und ebenso bedeutet **pan-left**, dass der Benutzer seinen Finger nach rechts zieht. Mehrere Richtungen können kombiniert werden, außer wenn es eine einfachere Darstellung gibt (zum Beispiel ist **"pan-left pan-right**" ungültig, da "**pan-x**" einfacher ist, aber "**pan-left pan-down**" ist gültig).
- `pinch-zoom`
  - : Aktivieren Sie mehrfingriges Scrollen und Zoomen der Seite. Dies kann mit jedem der **pan-** Werte kombiniert werden.

## Barrierefreiheit

Eine Deklaration von `touch-action: none;` könnte die Zoom-Möglichkeiten eines Browsers behindern. Dies verhindert, dass Menschen mit Sehschwäche in der Lage sind, den Seiteninhalt zu lesen und zu verstehen.

- [MDN-Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen von Erfolgskriterium 1.4.4 | Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren aller Gesten

Die häufigste Verwendung besteht darin, alle Gesten auf einem Element (und seinen nicht scrollbaren Nachkommen) zu deaktivieren, das sein eigenes Zieh- und Zoomverhalten bietet – wie eine Karte oder eine Spieleoberfläche.

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
- WebKit Blog [Mehr reaktionsschnelles Tippen auf iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Standardmäßig schnelles Touch-Scrolling](/developer.chrome.com/blog/scrolling-intervention/)
- [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
