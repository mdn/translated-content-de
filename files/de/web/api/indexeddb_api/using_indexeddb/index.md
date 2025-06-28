---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: d4cd0878c559697f1082ab17161d0f7f2fe4a961
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, sieht wie folgt aus:

1. Öffnen einer Datenbank.
2. Erstellen eines Objektspeichers in der Datenbank.
3. Starten einer Transaktion und das Stellen einer Anfrage, um eine Datenbankoperation durchzuführen, z. B. das Hinzufügen oder Abrufen von Daten.
4. Warten auf den Abschluss der Operation, indem der richtige DOM-Ereignistyp überwacht wird.
5. Etwas mit den Ergebnissen machen (die auf dem Anfrageobjekt zu finden sind).

Nachdem wir diese großen Konzepte gemeistert haben, können wir uns konkreteren Dingen zuwenden.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir starten den gesamten Prozess wie folgt:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation – Sie müssen es „anfordern“.

Die offene Anforderung öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()` Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt mit einem Ergebnis (Erfolg) oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die open-Funktion ist eine Instanz von `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objektspeicher in der Datenbank und ihre Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die open-Operation erstellt, dann wird ein `onupgradeneeded` Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie aber eine erhöhte Versionsnummer angeben, wird sofort ein `onupgradeneeded` Ereignis ausgelöst, so dass Sie im Handler ein aktualisiertes Schema bereitstellen können. Mehr dazu später in [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, das heißt, es kann eine sehr große Ganzzahl sein. Es bedeutet auch, dass Sie keine Gleitkommazahl verwenden können, da sie andernfalls in die nächst niedrigere Ganzzahl konvertiert wird und die Transaktion möglicherweise nicht startet, noch das `upgradeneeded` Ereignis auslöst. Verwenden Sie also beispielsweise nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 abgerundet wird`

#### Generieren von Handlern

Das Erste, was Sie mit fast allen von Ihnen generierten Anfragen tun möchten, ist Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anforderung erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event) Ereignis ausgelöst, und die Funktion, die `onsuccess` zugewiesen ist, wird aufgerufen. Wenn die Anforderung fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event) Ereignis ausgelöst, und die Funktion, die `onerror` zugewiesen ist, wird aufgerufen.

Die IndexedDB-API ist so konzipiert, dass sie die Notwendigkeit von Fehlerbehandlungen minimiert, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Beim Öffnen einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Web-App die Erlaubnis verweigert hat, eine Datenbank zu erstellen. Eines der Hauptdesignziele von IndexedDB ist es, große Datenmengen zur Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicherplatz Sie für jeden Browser haben können, siehe [Wie viele Daten können gespeichert werden? auf der Seite Browser-Speicherquoten und Räumkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored)).

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine böswillige Website Ihren Computer verunreinigt, sodass Browser den Benutzer früher aufforderten, das erste Mal, wenn eine Web-App versucht, eine IndexedDB für die Speicherung zu öffnen. Der Benutzer konnte wählen, ob er den Zugriff zulassen oder verweigern wollte. Außerdem speichert IndexedDB in den Datenschutzmodi der Browser nur im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Angenommen, der Benutzer hat Ihrem Antrag zum Erstellen einer Datenbank zugestimmt und Sie haben ein Erfolgsergebnis erhalten, um den Erfolgs-Callback auszulösen; Was nun? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten diese definitiv für später speichern. Ihr Code könnte so aussehen:

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

#### Umgang mit Fehlern

Wie oben erwähnt, blasen Fehlerereignisse auf. Fehlerereignisse richten sich an die Anforderung, die den Fehler generiert hat, dann blasen sie zur Transaktion auf und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anforderung hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler am Datenbankobjekt hinzufügen, so:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Eines der häufigen möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Es zeigt an, dass die auf der Festplatte gespeicherte Version der Datenbank _größer_ ist als die Version, die Sie öffnen möchten. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded` Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent) Objekt wird an jeden `onversionchange` Ereignishandler übergeben, der auf `request.result` festgelegt wurde (d.h. `db` im Beispiel). Im Handler für das `upgradeneeded` Ereignis sollten Sie die Objektspeicher erstellen, die für diese Version der Datenbank benötigt werden:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z. B. um den `keyPath` zu ändern), dann müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die Informationen im Objektspeicher löschen wird! Wenn Sie diese Informationen speichern müssen, sollten Sie sie auslesen und vor dem Upgrade der Datenbank woanders speichern.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder den Versuch, einen Objektspeicher mit einem nicht existierenden Namen zu löschen) führt zu einem Fehler.

