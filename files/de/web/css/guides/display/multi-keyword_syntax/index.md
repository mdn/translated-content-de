---
title: Verwenden der Mehrfach-Schlüsselwort-Syntax mit CSS display
short-title: Verwendung der Mehrfach-Schlüsselwort-Syntax
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) definiert eine Mehrfach-Schlüsselwort-Syntax für die CSS [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Eigenschaft. Dieser Leitfaden erklärt die Mehrfach-Schlüsselwort-Syntax.

> [!NOTE]
> Die Mehrfach-Schlüsselwort-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehrwert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level sind und andere Inline-Level. Dies sind ihre [äußeren](/de/docs/Web/CSS/Reference/Values/display-outside) Anzeigetypen. Zum Beispiel sind `<h1>` oder `<p>` standardmäßig Block-Level und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift als Inline darzustellen, würden wir den folgenden CSS-Code verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht uns außerdem die Verwendung von [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), wenn `display: grid` oder `display: flex` eingestellt ist. Das wichtige Konzept zu verstehen ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder verändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitter-Items und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeigetyp hat. Der äußere Anzeigetyp beschreibt, ob das Element Block- oder Inline-Level ist. Der innere Anzeigetyp beschreibt, wie sich die Kinder dieses Kastens verhalten.

Als Beispiel: Wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden beschrieben, als ob sie an einem Flex-Formatierungskontext teilnehmen. Dies können Sie sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Level-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich in Beziehung zu anderen Boxen im Layout als Block-Level-Objekt. Es ist, als ob Sie `display: block` auf das span angewendet hätten, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit angewendetem `display: flex`. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Platz zwischen den beiden Flex-Elementen zu verteilen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Der einzige Unterschied ist, dass das Elternteil jetzt eine Inline-Level-Box ist. Es verhält sich daher wie andere Inline-Level-Objekte und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Dies bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Dasselbe gilt, wenn Sie mit dem Gitter-Layout arbeiten. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Gitter-Formatierungskontext für die Kinder erstellt.

## Verwendung der Mehrfach-Schlüsselwort-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft erhebliche Befugnisse. Zusätzlich dazu, ob etwas im Verhältnis zu anderen Boxen auf der Seite Block- oder Inline-Level ist, zeigt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Dies bedeutet, dass anstelle von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, wir `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das untenstehende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der folgenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [Spezifikation der `display`-Eigenschaft](https://drafts.csswg.org/css-display/#display-value-summary).

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

Was diese Mehrwert-Syntax zur Klärung von CSS-Layouts beiträgt, können wir an einigen Werten in der obigen Tabelle sehen, die Ihnen möglicherweise weniger vertraut sind. Die Mehrfach-Schlüsselwort-Syntax `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und dass Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie sich Anzeigewerte auf Formatierungskontexte auswirken.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist verborgen, damit wir uns auf die nachfolgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern", "Kind" und "Geschwister" `<div>` und `<p>`-Elemente, die Sie an ihren IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kindelementen gibt und das Kindelement einen oberen Rand hat.
Man könnte erwarten, dass der obere Rand das Kindelement innerhalb des Elternelements nach unten drückt, aber stattdessen passiert etwas, das [_Rand-Kollaps_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kindelements weit über den Begrenzungsrahmen der Eltern hinaus und drückt das Elternelement weiter nach unten auf die Seite.
Dies ist leichter zu sehen, wenn Sie das Box-Modell des Kindelements [in den Entwickler-Tools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für den Elternteil zu erstellen, wodurch der Rand des Kindelements relativ zum äußeren Rand seines Elternteils wird und der Rand-Kollaps vermieden wird.
Das Wechseln zwischen `display: flow-root` und `display: block flow-root` erzielt den gleichen Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie über Block- und Inline-Layout nachdenken, das manchmal als [Normalfluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können sich nicht über die Grenzen hinaus erstrecken) und unser Inhalt wird im normalen Fluss layoutet, unter Verwendung von Block- und Inline-Layout, es sei denn, wir ändern den `display`-Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Gitter- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Gitter- oder Flex-Formatierungskontext). Diese enthalten auch alles in sich. Wenn Sie jedoch Floats und Ränder enthalten möchten, während Sie weiterhin Block- und Inline-Layout verwenden, können Sie eine neue Flusswurzel erstellen und von diesem Punkt aus mit Block- und Inline-Layout neu starten. Von dort abwärts wird alles innerhalb der neuen Flusswurzel enthalten.

Aus diesem Grund kann `display: flow-root` mit der Mehrfach-Schlüsselwort-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem gepaarten `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn oft verwenden, ist, um zuzulassen, dass Polsterung Inline-Elemente von einem Element wegdrückt, wenn wir zum Beispiel Navigationselemente erstellen oder wenn wir einen Hintergrund mit Polsterung zu einem Inline-Element hinzufügen möchten, wie im folgenden Beispiel gezeigt.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Level-Box. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Level- anstelle einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und erhalten das gleiche Ergebnis.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als ältere Werte beschrieben, und derzeit gewinnen Sie keinen Vorteil aus der Verwendung der Mehrfach-Schlüsselwort-Versionen, da es eine direkte Zuordnung für jede Mehrfach-Schlüsselwort-Version zu einer älteren Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben ist, aber `<display-inside>` weggelassen wird, wird der innere Anzeigetyp des Elements standardmäßig auf Flow gesetzt."

Das bedeutet, dass das Verhalten genau so ist wie in einer Einzelwert-Welt. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, aber alle Kinder fahren im normalen Fluss fort.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben ist, aber `<display-outside>` weggelassen wird, wird der äußere Anzeigetyp des Elements standardmäßig auf Block gesetzt — außer bei Ruby, der standardmäßig Inline ist."

Schließlich haben wir einige ältere [vorab zusammengesetzte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrfach-Schlüsselwort-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

All die aktuellen Situationen werden also ordentlich abgedeckt, was bedeutet, dass wir die Kompatibilität von existierenden und neuen Seiten beibehalten, die die Einzelwerte verwenden, während die Spezifikation weiterentwickelt werden kann.
