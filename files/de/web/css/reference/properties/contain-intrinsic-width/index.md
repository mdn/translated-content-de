---
title: "`contain-intrinsic-width` CSS property"
short-title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`contain-intrinsic-width`** legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Syntax

```css
/* Keyword value */
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

Für ein Element können die folgenden Werte angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gespeicherter Wert der Breite des „normal gerenderten“ Elements, falls ein solcher existiert und das Element seine Inhalte überspringt (beispielsweise wenn es sich außerhalb des sichtbaren Bereichs befindet); andernfalls die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird üblicherweise zusammen mit Elementen angewendet, die Größen-Containment auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}, und kann auch über die [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) {{cssxref("contain-intrinsic-size")}} festgelegt werden.

Größen-Containment ermöglicht es einem User Agent, das Layout eines Elements so zu berechnen, als hätte es eine feste Größe. Dadurch werden unnötige Reflows verhindert, da untergeordnete Elemente nicht erneut gerendert werden müssen, um die tatsächliche Größe zu bestimmen (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt Größen-Containment Elemente so, als hätten sie keinen Inhalt, und kann das Layout auf dieselbe Weise zusammenfallen lassen, als hätte der Inhalt keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-width` ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Breite für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Breite des Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen untergeordneten Elementen), und diese dann anstelle der angegebenen Breite zu verwenden, wenn das Element seine Inhalte überspringt.
Dadurch können Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größen-Containment profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die untergeordneten Elemente gerendert werden (wenn Größen-Containment aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum folgenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkungen der Änderung der intrinsischen Breite und Höhe zeigt.

### Festlegen der intrinsischen Breite

Das folgende HTML definiert ein Element „contained_element“, das einer Größenbeschränkung unterliegt und ein untergeordnetes Element enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element bei Ausblendung einer Größenbeschränkung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn es einer Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` beziehungsweise `contain-intrinsic-height` festgelegt.

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
