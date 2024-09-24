---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 6efdd8d3bd443a8c55e8a5b66614ec28b7642aca
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
pointer-events: auto;
pointer-events: none;

/* Werte, die in SVGs verwendet werden */
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: bounding-box;
pointer-events: all;

/* Globale Werte */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: revert-layer;
pointer-events: unset;
```

Die `pointer-events`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der unten aufgeführten Liste von Werten festgelegt.

### Werte

- `auto`
  - : Das Element verhält sich, als ob die `pointer-events`-Eigenschaft nicht angegeben wäre. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Ziel](/de/docs/Web/API/Event/target) von Zeigerereignissen. Allerdings könnte sein Unterbaum anvisierbar bleiben, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Fällen lösen Zeigerereignisse Event-Listener auf diesem Elternelement angemessen auf ihrem Weg zu oder von dem Nachkommen während der Ereigniserfassungs- und [Bubble](/de/docs/Web/API/Event/bubbles)-Phasen aus.

    > [!NOTE]
    > Die Ereignisse `pointerenter` und `pointerleave` werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen hineingeführt wird. Also, selbst wenn `pointer-events: none` auf das Elternteil gesetzt ist und nicht auf die Kinder, werden die Ereignisse nach dem Bewegen des Zeigers in oder aus einem Nachkommen auf dem Elternteil ausgelöst.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über dem Inneren (d.h. fill) des Elements ist. Der Wert der `fill`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über dem Umfang (d.h. stroke) des Elements ist. Der Wert der `stroke`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility`-Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger entweder über dem Inneren (d.h. fill) oder dem Umfang (d.h. stroke) des Elements ist. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über dem Inneren (d.h. 'fill') des Elements ist und die `fill`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über dem Umfang (d.h. 'stroke') des Elements ist und die `stroke`-Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility`-Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) des Elements ist. Die Werte der `fill`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Umfang (d.h. stroke) des Elements ist. Die Werte der `stroke`- und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem [Bounding-Box](/de/docs/Glossary/Bounding_box) des Elements ist.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über dem Inneren (d.h. fill) oder dem Umfang (d.h. stroke) des Elements ist. Die Werte der `fill`, `stroke` und `visibility`-Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte die gleichen Eigenschaften wie der Wert `visiblePainted`.

Zusätzlich zur Angabe, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, „durch” das Element zu gehen und stattdessen das Element „darunter” zu adressieren.

Beachten Sie, dass das Verhindern, dass ein Element das Ziel von Zeigerereignissen wird, durch die Verwendung von `pointer-events` _nicht_ unbedingt bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder _nicht_ ausgelöst werden. Wenn eines der Kindelemente `pointer-events` ausdrücklich so gesetzt hat, dass das Kind das Ziel von Zeigerereignissen sein kann, dann werden alle Ereignisse, die auf dieses Kind abzielen, den Elternteil auf dem Weg entlang der Elternkette durchlaufen und entsprechend Listener auf dem Elternteil auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der durch den Elternteil, aber nicht durch das Kind abgedeckt ist, weder vom Kind noch vom Elternteil erfasst (sie wird „durch” den Elternteil gehen und auf das darunter liegende Element abzielen).

Elemente mit `pointer-events: none` erhalten durch die sequentielle Tastaturnavigation mit der <kbd>Tab</kbd>-Taste weiterhin den Fokus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung von Zeigerereignissen für alle Bilder

Dieses Beispiel deaktiviert Zeigerereignisse (Klicken, Ziehen, Schweben usw.) für alle Bilder.

```css
img {
  pointer-events: none;
}
```

### Deaktivierung von Zeigerereignissen für einen einzelnen Link

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

- Das SVG-Attribut {{SVGAttr("pointer-events")}}
- Das SVG-Attribut {{SVGAttr("visibility")}}
- Die {{domxref("PointerEvent")}} API
- [WebKit-Spezifikationen zur PointerEventsProperty](https://webkit.org/specs/PointerEventsProperty.html), erweitert für die Verwendung in (X)HTML-Inhalten
- {{cssxref("user-select")}} - steuert, ob der Benutzer Text auswählen kann
