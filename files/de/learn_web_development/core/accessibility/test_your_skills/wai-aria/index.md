---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Lesen Sie unseren [Anleitung zu Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills), um Hilfe zu erhalten. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt nicht-semantischen Markups, der visuell als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie es den Nutzern von Screenreadern ermöglichen zu verstehen, was es ist?

Um die Aufgabe abzuschließen, fügen Sie einige WAI-ARIA-Semantiken hinzu, damit Screenreader die `<div>`-Elemente als ungeordnete Liste erkennen.

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

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular, und wir möchten, dass Sie ein paar WAI-ARIA-Funktionen hinzufügen, um dessen Barrierefreiheit zu verbessern.

Um die Aufgabe abzuschließen:

1. Fügen Sie ein Attribut hinzu, damit das Suchformular von Screenreadern als separates Landmark auf der Seite aufgerufen werden kann, um es leicht auffindbar zu machen.
2. Geben Sie dem Sucheingabefeld ein geeignetes Label, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen.

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir bereits im [CSS- und JavaScript-Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben.
Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Durch Klicken auf einen der Tiernamen erscheint eine weitere Beschreibung dieses Tieres in einem Kasten unter der Liste. Hier starten wir mit einer Maus- und Tastaturversion.

Das Problem, das wir jetzt haben, ist, dass wenn sich das DOM ändert, um eine neue Beschreibung anzuzeigen, Screenreader nicht sehen können, was sich geändert hat. Können Sie es so aktualisieren, dass Änderungen in der Beschreibung vom Screenreader angekündigt werden?

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

- Fügen Sie dem Tierbeschreibung `<div>` ein `aria-live=""` Attribut hinzu, um es zu einer Live-Region zu machen, sodass, wenn sich der Inhalt ändert, der aktualisierte Inhalt von einem Screenreader vorgelesen wird. Der beste Wert ist wahrscheinlich `assertive`, wodurch der Screenreader den aktualisierten Inhalt sofort vorliest, sobald er sich geändert hat. `polite` bedeutet, dass der Screenreader wartet, bis andere Beschreibungen fertig sind, bevor er beginnt, den geänderten Inhalt vorzulesen.
- Fügen Sie dem Tierbeschreibung `<div>` ein `role="alert"` Attribut hinzu, um es mit den Semantiken einer Alert-Box zu versehen. Dies hat den gleichen Effekt auf den Screenreader wie das Setzen von `aria-live="assertive"` auf ihm.

</details>
