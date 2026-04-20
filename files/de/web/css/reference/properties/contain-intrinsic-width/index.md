---
title: "`contain-intrinsic-width` CSS property"
short-title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Ein gemerkter Wert der "normal gerenderten" Elementbreite, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des sichtbaren Bereichs ist); ansonsten die angegebene `<length>`.

## Beschreibung

Diese Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie z. B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}, und kann auch mit der {{cssxref("contain-intrinsic-size")}} [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) gesetzt werden.

Größenbeschränkung ermöglicht es einem User-Agent, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Umbrüche vermieden werden, indem das Neuzeichnen von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout so zusammenfallen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-width`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert festzulegen, der als Breite für das Layout verwendet wird.

Der `auto <length>`-Wert erlaubt es, die Breite des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem untenstehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das den Effekt der Änderung von intrinsischer Breite und Höhe demonstriert.

### Setzen der intrinsischen Breite

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es einer Größenbeschränkung unterliegt.
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
