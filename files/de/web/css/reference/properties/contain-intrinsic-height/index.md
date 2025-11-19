---
title: contain-intrinsic-height
slug: Web/CSS/Reference/Properties/contain-intrinsic-height
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`contain-intrinsic-height`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Ein gespeicherter Wert der normalerweise gerenderten Elementhöhe, falls vorhanden, und das Element seine Inhalte auslässt (zum Beispiel, wenn es außerhalb des Bildschirms ist); anderenfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig bei Elementen angewandt, die Größenbeschränkung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility), und kann auch unter Verwendung der [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) festgelegt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element wie ein Element fester Größe zu layouten, was unnötige Reflows verhindert, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (und damit die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout in derselben Weise zusammenfallen lassen, als hätten die Inhalte keine Höhe (oder Breite).
Die `contain-intrinsic-height`-Eigenschaft ermöglicht Autoren, einen geeigneten Wert zu spezifizieren, der als Höhe für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Höhe des Elements zu speichern, wenn das Element jemals "normal" gerendert wird (mit seinen Kindelementen) und dann anstelle der angegebenen Höhe verwendet zu werden, wenn das Element seine Inhalte auslässt.
Dies ermöglicht es Elementen außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von Größenbeschränkungen zu profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum Beispiel unten enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkungen der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Höhe

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das unten stehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element ausgeblendet ist, es einer Größenbeschränkung unterliegt.
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
