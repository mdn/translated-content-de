---
title: "Testen Sie Ihre Fähigkeiten: Schreibrichtungen und logische Eigenschaften"
slug: Learn/CSS/Building_blocks/Writing_Modes_Tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [verschiedene Schreibrichtungen mit Schreibrichtungen und logischen Eigenschaften in CSS handhabt](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe wird die Box mit einer horizontalen Schreibrichtung dargestellt. Können Sie eine Zeile CSS hinzufügen, um sie so zu ändern, dass sie eine vertikale Schreibrichtung mit rechts-nach-links-Text verwendet?

Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einer vertikalen Schreibrichtung](mdn-writing-modes1.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___writing-mode
<div class="box">Turn me on my side.</div>
```

```css hidden live-sample___writing-mode
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___writing-mode
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
}
```

{{EmbedLiveSample("writing-mode", "", "250px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten die Eigenschaft `writing-mode` mit dem Wert `vertical-rl` für vertikales rechts-nach-links-Skript verwenden:

```css
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  writing-mode: vertical-rl;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe sollen Sie logische Eigenschaften verwenden, um `width` und `height` zu ersetzen, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Box beizubehalten, während sie vertikal gedreht wird.

Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen, eine horizontal, die andere vertikal](mdn-writing-modes2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___logical-width-height
<div class="box">Horizontal.</div>
<div class="box vertical">Vertical.</div>
```

```css hidden live-sample___logical-width-height
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___logical-width-height
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("logical-width-height", "", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Zusätzlich zur Einstellung von `writing-mode: vertical-rl` auf der `.vertical` Box, müssen Sie die Eigenschaften `inline-size` und `block-size` anwenden, um `width` und `height` zu ersetzen:

```css
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  inline-size: 200px;
  block-size: 100px;
}
.vertical {
  writing-mode: vertical-rl;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe sollen Sie logische Versionen der `margin`, `border` und `padding` Eigenschaften verwenden, so dass sich die Ränder der Box auf den Text beziehen und nicht auf oben, links, unten und rechts.

Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen, eine horizontal, eine vertikal mit unterschiedlichen Margin-, Border- und Padding-Einstellungen](mdn-writing-modes3.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___logical-mbp
<div class="box">Horizontal.</div>
<div class="box vertical">Vertical.</div>
```

```css hidden live-sample___logical-mbp
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css hidden live-sample___logical-mbp
.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___logical-mbp
.box {
  width: 150px;
  height: 150px;
  border-top: 5px solid rebeccapurple;
  border-right: 5px solid grey;
  border-bottom: 5px dotted red;
  border-left: 5px dotted blue;
  padding-top: 40px;
  margin-bottom: 30px;
}
```

{{EmbedLiveSample("logical-mbp", "", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Um dies zu lösen, benötigen Sie ein Verständnis der logischen, flussbezogenen Zuordnungen für physische `margin`, `border` und `padding` Eigenschaften:

```css
.box {
  width: 150px;
  height: 150px;
  border-block-start: 5px solid rebeccapurple;
  border-inline-end: 5px solid grey;
  border-block-end: 5px dotted red;
  border-inline-start: 5px dotted blue;
  padding-block-start: 40px;
  margin-block-end: 30px;
}
```

</details>

## Siehe auch

- [CSS-Grundbausteine](/de/docs/Learn/CSS/Building_blocks)
