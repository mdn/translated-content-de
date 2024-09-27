---
title: Überprüfen, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Uhrzeit und das Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptschwierigkeit besteht hier darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag usw.) mit der aktuellen Uhrzeit und dem aktuellen Datum aus einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zu vergleichen.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit dem Text To-do App, ein Test-To-do-Eintrag und ein rotes Formular für Benutzer, um neue Aufgaben einzugeben](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen, ist **To-do-Liste Benachrichtigungen**, eine einfache To-do-Listen-Anwendung, die Aufgaben-Titel sowie Fristen und Daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und Benutzern dann über die [Notification](/de/docs/Web/API/Notification) und [Vibration](/de/docs/Web/API/Vibration_API) APIs Benachrichtigungen sendet, wenn Fristdaten erreicht werden. Sie können [die To-do-Liste Benachrichtigungen App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und den Quellcode ausprobieren oder [die App live anschauen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zuerst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch beim Anzeigen für Menschen verständlich ist, und dann überprüfen, ob jede Zeit und jedes Datum gerade jetzt auftritt. Im Wesentlichen wollen wir wissen, wie die aktuelle Zeit und das aktuelle Datum sind und dann jedes gespeicherte Ereignis überprüfen, um zu sehen, ob ihre Fristen mit der aktuellen Zeit und dem Datum übereinstimmen. Wenn dies der Fall ist, möchten wir den Benutzer irgendwie benachrichtigen.

Das wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich wollen Menschen keine Fristinformationen in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind ziemlich anders und haben eine Reihe von verschiedenen Darstellungen.

### Aufzeichnung der Datumsinformationen

Um auf mobilen Geräten eine angemessene Benutzererfahrung zu bieten und Mehrdeutigkeiten zu verringern, habe ich mich entschieden, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, das Felder enthält, um einen Aufgabentitel sowie Minuten-, Stunden-, Tages-, Monats- und Jahreswerte für die Frist auszufüllen.](to-do-app-form2.png)

- Ein Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der am wenigsten vermeidbare Teil der Benutzereingabe.
- Zahlen-Eingabefelder für die Stunden- und Minuten-Teile der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen hübschen kleinen Auf- und Abzählpfeil. Auf mobilen Plattformen bekommen Sie in der Regel eine numerische Tastatur zur Dateneingabe, was hilfreich ist. In anderen erhalten Sie einfach ein Standardtexteingabefeld, was in Ordnung ist.
- {{HTMLElement("select")}}-Elemente zum Eingeben des Tages, Monats und Jahres der Frist. Da diese Werte für Benutzer am mehrdeutigsten sind (7, Sonntag, Sonne? 04, 4, April, Apr? 2013, '13, 13?), habe ich beschlossen, dass es am besten ist, ihnen eine Wahl anzubieten, was auch das mühsame Tippen für mobile Benutzer reduziert. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate mit vollständigen Monatsnamen, und die Jahre als vollständige vierstellige Jahreszahlen.

Wenn der Absenden-Button des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die so beginnt:

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.appendChild(document.createElement("li")).textContent = "Data not submitted — form incomplete.";
    return;
  }
```

In diesem Segment prüfen wir, ob alle Formularfelder ausgefüllt wurden. Wenn nicht, geben wir eine Nachricht in unserem Entwicklerbenachrichtigungspanel (siehe unten links in der App-Benutzeroberfläche) aus, um dem Benutzer mitzuteilen, was los ist, und beenden die Funktion. Dieser Schritt ist hauptsächlich für Browser, die keine HTML-Formularvalidierung unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung in denen zu erzwingen, die es tun).

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

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten im erforderlichen Format speichert, um sie in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbanktransaktion und geben Nachrichten aus, um den Benutzer zu benachrichtigen, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in das das neue Element hinzugefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist des To-do-Listen-Elements noch nicht erreicht wurde und benachrichtigt wurde - mehr dazu später!

> [!NOTE]
> Die `db`-Variable speichert eine Referenz auf die IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

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

Dieser nächste Abschnitt erstellt eine Protokollnachricht, die besagt, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, damit es für die nächste Aufgabe bereit ist, die eingegeben werden soll.

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

Zu guter Letzt führen wir die Funktion `displayData()` aus, die die Anzeige der Daten in der App aktualisiert, um die neu eingetragene Aufgabe anzuzeigen.

### Überprüfen, ob eine Frist erreicht wurde

An diesem Punkt sind unsere Daten in der Datenbank; jetzt möchten wir überprüfen, ob eine der Fristen erreicht wurde. Dies geschieht durch unsere `checkDeadlines()`-Funktion:

```js
function checkDeadlines() {
  const now = new Date();
```

Zuerst holen wir das aktuelle Datum und die Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Einfach, oder? Jetzt wird es etwas komplexer.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

Das `Date`-Objekt hat eine Reihe von Methoden, um verschiedene Teile des darin enthaltenen Datums und der Uhrzeit zu extrahieren. Hier holen wir die aktuellen Minuten (gibt einen einfachen numerischen Wert), Stunden (gibt einen einfachen numerischen Wert), Tag des Monats (`getDate()` wird hierfür benötigt, da `getDay()` den Wochentag, 1-7, zurückgibt), Monat (gibt eine Zahl von 0-11 zurück, siehe unten) und Jahr (es wird `getFullYear()` benötigt; `getYear()` ist veraltet und gibt einen merkwürdigen Wert zurück, der nicht viel nützt!)

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

Als nächstes erstellen wir einen weiteren IndexedDB `objectStore` und verwenden die `openCursor()`-Methode, um einen Cursor zu öffnen, der im Wesentlichen eine Möglichkeit in IndexedDB ist, durch alle Objekte im Store zu iterieren. Dann durchlaufen wir alle Objekte im Cursor, solange noch ein gültiges Objekt im Cursor vorhanden ist.

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

Der erste Schritt besteht darin, die Monatsnamen, die wir in der Datenbank gespeichert haben, in eine Monatszahl umzuwandeln, die JavaScript versteht. Wie wir zuvor gesehen haben, erzeugt das JavaScript `Date`-Objekt Monatswerte als eine Zahl zwischen 0 und 11.

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

Mit den aktuellen Zeit- und Datumssegmenten, die wir gegen die in IndexedDB gespeicherten Werte überprüfen wollen, zusammengesetzt, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer irgendeine Benachrichtigung anzeigen, um ihm mitzuteilen, dass seine Frist abgelaufen ist.

Der `+`-Operator in diesem Fall konvertiert Zahlen mit führenden Nullen in ihre Äquivalente ohne führende Nullen, z. B. 09 -> 9. Dies ist erforderlich, da JavaScript `Date`-Zahlenwerte niemals führende Nullen haben, aber unsere Daten möglicherweise.

Der `notified === "no"`-Check ist dafür vorgesehen, sicherzustellen, dass Sie nur eine Benachrichtigung pro To-do-Eintrag erhalten. Wenn eine Benachrichtigung für jedes Objekt im Artikel ausgelöst wird, wird die `notification`-Eigenschaft auf `"yes"` gesetzt, sodass diese Prüfung beim nächsten Durchlauf nicht bestanden wird, durch den folgenden Code innerhalb der `createNotification()`-Funktion (lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

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

Wenn alle Prüfungen übereinstimmen, führen wir dann die `createNotification()`-Funktion aus, um dem Benutzer eine Benachrichtigung zu bieten.

```js
      cursor.continue();
    }
  }
}
```

Die letzte Zeile der Funktion bewegt den Cursor weiter, wodurch der obige Fristüberprüfungsmechanismus für die nächste in der IndexedDB gespeicherte Aufgabe ausgeführt wird.

### Weiter überprüfen!

Natürlich ist es nicht sinnvoll, die oben beschriebene Fristüberprüfungsfunktion nur einmal auszuführen! Wir wollen ständig alle Fristen überprüfen, um zu sehen, ob eine von ihnen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
