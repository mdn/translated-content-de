---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
slug: Learn_web_development/Core/Styling_basics/Images_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das über den Rahmen hinausragt. Wir möchten, dass das Bild verkleinert wird, um in den Rahmen zu passen, ohne zusätzlichen weißen Raum, aber es ist nicht schlimm, wenn ein Teil des Bildes beschnitten wird.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Bild in einem Kasten](mdn-images-object-fit.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden, sodass das Bild nicht über den Rahmen hinausragt:

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
`object-fit: cover` ist die beste Wahl, Sie müssen auch Breite und Höhe auf `100%` setzen:

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

- Verwenden Sie Attribut-Selektoren, um das Suchfeld und die Schaltfläche innerhalb von `.my-form` zu targetieren.
- Stellen Sie sicher, dass das Formularfeld und die Schaltfläche die gleiche Textgröße wie der Rest des Formulars verwenden.
- Geben Sie dem Formularfeld und der Schaltfläche 10px Polsterung.
- Geben Sie der Schaltfläche einen Hintergrund in `rebeccapurple`, weiße Vordergrundfarbe, keinen Rand und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Einzeiliges Formular](mdn-images-form.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

- [CSS Stilgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
