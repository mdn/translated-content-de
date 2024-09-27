---
title: Multi-Keyword-Syntax mit CSS display verwenden
slug: Web/CSS/display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display) definiert eine Multi-Keyword-Syntax für die CSS-Eigenschaft [`display`](/de/docs/Web/CSS/display). Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Multi-Werte-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der display-Eigenschaft ändern?

Eine der ersten Sachen, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und einige Inline-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/display-outside) Anzeige-Typen. Zum Beispiel sind ein `<h1>` oder ein `<p>` standardmäßig Block-Elemente, und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Um beispielsweise eine Überschrift in eine Inline-Darstellung zu ändern, würden wir das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht es uns auch, das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zu verwenden, wenn `display: grid` oder `display: flex` gesetzt ist. Ein wichtiger Aspekt ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu flexiblen oder Gitter-Elementen, die auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen reagieren.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Anzeige-Typ hat. Der äußere Anzeige-Typ beschreibt, ob das Element ein Block- oder Inline-Element ist. Der innere Anzeige-Typ beschreibt, wie sich die Kinder dieser Box verhalten.

Ein Beispiel: Wenn wir `display: flex` verwenden, erstellen wir ein Block-Container mit flexiblen Kindern. Die Kinder werden als Teilnehmer in einem flexiblen Formatierungskontext beschrieben. Dies können Sie beobachten, wenn Sie ein `<span>` — normalerweise ein Inline-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie ein Block-Element im Verhältnis zu anderen Boxen im Layout. Es ist, als ob Sie `display: block` auf das span angewendet hätten, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das untenstehende Live-Beispiel zeigt ein `<span>`, auf das `display: flex` angewandt wurde. Es wurde zu einer Block-Box, die den gesamten verfügbaren Platz in der Inline-Richtung einnimmt. Sie können nun `justify-content: space-between` verwenden, um diesen Raum zwischen den zwei flexiblen Elementen zu schaffen.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/span-flex.html", '100%', 440)}}

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Box mit flexiblen Kindern. Die Kinder verhalten sich genauso wie die flexiblen Kinder eines Block-Containers. Das Einzige, was sich geändert hat, ist, dass das Elternteil nun eine Inline-Box ist. Es verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Box einnimmt. Das bedeutet, dass Text daneben angrenzen könnte.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-flex.html", '100%', 440)}}

Das gleiche gilt bei der Arbeit mit Grid-Layout. Die Verwendung von `display: grid` ergibt eine Block-Box, die einen Grid-Formatierungskontext für die direkten Kinder schafft. Die Verwendung von `display: inline-grid` erzeugt eine Inline-Box, die einen Grid-Formatierungskontext für die Kinder schafft.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Fähigkeiten. Neben der Anzeige, ob etwas im Verhältnis zu anderen Boxen auf der Seite Block- oder Inline-Ebene ist, zeigt sie auch den Formatierungskontext innerhalb der angewandten Box an. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — festgelegt werden können. Die ursprüngliche Einzel-Wert-Syntax ist ebenfalls gültig.

