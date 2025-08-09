---
title: Im Fluss und außerhalb des Flusses
slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) hat das Block- und Inline-Layout im normalen Fluss erklärt. Alle Elemente, die sich im Fluss befinden, werden mit dieser Methode angeordnet.

## Beispiel für Elemente im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind auf Blockebene, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt ebenfalls an Block- und Inline-Layout teil - der Container hat einen externen `display`-Typ von `block`.

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

Alle Elemente werden als "im Fluss" betrachtet; sie erscheinen auf der Seite in der Reihenfolge, in der sie im Quellcode stehen.

## Herausnahme eines Elements aus dem Fluss

Alle Elemente sind im Fluss, abgesehen von:

- gefloateten Elementen
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise wirkt)
- dem Wurzelelement (`html`)

Elemente außerhalb des Flusses erzeugen einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), und daher kann alles innerhalb dieser Elemente als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist daher außerhalb des Flusses, als Container für alles in unserem Dokument und es etabliert den Block-Formatierungs-Kontext für das Dokument.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist jetzt außerhalb des Flusses.

Als Float wird es zunächst gemäß seiner Position im normalen Fluss angeordnet und dann aus dem Fluss genommen und soweit wie möglich nach links verschoben.

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

Sie können sehen, dass die Hintergrundfarbe des folgenden Absatzes darunter verläuft. Es sind nur die Linienboxen dieses Absatzes, die verkürzt wurden, um den Effekt des Umfließens um das Float zu erzielen. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund müssen Sie, um Platz um ein gefloatetes Element zu schaffen, diesem Element einen Abstand hinzufügen, um die Linienboxen davon wegzudrücken. Sie können nichts auf den nachfolgenden Inhalt im Fluss anwenden, um dies zu erreichen.

### Absolute Positionierung

Ein Element mit `position: absolute` oder `position: fixed` zu versehen, entfernt es aus dem Fluss, und jeder Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute` mit Versatzwerten von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentfluss entfernt.

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
  color: white;
  top: 30px;
  right: 30px;
  width: 400px;
}
```

{{EmbedLiveSample("abspos", "", "240px")}}

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Versätze auf dem Viewport anstelle des enthaltenden Blocks.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit des Überlappens von Inhalten verwalten. Außerhalb des Flusses bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert, und daher nicht darauf reagieren.

### Relative Positionierung und Fluss

Wenn Sie einem Element mit `position: relative` eine relative Positionierung geben, bleibt es im Fluss. Sie können jedoch die Versatzwerte verwenden, um es zu verschieben. Der Raum, den es im normalen Fluss eingenommen hätte, wird jedoch freigehalten, wie Sie im folgenden Beispiel sehen können.

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
  color: white;
  bottom: 50px;
  left: 50px;
  width: 400px;
}
```

{{EmbedLiveSample("relative", "", "360px")}}

Wenn Sie etwas tun, um ein Element von dem Ort zu entfernen oder zu verschieben, an dem es im normalen Fluss platziert wäre, müssen Sie erwarten, den Inhalt und den Inhalt darum herum so zu verwalten, dass Überlappungen verhindert werden. Ob dies das Beseitigen von Floats umfasst oder sicherzustellen, dass ein Element mit `position: absolute` nicht über anderen Inhalten liegt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss nehmen, mit Verständnis der Wirkung, die sie haben, verwendet werden.

## Zusammenfassung

In diesem Leitfaden haben wir erklärt, wie man ein Element aus dem Fluss nimmt, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir uns einem verwandten Thema widmen, nämlich der Erstellung eines [Block-Formatierungs-Kontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in der [Einführung in die Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts).

## Siehe auch

- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
