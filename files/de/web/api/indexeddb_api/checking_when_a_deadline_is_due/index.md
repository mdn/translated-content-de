---
title: Überprüfung, wann eine Frist abläuft
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Zeit und das aktuelle Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptkomplikation hier besteht darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag usw.) mit der aktuellen Zeit und dem aktuellen Datum abzugleichen, die von einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt abgerufen werden.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit der Aufschrift To do app, ein Test-To-do-Item und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen werden, ist **To-do-Listen Benachrichtigungen**, eine einfache To-do-Listenanwendung, die Aufgabentitel sowie Fristzeiten und -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert. Dann werden den Benutzern Benachrichtigungen bereitgestellt, wenn Fristereignisse erreicht werden, über die [Notification](/de/docs/Web/API/Notification)- und [Vibration](/de/docs/Web/API/Vibration_API)-APIs. Sie können [die To-do-Listen-Benachrichtigungs-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode experimentieren oder [die App live ausführen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zunächst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird. Dann sollten wir überprüfen, ob jede Zeit und jedes Datum gerade im aktuellen Moment stattfinden. Im Grunde möchten wir überprüfen, welche Zeit und welches Datum gerade ist, und dann jedes gespeicherte Ereignis prüfen, um zu sehen, ob eine der Fristen mit der aktuellen Zeit und dem aktuellen Datum übereinstimmt. Wenn dies der Fall ist, möchten wir den Benutzer mit einer Art Benachrichtigung informieren.

Das wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen Fristinformationen nicht in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind ziemlich unterschiedlich und können auf verschiedene Arten dargestellt werden.

### Aufzeichnungen der Datumsinformationen

Um eine angemessene Benutzererfahrung auf mobilen Geräten zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich mich dafür entschieden, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, enthält Felder zum Ausfüllen eines Aufgabentitels und Werte für Minuten, Stunde, Tag, Monat und Jahr für die Frist.](to-do-app-form2.png)

- Einem Texteingabefeld zur Eingabe eines Titels für Ihre To-do-Liste. Dies ist der unvermeidlichste Teil der Benutzereingabe.
- Zahleneingabefeldern für die Stunde und Minute der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen netten kleinen Auf- und Abwärtspfeil-Zahlenpicker. Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zur Dateneingabe, was hilfreich ist. Ansonsten erhalten Sie einfach einen standardmäßigen Texteingabebereich, was in Ordnung ist.
- {{HTMLElement("select")}}-Elementen zur Eingabe des Tages, des Monats und des Jahres der Frist. Da diese Werte für Benutzer die am schwersten zu erfassenden Mehrdeutigkeiten aufweisen (7, Sonntag, son? 04, 4, April, Apr? 2013, '13, 13?), dachte ich, dass die beste Lösung darin besteht, ihnen eine Auswahlmöglichkeit zu geben, was auch das lästige Tippen für mobile Benutzer spart. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre als vollständige vierstellige Jahreszahlen.

Wenn der Submit-Button des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die so beginnt:

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.appendChild(document.createElement("li")).textContent = "Data not submitted — form incomplete.";
    return;
  }
```

In diesem Segment überprüfen wir, ob alle Formularfelder ausgefüllt wurden. Wenn nicht, platzieren wir eine Nachricht im Entwicklungsbenachrichtigungsbereich (siehe unten links in der UI der App), um den Benutzer zu informieren, und verlassen die Funktion. Dieser Schritt ist hauptsächlich für Browser gedacht, die keine HTML-Formularvalidierung unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um in Browsern, die dies unterstützen, eine Validierung zu erzwingen).

```js
   else {
    const newItem = [
      {
        taskTitle: title.value,
        hours    : hours.value,
        minutes  : minutes.value,
        day      : day.value,
        month    : month.value,
        year     : year.value,
        notified : "no"
      }
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
```

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten im Format speichert, das zum Einfügen in die Datenbank erforderlich ist. Die nächsten Zeilen öffnen die Datenbanktransaktion und stellen Nachrichten bereit, um den Benutzer zu benachrichtigen, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in das das neue Element eingefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist des To-do-Listenelements noch nicht erreicht und benachrichtigt wurde - mehr dazu später!

> [!NOTE]
> Die `db`-Variable speichert eine Referenz zur IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

```js
    request.onsuccess = (event) => {

      note.appendChild(document.createElement("li")).textContent = "New item added to database.";

      title.value = "";
      hours.value = null;
      minutes.value = null;
      day.value = "01";
      month.value = "January";
      year.value = 2020;
    };
  }
```

Dieser nächste Abschnitt erstellt eine Protokollnachricht, die bestätigt, dass das neue Element erfolgreich hinzugefügt wurde, und setzt das Formular zurück, damit es für die Eingabe der nächsten Aufgabe bereit ist.

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

Zuletzt führen wir die Funktion `displayData()` aus, die die Anzeige der Daten in der App aktualisiert, um die gerade eingegebene neue Aufgabe zu zeigen.

### Überprüfung, ob eine Frist erreicht wurde

An diesem Punkt befinden sich unsere Daten in der Datenbank; jetzt möchten wir überprüfen, ob eine der Fristen erreicht wurde. Dies wird durch unsere Funktion `checkDeadlines()` durchgeführt:

```js
function checkDeadlines() {
  const now = new Date();
```

Zuerst erfassen wir das aktuelle Datum und die aktuelle Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Einfach, oder? Es wird gleich etwas komplizierter.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

Das `Date`-Objekt hat eine Reihe von Methoden, um verschiedene Teile des Datums und der Uhrzeit darin zu extrahieren. Hier holen wir die aktuellen Minuten (liefert einen einfachen numerischen Wert), Stunden (liefert einen einfachen numerischen Wert), Tag des Monats (`getDate()` wird dafür benötigt, da `getDay()` den Wochentag, 1-7, zurückgibt), Monat (gibt eine Zahl von 0-11 zurück, siehe unten) und Jahr (dafür wird `getFullYear()` benötigt; `getYear()` ist veraltet und gibt einen seltsamen Wert zurück, der für niemanden besonders nützlich ist!).

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

Als Nächstes erstellen wir einen weiteren IndexedDB `objectStore` und verwenden die Methode `openCursor()`, um einen Cursor zu öffnen, der im Grunde eine Möglichkeit in IndexedDB ist, durch alle Elemente im Store zu iterieren. Wir durchlaufen dann alle Elemente im Cursor, solange es noch ein gültiges Element im Cursor gibt.

```js
switch (cursor.value.month) {
  case "January":
    monthNumber = 0;
    break;
  case "February":
    monthNumber = 1;
    break;

  // other lines removed from listing for brevity

  case "December":
    monthNumber = 11;
    break;
  default:
    alert("Incorrect month entered in database.");
}
```

Das Erste, was wir tun, ist, die in der Datenbank gespeicherten Monatsnamen in eine Monatszahl umzuwandeln, die JavaScript versteht. Wie wir zuvor gesehen haben, erstellt das JavaScript `Date`-Objekt Monatswerte als Zahl zwischen 0 und 11.

```js
if (
  Number(cursor.value.hours) === hourCheck &&
  Number(cursor.value.minutes) === minuteCheck &&
  Number(cursor.value.day) === dayCheck &&
  monthNumber === monthCheck &&
  cursor.value.year === yearCheck &&
  notified === "no"
) {
  // If the numbers all do match, run the createNotification()
  // function to create a system notification
  createNotification(cursor.value.taskTitle);
}
```

Mit den aktuellen Zeit- und Datumssegmenten, die wir gegen die in IndexedDB gespeicherten Werte überprüfen möchten, ist es an der Zeit, die Prüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer eine Art Benachrichtigung zeigen, um ihm mitzuteilen, dass seine Frist abgelaufen ist.

Der `+`-Operator konvertiert in diesem Fall Zahlen mit führenden Nullen in ihre Äquivalente ohne führende Nullen, z.B. 09 -> 9. Dies ist notwendig, da JavaScript `Date`-Zahlenwerte niemals führende Nullen haben, unsere Daten jedoch schon.

Der `notified === "no"`-Check ist dazu gedacht, sicherzustellen, dass Sie nur eine Benachrichtigung pro To-do-Element erhalten. Wenn eine Benachrichtigung für jedes Objektelement ausgelöst wird, wird seine `notification`-Eigenschaft mithilfe des folgenden Codes in der `createNotification()`-Funktion auf `"yes"` gesetzt, sodass diese Prüfung bei der nächsten Iteration nicht bestehen wird, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung:

```js
    // now we need to update the value of notified to "yes" in this particular data object, so the
    // notification won't be set off on it again

    // first open up a transaction as usual
    const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // get the to-do list object that has this title as its title
    const request = objectStore.get(title);

    request.onsuccess = () => {
      // grab the data object returned as the result
      const data = request.result;

      // update the notified value in the object to "yes"
      data.notified = "yes";

      // create another request that inserts the item back into the database
      const requestUpdate = objectStore.put(data);

      // when this new request succeeds, run the displayData() function again to update the display
      requestUpdate.onsuccess = () => {
        displayData();
      }
```

Wenn die Prüfungen alle übereinstimmen, führen wir die Funktion `createNotification()` aus, um dem Benutzer eine Benachrichtigung bereitzustellen.

```js
      cursor.continue();
    }
  }
}
```

Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass der obige Mechanismus der Fristprüfung für die nächste in der IndexedDB gespeicherte Aufgabe ausgeführt wird.

### Weiterhin überprüfen!

Natürlich nützt es nichts, die oben beschriebene Fristprüffunktion nur einmal auszuführen! Wir möchten ständig alle Fristen überprüfen, um zu sehen, ob eine von ihnen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
