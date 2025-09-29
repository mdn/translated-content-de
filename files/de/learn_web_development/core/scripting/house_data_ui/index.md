---
title: "Herausforderung: UI für Hausdaten erstellen"
short-title: "Herausforderung: Hausdaten-UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie einige JavaScript für eine Such-/Filterseite auf einer Immobilien-Website schreiben. Dies wird das Abrufen von JSON-Daten, das Filtern dieser Daten basierend auf den in den bereitgestellten Formularsteuerelementen eingegebenen Werten und das Rendern dieser Daten in der Benutzeroberfläche beinhalten. Unterwegs wird auch Ihr Wissen über Bedingungen, Schleifen, Arrays und Array-Methoden und mehr getestet.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der unten stehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Sie folgen dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität abzuschließen.

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

Sie haben eine HTML-Startseite mit einem Formular erhalten, das es dem Benutzer ermöglicht, nach Häusern zu suchen, basierend auf der Straße, der Anzahl der Schlafzimmer und der Anzahl der Badezimmer, plus ein paar Elemente zur Aufnahme von Suchergebnissen. Außerdem wurde Ihnen eine JavaScript-Datei zur Verfügung gestellt, die einige Konstante und Variabledefinitionen sowie ein paar Skeleton-Funktionsdefinitionen enthält. Ihre Aufgabe ist es, den fehlenden JavaScript-Code zu ergänzen, um die Haussuche-Schnittstelle funktionsfähig zu machen.

Die bereitgestellten Konstante und Variabledefinitionen enthalten die folgenden Referenzen:

- `streetSelect`: Das "choose-street" `<select>`-Element.
- `bedroomSelect`: Das "choose-bedrooms" `<select>`-Element.
- `bathroomSelect`: Das "choose-bathrooms" `<select>`-Element.
- `form`: Das übergreifende `<form>`-Element, das die `<select>`-Elemente enthält.
- `resultCount`: Das "result-count" `<p>`-Element, das aktualisiert wird, um die Anzahl der zurückgegebenen Ergebnisse nach jeder Suche anzuzeigen.
- `output`: Das "output" `<section>`-Element, das die Suchergebnisse anzeigt.
- `houses`: Anfangs leer, wird dies das Hausdatenobjekt enthalten, das durch das Parsen der abgerufenen JSON-Daten erstellt wird.

Die Skeleton-Funktionen sind:

- `initializeForm()`: Diese wird die Daten abfragen und die `<select>`-Elemente mit den möglichen Werten füllen, die gesucht werden könnten.
- `renderHouses()`: Diese wird die Daten basierend auf den `<select>`-Elementwerten filtern und die Ergebnisse rendern.

### Abrufen der Daten

Das Erste, was Sie tun müssen, ist eine neue Funktion zu erstellen, um die Hausdaten abzurufen und in der Variable `houses` zu speichern.

Um dies zu tun:

1. Erstellen Sie eine neue Funktion direkt unter den Variable- und Konstanten-Definitionen namens `fetchHouseData()`.
2. Verwenden Sie im Funktionskörper die Methode `fetch()`, um das JSON unter [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) abzurufen. Sie sollten die Struktur dieser Daten studieren, um sich auf einige der späteren Schritte vorzubereiten.
3. Wenn das resultierende Promise aufgelöst wird, überprüfen Sie die Eigenschaft `ok` der Antwort. Wenn sie `false` ist, werfen Sie einen benutzerdefinierten Fehler, der den `status` der Antwort meldet.
4. Vorausgesetzt, die Antwort ist ok, geben Sie die Antwort als JSON mit der Methode `json()` zurück.
5. Wenn das resultierende Promise aufgelöst wird, setzen Sie die Variable `houses` gleich dem Ergebnis der Methode `json()` (dies sollte ein Array von Objekten mit Hausdaten sein) und rufen Sie die Funktion `initializeForm()` auf.

### Vervollständigung der Funktion `initializeForm()`

Nun müssen Sie den Inhalt der Funktion `initializeForm()` schreiben. Diese wird die in `houses` gespeicherten Daten abfragen und verwenden, um die `<select>`-Elemente mit `<option>`-Elementen zu füllen, die alle unterschiedlichen Werte repräsentieren, die gefiltert werden könnten. Gegenwärtig enthalten die `<select>`-Elemente nur ein einziges `<option>`-Element mit einem Wert von `""` (eine leere Zeichenkette), das alle Werte repräsentiert. Der Benutzer kann diese Option wählen, wenn die Ergebnisse nicht nach diesem Feld gefiltert werden sollen.

Schreiben Sie im Funktionskörper Code, der Folgendes tut:

1. Erstellen Sie `<option>`-Elemente für alle verschiedenen Straßennamen innerhalb des "choose-street" `<select>`. Es gibt einige Möglichkeiten, dies zu tun, aber wir empfehlen, ein temporäres Array zu erstellen und dann durch alle Objekte in `houses` zu schleifen. Überprüfen Sie innerhalb der Schleife, ob Ihr temporäres Array die `street`-Eigenschaft des aktuellen Hauses enthält. Wenn nicht, fügen Sie sie dem temporären Array hinzu und fügen Sie ein `<option>` zum "choose-street" `<select>` hinzu, das die `street`-Eigenschaft als seinen Wert enthält.
2. Erstellen Sie Optionen für alle möglichen Schlafzimmerzahlwerte innerhalb des "choose-bedrooms" `<select>`. Um dies zu tun, könnten Sie durch das Array `houses` schleifen und herausfinden, was der größte `bedrooms`-Wert ist, dann eine zweite Schleife schreiben, die ein `<option>` zum "choose-bedrooms" `<select>` für jede Zahl von `1` bis zu diesem größten Wert hinzufügt.
3. Erstellen Sie Optionen für alle möglichen Badezimmerzahlwerte im "choose-bathrooms" `<select>`. Dies kann mit der gleichen Technik wie im vorherigen Schritt gelöst werden.

