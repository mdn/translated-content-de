---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 6efdd8d3bd443a8c55e8a5b66614ec28b7642aca
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events` Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Element verhält sich so, als ob die `pointer-events` Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Sein Teilbaum kann jedoch durch Setzen von `pointer-events` auf einen anderen Wert weiterhin als Ziel ansprechbar bleiben. In diesen Fällen werden Zeigerereignisse entsprechende Ereignislistener auf diesem übergeordneten Element auf ihrem Weg zu oder von dem Nachfahren während der Ereigniserfassungs- und [Blasen](/de/docs/Web/API/Event/bubbles) Phasen auslösen.

    > [!NOTE]
    > Die `pointerenter` und `pointerleave` Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachfahren hineinbewegt wird. Selbst wenn `pointer-events: none` auf das übergeordnete Element angewendet wird und nicht auf die Kinder, werden die Ereignisse auf dem übergeordneten Element ausgelöst, nachdem der Zeiger in einen oder aus einem Nachfahren bewegt wird.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z. B. ein Mauszeiger über dem Inneren (d. h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen Wert ungleich `none` gesetzt ist oder wenn ein Mauszeiger über dem Umfang (d. h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen Wert ungleich `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z. B. ein Mauszeiger über dem Inneren (d. h. Fill) des Elements ist. Der Wert der `fill` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z. B. der Mauszeiger über dem Umfang (d. h. Stroke) des Elements ist. Der Wert der `stroke` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z. B. der Mauszeiger über entweder dem Inneren (d.h. Fill) oder dem Umfang (d.h. Stroke) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z. B. der Mauszeiger über dem Inneren (d. h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen Wert ungleich `none` gesetzt ist oder wenn der Mauszeiger über dem Umfang (d. h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen Wert ungleich `none` gesetzt ist. Der Wert der `visibility` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d. h. Fill) des Elements ist. Die Werte der `fill` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Umfang (d. h. Stroke) des Elements ist. Die Werte der `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über der [Bounding-Box](/de/docs/Glossary/Bounding_box) des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d. h. Fill) oder dem Umfang (d. h. Stroke) des Elements ist. Die Werte der `fill`, `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben wird, gelten die gleichen Merkmale des `visiblePainted` Werts für SVG-Inhalte.

Zusätzlich dazu, dass sie angibt, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das, was "unter" diesem Element ist, zu zielen.

Beachten Sie, dass das Verhindern, dass ein Element durch `pointer-events` das Ziel von Zeigerereignissen wird, _nicht_ unbedingt bedeutet, dass Zeiger-Ereignislistener auf diesem Element _nicht_ ausgelöst werden können oder _nicht_ ausgelöst werden. Wenn eines der Kinder des Elements `pointer-events` explizit so gesetzt hat, dass dieses Kind Ziel von Zeigerereignissen sein darf, werden alle Ereignisse, die auf dieses Kind zielen, über die Elternkette auf dem Elternteil ausgelöst und Ereignislistener auf dem Elternteil wie angemessen auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt wird, weder vom Kind noch vom Elternteil erfasst (sie geht "durch" das Elternteil und richtet sich auf das, was darunter liegt).

Elemente mit `pointer-events: none` können weiterhin durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste fokussiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung von Zeigerereignissen bei allen Bildern

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Überfahren usw.) bei allen Bildern.

```css
img {
  pointer-events: none;
}
```

### Deaktivierung von Zeigerereignissen auf einem einzelnen Link

Dieses Beispiel deaktiviert Zeigerereignisse auf dem Link zu `http://example.com`.

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
- Die [`PointerEvent`](/de/docs/Web/API/PointerEvent) API
- [WebKit Specs PointerEventsProperty](https://webkit.org/specs/PointerEventsProperty.html) erweitert für die Verwendung in (X)HTML-Inhalten
- {{cssxref("user-select")}} - steuert, ob der Benutzer Text auswählen kann