Wenn das `onupgradeneeded` Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der offenen Datenbankanfrage dann ausgelöst.

### Strukturierung der Datenbank

Kommen wir nun zur Struktur der Datenbank. IndexedDB verwendet Objektspeicher statt Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Wann immer ein Wert in einem Objektspeicher gespeichert wird, wird er einem Schlüssel zugeordnet. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel angegeben werden kann, abhängig davon, ob der Objektspeicher einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Möglichkeiten, wie die Schlüssel angegeben werden:

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
        Dieser Objektspeicher kann jeden beliebigen Wert halten, selbst
        primitive Werte wie Zahlen und Zeichenfolgen. Sie müssen ein separates
        Schlüsselargument angeben, wann immer Sie einen neuen Wert hinzufügen
        möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte halten. Die Objekte müssen eine
        Eigenschaft mit demselben Namen wie der key path haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jeden beliebigen Wert halten. Der Schlüssel
        wird automatisch für Sie generiert, oder Sie können ein separates
        Schlüsselargument angeben, wenn Sie einen bestimmten Schlüssel
        verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte halten. Normalerweise wird ein Schlüssel generiert und der Wert des generierten Schlüssels wird in dem Objekt in
        einer Eigenschaft mit demselben Namen wie der key path gespeichert. Wenn jedoch eine solche Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft als Schlüssel verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes für jeden Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte und keine primitiven Werte. Ein Index ermöglicht es Ihnen, die in einem Objektspeicher gespeicherten Werte anhand des Werts einer Eigenschaft des gespeicherten Objekts nachzuschlagen, anstatt des Schlüssels des Objekts.

Zusätzlich haben Indizes die Fähigkeit, einfache Einschränkungen für die gespeicherten Daten zu erzwingen. Durch Einstellen des `unique`-Flags beim Erstellen des Index stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie also beispielsweise einen Objektspeicher haben, der eine Gruppe von Personen enthält, und Sie sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit dem `unique`-Flag verwenden, um dies zu erzwingen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer einer Person als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum statt ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Bequemlichkeit halber ignorieren und weitermachen.

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

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. In ihm können Sie Objektspeicher erstellen und löschen sowie Indizes aufbauen und entfernen.

Objektspeicher werden mit einem einzelnen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, weil es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und die Art des Objektspeichers, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir nach einem Objektspeicher mit dem Namen "customers" und definiertem `keyPath` gefragt, was die Eigenschaft ist, die ein individuelles Objekt im Speicher einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert ist.

Wir haben auch nach einem Index mit dem Namen "name" gefragt, der sich die `name`-Eigenschaft der gespeicherten Objekte ansieht. Ebenso wie `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, das die Art des Index verfeinert, den Sie erstellen möchten. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, gelingt trotzdem, aber die Objekte werden nicht im "name"-Index erscheinen.

Wir können jetzt die gespeicherten Kundenobjekte mit ihrer `ssn` direkt aus dem Objektspeicher abrufen oder mit ihrem Namen über den Index. Um zu lernen, wie das gemacht wird, siehe den Abschnitt über [die Verwendung eines Index](#verwendung_eines_index).

### Verwendung eines Schlüsselgenerators

Das Setzen des `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselgenerator für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator würde der Schlüssel automatisch generiert, wenn Sie den Wert zum Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator zuerst erstellt wird. Im Wesentlichen wird der neu selbstgenerierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator nimmt niemals ab, außer als Ergebnis von zurückgesetzten Datenbankoperationen, zum Beispiel, wenn die Datenbanktransaktion abgebrochen wird. Daher beeinträchtigt das Löschen eines Datensatzes oder sogar das Leeren aller Datensätze aus einem Objektspeicher niemals den Schlüsselgenerator des Objektspeichers.

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

