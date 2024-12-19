---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
slug: Web/CSS/display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das [CSS display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS [`display`](/de/docs/Web/CSS/display) Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level-Elemente und andere Inline-Level-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeigetypen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level-Elemente, und ein `<span>` ist ein Inline-Level-Element. Mit der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel verwenden wir, um eine Überschrift inline darzustellen, den folgenden CSS:

```css
h1 {
  display: inline;
}
```

Die `display` Eigenschaft erlaubt es uns auch, [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept, das verstanden werden muss, ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeigetyp hat. Der äußere Anzeigetyp beschreibt, ob das Element ein Block-Level- oder ein Inline-Level-Element ist. Der innere Anzeigetyp beschreibt, wie die Kinder dieses Kastens sich verhalten.

Zum Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden als Teilnehmer in einem Flex-Formatierungskontext beschrieben. Sie können dies sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Level-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Objekte im Verhältnis zu anderen Boxen im Layout. Es ist, als ob Sie `display: block` auf den Span angewendet hätten, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es ist zu einem Block-Level-Kasten geworden, der im Inline-Direktion allen verfügbaren Platz einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Items zu setzen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie einen Inline-Level-Kasten mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass der übergeordnete Kasten jetzt ein Inline-Level-Kasten ist. Daher verhält es sich wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die ein Block-Level-Kasten tut. Dies bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt, wenn Sie mit Grid-Layout arbeiten. Mit `display: grid` erhalten Sie einen Block-Level-Kasten, der einen Grid-Formatierungskontext für die direkten Kinder erstellt. Mit `display: inline-grid` erstellen Sie einen Inline-Level-Kasten, der einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display` Eigenschaft beträchtliche Fähigkeiten. Zusätzlich zum Angeben, ob etwas ein Block-Level- oder Inline-Level-Element im Verhältnis zu anderen Boxen auf der Seite ist, gibt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display` Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Ein-Wert-Syntax ist ebenfalls gültig.

Das bedeutet, anstelle von `display: flex`, um einen Block-Level-Kasten mit Flex-Kindern zu erstellen, verwenden wir `display: block flex`. Anstelle von `display: inline-flex`, um einen Inline-Level-Kasten mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle vorhandenen `display`-Werte; die gebräuchlichsten sind in der folgenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display`-Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

In Bezug auf die Frage, wie diese Multi-Werte-Syntax bei der Klärung des CSS-Layouts hilft, können wir einige Werte in der obenstehenden Tabelle betrachten, die Ihnen möglicherweise weniger vertraut sind. Der Multi-Keyword-Wert `display: block flow-root` ordnet sich einem Einzelwert zu; `display: flow-root`. Der einzige Zweck dieses Wertes besteht darin, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihres Kastens innen bleibt, und dass Dinge außerhalb des Kastens nicht in ihn eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie die Anzeigewerte die Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Kontrollen ist ausgeblendet, sodass wir uns auf die nachfolgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern"-, "Kind"- und "Geschwister"-`<div>` und `<p>`-Elemente, die Sie an ihren IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kindelementen gibt und das Kindelement einen angewendeten oberen Rand hat.
Sie könnten erwarten, dass der obere Rand das Kindelement innerhalb des Elternelements effektiv nach unten drückt, aber stattdessen passiert etwas, das [_Randkollaps_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kindelements weit über das Begrenzungsfeld des Elternteils hinaus und drückt das Elternelement weiter nach unten auf der Seite.
Dies lässt sich leichter sehen, wenn Sie das Boxmodell des Kindelements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkungen der verschiedenen `display`-Werte zu sehen.
Jeden Wert mit `flow-root` können Sie verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, welcher den Rand des Kindelements relativ zum äußeren Rand seines Elternteils macht und den Randkollaps vermeidet.
Der Wechsel zwischen `display: flow-root` und `display: block flow-root` erreicht denselben Effekt wie das Einzelwertstichwort `flow-root`.

```js hidden
function changeDisplayType() {
  var parentDiv = document.getElementById("parent");
  var siblingDiv = document.getElementById("sibling");
  var displayType = document.getElementById("displayType").value;

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

Der Wert `flow-root` macht Sinn, wenn Sie an Block- und Inline-Layout denken, was manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht aus den Begrenzungen herausragen) und unser Inhalt wird im normalen Fluss, unter Verwendung von Block- und Inline-Layout, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Die Erstellung eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles innerhalb von ihnen. Wenn Sie jedoch Floats und Ränder enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Fluss-Root erstellen und mit Block- und Inline-Layout beginnen. Von diesem Punkt an ist alles innerhalb des neuen Fluss-Root enthalten.

Deshalb kann `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einem Block-Level-Kasten und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem gepaarten `display: inline flow-root`? Dies ist die aktuelle Möglichkeit, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn häufig verwenden, ist, um zu erlauben, dass Polsterung Inline-Elemente von einem Element wegdrückt, beispielsweise beim Erstellen von Navigationselementen, oder wenn Sie einem Inline-Element einen Hintergrund mit Polsterung hinzufügen möchten, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb des Inline-Level-Kastens. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, aber mit einem Inline-Level-, anstatt einem Block-Level-Kasten. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und erhalten dasselbe Ergebnis.

## Was ist mit den alten Werten des display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit gewinnen Sie keinen Vorteil aus der Verwendung der Multi-Keyword-Versionen, da es eine direkte Zuordnung jeder Multi-Keyword-Version zu einer Legacy-Version gibt, wie in der obenstehenden Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` ausgelassen wird, ist der innere Anzeigetyp des Elements standardmäßig auf flow eingestellt."

Das bedeutet, dass das Verhalten exakt so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert dies den äußeren Anzeigewert der Box, aber alle Kinder verbleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` ausgelassen wird, ist der äußere Anzeigetyp des Elements standardmäßig `block`—außer für ruby, das standardmäßig `inline` ist."

Schließlich haben wir einige Legacy [vorkomponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen ordentlich abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte nutzen, beibehalten und gleichzeitig der Spezifikation erlauben sich weiterzuentwickeln.
