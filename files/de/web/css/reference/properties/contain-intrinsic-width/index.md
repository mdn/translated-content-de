---
title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größenbegrenzung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gemerkter Wert der "normal gerenderten" Elementbreite, falls vorhanden, und das Element übergeht seine Inhalte (beispielsweise wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbegrenzung auslösen können, wie z. B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}. Sie kann auch mit der {{cssxref("contain-intrinsic-size")}} [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) festgelegt werden.

Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, um unnötige Reflows zu verhindern, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbegrenzung Elemente so, als hätten sie keine Inhalte, und das Layout kann in derselben Weise zusammenbrechen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-width`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Breite für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Breite des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kind-Elementen), und dann anstelle der angegebenen Breite verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies erlaubt es, außerhalb des Bildschirms befindliche Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbegrenzung profitieren zu lassen, ohne dass Entwickler die Schätzungen der Elementgröße so genau festlegen müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum untenstehenden Beispiel enthält die {{CSSxRef("contain-intrinsic-size")}} Seite ein Live-Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegung der intrinsischen Breite

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kind-Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element bei Ausblendung einer Größeneinschränkung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn sie größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Performance verbessert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
