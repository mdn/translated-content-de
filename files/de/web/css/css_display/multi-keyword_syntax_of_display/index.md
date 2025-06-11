---
title: Verwendung der Multi-Keyword-Syntax mit CSS Display
short-title: Verwendung der Multi-Keyword-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [CSS Display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehr-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block- und einige Inline-Elemente sind. Dies sind ihre [outer](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente, und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift inline zu machen, würden wir folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft lässt uns auch [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept zu verstehen ist, dass die Änderung des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch demonstrieren, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Display-Typ beschreibt, wie die Kinder dieser Box sich verhalten.

Ein Beispiel: Wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden beschrieben, als ob sie an einem Flex-Formatierungskontext teilnehmen. Sie können dies sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente in Bezug auf andere Boxen im Layout. Es ist, als hätten Sie `display: block` auf das Span angewendet, aber wir erhalten auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel zeigt ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Items zu verteilen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den einzelnen Wert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Der einzige Unterschied ist, dass das Elternteil nun eine Inline-Level-Box ist. Deshalb verhält es sich wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box hat. Das bedeutet, dass nachfolgender Text neben dem Flex-Container stehen könnte.

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

Dasselbe gilt beim Arbeiten mit Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Zusätzlich zu dem Hinweis, ob etwas auf Block- oder Inline-Ebene in Beziehung zu anderen Boxen auf der Seite steht, gibt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, zwei Werte — einen äußeren und einen inneren — darauf zu setzen. Die ursprüngliche Ein-Wert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle der Einstellung von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstatt `display: inline-flex` zu verwenden, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Abbildungen für alle bestehenden Werte von `display`; die gebräuchlichsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschaften-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

| Einzelner Wert | Mehrfachwert       |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## `display: block flow-root` und `display: inline flow-root`

Um zu verstehen, wie diese Mehrwert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger bekannt sind. Die Multi-Keyword-Syntax `display: block flow-root` mappt zu einem einzelnen Wert; `display: flow-root`. Der einzige Zweck dieses Wertes besteht darin, einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC sorgt dafür, dass alles innerhalb Ihrer Box bleibt und externe Elemente nicht eindringen können.

Im Beispiel unten demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern", "Kind" und "Geschwister" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass sich kein Inhalt zwischen den Eltern- und Kind-Elementen befindet und das Kind-Element eine obere Margin angewendet hat.
Sie könnten erwarten, dass die obere Margin das Kind-Element innerhalb des Eltern-Elements effektiv nach unten schiebt, aber stattdessen tritt etwas auf, das [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird.
In diesem Fall erstreckt sich die Margin des Kind-Elements weit über die Begrenzungsbox der Eltern und schiebt das Eltern-Element weiter nach unten auf der Seite.
Dies ist leichter zu erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, sodass die Margin des Kind-Elements relativ zum äußeren Rand des Elternteils ist und das Margin Collapse vermieden wird.
Ein Wechsel zwischen `display: flow-root` und `display: block flow-root` erzielt den gleichen Effekt wie das Einzelwert-Keyword `flow-root`.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie an Block- und Inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margins können nicht aus den Begrenzungen hinausgehen) und unser Inhalt wird im normalen Fluss dargestellt, wobei Block- und Inline-Layout verwendet werden, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles innerhalb. Wenn Sie jedoch Floats und Margins enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Flow-Root erstellen und mit Block- und Inline-Layout von vorne beginnen. Von diesem Punkt abwärts wird alles innerhalb des neuen Flow-Root enthalten.

Aus diesem Grund kann `display: flow-root` mithilfe der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was aber ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert bereits seit den frühen Tagen von CSS. Der Grund, warum wir ihn häufig verwenden, ist, dass er es erlaubt, Padding zu verwenden, um Inline-Elemente von einem Element wegzuschieben, beispielsweise beim Erstellen von Navigationselementen oder beim Hinzufügen eines Hintergrunds mit Padding zu einem Inline-Element, wie im Beispiel unten.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, aber mit einer Inline-Level-, anstatt einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von Display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit haben Sie keinen Vorteil von der Verwendung der Mehrwert-Versionen, da es eine direkte Zuordnung für jede Mehrwert-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit den Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert spezifiziert ist, aber `<display-inside>` weggelassen wird, ist der innere Display-Typ des Elements standardmäßig flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Display-Wert der Box, aber alle Kinder setzen ihren Verlauf im normalen Fluss fort.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` spezifiziert ist, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert spezifiziert ist, aber `<display-outside>` weggelassen wird, ist der äußere Display-Typ des Elements standardmäßig block—außer für Ruby, das standardmäßig inline ist."

Schließlich haben wir einige Legacy [vorab komponierte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen gut abgedeckt, was bedeutet, dass wir die Kompatibilität sowohl bestehender als auch neuer Websites beibehalten, die die Einzelwerte verwenden, während die Spezifikation sich weiterentwickeln kann.
