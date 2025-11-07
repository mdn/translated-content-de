---
title: <display-inside>
slug: Web/CSS/Reference/Values/display-inside
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Diese Schlüsselwörter geben den inneren {{CSSxRef("display")}}-Typ des Elements an, der den Typ des Formatierungskontexts definiert, der seine Inhalte anordnet (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als einzelnes Schlüsselwort oder wie in der Level-3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-inside>`-Werte:

- `flow`
  - : Das Element ordnet seine Inhalte mit Hilfe des Flow-Layouts (Block- und Inline-Layout) an.

    Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, generiert es eine Inline-Box. Andernfalls generiert es eine Block-Container-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext seines übergeordneten Elements.

- `flow-root`
  - : Das Element erzeugt eine Blockelement-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und definiert, wo die Formatierungswurzel liegt.
- `table`
  - : Diese Elemente verhalten sich wie HTML-{{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Block-Element und ordnet seine Inhalte gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Block-Element und ordnet seine Inhalte gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seine Inhalte gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML-{{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Syntax mit zwei Werten unterstützen, werden bei dem alleinigen Auffinden des inneren Wertes, wie z.B. bei `display: flex` oder `display: grid`, den äußeren Wert auf `block` setzen. Dies führt zu dem erwarteten Verhalten; wenn Sie zum Beispiel ein Element als `display: grid` angeben, würden Sie erwarten, dass die auf dem Grid-Container erzeugte Box eine Block-Level-Box ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wurde dem übergeordneten Element `display: flow-root` zugewiesen, sodass ein neuer BFC etabliert wird und das gefloatete Element enthält.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
