---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 7b333c51aa02084bc55402c07ff676902607b729
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten persistent im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundmuster

Das grundlegende Muster, das IndexedDB fördert, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und machen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, wie das Hinzufügen oder Abrufen von Daten.
4. Warten Sie auf den Abschluss der Operation, indem Sie die richtige Art von DOM-Event anhören.
5. Machen Sie etwas mit den Ergebnissen (die sich im Anfrageobjekt befinden können).

Mit diesen großen Konzepten können wir zu konkreteren Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Eine Datenbank zu öffnen ist wie jede andere Operation – Sie müssen sie "anfordern".

Die Öffnungsanfrage öffnet nicht sofort die Datenbank oder startet die Transaktion. Der Aufruf der Funktion `open()` gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt mit einem Ergebnis (Erfolg) oder einem Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Öffnungsfunktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema — die Objektspeicher in der Datenbank und ihre Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie aber eine erhöhte Versionsnummer angeben, wird ein `onupgradeneeded`-Ereignis sofort ausgelöst, wodurch Sie im Handler ein aktualisiertes Schema bereitstellen können. Mehr dazu weiter unten in [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass sie eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Gleitkommazahl verwenden können, da sie ansonsten auf die nächstniedrigere Ganzzahl umgewandelt wird und die Transaktion möglicherweise nicht gestartet wird, noch das `upgradeneeded`-Ereignis ausgelöst wird. Verwenden Sie zum Beispiel nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // machen Sie das nicht, da die Version auf 2 gerundet wird`

#### Erzeugen von Handlers

Das erste, was Sie mit fast allen Anfragen tun möchten, die Sie generieren, ist, Erfolgs- und Fehler-Handler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis ausgelöst, und die Funktion, die `onsuccess` zugewiesen wurde, wird aufgerufen. Wenn die Anfrage fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis ausgelöst, und die Funktion, die `onerror` zugewiesen wurde, wird aufgerufen.

Die IndexedDB-API ist so konzipiert, dass die Notwendigkeit zur Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Beim Öffnen einer Datenbank gibt es jedoch einige gängige Bedingungen, die Fehlerereignisse generieren. Das wahrscheinlichste Problem ist, dass der Benutzer entschieden hat, Ihrer Web-App nicht die Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB ist es, große Datenmengen für die Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, lesen Sie [Wie viel Daten können gespeichert werden? auf der Seite Browser-Speichergrenzen und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher wurden Benutzer früher beim ersten Mal, wenn eine Web-App versucht, eine IndexedDB zum Speichern zu öffnen, dazu aufgefordert, eine Entscheidung über den Zugriff zu treffen. Der Benutzer konnte entscheiden, den Zugriff zu erlauben oder zu verweigern. Außerdem dauert der IndexedDB-Speicher in den Privatsphäre-Modi der Browser nur im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Angenommen, der Benutzer hat Ihrer Anfrage, eine Datenbank zu erstellen, zugestimmt und Sie haben ein Erfolgsergebnis erhalten, das den Erfolgscallback auslöst; Was kommt als nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie sollten diese auf jeden Fall für später speichern. Ihr Code könnte so aussehen:

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

Wie oben erwähnt, blubbern Fehlerereignisse. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler generiert hat, dann blubbern sie zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, zu jeder Anfrage Fehler-Handler hinzuzufügen, können Sie stattdessen einen einzigen Fehler-Handler für das Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der häufigsten möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Es zeigt an, dass die Version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehler-Handler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als Sie zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank) angegeben haben), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent) Objekt wird an jeden `onversionchange`-Ereignis-Handler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet wurde. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektspeicher erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall wird die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank haben, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur etwaige neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z.B. um den `keyPath` zu ändern), dann müssen Sie den alten Objektspeicher löschen und ihn erneut mit den neuen Optionen erstellen. (Beachten Sie, dass dadurch die Informationen im Objektspeicher gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Aktualisieren der Datenbank lesen und irgendwo anders speichern.)

