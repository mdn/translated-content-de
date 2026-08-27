---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Falls Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API, siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektstore in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation auszuführen, wie z.B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie auf den Abschluss der Operation, indem Sie das richtige DOM-Ereignis abhören.
5. Machen Sie etwas mit den Ergebnissen (die sich im Anfrageobjekt befinden).

Mit diesen großen Konzepten unter unserem Gürtel können wir uns konkreterem Zeug zuwenden.

## Erstellen und Strukturieren des Stores

### Öffnen einer Datenbank

Wir starten den gesamten Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation – Sie müssen es "anfordern".

Die Öffnungsanforderung öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder einem Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objektstores in der Datenbank und deren Struktur. Falls die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Falls die Datenbank existiert, Sie aber eine aktualisierte Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema in dessen Handler bereitzustellen. Mehr dazu weiter unten in [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Versionsnummern sind Ganzzahlen. Daher unterliegen die übergebenen Werte Rundungen – zum Beispiel werden Werte von 2.1 und 2.4 beide auf 2 gerundet.
> Der Versuch, zwischen Zahlen zu aktualisieren, die auf dieselbe ganze Zahl gerundet werden, löst kein `onupgradeneeded`-Ereignis aus.
> Wenn Sie mit großen Versionsnummern arbeiten, beachten Sie auch den [Bereich der Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), die in JavaScript darstellbar sind.

#### Generieren von Handlern

Das Erste, was Sie mit fast allen Anfragen, die Sie generieren, tun sollten, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis ausgelöst, und die der `onsuccess`-Funktion zugewiesene Funktion wird aufgerufen. Wenn die Anfrage fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis ausgelöst, und die der `onerror`-Funktion zugewiesene Funktion wird aufgerufen.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie sich an die API gewöhnt haben!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Web-App keine Erlaubnis erteilt hat, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB ist es, große Datenmengen für die Offline-Nutzung zu speichern. (Um mehr über den verfügbaren Speicherplatz für jeden Browser zu erfahren, siehe [Wie viel Daten können gespeichert werden? auf der Seite zu Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher forderten Browser früher den Benutzer auf, das erste Mal, wenn eine bestimmte Web-App versucht, einen IndexedDB-Speicher zu öffnen. Der Benutzer konnte sich entscheiden, den Zugriff zu erlauben oder zu verweigern. Auch der IndexedDB-Speicher im Datenschutzmodus der Browser bleibt nur im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Nehmen wir nun an, der Benutzer hat Ihrem Antrag auf Erstellung einer Datenbank zugestimmt und Sie haben ein Erfolgsergebnis erhalten, um den Erfolgscallback auszulösen; Was kommt als Nächstes? Die Anfrage, die hier durch einen Aufruf von `indexedDB.open()` generiert wurde, bedeutet, dass `request.result` eine Instanz von `IDBDatabase` ist und Sie sollten diese definitiv für später speichern. Ihr Code könnte ungefähr so aussehen:

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

Wie oben erwähnt, blubbern Fehlerereignisse. Fehlerereignisse richten sich an die Anfrage, die den Fehler erzeugt hat, dann blubbert das Ereignis zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie Fehlerhandler für jede Anfrage vermeiden möchten, können Sie stattdessen einen einzigen Fehlerhandler auf dem Datenbankobjekt hinzufügen, so:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiger möglicher Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er zeigt an, dass die auf der Festplatte gespeicherte Version der Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor, beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignishandler übergeben, der auf `request.result` eingerichtet ist (d.h. `db` im Beispiel). Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektstores erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektstores aus der vorherigen Version der Datenbank, sodass Sie diese Objektstores nicht erneut erstellen müssen. Sie müssen nur neue Objektstores erstellen oder Objektstores aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen vorhandenen Objektstore ändern müssen (z. B. um den `keyPath` zu ändern), müssen Sie den alten Objektstore löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die Informationen im Objektstore löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Upgrade der Datenbank auslesen und woanders speichern.)

Der Versuch, einen Objektstore mit einem bereits existierenden Namen zu erstellen (oder einen Objektstore mit einem nicht existierenden Namen zu löschen), führt zu einem Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der Open-Datenbankanforderung ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektstores anstelle von Tabellen und eine einzelne Datenbank kann eine beliebige Anzahl von Objektstores enthalten. Immer wenn ein Wert in einem Objektstore gespeichert wird, ist er mit einem Schlüssel verbunden. Je nachdem, ob der Objektstore einen [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet, gibt es verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann.

Die folgende Tabelle zeigt die verschiedenen Möglichkeiten, wie die Schlüssel bereitgestellt werden:

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
        Dieser Objektstore kann beliebige Werte speichern, sogar primitive Werte wie Zahlen und Zeichenfolgen. Sie müssen jedes Mal ein separates Schlüsselargument bereitstellen, wenn Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektstore kann nur JavaScript-Objekte speichern. Die Objekte müssen eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektstore kann beliebige Werte speichern. Der Schlüssel wird automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektstore kann nur JavaScript-Objekte speichern. In der Regel wird ein Schlüssel generiert und der Wert des generierten Schlüssels wird in dem Objekt in einer Eigenschaft mit demselben Namen wie der Schlüsselpfad gespeichert. Wenn jedoch eine solche Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft als Schlüssel verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objektstore erstellen, vorausgesetzt, der Objektstore enthält Objekte und keine primitiven Werte. Ein Index ermöglicht es Ihnen, die in einem Objektstore gespeicherten Werte anhand des Werts einer Eigenschaft des gespeicherten Objekts nachzuschlagen, anstatt anhand des Schlüssels des Objekts.

Zusätzlich haben Indizes die Fähigkeit, einfache Einschränkungen auf die gespeicherten Daten durchzusetzen. Indem Sie das eindeutige Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie zum Beispiel einen Objektstore haben, der eine Menge von Personen enthält, und Sie sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit dem gesetzten eindeutigen Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden möchten:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kundenliste verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen zum Zwecke der Bequemlichkeit ignorieren und fortfahren.

Schauen wir uns nun an, wie man eine IndexedDB erstellt, um unsere Daten zu speichern:

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

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektstores erstellen und löschen sowie Indizes aufbauen und entfernen.

Objektstores werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Stores und ein Parameterobjekt an. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objektstores, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir um einen Objektstore namens "customers" gebeten und einen `keyPath` definiert, der die Eigenschaft ist, die ein einzelnes Objekt im Store einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da Sozialversicherungsnummern garantiert einzigartig sind. "ssn" muss auf jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch um einen Index namens "name" gebeten, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, das den Typ des Indexes verfeinert, den Sie erstellen möchten. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, gelingt immer noch, aber die Objekte werden nicht im "name"-Index erscheinen.

Wir können nun die gespeicherten Kundenobjekte entweder direkt mit ihrer `ssn` aus dem Objektstore abrufen oder ihren Namen verwenden, indem wir den Index verwenden. Um zu erfahren, wie das gemacht wird, lesen Sie den Abschnitt über [die Verwendung eines Indexes](#verwenden_eines_indexes).

### Verwendung eines Schlüsselgenerators

Das Einrichten eines `autoIncrement`-Flags beim Erstellen des Objektstores würde den Schlüsselgenerator für diesen Objektstore aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert zum Objektstore hinzufügen. Die aktuelle Zahl eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektstore für diesen Schlüsselgenerator zuerst erstellt wird. Im Grunde wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Zahl eines Schlüsselgenerators wird nie verringert, abgesehen von dem Ergebnis, dass Datenbankoperationen zurückgesetzt werden, zum Beispiel wird die Datenbanktransaktion abgebrochen. Daher beeinträchtigt das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objektstore niemals den Schlüsselgenerator des Objektstores.

Wir können einen anderen Objektstore mit dem Schlüsselgenerator wie folgt erstellen:

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

Für weitere Details über den Schlüsselgenerator, siehe [Schlüsselgeneratoren](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Daten hinzufügen, abrufen und entfernen

Bevor Sie irgendetwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen kommen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objektstores die Transaktion umfassen soll. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektstores zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Als nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder ob Sie nur daraus lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um die "Schema" oder Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektstores oder Indizes beinhaltet – muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufruf der Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objektstores zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objektstore zu vornehmen, muss die Transaktion im `readwrite`-Modus sein. Solche Transaktionen öffnen Sie mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als ein Array von Objektstores, die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, die Sie verwenden können, um auf Ihren Objektstore zuzugreifen. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor die Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor geliefert werden, es besteht jedoch eine geringe Möglichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Nutzer nicht weiter darum kümmern. Wenn Sie aus irgendeinem Grund (z.B. speichern Sie kritische Daten, die später nicht mehr berechnet werden können) Haltbarkeit sicherstellen müssen, können Sie eine Transaktion vor dem Ausliefern des `complete`-Ereignisses auf die Festplatte zwingen, indem Sie eine Transaktion mit dem experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Geltungsbereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Geltungsbereich definieren, geben Sie nur die Objektstores an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit sich nicht überschneidenden Bereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly`-Transaktionen mit sich überschneidenden Geltungsbereichen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objektstore haben. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten in die Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich etwas hineinschreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die Funktion `transaction()` nimmt zwei Argumente an (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektstores, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektstores umfasst, aber tun Sie das nicht, da die Spezifikation besagt, dass ein leeres Array einen InvalidAccessError generieren sollte. Wenn Sie für das zweite Argument nichts angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, da Sie eine Transaktion haben, müssen Sie die Lebensdauer verstehen. Transaktionen sind eng an die Ereignisschleife gekoppelt. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt die Anfrage war erfolgreich, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Callbacks zu erweitern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu erweitern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Transaktionslebenszeiten sind wirklich sehr einfach, aber es kann ein wenig Zeit in Anspruch nehmen, sich daran zu gewöhnen. Ein paar weitere Beispiele helfen auch. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, haben Sie etwas durcheinandergebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben besprochen, wie `error`-Ereignisse blubbern, sodass eine Transaktion `error`-Ereignisse von Anfragen empfängt, die von ihr generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er auftritt, abzubrechen. Es sei denn, Sie behandeln den Fehler, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Diese Architektur zwingt Sie, über Fehler nachzudenken und sie zu behandeln. Sie können jedoch immer einen allgemeinen Fehlerhandler zur Datenbank hinzufügen, wenn die feinkörnige Fehlerbehandlung zu umständlich ist. Wenn Sie kein Fehlerereignis behandeln oder `abort()` auf die Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich Ihre Sanity-Anforderungen erleichtern.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objektstore davon erhalten. Transaktionen lassen Sie nur einen Objektstore haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die durch einen Aufruf von `add()` ausgelöst wird, ist der Schlüssel des hinzugefügten Werts. In diesem Fall sollte es dem `ssn`-Eigentum des hinzugefügten Objekts entsprechen, da der Objektstore das `ssn`-Eigentum für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt mit demselben Schlüssel bereits in der Datenbank ist. Wenn Sie einen bestehenden Eintrag ändern möchten oder es Ihnen egal ist, ob bereits einer existiert, können Sie die Funktion `put()` verwenden, wie im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) unten gezeigt wird.

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

Da die Datenbank nun einige Informationen enthält, können Sie sie auf verschiedene Arten abrufen. Zuerst die einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, wie folgt:

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

Das ist viel Code für einen "einfachen" Abruf. Hier ist, wie Sie es etwas abkürzen können, vorausgesetzt, Sie behandeln Fehler auf Datenbankebene:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektstore gibt, können Sie vermeiden, eine Liste von Objektstores, die Sie in Ihrer Transaktion benötigen, zu übergeben, und einfach den Namen als Zeichenfolge übergeben. Außerdem lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Der Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anfrageobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, da wir einige Daten abgerufen haben, ist das Aktualisieren und Zurückschreiben in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir einen `objectStore` und fordern einen Kundenrekord aus ihm an, identifiziert durch seinen ssn-Wert (`444-44-4444`). Wir speichern dann das Ergebnis dieser Anfrage in einer Variablen (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts, erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundenrekord zurück in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion spezifizieren, weil wir in die Datenbank schreiben wollen, nicht nur aus ihr lesen.

### Verwenden eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektstore durchgehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die Funktion `openCursor()` nimmt mehrere Argumente an. Erstens können Sie den Bereich der abgerufenen Elemente mit einem Schlüsselbereichsobjekt begrenzen, auf das wir gleich noch eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursors ist etwas Besonderes. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, daher ist es `event.target.result`). Dann können der tatsächliche Schlüssel und der Wert auf den `key`- und `value`-Eigenschaften des Cursor-Objekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gab, die Ihrer `openCursor()`-Anfrage entsprachen), erhalten Sie trotzdem einen Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursors ist, alle Objekte in einem Objektstore abzurufen und sie zu einem Array hinzuzufügen, wie folgt:

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
> Alternativ können Sie `getAll()` für diesen Fall verwenden (und `getAllKeys()`). Der folgende Code macht genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungseinbruch, der mit dem Blick auf die `value`-Eigenschaft eines Cursors verbunden ist, da das Objekt verzögert erstellt wird. Wenn Sie `getAll()` verwenden, muss der Browser zum Beispiel alle Objekte auf einmal erstellen. Wenn Sie nur an einem Blick auf jeden der Schlüssel interessiert sind, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objektstore zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwenden eines Indexes

Das Speichern von Kundendaten mit der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies für den Datenschutz eine gute Idee ist, ist eine andere Frage und nicht Gegenstand dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige gefunden haben. Eine Suche auf diese Weise wäre sehr langsam, also können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, daher könnte es mehr als einen Eintrag mit dem `name`-Wert `"Donna"` geben. In diesem Fall erhalten Sie immer den Eintrag mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursors auf Indizes öffnen. Ein normaler Cursor ordnet die Index-Eigenschaft dem Objekt im Objektstore zu. Ein Schlüsselcursor ordnet die Index-Eigenschaft dem Schlüssel zu, der verwendet wird, um das Objekt im Objektstore zu speichern. Die Unterschiede werden hier illustriert:

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

Der Index kann auch auf mehreren Eigenschaften erstellt werden, sodass Sie Datensätze anhand einer Kombination von Werten nachschlagen können, z.B. um eine Person sowohl nach ihrem Namen als auch nach ihrer E-Mail-Adresse zu finden. Um einen zusammengesetzten Index zu erstellen, geben Sie ein Array von Eigenschaftsnamen als Schlüsselpfad beim Aufruf von `createIndex` an. Sie können dann den Index abfragen, indem Sie ein Array von Werten in derselben Reihenfolge übergeben.

Zuerst stellen Sie sicher, dass Sie den Index in `request.onupgradeneeded` erstellt haben:

```js
const index = objectStore.createIndex("name_email", ["name", "email"]);
```

Dann können Sie später den Index wie folgt abfragen:

```js
const index = objectStore.index("name_email");

index.get(["Donna", "donna@home.org"]).onsuccess = (event) => {
  console.log(event.target.result);
  // {ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org'}
};
```

### Festlegen des Bereichs und der Richtung von Cursors

Wenn Sie den Bereich der in einem Cursor angezeigten Werte begrenzen möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzelnen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" sein (d.h. der Schlüsselbereich umfasst die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich umfasst die angegebenen Werte nicht). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstelle der aufsteigenden Reihenfolge iterieren (die Standardrichtung für alle Cursors). Die Umkehrung der Richtung erfolgt, indem Sie `prev` als zweites Argument an die Funktion `openCursor()` übergeben:

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

Da der "name"-Index nicht einzigartig ist, könnte es mehrere Einträge mit demselben `name` geben. Beachten Sie, dass eine solche Situation bei Objektstores nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist immer der Eintrag mit dem niedrigsten Schlüssel der zurückgegebene.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich "[IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente an.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn Ihre Web-App sich so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen Tab lädt. Wenn Sie `open()` mit einer größeren Version als die der aktuellen Datenbank aufrufen, müssen alle anderen geöffneten Datenbanken die Anfrage ausdrücklich bestätigen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert das:

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

Sie sollten auch auf `VersionError`-Fehler hören, um die Situation zu behandeln, in der bereits geöffnete Apps möglicherweise Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das gleiche Ursprungsprinzip, was bedeutet, dass es den Speicher mit dem Ursprung der Website, die ihn erstellt hat, (in der Regel die Site-Domain oder Subdomain) verknüpft, sodass er von keinem anderen Ursprung aus zugegriffen werden kann.

Inhalte von Drittanbieterfenstern (z.B. {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser auf [niemals Cookies von Drittanbietern akzeptieren](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) eingestellt ist (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnung vor dem Herunterfahren des Browsers

Wenn der Browser heruntergefahren wird (weil der Benutzer die Option Beenden oder Schließen gewählt hat), die Festplatte mit der Datenbank unerwartet entfernt wird oder Berechtigungen für den Datenbankspeicher verloren gehen, geschehen die folgenden Dinge:

1. Jede Transaktion auf jeder betroffenen Datenbank (oder allen offenen Datenbanken im Falle eines Browser-Herunterfahrens) wird mit einem `AbortError` abgebrochen. Die Auswirkungen sind dieselben, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu hören, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wurde.

Das oben beschriebene Verhalten ist neu und ist erst ab den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen lautlos abgebrochen, und es wird kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet das, dass Sie sich nicht auf ein bestimmtes Transaktionsende verlassen können, und auf älteren Browsern werden Sie nicht einmal benachrichtigt, wenn sie nicht abgeschlossen werden. Daraus ergeben sich mehrere Implikationen für dieses Verhalten.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu verlassen. Wenn Sie beispielsweise IndexedDB verwenden, um eine Liste von Elementen zu speichern, die der Benutzer bearbeiten darf. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektstore leeren und dann die neue Liste schreiben. Wenn Sie den Objektstore in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, sodass Sie mit einer leeren Datenbank enden. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in eine einzige Transaktion zusammenfassen.

Zweitens sollten Sie Datenbanktransaktionen niemals an Entladeereignisse binden. Wenn das Entlade-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle Transaktionen, die im Entlade-Ereignishandler erstellt werden, niemals abgeschlossen. Ein intuitiver Ansatz zur Aufrechterhaltung einiger Informationen über Browsersitzungen hinweg besteht darin, diese aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in die Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Entladeereignishandler erstellt, aber da sie asynchron sind, werden sie vor ihrer Ausführung abgebrochen.

Tatsächlich gibt es keine Möglichkeit, zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Abschlussbenachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn zu diesem Zeitpunkt noch keine Transaktionen abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies passiert ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel mit der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Informationen, falls gewünscht.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://w3c.github.io/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Datenbindung von UI-Elementen mit IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB – Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bietet, welche im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann localStorage zurückfällt, in Browsern, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch eine schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB unterstützt von localstorage mit Serversynchronisation über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser mit IndexedDB
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die größtenteils die IndexedDB-API spiegelt, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfacher-kleiner (\~600B) versprechensbasierter Schlüssel-Wert-Speicher, der mit IndexedDB implementiert ist
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (\~1.3kB) TypeScript-Fassade mit einem versprechensbasierten API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-seitige Datenbank, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt IndexedDB auch Funktionen für crosstabs und Beobachtbarkeit hinzu.
