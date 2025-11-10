---
title: "Testen Sie Ihre Fähigkeiten: Overflow"
short-title: "Test: Overflow"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: 001a6992ec60f0dccd073a3db223c320835188ad
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Overflow in CSS und wie man damit umgeht](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt über den Rand der Box hinaus, da sie eine feste Höhe hat.

Um die Aufgabe abzuschließen:

1. Aktualisieren Sie das CSS so, dass die Höhe beibehalten wird und die Box nur dann Scrollleisten hat, wenn genügend Text vorhanden ist, um ein Überlaufen zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie etwas Text aus dem HTML entfernen und überprüfen, ob, wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, keine Scrollleiste erscheint.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Eine kleine Box mit einem Rahmen und einem vertikalen Scrollbalken.](mdn-overflow1.png)

```html live-sample___overflow-scroll
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

```css live-sample___overflow-scroll
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

{{EmbedLiveSample("overflow-scroll", "", "450px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: auto` hinzufügen, damit die Box nur dann Scrollleisten erhält, wenn der Inhalt zu groß ist:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild in der Box, das größer als die Abmessungen der Box ist, sodass es sichtbar überläuft. Aktualisieren Sie das CSS so, dass jedes Bild außerhalb der Box ausgeblendet wird.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Eine Box mit einem Bild, das die Box ausfüllt, aber nicht über die Ränder hinausragt.](mdn-overflow2.png)

```html live-sample___overflow-hidden
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow-hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

{{EmbedLiveSample("overflow-hidden", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `overflow: hidden` zum `.box`-Selektor hinzufügen:

```css
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
