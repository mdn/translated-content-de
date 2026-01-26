---
title: "Testen Sie Ihre Fähigkeiten: CSS-Raster"
short-title: "Test: CSS-Raster"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: d0be159e6119ff73453bea6d224f0a2056307aa4
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen festzustellen, ob Sie verstehen, wie ein [Raster und Rasterelemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) sich verhalten. Sie werden mehrere kleine Aufgaben bearbeiten, die verschiedene Elemente des Materials verwenden, das Sie gerade abgedeckt haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung: Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie ein Raster erstellen, in das sich die vier Kind-Elemente automatisch einfügen. Das Raster sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen 20-Pixel-Abstand zwischen den Spalten- und Reihen-Spuren. Versuchen Sie danach, mehr Kindbehälter innerhalb des Elternbehälters mit der Klasse `grid` hinzuzufügen und beobachten Sie, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("grid1-finish", "", "160px")}}

```html live-sample___grid1-start live-sample___grid1-finish
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___grid1-start live-sample___grid1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  /* Add styles here */
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("grid1-start", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Erstellen Sie ein Raster mit `display: grid` mit drei Spalten unter Verwendung von `grid-template-columns` und einem `gap` zwischen den Elementen:

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein definiertes Raster. Wir möchten, dass Sie die CSS-Regeln für die beiden Kind-Elemente bearbeiten, sodass sie jeweils mehrere Rasterspuren überspannen. Das zweite Element sollte das erste überlagern, wie in der folgenden Darstellung gezeigt:

{{EmbedLiveSample("grid2-finish", "", "340px")}}

**Bonusfrage:** Können Sie jetzt bewirken, dass das erste Element ohne Änderung der Reihenfolge der Elemente im Quellcode oben angezeigt wird?

```html live-sample___grid2-start live-sample___grid2-finish
<div class="grid">
  <div class="item1">One</div>
  <div class="item2">Two</div>
</div>
```

```css live-sample___grid2-start live-sample___grid2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.item1 {
  background-color: rgb(74 102 112 / 70%);
  border: 5px solid rgb(74 102 112 / 100%);
}

.item2 {
  background-color: rgb(214 162 173 / 70%);
  border: 5px solid rgb(214 162 173 / 100%);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
  /* Add styles here */
}

.item2 {
  /* Add styles here */
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("grid2-start", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist möglich, Elemente zu schichten, indem sie dieselben Rasterzellen belegen.
Eine Option ist die Verwendung der untenstehenden Kurzschreibweisen, jedoch wäre es auch korrekt, das Langkommando `grid-row-start` zu verwenden.

```css live-sample___grid2-finish
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

Für die Bonusfrage: Eine Möglichkeit, dies zu erreichen, besteht darin, `order` zu verwenden, das wir im Flexbox-Tutorial behandelt haben.

```css
.item1 {
  order: 1;
}
```

Eine andere valide Lösung ist die Verwendung von `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kind-Elemente in diesem Raster. Der Ausgangspunkt ist, dass sie sich mittels automatischer Platzierung anzeigen.

Um die Aufgabe abzuschließen, verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente so anzuordnen, wie in der folgenden Darstellung gezeigt:

{{EmbedLiveSample("grid3-finish", "", "200px")}}

```html live-sample___grid3-start live-sample___grid3-finish
<div class="grid">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
```

```css live-sample___grid3-start live-sample___grid3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("grid3-start", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Teil des Layouts benötigt einen Namen mit der Eigenschaft `grid-area` und `grid-template-areas`, um sie anzuordnen. Mögliche Verwirrungspunkte könnten sein, dass man nicht bemerkt, dass man einen `.` setzen muss, um eine Zelle leer zu lassen, oder dass man den Namen wiederholen muss, um ein Element über mehr als eine Spur zu spannen:

```css live-sample___grid3-finish
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "aa aa"
    "bb cc"
    ". dd";
}

.one {
  grid-area: aa;
}

.two {
  grid-area: bb;
}

.three {
  grid-area: cc;
}

.four {
  grid-area: dd;
}
```

</details>

## Aufgabe 4

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das unten gezeigte fertige Beispiel nachzubilden. Der Abstand zwischen den Spalten- und Reihen-Spuren sollte 10px betragen. Sie müssen keine Änderungen am HTML vornehmen, um dies zu erreichen.

{{EmbedLiveSample("grid4-finish", "", "400px")}}

```html live-sample___grid4-start live-sample___grid4-finish
<div class="container">
  <div class="card">
    <img
      alt="a single red balloon"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>red</li>
      <li>sky</li>
      <li>blue</li>
      <li>Hot air balloon</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="balloons over some houses"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>houses</li>
      <li>train</li>
      <li>harborside</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="close-up of balloons inflating"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>inflating</li>
      <li>green</li>
      <li>blue</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="a balloon in the sun"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>sun</li>
      <li>sky</li>
      <li>summer</li>
      <li>bright</li>
    </ul>
  </div>
</div>
```

```css live-sample___grid4-start live-sample___grid4-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.card {
  display: grid;
  grid-template-rows: 200px min-content;
}

.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags > * {
  background-color: #999999;
  color: white;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}

.container {
  /* Add styles here */
}

.tags {
  /* Add styles here */
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("grid4-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Container muss ein Raster-Layout sein, da wir eine Ausrichtung in Reihen und Spalten haben - zweidimensional.
Das `<ul>` muss ein Flex-Container sein, da die Tags (`<li>` Elemente) nicht in Spalten, sondern nur in Reihen angeordnet sind und sie zentriert im Raum mit der Ausrichtungseigenschaft `justify-content` auf `center` gesetzt sind.

Es kann versucht werden, Flexbox auf dem Container zu verwenden und die Karten mit Prozentwerten zu beschränken. Es kann auch versucht werden, die Elemente in ein Raster-Layout zu verwandeln, wobei zu beachten ist, dass die Elemente in zwei Dimensionen nicht ausgerichtet sind, sodass Flexbox nicht die beste Wahl ist.

```css live-sample___grid4-finish
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}
