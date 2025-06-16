---
title: Verwendung der Mehrfach-Stichwort-Syntax mit CSS-Display
short-title: Verwendung der Mehrfach-Stichwort-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{CSSRef}}

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Mehrfach-Stichwort-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Mehrfach-Stichwort-Syntax.

> [!NOTE]
> Die Mehrfach-Stichwort-Syntax wird auch als „Zwei-Wert-Syntax“ oder „Mehr-Wert-Syntax“ bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eine der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und andere Inline-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente, und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift in eine Inline-Überschrift umzuwandeln, würden wir folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht uns auch die Verwendung des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout) und von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept hierbei ist, dass die Änderung des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Display-Typ beschreibt, wie die Kinder dieses Kastens sich verhalten.

Zum Beispiel erstellen wir mit `display: flex` einen Block-Container mit Flex-Kindern. Die Kinder werden als Teilnehmer an einem Flex-Formatierungskontext beschrieben. Dies können Sie sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Element — verwenden und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als wenn Sie `display: block` auf das Span angewendet hätten, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das folgende Beispiel zeigt ein `<span>` mit `display: flex` angewendet. Es ist zu einem Block-Level-Element geworden, das den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den zwei Flex-Items zu platzieren.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Containers. Einzig die Tatsache, dass der übergeordnete Container jetzt eine Inline-Level-Box ist, hat sich geändert. Sie verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die ein Block-Level-Box tut. Das bedeutet, dass einige nachfolgende Texte neben dem Flex-Container erscheinen könnten.

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

Dasselbe gilt bei der Arbeit mit dem Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` wird eine Inline-Level-Box erstellen, die einen Grid-Formatierungskontext für die Kinder erzeugt.

## Verwendung der Mehrfach-Stichwort-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft erhebliche Kräfte. Sie zeigt nicht nur an, ob etwas ein Block- oder Inline-Element im Verhältnis zu anderen Boxen auf der Seite ist, sondern gibt auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf festgelegt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Dies bedeutet, dass wir anstelle von `display: flex`, um eine Block-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle vorhandenen Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschaft-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

| Einzelwert     | Mehrwert           |
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

Bezüglich der Frage, wie diese Mehrwert-Syntax zur Klarstellung des CSS-Layouts beiträgt, können wir einige der oben in der Tabelle aufgeführten Werte betrachten, die Ihnen vielleicht weniger bekannt sind. Die Mehrfach-Stichwort-Syntax `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erzeugen. Ein BFC sorgt dafür, dass alles in Ihrem Kasten bleibt und Dinge außerhalb des Kastens nicht eindringend hineinragen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie sich Display-Werte auf Formatierungskontexte auswirken. Das erste `<div>`-Element mit den Steuerungsoptionen des Demos ist verborgen, damit wir stattdessen die nachfolgenden Elemente fokussieren können. Die Elemente, die wir fokussieren sollten, sind die "Eltern"-, "Kind"- und "Geschwister"-`<div>`- und `<p>`-Elemente, die Sie durch ihre IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kind-Elementen gibt und dass das Kind-Element einen oberen Rand (margin) hat. Sie könnten erwarten, dass der obere Rand das Kind-Element innerhalb des Eltern-Elements nach unten drückt, aber stattdessen passiert etwas, das [_Rand-Zusammenbruch_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird. In diesem Fall erstreckt sich der Rand des Kind-Elements weit über die Begrenzungsbox des Elternteils hinaus und drückt das Eltern-Element weiter nach unten auf der Seite. Dies ist leichter zu sehen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung unterschiedlicher `display`-Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Rand des Kind-Elements relativ zur äußeren Kante seiner Eltern wird und Sie den Rand-Zusammenbruch vermeiden. Der Wechsel zwischen `display: flow-root` und `display: block flow-root` wird den gleichen Effekt wie das Einzelwert-Stichwort `flow-root` erzielen.

```js hidden
function changeDisplayType() {
  const parentDiv = document.getElementById("parent");
  const siblingDiv = document.getElementById("sibling");
  const displayType = document.getElementById("displayType").value;

  parentDiv.style.display = displayType;
  siblingDiv.style.display = displayType;
}
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
  <select id="displayType" onchange="changeDisplayType()">
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

Der `flow-root`-Wert ist sinnvoll, wenn Sie über Block- und Inline-Layout nachdenken, was manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinaus gehen) und unser Inhalt wird im normalen Fluss, unter Verwendung von Block- und Inline-Layout, angezeigt, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles innerhalb ihrer Grenzen. Wenn Sie jedoch Floats und Ränder einschließen, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Fließ-Wurzel erstellen und mit Block- und Inline-Layout von vorne beginnen. Von diesem Punkt an ist alles innerhalb der neuen Fließ-Wurzel enthalten.

Deshalb kann `display: flow-root` mit der Mehrwert-Syntax `display: block flow-root` geschrieben werden. Sie erzeugen einen Blockformatierungskontext mit einer Block-Level-Box und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` ist seit den frühen Tagen von CSS vorhanden. Der Grund, warum wir es oft verwenden, ist, um Polsterungen (padding) zu ermöglichen, die Inline-Elemente von einem Element wegschieben, wenn wir zum Beispiel Navigationspunkte erstellen, oder wenn wir einem Inline-Element wie im Beispiel unten einen Hintergrund mit Polsterung hinzufügen möchten.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats beinhalten. Es enthält alles innerhalb der Inline-Level-Box. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als veraltete Werte beschrieben, und derzeit haben Sie keinen Vorteil von der Verwendung der Mehrwert-Versionen, da es eine direkte Zuordnung für jede Mehrwert-Version zu einer veralteten Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` verwendet wird:

> „Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, ist der innere Display-Typ des Elements standardmäßig flow.“

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Display-Wert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> „Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, ist der äußere Display-Typ des Elements standardmäßig block—außer bei Rubis, die standardmäßig inline sind.“

Schließlich haben wir einige veraltete [vorab zusammengesetzte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen übersichtlich abgedeckt, was bedeutet, dass wir die Kompatibilität vorhandener und neuer Seiten, die die Einzelwerte verwenden, beibehalten können, während die Spezifikation sich weiterentwickelt.
