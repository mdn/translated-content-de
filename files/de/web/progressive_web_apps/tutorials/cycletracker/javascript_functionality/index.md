---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript-Funktionalität
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um aus statischem HTML eine vollständig funktionale Webanwendung zu gestalten.

Falls Sie dies noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die JavaScript-Datei `app.js` auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formulareingaben zu erfassen, übermittelte Daten lokal zu speichern und den Abschnitt "Vergangene Perioden" zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch offline funktioniert.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, prüfen wir, ob bereits Daten im lokalen Speicher gespeichert sind. Beim ersten Besuch eines Nutzers auf der Seite werden keine Daten vorhanden sein. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular absendet, müssen wir:

1. Einen `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Das `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Bei jeder weiteren Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste nach Datum sortieren
3. Das `<ul>` mit der neuen Liste erneut füllen, ein `<li>` pro Zyklus
4. Die Daten zu unserem gespeicherten lokalen Speicher hinzufügen

Bestehende Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer mit demselben Browser auf demselben Gerät auf unsere Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Einen `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Das `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung für Anfänger. Das Ziel ist, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerüberprüfung, Bearbeitungs- oder Löschfunktionen usw. Sie können die behandelten Funktionen erweitern und die Lektion und Anwendungen an Ihre Lernziele und App-Anforderungen anpassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlen zur Auswahl der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlen sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) von `start-date` und `end-date` jeweils.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Ereignislistener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular abzusenden, verhindern wir die Übermittlung, speichern den neuen Menstruationszyklus, stellen diesen Zeitraum zusammen mit vorherigen dar und setzen dann das Formular zurück.

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

Nachdem wir die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert haben, führen wir folgende Schritte aus:

1. [Benutzereingaben validieren](#benutzereingaben_validieren); beenden, falls ungültig,
2. den neuen Zeitraum speichern, indem wir Daten in localStorage [abrufen, parsen, hinzufügen, sortieren, in Zeichenfolgen umwandeln und erneut speichern](#retrieve_append_sort_and_re-store_data),
3. [Formulardaten darstellen](#daten_auf_dem_bildschirm_darstellen) zusammen mit den Daten vergangener Menstruationszyklen und einem Abschnittskopf, und
4. das Formular mit der Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) von HTMLFormElement zurücksetzen

### Benutzereingaben validieren

Wir prüfen, ob die Daten ungültig sind. Wir führen nur minimale Fehlerüberprüfungen durch. Wir stellen sicher, dass keines der beiden Daten null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Wenn ein Fehler vorliegt, leeren wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einbauen, um den Benutzer über einen Fehler zu informieren. Eine gute Anwendung würde den Benutzer informieren, welcher Fehler aufgetreten ist, den Fokus auf das fehlgeleitete Steuerelement setzen und [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) nutzen, um Benutzern von unterstützenden Technologien den Fehler mitzuteilen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaare in einem serialisierten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht aber für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um dies einfach und nur clientseitig zu halten. Das bedeutet, dass die Daten nur in einem Browser auf einem einzelnen Gerät gespeichert werden. Das Löschen der Browserdaten führt auch dazu, dass alle lokal gespeicherten Perioden verloren gehen. Was für viele Anwendungen wie eine Einschränkung erscheinen mag, kann in diesem Fall ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App sehr zu Recht über die Privatsphäre besorgt sein könnte.

Für eine robustere Anwendung haben andere [Client-seitige Speicherungsoptionen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, später behandelt, Service Worker, eine bessere Leistung.

Die Einschränkungen von `localStorage` umfassen:

- Begrenzter Datenspeicher: `localStorage` ist auf 5 MB Daten pro Ursprung begrenzt. Unser Speicherbedarf ist viel geringer.
- Speichert nur Zeichenfolgen: `localStorage` speichert Daten als Zeichenfolgenpaare von Schlüssel und Wert. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als Zeichenfolge geparst wird. Für komplexere Daten wäre ein robusteres Speichersystem wie IDB erforderlich.
- Kann zu schlechter Leistung führen: Das Abrufen und Speichern in und von localStorage erfolgt synchron im Haupt-Thread. Wenn der Haupt-Thread ausgelastet ist, sind Apps nicht ansprechend und scheinen eingefroren zu sein. Bei der begrenzten Natur dieser App ist dieser schlechte Benutzererfahrungs-Buckel vernachlässigbar.
- Nur dem Haupt-Thread zugänglich: Zusätzlich zu den Leistungsproblemen der Auslastung des Haupt-Threads haben Service Worker keinen Zugang zum Haupt-Thread, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen oder sie setzen kann.

### Daten abrufen, hinzufügen, sortieren und erneut speichern

Da wir localStorage verwenden, das aus einer einzelnen Zeichenfolge besteht, rufen wir den JSON-Datenstring aus dem lokalen Speicher ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Datenpaar dem vorhandenen Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in eine Zeichenfolge und speichern diese Zeichenfolge zurück in `localStorage`.

Dieser Prozess erfordert die Erstellung einiger Funktionen:

```js
// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // Get data from storage.
  const periods = getAllStoredPeriods();

  // Add the new period objet to the end of the array of period objects.
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

## Daten auf dem Bildschirm darstellen

Der letzte Schritt unserer Anwendung besteht darin, die Liste vergangener Perioden zusammen mit einer Überschrift auf dem Bildschirm anzuzeigen.

In unserem HTML haben wir einen `<section id="past-periods">` Platzhalter hinzugefügt, der die Überschrift und die Liste der vergangenen Perioden enthält.

Fügen Sie das Containerelement zur Liste der Inhalte oben in Ihrem Skript hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen die geparste String der vergangenen Perioden ab oder ein leeres Array. Wenn es leer ist, beenden wir. Wenn vergangene Perioden existieren, leeren wir die aktuellen Inhalte im Container für vergangene Perioden. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

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

### Vergangene Perioden beim Laden darstellen

Wenn das verzögerte JavaScript beim Laden der Seite ausgeführt wird, stellen wir vergangene Perioden, falls vorhanden, dar.

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

Sie können die vollständig funktionierende [CycleTracker Periode-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, sie funktioniert, aber es ist noch keine PWA.

## Als Nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise verbessert wird, um offline zu arbeiten. Jetzt, da wir eine voll funktionsfähige Webanwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA zu verwandeln, einschließlich der [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifest-Datei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonografie für unsere CycleTracker-PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
