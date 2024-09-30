---
title: Verwendung der Mehr-Schlüsselwort-Syntax mit CSS display
slug: Web/CSS/display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das [CSS Display Modul](/de/docs/Web/CSS/CSS_display) definiert eine Mehr-Schlüsselwort-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Mehr-Schlüsselwort-Syntax.

> [!NOTE]
> Die Mehr-Schlüsselwort-Syntax wird auch als "Zwei-Wert-Syntax" oder "Mehr-Wert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eines der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Level- und einige Inline-Level-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Display-Typen. Beispielsweise sind ein `<h1>` oder ein `<p>` standardmäßig Block-Level, und ein `<span>` ist Inline-Level. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift inline zu machen, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und den [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Das wichtige Konzept zu verstehen ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- oder Grid-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch demonstrieren, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element Block-Level oder Inline-Level ist. Der innere Display-Typ beschreibt, wie sich die Kinder dieses Elements verhalten.

Zum Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Level-Container mit Flexkindern. Die Kinder werden beschrieben als Teilnehmende an einem Flex-Formatierungskontext. Sie können dies sehen, wenn Sie ein `<span>` nehmen — normalerweise ein Inline-Level-Element — und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Level-Element. Es verhält sich wie Block-Level-Elemente in Bezug auf andere Boxen im Layout. Es ist, als hätten Sie `display: block` auf das Span angewendet, jedoch erhalten wir auch das geänderte Verhalten der Kinder.

Das lebende Beispiel unten hat ein `<span>` mit angewendetem `display: flex`. Es ist zu einer Block-Level-Box geworden, die den gesamten verfügbaren Raum in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu schaffen.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/span-flex.html", '100%', 440)}}

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, haben Sie eine Inline-Level-Box mit Flexkindern. Die Kinder verhalten sich genauso wie die Flexkinder eines Block-Level-Containers. Das einzige, was sich geändert hat, ist, dass das übergeordnete Element nun eine Inline-Level-Box ist. Es verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein wie eine Block-Level-Box. Das bedeutet, dass ein nachfolgender Text neben dem Flex-Container erscheinen könnte.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-flex.html", '100%', 440)}}

Das gleiche gilt bei der Arbeit mit dem Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` wird eine Inline-Level-Box erstellen, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Mehr-Schlüsselwort-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft erhebliche Fähigkeiten. Neben der Anzeige, ob etwas in Bezug zu anderen Boxen auf der Seite auf Block-Level- oder Inline-Level liegt, zeigt es auch den Formatierungskontext innerhalb der Box an, auf die es angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt es die `display`-Eigenschaft, zwei Werte — einen äußeren und einen inneren Wert — darauf zu setzen. Die ursprüngliche Einwert-Syntax ist ebenfalls gültig.

Das bedeutet, dass wir anstatt `display: flex` zu setzen, um eine Block-Level-Box mit Flexkindern zu erstellen, `display: block flex` verwenden. Anstatt `display: inline-flex` zu setzen, um eine Inline-Level-Box mit Flexkindern zu erstellen, verwenden wir `display: inline flex`. Das untenstehende Beispiel demonstriert diese Werte.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/multi-keyword-flex.html", '100%', 640)}}

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die gebräuchlichsten werden in der untenstehenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display`-Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

In Bezug darauf, wie diese Mehrwertsyntax hilft, das CSS-Layout zu klären, können wir einige Werte in der obigen Tabelle betrachten, die Ihnen möglicherweise weniger vertraut sind. Die Mehr-Schlüsselwort-Syntax `display: block flow-root` wird zu einem Einzelwert; `display: flow-root` abgebildet. Der einzige Zweck dieses Werts ist es, einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt und Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel demonstrieren zwei `<p>`-Elemente, eines in einem `<div>`, wie Anzeigewerte die Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern"-, "Kinder"- und "Geschwister"-`<div>` und `<p>`-Elemente, die Sie anhand Ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kindelementen gibt und dem Kindelement ein oberer Abstand zugewiesen ist.
Man könnte erwarten, dass der obere Rand das Kindelement effektiv nach unten innerhalb des Elternelements drückt, aber was stattdessen passiert, ist etwas, das als [_Margin Collapse_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet wird.
In diesem Fall erstreckt sich der Rand des Kindelements weit über den Begrenzungskasten des Elternteils hinaus und drückt das Elternelement weiter nach unten auf der Seite.
Dies ist einfacher zu sehen, wenn Sie das Boxmodell des Kindelements [in den Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn/CSS/Building_blocks/The_box_model#use_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung verschiedener `display`-Werte zu sehen.
Sie können einen beliebigen Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das Elternelement zu erstellen, wodurch der Rand des Kindelements relativ zum äußeren Rand seines Elternteils wird und der Margin Collapse vermieden wird.
Der Wechsel zwischen `display: flow-root` und `display: block flow-root` wird denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root` erzielen.

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

Der `flow-root`-Wert macht Sinn, wenn man über Block- und Inline-Layout nachdenkt, das manchmal als [Normalfluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Ränder können sich nicht über die Grenzen hinaus erstrecken) und unser Inhalt wird im Normalfluss dargestellt, unter Verwendung von Block- und Inline-Layout, es sei denn, wir ändern den `display`-Wert, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt ebenfalls einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext). Diese enthalten ebenfalls alles in sich. Wenn Sie jedoch Floats und Ränder einschließen möchten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Flow-Root erstellen und mit Block- und Inline-Layout von vorne beginnen. Ab diesem Punkt abwärts ist alles innerhalb des neuen Flow-Roots enthalten.

Aus diesem Grund kann `display: flow-root` mit der Mehr-Wert-Syntax als `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einer Block-Level-Box und Kindern, die am Normalfluss teilnehmen. Was ist mit dem Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` ist seit den frühen Tagen von CSS vorhanden. Der Grund, warum wir ihn verwenden, ist, um z.B. Polsterungen (Padding) zu ermöglichen, Inline-Elemente von einem Element wegzuschieben, wenn wir Navigationselemente erstellen oder einem Inline-Element einen Hintergrund mit Polsterung hinzufügen wollen, wie im folgenden Beispiel.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-block.html", '100%', 440)}}

Ein Element mit `display: inline-block` wird jedoch auch Floats einschließen. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` macht, aber mit einer Inline-Level-Box anstatt einer Block-Level-Box. Die zwei-Wert-Syntax beschreibt genau, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und dasselbe Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als Legacy-Werte beschrieben, und derzeit ziehen Sie keinen Nutzen aus der Verwendung der Mehr-Schlüsselwort-Versionen, da es eine direkte Zuordnung für jede Mehr-Schlüsselwort-Version zu einer Legacy-Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben, aber `<display-inside>` weggelassen wird, setzt der innere Display-Typ des Elements standardmäßig auf flow."

Das bedeutet, dass das Verhalten genau so ist, wie es in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeigewert der Box, aber alle Kinder bleiben weiterhin im Normalfluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben ist, dann erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben, aber `<display-outside>` weggelassen wird, setzt der äußere Display-Typ des Elements standardmäßig auf block—außer für ruby, das standardmäßig auf inline setzt."

Schließlich haben wir einige Legacy-[vorkomponierte Inline-Level-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehr-Schlüsselwort-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen sauber abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, erhalten und gleichzeitig die Spezifikation weiterentwickeln können.
