---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ermöglicht es Ihnen, Daten dauerhaft im Browser eines Benutzers zu speichern. Da Sie damit Webanwendungen mit leistungsfähigen Abfragemöglichkeiten unabhängig von der Netzwerkverfügbarkeit erstellen können, können Ihre Anwendungen sowohl online als auch offline funktionieren.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zunächst den Artikel [Wesentliche Eigenschaften und grundlegende Terminologie von IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Die Referenzdokumentation zur IndexedDB-API finden Sie im Artikel [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und auf dessen Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, zu dem IndexedDB Sie anleitet, ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation auszuführen, etwa das Hinzufügen oder Abrufen von Daten.
4. Warten Sie auf den Abschluss der Operation, indem Sie auf die richtige Art von DOM-Ereignis lauschen.
5. Verwenden Sie die Ergebnisse (die sich im Anforderungsobjekt befinden).

Nachdem wir diese wichtigen Konzepte behandelt haben, können wir uns konkreteren Dingen zuwenden.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess folgendermaßen:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation – Sie müssen sie „anfordern“.

Die Open-Anfrage öffnet die Datenbank nicht sofort und startet auch nicht sofort die Transaktion. Der Aufruf der Funktion `open()` gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebniswert (Erfolg) oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB verhalten sich ebenso – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Open-Funktion ist eine Instanz von `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objektspeicher in der Datenbank und ihre Struktur. Wenn die Datenbank noch nicht vorhanden ist, wird sie durch die `open`-Operation erstellt. Anschließend wird ein `onupgradeneeded`-Ereignis ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank vorhanden ist, Sie jedoch eine erhöhte Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, sodass Sie in dessen Handler ein aktualisiertes Schema bereitstellen können. Weitere Informationen hierzu finden Sie unten unter [Erstellen oder Aktualisieren der Datenbankversion](#erstellen_oder_aktualisieren_der_datenbankversion) sowie auf der Referenzseite zu [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Versionsnummern sind Ganzzahlen. Daher werden übergebene Werte gerundet – beispielsweise werden die Werte 2.1 und 2.4 beide auf 2 gerundet.
> Der Versuch, zwischen Zahlen zu aktualisieren, die auf dieselbe Ganzzahl gerundet werden, löst kein `onupgradeneeded`-Ereignis aus.
> Beachten Sie bei großen Versionsnummern auch den Bereich der in JavaScript darstellbaren [Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding).

#### Handler erzeugen

Das Erste, was Sie bei fast allen von Ihnen erzeugten Anfragen tun sollten, ist das Hinzufügen von Erfolgs- und Fehler-Handlern:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das Ereignis [`success`](/de/docs/Web/API/IDBRequest/success_event) ausgelöst und die `onsuccess` zugewiesene Funktion aufgerufen. Wenn die Anfrage fehlschlägt, wird das Ereignis [`error`](/de/docs/Web/API/IDBRequest/error_event) ausgelöst und die `onerror` zugewiesene Funktion aufgerufen.

Die IndexedDB-API ist darauf ausgelegt, den Bedarf an Fehlerbehandlung zu minimieren. Daher werden Sie wahrscheinlich nicht viele Fehlerereignisse sehen (zumindest nicht, sobald Sie an die API gewöhnt sind). Beim Öffnen einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem besteht darin, dass der Benutzer Ihrer Webanwendung keine Berechtigung zum Erstellen einer Datenbank erteilt hat. Eines der wichtigsten Designziele von IndexedDB besteht darin, die Speicherung großer Datenmengen für die Offline-Verwendung zu ermöglichen. (Weitere Informationen darüber, wie viel Speicher Sie in den einzelnen Browsern verwenden können, finden Sie unter [Wie viele Daten können gespeichert werden? auf der Seite zu Browser-Speicherquoten und Entfernungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer beeinträchtigt. Daher fragten Browser den Benutzer früher beim ersten Versuch einer bestimmten Webanwendung, eine IndexedDB für die Speicherung zu öffnen. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem besteht IndexedDB-Speicher in den Datenschutzmodi von Browsern nur im Arbeitsspeicher, bis die Inkognito-Sitzung geschlossen wird.

Nehmen wir nun an, dass der Benutzer Ihrer Anfrage zum Erstellen einer Datenbank zugestimmt hat und Sie ein Erfolgsereignis zum Auslösen des Erfolgs-Callbacks erhalten haben. Was kommt als Nächstes? Die Anfrage wurde hier mit einem Aufruf von `indexedDB.open()` erzeugt, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten diese auf jeden Fall für später speichern. Ihr Code könnte etwa so aussehen:

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

#### Behandlung von Fehlern

Wie oben erwähnt, steigen Fehlerereignisse auf. Fehlerereignisse richten sich an die Anfrage, die den Fehler erzeugt hat; anschließend steigt das Ereignis zur Transaktion und schließlich zum Datenbankobjekt auf. Wenn Sie vermeiden möchten, jeder Anfrage Fehler-Handler hinzuzufügen, können Sie stattdessen einen einzelnen Fehler-Handler für das Datenbankobjekt hinzufügen:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der möglichen häufigen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er weist darauf hin, dass die auf dem Datenträger gespeicherte Version der Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer durch den Fehler-Handler behandelt werden muss.

### Erstellen oder Aktualisieren der Datenbankversion

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das Ereignis `onupgradeneeded` ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt an jeden auf `request.result` eingerichteten `onversionchange`-Ereignis-Handler übergeben (d.h. im Beispiel `db`). Im Handler für das Ereignis `upgradeneeded` sollten Sie die für diese Datenbankversion benötigten Objektspeicher erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall enthält die Datenbank bereits die Objektspeicher aus der vorherigen Datenbankversion, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z. B. um `keyPath` zu ändern), müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dadurch die Informationen im Objektspeicher gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Aktualisieren der Datenbank auslesen und an anderer Stelle speichern.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder einen Objektspeicher mit einem noch nicht vorhandenen Namen zu löschen), löst einen Fehler aus.

Wenn das Ereignis `onupgradeneeded` erfolgreich abgeschlossen wird, wird anschließend der `onsuccess`-Handler der Anfrage zum Öffnen der Datenbank ausgelöst.

### Strukturieren der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher statt Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Wenn ein Wert in einem Objektspeicher gespeichert wird, ist er einem Schlüssel zugeordnet. Je nachdem, ob der Objektspeicher einen [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet, gibt es verschiedene Möglichkeiten, einen Schlüssel bereitzustellen.

Die folgende Tabelle zeigt die unterschiedlichen Arten, wie Schlüssel bereitgestellt werden:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Schlüsselpfad (<code>keyPath</code>)</th>
      <th scope="col">Schlüsselgenerator (<code>autoIncrement</code>)</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nein</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann jede Art von Wert speichern, sogar primitive
        Werte wie Zahlen und Zeichenketten. Sie müssen immer ein separates
        Schlüsselargument angeben, wenn Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Die Objekte
        müssen eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jede Art von Wert speichern. Der Schlüssel wird
        automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument
        angeben, wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Üblicherweise
        wird ein Schlüssel generiert und der Wert des generierten Schlüssels in einer
        Eigenschaft mit demselben Namen wie der Schlüsselpfad im Objekt gespeichert.
        Falls eine solche Eigenschaft jedoch bereits vorhanden ist, wird deren Wert
        als Schlüssel verwendet, statt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können außerdem Indizes für jeden Objektspeicher erstellen, sofern der Objektspeicher Objekte und keine primitiven Werte speichert. Ein Index ermöglicht Ihnen, in einem Objektspeicher gespeicherte Werte über den Wert einer Eigenschaft des gespeicherten Objekts nachzuschlagen, statt über den Schlüssel des Objekts.

Darüber hinaus können Indizes einfache Einschränkungen für gespeicherte Daten durchsetzen. Indem Sie beim Erstellen des Index das unique-Flag setzen, stellt der Index sicher, dass nicht zwei Objekte gespeichert werden, die beide denselben Wert für den Schlüsselpfad des Index aufweisen. Wenn Sie beispielsweise einen Objektspeicher haben, der eine Menge von Personen enthält, und sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie dies mit einem Index mit gesetztem unique-Flag erzwingen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zunächst definieren wir einige Kundendaten für unser Beispiel:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden statt des Alters das Geburtsdatum speichern. Der Einfachheit halber ignorieren wir jedoch diese ungünstigen Entscheidungen und fahren fort.

Sehen wir uns nun an, wie eine IndexedDB zum Speichern unserer Daten erstellt wird:

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

Wie zuvor angegeben, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen sowie Indizes erstellen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode erwartet einen Namen für den Speicher und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da Sie damit wichtige optionale Eigenschaften definieren und den Typ des zu erstellenden Objektspeichers genauer festlegen können. In unserem Fall haben wir einen Objektspeicher namens „customers“ angefordert und einen `keyPath` definiert, also die Eigenschaft, die ein einzelnes Objekt im Speicher eindeutig macht. Diese Eigenschaft ist in diesem Beispiel „ssn“, da eine Sozialversicherungsnummer garantiert eindeutig ist. „ssn“ muss in jedem Objekt vorhanden sein, das in `objectStore` gespeichert wird.

Wir haben außerdem einen Index namens „name“ angefordert, der die Eigenschaft `name` der gespeicherten Objekte betrachtet. Wie `createObjectStore()` akzeptiert auch `createIndex()` ein optionales `options`-Objekt, das den Typ des zu erstellenden Index genauer festlegt. Das Hinzufügen von Objekten ohne Eigenschaft `name` ist weiterhin erfolgreich, aber die Objekte erscheinen nicht im Index „name“.

Wir können die gespeicherten Kundenobjekte nun direkt über ihre `ssn` aus dem Objektspeicher abrufen oder über ihren Namen mithilfe des Index. Wie dies geschieht, erfahren Sie im Abschnitt [Verwenden eines Index](#verwenden_eines_index).

### Verwenden eines Schlüsselgenerators

Das Setzen eines `autoIncrement`-Flags beim Erstellen des Objektspeichers aktiviert den Schlüsselgenerator für diesen Objektspeicher. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert zum Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel basierend auf dem vorherigen Schlüssel um 1 erhöht. Die aktuelle Nummer eines Schlüsselgenerators verringert sich nie, außer wenn Datenbankoperationen zurückgesetzt werden, beispielsweise wenn die Datenbanktransaktion abgebrochen wird. Daher wirkt sich das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objektspeicher niemals auf den Schlüsselgenerator des Objektspeichers aus.

Wir können einen weiteren Objektspeicher mit Schlüsselgenerator wie folgt erstellen:

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

Weitere Details zum Schlüsselgenerator finden Sie unter [Key generators](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie etwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen stammen vom Datenbankobjekt, und Sie müssen angeben, welche Objektspeicher die Transaktion umfassen soll. Sobald Sie sich innerhalb der Transaktion befinden, können Sie auf die Objektspeicher mit Ihren Daten zugreifen und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur daraus lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das „Schema“ oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektspeichern oder Indizes umfasst –, muss die Transaktion im Modus `versionchange` sein. Diese Transaktion wird durch Aufrufen der Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer angegebenen `version` geöffnet.

Zum Lesen der Datensätze eines bestehenden Objektspeichers kann die Transaktion entweder im Modus `readonly` oder `readwrite` sein. Um Änderungen an einem bestehenden Objektspeicher vorzunehmen, muss die Transaktion im Modus `readwrite` sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als Array der Objektspeicher, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig werden Transaktionen im Modus `readonly` geöffnet, wenn kein Modus angegeben ist.

> [!NOTE]
> Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Dauerhaftigkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Zuvor wurde in einer `readwrite`-Transaktion ein Ereignis [`complete`](/de/docs/Web/API/IDBTransaction/complete_event) erst ausgelöst, wenn garantiert war, dass alle Daten auf den Datenträger geschrieben wurden. In Firefox 40+ wird das Ereignis `complete` ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf den Datenträger geschrieben wurden. Das Ereignis `complete` kann daher schneller als zuvor bereitgestellt werden. Es besteht jedoch eine geringe Wahrscheinlichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Stromversorgung des Systems ausfällt, bevor die Daten auf den Datenträger geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Nutzer darüber keine weiteren Gedanken machen. Wenn Sie aus irgendeinem Grund Dauerhaftigkeit sicherstellen müssen (z. B. wenn Sie kritische Daten speichern, die später nicht neu berechnet werden können), können Sie erzwingen, dass eine Transaktion auf den Datenträger geschrieben wird, bevor das Ereignis `complete` bereitgestellt wird. Erstellen Sie dazu eine Transaktion mit dem experimentellen (nicht standardmäßigen) Modus `readwriteflush` (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie in der Transaktion den richtigen Geltungsbereich und Modus verwenden. Hier sind einige Tipps:

- Geben Sie beim Definieren des Geltungsbereichs nur die benötigten Objektspeicher an. Auf diese Weise können Sie mehrere Transaktionen mit sich nicht überschneidenden Geltungsbereichen gleichzeitig ausführen.
- Geben Sie einen Transaktionsmodus `readwrite` nur an, wenn dies erforderlich ist. Sie können mehrere `readonly`-Transaktionen mit sich überschneidenden Geltungsbereichen gleichzeitig ausführen, aber nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Weitere Informationen finden Sie in der Definition von [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [Wesentliche Eigenschaften und grundlegende Terminologie von IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten zur Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich Daten hineinschreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die Funktion `transaction()` akzeptiert zwei Argumente (wobei eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfassen soll. Sie können ein leeres Array übergeben, wenn die Transaktion alle Objektspeicher umfassen soll, sollten dies aber nicht tun, da die Spezifikation besagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie für das zweite Argument nichts angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier Daten schreiben möchten, müssen Sie das Flag `"readwrite"` übergeben.

Nun, da Sie eine Transaktion haben, müssen Sie ihre Lebensdauer verstehen. Transaktionen sind sehr eng an die Ereignisschleife gebunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage über sie zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und haben – sofern die Anfrage erfolgreich war – während dieses Callbacks eine weitere Gelegenheit, die Transaktion zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange Anfragen ausstehen, bleibt die Transaktion aktiv. Transaktionslebensdauern sind eigentlich sehr einfach, aber es kann etwas Zeit brauchen, sich daran zu gewöhnen. Weitere Beispiele helfen ebenfalls. Wenn Sie anfangen, Fehlercodes `TRANSACTION_INACTIVE_ERR` zu sehen, haben Sie etwas falsch gemacht.

Transaktionen können DOM-Ereignisse dreier verschiedener Typen empfangen: `error`, `abort` und `complete`. Wir haben bereits darüber gesprochen, wie `error`-Ereignisse aufsteigen. Eine Transaktion empfängt daher Fehlerereignisse von allen Anfragen, die über sie erzeugt werden. Ein subtilerer Punkt ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion abzubrechen, in der er aufgetreten ist. Sofern Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` für das Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie dazu, über Fehler nachzudenken und sie zu behandeln. Sie können jedoch immer einen allgemeinen Fehler-Handler zur Datenbank hinzufügen, wenn eine detaillierte Fehlerbehandlung zu aufwendig ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` für die Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis für die Transaktion ausgelöst. Andernfalls erhalten Sie nach Abschluss aller ausstehenden Anfragen ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Nachverfolgen der Transaktion statt einzelner Anfragen erheblich zu Ihrer Übersicht beitragen.

Nachdem Sie nun eine Transaktion haben, müssen Sie den Objektspeicher daraus abrufen. Transaktionen ermöglichen Ihnen nur den Zugriff auf einen Objektspeicher, den Sie beim Erstellen der Transaktion angegeben haben. Anschließend können Sie alle benötigten Daten hinzufügen.

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

Das `result` einer durch den Aufruf von `add()` erzeugten Anfrage ist der Schlüssel des hinzugefügten Werts. In diesem Fall sollte er also der Eigenschaft `ssn` des hinzugefügten Objekts entsprechen, da der Objektspeicher die Eigenschaft `ssn` für den Schlüsselpfad verwendet. Beachten Sie, dass die Funktion `add()` verlangt, dass sich noch kein Objekt mit demselben Schlüssel in der Datenbank befindet. Wenn Sie versuchen, einen bestehenden Eintrag zu ändern, oder es Ihnen egal ist, ob bereits einer vorhanden ist, können Sie die Funktion `put()` verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Nun, da die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Arten abrufen. Zunächst das einfache `get()`. Sie müssen den Schlüssel zum Abrufen des Werts angeben:

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

Das ist viel Code für einen „einfachen“ Abruf. So können Sie ihn etwas verkürzen, vorausgesetzt, dass Sie Fehler auf Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie vermeiden, eine Liste der in Ihrer Transaktion benötigten Objektspeicher zu übergeben, und stattdessen einfach den Namen als Zeichenkette übergeben. Außerdem lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Wenn Sie `transaction()` ohne Angabe eines Modus aufrufen, erhalten Sie eine `"readonly"`-Transaktion. Eine weitere Feinheit ist, dass Sie das Anfrageobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie über das Ereignis auf die Eigenschaft `result` zugreifen.

### Aktualisieren eines Eintrags in der Datenbank

Nun haben wir einige Daten abgerufen; sie zu aktualisieren und wieder in IndexedDB einzufügen, ist recht einfach. Aktualisieren wir das vorherige Beispiel etwas:

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

Hier erstellen wir also einen `objectStore` und fordern daraus einen Kundendatensatz an, der durch seinen ssn-Wert (`444-44-4444`) identifiziert wird. Anschließend speichern wir das Ergebnis dieser Anfrage in einer Variablen (`data`), aktualisieren die Eigenschaft `age` dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in `objectStore` zu speichern und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben und nicht nur daraus lesen möchten.

### Verwenden eines Cursors

Die Verwendung von `get()` setzt voraus, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektspeicher durchlaufen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die Funktion `openCursor()` akzeptiert mehrere Argumente. Erstens können Sie den Bereich der abgerufenen Elemente mit einem Schlüsselbereichsobjekt einschränken, auf das wir gleich eingehen. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgs-Callback für Cursor ist etwas speziell. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, daher ist es `event.target.result`). Der tatsächliche Schlüssel und Wert befinden sich dann in den Eigenschaften `key` und `value` des Cursorobjekts. Wenn Sie fortfahren möchten, müssen Sie `continue()` für den Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn keine Einträge Ihrer `openCursor()`-Anfrage entsprachen), erhalten Sie weiterhin einen Erfolgs-Callback, aber die Eigenschaft `result` ist `undefined`.

Ein häufiges Muster bei Cursorn besteht darin, alle Objekte eines Objektspeichers abzurufen und sie zu einem Array hinzuzufügen:

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
> Mit dem Betrachten der Eigenschaft `value` eines Cursors sind Leistungskosten verbunden, da das Objekt verzögert erstellt wird. Wenn Sie beispielsweise `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, jeden Schlüssel zu betrachten, ist die Verwendung eines Cursors wesentlich effizienter als `getAll()`. Wenn Sie jedoch ein Array aller Objekte in einem Objektspeicher erhalten möchten, verwenden Sie `getAll()`.

### Verwenden eines Index

Das Speichern von Kundendaten mit der Sozialversicherungsnummer als Schlüssel ist logisch, da die Sozialversicherungsnummer eine Person eindeutig identifiziert. (Ob dies aus Datenschutzsicht eine gute Idee ist, ist eine andere Frage und liegt außerhalb des Geltungsbereichs dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen suchen müssen, müssten Sie jede Sozialversicherungsnummer in der Datenbank durchlaufen, bis Sie die richtige finden. Eine Suche auf diese Weise wäre sehr langsam; stattdessen können Sie einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der Index „name“ ist nicht eindeutig, daher könnte es mehr als einen Eintrag mit `name` gleich `"Donna"` geben. In diesem Fall erhalten Sie immer den Eintrag mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn für Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselcursor ordnet die Indexeigenschaft dem Schlüssel zu, der zum Speichern des Objekts im Objektspeicher verwendet wird. Die Unterschiede werden hier dargestellt:

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

Der Index kann auch für mehrere Eigenschaften erstellt werden, sodass Sie Datensätze mit einer Kombination von Werten nachschlagen können, beispielsweise um eine Person anhand ihres Namens und ihrer E-Mail-Adresse zu finden. Um einen zusammengesetzten Index zu erstellen, übergeben Sie beim Aufruf von `createIndex` ein Array von Eigenschaftsnamen als Schlüsselpfad. Anschließend können Sie den Index abfragen, indem Sie ein Array von Werten in derselben Reihenfolge übergeben.

Stellen Sie zunächst sicher, dass Sie den Index in `request.onupgradeneeded` erstellt haben:

```js
const index = objectStore.createIndex("name_email", ["name", "email"]);
```

Später können Sie den Index dann folgendermaßen abfragen:

```js
const index = objectStore.index("name_email");

index.get(["Donna", "donna@home.org"]).onsuccess = (event) => {
  console.log(event.target.result);
  // {ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org'}
};
```

### Bereich und Richtung von Cursorn angeben

Wenn Sie den Bereich der Werte einschränken möchten, die Sie in einem Cursor sehen, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzelnen Schlüssel zulässt, einen mit einer unteren oder oberen Grenze oder einen mit einer unteren und oberen Grenze. Die Grenze kann „geschlossen“ sein (d.h. der Schlüsselbereich schließt die angegebenen Werte ein) oder „offen“ (d.h. der Schlüsselbereich schließt die angegebenen Werte nicht ein). So funktioniert es:

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

Manchmal möchten Sie möglicherweise absteigend statt aufsteigend iterieren (der Standardrichtung für alle Cursor). Das Ändern der Richtung erfolgt durch Übergabe von `prev` als zweitem Argument an die Funktion `openCursor()`:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der Index „name“ nicht eindeutig ist, könnte es mehrere Einträge mit demselben `name` geben. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie Duplikate während der Cursoriteration über Indizes herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Gültige Richtungsargumente finden Sie unter „[IDBCursor Constants](/de/docs/Web/API/IDBCursor#constants)“.

## Versionsänderungen, während eine Webanwendung in einem anderen Tab geöffnet ist

Wenn sich Ihre Webanwendung so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was geschieht, wenn der Benutzer die alte Version Ihrer Anwendung in einem Tab geöffnet hat und dann die neue Version Ihrer Anwendung in einem anderen lädt. Wenn Sie `open()` mit einer größeren Version als der aktuellen Datenbankversion aufrufen, müssen alle anderen geöffneten Datenbanken die Anfrage ausdrücklich bestätigen, bevor Sie Änderungen an der Datenbank vornehmen können (ein Ereignis `onblocked` wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler lauschen, um die Situation zu behandeln, in der bereits geöffnete Anwendungen Code ausführen, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip. Das bedeutet, dass der Speicher an den Ursprung der Website gebunden ist, die ihn erstellt (typischerweise die Domain oder Subdomain der Website), und daher nicht von einem anderen Ursprung aus zugänglich ist.

Fensterinhalte von Drittanbietern (z. B. Inhalte von {{htmlelement("iframe")}}) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [Drittanbieter-Cookies niemals akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnung zum Herunterfahren des Browsers

Wenn der Browser heruntergefahren wird (weil der Benutzer die Option zum Beenden gewählt hat), der Datenträger mit der Datenbank unerwartet entfernt wird oder die Berechtigungen für den Datenbankspeicher verloren gehen, geschieht Folgendes:

1. Jede Transaktion in jeder betroffenen Datenbank (oder in allen geöffneten Datenbanken im Fall des Herunterfahrens des Browsers) wird mit einem `AbortError` abgebrochen. Die Wirkung ist dieselbe, als würde [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) für jede Transaktion aufgerufen.
2. Sobald alle Transaktionen abgeschlossen wurden, wird die Datenbankverbindung geschlossen.
3. Schließlich empfängt das die Datenbankverbindung repräsentierende [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt ein Ereignis [`close`](/de/docs/Web/API/IDBDatabase/close_event). Sie können den Ereignis-Handler [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) verwenden, um auf diese Ereignisse zu lauschen und somit zu wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und erst ab den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browser-Versionen werden die Transaktionen stillschweigend abgebrochen und es wird kein Ereignis [`close`](/de/docs/Web/API/IDBDatabase/close_event) ausgelöst. Daher gibt es keine Möglichkeit, einen unerwarteten Datenbankverschluss zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird. In älteren Browsern werden Sie nicht einmal darüber informiert, wenn sie nicht abgeschlossen wird. Dieses Verhalten hat mehrere Auswirkungen.

Erstens sollten Sie darauf achten, Ihre Datenbank am Ende jeder Transaktion immer in einem konsistenten Zustand zu hinterlassen. Nehmen wir beispielsweise an, Sie verwenden IndexedDB zum Speichern einer Liste von Elementen, die der Benutzer bearbeiten darf. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektspeicher leeren und anschließend die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird und Sie mit einer leeren Datenbank zurückbleiben. Um dies zu vermeiden, sollten Sie das Leeren und Schreiben zu einer einzelnen Transaktion zusammenfassen.

Zweitens sollten Sie Datenbanktransaktionen niemals an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle im Unload-Ereignis-Handler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um Informationen über Browser-Sitzungen hinweg beizubehalten, besteht darin, sie beim Öffnen des Browsers (oder einer bestimmten Seite) aus der Datenbank zu lesen, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie beim Schließen des Browsers (oder der Seite) in der Datenbank zu speichern. Dies funktioniert jedoch nicht. Die Datenbanktransaktionen werden im Unload-Ereignis-Handler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit zu garantieren, dass IndexedDB-Transaktionen selbst bei einem normalen Herunterfahren des Browsers abgeschlossen werden. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese Benachrichtigung beim normalen Herunterfahren könnten Sie Ihre Transaktionen nachverfolgen und ein Ereignis `beforeunload` hinzufügen, um den Benutzer zu warnen, falls zum Zeitpunkt des Entladens noch Transaktionen nicht abgeschlossen sind.

Mit den Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie zumindest feststellen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel zur Verwendung der IndexedDB-API. Das Beispiel verwendet IndexedDB zum Speichern und Abrufen von Publikationen.

- [Beispiel ausprobieren](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Informationen, falls Sie mehr erfahren möchten.

### Referenz

- [IndexedDB-API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- IndexedDB-[Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — The Store in Your Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache name:value-Syntax für die clientseitige Datenspeicherung bereitstellt, im Hintergrund IndexedDB verwendet, aber in Browsern ohne IndexedDB-Unterstützung auf Web SQL (veraltet) und anschließend localStorage zurückfällt.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der durch eine ansprechende, einfache Syntax eine deutlich schnellere Codeentwicklung ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage unterstützt wird und über http mit dem Server synchronisiert. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser, die IndexedDB verwendet.
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die die IndexedDB-API weitgehend widerspiegelt, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein extrem einfacher kleiner (~600B), auf Promises basierender Schlüssel-Wert-Speicher, implementiert mit IndexedDB.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Kleine (~1.3kB) TypeScript-Fassade mit Promise-basierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Datenbank auf Client-Seite, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt IndexedDB außerdem tabübergreifende Funktionalität und Beobachtbarkeit hinzu.
