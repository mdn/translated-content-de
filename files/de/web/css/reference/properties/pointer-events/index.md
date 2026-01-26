---
title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: ff4dc3d43e814614df60ecdb7376b59698660ac2
---

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen (wenn überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events` Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich so, als wäre die `pointer-events` Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`
  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Sein Unterbaum könnte jedoch anvisierbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. Unter diesen Umständen werden Zeigerereignisse beim Ereignis-Capture und in den [Bubble-](/de/docs/Web/API/Event/bubbles) Phasen entsprechende Ereignis-Listener an diesem Elternelement auslösen, auf dem Weg zu oder von den Nachkommen.

    > [!NOTE]
    > Die `pointerenter` und `pointerleave` Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Selbst wenn `pointer-events: none` auf dem Elternteil gesetzt ist und nicht auf den Kindern, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in einen Nachkommen hinein- oder aus ihm herausbewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B., wenn sich ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements befindet und die `fill`-Eigenschaft auf einen Wert ungleich `none` gesetzt ist, oder wenn sich ein Mauszeiger über dem Umriss (d.h. 'stroke') des Elements befindet und die `stroke`-Eigenschaft auf einen Wert ungleich `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und wenn z.B., ein Mauszeiger über dem Inneren (d.h. fill) des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B., wenn der Mauszeiger über dem Umriss (d.h. stroke) des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B., der Mauszeiger über entweder dem Inneren (d.h. fill) oder dem Umriss (d.h. stroke) des Elements ist. Die Werte der `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn z.B., der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen Wert ungleich `none` gesetzt ist, oder wenn der Mauszeiger über dem Umriss (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen Wert ungleich `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) des Elements ist. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Umriss (d.h. stroke) des Elements ist. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "Umgrenzungsbox")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) oder dem Umriss (d.h. stroke) des Elements ist. Die Werte der `fill`, `stroke`, und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten die gleichen Eigenschaften des `visiblePainted`-Wertes für SVG-Inhalte.

Zusätzlich dazu, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das Ziel zu sein, das "unterhalb" dieses Elements liegt.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen durch Verwendung von `pointer-events` wird, _nicht_ zwangsläufig bedeutet, dass Zeigerereignis-Listener an diesem Element _nicht_ oder _nicht_ ausgelöst werden können. Wenn eines der Kindelemente explizit `pointer-events` auf einen Wert gesetzt hat, der es erlaubt, dass dieses Kind das Ziel von Zeigerereignissen ist, dann werden alle Ereignisse, die dieses Kind anvisieren, während das Ereignis die Elternkette entlangläuft, an den Elternteil weitergereicht und geeignete Ereignis-Listener am Elternteil auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt wird, weder vom Kind noch vom Elternteil erfasst (sie wird "durch" den Elternteil gehen und das Ziel sein, das darunter liegt).

Elemente mit `pointer-events: none` erhalten weiterhin Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Zeigerereignissen auf allen Bildern

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Überfahren usw.) auf allen Bildern.

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
- SVG {{SVGAttr("pointer-events")}} Attribut
- SVG {{SVGAttr("visibility")}} Attribut
- [`PointerEvent`](/de/docs/Web/API/PointerEvent)
