---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: Floats
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeits-Tests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) unter Verwendung der {{CSSxRef("float")}} und {{CSSxRef("clear")}} Eigenschaften und Werte sowie anderer Methoden zum Entfernen von Floats verstehen. Sie werden sich mit drei kleinen Aufgaben befassen, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

Um diese Aufgabe zu vervollständigen, lassen Sie die zwei Elemente mit einer Klasse von `float1` und `float2` links bzw. rechts floaten. Der Text sollte dann zwischen den beiden Boxen erscheinen, wie im Bild unten gezeigt:

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
  color: #fff;
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

Um diese Aufgabe zu vervollständigen:

1. Lassen Sie das Element mit einer Klasse von `float` nach links floaten.
2. Aktualisieren Sie den Code so, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box wird links von einer Textzeile angezeigt, mit mehr Text darunter.](float-task2.png)

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
  color: #fff;
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

In dieser Aufgabe haben wir ein gefloatetes Element. Die Box, die den Float und Text umhüllt, wird hinter dem Float angezeigt.

Um die Aufgabe zu vervollständigen, verwenden Sie die aktuellste Methode, um zu bewirken, dass sich der Box-Hintergrund bis unter den Float erstreckt, wie im Bild unten:

![Ein Block wird rechts von einem Text angezeigt, beide umhüllt von einer Box mit Hintergrundfarbe.](float-task3.png)

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
  color: #fff;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: #fff;
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

Lösen Sie die Box unterhalb des gefloateten Elements, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten `overflow` oder ein clearfix-Hack sein, jedoch erklären die Lernmaterialien die `flow-root` Methode als die moderne Methode, um dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>
