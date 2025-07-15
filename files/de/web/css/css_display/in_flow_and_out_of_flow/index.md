---
title: Im Fluss und außerhalb des Flusses
slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) erklärte Block- und Inline-Layout im normalen Fluss. Alle Elemente, die im Fluss sind, werden nach dieser Methode angeordnet.

## Beispiel für Elemente im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong` Element enthält. Die Überschrift und die Absätze sind Blockelemente, das `strong` Element ist inline. Die Liste, die angezeigt wird, indem Flexbox verwendet wird, um die Elemente in einer Reihe anzuordnen, nimmt auch am Block- und Inline-Layout teil - der Container hat einen äußeren `display` Typ von `block`.

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

Alle Elemente werden als "im Fluss" betrachtet; sie erscheinen in der Reihenfolge auf der Seite, in der sie sich im Quellcode befinden.

## Ein Element aus dem Fluss nehmen

Alle Elemente sind im Fluss, mit Ausnahme von:

- schwebenden Elementen
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise wirkt)
- dem Wurzelelement (`html`)

Elemente außerhalb des Flusses erstellen einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), und daher kann alles innerhalb von ihnen als ein Mini-Layout angesehen werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist daher außerhalb des Flusses, da es das Container-Element für alles in unserem Dokument ist und den Blockformatierungskontext für das Dokument etabliert.

### Schwebende Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Eine Hintergrundfarbe wurde den Absätzen hinzugefügt, und das `div` schwebt links. Das `div` befindet sich jetzt außerhalb des Flusses.

Als Schwebeelement wird es zunächst gemäß seiner normalen Position im Fluss platziert, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

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

Sie können die Hintergrundfarbe des folgenden Absatzes darunter sehen, es sind nur die Zeilenboxen dieses Absatzes, die verkürzt wurden, um den Effekt des Umbruchs des Inhalts um das Schwebeelement herum zu erzielen. Der Kasten unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund, um Platz um ein schwebendes Element zu schaffen, müssen Sie dem Element einen Rand hinzufügen, um die Zeilenboxen davon wegzuschieben. Sie können nichts auf den folgenden im Fluss befindlichen Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Ein Element `position: absolute` oder `position: fixed` zu geben, entfernt es aus dem Fluss, und jeder Raum, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatzelemente, das zweite Element hat `position: absolute`, mit Offsets von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentenfluss entfernt.

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

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Offsets auf dem Ansichtsfenster anstatt auf dem umschließenden Block.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit eines sich überlappenden Inhalts verwalten. Außerhalb des Flusses bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass das Element existiert, sodass sie darauf nicht reagieren werden.

### Relative Positionierung und Fluss

Wenn Sie einem Element eine relative Positionierung mit `position: relative` geben, bleibt es im Fluss. Sie können jedoch die Offset-Werte verwenden, um es zu verschieben. Der Platz, den es im normalen Fluss eingenommen hätte, wird jedoch reserviert, wie im folgenden Beispiel zu sehen ist.

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

Wenn Sie etwas tun, um ein Element zu entfernen oder zu verschieben, wo es im normalen Fluss platziert worden wäre, können Sie erwarten, dass Sie den Inhalt und den Inhalt um ihn herum verwalten müssen, um Überlappungen zu vermeiden. Ob das nun das Löschen von Schwebeelementen oder das Sicherstellen, dass ein Element mit `position: absolute` nicht auf einem anderen Inhalt sitzt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss nehmen, mit Verständnis der Auswirkungen verwendet werden, die sie haben.

## Zusammenfassung

In diesem Leitfaden haben wir erklärt, wie man ein Element aus dem Fluss nimmt, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema betrachten, das Erstellen eines [Blockformatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts).

## Siehe auch

- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
