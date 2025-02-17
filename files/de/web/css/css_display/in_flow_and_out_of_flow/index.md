---
title: Innerhalb des Flusses und außerhalb des Flusses
slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) erklärte die Block- und Inline-Layouts im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode angeordnet.

## Beispiel von Elementen im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen letzten Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Block-Elemente, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt ebenfalls am Block- und Inline-Layout teil – der Container hat einen äußeren `display`-Typ von `block`.

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

Alle diese Elemente werden als "im Fluss" betrachtet; sie erscheinen auf der Seite in der Reihenfolge, in der sie im Quellcode stehen.

## Ein Element aus dem Fluss entfernen

Alle Elemente befinden sich im Fluss, mit Ausnahme von:

- Float-Elementen
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise funktioniert)
- dem Root-Element (`html`)

Elemente, die aus dem Fluss entfernt wurden, erstellen einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), wodurch alles innerhalb davon als ein Mini-Layout angesehen werden kann, das vom Rest der Seite getrennt ist. Das Root-Element ist daher aus dem Fluss, da es das Container-Element für alles in unserem Dokument ist und den Block Formatting Context für das Dokument etabliert.

### Float-Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` befindet sich jetzt außerhalb des Flusses.

Als Float wird es zunächst gemäß seiner Position im normalen Fluss angeordnet und dann aus dem Fluss entfernt und so weit wie möglich nach links verschoben.

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

Sie können sehen, dass die Hintergrundfarbe des folgenden Absatzes darunter verläuft. Es sind lediglich die Zeilenboxen dieses Absatzes, die verkürzt wurden, um den Effekt des Umfließens des Inhalts um den Float zu erzeugen. Die Box unseres Absatzes wird weiterhin nach den Regeln des normalen Flusses angezeigt. Deshalb müssen Sie, um Platz um ein gefloatetes Element herum zu schaffen, dem Element einen Abstand hinzufügen, um die Zeilenboxen davon wegzuschieben. Sie können nichts am nachfolgenden Inhalt im Fluss ändern, um dies zu erreichen.

### Absolute Positionierung

Einem Element `position: absolute` oder `position: fixed` zuzuweisen, entfernt es aus dem Fluss, und der Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente; das zweite Element hat `position: absolute` mit Abstandsangaben von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentfluss entfernt.

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

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Abstände auf dem Viewport anstatt auf dem Containing Block.

Wenn Sie ein Element mithilfe von Positionierung aus dem Fluss entfernen, müssen Sie möglicherweise Content-Überlappungen managen. Aus dem Fluss zu sein bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert und daher nicht darauf reagieren werden.

### Relative Positionierung und Fluss

Wenn Sie einem Element mit `position: relative` eine relative Positionierung geben, bleibt es im Fluss. Sie können jedoch die Offset-Werte verwenden, um es zu verschieben. Der Platz, den es im normalen Fluss eingenommen hätte, bleibt jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

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

Wenn Sie etwas tun, um ein Element von der Stelle zu entfernen oder zu verschieben, an der es im normalen Fluss platziert worden wäre, können Sie erwarten, dass Sie den Inhalt und die Inhalte in seiner Umgebung entsprechend verwalten müssen, um Überlappungen zu vermeiden. Dies kann das Klären von Floats oder das Sicherstellen sein, dass ein Element mit `position: absolute` nicht auf anderem Inhalt liegt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss entfernen, nur mit Verständnis der Auswirkungen eingesetzt werden.

## Zusammenfassung

In diesem Leitfaden haben wir erklärt, wie Sie ein Element aus dem Fluss entfernen, um einige sehr spezifische Positionierungstypen zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema behandeln, nämlich das Erstellen eines [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) in [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts).

## Siehe auch

- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
