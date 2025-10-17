---
title: "Herausforderung: Erstellung einer Hausdaten-UI"
short-title: "Herausforderung: Hausdaten-UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie JavaScript für eine Haussuch-/Filterseite auf einer Immobilien-Website schreiben. Dazu gehört das Abrufen von JSON-Daten, das Filtern dieser Daten basierend auf den in bereitgestellten Formularsteuerungen eingegebenen Werten und das Rendern dieser Daten in der Benutzeroberfläche. Unterwegs testen wir Ihr Wissen über Bedingungen, Schleifen, Arrays und Array-Methoden und mehr.

## Ausgangspunkt

Um zu beginnen, klicken Sie in einem der untenstehenden Code-Panels auf die Schaltfläche **Spielen**, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität abzuschließen.

```html live-sample___house-ui-start live-sample___house-ui-finish
<h1>House search</h1>
<p>
  Search for houses for sale. You can filter your search by street, number of
  bedrooms, and number of bathrooms, or just submit the search with no filters
  to display all available properties.
</p>
<form>
  <div>
    <label for="choose-street">Street:</label>
    <select id="choose-street" name="choose-street">
      <option value="">No street selected</option>
    </select>
  </div>
  <div>
    <label for="choose-bedrooms">Number of bedrooms:</label>
    <select id="choose-bedrooms" name="choose-bedrooms">
      <option value="">Any number of bedrooms</option>
    </select>
  </div>
  <div>
    <label for="choose-bathrooms">Number of bathrooms:</label>
    <select id="choose-bathrooms" name="choose-bathrooms">
      <option value="">Any number of bathrooms</option>
    </select>
  </div>
  <div>
    <button>Search for houses</button>
  </div>
</form>
<p id="result-count">Results returned: 0</p>
<section id="output"></section>
```

```css hidden live-sample___house-ui-start live-sample___house-ui-finish
body {
  font: 1.1em / 1.5 system-ui;
  width: clamp(480px, 90%, 1200px);
  margin: 0 auto;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}

form div {
  display: flex;
  width: 100%;
  max-width: 500px;
  align-items: center;
  margin-bottom: 20px;
}

label[for],
select {
  flex: 1;
}

#output {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;
}

#output article {
  padding: 0 20px;
  background-color: #efefef;
  border: 2px solid #cccccc;
  border-radius: 10px;
}

#output ul {
  list-style-type: none;
  padding-left: 0;
}
```

```js-nolint live-sample___house-ui-start
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

function initializeForm() {

}

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Add rest of code here
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
```

{{EmbedLiveSample("house-ui-start", "100%", 400)}}

## Projektbeschreibung

Sie haben eine HTML-Indexseite erhalten, die ein Formular enthält, das es dem Benutzer ermöglicht, nach Häusern nach Straße, Anzahl der Schlafzimmer und Anzahl der Badezimmer zu suchen, plus ein paar Elemente, um Suchergebnisse anzuzeigen. Außerdem haben Sie eine JavaScript-Datei mit einigen Definitionen von Konstanten und Variablen sowie ein paar Skelettfunktionendefinitionen erhalten. Ihre Aufgabe ist es, das fehlende JavaScript zu ergänzen, um die Haussuch-Schnittstelle zum Laufen zu bringen.

Die bereitgestellten Konstanten- und Variablendefinitionen enthalten die folgenden Referenzen:

- `streetSelect`: Das "choose-street" `<select>` Element.
- `bedroomSelect`: Das "choose-bedrooms" `<select>` Element.
- `bathroomSelect`: Das "choose-bathrooms" `<select>` Element.
- `form`: Das gesamte `<form>` Element, das die `<select>` Elemente enthält.
- `resultCount`: Das "result-count" `<p>` Element, welches aktualisiert wird, um die Anzahl der nach jeder Suche zurückgegebenen Ergebnisse anzuzeigen.
- `output`: Das "output" `<section>` Element, welches die Suchergebnisse anzeigt.
- `houses`: Anfangs leer, aber dies wird das Hausdatenobjekt enthalten, das durch das Parsen der abgerufenen JSON-Daten erstellt wird.

