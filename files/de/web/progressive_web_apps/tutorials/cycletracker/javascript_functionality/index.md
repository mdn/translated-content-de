---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und so eine statische Version unserer Web-App erstellt. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um statisches HTML in eine voll funktionsfähige Webanwendung umzuwandeln.

Falls Sie dies noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien mit den Namen `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die JavaScript-Datei `app.js` auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion schreiben wir clientseitigen JavaScript-Code, um Formularübermittlungen zu erfassen, übermittelte Daten lokal zu speichern und den Abschnitt für vergangene Perioden zu befüllen.

Am Ende dieser Lektion verfügen Sie über eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch funktioniert, wenn die Benutzerin oder der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn eine Benutzerin oder ein Benutzer die Seite besucht, prüfen wir, ob bereits Daten im lokalen Speicher vorhanden sind. Beim ersten Besuch der Seite sind keine Daten vorhanden. Wenn eine neue Benutzerin oder ein neuer Benutzer zwei Daten auswählt und das Formular übermittelt, müssen wir:

1. eine Überschrift `<h2>Past periods</h2>` erstellen,
2. ein {{HTMLelement("ul")}} erstellen,
3. das `<ul>` mit einem einzelnen {{HTMLelement("li")}} befüllen, das Informationen über diesen Zyklus enthält,
4. die Daten im lokalen Speicher speichern.

Bei jeder weiteren Formularübermittlung müssen wir:

1. den neuen Menstruationszyklus zur aktuellen Liste hinzufügen,
2. die Liste nach Datum sortieren,
3. das `<ul>` mit der neuen Liste erneut befüllen, mit einem `<li>` pro Zyklus,
4. die Daten an unseren gespeicherten lokalen Speicher anhängen.

Bestehende Benutzerinnen und Benutzer haben bereits Daten im lokalen Speicher. Wenn eine Benutzerin oder ein Benutzer mit demselben Browser auf demselben Gerät zu unserer Webseite zurückkehrt, müssen wir:

1. die Daten aus dem lokalen Speicher abrufen,
2. eine Überschrift `<h2>Past periods</h2>` erstellen,
3. ein {{HTMLelement("ul")}} erstellen,
4. das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus befüllen.

Dies ist eine Demonstrationsanwendung für Einsteigerinnen und Einsteiger. Das Ziel ist, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält keine notwendigen Funktionen wie Formularvalidierung, Fehlerprüfung sowie Bearbeitungs- oder Löschfunktionen. Sie können die behandelten Funktionen gerne erweitern und die Lektion und Anwendungen an Ihre Lernziele und Anwendungsanforderungen anpassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlen zum Auswählen der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlen sind {{HTMLElement("input")}} des Typs {{HTMLElement("input/date", "date")}} mit den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) `start-date` beziehungsweise `end-date`.

Das Formular hat keine Methode und keine Aktion. Stattdessen fügen wir dem Formular mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Event-Listener hinzu. Wenn die Benutzerin oder der Benutzer versucht, das Formular zu übermitteln, verhindern wir die Formularübermittlung, speichern den neuen Menstruationszyklus, rendern diese Periode zusammen mit vorherigen Perioden und setzen dann das Formular zurück.

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

Nachdem wir die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben, gehen wir wie folgt vor:

1. Wir [validieren die Benutzereingabe](#benutzereingabe_validieren) und beenden den Vorgang bei ungültiger Eingabe.
2. Wir speichern die neue Periode, indem wir Daten aus `localStorage` [abrufen, parsen, anhängen, sortieren, in einen String umwandeln und erneut speichern](#retrieve_append_sort_and_re-store_data).
3. Wir [rendern die Formulardaten](#daten_auf_dem_bildschirm_rendern) zusammen mit den Daten vergangener Menstruationszyklen und einer Abschnittsüberschrift.
4. Wir setzen das Formular mit der HTMLFormElement-Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) zurück.

### Benutzereingabe validieren

Wir prüfen, ob die Daten ungültig sind. Wir führen nur eine minimale Fehlerprüfung durch. Wir stellen sicher, dass keines der Daten `null` ist, was das Attribut `required` verhindern sollte. Außerdem prüfen wir, dass das Startdatum nicht nach dem Enddatum liegt. Wenn ein Fehler vorliegt, leeren wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einfügen, die die Benutzerin oder den Benutzer über einen Fehler informieren. Eine gute Anwendung würde mitteilen, worin der Fehler besteht, den Fokus auf das fehlerhafte Formular-Steuerelement setzen und [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, um Nutzende assistiver Technologien über den Fehler zu informieren.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaare in einem als String gespeicherten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht jedoch für die Anforderungen unserer App aus. Wir verwenden `localStorage`, um dies einfach und ausschließlich clientseitig zu halten. Das bedeutet, dass die Daten nur in einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browserdaten entfernt auch alle lokal gespeicherten Perioden. Was für viele Anwendungen wie eine Einschränkung wirken mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und die Nutzerin oder der Nutzer einer solchen App zu Recht um die Privatsphäre besorgt sein kann.

Für eine robustere Anwendung bieten andere Optionen für [clientseitigen Speicher](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage), etwa [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und später behandelte Service Worker, eine bessere Leistung.

Zu den Einschränkungen von `localStorage` gehören:

- Begrenzter Datenspeicher: `localStorage` ist auf 5 MB Daten pro Origin begrenzt. Unser Speicherbedarf ist deutlich geringer.
- Speichert nur Strings: `localStorage` speichert Daten als Paare aus String-Schlüssel und String-Wert. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als String geparst wird. Für komplexere Daten wäre ein robusterer Speichermechanismus wie IDB erforderlich.
- Kann schlechte Leistung verursachen: Das Abrufen und Setzen von Daten aus beziehungsweise in den lokalen Speicher erfolgt synchron im Main Thread. Wenn der Main Thread belegt ist, reagieren Apps nicht und wirken eingefroren. Aufgrund des begrenzten Umfangs dieser App ist diese kurze Beeinträchtigung der Benutzererfahrung vernachlässigbar.
- Nur für den Main Thread verfügbar: Zusätzlich zu den Leistungsproblemen durch die Belegung des Main Thread haben Service Worker keinen Zugriff auf den Main Thread, was bedeutet, dass der Service Worker die Daten im lokalen Speicher nicht direkt setzen oder abrufen kann.

### Daten abrufen, anhängen, sortieren und erneut speichern

Da wir `localStorage` verwenden, das aus einem einzelnen String besteht, rufen wir den JSON-String mit Daten aus dem lokalen Speicher ab, parsen die JSON-Daten, sofern vorhanden, fügen das neue Datenpaar dem bestehenden Array hinzu, sortieren die Daten, wandeln das JSON-Objekt wieder in einen String um und speichern diesen String zurück in `localStorage`.

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

## Daten auf dem Bildschirm rendern

Der letzte Schritt unserer Anwendung besteht darin, die Liste vergangener Perioden zusammen mit einer Überschrift auf dem Bildschirm zu rendern.

In unserem HTML haben wir einen Platzhalter `<section id="past-periods">` hinzugefügt, der die Überschrift und Liste vergangener Perioden enthalten soll.

Fügen Sie das Container-Element zur Inhaltsliste am Anfang Ihres Skripts hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen den geparsten String vergangener Perioden oder ein leeres Array ab. Wenn es leer ist, beenden wir den Vorgang. Wenn vergangene Perioden vorhanden sind, leeren wir den aktuellen Inhalt aus dem Container für vergangene Perioden. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

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

Wenn das mit `defer` geladene JavaScript beim Laden der Seite ausgeführt wird, rendern wir gegebenenfalls vergangene Perioden.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Vollständiges JavaScript

Ihre Datei `app.js` sollte ähnlich wie dieses JavaScript aussehen:

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

Sie können die voll funktionsfähige [CycleTracker-Web-App zur Periodenverfolgung](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, sie funktioniert, aber sie ist noch keine PWA.

## Als Nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise erweitert wird, um offline zu funktionieren. Jetzt, da wir eine voll funktionsfähige Webanwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA umzuwandeln, einschließlich der [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einer [sicheren Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und eines [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Als Erstes erstellen wir die [Manifest-Datei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonografie für unsere CycleTracker-PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
