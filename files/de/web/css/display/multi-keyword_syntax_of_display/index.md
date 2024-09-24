---
title: Verwenden der Mehrfach-Keyword-Syntax mit CSS display
slug: Web/CSS/display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Mehrfach-Keyword-Syntax für die CSS-[`display`](/de/docs/Web/CSS/display)-Eigenschaft. Dieser Leitfaden erklärt die Mehrfach-Keyword-Syntax.

> [!NOTE]
> Die Mehrfach-Keyword-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehrwert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level und einige Inline-Level sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Display-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level, und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um eine Überschrift inline zu machen, würden wir zum Beispiel folgendes CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu nutzen, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept, das es zu verstehen gilt, ist, dass das Ändern des `display`-Wertes eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Items und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element Block-Level oder Inline-Level ist. Der innere Display-Typ beschreibt, wie sich die Kinder dieser Box verhalten.

Zum Beispiel erstellen wir, wenn wir `display: flex` verwenden, ein Block-Level-Container mit flexiblen Kindern. Die Kinder werden als Teilnehmer eines flexiblen Formatierungskontexts beschrieben. Sie können dies sehen, wenn Sie ein `<span>` nehmen – normalerweise ein Inline-Level-Element – und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich so, wie Block-Level-Objekte es in Bezug zu anderen Boxen im Layout tun. Es ist, als hätten Sie `display: block` auf das span angewendet, aber wir erhalten auch das geänderte Verhalten der Kinder.

Das folgende Live-Beispiel hat ein `<span>` mit `display: flex` angewendet. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Platz zwischen den beiden Flex-Items zu platzieren.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/span-flex.html", '100%', 440)}}

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit flexiblen Kindern. Die Kinder verhalten sich genauso wie die flexiblen Kinder eines Block-Level-Containers. Der einzige Unterschied ist, dass der Elternteil jetzt eine Inline-Level-Box ist. Daher verhält es sich wie andere Inline-Level-Objekte und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Das bedeutet, dass einige folgende Texte neben dem Flex-Container auftreten könnten.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-flex.html", '100%', 440)}}

Dasselbe gilt, wenn man mit Grid Layout arbeitet. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Grid-Formatierungskontext für die Kinder bereitstellt.

## Verwenden der Mehrfach-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Kräfte. Zusätzlich dazu, anzugeben, ob etwas Block-Level oder Inline-Level im Verhältnis zu anderen Boxen auf der Seite ist, weist es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, zwei Werte – einen äußeren und einen inneren Wert – auf sie zu setzen. Die ursprüngliche Einzelwertsyntax ist ebenfalls gültig.

Das bedeutet, dass anstatt `display: flex` zu setzen, um eine Block-Level-Box mit flexiblen Kindern zu erstellen, wir `display: block flex` verwenden. Anstatt `display: inline-flex`, um eine Inline-Level-Box mit flexiblen Kindern zu erstellen, verwenden wir `display: inline flex`. Das Beispiel unten demonstriert diese Werte.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/multi-keyword-flex.html", '100%', 640)}}

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Für eine vollständige Liste werfen Sie einen Blick auf die Tabelle in der [`display` Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

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

In Bezug darauf, wie diese Mehrwert-Syntax dazu beiträgt, das CSS-Layout zu klären, können wir einige Werte in der obigen Tabelle betrachten, die Ihnen vielleicht weniger vertraut sind. Die Mehrfach-Keyword-Syntax `display: block flow-root` wird auf einen Einzelwert abgebildet: `display: flow-root`. Der einzige Zweck dieses Werts ist es, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt, und Dinge außerhalb der Box nicht in sie eindringen können.

Im Beispiel unten demonstrieren zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns stattdessen auf die nachfolgenden Elemente konzentrieren können.
Die Elemente, auf die wir achten sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>` Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den übergeordneten und Kindelementen gibt und das Kindelement einen oberen Rand aufweist.
Sie könnten erwarten, dass der obere Rand das Kindelement effektiv innerhalb des übergeordneten Elements nach unten schiebt, aber stattdessen passiert etwas, das [_Randkollaps_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt wird.
In diesem Fall erstreckt sich der Rand des Kindelements weit über den Begrenzungsrahmen des übergeordneten Elements und schiebt das übergeordnete Element weiter nach unten auf der Seite.
Das ist leichter zu sehen, wenn Sie das Boxmodell des Kindelements [in den Entwickler-Tools Ihres Browsers](/de/docs/Learn/CSS/Building_blocks/The_box_model#use_browser_devtools_to_view_the_box_model) untersuchen.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkung verschiedener `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das übergeordnete Element zu erstellen, wodurch der Rand des Kindelements relativ zur äußeren Kante des übergeordneten Elements wird und der Randkollaps vermieden wird.
Das Wechseln zwischen `display: flow-root` und `display: block flow-root` wird den gleichen Effekt erzielen wie das Einzelwert-Schlüsselwort `flow-root`.

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
  <p id="child">Der #child-Absatz (verschachtelt in #parent).</p>
</div>
<p id="sibling">Der #sibling-Absatz (Geschwister von #parent).</p>
```

{{EmbedLiveSample("display_block_flow-root_and_display_inline_flow-root", '90%', 380)}}

Der `flow-root`-Wert ergibt Sinn, wenn man an Block- und Inline-Layout denkt, das manchmal als [normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können nicht über die Grenzen hinausgehen) und unser Inhalt wird im normalen Fluss, unter Verwendung von Block- und Inline-Layout, dargestellt, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils). Diese enthalten ebenfalls alles innerhalb von ihnen. Wenn Sie jedoch Floats und Ränder enthalten, aber weiterhin das Block- und Inline-Layout verwenden möchten, können Sie einen neuen Flow-Root erstellen und mit Block- und Inline-Layout neu beginnen. Von diesem Punkt abwärts ist alles innerhalb des neuen Flow-Roots enthalten.

Deshalb kann `display: flow-root` mit der Mehrfach-Keyword-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn normalerweise verwenden, besteht darin, Polsterungen zu ermöglichen, Inline-Elemente von einem Element wegzudrücken, z.B. beim Erstellen von Navigationselementen oder wenn man einem Inline-Element einen Hintergrund mit Polsterung hinzufügen möchte, wie im folgenden Beispiel.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-block.html", '100%', 440)}}

Ein Element mit `display: inline-block` jedoch, enthält auch Floats. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, nur mit einer Inline-Level- anstatt einer Block-Level-Box. Die Zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` durch `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Display-Werten?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit haben Sie keinen Nutzen von der Verwendung der Mehrfach-Keyword-Versionen, da für jede Mehrfach-Keyword-Version eine direkte Zuordnung zu einer Legacy-Version besteht, wie in der obigen Tabelle dargestellt.

Um mit den Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, wird der innere Display-Typ des Elements standardmäßig auf flow gesetzt."

Dies bedeutet, dass sich das Verhalten genau so verhält wie in einer Einzelwertwelt. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Display-Wert der Box, aber alle Kinder verbleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Display-Typ des Elements standardmäßig auf Block gesetzt – außer für Ruby, das standardmäßig auf Inline gesetzt ist."

Abschließend haben wir einige Legacy-[vorkomponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser diese als Einzelwerte vorfindet, behandelt er sie genauso wie die Mehrwertversionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen gut abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während sich die Spezifikation weiterentwickeln kann.
