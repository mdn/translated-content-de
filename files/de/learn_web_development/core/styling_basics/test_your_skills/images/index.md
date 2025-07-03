---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
short-title: Bilder und Formulare
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Symbol "Zwischenablage") und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das aus der Box herausragt. Wir möchten, dass das Bild verkleinert wird, um in die Box zu passen, ohne zusätzlichen weißen Raum, aber es ist nicht schlimm, wenn Teile des Bildes beschnitten werden.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Bild in einer Box](mdn-images-object-fit.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzustellen, sodass das Bild nicht mehr aus der Box herausragt:

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

Es ist in Ordnung, wenn Teile des Bildes beschnitten werden.
Die Verwendung von `object-fit: cover` ist die beste Wahl, zudem müssen Sie die Breite und Höhe auf `100%` setzen:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie ein einfaches Formular. Ihre Aufgabe besteht darin, die folgenden Änderungen vorzunehmen:

- Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` anzusprechen.
- Stellen Sie sicher, dass das Formularfeld und der Button dieselbe Textgröße wie der Rest des Formulars verwenden.
- Geben Sie dem Formularfeld und dem Button 10px Padding.
- Geben Sie dem Button einen Hintergrund in `rebeccapurple`, eine weiße Vordergrundfarbe, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein einzeiliges Formular](mdn-images-form.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzustellen:

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

- [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
