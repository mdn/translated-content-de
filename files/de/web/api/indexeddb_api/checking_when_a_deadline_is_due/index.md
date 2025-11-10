---
title: Überprüfen, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, das die Überprüfung der aktuellen Uhrzeit und des aktuellen Datums gegen eine Frist umfasst, die über IndexedDB gespeichert wurde. Die Hauptkomplikation besteht darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag, usw.) mit der aktuellen Uhrzeit und dem aktuellen Datum, die aus einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt entnommen wurden, zu vergleichen.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit der Aufschrift To-do-App, ein Test-To-do-Element und ein rotes Formular, damit Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen werden, ist **To-do-Listen-Benachrichtigungen**, eine einfache To-do-Listen-Anwendung, die Aufgabenüberschriften und Fristzeiten sowie -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und Benutzern dann Benachrichtigungen gibt, wenn Fälligkeitstermine erreicht werden, über die [Notification](/de/docs/Web/API/Notification) und [Vibration](/de/docs/Web/API/Vibration_API) APIs. Sie können [die To-do-Listen-Benachrichtigungen-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode experimentieren oder [die App live betrachten](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zunächst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird. Dann wollten wir überprüfen, ob jede Uhrzeit und jedes Datum im aktuellen Moment stattfindet. Im Grunde möchten wir überprüfen, wie die aktuelle Uhrzeit und das aktuelle Datum sind, und dann jedes gespeicherte Ereignis überprüfen, um festzustellen, ob deren Fristen mit der aktuellen Uhrzeit und dem aktuellen Datum übereinstimmen. Falls ja, möchten wir den Nutzer mit einer Art Benachrichtigung darauf hinweisen.

Das wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen keine Fristinformationen in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten unterscheiden sich erheblich, mit einer Vielzahl von Darstellungen.

### Aufzeichnen der Datumsinformationen

Um auf mobilen Geräten eine angenehme Benutzererfahrung zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich mich entschieden, ein HTML-Formular mit:

![Das Formular der To-do-App, das Felder zum Ausfüllen eines Aufgabentitels und Werte für Minute, Stunde, Tag, Monat und Jahr für die Frist enthält.](to-do-app-form2.png)

- Einem Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der unvermeidlichste Teil des Tippens durch den Benutzer.
- Zahleneingabefelder für die Stunden- und Minutenanteile der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen praktischen kleinen Auf- und Ab-Pfeil-Auswahlmechanismus. Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zur Eingabe, was hilfreich ist. Auf anderen Plattformen erhalten Sie einfach ein Standard-Textfeld, was in Ordnung ist.
- {{HTMLElement("select")}}-Elemente, um den Tag, Monat und das Jahr der Frist einzugeben. Da diese Werte beim Benutzer die größte Mehrdeutigkeit hervorrufen (7, Sonntag, Sun? 04, 4, April, Apr? 2013, '13, 13?), hielt ich es für die beste Lösung, ihnen eine Auswahlmöglichkeit zu geben, was auch das lästige Tippen für mobile Benutzer spart. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre als vollständige vierstellige Jahreszahlen.

Wenn die Submit-Schaltfläche des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die wie folgt beginnt:

```js
function addData(e) {
  e.preventDefault();

  if (
    !title.value ||
    !hours.value ||
    !minutes.value ||
    !day.value ||
    !month.value ||
    !year.value
  ) {
    note.appendChild(document.createElement("li")).textContent =
      "Data not submitted — form incomplete.";
    return;
  }
  // ...
}
```

In diesem Segment überprüfen wir, ob alle Felder des Formulars ausgefüllt wurden. Wenn nicht, geben wir eine Nachricht in unserem Entwickler-Benachrichtigungspanel (siehe unten links in der App-UI) aus, um dem Benutzer mitzuteilen, was los ist, und verlassen die Funktion. Dieser Schritt ist vor allem für Browser, die keine HTML-Formularvalidierung unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung in denen zu erzwingen, die es tun).

```js
function addData(e) {
  // ...
  const newItem = [
    {
      taskTitle: title.value,
      hours: hours.value,
      minutes: minutes.value,
      day: day.value,
      month: month.value,
      year: year.value,
      notified: "no",
    },
  ];

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction opened for task addition.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction not opened due to error. Duplicate items not allowed.";
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const request = objectStore.add(newItem[0]);

  // ...
}
```

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten in dem Format speichert, das erforderlich ist, um es in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbanktransaktion und informieren den Benutzer, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in den das neue Element eingefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass der Fälligkeitszeitpunkt des To-do-Listenpunkts noch nicht erreicht und benachrichtigt wurde - hierzu später mehr!

> [!NOTE]
> Die Variable `db` speichert eine Referenz zur IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variable verwenden, um die Daten zu manipulieren.

```js
function addData(e) {
  // ...
  request.onsuccess = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "New item added to database.";

    title.value = "";
    hours.value = null;
    minutes.value = null;
    day.value = "01";
    month.value = "January";
    year.value = 2020;
  };
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
}
```

Dieser nächste Abschnitt erstellt eine Protokollnachricht, um zu sagen, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, damit es für die nächste Aufgabenstellung bereit ist. Zuletzt führen wir die Funktion `displayData()` aus, die die Anzeige der Daten in der App aktualisiert, um die gerade eingegebene neue Aufgabe anzuzeigen.

### Überprüfen, ob eine Frist erreicht ist

An diesem Punkt sind unsere Daten in der Datenbank; nun möchten wir überprüfen, ob irgendeine der Fristen erreicht wurde. Dies wird durch unsere Funktion `checkDeadlines()` durchgeführt:

```js
function checkDeadlines() {
  const now = new Date();
  const minuteCheck = now.getMinutes();
  const hourCheck = now.getHours();
  const dayCheck = now.getDate();
  const monthCheck = now.getMonth();
  const yearCheck = now.getFullYear();
  // ...
}
```

Zuerst erfassen wir das aktuelle Datum und die aktuelle Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Das `Date`-Objekt bietet viele Methoden, um verschiedene Teile des darin enthaltenen Datums und der Uhrzeit zu extrahieren. Hier holen wir die aktuellen Minuten (gibt einen leicht verständlichen numerischen Wert), Stunden (gibt einen leicht verständlichen numerischen Wert), Tag des Monats (`getDate()` ist hierfür erforderlich, da `getDay()` den Wochentag, 1-7, zurückgibt), Monat (gibt eine Zahl zwischen 0-11 zurück, siehe unten) und Jahr (`getFullYear()` ist erforderlich; `getYear()` ist veraltet und gibt einen eigenartigen Wert zurück, der für niemanden wirklich nützlich ist!).

```js
function checkDeadlines() {
  // ...
  const objectStore = db
    .transaction(["toDoList"], "readwrite")
    .objectStore("toDoList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (!cursor) return;
    // ...
    cursor.continue();
  };
}
```

Als nächstes erstellen wir ein weiteres IndexedDB-`objectStore` und verwenden die Methode `openCursor()`, um einen Cursor zu öffnen, der im Grunde eine Möglichkeit in IndexedDB ist, durch alle Elemente im Store zu iterieren. Dann durchlaufen wir alle Elemente im Cursor, solange noch ein gültiges Element im Cursor vorhanden ist. Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass der oben beschriebene Mechanismus zur Fristenüberprüfung für die nächste in IndexedDB gespeicherte Aufgabe ausgeführt wird.

Nun beginnen wir, den Code im `onsuccess`-Handler zur Überprüfung der Fristen zu vervollständigen.

```js
const { hours, minutes, day, month, year, notified, taskTitle } = cursor.value;
const monthNumber = MONTHS.indexOf(month);
if (monthNumber === -1) throw new Error("Incorrect month entered in database.");
```

Das Erste, was wir tun, ist die in der Datenbank gespeicherten Monatsnamen in eine Monatszahl zu konvertieren, die JavaScript verstehen wird. Wie wir zuvor gesehen haben, erstellt das JavaScript-`Date`-Objekt Monatswerte als eine Zahl zwischen 0 und 11.

Mit den aktuellen Zeit- und Datensegmenten, die wir mit den in IndexedDB gespeicherten Werten überprüfen möchten, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer eine Benachrichtigung zeigen, um ihm mitzuteilen, dass seine Frist abgelaufen ist. Wenn alle Überprüfungen übereinstimmen, führen wir die Funktion `createNotification()` aus, um dem Benutzer eine Benachrichtigung zu geben.

```js
let matched = parseInt(hours, 10) === hourCheck;
matched &&= parseInt(minutes, 10) === minuteCheck;
matched &&= parseInt(day, 10) === dayCheck;
matched &&= monthNumber === monthCheck;
matched &&= parseInt(year, 10) === yearCheck;
if (matched && notified === "no") {
  // If the numbers all do match, run the createNotification() function to create a system notification
  // but only if the permission is set
  if (Notification.permission === "granted") {
    createNotification(taskTitle);
  }
}
```

Der `notified === "no"`-Check ist so konzipiert, dass Sie nur eine Benachrichtigung pro To-do-Element erhalten. Wenn für jedes Elementeobjekt eine Benachrichtigung ausgelöst wird, wird seine `notification`-Eigenschaft auf `"yes"` gesetzt, sodass dieser Check bei der nächsten Iteration nicht mehr besteht, durch den folgenden Code innerhalb der Funktion `createNotification()` (lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

```js
// now we need to update the value of notified to "yes" in this particular data object, so the
// notification won't be set off on it again

// first open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as its title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to 'yes'
  data.notified = "yes";

  // Create another request that inserts the item back into the database
  const updateTitleRequest = objectStore.put(data);

  // When this new request succeeds, run the displayData() function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

### Fortwährende Kontrolle!

Natürlich bringt es nichts, die obige Fristenüberprüfungsfunktion nur einmal auszuführen! Wir möchten kontinuierlich alle Fristen überprüfen, um festzustellen, ob eine von ihnen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
