---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
short-title: "Test: Bilder und Formularelemente"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

Mit diesem Fähigkeitstest können Sie überprüfen, ob Sie verstehen, wie besondere Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren Leitfaden zur Verwendung von [„Testen Sie Ihre Fähigkeiten“](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Bilder und Formularelemente 1

In dieser Aufgabe ragt ein Bild über seine Box hinaus. Skalieren Sie das Bild so, dass es ohne zusätzlichen Leerraum in die Box passt. Es ist in Ordnung, wenn dabei ein Teil des Bildes abgeschnitten wird. Passen Sie dazu das CSS an.

Der Ausgangszustand sieht so aus:

{{EmbedLiveSample("images-forms1-start", "", "260px")}}

Dies ist der zugrunde liegende Code:

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

Nach der Anpassung sollte es so aussehen:

{{EmbedLiveSample("images-forms1-finish", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist in Ordnung, wenn Teile des Bildes abgeschnitten werden. Die beste Wahl ist `object-fit: cover`. Außerdem müssen Sie Breite und Höhe auf `100%` setzen:

```css live-sample___images-forms1-finish
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Bilder und Formularelemente 2

In dieser Aufgabe haben Sie ein Suchfeld und einen Button.

So lösen Sie die Aufgabe:

1. Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` auszuwählen.
2. Legen Sie für das Formularfeld und den Button dieselbe Schriftgröße fest wie für den Rest des Containers.
3. Geben Sie dem Formularfeld und dem Button ein Padding von `10px`.
4. Geben Sie dem Button einen Hintergrund in `rebeccapurple`, weiße Schrift, keinen Rahmen und abgerundete Ecken mit einem Radius von 5 px.

Der Ausgangszustand sieht so aus:

{{EmbedLiveSample("images-forms2-start", "", "80px")}}

Dies ist der zugrunde liegende Code:

```html live-sample___images-forms2-start live-sample___images-forms2-finish
<div class="my-form">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="button" value="Search" />
  </div>
</div>
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

Nach der Anpassung sollte es so aussehen:

{{EmbedLiveSample("images-forms2-finish", "", "80px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Hier ist eine Beispiellösung für die Aufgabe:

```css live-sample___images-forms2-finish
.my-form {
  border: 2px solid black;
  padding: 5px;
}

.my-form input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.my-form input[type="button"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>

## Bilder und Formularelemente 3

Die Lösung für diese Aufgabe ist recht offen gestaltet. Sie haben viel Spielraum bei der Umsetzung. Deshalb zeigen wir kein Beispiel für das fertige Ergebnis.

Ihr CSS sollte Folgendes enthalten:

1. Ein einfaches „Reset“, das Schriftarten, Padding, Margins und Größenangaben von Anfang an vereinheitlicht, wie unter [Formularverhalten normalisieren](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior) beschrieben.
2. Eine ansprechende, einheitliche Gestaltung der Eingabefelder und des Buttons.
3. Eine Layout-Technik, mit der Eingabefelder und Labels sauber ausgerichtet werden.

Der Ausgangszustand sieht so aus:

{{ EmbedLiveSample("forms-2", "100%", 250) }}

Dies ist der zugrunde liegende Code:

```html hidden live-sample___forms-2
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
    <button type="button">Update preferences</button>
  </li>
</ul>
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

Für diese Aufgabe zeigen wir kein fertiges Ergebnis, da viele Lösungen möglich sind.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte beispielsweise so aussehen:

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
