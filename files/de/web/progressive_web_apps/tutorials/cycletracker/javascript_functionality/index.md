---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 8c9757f8e731192497ea293b129d731702e06a34
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker erstellt und so eine statische Version unserer Web-App entwickelt. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie es noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien mit den Namen `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die `app.js` JavaScript-Datei auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formularübermittlungen zu erfassen, übermittelte Daten lokal zu speichern und den Bereich für vergangene Perioden zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine voll installierbare PWA zu erstellen, die auch funktioniert, wenn der Nutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Nutzer die Seite besucht, prüfen wir, ob bereits Daten im Local Storage gespeichert sind. Beim ersten Besuch eines Nutzers auf der Seite gibt es keine Daten. Wenn ein neuer Nutzer zwei Daten auswählt und das Formular übermittelt, müssen wir:

1. Eine `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Die `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im Local Storage speichern

Bei jeder weiteren Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste in Datumsreihenfolge sortieren
3. Die `<ul>` mit der neuen Liste füllen, ein `<li>` pro Zyklus
4. Die Daten zu unserem gespeicherten Local Storage hinzufügen

Bestehende Nutzer haben bereits Daten im Local Storage. Wenn ein Nutzer mit demselben Browser auf demselben Gerät zu unserer Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem Local Storage abrufen
2. Eine `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Die `<ul>` mit einem {{HTMLelement("li")}} für jeden im Local Storage gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung für Anfänger. Das Ziel ist es, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu lehren. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerprüfung, Bearbeitungs- oder Löschfunktionen usw. Sie sind eingeladen, die abgedeckten Funktionen zu erweitern und die Lektion und Anwendungen Ihren Lernzielen und Anwendungsbedürfnissen anzupassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumswählern zum Auswählen der Start- und Enddaten jedes Menstruationszyklus. Die Datumswähler sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `start-date` und `end-date` jeweils.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Ereignis-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Nutzer versucht, das Formular zu übermitteln, verhindern wir die Übermittlung, speichern den neuen Menstruationszyklus, rendern diesen Zeitraum zusammen mit den vorherigen und setzen dann das Formular zurück.

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

Nachdem wir die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben, führen wir Folgendes aus:

1. [Benutzereingaben validieren](#benutzereingaben_validieren); bei ungültiger Eingabe wird beendet,
2. den neuen Zeitraum speichern, indem Daten im localStorage [abgerufen, geparst, angehängt, sortiert, in einen String umgewandelt und wieder gespeichert](#retrieve_append_sort_and_re-store_data) werden,
3. [die Formulardaten rendern](#daten_auf_dem_bildschirm_rendern) zusammen mit den Daten vergangener Menstruationszyklen und einem Abschnittsheader und
4. das Formular mit der HTMLFormElement-Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) zurücksetzen

### Benutzereingaben validieren

Wir überprüfen, ob die Daten ungültig sind. Wir führen nur minimale Fehlerprüfungen durch. Wir stellen sicher, dass kein Datum null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Wenn ein Fehler auftritt, leeren wir das Formular.

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

In einer robusteren Version dieser App würden wir zumindest Fehlernachrichten einfügen, die den Nutzer darüber informieren, dass ein Fehler vorliegt. Eine gute Anwendung würde den Nutzer darüber informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularelement legen und [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, um Benutzer von unterstützenden Techniken auf den Fehler aufmerksam zu machen.

## Local Storage

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatenpaare in einem zeichenketteninternen JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, genügt jedoch den Anforderungen unserer App. Wir verwenden localStorage, um es einfach und rein clientseitig zu machen. Das bedeutet, dass die Daten nur in einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browserdaten führt auch zum Verlust aller lokal gespeicherten Perioden. Was für viele Anwendungen als Einschränkung erscheinen mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Nutzer einer solchen App möglicherweise berechtigte Bedenken hinsichtlich der Privatsphäre hat.

Für eine robustere Anwendung bieten andere [Client-seitige Speicher](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) Optionen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, später besprochen, Service Worker, bessere Leistung.

Einschränkungen von `localStorage` umfassen:

- Begrenzte Datenspeicherung: `localStorage` ist auf 5 MB Daten pro Ursprung begrenzt. Unser Speicherbedarf liegt weit darunter.
- Speichert nur Zeichenketten: `localStorage` speichert Daten als Zeichenketten-Schlüssel- und Zeichenketten-Wertpaare. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als Zeichenkette geparst wird. Für komplexere Daten wäre ein robusteres Speichermedium wie IDB erforderlich.
- Kann zu schlechter Leistung führen: Das Holen und Setzen von und zu local storage erfolgt synchron im Haupt-Thread. Wenn der Haupt-Thread ausgelastet ist, reagieren Apps nicht mehr und wirken eingefroren. Mit der eingeschränkten Natur dieser App ist dieser kurze Moment schlechter Nutzererfahrung vernachlässigbar.
- Nur für den Haupt-Thread verfügbar: Zusätzlich zu den Leistungseinbußen bei der Belegung des Haupt-Threads haben Service Worker keinen Zugriff auf den Haupt-Thread, das bedeutet, dass der Service Worker nicht direkt den Local Storage setzen oder abrufen kann.

### Daten abrufen, anhängen, sortieren und erneut speichern

Da wir `localStorage` verwenden, das aus einer einzelnen Zeichenkette besteht, rufen wir die JSON-Zeichenkette der Daten aus dem Local Storage ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Datumspaar zum vorhandenen Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in eine Zeichenkette und speichern diese Zeichenkette zurück in `localStorage`.

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

Der letzte Schritt unserer Anwendung besteht darin, die Liste der vergangenen Perioden zusammen mit einer Überschrift auf dem Bildschirm anzuzeigen.

In unserem HTML haben wir einen `<section id="past-periods">`-Platzhalter hinzugefügt, der die Überschrift und die Liste der vergangenen Perioden enthält.

Fügen Sie das Container-Element der Inhaltsliste oben in Ihrem Skript hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen die geparste Zeichenkette der vergangenen Perioden ab oder ein leeres Array, falls keine vorhanden sind. Wenn sie leer ist, beenden wir. Wenn vergangene Perioden existieren, löschen wir den aktuellen Inhalt des Vergangene-Perioden-Containers. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

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

Ihre `app.js`-Datei sollte diesem JavaScript ähneln:

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

Sie können die voll funktionsfähige [CycleTracker Menstruationszyklus-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Source-Code der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, sie funktioniert, aber es ist noch keine PWA.

## Als Nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise erweitert wird, um offline zu arbeiten. Jetzt, da wir eine vollständig funktionale Webanwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA umzuwandeln, einschließlich der [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sicherer Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifest-Datei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonografie für unsere CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
