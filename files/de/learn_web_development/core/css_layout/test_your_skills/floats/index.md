---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: "Test: Floats"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) mit den Properties und Werten von {{CSSxRef("float")}} und {{CSSxRef("clear")}} sowie anderen Methoden zum Aufheben von Floats verstehen. Sie werden drei kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade durchgearbeitet haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

Um diese Aufgabe abzuschließen, lassen Sie die beiden Elemente mit einer Klasse von `float1` und `float2` links bzw. rechts floaten. Der Text sollte dann zwischen den beiden Kästchen erscheinen, wie im Bild unten gezeigt:

![Zwei Blöcke, die links und rechts von einigem Text angezeigt werden.](float-task1.png)

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

1. Lassen Sie das Element mit einer Klasse von `float` links floaten.
2. Aktualisieren Sie den Code, sodass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Block, der links von einer Textzeile angezeigt wird, mit etwas mehr Text darunter.](float-task2.png)

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

Sie müssen das Element links floaten und dann `clear: left` zur Klasse für den zweiten Absatz hinzufügen:

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

In dieser Aufgabe haben wir ein gefloatetes Element. Der Kasten, der den Float und den Text umschließt, wird hinter dem Float angezeigt.

Um die Aufgabe abzuschließen, verwenden Sie die aktuellste verfügbare Methode, um den Hintergrund des Kastens dazu zu bringen, sich bis unter den Float zu erstrecken, wie im Bild unten:

![Ein Block, der rechts von einem Text angezeigt wird, beide umschlossen von einem Kasten mit einer Hintergrundfarbe.](float-task3.png)

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

Heben Sie den Kasten unterhalb des gefloateten Elements auf, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten `overflow` oder ein clearfix-Hack sein, allerdings beschreiben die Lernmaterialien die `flow-root` Methode als die moderne Art, dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
