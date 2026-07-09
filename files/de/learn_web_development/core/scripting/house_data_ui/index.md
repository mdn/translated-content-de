---
title: "Herausforderung: Erstellung einer Benutzeroberfläche für Hausdaten"
short-title: "Herausforderung: Hausdaten-UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung sollen Sie etwas JavaScript für eine Such-/Filterseite einer Immobilien-Website schreiben. Dies beinhaltet das Abrufen von JSON-Daten, das Filtern dieser Daten basierend auf den in bereitgestellten Formular-Steuerelementen eingegebenen Werten und das Rendern dieser Daten in der Benutzeroberfläche. Dabei testen wir auch Ihr Wissen über Bedingungsanweisungen, Schleifen, Arrays und Array-Methoden und mehr.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der unten stehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität abzuschließen.

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

Ihnen wurde eine HTML-Startseite bereitgestellt, die ein Formular enthält, in dem der Benutzer nach Häusern nach Straße, Anzahl der Schlafzimmer und Anzahl der Badezimmer suchen kann, sowie ein paar Elemente, um Suchergebnisse anzuzeigen. Ihnen wurde auch eine JavaScript-Datei bereitgestellt, die einige Konstanten- und Variablendefinitionen enthält, sowie ein paar Skelettfunktion-Definitionen. Ihre Aufgabe ist es, das fehlende JavaScript auszufüllen, damit die Haussuchschnittstelle funktioniert.

Die bereitgestellten Konstanten- und Variablendefinitionen enthalten die folgenden Referenzen:

- `streetSelect`: Das "choose-street" `<select>`-Element.
- `bedroomSelect`: Das "choose-bedrooms" `<select>`-Element.
- `bathroomSelect`: Das "choose-bathrooms" `<select>`-Element.
- `form`: Das gesamte `<form>`-Element, das die `<select>`-Elemente enthält.
- `resultCount`: Das "result-count" `<p>`-Element, das aktualisiert wird, um die Anzahl der Ergebnisse anzuzeigen, die nach jeder Suche zurückgegeben werden.
- `output`: Das "output" `<section>`-Element, das die Suchergebnisse anzeigt.
- `houses`: Zunächst leer, aber dies wird das Hausdatenobjekt enthalten, das durch das Parsen der abgerufenen JSON-Daten erstellt wird.

Die Skelettfunktionen sind:

- `initializeForm()`: Diese wird die Daten abfragen und die `<select>`-Elemente mit den möglichen Werten füllen, nach denen gesucht werden könnte.
- `renderHouses()`: Diese wird die Daten basierend auf den `<select>`-Elementwerten filtern und die Ergebnisse rendern.

### Abrufen der Daten

Das Erste, was Sie tun müssen, ist eine neue Funktion zu erstellen, um die Hausdaten abzurufen und sie in der `houses`-Variable zu speichern.

So gehen Sie vor:

1. Erstellen Sie eine neue Funktion direkt unter den Variablen- und Konstantensedefinitionen mit dem Namen `fetchHouseData()`.
2. Verwenden Sie im Funktionskörper die `fetch()`-Methode, um das JSON von [https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) abzurufen. Sie sollten die Struktur dieser Daten studieren, um sich auf einige der späteren Schritte vorzubereiten.
3. Wenn das resultierende Versprechen aufgelöst wird, prüfen Sie die `ok`-Eigenschaft der Antwort. Wenn sie `false` ist, werfen Sie einen benutzerdefinierten Fehler, der den `status` der Antwort meldet.
4. Vorausgesetzt die Antwort ist in Ordnung, geben Sie die Antwort als JSON mithilfe der `json()`-Methode zurück.
5. Wenn das resultierende Versprechen aufgelöst wird, setzen Sie die `houses`-Variable gleich dem Ergebnis der `json()`-Methode (dies sollte ein Array von Objekten mit Hausdaten sein) und rufen Sie die `initializeForm()`-Funktion auf.

### Fertigstellung der `initializeForm()`-Funktion

Jetzt müssen Sie den Inhalt der `initializeForm()`-Funktion schreiben. Diese wird die in `houses` gespeicherten Daten abfragen und sie verwenden, um die `<select>`-Elemente mit `<option>`-Elementen zu füllen, die alle unterschiedlichen Werte darstellen, nach denen gefiltert werden könnte. Momentan enthalten die `<select>`-Elemente nur ein einziges `<option>`-Element mit einem Wert von `""` (einer leeren Zeichenkette), das alle Werte repräsentiert. Der Benutzer kann diese Option wählen, wenn er nicht möchte, dass die Ergebnisse nach diesem Feld gefiltert werden.

Im Funktionskörper schreiben Sie Code, der Folgendes tut:

