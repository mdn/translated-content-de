---
title: "Testen Sie Ihr Können: Overflow"
slug: Learn_web_development/Core/Styling_basics/Overflow_Tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Fähigkeits-Tests ist es festzustellen, ob Sie [Overflow in CSS und dessen Verwaltung](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrett-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe überläuft der Inhalt den Kasten, weil er eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass der Kasten nur dann Scrollleisten hat, wenn genügend Text vorhanden ist, um ein Overflow zu verursachen. Testen Sie, indem Sie etwas Text aus dem HTML entfernen, sodass, wenn nur wenig Text vorhanden ist, der nicht überläuft, keine Scrollleiste erscheint.

![Ein kleiner Kasten mit einem Rahmen und einer vertikalen Scrollleiste.](mdn-overflow1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie sollten `overflow: auto` hinzufügen, damit der Kasten nur Scrollleisten erhält, wenn der Inhalt zu groß ist:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kasten, das größer ist als die Abmessungen des Kastens, sodass es sichtbar überläuft. Ändern Sie es so, dass jedes Bild außerhalb des Kastens verborgen wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Kasten mit einem Bild, das den Kasten ausfüllt, aber nicht über die Ränder hinausläuft.](mdn-overflow2.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

- [CSS-Grundlagen der Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
