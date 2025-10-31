---
title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Textfluss innerhalb einer Zeile verläuft. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie im Standard-Englisch ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

## Syntax

```css
/* Keyword values */
contain-intrinsic-block-size: none;

/* <length> values */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
contain-intrinsic-block-size: auto 300px;

/* Global values */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

### Werte

Die folgenden Werte können für die intrinsische Blockgröße eines Elements angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Blockgröße.
- `<length>`
  - : Das Element hat die angegebene Blockgröße, ausgedrückt unter Verwendung des ({{cssxref("&lt;length&gt;")}}) Datentyps.
- `auto <length>`
  - : Wenn das Element einer Größenbeschränkung unterliegt und seine Inhalte überspringt (z. B. wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt in der Lage war, seine Kindelemente darzustellen.
    Wenn das Element seine Kindelemente nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusätzlich zu Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Neulayouts, indem es das Neu-Rendern der Kindelemente zur Bestimmung der tatsächlichen Größe verhindert (und verbessert dadurch die Benutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise kollabieren lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-block-size`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Blockgröße für das Layout verwendet werden soll.

Der `auto <length>` Wert ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal" gerendert wird (mit seinen Kindelementen) und dann anstelle des angegebenen Werts verwendet wird, wenn das Element keinen Inhalt hat.
Dies ermöglicht es, dass außerhalb des Bildschirms liegende Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße genau machen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbeschränkung aktiviert ist, wird der `<length>` Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das folgende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es größenbeschränkt wird.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
