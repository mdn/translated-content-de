---
title: "Herausforderung: Erstellen einer Hausdaten-UI"
short-title: "Herausforderung: Hausdaten-UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie JavaScript für eine Such- bzw. Filterseite für Immobilien auf einer Immobilienwebsite schreiben. Dies umfasst das Abrufen von JSON-Daten, das Filtern dieser Daten basierend auf den in bereitgestellten Formularelementen eingegebenen Werten und das Darstellen dieser Daten in der UI. Unterwegs testen wir auch Ihr Wissen über Bedingungen, Schleifen, Arrays und Array-Methoden sowie weitere Themen.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität zu vervollständigen.

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

// Create fetchHouseData() function here

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

Ihnen wurde eine HTML-Startseite mit einem Formular zur Verfügung gestellt, mit dem der Benutzer nach Häusern anhand der Straße, der Anzahl der Schlafzimmer und der Anzahl der Badezimmer suchen kann. Es gibt auch ein paar Elemente, die die Suchergebnisse enthalten. Sie haben auch eine JavaScript-Datei mit einigen Konstanten- und Variablendefinitionen sowie ein paar Skelettfunktionendefinitionen erhalten. Ihre Aufgabe ist es, den fehlenden JavaScript-Code zu vervollständigen, damit die Haussuchoberfläche funktioniert.

Die bereitgestellten Konstanten- und Variablendefinitionen enthalten folgende Verweise:

- `streetSelect`: Das "choose-street" `<select>` Element.
- `bedroomSelect`: Das "choose-bedrooms" `<select>` Element.
- `bathroomSelect`: Das "choose-bathrooms" `<select>` Element.
- `form`: Das gesamte `<form>` Element, das die `<select>` Elemente enthält.
- `resultCount`: Das "result-count" `<p>` Element, das aktualisiert wird, um die Anzahl der nach jeder Suche zurückgegebenen Ergebnisse anzuzeigen.
- `output`: Das "output" `<section>` Element, das die Suchergebnisse anzeigt.
- `houses`: Anfangs leer, aber es wird das Hausdatenobjekt enthalten, das durch das Parsen der abgerufenen JSON-Daten erstellt wird.

Die Skelettfunktionen sind:

- `initializeForm()`: Diese wird die Daten abfragen und die `<select>` Elemente mit den möglichen Werten füllen, nach denen gesucht werden könnte.
- `renderHouses()`: Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse darstellen.

### Abrufen der Daten

Das erste, was Sie tun müssen, ist eine neue Funktion zu erstellen, die die Hausdaten abruft und in der Variablen `houses` speichert.

Um dies zu tun:

1. Erstellen Sie eine neue Funktion direkt unterhalb der Variablen- und Konstantendefinitionen namens `fetchHouseData()`.
2. Verwenden Sie im Hauptteil der Funktion die `fetch()`-Methode, um das JSON von [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) abzurufen. Studieren Sie die Struktur dieser Daten für einige der späteren Schritte.
3. Wenn das resultierende Promise aufgelöst wird, überprüfen Sie die `ok`-Eigenschaft der Antwort. Wenn sie `false` ist, werfen Sie einen benutzerdefinierten Fehler, der den `status` der Antwort meldet.
4. Wenn die Antwort in Ordnung ist, geben Sie die Antwort mit der Methode `json()` als JSON zurück.
5. Wenn das resultierende Promise aufgelöst wird, setzen Sie die Variable `houses` gleich dem Ergebnis der `json()`-Methode (dies sollte ein Array von Objekten mit Hausdaten sein) und rufen Sie die Funktion `initializeForm()` auf.

### Vervollständigung der Funktion `initializeForm()`

Jetzt müssen Sie den Inhalt der Funktion `initializeForm()` schreiben. Diese wird die in `houses` gespeicherten Daten abfragen und verwenden, um die `<select>` Elemente mit `<option>` Elementen zu füllen, die alle verschiedenen Werte darstellen, nach denen gefiltert werden könnte. Momentan enthalten die `<select>` Elemente nur ein einzelnes `<option>` Element mit einem Wert von `""` (eine leere Zeichenkette), die alle Werte darstellt. Der Nutzer kann diese Option wählen, wenn er nicht möchte, dass die Ergebnisse nach diesem Feld gefiltert werden.

Schreiben Sie im Hauptteil der Funktion Code, der Folgendes tut:

1. Erstellen Sie `<option>` Elemente für alle verschiedenen Straßennamen im "choose-street" `<select>`. Es gibt mehrere Möglichkeiten, dies zu tun. Wir empfehlen, ein temporäres Array zu erstellen und dann durch alle Objekte in `houses` zu schleifen. Überprüfen Sie innerhalb der Schleife, ob Ihr temporäres Array die `street` Eigenschaft des aktuellen Hauses enthält. Wenn nicht, fügen Sie es dem temporären Array hinzu und fügen Sie ein `<option>` zum "choose-street" `<select>` hinzu, das die `street` Eigenschaft als seinen Wert enthält.
2. Erstellen Sie Optionen für alle möglichen Werte der Anzahl der Schlafzimmer im "choose-bedrooms" `<select>`. Dazu könnten Sie durch das `houses` Array schleifen und ermitteln, was der größte `bedrooms` Wert ist, dann eine zweite Schleife schreiben, die ein `<option>` zum "choose-bedrooms" `<select>` für jede Zahl von `1` bis zu diesem größten Wert hinzufügt.
3. Erstellen Sie Optionen für alle möglichen Werte der Anzahl der Badezimmer im "choose-bathrooms" `<select>`. Dies kann mit der gleichen Technik wie im vorherigen Schritt gelöst werden.

