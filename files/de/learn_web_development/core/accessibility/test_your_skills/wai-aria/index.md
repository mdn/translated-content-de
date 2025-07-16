---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

Ziel dieses Tests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel über die [grundlegenden Konzepte von WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, der optisch als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es ermöglichen, dass Bildschirmleseprogramme erkennen, um was es sich handelt?

Um die Aufgabe zu lösen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige WAI-ARIA-Semantiken hinzu, damit Bildschirmleseprogramme die `<div>`-Elemente als ungeordnete Liste erkennen.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

<!-- Code shared across examples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
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

```html live-sample___aria-1
<p>My favorite animals:</p>

<div>
  <div>Pig</div>
  <div>Gazelle</div>
  <div>Llama</div>
  <div>Majestic moose</div>
  <div>Hedgehog</div>
</div>
```

```css live-sample___aria-1
div > div {
  padding-left: 20px;
  position: relative;
}

div > div::before {
  content: " ";
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
}
```

{{ EmbedLiveSample("aria-1", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<div role="list">
  <div role="listitem">Pig</div>
  <div role="listitem">Gazelle</div>
  <div role="listitem">Llama</div>
  <div role="listitem">Majestic moose</div>
  <div role="listitem">Hedgehog</div>
</div>
```

</details>

## WAI-ARIA 2

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular, und wir möchten, dass Sie ein paar WAI-ARIA-Funktionen hinzufügen, um dessen Zugänglichkeit zu verbessern.

Um die Aufgabe zu lösen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie ein Attribut hinzu, damit das Suchformular von Bildschirmleseprogrammen als eigenes Landmark auf der Seite hervorgehoben wird und leicht auffindbar ist.
3. Geben Sie dem Suchfeld ein geeignetes Label, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

{{ EmbedLiveSample("aria-2", "100%", 100) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<form role="search">
  <input
    type="search"
    name="search"
    aria-label="Search for your favorite content on our site" />
</form>
```

</details>

## WAI-ARIA 3

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir bereits im [CSS- und JavaScript-Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben. Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung dieses Tieres in einem Kästchen unterhalb der Liste. Hier beginnen wir mit einer Version, die mit Maus und Tastatur zugänglich ist.

Das Problem, das wir jetzt haben, ist, dass Bildschirmleseprogramme nicht sehen können, was sich geändert hat, wenn das DOM aktualisiert wird, um eine neue Beschreibung anzuzeigen. Können Sie es so aktualisieren, dass Beschreibungseränderungen von dem Bildschirmleseprogramm angesagt werden?

Um die Aufgabe zu lösen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie das HTML, sodass die Beschreibungsänderungen vom Bildschirmleseprogramm angesagt werden.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

```html live-sample___aria-3
<section class="preview">
  <div class="animal-list">
    <h1>Animal summaries</h1>

    <p>
      The following list of animals can be clicked to display a description of
      that animal.
    </p>

    <ul>
      <li
        tabindex="0"
        data-description="A type of wild mountain goat, with large recurved horns, found in Eurasia, North Africa, and East Africa.">
        Ibex
      </li>
      <li
        tabindex="0"
        data-description="A medium-sized marine mammal, similar to a manatee, but with a Dolphin-like tail.">
        Dugong
      </li>
      <li
        tabindex="0"
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

```css hidden live-sample___aria-3
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

li {
  cursor: pointer;
}
```

```js hidden live-sample___aria-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
  item.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSelection(e);
    }
  });
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

{{ EmbedLiveSample("aria-3", "100%", 400) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es gibt zwei Möglichkeiten, das in dieser Aufgabe beschriebene Problem zu lösen:

- Fügen Sie dem Tierbeschreibungs-`<div>` ein `aria-live=""` Attribut hinzu, um es in eine Live-Region zu verwandeln, sodass der aktualisierte Inhalt vom Bildschirmleseprogramm vorgelesen wird, sobald sich der Inhalt ändert. Der beste Wert ist wahrscheinlich `assertive`, wodurch das Bildschirmleseprogramm den aktualisierten Inhalt sofort liest, sobald er geändert wurde. `polite` bedeutet, dass das Bildschirmleseprogramm wartet, bis andere Beschreibungen zu Ende sind, bevor es mit dem Lesen des geänderten Inhalts beginnt.
- Fügen Sie dem Tierbeschreibungs-`<div>` ein `role="alert"` Attribut hinzu, um es mit Alertbox-Semantik zu versehen. Dies hat die gleiche Wirkung auf das Bildschirmleseprogramm wie das Setzen von `aria-live="assertive"` darauf.

</details>
