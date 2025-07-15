---
title: "Testen Sie Ihr Wissen: Bilder und Formularelemente"
short-title: Bilder und Formulare
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

Das Ziel dieses Fähigkeitstests ist es, zu bewerten, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Klicken Sie auf **"Play"** in den folgenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Symbol des Ablagebretts) und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das aus dem Kasten herausragt. Wir möchten, dass das Bild verkleinert wird, um in den Kasten zu passen, ohne zusätzlichen weißen Raum, aber es macht uns nichts aus, wenn Teile des Bildes abgeschnitten werden.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Bild in einem Kasten](mdn-images-object-fit.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel so nachzubilden, dass das Bild nicht aus dem Kasten herausragt:

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

Es ist in Ordnung, wenn einige Teile des Bildes abgeschnitten werden.
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

In dieser Aufgabe haben Sie ein einfaches Formular. Ihre Aufgabe ist es, die folgenden Änderungen vorzunehmen:

- Verwenden Sie Attributselektoren, um das Suchfeld und die Schaltfläche innerhalb von `.my-form` anzusprechen.
- Sorgen Sie dafür, dass das Formularfeld und die Schaltfläche die gleiche Textgröße wie der Rest des Formulars verwenden.
- Geben Sie dem Formularfeld und der Schaltfläche 10px Abstand (Padding).
- Geben Sie der Schaltfläche einen Hintergrund von `rebeccapurple`, weiße Schriftfarbe, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein einzeiliges Formular](mdn-images-form.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___forms-1
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___forms-1
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid #000;
  padding: 5px;
}
```

{{EmbedLiveSample("forms-1")}}

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

## Aufgabe 3

Unsere zweite Bewertung der Formularstilierung ist ziemlich frei und Sie haben viel Flexibilität bei der Ausführung. Ihr CSS muss die unten beschriebenen Anforderungen erfüllen.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine Art leichtgewichtigen "Reset" hinzu, um Schriften, Abstände, Ränder und Größen konsistenter zu machen, wie im [Normalisieren des Formularverhaltens](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior) beschrieben.
3. Fügen Sie darauf aufbauend eine schöne, konsistente Gestaltung für die Eingabefelder und die Schaltfläche hinzu.
4. Verwenden Sie eine Art Layouttechnik, um die Eingabefelder und Labels sauber auszurichten.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/styling-basics/styling-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Live-Ausgang anzeigen.

```html hidden live-sample___forms-2
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </li>
    <li>
      <label for="website">Website:</label>
      <input type="url" id="website" name="website" />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" />
    </li>
    <li>
      <label for="food">Favorite food:</label>
      <select name="food" id="food">
        <option>Salad</option>
        <option>Curry</option>
        <option>Pizza</option>
        <option>Fajitas</option>
      </select>
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

```css live-sample___forms-2
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
  width: 500px;
}

/* Don't edit the code above here! */

/* Add your code here */
```

{{ EmbedLiveSample("forms-2", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte ungefähr so aussehen:

```css
/* ... */
/* Don't edit the code above here! */

button,
input,
select {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li:last-of-type {
  margin-top: 30px;
}

label {
  flex: 0 40%;
  text-align: right;
  padding-right: 10px;
}

input,
select {
  flex: auto;
  height: 2em;
}

input,
select,
button {
  display: block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

select {
  padding: 5px;
}

button {
  margin: 0 auto;
  padding: 5px 20px;
  line-height: 1.5;
  background: #eee;
}

button:hover,
button:focus {
  background: #ddd;
}
```

</details>
