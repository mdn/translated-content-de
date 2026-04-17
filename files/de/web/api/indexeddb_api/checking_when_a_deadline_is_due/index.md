---
title: Überprüfung, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: 0118259a43f804bf9f4a68895beb03cec955c909
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Zeit und das aktuelle Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptschwierigkeit besteht hier darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag, usw.) mit der aktuellen Zeit und dem aktuellen Datum, die von einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt stammen, zu vergleichen.

![Ein Screenshot der Beispielanwendung. Ein roter Haupttitel mit der Aufschrift "To-do App", ein Test-To-do-Element und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen, sind die **Benachrichtigungen zur To-do-Liste**, eine einfache To-do-Listenanwendung, die Aufgabentitel sowie Fristzeitpunkte und -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und dann den Benutzern Benachrichtigungen bereitstellt, wenn Fristdaten erreicht werden, über die [Notification](/de/docs/Web/API/Notification) und [Vibration](/de/docs/Web/API/Vibration_API) APIs. Sie können [die To-do-Listen-Benachrichtigungs-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode experimentieren oder [die App live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zuerst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird, und dann überprüfen, ob jede Zeit und jedes Datum gerade jetzt stattfindet. Im Wesentlichen möchten wir herausfinden, wie die aktuelle Uhrzeit und das aktuelle Datum lauten, und dann jedes gespeicherte Ereignis überprüfen, um festzustellen, ob deren Fristen mit der aktuellen Uhrzeit und dem aktuellen Datum übereinstimmen. Wenn dies der Fall ist, möchten wir den Benutzer mit einer Art Benachrichtigung darüber informieren.

Dies wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen keine Fristinformationen in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind ziemlich unterschiedlich und haben verschiedene Darstellungsformen.

### Aufzeichnen der Datumsinformationen

Um auf mobilen Geräten eine angemessene Benutzererfahrung zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich mich entschlossen, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, das Felder enthält, um einen Aufgabentitel einzugeben, sowie Minuten-, Stunden-, Tages-, Monats- und Jahreswerte für die Frist.](to-do-app-form2.png)

- Ein Texteingabefeld für die Eingabe eines Titels für Ihre To-do-Liste. Dies ist der unvermeidlichste Teil der Benutzereingabe.
- Nummerneingaben für die Stunden- und Minutenteile der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen kleinen Auf- und Abwärtspfeil-Zahlenwähler. Auf mobilen Plattformen erhalten Sie in der Regel ein numerisches Tastenfeld zur Dateneingabe, was hilfreich ist. Bei anderen erhalten Sie einfach eine Standard-Text-Eingabe, was in Ordnung ist.
- {{HTMLElement("select")}}-Elemente zur Eingabe des Tages, Monats und Jahres der Frist. Da diese Werte für Benutzer am unklarsten einzugeben sind (7, Sonntag, So? 04, 4, April, Apr? 2013, '13, 13?), entschied ich, dass die beste Lösung darin bestand, ihnen eine Auswahl zu geben, aus der sie ihre Werte wählen können, was auch das lästige Tippen für mobile Benutzer erspart. Die Tage werden als numerische Tage des Monats erfasst, die Monate als vollständige Monatsnamen und die Jahre beginnen beim aktuellen Jahr und reichen 12 Jahre in die Zukunft.

Während der App-Initialisierung füllen wir das Jahr-Dropdown aus und speichern das aktuelle Jahr zur späteren Verwendung:

```js
const currentYear = new Date().getFullYear();
for (let i = 0; i <= 12; i++) {
  const option = document.createElement("option");
  const yearValue = currentYear + i;
  option.value = yearValue;
  option.textContent = yearValue;
  year.appendChild(option);
}
year.value = currentYear;
```

Wenn die Absenden-Schaltfläche des Formulars gedrückt wird, führen wir die `addData()`-Funktion aus, die so beginnt:

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

In diesem Abschnitt überprüfen wir, ob alle Formularfelder ausgefüllt wurden. Falls nicht, fügen wir unserem Entwickler-Benachrichtigungsbereich (unten links in der App-UI) eine Nachricht hinzu, um dem Benutzer mitzuteilen, was vor sich geht, und verlassen die Funktion. Dieser Schritt ist hauptsächlich für Browser gedacht, die HTML-Formularvalidierung nicht unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung zu erzwingen, bei denjenigen, die dies tun).

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

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten im erforderlichen Format speichert, um es in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbanktransaktion und liefern Nachrichten, um den Benutzer zu benachrichtigen, ob dies erfolgreich war oder nicht. Dann wird ein `objectStore` erstellt, in den das neue Element hinzugefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist des To-do-Listen-Elements noch nicht erreicht und benachrichtigt wurde - dazu später mehr!

> [!NOTE]
> Die `db`-Variable speichert einen Verweis auf die IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

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
    year.value = currentYear;
  };
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
}
```

Dieser nächste Abschnitt erstellt eine Protokollnachricht, um anzuzeigen, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, damit es bereit ist, die nächste Aufgabe einzugeben. Beachten Sie, dass das Jahresfeld auf `currentYear` zurückgesetzt wird, das beim Initialisieren der App gesetzt wurde. Zuletzt führen wir die `displayData()`-Funktion aus, die die Darstellung der Daten in der App aktualisiert, um die neue gerade eingegebene Aufgabe anzuzeigen.

### Überprüfen, ob eine Frist erreicht wurde

An diesem Punkt befinden sich unsere Daten in der Datenbank; nun wollen wir überprüfen, ob eine der Fristen erreicht wurde. Dies wird durch unsere `checkDeadlines()`-Funktion durchgeführt:

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

Zuerst holen wir das aktuelle Datum und die aktuelle Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Das `Date`-Objekt hat eine Reihe von Methoden, um verschiedene Teile des Datums und der Uhrzeit daraus zu extrahieren. Hier holen wir die aktuellen Minuten (liefert einen einfachen numerischen Wert), Stunden (liefert einen einfachen numerischen Wert), Tag des Monats (`getDate()` ist dafür notwendig, da `getDay()` den Wochentag zurückgibt, 0-6), Monat (liefert eine Zahl von 0-11, siehe unten) und Jahr (`getFullYear()` ist notwendig; `getYear()` ist veraltet und liefert einen merkwürdigen Wert, der für niemanden wirklich nützlich ist!)

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

Als Nächstes erstellen wir einen weiteren IndexedDB `objectStore` und verwenden die `openCursor()`-Methode, um einen Cursor zu öffnen, was in IndexedDB im Wesentlichen eine Möglichkeit ist, durch alle Elemente im Speicher zu iterieren. Wir durchlaufen dann alle Elemente im Cursor, solange noch ein gültiges Element im Cursor vorhanden ist. Die letzte Zeile der Funktion bewegt den Cursor weiter, wodurch der oben beschriebene Fristenprüfmechanismus für die nächste in der IndexedDB gespeicherte Aufgabe ausgeführt wird.

Nun beginnen wir, den Code im `onsuccess`-Handler zum Überprüfen von Fristen zu füllen.

```js
const { hours, minutes, day, month, year, notified, taskTitle } = cursor.value;
const monthNumber = MONTHS.indexOf(month);
if (monthNumber === -1) throw new Error("Incorrect month entered in database.");
```

Das Erste, was wir tun, ist die im Datenbankspeicher gespeicherten Monatsnamen in eine Monatsnummer zu konvertieren, die von JavaScript verstanden wird. Wie wir zuvor gesehen haben, erstellt das JavaScript `Date`-Objekt Monatswerte als eine Zahl zwischen 0 und 11.

Mit den aktuellen Zeit- und Datumssegmenten, die wir gegen die in IndexedDB gespeicherten Werte überprüfen möchten, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer irgendeine Art von Benachrichtigung zeigen, um ihm mitzuteilen, dass seine Frist abgelaufen ist. Wenn alle Prüfungen übereinstimmen, führen wir die `createNotification()`-Funktion aus, um dem Benutzer eine Benachrichtigung bereitzustellen.

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

Die Abfrage `notified === "no"` soll sicherstellen, dass Sie nur eine Benachrichtigung pro To-do-Element erhalten. Wenn eine Benachrichtigung für jedes Objektelement ausgelöst wird, wird die `notification`-Eigenschaft auf `"yes"` gesetzt, sodass diese Überprüfung bei der nächsten Iteration nicht mehr bestanden wird, durch den folgenden Code innerhalb der `createNotification()`-Funktion (lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

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

### Weiterhin überprüfen!

Natürlich nützt es nichts, die obige Fristenprüffunktion nur einmal auszuführen! Wir möchten die Fristen ständig überprüfen, um zu sehen, ob eine von ihnen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
