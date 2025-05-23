---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit vielfältigen Abfragemöglichkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline funktionieren.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation wie das Hinzufügen oder Abrufen von Daten durchzuführen.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie dem richtigen Typ von DOM-Ereignis lauschen.
5. Machen Sie etwas mit den Ergebnissen (die auf dem Anforderungsobjekt gefunden werden können).

Mit diesen großen Konzepten können wir zu konkreteren Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess wie folgt:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation – Sie müssen sie „anfordern“.

Die Öffnungsanfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die Öffnungsfunktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter für die `open`-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema — die Objektspeicher in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank bereits existiert, Sie jedoch eine aktualisierte Versionsnummer angeben, wird ebenfalls ein `onupgradeneeded`-Ereignis ausgelöst, das Ihnen ermöglicht, ein aktualisiertes Schema in dessen Handler bereitzustellen. Mehr dazu später im Abschnitt [Erstellen oder Aktualisieren der Datenbankversion](#erstellen_oder_aktualisieren_der_version_der_datenbank) weiter unten und auf der Referenzseite von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass es sich um eine sehr große Ganzzahl handeln kann. Es bedeutet auch, dass Sie keine Fließkommazahl verwenden können, da diese ansonsten in die nächstniedrigere Ganzzahl umgewandelt wird und die Transaktion möglicherweise nicht startet oder das `upgradeneeded`-Ereignis nicht ausgelöst wird. Verwenden Sie also zum Beispiel nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlers

Das Erste, was Sie mit fast allen generierten Anfragen tun sollten, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgsevent (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als seinem `target` ausgelöst. Sobald es ausgelöst wird, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsevent als Argument aufgerufen. Wenn andererseits ein Problem auftritt, wird ein Fehlerereignis (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) auf `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so gestaltet, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse generieren. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Web-App die Berechtigung zum Erstellen einer Datenbank verweigert hat. Eines der Hauptziele von IndexedDB ist es, die Speicherung großer Datenmengen für die Offline-Nutzung zu ermöglichen. (Wenn Sie mehr über den Speicherplatz erfahren möchten, den Sie für jeden Browser erhalten können, siehe [Wie viel Daten können gespeichert werden? auf der Seite Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher fragten Browser früher den Benutzer das erste Mal, wenn eine bestimmte Web-App versucht, eine IndexedDB zur Speicherung zu öffnen. Der Benutzer konnte sich entscheiden, den Zugriff zu erlauben oder zu verweigern. Darüber hinaus wird der IndexedDB-Speicher in den Privatsphären-Modi von Browsern nur im Speicher gehalten, bis die Inkognito-Sitzung geschlossen wird.

Angenommen, der Benutzer hat Ihrer Anfrage zur Erstellung einer Datenbank zugestimmt und Sie haben ein Erfolgsevent erhalten, um den Erfolgscallback auszulösen; Was kommt als Nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten sie definitiv für später speichern. Ihr Code könnte in etwa so aussehen:

```js
let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
  db = event.target.result;
};
```

#### Fehlerbehandlung

Wie oben erwähnt, blubbern Fehlerereignisse. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler generiert hat, dann steigt das Ereignis zur Transaktion auf und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler für jede Anfrage hinzuzufügen, können Sie stattdessen einen einzelnen Fehlerhandler für das Datenbankobjekt hinzufügen, so:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der häufigen möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er zeigt an, dass die Version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als vorher, als Sie [eine Datenbank öffneten](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden für `onversionchange`-Ereignisse eingerichteten Handler übergeben, der auf `request.result` (d.h. `db` im Beispiel) gesetzt wird. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektspeicher erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall wird die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank enthalten, so dass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder nicht mehr benötigte Objektspeicher aus der vorherigen Version löschen. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z.B. um den `keyPath` zu ändern), dann müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dabei die Informationen im Objektspeicher gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Upgrade der Datenbank auslesen und anderweitig speichern.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder zu versuchen, einen Objektspeicher mit einem Namen zu löschen, der noch nicht existiert), wird einen Fehler verursachen.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der offenen Datenbankanfrage ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstelle von Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Jedesmal, wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, je nachdem, ob der Objektspeicher einen [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [Schlüsselerzeuger](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Möglichkeiten, wie die Schlüssel bereitgestellt werden:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Schlüsselpfad (<code>keyPath</code>)</th>
      <th scope="col">Schlüsselerzeuger (<code>autoIncrement</code>)</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nein</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann jeden Wert speichern, sogar primitive
        Werte wie Zahlen und Zeichenfolgen. Sie müssen ein separates
        Schlüsselargument angeben, wann immer Sie einen neuen Wert
        hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Die
        Objekte müssen eine Eigenschaft mit demselben Namen wie der
        Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann beliebige Werte enthalten. Der Schlüssel
        wird automatisch generiert, oder Sie können ein separates
        Schlüsselargument angeben, falls Sie einen spezifischen Schlüssel
        verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Normalerweise
        wird ein Schlüssel generiert und der Wert des generierten Schlüssels
        wird in dem Objekt in einer Eigenschaft mit demselben Namen wie der
        Schlüsselpfad gespeichert. Wenn jedoch eine solche Eigenschaft bereits
        vorhanden ist, wird der Wert dieser Eigenschaft anstelle eines neuen
        Schlüssels verwendet.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes für jeden Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte und keine primitiven Werte. Ein Index ermöglicht es Ihnen, die in einem Objektspeicher gespeicherten Werte anhand des Werts einer Eigenschaft des gespeicherten Objekts abzurufen, anstatt des Schlüssels des Objekts.

Zusätzlich haben Indizes die Fähigkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Indem Sie das eindeutige Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Index gespeichert werden. Wenn Sie also beispielsweise einen Objektspeicher haben, der eine Gruppe von Personen enthält, und sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit dem eindeutigen Flag festlegen, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer einer Person als Primärschlüssel für eine Kunden Tabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden stattdessen ihr Geburtsdatum speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Bequemlichkeit halber ignorieren und weitermachen.

Nun schauen wir uns das Erstellen einer IndexedDB an, um unsere Daten zu speichern:

```js
const dbName = "the_name";

const request = indexedDB.open(dbName, 2);

request.onerror = (event) => {
  // Handle errors.
};
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customerObjectStore.add(customer);
    });
  };
};
```

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen sowie Indizes aufbauen und entfernen.

Die Objektspeicher werden durch einen einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameterobjekt entgegen. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und die Art des Objektspeichers, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir einen Objektspeicher namens "customers" angefordert und einen `keyPath` definiert, welches die Eigenschaft ist, die ein einzelnes Objekt im Speicher eindeutig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer eindeutig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert ist.

Wir haben auch einen Index namens "name" angefordert, der die `name` Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt, mit dem Sie die Art des Indexes, den Sie erstellen möchten, verfeinern können. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, gelingt dennoch, aber die Objekte erscheinen nicht im "name" Index.

Wir können nun die gespeicherten Kundenobjekte über ihre `ssn` direkt aus dem Objektspeicher abrufen oder ihre Namen über den Index verwenden. Um zu erfahren, wie dies geschieht, siehe den Abschnitt [Verwendung eines Indexes](#verwendung_eines_indexes).

### Verwendung eines Schlüsselerzeugers

Das Einrichten eines `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselerzeuger für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselerzeuger wird der Schlüssel automatisch generiert, wenn Sie den Wert dem Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselerzeugers wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselerzeuger zuerst erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 im Vergleich zum vorherigen Schlüssel erhöht. Die aktuelle Nummer eines Schlüsselerzeugers sinkt nie, außer als Ergebnis von Datenbankoperationen, die zurückgesetzt werden, zum Beispiel wenn die Datenbanktransaktion abgebrochen wird. Daher wirkt sich das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objektspeicher nie auf den Schlüsselerzeuger des Objektspeichers aus.

