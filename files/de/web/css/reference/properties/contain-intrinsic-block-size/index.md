---
title: "`contain-intrinsic-block-size` CSS property"
short-title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-[logische Eigenschaft](/de/docs/Web/CSS/Guides/Logical_properties_and_values) **`contain-intrinsic-block-size`** definiert die Blockgröße eines Elements, die ein Browser für das Layout verwenden kann, wenn das Element der [Größenbegrenzung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

Die Blockgröße ist die Größe eines Elements in der Dimension senkrecht zum Textfluss innerhalb einer Zeile. In einem horizontalen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) wie dem Standard-Englisch ist die Blockgröße die vertikale Dimension (Höhe); in einem vertikalen Schreibmodus ist die Blockgröße die horizontale Dimension.

## Syntax

```css
/* Keyword value */
contain-intrinsic-block-size: none;

/* <length> values */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
contain-intrinsic-block-size: auto 300px;

/* Global values */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

### Werte

Die folgenden Werte können für die intrinsische Blockgröße eines Elements angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Blockgröße.
- `<length>`
  - : Das Element hat die angegebene Blockgröße, die mit dem Datentyp ({{cssxref("&lt;length&gt;")}}) ausgedrückt wird.
- `auto <length>`
  - : Wenn sich das Element in der Größenbegrenzung befindet und seine Inhalte überspringt (beispielsweise wenn es sich außerhalb des Bildschirms befindet und `content-visibility: auto` gesetzt ist), wird die Blockgröße aus der tatsächlichen Größe des Elements gespeichert, als es zuletzt seine Kindelemente rendern konnte.
    Wenn das Element seine Kindelemente noch nie gerendert hat und daher keinen gespeicherten Wert für die Größe des normal gerenderten Elements besitzt oder wenn es seine Inhalte nicht überspringt, ist die Blockgröße die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird üblicherweise zusammen mit Elementen angewendet, die eine Größenbegrenzung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Die Größenbegrenzung ermöglicht es einem User-Agent, ein Element so zu layouten, als hätte es eine feste Größe.
Dies verhindert unnötige Reflows, indem das erneute Rendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbegrenzung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf dieselbe Weise einklappen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die Eigenschaft `contain-intrinsic-block-size` ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Blockgröße für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Blockgröße eines Elements zu speichern, wenn das Element jemals „normal gerendert“ wird (mit seinen Kindelementen), und sie dann anstelle des angegebenen Werts zu verwenden, wenn das Element keine Inhalte hat.
Dadurch können Elemente außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbegrenzung profitieren, ohne dass Entwickler ihre Schätzungen der Elementgröße präzise vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden; wenn die Größenbegrenzung aktiviert ist, wird der Wert `<length>` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der intrinsischen Blockgröße

Das folgende HTML definiert ein Element „contained_element“, das einer Größenbegrenzung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das folgende CSS setzt die {{cssxref("content-visibility")}} von `contained_element` auf `auto`, sodass das Element einer Größenbegrenzung unterliegt, wenn es ausgeblendet ist.
Die intrinsische Blockgröße und Inline-Größe, die verwendet werden, wenn es einer Größenbegrenzung unterliegt, werden gleichzeitig mit `contain-intrinsic-block-size` beziehungsweise `contain-intrinsic-inline-size` festgelegt.

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
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
