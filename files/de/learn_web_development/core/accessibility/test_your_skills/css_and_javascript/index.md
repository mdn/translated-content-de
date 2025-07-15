---
title: "Testen Sie Ihre Fähigkeiten: CSS und JavaScript Barrierefreiheit"
short-title: CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 0c486f69de815c2882a21badb6a7772e124d1a7a
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel über [CSS- und JavaScript-Barrierefreiheit Best Practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## CSS Barrierefreiheit 1

In der ersten Aufgabe wird Ihnen eine Liste von Links präsentiert. Ihre Barrierefreiheit ist jedoch ziemlich schlecht – es gibt keine Möglichkeit wirklich zu erkennen, dass es sich um Links handelt oder welcher Link sich im Fokus des Nutzers befindet. Wir möchten, dass Sie davon ausgehen, dass das bestehende Regelset mit dem `a`-Selektor von einem CMS bereitgestellt wird und dass Sie es nicht ändern können.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie neue Regeln, damit die Links wie Links aussehen und sich verhalten, und damit der Benutzer erkennen kann, auf welchen Link er in der Liste fokussiert ist.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

<!-- Code shared across examples -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3
body {
  background-color: #fff;
  color: #333;
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
  color: #666;
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
  color: rgb(150, 0, 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: rgb(255, 0, 0);
}
```

</details>

## CSS Barrierefreiheit 2

In der nächsten Aufgabe wird Ihnen ein einfaches Stück Inhalt präsentiert – nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und der Größe des Textes, und wir möchten, dass Sie diese beheben.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Überlegen Sie, wo die Probleme liegen und welche Richtlinien die akzeptablen Werte für Farbe und Größe angeben.
3. Aktualisieren Sie das CSS mit neuen Werten für die Farbe und die Schriftgröße, um das Problem zu beheben.
4. Testen Sie den Code, um sicherzustellen, dass das Problem jetzt behoben ist. Erklären Sie, welche Tools oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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
  color: #999;
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
   - Der Farbkontrast ist nicht akzeptabel, gemäß WCAG Kriterien [1.4.3 (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum) und [1.4.6 (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced).
   - Der Text wird in `vw`-Einheiten dimensioniert, was bedeutet, dass es in den meisten Browsern nicht zoombar ist. [WCAG 1.4.4 (AA)](https://www.w3.org/TR/WCAG21/#resize-text) fordert, dass Text skalierbar sein sollte.
2. Um den Code zu reparieren, müssen Sie:
   - Ein besser kontrastierendes Set von Hintergrund- und Vordergrundfarben wählen.
   - Andere Einheiten verwenden, um den Text zu dimensionieren (wie `rem` oder sogar `px`), oder sogar etwas implementieren, das eine Kombination aus `vw` und anderen Einheiten verwendet, wenn Sie ihn skalierbar, aber dennoch relativ zur Viewport-Größe wünschen.
3. Für die Tests:
   - Sie können den Farbkontrast mit einem Tool wie [aXe](https://www.deque.com/axe/), dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) oder sogar einem einfachen eigenständigen Webseitentool wie dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) testen.
   - Für die Textskalierung müssten Sie das Beispiel in einem Browser laden und versuchen, es zu skalieren. Die Skalierung von Text in `vw`-Einheiten funktioniert in Safari, aber nicht in Firefox oder auf Chromium-basierten Browsern.

Für den aktualisierten Code würde etwas wie dies den Farbkontrast beheben:

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

Und etwas wie dies würde für die Schriftgröße funktionieren:

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

Oder dies, wenn Sie etwas intelligenteres machen möchten, das Ihnen skalierbaren, viewport-relativen Text gibt:

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

In unserer letzten Barrierefreiheitsaufgabe haben Sie einige JavaScript-Aufgaben zu erledigen. Wir haben eine App, die eine Liste von Tiernamen anzeigt. Durch Klicken auf einen der Tiernamen erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unterhalb der Liste.

Aber sie ist nicht sehr zugänglich – im aktuellen Zustand kann sie nur mit der Maus bedient werden. Wir möchten, dass Sie etwas HTML und JavaScript hinzufügen, um sie auch tastaturzugänglich zu machen.

Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten und die erforderlichen Änderungen vorzunehmen.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

listItems.forEach(function (item) {
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

1. Zunächst müssen Sie `tabindex="0"` zu den Listenelementen hinzufügen, um sie per Tastatur fokussierbar zu machen.
2. Anschließend müssen Sie einen weiteren Event-Listener innerhalb der `forEach()`-Schleife hinzufügen, damit der Code auf Tastenanschläge reagiert, während die Listenelemente ausgewählt sind. Es ist wahrscheinlich eine gute Idee, ihn auf eine bestimmte Taste reagieren zu lassen, wie "Enter", in welchem Fall etwas wie das Folgende wahrscheinlich akzeptabel ist:

```js
item.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>
