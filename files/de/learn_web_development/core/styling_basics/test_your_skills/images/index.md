---
title: "Testen Sie Ihr Wissen: Bilder und Formularelemente"
short-title: "Test: Bilder und Formulare"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Tests ist es, zu überprüfen, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von "Testen Sie Ihr Wissen"](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe haben Sie ein Bild, das über den Rahmen hinausragt. Wir möchten, dass das Bild verkleinert wird, um in den Rahmen zu passen, ohne zusätzlichen Leerraum. Es ist in Ordnung, wenn ein Teil des Bildes abgeschnitten wird. Aktualisieren Sie das CSS, um dies zu erreichen.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Bild in einem Kasten](mdn-images-object-fit.png)

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid black;
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
Die Verwendung von `object-fit: cover` ist die beste Wahl, außerdem müssen Sie die Breite und Höhe auf `100%` setzen:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie ein einfaches Formular.

Um die Aufgabe zu lösen:

1. Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` anzusprechen.
2. Sorgen Sie dafür, dass das Formularfeld und der Button die gleiche Textgröße wie der Rest des Formulars verwenden.
3. Geben Sie dem Formularfeld und dem Button `10px` Padding.
4. Geben Sie dem Button einen Hintergrund von `rebeccapurple`, einen weißen Vordergrund, keinen Rahmen und abgerundete Ecken von 5px.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein Ein-Zeilen-Formular](mdn-images-form.png)

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
  border: 2px solid black;
  padding: 5px;
}
```

{{EmbedLiveSample("forms-1")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Hier ist ein Beispiel für die Lösung der Aufgabe:

```css
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

Unsere zweite Bewertung des Formulardesigns ist ziemlich frei und Sie haben viel Flexibilität bei dem, was Sie hier letztendlich tun. Ihr CSS muss jedoch die unten beschriebenen Anforderungen erfüllen.

Um die Aufgabe zu lösen:

1. Fügen Sie eine Art leichtgewichtigen "Reset" hinzu, um Schriftarten, Padding, Ränder und Größen zu vereinheitlichen, wie in [Normalizing form behavior](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior) beschrieben.
2. Ergänzen Sie dies mit einem schönen, konsistenten Styling für die Eingaben und den Button.
3. Verwenden Sie eine Art Layout-Technik, um die Eingaben und Labels ordentlich auszurichten.

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
