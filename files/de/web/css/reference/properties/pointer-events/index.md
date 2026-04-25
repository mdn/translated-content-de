---
title: "`pointer-events` CSS property"
short-title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element zum [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die Eigenschaft `pointer-events` wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich, als ob die `pointer-events`-Eigenschaft nicht angegeben wäre. In SVG-Inhalten hat dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`
  - : Das Element allein ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Allerdings könnte sein Unterbaum weiterhin anvisiert werden, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Umständen lösen Zeigerereignisse entsprechende Ereignislistener beim übergeordneten Element aus, während sie auf dem Weg zu oder von einem Nachkommen während der Ereignisaufnahme- und [Blubber](/de/docs/Web/API/Event/bubbles)-Phasen sind.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Selbst wenn `pointer-events: none` auf den Elternteil gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in oder aus einem Nachfahren bewegt wird.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über den Rand (d.h. 'stroke') des Elements fährt und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über das Innere (d.h. fill) des Elements fährt. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über den Rand (d.h. stroke) des Elements fährt. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über das Innere (d.h. fill) oder den Rand (d.h. stroke) des Elements fährt. Die Werte der `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über den Rand (d.h. 'stroke') des Elements fährt und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über das Innere (d.h. fill) des Elements fährt. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über den Rand (d.h. stroke) des Elements fährt. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über die {{Glossary("Bounding_box", "Umrahmung")}} des Elements fährt.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über das Innere (d.h. fill) oder den Rand (d.h. stroke) des Elements fährt. Die Werte der `fill`, `stroke` und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht spezifiziert ist, gelten die gleichen Eigenschaften wie der Wert `visiblePainted` für SVG-Inhalte.

Zusätzlich dazu, dass das Element nicht Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen alles anzuzielen, was "unter" diesem Element liegt.

Beachten Sie, dass das Verhindern, dass ein Element Ziel von Zeigerereignissen ist, indem `pointer-events` verwendet wird, _nicht_ unbedingt bedeutet, dass Zeigerereignislistener auf diesem Element _nicht_ ausgelöst werden _können_ oder _werden_. Wenn eines der Kinder des Elements `pointer-events` explizit auf _erlauben_ setzt, dass dieses Kind Ziel von Zeigerereignissen wird, dann werden alle Ereignisse, die dieses Kind anvisieren, den Elternteil durchlaufen, während das Ereignis die Elternkette entlangläuft, und entsprechende Ereignislistener auf dem Elternteil auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der durch den Elternteil, aber nicht durch das Kind abgedeckt wird, weder vom Kind noch vom Elternteil abgefangen (sie wird "durch" den Elternteil gehen und alles anvisieren, was darunterliegt).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

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
- SVG-Attribut {{SVGAttr("pointer-events")}}
- SVG-Attribut {{SVGAttr("visibility")}}
- [`PointerEvent`](/de/docs/Web/API/PointerEvent)
