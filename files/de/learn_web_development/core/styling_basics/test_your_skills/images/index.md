---
title: "Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente"
short-title: "Test: Bilder und Formulare"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie verstehen, wie spezielle Elemente wie [Bilder, Medien und Formularelemente in CSS behandelt werden](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Um Hilfe zu bekommen, lesen Sie unseren Leitfaden zur [Nutzung von Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## Bilder und Formulare 1

In dieser Aufgabe haben Sie ein Bild, das über den Kasten hinausragt. Wir möchten, dass Sie das Bild so verkleinern, dass es in den Kasten passt, ohne dass zusätzlicher Leerraum bleibt. Es macht uns nichts aus, wenn ein Teil des Bildes abgeschnitten wird. Aktualisieren Sie das CSS, um dies zu erreichen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("images-forms1-start", "", "260px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Gestaltung sollte wie folgt aussehen:

{{EmbedLiveSample("images-forms1-finish", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es ist in Ordnung, wenn einige Teile des Bildes abgeschnitten werden.
Die Verwendung von `object-fit: cover` ist die beste Wahl, Sie müssen außerdem die Breite und Höhe auf `100%` setzen:

```css live-sample___images-forms1-finish
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Bilder und Formulare 2

In dieser Aufgabe haben Sie ein einfaches Formular.

Um die Aufgabe abzuschließen:

1. Verwenden Sie Attributselektoren, um das Suchfeld und den Button innerhalb von `.my-form` anzusprechen.
2. Geben Sie dem Formularfeld und dem Button die gleiche Textgröße wie dem Rest des Formulars.
3. Geben Sie dem Formularfeld und dem Button `10px` Abstand.
4. Geben Sie dem Button einen Hintergrund von `rebeccapurple`, weißen Vordergrund, keine Umrandung und abgerundete Ecken von 5px.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("images-forms2-start", "", "80px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Gestaltung sollte wie folgt aussehen:

{{EmbedLiveSample("images-forms2-finish", "", "80px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Hier ist eine beispielhafte Lösung für die Aufgabe:

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

## Bilder und Formulare 3

Die Lösung für diese Bewertung ist ziemlich flexibel, und Sie haben viel Spielraum, was Sie hier tun können. Daher bieten wir keine Beispielanzeige an.

Ihr CSS muss Folgendes beinhalten:

1. Einen leichten "Reset", um Schriftarten, Abstände, Ränder und Größen zu Beginn konsistenter zu machen, wie in [Normalisieren des Formularverhaltens](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior) beschrieben.
2. Eine schöne, konsistente Gestaltung für die Eingabefelder und den Button.
3. Eine Layoutechnik, um die Eingabefelder und Labels ordentlich auszurichten.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("forms-2", "100%", 250) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben keinen fertigen Inhalt für diese Aufgabe bereitgestellt, da viele gültige Lösungen möglich sind.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS könnte so aussehen:

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
