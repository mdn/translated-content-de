---
title: Überprüfen, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Uhrzeit und das Datum mit einer Frist verglichen werden, die über IndexedDB gespeichert wurde. Die Hauptschwierigkeit besteht darin, die gespeicherten Fristinformationen (Monat, Stunde, Tag usw.) mit der aktuellen Uhrzeit und dem Datum aus einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt abzugleichen.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit der Beschriftung To-do-App, ein Test-To-do-Element und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptanwendungsbeispiel, auf die wir uns in diesem Artikel beziehen werden, ist **To-do-Listen-Benachrichtigungen**, eine einfache To-do-Liste-Anwendung, die Aufgabentitel sowie Fristzeiten und -daten über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und den Benutzern Benachrichtigungen bereitstellt, wenn Fristen erreicht werden, mittels der [Notification](/de/docs/Web/API/Notification)- und [Vibration](/de/docs/Web/API/Vibration_API)-APIs. Sie können [die To-do-Listen-Benachrichtigungen-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode experimentieren oder [die App live in Betrieb sehen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zuerst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für Menschen verständlich ist, wenn es angezeigt wird, und dann überprüfen, ob jede Zeit und jedes Datum gerade jetzt stattfindet. Grundsätzlich wollen wir prüfen, was Uhrzeit und Datum gerade jetzt sind, und dann jedes gespeicherte Ereignis überprüfen, um festzustellen, ob eine ihrer Fristen mit der aktuellen Uhrzeit und dem Datum übereinstimmt. Wenn dies der Fall ist, möchten wir den Benutzer durch irgendeine Art von Benachrichtigung informieren.

Das wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen keine Fristinformationen in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind recht unterschiedlich, mit einer Reihe verschiedener Darstellungen.

### Aufzeichnen der Datumsinformationen

Um eine angemessene Benutzererfahrung auf mobilen Geräten zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich mich entschieden, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App mit Feldern zum Ausfüllen eines Aufgabentitels sowie Minuten-, Stunden-, Tages-, Monats- und Jahreswerten für die Frist.](to-do-app-form2.png)

- Einem Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der unvermeidlichste Teil der Benutzer-Eingabe.
- Zahleneingaben für die Stunden- und Minutenkomponenten der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen schönen kleinen Auf- und Abwärts-Pfeilnummern-Picker. Auf mobilen Plattformen bekommen Sie in der Regel ein numerisches Tastenfeld zum Eingeben von Daten, was hilfreich ist. Auf anderen erhalten Sie einfach ein Standard-Textfeld, was in Ordnung ist.
- {{HTMLElement("select")}}-Elemente zum Eingeben des Tages, Monats und Jahres der Frist. Da diese Werte die am meisten zweideutigen für Benutzer sind (7, Sonntag, Son? 04, 4, April, Apr? 2013, '13, 13?), habe ich entschieden, dass die beste Lösung darin besteht, ihnen eine Wahl anzubieten, aus der sie auswählen können, was auch das lästige Tippen für mobile Benutzer spart. Die Tage werden als nummerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre als vollständige vierstellige Jahreszahlen.

Wenn die Schaltfläche zum Absenden des Formulars gedrückt wird, führen wir die `addData()`-Funktion aus, die so beginnt:

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
```

In diesem Abschnitt überprüfen wir, ob alle Formularfelder ausgefüllt wurden. Falls nicht, geben wir eine Nachricht in unser Entwickler-Benachrichtigungsfeld (siehe unten links im App-UI) ein, um den Benutzer darüber zu informieren, was vor sich geht, und beenden die Funktion. Dieser Schritt ist hauptsächlich für Browser, die keine HTML-Formularvalidierung unterstützen (ich habe das `required`-Attribut in meinem HTML verwendet, um die Validierung in denen zu erzwingen, die es tun).

```js
  else {
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
```

In diesem Teil erstellen wir ein Objekt namens `newItem`, das die Daten im erforderlichen Format speichert, um sie in die Datenbank einzufügen. Die nächsten Zeilen öffnen die Datenbank-Transaktion und bieten Nachrichten an, um den Benutzer zu benachrichtigen, ob dies erfolgreich war oder gescheitert ist. Dann wird ein `objectStore` erstellt, in den der neue Eintrag hinzugefügt wird. Die `notified`-Eigenschaft des Datenobjekts zeigt an, dass die Frist des To-do-Listenpunkts noch nicht erreicht und benachrichtigt wurde - mehr dazu später!

> [!NOTE]
> Die `db`-Variable speichert eine Referenz zur IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

```js
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
  }
```

Dieser nächste Abschnitt erstellt eine Protokollnachricht, um zu sagen, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, sodass es bereit ist, die nächste Aufgabe einzugeben.

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
}
```

Zuletzt führen wir die `displayData()`-Funktion aus, die die Anzeige der Daten in der App aktualisiert, um die soeben eingegebene neue Aufgabe anzuzeigen.

### Überprüfen, ob eine Frist erreicht wurde

An diesem Punkt befinden sich unsere Daten in der Datenbank; jetzt wollen wir überprüfen, ob eine der Fristen erreicht wurde. Dies wird durch unsere `checkDeadlines()`-Funktion durchgeführt:

```js
function checkDeadlines() {
  const now = new Date();
```

Zuerst holen wir das aktuelle Datum und die Uhrzeit, indem wir ein leeres `Date`-Objekt erstellen. Einfach, oder? Es wird gleich etwas komplexer.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

Das `Date`-Objekt hat eine Anzahl von Methoden, um verschiedene Teile des darin enthaltenen Datums und der Uhrzeit zu extrahieren. Hier holen wir die aktuellen Minuten (liefert einen einfachen numerischen Wert), Stunden (liefert einen einfachen numerischen Wert), Tag des Monats (`getDate()` wird dafür benötigt, da `getDay()` den Wochentag, 1-7, zurückgibt), Monat (liefert eine Nummer von 0-11, siehe unten) und das Jahr (`getFullYear()` wird benötigt; `getYear()` ist veraltet und liefert einen seltsamen Wert, der niemandem viel nützt!)

```js
  const objectStore = db
    .transaction(["toDoList"], "readwrite")
    .objectStore("toDoList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

Als nächstes erstellen wir ein weiteres IndexedDB `objectStore` und verwenden die `openCursor()`-Methode, um einen Cursor zu öffnen, was im Wesentlichen eine Möglichkeit in IndexedDB ist, durch alle Einträge im Store zu iterieren. Wir durchlaufen dann alle Einträge im Cursor, solange es einen gültigen Eintrag im Cursor gibt.

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

Mit den aktuellen Zeit- und Datumssegmenten, die wir mit den in IndexedDB gespeicherten Werten vergleichen möchten, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir den Benutzer über eine Art Benachrichtigung informieren, dass seine Frist abgelaufen ist.

Der `+`-Operator in diesem Fall konvertiert Zahlen mit führenden Nullen in ihre entsprechenden Werte ohne führende Nullen, z.B. 09 -> 9. Das ist notwendig, weil JavaScript` Date` Zahlenwerte niemals führende Nullen haben, unserer Daten jedoch.

Die Überprüfung `notified === "no"` ist dafür gedacht, sicherzustellen, dass Sie nur eine Benachrichtigung pro To-do-Element erhalten. Wenn eine Benachrichtigung für jedes Elementobjekt ausgelöst wird, wird ihre `notification`-Eigenschaft auf `"yes"` gesetzt, sodass diese Überprüfung bei der nächsten Iteration nicht besteht, mittels des folgenden Codes in der `createNotification()`-Funktion (lesen Sie [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

```js
    // now we need to update the value of notified to "yes" in this particular data object, so the
    // notification won't be set off on it again

    // first open up a transaction as usual
    const objectStore = db
      .transaction(["toDoList"], "readwrite")
      .objectStore("toDoList");

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
      };
```

Wenn alle Überprüfungen übereinstimmen, führen wir dann die `createNotification()`-Funktion aus, um dem Benutzer eine Benachrichtigung zu geben.

```js
      cursor.continue();
    }
  }
}
```

Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass der oben beschriebene Fristenüberprüfungsmechanismus für die nächste in der IndexedDB gespeicherte Aufgabe ausgeführt wird.

### Weiterhin überprüfen!

Natürlich nützt es nichts, die oben genannte Fristenüberprüfungsfunktion nur einmal auszuführen! Wir wollen die Fristen konstant überprüfen, um festzustellen, ob eine von ihnen erreicht wird. Um dies zu tun, verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
