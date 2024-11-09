---
title: "Testen Sie Ihr Wissen: Hintergründe und Rahmen"
slug: Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{learnsidebar}}

Ziel dieses Kompetenztests ist es zu überprüfen, ob Sie das Thema [Hintergründe und Rahmen von Boxen in CSS](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Bei dieser Aufgabe möchten wir, dass Sie einem Seitenkopf einen Hintergrund, Rahmen und einige grundlegende Stile hinzufügen:

1. Geben Sie der Box einen 5px schwarzen soliden Rahmen mit abgerundeten Ecken von 10px.
2. Geben Sie dem `<h2>` einen halbtransparenten schwarzen Hintergrund und machen Sie den Text weiß.
3. Fügen Sie ein Hintergrundbild hinzu und passen Sie die Größe so an, dass es die Box abdeckt. Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Bild zeigt eine Box mit einem fotografischen Hintergrund, abgerundetem Rahmen und weißem Text auf einem halbtransparenten schwarzen Hintergrund.](backgrounds-task1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

In dieser Aufgabe möchten wir, dass Sie dekorativen Boxen Hintergrundbilder, einen Rahmen und weitere Stilelemente hinzufügen:

1. Geben Sie der Box eine 5px hellblaue Umrandung und runden Sie die obere linke Ecke auf 20px und die untere rechte Ecke auf 40px ab.

2. Die Überschrift verwendet das Bild `star.png` als Hintergrundbild, mit einem einzelnen zentrierten Stern auf der linken Seite und einem sich wiederholenden Muster von Sternen auf der rechten Seite. Sie können folgendes Bild verwenden:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Stellen Sie sicher, dass der Überschriftstext nicht über dem Bild liegt und dass er zentriert ist — Sie müssen Techniken anwenden, die Sie in früheren Lektionen gelernt haben, um dies zu erreichen.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Bild zeigt eine Box mit einem blauen Rahmen, der an den oberen linken und unteren rechten Ecken abgerundet ist. Auf der linken Seite des Textes ist ein einzelner Stern, rechts 3 Sterne.](backgrounds-task2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie müssen der Überschrift Padding hinzufügen, damit sie nicht das Sternbild überlagert - dies verweist zurück auf das Lernen aus der früheren [Box Modell Lektion](/de/docs/Learn/CSS/Building_blocks/The_box_model). Der Text sollte mit der Eigenschaft `text-align` ausgerichtet werden:

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

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
