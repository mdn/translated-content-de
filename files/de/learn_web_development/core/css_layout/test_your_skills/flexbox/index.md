---
title: "Testen Sie Ihre Fähigkeiten: Flexbox"
short-title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fertigkeitstests besteht darin, zu bewerten, ob Sie verstehen, wie sich [flexbox und Flexelemente](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) verhalten. Unten sind vier gängige Designmuster aufgeführt, die Sie mit Flexbox erstellen könnten. Ihre Aufgabe ist es, sie zu bauen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe sind die Listenelemente die Navigation für eine Website. Diese sollten als Reihe angeordnet werden, mit einem gleichmäßigen Abstand zwischen jedem Element.

Ihr endgültiges Ergebnis sollte wie das folgende Bild aussehen:

![Flexelemente als Reihe mit Abstand dazwischen angeordnet.](flex-task1.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie können `display: flex` anwenden und den Abstand mit der `justify-content`-Eigenschaft steuern:

```css
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe sind die Listenelemente alle unterschiedlich groß, aber wir möchten, dass sie als drei gleich große Spalten angezeigt werden, unabhängig davon, welcher Inhalt in jedem Element ist.

Ihr endgültiges Ergebnis sollte wie das folgende Bild aussehen:

![Flexelemente als drei gleich große Spalten mit unterschiedlichem Inhalt angeordnet.](flex-task2.png)

**Bonusfrage:** Können Sie jetzt das erste Element doppelt so groß wie die anderen machen?

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es ist am besten, Kurzschreibweisen zu verwenden. In diesem Szenario ist `flex: 1` wahrscheinlich die beste Antwort und das optimalste Ergebnis wäre:

```css
ul {
  display: flex;
}

li {
  flex: 1;
}
```

Für die Bonusfrage, fügen Sie einen Selektor hinzu, der das erste Element anspricht und `flex: 2;` (oder `flex: 2 0 0;` oder `flex-grow: 2`) setzt:

```css
li:first-child {
  flex: 2;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe gibt es zwei Elemente im folgenden HTML: ein `<div>`-Element mit einer Klasse `parent`, das ein weiteres `<div>`-Element mit einer Klasse `child` enthält. Verwenden Sie Flexbox, um das Kind innerhalb des Elternteils zu zentrieren. Es gibt mehr als eine mögliche Lösung.

Ihr endgültiges Ergebnis sollte wie das folgende Bild aussehen:

![Eine Box zentriert innerhalb einer anderen Box.](flex-task3.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es ist nur notwendig, die Stile des Elternteils zu ändern, um ein Element horizontal und vertikal zu zentrieren:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

</details>

## Aufgabe 4

In dieser Aufgabe möchten wir, dass Sie diese Elemente in Reihen anordnen, wie im folgenden Bild gezeigt:

![Eine Reihe von Elementen, die als Reihen angezeigt werden.](flex-task4.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Diese Aufgabe erfordert ein Verständnis der `flex-wrap`-Eigenschaft, um Flexzeilen zu umbrechen. Zusätzlich müssen Sie sicherstellen, dass Sie etwas erhalten, das wie das Beispiel aussieht, indem Sie `flex: auto` auf das Kind setzen (oder `flex: 1 1 auto;`).

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

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
