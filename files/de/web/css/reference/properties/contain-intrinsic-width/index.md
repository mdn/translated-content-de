---
title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element Größenbeschränkungen unterliegt ([size containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment)).

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

Für ein Element können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementbreite, wenn vorhanden, und das Element seine Inhalte überspringt (zum Beispiel, wenn es nicht im Sichtbereich ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird üblicherweise auf Elemente angewendet, die Größenbeschränkungen auslösen können, wie beispielsweise [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility). Sie kann auch mittels der [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) gesetzt werden.

Größenbeschränkungen erlauben es einem User-Agent, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neulayouts verhindert werden, indem das erneute Rendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und könnte das Layout auf dieselbe Weise zusammenfalten, als ob die Inhalte keine Breite oder Höhe hätten.
Die `contain-intrinsic-width` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Breite für das Layout verwendet werden soll.

Der `auto <length>` Wert ermöglicht es, die Breite des Elements zu speichern, falls das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und diese dann anstelle der angegebenen Breite zu verwenden, wenn das Element seine Inhalte überspringt.
Dies erlaubt es, dass nicht sichtbare Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größenbeschränkungen profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße genau anpassen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum untenstehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkungen der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Breite

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, so dass es, wenn das Element verborgen ist, einer Größenbeschränkung unterliegt.
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
