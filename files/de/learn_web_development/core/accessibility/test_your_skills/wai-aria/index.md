---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: "Test: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen dabei zu helfen, einzuschätzen, ob Sie unseren Artikel zu den [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung Ihrer Fähigkeiten testen](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## WAI-ARIA 1

Unsere erste ARIA-Aufgabe umfasst einen Abschnitt mit nicht-semantischem Markup, der visuell als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es blinden Software-Nutzern ermöglichen zu verstehen, was es ist?

Um die Aufgabe abzuschließen, fügen Sie einige WAI-ARIA-Semantiken hinzu, damit Vorleseprogramme die `<div>`-Elemente als ungeordnete Liste erkennen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("aria-1", "100%", 250) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keine fertigen Inhalte bereitgestellt, da er gleich aussieht wie der Ausgangspunkt.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<p>My favorite animals:</p>

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

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular und möchten, dass Sie ein paar WAI-ARIA-Funktionen hinzufügen, um dessen Zugänglichkeit zu verbessern.

Um die Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, um das Suchformular als separates Landmark auf der Seite durch Vorlesegeräte hervorzuheben, damit es leicht auffindbar ist.
2. Geben Sie der Sucheingabe ein geeignetes Label, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("aria-2", "100%", 100) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

Wir haben für diese Aufgabe keine fertigen Inhalte bereitgestellt, da er sich nicht signifikant von der Ausgangssituation unterscheidet.

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS- und JavaScript-Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn man auf einen der Tiernamen klickt, erscheint eine weitere Beschreibung dieses Tieres in einem Feld unterhalb der Liste. Hier beginnen wir mit einer Version, die sowohl mit Maus als auch mit Tastatur zugänglich ist.

Das Problem, das wir jetzt haben, ist, dass, wenn sich das DOM ändert, um eine neue Beschreibung anzuzeigen, Vorlesegeräte nicht erkennen können, was sich geändert hat. Können Sie es so aktualisieren, dass Beschreibungsänderungen vom Vorleseprogramm angekündigt werden?

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("aria-3", "100%", 400) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keine fertigen Inhalte bereitgestellt, da er gleich aussieht wie der Ausgangspunkt.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es gibt zwei Möglichkeiten, das in dieser Aufgabe beschriebene Problem zu lösen:

- Fügen Sie ein `aria-live=""`-Attribut zur Tierbeschreibungs-`<div>` hinzu, um es zu einem Live-Bereich zu machen, sodass, wenn sich dessen Inhalt ändert, der aktualisierte Inhalt von einem Vorlesegerät vorgelesen wird. Der beste Wert ist wahrscheinlich `assertive`, was bedeutet, dass das Vorlesegerät den aktualisierten Inhalt direkt nach dessen Änderung vorliest. `polite` bedeutet, dass das Vorleseprogramm wartet, bis andere Beschreibungen fertig sind, bevor es den geänderten Inhalt vorliest.
- Fügen Sie ein `role="alert"`-Attribut zur Tierbeschreibungs-`<div>` hinzu, um ihm eine Alarm-Box-Semantik zu geben. Dies hat denselben Effekt auf das Vorlesegerät, als ob `aria-live="assertive"` darauf gesetzt wäre.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
