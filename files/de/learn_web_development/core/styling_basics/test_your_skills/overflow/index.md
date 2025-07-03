---
title: "Testen Sie Ihre Fähigkeiten: Overflow"
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Tests ist es, zu beurteilen, ob Sie das [Overflow in CSS und dessen Handhabung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt aus der Box heraus, da sie eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass die Box nur dann Scrollleisten hat, wenn genügend Text vorhanden ist, um ein Overflow zu verursachen. Testen Sie es, indem Sie etwas Text aus dem HTML entfernen, sodass, wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, keine Scrollleiste erscheint.

![Eine kleine Box mit einem Rahmen und einer vertikalen Scrollleiste.](mdn-overflow1.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie sollten `overflow: auto` hinzufügen, sodass die Box nur dann Scrollleisten erhält, wenn der Inhalt zu groß ist:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild in der Box, das größer ist als die Abmessungen der Box, sodass es sichtbar überläuft. Ändern Sie es so, dass jedes außerhalb der Box befindliche Bild verborgen ist.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Eine Box mit einem Bild, das die Box ausfüllt, aber nicht über die Ränder hinausgeht.](mdn-overflow2.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

## Siehe auch

- [CSS-Stil-Basics](/de/docs/Learn_web_development/Core/Styling_basics)
