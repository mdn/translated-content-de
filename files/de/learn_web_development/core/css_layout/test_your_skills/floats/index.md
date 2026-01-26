---
title: "Testen Sie Ihre Fähigkeiten: Floats"
short-title: "Test: Floats"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Floats
l10n:
  sourceCommit: 18fa92d6153cc68189c899698074aa3cfeeeff31
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Tests ist es, Ihnen zu helfen, einzuschätzen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) verstehen, indem Sie die {{CSSxRef("float")}}- und {{CSSxRef("clear")}}-Eigenschaften und -Werte sowie andere Methoden zum Bereinigen von Floats verwenden. Sie werden drei kleine Aufgaben bearbeiten, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Um diese Aufgabe zu erfüllen, platzieren Sie die beiden Elemente mit einer Klasse von `float1` und `float2` jeweils links und rechts. Der Text sollte dann zwischen den beiden Boxen erscheinen, wie in dieser fertigen Darstellung gezeigt:

{{EmbedLiveSample("float1-finish", "", "210px")}}

```html live-sample___float1-start live-sample___float1-finish
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css live-sample___float1-start live-sample___float1-finish
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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("float1-start", "", "210px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `float` für beide Boxen verwenden:

```css live-sample___float1-finish
.float1 {
  float: left;
}

.float2 {
  float: right;
}
```

</details>

## Aufgabe 2

Um diese Aufgabe zu erfüllen:

1. Platzieren Sie das Element mit einer Klasse von `float` nach links.
2. Aktualisieren Sie den Code, sodass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die eine Klasse von `below` hat) darunter angezeigt wird.

Ihr Endergebnis sollte wie diese fertige Darstellung aussehen:

{{EmbedLiveSample("float2-finish", "", "300px")}}

```html live-sample___float2-start live-sample___float2-finish
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css live-sample___float2-start live-sample___float2-finish
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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("float2-start", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen das Element nach links fließen lassen und dann `clear: left` zur Klasse des zweiten Absatzes hinzufügen:

```css live-sample___float2-finish
.float {
  float: left;
}

.below {
  clear: left;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe haben wir ein schwebendes Element. Die Box, die den Float und den Text umschließt, wird hinter dem Float angezeigt.

Um die Aufgabe abzuschließen, verwenden Sie die modernste verfügbare Methode, um den Box-Hintergrund so zu erweitern, dass er unter den Float reicht, wie in dieser fertigen Darstellung gezeigt:

{{EmbedLiveSample("float3-finish", "", "220px")}}

```html live-sample___float3-start live-sample___float3-finish
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css live-sample___float3-start live-sample___float3-finish
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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("float3-start", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Bereinigen Sie die Box unter dem schwebenden Element, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen.
Andere Methoden könnten die Verwendung von `overflow` oder ein clearfix-Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root`-Methode als die moderne Art, dies zu erreichen.

```css live-sample___float3-finish
.box {
  display: flow-root;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
