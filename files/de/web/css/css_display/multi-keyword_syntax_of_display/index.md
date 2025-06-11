---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS [`display`](/de/docs/Web/CSS/display) Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und andere Inline-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeigearten. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente, und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Um zum Beispiel eine Überschrift inline darzustellen, würden wir folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft erlaubt es uns auch, [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept zu verstehen ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitterelementen und reagieren auf die Eigenschaften in den Gitter- und Flexbox-Spezifikationen.

Was Gitter und Flexbox demonstrieren, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeige-Typ hat. Der äußere Anzeige-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Anzeige-Typ beschreibt, wie sich die Kinder dieser Box verhalten.

Zum Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Container mit Flex-Kindern. Die Kinder werden als Teilnehmer eines Flex-Formatierungskontextes beschrieben. Wenn Sie einen `<span>` nehmen — normalerweise ein Inline-Element — und `display: flex` darauf anwenden, wird der `<span>` zu einem Block-Element. Es verhält sich wie Block-Elemente in Bezug auf andere Boxen im Layout. Es ist, als ob Sie `display: block` auf den Span angewendet hätten, jedoch erfahren wir auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel hat einen `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Containers. Der einzige Unterschied besteht darin, dass das Elternteil jetzt eine Inline-Box ist. Es verhält sich daher wie andere Inline-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Box einnimmt. Das bedeutet, dass einige folgende Texte neben dem Flex-Container erscheinen könnten.

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

Dasselbe gilt, wenn Sie mit dem Gitterlayout arbeiten. Die Verwendung von `display: grid` ergibt eine Block-Box, die einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Box, die einen Gitter-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Fähigkeiten. Neben der Angabe, ob etwas Block- oder Inline-Level im Verhältnis zu anderen Boxen auf der Seite ist, gibt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft das Setzen von zwei Werten — einem äußeren und einem inneren Wert. Die ursprüngliche Einwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Block-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle existierenden Werte von `display`; die gebräuchlichsten sind in der folgenden Tabelle aufgelistet. Eine vollständige Liste finden Sie in der Tabelle in der [`display`-Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

| Einzelwert     | Multi-Wert         |
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

In Bezug darauf, wie diese Multi-Wert-Syntax hilft, das CSS-Layout zu klären, können wir einige Werte in der obigen Tabelle betrachten, die Ihnen möglicherweise weniger vertraut sind. Die Multi-Keyword `display: block flow-root` wird mit einem Einzelwert abgeglichen; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles in Ihrer Box bleibt und Dinge außerhalb der Box nicht eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns stattdessen auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Das Bemerkenswerte an diesem Layout ist, dass es keinen Inhalt zwischen den Parent- und Child-Elementen gibt, und das Child-Element einen oberen Rand hat.
Man könnte erwarten, dass der obere Rand das Kind-Element innerhalb des Elternteils effektiv nach unten drückt, aber stattdessen passiert etwas, das als [_margin collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungsrahmen des Elternteils hinaus und drückt das Elternelement weiter nach unten auf der Seite.
Dies ist leichter zu erkennen, wenn man das Box-Modell des Kind-Elements [in den Entwickler-Tools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model) inspiziert.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternelement zu erstellen, so dass der Rand des Kind-Elements relativ zur äußeren Kante des Elternelements ist und das Margin-Collapse vermieden wird.
Das Wechseln zwischen `display: flow-root` und `display: block flow-root` wird denselben Effekt haben wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root`-Wert macht Sinn, wenn man an Block- und Inline-Layout denkt, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausreichen) und unser Inhalt wird im normalen Fluss dargestellt, indem Block- und Inline-Layout verwendet wird, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Gitter- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (jeweils ein Gitter- oder Flex-Formatierungskontext). Auch diese beinhalten alles in ihnen. Wenn Sie jedoch Floats und Ränder enthalten wollen, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Fluss-Root erstellen und von diesem Punkt aus mit Block- und Inline-Layout neu beginnen. Von diesem Punkt abwärts ist alles innerhalb des neuen Fluss-Roots enthalten.

Das ist der Grund, warum `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden kann. Sie erstellen einen Block-Formatierungskontext, mit einer Blockbox und Kindern, die im normalen Fluss teilnehmen. Und was ist mit dem Paar `display: inline flow-root`? Dies ist die derzeitige Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn verwenden, ist, um zum Beispiel Polsterung zu ermöglichen, um Inline-Elemente von einem Element wegzuschieben, wenn Navigationselemente erstellt werden, oder wenn wir ein Hintergrundbild mit Polsterung zu einem Inline-Element hinzufügen möchten, wie im folgenden Beispiel gezeigt.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, aber mit einer Inline-Box, anstelle einer Block-Box. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` ändern zu `display: inline flow-root` und erhalten dasselbe Ergebnis.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit erhalten Sie keinen Nutzen aus der Verwendung der Multi-Keyword-Versionen, da es eine direkte Zuordnung jeder Multi-Keyword-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle dargestellt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "If a `<display-outside>` value is specified but `<display-inside>` is omitted, the element's inner display type defaults to flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, aber alle Kinder verbleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "If a `<display-inside>` value is specified but `<display-outside>` is omitted, the element's outer display type defaults to block—except for ruby, which defaults to inline."

Schließlich haben wir einige Legacy [vorkomponierte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während es der Spezifikation ermöglicht wird, sich weiterzuentwickeln.
