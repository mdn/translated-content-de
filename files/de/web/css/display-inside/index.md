---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Diese Schlüsselwörter legen den inneren {{CSSxRef("display")}}-Typ des Elements fest, der den Typ des Formatierungskontexts definiert, der seine Inhalte anordnet (sofern es sich um ein nicht ersetztes Element handelt). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus historischen Gründen als einzelnes Schlüsselwort verwendet werden oder, wie in der Spezifikation der Stufe 3 definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern.

## Syntax

Gültige `<display-inside>`-Werte:

- `flow`

  - : Das Element legt seinen Inhalt gemäß dem Flusslayout (Block-und-Inline-Layout) aus.

    Wenn sein äußerer Anzeigetyp `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, erzeugt es ein Inline-Box. Andernfalls erzeugt es ein Blockcontainer-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}}, oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den übergeordneten Formatierungskontext.

- `flow-root`
  - : Das Element erzeugt eine Blockelementbox, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und festlegt, wo die Formatierungswurzel liegt.
- `table`
  - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Rubin-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Wert-Syntax unterstützen, setzen bei Vorhandensein nur des inneren Wertes, wie z.B. wenn `display: flex` oder `display: grid` angegeben ist, ihren äußeren Wert auf `block`. Dies führt zu einem erwarteten Verhalten; zum Beispiel, wenn Sie ein Element auf `display: grid` setzen, würden Sie erwarten, dass die auf dem Gittercontainer erstellte Box eine Block-Level-Box ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wurde der übergeordnete Box `display: flow-root` zugewiesen und etabliert somit einen neuen BFC und enthält das gefloatete Element.

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

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
