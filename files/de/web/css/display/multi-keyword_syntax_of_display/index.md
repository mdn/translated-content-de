---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
slug: Web/CSS/display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

Das [CSS display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS [`display`](/de/docs/Web/CSS/display) Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display Eigenschaft ändern?

Eine der ersten Sachen, die wir über CSS lernen, ist, dass einige Elemente Block-Level und einige Inline-Level sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeige-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level, und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}} Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel, um eine Überschrift Inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display` Eigenschaft erlaubt es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept, das man verstehen muss, ist, dass die Änderung des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Gitter-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch demonstrieren, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeige-Typ hat. Der äußere Anzeige-Typ beschreibt, ob das Element Block-Level oder Inline-Level ist. Der innere Anzeige-Typ beschreibt, wie sich die Kinder dieses Kastens verhalten.

Als Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flex-Kindern. Die Kinder werden beschrieben als teilnehmend an einem Flex-Formatierungskontext. Sie können dies sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Level-Eintrag — nehmen und `display: flex` darauf anwenden. Der `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Dinge im Verhältnis zu anderen Kästen im Layout. Es ist, als ob Sie `display: block` auf den Span angewendet hätten, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>` mit `display: flex` angewendet. Es ist zu einem Block-Level-Kasten geworden, der den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu positionieren.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie einen Inline-Level-Kasten mit Flex-Kindern. Die Kinder verhalten sich auf die gleiche Weise wie die Flex-Kinder eines Block-Level-Containers. Das Einzige, was sich geändert hat, ist, dass das Elternteil jetzt ein Inline-Level-Kasten ist. Es verhält sich daher wie andere Inline-Level-Dinge und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die ein Block-Level-Kasten einnimmt. Das bedeutet, dass einige nachfolgende Texte neben dem Flex-Container erscheinen könnten.

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

Das Gleiche gilt, wenn man mit Grid-Layout arbeitet. Die Verwendung von `display: grid` gibt Ihnen einen Block-Level-Kasten, der einen Gitter-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt einen Inline-Level-Kasten, der einen Gitter-Formatierungskontext für die Kinder herstellt.

## Verwendung der Multi-Keyword-Syntax

Wie aus der obigen Erklärung ersichtlich ist, hat die `display` Eigenschaft beträchtliche Möglichkeiten. Zusätzlich zur Angabe, ob etwas auf Seitenebene Block-Level oder Inline-Level ist, beschreibt sie auch den Formatierungskontext innerhalb des Kastens, auf den sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display` Eigenschaft das Setzen zweier Werte — eines äußeren und eines inneren Werts. Die ursprüngliche Einzelwertsyntax ist ebenfalls gültig.

Das bedeutet, dass wir statt `display: flex` zu setzen, um einen Block-Level-Kasten mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Statt `display: inline-flex`, um einen Inline-Level-Kasten mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das folgende Beispiel demonstriert diese Werte.

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

Es gibt Zuordnungen für alle vorhandenen Werte von `display`; die gebräuchlichsten sind in der unten stehenden Tabelle aufgelistet. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display` Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

In Bezug darauf, wie diese Mehrwert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir einige Werte in der oben genannten Tabelle betrachten, die Ihnen möglicherweise weniger vertraut sind. Die Multi-Keyword `display: block flow-root` ordnet sich einem Einzelwert zu; `display: flow-root`. Der einzige Zweck dieses Wertes ist es, einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box drinnen bleibt, und Dinge außerhalb der Box nicht eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>` Elemente, eines innerhalb eines `<div>`, wie sich Anzeigewerte auf Formatierungskontexte auswirken. Das erste `<div>` Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns stattdessen auf die folgenden Elemente konzentrieren können. Die Elemente, auf die Sie sich konzentrieren sollten, sind die "parent"-, "child"- und "sibling"-`<div>` und `<p>` Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Parent- und Child-Elementen gibt und dass das Child-Element einen oberen Randwert hat. Sie könnten erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Eltern-Elements nach unten drückt, aber was stattdessen passiert, ist etwas, das [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird. In diesem Fall erstreckt sich der Rand des Kind-Elements weit über den Begrenzungskasten des Elternteils hinaus und schiebt das Elternteil weiter nach unten auf der Seite. Dies ist leichter zu erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn/CSS/Building_blocks/The_box_model#use_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>` Element, um die Wirkung verschiedener `display` Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternteil zu schaffen, und den Rand des Kind-Elements relativ zum äußeren Rand des Elternteils zu machen, wodurch der Margenzusammenbruch vermieden wird. Der Wechsel zwischen `display: flow-root` und `display: block flow-root` erzielt die gleiche Wirkung wie das Einzelwert-Schlüsselwort `flow-root`.

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

Der `flow-root` Wert macht Sinn, wenn Sie über Block- und Inline-Layout nachdenken, was manchmal als [normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margen können nicht aus den Grenzen herausragen) und unser Inhalt wird im normalen Fluss angeordnet, wobei Block- und Inline-Layout verwendet werden, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Gitter- oder Flex-Containers schafft ebenfalls einen neuen Formatierungskontext (einen Gitter- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles innerhalb von ihnen. Wenn Sie jedoch Floats und Margen enthalten möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie eine neue Flusswurzel erstellen und von dort an mit Block- und Inline-Layout von vorne beginnen. Ab diesem Punkt abwärts wird alles innerhalb der neuen Flusswurzel enthalten sein.

Deshalb kann `display: flow-root` mit der Multi-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einem Block-Level-Kasten und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die gegenwärtige Weise, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` ist seit den frühen Tagen von CSS bekannt. Der Grund, warum wir ihn verwenden, ist, um zu erlauben, dass Padding Inline-Elemente von einem Element wegschiebt, zum Beispiel beim Erstellen von Navigationselementen oder wenn wir wollen, dass ein Hintergrund mit Padding zu einem Inline-Element hinzugefügt wird, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` enthält jedoch auch Floats. Es enthält alles innerhalb des Inline-Level-Kastens. Daher tut `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einem Inline-Level-, anstelle eines Block-Level-Kastens. Die Zwei-Werte-Syntax beschreibt präzise, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` zu `display: inline flow-root` ändern und das gleiche Ergebnis erhalten.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit gibt es keinen Vorteil in der Verwendung der Multi-Keyword-Versionen, da es eine direkte Zuordnung für jede Multi-Keyword-Version zu einer Legacy-Version gibt, wie in der Tabelle oben demonstriert.

Um anzuzeigen, was bei Einzelwerten von `display` zu tun ist, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` angegeben wird:

> "Wenn ein `<display-outside>` Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Anzeige-Typ des Elements standardmäßig auf flow gesetzt."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>` Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Anzeige-Typ des Elements standardmäßig auf block gesetzt, außer bei Ruby, das standardmäßig inline ist."

Schließlich haben wir einige Legacy [vorkomponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie wie die Multi-Keyword-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So werden alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Seiten beibehalten, die die Einzelwerte verwenden, während es der Spezifikation ermöglicht wird sich weiterzuentwickeln.
