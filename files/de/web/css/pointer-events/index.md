---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

Die Eigenschaft `pointer-events` wird als ein einzelnes Schlüsselwort gewählt, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich so, als ob die `pointer-events` Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Sein Unterbaum könnte jedoch ansprechbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Fällen werden Zeigerereignisse die Ereignis-Listener auf diesem Elternelement wie üblich während der Erfassungsphase des Ereignisses und der [Blasenphas](/de/docs/Web/API/Event/bubbles) ansprechen.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder eines seiner Nachkommen hinein- oder herausbewegt wird. Selbst wenn `pointer-events: none` auf das Elternelement gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem Elternelement ausgelöst, nachdem der Zeiger in oder aus einem Nachkommen bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. wenn ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Rand (d.h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. ein Mauszeiger über dem Inneren (d.h. fill) des Elements ist. Der Wert der `fill` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. wenn der Mauszeiger über dem Rand (d.h. stroke) des Elements ist. Der Wert der `stroke` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. der Mauszeiger entweder über dem Inneren (d.h. fill) oder dem Rand (d.h. stroke) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z. B. der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Rand (d.h. 'stroke') des Elements ist und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) des Elements ist. Die Werte der `fill` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Rand (d.h. stroke) des Elements ist. Die Werte der `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "Begrenzungsbox")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) oder dem Rand (d.h. stroke) des Elements ist. Die Werte der `fill`, `stroke`, und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht spezifiziert ist, gelten dieselben Merkmale des `visiblePainted` Werts für SVG-Inhalte.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das zu "targetieren", was sich "unter" diesem Element befindet.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen ist, durch die Verwendung von `pointer-events` _nicht_ notwendigerweise bedeutet, dass Zeigerereignislistener auf diesem Element _nicht_ ausgelöst werden können oder _nicht_ ausgelöst werden. Wenn bei einem der Kinder des Elements `pointer-events` explizit so eingestellt ist, dass dieses Kind das Ziel von Zeigerereignissen sein kann, dann werden alle Ereignisse, die auf dieses Kind abzielen, durch das Elternteil hindurchgehen, während das Ereignis entlang der Elternkette weitergeht, und entsprechend Listener auf dem Elternelement auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternelement bedeckt ist, aber nicht vom Kindelement, weder vom Kind noch vom Elternelement erfasst (sie wird "durch" das Elternteil hindurchgehen und das darunterliegende Element anvisieren).

Elemente mit `pointer-events: none` erhalten trotzdem Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Zeigerereignissen für alle Bilder

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Schweben, etc.) für alle Bilder.

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
