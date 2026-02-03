---
title: "Testen Sie Ihr Wissen: CSS- und JavaScript-Barrierefreiheit"
short-title: "Test: CSS/JS a11y"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

Ziel dieses Tests ist es, Ihnen zu helfen einzuschätzen, ob Sie unseren Artikel über [beste Praktiken zur Barrierefreiheit mit CSS und JavaScript](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## CSS-Barrierefreiheit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Ihre Zugänglichkeit ist jedoch ziemlich schlecht — es gibt keine Möglichkeit wirklich zu erkennen, dass es sich um Links handelt, oder zu erkennen, auf welchen der Benutzer gerade fokussiert ist. Wir möchten, dass Sie annehmen, dass das bestehende Regelwerk mit dem `a`-Selektor von einem CMS bereitgestellt wird und Sie es nicht ändern können.

Um die Aufgabe abzuschließen, erstellen Sie neue Regeln, damit die Links wie Links aussehen und sich verhalten und der Benutzer erkennen kann, auf welchen Link er in der Liste fokussiert ist.

<!-- Code shared across examples -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3 live-sample___css-js-ally-1-finish live-sample___css-js-ally-2-finish
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

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("css-js-ally-1", "100%", 200) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___css-js-ally-1 live-sample___css-js-ally-1-finish
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

Wenn die Aufgabe abgeschlossen ist, sollten die Links etwa so aussehen:

{{ EmbedLiveSample("css-js-ally-1-finish", "100%", 200) }}

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

```css hidden live-sample___css-js-ally-1-finish
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

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

## CSS-Barrierefreiheit 2

In dieser nächsten Aufgabe wird Ihnen ein einfaches Stück Inhalt präsentiert — nur Überschriften und Absätze. Es gibt Zugänglichkeitsprobleme mit den Farben und der Größe des Textes, und wir möchten, dass Sie diese beheben.

Um die Aufgabe abzuschließen:

1. Überlegen Sie, was die Probleme sind, und welche Richtlinien die akzeptablen Werte für Farbe und Größe festlegen.
2. Aktualisieren Sie das CSS mit neuen Werten für die Farbe und Schriftgröße, um das Problem zu beheben.
3. Testen Sie den Code, um sicherzustellen, dass das Problem nun behoben ist. Erklären Sie, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("css-js-ally-2", "100%", 240) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

<!-- spellchecker: disable -->

```html live-sample___css-js-ally-2 live-sample___css-js-ally-2-finish
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

Der aktualisierte Inhalt sollte so aussehen:

{{ EmbedLiveSample("css-js-ally-2-finish", "100%", 600) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

1. Die Probleme sind:
   - Der Farbkontrast ist nicht akzeptabel gemäß den WCAG-Kriterien [1.4.3 (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) und [1.4.6 (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced).
   - Der Text wird mit `vw`-Einheiten skaliert, was bedeutet, dass er in den meisten Browsern nicht zoombar ist. [WCAG 1.4.4 (AA)](https://w3c.github.io/wcag/guidelines/22/#resize-text) besagt, dass Text vergrößerbar sein sollte.
2. Um den Code zu beheben, müssen Sie:
   - Ein besser kontrastierendes Set von Hintergrund- und Vordergrundfarben wählen.
   - Andere Einheiten zur Größenänderung des Textes verwenden (wie `rem` oder sogar `px`), oder sogar etwas implementieren, das eine Kombination von `vw` und anderen Einheiten nutzt, wenn Sie es vergrößerbar, aber dennoch relativ zur Anzeigengröße halten möchten.
3. Zum Testen:
   - Sie können den Farbkontrast mit einem Tool wie [aXe](https://www.deque.com/axe/), dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), oder sogar einem einfachen eigenständigen Werkzeug wie dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) testen.
   - Für die Schriftgrößenänderung müssten Sie das Beispiel in einem Browser laden und versuchen, es zu vergrößern. Das Skalieren von mit `vw`-Einheiten dimensioniertem Text funktioniert in Safari, aber nicht in Firefox oder auf Chromium basierenden Browsern.

Für den aktualisierten Code könnte etwas wie das Folgende den Farbkontrast beheben:

```css live-sample___css-js-ally-2-finish
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

Und etwas wie das Folgende würde für die Schriftgrößenänderung funktionieren:

```css live-sample___css-js-ally-2-finish
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

Oder dies, wenn Sie etwas Cleveres tun möchten, das Ihnen resizable und anzeigefenster-relative Text gibt:

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

## JavaScript-Barrierefreiheit 1

In unserer letzten Barrierefreiheitsaufgabe haben Sie einige JavaScript-Programmierungen zu erledigen. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unter der Liste.

Aber sie ist nicht sehr zugänglich — in ihrem aktuellen Zustand können Sie sie nur mit der Maus benutzen. Wir möchten, dass Sie etwas HTML und JavaScript hinzufügen, um sie auch mit der Tastatur bedienbar zu machen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("css-js-ally-3", "100%", 400) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keinen fertigen Inhalt bereitgestellt, da er genauso aussieht wie der Ausgangspunkt.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

1. Zunächst müssen Sie `tabindex="0"` zu den Listenelementen hinzufügen, damit diese über die Tastatur fokussierbar sind.
2. Dann müssen Sie einen weiteren Event-Listener innerhalb der `forEach()`-Schleife hinzufügen, damit der Code auf das Drücken von Tasten reagiert, während die Listenelemente ausgewählt sind. Es ist wahrscheinlich eine gute Idee, ihn auf eine spezifische Taste wie "Enter" reagieren zu lassen, in welchem Fall etwas wie das Folgende akzeptabel ist:

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
