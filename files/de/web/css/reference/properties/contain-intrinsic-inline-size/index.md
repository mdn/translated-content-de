---
title: contain-intrinsic-inline-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-inline-size
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`contain-intrinsic-inline-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert die Inline-Größe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Inline-Größe ist die Größe des Elements in der Dimension, die parallel zum Fluss des Textes innerhalb einer Zeile verläuft. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie dem standardmäßigen Englischen ist die Inline-Größe die horizontale Dimension (Breite); bei einem vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

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
  - : Wenn das Element in der Größenbeschränkung ist und seine Inhalte überspringt (zum Beispiel, wenn es sich außerhalb des Bildschirms befindet und `content-visibility: auto` gesetzt ist), wird die Inline-Größe vom tatsächlichen Elementgröße gemerkt, als es zuletzt in der Lage war, seine Kindelemente zu rendern. Wenn das Element seine Kindelemente nie gerendert hat und daher keinen gemerkten Wert für die normalerweise gerenderte Elementgröße hat oder wenn es seine Inhalte nicht überspringt, ist die Inline-Größe die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig auf Elemente angewendet, die eine Größenbeschränkung auslösen können, wie etwa [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als ob es eine feste Größe hätte, um unnötige Neulayouts zu verhindern, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (und dadurch das Benutzererlebnis verbessert wird). Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise zusammenklappen, als hätten die Inhalte keine Breite oder Höhe. Die `contain-intrinsic-inline-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Inline-Größe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Inline-Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element seine Inhalte überspringt. Dies ermöglicht es, dass Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) außerhalb des Bildschirms von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen. Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird das `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Inline-Größe

Das folgende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass das Element in Größe beschränkt wird, wenn es versteckt ist. Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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

- [content-visibility: The new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
