---
title: contain-intrinsic-inline-size
slug: Web/CSS/contain-intrinsic-inline-size
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-inline-size`** [CSS](/de/docs/Web/CSS) [logische Eigenschaft](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert die Inline-Größe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

Inline-Größe ist die Größe des Elements in der Dimension, die parallel zum Textfluss innerhalb einer Zeile verläuft. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/writing-mode) wie dem Standard-Englisch ist die Inline-Größe die horizontale Dimension (Breite); bei einem vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

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
  - : Wenn das Element eine Größenbegrenzung hat und seine Inhalte übersprungen werden (zum Beispiel, wenn es außerhalb des Bildschirms ist und `content-visibility: auto` gesetzt ist), wird die Inline-Größe aus der tatsächlichen Größe des Elements, als es zuletzt in der Lage war, seine Kind-Elemente zu rendern, gespeichert.
    Wenn das Element seine Kind-Elemente noch nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße hat, oder wenn es seine Inhalte nicht überspringt, ist die Inline-Größe die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbegrenzung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbegrenzung erlaubt es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen vermieden werden, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe verhindert wird (was die Benutzererfahrung verbessert). Standardmäßig behandelt die Größenbegrenzung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise reduzieren, als hätten die Inhalte keine Breite oder Höhe. Die Eigenschaft `contain-intrinsic-inline-size` ermöglicht es Autoren, einen geeigneten Wert festzulegen, der als Inline-Größe für das Layout verwendet wird.

Der Wert `auto <length>` erlaubt es, die Inline-Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kind-Elementen), und dann anstelle des angegebenen Wertes verwendet zu werden, wenn das Element seine Inhalte überspringt. Dies ermöglicht es, dass Offscreen-Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbegrenzung profitieren können, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen. Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der intrinsischen Inline-Größe

Der HTML-Code unten definiert ein Element "contained_element", das einer Größenbegrenzung unterliegt und ein Kind-Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der CSS-Code unten setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass das Element bei Ausblenden größenbegrenzt wird. Die intrinsische Blockgröße und Inline-Größe, die bei Größenbeschränkung verwendet werden, werden gleichzeitig mit `contain-intrinsic-block-size` und `contain-intrinsic-inline-size` festgelegt.

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
