---
title: "CycleTracker: JavaScript-Funktionalität"
short-title: JavaScript-Funktionalität
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Im vorherigen Abschnitt haben wir das HTML und CSS für CycleTracker geschrieben und eine statische Version unserer Web-App erstellt. In diesem Abschnitt werden wir das JavaScript schreiben, das notwendig ist, um das statische HTML in eine voll funktionsfähige Webanwendung zu verwandeln.

Falls Sie dies noch nicht getan haben, kopieren Sie das [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) und das [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) und speichern Sie sie in Dateien namens `index.html` und `style.css`.

Die letzte Zeile in der HTML-Datei ruft die `app.js` JavaScript-Datei auf. Dieses Skript erstellen wir in diesem Abschnitt. In dieser Lektion werden wir clientseitigen JavaScript-Code schreiben, um Formulareinreichungen zu erfassen, eingereichte Daten lokal zu speichern und den Abschnitt für vergangene Perioden auszufüllen.

Am Ende dieser Lektion haben Sie eine voll funktionsfähige App. In zukünftigen Lektionen werden wir die App schrittweise erweitern, um eine voll installierbare PWA zu erstellen, die auch funktioniert, wenn der Benutzer offline ist.

## JavaScript-Aufgabe

Wenn ein Benutzer die Seite besucht, überprüfen wir, ob bereits Daten im lokalen Speicher gespeichert sind. Beim ersten Besuch eines Benutzers auf der Seite sind keine Daten vorhanden. Wenn ein neuer Benutzer zwei Daten auswählt und das Formular absendet, müssen wir:

1. Eine "`<h2>Vergangene Perioden</h2>`" Überschrift erstellen
2. Ein {{HTMLelement("ul")}} erstellen
3. Die `<ul>` mit einem einzelnen {{HTMLelement("li")}} füllen, das Informationen über diesen Zyklus enthält
4. Die Daten im lokalen Speicher speichern

Bei jeder weiteren Formulareinreichung müssen wir:

1. Den neuen Menstruationszyklus zur aktuellen Liste hinzufügen
2. Die Liste nach Datum sortieren
3. Die `<ul>` mit der neuen Liste neu füllen, ein `<li>` pro Zyklus
4. Die Daten unserem gespeicherten lokalen Speicher anfügen

Bestehende Benutzer werden bereits Daten im lokalen Speicher haben. Wenn ein Benutzer mit demselben Browser auf demselben Gerät zu unserer Webseite zurückkehrt, müssen wir:

1. Die Daten aus dem lokalen Speicher abrufen
2. Eine "`<h2>Vergangene Perioden</h2>`" Überschrift erstellen
3. Ein {{HTMLelement("ul")}} erstellen
4. Die `<ul>` mit einem {{HTMLelement("li")}} für jeden im lokalen Speicher gespeicherten Menstruationszyklus füllen.

Dies ist eine Demonstrationsanwendung auf Anfängerniveau. Das Ziel ist, die Grundlagen der Umwandlung einer Webanwendung in eine PWA zu vermitteln. Diese Anwendung enthält nicht notwendige Funktionen wie Formularvalidierung, Fehlerprüfung, Bearbeitungs- oder Löschfunktionen usw. Sie sind eingeladen, die behandelten Funktionen zu erweitern und die Lektion und Anwendungen an Ihre Lernziele und Anwendungsbedürfnisse anzupassen.

## Formulareinreichung

Die Seite enthält ein {{HTMLelement("form")}} mit Datumsauswahlen zur Auswahl der Start- und Enddaten jedes Menstruationszyklus. Die Datumsauswahlen sind {{HTMLElement("input")}} vom Typ {{HTMLElement("input/date", "date")}} mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) von `start-date` und `end-date`.

Das Formular hat keine Methode oder Aktion. Stattdessen fügen wir dem Formular einen Event-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Benutzer versucht, das Formular abzusenden, verhindern wir die Übermittlung des Formulars, speichern den neuen Menstruationszyklus, stellen diesen Zeitraum zusammen mit früheren dar und setzen das Formular dann zurück.

```js
// Erstellen Sie Konstanten für das Formular und die Formularelemente
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Hören Sie auf Formulareinreichungen.
newPeriodFormEl.addEventListener("submit", (event) => {
  // Verhindern Sie die Übermittlung des Formulars an den Server,
  // da alles clientseitig erfolgt.
  event.preventDefault();

  // Holen Sie sich die Start- und Enddaten aus dem Formular.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Überprüfen Sie, ob die Daten ungültig sind
  if (checkDatesInvalid(startDate, endDate)) {
    // Wenn die Daten ungültig sind, beenden.
    return;
  }

  // Speichern Sie die neue Periode im Client-seitigen Speicher.
  storeNewPeriod(startDate, endDate);

  // Aktualisieren Sie die Benutzeroberfläche.
  renderPastPeriods();

  // Setzen Sie das Formular zurück.
  newPeriodFormEl.reset();
});
```

