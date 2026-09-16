---
title: "`contain-intrinsic-height` CSS property"
short-title: contain-intrinsic-height
slug: Web/CSS/Reference/Properties/contain-intrinsic-height
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`contain-intrinsic-height`** legt die Höhe eines Elements fest, die ein Browser für das Layout verwenden kann, wenn das Element der [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Syntax

```css
/* Keyword value */
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

Für ein Element können die folgenden Werte angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Höhe.
- `<length>`
  - : Das Element hat die angegebene Höhe ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gespeicherter Wert der Höhe des „normal gerenderten“ Elements, falls ein solcher vorhanden ist und das Element seine Inhalte überspringt (beispielsweise wenn es sich außerhalb des sichtbaren Bereichs befindet); andernfalls das angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird üblicherweise zusammen mit Elementen angewendet, die Größen-Containment auslösen können, wie etwa [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}, und kann auch über die [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) {{cssxref("contain-intrinsic-size")}} gesetzt werden.

Größen-Containment ermöglicht es einem User Agent, das Layout eines Elements so zu berechnen, als hätte es eine feste Größe. Dadurch werden unnötige Reflows verhindert, indem das erneute Rendern von Kindelementen zur Ermittlung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt Größen-Containment Elemente so, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise zusammenfallen lassen, als hätten die Inhalte keine Höhe (oder Breite).
Die Eigenschaft `contain-intrinsic-height` ermöglicht es Autoren, einen passenden Wert anzugeben, der als Höhe für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Höhe des Elements zu speichern, falls das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und sie dann anstelle der angegebenen Höhe zu verwenden, wenn das Element seine Inhalte überspringt.
Dadurch können Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größen-Containment profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße so präzise vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größen-Containment aktiviert ist, wird das `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zum folgenden Beispiel enthält die Seite zu {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Auswirkung der Änderung der intrinsischen Breite und Höhe veranschaulicht.

### Festlegen der intrinsischen Höhe

Das folgende HTML definiert ein Element „contained_element“, das der Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element, wenn es verborgen ist, größenbeschränkt wird.
Die Breite und Höhe, die verwendet werden, wenn es größenbeschränkt ist, werden gleichzeitig mit `contain-intrinsic-width` beziehungsweise `contain-intrinsic-height` festgelegt.

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
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
