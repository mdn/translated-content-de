---
title: Überprüfung, wann eine Frist fällig ist
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("IndexedDB")}}

In diesem Artikel betrachten wir ein komplexes Beispiel, bei dem die aktuelle Zeit und das aktuelle Datum mit einer über IndexedDB gespeicherten Frist verglichen werden. Die Hauptschwierigkeit besteht darin, die gespeicherte Fristinformation (Monat, Stunde, Tag usw.) mit der aktuellen Zeit und dem aktuellen Datum aus einem [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zu vergleichen.

![Ein Screenshot der Beispiel-App. Ein roter Haupttitel mit der Aufschrift "To do app", ein Test-To-do-Element und ein rotes Formular, in dem Benutzer neue Aufgaben eingeben können](to-do-app.png)

Die Hauptanwendung, auf die wir in diesem Artikel verweisen werden, ist **To-do-List-Benachrichtigungen**, eine einfache To-do-Listen-Anwendung, die Aufgabentitel sowie Fristen und Termine über [IndexedDB](/de/docs/Web/API/IndexedDB_API) speichert und dann Benutzern Benachrichtigungen gibt, wenn Fristtermine erreicht werden, über die [Notification](/de/docs/Web/API/Notification)- und [Vibration](/de/docs/Web/API/Vibration_API)-APIs. Sie können [die To-do-List-Benachrichtigungen-App von GitHub herunterladen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und mit dem Quellcode herumspielen oder [die App live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/).

## Das grundlegende Problem

In der To-do-App wollten wir zuerst Zeit- und Datumsinformationen in einem Format aufzeichnen, das sowohl maschinenlesbar als auch für den Menschen verständlich ist, wenn es angezeigt wird, und dann überprüfen, ob jede Zeit und jedes Datum im aktuellen Moment stattfindet. Im Grunde genommen möchten wir überprüfen, wie die aktuelle Zeit und das aktuelle Datum sind, und dann jedes gespeicherte Ereignis überprüfen, um zu sehen, ob eine ihrer Fristen mit der aktuellen Zeit und dem aktuellen Datum übereinstimmt. Wenn dies der Fall ist, möchten wir den Benutzer mit einer Art Benachrichtigung darauf hinweisen.

Dies wäre einfach, wenn wir nur zwei {{jsxref("Global_Objects/Date", "Date")}}-Objekte vergleichen würden, aber natürlich möchten Menschen die Fristinformationen nicht in dem Format eingeben, das JavaScript versteht. Menschlich lesbare Daten sind ziemlich unterschiedlich, mit einer Reihe von verschiedenen Darstellungen.

### Aufzeichnung der Datumsinformationen

Um auf mobilen Geräten eine angemessene Benutzererfahrung zu bieten und Mehrdeutigkeiten zu reduzieren, habe ich mich entschieden, ein HTML-Formular zu erstellen mit:

![Das Formular der To-do-App, das Felder zum Ausfüllen eines Aufgabentitels sowie Minute, Stunde, Tag, Monat und Jahrwerte für die Frist enthält.](to-do-app-form2.png)

- Einem Texteingabefeld zum Eingeben eines Titels für Ihre To-do-Liste. Dies ist der Teil der Benutzereingabe, der am wenigsten vermieden werden kann.
- Zahleneingaben für die Stunden- und Minutenteile der Frist. In Browsern, die `type="number"` unterstützen, erhalten Sie einen hübschen kleinen Auf- und Abwärts-Zahlenwähler. Auf mobilen Plattformen erhalten Sie in der Regel eine Nummerntastatur zum Eingeben von Daten, was hilfreich ist. Auf anderen erhalten Sie einfach eine Standard-Textbox, was in Ordnung ist.
- {{HTMLElement("select")}}-Elementen zur Eingabe von Tag, Monat und Jahr der Frist. Da diese Werte für Benutzer am unklarsten einzugeben sind (7, Sonntag, So? 04, 4, April, Apr? 2013, '13, 13?), habe ich beschlossen, dass die beste Lösung darin besteht, ihnen eine Auswahl zu geben, aus der sie wählen können, was auch das lästige Tippen für mobile Benutzer spart. Die Tage werden als numerische Tage des Monats aufgezeichnet, die Monate als vollständige Monatsnamen und die Jahre als vollständige vierstellige Jahreszahlen.

Wenn die Schaltfläche zum Absenden des Formulars gedrückt wird, führen wir die Funktion `addData()` aus, die so beginnt:

```js
function addData(e) {
  e.preventDefault();

  if (!title.value || !hours.value || !minutes.value || !day.value || !month.value || !year.value) {
    note.appendChild(document.createElement("li")).textContent = "Daten nicht übermittelt — Formular unvollständig.";
    return;
  }
```

In diesem Abschnitt prüfen wir, ob alle Formularfelder ausgefüllt wurden. Wenn nicht, geben wir eine Nachricht im Entwickler-Benachrichtigungsbereich (siehe unten links in der App-UI) ein, um dem Benutzer mitzuteilen, was los ist, und verlassen die Funktion. Dieser Schritt ist hauptsächlich für Browser gedacht, die keine HTML-Formularvalidierung unterstützen (ich habe in meinem HTML das `required`-Attribut verwendet, um die Validierung zu erzwingen, in den Browsern, die dies tun).

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
        "Transaktion für das Hinzufügen der Aufgabe geöffnet.";
    };

    transaction.onerror = (event) => {
      note.appendChild(document.createElement("li")).textContent =
        "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Einträge sind nicht erlaubt.";
    };

    // create an object store on the transaction
    const objectStore = transaction.objectStore("toDoList");

    // add our newItem object to the object store
    const request = objectStore.add(newItem[0]);
```

In diesem Abschnitt erstellen wir ein Objekt namens `newItem`, das die Daten in dem Format speichert, das zum Einfügen in die Datenbank erforderlich ist. Die nächsten Zeilen öffnen die Datenbanktransaktion und geben Nachrichten aus, um den Benutzer darüber zu informieren, ob dies erfolgreich war oder fehlgeschlagen ist. Dann wird ein `objectStore` erstellt, in den das neue Element hinzugefügt wird. Die `notified`-Eigenschaft des Datenobjekts gibt an, dass die Frist des To-do-Listen-Eintrags noch nicht erreicht und benachrichtigt wurde - mehr dazu später!

> [!NOTE]
> Die `db`-Variable speichert eine Referenz auf die IndexedDB-Datenbankinstanz; wir können dann verschiedene Eigenschaften dieser Variablen verwenden, um die Daten zu manipulieren.

```js
    request.onsuccess = (event) => {

      note.appendChild(document.createElement("li")).textContent = "Neues Element zur Datenbank hinzugefügt.";

      title.value = "";
      hours.value = null;
      minutes.value = null;
      day.value = "01";
      month.value = "January";
      year.value = 2020;
    };
  }
```

Dieser nächste Abschnitt erstellt eine Protokollnachricht, um zu sagen, dass das Hinzufügen des neuen Elements erfolgreich war, und setzt das Formular zurück, damit es bereit ist, die nächste Aufgabe einzugeben.

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

Zuletzt führen wir die `displayData()`-Funktion aus, die die Anzeige der Daten in der App aktualisiert, um die soeben eingegebene neue Aufgabe anzuzeigen.

### Überprüfung, ob eine Frist erreicht wurde

An diesem Punkt sind unsere Daten in der Datenbank; jetzt wollen wir überprüfen, ob eine der Fristen erreicht wurde. Dies wird durch unsere `checkDeadlines()`-Funktion durchgeführt:

```js
function checkDeadlines() {
  const now = new Date();
```

Zuerst erfassen wir das aktuelle Datum und die aktuelle Zeit, indem wir ein leeres `Date`-Objekt erstellen. Einfach, oder? Es wird ein bisschen komplizierter.

```js
const minuteCheck = now.getMinutes();
const hourCheck = now.getHours();
const dayCheck = now.getDate();
const monthCheck = now.getMonth();
const yearCheck = now.getFullYear();
```

Das `Date`-Objekt hat eine Reihe von Methoden, um verschiedene Teile des Datums und der Zeit darin zu extrahieren. Hier holen wir die aktuellen Minuten (liefert einen einfachen numerischen Wert), Stunden (liefert einen einfachen numerischen Wert), den Tag des Monats (`getDate()` ist hierfür notwendig, da `getDay()` den Wochentag, 1-7, zurückgibt), Monat (liefert eine Zahl von 0-11, siehe unten) und Jahr (`getFullYear()` ist notwendig; `getYear()` ist veraltet und liefert einen seltsamen Wert, der für niemanden von großem Nutzen ist!)

```js
  const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    let monthNumber;

    if (cursor) {
```

Als nächstes erstellen wir einen weiteren IndexedDB `objectStore` und verwenden die Methode `openCursor()`, um einen Cursor zu öffnen, was im Grunde ein Weg in IndexedDB ist, um alle Elemente im Store zu durchlaufen. Wir durchlaufen dann alle Elemente im Cursor, solange in diesem noch ein gültiges Element vorhanden ist.

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
    alert("Ungültiger Monat in der Datenbank eingegeben.");
}
```

Das Erste, was wir tun, ist, die in der Datenbank gespeicherten Monatsnamen in eine Monatszahl umzuwandeln, die von JavaScript verstanden wird. Wie wir zuvor gesehen haben, erstellt das JavaScript `Date`-Objekt Monatswerte als eine Zahl zwischen 0 und 11.

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

Mit den aktuellen Zeit- und Datensegmenten, die wir mit den in IndexedDB gespeicherten Werten vergleichen möchten, ist es an der Zeit, die Überprüfungen durchzuführen. Wir möchten, dass alle Werte übereinstimmen, bevor wir dem Benutzer eine Art Benachrichtigung anzeigen, um ihm mitzuteilen, dass seine Frist abgelaufen ist.

Der `+`-Operator in diesem Fall konvertiert Zahlen mit führenden Nullen in ihre nicht führenden äquivalenten Zahlen, z. B. 09 -> 9. Dies ist erforderlich, da die JavaScript-`Date`-Zahlenwerte niemals führende Nullen haben, unsere Daten jedoch könnten.

Die `notified === "no"`-Überprüfung soll sicherstellen, dass Sie nur eine Benachrichtigung pro To-do-Eintrag erhalten. Wenn eine Benachrichtigung für jedes Objekt ausgelöst wird, wird dessen `notification`-Eigenschaft auf `"yes"` gesetzt, sodass diese Überprüfung bei der nächsten Iteration nicht erfolgreich ist, über den folgenden Code innerhalb der `createNotification()`-Funktion (lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) für eine Erklärung):

```js
    // nun müssen wir den Wert von notified in diesem bestimmten Datenobjekt auf "yes" aktualisieren, damit die
    // Benachrichtigung darüber nicht erneut ausgelöst wird

    // zuerst wie gewohnt eine Transaktion öffnen
    const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // das To-do-Listen-Objekt abrufen, das diesen Titel als Titel hat
    const request = objectStore.get(title);

    request.onsuccess = () => {
      // das als Ergebnis zurückgegebene Datenobjekt greifen
      const data = request.result;

      // den notificierten Wert im Objekt auf "yes" aktualisieren
      data.notified = "yes";

      // eine weitere Anfrage erstellen, die das Element zurück in die Datenbank einfügt
      const requestUpdate = objectStore.put(data);

      // wenn diese neue Anfrage erfolgreich ist, die displayData()-Funktion erneut ausführen, um die Anzeige zu aktualisieren
      requestUpdate.onsuccess = () => {
        displayData();
      }
```

Wenn alle Überprüfungen übereinstimmen, führen wir dann die `createNotification()`-Funktion aus, um dem Benutzer eine Benachrichtigung zu senden.

```js
      cursor.continue();
    }
  }
}
```

Die letzte Zeile der Funktion bewegt den Cursor weiter, was dazu führt, dass der oben beschriebene Mechanismus zur Fristüberprüfung für die nächste in IndexedDB gespeicherte Aufgabe ausgeführt wird.

### Ständig weiter überprüfen!

Natürlich reicht es nicht aus, die oben beschriebene Fristüberprüfungsfunktion nur einmal auszuführen! Wir möchten ständig alle Fristen überprüfen, um zu sehen, ob eine davon erreicht wird. Dazu verwenden wir `setInterval()`, um `checkDeadlines()` einmal pro Sekunde auszuführen:

```js
setInterval(checkDeadlines, 1000);
```
