---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das JavaScript schreiben, das benötigt wird, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie dies noch nicht getan haben, kopieren Sie den [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien mit den Namen `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die `app.js`-JavaScript-Datei auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formularübermittlungen zu erfassen, die übermittelten Daten lokal zu speichern und den Abschnitt vergangene Perioden zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, überprüfen wir, ob bereits Daten im lokalen Speicher gespeichert sind. Beim ersten Besuch eines Benutzers auf der Seite sind keine Daten vorhanden. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular übermittelt, müssen wir:

1. Einen `<h2>Past periods</h2>`-Header erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Das `<ul>` mit einem {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Bei jeder weiteren Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus der aktuellen Liste hinzufügen
2. Die Liste nach Datum sortieren
3. Das `<ul>` mit der neuen Liste erneut füllen, ein `<li>` pro Zyklus
4. Die Daten an unseren gespeicherten lokalen Speicher anhängen

Bestehende Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer mit demselben Browser auf demselben Gerät zurück auf unsere Webseite kommt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Einen `<h2>Past periods</h2>`-Header erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Anwendungsdemonstration für Anfänger. Das Ziel ist, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu lehren. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerüberprüfung, Bearbeitungs- oder Löschfunktionen etc. Sie sind eingeladen, die behandelten Funktionen zu erweitern und die Lektion sowie die Anwendungen an Ihre Lernziele und Anwendungsbedürfnisse anzupassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlen zur Auswahl der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlen sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) `start-date` und `end-date`.

Das Formular hat keine Methode und keine Aktion. Stattdessen fügen wir dem Formular einen Ereignislistener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular zu übermitteln, verhindern wir die Übermittlung, speichern den neuen Menstruationszyklus, rendern diese Periode zusammen mit den vorherigen und setzen dann das Formular zurück.

```js
// create constants for the form and the form controls
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  // Prevent the form from submitting to the server
  // since everything is client-side.
  event.preventDefault();

  // Get the start and end dates from the form.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Check if the dates are invalid
  if (checkDatesInvalid(startDate, endDate)) {
    // If the dates are invalid, exit.
    return;
  }

  // Store the new period in our client-side storage.
  storeNewPeriod(startDate, endDate);

  // Refresh the UI.
  renderPastPeriods();

  // Reset the form.
  newPeriodFormEl.reset();
});
```

Nachdem wir die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben, werden wir:

1. [Benutzereingaben validieren](#benutzereingaben_validieren); beenden, wenn ungültig,
2. die neue Periode speichern, indem wir [Daten im localStorage abrufen, parsen, anhängen, sortieren, serialisieren und erneut speichern](#retrieve_append_sort_and_re-store_data),
3. [die Formulardaten rendern](#daten_auf_dem_bildschirm_rendern) zusammen mit den Daten der vergangenen Menstruationszyklen und einem Abschnittsüberschrift, und
4. das Formular mit der Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) des HTMLFormElement-Objekts zurücksetzen.

### Benutzereingaben validieren

Wir prüfen, ob die Daten ungültig sind. Wir führen nur minimale Fehlerprüfung durch. Wir stellen sicher, dass kein Datum null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Wenn ein Fehler vorliegt, löschen wir das Formular.

```js
function checkDatesInvalid(startDate, endDate) {
  // Check that end date is after start date and neither is null.
  if (!startDate || !endDate || startDate > endDate) {
    // To make the validation robust we could:
    // 1. add error messaging based on error type
    // 2. Alert assistive technology users about the error
    // 3. move focus to the error location
    // instead, for now, we clear the dates if either
    // or both are invalid
    newPeriodFormEl.reset();
    // as dates are invalid, we return true
    return true;
  }
  // else
  return false;
}
```

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einfügen, die den Benutzer darüber informieren, dass ein Fehler vorliegt. Eine gute Anwendung würde den Benutzer darüber informieren, worin der Fehler besteht, den Fokus auf das betroffene Formularelement legen und [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, um Benutzer von unterstützenden Technologien auf den Fehler aufmerksam zu machen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaare in einem JSON-Objekt als Zeichenfolge zu speichern.

[localStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht aber für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um das Ganze einfach und nur clientseitig zu halten. Das bedeutet, dass die Daten nur in einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browerdaten führt auch zum Verlust aller lokal gespeicherten Perioden. Was für viele Anwendungen wie eine Einschränkung erscheint, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App durchaus berechtigt besorgt über die Privatsphäre sein kann.

Für eine robustere Anwendung haben andere [clientseitige Speicheroptionen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, weiter unten besprochen, Service Worker eine bessere Leistung.

Einschränkungen von `localStorage` beinhalten:

- Begrenzter Datenspeicher: `localStorage` ist auf 5 MB Daten pro Ursprung begrenzt. Unser Speicherbedarf ist viel geringer.
- Speichert nur Zeichenfolgen: `localStorage` speichert Daten als Zeichenfolgenpaare von Schlüsseln und Werten. Unsere Start- und Enddaten werden als JSON-Objekt in Form einer Zeichenfolge gespeichert. Bei komplexeren Daten wäre ein robusteres Speichersystem wie IDB erforderlich.
- Kann schlechte Leistung verursachen: Das Abrufen und Festlegen von Daten aus und in den lokalen Speicher erfolgt synchron im Hauptthread. Wenn der Hauptthread besetzt ist, sind Anwendungen nicht reaktionsfähig und erscheinen eingefroren. Bei der eingeschränkten Natur dieser App ist dieser kurze Ausfall der Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Zusätzlich zu den Leistungsproblemen der Hauptthread-Besetzung haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen oder sie setzen kann.

### Daten abrufen, anhängen, sortieren und erneut speichern

Da wir localStorage verwenden, das aus einem einzelnen String besteht, rufen wir den JSON-String der Daten aus dem lokalen Speicher ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Paar von Daten dem bestehenden Array hinzu, sortieren die Daten, konvertieren das JSON-Objekt zurück in einen String und speichern diesen String wieder in `localStorage`.

Dieser Prozess erfordert die Erstellung einiger Funktionen:

```js
// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // Get data from storage.
  const periods = getAllStoredPeriods();

  // Add the new period object to the end of the array of period objects.
  periods.push({ startDate, endDate });

  // Sort the array so that periods are ordered by start date, from newest
  // to oldest.
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // Store the updated array back in the storage.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // Get the string of period data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no periods were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

