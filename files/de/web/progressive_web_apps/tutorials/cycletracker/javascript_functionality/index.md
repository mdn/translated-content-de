---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker erstellt und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das erforderliche JavaScript schreiben, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie es noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie diese in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die JavaScript-Datei `app.js` auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formulareinreichungen zu erfassen, eingereichte Daten lokal zu speichern und den Abschnitt „Vergangene Zeiträume“ zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, überprüfen wir, ob er bereits vorhandene Daten im lokalen Speicher gespeichert hat. Beim ersten Besuch gibt es keine Daten. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular absendet, müssen wir:

1. Einen `<h2>Vergangene Zeiträume</h2>`-Header erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Das `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Für jede weitere Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste nach Datum sortieren
3. Das `<ul>` mit der neuen Liste neu füllen, ein `<li>` pro Zyklus
4. Die Daten zu unserem gespeicherten lokalen Speicher hinzufügen

Bestehende Benutzer werden bereits Daten im lokalen Speicher haben. Wenn ein Benutzer mit demselben Browser auf demselben Gerät zu unserer Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Einen `<h2>Vergangene Zeiträume</h2>`-Header erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung für Anfänger. Das Ziel ist es, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält keine notwendigen Funktionen wie Formularvalidierung, Fehlerprüfung, Bearbeitungs- oder Löschfunktionen usw. Sie sind eingeladen, die behandelten Funktionen zu erweitern und die Lektion und Anwendungen an Ihre Lernziele und Anwendungsbedürfnisse anzupassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumseingabefeldern zur Auswahl der Start- und Enddaten jedes Menstruationszyklus. Die Datumseingabefelder sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `start-date` und `end-date`.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Event-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular abzusenden, verhindern wir, dass das Formular absendet, speichern den neuen Menstruationszyklus, rendern diesen Zeitraum zusammen mit den vorherigen und setzen das Formular dann zurück.

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

Nachdem wir das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben, werden wir:

1. [Benutzereingaben validieren](#benutzereingaben_validieren); bei ungültigen Eingaben abbrechen,
2. den neuen Zeitraum speichern, indem wir Daten im localStorage [abrufen, analysieren, anhängen, sortieren, serialisieren und erneut speichern](#retrieve_append_sort_and_re-store_data),
3. [die Formulardaten rendern](#daten_auf_den_bildschirm_rendern) zusammen mit den Daten vergangener Menstruationszyklen und einem Abschnittsheader, und
4. das Formular mit der HTMLFormElement-Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) zurücksetzen.

### Benutzereingaben validieren

Wir überprüfen, ob die Daten ungültig sind. Wir führen eine minimale Fehlerprüfung durch. Wir stellen sicher, dass kein Datum null ist, was durch das `required`-Attribut verhindert werden sollte. Wir prüfen auch, ob das Startdatum nicht nach dem Enddatum liegt. Bei einem Fehler löschen wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens eine Fehlermeldung einfügen, die den Benutzer über einen Fehler informiert. Eine gute Anwendung würde den Benutzer darüber informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularfeld legen und [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, um Benutzer von unterstützenden Technologien auf den Fehler aufmerksam zu machen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), speziell [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumpaare in einem serialisierten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht aber für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um es einfach und nur clientseitig zu halten. Dies bedeutet, dass die Daten nur auf einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browserdaten führt auch dazu, dass alle lokal gespeicherten Perioden verloren gehen. Was für viele Anwendungen als Einschränkung erscheinen mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App sehr wohl um die Privatsphäre besorgt sein darf.

Für eine robustere Anwendung würden andere [clientseitige Speicheroptionen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, später diskutiert, Service Worker eine bessere Leistung bieten.

Einschränkungen von `localStorage` umfassen:

- Begrenzte Datenspeicherung: `localStorage` ist auf 5MB Daten pro Ursprungsdomäne begrenzt. Unser Speicherbedarf ist weit darunter.
- Speichert nur Zeichenfolgen: `localStorage` speichert Daten als Zeichenfolgen-Schlüssel und Zeichenfolgen-Wert-Paare. Unsere Start- und Enddaten werden als ein JSON-Objekt gespeichert, das als Zeichenfolge analysiert wird. Für komplexere Daten wäre ein robusteres Speichermedium wie IDB erforderlich.
- Kann zu schlechter Leistung führen: Das Abrufen und Setzen von Daten im lokalen Speicher wird synchron im Hauptthread vorgenommen. Wenn der Hauptthread beschäftigt ist, reagieren Apps nicht und scheinen eingefroren zu sein. Bei der begrenzten Natur dieser App ist dieser geringe Verlust an Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Zusätzlich zu den Leistungsproblemen beim Belegen des Hauptthreads haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker die lokalen Speicherdaten nicht direkt setzen oder abrufen kann.

### Daten abrufen, anhängen, sortieren und erneut speichern

Da wir localStorage verwenden, das aus einer einzigen Zeichenfolge besteht, rufen wir die JSON-Zeichenfolge der Daten aus dem lokalen Speicher ab, analysieren die JSON-Daten (falls vorhanden), fügen das neue Paar von Daten zum vorhandenen Array hinzu, sortieren die Daten, analysieren das JSON-Objekt zurück in eine Zeichenfolge und speichern diese Zeichenfolge zurück in den `localStorage`.

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
  periods.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

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

## Daten auf den Bildschirm rendern

Der letzte Schritt unserer Anwendung besteht darin, die Liste vergangener Perioden zusammen mit einer Überschrift auf dem Bildschirm anzuzeigen.

In unserem HTML haben wir einen `<section id="past-periods">`-Platzhalter hinzugefügt, um die Überschrift und die Liste vergangener Perioden zu enthalten.

Fügen Sie das Containerelement in die Liste der Inhalte oben im Skript ein.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen die analysierte Zeichenfolge der vergangenen Perioden oder ein leeres Array ab. Wenn es leer ist, beenden wir den Vorgang. Wenn vergangene Perioden existieren, löschen wir den aktuellen Inhalt aus dem Vergangene-Zeiträume-Container. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente mit formatierten Von- und Bis-Daten hinzu.

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

### Vergangene Zeiträume beim Laden rendern

Wenn das verzögerte JavaScript beim Laden der Seite läuft, rendern wir vergangene Perioden, falls vorhanden.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Vollständiges JavaScript

Ihre `app.js`-Datei sollte ähnlich wie dieses JavaScript aussehen:

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
  periods.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
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

Sie können die voll funktionsfähige [CycleTracker-Periodenverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, es funktioniert, aber es ist noch keine PWA.

## Als nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise erweitert wird, um offline zu funktionieren. Da wir nun eine voll funktionsfähige Webanwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA umzuwandeln, einschließlich der [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einer [sicheren Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und eines [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbildes und der Ikonographie für unsere CycleTracker-PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
