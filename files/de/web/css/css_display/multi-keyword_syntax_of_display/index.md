---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
short-title: Verwenden der Multi-Keyword-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der `display`-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level sind und andere Inline-Level. Dies sind ihre [outer](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level, und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift inline darzustellen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt wird. Das wichtige Konzept, das man verstehen muss, ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **outer** als auch einen **inner** Display-Typ hat. Der outer Display-Typ beschreibt, ob das Element Block-Level oder Inline-Level ist. Der inner Display-Typ beschreibt, wie sich die Kinder dieses Box verhalten.

Ein Beispiel: Wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden als Teil eines Flex-Formatierungskontextes beschrieben. Dies können Sie sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Level-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich in Bezug auf andere Boxen im Layout wie ein Block-Level-Element. Es ist, als ob Sie `display: block` auf das span angewendet hätten, allerdings erhalten wir auch das veränderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Platz zwischen den beiden Flex-Items zu setzen.

```html live-sample___span-flex
<span class="flex"> Some text <em>emphasized text</em> </span>
```

```css live-sample___span-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("span-flex")}}

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich auf die gleiche Weise wie die Flex-Kinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass das Elternteil jetzt eine Inline-Level-Box ist. Es verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die gesamte Breite (oder Größe in der Inline-Dimension) ein, wie es eine Block-Level-Box tut. Das bedeutet, dass etwas nachfolgender Text neben dem Flex-Container erscheinen könnte.

```html live-sample___inline-flex
<div class="flex">
  <div>One</div>
  <div>Two</div>
</div>
Text following the flex container.
```

```css live-sample___inline-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex > div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex {
  border: 5px solid #ccc;
  display: inline-flex;
}
```

{{EmbedLiveSample("inline-flex")}}

Dasselbe gilt, wenn man mit Grid-Layout arbeitet. Die Verwendung von `display: grid` ergibt eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` wird eine Inline-Level-Box erstellen, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwenden der Multi-Keyword-Syntax

Wie aus der obigen Erklärung ersichtlich ist, hat die `display`-Eigenschaft große Fähigkeiten. Neben der Angabe, ob etwas Block-Level oder Inline-Level im Verhältnis zu anderen Boxen auf der Seite ist, zeigt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, zwei Werte — einen outer und einen inner Wert — darauf zu setzen. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

```html live-sample___multi-keyword-flex
<h1>Multiple values for display</h1>

<div class="flex flex1">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>

<p>The first example is a block element with flex children.</p>

<div class="flex flex2">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>
The second example is an inline element with flex children.
```

```css live-sample___multi-keyword-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  gap: 10px;
}

.flex > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex1 {
  display: block flex;
}

.flex2 {
  display: inline flex;
}
```

{{EmbedLiveSample("multi-keyword-flex", "", "300px")}}

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die gebräuchlichsten sind in der unten stehenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary).

| Einzelwert     | Mehrfachwert       |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## display: block flow-root und display: inline flow-root

Bezüglich der Frage, wie diese Mehrwert-Syntax dabei hilft, CSS-Layout zu klären, können wir einige Werte in der oben stehenden Tabelle betrachten, die Ihnen vielleicht weniger vertraut sind. Die Multi-Keyword `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht hineinragen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen. Das erste `<div>`-Element mit den Demosteuerungen ist versteckt, damit wir uns stattdessen auf die nachfolgenden Elemente konzentrieren können. Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Das Auffällige an diesem Layout ist, dass sich kein Inhalt zwischen den Elternelementen und den Kinderelementen befindet, und das Kinderelement hat einen oberen Rand (Margin) angewendet. Sie könnten erwarten, dass der obere Rand das Kinderelement innerhalb des Elternelements effektiv nach unten drückt, aber was stattdessen passiert, ist etwas, das [_margin collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird. In diesem Fall erstreckt sich der Rand des Kinderelements weit über den Begrenzungsrahmen des Elternelements hinaus und schiebt das Elternelement weiter nach unten auf die Seite. Dies ist leichter zu erkennen, wenn Sie das Boxmodell des Kinderelements [in den Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkung verschiedener `display`-Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Rand des Kinderelements relativ zur äußeren Kante seines Elternteils gemacht wird und der Randkollaps vermieden wird. Das Wechseln zwischen `display: flow-root` und `display: block flow-root` wird denselben Effekt wie das Ein-Wert-Schlüsselwort `flow-root` erzielen.

```js hidden
const parentDiv = document.getElementById("parent");
const siblingDiv = document.getElementById("sibling");
const displayTypeSelect = document.getElementById("displayType");
const displayType = displayTypeSelect.value;

