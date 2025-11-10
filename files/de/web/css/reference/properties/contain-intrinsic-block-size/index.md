---
title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Textfluss innerhalb einer Zeile steht. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie in der Standardsprache Englisch ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

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
  - : Das Element hat die angegebene Blockgröße, ausgedrückt mit dem Datentyp ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Wenn das Element in der Größenbegrenzung ist und seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` eingestellt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements abgeleitet, als es zuletzt in der Lage war, seine Kindelemente zu rendern.
    Wenn das Element seine Kindelemente niemals gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße der angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig neben Elementen angewendet, die eine Größenbegrenzung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größenbegrenzung erlaubt es einem Benutzeragenten, ein Element so zu layouten, als ob es eine feste Größe hätte.
Dies verhindert unnötige Neuzuweisungen von Layouts, indem die Neudarstellung von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (dadurch wird die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbegrenzung Elemente so, als ob sie keine Inhalte hätten und das Layout in gleicher Weise wie bei Inhalten ohne Breite oder Höhe kollabieren könnte.
Die Eigenschaft `contain-intrinsic-block-size` erlaubt es Autoren, einen angemessenen Wert anzugeben, der als Blockgröße für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element keine Inhalte hat.
Dies ermöglicht es, dass außerhalb des Bildschirms liegende Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbegrenzung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße genau festlegen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbegrenzung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbegrenzung unterliegen wird und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das nachstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, so dass, wenn das Element versteckt ist, es einer Größenbegrenzung unterliegt.
Die intrinsische Blockgröße und die Inline-Größe, die verwendet werden, wenn es Größen eingeschränkt ist, werden gleichzeitig mithilfe von `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
