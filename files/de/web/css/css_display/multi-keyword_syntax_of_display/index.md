---
title: Verwenden der Multi-Keyword-Syntax mit CSS display
short-title: Verwendung der Multi-Keyword-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das [CSS display Modul](/de/docs/Web/CSS/Guides/Display) definiert eine Multi-Keyword-Syntax für die CSS [`display`](/de/docs/Web/CSS/Reference/Properties/display) Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Wert-Syntax" oder "Multi-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level und einige Inline-Level sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/Reference/Values/display-outside) Anzeigearten. Zum Beispiel sind `<h1>` oder `<p>` standardmäßig Block-Level, und `<span>` ist Inline-Level. Mit der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel, um eine Überschrift inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept, das zu verstehen ist, ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitterelementen und reagieren auf die Eigenschaften in den Gitter- und Flexbox-Spezifikationen.

Was Gitter und Flexbox jedoch demonstrieren, ist, dass ein Element sowohl eine **äußere** als auch eine **innere** Anzeigeart hat. Die äußere Anzeigeart beschreibt, ob das Element ein Block-Level oder Inline-Level ist. Die innere Anzeigeart beschreibt, wie die Kinder dieser Box sich verhalten.

Als Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kinderelementen. Die Kinder werden als Teilnehmer an einem Flex-Formatierungskontext beschrieben. Sie können dies sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Level-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Elemente in Bezug zu anderen Boxen im Layout. Es ist, als hätten Sie `display: block` auf das span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu platzieren.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Level-Box mit Flex-Kinderelementen. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass das Elternteil jetzt eine Inline-Level-Box ist. Es verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Das bedeutet, dass etwas nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt, wenn Sie mit dem Gitter-Layout arbeiten. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Gitter-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Zusätzlich dazu, ob etwas Block-Level oder Inline-Level im Verhältnis zu anderen Boxen auf der Seite ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft das Setzen von zwei Werten — einem äußeren und einem inneren Wert. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstatt von `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Um die vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display`-Eigenspezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

In Bezug darauf, wie diese Mehrwertsyntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen vielleicht weniger vertraut sind. Die Multi-Keyword-Syntax `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist die Erstellung eines neuen [Block-Formatierungskontextes](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC). Ein BFC sorgt dafür, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie `display`-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, sodass wir uns stattdessen auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die `<div>`- und `<p>`-Elemente mit den IDs "parent", "child" und "sibling", die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Elternelementen und den Kindelementen gibt und das Kindelement einen oberen Rand hat.
Man könnte erwarten, dass der obere Rand das Kindelement innerhalb des Elternelements nach unten drückt, aber stattdessen passiert etwas, das [_margin collapse_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kindelements weit über die Begrenzungsbox des Elternteils hinaus und drückt das Elternelement weiter nach unten auf der Seite.
Dies ist leichter zu sehen, wenn Sie das Boxmodell des Kindelements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um den Effekt verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Abstand des Kindelements relativ zum äußeren Rand des Elternteils wird und der margin collapse vermieden wird.
Ein Wechsel zwischen `display: flow-root` und `display: block flow-root` erzielt denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der Wert `flow-root` ist sinnvoll, wenn Sie an Block- und Inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Abstände können sich nicht aus den Grenzen heraus erstrecken) und unser Inhalt wird im normalen Fluss angezeigt, wobei Block- und Inline-Layout verwendet wird, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Gitter- oder Flexcontainers erstellt ebenfalls einen neuen Formatierungskontext (einen Gitter- oder Flex-Formatierungskontext). Diese enthalten auch alles, was sich in ihnen befindet. Wenn Sie jedoch Floats und Abstände enthalten, aber weiterhin das Block- und Inline-Layout verwenden möchten, können Sie eine neue Flusswurzel erstellen und das Block- und Inline-Layout neu starten. Von diesem Punkt abwärts wird alles innerhalb der neuen Flusswurzel enthalten sein.

Deshalb kann `display: flow-root` mithilfe der Multi-Keyword-Syntax als `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den Anfängen von CSS. Der Grund, warum wir ihn oft verwenden, besteht darin, Polsterungen einzufügen, um Inline-Elemente von einem Element wegzudrücken, wenn z.B. Navigationselemente erstellt werden, oder wenn wir einem Inline-Element wie im folgenden Beispiel einen Hintergrund mit Polsterungen hinzufügen möchten.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, aber mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten display-Werten?

Die Einzelwerte von `display` werden in der Spezifikation als veraltete Werte beschrieben und derzeit gewinnen Sie keinen Vorteil durch die Verwendung der Multi-Keyword-Versionen, da es für jede Multi-Keyword-Version eine direkte Zuordnung zur veralteten Version gibt, wie in der obigen Tabelle gezeigt.

Um mit den Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Anzeigetyp des Elements standardmäßig zu flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwertwelt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Anzeigewert der Box, aber alle Kinder setzen sich im normalen Fluss fort.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Anzeigetyp des Elements standardmäßig auf block gesetzt — außer für ruby, das standardmäßig auf inline gesetzt wird."

Schließlich haben wir einige veraltete [vorab zusammengesetzte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwert stößt, behandelt er sie genauso wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen ordentlich abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während wir die Möglichkeit haben, die Spezifikation weiterzuentwickeln.
