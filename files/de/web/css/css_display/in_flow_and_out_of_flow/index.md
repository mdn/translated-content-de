---
title: Im Fluss und außerhalb des Flusses
slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Der [vorherige Leitfaden](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) erklärte Block- und Inline-Layout im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode layoutet.

## Beispiel für Elemente im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Blockebene, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt ebenfalls am Block- und Inline-Layout teil - der Container hat einen äußeren `display`-Typ von `block`.

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

Alle Elemente werden als "im Fluss" betrachtet; sie erscheinen auf der Seite in der Reihenfolge, in der sie sich im Quellcode befinden.

## Ein Element aus dem Fluss nehmen

Alle Elemente befinden sich im Fluss, außer:

- gefloatete Elemente
- Elemente mit `position: absolute` (einschließlich `position: fixed`, das auf gleiche Weise wirkt)
- das Wurzelelement (`html`)

Elemente außerhalb des Flusses erstellen einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC), und daher kann alles innerhalb von ihnen als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist daher außerhalb des Flusses, da es der Container für alles in unserem Dokument ist und den Block-Formatierungskontext für das Dokument etabliert.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` wird nach links gefloatet. Das `div` ist jetzt aus dem Fluss.

Als Float wird es zuerst gemäß seiner Position im normalen Fluss layoutet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

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

Sie können sehen, wie die Hintergrundfarbe des folgenden Absatzes darunter läuft. Es sind nur die Linienkästen dieses Absatzes, die verkürzt wurden, um den Effekt des Verpackens von Inhalten um den Float zu erzielen. Der Kasten unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund müssen Sie einen Rand zu dem gefloateten Element hinzufügen, um Platz um ein gefloatetes Element zu schaffen, damit die Linienkästen davon weggedrückt werden. Sie können nichts auf den folgenden im Fluss befindlichen Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Ein Element mit `position: absolute` oder `position: fixed` zu versehen, entfernt es aus dem Fluss, und der Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute` mit den Offset-Werten `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentfluss entfernt.

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

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie das Risiko von überlappendem Inhalt verwalten. "Aus dem Fluss" bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert und daher nicht darauf reagieren werden.

### Relative Positionierung und Fluss

Wenn Sie einem Element mit `position: relative` eine relative Positionierung geben, bleibt es im Fluss. Sie können jedoch dann die Offset-Werte verwenden, um es zu verschieben. Der Platz, an dem es im normalen Fluss platziert worden wäre, wird jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

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

Wenn Sie etwas tun, um ein Element von dem Ort zu entfernen oder zu verschieben, an dem es im normalen Fluss platziert wäre, müssen Sie erwarten, dass Sie den Inhalt und den Inhalt darum herum verwalten müssen, um Überlappungen zu vermeiden. Ob das das Löschen von Floats beinhaltet oder dafür sorgt, dass ein Element mit `position: absolute` nicht auf anderen Inhalten sitzt. Aus diesem Grund sollten Verfahren, die Elemente aus dem Fluss nehmen, mit Verständnis für die Auswirkungen, die sie haben, verwendet werden.

## Zusammenfassung

In diesem Leitfaden haben wir erklärt, wie man ein Element aus dem Fluss nimmt, um sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir uns mit einem verwandten Thema befassen, der Erstellung eines [Block-Formatierungskontexts](/de/docs/Web/CSS/Guides/Display/Block_formatting_context), in [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts).

## Siehe auch

- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
