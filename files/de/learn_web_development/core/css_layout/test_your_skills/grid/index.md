---
title: "Testen Sie Ihre Fähigkeiten: CSS-Grids"
short-title: "Test: CSS-Grid"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 143f7345a4276156679d816a153470fe1fc6f3f8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie verstehen, wie ein [Grid und Grid-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) funktionieren. Sie werden mehrere kleine Aufgaben bearbeiten, die verschiedene Elemente des gerade behandelten Materials nutzen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## CSS-Grids 1

In dieser Aufgabe möchten wir, dass Sie ein Grid erstellen, in das die vier Kind-Elemente automatisch platziert werden. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, mit einem `20px` Abstand zwischen Spalten- und Zeilenspuren. Danach versuchen Sie, weitere Kind-Elemente im übergeordneten Container mit der `grid`-Klasse hinzuzufügen und beobachten, wie sie sich standardmäßig verhalten.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid1-start", "", "220px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das fertige Layout sollte so aussehen:

{{EmbedLiveSample("grid1-finish", "", "160px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu anzeigen</summary>

Erstellen Sie ein Grid mit `display: grid` und drei Spalten mit `grid-template-columns` sowie einem `gap` zwischen den Elementen:

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## CSS-Grids 2

In dieser Aufgabe haben wir bereits ein definiertes Grid. Wir möchten, dass Sie die CSS-Regeln für die beiden Kind-Elemente so bearbeiten, dass jedes von ihnen mehrere Grid-Spuren überspannt. Das zweite Element sollte das erste überlagern.

**Bonusfrage:** Können Sie nun das erste Element oben anzeigen, ohne die Reihenfolge der Elemente im Quellcode zu ändern?

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid2-start", "", "340px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das Layout sollte so aussehen, nachdem Sie die Aufgabe abgeschlossen haben:

{{EmbedLiveSample("grid2-finish", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Es ist möglich, Elemente zu überlagern, indem sie dieselben Grid-Zellen belegen. Eine Option ist die Verwendung der untenstehenden Kurzform, es wäre jedoch korrekt, die Langform wie `grid-row-start` zu nutzen.

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

Für die Bonusfrage ist eine Möglichkeit, dies zu erreichen, die Verwendung von `order`, welcher wir im Tutorial zu Flexbox begegnet sind.

```css live-sample___grid2-finish
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

## CSS-Grids 3

In dieser Aufgabe enthält das Grid vier direkte Kinder. Sie werden derzeit automatisch im Grid platziert.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid3-start", "", "200px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Um diese Aufgabe zu vervollständigen, nutzen Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente so zu layouten, wie hier gezeigt:

{{EmbedLiveSample("grid3-finish", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Teil des Layouts braucht einen Namen, indem man die Eigenschaft `grid-area` und `grid-template-areas` nutzt. Mögliche Verwirrung könnte entstehen, wenn man vergisst, dass man ein `.` setzen sollte, um eine Zelle leer zu lassen, oder dass man den Namen wiederholen sollte, um ein Element über mehr als eine Spur zu spannen:

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

## CSS-Grids 4

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das fertige Layout neu zu erstellen. Der Abstand zwischen den Spalten- und Zeilenspuren sollte `10px` betragen. Sie müssen keine Änderungen an der HTML vornehmen, um dies zu erreichen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid4-start", "", "400px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das Layout sollte so aussehen, nachdem Sie die Aufgabe abgeschlossen haben:

{{EmbedLiveSample("grid4-finish", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Der Container muss ein Grid-Layout sein, da wir Ausrichtungen in Reihen und Spalten haben - zweidimensional. Die `<ul>` muss ein Flex-Container sein, da die Tags (`<li>`-Elemente) nicht in Spalten, sondern nur in Reihen ausgerichtet sind und sie mit der Eigenschaften `justify-content` auf `center` in den Raum zentriert werden.

Sie können versuchen, Flexbox auf den Container anzuwenden und die Karten mit Prozentwerten einzuschränken. Sie können auch versuchen, die Elemente in ein Grid-Layout zu verwandeln. Beachten Sie in diesem Fall, dass die Elemente nicht in zwei Dimensionen ausgerichtet sind, daher ist Flexbox nicht die beste Wahl.

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
