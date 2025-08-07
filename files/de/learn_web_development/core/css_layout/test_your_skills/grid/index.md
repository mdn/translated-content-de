---
title: "Testen Sie Ihre Fähigkeiten: Grid"
short-title: Grid
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Ziel dieses Fähigkeitstests ist es, Ihnen dabei zu helfen, zu beurteilen, ob Sie verstehen, wie [ein Grid und Gitterelemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) sich verhalten. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials, das Sie gerade behandelt haben, verwenden.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie ein Grid erstellen, in das die vier Kindelemente automatisch platziert werden. Das Grid soll drei Spalten haben, die den verfügbaren Platz gleichmäßig aufteilen, und einen Abstand von 20 Pixeln zwischen den Spalten- und Zeilenbahnen aufweisen. Danach versuchen Sie, weitere Kindcontainer innerhalb des Elterncontainers mit der Klasse `grid` hinzuzufügen und beobachten, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein dreispaltiges Grid mit vier darin platzierten Elementen.](grid-task1.png)

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

Erstellen Sie ein Grid mit `display: grid` mit drei Spalten unter Verwendung von `grid-template-columns` und einem `gap` zwischen den Elementen:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein definiertes Grid. Wir möchten, dass Sie die CSS-Regeln für die zwei Kindelemente bearbeiten, sodass sie über mehrere Gitterschienen verlaufen. Das zweite Element sollte das erste überlagern, wie im Bild unten:

![Ein Kasten mit zwei Elementen, wobei eines über das andere überlagert.](grid-task2.png)

**Zusatzfrage:** Können Sie nun das erste Element oben anzeigen lassen, ohne die Reihenfolge der Elemente im Quelltext zu ändern?

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

Es ist möglich, Elemente übereinander zu legen, indem sie dieselben Gitterzellen belegen.
Eine Möglichkeit besteht darin, die folgenden Kurzformen zu verwenden, wobei es jedoch korrekt wäre, die Langform wie `grid-row-start` zu verwenden.

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

Für die Zusatzfrage wäre eine Möglichkeit, dies zu erreichen, die Nutzung von `order`, mit dem wir uns im Flexbox-Tutorial beschäftigt haben.

```css
.item1 {
  order: 1;
}
```

Eine weitere gültige Lösung ist die Nutzung von `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt lässt sie unter Verwendung der automatischen Platzierung anzeigen.

Um die Aufgabe abzuschließen, verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente wie im Bild unten gezeigt anzuordnen:

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

Jeder Teil des Layouts benötigt einen Namen mit der Eigenschaft `grid-area` und `grid-template-areas`, um sie anzuordnen. Mögliche Verwirrungspunkte könnten sein, nicht zu erkennen, dass man einen `.` platzieren sollte, um eine Zelle leer zu lassen, oder dass man den Namen wiederholen muss, um ein Element über mehr als eine Bahn zu spannen:

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

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie im Bild unten zu erstellen. Der Abstand zwischen den Spalten- und Zeilenbahnen sollte 10px betragen. Es sind keine Änderungen am HTML erforderlich, um dies zu erreichen.

![Zwei Reihen von Karten, jeweils mit einem Bild und einer Reihe von Tags.](grid-task4.png)

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
  background-color: #999;
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

Der Container muss ein Grid-Layout sein, da wir sowohl in den Reihen als auch in den Spalten Ausrichtung haben - zweidimensional.
Das `<ul>` muss ein Flex-Container sein, da die Tags (`<li>`-Elemente) nicht in Spalten, sondern nur in Reihen ausgerichtet sind und sie im Raum mit der Ausrichtungseigenschaft `justify-content` auf `center` zentriert sind.

Sie können versuchen, Flexbox auf den Container anzuwenden und die Karten mit Prozentwerten zu beschränken. Sie können auch versuchen, die Elemente in ein Grid-Layout zu formen, in welchem Fall Sie beachten sollten, dass die Elemente nicht in zwei Dimensionen ausgerichtet sind, daher ist Flexbox nicht die beste Wahl.

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
