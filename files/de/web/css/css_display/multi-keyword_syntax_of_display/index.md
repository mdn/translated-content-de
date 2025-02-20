---
title: Verwenden der Multi-Schlüsselwort-Syntax mit CSS display
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Das [CSS display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Schlüsselwort-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Multi-Schlüsselwort-Syntax.

> [!NOTE]
> Die Multi-Schlüsselwort-Syntax wird auch als „Zwei-Wert-Syntax“ oder „Multi-Wert-Syntax“ bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eine der ersten Dinge, die man über CSS lernt, ist, dass einige Elemente Block-Level-Elemente und andere Inline-Level-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeige-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level-Elemente, und ein `<span>` ist ein Inline-Level-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block- und Inline-Level wechseln. Zum Beispiel könnten wir eine Überschrift inline machen, indem wir den folgenden CSS-Code verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft erlaubt es uns auch, [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt wird. Ein wichtiger Punkt ist, dass das Ändern des `display`-Werts eines Elements das Formatierungskontext seiner direkten Kinder verändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften aus den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeige-Typ hat. Der äußere Anzeige-Typ beschreibt, ob das Element auf Block- oder Inline-Level ist. Der innere Anzeige-Typ beschreibt, wie die Kinder dieser Box sich verhalten.

Zum Beispiel, wenn wir `display: flex` verwenden, erstellen wir ein Block-Level-Container mit flexiblen Kindern. Die Kinder werden beschrieben, als ob sie an einem Flex-Formatierungskontext teilnehmen. Das können Sie sehen, wenn Sie ein `<span>`-Element nehmen — normalerweise ein Inline-Level-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich in Bezug auf andere Boxen im Layout wie ein Block-Level-Element. Es ist als ob Sie `display: block` auf das `<span>` angewendet hätten, jedoch erhalten wir zusätzlich das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>` mit `display: flex` angewendet. Es ist eine Block-Level-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um Platz zwischen den beiden flexiblen Items zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Level-Box mit flexiblen Kindern. Die Kinder verhalten sich genauso wie die flexiblen Kinder eines Block-Level-Containers. Das Einzige, was sich geändert hat, ist, dass der Elternteil nun eine Inline-Level-Box ist. Es verhält sich daher wie andere Inline-Level-Elemente und nimmt nicht die gesamte Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnehmen würde. Dadurch kann nachfolgender Text neben dem Flex-Container angezeigt werden.

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

Das Gleiche gilt, wenn Sie mit Grid-Layout arbeiten. Wenn Sie `display: grid` verwenden, erhalten Sie eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder schafft. Wenn Sie `display: inline-grid` verwenden, erstellen Sie eine Inline-Level-Box, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwenden der Multi-Schlüsselwort-Syntax

Wie aus der obigen Erklärung hervorgeht, hat die `display`-Eigenschaft beträchtliche Fähigkeiten. Zusätzlich zur Anzeige, ob etwas im Verhältnis zu anderen Boxen auf der Seite auf Block- oder Inline-Level ist, zeigt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt es die `display`-Eigenschaft, zwei Werte — einen äußeren und einen inneren Wert — auf sie anzuwenden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass anstelle von `display: flex`, um eine Block-Level-Box mit flexiblen Kindern zu erstellen, `display: block flex` verwendet wird. Anstelle von `display: inline-flex`, um eine Inline-Level-Box mit flexiblen Kindern zu erstellen, wird `display: inline flex` verwendet. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Für eine vollständige Liste schauen Sie sich die Tabelle in der [`display`-Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

| Einzelwert     | Mehrere Werte      |
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

Bezüglich der Klarheit, die diese Multi-Schlüsselwort-Syntax der CSS-Layout-Beschreibung hinzufügt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen vielleicht weniger geläufig sind. Der Multi-Schlüsselwort-Wert `display: block flow-root` entspricht einem Einzelwert: `display: flow-root`. Dieser Wert hat nur den Zweck, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht in diese eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines davon innerhalb eines `<div>`, wie sich Anzeige-Werte auf Formatierungskontexte auswirken.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, sodass wir uns auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir achten sollten, sind die `<div>`- und `<p>`-Elemente mit den IDs „parent“, „child“ und „sibling“, die dadurch unterschieden werden können.

Was an diesem Layout auffällt, ist, dass zwischen den Parent- und Child-Elementen kein Inhalt ist, und das Child-Element einen oberen Rand hat.
Man könnte erwarten, dass der obere Rand effektiv das Kind-Element innerhalb des Eltern-Elements nach unten drückt, doch passiert stattdessen etwas, das [_Margin Collapsing_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungsrahmen des Elternteils hinaus und schiebt das Elternteil weiter nach unten auf der Seite.
Das lässt sich besser erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwickler-Tools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#use_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkungen verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch der Rand des Kind-Elements relativ zum äußeren Rand des Elternteils wird und das Zusammenfallen der Ränder vermieden wird. Das Wechseln zwischen `display: flow-root` und `display: block flow-root` hat den gleichen Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der Wert `flow-root` ergibt Sinn, wenn man an Block- und Inline-Layout denkt, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausgehen) und unser Inhalt wird im normalen Fluss mit Block- und Inline-Layout angeordnet, es sei denn, wir ändern den `display`-Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext). Diese enthalten ebenfalls alles innerhalb ihrer Grenzen. Wenn Sie jedoch Floats und Ränder einschließen möchten, während Sie weiterhin das Block- und Inline-Layout verwenden, können Sie eine neue Fluss-Wurzel erstellen und mit dem Block- und Inline-Layout von vorne beginnen. Ab diesem Punkt ist alles innerhalb der neuen Fluss-Wurzel enthalten.

Deshalb kann `display: flow-root` mit der Multi-Schlüsselwort-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einer Block-Level-Box und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn häufig verwenden, ist, dass Polsterung verwendet werden kann, um Inline-Elemente von einem Element wegzudrücken, beispielsweise bei der Erstellung von Navigationsleisten oder wenn eine Hintergrundfarbe mit Polsterung auf ein Inline-Element angewendet werden soll, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, jedoch mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genauer, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` mit `display: inline flow-root` ersetzen und erhalten dasselbe Ergebnis.

## Und was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit erhalten Sie keinen Vorteil, wenn Sie die Multi-Schlüsselwort-Versionen verwenden, da es eine direkte Zuordnung für jede Multi-Schlüsselwort-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle dargestellt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` verwendet wird:

> „Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Anzeige-Typ des Elements standardmäßig auf flow gesetzt.“

Das bedeutet, dass sich das Verhalten genau so verhält wie in einer Einzelwert-Welt. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeige-Wert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert wie `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> „Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Anzeige-Typ des Elements standardmäßig auf block gesetzt — außer für ruby, das standardmäßig inline ist.“

Schließlich gibt es einige Legacy- [vorab komponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) wie:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese Einzelwerte stößt, behandelt er sie genauso wie die Multi-Schlüsselwort-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen elegant abgedeckt, was bedeutet, dass die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, erhalten bleibt, während die Spezifikation weiterentwickelt werden kann.
