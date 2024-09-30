---
title: <display-inside>
slug: Web/CSS/display-inside
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ des Elements, der den Typ des Formatierungskontexts definiert, der seine Inhalte anordnet (vorausgesetzt, es handelt sich um ein nicht ersetztes Element). Diese Schlüsselwörter werden als Werte der `display` Eigenschaft verwendet und können aus Kompatibilitätsgründen als ein einzelnes Schlüsselwort oder, wie in der Level-3-Spezifikation definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-inside>` Werte:

- `flow`

  - : Das Element ordnet seine Inhalte mittels Flusslayout (Block-und-Inline-Layout) an.

    Wenn sein äußerer Anzeigetyp `inline` ist und es in einem Block- oder Inline-Formatierungskontext beteiligt ist, erzeugt es ein Inline-Box. Andernfalls erzeugt es ein Blockcontainer-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und ob es selbst in einem Block- oder Inline-Formatierungskontext beteiligt ist, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte oder integriert seine Inhalte in den Formatierungskontext des übergeordneten Elements.

- `flow-root`
  - : Das Element erzeugt ein Blockelement-Box, das einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und den Formatierungs-Ursprung definiert.
- `table`
  - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/CSS_flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Werte-Syntax unterstützen, setzen ihren äußeren Wert auf `block`, wenn nur der innere Wert gefunden wird, wie zum Beispiel bei der Angabe `display: flex` oder `display: grid`. Dies führt zu einem erwarteten Verhalten; beispielsweise erwarten Sie, dass die Box, die durch das Grid-Container-Element erstellt wird, eine Block-Level-Box ist, wenn Sie ein Element mit `display: grid` spezifizieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel ist der übergeordnete Box `display: flow-root` zugewiesen, wodurch ein neuer BFC etabliert wird und das schwebende Element enthalten ist.

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
