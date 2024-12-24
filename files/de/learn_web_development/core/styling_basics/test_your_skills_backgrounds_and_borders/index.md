---
title: "Testen Sie Ihre Fähigkeiten: Hintergründe und Ränder"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie die [Hintergründe und Ränder von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Code-Blöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, einen Rand und einige grundlegende Stile hinzufügen:

1. Geben Sie der Box einen 5px schwarzen durchgezogenen Rand mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` eine halbtransparente schwarze Hintergrundfarbe und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie es so an, dass es die Box abdeckt. Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Das Bild zeigt eine Box mit einem Fotohintergrund, einem abgerundeten Rand und weißem Text auf einem halbtransparenten schwarzen Hintergrund.](backgrounds-task1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie sollten `border`, `border-radius`, `background-image` und `background-size` verwenden und verstehen, wie man RGB-Farben verwendet, um eine Hintergrundfarbe teilweise transparent zu machen:

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

In dieser Aufgabe möchten wir, dass Sie Hintergrundbilder, einen Rahmen und einige andere Stile zu einer dekorativen Box hinzufügen:

1. Geben Sie der Box einen 5px hellblauen Rand und runden Sie die obere linke Ecke mit 20px und die untere rechte Ecke mit 40px ab.

2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern links und einem sich wiederholenden Muster von Sternen rechts.
   Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftentext nicht das Bild überlagert und dass er zentriert ist — Sie müssen Techniken verwenden, die in den vorherigen Lektionen gelernt wurden, um dies zu erreichen.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Das Bild zeigt eine Box mit einem blauen Rand, der an der oberen linken und unteren rechten Ecke abgerundet ist. Links vom Text ist ein einzelner Stern, rechts drei Sterne.](backgrounds-task2.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie müssen der Überschrift Padding hinzufügen, damit sie das Sternbild nicht überlagert - dies bezieht sich zurück auf das Lernen aus der [Boxmodell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
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