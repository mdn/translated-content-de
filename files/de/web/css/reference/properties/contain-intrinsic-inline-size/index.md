---
title: contain-intrinsic-inline-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-inline-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`contain-intrinsic-inline-size`** [CSS](/de/docs/Web/CSS)-[logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Inline-Größe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Die Inline-Größe ist die Größe des Elements in der Dimension, die parallel zum Fluss des Textes innerhalb einer Zeile verläuft.
In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie dem standardmäßigen Englischen ist die Inline-Größe die horizontale Dimension (Breite); bei einem vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

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

Für die intrinsische Inline-Größe eines Elements können folgende Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Inline-Größe.
- `<length>`
  - : Das Element hat die angegebene Inline-Größe ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Wenn sich das Element in einer Größenbeschränkung befindet und seine Inhalte übersprungen werden (zum Beispiel, wenn es außerhalb des Sichtfeldes ist und `content-visibility: auto` gesetzt ist), wird die Inline-Größe vom tatsächlichen Größe des Elements beibehalten, als es zuletzt in der Lage war seine Kind-Elemente darzustellen.
    Wenn das Element noch nie seine Kind-Elemente dargestellt hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Inline-Größe die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als ob es eine feste Größe hätte, und verhindert unnötige Reflows, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und könnte das Layout in der gleichen Weise zusammenbrechen lassen, als ob die Inhalte keine Breite oder Höhe hätten.
Die `contain-intrinsic-inline-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert zu spezifizieren, der als Inline-Größe für das Layout verwendet wird.

Der `auto <length>`-Wert erlaubt es, die Inline-Größe des Elements zu speichern, falls das Element jemals "normal" gerendert wird (mit seinen Kind-Elementen), und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element seine Inhalte überspringt.
So können ausgelagerte Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der intrinsischen Inline-Größe

Das folgende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kind-Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass das Element, wenn es verborgen ist, einer Größenbeschränkung unterliegt.
Die intrinsische Block- und Inline-Größe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
