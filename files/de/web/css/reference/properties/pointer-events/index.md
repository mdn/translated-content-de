---
title: "`pointer-events` CSS property"
short-title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: 54363b174e87f0d2af789266d78eda0e9934bdbd
---

Die **`pointer-events`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Pointer-Ereignissen werden kann.

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

Die `pointer-events`-Eigenschaft wird als ein einziges Schlüsselwort aus der untenstehenden Liste festgelegt.

### Werte

- `auto`
  - : Das Element verhält sich, als wäre die `pointer-events`-Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`
  - : Das Element selbst ist generell nicht das [Ziel](/de/docs/Web/API/Event/target) von Pointer-Ereignissen. Dennoch könnte sein Unterbaum weiterhin anvisierbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Fällen lösen Pointer-Ereignisse die Event-Listener auf diesem übergeordneten Element aus, wenn es während der Ereignis-Erfassung und der [Bubble](/de/docs/Web/API/Event/bubbles)-Phasen zu oder von den Nachkommen geht.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen hineinbewegt wird. Selbst wenn `pointer-events: none` auf dem Elternteil und nicht auf den Kindern gesetzt ist, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in einen Nachkommen hinein oder hinaus bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und zum Beispiel, wenn ein Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist oder wenn ein Mauszeiger über den Rand (d.h. 'stroke') des Elements fährt und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und zum Beispiel, wenn ein Mauszeiger über das Innere (d.h. fill) des Elements fährt. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und zum Beispiel, wenn der Mauszeiger über den Rand (d.h. stroke) des Elements fährt. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann Ziel eines Pointer-Ereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und zum Beispiel der Mauszeiger entweder über das Innere (d.h. fill) oder den Rand (d.h. stroke) des Elements fährt. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn zum Beispiel der Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist oder wenn der Mauszeiger über den Rand (d.h. 'stroke') des Elements fährt und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über das Innere (d.h. fill) des Elements fährt. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über den Rand (d.h. stroke) des Elements fährt. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "begrenzenden Box")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Pointer-Ereignisses sein, wenn der Zeiger über das Innere (d.h. fill) oder den Rand (d.h. stroke) des Elements fährt. Die Werte der `fill`-, `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte dieselben Eigenschaften wie beim Wert `visiblePainted`.

Zusätzlich zur Angabe, dass das Element nicht Ziel von Pointer-Ereignissen ist, weist der Wert `none` das Pointer-Ereignis an, "durch" das Element zu gehen und stattdessen das darunter liegende Element zu treffen.

Beachten Sie, dass das Verhindern, dass ein Element Ziel von Pointer-Ereignissen ist, durch die Verwendung von `pointer-events` _nicht_ unbedingt bedeutet, dass Event-Listener für Pointer-Ereignisse an diesem Element _nicht_ ausgelöst werden können oder werden. Wenn eines der Kinder des Elements `pointer-events` explizit auf _erlaubt_ gesetzt hat, um Ziel von Pointer-Ereignissen zu sein, dann werden alle Ereignisse, die auf dieses Kind abzielen, den Elternknoten passieren, während das Ereignis entlang der Elternkette reist, und Event-Listener am Elternteil auslösen, wie es angemessen ist. Natürlich wird jegliche Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt ist, weder vom Kind noch vom Elternteil erfasst (sie wird "durch" den Elternteil gehen und das darunter liegende Element anvisieren).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus über die sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Pointer-Ereignissen für alle Bilder

Dieses Beispiel deaktiviert Pointer-Ereignisse (Klicken, Ziehen, Überfahren usw.) für alle Bilder.

```css
img {
  pointer-events: none;
}
```

### Deaktivieren von Pointer-Ereignissen für einen einzelnen Link

Dieses Beispiel deaktiviert Pointer-Ereignisse für den Link zu `http://example.com`.

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://example.com"] {
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
