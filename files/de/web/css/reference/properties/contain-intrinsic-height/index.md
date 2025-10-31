---
title: contain-intrinsic-height
slug: Web/CSS/Reference/Properties/contain-intrinsic-height
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die CSS-Eigenschaft **`contain-intrinsic-height`** setzt die Höhe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

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

Für ein Element können die folgenden Werte festgelegt werden.

- `none`
  - : Das Element hat keine intrinsische Höhe.
- `<length>`
  - : Das Element hat die angegebene Höhe ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gemerkter Wert der "normal gerenderten" Elementhöhe, falls vorhanden, und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility), und kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) festgelegt werden.

Größenbeschränkung ermöglicht es einem User Agent, ein Element so zu layouten, als hätte es eine feste Größe, um unnötige Neulayouts zu verhindern, indem das erneute Rendern von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (was das Benutzererlebnis verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keinen Inhalt, und kann das Layout in gleicher Weise zusammenfallen lassen, als hätten die Inhalte keine Höhe (oder Breite).
Die Eigenschaft `contain-intrinsic-height` erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Höhe für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Höhe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Höhe zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es außerhalb des Bildschirms befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße so genau sein müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem untenstehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Änderung von intrinsischer Breite und Höhe demonstriert.

### Setzen der intrinsischen Höhe

Der HTML-Code unten definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der unten stehende CSS-Code setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass das Element, wenn es verborgen ist, größenbeschränkt wird.
Die Breite und Höhe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` gesetzt.

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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Renderleistung steigert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
