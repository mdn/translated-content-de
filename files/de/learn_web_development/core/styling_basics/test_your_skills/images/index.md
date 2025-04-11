---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
short-title: Bilder und Formulare
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das über den Rahmen hinausgeht. Wir möchten, dass das Bild verkleinert wird, um in den Rahmen zu passen, ohne zusätzlichen weißen Raum, aber es macht uns nichts aus, wenn ein Teil des Bildes beschnitten wird.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Bild in einem Rahmen](mdn-images-object-fit.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel so zu rekonstruieren, dass das Bild nicht über den Rahmen hinausgeht:

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

Es ist in Ordnung, wenn einige Teile des Bildes beschnitten werden.
Die Verwendung von `object-fit: cover` ist die beste Wahl, Sie müssen auch die Breite und Höhe auf `100%` setzen:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie ein grundlegendes Formular. Ihre Aufgabe ist es, folgende Änderungen vorzunehmen:

- Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` zu selektieren.
- Stellen Sie sicher, dass das Formularfeld und der Button die gleiche Textgröße wie der Rest des Formulars verwenden.
- Geben Sie dem Formularfeld und dem Button 10px Padding.
- Geben Sie dem Button einen Hintergrund in `rebeccapurple`, ein weißes Vordergrund, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein einzeiliges Formular](mdn-images-form.png)

Versuchen Sie, den folgenden Code zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

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

Hier ist ein Beispiel für die Lösung der Aufgabe:

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

- [Grundlagen der CSS-Stilgebung](/de/docs/Learn_web_development/Core/Styling_basics)
