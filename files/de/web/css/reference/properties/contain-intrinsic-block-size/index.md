---
title: "`contain-intrinsic-block-size` CSS property"
short-title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`contain-intrinsic-block-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Das Element hat die angegebene Blockgröße, ausgedrückt im ({{cssxref("&lt;length&gt;")}})-Datentyp.
- `auto <length>`
  - : Wenn das Element einer Größenbeschränkung unterliegt und seine Inhalte übersprungen werden (z. B. wenn es außerhalb des Bildschirms ist und `content-visibility: auto` eingestellt ist), wird die Blockgröße von der tatsächlichen Größe des Elements abgeleitet, wenn es zuletzt in der Lage war, seine Kind-Elemente darzustellen.
    Wenn das Element seine Kind-Elemente noch nie dargestellt hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie z. B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Neuberechnungen, indem die erneute Darstellung von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (dadurch wird die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise kollabieren lassen, als hätten die Inhalte keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-block-size` ermöglicht es den Autoren, einen geeigneten Wert anzugeben, der als Blockgröße für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals "normal gerendert" wurde (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element keine Inhalte hat.
Dies ermöglicht außerm Bildschirm befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler genaue Schätzungen der Elementgröße treffen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbeschränkung aktiviert ist, wird der `<length>`-Wert verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element bei Ausblendung einer Größenbeschränkung unterliegt.
Die intrinsische Blockgröße und die Inline-Größe, die verwendet werden, wenn es einer Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung verbessert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
