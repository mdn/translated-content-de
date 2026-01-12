---
title: "Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen"
short-title: "Test: Hintergründe und Rahmen"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 776c228e7ae9ccdf4874a94d60193ebc48bbec05
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu bewerten, ob Sie die [Hintergründe und Rahmen von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, einen Rahmen und einige grundlegende Stile hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen schwarzen, 5px breiten, durchgehenden Rahmen mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` einen halbtransparenten schwarzen Hintergrund und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie die Größe so an, dass es die Box abdeckt. Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte der folgenden Darstellung entsprechen:

{{EmbedLiveSample("backgrounds1-finish", "", "200px")}}

```html live-sample___backgrounds1-start live-sample___backgrounds1-finish
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css live-sample___backgrounds1-start live-sample___backgrounds1-finish
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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("backgrounds1-start", "", "200px")}}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Sie sollten `border`, `border-radius`, `background-image` und `background-size` verwenden und verstehen, wie man RGB-Farben verwendet, um eine Hintergrundfarbe teilweise transparent zu machen:

```css live-sample___backgrounds1-finish
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

In dieser Aufgabe möchten wir, dass Sie dekorativen Boxen Hintergrundbilder, einen Rahmen und einige andere Stile hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen hellblauen, 5px breiten Rahmen, und runden Sie die obere linke Ecke mit 20px und die untere rechte Ecke mit 40px ab.
2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite.
   Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftentext nicht über dem Bild liegt und dass er zentriert ist – Sie müssen Techniken verwenden, die in früheren Lektionen gelernt wurden, um dies zu erreichen.

Ihr Endergebnis sollte der folgenden Darstellung entsprechen:

{{EmbedLiveSample("backgrounds2-finish", "", "220px")}}

```html live-sample___backgrounds2-start live-sample___backgrounds2-finish
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css live-sample___backgrounds2-start live-sample___backgrounds2-finish
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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("backgrounds2-start", "", "220px")}}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Sie müssen der Überschrift ein Padding hinzufügen, damit sie nicht über dem Sternenbild liegt - das bezieht sich auf das Lernen aus dem früheren [Box-Modell-Leitfaden](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
Der Text sollte mit der `text-align`-Eigenschaft ausgerichtet werden:

```css live-sample___backgrounds2-finish
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

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
