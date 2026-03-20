---
title: Überprüfen, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: e6f2bf43b5c3adb492ca11261ea5cf71dd3fa935
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Zeit und das aktuelle Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptschwierigkeit besteht darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag usw.) mit der aktuellen Zeit und dem Datum eines [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekts abzugleichen.

![Ein Screenshot der Beispielanwendung. Ein roter Haupttitel mit der Aufschrift "To-do app", ein Test-To-do-Item und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen, ist **To-do list notifications**, eine einfache To-do-Listen-Anwendung, die Aufgaben-Titel und Fristzeiten und -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und dann Benachrichtigungen bereitstellt, wenn Fristen erreicht sind, über die [Notification](/de/docs/Web/API/Notification) und [Vibration](/de/docs/Web/API/Vibration_API) APIs. Sie können [die To-do-Listen-Benachrichtigungs-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode experimentieren oder [die App live ausführen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zunächst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird. Dann wollten wir überprüfen, ob jede Zeit und jedes Datum derzeit stattfindet. Im Grunde möchten wir überprüfen, welche Zeit und welches Datum gerade ist, und dann jedes gespeicherte Ereignis überprüfen, um festzustellen, ob eine der Fristen mit der aktuellen Zeit und dem aktuellen Datum übereinstimmt. Wenn dies der Fall ist, möchten wir den Benutzer mit einer Art von Benachrichtigung informieren.

Dies wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden. Natürlich wollen Menschen die Fristinformationen nicht in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind ziemlich unterschiedlich und es gibt viele verschiedene Darstellungsweisen.

### Aufzeichnung der Datumsinformationen

Um ein angemessenes Benutzererlebnis auf mobilen Geräten zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich beschlossen, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, das Felder enthält, um einen Aufgabentitel sowie Minuten-, Stunden-, Tages-, Monats- und Jahreswerte für die Frist auszufüllen.](to-do-app-form2.png)

- Einem Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der am wenigsten vermeidbare Teil der Benutzereingabe.
- Zahleneingabefelder für die Stunden- und Minutenkomponenten der Frist. In Browsern, die `type="number"` unterstützen, bekommt man einen schönen kleinen Aufwärts- und Abwärtspfeil zur Auswahl von Zahlen. Auf mobilen Plattformen erhält man in der Regel eine numerische Tastatur für die Dateneingabe, was hilfreich ist. Bei anderen Plattformen bekommt man einfach ein standardmäßiges Texteingabefeld, was in Ordnung ist.
- {{HTMLElement("select")}}-Elemente zur Eingabe des Tags, Monats und Jahres der Frist. Da diese Werte am anfälligsten dafür sind, dass Benutzer sie mehrdeutig eingeben (7, Sonntag, son? 04, 4, April, Apr? 2013, '13, 13?), habe ich beschlossen, dass es die beste Lösung ist, Benutzern eine Auswahlmöglichkeit zu geben, was auch das lästige Tippen für mobile Benutzer reduziert. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre beginnen ab dem aktuellen Jahr und gehen 12 Jahre in die Zukunft.

Während der Initialisierung der App füllen wir das Jahr-Dropdown aus und speichern das aktuelle Jahr zur späteren Verwendung:

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

Wenn die Absendetaste des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die so beginnt:

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

In diesem Abschnitt prüfen wir, ob alle Formularfelder ausgefüllt wurden. Wenn nicht, geben wir eine Meldung in unser Paneel für Entwicklerbenachrichtigungen ein (siehe unten links in der App-Benutzeroberfläche), um dem Benutzer mitzuteilen, was los ist, und verlassen die Funktion. Dieser Schritt ist hauptsächlich für Browser gedacht, die keine HTML-Formularvalidierung unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung in denen zu erzwingen, die es doch tun).

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

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten im erforderlichen Format speichert, um sie in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbanktransaktion und übermitteln Meldungen, um zu informieren, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in den das neue Element eingefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist für den To-do-Listeneintrag noch nicht gekommen ist und benachrichtigt wurde - mehr dazu später!

> [!NOTE]
> Die `db`-Variable speichert eine Referenz auf die IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

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

Dieser nächste Abschnitt erstellt eine Protokollmeldung, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, sodass es für die nächste Aufgabe bereit ist. Beachten Sie, dass das Jahrfeld auf `currentYear` zurückgesetzt wird, das beim Initialisieren der App festgelegt wird. Zuletzt wird die Funktion `displayData()` ausgeführt, die die Anzeige der Daten in der App aktualisiert, um die gerade eingegebene neue Aufgabe anzuzeigen.

### Überprüfen, ob eine Frist erreicht wurde

An diesem Punkt sind unsere Daten in der Datenbank; jetzt möchten wir prüfen, ob eine der Fristen erreicht wurde. Dies geschieht durch unsere Funktion `checkDeadlines()`:

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

Zuerst holen wir uns das aktuelle Datum und die aktuelle Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Das `Date`-Objekt verfügt über eine Reihe von Methoden, um verschiedene Teile des Datums und der Uhrzeit daraus zu extrahieren. Hier rufen wir die aktuellen Minuten ab (liefert einen einfachen numerischen Wert), Stunden (liefert einen einfachen numerischen Wert), Tagesdatum des Monats (`getDate()` ist dafür erforderlich, da `getDay()` den Wochentag von 1 bis 7 zurückgibt), Monat (gibt eine Zahl von 0 bis 11 zurück, siehe unten) und Jahr (`getFullYear()` ist erforderlich; `getYear()` ist veraltet und liefert einen seltsamen Wert, der nicht sehr nützlich ist.)

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

Als nächstes erstellen wir einen weiteren `objectStore` in IndexedDB und verwenden die Methode `openCursor()`, um einen Cursor zu öffnen. Der Cursor ist im Grunde eine Methode in IndexedDB, um durch alle Elemente im Speicher zu iterieren. Wir durchlaufen dann alle Elemente im Cursor, solange ein gültiges Element im Cursor vorhanden ist. Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass der oben erwähnte Fristenüberprüfungsmechanismus für die nächste in der IndexedDB gespeicherte Aufgabe ausgeführt wird.

Nun beginnen wir, den Code im `onsuccess`-Handler zu füllen, um Fristen zu überprüfen.

```js
const { hours, minutes, day, month, year, notified, taskTitle } = cursor.value;
const monthNumber = MONTHS.indexOf(month);
if (monthNumber === -1) throw new Error("Incorrect month entered in database.");
```

Das erste, was wir tun, ist, die in der Datenbank gespeicherten Monatsnamen in eine Monatszahl zu konvertieren, die JavaScript verstehen kann. Wie wir zuvor gesehen haben, erstellt das JavaScript `Date`-Objekt Monatswerte als Zahl zwischen 0 und 11.

Mit den aktuellen Zeit- und Datumsabschnitten, die wir gegen die in der IndexedDB gespeicherten Werte prüfen möchten, können wir die Überprüfungen durchführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer eine Benachrichtigung anzeigen, dass seine Frist abgelaufen ist. Wenn alle Überprüfungen passen, führen wir die Funktion `createNotification()` aus, um dem Benutzer eine Benachrichtigung bereitzustellen.

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

Der `notified === "no"`-Check ist dafür vorgesehen, dass Sie nur eine Benachrichtigung pro To-do-Item erhalten. Wenn für jedes Element-Objekt eine Benachrichtigung ausgelöst wird, wird seine `notification`-Eigenschaft auf `"yes"` gesetzt, sodass dieser Check bei der nächsten Iteration nicht erfolgreich ist, über den folgenden Code in der Funktion `createNotification()` (lesen Sie [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

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

Natürlich bringt es nichts, die oben genannte Fristenüberprüfungsfunktion nur einmal auszuführen! Wir möchten ständig prüfen, ob eine der Fristen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
