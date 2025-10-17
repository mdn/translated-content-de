---
title: "Herausforderung: Styling einer Home-Farbschema-Such-App"
short-title: "Herausforderung: Styling der Farbschema-Suche"
slug: Learn_web_development/Core/Styling_basics/Home_color_scheme_search
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Die letzte Herausforderung unseres [Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Moduls bietet einen Prototyp einer "Home-Farbsuche-App"-Benutzeroberfläche. Die Idee besteht darin, den Nutzern die Möglichkeit zu geben, eine Farbe einzugeben und eine Reihe von Variationen zusammen mit Beispielen für Farbschema-Ideen zu erhalten. Ihre Aufgabe ist es, das bereitgestellte Formular, die Tabelle und die Schaltflächen zu stylen und sicherzustellen, dass die Bilder wie erwartet angezeigt werden.

> [!NOTE]
> Die in dieser Herausforderung verwendeten getönten Bilder wurden aus dem Original auf Flickr angepasst: [Chic Living Room](https://flickr.com/photos/145464578@N08/28362250492/), veröffentlicht von [Houseology Interiors](https://flickr.com/photos/145464578@N08/) unter [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/deed.en).

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der unteren Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die Seite entsprechend zu stylen.

```html live-sample___app-start live-sample___app-finish
<section>
  <h1>Home color search</h1>
  <form>
    <div>
      <label for="color">Color to search for:</label>
      <input type="text" id="color" name="color" value="pink" />
    </div>
    <div>
      <label for="results-per-page">Results per page:</label>
      <input
        type="text"
        id="results-per-page"
        name="results-per-page"
        value="4" />
    </div>
    <div>
      <button type="button">Submit</button>
    </div>
  </form>
</section>
<hr />
<section>
  <h2>Search results</h2>
  <table>
    <caption>
      Sample colors and color schemes
    </caption>
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Raw color</th>
        <th scope="col">Tags</th>
        <th scope="col">Sample color scheme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pink</td>
        <td><code>rgb(255 192 203)</code></td>
        <td>pink, pale, light</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-pink.png"
            alt="Image of living room in a pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Baker-Miller pink</td>
        <td><code>rgb(255 145 175)</code></td>
        <td>pink, pale, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-baker-miller-pink.png"
            alt="Image of living room in a Baker-Miller pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Hotpink</td>
        <td><code>rgb(255 105 180)</code></td>
        <td>pink, bright, vivid</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-hotpink.png"
            alt="Image of living room in a hotpink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Fuchsia</td>
        <td><code>rgb(255 0 255)</code></td>
        <td>pink, medium, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-fuchsia.png"
            alt="Image of living room in a fuchsia color scheme" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="controls">
    <button disabled>Previous</button>
    <p>Showing page 1 of 20</p>
    <button>Next</button>
  </div>
</section>
```

```css live-sample___app-start
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Prev/next control layout */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Form and button styling */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

input {
  flex: 3;
}

/* Table styling */

table img {
  width: 100%;
  height: 150px;
}
```

{{embedlivesample("app-start", "100%", 650)}}

## Projektbeschreibung

Befolgen Sie die untenstehenden Schritte, um das Projekt abzuschließen. Passen Sie die Größe des Inhaltsbereichs an und fügen Sie die erforderlichen Dekorationen hinzu.

### Fügen Sie ein Formular-Reset hinzu

Zunächst fügen Sie einige "Reset"-Stile zu den `<button>`- und `<input>`-Elementen hinzu, um ihnen einen konsistenten Ausgangszustand in allen Browsern zu geben.

Konkret:

1. Lassen Sie sie die auf den Rest der Seite gesetzte Schriftfamilie erben.
2. Geben Sie ihnen eine Schriftgröße von `100%`.
3. Entfernen Sie alle ihre Abstände und Ränder.

### Stylen Sie die Formulareingaben

Geben Sie den `<input>`-Elementen:

1. Eine `2px` breite, durchgezogene Umrandung mit der Farbe `#999999`.
2. `10px` Abstand.
3. `5px` abgerundete Ecken.

### Stylen Sie die Schaltflächen

Geben Sie den `<button>`-Elementen:

1. Keine Umrandung.
2. Eine `schwarze` Hintergrundfarbe und `weißen` Text.
3. `5px` abgerundete Ecken.
4. Vertikalen Abstand von `10px` und horizontalen Abstand von `2em`.
5. Eine Hintergrundfarbe von `#666666`, wenn sie fokussiert oder darübergefahren wird.
6. Eine Hintergrundfarbe von `#aaaaaa`, wenn sie deaktiviert sind.

### Stylen Sie die Tabelle

Fügen Sie nun einige bewährte Styling-Praxen zur Tabelle hinzu, wie sie zuvor im Modul gelernt wurden, plus ein paar Extras.

Konkret:

1. Geben Sie der Tabelle ein festes Layout, eine Breite von `100%` und zusammenfallende Rahmen.
2. Machen Sie die oberen und unteren Ränder der Tabelle `1px` dick, durchgezogen und mit der Farbe `#999999`.
3. Geben Sie den Tabellenkopf- und Standardzellen `0.6em` Abstand und richten Sie ihren Inhalt vertikal in der oberen Hälfte der Zellen aus.
4. Geben Sie den Tabellenkopfzellen einen unteren Rand, der `1px` dick, durchgezogen und mit der Farbe `#999999` ist.
5. Geben Sie allen Tabellenzeilen eine Breite von `20%`, außer der vierten Zeile, die eine Breite von `40%` haben sollte.
6. Im Tabellenkörper gibt es vier Zeilen. Die zweite Zelle in jeder dieser Zeilen enthält Text für eine `rgb()`-Farbe. Geben Sie jeder dieser Zellen eine Hintergrundfarbe, die dem Text entspricht.
7. Erstellen Sie Zebrastreifen: Geben Sie jeder ungeradzahligen Zeile eine Hintergrundfarbe von `#eeeeee`, nur innerhalb des Tabellenkörpers.
8. Geben Sie der Beschriftung `1em` Abstand, einen kursiven Schriftstil und einen Buchstabenabstand von `1px`.

### Beheben der Bildanzeige

An diesem Punkt gibt es ein Problem mit den Bildern in der Tabelle — wir haben jedes Bild auf `100%` der Breite des Zellencontainers gesetzt und eine spezifische Höhe von `150px`, da wir nicht wollten, dass die Tabellenzeilen zu hoch werden. Dies hat das Seitenverhältnis der Bilder verzerrt und sie etwas zusammengequetscht aussehen lassen.

Wir möchten, dass Sie die Bilder so stylen, dass:

1. Sie in ihrem eigenen Seitenverhältnis angezeigt werden, aber etwas vom Bild abgeschnitten wird, damit sie immer noch in die Größe der `<img>`-Elemente passen.
2. Der untere Teil des Bildes angezeigt wird, aber der obere Teil abgeschnitten wird.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise ändern.

## Beispiel

Das fertige Projekt sollte so aussehen:

{{EmbedLiveSample("app-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Eine mögliche Lösung könnte sein:

```css live-sample___app-finish
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Prev/next control layout */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Form and button styling */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

/* Solution: Add a form reset */

button,
input {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

input {
  flex: 3;
  /* Solution: Style the form inputs */
  border: 2px solid #999999;
  padding: 10px;
  border-radius: 5px;
}

/* Solution: Style the buttons */

button {
  background-color: black;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px 2em;
}

button:hover,
button:focus {
  background-color: #666666;
}

button:disabled {
  background-color: #aaaaaa;
}

/* Table styling */

table img {
  width: 100%;
  height: 150px;
  /* Solution: Fixing the image display */
  object-fit: cover;
  object-position: bottom;
}

/* Solution: Style the table */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

th {
  border-bottom: 1px solid #999999;
}

tr {
  width: 20%;
}

tr :nth-of-type(4) {
  width: 40%;
}

/* Solution: Provide background colors for the "Raw color" cells */

tr:nth-of-type(1) td:nth-of-type(2) {
  background-color: pink;
}

tr:nth-of-type(2) td:nth-of-type(2) {
  background-color: rgb(255 145 175);
}

tr:nth-of-type(3) td:nth-of-type(2) {
  background-color: hotpink;
}

tr:nth-of-type(4) td:nth-of-type(2) {
  background-color: magenta;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  letter-spacing: 1px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
