---
title: Im Fluss und außerhalb des Flusses
slug: Web/CSS/Guides/Display/In_flow_and_out_of_flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der [vorhergehende Leitfaden](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) erklärte Block- und Inline-Layout im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode angeordnet.

## Beispiel von Elementen im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind auf Blockebene, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt ebenfalls am Block- und Inline-Layout teil - der Container hat einen äußeren `display`-Typ von `block`.

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

## Ein Element aus dem Fluss nehmen

Alle Elemente sind im Fluss, abgesehen von:

- gefloateten Elementen
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise wirkt)
- dem Wurzelelement (`html`)

Elemente, die außerhalb des Flusses sind, erstellen einen neuen [Block Formatting Context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC), und daher kann alles innerhalb eines solchen Elements als ein Mini-Layout gesehen werden, getrennt vom Rest der Seite. Das Wurzelelement ist daher außerhalb des Flusses, da es das Container-Element für alles in unserem Dokument ist und den Block Formatting Context für das Dokument festlegt.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist nun außerhalb des Flusses.

Als Float wird es zunächst entsprechend seiner Position im normalen Fluss angeordnet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

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
  background-color: #cccccc;
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

Sie können sehen, dass die Hintergrundfarbe des folgenden Absatzes darunterläuft, es sind nur die Linienboxen dieses Absatzes, die verkürzt wurden, um den Effekt zu erzeugen, dass der Inhalt um den Float herumfließt. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund müssen Sie, um Platz um ein gefloatetes Element herum zu schaffen, einen Rand zum Element hinzufügen, um die Linienboxen davon wegzuschieben. Sie können nichts auf das folgende Inhalt im Fluss anwenden, um dies zu erreichen.

### Absolute Positionierung

Ein Element mit `position: absolute` oder `position: fixed` zu versehen, entfernt es aus dem Fluss, und jeglicher Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute`, mit Offset-Werten von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentfluss entfernt.

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

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Offsets auf dem Viewport anstatt auf dem umgebenden Block.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit des Überlappens von Inhalten verwalten. Aus dem Fluss bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass das Element existiert, und daher nicht darauf reagieren.

### Relative Positionierung und Fluss

Wenn Sie einem Element eine relative Positionierung mit `position: relative` geben, bleibt es im Fluss. Allerdings können Sie dann die Offset-Werte verwenden, um es zu verschieben. Der Raum, den es im normalen Fluss eingenommen hätte, wird jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

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

Wenn Sie etwas tun, das ein Element aus dem Platz nimmt oder verschiebt, wo es im normalen Fluss platziert gewesen wäre, müssen Sie mit einigen Anpassungen des Inhalts und des Inhalts darum rechnen, um Überlappungen zu vermeiden. Ob das das Löschen von Floats oder das Sicherstellen betrifft, dass ein Element mit `position: absolute` nicht auf anderem Inhalt sitzt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss entfernen, mit Verständnis der Auswirkungen, die sie haben, verwendet werden.

## Zusammenfassung

In diesem Leitfaden haben wir erklärt, wie man ein Element aus dem Fluss nimmt, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir uns ein verwandtes Thema ansehen, nämlich die Erstellung eines [Block Formatting Context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context), in der [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts).

## Siehe auch

- [Lernen: Positioning](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
