---
title: "Herausforderung: Erstellen einer Benutzeroberfläche für Hausdaten"
short-title: "Herausforderung: Hausdaten-UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: c2f988ec9ef7b7f50ee013ebe77a8aec3777a3aa
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie JavaScript für eine Such-/Filter-Seite auf einer Immobilien-Website schreiben. Dies beinhaltet das Abrufen von JSON-Daten, das Filtern dieser Daten basierend auf den in bereitgestellten Formularelementen eingegebenen Werten und das Rendern dieser Daten in der Benutzeroberfläche. Unterwegs werden wir auch Ihr Wissen über Bedingte Anweisungen, Schleifen, Arrays und Array-Methoden auf die Probe stellen.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Befolgen Sie dann die Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität zu vervollständigen.

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

Sie haben eine HTML-Indexseite erhalten, die ein Formular enthält, mit dem der Benutzer nach Häusern basierend auf Straße, Anzahl der Schlafzimmer und Anzahl der Badezimmer suchen kann, sowie ein paar Elemente, um Suchergebnisse anzuzeigen. Sie haben auch eine JavaScript-Datei mit einigen Konstanten- und Variablendefinitionen und ein paar Skelettfunktionendefinitionen erhalten. Ihre Aufgabe ist es, das fehlende JavaScript auszufüllen, um die Haussuchoberfläche funktionsfähig zu machen.

Die bereitgestellten Konstanten- und Variablendefinitionen enthalten folgende Verweise:

- `streetSelect`: Das "choose-street" `<select>` Element.
- `bedroomSelect`: Das "choose-bedrooms" `<select>` Element.
- `bathroomSelect`: Das "choose-bathrooms" `<select>` Element.
- `form`: Das gesamte `<form>` Element, das die `<select>` Elemente enthält.
- `resultCount`: Das "result-count" `<p>` Element, das aktualisiert wird, um die Anzahl der nach jeder Suche zurückgegebenen Ergebnisse anzuzeigen.
- `output`: Das "output" `<section>` Element, das die Suchergebnisse anzeigt.
- `houses`: Zunächst leer, aber dies wird das Hausdatenobjekt enthalten, das durch das Parsen der abgerufenen JSON-Daten erstellt wurde.

Die Skelettfunktionen sind:

- `initializeForm()`: Diese wird die Daten abfragen und die `<select>` Elemente mit den möglichen Werten füllen, nach denen gesucht werden kann.
- `renderHouses()`: Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse rendern.

### Abrufen der Daten

Das Erste, was Sie tun müssen, ist, eine neue Funktion zu erstellen, um die Hausdaten abzurufen und in der `houses` Variable zu speichern.

So gehen Sie vor:

1. Erstellen Sie direkt unter den Variablen- und Konstantendefinitionen eine neue Funktion mit dem Namen `fetchHouseData()`.
2. Benutzen Sie innerhalb des Funktionskörpers die `fetch()` Methode, um das JSON von [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) abzurufen. Sie sollten die Struktur dieser Daten studieren, um sich auf einige der späteren Schritte vorzubereiten.
3. Wenn das resultierende Versprechen aufgelöst wird, prüfen Sie die `ok` Eigenschaft der Antwort. Wenn diese `false` ist, werfen Sie einen benutzerdefinierten Fehler, der den `status` der Antwort meldet.
4. Vorausgesetzt, die Antwort ist in Ordnung, geben Sie die Antwort als JSON unter Verwendung der `json()` Methode zurück.
5. Wenn das resultierende Versprechen aufgelöst wird, setzen Sie die `houses` Variable gleich dem Ergebnis der `json()` Methode (dies sollte ein Array von Objekten enthalten, die Hausdaten enthalten) und rufen die `initializeForm()` Funktion auf.

### Vervollständigen der `initializeForm()` Funktion

Jetzt müssen Sie den Inhalt der `initializeForm()` Funktion schreiben. Diese wird die in `houses` gespeicherten Daten abfragen und verwenden, um die `<select>` Elemente mit `<option>` Elementen zu füllen, die alle verschiedenen Werte darstellen, nach denen gefiltert werden könnte. Im Moment enthalten die `<select>` Elemente nur ein einzelnes `<option>` Element mit einem Wert von `""` (einem leeren String), der alle Werte darstellt. Der Benutzer kann diese Option wählen, wenn er nicht möchte, dass die Ergebnisse nach diesem Feld gefiltert werden.

Im Funktionskörper schreiben Sie Code, der Folgendes tut:

1. Erstellen Sie `<option>` Elemente für alle verschiedenen Straßennamen im "choose-street" `<select>`. Dazu könnten Sie ein temporäres Array erstellen und dann durch alle Objekte in `houses` schleifen. Innerhalb der Schleife prüfen Sie, ob Ihr temporäres Array die `street` Eigenschaft des aktuellen Hauses enthält. Falls nicht, fügen Sie es dem temporären Array hinzu und fügen eine `<option>` zum "choose-street" `<select>` hinzu, die die `street` Eigenschaft als Wert hat.
2. Erstellen Sie Optionen für alle möglichen Schlafzimmeranzahlwerte im "choose-bedrooms" `<select>`. Dazu könnten Sie durch das `houses` Array schleifen und den größten `bedrooms` Wert bestimmen, dann eine zweite Schleife schreiben, die eine `<option>` zum "choose-bedrooms" `<select>` für jede Zahl von `1` bis zu diesem größten Wert hinzufügt.
3. Erstellen Sie Optionen für alle möglichen Badezimmeranzahlwerte im "choose-bathrooms" `<select>`. Dies kann mit der gleichen Technik wie der vorherige Schritt gelöst werden.

