---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: Floats
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Skill-Tests ist es, zu beurteilen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) mithilfe der {{CSSxRef("float")}} und {{CSSxRef("clear")}} Eigenschaften und Werte sowie anderer Methoden zum Klären von Floats verstehen. Sie werden drei kleine Aufgaben durchlaufen, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Klicken Sie auf **"Play"** in den unten stehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischensymbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe müssen Sie die beiden Elemente mit einer Klasse von `float1` und `float2` links bzw. rechts floaten. Der Text sollte dann zwischen den beiden Kästen erscheinen, wie im Bild unten:

![Zwei Blöcke, die links und rechts von etwas Text angezeigt werden.](float-task1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Sie können `float` für beide Boxen verwenden:

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

In dieser Aufgabe sollte das Element mit einer Klasse von `float` links floaten. Dann möchten wir, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Ihr finales Ergebnis sollte wie das Bild unten aussehen:

![Ein Kasten, der links von einer Textzeile angezeigt wird, mit weiterem Text darunter.](float-task2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Sie müssen das Element nach links floaten lassen und dann `clear: left` zur Klasse des zweiten Absatzes hinzufügen:

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

In dieser Aufgabe haben wir ein gefloatetes Element. Die Box, die den Float und den Text umschließt, wird hinter dem Float angezeigt. Verwenden Sie die modernste verfügbare Methode, um den Hintergrund der Box zu veranlassen, sich bis unter den Float zu erstrecken, wie im Bild unten:

![Ein Block, der rechts von etwas Text angezeigt wird, beide umschlossen von einer Box mit Hintergrundfarbe.](float-task3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Beseitigen Sie die Box unter dem gefloateten Element, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten `overflow` oder ein clearfix Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root` Methode als modernen Weg, dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>

## Siehe auch

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
