---
title: "Testen Sie Ihre Fähigkeiten: Grid"
short-title: Grid
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Das Ziel dieses Tests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie ein [Grid und Grid-Items](/de/docs/Learn_web_development/Core/CSS_layout/Grids) sich verhalten. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials nutzen, das Sie gerade behandelt haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie ein Grid erstellen, in das sich die vier Kindelemente automatisch platzieren. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen Abstand von 20 Pixel zwischen den Spalten- und Reihen-Tracks haben. Danach versuchen Sie, weitere Kindelementcontainer innerhalb des Elternelements mit der Klasse `grid` hinzuzufügen, und sehen Sie, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Ein Drei-Spalten-Grid mit vier Elementen darin.](grid-task1.png)

```html live-sample___grid1
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___grid1
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

{{EmbedLiveSample("grid1", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Erstellen Sie ein Grid mit `display: grid` mit drei Spalten, indem Sie `grid-template-columns` und einen `gap` zwischen den Elementen verwenden:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein Grid definiert. Wir möchten, dass Sie die CSS-Regeln für die beiden Kindelemente bearbeiten, sodass sie jeweils über mehrere Grid-Tracks gespannt werden. Das zweite Element sollte das erste überlagern, wie im Bild unten zu sehen:

![Eine Box mit zwei Elementen, von denen eins das andere überlagert.](grid-task2.png)

**Bonusfrage:** Können Sie nun das erste Element oben anzeigen lassen, ohne die Reihenfolge der Elemente im Quellcode zu ändern?

```html live-sample___grid2
<div class="grid">
  <div class="item1">One</div>
  <div class="item2">Two</div>
</div>
```

```css live-sample___grid2
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

{{EmbedLiveSample("grid2", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist möglich, Elemente übereinander zu legen, indem sie dieselben Grid-Zellen belegen.
Eine Option ist, die folgenden Shortcuts zu verwenden, es wäre jedoch korrekt, die Langform `grid-row-start` zu verwenden.

```css
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

Für die Bonusfrage wäre eine Möglichkeit, dies zu erreichen, die Verwendung von `order`, die wir im Flexbox-Tutorial behandelt haben.

```css
.item1 {
  order: 1;
}
```

Eine weitere gültige Lösung ist die Verwendung von `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt lässt sie mit automatischer Platzierung anzeigen.

Um die Aufgabe abzuschließen, verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente so anzuordnen, wie im folgenden Bild gezeigt:

![Vier Elemente, die in einem Grid angezeigt werden.](grid-task3.png)

```html live-sample___grid3
<div class="grid">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
```

```css live-sample___grid3
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

{{EmbedLiveSample("grid3", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Teil des Layouts benötigt einen Namen mit der Eigenschaft `grid-area` und `grid-template-areas`, um sie anzuordnen. Mögliche Punkte der Verwirrung wären, nicht zu erkennen, dass Sie ein `.` setzen sollten, um eine Zelle leer zu lassen, oder dass Sie den Namen wiederholen sollten, um ein Element über mehr als ein Track zu spannen:

```css
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

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie im folgenden Bild zu sehen nachzubilden. Der Abstand zwischen den Spalten- und Reihen-Tracks sollte 10px betragen. Es ist nicht nötig, Änderungen am HTML vorzunehmen, um dies zu erreichen.

![Zwei Reihen von Karten, jede mit einem Bild und einer Reihe von Tags.](grid-task4.png)

```html live-sample___grid4
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

```css live-sample___grid4
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

{{EmbedLiveSample("grid4", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Container muss ein Grid-Layout sein, da wir Ausrichtung in Reihen und Spalten haben - zweidimensional.
Das `<ul>` muss ein Flex-Container sein, da die Tags (`<li>` Elemente) nicht in Spalten, sondern nur in Reihen ausgerichtet sind und sie zentriert im Raum mit der Ausrichtungseigenschaft `justify-content` auf `center` gesetzt sind.

Sie können versuchen, Flexbox auf dem Container zu verwenden und die Karten mit Prozentwerten einzuschränken. Sie können auch versuchen, die Elemente in ein Grid-Layout umzuwandeln, wobei zu beachten ist, dass die Elemente nicht zweidimensional ausgerichtet sind, sodass Flexbox nicht die beste Wahl ist.

```css
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
