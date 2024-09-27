---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ des Elements, der den Typ des Formatierungskontextes definiert, der seinen Inhalt anordnet (vorausgesetzt, es ist ein nicht ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können zu Legacy-Zwecken als einzelnes Schlüsselwort verwendet werden oder wie in der Level 3-Spezifikation zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern definiert werden.

## Syntax

Gültige `<display-inside>`-Werte:

- `flow`

  - : Das Element ordnet seinen Inhalt mithilfe von Flusslayout an (Block-und-Inline-Layout).

    Wenn sein äußerer Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst in einem Block- oder Inline-Formatierungskontext teilnimmt, erstellt es entweder einen neuen [block formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den übergeordneten Formatierungskontext.

- `flow-root`
  - : Das Element erzeugt eine Block-Element-Box, die einen neuen [block formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und den Formatierungsursprung definiert.
- `table`
  - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Wert-Syntax unterstützen, und nur den inneren Wert finden, wie wenn `display: flex` oder `display: grid` angegeben ist, setzen ihren äußeren Wert auf `block`. Dies wird zu erwartetem Verhalten führen; zum Beispiel, wenn Sie ein Element als `display: grid` angeben, würden Sie erwarten, dass die Box, die am Gitter-Container erstellt wird, eine Block-Level-Box ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel hat die übergeordnete Box `display: flow-root` erhalten und erstellt so einen neuen BFC und enthält das gefloatete Element.

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
- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
