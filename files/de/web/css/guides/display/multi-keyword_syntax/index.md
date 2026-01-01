---
title: Verwendung der Multi-Keyword-Syntax mit CSS display
short-title: Verwendung der Multi-Keyword-Syntax
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
l10n:
  sourceCommit: b2138abdd1c56206d10fc2234e35f1c14db0470f
---

Das [CSS-Display-Modul](/de/docs/Web/CSS/Guides/Display) definiert eine Multi-Keyword-Syntax für die CSS-{{cssxref("display")}}-Eigenschaft. Dieser Leitfaden erklärt die Multi-Keyword-Syntax.

> [!NOTE]
> Die Multi-Keyword-Syntax wird auch als "Zwei-Werte-Syntax" oder "Mehrwert-Syntax" bezeichnet.

## Was passiert, wenn wir den Wert der Display-Eigenschaft ändern?

Eine der ersten Dinge, die wir über CSS lernen, ist, dass einige Elemente Block-Elemente und andere Inline-Elemente sind. Dies sind ihre [äußeren](/de/docs/Web/CSS/Reference/Values/display-outside) Display-Typen. Zum Beispiel sind `<h1>` oder `<p>` standardmäßig Block-Elemente, und ein `<span>` ist ein Inline-Element. Mit der {{cssxref("display")}}-Eigenschaft können wir zwischen Block und Inline wechseln. Zum Beispiel würden wir, um eine Überschrift inline zu machen, das folgende CSS verwenden:

```css
h1 {
  display: inline;
}
```

Die `display`-Eigenschaft ermöglicht uns auch die Verwendung von [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), wenn `display: grid` oder `display: flex` gesetzt ist. Der wichtige Aspekt, den man verstehen muss, ist, dass das Ändern des `display`-Werts eines Elements den Formatierungskontext seiner direkten Kinder ändern kann. Wenn Sie `display: flex` oder `display: grid` verwenden, werden die Kinder des Elements zu Flex- bzw. Grid-Elementen und reagieren auf die Eigenschaften in den Grid- und Flexbox-Spezifikationen.

Was Grid und Flexbox jedoch zeigen, ist, dass ein Element sowohl einen **äußeren** als auch einen **inneren** Display-Typ hat. Der äußere Display-Typ beschreibt, ob das Element ein Block-Element oder ein Inline-Element ist. Der innere Display-Typ beschreibt, wie die Kinder dieser Box sich verhalten.

Zum Beispiel, wenn wir `display: flex` verwenden, erstellen wir einen Block-Container mit Flex-Kindern. Die Kinder werden als Teil eines Flex-Formatierungskontexts beschrieben. Dies können Sie sehen, wenn Sie ein `<span>` — normalerweise ein Inline-Element — nehmen und `display: flex` darauf anwenden. Das `<span>` wird zu einem Block-Element. Es verhält sich wie Block-Elemente im Verhältnis zu anderen Boxen im Layout. Es ist, als ob Sie `display: block` auf das span angewendet hätten, jedoch erhalten wir auch das veränderte Verhalten der Kinder.

Das Live-Beispiel unten hat ein `<span>` mit angewendetem `display: flex`. Es ist zu einer Block-Level-Box geworden, die im Inline-Richtung allen verfügbaren Platz einnimmt. Sie können jetzt `justify-content: space-between` verwenden, um diesen Raum zwischen den beiden Flex-Elementen zu setzen.

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

Es ist auch möglich, Inline-Flex-Container zu erstellen. Wenn Sie den Einzelwert `inline-flex` verwenden, erhalten Sie eine Inline-Level-Box mit Flex-Kindern. Die Kinder verhalten sich auf die gleiche Weise wie die Flex-Kinder eines Block-Containers. Das einzig Veränderte ist, dass der Elternteil jetzt eine Inline-Level-Box ist. Er verhält sich daher wie andere Inline-Elemente und nimmt nicht die volle Breite (oder Größe in der Inline-Dimension) ein, die eine Block-Level-Box einnimmt. Dies bedeutet, dass einige folgen Texte neben dem Flex-Container erscheinen könnten.

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

Das Gleiche gilt beim Arbeiten mit Grid-Layout. Die Verwendung von `display: grid` gibt Ihnen eine Block-Level-Box, die einen Grid-Formatierungskontext für die direkten Kinder erstellt. Die Verwendung von `display: inline-grid` erstellt eine Inline-Level-Box, die einen Grid-Formatierungskontext für die Kinder erstellt.

