---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
slug: Learn/CSS/Building_blocks/Images_tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu prüfen, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements).

> [!NOTE]
> Klicken Sie unten in den Codeblöcken auf **„Play“**, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (Klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das aus der Box herausragt. Wir möchten, dass das Bild verkleinert wird, um in die Box zu passen, ohne zusätzlichen weißen Rand, aber es macht nichts, wenn ein Teil des Bildes abgeschnitten wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Bild in einer Box](mdn-images-object-fit.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden, sodass das Bild nicht aus der Box herausragt:

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid #000;
  width: 400px;
  height: 200px;
}

img {
  /* Add styles here */
}
```

{{EmbedLiveSample("object-fit", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist in Ordnung, wenn einige Teile des Bildes abgeschnitten sind.
Verwenden von `object-fit: cover` ist die beste Wahl, Sie müssen auch die Breite und Höhe auf `100%` setzen:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie ein einfaches Formular. Ihre Aufgabe ist es, die folgenden Änderungen vorzunehmen:

- Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` anzusprechen.
- Stellen Sie sicher, dass das Formularfeld und der Button die gleiche Textgröße wie der Rest des Formulars verwenden.
- Geben Sie dem Formularfeld und dem Button 10px Padding.
- Geben Sie dem Button einen Hintergrund von `rebeccapurple`, eine weiße Vordergrundfarbe, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein einzeiliges Formular](mdn-images-form.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___form
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___form
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid #000;
  padding: 5px;
}
```

{{EmbedLiveSample("form")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Hier ist eine Beispiel-Lösung für die Aufgabe:

```css
.my-form {
  border: 2px solid #000;
  padding: 5px;
}

.my-form input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.my-form input[type="submit"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>

## Siehe auch

- [CSS Bausteine](/de/docs/Learn/CSS/Building_blocks)
