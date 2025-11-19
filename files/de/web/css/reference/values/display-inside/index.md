---
title: <display-inside>
slug: Web/CSS/Reference/Values/display-inside
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ eines Elements, der die Art des Formatierungskontexts definiert, der seinen Inhalt anordnet (vorausgesetzt, es handelt sich um ein nicht-ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als ein einzelnes Schlüsselwort verwendet werden oder wie in der Level-3-Spezifikation zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern definiert.

## Syntax

Gültige `<display-inside>` Werte:

- `flow`
  - : Das Element ordnet seinen Inhalt unter Verwendung des Flow-Layouts (Block-und-Inline-Layout) an.

    Wenn der äußere Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

    Je nach Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, erstellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den Formatierungskontext des übergeordneten Elements.

- `flow-root`
  - : Das Element erzeugt eine Blockelement-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt und die Position der Formatierungswurzel definiert.
- `table`
  - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie das entsprechende HTML-{{HTMLElement("ruby")}}-Element.

> [!NOTE]
> Browser, die die Syntax mit zwei Werten unterstützen, setzen den äußeren Wert auf `block`, wenn nur der innere Wert gefunden wird, wie beispielsweise bei `display: flex` oder `display: grid`. Dies führt zu dem erwarteten Verhalten; wenn Sie beispielsweise ein Element auf `display: grid` setzen, erwarten Sie, dass die erstellte Box im Grid-Container eine Block-Level-Box ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wurde der übergeordneten Box `display: flow-root` gegeben, sodass ein neuer BFC erstellt wird und das schwebende Element enthält.

### HTML

```html
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

### CSS

```css
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
