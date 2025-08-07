---
title: "Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen"
short-title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Hintergründe und Rahmen von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, einen Rahmen und einige grundlegende Stile hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen schwarzen festen Rahmen von 5px mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` eine halbtransparente schwarze Hintergrundfarbe und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie die Größe so an, dass es die Box abdeckt. Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Das Bild zeigt eine Box mit einem Fotohintergrund, einem abgerundeten Rahmen und weißem Text auf einem halbtransparenten schwarzen Hintergrund.](backgrounds-task1.png)

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

Sie sollten `border`, `border-radius`, `background-image` und `background-size` verwenden und verstehen, wie man RGB-Farben nutzt, um eine Hintergrundfarbe teilweise transparent zu machen:

```css
.box {
  border: 5px solid black;
  border-radius: 10px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: white;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie dekorativen Boxen Hintergrundbilder, einen Rahmen und einige weitere Stile hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen himmelblauen Rahmen von 5px und runden Sie die obere linke Ecke auf 20px und die untere rechte Ecke auf 40px ab.
2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite.
   Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftentext das Bild nicht überlagert und zentriert ist – Sie müssen Techniken verwenden, die Sie in vorherigen Lektionen gelernt haben, um dies zu erreichen.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Das Bild zeigt eine Box mit einem blauen Rahmen, der an der oberen linken und unteren rechten Ecke abgerundet ist. Links vom Text befindet sich ein einzelner Stern, rechts drei Sterne.](backgrounds-task2.png)

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

Sie müssen Padding zur Überschrift hinzufügen, damit es das Sternenbild nicht überlagert - dies bezieht sich auf das Lernen aus der früheren [Boxmodell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model). Der Text sollte mit der Eigenschaft `text-align` ausgerichtet werden:

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
