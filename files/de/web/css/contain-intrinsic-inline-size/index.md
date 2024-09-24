---
title: contain-intrinsic-inline-size
slug: Web/CSS/contain-intrinsic-inline-size
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-inline-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Inline-Größe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größen-Einschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Die Inline-Größe ist die Größe des Elements in der Dimension, die parallel zum Textfluss innerhalb einer Zeile verläuft.
In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/writing-mode) wie dem standardmäßigen Englischen ist die Inline-Größe die horizontale Dimension (Breite); für einen vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

## Syntax

```css
/* Schlüsselwortwerte */
contain-intrinsic-inline-size: none;

/* <length> Werte */
contain-intrinsic-inline-size: 1000px;
contain-intrinsic-inline-size: 10rem;

/* auto <length> */
contain-intrinsic-inline-size: auto 300px;

/* Globale Werte */
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
  - : Wenn das Element sich in einer Größeneinschränkung befindet und seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Inline-Größe aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt in der Lage war, seine Kindelemente anzuzeigen.
    Wenn das Element seine Kindelemente nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Inline-Größe die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen verwendet, die Größen-Einschränkung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größen-Einschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, um unnötige Neulayouts zu verhindern, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (dadurch wird die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größen-Einschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout genauso zusammenklappen, als ob die Inhalte weder Breite noch Höhe hätten.
Die `contain-intrinsic-inline-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Inline-Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Inline-Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wurde (mit seinen Kindelementen) und dann anstelle des angegebenen Wertes verwendet wird, wenn das Element seine Inhalte überspringt.
Dies ermöglicht Offscreen-Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größen-Einschränkung zu profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn eine Größen-Einschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Inline-Größe

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegen wird und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS legt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto` fest, sodass, wenn das Element verborgen ist, es einer Größenbeschränkung unterliegt.
Die intrinsische Block- und Inline-Größe, die verwendet wird, wenn es einer Größenbeschränkung unterliegt, wird gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
