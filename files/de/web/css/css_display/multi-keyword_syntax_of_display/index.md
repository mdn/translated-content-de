---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
short-title: Verwendung der Multi-Keyword-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS-`display`-Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Wert-Syntax" oder "Multi-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und einige Inline-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeige-Typen. Zum Beispiel sind `<h1>` oder `<p>` standardmäßig Block-Elemente, und `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um zum Beispiel eine Überschrift inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Ein wichtiger Punkt ist, dass die Änderung des `display`-Wertes eines Elements das Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitter-Elementen und reagieren auf die Eigenschaften in den Gitter- und Flexbox-Spezifikationen.

Was Gitter und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeige-Typ hat. Der äußere Anzeige-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Anzeige-Typ beschreibt, wie die Kinder dieses Box-Elements sich verhalten.

Als Beispiel schafft `display: flex` einen Block-Container mit Flex-Kindern. Die Kinder nehmen an einem Flex-Formatierungskontext teil. Das können Sie erkennen, wenn Sie ein `<span>` — normalerweise ein Inline-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich, wie Block-Elemente es im Verhältnis zu anderen Boxen im Layout tun. Es ist, als hätten Sie `display: block` auf `<span>` angewendet, aber wir erhalten auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel enthält ein `<span>` mit `display: flex`. Es ist zu einer Block-Box geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Jetzt können Sie `justify-content: space-between` verwenden, um diesen Raum zwischen den zwei Flex-Elementen zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Containers. Der einzige Unterschied ist, dass das Eltern-Element jetzt eine Inline-Box ist. Es verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Box tut. Das bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt, wenn Sie mit dem Gitter-Layout arbeiten. Die Verwendung von `display: grid` gibt Ihnen eine Block-Box, die einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Bei Verwendung von `display: inline-grid` wird eine Inline-Box erstellt, die einen Gitter-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung ersehen können, hat die `display`-Eigenschaft beträchtliche Fähigkeiten. Zusätzlich zur Angabe, ob etwas auf Block- oder Inline-Ebene im Verhältnis zu anderen Boxen auf der Seite ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir statt `display: flex` zu setzen, um eine Block-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Statt `display: inline-flex` zu setzen, um eine Inline-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das untenstehende Beispiel demonstriert diese Werte.

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

Es gibt Zuordnungen für alle existierenden `display`-Werte; die gebräuchlichsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschaftspezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

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

In der Hinsicht, wie diese Multi-Wert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige in der Tabelle oben aufgeführte Werte anschauen, die Ihnen vielleicht weniger geläufig sind. Die Multi-Keyword-Syntax `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist die Erstellung eines neuen [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC). Ein BFC stellt sicher, dass alles innerhalb Ihrer Box enthalten bleibt und Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie sich Anzeigewerte auf Formatierungskontexte auswirken.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, sodass wir uns stattdessen auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern", "Kind" und "Geschwister" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert bei diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kind-Elementen gibt und das Kind-Element einen oberen Margin hat.
Man könnte erwarten, dass der obere Margin das Kind-Element innerhalb des Eltern-Elements effektiv nach unten drückt, aber stattdessen passiert etwas, das als [Margin-Zusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird.
In diesem Fall dehnt sich der Margin des Kind-Elements weit über den Begrenzungsrahmen der Eltern-Elemente hinaus und drückt das Eltern-Element weiter nach unten auf der Seite.
Dies ist leichter zu erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Eltern-Element zu erzeugen, wodurch der Margin des Kind-Elements relativ zur äußeren Kante des Eltern-Elements wird und den Margin-Zusammenbruch vermieden wird.
Der Wechsel zwischen `display: flow-root` und `display: block flow-root` erziel5080t denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der Wert `flow-root` ist sinnvoll, wenn man an Block- und Inline-Layout denkt, was manchmal auch als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margins können sich nicht über die Grenzen hinaus erstrecken) und unser Inhalt wird im normalen Fluss unter Verwendung von Block- und Inline-Layout angeordnet, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Die Erstellung eines Gitter- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Gitter- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles, was sich innerhalb von ihnen befindet. Wenn Sie jedoch Floats und Margins enthalten, aber weiterhin das Block- und Inline-Layout verwenden möchten, können Sie einen neuen Flow-Root erstellen und mit dem Block- und Inline-Layout von vorne beginnen. Ab diesem Punkt ist alles innerhalb des neuen Flow-Roots enthalten.

Deshalb kann `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Blockformatierungskontext mit einer Block-Box und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Möglichkeit, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` ist seit den frühen Tagen von CSS vorhanden. Der Grund, warum wir ihn oft verwenden, besteht darin, das Padding so einzustellen, dass es Inline-Elemente von einem Element wegdrückt, wenn wir beispielsweise Navigationspunkte erstellen oder wenn wir einem Inline-Element einen Hintergrund mit Padding hinzufügen möchten, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Box. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Box anstelle einer Block-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und dasselbe Ergebnis erzielen.

## Was ist mit den alten Display-Werten?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben und derzeit erhalten Sie keinen Vorteil aus der Verwendung der Multi-Keyword-Versionen, da es für jede Multi-Keyword-Version eine direkte Zuordnung zu einer Legacy-Version gibt, wie in der obigen Tabelle dargestellt.

Um mit den Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>` Wert angegeben, aber `<display-inside>` weggelassen wird, ist der innere Anzeige-Typ des Elements standardmäßig auf flow."

Dies bedeutet, dass das Verhalten genau so ist, wie es in einer Welt mit einem Einzelwert ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, während alle Kinder weiterhin im normalen Fluss verbleiben.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden soll:

> "Wenn ein `<display-inside>` Wert angegeben, aber `<display-outside>` weggelassen wird, ist der äußere Anzeige-Typ des Elements standardmäßig auf block gesetzt—außer für Ruby, das standardmäßig auf inline gesetzt ist."

Schließlich haben wir einige Legacy-[vorkomponierte Inline-Ebenenwerte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

Daher sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während es der Spezifikation ermöglicht wird, sich weiterzuentwickeln.