> [!NOTE]
> Sie _könnten_ einfach die `<option>` Elemente direkt im HTML fest codieren, aber das würde nur für diesen genauen Datensatz funktionieren. Wir möchten, dass Sie JavaScript schreiben, das das Formular korrekt auffüllt, unabhängig von den bereitgestellten Datenwerten (jedes Hausobjekt hätte die gleiche Struktur haben müssen).

> [!NOTE]
> Sie könnten die `innerHTML` Eigenschaft verwenden, um untergeordnete Inhalte in HTML-Elementen hinzuzufügen, aber wir empfehlen, dies nicht zu tun. Sie können nicht immer den Daten vertrauen, die Sie zu Ihrer Seite hinzufügen: Wenn sie nicht ordnungsgemäß auf dem Server bereinigt werden, könnten böswillige Akteure `innerHTML` als Pfad verwenden, um [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe auf Ihrer Seite auszuführen. Ein sichererer Weg ist die Verwendung von DOM-Scripting-Funktionen wie `createElement()`, `appendChild()` und `textContent`. Die Verwendung von `innerHTML` zum Entfernen von Inhalten ist dagegen weniger problematisch.

### Vervollständigen der `renderHouses()` Funktion

Als Nächstes müssen Sie den Funktionskörper der `renderHouses()` vervollständigen. Diese wird die Daten basierend auf den `<select>` Elementwerten filtern und die Ergebnisse in der Benutzeroberfläche anzeigen.

1. Zuerst müssen Sie die Daten filtern. Dies wird wahrscheinlich am besten mit der Array `filter()` Methode erreicht, die ein neues Array zurückgibt, das nur die Array-Elemente enthält, die das Filterkriterium erfüllen.
   1. Dies ist eine ziemlich komplexe `filter()` Funktion zu schreiben. Sie müssen prüfen, ob die `street` Eigenschaft des Hauses gleich dem ausgewählten Wert des "choose-street" `<select>` ist, und ob die `bedrooms` Eigenschaft des Hauses gleich dem ausgewählten Wert des "choose-bedrooms" `<select>` ist, und ob die `bathrooms` Eigenschaft des Hauses gleich dem ausgewählten Wert des "choose-bathrooms" `<select>` ist.
   2. Jeder Bestandteil des Tests muss immer `true` zurückgeben, wenn der zugehörige `<select>` Wert `""` (der leere String, der alle Werte darstellt) ist. Dies können Sie erreichen, indem Sie jeden Check "kurzschließen".
   3. Sie müssen auch sicherstellen, dass die Datentypen in jedem Check übereinstimmen. Der Wert eines Formularelements ist immer ein String. Dies ist nicht notwendigerweise der Fall für Ihre Objekt-Attributwerte. Wie können Sie sicherstellen, dass die Datentypen für den Test übereinstimmen?
2. Geben Sie die Anzahl der gefilterten Suchergebnisse in das "result-count" `<p>` Element aus, unter Verwendung der Zeichenfolgenstruktur "Results returned: number".
3. Leeren Sie das "output" `<section>` Element, sodass es keine untergeordneten HTML-Elemente mehr hat. Wenn Sie das nicht tun, werden bei jeder Suche die Ergebnisse an das Ende der vorherigen Ergebnisse hinzugefügt statt sie zu ersetzen.
4. Erstellen Sie eine neue Funktion innerhalb `renderHouses()` namens `renderHouse()`. Diese Funktion muss ein Hausobjekt als Argument nehmen und zwei Dinge tun:
   1. Berechnen Sie die Gesamtfläche der Zimmer, die im `room_sizes` Objekt des Hauses enthalten sind. Dies ist nicht so einfach wie das Schleifen durch ein Array von Zahlen und das Summieren, aber es ist nicht allzu kompliziert.
   2. Fügen Sie ein `<article>` Element innerhalb des "output" `<section>` Elements hinzu, das die Hausnummer, den Straßennamen, die Anzahl von Schlafzimmern und Badezimmern, die gesamte Raumfläche und den Preis des Hauses enthält. Sie können die Struktur variieren, aber wir möchten, dass es diesem HTML-Schnipsel ähnlich ist:

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

5. Schleifen Sie durch alle Häuser innerhalb des gefilterten Arrays und geben jedes in einen `renderHouse()` Aufruf.

## Tipps und Hinweise

- Sie müssen HTML oder CSS in keiner Weise ändern.
- Für Aufgaben wie das Finden des größten Wertes in einem Array von Werten ist die `reduce()` Array-Funktion sehr nützlich. Wir haben sie in diesem Kurs nicht behandelt, da sie ziemlich komplex ist, aber sie ist sehr leistungsstark, wenn Sie sich damit vertraut machen. Als ein erweitertes Ziel könnten Sie versuchen, sie zu recherchieren und in Ihrer Antwort zu verwenden.

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
