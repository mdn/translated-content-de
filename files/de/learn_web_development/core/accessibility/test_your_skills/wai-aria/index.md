---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: "Test: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Mit diesem Test können Sie überprüfen, ob Sie unseren Artikel über die [Grundlagen von WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren Leitfaden zur Verwendung von [„Testen Sie Ihre Fähigkeiten“](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## WAI-ARIA 1

Die erste ARIA-Aufgabe enthält einen Abschnitt mit nicht-semantischem Markup, der optisch als Liste dargestellt wird. Angenommen, Sie können die verwendeten Elemente nicht ändern: Wie können Sie dafür sorgen, dass Nutzer von Screenreadern erkennen, worum es sich handelt?

Fügen Sie dazu WAI-ARIA-Semantik hinzu, damit Screenreader die `<div>`-Elemente als ungeordnete Liste erkennen.

Der Ausgangszustand der Aufgabe sieht so aus:

{{ EmbedLiveSample("aria-1", "100%", 250) }}

Hier ist der zugrunde liegende Code:

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

Für diese Aufgabe zeigen wir kein fertiges Ergebnis, da es genauso aussieht wie der Ausgangszustand.

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

In der zweiten WAI-ARIA-Aufgabe sehen Sie ein einfaches Suchformular. Ergänzen Sie zwei WAI-ARIA-Funktionen, um seine Barrierefreiheit zu verbessern.

So lösen Sie die Aufgabe:

1. Fügen Sie ein Attribut hinzu, damit Screenreader das Suchformular als eigenen Landmark-Bereich auf der Seite erkennen und es leicht gefunden werden kann.
2. Geben Sie dem Such-Eingabefeld eine passende Beschriftung, ohne dem DOM ausdrücklich eine sichtbare Textbeschriftung hinzuzufügen.

Der Ausgangszustand der Aufgabe sieht so aus:

{{ EmbedLiveSample("aria-2", "100%", 100) }}

Hier ist der zugrunde liegende Code:

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

```js hidden live-sample___aria-2
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Für diese Aufgabe zeigen wir kein fertiges Ergebnis, da es sich optisch nicht wesentlich vom Ausgangszustand unterscheidet.

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel aus dem [Test zu CSS und JavaScript](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) zurück.
Wie zuvor zeigt die Anwendung eine Liste von Tiernamen. Wenn Sie auf einen Tiernamen klicken, erscheint unter der Liste in einem Kasten eine ausführlichere Beschreibung des Tiers. Diesmal beginnen wir mit einer Version, die per Maus und Tastatur bedienbar ist.

Das Problem ist nun, dass Screenreader nicht erkennen können, was sich geändert hat, wenn das DOM eine neue Beschreibung anzeigt. Können Sie das Beispiel so anpassen, dass der Screenreader Änderungen an der Beschreibung ansagt?

Der Ausgangszustand der Aufgabe sieht so aus:

{{ EmbedLiveSample("aria-3", "100%", 400) }}

Hier ist der zugrunde liegende Code:

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

Für diese Aufgabe zeigen wir kein fertiges Ergebnis, da es genauso aussieht wie der Ausgangszustand.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es gibt zwei Möglichkeiten, das Problem dieser Aufgabe zu lösen:

- Fügen Sie dem `<div>` für die Tierbeschreibung ein Attribut `aria-live=""` hinzu, um es zu einer Live-Region zu machen. Wenn sich sein Inhalt ändert, liest ein Screenreader den aktualisierten Inhalt vor. Der am besten geeignete Wert ist wahrscheinlich `assertive`: Damit liest der Screenreader den aktualisierten Inhalt sofort vor, sobald er sich geändert hat. Bei `polite` wartet der Screenreader, bis er andere Ansagen beendet hat, bevor er den geänderten Inhalt vorliest.
- Fügen Sie dem `<div>` für die Tierbeschreibung ein Attribut `role="alert"` hinzu, um ihm die Semantik eines Benachrichtigungsfelds zu geben. Für den Screenreader hat dies dieselbe Wirkung wie `aria-live="assertive"`.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
