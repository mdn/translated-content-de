---
title: Verwenden der Mehrschlüsselwortsyntax mit CSS display
short-title: Verwenden der Mehrschlüsselwortsyntax
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: 3a69b74048ff2480c481ace3e689fbb4d510f3e5
---

Das [CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display) definiert eine Mehrschlüsselwortsyntax für die CSS {{cssxref("display")}} Eigenschaft. Dieser Leitfaden erklärt die Mehrschlüsselwortsyntax.

> [!NOTE]
> Die Mehrschlüsselwortsyntax wird auch als "Zwei-Wert-Syntax" oder "Mehr-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Blockniveau- und einige Inline-Niveau-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/Reference/Values/display-outside) Anzeigetypen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Blockniveau und ein `<span>` ist Inline-Niveau. Mithilfe der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift inline zu machen, würden wir folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display` Eigenschaft ermöglicht uns auch die Verwendung von [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), wenn `display: grid` oder `display: flex` eingestellt ist. Das wichtige Konzept, das Sie verstehen müssen, ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitterelementen und reagieren auf die Eigenschaften in den Spezifikationen für Grid und Flexbox.

Was Raster und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeigetyp hat. Der äußere Anzeigetyp beschreibt, ob das Element Blockniveau oder Inline-Niveau ist. Der innere Anzeigetyp beschreibt, wie sich die Kinder dieser Box verhalten.

Als Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Blockniveau-Container mit flexiblen Kindern. Die Kinder werden beschrieben, als würden sie an einem flexiblen Formatierungskontext teilnehmen. Dies können Sie sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Niveau-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Blockniveau-Element. Es verhält sich wie Blockniveau-Elemente in Bezug auf andere Boxen im Layout. Es ist, als hätten Sie `display: block` auf das span angewendet, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das untenstehende Live-Beispiel hat ein `<span>` mit angewendetem `display: flex`. Es ist zu einer Blockniveau-Box geworden, die im Inline-Bereich allen verfügbaren Platz einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu platzieren.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Niveau-Box mit flexiblen Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Blockniveau-Containers. Das Einzige, was sich geändert hat, ist, dass das übergeordnete Element jetzt eine Inline-Niveau-Box ist. Es verhält sich daher wie andere Inline-Niveau-Elemente und nimmt nicht die gesamte Breite (oder Größe in der Inline-Dimension) ein, die eine Blockniveau-Box einnimmt. Das bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

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

Dasselbe gilt für das Arbeiten mit Rasterlayouts. Die Verwendung von `display: grid` erzeugt eine Blockniveau-Box, die einen Rasterformatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Niveau-Box, die einen Rasterformatierungskontext für die Kinder erstellt.

## Verwenden der Mehrschlüsselwortsyntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display` Eigenschaft erhebliche Kräfte. Zusätzlich zur Angabe, ob etwas in Bezug auf andere Boxen auf der Seite Blockniveau oder Inline-Niveau ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, ermöglicht die `display` Eigenschaft das Festlegen von zwei Werten - einem äußeren und einem inneren Wert. Die ursprüngliche Einzelwertsyntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Blockniveau-Box mit flexiblen Kindern zu erstellen, `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Niveau-Box mit flexiblen Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel zeigt diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die gebräuchlichsten sind in der Tabelle unten aufgeführt. Eine vollständige Liste finden Sie in der Tabelle in der [`display`-Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

| Einzelnwert    | Mehrwert           |
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

Was die Mehrwertsyntax anbelangt und wie sie dabei hilft, das CSS-Layout zu klären, so können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Der mehrschlüsselige `display: block flow-root` Wert wird zu einem Einzelwert abgebildet; `display: flow-root`. Der einzige Zweck dieses Werts besteht darin, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht eindringen können.