Wir können einen neuen Objektspeicher mit dem Schlüsselerzeuger wie folgt erstellen:

```js
// Open the indexedDB.
const request = indexedDB.open(dbName, 3);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Create another object store called "names" with the autoIncrement flag set as true.
  const objStore = db.createObjectStore("names", { autoIncrement: true });

  // Because the "names" object store has the key generator, the key for the name value is generated automatically.
  // The added records would be like:
  // key : 1 => value : "Bill"
  // key : 2 => value : "Donna"
  customerData.forEach((customer) => {
    objStore.add(customer.name);
  });
};
```

Für weitere Details über den Schlüsselerzeuger, siehe ["W3C Schlüsselerzeuger"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie etwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen kommen von dem Datenbankobjekt, und Sie müssen angeben, welche Objektspeicher Sie mit der Transaktion zu übergreifen möchten. Sobald Sie sich in der Transaktion befinden, können Sie auf die Daten zugreifen, die die Objektspeicher enthalten und Ihre Anfragen stellen. Als nächstes müssen Sie sich entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder ob Sie nur aus ihr lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern — was das Erstellen oder Löschen von Objektspeichern oder Indizes umfasst — muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch den Aufruf der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines bestehenden Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem bestehenden Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Bereich, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt mit der Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) zurück, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly`-Modus.

> [!NOTE]
> Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702).) Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis könnte also schneller als zuvor ausgeliefert werden, jedoch besteht eine kleine Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Verlust der Systemleistung kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter sorgen müssen. Wenn Sie aus irgendeinem Grund die Haltbarkeit sicherstellen müssen (z. B., wenn Sie kritische Daten speichern, die später nicht wieder berechnet werden können), können Sie eine Transaktion vor der Auslieferung des `complete`-Ereignisses zwingen, auf die Festplatte zu schreiben, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Bereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Bereich definieren, geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit sich nicht überschneidenden Bereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly`-Transaktionen mit sich überschneidenden Bereichen gleichzeitig ausführen, jedoch können Sie nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Um mehr zu erfahren, lesen Sie die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten in die Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich etwas hineinschreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (wobei eines optional ist) an und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfasst. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umfasst, aber tun Sie das nicht, weil die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError generieren sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier hineinschreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, wo Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind eng an die Ereignisschleife gebunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anforderung darauf zu stellen. Wenn die Anforderung abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt, die Anforderung war erfolgreich, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Callback zu erweitern. Wenn Sie ohne Erweiterung der Transaktion in die Ereignisschleife zurückkehren, wird sie inaktiv und so weiter. Solange ausstehende Anfragen bestehen, bleibt die Transaktion aktiv. Transaktionslebensdauern sind wirklich sehr einfach, aber es kann eine Weile dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele helfen ebenfalls. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, dann haben Sie etwas falsch gemacht.

