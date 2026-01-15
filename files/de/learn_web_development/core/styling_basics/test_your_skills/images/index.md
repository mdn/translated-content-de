---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
short-title: "Test: Bilder und Formulare"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: e65ede970984542672ab7f0d7fa1651a4ba7fc3a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist zu bewerten, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) nutzen, um uns zu erreichen.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das über den Rand des Kastens hinausragt. Wir möchten, dass das Bild verkleinert wird, um in den Kasten zu passen, ohne zusätzlichen weißen Raum, wobei es nicht schlimm ist, wenn ein Teil des Bildes abgeschnitten wird. Aktualisieren Sie das CSS, um dies zu erreichen.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("images-forms1-finish", "", "280px")}}

```html live-sample___images-forms1-start live-sample___images-forms1-finish
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___images-forms1-start live-sample___images-forms1-finish
.box {
  border: 5px solid black;
  width: 400px;
  height: 200px;
}

img {
  /* Add styles here */
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("images-forms1-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist in Ordnung, wenn einige Teile des Bildes abgeschnitten sind.
Die Verwendung von `object-fit: cover` ist die beste Wahl, Sie müssen auch die Breite und Höhe auf `100%` setzen:

```css live-sample___images-forms1-finish
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie ein einfaches Formular.

Um die Aufgabe abzuschließen:

1. Verwenden Sie Attributselektoren, um das Suchfeld und die Schaltfläche innerhalb von `.my-form` anzuvisieren.
2. Stellen Sie sicher, dass das Formelfeld und die Schaltfläche die gleiche Textgröße wie der Rest des Formulars haben.
3. Geben Sie dem Formelfeld und der Schaltfläche `10px` Abstand.
4. Verleihen Sie der Schaltfläche einen Hintergrund in `rebeccapurple`, weißen Vordergrund, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("images-forms2-finish", "", "80px")}}

```html live-sample___images-forms2-start live-sample___images-forms2-finish
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___images-forms2-start live-sample___images-forms2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid black;
  padding: 5px;
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("images-forms2-start", "", "80px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Hier ist eine Beispielösung für die Aufgabe:

```css live-sample___images-forms2-finish
.my-form {
  border: 2px solid black;
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

Die Lösung für diese Bewertung ist relativ frei gestaltet, und Sie haben viel Flexibilität bei dem, was Sie hier tun können. Daher bieten wir kein Beispiel-Rendering an.

Ihr CSS sollte Folgendes beinhalten:

1. Ein leichtes "Reset", um Schriftarten, Abstände, Ränder und Größen zu Beginn konsistenter zu machen, wie im [Normalisieren des Formularverhaltens](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior) beschrieben.
2. Eine schöne, konsistente Gestaltung für die Eingabefelder und die Schaltfläche.
3. Eine Layouttechnik, um die Eingabefelder und Labels ordentlich auszurichten.

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
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
  width: 500px;
}

/* Don't edit the code above here! */

/* Add your code here */
```

Dies ist der Ausgangszustand der Aufgabe:

{{ EmbedLiveSample("forms-2", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte in etwa so aussehen:

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
  border: 1px solid #cccccc;
  border-radius: 3px;
}

select {
  padding: 5px;
}

button {
  margin: 0 auto;
  padding: 5px 20px;
  line-height: 1.5;
  background: #eeeeee;
}

button:hover,
button:focus {
  background: #dddddd;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