Die Skelettfunktionen sind:

- `initializeForm()`: Diese wird die Daten abfragen und die `<select>` Elemente mit den möglichen Werten füllen, nach denen gesucht werden kann.
- `renderHouses()`: Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse rendern.

### Abrufen der Daten

Das Erste, was Sie tun müssen, ist, eine neue Funktion zu erstellen, um die Hausdaten abzurufen und in der Variable `houses` zu speichern.

Dafür:

1. Erstellen Sie eine neue Funktion direkt unter den Variablen- und Konstantendefinitionen namens `fetchHouseData()`.
2. Verwenden Sie den `fetch()`-Befehl innerhalb des Funktionskörpers, um das JSON von [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) abzurufen. Sie sollten sich die Struktur dieser Daten ansehen, um sich auf einige der späteren Schritte vorzubereiten.
3. Wenn das resultierende Versprechen aufgelöst wird, prüfen Sie die `ok`-Eigenschaft der Antwort. Wenn sie `false` ist, werfen Sie einen benutzerdefinierten Fehler, der den `status` der Antwort meldet.
4. Vorausgesetzt, die Antwort ist ok, geben Sie die Antwort als JSON mit der Methode `json()` zurück.
5. Wenn das resultierende Versprechen aufgelöst wird, setzen Sie die Variable `houses` gleich dem Ergebnis der Methode `json()` (dies sollte ein Array von Objekten mit Hausdaten sein) und rufen Sie die Funktion `initializeForm()` auf.

### Vervollständigung der `initializeForm()`-Funktion

Nun müssen Sie den Inhalt der `initializeForm()`-Funktion schreiben. Diese wird die Daten abfragen, die in `houses` gespeichert sind, und sie verwenden, um die `<select>` Elemente mit `<option>` Elementen zu füllen, die alle verschiedenen Werte darstellen, nach denen gefiltert werden könnte. Im Moment enthalten die `<select>` Elemente nur ein einzelnes `<option>` Element mit einem Wert von `""` (einem leeren String), welches alle Werte repräsentiert. Der Benutzer kann diese Option wählen, wenn er nicht möchte, dass die Ergebnisse nach diesem Feld gefiltert werden.

Innerhalb des Funktionskörpers schreiben Sie Code, der Folgendes macht:

1. Erstellen Sie `<option>` Elemente für alle verschiedenen Straßennamen innerhalb des "choose-street" `<select>`. Es gibt einige Möglichkeiten, dies zu tun, aber wir empfehlen, ein temporäres Array zu erstellen und dann alle Objekte innerhalb von `houses` zu durchlaufen. Innerhalb der Schleife überprüfen Sie, ob Ihr temporäres Array die `street` Eigenschaft des aktuellen Hauses enthält. Falls nicht, fügen Sie es dem temporären Array hinzu und fügen Sie eine `<option>` zu dem "choose-street" `<select>` hinzu, welches die `street` Eigenschaft als seinen Wert enthält.
2. Erstellen Sie Optionen für alle möglichen Schlafzimmerzahlwerte innerhalb des "choose-bedrooms" `<select>`. Dazu können Sie das `houses` Array durchlaufen und den größten `bedrooms` Wert bestimmen und dann eine zweite Schleife schreiben, die eine `<option>` zu dem "choose-bedrooms" `<select>` für jede Zahl von `1` bis zu diesem höchsten Wert hinzufügt.
3. Erstellen Sie Optionen für alle möglichen Badezimmerzahlwerte innerhalb des "choose-bathrooms" `<select>`. Dies kann mit der gleichen Technik wie im vorherigen Schritt gelöst werden.