Transaktionen können drei verschiedene Arten von DOM-Ereignissen erhalten: `error`, `abort` und `complete`. Wir haben über die Art und Weise gesprochen, wie `error`-Ereignisse nach oben steigen, sodass eine Transaktion von jeder Anfrage, die von ihr generiert wird, Fehlerereignisse erhält. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion abzubrechen, bei der er aufgetreten ist. Wenn Sie den Fehler nicht durch Aufrufen von `stopPropagation()` auf dem Fehlerereignis zuerst behandeln und dann etwas anderes tun, wird die gesamte Transaktion zurückgerollt. Dieses Design zwingt Sie dazu, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen universellen Fehlerhandler zur Datenbank hinzufügen, wenn eine feingranulare Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf die Transaktion aufrufen, wird die Transaktion zurückgerollt und ein `abort`-Ereignis auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich Ihre geistige Gesundheit unterstützen.

Jetzt, wo Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus abrufen. Transaktionen ermöglichen es Ihnen nur, einen Objektspeicher zu haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

```js
// Do something when all the data is added to the database.
transaction.oncomplete = (event) => {
  console.log("All done!");
};

transaction.onerror = (event) => {
  // Don't forget to handle errors!
};

const objectStore = transaction.objectStore("customers");
customerData.forEach((customer) => {
  const request = objectStore.add(customer);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
  };
});
```

