---
title: "Testen Sie Ihre Fähigkeiten: CSS- und JavaScript-Zugänglichkeit"
short-title: CSS und JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu überprüfen, ob Sie unseren Artikel zu den [CSS- und JavaScript-Zugänglichkeits-Best-Practices](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## CSS-Zugänglichkeit 1

Im ersten Aufgabe haben Sie eine Liste von Links vor sich. Ihre Zugänglichkeit ist jedoch ziemlich schlecht – es gibt keine Möglichkeit wirklich zu erkennen, dass es Links sind oder welcher Fokus gerade vom Benutzer genutzt wird. Wir möchten, dass Sie davon ausgehen, dass das bestehende Regelwerk mit dem `a`-Selektor von einem CMS bereitgestellt wird und dass Sie es nicht ändern können.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie neue Regeln, damit die Links wie Links aussehen und sich verhalten, und damit der Benutzer erkennen kann, auf welchen Link in der Liste er fokussiert ist.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

Ihr abgeschlossener CSS-Code könnte so aussehen:

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
  color: rgb(255 0 0);
}
```

</details>

## CSS-Zugänglichkeit 2

In dieser nächsten Aufgabe wird Ihnen ein einfacher Inhalt präsentiert – nur Überschriften und Absätze. Es gibt Barrierefreiheitsprobleme mit den Farben und der Größe des Texts, und wir möchten, dass Sie diese beheben.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Überlegen Sie, was die Probleme sind und welche Richtlinien die akzeptablen Werte für Farbe und Größe vorgeben.
3. Aktualisieren Sie das CSS mit neuen Werten für die Farbe und Schriftgröße, um das Problem zu beheben.
4. Testen Sie den Code, um sicherzustellen, dass das Problem nun behoben ist. Erklären Sie, welche Tools oder Methoden Sie verwendet haben, um die neuen Werte auszuwählen und den Code zu testen.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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
   - Der Farbkontrast ist nach den WCAG-Kriterien [1.4.3 (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) und [1.4.6 (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced) nicht ausreichend.
   - Der Text wird mit `vw`-Einheiten skaliert, was bedeutet, dass er in den meisten Browsern nicht zoombar ist. [WCAG 1.4.4 (AA)](https://w3c.github.io/wcag/guidelines/22/#resize-text) besagt, dass Text anpassbar sein sollte.
2. Um den Code zu beheben, müssen Sie
   - Eine besser kontrastierende Kombination von Hintergrund- und Vordergrundfarben wählen.
   - Andere Einheiten verwenden, um den Text zu skalieren (wie `rem` oder auch `px`), oder etwas implementieren, das eine Kombination von `vw` und anderen Einheiten nutzt, wenn Sie ihn anpassbar, aber dennoch relativ zur Ansichtsfenstergröße möchten.
3. Zum Testen:
   - Sie können den Farbkontrast mit einem Tool wie [aXe](https://www.deque.com/axe/), dem [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) oder einem einfachen Tool wie dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) testen.
   - Für das Textzoomen müssen Sie das Beispiel in einem Browser laden und versuchen, es zu vergrößern. Zoom mit `vw`-Einheiten funktioniert in Safari, aber nicht in Firefox oder Chromium-basierten Browsern.

Für den aktualisierten Code würde Folgendes den Farbkontrast beheben:

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

Und so würde die Schriftgrößenanpassung funktionieren:

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

Oder so, wenn Sie etwas Clevereres möchten, das Ihnen anpassbaren text im Verhältnis zur Ansicht bietet:

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

## JavaScript-Zugänglichkeit 1

In unserer letzten Zugänglichkeitsaufgabe haben Sie etwas JavaScript zu erledigen. Wir haben eine App, die eine Liste von Tiernamen präsentiert. Durch Klicken auf einen der Tiernamen erscheint eine weiterführende Beschreibung dieses Tiers in einem Kasten unter der Liste.

Derzeit ist die App jedoch nicht sehr zugänglich – sie lässt sich nur mit der Maus bedienen. Wir möchten, dass Sie etwas HTML und JavaScript hinzufügen, um die Bedienung auch mit der Tastatur zu ermöglichen.

Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten, und führen Sie die erforderlichen Änderungen durch.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

1. Zuerst müssen Sie `tabindex="0"` zu den Listenelementen hinzufügen, damit diese über die Tastatur fokussierbar sind.
2. Dann müssen Sie einen weiteren Event-Listener innerhalb der `forEach()`-Schleife hinzufügen, damit der Code auf gedrückte Tasten reagiert, während die Listenelemente ausgewählt sind. Es ist wahrscheinlich eine gute Idee, eine spezifische Taste wie "Enter" zu verwenden, in welchem Fall Folgendes akzeptabel wäre:

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>