## Daten auf dem Bildschirm rendern

Der letzte Schritt unserer Anwendung besteht darin, die Liste der vergangenen Perioden zusammen mit einer Überschrift auf den Bildschirm zu rendern.

In unserem HTML haben wir einen Platzhalter `<section id="past-periods">` hinzugefügt, um die Überschrift und Liste der vergangenen Perioden zu enthalten.

Fügen Sie das Containerelement zur Inhaltsliste am Anfang Ihres Skripts hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen den geparsten String der vergangenen Perioden ab oder ein leeres Array. Wenn es leer ist, beenden wir. Wenn vergangene Perioden existieren, löschen wir die aktuellen Inhalte aus dem Container der vergangenen Perioden. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

```js
function renderPastPeriods() {
  // get the parsed string of periods, or an empty array.
  const periods = getAllStoredPeriods();

  // exit if there are no periods
  if (periods.length === 0) {
    return;
  }

  // Clear the list of past periods, since we're going to re-render it.
  pastPeriodContainer.textContent = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // Loop over all periods and render them.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // Convert the date string to a Date object.
  const date = new Date(dateString);

  // Format the date into a locale-specific string.
  // include your locale for better user experience
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
```

### Vergangene Perioden beim Laden rendern

Wenn das verzögerte JavaScript beim Laden der Seite ausgeführt wird, rendern wir vergangene Perioden, falls vorhanden.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Vollständiges JavaScript

Ihre `app.js`-Datei sollte so ähnlich aussehen wie dieses JavaScript:

```js
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if (periods.length === 0) {
    return;
  }
  pastPeriodContainer.textContent = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

renderPastPeriods();
```

Sie können die voll funktionsfähige [CycleTracker-Periodenverfolgung-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, es funktioniert, aber es ist noch keine PWA.

## Als nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise so verbessert wird, dass sie offline funktioniert. Da wir jetzt eine voll funktionsfähige Web-Anwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA zu konvertieren, einschließlich der [manifest file](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Aussehens und der Ikonografie für unsere CycleTracker-PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
