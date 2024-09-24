---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ des Elements, der den Typ des Formatierungskontexts definiert, der seine Inhalte layoutet (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als einzelnes Schlüsselwort oder wie in der Level-3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-inside>` Werte:

- `flow`

  - : Das Element layoutet seine Inhalte mithilfe von Flusslayout (Block- und Inline-Layout).

    Wenn sein äußerer Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext mitwirkt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und ob es selbst in einem Block- oder Inline-Formatierungskontext mitwirkt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

- `flow-root`
  - : Das Element erzeugt eine Block-Element-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und festlegt, wo die Formatierungswurzel liegt.
- `table`
  - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und layoutet seinen Inhalt entsprechend dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout).
- `grid`
  - : Das Element verhält sich wie ein Blockelement und layoutet seinen Inhalt entsprechend dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und layoutet seinen Inhalt entsprechend dem Ruby-Formatierungsmodell. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Werte-Syntax unterstützen und nur den inneren Wert finden, wie z.B. wenn `display: flex` oder `display: grid` angegeben ist, setzen ihren äußeren Wert auf `block`. Dies führt zu erwartetem Verhalten; wenn Sie zum Beispiel ein Element auf `display: grid` setzen, würden Sie erwarten, dass die Box, die im Grid-Container erstellt wird, eine Block-Level-Box ist.

## formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel erhält die übergeordnete Box `display: flow-root` und etabliert somit einen neuen BFC und enthält das gefloatete Element.

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

- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