Das `result` einer Anfrage, die aus einem Aufruf von `add()` generiert wird, ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte er also der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt bereits in der Datenbank mit demselben Schlüssel vorhanden ist. Wenn Sie versuchen, einen bestehenden Eintrag zu ändern oder es Ihnen egal ist, ob dieser bereits existiert, können Sie die `put()`-Funktion verwenden, wie im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#eintrag_in_der_datenbank_aktualisieren) unten gezeigt.

### Daten aus der Datenbank entfernen

Das Entfernen von Daten ist sehr ähnlich:

```js
const request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = (event) => {
  // It's gone!
};
```

### Daten aus der Datenbank abrufen

Jetzt, da die Datenbank einige Informationen enthält, können Sie sie auf verschiedene Arten abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, etwa so:

```js
const transaction = db.transaction(["customers"]);
const objectStore = transaction.objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // Handle errors!
};
request.onsuccess = (event) => {
  // Do something with the request.result!
  console.log(`Name for SSN 444-44-4444 is ${request.result.name}`);
};
```

Das ist eine Menge Code für einen "einfachen" Abruf. Hier ist, wie Sie es ein wenig verkürzen können, vorausgesetzt, dass Sie Fehler auf der Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie das Übergeben einer Listen der Objektspeicher, die Sie in Ihrer Transaktion benötigen, vermeiden und einfach den Namen als Zeichenfolge übergeben. Außerdem lesen Sie nur aus der Datenbank, daher benötigen Sie keine `"readwrite"`-Transaktion. Ein Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Eine weitere Kleinigkeit hier ist, dass Sie das Anfrageobjekt nicht wirklich in einer Variable speichern. Da das DOM-Ereignis die Anfrage als dessen Ziel hat, können Sie das Ereignis verwenden, um auf die `result`-Eigenschaft zuzugreifen.

### Eintrag in der Datenbank aktualisieren

Da wir nun einige Daten abgerufen haben, ist das Aktualisieren und Zurücksetzen in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

```js
const objectStore = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // Handle errors!
};
request.onsuccess = (event) => {
  // Get the old value that we want to update
  const data = event.target.result;

  // update the value(s) in the object that you want to change
  data.age = 42;

  // Put this updated object back into the database.
  const requestUpdate = objectStore.put(data);
  requestUpdate.onerror = (event) => {
    // Do something with the error
  };
  requestUpdate.onsuccess = (event) => {
    // Success - the data is updated!
  };
};
```

Hier erstellen wir also einen `objectStore` und fordern einen Kundendatensatz daraus an, der durch seinen ssn-Wert (`444-44-4444`) identifiziert wird. Dann speichern wir das Ergebnis dieser Anfrage in einer Variable (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben und nicht nur daraus lesen möchten.

### Verwenden eines Cursors

Mit `get()` müssen Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektspeicher durchgehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

```js
const objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`Name for SSN ${cursor.key} is ${cursor.value.name}`);
    cursor.continue();
  } else {
    console.log("No more entries!");
  }
};
```

Die `openCursor()`-Funktion nimmt mehrere Argumente an. Erstens können Sie den Bereich der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir gleich noch zu sprechen kommen. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursor ist ein bisschen speziell. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzschreibweise, daher `event.target.result`). Dann befinden sich der eigentliche Schlüssel und der Wert in den `key`- und `value`-Eigenschaften des Cursorobjekts. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die Ihrer `openCursor()`-Anfrage entsprechen) erhalten Sie immer noch ein Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursorn besteht darin, alle Objekte in einem Objektspeicher abzurufen und zu einem Array hinzuzufügen, so:

```js
const customers = [];

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    console.log(`Got all customers: ${customers}`);
  }
};
```