## Verwendung der Multi-Keyword-Syntax

Wie Sie aus der obigen Erklärung sehen können, hat die `display`-Eigenschaft beträchtliche Fähigkeiten. Zusätzlich zur Angabe, ob etwas Block-Level oder Inline-Level im Verhältnis zu anderen Boxen auf der Seite ist, gibt sie auch den Formatierungskontext innerhalb der Box an, auf die sie angewendet wird. Um dieses Verhalten besser zu beschreiben, erlaubt die `display`-Eigenschaft, dass zwei Werte — ein äußerer und ein innerer Wert — darauf gesetzt werden. Die ursprüngliche Einzelwert-Syntax ist ebenfalls gültig.

Dies bedeutet, dass wir anstelle von `display: flex`, um eine Block-Level-Box mit Flex-Kindern zu erstellen, `display: block flex` verwenden. Anstatt `display: inline-flex`, um eine Inline-Level-Box mit Flex-Kindern zu erstellen, verwenden wir `display: inline flex`. Das untenstehende Beispiel demonstriert diese Werte.

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

Es gibt Zuordnungen für alle bestehenden Werte von `display`; die häufigsten sind in der untenstehenden Tabelle aufgeführt. Um eine vollständige Liste zu sehen, schauen Sie sich die Tabelle in der [`display`-Eigenschaftsspezifikation](https://drafts.csswg.org/css-display/#display-value-summary) an.

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

Was diese Mehrwert-Syntax zur Klärung des CSS-Layouts beiträgt, können wir uns einige Werte in der obigen Tabelle ansehen, die Ihnen möglicherweise weniger bekannt sind. Der Multi-Keyword `display: block flow-root` entspricht einem Einzelwert; `display: flow-root`. Der einzige Zweck dieses Wertes besteht darin, einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) zu erstellen. Ein BFC stellt sicher, dass alles in Ihrer Box bleibt, und dass Dinge außerhalb der Box nicht in sie eindringen können.

Im folgenden Beispiel zeigen zwei `<p>`-Elemente, eines innerhalb eines `<div>`, wie Display-Werte Formatierungskontexte beeinflussen. Das erste `<div>`-Element mit den Demo-Steuerelementen ist verborgen, damit wir uns stattdessen auf die folgenden Elemente konzentrieren können. Die Elemente, auf die wir uns konzentrieren sollten, sind die "parent", "child" und "sibling" `<div>` und `<p>` Elemente, die Sie an ihren IDs unterscheiden können.

Bemerkenswert an diesem Layout ist, dass es keinen Inhalt zwischen den übergeordneten und untergeordneten Elementen gibt und das untergeordnete Element einen oberen Rand hat. Man könnte erwarten, dass der obere Rand das untergeordnete Element tatsächlich innerhalb des übergeordneten Elements nach unten drückt, aber stattdessen passiert etwas, das [_Margins-Kollaps_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) genannt wird. In diesem Fall erstreckt sich der Rand des untergeordneten Elements weit über den Rand des übergeordneten Elements hinaus und drückt das übergeordnete Element weiter nach unten auf die Seite. Dies ist leichter zu sehen, wenn Sie das Box-Modell des untergeordneten Elements [in den Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) inspizieren.

Ändern Sie die ausgewählte Option im `<select>`-Element, um die Auswirkung verschiedener `display`-Werte zu sehen. Sie können jeden Wert mit `flow-root` verwenden, um einen neuen Formatierungskontext für das übergeordnete Element zu erstellen, wodurch der Rand des Kind-Elements relativ zum äußeren Rand des Elternteils bleibt und das Margen-Kollaps verhindert wird. Der Wechsel zwischen `display: flow-root` und `display: block flow-root` erzielt denselben Effekt wie das Einzelwert-Schlüsselwort `flow-root`.

