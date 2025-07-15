---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ des Elements, der den Typ des Formatierungskontextes definiert, der seine Inhalte anordnet (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können für Legacy-Zwecke als einzelnes Schlüsselwort oder wie in der Level-3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-inside>` Werte:

- `flow`
  - : Das Element ordnet seine Inhalte unter Verwendung des Flusslayouts (Block-und-Inline-Layout) an.

    Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, stellt es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte bereit oder integriert seine Inhalte in seinen übergeordneten Formatierungskontext.

- `flow-root`
  - : Das Element erzeugt eine Blockelement-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bereitstellt und definiert, wo die Formatierungswurzel liegt.
- `table`
  - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Wert-Syntax unterstützen, setzen bei Fund des inneren Wertes allein, wie zum Beispiel bei Angabe von `display: flex` oder `display: grid`, ihren äußeren Wert auf `block`. Dies führt zu erwartetem Verhalten; zum Beispiel würden Sie erwarten, dass die Box, die auf dem Gittercontainer erstellt wird, eine Block-Level-Box ist, wenn Sie ein Element als `display: grid` spezifizieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wurde der übergeordneten Box `display: flow-root` zugewiesen und stellt somit einen neuen BFC bereit und enthält das gefloatete Element.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Grundkonzepte von Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
