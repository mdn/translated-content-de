---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: Floats
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie die [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) anhand der {{CSSxRef("float")}}- und {{CSSxRef("clear")}}-Eigenschaften und Werte sowie anderer Methoden zum Freigeben von Floats verstehen. Sie werden drei kleine Aufgaben bearbeiten, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe müssen Sie die beiden Elemente mit einer Klasse von `float1` und `float2` links bzw. rechts schweben lassen. Der Text sollte dann zwischen den beiden Kästchen erscheinen, wie im Bild unten:

![Zwei Blöcke, die links und rechts von einem Text angezeigt werden.](float-task1.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float1
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css hidden live-sample___float1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float1
.float1 {
}

.float2 {
}
```

{{EmbedLiveSample("float1", "", "210px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `float` für beide Kästchen verwenden:

```css
.float1 {
  float: left;
}

.float2 {
  float: right;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe sollte das Element mit einer Klasse von `float` nach links schweben. Dann möchten wir, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Kasten, der links von einer Textzeile angezeigt wird, mit etwas mehr Text darunter.](float-task2.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float2
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css hidden live-sample___float2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float2
.float {
}

.below {
}
```

{{EmbedLiveSample("float2", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen das Element nach links fließen lassen und dann `clear: left` zur Klasse für den zweiten Absatz hinzufügen:

```css
.float {
  float: left;
}

.below {
  clear: left;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe haben wir ein schwebendes Element. Der Kasten, der den Float und den Text umschließt, wird hinter dem Float angezeigt. Verwenden Sie die modernste verfügbare Methode, um den Hintergrund des Kastens bis unter das Float zu erweitern, wie im Bild unten:

![Ein Block, der rechts von einem Text angezeigt wird, beide umschlossen von einem Kasten mit Hintergrundfarbe.](float-task3.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float3
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css hidden live-sample___float3
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: #fff;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: #fff;
}
```

```css live-sample___float3
.float {
  float: right;
}

.box {
}
```

{{EmbedLiveSample("float3", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Entfernen Sie das Element unter dem schwebenden Element, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen. Andere Methoden könnten die Verwendung von `overflow` oder ein Clearfix-Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root`-Methode als den modernen Weg, dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>

## Siehe auch

- [CSS Stil-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