```js hidden
const parentDiv = document.getElementById("parent");
const siblingDiv = document.getElementById("sibling");
const displayTypeSelect = document.getElementById("displayType");

function changeDisplayType() {
  parentDiv.style.display = displayTypeSelect.value;
  siblingDiv.style.display = displayTypeSelect.value;
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

Der Wert `flow-root` ist sinnvoll, wenn Sie über Block- und Inline-Layout nachdenken, das manchmal als [normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) bezeichnet wird. Unsere HTML-Seite erstellt einen neuen Formatierungskontext (Floats und Margins können nicht aus den Begrenzungen herausragen) und unser Inhalt wird im normalen Fluss angezeigt, unter Verwendung von Block- und Inline-Layout, es sei denn, wir ändern den Wert von `display`, um einen anderen Formatierungskontext zu verwenden. Das Erstellen eines Grid- oder Flex-Containers erstellt auch einen neuen Formatierungskontext (einen Grid- oder Flex-Formatierungskontext, jeweils.) Diese enthalten ebenfalls alles innerhalb von ihnen. Wenn Sie jedoch Floats und Margins enthalten, aber weiterhin Block- und Inline-Layout verwenden möchten, können Sie einen neuen Flow-Root erstellen und mit Block- und Inline-Layout neu starten. Von diesem Punkt abwärts ist alles innerhalb des neuen Flow-Roots enthalten.

Deshalb kann `display: flow-root` mit der Mehrwert-Syntax `display: block flow-root` geschrieben werden. Sie erstellen einen Block-Formatierungskontext, mit einer Block-Level-Box und Kindern, die am normalen Fluss teilnehmen. Was ist mit dem zusammenpassenden Paar `display: inline flow-root`? Dies ist die aktuelle Art, `display: inline-block` zu beschreiben.

Der Wert `display: inline-block` existiert seit den frühen Tagen von CSS. Der Grund, warum wir ihn tendenziell verwenden, ist, um Auffüllungen zu ermöglichen, die Inline-Elemente von einem Element wegzudrücken, wenn zum Beispiel Navigationspunkte erstellt werden, oder wenn ein Hintergrund mit Auffüllung zu einem Inline-Element hinzugefügt werden soll, wie im folgenden Beispiel.

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

Ein Element mit `display: inline-block` hingegen wird auch Floats enthalten. Es enthält alles innerhalb der Inline-Level-Box. Daher macht `display: inline-block` genau das, was `display: flow-root` tut, jedoch mit einer Inline-Level-Box anstelle einer Block-Level-Box. Die Zwei-Werte-Syntax beschreibt genau das, was mit diesem Wert geschieht. Im obigen Beispiel können Sie `display: inline-block` in `display: inline flow-root` ändern und erhalten dasselbe Ergebnis.

## Was ist mit den alten Werten von display?

Die Einzelwerte von `display` werden in der Spezifikation als veraltete Werte beschrieben und derzeit gewinnen Sie keinen Vorteil, wenn Sie die Multi-Keyword-Versionen verwenden, da für jede Multi-Keyword-Version eine direkte Zuordnung zu einer Legacy-Version besteht, wie in der obigen Tabelle demonstriert.

Um mit einzelnen Werten von `display` umzugehen, erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#outer-role), was zu tun ist, wenn nur der äußere Wert `block` oder `inline` verwendet wird:

> "Wenn ein `<display-outside>` Wert angegeben, aber `<display-inside>` ausgelassen wird, wird der innere Display-Typ des Elements standardmäßig auf flow gesetzt."

Dies bedeutet, dass sich das Verhalten genauso verhält wie in einer Einzelwert-Welt. Wenn Sie `display: block` oder `display: inline` angeben, ändert das den äußeren Anzeige-Wert der Box, aber alle Kinder bleiben im normalen Fluss. Wenn nur ein innerer Wert von `flex`, `grid` oder `flow-root` angegeben wird, dann erklärt [die Spezifikation](https://drafts.csswg.org/css-display/#inner-model) dass der äußere Wert auf `block` gesetzt werden sollte:

> "Wenn ein `<display-inside>` Wert angegeben wird, aber `<display-outside>` weggelassen wird, wird der äußere Display-Typ des Elements standardmäßig auf block gesetzt—außer bei ruby, das standardmäßig inline ist."

Schließlich haben wir einige veraltete [vorkomponierte Inline-Level-Werte](https://drafts.csswg.org/css-display/#legacy-display) von:

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

Wenn ein unterstützender Browser auf diese als Einzelwerte stößt, behandelt er sie genauso wie die Mehrwert-Versionen:

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

So sind alle aktuellen Situationen ordentlich abgedeckt, was bedeutet, dass wir die Kompatibilität bestehender und neuer Websites, die die Einzelwerte verwenden, aufrechterhalten können, während die Spezifikation sich weiterentwickeln kann.
