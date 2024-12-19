---
title: "Testen Sie Ihre Fähigkeiten: Floats"
slug: Learn_web_development/Core/CSS_layout/Floats_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie [Floats in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Floats) verstehen, indem Sie die {{CSSxRef("float")}}- und {{CSSxRef("clear")}}-Eigenschaften und -Werte sowie andere Methoden zur Bereinigung von Floats verwenden. Sie werden drei kleine Aufgaben durcharbeiten, die verschiedene Elemente des Materials nutzen, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrett-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe müssen Sie die beiden Elemente mit der Klasse `float1` und `float2` links und rechts anordnen. Der Text sollte dann zwischen den beiden Boxen erscheinen, wie im folgenden Bild:

![Zwei Blöcke, die links und rechts von einem Text angezeigt werden.](float-task1.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

In dieser Aufgabe soll das Element mit der Klasse `float` nach links fließen. Dann möchten wir, dass die erste Textzeile neben diesem Element angezeigt wird, aber die folgende Textzeile (die die Klasse `below` hat) darunter angezeigt wird.

Ihr endgültiges Ergebnis sollte wie im folgenden Bild aussehen:

![Eine Box, die links von einer Textzeile angezeigt wird, mit etwas mehr Text darunter.](float-task2.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Sie müssen das Element links anordnen und dann `clear: left` zur Klasse für den zweiten Absatz hinzufügen:

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

In dieser Aufgabe haben wir ein schwebendes Element. Der Kasten, der das Float und den Text umschließt, wird hinter dem Float angezeigt. Verwenden Sie die aktuellste verfügbare Methode, um den Hintergrund des Kastens so zu erweitern, dass er unter das Float reicht, wie im Bild unten:

![Ein Block wird rechts von einem Text angezeigt, beide von einem Kasten mit Hintergrundfarbe umgeben.](float-task3.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Bereinigen Sie den Kasten unter dem schwebenden Element, indem Sie `display: flow-root` zur Klasse für `.box` hinzufügen. Andere Methoden könnten die Verwendung von `overflow` oder ein clearfix-Hack sein, jedoch beschreiben die Lernmaterialien die `flow-root`-Methode als modernen Weg, um dies zu erreichen.

```css
.box {
  display: flow-root;
}
```

</details>

## Siehe auch

- [CSS-Grundlagen zum Styling](/de/docs/Learn_web_development/Core/Styling_basics)
