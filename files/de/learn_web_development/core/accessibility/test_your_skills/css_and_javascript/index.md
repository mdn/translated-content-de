---
title: "Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit"
short-title: "Test: CSS/JS a11y"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

Das Ziel dieses Fähigkeitstests besteht darin, Ihnen zu helfen einzuschätzen, ob Sie den Artikel über unsere [CSS- und JavaScript-Barrierefreiheit Best Practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## CSS Barrierefreiheit 1

Im ersten Aufgabenbereich wird Ihnen eine Liste von Links präsentiert. Allerdings ist deren Barrierefreiheit ziemlich schlecht — es gibt keine Möglichkeit, wirklich zu erkennen, dass es sich um Links handelt oder auf welchen der Nutzer gerade fokussiert ist. Wir möchten, dass Sie davon ausgehen, dass das bestehende Regelset mit dem `a`-Selektor von einem CMS bereitgestellt wird und Sie es nicht ändern können.

Um die Aufgabe abzuschließen, erstellen Sie neue Regeln, um die Links wie Links aussehen und verhalten zu lassen, und damit der Nutzer erkennen kann, auf welchen Link er sich in der Liste fokussiert.

<!-- Code shared across examples -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___css-js-ally-1
<ul>
  <li><a href="">Animals</a></li>
  <li><a href="">Computers</a></li>
  <li><a href="">Diversity and inclusion</a></li>
  <li><a href="">Food</a></li>
  <li><a href="">Medicine</a></li>
  <li><a href="">Music</a></li>
</ul>
```

```css live-sample___css-js-ally-1
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

/* Don't edit the above code! */

/* Add your code here */
```

{{ EmbedLiveSample("css-js-ally-1", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte so aussehen:

```css
/* ... */
/* Don't edit the above code! */

li a {
  text-decoration: underline;
  color: rgb(150 0 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: red;
}
```

</details>

## CSS Barrierefreiheit 2

In dieser nächsten Aufgabe wird Ihnen ein einfacher Inhalt präsentiert — nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und Größen des Textes, und wir möchten, dass Sie diese beheben.

Um die Aufgabe zu erfüllen:

1. Überlegen Sie, was die Probleme sind und welche Richtlinien die akzeptablen Werte für Farbe und Größe festlegen.
2. Aktualisieren Sie das CSS mit neuen Werten für die Farben und die Schriftgröße, um das Problem zu beheben.
3. Testen Sie den Code, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären Sie, welche Tools oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

<!-- spellchecker: disable -->

```html live-sample___css-js-ally-2
<main>
  <h1>I am the eggman</h1>

  <p>
    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
    Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm
    hempen halter furl.
  </p>

  <h2>They are the eggman</h2>

  <p>
    Swab barque interloper chantey doubloon starboard grog black jack gangway
    rutters.
  </p>

  <h2>I am the walrus</h2>

  <p>
    Deadlights jack lad schooner scallywag dance the hempen jig carouser
    broadside cable strike colors.
  </p>
</main>
```

<!-- spellchecker: enable -->

```css live-sample___css-js-ally-2
/* Edit the CSS to fix the a11y problems */

main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: #999999;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1.5vw;
}

p {
  font-size: 1.2vw;
}
```

{{ EmbedLiveSample("css-js-ally-2", "100%", 240) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

1. Die Probleme sind:
   - Der Farbkontrast ist nicht akzeptabel, gemäß WCAG-Kriterien [1.4.3 (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) und [1.4.6 (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced).
   - Der Text ist mit `vw` Einheiten dimensioniert, was bedeutet, dass er in den meisten Browsern nicht zoombar ist. [WCAG 1.4.4 (AA)](https://w3c.github.io/wcag/guidelines/22/#resize-text) gibt an, dass der Text skalierbar sein sollte.
2. Um den Code zu fixieren, müssen Sie
   - Eine bessere Kombination aus Hintergrund- und Vordergrundfarben mit höherem Kontrast wählen.
   - Andere Einheiten zur Dimensionierung des Textes verwenden (wie `rem` oder auch `px`), oder sogar etwas implementieren, das eine Kombination aus `vw` und anderen Einheiten verwendet, wenn Sie möchten, dass es skalierbar, aber dennoch relativ zur Viewportgröße ist.
3. Zum Testen:
   - Sie können den Farbkontrast mit einem Tool wie [aXe](https://www.deque.com/axe/), dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) oder sogar einem einfachen eigenständigen Webseiten-Tool wie dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) testen.
   - Für das Text-Resizing müssten Sie das Beispiel in einem Browser laden und versuchen, es zu skalieren. Das Resizing von Text mit `vw` Einheiten funktioniert in Safari, aber nicht in Firefox oder auf Chromium-basierten Browsern.

Für den aktualisierten Code würde etwas wie das Folgende den Farbkontrast beheben:

```css
main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: black;
}
```

Und so etwas würde für die Schriftgrößen funktionieren:

```css
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}
```

Oder dies, wenn Sie etwas Cleveres machen möchten, das Ihnen skalierbaren viewportrelativen Text bietet:

```css
h1 {
  font-size: calc(1.5vw + 1rem);
}

h2 {
  font-size: calc(1.2vw + 0.7rem);
}

p {
  font-size: calc(1vw + 0.4rem);
}
```

</details>

## JavaScript Barrierefreiheit 1

In unserer letzten Barrierefreiheitsaufgabe haben Sie einige JavaScript-Aufgaben zu erledigen. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Durch Klicken auf einen der Tiernamen wird eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste angezeigt.

Aber sie ist nicht sehr zugänglich — im aktuellen Zustand können Sie es nur mit der Maus bedienen. Wir möchten, dass Sie etwas HTML und JavaScript hinzufügen, um es auch per Tastatur zugänglich zu machen.

```html live-sample___css-js-ally-3
<section class="preview">
  <div class="animal-list">
    <h1>Animal summaries</h1>

    <p>
      The following list of animals can be clicked to display a description of
      that animal.
    </p>

    <ul>
      <li
        data-description="A type of wild mountain goat, with large recurved horns, found in Eurasia, North Africa, and East Africa.">
        Ibex
      </li>
      <li
        data-description="A medium-sized marine mammal, similar to a manatee, but with a Dolphin-like tail.">
        Dugong
      </li>
      <li
        data-description="A rare marsupial, which looks rather like a tiny kangaroo, measuring around 50 to 75 centimeters.">
        Quokka
      </li>
    </ul>
  </div>

  <div class="animal-description">
    <h2></h2>

    <p></p>
  </div>
</section>
```

```css hidden live-sample___css-js-ally-3
p {
  color: purple;
  margin: 0.5em 0;
}

li {
  cursor: pointer;
}
```

```js live-sample___css-js-ally-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

{{ EmbedLiveSample("css-js-ally-3", "100%", 400) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

1. Zunächst müssen Sie `tabindex="0"` zu den Listenelementen hinzufügen, um sie über die Tastatur fokussierbar zu machen.
2. Dann müssen Sie einen weiteren Event Listener innerhalb der `forEach()` Schleife hinzufügen, um den Code auf das Drücken von Tasten zu reagieren, während die Listenelemente ausgewählt sind. Es ist wahrscheinlich eine gute Idee, es auf eine bestimmte Taste reagieren zu lassen, wie zum Beispiel "Enter", in welchem Fall etwas wie das Folgende wahrscheinlich akzeptabel ist:

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
