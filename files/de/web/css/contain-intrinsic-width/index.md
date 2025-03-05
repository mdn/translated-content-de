---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Breite eines Elements, die ein Browser für das Layout verwendet, wenn das Element von der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) betroffen ist.

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
  - : Ein gespeicherter Wert der "normal gerenderten" Elementbreite, falls vorhanden und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); ansonsten die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gesetzt werden.

Größenbeschränkung erlaubt es einem User Agent, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Reflows vermieden werden, indem die Kind-Elemente nicht neu gerendert werden müssen, um die tatsächliche Größe zu bestimmen (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise kollabieren lassen, als ob die Inhalte keine Breite oder Höhe hätten.
Die `contain-intrinsic-width` Eigenschaft erlaubt Autoren, einen geeigneten Wert festzulegen, der als Breite für das Layout verwendet wird.

Der Wert `auto <length>` erlaubt es, die Breite des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kind-Elementen), und dann anstelle der angegebenen Breite verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies erlaubt es Offscreen-Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler so genau in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kind-Elemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Neben dem unten stehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Setzen der intrinsischen Breite

Das folgende HTML definiert ein Element "contained_element", das der Größenbeschränkung unterliegt und ein Kind-Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass es, wenn das Element versteckt ist, größenbeschränkt wird.
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
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
