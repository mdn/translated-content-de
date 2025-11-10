---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: "Test: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu überprüfen, ob Sie unseren Artikel zu den [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Fähigkeitentest-Leitfaden](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## WAI-ARIA 1

Unsere erste ARIA-Aufgabe umfasst einen Abschnitt mit nicht-semantichem Markup, der visuell als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie den Benutzern von Screenreadern ermöglichen, zu verstehen, was es ist?

Um die Aufgabe abzuschließen, fügen Sie einige WAI-ARIA-Semantiken hinzu, um die `<div>`-Elemente von Screenreadern als ungeordnete Liste erkennen zu lassen.

<!-- Code shared across examples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
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

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular und möchten, dass Sie einige WAI-ARIA-Funktionen hinzufügen, um dessen Zugänglichkeit zu verbessern.

Um die Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, um das Suchformular als separates Landmark auf der Seite für Screenreader kenntlich zu machen, damit es leicht auffindbar ist.
2. Geben Sie dem Sucheingabefeld ein geeignetes Label, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen.

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

Für die letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS- und JavaScript-Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Ein Klick auf einen der Tiernamen führt dazu, dass eine weitere Beschreibung dieses Tieres in einem Kasten unter der Liste erscheint. Hier beginnen wir mit einer maus- und tastaturzugänglichen Version.

Das Problem, das wir jetzt haben, ist, dass wenn sich das DOM ändert, um eine neue Beschreibung anzuzeigen, Screenreader nicht sehen können, was sich geändert hat. Können Sie es so aktualisieren, dass beschriebene Änderungen vom Screenreader angekündigt werden?

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

- Fügen Sie ein `aria-live=""`-Attribut dem Tierbeschreibungs-`<div>` hinzu, um es in einen Live-Bereich zu verwandeln, sodass der geänderte Inhalt von einem Screenreader vorgelesen wird, sobald er sich ändert. Der beste Wert ist wahrscheinlich `assertive`, wodurch der Screenreader den geänderten Inhalt sofort nach der Änderung liest. `polite` bedeutet, dass der Screenreader wartet, bis andere Inhalte zu Ende gelesen wurden, bevor er den geänderten Inhalt vorliest.
- Fügen Sie dem Tierbeschreibungs-`<div>` ein `role="alert"`-Attribut hinzu, um ihm die Semantik einer Alarmbox zu geben. Dies hat die gleiche Auswirkung auf den Screenreader wie das Setzen von `aria-live="assertive"`.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
