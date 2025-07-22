---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

Ziel dieses Fähigkeitstests ist es zu prüfen, ob Sie unseren Artikel zu den [Grundlagen von WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischer Markierung, der visuellen Angaben zufolge eine Liste darstellen soll. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie Nutzern von Bildschirmlesegeräten verständlich machen, was es ist?

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige WAI-ARIA-Semantiken hinzu, damit Bildschirmlesegeräte die `<div>`-Elemente als ungeordnete Liste erkennen.

> [!CALLOUT]
>
> Sie können auch den [Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Sollten Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

<!-- Beispiel-spezifischer Code -->

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular und möchten, dass Sie einige WAI-ARIA-Funktionen hinzufügen, um seine Zugänglichkeit zu verbessern.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie ein Attribut hinzu, damit das Suchformular als separates Landmarkenzeichen auf der Seite von Bildschirmlesern erkannt wird, um es leicht auffindbar zu machen.
3. Geben Sie dem Sucheingabefeld eine passende Beschriftung, ohne explizit eine sichtbare Textbeschriftung zum DOM hinzuzufügen.

> [!CALLOUT]
>
> Sie können auch den [Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Sollten Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

{{ EmbedLiveSample("aria-2", "100%", 100) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS und JavaScript-Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung des Tieres in einem Kasten unter der Liste. Hier beginnen wir mit einer Maus- und Tastatur-freundlichen Version.

Das Problem, das wir jetzt haben, ist, dass, wenn sich das DOM ändert, um eine neue Beschreibung zu zeigen, Bildschirmlesegeräte nicht erkennen können, was sich geändert hat. Können Sie es so aktualisieren, dass Änderungen in der Beschreibung vom Bildschirmlesegerät angekündigt werden?

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie das HTML so, dass die Beschreibungsänderungen vom Bildschirmlesegerät angekündigt werden.

> [!CALLOUT]
>
> Sie können auch den [Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Sollten Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Es gibt zwei Möglichkeiten, das in dieser Aufgabe skizzierte Problem zu lösen:

- Fügen Sie dem animal-description `<div>` ein `aria-live=""` Attribut hinzu, um es in eine Live-Region zu verwandeln. So wird der aktualisierte Inhalt vorgelesen, wenn sich sein Inhalt ändert. Der beste Wert ist wahrscheinlich `assertive`, was das Bildschirmlesegerät sofort den aktualisierten Inhalt vorlesen lässt, sobald er sich ändert. `polite` bedeutet, dass das Bildschirmlesegerät wartet, bis andere Beschreibungen beendet sind, bevor es mit dem Vorlesen des geänderten Inhalts beginnt.
- Fügen Sie dem animal-description `<div>` ein `role="alert"` Attribut hinzu, um es mit der Semantik eines Warnkastens zu versehen. Dies hat den gleichen Effekt auf das Bildschirmlesegerät, als ob `aria-live="assertive"` darauf gesetzt wäre.

</details>