Der Versuch, einen Objektspeicher mit einem bereits existierenden Namen zu erstellen (oder einen Objektspeicher mit einem nicht existierenden Namen zu löschen) wird einen Fehler werfen.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird dann der `onsuccess`-Handler der offenen Datenbankanfrage ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstelle von Tabellen, und eine einzelne Datenbank kann beliebig viele Objektspeicher enthalten. Immer wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt verschiedene Möglichkeiten, einen Schlüssel bereitzustellen, je nachdem, ob der Objektspeicher einen [Key-Path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [Key-Generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objektspeicher kann jeden Werttyp enthalten, sogar primitive Typen wie
        Zahlen und Zeichenketten. Sie müssen bei jedem Hinzufügen eines neuen Wertes ein
        separates Schlüsselargument angeben.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Die Objekte müssen
        eine Eigenschaft mit dem gleichen Namen wie der Key-Path haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jeden Werttyp enthalten. Der Schlüssel wird
        automatisch für Sie generiert, Sie können jedoch ein separates Schlüsselargument
        angeben, wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Normalerweise wird
        ein Schlüssel generiert und der Wert des generierten Schlüssels im Objekt in einer
        Eigenschaft mit dem gleichen Namen wie der Key-Path gespeichert. Wenn jedoch eine
        solche Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft als
        Schlüssel verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte, keine primitiven Werte. Ein Index lässt Sie die Werte, die in einem Objektspeicher gespeichert sind, anhand des Wertes einer Eigenschaft des gespeicherten Objekts anstelle des Objektschlüssels nachschlagen.

Zusätzlich haben Indizes die Fähigkeit, einfache Beschränkungen auf die gespeicherten Daten durchzusetzen. Durch das Setzen des unique-Flags beim Erstellen des Index stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie beispielsweise einen Objektspeicher haben, der eine Gruppe von Personen enthält und sicherstellen möchten, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index mit gesetztem unique-Flag verwenden, um dies zu erzwingen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden möchten:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Einfachheit halber ignorieren und weitermachen.

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

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen sowie Indizes aufbauen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameter-Objekt entgegen. Obwohl das Parameter-Objekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objektspeichers, den Sie erstellen möchten, genauer zu definieren. In unserem Fall haben wir um einen Objektspeicher mit dem Namen "customers" gebeten und einen `keyPath` definiert, der die Eigenschaft ist, die ein einzelnes Objekt im Speicher eindeutig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer einzigartig garantiert ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch um einen Index mit dem Namen "name" gebeten, der auf die `name`-Eigenschaft der gespeicherten Objekte schaut. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt, das den Typ des Indexes, den Sie erstellen möchten, verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, wird immer noch erfolgreich sein, aber die Objekte werden nicht im "name"-Index erscheinen.

Wir können jetzt die gespeicherten Kundenobjekte entweder direkt über ihre `ssn` aus dem Objektspeicher abrufen oder über ihren Namen mithilfe des Indexes. Um zu erfahren, wie das durchgeführt wird, siehe den Abschnitt über [die Verwendung eines Indexes](#verwendung_eines_indexes).

### Verwendung eines Schlüsselgenerators

Das Setzen eines `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselgenerator für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, während Sie den Wert zum Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 erhöht, basierend auf dem vorherigen Schlüssel. Die aktuelle Nummer für einen Schlüsselgenerator wird niemals verringert, abgesehen davon, dass Datenbankoperationen rückgängig gemacht werden, zum Beispiel wird die Datenbanktransaktion abgebrochen. Daher beeinflusst das Löschen eines Eintrags oder sogar das Leeren aller Einträge aus einem Objektspeicher niemals den Schlüsselgenerator des Objektspeichers.

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

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen stammen vom Datenbankobjekt und Sie müssen angeben, welche Objektspeicher Sie möchten, dass die Transaktion umspannt. Sobald Sie in der Transaktion sind, können Sie auf die Objektspeicher zugreifen, die Ihre Daten halten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder ob Sie nur von ihr lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern — was das Erstellen oder Löschen von Objektspeichern oder Indizes beinhaltet — muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird gestartet, indem die Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer angegebenen `version` aufgerufen wird.

Um die Datensätze eines vorhandenen Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder im `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly`-Modus.

> [!NOTE]
> Seit Firefox 40 haben IndexedDB-Transaktionen weniger strenge Haltbarkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox bug 1112702](https://bugzil.la/1112702)). Zuvor in einer `readwrite`-Transaktion wurde ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event) Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, möglicherweise jedoch bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor geliefert werden, es besteht jedoch die geringe Möglichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter darum kümmern müssen. Wenn Sie aus irgendeinem Grund (z. B. weil Sie kritische Daten speichern, die später nicht erneut berechnet werden können) auf Haltbarkeit bestehen müssen, können Sie eine Transaktion erzwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis geliefert wird, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Geltungsbereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Geltungsbereich definieren, geben Sie nur die benötigten Objektspeicher an. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Geltungsbereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn dies erforderlich ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Geltungsbereichen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Weitere Informationen finden Sie in der Definition der [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich darin schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (wobei eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umspannt, aber tun Sie das nicht, da die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError generieren sollte. Wenn Sie für das zweite Argument nichts angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier hineinschreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, da Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen hängen sehr eng mit der Ereignisschleife zusammen. Wenn Sie eine Transaktion durchführen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, darauf eine Anfrage zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, davon ausgehend, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange ausstehende Anfragen vorhanden sind, bleibt die Transaktion aktiv. Transaktionslaufzeiten sind wirklich sehr einfach, aber es kann ein wenig Zeit in Anspruch nehmen, sich daran zu gewöhnen. Ein paar weitere Beispiele helfen auch. Wenn Sie `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen beginnen, dann haben Sie etwas durcheinander gebracht.

Transaktionen können drei Arten von DOM-Ereignissen empfangen: `error`, `abort` und `complete`. Wir haben über die Art und Weise gesprochen, wie Fehlerereignisse blubbern, so dass eine Transaktion Fehlerereignisse von allen Anfragen erhält, die daraus generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er auftrat, abzubrechen. Es sei denn, Sie behandeln den Fehler, indem Sie zuerst `stopPropagation()` beim Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie zum Nachdenken über und zur Behandlung von Fehlern, aber Sie können immer einen allgemeinen Fehler-Handler zur Datenbank hinzufügen, wenn die feinkörnige Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder wenn Sie `abort()` bei der Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird bei der Transaktion ausgelöst. Andernfalls erhalten Sie nach dem Abschluss aller ausstehenden Anfragen ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle von individuellen Anfragen Ihre geistige Gesundheit unterstützen.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objektspeicher von ihr abrufen. Transaktionen lassen Sie nur einen Objektspeicher haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle notwendigen Daten hinzufügen.

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

Das `resultat` einer aus einem Aufruf von `add()` erzeugten Anfrage ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte es der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass sich kein Objekt bereits mit demselben Schlüssel in der Datenbank befindet. Wenn Sie versuchen, einen bestehenden Eintrag zu ändern, oder wenn es Ihnen egal ist, ob einer bereits existiert, können Sie die `put()`-Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt wird.

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

Jetzt, da die Datenbank einige Informationen enthält, können Sie sie auf verschiedene Arten abrufen. Erstens, das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, wie folgt:

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

Das ist eine Menge Code für einen "einfachen" Abruf. So können Sie ihn ein wenig verkürzen, vorausgesetzt, Sie behandeln Fehler auf der Datenbankebene:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Verstehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie vermeiden, eine Liste von Objektspeichern, die Sie in Ihrer Transaktion benötigen, anzugeben und einfach den Namen als Zeichenkette übergeben. Außerdem lesen Sie nur von der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Der Aufruf von `transaction()` ohne spezifizierten Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiteres subtiler Punkt hier ist, dass Sie das Anfrageobjekt nicht tatsächlich einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur Eigenschaft `result` zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Nun, da wir einige Daten abgerufen haben, ist ihre Aktualisierung und Wiederverwendung in der IndexedDB ziemlich einfach. Aktualisieren wir das vorherige Beispiel etwas:

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

Hier erstellen wir einen `objectStore` und fordern einen Kundendatensatz daraus an, identifiziert durch seinen ssn-Wert (`444-44-4444`). Anschließend speichern wir das Ergebnis dieser Anfrage in einer Variablen (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben und nicht nur aus ihr lesen möchten.

### Verwendung eines Cursors

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

Die Funktion `openCursor()` nimmt mehrere Argumente entgegen. Erstens, Sie können den Bereich der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir gleich noch näher eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgsrückruf für Cursors ist ein wenig speziell. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also ist es `event.target.result`). Dann können der tatsächliche Schlüssel und der Wert sich in den Eigenschaften `key` und `value` des Cursor-Objekts befinden. Wenn Sie weitermachen möchten, müssen Sie `continue()` beim Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die Ihrer `openCursor()`-Anfrage entsprechen), erhalten Sie trotzdem einen Erfolgsrückruf, aber die Eigenschaft `result` ist `undefined`.

Ein gängiges Muster mit Cursors besteht darin, alle Objekte in einem Objektspeicher abzurufen und sie einem Array hinzuzufügen, wie in diesem Beispiel:

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
>   console.log(`Alle Kunden erhalten: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungskosten, der mit dem Anzeigen der Eigenschaft `value` eines Cursors einhergeht, da das Objekt verzögert erstellt wird. Wenn Sie beispielsweise `getAll()` verwenden, muss der Browser alle Objekte gleichzeitig erstellen. Wenn Sie nur daran interessiert sind, sich die Schlüssel anzusehen, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher abzurufen, verwenden Sie jedoch `getAll()`.

### Verwendung eines Indexes

Die Speicherung von Kundendaten mit der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob das eine gute Idee für den Datenschutz ist, ist eine andere Frage und außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie den richtigen gefunden haben. Das Suchen auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht einzigartig, sodass es mehr als einen Eintrag mit dem auf `"Donna"` gesetzten `name` geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem gegebenen `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselspeicher ordnet die Indexeigenschaft dem Schlüssel zu, der verwendet wird, um das Objekt im Objektspeicher zu speichern. Die Unterschiede sind hier veranschaulicht:

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

Der Index kann auch auf mehreren Eigenschaften erstellt werden, sodass Datensätze mithilfe einer Kombination von Werten, wie etwa der Suche nach einer Person durch Namen und E-Mail, nachgeschlagen werden können. Um einen zusammengesetzten Index zu erstellen, übergeben Sie ein Array von Eigenschaftsnamen als Schlüsselpfad, wenn Sie `createIndex` aufrufen. Sie können dann den Index abfragen, indem Sie ein Array von Werten in der gleichen Reihenfolge übergeben.

Erstens, stellen Sie sicher, dass Sie den Index in `request.onupgradeneeded` erstellt haben:

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

### Angabe des Bereichs und der Richtung von Cursorn

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" (d.h. der Schlüsselbereich umfasst den angegebenen Wert/die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich umfasst den angegebenen Wert/die angegebenen Werte nicht) sein. So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursors) iterieren. Der Richtungswechsel erfolgt, indem `prev` als zweites Argument an die Funktion `openCursor()` übergeben wird:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, aber nicht die angezeigten Ergebnisse einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht einzigartig ist, könnte es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist der Eintrag mit dem niedrigsten Schlüssel immer derjenige, der zurückgegeben wird.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte beachten Sie die [IDBCursor Konstanten](/de/docs/Web/API/IDBCursor#constants) für die gültigen Richtung-Argumente.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App in einer Weise ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer höheren Version als die aktuelle Versionsnummer der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anforderung ausdrücklich bestätigen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler hören, um die Situation zu behandeln, in der bereits geöffnete Apps Code initiieren können, der zu einem neuen Versuch führen könnte, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der Seite bindet, die ihn erstellt hat (typischerweise die Domäne oder Subdomäne der Seite), sodass er von keinem anderen Ursprung aus zugänglich ist.

Drittanbieter-Fensterinhalte (z.B. {{htmlelement("iframe")}} Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox bug 1147821](https://bugzil.la/1147821)).

## Warnung vor dem Herunterfahren des Browsers

Wenn der Browser herunterfährt (weil der Benutzer die Option Beenden oder Beenden gewählt hat), die Festplatte, die die Datenbank enthält, unerwartet entfernt wird oder Berechtigungen für den Datenbankspeicher verloren gehen, passiert Folgendes:

1. Jede Transaktion in jeder betroffenen Datenbank (oder alle offenen Datenbanken, im Falle des Browser-Shutdowns) wird mit einem `AbortError` abgebrochen. Die Wirkung ist dieselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) bei jeder Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um diese Ereignisse zu hören, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wurde.

Das oben beschriebene Verhalten ist neu und steht erst ab den folgenden Browser-Versionen zur Verfügung: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Schließung der Datenbank zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet das, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und in älteren Browsern werden Sie nicht einmal benachrichtigt, wenn sie nicht abgeschlossen wird. Es gibt mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu lassen. Zum Beispiel, wenn Sie IndexedDB verwenden, um eine Liste von Elementen zu speichern, die Sie dem Benutzer zur Bearbeitung bereitstellen. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektspeicher löschen und dann die neue Liste ausgeben. Wenn Sie den Objektspeicher in einer Transaktion löschen und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser abschaltet, nachdem das Löschen abgeschlossen ist, aber bevor das Schreiben stattfindet, wodurch Sie mit einer leeren Datenbank zurückbleiben. Um dies zu vermeiden, sollten Sie das Löschen und das Schreiben in einer einzigen Transaktion kombinieren.

Zweitens sollten Sie Datenbanktransaktionen niemals an Entladungsereignisse knüpfen. Wenn das Entladungsereignis durch das Schließen des Browsers ausgelöst wird, werden alle in den Entladungs-Event-Handlern erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um einige Informationen über Browsersitzungen hinweg aufrechtzuerhalten, besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in die Datenbank zu speichern, wenn der Browser (oder die Seite) schließt. Dies funktioniert jedoch nicht. Die Datenbanktransaktionen werden im Entladungs-Event-Handler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, sicherzustellen, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox bug 870645](https://bugzil.la/870645). Als Problemumgehung für diese normale Shutdown-Benachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn Transaktionen zum Zeitpunkt des Entladens noch nicht abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event), können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel unter Verwendung der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Literatur für Sie, um bei Bedarf weitere Informationen zu finden.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://w3c.github.io/IndexedDB/)
- IndexedDB- [Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox Quellcode

### Tutorials und Leitfäden

- [UI-Elemente mit IndexedDB binden (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB – Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für clientseitige Datenspeicherung bietet, das im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann localStorage zurückfällt, falls IndexedDB nicht unterstützt wird.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, unterstützt durch localstorage mit Serversynchronisation über HTTP. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser mit Verwendung von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die die IndexedDB-API weitgehend spiegelt, aber mit kleinen Verbesserungen in der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-simpler-kleiner (~600B) versprechensbasierter Key-Value-Store, implementiert mit IndexedDB.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Winzige (~1.3kB) TypeScript-Fassade mit versprechensbasierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-datenbankseitige Datenbank, die auf IndexedDB aufbauen kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt auch Querverlaufsfunktionen und Beobachtbarkeit zu IndexedDB hinzu.
