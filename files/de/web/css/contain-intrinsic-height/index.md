---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Syntax

```css
/* Schlüsselwortwerte */
contain-intrinsic-height: none;

/* <length> Werte */
contain-intrinsic-height: 1000px;
contain-intrinsic-height: 10rem;

/* auto <length> */
contain-intrinsic-height: auto 300px;

/* Globale Werte */
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
  - : Ein gespeicherter Wert der "normal gerenderten" Elementhöhe, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls wird die angegebene `<length>` verwendet.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbeschränkungen auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mithilfe der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) festgelegt werden.

Größenbeschränkungen ermöglichen es einem User-Agent, ein Element so darzustellen, als hätte es eine feste Größe, um unnötige Neuanordnungen zu verhindern, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (dies verbessert die Benutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und das Layout kann ebenso zusammenbrechen, als hätten die Inhalte keine Höhe (oder Breite).
Die Eigenschaft `contain-intrinsic-height` ermöglicht es den Autoren, einen geeigneten Wert festzulegen, der als Höhe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Höhe verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es außerhalb des Bildschirms befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von Größenbeschränkungen zu profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so genau anpassen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem unten stehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein lebendes Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Höhe

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das unten stehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass das Element größenbeschränkt ist, wenn es ausgeblendet wird.
Die Breite und Höhe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

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
