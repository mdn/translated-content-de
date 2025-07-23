---
title: "Testen Sie Ihre Fähigkeiten: Hintergründe und Ränder"
short-title: Hintergründe und Ränder
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie die [Hintergründe und Ränder von Boxen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einem Seitenheader einen Hintergrund, einen Rand und einige grundlegende Stile hinzufügen.

Um die Aufgabe zu erfüllen:

1. Geben Sie der Box einen 5px breiten schwarzen durchgezogenen Rand mit abgerundeten Ecken von 10px.
2. Versehen Sie das `<h2>` mit einer halbtransparenten schwarzen Hintergrundfarbe und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und skalieren Sie es so, dass es die Box abdeckt. Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

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

In dieser Aufgabe möchten wir, dass Sie dekorativen Boxen Hintergrundbilder, einen Rand und einige andere Stile hinzufügen.

Um die Aufgabe zu erfüllen:

1. Geben Sie der Box einen 5px breiten hellblauen Rand und runden Sie die obere linke Ecke 20px und die untere rechte Ecke 40px ab.
2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern links und einem sich wiederholenden Muster von Sternen rechts.
   Sie können das folgende Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftstext das Bild nicht überlagert und zentriert ist — Sie müssen Techniken anwenden, die Sie in früheren Lektionen gelernt haben, um dies zu erreichen.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Das Bild zeigt eine Box mit einem blauen Rand, der an der oberen linken und unteren rechten Ecke abgerundet ist. Links vom Text ist ein einzelner Stern, rechts drei Sterne.](backgrounds-task2.png)

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

Sie müssen der Überschrift ein Padding hinzufügen, damit sie das Sternbild nicht überlagert – dies bezieht sich auf das Lernen aus der früheren [Box-Modell Lektion](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).
Der Text sollte mit der `text-align` Eigenschaft ausgerichtet werden:

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
