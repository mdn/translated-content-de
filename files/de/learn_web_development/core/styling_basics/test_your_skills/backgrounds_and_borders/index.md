---
title: "Testen Sie Ihr Können: Hintergründe und Rahmen"
short-title: "Test: Hintergründe und Rahmen"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Tests ist es, Ihnen zu helfen zu beurteilen, ob Sie die [Hintergründe und Rahmen von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Hintergründe und Rahmen 1

In dieser Aufgabe möchten wir, dass Sie ein Hintergrund, einen Rahmen und einige grundlegende Stile zu einem Seitenkopf hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen 5px schwarzen, festen Rahmen mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` einen halbtransparenten schwarzen Hintergrund und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie es so an, dass es die Box abdeckt. Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("backgrounds1-start", "", "160px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("backgrounds1-finish", "", "160px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie sollten `border`, `border-radius`, `background-image` und `background-size` verwenden und verstehen, wie Sie RGB-Farben verwenden, um eine Hintergrundfarbe teilweise transparent zu machen:

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

## Hintergründe und Rahmen 2

In dieser Aufgabe möchten wir, dass Sie Hintergrundbilder, einen Rahmen und einige andere Stile zu einer dekorativen Box hinzufügen.

Um die Aufgabe abzuschließen:

1. Geben Sie der Box einen 5px hellblauen Rahmen und runden Sie die obere linke Ecke 20px und die untere rechte Ecke 40px.
2. Der Titel verwendet das `star.png` Bild als Hintergrundbild mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite.
   Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Titeltext nicht über dem Bild liegt und zentriert ist — Sie müssen Techniken anwenden, die Sie in früheren Lektionen gelernt haben, um dies zu erreichen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("backgrounds2-start", "", "200px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("backgrounds2-finish", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen dem Titel Padding hinzufügen, damit er nicht über dem Sternbild liegt - dies bezieht sich auf das Lernen aus der vorherigen [Box-Modell-Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
Der Text sollte mit der `text-align` Eigenschaft ausgerichtet werden:

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
