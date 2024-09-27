---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Syntax

```css
/* Keyword values */
contain-intrinsic-height: none;

/* <length> values */
contain-intrinsic-height: 1000px;
contain-intrinsic-height: 10rem;

/* auto <length> */
contain-intrinsic-height: auto 300px;

/* Global values */
contain-intrinsic-height: inherit;
contain-intrinsic-height: initial;
contain-intrinsic-height: revert;
contain-intrinsic-height: revert-layer;
contain-intrinsic-height: unset;
```

### Werte

Die folgenden Werte können für ein Element angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Höhe.
- `<length>`
  - : Das Element hat die angegebene Höhe ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gemerkter Wert der "normalerweise gerenderten" Elementhöhe, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig in Verbindung mit Elementen angewendet, die Größenbeschränkung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mithilfe der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gesetzt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen verhindert werden, indem das Neurendern von Kind-Elementen vermieden wird, um die tatsächliche Größe zu bestimmen (was das Benutzererlebnis verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte und kann das Layout auf die gleiche Weise zusammenfallen lassen, als hätten die Inhalte keine Höhe (oder Breite).
Die `contain-intrinsic-height`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert als Höhe für das Layout anzugeben.

Der `auto <length>`-Wert erlaubt es, die Höhe des Elements zu speichern, wenn das Element jemals "normal gerendert" (mit seinen Kind-Elementen) wird, und dann anstelle der angegebenen Höhe verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es außerhalb des Bildschirms befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung zu profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so präzise machen müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem untenstehenden Beispiel enthält die {{CSSxRef("contain-intrinsic-size")}}-Seite ein Live-Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Höhe

Der untenstehende HTML-Code definiert ein Element "contained_element", das der Größenbeschränkung unterliegt und ein Kind enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der untenstehende CSS-Code setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass es, wenn das Element verborgen ist, der Größenbeschränkung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn es der Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

```css
#contained_element {
  border: 2px solid green;
  width: 151px;
  content-visibility: auto;
  contain-intrinsic-width: 152px;
  contain-intrinsic-height: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
