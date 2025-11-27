---
title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`pointer-events`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, unter welchen Umständen (falls überhaupt) ein grafisches Element zum [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

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

Die `pointer-events`-Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Element verhält sich, als wäre die `pointer-events`-Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`
  - : Das Element an sich ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Das Teilbaum kann jedoch durch Setzen von `pointer-events` auf einen anderen Wert verfolgbar gehalten werden. In diesen Fällen lösen Zeigerereignisse die Ereignis-Listener an diesem Elternelement entsprechend aus, wenn sie während der Erfassungs- und [Blasen-](/de/docs/Web/API/Event/bubbles) Phasen des Ereignisses zu oder von dem Nachkommen reisen.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder eines seiner Nachkommen hinein- oder herausbewegt wird. Daher werden auch dann, wenn `pointer-events: none` am Elternelement gesetzt ist und nicht an den Nachkommen, die Ereignisse auf dem Elternelement nach dem Ein- oder Ausfahren des Zeigers in einen Nachkommen ausgelöst.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur dann Ziel eines Zeigerereignisses werden, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über dem Inneren (d.h. „Füllung“) des Elements und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist oder wenn ein Mauszeiger über der Umrandung (d.h. „Strich“) des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses werden, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über dem Inneren (d.h. Füllung) des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses werden, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über der Umrandung (d.h. Strich) des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann Ziel eines Zeigerereignisses werden, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über dem Inneren (d.h. Füllung) oder der Umrandung (d.h. Strich) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Zeigerereignisses werden, wenn z.B. der Mauszeiger über dem Inneren (d.h. „Füllung“) des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist oder wenn der Mauszeiger über der Umrandung (d.h. „Strich“) des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses werden, wenn sich der Zeiger über dem Inneren (d.h. Füllung) des Elements befindet. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses werden, wenn sich der Zeiger über der Umrandung (d.h. Strich) des Elements befindet. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur Ziel eines Zeigerereignisses werden, wenn sich der Zeiger über der {{Glossary("Bounding_box", "Umrandungsbox")}} des Elements befindet.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur Ziel eines Zeigerereignisses werden, wenn der Zeiger über dem Inneren (d.h. Füllung) oder der Umrandung (d.h. Strich) des Elements ist. Die Werte der Eigenschaften `fill`, `stroke` und `visibility` beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte die gleichen Merkmale wie für den Wert `visiblePainted`.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, "durch" das Element zu gehen und stattdessen das Ziel zu suchen, das "unter" diesem Element liegt.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen ist, durch die Verwendung von `pointer-events` nicht notwendigerweise bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder werden. Wenn eines der Nachkommenelemente `pointer-events` explizit so gesetzt hat, dass dieser Nachkomme das Ziel von Zeigerereignissen sein darf, dann werden alle Ereignisse, die diesen Nachkommen anpeilen, den Elternteil passieren, während das Ereignis entlang der Elternkette reist, und die Ereignis-Listener am Elternteil entsprechend auslösen. Natürlich wird jegliche Zeigeraktivität an einer Stelle auf dem Bildschirm, die vom Elternteil, aber nicht vom Nachkommen abgedeckt ist, weder vom Kind noch vom Elternteil abgefangen (sie wird "durch" das Elternteil gehen und auf das zielen, was darunter liegt).

Elemente mit `pointer-events: none` erhalten weiterhin Fokus durch die sequentielle Tastaturnavigation mithilfe der <kbd>Tab</kbd>-Taste.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren von Zeigerereignissen für alle Bilder

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Schweben usw.) für alle Bilder.

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