> [!NOTE]
> Sie _könnten_ die `<option>`-Elemente einfach im HTML hartkodieren, aber das würde nur für diesen exakten Datensatz funktionieren. Wir möchten, dass Sie JavaScript schreiben, das das Formular unabhängig von den bereitgestellten Datenwerten korrekt ausfüllt (jedes Hausobjekt müsste die gleiche Struktur haben).

> [!NOTE]
> Sie könnten die Eigenschaft `innerHTML` verwenden, um untergeordneten Inhalt in HTML-Elemente hinzuzufügen, aber wir empfehlen, dies nicht zu tun. Sie können den Daten, die Sie Ihrer Seite hinzufügen, nicht immer vertrauen: Wenn sie nicht auf dem Server ordnungsgemäß bereinigt sind, könnten schlechte Akteure `innerHTML` als Weg verwenden, um [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe auf Ihrer Seite durchzuführen. Ein sicherer Weg ist die Verwendung von DOM-Scripting-Funktionen wie `createElement()`, `appendChild()` und `textContent`. Die Verwendung von `innerHTML` zum Entfernen von untergeordnetem Inhalt ist nicht so problematisch.

### Vervollständigung der Funktion `renderHouses()`

Als Nächstes müssen Sie den Funktionskörper von `renderHouses()` vervollständigen. Diese wird die Daten basierend auf den `<select>`-Elementwerten filtern und die Ergebnisse in der Benutzeroberfläche rendern.

1. Zuerst müssen Sie die Daten filtern. Dies wird wahrscheinlich am besten mit der Array-Methode `filter()` erreicht, die ein neues Array zurückgibt, das nur die Array-Elemente enthält, die die Filterkriterien erfüllen.
   1. Dies ist eine ziemlich komplexe `filter()`-Funktion, die geschrieben werden muss. Sie müssen testen, ob die `street`-Eigenschaft des Hauses dem ausgewählten Wert des "choose-street" `<select>` entspricht, und ob die `bedrooms`-Eigenschaft des Hauses dem ausgewählten Wert des "choose-bedrooms" `<select>` entspricht, und ob die `bathrooms`-Eigenschaft des Hauses dem ausgewählten Wert des "choose-bathrooms" `<select>` entspricht.
   2. Jede Komponente des Tests muss immer `true` zurückgeben, wenn der zugehörige `<select>`-Wert `""` ist (die leere Zeichenkette, die alle Werte repräsentiert). Sie können dies erreichen, indem Sie jede Prüfung "kurzschließen".
   3. Sie müssen auch sicherstellen, dass die Datentypen in jeder Prüfung übereinstimmen. Der Wert eines Formularelements ist immer eine Zeichenkette. Dies ist nicht unbedingt der Fall für Ihre Objekt-Property-Werte. Wie können Sie die Datentypen für die Zwecke des Tests übereinstimmen lassen?
2. Geben Sie die Anzahl der gefilterten Suchergebnisse im "result-count" `<p>`-Element aus, mit der Zeichenfolgenstruktur "Results returned: number".
3. Leeren Sie das "output" `<section>`-Element, damit es keine untergeordneten HTML-Elemente mehr hat. Wenn Sie dies nicht tun, werden die Ergebnisse bei jeder durchgeführten Suche an das Ende der vorherigen Ergebnisse angehängt, anstatt sie zu ersetzen.
4. Erstellen Sie eine neue Funktion innerhalb von `renderHouses()` namens `renderHouse()`. Diese Funktion muss ein Hausobjekt als Argument nehmen und zwei Dinge tun:
   1. Berechnen Sie die Gesamtfläche der Räume, die im `room_sizes`-Objekt des Hauses enthalten sind. Dies ist nicht so einfach wie das Durchlaufen eines Arrays von Zahlen und deren Summierung, aber es ist nicht zu kompliziert.
   2. Fügen Sie ein `<article>`-Element in das "output" `<section>`-Element ein, das die Hausnummer, den Straßennamen, die Anzahl der Schlafzimmer und Badezimmer, die gesamte Raumfläche und den Preis des Hauses enthält. Sie können die Struktur variieren, wenn Sie möchten, aber wir hätten gerne, dass es dieser HTML-Snippet ähnelt:

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

5. Schleifen Sie durch alle Häuser im gefilterten Array und geben Sie jedes einzeln in einen `renderHouse()`-Aufruf.

## Tipps und Hinweise

- Sie müssen den HTML- oder CSS-Code in keiner Weise ändern.
- Für Dinge wie das Finden des größten Wertes in einem Array von Werten ist die `reduce()`-Array-Funktion wirklich praktisch. Wir haben sie in diesem Kurs nicht gelehrt, da sie ziemlich komplex ist, aber sie ist wirklich mächtig, wenn man sie erst einmal beherrscht. Als Stretch-Ziel versuchen Sie, diese zu recherchieren und in Ihrer Antwort zu verwenden.

## Beispiel

Ihre fertige App sollte wie im folgenden Live-Beispiel funktionieren:

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

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
