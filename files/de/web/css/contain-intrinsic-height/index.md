---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

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
  - : Ein gespeicherter Wert der "normalerweise gerenderten" Elementhöhe, wenn einer vorhanden ist und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); ansonsten die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und sie kann auch durch die [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) festgelegt werden.

Größenbeschränkung erlaubt einem User-Agent, ein Element so zu gestalten, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen vermieden werden, indem das erneute Rendern von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (dadurch wird die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und das Layout kann auf die gleiche Weise zusammenbrechen, als hätten die Inhalte keine Höhe (oder Breite).
Die `contain-intrinsic-height` Eigenschaft erlaubt Autoren, einen geeigneten Wert festzulegen, der als Höhe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, wenn das Element jemals "normalerweise gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Höhe verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies erlaubt es, dass außerhalb des Bildschirms liegende Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbeschränkung profitieren können, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum untenstehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das den Effekt der Modifikation der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Höhe

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und das ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es einer Größenbeschränkung unterliegt.
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
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
