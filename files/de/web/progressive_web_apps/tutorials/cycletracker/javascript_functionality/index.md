---
title: "CycleTracker: JavaScript Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das JavaScript schreiben, das erforderlich ist, um statisches HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie dies noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien, die `index.html` und `style.css` genannt werden.

Die letzte Zeile der HTML-Datei ruft die `app.js`-JavaScript-Datei auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formularübermittlungen zu erfassen, übermittelte Daten lokal zu speichern und den Abschnitt für vergangene Perioden zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise verbessern, um eine vollständig installierbare PWA zu erstellen, die auch dann funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, prüfen wir, ob er bereits vorhandene Daten im lokalen Speicher hat. Beim ersten Besuch eines Benutzers auf der Seite gibt es noch keine Daten. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular übermittelt, müssen wir:

1. Einen `<h2>Vergangene Perioden</h2>`-Header erstellen
2. Einen {{HTMLelement("ul")}} erstellen
3. Den `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Bei jeder weiteren Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste nach Datum sortieren
3. Den `<ul>` mit der neuen Liste füllen, ein `<li>` pro Zyklus
4. Die Daten an unseren gespeicherten lokalen Speicher anhängen

Vorhandene Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer mit demselben Browser auf demselben Gerät auf unsere Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Einen `<h2>Vergangene Perioden</h2>`-Header erstellen
3. Einen {{HTMLelement("ul")}} erstellen
4. Den `<ul>` mit einem {{HTMLelement("li")}} für jeden Menstruationszyklus füllen, der im lokalen Speicher gespeichert ist.

Dies ist eine Demonstrationsanwendung auf Anfängerniveau. Das Ziel ist es, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerprüfung, Bearbeitungs- oder Löschfunktionen usw. Sie sind eingeladen, die behandelten Funktionen zu erweitern und die Lektion und die Anwendungen auf Ihre Lernziele und Anwendungsanforderungen zuzuschneiden.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlfeldern zum Auswählen der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlfelder sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) `start-date` und `end-date` jeweils.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Ereignislistener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular zu übermitteln, verhindern wir die Übermittlung des Formulars, speichern den neuen Menstruationszyklus, rendern diesen Zeitraum zusammen mit den vorherigen und setzen dann das Formular zurück.

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

1. [Benutzereingaben validieren](#benutzereingaben_validieren), beenden wenn ungültig,
2. den neuen Zeitraum speichern, indem wir Daten im localStorage [abrufen, analysieren, anhängen, sortieren, in einer Zeichenkette umwandeln und erneut speichern](#retrieve_append_sort_and_re-store_data),
3. [die Formulardaten rendern](#daten_auf_dem_bildschirm_rendern) zusammen mit den Daten vergangener Menstruationszyklen und einem Abschnittsheader, und
4. das Formular mit der HTMLFormElement [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) Methode zurücksetzen

### Benutzereingaben validieren

Wir überprüfen, ob die Daten ungültig sind. Wir führen minimale Fehlerprüfungen durch. Wir stellen sicher, dass kein Datum null ist, was das `required`-Attribut verhindern sollte. Wir überprüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Wenn ein Fehler auftritt, löschen wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einfügen, die den Benutzer darüber informieren, dass ein Fehler vorliegt. Eine gute Anwendung würde den Benutzer darüber informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularelement setzen und [ARIA-Liveregionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden, um Benutzer von unterstützenden Technologien auf den Fehler aufmerksam zu machen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), insbesondere [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaare in einem serialisierten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht jedoch für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um dies einfach und nur clientseitig zu gestalten. Dies bedeutet, dass die Daten nur in einem Browser auf einem einzelnen Gerät gespeichert werden. Das Löschen der Browserdaten wird auch dazu führen, dass alle lokal gespeicherten Perioden verloren gehen. Was in vielen Anwendungen wie eine Einschränkung erscheinen mag, kann im Fall dieser Anwendung von Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App sehr wohl um die Privatsphäre besorgt sein darf.

Für eine robustere Anwendung haben andere [clientseitige Speicheroptionen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, später diskutiert, Service Worker, eine bessere Leistung.

Einschränkungen von `localStorage` umfassen:

- Begrenzter Datenspeicher: `localStorage` ist auf 5MB Daten pro Ursprung begrenzt. Unser Speicherbedarf ist viel geringer.
- Speichert nur Zeichenfolgen: `localStorage` speichert Daten als Zeichenfolgen-Schlüssel und Zeichenfolgen-Wert-Paare. Unsere Start- und Enddaten werden als JSON-Objekt gespeichert, das als Zeichenfolge analysiert wird. Für komplexere Daten wäre ein robusteres Speichersystem wie IDB erforderlich.
- Kann schlechte Leistung verursachen: Das Abrufen und Setzen von lokalen Speicher erfolgt synchron im Hauptthread. Wenn der Hauptthread besetzt ist, reagieren Apps nicht und scheinen eingefroren zu sein. Bei dem begrenzten Umfang dieser App ist dieser kurze Moment schlechter Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Zusätzlich zu den Leistungsproblemen beim Besetzen des Hauptthreads haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker die lokalen Speicherdaten nicht direkt setzen oder abrufen kann.

### Abrufen, anhängen, sortieren und erneut speichern von Daten

Da wir `localStorage` verwenden, das aus einer einzigen Zeichenfolge besteht, rufen wir die JSON-Zeichenfolge der Daten aus dem lokalen Speicher ab, analysieren die JSON-Daten (falls vorhanden), fügen das neue Paar Daten zum vorhandenen Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in eine Zeichenfolge und speichern diese Zeichenfolge wieder in `localStorage`.

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

## Daten auf dem Bildschirm rendern

Der letzte Schritt unserer Anwendung ist es, die Liste der vergangenen Perioden zusammen mit einer Überschrift auf dem Bildschirm zu rendern.

In unserem HTML haben wir einen `<section id="past-periods">` Platzhalter hinzugefügt, um die Überschrift und die Liste der vergangenen Perioden zu enthalten.

Fügen Sie das Containerelement zur Liste der Inhalte am Anfang Ihres Skripts hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen die geparste Zeichenfolge der vergangenen Perioden oder ein leeres Array ab. Wenn leer, beenden wir. Wenn vergangene Perioden existieren, löschen wir den aktuellen Inhalt des Containers für vergangene Perioden. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente mit formatierten Angaben zum und vom Datum hinzu.

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

Ihre `app.js`-Datei sollte ähnlich aussehen wie dieses JavaScript:

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

Sie können die voll funktionsfähige [CycleTracker-Zyklusverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, es funktioniert, aber es ist noch keine PWA.

## Als nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise erweitert wird, um offline zu arbeiten. Jetzt, da wir eine voll funktionsfähige Webanwendung haben, fügen wir die erforderlichen Funktionen hinzu, um sie in eine PWA zu verwandeln, einschließlich der [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonografie für unsere CycleTracker-PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
