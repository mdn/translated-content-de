---
title: In Flow und aus dem Flow
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) erklärte die Block- und Inline-Anordnung im normalen Flow. Alle Elemente, die im Flow sind, werden mit dieser Methode angeordnet.

## Beispiel von Elementen im Flow

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Block-Level-Elemente, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt ebenfalls an der Block- und Inline-Anordnung teil - der Container hat einen äußeren `display`-Typ von `block`.

```html live-sample___in-flow
<div class="box">
  <h1>A heading</h1>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <p>
    Their names were <strong>Stephen and Joseph Montgolfier</strong>, they were
    papermakers by trade, and were noted as possessing thoughtful minds and a
    deep interest in all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___in-flow
body {
  font: 1.2em sans-serif;
}
.box > * {
  border: 1px solid green;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
}
```

{{EmbedLiveSample("in-flow", "", "300px")}}

Alle Elemente werden als "im Flow" betrachtet; sie erscheinen auf der Seite in der Reihenfolge, wie sie in der Quelle stehen.

## Ein Element aus dem Flow nehmen

Alle Elemente sind im Flow, außer:

- gefloatete Elemente
- Elemente mit `position: absolute` (einschließlich `position: fixed`, welches auf die gleiche Weise wirkt)
- das Wurzelelement (`html`)

Elemente außerhalb des Flows schaffen einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), und daher kann alles innerhalb von ihnen als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist daher aus dem Flow, da es der Container für alles in unserem Dokument ist und den Block Formatting Context für das Dokument festlegt.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist nun aus dem Flow.

Als Float wird es zuerst entsprechend seiner Position im normalen Flow angeordnet, dann aus dem Flow genommen und so weit wie möglich nach links verschoben.

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}
p {
  background-color: #ccc;
}

.float {
  float: left;
  font-weight: bold;
  width: 200px;
  border: 2px dotted black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "260px")}}

Sie können die Hintergrundfarbe des folgenden Absatzes darunter sehen, es sind nur die Linienboxen dieses Absatzes, die verkürzt wurden, um den Effekt zu erzielen, dass der Inhalt um das Float herum umbrochen wird. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flows angezeigt. Deshalb muss man, um Platz um ein gefloatetes Element zu schaffen, einen Rand zu dem Element hinzufügen, um die Linienboxen davon wegzuschieben. Sie können nichts auf den folgenden im Flow stehenden Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Indem Sie einem Element `position: absolute` oder `position: fixed` geben, entfernen Sie es aus dem Flow, und jeder Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute`, mit Versatzwerten von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentenfluss entfernt.

```html live-sample___abspos
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="abspos">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___abspos
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.abspos {
  position: absolute;
  background-color: green;
  color: #fff;
  top: 30px;
  right: 30px;
  width: 400px;
}
```

{{EmbedLiveSample("abspos", "", "240px")}}

Auch die Verwendung von `position: fixed` entfernt das Element aus dem Flow, jedoch basieren die Versatzwerte auf dem Viewport statt auf dem enthaltenen Block.

Wenn Sie ein Element durch Positionierung aus dem Flow nehmen, müssen Sie die Möglichkeit überlappender Inhalte managen. Out of flow bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite das Element nicht mehr kennen, sodass sie nicht darauf reagieren werden.

### Relative Positionierung und Flow

Wenn Sie einem Element mit `position: relative` eine relative Positionierung geben, bleibt es im Flow. Sie können jedoch dann die Versatzwerte verwenden, um es zu verschieben. Der Platz, den es in normalem Flow eingenommen hätte, wird jedoch reserviert, wie im Beispiel unten zu sehen ist.

```html live-sample___relative
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="relative">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___relative
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.relative {
  position: relative;
  background-color: green;
  color: #fff;
  bottom: 50px;
  left: 50px;
  width: 400px;
}
```

{{EmbedLiveSample("relative", "", "360px")}}

Wann immer Sie etwas tun, um ein Element aus dem Bereich zu entfernen oder zu verschieben, wo es im normalen Flow platziert würde, sollten Sie damit rechnen, den Inhalt und den Inhalt darum zu managen, um Überlappungen zu vermeiden. Ob das das Lösen von Floats betrifft oder sicherzustellen, dass ein Element mit `position: absolute` nicht über anderen Inhalten liegt. Aus diesem Grund sollten Methoden, die Elemente aus dem Flow entfernen, mit Verständnis für ihre Auswirkungen verwendet werden.

## Zusammenfassung

In diesem Leitfaden haben wir die Möglichkeiten behandelt, ein Element aus dem Flow zu nehmen, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema betrachten, nämlich die Erstellung eines [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) in [Formatting Contexts Explained](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

## Siehe auch

- [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning) im CSS Layout Lernbereich
