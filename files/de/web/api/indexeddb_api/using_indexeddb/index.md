---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel zur [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, wie z. B. Daten hinzuzufügen oder abzurufen.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie auf die richtige Art von DOM-Ereignis hören.
5. Tun Sie etwas mit den Ergebnissen (die Sie im Anfrageobjekt finden können).

Mit diesen großen Konzepten im Hinterkopf können wir zu konkreteren Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess auf diese Weise:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Eine Datenbank zu öffnen ist wie jede andere Operation - Sie müssen sie "anfordern".

Die Öffnungsanforderung öffnet nicht sofort die Datenbank oder startet die Transaktion. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einer Erfolgs- oder Fehlermeldung zurück, die Sie als Ereignis abhandeln. Die meisten anderen asynchronen Funktionen in IndexedDB machen dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema - die Objektspeicher in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank bereits vorhanden ist, aber Sie eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema in seinem Handler bereitzustellen. Mehr dazu weiter unten unter [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) und auf der Referenzseite zur [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass sie eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Fließkommazahl verwenden können, da diese ansonsten auf die nächste kleinere Ganzzahl konvertiert wird und die Transaktion möglicherweise nicht startet, noch wird das `upgradeneeded`-Ereignis ausgelöst. Verwenden Sie also beispielsweise nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlern

Das erste, was Sie mit fast allen von Ihnen generierten Anfragen tun werden, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis ausgelöst, und die der `onsuccess`-Eigenschaft zugewiesene Funktion wird aufgerufen. Wenn die Anfrage fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis ausgelöst, und die der `onerror`-Eigenschaft zugewiesene Funktion wird aufgerufen.

Die IndexedDB-API ist so konzipiert, dass der Fehlerbehandlungsbedarf minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie sich an die API gewöhnt haben!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Web-App nicht die Erlaubnis erteilt hat, eine Datenbank zu erstellen. Ein Hauptziel von IndexedDB ist es, die Speicherung großer Datenmengen für die Offline-Nutzung zu ermöglichen. (Um mehr darüber zu erfahren, wie viel Speicher Sie in jedem Browser haben können, siehe [Wie viel Daten können gespeichert werden? auf der Seite zu Browser-Speicherkontingenten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich wollen Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher haben Browser früher den Benutzer beim ersten Versuch, eine IndexedDB für den Speicher zu öffnen, gefragt. Der Benutzer konnte den Zugriff erlauben oder verweigern. Auch der IndexedDB-Speicher im Privatmodus der Browser bleibt nur im Speicher, bis die anonyme Sitzung geschlossen wird.

Nehmen wir nun an, der Benutzer hat Ihre Anfrage zum Erstellen einer Datenbank erlaubt und Sie haben ein Erfolgsergebnis erhalten, um den Erfolgs-Callback auszulösen. Was kommt als Nächstes? Die Anfrage hier wurde durch einen Aufruf von `indexedDB.open()` generiert, also ist `request.result` eine Instanz von `IDBDatabase`, und die sollten Sie definitiv für später speichern. Ihr Code könnte etwa so aussehen:

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

Wie oben erwähnt, blasen Fehlerereignisse. Fehlerereignisse werden auf die Anfrage gerichtet, die den Fehler erzeugt hat, dann das Ereignis bläst zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler auf das Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiger Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er zeigt an, dass die Version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst, und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignishandler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet ist. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektspeicher erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue benötigte Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen vorhandenen Objektspeicher ändern müssen (z.B. um den `keyPath` zu ändern), müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dadurch die Informationen im Objektspeicher gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie auslesen und irgendwo anders speichern, bevor Sie die Datenbank aktualisieren.)

Wenn Sie versuchen, einen Objektspeicher mit einem Namen zu erstellen, der bereits existiert (oder versuchen, einen Objektspeicher mit einem Namen zu löschen, der nicht existiert), wird ein Fehler ausgelöst.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der Datenbanköffnung abgerufen.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstelle von Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Jedes Mal, wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verbunden. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objektspeicher einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Methoden, wie die Schlüssel bereitgestellt werden:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Key Path (<code>keyPath</code>)</th>
      <th scope="col">Key Generator (<code>autoIncrement</code>)</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nein</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann jeden Werttyp speichern, sogar primitive Werte wie Zahlen und Strings. Sie müssen ein separates Schlüsselargument angeben, wann immer Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Die Objekte müssen eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jeden Werttyp speichern. Der Schlüssel wird Ihnen automatisch generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Normalerweise wird ein Schlüssel generiert und der Wert des generierten Schlüssels wird in dem Objekt in einer Eigenschaft mit demselben Namen wie dem Schlüsselpfad gespeichert. Wenn jedoch bereits eine solche Eigenschaft existiert, wird der Wert dieser Eigenschaft als Schlüssel verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte, keine primitiven Werte. Ein Index ermöglicht es Ihnen, nach den im Objektspeicher gespeicherten Werten anhand des Wertes einer Eigenschaft des gespeicherten Objekts statt des Objektschlüssels zu suchen.

Zusätzlich können Indizes einfache Einschränkungen auf die gespeicherten Daten erzwingen. Indem Sie das eindeutige Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie also beispielsweise einen Objektspeicher haben, der eine Menge von Personen enthält, und Sie sicherstellen möchten, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index verwenden, der das eindeutige Flag gesetzt hat, um dies zu erzwingen.

Das mag kompliziert klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer einer Person als Primärschlüssel für eine Kunden-Tabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Einfachheit halber ignorieren und weitermachen.

Nun schauen wir uns an, wie man eine IndexedDB erstellt, um unsere Daten zu speichern:

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

Wie bereits angedeutet, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen sowie Indizes aufbauen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameterobjekt entgegen. Auch wenn das Parameterobjekt optional ist, ist es sehr wichtig, denn es ermöglicht Ihnen, wichtige optionale Eigenschaften festzulegen und den Typ des Objektspeichers, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir nach einem Objektspeicher namens "customers" verlangt und einen `keyPath` definiert, der die Eigenschaft, die ein einzelnes Objekt im Speicher einzigartig macht, darstellt. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss auf jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch nach einem Index namens "name" gefragt, der auf die `name`-Eigenschaft der gespeicherten Objekte schaut. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt entgegen, das den Typ des Indexes, den Sie erstellen möchten, verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, ist weiterhin erfolgreich, aber die Objekte erscheinen nicht im "name"-Index.

Wir können nun die gespeicherten Kundenobjekte mit ihrer `ssn` direkt aus dem Objektspeicher oder mit ihrem Namen über den Index abrufen. Um zu erfahren, wie das funktioniert, siehe den Abschnitt zum [Verwenden eines Indexes](#verwenden_eines_indexes).

### Verwenden eines Schlüsselgenerators

Das Einrichten eines `autoIncrement`-Flags beim Erstellen des Objektspeichers aktiviert den Schlüsselgenerator für diesen Objektspeicher. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, während Sie den Wert zum Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator wird nie verringert, außer als Ergebnis zurückgesetzter Datenbankoperationen, wie z.B. wenn die Transaktion der Datenbank abgebrochen wird. Daher beeinflusst das Löschen eines Datensatzes oder sogar das Leeren aller Datensätze eines Objektspeichers niemals den Schlüsselgenerator des Objektspeichern.

Wir können einen weiteren Objektspeicher mit dem Schlüsselgenerator wie folgt erstellen:

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

Für weitere Details über den Schlüsselgenerator siehe [Key generators](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie etwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen stammen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objektspeicher Sie in der Transaktion verwenden möchten. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten halten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur aus ihr lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern - was das Erstellen oder Löschen von Objektspeichern oder Indizes beinhaltet - muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufrufen der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer festgelegten `version` geöffnet.

Um die Datensätze eines bestehenden Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem bestehenden Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Umfang, definiert als ein Array von Objektspeichern, die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore)-Methode enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen Transaktionen im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Vorher wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis möglicherweise schneller ausgelöst, da das Betriebssystem angewiesen wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann somit schneller als zuvor zugestellt werden, jedoch besteht ein geringes Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Systemstromversorgung unterbrochen wird, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter damit beschäftigen müssen. Wenn Sie aus irgendeinem Grund sicherstellen müssen, dass die Haltbarkeit gewährleistet ist (z.B. wenn Sie kritische Daten speichern, die später nicht berechnet werden können), können Sie eine Transaktion erzwingen, um auf die Festplatte geschrieben zu werden, bevor das `complete`-Ereignis ausgelöst wird, indem Sie eine Transaktion im experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Umfang und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Umfang definieren, geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Umfängen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn er notwendig ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Umfängen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel zu [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten in die Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich in sie schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste der Objektspeicher, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umfasst, aber tun Sie das nicht, da die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Nun, da Sie eine Transaktion haben, müssen Sie ihre Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion machen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage an sie zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Möglichkeit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Die Lebensdauern von Transaktionen sind wirklich sehr einfach, aber es könnte einige Zeit dauern, sich daran zu gewöhnen. Weitere Beispiele werden auch helfen. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, haben Sie etwas durcheinander gebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen erhalten: `error`, `abort` und `complete`. Wir haben bereits über die Art und Weise gesprochen, wie `error`-Ereignisse blasen, sodass eine Transaktion Fehlerereignisse von allen von ihr generierten Anfragen erhält. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Wenn Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen umfassenden Fehlerhandler zur Datenbank hinzufügen, wenn die feine Fehlerbehandlung zu mühsam ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf die Transaktion aufrufen, wird die Transaktion zurückgesetzt und es wird ein `abort`-Ereignis auf der Transaktion ausgelöst. Andernfalls erhalten Sie, nachdem alle ausstehenden Anfragen abgeschlossen sind, ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle der einzelnen Anfragen sicherlich Ihrer Vernunft zugute kommen.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus erhalten. Transaktionen lassen Sie nur den Objektspeicher haben, den Sie bei der Erstellung der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die durch einen Aufruf von `add()` erzeugt wurde, ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte es also dem `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt mit demselben Schlüssel bereits in der Datenbank vorhanden ist. Wenn Sie versuchen, einen bestehenden Eintrag zu modifizieren, oder es Ihnen egal ist, ob bereits einer vorhanden ist, können Sie die `put()`-Funktion verwenden, wie weiter unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

### Entfernen von Daten aus der Datenbank

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

### Abrufen von Daten aus der Datenbank

Jetzt, da die Datenbank einige Informationen enthält, können Sie sie auf verschiedene Arten abrufen. Zuerst der einfache `get()`. Sie müssen den Schlüssel bereitstellen, um den Wert abzurufen, wie folgt:

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

Das ist eine Menge Code für ein "einfaches" Abrufen. Hier ist, wie Sie es ein wenig verkürzen können, vorausgesetzt, Sie behandeln Fehler auf Datenbankebene:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie vermeiden, eine Liste der benötigten Objektspeicher in Ihrer Transaktion zu übergeben, und einfach den Namen als String übergeben. Außerdem lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Ein Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anfrageobjekt tatsächlich nicht in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als sein Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Nun haben wir einige Daten abgerufen, die Aktualisierung und das Wiedereinfügen in die IndexedDB ist ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir also einen `objectStore` und fordern einen Kunden-Datensatz daraus an, identifiziert durch seinen ssn-Wert (`444-44-4444`). Wir legen das Ergebnis dieser Anfrage in einer Variablen (`data`) ab, aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz zurück in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben und nicht nur lesen möchten.

### Verwenden eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektspeicher durchlaufen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die `openCursor()`-Funktion nimmt mehrere Argumente an. Zuerst können Sie den Bereich der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir gleich zu sprechen kommen. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgs-Callback für Cursors ist etwas Besonderes. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also `event.target.result`). Dann können der eigentliche Schlüssel und Wert in den `key`- und `value`-Eigenschaften des Cursorobjekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die Ihrer `openCursor()`-Anfrage entsprechen), erhalten Sie trotzdem einen Erfolgs-Callback, aber die `result`-Eigenschaft ist `undefined`.

Eine häufige Methode mit Cursors ist es, alle Objekte in einem Objektspeicher abzurufen und sie in ein Array hinzuzufügen, wie dies:

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
> Alternativ können Sie `getAll()` verwenden, um diesen Fall zu behandeln (und `getAllKeys()`). Der folgende Code macht genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Mit der Betrachtung der `value`-Eigenschaft eines Cursors sind Kosten verbunden, da das Objekt verzögert erstellt wird. Wenn Sie zum Beispiel `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, jeden der Schlüssel zu betrachten, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()`. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwenden eines Indexes

Die Speicherung von Kundendaten mit der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies für die Privatsphäre eine gute Idee ist, ist eine andere Frage und außerhalb des Themas dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige finden. Eine Suche auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, sodass es mehr als einen Eintrag mit dem `name` als `"Donna"` geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn auf Indizes öffnen. Ein normaler Cursor mappt die Indexeigenschaft auf das Objekt im Objektspeicher. Ein Schlüsselcursor mappt die Indexeigenschaft auf den Schlüssel, der verwendet wurde, um das Objekt im Objektspeicher zu speichern. Die Unterschiede sind hier dargestellt:

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

### Spezifizieren des Bereichs und der Richtung von Cursorn

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen möchten, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument zu `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel erlaubt, oder einen Bereich, der eine untere oder obere Grenze hat, oder einen Bereich, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" sein (d.h. der Schlüsselbereich enthält den angegebenen Wert/die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich enthält den angegebenen Wert/die angegebenen Werte nicht). So funktioniert das:

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

Manchmal möchten Sie möglicherweise in absteigender anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursor) iterieren. Das Umschalten der Richtung erfolgt durch Übergabe von `prev` an die `openCursor()`-Funktion als zweites Argument:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, könnte es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist immer der Eintrag mit dem niedrigsten Schlüssel der zurückgegebene.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich die "[IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungssargumente an.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen Tab lädt. Wenn Sie `open()` mit einer höheren Version als der tatsächlichen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anfrage explizit bestätigen, bevor Sie mit den Änderungen an der Datenbank beginnen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert das:

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

Sie sollten auch auf `VersionError`-Fehler lauschen, um die Situation zu bewältigen, in der bereits geöffnete Apps möglicherweise Code auslösen, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an die Herkunft der Website bindet, die ihn erstellt (typischerweise ist dies die Domäne oder Subdomäne der Website), sodass er von keiner anderen Herkunft aus zugänglich ist.

Inhalte von Drittanbietern (z.B. {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnung vor dem Herunterfahren des Browsers

Wenn der Browser heruntergefahren wird (weil der Benutzer die Optionen "Beenden" oder "Beenden" gewählt hat), die Festplatte mit der Datenbank unerwartet entfernt wird oder die Berechtigungen für den Datenbankspeicher verloren gehen, passieren die folgenden Dinge:

1. Jede Transaktion in jeder betroffenen Datenbank (oder in allen geöffneten Datenbanken im Fall des Browser-Herunterfahrens) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jede Transaktion aufgerufen würde.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu lauschen, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und seit den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browser-Versionen werden die Transaktionen stillschweigend abgebrochen und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wird ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit schließen kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und bei älteren Browsern wirst du nicht einmal informiert, wenn sie nicht abgeschlossen wird. Es gibt mehrere Auswirkungen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu belassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die Sie dem Benutzer zum Bearbeiten zur Verfügung stellen. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektspeicher leeren und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, was dazu führt, dass Sie eine leere Datenbank haben. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in einer einzelnen Transaktion kombinieren.

Zweitens sollten Sie keine Datenbanktransaktionen an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle im Unload-Ereignishandler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um einige Informationen über Browsersitzungen hinweg aufrechtzuerhalten, besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, solange der Benutzer mit dem Browser interagiert, und sie dann in die Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies funktioniert jedoch nicht. Die Datenbanktransaktionen werden im Unload-Ereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keinen Weg, um zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Benachrichtigung über das Herunterfahren könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn Transaktionen zum Zeitpunkt des Entladens noch nicht abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies passiert ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel, das die IndexedDB-API verwendet. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weitere Lektüre, um mehr Informationen zu finden, wenn gewünscht.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://w3c.github.io/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Datenbindung von UI-Elementen mit IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, der eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bereitstellt, das IndexedDB im Hintergrund verwendet, jedoch auf Web SQL (veraltet) und dann lokalem Speicher zurückgreift in Browsern, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der viel schnellere Codeentwicklung durch schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und erweiterter IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Ein clientseitiger In-Memory-MongoDB, der von lokalem Speicher unterstützt wird, mit Serversynchronisierung über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die größtenteils die IndexedDB-API spiegelt, aber mit kleinen Benutzbarkeitsverbesserungen.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfaches-kleines (ca. 600B) auf Versprechen basierender Schlüssel-Wert-Speicher, implementiert mit IndexedDB
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Kleine (ca. 1.3kB) TypeScript-Fassade mit auf Versprechen basierender API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-seitige Datenbank, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt IndexedDB auch Funktionalität für mehrere Tabs und Beobachtbarkeit hinzu.
