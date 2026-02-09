---
title: Verwenden von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: e254dd0d1fde812e8457406c00f1beacd1e4b8d4
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, um Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragemöglichkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API sehen Sie sich den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten an. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundmuster

Das grundlegende Muster, das IndexedDB fördert, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objekt-Store in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation wie das Hinzufügen oder Abrufen von Daten durchzuführen.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie dem richtigen DOM-Ereignis lauschen.
5. Tun Sie etwas mit den Ergebnissen (die im Request-Objekt zu finden sind).

Mit diesen großen Konzepten im Hinterkopf können wir zu konkreteren Themen übergehen.

## Erstellen und Strukturieren des Stores

### Datenbank öffnen

Wir starten den ganzen Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation — Sie müssen es "anfragen".

Die Open-Anfrage öffnet die Datenbank nicht sofort oder startet die Transaktion. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder einem Fehlwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB funktionieren genauso - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema — die Objekt-Store in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie jedoch eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, sodass Sie im Handler ein aktualisiertes Schema bereitstellen können. Mehr dazu später unter [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Versionsnummern sind ganze Zahlen, daher werden die übergebenen Werte gerundet—beispielsweise werden die Werte 2.1 und 2.4 beide auf 2 gerundet.
> Der Versuch, zwischen Nummern zu aktualisieren, die auf die gleiche ganze Zahl gerundet werden, löst kein `onupgradeneeded`-Ereignis aus.
> Beachten Sie bei der Arbeit mit großen Versionsnummern auch den [Bereich der in JavaScript darstellbaren Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding).

#### Erstellen von Handlungsabläufen

Das Erste, was Sie mit fast allen von Ihnen generierten Anfragen tun möchten, ist das Hinzufügen von Erfolgs- und Fehlerhandlern:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis ausgelöst und die Funktion, die `onsuccess` zugewiesen ist, wird aufgerufen. Wenn die Anfrage fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis ausgelöst und die Funktion, die `onerror` zugewiesen ist, wird aufgerufen.

Die IndexedDB-API ist so gestaltet, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse generieren. Das wahrscheinlichste Problem ist, dass der Benutzer entschieden hat, Ihrer Web-App keine Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB besteht darin, die Speicherung großer Datenmengen zur Offline-Nutzung zu ermöglichen. (Um mehr darüber zu erfahren, wie viel Speicherplatz Sie für jeden Browser haben können, lesen Sie [Wie viel Daten können gespeichert werden? auf der Seite über Browser-Speicherkontingente und Ausscheidungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich wollen Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher forderten Browser früher den Benutzer auf, das erste Mal, wenn eine gegebene Web-App versucht, eine IndexedDB zur Speicherung zu öffnen. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem dauert die IndexedDB-Speicherung im Privatsphärenmodus der Browser nur im Arbeitsspeicher, bis die Inkognito-Sitzung geschlossen wird.

Angenommen, der Benutzer hat Ihrer Anfrage, eine Datenbank zu erstellen, erlaubt und Sie haben ein Erfolgsergebnis erhalten, das den Erfolg-Callback auslöst; Was kommt als nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` erzeugt, also ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten das definitiv für später speichern. Ihr Code könnte folgendermaßen aussehen:

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

Wie oben erwähnt, steigen Fehlerereignisse auf. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler erzeugt hat, dann steigt das Ereignis zur Transaktion auf, und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler zum Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiger möglicher Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er deutet darauf hin, dass die auf der Festplatte gespeicherte Version der Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer als bisher angeben, wenn Sie [eine Datenbank öffnen](#datenbank_öffnen)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignis-Handler übergeben, der auf `request.result` (also `db` im Beispiel) eingerichtet wurde. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objekt-Store erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objekt-Store aus der vorherigen Version der Datenbank, sodass Sie diese Objekt-Store nicht erneut erstellen müssen. Sie müssen nur alle neuen Objekt-Store erstellen oder Objekt-Store aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen vorhandenen Objekt-Store ändern müssen (z.B. um den `keyPath` zu ändern), müssen Sie den alten Objekt-Store löschen und ihn erneut mit den neuen Optionen erstellen. (Beachten Sie, dass dadurch die Informationen im Objekt-Store gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie diese herauslesen und irgendwo anders speichern, bevor Sie die Datenbank aktualisieren.)

Der Versuch, einen Objekt-Store mit einem bereits vorhandenen Namen zu erstellen (oder einen Objekt-Store mit einem nicht vorhandenen Namen zu löschen), führt zu einem Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich abgeschlossen wird, wird der `onsuccess`-Handler der Open-Datenbankanfrage ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objekt-Store anstelle von Tabellen, und eine einzelne Datenbank kann beliebig viele Objekt-Store enthalten. Jedes Mal, wenn ein Wert in einem Objekt-Store gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objekt-Store einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Möglichkeiten, wie die Schlüssel bereitgestellt werden:

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
        Dieser Objekt-Store kann jede Art von Wert halten, sogar primitive Werte wie Zahlen und Zeichenfolgen. Sie müssen ein separates Schlüsselargument angeben, wann immer Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte halten. Die Objekte müssen eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objekt-Store kann jede Art von Wert halten. Der Schlüssel wird für Sie automatisch generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte halten. Normalerweise wird ein Schlüssel generiert und der Wert des generierten Schlüssels in einem Objekt in einer Eigenschaft mit demselben Namen wie der Schlüsselpfad gespeichert. Wenn eine solche Eigenschaft jedoch bereits existiert, wird der Wert dieser Eigenschaft als Schlüssel verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objekt-Store erstellen, vorausgesetzt, der Objekt-Store hält Objekte, keine primitiven Werte. Ein Index ermöglicht es Ihnen, die in einem Objekt-Store gespeicherten Werte basierend auf dem Wert einer Eigenschaft des gespeicherten Objekts und nicht dem Schlüssel des Objekts nachzuschlagen.

Zusätzlich haben Indizes die Fähigkeit, einfache Bedingungen auf die gespeicherten Daten durchzusetzen. Indem Sie das eindeutige Flag beim Erstellen des Index setzen, stellt der Index sicher, dass keine zwei Objekte gespeichert sind, die denselben Wert für den Schlüsselpfad des Index haben. Wenn Sie beispielsweise einen Objekt-Store haben, der eine Sammlung von Personen hält und Sie sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit gesetztem eindeutigen Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten für unser Beispiel:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer einer Person als primären Schlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Einfachheit halber ignorieren und fortfahren.

Nun schauen wir uns an, wie eine IndexedDB erstellt wird, um unsere Daten zu speichern:

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

Wie zuvor angegeben, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objekt-Store erstellen und löschen sowie Indizes bauen und entfernen.

Objekt-Store werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode benötigt einen Namen des Stores und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objekt-Stores, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir um einen Objekt-Store mit dem Namen "customers" gebeten und einen `keyPath` definiert, welcher die Eigenschaft ist, die ein einzelnes Objekt im Store einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch um einen Index mit dem Namen "name" gebeten, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Genau wie `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, welches den Typ des Index, den Sie erstellen möchten, verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, gelingt dennoch, aber die Objekte erscheinen nicht im "name"-Index.

Wir können nun die gespeicherten Kundenobjekte mithilfe ihrer `ssn` direkt aus dem Objekt-Store oder anhand ihres Namens mithilfe des Index abrufen. Um zu erfahren, wie dies getan wird, sehen Sie sich den Abschnitt über [Verwenden eines Index](#verwenden_eines_index) an.

### Verwenden eines Schlüsselgenerators

Das Einrichten eines `autoIncrement`-Flags beim Erstellen des Objekt-Stores würde den Schlüsselgenerator für diesen Objekt-Store aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator würde der Schlüssel automatisch generiert, wenn Sie den Wert dem Objekt-Store hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objekt-Store für diesen Schlüsselgenerator zum ersten Mal erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 im Vergleich zum vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator verringert sich nie, außer als Folge von zurückgenommenen Datenbankoperationen, beispielsweise wird die Datenbanktransaktion abgebrochen. Daher beeinflusst weder das Löschen eines Datensatzes noch das Löschen aller Datensätze aus einem Objekt-Store den Schlüsselgenerator des Objekt-Stores.

Wir können einen weiteren Objekt-Store mit dem Schlüsselgenerator wie folgt erstellen:

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

Für weitere Details zum Schlüsselgenerator siehe [Schlüsselgeneratoren](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen stammen aus dem Datenbankobjekt, und Sie müssen angeben, auf welche Objekt-Store die Transaktion Zugriff haben soll. Sobald Sie sich innerhalb der Transaktion befinden, können Sie auf die Objekt-Store zugreifen, die Ihre Daten halten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur aus ihr lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite`, und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern — was das Erstellen oder Löschen von Objekt-Store oder Indizes beinhaltet — muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch den Aufruf der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objekt-Stores zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem bestehenden Objekt-Store vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Umfang, definiert als ein Array von Objekt-Store, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore)-Methode enthält, mit der Sie auf Ihr Objekt-Store zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen Transaktionen im `readonly`-Modus.

> [!NOTE]
> Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox bug 1112702](https://bugzil.la/1112702).) Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn garantiert wurde, dass alle Daten auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis nach dem OS-Befehl zum Schreiben der Daten ausgelöst, möglicherweise jedoch bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann also schneller als zuvor ausgeliefert werden, es besteht jedoch eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das OS abstürzt oder die Systemleistung unterbrochen wird, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Konsumenten keine weiteren Sorgen machen. Wenn Sie aus irgendeinem Grund eine dauerhafte Speicherung sicherstellen müssen (z.B. wenn Sie kritische Daten speichern, die später nicht erneut berechnet werden können), können Sie eine Transaktion vor dem Auslösen des `complete`-Ereignisses durch das experimentelle (nicht standardisierte) `readwriteflush`-Modus (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)) zwingen, auf die Festplatte zu schreiben.

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Umfang und Modus bei der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Umfang definieren, geben Sie nur die Objekt-Store an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Umfängen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Umfängen gleichzeitig ausführen, aber Sie können nur eine `readwrite` Transaktion für einen Objekt-Store haben. Um mehr zu erfahren, lesen Sie die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, dann möchten Sie wahrscheinlich in sie schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objekt-Store, auf die sich die Transaktion erstrecken wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass sich die Transaktion auf alle Objekt-Store erstreckt, aber tun Sie dies nicht, weil die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine Lese-Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Da Sie nun eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, dann wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Transaktionslebenszyklen sind wirklich sehr einfach, aber es kann einige Zeit dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie `TRANSACTION_INACTIVE_ERR`-Fehlercodes sehen, dann haben Sie etwas durcheinandergebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben über die Methode gesprochen, wie Fehlerereignisse aufsteigen, sodass eine Transaktion Fehlerereignisse von allen Anfragen erhält, die von ihr generiert werden. Ein subtiler Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Sofern Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen allgemeinen Fehlerhandler zur Datenbank hinzufügen, wenn die feinkörnige Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf der Transaktion aufrufen, dann wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen ausführen, dann kann das Tracking der Transaktion anstelle von Einzelanfragen sicherlich Ihrer Vernunft helfen.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objekt-Store daraus bekommen. Transaktionen lassen Sie nur einen Objekt-Store haben, den Sie bei der Erstellung der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die von einem Aufruf an `add()` erzeugt wird, ist der Schlüssel des hinzugefügten Werts. In diesem Fall sollte es also dem `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objekt-Store den `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt bereits in der Datenbank mit demselben Schlüssel vorhanden ist. Wenn Sie einen vorhandenen Eintrag ändern möchten oder es Ihnen egal ist, ob bereits einer existiert, können Sie die `put()`-Funktion verwenden, wie im Abschnitt [Eintrag in der Datenbank aktualisieren](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

### Entfernen von Daten aus der Datenbank

Das Entfernen von Daten ist ganz ähnlich:

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

Jetzt, da die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Weise abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert zu erhalten, wie folgt:

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

Das ist eine Menge Code für einen "einfachen" Abruf. Hier ist, wie Sie es ein wenig kürzen können, vorausgesetzt, dass Sie Fehler auf der Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da nur ein Objekt-Store vorhanden ist, können Sie das Übergeben einer Liste von Objekt-Store, die Sie in Ihrer Transaktion benötigen, vermeiden und einfach den Namen als Zeichenfolge übergeben. Auch lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Das Aufrufen von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiteres Detail hier ist, dass Sie das Anforderungsobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Nachdem wir nun einige Daten abgerufen haben, ist das Aktualisieren und erneutes Einfügen in die IndexedDB ziemlich einfach. Aktualisieren wir das vorherige Beispiel ein wenig:

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

Hier erstellen wir also einen `objectStore` und fordern ein Kunden-Record daraus an, das durch seinen ssn-Wert (`444-44-4444`) identifiziert wird. Wir legen dann das Ergebnis dieser Anforderung in einer Variablen ab (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts, erstellen dann eine zweite Anfrage (`requestUpdate`), um das Kunden-Record wieder in den `objectStore` einzufügen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben möchten und nicht nur aus ihr lesen.

### Verwenden eines Cursors

Die Verwendung von `get()` setzt voraus, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie durch alle Werte in Ihrem Objekt-Store durchgehen möchten, dann können Sie einen Cursor verwenden. So sieht das aus:

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

Die `openCursor()`-Funktion nimmt mehrere Argumente. Erstens können Sie den Bereich der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir in einer Minute näher eingehen werden. Zweitens können Sie die Richtung angeben, in die Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolg-Callback für Cursor ist etwas besonderes. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also `event.target.result`). Dann sind der tatsächliche Schlüssel und der Wert in den Eigenschaften `key` und `value` des Cursor-Objekts zu finden. Wenn Sie fortfahren möchten, dann müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gab, die Ihrer `openCursor()`-Anfrage entsprachen), erhalten Sie trotzdem einen Erfolg-Callback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursors besteht darin, alle Objekte in einem Objekt-Store abzurufen und sie in ein Array einzufügen, wie folgt:

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
> Es gibt einen Leistungseinbruch, der mit der Betrachtung der `value`-Eigenschaft eines Cursors verbunden ist, da das Objekt träge erstellt wird. Wenn Sie z.B. `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, jeden der Schlüssel zu betrachten, z.B., ist es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objekt-Store zu erhalten, sollten Sie jedoch `getAll()` verwenden.

### Verwenden eines Index

Das Speichern von Kundendaten unter Verwendung der SSN als Schlüssel ist sinnvoll, da die SSN eine Person eindeutig identifiziert. (Ob dies aus Datenschutzgesichtspunkten eine gute Idee ist, ist eine andere Frage und außerhalb des Umfangs dieses Artikels.) Wenn Sie einen Kunden jedoch nach Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige finden. Das Suchen auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, sodass es mehr als einen Eintrag mit dem `name`-Eigenschaft auf `"Donna"` geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursors auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objekt-Store zu. Ein Schlüssel-Cursor ordnet die Indexeigenschaft dem Schlüssel zu, der verwendet wird, um das Objekt im Objekt-Store zu speichern. Die Unterschiede werden hier veranschaulicht:

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

Der Index kann auch auf mehreren Eigenschaften erstellt werden, sodass Datensätze mithilfe einer Kombination von Werten nachgeschlagen werden können, z.B. um eine Person sowohl nach ihrem Namen als auch ihrer E-Mail zu finden. Um einen zusammengesetzten Index zu erstellen, geben Sie beim Aufruf von `createIndex` ein Array von Eigenschaftsnamen als Schlüsselpfad an. Sie können dann den Index abfragen, indem Sie ein Array von Werten in derselben Reihenfolge übergeben.

Stellen Sie zuerst sicher, dass Sie den Index in `request.onupgradeneeded` erstellt haben:

```js
const index = objectStore.createIndex("name_email", ["name", "email"]);
```

Dann können Sie den Index später wie folgt abfragen:

```js
const index = objectStore.index("name_email");

index.get(["Donna", "donna@home.org"]).onsuccess = (event) => {
  console.log(event.target.result);
  // {ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org'}
};
```

### Festlegen des Bereichs und der Richtung von Cursors

Wenn Sie den Bereich der in einem Cursor angezeigten Werte einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument zu `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Begrenzung hat, oder einen, der sowohl eine untere als auch eine obere Begrenzung hat. Die Begrenzung kann "geschlossen" sein (d.h. der Schlüsselbereich umfasst die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich umfasst die angegebenen Werte nicht). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge iterieren, anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursors). Das Wechseln der Richtung erfolgt, indem das zweite Argument zur `openCursor()`-Funktion auf `prev` gesetzt wird:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur die Richtung ändern möchten, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, kann es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objekt-Store nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie beim Iterieren von Cursors über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich "[IDBCursor Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente an.

## Versionsänderungen während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer größeren Version als der aktuellen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anfrage explizit bestätigen, bevor Sie mit den Änderungen an der Datenbank beginnen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). Hier ist, wie es funktioniert:

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

Sie sollten auch auf `VersionError`-Fehler achten, um die Situation zu handhaben, in der bereits geöffnete Apps möglicherweise Code initiieren, der zu einem neuen Versuch zum Öffnen der Datenbank führt, jedoch unter Verwendung einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der Website bindet, die ihn erstellt (typischerweise ist dies die Domäne oder Subdomäne der Website), sodass er von keinem anderen Ursprung aus zugänglich ist.

Inhalte von Drittanbieterfenstern (z.B., {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox bug 1147821](https://bugzil.la/1147821)).

## Warnung bei Browser-Schließung

Wenn der Browser herunterfährt (weil der Benutzer die Option Beenden oder Beenden gewählt hat), das Laufwerk, das die Datenbank enthält, unerwartet entfernt wird oder die Berechtigungen zum Zugriff auf den Datenbankspeicher verloren gehen, geschehen die folgenden Dinge:

1. Jede Transaktion auf jeder betroffenen Datenbank (oder allen geöffneten Datenbanken im Fall der Browser-Schließung) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung repräsentiert, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu lauschen, sodass Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist nur ab den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browser-Versionen wurden die Transaktionen stillschweigend abgebrochen, und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wurde ausgelöst, sodass es keine Möglichkeit gibt zu erkennen, dass die Datenbank unerwartet geschlossen wurde.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und bei älteren Browsern wird Ihnen nicht einmal mitgeteilt, wenn sie nicht abgeschlossen werden. Es gibt mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu hinterlassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die Sie dem Benutzer zur Bearbeitung zur Verfügung stellen. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objekt-Store leeren und dann die neue Liste schreiben. Wenn Sie den Objekt-Store in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, sodass Sie mit einer leeren Datenbank verbleiben. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in eine einzige Transaktion kombinieren.

Zweitens sollten Sie niemals Datenbanktransaktionen mit Unload-Ereignissen verknüpfen. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle in dem Unload-Ereignishandler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um Informationen über Browser-Sitzungen hinweg zu bewahren, besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann beim Schließen des Browsers (oder der Seite) in der Datenbank zu speichern. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Ereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Browser-Schließen. Siehe [Firefox bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Shutdown-Benachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn noch nicht alle Transaktionen zum Zeitpunkt des Unloads abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruch-Benachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel zur Verwendung der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Literatur für Sie, um bei Bedarf weitere Informationen zu finden.

### Referenz

- [IndexedDB API Reference](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Datenbindung von UI-Elementen mit IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bietet und im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann localStorage in Browsern zurückgreift, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch eine nette, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und erweiterter IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Ein clientseitiges In-Memory MongoDB, unterstützt durch LocalStorage mit Serversynchronisation über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die weitgehend die IndexedDB-API spiegelt, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfacher-kleiner (\~600B) Promise-basierter Schlüssel-Wert-Speicher, implementiert mit IndexedDB
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Winziger (\~1.3kB) TypeScript-Fassade mit einer Promise-basierten API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Clientseitendatenbank, die auf IndexedDB genutzt werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
