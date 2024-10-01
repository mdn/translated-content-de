---
title: pointer-events
slug: Web/CSS/pointer-events
l10n:
  sourceCommit: 6efdd8d3bd443a8c55e8a5b66614ec28b7642aca
---

{{CSSRef}}

Die **`pointer-events`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, unter welchen Umständen (falls überhaupt) ein bestimmtes grafisches Element das [Target](/de/docs/Web/API/Event/target) von Zeigerereignissen werden kann.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

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

Die `pointer-events` Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Element verhält sich so, als wäre die `pointer-events` Eigenschaft nicht angegeben. In SVG-Inhalten haben dieser Wert und der Wert `visiblePainted` die gleiche Wirkung.
- `none`

  - : Das Element selbst ist niemals das [Target](/de/docs/Web/API/Event/target) von Zeigerereignissen. Der Unterbaum kann jedoch weiterhin anvisierbar gemacht werden, indem `pointer-events` auf einen anderen Wert gesetzt wird. In diesen Umständen werden Zeigerereignisse Ereignislistener auf diesem Elternelement auslösen, wenn sie auf ihrem Weg zu oder von dem Nachkommen während der Ereignisaufnahme und [Bubbel](/de/docs/Web/API/Event/bubbles) Phasen sind.

    > [!NOTE]
    > Die `pointerenter` und `pointerleave` Ereignisse werden ausgelöst, wenn ein Zeigegerät in ein Element oder einen seiner Nachkommen bewegt wird. Auch wenn `pointer-events: none` auf das Elternteil und nicht auf die Kinder gesetzt ist, werden die Ereignisse auf dem Elternteil ausgelöst, nachdem der Zeiger in oder aus einem Nachkommen bewegt wurde.

#### Nur SVG (experimentell für HTML)

- `visiblePainted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn ein Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn ein Mauszeiger über den Umfang (d.h. 'stroke') des Elements fährt und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist.
- `visibleFill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. ein Mauszeiger über das Innere (d.h. Füllung) des Elements fährt. Der Wert der `fill` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. wenn der Mauszeiger über den Umfang (d.h. Strich) des Elements fährt. Der Wert der `stroke` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `visible`
  - : Nur SVG (experimentell für HTML). Das Element kann das Ziel eines Zeigerereignisses sein, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und z.B. der Mauszeiger über das Innere (d.h. fill) oder den Umfang (d.h. stroke) des Elements fährt. Die Werte von `fill` und `stroke` beeinflussen die Ereignisverarbeitung nicht.
- `painted`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn z.B. der Mauszeiger über das Innere (d.h. 'fill') des Elements fährt und die `fill` Eigenschaft auf einen anderen Wert als `none` gesetzt ist, oder wenn der Mauszeiger über den Umfang (d.h. 'stroke') des Elements fährt und die `stroke` Eigenschaft auf einen anderen Wert als `none` gesetzt ist. Der Wert der `visibility` Eigenschaft beeinflusst die Ereignisverarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über das Innere (d.h. Füllung) des Elements fährt. Die Werte der `fill` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über den Umfang (d.h. Strich) des Elements fährt. Die Werte der `stroke` und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.
- `bounding-box`
  - : Nur SVG. Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über die {{Glossary("Bounding_box", "Umrandungsbox")}} des Elements fährt.
- `all`
  - : Nur SVG (experimentell für HTML). Das Element kann nur das Ziel eines Zeigerereignisses sein, wenn der Zeiger über das Innere (d.h. fill) oder den Umfang (d.h. stroke) des Elements fährt. Die Werte der `fill`, `stroke`, und `visibility` Eigenschaften beeinflussen die Ereignisverarbeitung nicht.

## Beschreibung

Wenn diese Eigenschaft nicht angegeben ist, gelten für SVG-Inhalte die gleichen Eigenschaften des `visiblePainted` Werts.

Zusätzlich dazu, dass das Element nicht das Ziel von Zeigerereignissen ist, weist der Wert `none` das Zeigerereignis an, durch das Element "hindurch" zu gehen und stattdessen das, was "darunter" liegt, zum Ziel zu machen.

Beachten Sie, dass die Verhinderung, dass ein Element das Ziel von Zeigerereignissen durch Verwendung von `pointer-events` wird, _nicht_ notwendigerweise bedeutet, dass Zeigerereignis-Listener auf diesem Element _nicht_ ausgelöst werden können oder nicht ausgelöst werden. Wenn für eines der Kinder des Elements `pointer-events` explizit so gesetzt wird, dass das Kind das Ziel von Zeigerereignissen sein darf, dann werden alle Ereignisse, die auf dieses Kind abzielen, durch das Elternteil hindurchgehen, während das Ereignis entlang der Elternkette reist, und Ereignis-Listener auf dem Elternteil entsprechend auslösen. Natürlich wird jede Zeigeraktivität an einem Punkt auf dem Bildschirm, der vom Elternteil, aber nicht vom Kind überdeckt ist, weder vom Kind noch vom Elternteil erfasst (sie wird durch das Elternteil hindurchgehen und das darunterliegende Ziel zum Ziel machen).

Elemente mit `pointer-events: none` erhalten durch sequentielle Tastaturnavigation über die <kbd>Tab</kbd>-Taste weiterhin den Fokus.

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
- Die [`PointerEvent`](/de/docs/Web/API/PointerEvent) API
- [WebKit Spezifikationen PointerEventsProperty](https://webkit.org/specs/PointerEventsProperty.html) erweitert für die Verwendung in (X)HTML-Inhalten
- {{cssxref("user-select")}} - steuert, ob der Benutzer Text auswählen kann
