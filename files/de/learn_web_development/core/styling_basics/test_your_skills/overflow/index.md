---
title: "Testen Sie Ihre Fähigkeiten: Überlauf"
short-title: "Test: Überlauf"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: d0be159e6119ff73453bea6d224f0a2056307aa4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie [Überlauf in CSS und dessen Verwaltung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe überläuft der Inhalt die Box, weil sie eine feste Höhe hat.

Um die Aufgabe abzuschließen:

1. Aktualisieren Sie das CSS so, dass die Höhe beibehalten wird und die Box nur dann Scrollbalken hat, wenn genügend Text vorhanden ist, um einen Überlauf zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie einen Teil des Textes aus dem HTML entfernen und überprüfen, ob bei nur einer kleinen Menge Text, die nicht überläuft, kein Scrollbalken erscheint.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("overflow1-finish", "", "300px")}}

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

Sie sollten `overflow: auto` hinzufügen, damit die Box nur dann Scrollbalken erhält, wenn der Inhalt zu groß ist:

```css live-sample___overflow1-finish
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe gibt es ein Bild in der Box, das größer als die Dimensionen der Box ist, sodass es sichtbar überläuft. Aktualisieren Sie das CSS so, dass jedes Bild außerhalb der Box verborgen wird.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("overflow2-finish", "", "260px")}}

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

{{EmbedLiveSample("overflow2-start", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: hidden` dem `.box`-Selektor hinzufügen:

```css live-sample___overflow2-finish
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