Für weitere Details zum Schlüsselgenerator siehe [Schlüsselgeneratoren](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen stammen vom Datenbankobjekt, und Sie müssen angeben, für welche Objektspeicher Sie die Transaktion durchführen möchten. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten halten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur daraus lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das „Schema“ oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektspeichern oder Indizes umfasst – muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufrufen der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder im `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (der Umfang, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie Ihren Objektspeicher zugreifen können. Standardmäßig, wo kein Modus angegeben ist, werden die Transaktionen im `readonly`-Modus geöffnet.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen lockere Nachhaltigkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox bug 1112702](https://bugzil.la/1112702)). Früher in einer `readwrite`-Transaktion wurde ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis erst ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller geliefert werden als zuvor; es besteht jedoch eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollte sich die meisten Verbraucher nicht weiter darum kümmern müssen. Wenn Sie aus irgendeinem Grund (z.B. speichern Sie kritische Daten, die später nicht neu berechnet werden können) die Nachhaltigkeit sicherstellen müssen, können Sie eine Transaktion vor deren `complete`-Ereignis auf die Festplatte schreiben, indem Sie die experimentelle `readwriteflush`-Modus verwenden (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff durch die Verwendung des richtigen Umfangs und Modus in der Transaktion beschleunigen. Hier ein paar Tipps:

- Beim Definieren des Bereichs geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Bereichen gleichzeitig ausführen.
- Geben Sie nur einen `readwrite`-Transaktionsmodus an, wenn nötig. Sie können mehrere `readonly`-Transaktionen mit überlappenden Bereichen gleichzeitig ausführen, aber nur eine `readwrite`-Transaktion für einen Objektspeicher. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich etwas darin schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die Methode `transaction()` nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umfasst, aber tun Sie dies nicht, weil die Spezifikation besagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine nur-Lese-Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, wo Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage beendet ist, erhalten Sie ein DOM-Ereignis, und sofern die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Lebenszeiten von Transaktionen sind wirklich sehr einfach, aber es könnte ein wenig dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, dann haben Sie etwas vermasselt.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben bereits über das Aufblasen von Fehlerereignissen gesprochen, sodass eine Transaktion Fehlerereignisse von allen Anfragen, die daraus generiert werden, empfängt. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers die Transaktion, in der er aufgetreten ist, abzubrechen. Wenn Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie zum Nachdenken und Behandeln von Fehlern, aber Sie können immer noch einen allgemeine Fehlerhandler zur Datenbank hinzufügen, wenn das feingranulare Fehlerhandling zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf der Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis auf der Transaktion ausgelöst. Andernfalls erhalten Sie nach Abschluss aller ausstehenden Anfragen ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen ausführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich zu Ihrer geistigen Gesundheit beitragen.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus abrufen. Transaktionen erlauben Ihnen nur, den Objektspeicher zu haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer von einem `add()`-Aufruf generierten Anfrage ist der Schlüssel des hinzugefügten Werts. In diesem Fall sollte es gleich der `ssn`-Eigenschaft des hinzugefügten Objekts sein, da der Objektspeicher die `ssn`-Eigenschaft als Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt bereits mit demselben Schlüssel in der Datenbank existiert. Wenn Sie versuchen, einen vorhandenen Eintrag zu ändern, oder es Ihnen egal ist, ob einer bereits existiert, können Sie die `put()`-Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Nun, da die Datenbank Informationen enthält, können Sie sie auf mehrere Arten abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, so:

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

Das ist viel Code für ein „einfaches“ Abrufen. Hier erfahren Sie, wie Sie es etwas kürzen können, vorausgesetzt, Sie behandeln Fehler auf Datenbankebene:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da nur ein Objektspeicher vorhanden ist, können Sie das Übergeben einer Liste von Objektspeichern, die Sie in Ihrer Transaktion benötigen, vermeiden und einfach den Namen als String übergeben. Außerdem lesen Sie nur aus der Datenbank, daher benötigen Sie keine `"readwrite"`-Transaktion. Der Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiterer subtiler Punkt hier ist, dass Sie das Anforderungsobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anforderung als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Nun, da wir einige Daten abgerufen haben, ist es ziemlich einfach, sie zu aktualisieren und wieder in die IndexedDB einzufügen. Ändern wir das vorherige Beispiel etwas ab:

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

Hier erstellen wir also einen `objectStore` und fordern einen Kundendatensatz daraus an, der durch seinen ssn-Wert (`444-44-4444`) identifiziert wird. Wir setzen dann das Ergebnis dieser Anfrage in eine Variable (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir auf die Datenbank schreiben möchten und nicht nur darin lesen.

### Verwendung eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie durch alle Werte in Ihrem Objektspeicher gehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die Funktion `openCursor()` nimmt mehrere Argumente an. Zuerst können Sie die Bereich der abgerufenen Elemente durch die Verwendung eines Schlüssbereichsobjekts einschränken, auf das wir in einer Minute kommen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgsrückruf für Cursors ist ein bisschen besonders. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, daher ist es `event.target.result`). Dann können der tatsächliche Schlüssel und der Wert auf den `key`- und `value`-Eigenschaften des Cursor-Objekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` beim Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die zu Ihrer `openCursor()`-Anfrage passen), erhalten Sie immer noch einen Erfolgsrückruf, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursors ist, alle Objekte in einem Objektspeicher abzurufen und sie zu einem Array hinzuzufügen, so:

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
> Alternativ können Sie `getAll()` (und `getAllKeys()`) verwenden, um diesen Fall zu behandeln. Der folgende Code tut genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungseinbuße, die mit dem Betrachten der `value`-Eigenschaften eines Cursors verbunden ist, weil das Objekt faul erstellt wird. Wenn Sie `getAll()` verwenden, erstellen die Browser zum Beispiel alle Objekte auf einmal. Wenn Sie nur daran interessiert sind, die einzelnen Schlüssel zu betrachten, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()`. Wenn Sie versuchen, ein Array mit allen Objekten in einem Objektspeicher zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwendung eines Index

Das Speichern von Kundendaten unter Verwendung der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies eine gute Idee für die Privatsphäre ist, ist eine andere Frage und liegt außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch nach einem Kunden anhand des Namens suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige gefunden haben. Das wäre sehr langsam, also können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, sodass es mehr als einen Eintrag mit dem `name` auf `"Donna"` gesetzt geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Typen von Cursors auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüssel-Cursor ordnet die Indexeigenschaft dem Schlüssel zu, der zum Speichern des Objekts im Objektspeicher verwendet wird. Die Unterschiede sind hier illustriert:

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

### Bereich und Richtung für Cursors angeben

Wenn Sie den Bereich der in einem Cursor sichtbaren Werte einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüssbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann „geschlossen“ sein (d.h. der Schlüssbereich schließt den angegebenen Wert/die angegebenen Werte ein) oder „offen“ (d.h. der Schlüssbereich schließt den angegebenen Wert/die angegebenen Werte nicht ein). So funktioniert es:

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

Manchmal möchten Sie vielleicht in absteigender Reihenfolge anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursors) iterieren. Das Ändern der Richtung erfolgt durch Übergabe von `prev` als zweites Argument an die `openCursor()`-Funktion:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Änderungsrichtungsänderung angeben, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht einzigartig ist, könnten mehrere Einträge existieren, bei denen `name` identisch ist. Beachten Sie, dass eine solche Situation mit Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie Duplikate während der Cursor-Iteration über Indizes herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte beachten Sie die "[IDBCursor Konstante](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab offen hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer höheren Version als der aktuellen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anfrage explizit anerkennen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler achten, um die Situation zu handhaben, in der die bereits geöffneten Apps möglicherweise Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der Website bindet, die ihn erstellt (in der Regel ist dies die Site-Domain oder Subdomain), sodass es nicht von einem anderen Ursprung aus aufgerufen werden kann.

Inhalte im Third-Party-Fenster (z. B. {{htmlelement("iframe")}} Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass [niemals Cookies von Drittanbietern akzeptiert werden](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox bug 1147821](https://bugzil.la/1147821)).

## Warnung über das Herunterfahren des Browsers

Wenn der Browser herunterfährt (weil der Benutzer die Option Beenden oder Beenden gewählt hat), die Festplatte mit der Datenbank unerwartet entfernt wird oder die Berechtigungen für den Datenbankspeicher verloren gehen, passieren folgende Dinge:

1. Jede Transaktion auf jeder betroffenen Datenbank (oder allen geöffneten Datenbanken im Falle des Herunterfahrens des Browsers) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) bei jeder Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich empfängt das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den Ereignishandler [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) verwenden, um auf diese Ereignisse zu lauschen, so dass Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist nur ab den folgenden Browserversionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen und es wird kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, so gibt es keine Möglichkeit, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich nicht auf den Abschluss einer bestimmten Transaktion verlassen können, und auf älteren Browsern werden Sie nicht einmal informiert, wenn sie nicht abgeschlossen werden. Es gibt mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu hinterlassen. Zum Beispiel, wenn Sie IndexedDB verwenden, um eine Liste von Elementen zu speichern, die Sie dem Benutzer bearbeiten lassen, speichern Sie die Liste nach der Bearbeitung, indem Sie den Objektspeicher leeren und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion löschen und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Löschen, aber vor dem Schreiben geschlossen wird und Sie mit einer leeren Datenbank zurückbleiben. Um dies zu vermeiden, sollten Sie das Löschen und das Schreiben in eine einzige Transaktion kombinieren.

Zweitens sollten Sie Datenbanktransaktionen niemals an "unload"-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle im Unload-Ereignishandler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um einige Informationen über Browsersitzungen beizubehalten, besteht darin, diese Informationen aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in die Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Ereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

In der Tat gibt es keinen Weg, die Ausführung von IndexedDB-Transaktionen zu garantieren, auch nicht bei normalem Herunterfahren des Browsers. Siehe [Firefox Fehler 870645](https://bugzil.la/870645). Als Workaround für diese normale Herunterfahrtsanzeige könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn zum Zeitpunkt des Entladevorgangs noch Transaktionen nicht abgeschlossen sind.

Zumindest mit der Ergänzung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel, das die IndexedDB-API verwendet. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Versuchen Sie das Beispiel](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie den Quellcode](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Lektüre, um Ihnen, falls gewünscht, weitere Informationen zu geben.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://w3c.github.io/IndexedDB/)
- IndexedDB [Interface-Dateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für clientseitige Datenspeicherung bereitstellt, die im Hintergrund IndexedDB verwendet, aber zurückfällt auf Web SQL (veraltet) und dann localStorage in Browsern, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortschrittlicher IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage unterstützt wird, mit Server-Synchronisierung über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser mithilfe von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die größtenteils die IndexedDB-API spiegelt, aber mit kleinen Verbesserungen der Benutzbarkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfaches-kleines (~600B) versprechenbasiertes Schlüssel-Wert-Speicher, implementiert mit IndexedDB.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Winziger (~1.3kB) TypeScript-Fassade mit versprechenbasierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-Seiten-Datenbank, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
