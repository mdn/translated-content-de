---
title: "Testen Sie Ihr Können: Überlauf"
short-title: "Test: Überlauf"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Überlauf in CSS und wie man ihn verwaltet](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihr Können](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt über das Kästchen hinaus, da es eine feste Höhe hat.

Um die Aufgabe abzuschließen:

1. Aktualisieren Sie das CSS so, dass die Höhe beibehalten wird und das Kästchen nur dann Bildlaufleisten hat, wenn genug Text vorhanden ist, um einen Überlauf zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie einige der Texte aus dem HTML entfernen und überprüfen, ob, wenn nur eine kleine Menge an Text vorhanden ist, die nicht überläuft, keine Bildlaufleiste erscheint.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Ein kleines Kästchen mit einem Rahmen und einer vertikalen Bildlaufleiste.](mdn-overflow1.png)

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

Sie sollten `overflow: auto` hinzufügen, damit das Kästchen nur dann Bildlaufleisten erhält, wenn der Inhalt zu groß ist:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kästchen, das größer als die Abmessungen des Kästchens ist, sodass es sichtbar überläuft. Aktualisieren Sie das CSS, sodass jedes Bild außerhalb des Kästchens verborgen wird.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Ein Kästchen mit einem Bild, das das Kästchen ausfüllt, aber nicht über die Ränder hinausläuft.](mdn-overflow2.png)

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

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
