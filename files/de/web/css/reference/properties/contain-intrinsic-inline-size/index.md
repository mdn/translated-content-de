---
title: "`contain-intrinsic-inline-size` CSS property"
short-title: contain-intrinsic-inline-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-inline-size
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [logische CSS-Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) **`contain-intrinsic-inline-size`** definiert die inline-size eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element der [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Inline-Größe ist die Größe des Elements in der Dimension parallel zum Textfluss innerhalb einer Zeile.
In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie Standardenglisch ist die Inline-Größe die horizontale Dimension (Breite); bei einem vertikalen Schreibmodus ist die Inline-Größe die vertikale Dimension.

## Syntax

```css
/* Keyword value */
contain-intrinsic-inline-size: none;

/* <length> values */
contain-intrinsic-inline-size: 1000px;
contain-intrinsic-inline-size: 10rem;

/* auto <length> */
contain-intrinsic-inline-size: auto 300px;

/* Global values */
contain-intrinsic-inline-size: inherit;
contain-intrinsic-inline-size: initial;
contain-intrinsic-inline-size: revert;
contain-intrinsic-inline-size: revert-layer;
contain-intrinsic-inline-size: unset;
```

### Werte

Für die intrinsische Inline-Größe eines Elements können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische inline-size.
- `<length>`
  - : Das Element hat die angegebene inline-size ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Wenn das Element der Größen-Containment unterliegt und seine Inhalte überspringt (beispielsweise wenn es sich außerhalb des sichtbaren Bereichs befindet und `content-visibility: auto` gesetzt ist), wird die Inline-Größe aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt seine Kindelemente rendern konnte.
    Wenn das Element seine Kindelemente noch nie gerendert hat und daher keinen gespeicherten Wert für die normalerweise gerenderte Elementgröße besitzt oder wenn es seine Inhalte nicht überspringt, entspricht die Inline-Größe dem angegebenen `<length>`.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größen-Containment auslösen können, etwa [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größen-Containment ermöglicht es einem User Agent, das Layout eines Elements so zu berechnen, als hätte es eine feste Größe. Dadurch werden unnötige Reflows verhindert, da Kindelemente nicht erneut gerendert werden müssen, um die tatsächliche Größe zu bestimmen (was die Benutzererfahrung verbessert).
Standardmäßig behandelt Größen-Containment Elemente so, als hätten sie keinen Inhalt, und kann das Layout auf dieselbe Weise zusammenfallen lassen, als hätte der Inhalt keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-inline-size` ermöglicht es Autorinnen und Autoren, einen geeigneten Wert anzugeben, der als inline-size für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Inline-Größe des Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und sie dann anstelle des angegebenen Werts zu verwenden, wenn das Element seine Inhalte überspringt.
Dadurch können Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von Größen-Containment profitieren, ohne dass Entwicklerinnen und Entwickler ihre Schätzungen der Elementgröße so genau vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größen-Containment aktiviert ist, wird der `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Inline-Größe

Das folgende HTML definiert ein Element „contained_element“, das einer Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element bei Ausblendung einer Größenbeschränkung unterliegt.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es einer Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-block-size` beziehungsweise `contain-intrinsic-inline-size` festgelegt.

```css
#contained_element {
  border: 2px solid green;
  inline-size: 151px;
  content-visibility: auto;
  contain-intrinsic-inline-size: 152px;
  contain-intrinsic-block-size: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  block-size: 50px;
  inline-size: 150px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
