---
title: "Testen Sie Ihre Fähigkeiten: Floats"
slug: Learn/CSS/CSS_layout/Floats_skills
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie [Floats in CSS](/de/docs/Learn/CSS/CSS_layout/Floats) mit den Eigenschaften und Werten {{CSSxRef("float")}} und {{CSSxRef("clear")}} sowie andere Methoden zum Beseitigen von Floats verstehen. Sie werden drei kleine Aufgaben durchgehen, die verschiedene Elemente des Materials nutzen, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrettsymbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie die beiden Elemente mit den Klassen `float1` und `float2` links bzw. rechts floaten lassen. Der Text sollte dann zwischen den beiden Boxen erscheinen, wie in dem Bild unten gezeigt:

![Zwei Blöcke, die links und rechts von etwas Text angezeigt werden.](float-task1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float1
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css hidden live-sample___float1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float1
.float1 {
}

.float2 {
}
```

{{EmbedLiveSample("float1", "", "210px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können `float` für beide Boxen verwenden:

```css
.float1 {
  float: left;
}

.float2 {
  float: right;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe soll das Element mit der Klasse `float` nach links gefloatet werden. Dann möchten wir, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Zeile (die die Klasse `below` hat) darunter angezeigt wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box, die links von einer Textzeile angezeigt wird, mit weiterem Text darunter.](float-task2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float2
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css hidden live-sample___float2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float2
.float {
}

.below {
}
```

{{EmbedLiveSample("float2", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen das Element nach links fließen lassen und dann `clear: left` zur Klasse für den zweiten Absatz hinzufügen:

```css
.float {
  float: left;
}

.below {
  clear: left;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe haben wir ein gefloatetes Element. Die Box, die den Float und den Text umschließt, wird hinter dem Float angezeigt. Verwenden Sie die modernste verfügbare Methode, um den Boxhintergrund so zu gestalten, dass er bis unter den Float reicht, wie im Bild unten gezeigt:

![Ein Block, der rechts von etwas Text angezeigt wird, beide umschlossen von einer Box mit Hintergrundfarbe.](float-task3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___float3
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css hidden live-sample___float3
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: #fff;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: #fff;
}
```

```css live-sample___float3
.float {
  float: right;
}

.box {
}
```

{{EmbedLiveSample("float3", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Räumen Sie die Box unter dem gefloateten Element auf, indem Sie `display: flow-root` zu der Klasse für `.box` hinzufügen.
Andere Methoden könnten die Verwendung von `overflow` oder eines clearfix-Hacks sein, jedoch wird in den Lernmaterialien die `flow-root` Methode als moderner Weg beschrieben, um dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>

## Siehe auch

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
