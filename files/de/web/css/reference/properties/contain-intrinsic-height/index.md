---
title: contain-intrinsic-height
slug: Web/CSS/Reference/Properties/contain-intrinsic-height
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`contain-intrinsic-height`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Höhe eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

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
  - : Ein gespeicherter Wert der "normal gerenderten" Elementhöhe, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen verwendet, die eine Größenbeschränkung auslösen können, wie z. B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}, und kann auch mit der {{cssxref("contain-intrinsic-size")}} [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) festgelegt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, indem unnötige Neuanordnungen verhindert werden. Dies geschieht durch das Vermeiden des erneuten Renderns von Kindelementen, um die tatsächliche Größe zu bestimmen (verbessert die Benutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise kollabieren lassen, als hätten die Inhalte keine Höhe (oder Breite).
Die `contain-intrinsic-height` Eigenschaft erlaubt es Autoren, einen geeigneten Wert zu spezifizieren, der als Höhe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen) und dann anstelle der angegebenen Höhe verwendet zu werden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es Elementen außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung zu profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Neben dem folgenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkung der Änderung der intrinsischen Breite und Höhe demonstriert.

### Die intrinsische Höhe festlegen

Der folgende HTML-Code definiert ein Element "contained_element", das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Der folgende CSS-Code setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, so dass, wenn das Element versteckt ist, es einer Größenbeschränkung unterliegt.
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
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
