---
title: Verwendung der Multi-Keyword-Syntax mit CSS Display
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{CSSRef}}

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS [`display`](/de/docs/Web/CSS/display) Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Two-Value-Syntax" oder "Multi-Value-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level- und einige Inline-Level-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Darstellungstypen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level-Elemente, und ein `<span>` ist ein Inline-Level-Element. Mit der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel, um eine Überschrift inline zu machen, würden wir folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display` Eigenschaft erlaubt es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept zu verstehen ist, dass die Änderung des `display` Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Elemente zu Flex- oder Gitterelementen und reagieren auf die Eigenschaften in den Spezifikationen von Grid und Flexbox.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Darstellungstyp hat. Der äußere Darstellungstyp beschreibt, ob das Element Block-Level oder Inline-Level ist. Der innere Darstellungstyp beschreibt, wie die Kinder dieses Kastens sich verhalten.

Als Beispiel: Wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden als Teilnehmer in einem Flex-Formatierungskontext beschrieben. Das können Sie sehen, wenn Sie ein `<span>` – normal ein Inline-Level-Element – nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Dinge in Bezug auf andere Kästen im Layout. Es ist, als hätten Sie `display: block` auf das Span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>`, auf das `display: flex` angewendet wurde. Es ist zu einem Block-Level-Kasten geworden, der im Inline-Bereich den gesamten verfügbaren Platz einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie einen Inline-Level-Kasten mit Flex-Kindern. Die Kinder verhalten sich auf die gleiche Weise wie die Flex-Kinder eines Block-Level-Containers. Das Einzige, was sich geändert hat, ist, dass der Elternteil jetzt ein Inline-Level-Kasten ist. Er verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die ein Block-Level-Kasten tut. Das bedeutet, dass ein folgender Text neben dem Flex-Container stehen könnte.

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

Das Gleiche gilt, wenn Sie mit Grid-Layout arbeiten. Die Verwendung von `display: grid` gibt Ihnen einen Block-Level-Kasten, der einen Gitterformatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt einen Inline-Level-Kasten, der einen Gitterformatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display` Eigenschaft erhebliche Fähigkeiten. Zusätzlich dazu, dass sie angibt, ob etwas in Bezug auf andere Kästen auf der Seite Block-Level oder Inline-Level ist, gibt sie auch den Formatierungskontext innerhalb des Kastens an, auf den sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display` Eigenschaft, dass zwei Werte – ein äußerer und ein innerer Wert – darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass anstelle von `display: flex` um einen Block-Level-Kasten mit Flex-Kindern zu erstellen, `display: block flex` verwendet wird. Anstelle von `display: inline-flex` um einen Inline-Level-Kasten mit Flex-Kindern zu erstellen, wird `display: inline flex` verwendet. Das folgende Beispiel demonstriert diese Werte.

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

Es gibt Zuordnungen für alle existierenden Werte von `display`; die häufigsten sind in der unten stehenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display` Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

| Einzelwert     | Multiwert          |
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

In Bezug auf die Frage, wie diese Multi-Value-Syntax hilft, CSS-Layout zu klären, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Das Multi-Keyword `display: block flow-root` ordnet einem Einzelwert zu; `display: flow-root`. Der einzige Zweck dieses Werts ist die Erstellung eines neuen [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC). Ein BFC stellt sicher, dass alles innerhalb Ihres Kastens bleibt und Dinge außerhalb des Kastens nicht hineinreichen können.

Im folgenden Beispiel demonstrieren zwei `<p>` Elemente, eines innerhalb eines `<div>`, wie sich Display-Werte auf Formatierungskontexte auswirken. Das erste `<div>` Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns stattdessen auf die nachfolgenden Elemente konzentrieren können. Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>` Elemente, die Sie an ihren IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass sich kein Inhalt zwischen den übergeordneten und untergeordneten Elementen befindet und das untergeordnete Element einen angewendeten oberen Rand hat. Sie könnten erwarten, dass der obere Rand das untergeordnete Element effektiv innerhalb des übergeordneten Elements nach unten drückt, aber stattdessen tritt etwas auf, das als [_Randkollaps_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird. In diesem Fall dehnt sich der Rand des untergeordneten Elements weit über die Begrenzung des übergeordneten Elements hinaus aus und drückt das übergeordnete Element weiter nach unten auf der Seite. Dies ist einfacher zu erkennen, wenn Sie das Box-Modell des untergeordneten Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>` Element, um die Auswirkungen verschiedener `display` Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, indem der Rand des Kind-Elements relativ zur äußeren Kante des Elternteils gemacht wird und der Randkollaps vermieden wird. Das Wechseln zwischen `display: flow-root` und `display: block flow-root` erzielt denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root` Wert macht Sinn, wenn Sie an Block- und Inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausgehen), und unser Inhalt wird im normalen Fluss mit Block- und Inline-Layout angezeigt, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Die Erstellung eines Gitter- oder Flex-Containers erstellt auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten auch alles in sich. Wenn Sie jedoch Floats und Ränder enthalten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Fließwurzel erstellen und mit Block- und Inline-Layout von neuem beginnen. Alles, was danach kommt, ist in der neuen Fließwurzel enthalten.

Deshalb kann `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einem Block-Level-Kasten und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn verwenden, ist, dass wir damit den Abstand zwischen Inline-Elementen erweitern können, wenn wir zum Beispiel Navigationselemente erstellen oder wenn wir einem Inline-Element einen Hintergrund mit Abstand hinzufügen möchten, wie im unten stehenden Beispiel.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb des Inline-Level-Kastens. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, aber mit einem Inline-Level- statt einem Block-Level-Kasten. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als veraltete Werte beschrieben, und derzeit gewinnen Sie keinen Vorteil aus der Verwendung der Multi-Keyword-Versionen, da es eine direkte Zuordnung für jede Multi-Keyword-Version zu einer alten Version gibt, wie in der obigen Tabelle gezeigt.

Um mit den Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` verwendet wird:

> "If a `<display-outside>` value is specified but `<display-inside>` is omitted, the element's inner display type defaults to flow."

Das bedeutet, dass das Verhalten genau so ist wie in einer Einzelwert-Welt. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Darstellungswert des Kastens, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, dann erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "If a `<display-inside>` value is specified but `<display-outside>` is omitted, the element's outer display type defaults to block—except for ruby, which defaults to inline."

Schließlich haben wir einige veraltete [vorkomponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität mit bestehenden und neuen Seiten beibehalten, die die Einzelwerte verwenden, während wir es der Spezifikation erlauben, sich weiterzuentwickeln.
