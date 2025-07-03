---
title: "Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen"
short-title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie die [Hintergründe und Rahmen von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Klicken Sie auf **"Abspielen"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Symbol mit der Zwischenablage) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, einen Rahmen und einige grundlegende Stile hinzufügen:

1. Geben Sie der Box einen 5px schwarzen soliden Rahmen mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` einen halbtransparenten schwarzen Hintergrund und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie es so an, dass es die Box abdeckt. Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Das Bild zeigt eine Box mit einem Fotohintergrund, gerundetem Rand und weißem Text auf einem halbtransparenten schwarzen Hintergrund.](backgrounds-task1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

```html live-sample___backgrounds1
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds1
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
```

```css live-sample___backgrounds1
.box {
  /* Add styles here */
}

h2 {
  /* Add styles here */
}
```

{{EmbedLiveSample("backgrounds1", "", "200px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `border`, `border-radius`, `background-image` und `background-size` verwenden und verstehen, wie man RGB-Farben nutzt, um eine Hintergrundfarbe teilweise transparent zu machen:

```css
.box {
  border: 5px solid #000;
  border-radius: 10px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: #fff;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie dekorativen Boxen Hintergrundbilder, einen Rahmen und einige weitere Stile hinzufügen:

1. Geben Sie der Box einen 5px hellblauen Rahmen und runden Sie die obere linke Ecke 20px und die untere rechte Ecke 40px ab.

2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite.
   Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftstext nicht das Bild überlagert und zentriert ist — Sie müssen Techniken anwenden, die Sie in früheren Lektionen gelernt haben, um dies zu erreichen.

Ihr Endergebnis sollte wie das unten stehende Bild aussehen:

![Das Bild zeigt eine Box mit einem blauen Rahmen, der an den oberen linken und unteren rechten Ecken abgerundet ist. Links vom Text befindet sich ein einzelner Stern, rechts drei Sterne.](backgrounds-task2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

```html live-sample___backgrounds2
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds2
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  width: 300px;
  padding: 0.5em;
}
```

```css live-sample___backgrounds2
.box {
  /* Add styles here */
}

h2 {
  /* Add styles here */
}
```

{{EmbedLiveSample("backgrounds2", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen der Überschrift Padding hinzufügen, damit sie das Sternbild nicht überlagert - dies bezieht sich auf das Lernen aus der früheren [Box Model-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
Der Text sollte mit der Eigenschaft `text-align` ausgerichtet werden:

```css
.box {
  border: 5px solid lightblue;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 40px;
}

h2 {
  padding: 0 40px;
  text-align: center;
  background:
    url(https://mdn.github.io/shared-assets/images/examples/star.png) no-repeat
      left center,
    url(https://mdn.github.io/shared-assets/images/examples/star.png) repeat-y
      right center;
}
```

</details>

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
