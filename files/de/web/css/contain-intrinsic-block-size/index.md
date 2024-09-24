---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension, die senkrecht zum Fluss des Textes innerhalb einer Zeile steht. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/writing-mode) wie im Englischen ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

## Syntax

```css
/* Schlüsselwort Werte */
contain-intrinsic-block-size: none;

/* <Länge> Werte */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <Länge> */
contain-intrinsic-block-size: auto 300px;

/* Globale Werte */
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
  - : Das Element hat die angegebene Blockgröße, ausgedrückt durch den ({{cssxref("&lt;length&gt;")}}) Datentyp.
- `auto <length>`
  - : Wenn das Element in der Größenbegrenzung ist und seine Inhalte übersprungen werden (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt in der Lage war, seine Kind-Elemente zu rendern.
    Wenn das Element seine Kind-Elemente nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig bei Elementen angewendet, die eine Größenbegrenzung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Neuanordnungen, indem das Neurendern von Kind-Elementen vermieden wird, um die tatsächliche Größe zu bestimmen (was die Benutzererfahrung verbessert).
Standardmäßig behandelt Größenbegrenzung Elemente, als hätten sie keine Inhalte, und kann das Layout so kollabieren lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-block-size` Eigenschaft erlaubt es Autoren, einen geeigneten Wert festzulegen, der als Blockgröße für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kind-Elementen) und anstelle des angegebenen Wertes verwendet wird, wenn das Element keine Inhalte hat.
Dies erlaubt es, dass außerhalb des Bildschirms befindliche Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbegrenzung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße präzisieren müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden; wenn die Größenbegrenzung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der intrinsischen Blockgröße

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbegrenzung unterliegt und ein Kind-Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das unten stehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, so dass, wenn das Element versteckt ist, es einer Größenbegrenzung unterliegt.
Die intrinsische Blockgröße und die Inline-Größe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
