---
title: Überprüfung, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Zeit und das aktuelle Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptschwierigkeit besteht darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag usw.) mit der aktuellen Zeit und dem aktuellen Datum aus einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zu vergleichen.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit der Aufschrift "To do app", ein Test-To-do-Element und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können.](to-do-app.png)

Die Hauptbeispielanwendung, auf die wir uns in diesem Artikel beziehen werden, ist **To-do-Listenbenachrichtigungen**, eine einfache To-do-Listenanwendung, die Aufgabentitel sowie Fristzeiten und -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und Benutzern dann Benachrichtigungen liefert, wenn die Fristdaten erreicht sind, über die [Notification](/de/docs/Web/API/Notification) und [Vibration](/de/docs/Web/API/Vibration_API) APIs. Sie können die [To-do-Listenbenachrichtigungen-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und den Quellcode erkunden oder [die App live ausführen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das Grundproblem

In der To-do-App wollten wir zunächst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird. Danach sollten alle Zeit- und Datumswerte überprüft werden, ob sie mit dem aktuellen Zeitpunkt übereinstimmen. Grundsätzlich möchten wir überprüfen, wie die aktuelle Zeit und das Datum sind, und dann jedes gespeicherte Ereignis darauf prüfen, ob eine ihrer Fristen mit der aktuellen Zeit und dem aktuellen Datum übereinstimmt. Wenn dies der Fall ist, möchten wir den Benutzer mit einer Art Benachrichtigung informieren.

Das wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen Fristinformationen nicht in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind recht unterschiedlich und bieten eine Vielzahl unterschiedlicher Darstellungen.

### Aufzeichnung der Datumsinformationen

Um eine angemessene Benutzererfahrung auf mobilen Geräten zu bieten und Mehrdeutigkeiten zu verringern, habe ich mich entschieden, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, das Felder enthält, um einen Aufgabentitel sowie Minute, Stunde, Tag, Monat und Jahr für die Frist auszufüllen.](to-do-app-form2.png)

- Ein Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der am wenigsten vermeidbare Teil der Benutzereingabe.
- Zahleneingaben für die Stunden- und Minutenanteile der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen praktischen kleinen Auf-und-Ab-Pfeil-Zahlenwähler. Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zur Dateneingabe, was hilfreich ist. Bei anderen erhalten Sie einfach eine Standard-Text-Eingabe, was auch in Ordnung ist.
- {{HTMLElement("select")}}-Elemente zum Eingeben des Tages, Monats und Jahres der Frist. Da diese Werte für Benutzer am mehrdeutigsten einzugeben sind (7, Sonntag, Sun? 04, 4, April, Apr? 2013, '13, 13?), habe ich mich entschieden, ihnen eine Auswahl zu geben, die auch lästige Eingaben für mobile Benutzer spart. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre als vierstellige Jahreszahlen.

Wenn der Absendeknopf des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die wie folgt beginnt:

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.appendChild(document.createElement("li")).textContent = "Data not submitted — form incomplete.";
    return;
  }
```

In diesem Abschnitt überprüfen wir, ob alle Formularfelder ausgefüllt wurden. Falls nicht, wird eine Nachricht in unser Entwickler-Benachrichtigungspanel eingefügt (siehe unten links in der Benutzeroberfläche der App), um dem Benutzer mitzuteilen, was vor sich geht, und die Funktion wird beendet. Dieser Schritt ist hauptsächlich für Browser gedacht, die HTML-Formularvalidierung nicht unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung in denen erzwingen, die dies tun).

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

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten im erforderlichen Format speichert, um sie in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbanktransaktion und stellen Nachrichten bereit, um den Benutzer darüber zu informieren, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in das das neue Element eingefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist des To-do-Listen-Elements noch nicht erreicht und mitgeteilt wurde - dazu später mehr!

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

Dieser nächste Abschnitt erstellt eine Protokollnachricht, um zu sagen, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, damit es für die nächste Aufgabe bereit ist.

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

Zuletzt führen wir die `displayData()`-Funktion aus, die die Datendarstellung in der App aktualisiert, um die neue Aufgabe zu zeigen, die gerade eingegeben wurde.

### Überprüfung, ob eine Frist erreicht wurde

An diesem Punkt sind unsere Daten in der Datenbank. Jetzt möchten wir überprüfen, ob eine der Fristen erreicht wurde. Dies wird durch unsere Funktion `checkDeadlines()` getan:

```js
function checkDeadlines() {
  const now = new Date();
```

Zuerst holen wir das aktuelle Datum und die aktuelle Zeit, indem wir ein leeres `Date`-Objekt erstellen. Einfach, oder? Es wird gleich etwas komplizierter.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

Das `Date`-Objekt hat eine Reihe von Methoden, um verschiedene Teile des Datums und der Uhrzeit darin zu extrahieren. Hier holen wir die aktuellen Minuten (gibt einen einfachen numerischen Wert), Stunden (gibt einen einfachen numerischen Wert), Tag des Monats (`getDate()` wird hierfür benötigt, da `getDay()` den Wochentag zurückgibt, 1-7), Monat (gibt eine Zahl von 0-11 zurück, siehe unten) und Jahr (`getFullYear()` wird benötigt; `getYear()` ist veraltet und gibt einen seltsamen Wert zurück, der für niemanden von großem Nutzen ist!).

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

Als nächstes erstellen wir einen weiteren `objectStore` in IndexedDB und verwenden die Methode `openCursor()`, um einen Cursor zu öffnen, der in IndexedDB im Grunde eine Möglichkeit ist, durch alle Elemente im Geschäft zu iterieren. Wir durchlaufen dann alle Elemente im Cursor, solange ein gültiges Element im Cursor übrig ist.

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

Das erste, was wir tun, ist die Monatsnamen, die wir in der Datenbank gespeichert haben, in eine Monatsnummer umzuwandeln, die JavaScript verstehen wird. Wie wir zuvor gesehen haben, erstellt das JavaScript `Date`-Objekt Monatswerte als Zahl zwischen 0 und 11.

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

Da die aktuellen Zeit- und Datensegmente zusammengefügt wurden, die wir gegen die in IndexedDB gespeicherten Werte überprüfen möchten, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer eine Art Benachrichtigung anzeigen, die ihm mitteilt, dass seine Frist abgelaufen ist.

Der `+`-Operator in diesem Fall konvertiert Zahlen mit führenden Nullen in ihre äquivalenten Zahlen ohne führende Nullen, z.B. 09 -> 9. Dies ist erforderlich, da JavaScript `Date`-Zahlenwerte niemals führende Nullen haben, unsere Daten aber möglicherweise.

Der `notified === "no"`-Check soll sicherstellen, dass Sie nur eine Benachrichtigung pro To-do-Element erhalten. Wenn eine Benachrichtigung für jedes Elementobjekt ausgelöst wird, wird seine `notification`-Eigenschaft auf `"yes"` gesetzt, sodass diese Überprüfung in der nächsten Iteration nicht bestanden wird, über den folgenden Code innerhalb der `createNotification()`-Funktion (lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

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

Wenn alle Überprüfungen übereinstimmen, führen wir die Funktion `createNotification()` aus, um dem Benutzer eine Benachrichtigung bereitzustellen.

```js
      cursor.continue();
    }
  }
}
```

Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass das obige Fristüberprüfungsmechanismus für die nächste in IndexedDB gespeicherte Aufgabe ausgeführt wird.

### Weiterhin überprüfen!

Natürlich nützt es nichts, die oben genannte Fristüberprüfungsfunktion nur einmal auszuführen! Wir möchten ständig alle Fristen überprüfen, um zu sehen, ob eine von ihnen erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
