---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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
      <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

Die `pointer-events` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich so, als ob die `pointer-events` Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element allein ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Sein Unterbaum kann jedoch durch das Setzen einer anderen `pointer-events` Wertbelegung anvisierbar bleiben. In diesen Fällen werden Zeigerereignisse beim Durchlaufen der Phasen Erfassung und [Blase](/de/docs/Web/API/Event/bubbles) die entsprechenden Ereignis-Listener auf diesem Elternelement auslösen, sowohl auf dem Hinweg zu einem Nachkommen als auch auf dem Rückweg.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigergerät in ein Element oder eines seiner Nachkommen bewegt wird. Auch wenn `pointer-events: none` auf das Elternelement gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem Elternelement ausgelöst, nachdem der Zeiger in einen Nachkommen hinein oder aus ihm heraus bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. sich ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements befindet und die Eigenschaft `fill` auf einen anderen Wert als `none` gesetzt ist, oder wenn sich ein Mauszeiger über der Umrandung (d.h. 'stroke') des Elements befindet und die Eigenschaft `stroke` auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. sich ein Mauszeiger über dem Inneren (d.h. fill) des Elements befindet. Der Wert der Eigenschaft `fill` beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. sich der Mauszeiger über der Umrandung (d.h. stroke) des Elements befindet. Der Wert der Eigenschaft `stroke` beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über dem Inneren (d.h. fill) oder der Umrandung (d.h. stroke) des Elements liegt. Die Werte der Eigenschaften `fill` und `stroke` beeinflussen nicht die Ereignisverarbeitung.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements liegt und die Eigenschaft `fill` auf einen anderen Wert als `none` gesetzt ist oder wenn der Mauszeiger über der Umrandung (d.h. 'stroke') des Elements liegt und die Eigenschaft `stroke` auf einen anderen Wert als `none` gesetzt ist. Der Wert der Eigenschaft `visibility` beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) des Elements liegt. Die Werte der Eigenschaften `fill` und `visibility` beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über der Umrandung (d.h. stroke) des Elements liegt. Die Werte der Eigenschaften `stroke` und `visibility` beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "Umrandungsbox")}} des Elements liegt.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) oder der Umrandung (d.h. stroke) des Elements liegt. Die Werte der Eigenschaften `fill`, `stroke` und `visibility` beeinflussen nicht die Ereignisverarbeitung.

## Beschreibung

Wenn diese Eigenschaft nicht spezifiziert ist, gelten für SVG-Inhalte die gleichen Merkmale wie der Wert `visiblePainted`.

Zusätzlich dazu, dass das Element nicht Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das zu landen, was "darunter" ist.

Beachten Sie, dass das Verhindern, dass ein Element Ziel von Zeigerereignissen wird, durch die Verwendung von `pointer-events` _nicht_ notwendigerweise bedeutet, dass die Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder _nicht_ ausgelöst werden. Wenn einem der Kinder des Elements `pointer-events` explizit erlaubt wird, dass es das Ziel von Zeigerereignissen sein kann, dann werden alle das Kind anvisierenden Ereignisse den Elternelementpunkt durchlaufen, während das Ereignis entlang der Elternkette weiterreist, und dabei die entsprechenden Ereignis-Listener auf dem Elternelement auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der durch das Elternteil, aber nicht durch das Kind bedeckt wird, weder vom Kind noch vom Elternelement erfasst (es wird "durch" das Elternelement gehen und das darunter anvisieren).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch sequentielle Tastaturnavigation mithilfe der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung von Zeigerereignissen bei allen Bildern

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Schweben usw.) bei allen Bildern.

```css
img {
  pointer-events: none;
}
```

### Deaktivierung von Zeigerereignissen bei einem einzelnen Link

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
