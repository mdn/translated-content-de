---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Syntax

```css
/* Schlüsselwortwerte */
contain-intrinsic-width: none;

/* <length> Werte */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* Globale Werte */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### Werte

Für ein Element können die folgenden Werte angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gespeicherter Wert der "normalerweise gerenderten" Elementbreite, falls vorhanden, und das Element seine Inhalte auslässt (zum Beispiel, wenn es sich außerhalb des Bildschirms befindet); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig in Verbindung mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mithilfe der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) festgelegt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, und unnötige Neuberechnungen zu verhindern, indem das Neurendering von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (dadurch wird die Benutzererfahrung verbessert).
Standardmäßig behandeln Größenbeschränkungen Elemente so, als hätten sie keine Inhalte, und das Layout kann in ähnlicher Weise zusammenbrechen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-width`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Breite für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Breite des Elements zu speichern, falls das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite verwendet zu werden, wenn das Element seine Inhalte auslässt.
Dies ermöglicht es Elemente außerhalb des Sichtbereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so genau treffen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiv ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum folgenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkungen der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Breite

Das unten stehende HTML definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das unten stehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es einer Größenbeschränkung unterworfen wird.
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
