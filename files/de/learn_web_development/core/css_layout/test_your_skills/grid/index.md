---
title: "Testen Sie Ihre Fähigkeiten: CSS-Grids"
short-title: "Test: CSS-Grid"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Grid
l10n:
  sourceCommit: 927616b242c2110394495ee32f2e1a64df34052e
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout")}}

Mit diesem Test können Sie überprüfen, ob Sie verstehen, wie sich ein [Grid und seine Grid-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verhalten. Dazu bearbeiten Sie mehrere kleine Aufgaben, die verschiedene Aspekte des gerade behandelten Materials aufgreifen.

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren [Leitfaden zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## CSS-Grids 1

In dieser Aufgabe sollen Sie ein Grid erstellen, in dem vier Kindelemente automatisch platziert werden. Das Grid soll drei Spalten haben, die sich den verfügbaren Platz gleichmäßig teilen. Der Abstand zwischen den Spalten und Zeilen soll `20px` betragen. Fügen Sie anschließend weitere Kindelemente zum übergeordneten Container mit der Klasse `grid` hinzu und beobachten Sie, wie sie sich standardmäßig verhalten.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid1-start", "", "220px")}}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Erstellen Sie mit `display: grid` ein Grid mit drei Spalten, die Sie mit `grid-template-columns` definieren, und einem `gap` zwischen den Elementen:

```css live-sample___grid1-finish
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## CSS-Grids 2

In dieser Aufgabe ist bereits ein Grid definiert. Bearbeiten Sie die CSS-Regeln für die beiden Kindelemente so, dass sich jedes über mehrere Grid-Tracks erstreckt. Das zweite Element soll das erste überlagern.

**Zusatzfrage:** Können Sie nun dafür sorgen, dass das erste Element im Vordergrund angezeigt wird, ohne die Reihenfolge der Elemente im Quellcode zu ändern?

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid2-start", "", "340px")}}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Nach Abschluss der Aufgabe sollte das Layout so aussehen:

{{EmbedLiveSample("grid2-finish", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Mehrere Elemente können dieselben Grid-Zellen belegen und übereinanderliegen.
Eine Möglichkeit besteht darin, die folgenden Kurzschreibweisen zu verwenden. Sie könnten aber beispielsweise auch die Einzeleigenschaft `grid-row-start` verwenden.

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

Eine Möglichkeit, die Zusatzfrage zu lösen, bietet die Eigenschaft `order`, die Sie bereits im Flexbox-Tutorial kennengelernt haben.

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

In dieser Aufgabe enthält das Grid vier direkte Kindelemente. Sie werden derzeit automatisch im Grid platziert.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid3-start", "", "200px")}}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente wie hier gezeigt anzuordnen:

{{EmbedLiveSample("grid3-finish", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Bereich des Layouts benötigt einen Namen, der mit der Eigenschaft `grid-area` festgelegt wird. Mit `grid-template-areas` ordnen Sie die Bereiche an. Beachten Sie dabei, dass Sie mit einem `.` eine Zelle leer lassen und einen Namen wiederholen müssen, damit sich ein Element über mehr als einen Track erstreckt:

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

In dieser Aufgabe müssen Sie sowohl Grid-Layout als auch Flexbox verwenden, um das fertige Layout nachzubilden. Der Abstand zwischen den Spalten und Zeilen soll `10px` betragen. Dafür müssen Sie das HTML nicht ändern.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("grid4-start", "", "400px")}}

Dies ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Nach Abschluss der Aufgabe sollte das Layout so aussehen:

{{EmbedLiveSample("grid4-finish", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Container benötigt ein Grid-Layout, da die Karten in zwei Dimensionen ausgerichtet sind – in Zeilen und Spalten.
Das `<ul>` muss ein Flex-Container sein, da die Tags (`<li>`-Elemente) nur in einer Dimension – in Zeilen – angeordnet und innerhalb des verfügbaren Platzes zentriert werden. Dazu wird die Ausrichtungseigenschaft `justify-content` auf `center` gesetzt.

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
