---
title: "Testen Sie Ihre Fähigkeiten: Grid"
slug: Learn_web_development/Core/CSS_layout/Grid_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie [Grid und Grid-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Grids) funktionieren. Sie werden mehrere kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den unten stehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Falls Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe sollten Sie ein Grid erstellen, in das die vier Kindelemente automatisch platziert werden. Das Grid sollte drei Spalten haben, die den verfügbaren Platz gleichmäßig teilen, und einen Abstand von 20 Pixeln zwischen den Spalten- und Reihenbahnen. Versuchen Sie anschließend, mehr Kindcontainer innerhalb des Elterncontainers mit der Klasse `grid` hinzuzufügen und beobachten Sie, wie sie sich standardmäßig verhalten.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Ein dreispaltiges Grid mit vier darin platzierten Elementen.](grid-task1.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___grid1
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css hidden live-sample___grid1
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid1
.grid {
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

In dieser Aufgabe haben wir bereits ein Grid definiert. Indem Sie die CSS-Regeln für die beiden Kindelemente bearbeiten, sollen Sie dafür sorgen, dass sie über mehrere Grid-Bahnen jeweils gespannt werden. Das zweite Element sollte das erste überlagern, wie im unten stehenden Bild gezeigt:

![Ein Kasten mit zwei Elementen, von denen eines das andere überlagert.](grid-task2.png)

**Zusatzfrage:** Können Sie nun dafür sorgen, dass das erste Element oben angezeigt wird, ohne die Reihenfolge der Elemente in der Quelle zu ändern?

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___grid2
<div class="grid">
  <div class="item1">One</div>
  <div class="item2">Two</div>
</div>
```

```css hidden live-sample___grid2
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: #fff;
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
```

```css live-sample___grid2
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
}

.item2 {
}
```

{{EmbedLiveSample("grid2", "", "340px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist möglich, Elemente zu schichten, indem sie dieselben Grid-Zellen besetzen.
Eine Möglichkeit besteht darin, die folgenden Kurzformen zu verwenden, allerdings wäre es korrekt, die Langform `grid-row-start` zu verwenden.

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

Für die Zusatzfrage wäre eine Möglichkeit, dies zu erreichen, das Verwenden von `order`, das wir im Flexbox-Tutorial behandelt haben.

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

In dieser Aufgabe gibt es vier direkte Kinder in diesem Grid. Der Ausgangspunkt ist, dass sie mithilfe der automatischen Platzierung dargestellt werden. Verwenden Sie die Eigenschaften `grid-area` und `grid-template-areas`, um die Elemente so anzuordnen, wie im unten stehenden Bild gezeigt:

![Vier in einem Grid angezeigte Elemente.](grid-task3.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___grid3
<div class="grid">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
```

```css hidden live-sample___grid3
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid3
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

{{EmbedLiveSample("grid3", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Jeder Teil des Layouts benötigt einen Namen, indem die Eigenschaft `grid-area` und `grid-template-areas` verwendet werden, um sie zu layouten. Mögliche Verwirrung könnte entstehen, wenn Sie nicht realisieren, dass Sie einen `.` platzieren sollten, um eine Zelle leer zu lassen, oder dass Sie den Namen wiederholen sollten, um ein Element über mehr als eine Bahn zu spannen:

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

In dieser Aufgabe müssen Sie sowohl das Grid-Layout als auch Flexbox verwenden, um das Beispiel wie auf dem unten stehenden Bild zu sehen, nachzubilden. Der Abstand zwischen den Spalten- und Reihenbahnen sollte 10px betragen. Sie müssen keine Änderungen am HTML vornehmen, um dies zu erreichen.

![Zwei Reihen von Karten, jede mit einem Bild und einer Reihe von Tags.](grid-task4.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

```css hidden live-sample___grid4
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
  color: #fff;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}
```

```css live-sample___grid4
.container {
}

.tags {
}
```

{{EmbedLiveSample("grid4", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Container muss ein Grid-Layout sein, da wir Ausrichtungen in Reihen und Spalten haben - zweidimensional.
Das `<ul>` muss ein Flex-Container sein, da Tags (`<li>` Elemente) nicht in Spalten ausgerichtet sind, sondern nur in Reihen und sie werden mit der Eigenschaft `justify-content` auf `center` im Raum zentriert.

Sie können versuchen, das Flexbox am Container zu verwenden und die Karten mit Prozentwerten einzuschränken. Sie können auch versuchen, die Elemente in ein Grid-Layout zu verwandeln, in diesem Fall beachten Sie, dass die Elemente nicht in zwei Dimensionen ausgerichtet sind, also ist Flexbox nicht die beste Wahl.

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

## Siehe auch

- [CSS Stilierungsgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