Im untenstehenden Beispiel zeigen zwei `<p>` Elemente, eines innerhalb eines `<div>`, wie Anzeige-Werte Formatierungskontexte beeinflussen.
Das erste `<div>` Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns stattdessen auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>` Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass sich kein Inhalt zwischen den übergeordneten und untergeordneten Elementen befindet und das untergeordnete Element eine obere Marge hat.
Man könnte erwarten, dass die obere Marge das untergeordnete Element innerhalb des übergeordneten Elements effektiv nach unten schiebt, aber stattdessen passiert etwas, das als [_Margin Collapse_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) bezeichnet wird.
In diesem Fall erstreckt sich die Marge des untergeordneten Elements weit über die Begrenzungsbox des übergeordneten Elements hinaus und schiebt das übergeordnete Element weiter unten auf der Seite.
Dies ist leichter zu sehen, wenn Sie das Box-Modell des untergeordneten Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>` Element, um die Wirkung verschiedener `display` Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das übergeordnete Element zu erstellen, wodurch die Marge des untergeordneten Elements relativ zum äußeren Rand des übergeordneten Elements wird und der Margin Collapse vermieden wird.
Das Wechseln zwischen `display: flow-root` und `display: block flow-root` erzielt den gleichen Effekt wie das Einzelwort `flow-root` Schlüsselwort.

```js hidden live-sample___flow-root
const parentDiv = document.getElementById("parent");
const siblingDiv = document.getElementById("sibling");
const displayTypeSelect = document.getElementById("displayType");

function changeDisplayType() {
  parentDiv.style.display = displayTypeSelect.value;
  siblingDiv.style.display = displayTypeSelect.value;
}

displayTypeSelect.addEventListener("change", changeDisplayType);
```

```css hidden live-sample___flow-root
#controls {
  padding: 1rem;
  outline: 2px dashed black;
}
body {
  margin: 10px;
  font-family: sans-serif;
}
```

```css live-sample___flow-root
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

```html hidden live-sample___flow-root
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

```html live-sample___flow-root
<div id="parent">
  <p id="child">The #child paragraph (nested in #parent).</p>
</div>
<p id="sibling">The #sibling paragraph (sibling of #parent).</p>
```

{{EmbedLiveSample("flow-root", '90%', 380)}}

Der Wert `flow-root` ergibt Sinn, wenn Sie an Block- und Inline-Layout denken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margen können sich nicht über die Grenzen hinaus erstrecken) und unser Inhalt wird in normalem Fluss, mit Verwendung von Block- und Inline-Layout, dargestellt, es sei denn, wir ändern den `display` Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Rasters oder Flex-Containers erzeugt ebenfalls einen neuen Formatierungskontext (einen Raster- oder Flexformatierungskontext). Diese enthalten auch alles innerhalb von sich. Wenn Sie jedoch Floats und Margen enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Flow-Root erstellen und mit Block- und Inline-Layout von vorne beginnen. Von diesem Punkt an ist alles in der neuen Flow-Root enthalten.

Deshalb kann `display: flow-root` mit der Mehrwertsyntax `display: block flow-root` geschrieben werden. Sie erstellen einen Blockformatierungskontext, mit einer Blockniveau-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem gepaarten Wert `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn häufig verwenden, ist, um Abstände zu erlauben, die Inline-Elemente von einem Element weg drücken sollen, zum Beispiel beim Erstellen von Navigationselementen, oder wenn wir einem Inline-Element einen Hintergrund mit Abständen hinzufügen möchten, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb der Inline-Niveau-Box. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Niveau-Box anstatt einer Blockniveau-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten display-Werten?

Die Einzelwerte von `display` werden in der Spezifikation als „legacy values“ beschrieben, und derzeit haben Sie keinen Nutzen aus der Verwendung der Mehrwertversionen, da es eine direkte Zuordnung für jede Mehrwertversion zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>` Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Anzeigetyp des Elements standardmäßig auf flow gesetzt."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwertwelt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Anzeigewert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden soll:

> "Wenn ein `<display-inside>` Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Anzeigetyp des Elements standardmäßig auf block gesetzt—außer für Ruby, das standardmäßig auf inline gesetzt wird."

Schließlich haben wir einige veraltete [vorab zusammengesetzte Inline-Niveau-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser diese als Einzelwerte erkennt, behandelt er sie genauso wie die Mehrwertversionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während es der Spezifikation ermöglicht wird, sich weiterzuentwickeln.
