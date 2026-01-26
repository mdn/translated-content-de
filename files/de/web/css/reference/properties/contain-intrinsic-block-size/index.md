---
title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Textfluss innerhalb einer Zeile steht. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie Standardenglisch ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

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
  - : Wenn das Element in einer Größenbeschränkung ist und seine Inhalte übersprungen werden (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt in der Lage war, seine Kindelemente darzustellen.
    Wenn das Element seine Kindelemente nie dargestellt hat und daher keinen gespeicherten Wert für die normalerweise dargestellte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße der angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Neuanordnungen, indem das erneute Rendern von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (und verbessert damit die Benutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte und könnte das Layout auf dieselbe Weise zusammenbrechen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-block-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Blockgröße für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal dargestellt" wird (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element keine Inhalte hat.
Dies ermöglicht es Außenelements mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von Größenbeschränkungen zu profitieren, ohne dass Entwickler genau sein müssen bei ihren Schätzungen der Elementgröße.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbeschränkung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das unten stehende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es einer Größenbeschränkung unterliegt.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es Größenbeschränkungen unterliegt, werden gleichzeitig mithilfe von `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