> [!NOTE]
> Alternativ können Sie `getAll()` für diesen Fall verwenden (und `getAllKeys()`). Der folgende Code tut genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungskosten, der mit dem Blick auf die `value`-Eigenschaft eines Cursors verbunden ist, da das Objekt verzögert erstellt wird. Wenn Sie zum Beispiel `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie daran interessiert sind, nur auf jeden Schlüssel zu schauen, ist es viel effizienter, einen Cursor zu verwenden als `getAll()`. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, sollten Sie jedoch `getAll()` verwenden.

### Verwendung eines Indexes

Das Speichern von Kundendaten unter Verwendung der SSN als Schlüssel ist logisch, da die SSN eine Einzelperson eindeutig identifiziert. (Ob dies eine gute Idee für den Datenschutz ist, ist eine andere Frage und außerhalb des Rahmens dieses Artikels.) Wenn Sie jedoch einen Kunden nach dem Namen nachschlagen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie den richtigen gefunden haben. Eine solche Suche wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, daher könnten mehrere Einträge mit `name` gesetzt auf `"Donna"` vorhanden sein. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselkursor ordnet die Indexeigenschaft dem Schlüssel zu, der zum Speichern des Objekts im Objektspeicher verwendet wird. Die Unterschiede werden hier dargestellt:

```js
// Using a normal cursor to grab whole customer record objects
index.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the whole object.
    console.log(
      `Name: ${cursor.key}, SSN: ${cursor.value.ssn}, email: ${cursor.value.email}`,
    );
    cursor.continue();
  }
};

// Using a key cursor to grab customer record object keys
index.openKeyCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.primaryKey is the SSN.
    // No way to directly get the rest of the stored object.
    console.log(`Name: ${cursor.key}, SSN: ${cursor.primaryKey}`);
    cursor.continue();
  }
};
```

### Bereich und Richtung von Cursorn spezifizieren

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzelnen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann „geschlossen“ sein (d.h. der Schlüsselbereich schließt die angegebenen Wert(e) ein) oder „offen“ (d.h. der Schlüsselbereich schließt die angegebenen Wert(e) nicht ein). So funktioniert es:

```js
// Only match "Donna"
const singleKeyRange = IDBKeyRange.only("Donna");

// Match anything past "Bill", including "Bill"
const lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// Match anything past "Bill", but don't include "Bill"
const lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// Match anything up to, but not including, "Donna"
const upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// Match anything between "Bill" and "Donna", but not including "Donna"
const boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

// To use one of the key ranges, pass it in as the first argument of openCursor()/openKeyCursor()
index.openCursor(boundKeyRange).onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the matches.
    cursor.continue();
  }
};
```

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursor) iterieren. Der Richtungswechsel erfolgt durch Übergeben von `prev` an die `openCursor()`-Funktion als zweites Argument:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, aber die gezeigten Ergebnisse nicht beschränken wollen, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, könnten mehrere Einträge vorhanden sein, in denen `name` gleich ist. Beachten Sie, dass eine solche Situation nicht bei Objektspeichern auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte beachten Sie "[IDBCursor Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente.

## Versionsänderungen während eine Webanwendung in einem anderen Tab geöffnet ist

Wenn sich Ihre Webanwendung so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie überlegen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer höheren Version als der aktuellen Version der Datenbank aufrufen, müssen alle anderen geöffneten Datenbanken die Anforderung ausdrücklich bestätigen, bevor Sie mit den Änderungen an der Datenbank beginnen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

```js
const openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = (event) => {
  // If some other tab is loaded with the database, then it needs to be closed
  // before we can proceed.
  console.log("Please close all other tabs with this site open!");
};

openReq.onupgradeneeded = (event) => {
  // All other databases have been closed. Set everything up.
  db.createObjectStore(/* … */);
  useDatabase(db);
};

openReq.onsuccess = (event) => {
  const db = event.target.result;
  useDatabase(db);
};

