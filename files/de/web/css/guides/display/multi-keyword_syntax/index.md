---
title: Verwenden der Multi-Keyword-Syntax mit CSS Display
short-title: Verwendung der Multi-Keyword-Syntax
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das [CSS Display Modul](/de/docs/Web/CSS/Guides/Display) definiert eine Multi-Keyword-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/Reference/Properties/display). Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Multi-Keyword-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehrfach-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level und einige Inline-Level sind. Dies sind ihre [outeren](/de/docs/Web/CSS/Reference/Values/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level, und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel würden wir, um eine Überschrift inline zu machen, das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept, das zu verstehen ist, ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **outeren** als auch einen **inneren** Display-Typ hat. Der outere Display-Typ beschreibt, ob das Element Block-Level oder Inline-Level ist. Der innere Display-Typ beschreibt, wie sich die Kinder dieser Box verhalten.

Als Beispiel: Wenn wir `display: flex` verwenden, erstellen wir ein Block-Level-Container mit Flex-Kindern. Die Kinder werden beschrieben, als ob sie an einem Flex-Formatierungskontext teilnehmen. Das sehen Sie, wenn Sie ein `<span>` nehmen - normalerweise ein Inline-Level-Element - und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie ein Block-Level in Bezug auf andere Boxen im Layout. Es ist, als ob Sie `display: block` auf das Span angewendet hätten, jedoch ändern sich auch das Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es hat sich in eine Block-Level-Box verwandelt, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Der einzige Unterschied ist, dass das Elternteil jetzt eine Inline-Level-Box ist. Sie verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Das bedeutet, dass einige nachfolgende Texte neben dem Flex-Container erscheinen könnten.

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

Dasselbe gilt für die Arbeit mit dem Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft erhebliche Kräfte. Zusätzlich zum Anzeigen, ob etwas im Verhältnis zu anderen Boxen auf der Seite Block-Level oder Inline-Level ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte - ein äußerer und ein innerer Wert - auf ihr gesetzt werden. Die ursprüngliche Ein-Wert-Syntax ist ebenfalls gültig.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

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

Bezüglich dessen, wie diese Mehrwert-Syntax hilft, das CSS-Layout zu klären, können wir uns einige Werte in der oben aufgeführten Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Der Multi-Keyword `display: block flow-root` mappt zu einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box innen bleibt und Dinge außerhalb der Box nicht eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, sodass wir uns stattdessen auf die nachfolgenden Elemente konzentrieren können.
Die Elemente, die wir betrachten sollten, sind die "parent", "child", und "sibling" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert bei diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kind-Elementen gibt und das Kind-Element einen oberen Rand angewendet hat.
Sie könnten erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Eltern-Elements nach unten schiebt, aber stattdessen passiert etwas, das als [_Randkollaps_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) bezeichnet wird.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über die Begrenzungsbox des Elternteils hinaus und schiebt das Elternteil weiter nach unten auf der Seite.
Das ist leichter zu sehen, wenn Sie das Boxmodell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option in dem `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Rand des Kind-Elements relativ zum äußeren Rand des Elternteils wird und der Randkollaps vermieden wird.
Der Wechsel zwischen `display: flow-root` und `display: block flow-root` wird den gleichen Effekt wie das Einzelwert-Schlüsselwort `flow-root` erzielen.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie an Block- und Inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausreichen) und unsere Inhalte liegen im normalen Fluss, Verwendung von Block- und Inline-Layout, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Wenn wir ein Grid oder flexiblen Container erstellen, wird ebenfalls ein neuer Formatierungskontext erstellt (ein Grid- oder Flexformatierungskontext, jeweils). Diese enthalten auch alles innerhalb von ihnen. Wenn Sie jedoch Floats und Ränder enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Flussswurzel erstellen und mit Block- und Inline-Layout neu anfangen. Von diesem Punkt abwärts wird alles innerhalb der neuen Flussswurzel enthalten.

Aus diesem Grund kann `display: flow-root` mit der Mehrwert-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Blockformatierungskontext mit einer Block-Level-Box und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` gibt es seit den frühen Tagen von CSS. Der Grund, warum wir ihn verwenden, besteht darin, das Padding zu ermöglichen, um Inline-Elemente von einem Element wegzuschieben, wenn zum Beispiel Navigationspunkte erstellt werden, oder wenn man einen Hintergrund mit Padding zu einem Inline-Element hinzufügen möchte, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, jedoch mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit gewinnen Sie keinen Vorteil durch die Verwendung der Mehrwert-Versionen, da es eine direkte Zuordnung für jede Mehrwert-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle demonstriert.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der outere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Display-Typ des Elements standardmäßig auf flow gesetzt."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt wäre. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Display-Wert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Display-Typ des Elements standardmäßig auf block gesetzt—außer für Ruby, welches auf inline standardmäßig gesetzt wird."

Schließlich haben wir einige veraltete [vorab zusammengesetzte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwert trifft, behandelt er sie genauso wie die Mehrwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Seiten, die die Einzelwerte verwenden, beibehalten, während die Spezifikation sich weiterentwickelt.
