---
title: "Testen Sie Ihre Fähigkeiten: Flexbox"
slug: Learn_web_development/Core/CSS_layout/Flexbox_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Das Ziel dieses Fertigkeitstests ist zu bewerten, ob Sie verstehen, wie sich [flexbox and flex items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) verhalten. Unten finden Sie vier häufige Designmuster, die Sie möglicherweise mit Flexbox erstellen möchten. Ihre Aufgabe ist es, diese zu erstellen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Sollten Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sind die Listenelemente die Navigation für eine Website. Sie sollten als Reihe angeordnet werden, mit einem gleichen Abstand zwischen jedem Element.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Flex-Elemente, die als Reihe mit Abstand zwischen ihnen angeordnet sind.](flex-task1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___flexbox1
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

```css hidden live-sample___flexbox1
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 700px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}
```

```css live-sample___flexbox1
nav ul {
}
```

{{EmbedLiveSample("flexbox1", "", "240px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `display: flex` anwenden und den Abstand mit der Eigenschaft `justify-content` steuern:

```css
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben die Listenelemente alle unterschiedliche Größen, aber wir wollen, dass sie als drei gleich große Spalten angezeigt werden, unabhängig vom Inhalt in jedem Element.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Flex-Elemente, die als drei gleich große Spalten mit unterschiedlichen Inhalten angezeigt werden.](flex-task2.png)

**Bonusfrage:** Können Sie nun das erste Element doppelt so groß wie die anderen machen?

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___flexbox2
<ul>
  <li>I am small</li>
  <li>I have more content than the very small item.</li>
  <li>
    I have lots of content. So much content that I don't know where it is all
    going to go. I'm glad that CSS is pretty good at dealing with situations
    where we end up with more words than expected!
  </li>
</ul>
```

```css hidden live-sample___flexbox2
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 700px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___flexbox2
ul {
}

li {
}
```

{{EmbedLiveSample("flexbox2", "", "240px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist am besten, Kurzschreibweisen zu verwenden, daher ist in diesem Szenario `flex: 1` wahrscheinlich die beste Antwort, und das optimalste Ergebnis wäre:

```css
ul {
  display: flex;
}

li {
  flex: 1;
}
```

Für die Bonusfrage fügen Sie einen Selektor hinzu, der das erste Element anspricht und `flex: 2;` (oder `flex: 2 0 0;` oder `flex-grow: 2`) setzt:

```css
li:first-child {
  flex: 2;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es zwei Elemente im untenstehenden HTML, ein `<div>`-Element mit einer Klasse von `parent`, das ein weiteres `<div>`-Element mit einer Klasse von `child` enthält. Verwenden Sie Flexbox, um das Kind innerhalb des Elternteils zu zentrieren. Hier gibt es mehr als eine mögliche Lösung.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Ein Kasten, der in einem anderen Kasten zentriert ist.](flex-task3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___flexbox3
<div class="parent">
  <div class="child">Center me.</div>
</div>
```

```css hidden live-sample___flexbox3
body {
  font: 1.2em / 1.5 sans-serif;
}
.parent {
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  height: 200px;
}

.child {
  background-color: #4d7298;
  color: #fff;
  padding: 0.5em;
  width: 150px;
}
```

```css hidden live-sample___flexbox3
.parent {
}

.child {
}
```

{{EmbedLiveSample("flexbox3", "", "210px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist nur notwendig, die Elternstile zu ändern, um ein Element horizontal und vertikal zu zentrieren:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

</details>

## Aufgabe 4

In dieser Aufgabe möchten wir, dass Sie diese Elemente als Reihen anordnen, wie im folgenden Bild dargestellt:

![Eine Gruppe von Elementen, die als Reihen angezeigt werden.](flex-task4.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___flexbox4
<ul>
  <li>Turnip</li>
  <li>greens</li>
  <li>yarrow</li>
  <li>ricebean</li>
  <li>rutabaga</li>
  <li>endive</li>
  <li>cauliflower</li>
  <li>sea lettuce</li>
  <li>kohlrabi</li>
  <li>amaranth</li>
</ul>
```

```css hidden live-sample___flexbox4
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  width: 450px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
  margin: 0.5em;
}
```

```css live-sample___flexbox4
ul {
}

li {
}
```

{{EmbedLiveSample("flexbox4", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert ein Verständnis der `flex-wrap`-Eigenschaft, um Flex-Linien zu umbrechen. Zusätzlich müssen Sie, um sicherzustellen, dass Sie etwas erhalten, das wie das Beispiel aussieht, `flex: auto` auf das Kind setzen (oder `flex: 1 1 auto;`).

```css
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
