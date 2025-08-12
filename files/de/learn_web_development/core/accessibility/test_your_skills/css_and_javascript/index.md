---
title: "Testen Sie Ihre Fähigkeiten: Barrierefreiheit von CSS und JavaScript"
short-title: CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Ziel dieses Fähigkeits-Tests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel über die [Best Practices für die Barrierefreiheit von CSS und JavaScript](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie bitte unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## CSS-Barrierefreiheit 1

Bei der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Deren Barrierefreiheit ist jedoch ziemlich schlecht – es gibt keine Möglichkeit, wirklich zu erkennen, dass es sich um Links handelt, oder welcher Link gerade fokussiert ist. Wir möchten, dass Sie davon ausgehen, dass das bestehende Regelset mit dem `a`-Selektor von einem CMS bereitgestellt wird und Sie es nicht ändern können.

Um die Aufgabe abzuschließen, erstellen Sie neue Regeln, damit die Links wie Links aussehen und sich verhalten, und damit die Benutzer erkennen können, welcher Link in der Liste fokussiert ist.

<!-- Code gemeinsame Nutzung über Beispiele hinweg -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Beispiel-spezifischer Code -->

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

Ihr fertiges CSS könnte etwa so aussehen:

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

## CSS-Barrierefreiheit 2

In dieser nächsten Aufgabe wird Ihnen ein einfacher Inhalt präsentiert – nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und der Größe des Textes, und wir möchten, dass Sie diese beheben.

Um die Aufgabe abzuschließen:

1. Überlegen Sie, welche Probleme bestehen, und welche Richtlinien die akzeptablen Werte für Farbe und Größe angeben.
2. Aktualisieren Sie das CSS mit neuen Werten für die Farbe und Schriftgröße, um das Problem zu lösen.
3. Testen Sie den Code, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären Sie, welche Werkzeuge oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

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
   - Der Farbkontrast ist nicht akzeptabel gemäß den WCAG-Kriterien [1.4.3 (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) und [1.4.6 (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced).
   - Der Text wird mit `vw`-Einheiten skaliert, was bedeutet, dass er in den meisten Browsern nicht zoombar ist. [WCAG 1.4.4 (AA)](https://w3c.github.io/wcag/guidelines/22/#resize-text) besagt, dass Text skalierbar sein sollte.
2. Um den Code zu korrigieren, müssen Sie
   - Ein besseres kontrastierendes Set von Hintergrund- und Vordergrundfarben wählen.
   - Andere Einheiten verwenden, um den Text zu skalieren (wie `rem` oder sogar `px`), oder etwas implementieren, das eine Kombination aus `vw` und anderen Einheiten verwendet, wenn Sie möchten, dass es skalierbar, aber trotzdem relativ zur Ansichtsgröße ist.
3. Für das Testen:
   - Sie können den Farbkontrast mit einem Tool wie [aXe](https://www.deque.com/axe/), dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) oder sogar einem einfachen, eigenständigen Web Tool wie dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) testen.
   - Für die Textskalierung müssen Sie das Beispiel in einem Browser laden und versuchen, es zu skalieren. Die Skalierung von `vw`-Einheiten funktioniert in Safari, aber nicht in Firefox oder auf Chromium-basierenden Browsern.

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

Und etwas wie das Folgende würde für die Schriftgrößen funktionieren:

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

Oder dies, wenn Sie etwas Cleveres tun möchten, das skalierbaren, ansichtsbezogenen Text bietet:

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

In unserer letzten Barrierefreiheits-Aufgabe müssen Sie etwas JavaScript implementieren. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Durch Klicken auf einen der Tiernamen erscheint eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste.

Aber sie ist nicht sehr barrierefrei – in ihrem aktuellen Zustand können Sie sie nur mit der Maus bedienen. Wir möchten, dass Sie etwas HTML und JavaScript hinzufügen, um sie auch über die Tastatur zugänglich zu machen.

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
2. Dann müssen Sie einen weiteren Event Listener innerhalb der `forEach()`-Schleife hinzufügen, damit der Code auf gedrückte Tasten reagiert, während die Listenelemente ausgewählt sind. Es ist wahrscheinlich eine gute Idee, ihn auf eine bestimmte Taste wie "Enter" reagieren zu lassen, in diesem Fall wäre etwa das Folgende akzeptabel:

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>
