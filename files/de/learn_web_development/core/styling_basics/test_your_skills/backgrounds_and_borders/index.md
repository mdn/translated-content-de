---
title: "Testen Sie Ihr Wissen: Hintergründe und Ränder"
short-title: Hintergründe und Ränder
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu überprüfen, ob Sie die [Hintergründe und Ränder von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von "Testen Sie Ihr Wissen"](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über eine unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, einen Rand und einige Basisstile hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen 5px schwarzen, durchgezogenen Rand mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` eine halbtransparente schwarze Hintergrundfarbe und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie es so an, dass es die Box abdeckt. Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Das Bild zeigt eine Box mit einem Foto-Hintergrund, abgerundetem Rand und weißem Text auf einem halbtransparenten schwarzen Hintergrund.](backgrounds-task1.png)

```html live-sample___backgrounds1
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css live-sample___backgrounds1
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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: #fff;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie einem dekorativen Kasten Hintergrundbilder, einen Rand und einige andere Stilmittel hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen 5px hellblauen Rand und runden Sie die obere linke Ecke mit 20px und die untere rechte Ecke mit 40px ab.
2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite.
   Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftstext das Bild nicht überlagert und zentriert ist — Sie müssen Techniken anwenden, die Sie in vorherigen Lektionen gelernt haben, um dies zu erreichen.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Das Bild zeigt eine Box mit einem blauen Rand, der an den oberen linken und unteren rechten Ecken abgerundet ist. Links vom Text befindet sich ein einzelner Stern, rechts drei Sterne.](backgrounds-task2.png)

```html live-sample___backgrounds2
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css live-sample___backgrounds2
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

Sie müssen der Überschrift einen Abstand hinzufügen, damit sie das Sternbild nicht überlagert - dies verweist auf das Lernen aus der früheren [Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
Der Text sollte mit der `text-align`-Eigenschaft ausgerichtet sein:

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
    url("https://mdn.github.io/shared-assets/images/examples/star.png")
      no-repeat left center,
    url("https://mdn.github.io/shared-assets/images/examples/star.png") repeat-y
      right center;
}
```

</details>
