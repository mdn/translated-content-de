---
title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

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

Die folgenden Werte können für ein Element festgelegt werden.

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gespeicherter Wert der "normalerweise gerenderten" Elementbreite, falls vorhanden, und das Element überspringt seinen Inhalt (zum Beispiel, wenn es außerhalb des sichtbaren Bereichs ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig auf Elemente angewendet, die eine Größenbegrenzung auslösen können, wie z. B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility). Sie kann auch mithilfe der [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) eingestellt werden.

Die Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen vermieden werden, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe verhindert wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbegrenzung Elemente, als hätten sie keinen Inhalt, und könnte das Layout in derselben Weise zusammenklappen, als hätten die Inhalte keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-width` erlaubt es Autoren, einen geeigneten Wert festzulegen, der als Breite für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Breite des Elements zu speichern, wenn das Element "normalerweise gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite verwendet zu werden, wenn das Element seinen Inhalt überspringt.
Dies ermöglicht es unsichtbaren Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von der Größenbegrenzung zu profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größenbegrenzung aktiviert ist, wird das `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Neben dem unten stehenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Festlegen der intrinsischen Breite

Das untenstehende HTML definiert ein Element "contained_element", das einer Größenbegrenzung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von `contained_element` auf `auto`, sodass es, wenn das Element verborgen ist, einer Größenbegrenzung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn es einer Größenbegrenzung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

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

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
