---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Fluss des Textes innerhalb einer Zeile verläuft. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/writing-mode) wie zum Beispiel im Standard-Englisch ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist es die horizontale Dimension.

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
  - : Das Element hat die angegebene Blockgröße, ausgedrückt mit dem ({{cssxref("&lt;length&gt;")}}) Datentyp.
- `auto <length>`
  - : Wenn sich das Element in der Größenbeschränkung befindet und seine Inhalte auslässt (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements übernommen, als es zuletzt in der Lage war, seine Kind-Elemente darzustellen.
    Wenn das Element seine Kind-Elemente noch nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht auslässt, beträgt die Blockgröße den angegebenen `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Die Größenbeschränkung erlaubt es einem User-Agenten, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Neuberechnungen, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise zusammenbrechen, als ob die Inhalte keine Breite oder Höhe hätten.
Die Eigenschaft `contain-intrinsic-block-size` ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Blockgröße für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kind-Elementen) und dann anstelle des angegebenen Werts verwendet wird, wenn das Element keinen Inhalt hat.
Dies ermöglicht es, dass Elemente außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler die Größe des Elements präzise abschätzen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden; wenn die Größenbeschränkung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Der untenstehende HTML-Code definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der untenstehende CSS-Code setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass das Element bei Ausblendung in seiner Größe beschränkt wird.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es in seiner Größe beschränkt ist, werden gleichzeitig mittels `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
