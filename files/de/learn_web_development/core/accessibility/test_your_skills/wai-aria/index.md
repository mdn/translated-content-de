---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: "Test: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen dabei zu helfen, zu beurteilen, ob Sie unseren Artikel zu den [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unseren Leitfaden zur Nutzung von [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## WAI-ARIA 1

Unsere erste ARIA-Aufgabe umfasst einen Abschnitt mit nicht-semantischem Markup, der visuell wie eine Liste aussehen soll. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es Nutzern von Screenreadern ermöglichen zu verstehen, was es ist?

Um die Aufgabe zu vervollständigen, fügen Sie einige WAI-ARIA-Semantiken hinzu, um Screenreadern zu ermöglichen, die `<div>`-Elemente als ungeordnete Liste zu erkennen.

<!-- Code shared across examples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
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

Um die Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, damit das Suchformular als separates Landmark auf der Seite von Screenreadern erkannt wird, um es leicht auffindbar zu machen.
2. Geben Sie dem Sucheingabefeld ein geeignetes Label, ohne explizit ein sichtbares Textlabel in das DOM einzufügen.

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS und JavaScript Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn man auf einen der Tiernamen klickt, erscheint eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste. Hier beginnen wir mit einer version, die sowohl mit Maus als auch mit Tastatur zugänglich ist.

Das Problem ist nun, dass wenn sich das DOM ändert um eine neue Beschreibung anzuzeigen, Screenreader nicht erfassen können, was sich geändert hat. Können Sie es aktualisieren, sodass Änderungen der Beschreibung vom Screenreader angekündigt werden?

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

Es gibt zwei Möglichkeiten, das im Rahmen dieser Aufgabe beschriebene Problem zu lösen:

- Fügen Sie dem Tierbeschreibungs-`<div>` ein `aria-live=""`-Attribut hinzu, um es zu einer Live-Region zu machen, damit bei Änderungen seines Inhalts der aktualisierte Inhalt von einem Screenreader vorgelesen wird. Der beste Wert ist wahrscheinlich `assertive`, wodurch der Screenreader den aktualisierten Inhalt sofort vorliest, sobald er sich geändert hat. `polite` bedeutet, dass der Screenreader wartet, bis andere Beschreibungen beendet sind, bevor er beginnt, den geänderten Inhalt vorzulesen.
- Fügen Sie dem Tierbeschreibungs-`<div>` ein `role="alert"`-Attribut hinzu, um es mit den Semantiken einer Warnbox zu versehen. Dies hat den gleichen Effekt auf den Screenreader wie das Setzen von `aria-live="assertive"` darauf.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
