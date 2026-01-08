---
title: "Testen Sie Ihr Können: Flexbox"
short-title: "Test: Flexbox"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 089e7f607294ebf59c8c1306ac2cad2f96209b07
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu beurteilen, ob Sie verstehen, wie [Flexbox und Flex-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) funktionieren. Unten finden Sie vier Sätze von Design-Problemen, die Sie mit Flexbox lösen können. Ihre Aufgabe ist es, die Probleme zu beheben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Flexbox-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) erstellt wurde.

Schauen Sie sich das eingebettete Skript an und erledigen Sie alle Aufgaben auf der Zeitleiste (die kleinen Geister-Symbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Video weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox-Ausrichtungsherausforderungen" survey="true"></mdn-scrim-inline>

## Aufgabe 1

In dieser Aufgabe verwenden wir einige Listenelemente, um die Navigation für eine Website zu erstellen. Um die Aufgabe abzuschließen, verwenden Sie Flexbox, um die Listenelemente als Reihe anzuordnen und einen gleichmäßigen Abstand zwischen jedem Element zu haben.

Ihr Endergebnis sollte wie diese fertige Darstellung aussehen:

{{EmbedLiveSample("flexbox1-finish", "", "100px")}}

```html live-sample___flexbox1-start live-sample___flexbox1-finish
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

```css live-sample___flexbox1-start live-sample___flexbox1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}

nav ul {
  /* Add styles here */
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("flexbox1-start", "", "240px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `display: flex` anwenden und den Abstand mit der Eigenschaft `justify-content` steuern:

```css live-sample___flexbox1-finish
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben die Listenelemente alle unterschiedliche Größen, aber wir möchten sie als drei gleich große Spalten anzeigen, unabhängig davon, welcher Inhalt in jedem Element vorhanden ist.

Ihr Endergebnis sollte wie die folgende fertige Darstellung aussehen:

{{EmbedLiveSample("flexbox2-finish", "", "300px")}}

**Bonusfrage:** Können Sie nun das erste Element doppelt so groß wie die anderen Elemente machen?

```html live-sample___flexbox2-start live-sample___flexbox2-finish
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

```css live-sample___flexbox2-start live-sample___flexbox2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

ul {
  /* Add styles here */
}

li {
  /* Add styles here */
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("flexbox2-start", "", "240px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist am besten, Kurzschreibweisen zu verwenden. In diesem Szenario ist `flex: 1` wahrscheinlich die beste Antwort, und das optimalste Ergebnis wäre:

```css live-sample___flexbox2-finish
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

In dieser Aufgabe möchten wir, dass Sie die Listenelemente in Reihen anordnen, wie in der fertigen Darstellung unten gezeigt:

{{EmbedLiveSample("flexbox3-finish", "", "260px")}}

```html live-sample___flexbox3-start live-sample___flexbox3-finish
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

```css live-sample___flexbox3-start live-sample___flexbox3-finish
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
  color: white;
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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("flexbox3-start", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert ein Verständnis der Eigenschaft `flex-wrap`, um Flex-Linien zu umbrechen. Zusätzlich müssen Sie, um sicherzustellen, dass Sie etwas erhalten, das wie im Beispiel aussieht, `flex: auto` auf das Kind (oder `flex: 1 1 auto;`) setzen.

```css live-sample___flexbox3-finish
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
