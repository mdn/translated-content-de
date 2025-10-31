---
title: Verwendung der Mehrfach-Schlüsselwort-Syntax mit CSS display
short-title: Verwendung der Mehrfach-Schlüsselwort-Syntax
slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Mehrfach-Schlüsselwort-Syntax für die CSS [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Eigenschaft. Dieser Leitfaden erklärt die Mehrfach-Schlüsselwort-Syntax.

> [!NOTE]
> Die Mehrfach-Schlüsselwort-Syntax wird auch als "Zwei-Werte-Syntax" oder "Mehrfach-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eine der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und andere Inline-Elemente sind. Dies sind ihre [outer](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel ist ein `<h1>` oder ein `<p>` standardmäßig ein Block-Element, während ein `<span>` ein Inline-Element ist. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift in ein Inline-Element zu verwandeln, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept zu verstehen ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **outer** als auch einen **inner** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Display-Typ beschreibt, wie die Kinder dieses Elements sich verhalten.

Als Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden beschrieben als Teilnehmer an einem Flex-Formatierungskontext. Sie können dies sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als hätten Sie `display: block` auf das Span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu schaffen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich genauso wie die Flex-Kinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass das Elternteil nun eine Inline-Level-Box ist. Daher verhält es sich wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, was eine Block-Level-Box tut. Dies bedeutet, dass etwas folgender Text neben dem Flex-Container erscheinen könnte.

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

Das Gleiche gilt beim Arbeiten mit dem Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Raster-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Raster-Formatierungskontext für die Kinder erstellt.

## Verwendung der Mehrfach-Schlüsselwort-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Zusätzlich dazu, dass Sie angeben, ob etwas ein Block- oder Inline-Element in Beziehung zu anderen Boxen auf der Seite ist, kann sie auch den Formatierungskontext innerhalb der Box angeben, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte – ein äußerer und ein innerer Wert – darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstelle von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das untenstehende Beispiel demonstriert diese Werte.

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

Es gibt Zuordnungen für alle vorhandenen Werte von `display`; die gebräuchlichsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary) an.

| Einzelnwert    | Mehrfachwert       |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## Anzeige: block flow-root und Anzeige: inline flow-root

In Bezug darauf, wie diese Mehrwert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger vertraut sind. Der mehrschlüsselwertige `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles in Ihrer Box bleibt und Dinge außerhalb der Box nicht eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines davon innerhalb eines `<div>`, wie Anzeige-Werte die Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, sodass wir uns stattdessen auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern-", "Kind-" und "Geschwister"-`<div>`- und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass kein Inhalt zwischen den Eltern- und Kind-Elementen vorhanden ist und das Kind-Element einen angewendeten oberen Rand hat.
Man könnte erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Eltern-Elements nach unten schiebt, aber stattdessen passiert etwas, das [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungsrahmen der Eltern hinaus und schiebt das Eltern-Element weiter nach unten auf der Seite.
Dies ist leichter zu sehen, wenn Sie das Box-Modell des Kind-Elements [in den Entwickler-Tools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um den Effekt verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu erstellen, wodurch sich der Rand des Kind-Elements relativ zur äußeren Kante des Elternteils bewegt und der Margin Collapse vermieden wird.
Das Wechseln zwischen `display: flow-root` und `display: block flow-root` erzielt denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root`-Wert macht Sinn, wenn man über Block- und Inline-Layout nachdenkt, das manchmal auch als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausgehen) und unser Inhalt wird im normalen Fluss dargestellt, indem Block- und Inline-Layout verwendet wird, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Rasters oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Raster- oder Flex-Formatierungskontext). Diese enthalten auch alles innerhalb von ihnen. Wenn Sie jedoch Floats und Ränder einschließen möchten, aber weiterhin das Block- und Inline-Layout verwenden möchten, können Sie eine neue Flusswurzel erstellen und mit dem Block- und Inline-Layout von neuem beginnen. Von diesem Punkt an ist alles innerhalb der neuen Flusswurzel enthalten.

Deshalb kann `display: flow-root` mit der Mehrfach-Schlüsselwort-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem zusammenpassenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn verwenden, ist, um zu ermöglichen, dass Padding Inline-Elemente vom Element wegdrückt, wenn beispielsweise Navigationselemente erstellt werden, oder wenn ein Hintergrund mit Padding zu einem Inline-Element hinzugefügt werden soll, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Level-Box, statt einer Block-Level-Box. Die Zwei-Werte-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und das gleiche Ergebnis erhalten.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und momentan gewinnen Sie keinen Vorteil durch die Verwendung der Mehrfach-Schlüsselwort-Versionen, da es für jede Mehrfach-Schlüsselwort-Version eine Zuordnung zu einer Legacy-Version gibt, wie in der obigen Tabelle demonstriert.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>` Wert angegeben wird, aber `<display-inside>` weggelassen wird, standardisiert sich der innere Display-Typ des Elements auf flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Display-Wert der Box, aber die Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>` Wert angegeben wird, aber `<display-outside>` weggelassen wird, standardisiert sich der äußere Display-Typ des Elements auf block—außer bei ruby, das standardisiert sich auf inline."

Schließlich haben wir einige Legacy [vorkomponierte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese Einzelwerte trifft, behandelt er sie genauso wie die Mehrfach-Schlüsselwort-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, aufrechterhalten, während die Spezifikation sich weiterentwickeln kann.
