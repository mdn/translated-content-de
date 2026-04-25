---
title: "`<display-inside>` CSS Typ"
short-title: <display-inside>
slug: Web/CSS/Reference/Values/display-inside
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Diese Schlüsselwörter spezifizieren den inneren {{CSSxRef("display")}}-Typ des Elements, der den Typ des Formatierungskontexts definiert, welcher dessen Inhalt anordnet (vorausgesetzt, es handelt sich um ein nicht-ersetztes Element). Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können für Legacy-Zwecke als einzelnes Schlüsselwort oder wie in der Level-3-Spezifikation definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-outside&gt;")}}-Schlüsselwörtern benutzt werden.

## Syntax

Gültige `<display-inside>`-Werte:

- `flow`
  - : Das Element ordnet seinen Inhalt mit Flow-Layout (Block-und-Inline-Layout) an.

    Wenn sein äußerer Display-Typ `inline` ist und es an einem Block- oder Inline-Formatierungskontext teilnimmt, dann erzeugt es eine Inline-Box. Andernfalls erzeugt es eine Block-Container-Box.

    Abhängig vom Wert anderer Eigenschaften (wie {{CSSxRef("position")}}, {{CSSxRef("float")}} oder {{CSSxRef("overflow")}}) und davon, ob es selbst an einem Block- oder Inline-Formatierungskontext teilnimmt, etabliert es entweder einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) für seinen Inhalt oder integriert seinen Inhalt in den übergeordneten Formatierungskontext.

- `flow-root`
  - : Das Element erzeugt eine Blockelement-Box, die einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und definiert, wo die Formatierungswurzel liegt.
- `table`
  - : Diese Elemente verhalten sich wie HTML {{HTMLElement("table")}}-Elemente. Es definiert eine Block-Level-Box.
- `flex`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Flexbox-Modell](/de/docs/Web/CSS/Guides/Flexible_box_layout) an.
- `grid`
  - : Das Element verhält sich wie ein Blockelement und ordnet seinen Inhalt gemäß dem [Grid-Modell](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) an.
- `ruby`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Ruby-Formatierungsmodell an. Es verhält sich wie die entsprechenden HTML {{HTMLElement("ruby")}}-Elemente.

> [!NOTE]
> Browser, die die Zwei-Wert-Syntax unterstützen und nur den Innenwert finden, wie wenn `display: flex` oder `display: grid` angegeben wird, setzen ihren Außenwert auf `block`. Dies wird zu einem erwarteten Verhalten führen; zum Beispiel, wenn Sie ein Element als `display: grid` spezifizieren, würden Sie erwarten, dass die Box, die auf dem Grid-Container erstellt wird, eine Block-Level-Box ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wurde der übergeordneten Box `display: flow-root` gegeben und etabliert so einen neuen BFC und enthält das gefloatete Element.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
