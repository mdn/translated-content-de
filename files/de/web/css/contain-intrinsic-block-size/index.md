---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Textfluss innerhalb einer Zeile steht. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/writing-mode) wie dem normalen englischen Schreibmodus ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

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

Folgende Werte können für die intrinsische Blockgröße eines Elements angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Blockgröße.
- `<length>`
  - : Das Element hat die angegebene Blockgröße, ausgedrückt mit dem ({{cssxref("&lt;length&gt;")}}) Datentyp.
- `auto <length>`
  - : Wenn das Element sich in einer Größenbeschränkung befindet und seinen Inhalt überspringt (zum Beispiel, wenn es außerhalb des Sichtfeldes ist und `content-visibility: auto` gesetzt ist), bleibt die Blockgröße aus der tatsächlichen Größe des Elements erhalten, wenn es zuletzt seine Kindelemente rendern konnte.
    Wenn das Element seine Kindelemente noch nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seinen Inhalt nicht überspringt, ist die Blockgröße die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als ob es eine feste Größe hätte.
Dies verhindert unnötige Neuberechnungen, indem das erneute Rendern von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (und verbessert somit die Benutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente, als ob sie keinen Inhalt hätten und kann das Layout so zusammenfalten, als ob der Inhalt keine Breite oder Höhe hätte.
Die Eigenschaft `contain-intrinsic-block-size` erlaubt es Autoren, einen geeigneten Wert festzulegen, der als Blockgröße für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element keinen Inhalt hat.
Dies ermöglicht es, dass außerhalb des Sichtfeldes befindliche Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung profitieren können, ohne dass Entwickler ihre Schätzungen der Elementgröße präzise machen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbeschränkung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das folgende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegen wird und welches ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element ausgeblendet ist, es einer Größenbeschränkung unterliegt.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn die Größenbeschränkung aktiv ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
