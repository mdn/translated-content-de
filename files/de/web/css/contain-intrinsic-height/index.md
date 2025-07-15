---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

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
  - : Ein gespeicherter Wert der "normal gerenderten" Elementhöhe, falls vorhanden, und das Element seine Inhalte auslässt (zum Beispiel, wenn es offscreen ist); andernfalls der angegebene `<length>`.

## Beschreibung

Diese Eigenschaft wird häufig zusammen mit Elementen verwendet, die eine Größenbegrenzung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility). Sie kann auch mit der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gesetzt werden.

Größenbegrenzung ermöglicht es einer Benutzeragentur, ein Element so zu layouten, als ob es eine feste Größe hätte, und verhindert unnötige Neuberechnungen, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbegrenzung Elemente so, als hätten sie keinen Inhalt, und das Layout kann in derselben Weise zusammenbrechen, als ob der Inhalt keine Höhe (oder Breite) hätte.
Die `contain-intrinsic-height` Eigenschaft erlaubt es Autoren, einen geeigneten Wert festzulegen, der als Höhe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Höhe verwendet wird, wenn das Element seine Inhalte auslässt.
Dies ermöglicht es Off-Screen-Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbegrenzung zu profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem untenstehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkungen der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Höhe

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass das Element, wenn es verborgen ist, einer Größenbeschränkung unterliegt.
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
