---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

{{InteractiveExample("CSS Demo: pointer-events")}}

```css interactive-example-choice
pointer-events: auto;
```

```css interactive-example-choice
pointer-events: none;
```

```css interactive-example-choice
pointer-events: stroke; /* SVG-only */
```

```css interactive-example-choice
pointer-events: fill; /* SVG-only */
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element">
    <p>
      <a href="#">example link</a>
    </p>
    <p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <a xlink:href="#">
          <circle
            cx="50"
            cy="50"
            fill="#3E6E84"
            r="40"
            stroke="#ffb500"
            stroke-width="5"></circle>
          <text fill="white" text-anchor="middle" x="50" y="55">SVG</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-weight: bold;
}

#example-element a {
  color: #009e5f;
}

#example-element svg {
  width: 10em;
  height: 10em;
}
```

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

Die `pointer-events` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich, als wäre die `pointer-events` Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` den gleichen Effekt.
- `none`
  - : Das Element selbst wird niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Sein Unterbaum könnte jedoch anvisierbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Fällen lösen Zeigerereignisse Ereignis-Listener auf diesem übergeordneten Element aus, während sie während der Ereignisaufnahme- und [Blasen](/de/docs/Web/API/Event/bubbles)phasen zu oder von den Nachkommen gelangen.

    > [!NOTE]
    > Die `pointerenter` und `pointerleave` Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Auch wenn `pointer-events: none` auf das übergeordnete Element gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem übergeordneten Element ausgelöst, nachdem der Zeiger in einen Nachkommen eingefügt oder herausbewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Umriss (d.h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und wenn z.B. ein Mauszeiger über dem Inneren (d.h. fill) des Elements ist. Der Wert der `fill` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über dem Umriss (d.h. stroke) des Elements ist. Der Wert der `stroke` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über dem Inneren (d.h. fill) oder dem Umriss (d.h. stroke) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Umriss (d.h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) des Elements ist. Die Werte der `fill` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Umriss (d.h. stroke) des Elements ist. Die Werte der `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger sich über der {{Glossary("Bounding_box", "Begrenzungsrahmen")}} des Elements befindet.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) oder dem Umriss (d.h. stroke) des Elements ist. Die Werte der `fill`, `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte die gleichen Eigenschaften wie beim `visiblePainted` Wert.

Zusätzlich zu der Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen auf das zu zielen, was "unter" diesem Element liegt.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen wird, durch Verwendung von `pointer-events` _nicht_ unbedingt bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder werden. Wenn eines der Kinder des Elements `pointer-events` ausdrücklich so gesetzt hat, dass dieses Kind das Ziel von Zeigerereignissen werden kann, dann werden alle Ereignisse, die auf dieses Kind zielen, den Parent durchlaufen, während das Ereignis entlang der Parent-Kette fortschreitet, und Listener auf dem Parent auslösen, wie es angemessen ist. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Parent, aber nicht vom Kind bedeckt ist, weder vom Kind noch vom Parent erfasst (sie wird "durch" das Parent gehen und was darunter ist, anvisieren).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch sequentielle Tastaturnavigation über die <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zeigerereignisse bei allen Bildern deaktivieren

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Hovering usw.) bei allen Bildern.

```css
img {
  pointer-events: none;
}
```

### Zeigerereignisse bei einem einzelnen Link deaktivieren

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
- SVG {{SVGAttr("pointer-events")}} Attribut
- SVG {{SVGAttr("visibility")}} Attribut
- [`PointerEvent`](/de/docs/Web/API/PointerEvent)
