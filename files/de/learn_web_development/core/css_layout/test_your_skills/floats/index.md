---
title: "Testen Sie Ihr Können: Floats"
short-title: Floats
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Ziel dieses Skill-Tests ist es festzustellen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) mit den Eigenschaften und Werten {{CSSxRef("float")}} und {{CSSxRef("clear")}} sowie anderen Methoden zum Aufheben von Floats verstehen. Sie werden drei kleine Aufgaben bearbeiten, die verschiedene Elemente des von Ihnen gerade behandelten Materials nutzen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie bitte unseren [Leitfaden zur Verwendung von Testen Sie Ihr Können](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

Um diese Aufgabe abzuschließen, lassen Sie die beiden Elemente mit einer Klasse von `float1` und `float2` links bzw. rechts floaten. Der Text sollte dann zwischen den beiden Boxen erscheinen, wie im folgenden Bild gezeigt:

![Zwei Blöcke, die links und rechts von einem Text angezeigt werden.](float-task1.png)

```html live-sample___float1
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css live-sample___float1
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
  color: white;
  padding: 1em;
}

.float1 {
  /* Add styles here */
}

.float2 {
  /* Add styles here */
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

Um diese Aufgabe abzuschließen:

1. Lassen Sie das Element mit einer Klasse von `float` nach links floaten.
2. Aktualisieren Sie den Code so, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Das endgültige Ergebnis sollte wie im Bild unten aussehen:

![Eine Box, die links von einer Textzeile angezeigt wird, mit weiterem Text darunter.](float-task2.png)

```html live-sample___float2
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css live-sample___float2
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
  color: white;
  padding: 1em;
}

.float {
  /* Add styles here */
}

.below {
  /* Add styles here */
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

In dieser Aufgabe haben wir ein gefloates Element. Die Box, die den Float und den Text umschließt, wird hinter dem Float angezeigt.

Um die Aufgabe abzuschließen, verwenden Sie die aktuellste Methode, um zu bewirken, dass der Hintergrund der Box bis unter den Float reicht, wie im Bild unten gezeigt:

![Ein Block, der rechts von einem Text angezeigt wird, beide umschlossen von einer Box mit einer Hintergrundfarbe.](float-task3.png)

```html live-sample___float3
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css live-sample___float3
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
  color: white;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: white;
}

.float {
  float: right;
}

.box {
  /* Add styles here */
}
```

{{EmbedLiveSample("float3", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Heben Sie die Box unterhalb des gefloateten Elements auf, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten `overflow` oder ein clearfix-Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root`-Methode als die moderne Möglichkeit, dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>
