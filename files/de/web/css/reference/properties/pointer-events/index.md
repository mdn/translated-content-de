---
title: "`pointer-events` CSS property"
short-title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: b9c07e549a6e66272c589a254ebcd5a8c91f37a5
---

Die **`pointer-events`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events`-Eigenschaft wird als ein Schlüsselwort aus der untenstehenden Werteliste angegeben.

### Werte

- `auto`
  - : Das Element verhält sich, als ob die `pointer-events`-Eigenschaft nicht angegeben wäre. Bei SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` den gleichen Effekt.
- `none`
  - : Das Element ist im Allgemeinen nicht das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen, mit Ausnahme von `pointerenter`- und `pointerleave`-Ereignissen, die an dem Element oder seinen Nachkommen ausgelöst werden. Beachten Sie, dass Zeigerereignisse, die auf Nachkommen abzielen (die `pointer-events` nicht auf `none` gesetzt haben), dennoch Ereignislistener bei diesem übergeordneten Element während der Ereignisaufnahme und [Blasen](/de/docs/Web/API/Event/bubbles)-Phasen auslösen.

    > [!NOTE]
    > Die `pointerenter`- und `pointerleave`-Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Selbst wenn `pointer-events: none` auf das Elternteil gesetzt ist und nicht auf die Kinder, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in einen Nachkommen hinein oder aus ihm heraus bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Rahmen (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über dem Inneren (d.h. Füllung) des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über dem Rahmen (d.h. Strich) des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über dem Inneren (d.h. Füllung) oder dem Rahmen (d.h. Strich) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Rahmen (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. Füllung) des Elements ist. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Rahmen (d.h. Strich) des Elements ist. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über der {{Glossary("Bounding_box", "begrenzenden Box")}} des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. Füllung) oder dem Rahmen (d.h. Strich) des Elements ist. Die Werte der `fill`-, `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten dieselben Eigenschaften des `visiblePainted`-Wertes für SVG-Inhalte.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das zu Ziel zu nehmen, was "unter" diesem Element liegt.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen ist, durch die Verwendung von `pointer-events` _nicht_ unbedingt bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder _werden_. Wenn eines der Kinder des Elements `pointer-events` explizit so eingestellt hat, dass das Kind das Ziel von Zeigerereignissen sein darf, dann werden alle Ereignisse, die auf das Kind abzielen, während der Reise entlang der übergeordneten Kette durch das Elternteil gehen und Listener auf dem Elternteil wie vorgesehen auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind abgedeckt wird, weder vom Kind noch vom Elternteil erfasst (sie wird "durch" das Elternteil gehen und das Ziel darunter erreichen).

Elemente mit `pointer-events: none` erhalten dennoch den Fokus durch sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

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

Dieses Beispiel deaktiviert Zeigerereignisse bei dem Link zu `http://example.com`.

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
