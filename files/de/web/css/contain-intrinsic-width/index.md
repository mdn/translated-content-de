---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Breite eines Elements, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Syntax

```css
/* Keyword values */
contain-intrinsic-width: none;

/* <length> values */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* Global values */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### Werte

Die folgenden Werte können für ein Element angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element weist die angegebene Breite auf ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gemerkter Wert der „normalerweise gerenderten“ Elementbreite, falls vorhanden, und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); sonst die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbeschränkungen auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gesetzt werden.

Größenbeschränkungen ermöglichen es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, und unnötige Neuberechnungen zu verhindern, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise zusammenbrechen lassen, als wenn die Inhalte weder Breite noch Höhe hätten.
Die `contain-intrinsic-width` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert als Breite für das Layout anzugeben.

Der Wert `auto <length>` erlaubt es, die Breite des Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite verwendet wird, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass außerhalb des Bildschirms befindliche Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise Schätzungen der Elementgröße vornehmen müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem unten stehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Einstellung der intrinsischen Breite

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der unten stehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass das Element, wenn es versteckt ist, einer Größenbeschränkung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn es einer Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

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
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
