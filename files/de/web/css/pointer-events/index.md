---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element zum [Ziel](/de/docs/Web/API/Event/target) von Zeigereignissen werden kann.

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

Die `pointer-events`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich, als wäre die `pointer-events`-Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` dieselbe Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigereignissen. Sein Unterbaum könnte jedoch durch Festlegung eines anderen Werts für `pointer-events` weiterhin zielbar gemacht werden. In diesen Umständen lösen Zeigereignisse Ereignis-Listener auf diesem übergeordneten Element aus, wenn sie während der Ereigniserfassung und [Blasenbildung](/de/docs/Web/API/Event/bubbles) Phasen zu oder von dem Nachkommen gehen.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Selbst wenn `pointer-events: none` auf dem Elternteil festgelegt ist und nicht auf den Kindern, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in einen Nachkommen hinein oder aus einem heraus bewegt wird.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann das Ziel eines Zeigereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. wenn sich ein Mauszeiger über dem Inneren (d. h. 'fill') des Elements befindet und die Eigenschaft `fill` auf einen anderen Wert als `none` gesetzt ist, oder wenn sich ein Mauszeiger über dem Umfang (d. h. 'stroke') des Elements befindet und die Eigenschaft `stroke` auf einen Wert gesetzt ist, der nicht `none` ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. ein Mauszeiger sich über dem Inneren (d. h. dem 'fill') des Elements befindet. Der Wert der Eigenschaft `fill` beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. wenn sich der Mauszeiger über dem Umfang (d. h. dem 'stroke') des Elements befindet. Der Wert der Eigenschaft `stroke` beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigereignisses sein, wenn die Eigenschaft `visibility` auf `visible` gesetzt ist und z. B. der Mauszeiger entweder über dem Inneren (d. h. dem 'fill') oder dem Umfang (d. h. dem 'stroke') des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann das Ziel eines Zeigereignisses sein, wenn sich z. B. der Mauszeiger über dem Inneren (d. h. dem 'fill') des Elements befindet und die `fill`-Eigenschaft nicht auf `none` gesetzt ist oder wenn sich der Mauszeiger über dem Umfang (d. h. dem 'stroke') des Elements befindet und die `stroke`-Eigenschaft nicht auf `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigereignisses sein, wenn sich der Zeiger über dem Inneren (d. h. dem 'fill') des Elements befindet. Die Werte der Eigenschaften `fill` und `visibility` beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigereignisses sein, wenn sich der Zeiger über dem Umfang (d. h. dem 'stroke') des Elements befindet. Die Werte der Eigenschaften `stroke` und `visibility` beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur dann das Ziel eines Zeigereignisses sein, wenn sich der Zeiger über der {{Glossary("Bounding_box", "begrenzenden Box")}} des Elements befindet.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigereignisses sein, wenn sich der Zeiger über dem Inneren (d. h. dem 'fill') oder dem Umfang (d. h. dem 'stroke') des Elements befindet. Die Werte der Eigenschaften `fill`, `stroke` und `visibility` beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte dieselben Eigenschaften wie der Wert `visiblePainted`.

Zusätzlich zu der Angabe, dass das Element kein Ziel von Zeigereignissen ist, weist der Wert `none` das Zeigereignis an, "durch" das Element zu gehen und stattdessen das zu zielende, was "unter" diesem Element liegt.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigereignissen wird, indem `pointer-events` verwendet wird, _nicht_ notwendigerweise bedeutet, dass Zeigereignis-Listener an diesem Element _nicht_ ausgelöst werden können oder _nicht_ ausgelöst werden. Wenn eines der Kinder des Elements `pointer-events` explizit auf _zulassen_ gesetzt hat, dass dieses Kind das Ziel von Zeigereignissen sein darf, dann werden alle Ereignisse, die dieses Kind zielen, durch das Elternteil laufen, während sie entlang der Elternkette gehen, und Listener am Elternteil auslösen, wie es angebracht ist. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt wird, weder vom Kind noch vom Elternteil erfasst (es wird "durch" das Elternteil gehen und das darunter liegende Ziel).

Elemente mit `pointer-events: none` erhalten weiterhin den Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zeigereignisse für alle Bilder deaktivieren

Dieses Beispiel deaktiviert Zeigereignisse (Klicken, Ziehen, Schweben usw.) für alle Bilder.

```css
img {
  pointer-events: none;
}
```

### Zeigereignisse für einen einzelnen Link deaktivieren

Dieses Beispiel deaktiviert Zeigereignisse für den Link zu `http://example.com`.

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
