---
title: Verwenden der Multi-Schlüsselwort-Syntax mit CSS Display
short-title: Verwendung der Multi-Schlüsselwort-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Das [CSS Display Module](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Schlüsselwort-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Multi-Schlüsselwort-Syntax.

> [!NOTE]
> Multi-Schlüsselwort-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehrwert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente block-level und einige inline-level sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente, und ein `<span>` ist inline. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel, um eine Überschrift inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` eingestellt ist. Der wichtige Punkt ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kind-Elemente ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Display-Typ beschreibt, wie sich die Kinder dieses Kastens verhalten.

Zum Beispiel erstellen wir, wenn wir `display: flex` verwenden, einen Block-Level-Container mit Flex-Kindern. Die Kinder werden als Teil eines Flex-Formatierungskontexts beschrieben. Das kann man sehen, wenn man einen `<span>` nimmt — normalerweise ein Inline-Element — und ihm `display: flex` zuweist. Der `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als hätten Sie `display: block` auf den Span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat einen `<span>`, auf den `display: flex` angewendet wurde. Er ist zu einem Block-Level-Kasten geworden, der den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Items zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie einen Inline-Level-Kasten mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass der Elternteil jetzt ein Inline-Level-Kasten ist. Er verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) wie ein Block-Level-Kasten ein. Das bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt bei der Arbeit mit Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen einen Block-Level-Kasten, der einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt einen Inline-Level-Kasten, der einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Schlüsselwort-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft erhebliche Fähigkeiten. Zusätzlich zur Angabe, ob etwas in Beziehung zu anderen Boxen auf der Seite Block- oder Inline-Level ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir, anstatt `display: flex` einzustellen, um einen Block-Level-Kasten mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstatt `display: inline-flex`, um einen Inline-Level-Kasten mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle existierenden Werte von `display`; die gebräuchlichsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

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

Um zu sehen, wie diese Mehrwert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Die Mehrwert-Schlüsselwort `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der Zweck dieses Werts besteht ausschließlich darin, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihres Kastens bleibt und Dinge außerhalb des Kastens nicht eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie sich Display-Werte auf Formatierungskontexte auswirken. Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns auf die nachfolgenden Elemente konzentrieren können. Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern", "Kind" und "Geschwister" `<div>` und `<p>`-Elemente, die Sie durch ihre IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kind-Elementen gibt und das Kind-Element einen oberen Rand hat. Man könnte erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Eltern-Elements nach unten drückt, aber stattdessen passiert etwas, das als [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird. In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungsrahmen der Eltern hinaus und schiebt das Eltern-Element weiter nach unten auf der Seite. Dies ist leichter zu sehen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für den Elternteil zu erstellen, wodurch der Rand des Kind-Elements relativ zur äußeren Kante des Elternteils wird und die Randzusammenführung vermieden wird. Das Wechseln zwischen `display: flow-root` und `display: block flow-root` wird denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root` erzielen.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie über Block- und Inline-Layout nachdenken, das manchmal auch als [Normalfluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht aus den Grenzen hinausreichen) und unser Inhalt wird im Normalfluss ausgelegt, wobei Block- und Inline-Layout verwendet wird, es sei denn, wir ändern den Display-Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext). Diese enthalten auch alles in ihnen. Wenn Sie jedoch Floats und Ränder enthalten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Fluss-Root erstellen und mit Block- und Inline-Layout neu beginnen. Ab diesem Punkt abwärts ist alles innerhalb des neuen Fluss-Roots enthalten.

Dies ist der Grund, warum `display: flow-root` mit der Mehrfachwert-Syntax `display: block flow-root` geschrieben werden kann. Sie erstellen einen Block-Formatierungskontext mit einem Block-Level-Kasten und Kindern, die im Normalfluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` ist seit den frühen Tagen von CSS bekannt. Der Grund, warum wir ihn verwenden, ist, um das Padding zu ermöglichen, die Inline-Elemente von einem Element wegzudrücken, wenn wir zum Beispiel Navigationselemente erstellen oder wenn wir einen Hintergrund mit Padding zu einem Inline-Element hinzufügen möchten, wie im Beispiel unten.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb des Inline-Level-Kastens. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einem Inline-Level- anstatt eines Block-Level-Kastens. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit haben Sie keinen Vorteil, die Mehrfachwert-Versionen zu verwenden, da es eine direkte Zuordnung für jede Mehrfachwert-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben ist, aber `<display-inside>` weggelassen wird, wird der innere Display-Typ des Elements standardmäßig auf flow gesetzt."

Das bedeutet, dass sich das Verhalten genauso verhält wie in einer Einzelwert-Welt. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Display-Wert der Box, aber alle Kinder setzen sich im Normalfluss fort. Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Display-Typ des Elements standardmäßig auf block gesetzt—außer bei ruby, das standardmäßig auf inline gesetzt wird."

Schließlich haben wir einige Legacy-[vorkomponierte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte trifft, behandelt er sie genauso wie die Mehrfachwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während wir es der Spezifikation ermöglichen, sich weiterzuentwickeln.
