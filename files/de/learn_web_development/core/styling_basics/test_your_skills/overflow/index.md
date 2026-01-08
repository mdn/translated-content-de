---
title: "Testen Sie Ihr Wissen: Überlauf"
short-title: "Test: Überlauf"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: e41d9c0db0af9716dbdcc2e04a779d03cea3e3bd
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Tests ist es, Ihnen zu helfen, zu bewerten, ob Sie das [Überlaufverhalten in CSS und dessen Verwaltung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt aus dem Kasten heraus, da er eine feste Höhe hat.

Um die Aufgabe abzuschließen:

1. Aktualisieren Sie das CSS, so dass die Höhe beibehalten wird und der Kasten nur dann Scrollbalken hat, wenn genug Text vorhanden ist, um einen Überlauf zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie etwas Text aus dem HTML entfernen und prüfen, dass, wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, kein Scrollbalken erscheint.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("overflow1-finish", "", "450px")}}

```html live-sample___overflow1-start live-sample___overflow1-finish
<div class="box">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___overflow1-start live-sample___overflow1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  border: 5px solid black;
  padding: 1em;
  height: 200px;
  width: 300px;
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("overflow1-start", "", "450px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: auto` hinzufügen, damit der Kasten nur dann Scrollbalken erhält, wenn der Inhalt zu groß ist:

```css live-sample___overflow1-finish
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kasten, das größer ist als die Abmessungen des Kastens und dadurch sichtbar überläuft. Aktualisieren Sie das CSS, sodass jedes Bild außerhalb des Kastens ausgeblendet wird.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("overflow2-finish", "", "300px")}}

```html live-sample___overflow2-start live-sample___overflow2-finish
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow2-start live-sample___overflow2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("overflow2-start", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: hidden` zum `.box`-Selektor hinzufügen:

```css live-sample___overflow2-finish
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
