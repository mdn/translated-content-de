---
title: "`contain-intrinsic-inline-size` CSS property"
short-title: contain-intrinsic-inline-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-inline-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`contain-intrinsic-inline-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert die Inline-Größe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größeneinschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Inline-Größe ist die Größe des Elements in der Dimension, die parallel zum Textfluss innerhalb einer Zeile verläuft. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie dem Standard-Englisch entspricht die Inline-Größe der horizontalen Dimension (Breite); für einen vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

## Syntax

```css
/* Keyword values */
contain-intrinsic-inline-size: none;

/* <length> values */
contain-intrinsic-inline-size: 1000px;
contain-intrinsic-inline-size: 10rem;

/* auto <length> */
contain-intrinsic-inline-size: auto 300px;

/* Global values */
contain-intrinsic-inline-size: inherit;
contain-intrinsic-inline-size: initial;
contain-intrinsic-inline-size: revert;
contain-intrinsic-inline-size: revert-layer;
contain-intrinsic-inline-size: unset;
```

### Werte

Die folgenden Werte können für die intrinsische Inline-Größe eines Elements angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Inline-Größe.
- `<length>`
  - : Das Element hat die angegebene Inline-Größe ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Wenn das Element einer Größeneinschränkung unterliegt und seine Inhalte übersprungen werden (zum Beispiel, wenn es nicht sichtbar ist und `content-visibility: auto` gesetzt ist), wird die Inline-Größe aus der tatsächlichen Größe des Elements gespeichert, wenn es zuletzt in der Lage war, seine Kindelemente darzustellen.
    Wenn das Element seine Kindelemente noch nie dargestellt hat und daher keinen gespeicherten Wert für die normalerweise dargestellte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Inline-Größe der angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größeneinschränkung auslösen können, wie beispielsweise [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größeneinschränkung erlaubt es einem User-Agent, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuberechnungen vermieden werden, indem die erneute Darstellung von Kindelementen zur Bestimmung der tatsächlichen Größe verhindert wird (dadurch wird das Benutzererlebnis verbessert).
Standardmäßig behandelt die Größeneinschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise kollabieren, als hätten die Inhalte keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-inline-size` erlaubt es Autoren, einen geeigneten Wert festzulegen, der als Inline-Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Inline-Größe des Elements zu speichern, falls das Element jemals "normal dargestellt" wird (mit seinen Kindelementen) und wird dann anstelle des angegebenen Wertes verwendet, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass nicht sichtbare Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größeneinschränkungen profitieren können, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente dargestellt werden (wenn die Größeneinschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die intrinsische Inline-Größe festlegen

Der untenstehende HTML-Code definiert ein Element "contained_element", das einer Größeneinschränkung unterliegt und welches ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass es größenmäßig eingeschränkt ist, wenn das Element versteckt ist.
Die intrinsische Blockgröße und die Inline-Größe, die verwendet werden, wenn es größenmäßig eingeschränkt ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

```css
#contained_element {
  border: 2px solid green;
  inline-size: 151px;
  content-visibility: auto;
  contain-intrinsic-inline-size: 152px;
  contain-intrinsic-block-size: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  block-size: 50px;
  inline-size: 150px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Performance verbessert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
