---
title: "Testen Sie Ihre Fähigkeiten: Flexbox"
short-title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie verstehen, wie [flexbox und flex items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) funktionieren. Unten finden Sie vier Sätze von Designproblemen, die Sie mit Flexbox lösen können. Ihre Aufgabe ist es, die Probleme zu beheben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken in den Aufgaben 1, 2 und 3, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zuallererst bieten wir Ihnen eine unterhaltsame, interaktive Flexbox-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) erstellt wurde.

Schauen Sie sich das eingebettete Scrim an und erledigen Sie alle Aufgaben auf der Zeitleiste (die kleinen Geister-Symbole), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter anschauen, um zu sehen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox Ausrichtungsherausforderungen"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe sind die Listenelemente die Navigation für eine Website. Sie sollten als Reihe angeordnet sein, mit einem gleichen Abstand zwischen jedem Element.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Flex-Elemente als Reihe mit Abstand zwischen ihnen angeordnet.](flex-task1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

In dieser Aufgabe sind die Listenelemente alle unterschiedlich groß, aber wir möchten, dass sie als drei gleich große Spalten angezeigt werden, unabhängig davon, welcher Inhalt sich in jedem Element befindet.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Flex-Elemente als drei gleich große Spalten mit unterschiedlichem Inhalt.](flex-task2.png)

**Bonusfrage:** Können Sie nun das erste Element doppelt so groß machen wie die anderen Elemente?

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Für die Bonusfrage, fügen Sie einen Selektor hinzu, der das erste Element anspricht und `flex: 2;` (oder `flex: 2 0 0;` oder `flex-grow: 2`) setzt:

```css
li:first-child {
  flex: 2;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie diese Elemente in Reihen anordnen, wie auf dem Bild unten:

![Eine Reihe von Elementen, die als Reihen dargestellt werden.](flex-task4.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Diese Aufgabe erfordert ein Verständnis der Eigenschaft `flex-wrap`, um Flexzeilen zu umbrechen. Um sicherzustellen, dass Sie etwas erhalten, das wie das Beispiel aussieht, müssen Sie `flex: auto` auf das Kind setzen (oder `flex: 1 1 auto;`).

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

- [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
