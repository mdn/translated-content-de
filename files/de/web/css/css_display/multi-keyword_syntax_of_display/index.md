---
title: Verwendung der Mehrfach-Keyword-Syntax mit CSS Display
short-title: Verwendung der Mehrfach-Keyword-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Mehrfach-Keyword-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Mehrfach-Keyword-Syntax.

> [!NOTE]
> Die Mehrfach-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Mehr-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level und einige Inline-Level sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Display-Typen. Beispielsweise sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level-Elemente, und ein `<span>` ist Inline-Level. Mithilfe der {{cssxref("display")}}-Eigenschaft können wir zwischen Block- und Inline-Elementen wechseln. Um beispielsweise eine Überschrift inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept hierbei ist, dass die Änderung eines `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch demonstrieren, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block-Level- oder Inline-Level-Element ist. Der innere Display-Typ beschreibt, wie sich die Kinder dieses Box verhalten.

Wenn wir beispielsweise `display: flex` verwenden, erstellen wir ein Block-Level-Container mit Flex-Kindern. Die Kinder nehmen an einem Flex-Formatierungskontext teil. Das können Sie sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Level-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als hätten Sie `display: block` auf das Span-Element angewendet, aber wir erhalten auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu positionieren.

```html live-sample___span-flex
<span class="flex"> Some text <em>emphasized text</em> </span>
```

```css live-sample___span-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #cccccc;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("span-flex")}}

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Das Einzige, was sich geändert hat, ist, dass der Elternteil jetzt eine Inline-Level-Box ist. Daher verhält sie sich wie andere Inline-Level-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Das bedeutet, dass einige nachfolgende Texte neben dem Flex-Container erscheinen können.

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
  border: 5px solid #cccccc;
  display: inline-flex;
}
```

{{EmbedLiveSample("inline-flex")}}

Das Gleiche gilt für die Arbeit mit dem Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Gitter-Formatierungskontext für die Kinder erstellt.

## Verwendung der Mehrfach-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Neben der Angabe, ob etwas im Verhältnis zu anderen Boxen auf der Seite Block-Level oder Inline-Level ist, gibt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstatt `display: flex` zu setzen, um eine Block-Level-Box mit Flex-Kindern zu erstellen, wir `display: block flex` verwenden. Anstatt `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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
  border: 5px solid #cccccc;
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

Es gibt Zuordnungen für alle vorhandenen Werte von `display`; die gebräuchlichsten sind in der folgenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary).

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

In Bezug auf die Klarstellung des CSS-Layouts durch diese Mehrwert-Syntax können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Der Mehrwert `display: block flow-root` ordnet einem Einzelwert zu; `display: flow-root`. Dieser Wert hat nur den Zweck, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht in diese eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie sich Display-Werte auf Formatierungskontexte auswirken. Das erste `<div>`-Element mit den Demo-Steuerelementen ist verborgen, damit wir uns stattdessen auf die nachfolgenden Elemente konzentrieren können. Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Parent- und Child-Elementen gibt und das Child-Element einen oberen Rand hat. Sie könnten erwarten, dass der obere Rand effektiv das Kind-Element innerhalb des Eltern-Elements nach unten schiebt, aber stattdessen passiert etwas, das als [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird. In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungsrahmen des Eltern-Elements und schiebt das Eltern-Element weiter nach unten auf der Seite. Dies ist leichter erkennbar, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um den Effekt verschiedener `display`-Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, was den Rand des Kind-Elements relativ zum äußeren Rand des Elternteils macht und den Margin Collapse vermeidet. Das Wechseln zwischen `display: flow-root` und `display: block flow-root` führt zum selben Effekt wie das Einzelwert-Keyword `flow-root`.

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

Der Wert `flow-root` macht Sinn, wenn Sie an block- und inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margins können nicht über die Grenzen hinausgehen) und unser Inhalt wird im normalen Fluss, unter Verwendung von Block- und Inline-Layout, platziert, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, entsprechend). Diese enthalten ebenfalls alles in sich. Wenn Sie jedoch Floats und Margins enthalten, aber weiterhin das Block- und Inline-Layout verwenden möchten, können Sie einen neuen Fluss-Root erstellen und von diesem Punkt abwärts alles innerhalb des neuen Fluss-Rootes einschließen.

Deshalb kann `display: flow-root` mit der Mehrfach-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Möglichkeit, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir es tendenziell verwenden, ist, dass es erlaubt, Polsterung zu verwenden, um Inline-Elemente von einem Element weg zu schieben, beispielsweise bei der Erstellung von Navigationselementen, oder wenn ein Hintergrund mit Polsterung zu einem Inline-Element hinzugefügt werden soll, wie im folgenden Beispiel.

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
  color: white;
  padding: 10px;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", "200px")}}

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, aber mit einer Inline-Level-, anstatt einer Block-Level-Box. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und erhalten dasselbe Ergebnis.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit erhalten Sie keinen Nutzen von der Verwendung der Mehrfach-Keyword-Versionen, da es für jede Mehrfach-Keyword-Version eine direkte Zuordnung zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "If a `<display-outside>` value is specified but `<display-inside>` is omitted, the element's inner display type defaults to flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt der Fall ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Display-Wert der Box, aber alle Kinder verbleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "If a `<display-inside>` value is specified but `<display-outside>` is omitted, the element's outer display type defaults to block—except for ruby, which defaults to inline."

Schließlich haben wir einige Legacy- [vorgefertigte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrfach-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

Somit sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während wir der Spezifikation die Möglichkeit geben, sich weiterzuentwickeln.
