---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorhergehenden Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das benötigte JavaScript schreiben, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Wenn Sie dies noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die JavaScript-Datei `app.js` auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion schreiben wir clientseitigen JavaScript-Code, um Formularübermittlungen zu erfassen, die übermittelten Daten lokal zu speichern und den Abschnitt für vergangene Perioden auszufüllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise verbessern, um eine voll installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, überprüfen wir, ob er bereits vorhandene Daten im lokalen Speicher hat. Beim ersten Besuch eines neuen Benutzers gibt es noch keine Daten. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular absendet, müssen wir:

1. Eine `<h2>Vergangene Perioden</h2>` Überschrift erstellen
2. Ein {{HTMLelement("ul")}} anlegen
3. Das `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Für jede weitere Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste in chronologischer Reihenfolge sortieren
3. Das `<ul>` mit der neuen Liste neu füllen, ein `<li>` pro Zyklus
4. Die Daten in unserem gespeicherten lokalen Speicher anhängen

Bestehende Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer mit demselben Browser auf demselben Gerät zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Eine `<h2>Vergangene Perioden</h2>` Überschrift erstellen
3. Ein {{HTMLelement("ul")}} anlegen
4. Das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung für Anfänger. Das Ziel ist es, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlertests, Bearbeitungs- oder Löschfunktionen usw. Sie sind herzlich eingeladen, die behandelten Funktionen zu erweitern und die Lektion und Anwendungen an Ihre Lernziele und Anwendungsanforderungen anzupassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlfeldern zum Auswählen der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlfelder sind {{HTMLelement("input")}} vom Typ {{HTMLelement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) von `start-date` und `end-date` bzw.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Event-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular abzuschicken, verhindern wir die Übermittlung des Formulars, speichern den neuen Menstruationszyklus, rendern diesen Zeitraum zusammen mit früheren Perioden und setzen dann das Formular zurück.

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

Nachdem wir die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben:

1. [Validieren wir die Benutzereingabe](#benutzereingabe_validieren); Beenden, wenn ungültig,
2. speichern wir die neue Periode, indem wir die Daten in localStorage [abrufen, analysieren, anhängen, sortieren, in eine Zeichenkette umwandeln und erneut speichern](#retrieve_append_sort_and_re-store_data),
3. [rendern wir die Formulardaten](#daten_auf_dem_bildschirm_rendern) zusammen mit den Daten früherer Menstruationszyklen und einem Abschnittsüberschrift, und
4. setzen wir das Formular mit der HTMLFormElement-Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) zurück

### Benutzereingabe validieren

Wir prüfen, ob die Daten ungültig sind. Wir führen nur minimale Fehlertests durch. Wir stellen sicher, dass kein Datum null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen auch, dass das Startdatum nicht später als das Enddatum ist. Wenn ein Fehler auftritt, löschen wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einschließen, um den Benutzer über den Fehler zu informieren. Eine gute Anwendung würde den Benutzer darüber informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularsteuerelement legen und [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden, um assistive Technologiebenutzer auf den Fehler hinzuweisen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), speziell [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatenpaare in einem als JSON-String formatierten Objekt zu speichern.

[LocalStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, aber es reicht für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um es einfach und clientseitig zu halten. Das bedeutet, dass die Daten nur in einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browserdaten führt dazu, dass alle lokal gespeicherten Perioden ebenfalls verloren gehen. Was bei vielen Anwendungen als Einschränkung erscheinen mag, kann in diesem Fall ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und Benutzer einer solchen App verständlicherweise über die Privatsphäre besorgt sein können.

Für eine robustere Anwendung bieten andere [Client-Seitenspeicher](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) Optionen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, wie später besprochen, Service Worker, eine bessere Leistung.

Einschränkungen von `localStorage` sind:

- Begrenzte Datenspeicherung: `localStorage` ist auf 5 MB Daten pro Ursprung begrenzt. Unsere Speicheranforderungen sind viel geringer.
- Speichert nur Zeichenketten: `localStorage` speichert Daten als Schlüsselpaar und Wertpaar als Zeichenkette. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als Zeichenkette analysiert wird. Für komplexere Daten wäre ein robusteres Speichermedium wie IDB erforderlich.
- Kann schlechte Leistung verursachen: Das Abrufen und Einfügen in und aus dem lokalen Speicher erfolgt synchron im Hauptthread. Wenn der Hauptthread beschäftigt ist, sind Apps nicht reaktionsschnell und erscheinen eingefroren. Bei der begrenzten Natur dieser App ist dieser kurze Moment einer schlechten Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Neben den Leistungsproblemen, die durch die Besetzung des Hauptthreads entstehen, haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen kann.

### Daten abrufen, hinzufügen, sortieren und neu speichern

Da wir localStorage verwenden, das aus einem einzelnen Zeichenkettenwert besteht, rufen wir die JSON-Zeichenkette der Daten aus dem lokalen Speicher ab, analysieren die JSON-Daten (falls vorhanden), fügen das neue Paar von Daten zum vorhandenen Array hinzu, sortieren die Daten, analysieren das JSON-Objekt zurück in eine Zeichenkette und speichern diese Zeichenkette zurück in `localStorage`.

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

Der letzte Schritt unserer Anwendung besteht darin, die Liste vergangener Perioden zusammen mit einer Überschrift auf dem Bildschirm zu rendern.

In unserem HTML haben wir einen Platzhalter `<section id="past-periods">` hinzugefügt, um die Überschrift und die Liste vergangener Perioden zu enthalten.

Fügen Sie das Containerelement am Anfang Ihres Skripts zur Liste der Inhalte hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen die analysierte Zeichenkette vergangener Perioden oder ein leeres Array ab. Wenn es leer ist, beenden wir. Wenn frühere Perioden vorhanden sind, löschen wir den aktuellen Inhalt aus dem vergangenen Periodencontainer. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Start- und Enddaten enthalten.

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

### Früheren Perioden beim Laden rendern

Wenn das verschobene JavaScript beim Laden der Seite ausgeführt wird, rendern wir, falls vorhanden, vergangene Perioden.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Vollständiges JavaScript

Ihre `app.js` Datei sollte diesem JavaScript ähneln:

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

Sie können die voll funktionsfähige [CycleTracker Menstruationszyklus-Tracking Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, sie funktioniert, aber sie ist noch keine PWA.

## Als nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise verbessert wird, um offline zu funktionieren. Jetzt, da wir eine voll funktionsfähige Webanwendung haben, fügen wir die erforderlichen Funktionen hinzu, um sie in eine PWA zu konvertieren, einschließlich der [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbildes und der Ikonographie für unsere CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
