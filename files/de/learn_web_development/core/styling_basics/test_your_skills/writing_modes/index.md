---
title: "Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften"
short-title: Writing modes
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Writing_modes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [verschiedene Textausrichtungen mit Schreibmodi und logischen Eigenschaften in CSS handhabt](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe wird das Feld mit einem horizontalen Schreibmodus angezeigt. Können Sie eine Zeile CSS hinzufügen, um es so zu ändern, dass es einen vertikalen Schreibmodus mit Text von rechts nach links verwendet?

Das Endergebnis sollte wie das Bild unten aussehen:

![Ein Feld mit einem vertikalen Schreibmodus](mdn-writing-modes1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie sollten die Eigenschaft `writing-mode` mit dem Wert `vertical-rl` für vertikalen Script von rechts nach links verwenden:

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

In dieser Aufgabe möchten wir, dass Sie logische Eigenschaften verwenden, um `width` und `height` zu ersetzen, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Feldes beizubehalten, wenn es vertikal gedreht wird.

Das Endergebnis sollte wie das Bild unten aussehen:

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

Zusätzlich zur Festlegung von `writing-mode: vertical-rl` auf der `.vertical`-Box müssen Sie die Eigenschaften `inline-size` und `block-size` anwenden, um `width` und `height` zu ersetzen:

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

In dieser Aufgabe möchten wir, dass Sie logische Versionen der Eigenschaften für Rand, Rahmen und Abstände verwenden, sodass sich die Kanten der Box auf den Text beziehen, anstatt den oberen, linken, unteren und rechten zu folgen.

Das Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen, eine horizontal, eine vertikal mit unterschiedlichem Rand, Rahmen und Abstand](mdn-writing-modes3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Um dies zu lösen, benötigen Sie ein Verständnis für die logischen, flussrelativen Zuordnungen der physischen Eigenschaften von Rand, Rahmen und Abstand:

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

- [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
