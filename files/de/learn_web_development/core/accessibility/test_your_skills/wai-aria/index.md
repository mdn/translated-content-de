---
title: "Testen Sie Ihre Fähigkeiten: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie unseren Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden "Testen Sie Ihre Fähigkeiten"](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## WAI-ARIA 1

In unserer ersten ARIA-Aufgabe präsentieren wir Ihnen einen Abschnitt mit nicht-semantischem Markup, der visuell als Liste gedacht ist. Angenommen, Sie können die verwendeten Elemente nicht ändern, wie können Sie Bildschirmlesegeräten ermöglichen, zu verstehen, was es ist?

Um die Aufgabe zu vervollständigen, fügen Sie einige WAI-ARIA-Semantiken hinzu, damit Bildschirmlesegeräte die `<div>`-Elemente als ungeordnete Liste erkennen.

<!-- Code shared across examples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
body {
  background-color: white;
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

In unserer zweiten WAI-ARIA-Aufgabe präsentieren wir ein einfaches Suchformular, und wir möchten, dass Sie einige WAI-ARIA-Funktionen hinzufügen, um dessen Zugänglichkeit zu verbessern.

Um die Aufgabe zu vervollständigen:

1. Fügen Sie ein Attribut hinzu, um das Suchformular als separates Landmark auf der Seite von Bildschirmlesegeräten hervorzuheben, damit es leicht auffindbar ist.
2. Geben Sie dem Suchfeld ein geeignetes Label, ohne explizit ein sichtbares Textlabel zum DOM hinzuzufügen.

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

Für diese letzte WAI-ARIA-Aufgabe kehren wir zu einem Beispiel zurück, das wir zuvor im [CSS und JavaScript Fähigkeitstest](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript) gesehen haben. Wie zuvor haben wir eine App, die eine Liste von Tiernamen präsentiert. Wenn Sie auf einen der Tiernamen klicken, erscheint eine weitere Beschreibung des Tieres in einem Kasten unter der Liste. Hier starten wir mit einer Maus- und Tastatur-zugänglichen Version.

Das Problem, das wir jetzt haben, ist, dass wenn sich der DOM ändert, um eine neue Beschreibung zu zeigen, Bildschirmlesegeräte nicht erkennen können, was sich geändert hat. Können Sie es so aktualisieren, dass Änderungen an der Beschreibung vom Bildschirmleser angekündigt werden?

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

Es gibt zwei Wege, das in dieser Aufgabe beschriebene Problem zu lösen:

- Fügen Sie dem Tierbeschreibungs-`<div>` ein `aria-live=""` Attribut hinzu, um es zu einem Live-Bereich zu machen, damit, wenn sich sein Inhalt ändert, der aktualisierte Inhalt von einem Bildschirmleser vorgelesen wird. Der beste Wert ist wahrscheinlich `assertive`, was den Bildschirmleser dazu bringt, den aktualisierten Inhalt sofort nach der Änderung vorzulesen. `polite` bedeutet, dass der Bildschirmleser wartet, bis andere Beschreibungen beendet sind, bevor er beginnt, den geänderten Inhalt vorzulesen.
- Fügen Sie dem Tierbeschreibungs-`<div>` ein `role="alert"` Attribut hinzu, um ihm die Semantik eines Alarmkastens zu geben. Dies hat denselben Effekt auf den Bildschirmleser wie das Setzen von `aria-live="assertive"` darauf.

</details>
