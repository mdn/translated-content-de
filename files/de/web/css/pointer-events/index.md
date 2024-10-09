---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Pointer-Ereignissen werden kann.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

## Syntax

```css
/* Keyword values */
pointer-events: auto;
pointer-events: none;

/* Values used in SVGs */
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: bounding-box;
pointer-events: all;

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: revert-layer;
pointer-events: unset;
```

Die `pointer-events`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten aufgeführten Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich so, als ob die `pointer-events`-Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst wird niemals das [Ziel](/de/docs/Web/API/Event/target) von Pointer-Ereignissen. Sein Unterbaum könnte jedoch durch Setzen von `pointer-events` auf einen anderen Wert anvisierbar bleiben. In diesen Situationen lösen Pointer-Ereignisse Ereignislistener auf diesem Elternelement wie vorgesehen auf dem Weg zu oder von dem Nachkommen während der Ereignisfassung und der [Blasen](/de/docs/Web/API/Event/bubbles)-Phasen aus.

    > [!NOTE]
    > Die `pointerenter`- und `pointerleave`-Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder eines seiner Nachkommen bewegt wird. Auch wenn `pointer-events: none` auf das Elternelement gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem Elternelement ausgelöst, nachdem der Zeiger in einen Nachkommen hineingeführt oder aus ihm hinausgeführt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über der Innenseite (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über der Innenseite (d.h. 'fill') des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über entweder der Innenseite (d.h. 'fill') oder dem Umfang (d.h. 'stroke') des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn z.B. der Mauszeiger über der Innenseite (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über der Innenseite (d.h. 'fill') des Elements ist. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über dem Umfang (d.h. 'stroke') des Elements ist. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über dem {{Glossary("Bounding_box", "Umgrenzungsrahmen")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über der Innenseite (d.h. 'fill') oder dem Umfang (d.h. 'stroke') des Elements ist. Die Werte der `fill`, `stroke` und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte dieselben Eigenschaften wie für den Wert `visiblePainted`.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Pointer-Ereignissen ist, weist der Wert `none` das Pointer-Ereignis an, "durch" das Element zu gehen und stattdessen auf das zu zielen, was "unter" diesem Element liegt.

Beachten Sie, dass die Verhinderung, dass ein Element das Ziel von Pointer-Ereignissen wird, durch die Verwendung von `pointer-events` _nicht_ unbedingt bedeutet, dass Listener für Pointer-Ereignisse auf diesem Element _nicht_ oder _nicht_ ausgelöst werden. Wenn eines der Kinder des Elements `pointer-events` explizit so eingestellt hat, dass es _erlaubt_, dass dieses Kind das Ziel von Pointer-Ereignissen ist, dann werden alle Ereignisse, die auf dieses Kind abzielen, durch das Elternteil gehen, während es entlang der Elternkette reist, und Listener für Ereignisse auf dem Elternteil wie vorgesehen auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt ist, von weder dem Kind noch dem Elternteil erfasst (sie geht "durch" den Elternteil und zielt auf das, was darunter ist).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch die sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formaldefinition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Pointer-Ereignissen auf allen Bildern

Dieses Beispiel deaktiviert Pointer-Ereignisse (Klicken, Ziehen, Schweben usw.) auf allen Bildern.

```css
img {
  pointer-events: none;
}
```

### Deaktivieren von Pointer-Ereignissen auf einem einzelnen Link

Dieses Beispiel deaktiviert die Pointer-Ereignisse auf dem Link zu `http://example.com`.

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://example.com"]
{
  pointer-events: none;
}
```

#### Ergebnis

{{EmbedLiveSample("Disabling_pointer_events_on_a_single_link", "500", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das SVG-Attribut {{SVGAttr("pointer-events")}}
- Das SVG-Attribut {{SVGAttr("visibility")}}
- Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-API
- [WebKit Specs PointerEventsProperty](https://webkit.org/specs/PointerEventsProperty.html), erweitert für die Verwendung in (X)HTML-Inhalten
- {{cssxref("user-select")}} - steuert, ob der Benutzer Text auswählen kann
