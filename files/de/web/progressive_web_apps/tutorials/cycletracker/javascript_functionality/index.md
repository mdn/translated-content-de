---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das erforderliche JavaScript schreiben, um das statische HTML in eine vollständig funktionsfähige Web-Anwendung umzuwandeln.

Falls Sie es noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die JavaScript-Datei `app.js` auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formularübermittlungen zu erfassen, übermittelte Daten lokal zu speichern und den Abschnitt für vergangene Perioden zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, überprüfen wir, ob er bereits vorhandene Daten im lokalen Speicher gespeichert hat. Beim ersten Besuch eines Benutzers auf der Seite gibt es keine Daten. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular abschickt, müssen wir:

1. Eine Überschrift `<h2>Past periods</h2>` erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Das `<ul>` mit einer einzelnen {{HTMLelement("li")}} füllen, die Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Für jede weitere Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste in chronologischer Reihenfolge sortieren
3. Das `<ul>` mit der neuen Liste neu füllen, ein `<li>` pro Zyklus
4. Die Daten unserem gespeicherten lokalen Speicher hinzufügen

Vorhandene Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer mit demselben Browser auf demselben Gerät zu unserer Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Eine Überschrift `<h2>Past periods</h2>` erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung auf Anfängerniveau. Das Ziel ist es, die Grundlagen der Umwandlung einer Web-Anwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerprüfung, Bearbeitungs- oder Löschfunktionalität usw. Sie können die abgedeckten Funktionen erweitern und die Lektion sowie Anwendungen an Ihre Lernziele und Anwendungsbedürfnisse anpassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumswählern zur Auswahl der Start- und Enddaten jedes Menstruationszyklus. Die Datumswähler sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) `start-date` und `end-date`.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir einen Event-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Formular hinzu. Wenn der Benutzer versucht, das Formular abzusenden, verhindern wir die Übermittlung des Formulars, speichern den neuen Menstruationszyklus, rendern diesen Zeitraum zusammen mit vorherigen und setzen dann das Formular zurück.

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

Nachdem die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert wurde, führen wir folgende Schritte aus:

1. [Benutzereingaben validieren](#benutzereingaben_validieren); beenden, wenn ungültig,
2. neuen Zeitraum speichern, indem wir Daten in `localStorage` [abrufen, parsen, anhängen, sortieren, serialisieren und neu speichern](#retrieve_append_sort_and_re-store_data),
3. [die Formulardaten mit den Daten früherer Menstruationszyklen und einer Abschnittsüberschrift rendern](#daten_auf_dem_bildschirm_rendern), und
4. das Formular mit der Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) des HTMLFormElement zurücksetzen

### Benutzereingaben validieren

Wir überprüfen, ob die Daten ungültig sind. Wir führen minimale Fehlerprüfungen durch. Wir stellen sicher, dass kein Datum null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen außerdem, dass das Startdatum nicht größer als das Enddatum ist. Bei einem Fehler löschen wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einfügen, die den Benutzer über einen Fehler informieren. Eine gute Anwendung würde den Benutzer darüber informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularfeld setzen und [ARIA live regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, um Benutzer von Hilfstechnologien auf den Fehler aufmerksam zu machen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaare in einem serialisierten JSON-Objekt zu speichern.

[localStorage](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, erfüllt jedoch die Anforderungen unserer App. Wir verwenden localStorage, um es einfach und nur clientseitig zu halten. Das bedeutet, die Daten werden nur in einem Browser auf einem einzigen Gerät gespeichert. Wenn die Browserdaten gelöscht werden, gehen auch alle lokal gespeicherten Perioden verloren. Was für viele Anwendungen wie eine Einschränkung erscheinen mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App durchaus besorgt über die Privatsphäre sein könnte.

Für eine robustere Anwendung bieten andere [Clientspeicheroptionen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, später besprochen, Service Worker, eine bessere Leistung.

Einschränkungen von `localStorage` umfassen:

- Begrenzter Datenspeicher: `localStorage` ist auf 5MB Daten pro Ursprung begrenzt. Unsere Speicheranforderungen sind weit darunter.
- Speichert nur Strings: `localStorage` speichert Daten als Schlüssel- und Wertpaare im Stringformat. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als String geparst wird. Für komplexere Daten wäre ein robusterer Speichermechanismus wie IDB erforderlich.
- Kann zu schlechten Leistungswerten führen: Das Abrufen und Setzen in den lokalen Speicher erfolgt synchron im Hauptthread. Wenn der Hauptthread beansprucht wird, sind Apps nicht reaktionsfähig und scheinen eingefroren. Bei der begrenzten Natur dieser App ist dieser kurze Moment schlechter Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Zusätzlich zu den Leistungsproblemen des besetzten Hauptthreads haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen kann.

### Daten abrufen, anhängen, sortieren und neu speichern

Da wir localStorage verwenden, das aus einem einzigen String besteht, rufen wir den JSON-String der Daten aus dem lokalen Speicher ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Datumspaar zum bestehenden Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in einen String und speichern diesen String erneut in `localStorage`.

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

Der letzte Schritt unserer Anwendung besteht darin, die Liste vergangener Perioden zusammen mit einer Überschrift auf dem Bildschirm anzuzeigen.

In unserem HTML haben wir einen `<section id="past-periods">` Platzhalter hinzugefügt, um die Überschrift und die Liste vergangener Perioden zu enthalten.

Fügen Sie das Containerelement der Liste der Inhalte oben in Ihrem Skript hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen den geparsten String vergangener Perioden oder ein leeres Array ab. Wenn es leer ist, beenden wir. Wenn vergangene Perioden existieren, löschen wir die aktuellen Inhalte aus dem früheren Periodencontainer. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

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

Ihre `app.js` Datei sollte ähnlich wie dieses JavaScript aussehen:

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

Sie können die voll funktionsfähige [CycleTracker Periodenverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub einsehen. Ja, sie funktioniert, aber sie ist noch keine PWA.

## Als Nächstes

Im Kern ist eine PWA eine Web-Anwendung, die installierbar ist und schrittweise erweitert wird, um offline zu funktionieren. Jetzt, da wir eine voll funktionsfähige Web-Anwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA zu konvertieren, einschließlich der [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), der [sicheren Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und des [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonographie für unsere CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
