---
title: Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS-Display
short-title: Verwendung der Mehrfach-Schlüsselwort-Syntax
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das [CSS-Displaymodul](/de/docs/Web/CSS/Guides/Display) definiert eine Mehrfach-Schlüsselwort-Syntax für die CSS-{{cssxref("display")}}-Eigenschaft. Dieser Leitfaden erklärt die Mehrfach-Schlüsselwort-Syntax.

> [!NOTE]
> Die Mehrfach-Schlüsselwort-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und einige Inline-Elemente sind. Diese sind ihre [äußeren](/de/docs/Web/CSS/Reference/Values/display-outside) Anzeigearten. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel, um eine Überschrift in ein Inline-Element zu verwandeln, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` eingestellt ist. Der wichtige Punkt ist, dass die Änderung des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitter-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was jedoch Grid und Flexbox verdeutlichen, ist, dass ein Element sowohl eine **äußere** als auch eine **innere** Anzeigeart hat. Die äußere Anzeigeart beschreibt, ob das Element ein Block- oder ein Inline-Element ist. Die innere Anzeigeart beschreibt, wie sich die Kinder dieser Box verhalten.

Ein Beispiel: Wenn wir `display: flex` verwenden, erstellen wir einen Block-Container mit flexiblen Kindern. Die Kinder werden als Teilnahme an einem flexiblen Formatierungskontext beschrieben. Sie können dies sehen, wenn Sie ein `<span>` nehmen – normalerweise ein Inline-Element – und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als hätten Sie `display: block` auf den span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>`, auf das `display: flex` angewendet wurde. Es ist zu einer Block-Hülle geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden flexiblen Elementen zu setzen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Hülle mit flexiblen Kindern. Die Kinder verhalten sich genauso wie die flexiblen Kinder eines Block-Containers. Das Einzige, was sich geändert hat, ist, dass das übergeordnete Element nun eine Inline-Hülle ist. Es verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Hülle einnimmt. Dies bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt, wenn Sie mit dem Grid-Layout arbeiten. Die Verwendung von `display: grid` gibt Ihnen eine Block-Hülle, die einen Gitterformatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Hülle, die einen Gitterformatierungskontext für die Kinder erstellt.

## Verwendung der Mehrfach-Schlüsselwort-Syntax

Wie Sie aus der obigen Erklärung ersehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Zusätzlich zur Angabe, ob etwas ein Block- oder Inline-Element im Verhältnis zu anderen Boxen auf der Seite ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft die Einstellung von zwei Werten – einem äußeren und einem inneren Wert. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Block-Hülle mit flexiblen Kindern zu erstellen, `display: block flex` verwenden. Anstatt `display: inline-flex`, um eine Inline-Hülle mit flexiblen Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display`-Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

Bezüglich der Klarstellung des CSS-Layouts durch diese Mehrfachwert-Syntax können wir einige in der obigen Tabelle aufgeführte Werte betrachten, die Ihnen möglicherweise weniger vertraut sind. Die mehrfache `display: block flow-root`-Syntax ordnet sich einem Einzelwert zu: `display: flow-root`. Dieser Wert hat den einzigen Zweck, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Anzeige-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist versteckt, damit wir uns auf die nachfolgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent" (Eltern)-, "child" (Kind)- und "sibling" (Geschwister)- `<div>`- und `<p>`-Elemente, die durch ihre IDs unterschieden werden können.

Bemerkenswert an diesem Layout ist, dass sich zwischen dem Eltern- und Kind-Element kein Inhalt befindet und das Kind-Element einen oberen Rand hat.
Sie könnten erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Eltern-Elements nach unten drückt, aber was stattdessen passiert, ist etwas, das als [_Rand-Zusammenfall_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) bezeichnet wird.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über die Begrenzungsbox des Elternteils und drückt das Eltern-Element weiter nach unten auf der Seite.
Es ist leichter zu erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Rand des Kind-Elements relativ zum äußeren Rand des Elternteils wird und der Rand-Zusammenfall vermieden wird.
Zwischen `display: flow-root` und `display: block flow-root` zu wechseln, wird denselben Effekt erzielen wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie über Block- und Inline-Layout nachdenken, was manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können sich nicht aus den Grenzen erstrecken) und unser Inhalt wird im normalen Fluss angeordnet, indem Block- und Inline-Layout verwendet wird, es sei denn, wir ändern den `display`-Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Gitter- oder Flex-Containers erzeugt ebenfalls einen neuen Formatierungskontext (ein Gitter- bzw. Flex-Formatierungskontext). Diese enthalten auch alles in ihnen. Wenn Sie jedoch Floats und Ränder enthalten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Flusswurzel erstellen und mit dem Block- und Inline-Layout von vorne beginnen. Ab diesem Punkt nach unten ist alles in der neuen Flusswurzel enthalten.

Aus diesem Grund kann `display: flow-root` mit der Mehrfach-Schlüsselwort-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einer Block-Hülle und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir es verwenden, ist, um Polsterungen zu erlauben, Inline-Elemente von einem Element wegzuschieben, wenn wir beispielsweise Navigationselemente erstellen oder wenn wir einem Inline-Element einen Hintergrund mit Polsterung hinzufügen wollen, wie im Beispiel unten.

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

Ein Element mit `display: inline-block` jedoch wird auch Floats enthalten. Es enthält alles innerhalb der Inline-Hülle. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Hülle, anstatt einer Block-Hülle. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und erhalten dasselbe Ergebnis.

## Was ist mit den alten display-Werten?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben und derzeit erhalten Sie keinen Vorteil durch die Verwendung der Mehrfach-Schlüsselwort-Versionen, da es eine direkte Zuordnung für jede Mehrfach-Schlüsselwort-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` ausgelassen wird, ist der innere Anzeigetyp des Elements standardmäßig `flow`."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Welt mit Einzelwerten ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` ausgelassen wird, ist der äußere Anzeigetyp des Elements standardmäßig `block`, außer für ruby, das standardmäßig `inline` ist."

Schließlich haben wir einige Legacy [vorkomponierte Inline-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrfach-Schlüsselwort-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

Alle aktuellen Situationen werden also übersichtlich abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, aufrechterhalten, während die Spezifikation entwickelt wird.
