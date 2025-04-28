---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events` Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Element verhält sich, als ob die `pointer-events` Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` denselben Effekt.
- `none`

  - : Das Element allein ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Allerdings könnte sein Unterbaum weiterhin zielbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Fällen werden Zeigerereignisse Ereignislistener am übergeordneten Element auslösen, während der Ereignisausbreitungs- und [Bubble](/de/docs/Web/API/Event/bubbles) Phasen.

    > [!NOTE]
    > Die `pointerenter` und `pointerleave` Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder eines seiner Nachfahren bewegt wird. Selbst wenn `pointer-events: none` auf dem Elternteil gesetzt ist und nicht auf den Kindern, werden die Ereignisse am Elternteil ausgelöst, nachdem der Zeiger in einen Nachfahren hinein oder heraus bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn sich ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements befindet und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn sich ein Mauszeiger über dem Umfang (d.h. 'stroke') des Elements befindet und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger sich über dem Inneren (d.h. fill) des Elements befindet. Der Wert der `fill` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn sich der Mauszeiger über dem Umfang (d.h. stroke) des Elements befindet. Der Wert der `stroke` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger sich entweder über dem Inneren (d.h. fill) oder dem Umfang (d.h. stroke) des Elements befindet. Die Werte der `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger sich über dem Inneren (d.h. 'fill') des Elements befindet und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger sich über dem Umfang (d.h. 'stroke') des Elements befindet und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn sich der Zeiger über dem Inneren (d.h. fill) des Elements befindet. Die Werte der `fill` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn sich der Zeiger über dem Umfang (d.h. stroke) des Elements befindet. Die Werte der `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn sich der Zeiger über der {{Glossary("Bounding_box", "Bounding Box")}} des Elements befindet.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn sich der Zeiger über dem Inneren (d.h. fill) oder dem Umfang (d.h. stroke) des Elements befindet. Die Werte der `fill`, `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten die gleichen Eigenschaften des `visiblePainted` Wertes für SVG-Inhalte.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das, was "darunter" liegt, zu zielen.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen durch die Verwendung von `pointer-events` wird, _nicht_ notwendigerweise bedeutet, dass Zeiger-Ereignislistener an diesem Element _nicht_ ausgelöst werden können oder werden. Wenn eines der Kinder des Elements `pointer-events` explizit so gesetzt hat, dass dieses Kind das Ziel von Zeigerereignissen sein darf, werden alle Ereignisse, die auf dieses Kind zielen, durch den Elternteil passieren, wenn das Ereignis entlang der Elternkette fortschreitet, und die Ereignislistener am Elternteil entsprechend auslösen. Natürlich wird eine Zeigeraktivität an einem Punkt auf dem Bildschirm, der durch den Elternteil, aber nicht durch das Kind abgedeckt wird, weder vom Kind noch vom Elternteil erfasst werden (sie wird "durch" den Elternteil gehen und das, was darunter ist, zielen).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Zeigerereignissen für alle Bilder

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Überfahren, usw.) für alle Bilder.

```css
img {
  pointer-events: none;
}
```

### Deaktivieren von Zeigerereignissen für einen einzelnen Link

Dieses Beispiel deaktiviert Zeigerereignisse für den Link zu `http://example.com`.

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
