---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Höhe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

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
  - : Ein gemerkter Wert der „normalerweise gerenderten“ Elementhöhe, wenn diese existiert und das Element seine Inhalte überspringt (zum Beispiel wenn es außerhalb des Sichtbereichs liegt); ansonsten die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig in Verbindung mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie etwa [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gesetzt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuflüsse verhindert werden, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise zusammenfallen lassen, als ob die Inhalte keine Höhe (oder Breite) hätten.
Die `contain-intrinsic-height`-Eigenschaft ermöglicht es den Autoren, einen geeigneten Wert anzugeben, der als Höhe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und dann anstelle der angegebenen Höhe zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es außer Sicht befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler in ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem folgenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das den Effekt der Modifizierung der intrinsischen Breite und Höhe demonstriert.

### Setzen der intrinsischen Höhe

Das folgende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element versteckt ist, es einer Größenbeschränkung unterliegt.
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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
