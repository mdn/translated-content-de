---
title: "Testen Sie Ihre Fähigkeiten: Flexbox"
short-title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 312c9980fc7a973cea1e16d4a6e9c33b430c8179
---

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie [Flexbox und Flex-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) funktionieren. Unten finden Sie vier Sätze von Designproblemen, die Sie mit Flexbox lösen können. Ihre Aufgabe ist es, die Probleme zu beheben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken in Aufgaben 1, 2 und 3, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Interaktive Herausforderung

Zunächst geben wir Ihnen eine unterhaltsame, interaktive Flexbox-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Sehen Sie sich das eingebettete Scrim an und erledigen Sie alle Aufgaben auf der Zeitleiste (die kleinen Geister-Symbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim wieder ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox-Ausrichtungsherausforderungen" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe sind die Listenelemente die Navigation für eine Website. Sie sollten als Reihe mit gleichem Abstand zwischen jedem Element angeordnet sein.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Flex-Elemente als Reihe mit Abstand zwischen ihnen angeordnet.](flex-task1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

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

In dieser Aufgabe sind die Listenelemente alle unterschiedlich groß, aber wir möchten, dass sie als drei gleich große Spalten angezeigt werden, unabhängig davon, welcher Inhalt in jedem Element enthalten ist.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Flex-Elemente als drei gleich große Spalten mit unterschiedlichem Inhalt angeordnet.](flex-task2.png)

**Bonusfrage:** Können Sie das erste Element jetzt doppelt so groß machen wie die anderen Elemente?

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

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

In dieser Aufgabe möchten wir, dass Sie diese Elemente in Reihen anordnen, wie im Bild unten gezeigt:

![Eine Gruppe von Elementen als Reihen angezeigt.](flex-task4.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

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

Diese Aufgabe erfordert ein Verständnis für die Eigenschaft `flex-wrap`, um Flex-Linien umzubrechen. Darüber hinaus müssen Sie, um sicherzustellen, dass Sie etwas erhalten, das wie das Beispiel aussieht, `flex: auto` auf das Kind setzen (oder `flex: 1 1 auto;`).

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
