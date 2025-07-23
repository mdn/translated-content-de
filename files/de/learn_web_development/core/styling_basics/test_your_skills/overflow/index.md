---
title: "Testen Sie Ihre Fähigkeiten: Überlauf"
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie [Overflow in CSS und dessen Verwaltung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von "Testen Sie Ihre Fähigkeiten"](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt aus dem Kasten heraus, weil er eine feste Höhe hat.

Um die Aufgabe abzuschließen:

1. Aktualisieren Sie das CSS so, dass die Höhe beibehalten wird und der Kasten nur Scrollleisten hat, wenn genügend Text vorhanden ist, um einen Überlauf zu verursachen.
2. Testen Sie Ihre Lösung, indem Sie einige der Texte aus dem HTML entfernen und überprüfen, dass keine Scrollleiste erscheint, wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft.

Ihr finales Ergebnis sollte wie das Bild unten aussehen:

![Ein kleiner Kasten mit einem Rahmen und einer vertikalen Scrollleiste.](mdn-overflow1.png)

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Sie sollten `overflow: auto` hinzufügen, sodass der Kasten nur dann Scrollleisten erhält, wenn der Inhalt zu groß ist:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kasten, das größer als die Abmessungen des Kastens ist, sodass es sichtbar überläuft. Aktualisieren Sie das CSS so, dass jedes Bild außerhalb des Kastens verborgen wird.

Ihr finales Ergebnis sollte wie das Bild unten aussehen:

![Ein Kasten mit einem Bild, das den Kasten ausfüllt, aber nicht über die Ränder hinausläuft.](mdn-overflow2.png)

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Sie sollten `overflow: hidden` zum `.box`-Selektor hinzufügen:

```css
.box {
  overflow: hidden;
}
```

</details>