1. Erstellen Sie `<option>`-Elemente für alle verschiedenen Straßennamen im "choose-street" `<select>`. Es gibt ein paar Möglichkeiten, dies zu tun, aber wir würden empfehlen, ein temporäres Array zu erstellen und dann alle Objekte innerhalb von `houses` zu durchlaufen. Innerhalb der Schleife prüfen Sie, ob Ihr temporäres Array die `street`-Eigenschaft des aktuellen Hauses enthält. Wenn nicht, fügen Sie es dem temporären Array hinzu und fügen Sie ein `<option>` zum "choose-street" `<select>` hinzu, das die `street`-Eigenschaft als Wert enthält.
2. Erstellen Sie Optionen für alle möglichen Schlafzimmeranzahlwerte im "choose-bedrooms" `<select>`. Um dies zu tun, könnten Sie durch das `houses`-Array laufen und bestimmen, was der größte `bedrooms`-Wert ist, dann eine zweite Schleife schreiben, die ein `<option>` zum "choose-bedrooms" `<select>` für jede Zahl von `1` bis zu diesem größten Wert hinzufügt.
3. Erstellen Sie Optionen für alle möglichen Badezimmeranzahlwerte im "choose-bathrooms" `<select>`. Dies kann mit derselben Technik wie im vorherigen Schritt gelöst werden.

> [!NOTE]
> Sie _könnten_ einfach die `<option>`-Elemente im HTML hartkodieren, aber das würde nur für genau diesen Datensatz funktionieren. Wir möchten, dass Sie JavaScript schreiben, das das Formular korrekt für die bereitgestellten Datenwerte ausfüllen wird (jedes Hausobjekt müsste dieselbe Struktur haben).

> [!NOTE]
> Sie könnten die `innerHTML`-Eigenschaft verwenden, um untergeordnete Inhalte innerhalb von HTML-Elementen hinzuzufügen, aber wir empfehlen, dies nicht zu tun. Sie können nicht immer den Daten trauen, die Sie auf Ihrer Seite hinzufügen: Wenn sie nicht richtig auf dem Server sanitisiert werden, könnten böswillige Akteure `innerHTML` als Weg nutzen, um [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe auf Ihrer Seite durchzuführen. Ein sichererer Weg ist es, DOM-Scripting-Funktionen wie `createElement()`, `appendChild()` und `textContent` zu verwenden. Die `innerHTML`-Verwendung zum Entfernen untergeordneter Inhalte ist nicht so problematisch.

### Fertigstellung der `renderHouses()`-Funktion

Als Nächstes müssen Sie den Körper der `renderHouses()`-Funktion abschließen. Diese wird die Daten basierend auf den `<select>`-Elementwerten filtern und die Ergebnisse in der Benutzeroberfläche rendern.

1. Zuerst müssen Sie die Daten filtern. Dies ist wahrscheinlich am besten mit der Array-`filter()`-Methode zu erreichen, die ein neues Array zurückgibt, das nur die Array-Elemente enthält, die die Filterkriterien erfüllen.
   1. Dies ist eine ziemlich komplexe `filter()`-Funktion zum Schreiben. Sie müssen prüfen, ob die `street`-Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-street" `<select>` übereinstimmt, ob die `bedrooms`-Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-bedrooms" `<select>` übereinstimmt, und ob die `bathrooms`-Eigenschaft des Hauses mit dem ausgewählten Wert des "choose-bathrooms" `<select>` übereinstimmt.
   2. Jeder Teil des Tests muss immer `true` zurückgeben, wenn der zugehörige `<select>`-Wert `""` ist (die leere Zeichenkette, die alle Werte repräsentiert). Dies können Sie erreichen, indem Sie jeden Check "kurzschließen".
   3. Sie müssen auch sicherstellen, dass die Datentypen in jedem Check zusammenpassen. Der Wert eines Formularelements ist immer eine Zeichenkette. Dies ist nicht unbedingt der Fall für Ihre Objektproperty-Werte. Wie können Sie sicherstellen, dass die Datentypen für den Test übereinstimmen?
2. Geben Sie die Anzahl der gefilterten Suchergebnisse in das "result-count" `<p>`-Element aus, mit der String-Struktur "Results returned: number".
3. Leeren Sie das "output" `<section>`-Element, sodass es keine untergeordneten HTML-Elemente mehr hat. Wenn Sie dies nicht tun, werden bei jeder Suchanfrage die Ergebnisse an das Ende der vorherigen Ergebnisse angehängt, anstatt sie zu ersetzen.
4. Erstellen Sie eine neue Funktion innerhalb von `renderHouses()` namens `renderHouse()`. Diese Funktion muss ein Hausobjekt als Argument nehmen und zwei Dinge tun:
   1. Berechnen Sie die gesamte Fläche der Räume, die sich innerhalb des `room_sizes`-Objekts des Hauses befinden. Dies ist nicht so einfach wie das Durchlaufen eines Arrays von Zahlen und das Addieren, aber es ist nicht allzu schwierig.
   2. Fügen Sie ein `<article>`-Element im "output" `<section>`-Element hinzu, das die Hausnummer, den Straßennamen, die Anzahl der Schlafzimmer und Badezimmer, die Gesamtfläche der Räume und den Preis des Hauses enthält. Sie können die Struktur variieren, wir würden es gern ähnlich wie dieses HTML-Snippet haben:

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

5. Durchlaufen Sie alle Häuser innerhalb des gefilterten Arrays und übergeben Sie jedes an einen `renderHouse()`-Aufruf.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise ändern.
- Um Dinge wie den größten Wert in einem Wertarray zu finden, ist die `reduce()` Array-Funktion sehr hilfreich. Wir haben sie in diesem Kurs nicht gelehrt, da sie ziemlich komplex ist, aber sie ist wirklich mächtig, wenn man sich mit ihr vertraut gemacht hat. Als Stretch-Ziel versuchen Sie, sie zu recherchieren und in Ihrer Antwort zu verwenden.

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