function useDatabase(db) {
  // Make sure to add a handler to be notified if another page requests a version
  // change. We must close the database. This allows the other page to upgrade the database.
  // If you don't do this then the upgrade won't happen until the user closes the tab.
  db.onversionchange = (event) => {
    db.close();
    console.log(
      "A new version of this page is ready. Please reload or close this tab!",
    );
  };

  // Do stuff with the database.
}
```

Sie sollten auch auf `VersionError`-Fehler achten, um die Situation zu handhaben, in der bereits geöffnete Apps möglicherweise Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch unter Verwendung einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der erstellenden Website bindet (in der Regel ist dies die Domain oder Subdomain der Website), sodass es von keinem anderen Ursprung aus zugänglich ist.

Inhalte von Drittanbieterfenstern (z.B. {{htmlelement("iframe")}} Inhalte) können auf IndexedDB nicht zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox Bug 1147821](https://bugzil.la/1147821)).

## Warnung über den Browser-Shutdown

Wenn der Browser heruntergefahren wird (weil der Benutzer die Optionen Beenden oder Verlassen gewählt hat), die Festplatte, die die Datenbank enthält, unerwartet entfernt wird oder die Berechtigungen für den Datenbankspeicher verloren gehen, passieren die folgenden Dinge:

1. Jede Transaktion auf jeder betroffenen Datenbank (oder allen offenen Datenbanken im Falle eines Browser-Shutdowns) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu lauschen, sodass Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist erst seit den folgenden Browserversionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen wurden die Transaktionen stillschweigend abgebrochen, und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wurde ausgelöst, sodass es keine Möglichkeit gab, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und in älteren Browsern wird Ihnen nicht einmal angegeben, wenn sie nicht abgeschlossen werden. Diese Verhaltensweise hat mehrere Implikationen.

Erstens sollten Sie darauf achten, Ihre Datenbank am Ende jeder Transaktion immer in einem konsistenten Zustand zu lassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die der Benutzer bearbeiten darf. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektspeicher löschen und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion löschen und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Löschen, aber vor dem Schreiben schließt und Ihnen eine leere Datenbank hinterlässt. Um dies zu vermeiden, sollten Sie das Löschen und das Schreiben in einer einzigen Transaktion kombinieren.

Zweitens sollten Sie Datenbanktransaktionen niemals an Entladungsereignisse binden. Wenn das Entladungsereignis durch das Schließen des Browsers ausgelöst wird, werden Transaktionen, die im Entladungsereignishandler erstellt wurden, niemals abgeschlossen. Ein intuitiver Ansatz zur Beibehaltung von Informationen über Browsersitzungen hinweg besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in der Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Entladungsereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei einem normalen Herunterfahren des Browsers. Siehe [Firefox Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Benachrichtigung über das Herunterfahren können Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn bei dem Entladen der Seite noch keine Transaktionen abgeschlossen wurden.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies geschehen ist.

## Komplettes IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel mit der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Beispiel ausprobieren](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weitere Lektüre, um bei Bedarf mehr Informationen zu finden.

### Referenz

- [IndexedDB API Reference](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [Interface-Dateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für clientseitige Datenspeicherung bereitstellt, die im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann auf localStorage zurückfällt, wenn IndexedDB nicht unterstützt wird.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortschrittlicher IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage unterstützt wird, mit Serverseite über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser mithilfe von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die im Wesentlichen die IndexedDB-API widerspiegelt, jedoch mit kleinen Benutzerfreundlichkeitsverbesserungen.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfacher-kleiner (~600B) versprechenbasierter Key-Value-Store, implementiert mit IndexedDB.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (~1,3 kB) TypeScript-Fassade mit einem versprechenbasierten API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Datenbank auf der Client-Seite, die auf IndexedDB basieren kann. Unterstützt Indizes, Kompression und Replikation. Fügt auch Funktionen für Cross-Tab und Beobachtbarkeit zu IndexedDB hinzu.
