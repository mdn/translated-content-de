---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im letzten Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt schreiben wir das JavaScript, das erforderlich ist, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie es noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die `app.js` JavaScript-Datei auf. Dies ist das Skript, das wir in diesem Abschnitt erstellen. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formularübermittlungen zu erfassen, übermittelte Daten lokal zu speichern und den Abschnitt für vergangene Perioden zu füllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine vollständig installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, prüfen wir, ob er bereits vorhandene Daten im lokalen Speicher hat. Beim ersten Besuch eines Benutzers auf der Seite sind keine Daten vorhanden. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular absendet, müssen wir:

1. Eine `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
2. Eine {{HTMLelement("ul")}} erstellen
3. Die `<ul>` mit einem einzigen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Für jede nachfolgende Formularübermittlung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste in der zeitlichen Reihenfolge sortieren
3. Die `<ul>` mit der neuen Liste neu befüllen, wobei ein `<li>` pro Zyklus verwendet wird
4. Die Daten zu unserem gespeicherten lokalen Speicher hinzufügen

Bestehende Benutzer haben bereits Daten im lokalen Speicher. Wenn ein Benutzer unsere Webseite mit demselben Browser auf derselben Gerät zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Eine `<h2>Vergangene Perioden</h2>`-Überschrift erstellen
3. Eine {{HTMLelement("ul")}} erstellen
4. Die `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Anwendung, die für Anfänger konzipiert wurde. Das Ziel ist es, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht die notwendigen Funktionen wie Formularvalidierung, Fehlerüberprüfung, Bearbeitungs- oder Löschfunktionalität usw. Sie sind herzlich eingeladen, die behandelten Funktionen zu erweitern und die Lektion und Anwendungen auf Ihre Lernziele und Anwendungsbedürfnisse anzupassen.

## Formularübermittlung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlfeldern zur Auswahl des Start- und Enddatums jedes Menstruationszyklus. Die Datumsauswahlfelder sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit dem [`id`](/de/docs/Web/HTML/Global_attributes/id) von `start-date` und `end-date`.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Ereignis-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular abzusenden, verhindern wir die Formularübermittlung, speichern den neuen Menstruationszyklus, zeigen diesen Zeitraum zusammen mit den vorherigen an und setzen das Formular dann zurück.

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

1. [Validieren der Benutzereingabe](#benutzer-eingabe_validieren); beenden, wenn ungültig,
2. Speichern des neuen Zeitraums durch [Abrufen, Parsen, Anhängen, Sortieren, Stringifizieren und Wieder-Speichern](#retrieve_append_sort_and_re-store_data) der Daten in `localStorage`,
3. [Anzeigen der Formulardaten auf dem Bildschirm](#daten_auf_dem_bildschirm_anzeigen) zusammen mit den Daten früherer Menstruationszyklen und einem Abschnittskopf, und
4. Zurücksetzen des Formulars mit der HTMLFormElement-Methode [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)

### Benutzer-Eingabe validieren

Wir prüfen, ob die Daten ungültig sind. Wir führen nur eine minimale Fehlerüberprüfung durch. Wir stellen sicher, dass keines der Daten null ist, was das `required`-Attribut verhindern sollte. Wir prüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Bei einem Fehler löschen wir das Formular.

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

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einschließen, die den Benutzer auf einen Fehler hinweisen. Eine gute Anwendung würde den Benutzer informieren, was der Fehler ist, den Fokus auf das fehlerhafte Formularsteuerelement legen und [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden, um Benutzer unterstützender Technologien auf den Fehler hinzuweisen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), speziell [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatenpaare in einem stringifizierten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht aber für die Bedürfnisse unserer App aus. Wir verwenden `localStorage`, um dies einfach und nur clientseitig zu gestalten. Das bedeutet, die Daten werden nur in einem Browser auf einem einzigen Gerät gespeichert. Beim Löschen der Browserdaten gehen auch alle lokal gespeicherten Perioden verloren. Was für viele Anwendungen wie eine Einschränkung erscheinen mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklus-Daten persönlich sind und der Benutzer einer solchen App sehr wohl Bedenken bezüglich der Privatsphäre haben könnte.

Für eine robustere Anwendung bieten andere [Client-Seitige Speicher](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) Optionen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und, wie später besprochen, Service Worker, eine bessere Leistung.

Einschränkungen von `localStorage` umfassen:

- Begrenzte Datenspeicherung: `localStorage` ist auf 5MB Daten pro Ursprung begrenzt. Unser Speicherbedarf ist viel geringer.
- Speichert nur Strings: `localStorage` speichert Daten als String-Schlüssel und String-Wert-Paare. Unsere Start- und Enddaten werden als ein als String geparstes JSON-Objekt gespeichert. Für komplexere Daten wäre ein robusterer Speichermechanismus wie IDB erforderlich.
- Kann zu schlechter Leistung führen: Das Abrufen und Setzen in und aus dem lokalen Speicher erfolgt synchron im Haupt-Thread. Wenn der Haupt-Thread beschäftigt ist, reagieren Apps nicht und erscheinen eingefroren. Aufgrund der begrenzten Natur dieser App ist dieser Fehler in der Benutzererfahrung vernachlässigbar.
- Nur für den Haupt-Thread verfügbar: Zusätzlich zu den Leistungsproblemen beim Belegen des Haupt-Threads können Service Worker nicht auf den Haupt-Thread zugreifen, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen oder diese setzen kann.

### Daten abrufen, anhängen, sortieren und neu speichern

Da wir `localStorage` verwenden, das aus einem einzigen String besteht, rufen wir den JSON-String der Daten aus dem lokalen Speicher ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Paar von Daten dem bestehenden Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in einen String und speichern diesen String erneut in `localStorage`.

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

## Daten auf dem Bildschirm anzeigen

Der letzte Schritt unserer Anwendung besteht darin, die Liste der vergangenen Perioden zusammen mit einer Überschrift auf dem Bildschirm anzuzeigen.

In unserem HTML haben wir einen `<section id="past-periods">` Platzhalter hinzugefügt, um die Überschrift und Liste der vergangenen Perioden zu enthalten.

Fügen Sie das Containerelement der Liste der Inhalte am Anfang Ihres Skripts hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen den geparsten String der vergangenen Perioden ab oder ein leeres Array. Wenn leer, beenden wir. Wenn vergangene Perioden existieren, löschen wir den aktuellen Inhalt aus dem Container für die vergangenen Perioden. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente mit formatierten Von- und Bis-Daten hinzu.

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

### Vergangene Perioden beim Laden anzeigen

Wenn das verzögerte JavaScript beim Laden der Seite ausgeführt wird, zeigen wir die vergangenen Perioden an, falls vorhanden.

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

Sie können die vollständig funktionierende [CycleTracker Periodenverfolgungs-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Quellcode der Web-App](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub ansehen. Ja, es funktioniert, aber es ist noch keine PWA.

## Als Nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise verbessert wird, um offline zu funktionieren. Jetzt, da wir eine voll funktionsfähige Webanwendung haben, fügen wir die Funktionen hinzu, die erforderlich sind, um sie in eine PWA umzuwandeln, einschließlich der [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sicherer Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifest-Datei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), die die Identität, das Erscheinungsbild und die Ikonographie für unsere CycleTracker PWA umfasst.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