Das bedeutet, dass anstelle von `display: flex`, um eine Block-Box mit flexiblen Kindern zu erstellen, wir `display: block flex` verwenden. Anstelle von `display: inline-flex`, um eine Inline-Box mit flexiblen Kindern zu erstellen, verwenden wir `display: inline flex`. Das Beispiel unten zeigt diese Werte.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/multi-keyword-flex.html", '100%', 640)}}

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der Tabelle unten aufgeführt. Um eine vollständige Liste zu sehen, werfen Sie einen Blick auf die Tabelle in der [`display`-Eigenschafts-Spezifikation](https://drafts.csswg.org/css-display/#display-value-summary).

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

Bezüglich dessen, wie diese Mehrwert-Syntax hilft, CSS-Layout zu verdeutlichen, können wir einige Werte in der obigen Tabelle betrachten, die Ihnen vielleicht weniger bekannt sind. Die Multi-Keyword `display: block flow-root` entspricht dem Einzelwert `display: flow-root`. Der einzige Zweck dieses Werts ist es, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles innerhalb Ihrer Box bleibt, und Dinge außerhalb der Box nicht in sie eindringen können.

Im Beispiel unten zeigen zwei `<p>`-Elemente innerhalb eines `<div>`, wie Anzeige-Werte Formatierungskontexte beeinflussen.
Das erste `<div>`-Element mit den Demo-Steuerelementen ist ausgeblendet, damit wir uns auf die folgenden Elemente konzentrieren können.
Die Elemente, auf die wir uns konzentrieren sollten, sind die "Eltern", "Kind" und "Geschwister" `<div>` und `<p>`-Elemente, die Sie anhand ihrer IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den Eltern- und Kind-Elementen gibt und das Kind-Element einen oberen Rand hat.
Sie könnten erwarten, dass der obere Rand das Kind-Element effektiv innerhalb des Elternelements nach unten drückt, aber stattdessen passiert etwas, das als [_Randkollaps_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bekannt ist.
In diesem Fall erstreckt sich der Rand des Kind-Elements weit über das Begrenzungsfeld des Elternelements hinaus und drückt das Elternelement weiter nach unten.
Dies ist leichter zu erkennen, wenn Sie das Box-Modell des Kind-Elements [in den Entwicklertools Ihres Browsers](/de/docs/Learn/CSS/Building_blocks/The_box_model#use_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Wirkung der verschiedenen `display`-Werte zu sehen.
Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für den Elternteil zu erstellen, der den Rand des Kind-Elements relativ zu seinem äußeren Rand setzt und den Randkollaps vermeidet.
Der Wechsel zwischen `display: flow-root` und `display: block flow-root` wird denselben Effekt wie das Einzelwert-Keyword `flow-root` erzielen.

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

Der `flow-root`-Wert ergibt Sinn, wenn Sie über Block- und Inline-Layouts nachdenken, die manchmal [normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) genannt werden. Unsere HTML-Seite schafft einen neuen Formatierungskontext (Floats und Ränder können nicht aus den Grenzen hinausgehen) und unser Inhalt wird im normalen Fluss angeordnet, mit Block- und Inline-Layouts, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers schafft auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils.) Diese enthalten ebenfalls alles innerhalb von ihnen. Wenn Sie jedoch Floats und Ränder enthalten und weiterhin Block- und Inline-Layouts verwenden möchten, können Sie einen neuen Fluss-Root erstellen und mit Block- und Inline-Layouts von neuem beginnen. Ab diesem Punkt abwärts wird alles innerhalb des neuen Fluss-Roots eingeschlossen.

Deshalb kann `display: flow-root` mit der Mehrwert-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext mit einer Block-Box und Kindern, die im normalen Fluss teilnehmen. Was ist mit dem passenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir es tendenziell verwenden, ist, um Polsterungen zu ermöglichen, die Inline-Elemente von einem Element wegdrücken, etwa bei der Erstellung von Navigationselementen oder beim Hinzufügen eines Hintergrunds mit Polsterungen zu einem Inline-Element wie im Beispiel unten.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-block.html", '100%', 440)}}

Ein Element mit `display: inline-block` wird jedoch auch Floats enthalten. Es enthält alles innerhalb der Inline-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, aber mit einer Inline- anstelle einer Block-Box. Die Zwei-Werte-Syntax beschreibt exakt, was mit diesem Wert passiert. Im obigen Beispiel können Sie `display: inline-block` zu `display: inline flow-root` ändern und das gleiche Ergebnis erzielen.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als alte Werte beschrieben, und derzeit gewinnen Sie keinen Vorteil durch die Verwendung der Mehrwert-Versionen, da es eine direkte Zuordnung für jede Mehrwert-Version zu einer alten Version gibt, wie in der obigen Tabelle gezeigt.

Um mit Einzelwerten von `display` umzugehen, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#outer-role), was zu tun ist, wenn nur der äußere Wert von `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>`-Wert angegeben wird, aber `<display-inside>` weggelassen wird, ändert sich der innere Anzeigetyp des Elements standardmäßig zu flow."

Das bedeutet, dass das Verhalten genau wie in einer Einzelwert-Welt ist. Wenn Sie `display: block` oder `display: inline` angeben, ändert sich der äußere Anzeigetyp der Box, aber alle Kinder bleiben im normalen Fluss.
Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, erklärt [die Spezifikation](https://www.w3.org/TR/css-display-3/#inner-model), dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>`-Wert angegeben wird, aber `<display-outside>` weggelassen wird, ändert sich der äußere Anzeigetyp des Elements standardmäßig zu block—außer für ruby, das standardmäßig zu inline wird."

Schließlich haben wir einige alte [vorkomponierte Inline-Werte](https://www.w3.org/TR/css-display-3/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese Einzelwerte stößt, behandelt er sie genauso wie die Mehrwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen ordentlich abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, beibehalten, während wir der Spezifikation erlauben, sich weiterzuentwickeln.
