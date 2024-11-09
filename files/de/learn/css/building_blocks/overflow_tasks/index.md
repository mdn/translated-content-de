---
title: "Testen Sie Ihre Fähigkeiten: Überlauf"
slug: Learn/CSS/Building_blocks/Overflow_Tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie [Überlauf in CSS und dessen Verwaltung](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrett-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe läuft der Inhalt aus dem Kasten über, weil er eine feste Höhe hat. Behalten Sie die Höhe bei, aber sorgen Sie dafür, dass der Kasten nur dann Scrollbars hat, wenn genügend Text vorhanden ist, um einen Überlauf zu verursachen. Testen Sie, indem Sie etwas Text aus dem HTML entfernen, sodass, wenn nur eine kleine Menge Text vorhanden ist, die nicht überläuft, keine Scrollbar erscheint.

![Ein kleiner Kasten mit einem Rahmen und einer vertikalen Scrollbar.](mdn-overflow1.png)

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

Sie sollten `overflow: auto` hinzufügen, damit der Kasten Scrollbars nur bei zu großen Inhalten erhält:

```css
.box {
  overflow: auto;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe befindet sich ein Bild im Kasten, das größer als die Dimensionen des Kastens ist, sodass es sichtbar überläuft. Ändern Sie es so, dass jedes Bild außerhalb des Kastens ausgeblendet wird.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Kasten mit einem Bild, das den Kasten ausfüllt, aber nicht über die Ränder hinausragt.](mdn-overflow2.png)

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

- [CSS-Grundlagen](/de/docs/Learn/CSS/Building_blocks)
