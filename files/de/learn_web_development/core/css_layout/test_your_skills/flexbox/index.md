---
title: "Testen Sie Ihre Fähigkeiten: Flexbox"
short-title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie [flexbox und flex items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sich verhalten. Im Folgenden finden Sie vier Sätze von Designproblemen, die Sie mit Flexbox lösen können. Ihre Aufgabe besteht darin, die Probleme zu beheben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten]-Nutzungsleitfaden(/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Flexbox-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home) erstellt wurde.

Schauen Sie sich das eingebettete Scrim an und erledigen Sie alle Aufgaben auf der Timeline (die kleinen Geister-Symbole), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox alignment challenges" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe sind die Listenelemente die Navigation für eine Website. Um die Aufgabe abzuschließen, verwenden Sie Flexbox, um die Listenelemente als Reihe zu layouten, mit einem gleichen Abstand zwischen jedem Element.

Ihr finales Ergebnis sollte wie das Bild unten aussehen:

![Flex-Elemente als Reihe mit Abstand zwischen ihnen angeordnet.](flex-task1.png)

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

```css live-sample___flexbox1
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

nav ul {
  /* Add styles here */
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

In dieser Aufgabe haben die Listenelemente alle unterschiedliche Größen, aber wir wollen, dass sie als drei gleich große Spalten angezeigt werden, unabhängig davon, welcher Inhalt in jedem Element ist.

Ihr finales Ergebnis sollte wie das Bild unten aussehen:

![Flex-Elemente als drei gleich große Spalten mit unterschiedlichen Inhaltsmengen angeordnet.](flex-task2.png)

**Bonusfrage:** Können Sie nun das erste Element doppelt so groß wie die anderen Elemente machen?

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

```css live-sample___flexbox2
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

ul {
  /* Add styles here */
}

li {
  /* Add styles here */
}
```

{{EmbedLiveSample("flexbox2", "", "240px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist am besten, Kurzformen zu verwenden. In diesem Szenario ist `flex: 1` wahrscheinlich die beste Antwort, und das optimale Ergebnis wäre daher:

```css
ul {
  display: flex;
}

li {
  flex: 1;
}
```

Für die Bonusfrage fügen Sie einen Selektor hinzu, der das erste Element anvisiert und `flex: 2;` (oder `flex: 2 0 0;` oder `flex-grow: 2`) setzt:

```css
li:first-child {
  flex: 2;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie die Listenelemente in Reihen anordnen, wie im Bild unten gezeigt:

![Ein Satz von Elementen, in Reihen angezeigt.](flex-task4.png)

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

```css live-sample___flexbox4
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

ul {
  /* Add styles here */
}

li {
  /* Add styles here */
}
```

{{EmbedLiveSample("flexbox4", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert ein Verständnis der `flex-wrap`-Eigenschaft, um Flex-Linien zu umbrechen. Darüber hinaus müssen Sie, um sicherzustellen, dass Sie etwas erhalten, das wie das Beispiel aussieht, `flex: auto` auf das Kind setzen (oder `flex: 1 1 auto;`).

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
