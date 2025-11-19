---
title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größen-Einschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Ein gespeicherter Wert der "normalerweise gerenderten" Elementbreite, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig in Verbindung mit Elementen angewendet, die eine Größen-Einschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility), und kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) gesetzt werden.

Größen-Einschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen vermieden werden, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (dadurch wird die Benutzererfahrung verbessert). Standardmäßig behandelt die Größen-Einschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise zusammenfallen lassen, als hätten die Inhalte keine Breite oder Höhe. Die `contain-intrinsic-width` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert festzulegen, der als Breite für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Breite des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite verwendet zu werden, wenn das Element seine Inhalte überspringt. Dies ermöglicht es, dass Elemente außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größen-Einschränkung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so präzise angeben müssen. Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größen-Einschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem unten stehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Modifizierung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Breite

Der untenstehende HTML-Code definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der untenstehende CSS-Code setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass es, wenn das Element verborgen ist, der Größenbeschränkung unterliegt. Die Breite und Höhe, die verwendet werden, wenn es der Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

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
