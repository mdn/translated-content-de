---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`pointer-events`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich so, wie wenn die `pointer-events`-Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Allerdings könnte sein Unterbaum durch die Einstellung von `pointer-events` auf einen anderen Wert weiterhin anvisierbar bleiben. In diesen Fällen werden Zeigerereignisse die Ereignis-Listener auf diesem übergeordneten Element gemäß auf ihrem Weg zu oder von dem Nachkommen während der Erfassung und [Bubble](/de/docs/Web/API/Event/bubbles)-Phasen auslösen.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder eines seiner Nachkommen bewegt wird. Selbst wenn `pointer-events: none` auf das übergeordnete Element gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem übergeordneten Element ausgelöst, nachdem der Zeiger in einen Nachkommen hinein- oder herausbewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über dem Inneren (d.h. dem 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Umfang (d.h. dem 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und wenn z.B. ein Mauszeiger über dem Inneren (d.h. Fill) des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über dem Umfang (d.h. Stroke) des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über dem Inneren (d.h. Fill) oder dem Umfang (d.h. Stroke) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. Fill) des Elements ist. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Umfang (d.h. Stroke) des Elements ist. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "Begrenzungsbox")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. Fill) oder dem Umfang (d.h. Stroke) des Elements ist. Die Werte der `fill`, `stroke` und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht festgelegt ist, gelten für SVG-Inhalte die gleichen Eigenschaften wie beim Wert `visiblePainted`.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und das, was sich "darunter" befindet, stattdessen zu targetieren.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen wird, indem `pointer-events` verwendet wird, _nicht_ zwangsläufig bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ oder _nicht ausgelöst_ werden können. Wenn eines der Kinder des Elements `pointer-events` explizit so eingestellt hat, dass das Kind das Ziel von Zeigerereignissen sein darf, dann werden alle Ereignisse, die auf dieses Kind abzielen, das Elternteil passieren, während das Ereignis die übergeordnete Kette durchläuft, und die Ereignis-Listener auf dem Elternteil entsprechend auslösen. Natürlich wird jegliche Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind überdeckt wird, weder vom Kind noch vom Elternteil abgefangen (es wird "durch" das Elternteil hindurchgehen und das darunterliegende Ziel erfassen).

Elemente mit `pointer-events: none` erhalten immer noch den Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Zeigerereignissen auf allen Bildern

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Hovern usw.) auf allen Bildern.

```css
img {
  pointer-events: none;
}
```

### Deaktivieren von Zeigerereignissen auf einem einzelnen Link

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

- {{cssxref("user-select")}}
- SVG-Attribut {{SVGAttr("pointer-events")}}
- SVG-Attribut {{SVGAttr("visibility")}}
- [`PointerEvent`](/de/docs/Web/API/PointerEvent)