> [!NOTE]
> Sie könnten die `<option>` Elemente einfach im HTML festcodieren, aber das würde nur für genau diesen Datensatz funktionieren. Wir möchten, dass Sie JavaScript schreiben, das das Formular korrekt füllt, unabhängig von den bereitgestellten Datenwerten (jedes Hausobjekt müsste die gleiche Struktur haben).

> [!NOTE]
> Sie könnten die `innerHTML`-Eigenschaft verwenden, um Inhalt innerhalb von HTML-Elementen hinzuzufügen, aber wir empfehlen dies nicht. Sie können den Daten, die Sie Ihrer Seite hinzufügen, nicht immer vertrauen: Wenn sie nicht ordnungsgemäß auf dem Server bereinigt werden, könnten böswillige Akteure `innerHTML` als Weg verwenden, um [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe auf Ihrer Seite durchzuführen. Ein sicherer Weg ist die Verwendung von DOM-Skript-Features wie `createElement()`, `appendChild()` und `textContent`. Die Verwendung von `innerHTML`, um Kindinhalte zu entfernen, ist nicht so ein Problem.

### Vervollständigung der `renderHouses()`-Funktion

Als nächstes müssen Sie den Funktionskörper der `renderHouses()`-Funktion fertigstellen. Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse in der Benutzeroberfläche rendern.

1. Zuerst müssen Sie die Daten filtern. Dies wird wahrscheinlich am besten mit der Array-Methode `filter()` erreicht, die ein neues Array zurückgibt, das nur die Array-Elemente enthält, die den Filterkriterien entsprechen.
   1. Dies ist eine ziemlich komplexe `filter()`-Funktion, die Sie schreiben müssen. Sie müssen testen, ob die `street` Eigenschaft des Hauses dem ausgewählten Wert des "choose-street" `<select>` entspricht, und ob die `bedrooms` Eigenschaft des Hauses dem ausgewählten Wert des "choose-bedrooms" `<select>` entspricht, und ob die `bathrooms` Eigenschaft des Hauses dem ausgewählten Wert des "choose-bathrooms" `<select>` entspricht.
   2. Jede Komponente des Tests muss immer `true` zurückgeben, wenn der zugeordnete `<select>` Wert `""` ist (der leere String, der alle Werte repräsentiert). Dies können Sie erreichen, indem Sie jede Überprüfung "kurzschließen".
   3. Sie müssen auch sicherstellen, dass die Datentypen bei jeder Überprüfung übereinstimmen. Der Wert eines Formularelements ist immer ein String. Dies ist nicht unbedingt der Fall für Ihre Objektwerteigenschaften. Wie können Sie die Datentypen für die Zwecke des Tests anpassen?
2. Geben Sie die Anzahl der gefilterten Suchergebnisse in das "result-count" `<p>` Element aus, unter Verwendung der Zeichenfolge "Results returned: number".
3. Leeren Sie das "output" `<section>` Element, sodass es keine Kind-HTML-Elemente enthält. Wenn Sie dies nicht tun, werden die Ergebnisse jedes Mal, wenn eine Suche durchgeführt wird, an das Ende der vorherigen Ergebnisse hinzugefügt, anstatt sie zu ersetzen.
4. Erstellen Sie eine neue Funktion innerhalb von `renderHouses()` namens `renderHouse()`. Diese Funktion muss ein Hausobjekt als Argument nehmen und zwei Dinge tun:
   1. Berechnen Sie die Gesamtfläche der Räume, die im `room_sizes` Objekt des Hauses enthalten sind. Dies ist nicht so einfach, wie ein Array von Zahlen zu durchlaufen und sie zu summieren, aber es ist nicht allzu schwierig.
   2. Fügen Sie ein `<article>` Element innerhalb des "output" `<section>` Elements hinzu, das die Hausnummer, Straßennamen, Schlafzimmer- und Badezimmeranzahl, Gesamtfläche der Räume und Preis enthält. Sie können die Struktur variieren, wir hätten es gerne ähnlich diesem HTML-Snippet:

   ```html
   <article>
     <h2>number street name</h2>
     <ul>
       <li>🛏️ Bedrooms: number</li>
       <li>🛀 Bathrooms: number</li>
       <li>Room area: number m²</li>
       <li>Price: £price</li>
     </ul>
   </article>
   ```

5. Durchlaufen Sie alle Häuser im gefilterten Array und übergeben Sie jedes an einen `renderHouse()`-Aufruf.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise ändern.
- Für Dinge wie das Finden des größten Wertes in einem Array von Werten ist die `reduce()` Array-Funktion wirklich praktisch. Wir haben sie in diesem Kurs nicht gelehrt, da sie ziemlich komplex ist, aber sie ist wirklich mächtig, wenn Sie sich mit ihr vertraut machen. Als Stretch-Ziel versuchen Sie, sie zu recherchieren und in Ihrer Antwort zu verwenden.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("house-ui-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte in etwa so aussehen:

```js live-sample___house-ui-finish
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");
const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

// Solution: Fetching the data

function fetchHouseData() {
  fetch("https://mdn.github.io/shared-assets/misc/houses.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      houses = json;
      initializeForm();
    });
}

// Solution: Completing the initializeForm() function

function initializeForm() {
  // Create options for all the different street names
  const streetArray = [];
  for (let house of houses) {
    if (!streetArray.includes(house.street)) {
      streetArray.push(house.street);
      streetSelect.appendChild(document.createElement("option")).textContent =
        house.street;
    }
  }

  // Create options for all the possible bedroom values
  const largestBedrooms = houses.reduce(
    (largest, house) => (house.bedrooms > largest ? house.bedrooms : largest),
    houses[0].bedrooms,
  );
  let i = 1;
  while (i <= largestBedrooms) {
    bedroomSelect.appendChild(document.createElement("option")).textContent = i;
    i++;
  }

  // Create options for all the possible bathroom values
  const largestBathrooms = houses.reduce(
    (largest, house) => (house.bathrooms > largest ? house.bathrooms : largest),
    houses[0].bathrooms,
  );
  let j = 1;
  while (j <= largestBathrooms) {
    bathroomSelect.appendChild(document.createElement("option")).textContent =
      j;
    j++;
  }
}

// Solution: Completing the renderHouses() function

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Filter the data
  const filteredHouses = houses.filter((house) => {
    // prettier-ignore
    const test = (streetSelect.value === "" ||
                  house.street === streetSelect.value) &&
                 (bedroomSelect.value === "" ||
                  String(house.bedrooms) === bedroomSelect.value) &&
                 (bathroomSelect.value === "" ||
                  String(house.bathrooms) === bathroomSelect.value);
    return test;
  });

  // Output the result count to the "result-count" paragraph
  resultCount.textContent = `Results returned: ${filteredHouses.length}`;

  // Empty the output element
  output.innerHTML = "";

  // Create renderHouse() function
  function renderHouse(house) {
    // Calculate total room size
    let totalArea = 0;
    const keys = Object.keys(house.room_sizes);
    for (let key of keys) {
      totalArea += house.room_sizes[key];
    }

    // Output house to UI
    const articleElem = document.createElement("article");
    articleElem.appendChild(document.createElement("h2")).textContent =
      `${house.house_number} ${house.street}`;
    const listElem = document.createElement("ul");
    listElem.appendChild(document.createElement("li")).textContent =
      `🛏️ Bedrooms: ${house.bedrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `🛀 Bathrooms: ${house.bathrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `Room area: ${totalArea}m²`;
    listElem.appendChild(document.createElement("li")).textContent =
      `Price: £${house.price}`;
    articleElem.appendChild(listElem);
    output.appendChild(articleElem);
  }

  // Pass each house in the filtered array into renderHouse()
  for (let house of filteredHouses) {
    renderHouse(house);
  }
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
