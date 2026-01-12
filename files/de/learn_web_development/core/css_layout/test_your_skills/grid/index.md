---
title: "Testen Sie Ihre Fähigkeiten: CSS-Grids"
short-title: "Test: CSS-Grid"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: bff9d5ae566c9a5a1eefa61be229c08d9cb1e6da
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie ein [Grid und Grid-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) funktionieren. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe sollen Sie ein Grid erstellen, in das die vier Kind-Elemente automatisch platziert werden. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen Abstand von 20 Pixeln zwischen den Spalten- und Reihen-Tracks. Anschließend versuchen Sie, mehr Kind-Container innerhalb des Eltern-Containers mit der Klasse `grid` hinzuzufügen und zu sehen, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie die folgende fertige Darstellung aussehen:

{{EmbedLiveSample("grid1-finish", "", "200px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("grid1-start", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Erstellen Sie ein Grid mit `display: grid` mit drei Spalten, indem Sie `grid-template-columns` und einen `gap` zwischen den Elementen verwenden:

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben wir bereits ein Grid definiert. Sie sollen die CSS-Regeln für die beiden Kind-Elemente bearbeiten und diese dazu bringen, sich über mehrere Grid-Tracks zu erstrecken. Das zweite Element sollte das erste überlagern, wie in der folgenden fertigen Darstellung gezeigt:

{{EmbedLiveSample("grid2-finish", "", "340px")}}

**Zusatzfrage:** Können Sie jetzt das erste Element oben anzeigen, ohne die Reihenfolge der Elemente im Quelltext zu ändern?

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("grid2-start", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist möglich, Elemente durch deren Platzierung über die gleichen Grid-Zellen zu schichten.
Eine Möglichkeit ist, die folgenden Kurzschreibweisen zu verwenden, jedoch wäre es korrekt, die Langschreibweise `grid-row-start` zum Beispiel zu verwenden.

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

Für die Zusatzfrage ist eine Möglichkeit, dies zu erreichen, die Verwendung von `order`, die wir im Flexbox-Tutorial kennengelernt haben.

```css
.item1 {
  order: 1;
}
```

Eine andere gültige Lösung ist die Verwendung von `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt zeigt sie unter Verwendung der automatischen Platzierung an.

Um die Aufgabe abzuschließen, verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente wie in der folgenden fertigen Darstellung anzuordnen:

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("grid3-start", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Teil des Layouts benötigt einen Namen unter Verwendung der Eigenschaft `grid-area` und `grid-template-areas`, um sie anzuordnen. Mögliche Verwirrungen könnten darin bestehen, nicht zu erkennen, dass Sie einen Punkt `.` platzieren sollten, um eine Zelle leer zu lassen, oder dass Sie den Namen wiederholen sollten, um ein Element über mehr als einen Track zu spannen:

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

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie in der fertigen Darstellung unten zu rekonstruieren. Der Abstand zwischen den Spalten- und Reihen-Tracks sollte 10px betragen. Sie müssen keine Änderungen am HTML vornehmen, um dies zu erreichen.

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("grid4-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Container muss ein Grid-Layout sein, da wir eine Ausrichtung in Zeilen und Spalten haben - zweidimensional.
Das `<ul>` muss ein Flex-Container sein, da die Tags (`<li>` Elemente) nicht in Spalten aneinander gereiht sind, sondern nur in Zeilen, und sie im Raum mit der Ausrichtungseigenschaft `justify-content` auf `center` zentriert sind.

Sie könnten versuchen, Flexbox auf den Container anzuwenden und die Karten mit Prozentwerten zu beschränken. Sie könnten auch versuchen, die Elemente in ein Grid-Layout zu lassen, in diesem Fall beachten Sie, dass die Elemente nicht in zwei Dimensionen ausgerichtet sind, sodass Flexbox nicht die beste Wahl ist.

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