Nachdem die Formulareinreichung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert wurde, führen wir aus:

1. [Validieren Sie die Benutzereingabe](#validieren_sie_die_benutzereingabe); beenden, wenn ungültig,
2. speichern Sie die neue Periode durch [Abrufen, Parsen, Anhängen, Sortieren, Stringifizieren und Wieder-Speichern](#retrieve_append_sort_and_re-store_data) der Daten in localStorage,
3. [Darstellen der Formulardaten](#daten_auf_den_bildschirm_rendern) zusammen mit den Daten vergangener Menstruationszyklen und einem Abschnittsheader, und
4. setzen Sie das Formular mit der HTMLFormElement [`reset()`](/de/docs/Web/API/HTMLFormElement/reset) Methode zurück

### Validieren Sie die Benutzereingabe

Wir überprüfen, ob die Daten ungültig sind. Wir führen minimale Fehlerprüfungen durch. Wir stellen sicher, dass keines der Daten null ist, was das `required` Attribut verhindern sollte. Wir prüfen auch, dass das Startdatum nicht größer als das Enddatum ist. Wenn ein Fehler vorliegt, leeren wir das Formular.

```js
function checkDatesInvalid(startDate, endDate) {
  // Überprüfen Sie, dass das Enddatum nach dem Startdatum liegt und keines null ist.
  if (!startDate || !endDate || startDate > endDate) {
    // Um die Validierung robust zu gestalten, könnten wir:
    // 1. Fehlermeldungen basierend auf dem Fehlertyp hinzufügen
    // 2. Nutzer von assistiven Technologien über den Fehler informieren
    // 3. den Fokus auf den Fehlerort setzen
    // stattdessen leeren wir vorerst die Daten, wenn eines
    // oder beide ungültig sind
    newPeriodFormEl.reset();
    // Da die Daten ungültig sind, geben wir true zurück
    return true;
  }
  // sonst
  return false;
}
```

In einer robusteren Version dieser App würden wir mindestens Fehlermeldungen einbeziehen, die den Benutzer darüber informieren, dass ein Fehler vorliegt. Eine gute Anwendung würde den Benutzer darüber informieren, was der Fehler ist, den Fokus auf das betroffene Formularelement setzen und [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden, um Nutzer von assistiven Technologien auf den Fehler aufmerksam zu machen.

## Lokaler Speicher

Wir verwenden die [Web Storage API](/de/docs/Web/API/Web_Storage_API), speziell [window.localStorage](/de/docs/Web/API/Window/localStorage), um Start- und Enddatumspaarungen in einem stringifizierten JSON-Objekt zu speichern.

[LocalStorage](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) hat mehrere Einschränkungen, reicht jedoch für die Bedürfnisse unserer App aus. Wir verwenden localStorage, um dies einfach und nur clientseitig zu gestalten. Das bedeutet, dass die Daten nur in einem Browser auf einem einzigen Gerät gespeichert werden. Das Löschen der Browserdaten führt auch zum Verlust aller lokal gespeicherten Perioden. Was für viele Anwendungen wie eine Einschränkung erscheinen mag, kann im Fall dieser Anwendung ein Vorteil sein, da Menstruationszyklusdaten persönlich sind und der Benutzer einer solchen App sehr wohl um die Privatsphäre besorgt sein könnte.

Für eine robustere Anwendung haben andere [clientseitige Speicheroptionen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) und später diskutierte Service Worker eine bessere Leistung.

Einschränkungen von `localStorage` umfassen:

- Begrenzte Datenspeicherung: `localStorage` ist auf 5MB Daten pro Quelle begrenzt. Unsere Speicherbedürfnisse sind viel geringer.
- Speichert nur Zeichenfolgen: `localStorage` speichert Daten als Zeichenfolgen-Schlüssel und Zeichenfolgen-Wertepaare. Unsere Start- und Enddaten werden als JSON-Objekt, das als Zeichenfolge geparst wird, gespeichert. Für komplexere Daten wäre ein robusteres Speichermedium wie IDB erforderlich.
- Kann schlechte Leistung verursachen: Abrufen und Speichern aus und in den lokalen Speicher erfolgt synchron im Hauptthread. Wenn der Hauptthread beschäftigt ist, sind Apps nicht reaktionsschnell und wirken eingefroren. Bei der begrenzten Natur dieser App ist dieses kurze Aufflackern einer schlechten Benutzererfahrung vernachlässigbar.
- Nur für den Hauptthread verfügbar: Zusätzlich zu den Leistungsproblemen durch Belegung des Hauptthreads haben Service Worker keinen Zugriff auf den Hauptthread, was bedeutet, dass der Service Worker nicht direkt auf die lokalen Speicherdaten zugreifen oder sie setzen kann.

### Daten abrufen, anfügen, sortieren und wieder speichern

Da wir localStorage verwenden, das aus einem einzigen String besteht, rufen wir den JSON-String von Daten aus dem lokalen Speicher ab, parsen die JSON-Daten (falls vorhanden), fügen das neue Datumspaar dem bestehenden Array hinzu, sortieren die Daten, parsen das JSON-Objekt zurück in einen String und speichern diesen String erneut in `localStorage`.

Dieser Prozess erfordert die Erstellung einiger Funktionen:

```js
// Fügen Sie den Speicherschlüssel als anwendungsweite Konstante hinzu
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // Holen Sie Daten aus dem Speicher.
  const periods = getAllStoredPeriods();

  // Fügen Sie das neue Periodenobjekt am Ende des Arrays von Periodenobjekten hinzu.
  periods.push({ startDate, endDate });

  // Sortieren Sie das Array, sodass die Perioden nach Startdatum geordnet sind, von neuestem
  // bis zum ältesten.
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // Speichern Sie das aktualisierte Array wieder im Speicher.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // Holen Sie den String der Periodendaten aus dem localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // Wenn keine Perioden gespeichert wurden, standardmäßig auf ein leeres Array.
  // andernfalls, geben Sie die gespeicherten Daten als geparstes JSON zurück.
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

## Daten auf den Bildschirm rendern

Der letzte Schritt unserer Anwendung besteht darin, die Liste der vergangenen Perioden zusammen mit einer Überschrift auf den Bildschirm zu rendern.

In unserem HTML haben wir einen `<section id="past-periods">` Platzhalter hinzugefügt, um die Überschrift und die Liste der vergangenen Perioden zu enthalten.

Fügen Sie das Containerelement zur Liste der Inhalte am Anfang Ihres Skripts hinzu.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

Wir rufen den geparsten String der vergangenen Perioden oder ein leeres Array ab. Falls leer, beenden. Wenn vergangene Perioden existieren, leeren wir die aktuellen Inhalte aus dem Vergangenheitenspeicher-Container. Wir erstellen eine Überschrift und eine ungeordnete Liste. Wir durchlaufen die vergangenen Perioden und fügen Listenelemente hinzu, die formatierte Von- und Bis-Daten enthalten.

```js
function renderPastPeriods() {
  // Holen Sie den geparsten String der Perioden oder ein leeres Array.
  const periods = getAllStoredPeriods();

  // Beenden wenn keine Perioden vorhanden sind.
  if (periods.length === 0) {
    return;
  }

  // Leeren Sie die Liste der vergangenen Perioden, da wir sie neu rendern.
  pastPeriodContainer.textContent = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Vergangene Perioden";

  const pastPeriodList = document.createElement("ul");

  // Durchlaufen Sie alle Perioden und rendern Sie sie.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `Von ${formatDate(
      period.startDate,
    )} bis ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // Konvertieren Sie den Datumsstring in ein Date-Objekt.
  const date = new Date(dateString);

  // Formatieren Sie das Datum in einen lokal spezifischen String.
  // Schließen Sie Ihre Lokale für eine bessere Benutzererfahrung ein
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
```

### Vergangene Perioden beim Laden rendern

Wenn das verzögerte JavaScript beim Seitenladen läuft, rendern wir vergangene Perioden, falls vorhanden.

```js
// Starten Sie die App, indem Sie die vergangenen Perioden rendern.
renderPastPeriods();
```

## Vollständiges JavaScript

Ihre Datei `app.js` sollte ähnlich wie dieses JavaScript aussehen:

```js
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// Fügen Sie den Speicherschlüssel als anwendungsweite Konstante hinzu
const STORAGE_KEY = "period-tracker";

// Hören Sie auf Formulareinreichungen.
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
  pastPeriodHeader.textContent = "Vergangene Perioden";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `Von ${formatDate(
      period.startDate,
    )} bis ${formatDate(period.endDate)}`;
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

Sie können die vollständig funktionierende [CycleTracker Menstruationszyklus-Tracking-Web-App](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/) ausprobieren und den [Web-App-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) auf GitHub einsehen. Ja, es funktioniert, aber es ist noch keine PWA.

## Was als Nächstes

Im Kern ist eine PWA eine Webanwendung, die installiert werden kann und schrittweise erweitert wird, um offline zu arbeiten. Da wir nun eine voll funktionsfähige Webanwendung haben, fügen wir die erforderlichen Funktionen hinzu, um sie in eine PWA zu konvertieren, einschließlich der [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection) und [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Zuerst erstellen wir die [Manifestdatei von CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), einschließlich der Identität, des Erscheinungsbilds und der Ikonographie für unsere CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