> [!NOTE]
> Sie _könnten_ die `<option>` Elemente einfach im HTML hartkodieren, aber das würde nur für dieses exakte Datenset funktionieren. Wir möchten, dass Sie JavaScript schreiben, das das Formular unabhängig von den bereitgestellten Datenwerten korrekt füllen wird (jedes Hausobjekt müsste dieselbe Struktur haben).

> [!NOTE]
> Sie könnten die `innerHTML` Eigenschaft verwenden, um Kindinhalte innerhalb von HTML-Elementen hinzuzufügen, aber wir würden davon abraten. Sie können den Daten, die Sie Ihrer Seite hinzufügen, nicht immer trauen: Wenn diese auf dem Server nicht ordnungsgemäß bereinigt werden, könnten böse Akteure `innerHTML` als Pfad nutzen, um [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe auf Ihrer Seite durchzuführen. Ein sicherer Weg ist es, DOM-Scripting-Funktionen wie `createElement()`, `appendChild()` und `textContent` zu verwenden. Die Verwendung von `innerHTML` zum Entfernen von Kindinhalten ist weniger problematisch.

### Vervollständigung der Funktion `renderHouses()`

Als nächstes müssen Sie den Hauptteil der Funktion `renderHouses()` vervollständigen. Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse in der UI darstellen.

1. Zuerst müssen Sie die Daten filtern. Dies wird wahrscheinlich am besten mit der Array-Methode `filter()` erreicht, die ein neues Array zurückgibt, das nur die Array-Elemente enthält, die den Filterkriterien entsprechen.
   1. Dies ist eine ziemlich komplexe `filter()` Funktion zu schreiben. Sie müssen testen, ob die `street` Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-street" `<select>` übereinstimmt, ob die `bedrooms` Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-bedrooms" `<select>` übereinstimmt und ob die `bathrooms` Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-bathrooms" `<select>` übereinstimmt.
   2. Jeder Bestandteil des Tests muss immer dann `true` zurückgeben, wenn der zugehörige `<select>` Wert `""` (die leere Zeichenkette, die alle Werte darstellt) ist. Dies können Sie erreichen, indem Sie jede Überprüfung "kurzschließen".
   3. Sie müssen auch sicherstellen, dass die Datentypen in jeder Überprüfung übereinstimmen. Der Wert eines Formularelements ist immer eine Zeichenkette. Dies ist nicht unbedingt der Fall für Ihre Objektwerteigenschaften. Wie können Sie die Datentypen zur Übereinstimmung bringen, damit der Test durchgeführt werden kann?
2. Geben Sie die Anzahl der gefilterten Suchergebnisse in das "result-count" `<p>` Element aus, indem Sie die Zeichenfolgenstruktur "Results returned: number" verwenden.
3. Leeren Sie das "output" `<section>` Element, so dass es keine Kind-HTML-Elemente hat. Wenn Sie dies nicht tun, werden die Ergebnisse bei jeder Suche dem Ende der vorherigen Ergebnisse hinzugefügt, anstatt sie zu ersetzen.
4. Erstellen Sie eine neue Funktion innerhalb von `renderHouses()` namens `renderHouse()`. Diese Funktion muss ein Hausobjekt als Argument nehmen und zwei Dinge tun:
   1. Berechnen Sie die Gesamtfläche der Räume innerhalb des `room_sizes` Objekts des Hauses. Dies ist nicht so einfach wie das Schleifen durch ein Array von Zahlen und das Summieren, aber es ist nicht zu schwierig.
   2. Fügen Sie ein `<article>` Element in das "output" `<section>` Element ein, das die Hausnummer, den Straßennamen, die Anzahl der Schlafzimmer und Badezimmer, die gesamträumliche Fläche und den Preis des Hauses enthält. Sie können die Struktur variieren, aber wir würden es bevorzugen, wenn es ähnlich wie dieser HTML-Ausschnitt aussieht:

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

5. Schleifen Sie durch alle Häuser im gefilterten Array und übergeben Sie jedes an einen `renderHouse()` Aufruf.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise ändern.
- Für Dinge wie das Finden des größten Werts in einem Array von Werten ist die `reduce()` Array-Funktion sehr nützlich. Wir haben sie in diesem Kurs nicht gelehrt, da sie ziemlich komplex ist, aber sie ist sehr mächtig, wenn man sie beherrscht. Als Stretch-Ziel, versuchen Sie, sie zu recherchieren und in Ihrer Antwort zu verwenden.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("house-ui-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte ungefähr so aussehen:

```js live-sample___house-ui-finish
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");
const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

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

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
