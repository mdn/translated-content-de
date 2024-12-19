---
title: Im Fluss und aus dem Fluss
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) erklärte das Block- und Inline-Layout im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode layoutet.

## Beispiel für Elemente im Fluss

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen letzten Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Block-Level-Elemente, das `strong`-Element ist inline. Die Liste, die mit Flexbox angezeigt wird, um die Elemente in einer Reihe anzuordnen, nimmt auch am Block- und Inline-Layout teil - der Container hat einen äußeren `display`-Typ von `block`.

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
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise funktioniert)
- dem Wurzelelement (`html`)

Elemente, die aus dem Fluss genommen werden, erzeugen einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), und daher kann alles innerhalb dieser als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist somit aus dem Fluss, als der Container für alles in unserem Dokument, und etabliert den Block Formatting Context für das Dokument.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Ein Hintergrundfarbe wurde zu den Absätzen hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist nun aus dem Fluss.

Als Float wird es zuerst in normalem Fluss layoutet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

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

Sie können sehen, dass die Hintergrundfarbe des folgenden Absatzes darunterläuft, es sind nur die Zeilenboxen dieses Absatzes, die verkürzt wurden, um den Effekt des Umwickelns von Inhalten um den Float zu erzeugen. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Daher müssen Sie, um Platz um ein gefloatetes Element zu schaffen, dem Element einen Rand hinzufügen, um die Zeilenboxen davon wegzuschieben. Sie können nichts auf den folgenden im Fluss befindlichen Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Wenn Sie einem Element `position: absolute` oder `position: fixed` zuweisen, wird es aus dem Fluss entfernt, und jeder Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute`, mit Offset-Werten von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentenfluss entfernt.

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

Auch die Verwendung von `position: fixed` entfernt das Element aus dem Fluss, wobei die Offsets jedoch auf der Ansicht basieren und nicht auf dem umgebenden Block.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit von Überlappungen des Inhalts verwalten. Aus dem Fluss bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert, und daher nicht darauf reagieren.

### Relative Positionierung und Fluss

Wenn Sie einem Element eine relative Positionierung mit `position: relative` zuweisen, bleibt es im Fluss. Sie können jedoch die Offset-Werte verwenden, um es herumzuschieben. Der Platz, an dem es im normalen Fluss platziert worden wäre, wird jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

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

Wenn Sie etwas tun, um ein Element zu entfernen oder von dem Ort zu verschieben, an dem es im normalen Fluss platziert worden wäre, müssen Sie möglicherweise den Inhalt und den umgebenden Inhalt verwalten, um Überlappungen zu verhindern. Ob dies das Bereinigen von Floats bedeutet oder sicherzustellen, dass ein Element mit `position: absolute` nicht über anderen Inhalten liegt, aus diesem Grund sollten Methoden, die Elemente aus dem Fluss entfernen, mit Verständnis der Auswirkungen verwendet werden, die sie haben.

## Zusammenfassung

In diesem Leitfaden haben wir die Möglichkeiten besprochen, ein Element aus dem Fluss zu nehmen, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema betrachten, nämlich das Erstellen eines [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in [Formatting Contexts Explained](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

## Siehe auch

- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