function changeDisplayType() {
  parentDiv.style.display = displayType;
  siblingDiv.style.display = displayType;
}

displayTypeSelect.addEventListener("change", changeDisplayType);
```

```css hidden
#controls {
  padding: 1rem;
  outline: 2px dashed black;
}
body {
  margin: 10px;
  font-family: sans-serif;
}
```

```css
div,
p {
  outline: 2px solid black;
  background-color: cornflowerblue;
  display: block;
  margin-bottom: 2rem;
}

#parent {
  background-color: oldlace;
  min-height: 2rem;
}

#child {
  margin-top: 4rem;
  outline: 2px dashed red;
}

#sibling {
  background-color: lavender;
}
```

```html hidden
<div id="controls">
  <label for="displayType">display:</label>
  <select id="displayType">
    <option value="block">block</option>
    <option value="flow-root">flow-root</option>
    <option value="block flow-root">block flow-root</option>
    <option value="inline">inline</option>
    <option value="inline flow-root">inline flow-root</option>
  </select>
</div>
```

```html
<div id="parent">
  <p id="child">The #child paragraph (nested in #parent).</p>
</div>
<p id="sibling">The #sibling paragraph (sibling of #parent).</p>
```

{{EmbedLiveSample("display_block_flow-root_and_display_inline_flow-root", '90%', 380)}}

Der `flow-root`-Wert ergibt Sinn, wenn Sie über Block- und Inline-Layouts nachdenken, die manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet werden. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht aus den Grenzen herausragen) und unser Inhalt wird im normalen Fluss angeordnet, indem Block- und Inline-Layout verwendet wird, es sei denn wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles in sich. Wenn Sie jedoch Floats und Ränder enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Flusswurzel erstellen und mit dem Block- und Inline-Layout neu beginnen. Von diesem Punkt abwärts ist alles innerhalb der neuen Flusswurzel enthalten.

Dies ist der Grund, warum `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden kann. Sie erstellen einen Block-Formatierungskontext mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem zusammenpassenden Paar `display: inline flow-root`? Dies ist die aktuelle Methode, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` gibt es seit den frühen Tagen von CSS. Der Grund, warum wir dazu neigen, ihn zu verwenden, ist, um zu ermöglichen, dass Abstände Inline-Elemente von einem Element wegschieben, zum Beispiel beim Erstellen von Navigationselementen oder wenn wir einer Inline-Element wie im untenstehenden Beispiel einen Hintergrund mit Abständen hinzufügen möchten.

```html live-sample___inline-block
<p>
  This paragraph has a span <span class="inline-block">with padding</span> it is
  an inline-block so the padding is contained and pushes the other line boxes
  away.
</p>
```

```css live-sample___inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  border: 2px dashed;
  width: 300px;
}
.inline-block {
  background-color: rgb(0 0 0 / 0.4);
  color: #fff;
  padding: 10px;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", "200px")}}

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, jedoch mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erhalten.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit haben Sie keinen Vorteil von der Verwendung der Multi-Keyword-Versionen, da es eine direkte Zuordnung für jede Multi-Keyword-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle dargestellt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was passiert, wenn nur der outer Wert `block` oder `inline` verwendet wird:

> "If a `<display-outside>` value is specified but `<display-inside>` is omitted, the element's inner display type defaults to flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Ein-Wert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den outer Display-Wert der Box, aber alle Kinder bleiben im normalen Fluss. Wenn nur ein inner Wert von `flex`, `grid`, oder `flow-root` angegeben wird, wird [in der Spezifikation](https://drafts.csswg.org/css-display/#inner-model) erklärt, dass der outer Wert auf `block` gesetzt werden sollte:

> "If a `<display-inside>` value is specified but `<display-outside>` is omitted, the element's outer display type defaults to block—except for ruby, which defaults to inline."

Schließlich haben wir einige [vorkomponierte individuelle Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützter Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Seiten, die die Einzelwerte verwenden, aufrechterhalten, während wir der Spezifikation erlauben, sich weiterzuentwickeln.
