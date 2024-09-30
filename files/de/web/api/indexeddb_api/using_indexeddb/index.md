---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 62ce78b5c89fd809e00683b62f8e6a116990f82d
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefunktionen unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie nicht mit IndexedDB vertraut sind, sollten Sie zuerst den Artikel [IndexedDB-Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objekt-Store in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, wie z. B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie auf die richtige Art von DOM-Event hören.
5. Machen Sie etwas mit den Ergebnissen (die im Request-Objekt gefunden werden können).

Mit diesen großen Konzepten im Kopf können wir uns konkreteren Dingen zuwenden.

## Erstellen und Strukturieren des Stores

### Öffnen einer Datenbank

Wir starten den gesamten Prozess wie folgt:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation – Sie müssen es "anfordern".

Die Open-Anfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder einem Fehlerwert zurück, den Sie als Event behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB machen dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objekt-Stores in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die Open-Operation erstellt, dann wird ein `onupgradeneeded`-Event ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Event. Wenn die Datenbank existiert, Sie jedoch eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Event ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema in dessen Handler bereitzustellen. Mehr dazu später im Abschnitt [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass es sich um eine sehr große Ganzzahl handeln kann. Es bedeutet auch, dass Sie keine float verwenden können, da diese in die nächste niedrigere Ganzzahl umgewandelt wird und die Transaktion möglicherweise nicht startet, noch das `upgradeneeded`-Event ausgelöst wird. Verwenden Sie also beispielsweise keine 2.4 als Versionsnummer: `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlern

Das Erste, was Sie mit fast allen von Ihnen generierten Anfragen tun möchten, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgsevent (d. h. ein DOM-Event, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als seinem `target` ausgelöst. Sobald es ausgelöst wird, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsevent als Argument ausgelöst. Andernfalls, wenn es ein Problem gab, wird ein Fehlerereignis (d. h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) auf `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie sich an die API gewöhnt haben!). Beim Öffnen einer Datenbank gibt es jedoch einige häufig auftretende Bedingungen, die Fehlerereignisse generieren. Das wahrscheinlichste Problem ist, dass der Benutzer sich entschieden hat, Ihrer Web-App nicht die Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB ist es, das Speichern großer Datenmengen für die Offline-Nutzung zu ermöglichen. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, siehe [Wie viel Daten können gespeichert werden? auf der Seite Browser-Speicherquoten und Räumungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verunreinigen, daher forderten Browser früher den Benutzer auf, wenn eine bestimmte Web-App zum ersten Mal versucht, eine IndexedDB zur Speicherung zu öffnen. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem hält der IndexedDB-Speicher in den Datenschutzmodi der Browser nur bis zum Schließen der Inkognito-Sitzung an.

Angenommen, der Benutzer hat Ihre Anfrage zum Erstellen einer Datenbank zugelassen, und Sie haben ein Erfolgsevent erhalten, um den Erfolgscallback zu triggern; was kommt als nächstes? Die Anfrage wurde hier mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten es definitiv für später speichern. Ihr Code könnte in etwa so aussehen:

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

Wie oben erwähnt, steigen Fehlerereignisse auf. Fehlerereignisse werden auf die Anfrage gerichtet, die den Fehler generiert hat, dann steigt das Ereignis zur Transaktion und schließlich zum Datenbankobjekt auf. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzelnen Fehlerhandler auf dem Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der häufigen möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er gibt an, dass die Version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie versuchen zu öffnen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Event ausgelöst, und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignishandler übergeben, der auf `request.result` eingerichtet wurde (d.h. `db` im Beispiel). Im Handler für das `upgradeneeded`-Event sollten Sie die für diese Version der Datenbank benötigten Objekt-Stores erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objekt-Stores aus der vorherigen Version der Datenbank, sodass Sie diese Objekt-Stores nicht erneut erstellen müssen. Sie müssen nur neue Objekt-Stores erstellen oder Objekt-Stores aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objekt-Store ändern müssen (z.B. um den `keyPath` zu ändern), müssen Sie den alten Objekt-Store löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die Informationen im Objekt-Store löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie auslesen und vor dem Upgrade der Datenbank an anderer Stelle speichern.)

Der Versuch, einen Objekt-Store mit einem bereits existierenden Namen zu erstellen (oder das Löschen eines Objekt-Stores mit einem nicht existierenden Namen) wird einen Fehler werfen.

Wenn das `onupgradeneeded`-Event erfolgreich beendet wird, wird dann der `onsuccess`-Handler des Open-Datenbankantrags ausgelöst.

### Strukturieren der Datenbank

Nun zum Strukturieren der Datenbank. IndexedDB verwendet Objekt-Stores anstelle von Tabellen, und eine einzige Datenbank kann eine beliebige Anzahl von Objekt-Stores enthalten. Immer wenn ein Wert in einem Objekt-Store gespeichert wird, ist er mit einem Schlüssel verknüpft. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel angegeben werden kann, je nachdem, ob der Objekt-Store einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objekt-Store kann jeden beliebigen Wert enthalten, sogar primitive Werte wie
        Zahlen und Zeichenfolgen. Sie müssen ein separates Schlüsselargument angeben, wann immer
        Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte enthalten. Die Objekte müssen
        eine Eigenschaft mit demselben Namen wie der Key Path haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objekt-Store kann jeden beliebigen Wert enthalten. Der Schlüssel wird
        automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte enthalten. Normalerweise wird ein Schlüssel
        generiert, und der Wert des generierten Schlüssels wird in dem Objekt in einer Eigenschaft
        mit demselben Namen wie der Key Path gespeichert. Wenn jedoch eine
        solche Eigenschaft bereits vorhanden ist, wird der Wert dieser Eigenschaft als Schlüssel
        verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes in jedem Objekt-Store erstellen, vorausgesetzt der Objekt-Store enthält Objekte, nicht primitive Werte. Ein Index ermöglicht es Ihnen, die in einem Objekt-Store gespeicherten Werte anhand des Wertes einer Eigenschaft des gespeicherten Objekts zu durchsuchen, anstatt anhand des Schlüssels des Objekts.

Zusätzlich haben Indizes die Fähigkeit, einfache Einschränkungen auf die gespeicherten Daten zu erzwingen. Indem Sie das Unique-Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Key Path des Indexes gespeichert werden. Beispielsweise, wenn Sie einen Objekt-Store haben, der eine Menge von Personen enthält, und Sie sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit gesetztem Unique-Flag verwenden, um dies zu erzwingen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kundentabelle verwenden, weil nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber ignorieren wir diese unglücklichen Entscheidungen der Einfachheit halber und fahren fort.

Sehen wir uns nun an, wie wir eine IndexedDB zum Speichern unserer Daten erstellen:

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

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objekt-Stores erstellen und löschen sowie Indizes erstellen und entfernen.

Objekt-Stores werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode benötigt einen Namen des Stores und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objekt-Stores zu verfeinern, den Sie erstellen möchten. In unserem Fall haben wir um einen Objekt-Store namens "customers" gebeten und einen `keyPath` definiert, der die Eigenschaft ist, die ein individuelles Objekt im Store einzigartig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss auf jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch um einen Index namens "name" gebeten, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt, das den Typ des Indexes verfeinert, den Sie erstellen möchten. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, ist weiterhin erfolgreich, aber die Objekte erscheinen nicht im "name"-Index.

Wir können nun die gespeicherten Kundenobjekte mithilfe ihrer `ssn` direkt aus dem Objekt-Store abrufen oder durch ihren Namen über den Index. Um zu lernen, wie dies gemacht wird, sehen Sie sich den Abschnitt zum [Verwenden eines Indexes](#verwenden_eines_indexes) an.

### Verwenden eines Schlüsselgenerators

Das Festlegen eines `autoIncrement`-Flags beim Erstellen des Objekt-Stores würde den Schlüsselgenerator für diesen Objekt-Store aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator würde der Schlüssel automatisch generiert, wenn Sie den Wert zum Objekt-Store hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objekt-Store für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator verringert sich nie, außer wenn Datenbankoperationen rückgängig gemacht werden, beispielsweise die Datenbanktransaktion wird abgebrochen. Daher hat das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objekt-Store keinen Einfluss auf den Schlüsselgenerator des Objekt-Stores.

Wir können einen anderen Objekt-Store mit dem Schlüsselgenerator wie unten erstellen:

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

Für weitere Details über den Schlüsselgenerator siehe bitte ["W3C Key Generators"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie etwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen stammen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objekt-Stores Sie mit der Transaktion umfassen möchten. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objekt-Stores zugreifen, die Ihre Daten halten und Ihre Anfragen stellen. Als nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur daraus lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objekt-Stores oder Indizes umfasst – muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufrufen der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objekt-Stores zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objekt-Store vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Umfang, definiert als ein Array von Objekt-Stores, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore)-Methode enthält, mit der Sie auf Ihren Objekt-Store zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen Transaktionen im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)). Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, möglicherweise jedoch bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor geliefert werden, jedoch besteht eine geringe Wahrscheinlichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder ein Verlust der Systemstromversorgung auftritt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Verbraucher darüber keine weiteren Gedanken machen. Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. speichern Sie kritische Daten, die später nicht wiederhergestellt werden können), können Sie eine Transaktion erstellen, die auf die Festplatte geschrieben wird, bevor das `complete`-Ereignis ausgeliefert wird, indem Sie den experimentellen (nicht standardisierten) `readwriteflush`-Modus verwenden (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Umfang und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Umfang definieren, geben Sie nur die Objekt-Stores an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Umfängen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly`-Transaktionen mit überlappendem Umfang gleichzeitig ausführen, jedoch nur eine `readwrite`-Transaktion für einen Objekt-Store. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich Daten hineinschreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (wobei eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste der Objekt-Stores, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objekt-Stores umfasst, aber tun Sie dies nicht, da die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier darin schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, wo Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Event und, vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv und so weiter. Solange ausstehende Anfragen bestehen, bleibt die Transaktion aktiv. Transaktionslaufzeiten sind wirklich sehr einfach, aber es könnte einige Zeit dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden ebenfalls helfen. Wenn Sie `TRANSACTION_INACTIVE_ERR`-Fehlercodes erhalten, dann haben Sie etwas durcheinander gebracht.

Transaktionen können DOM-Events von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben bereits über das Aufsteigen von `error`-Events gesprochen, sodass eine Transaktion Fehler-Events von allen Anfragen empfängt, die daraus generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Wenn Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie dazu, Fehler zu bedenken und zu behandeln, aber Sie können immer einen allgemeinen Fehlerhandler auf der Datenbank hinzufügen, wenn eine feinkörnige Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder wenn Sie `abort()` auf die Transaktion aufrufen, dann wird die Transaktion zurückgesetzt und ein `abort`-Event wird auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Event. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen definitiv Ihrer geistigen Gesundheit zugute kommen.

Jetzt, wo Sie eine Transaktion haben, müssen Sie den Objekt-Store daraus holen. Transaktionen erlauben Ihnen nur, ein Objekt-Store zu haben, das Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die aus einem Aufruf von `add()` generiert wird, ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte es gleich der `ssn`-Eigenschaft des hinzugefügten Objekts sein, da der Objekt-Store die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt mit demselben Schlüssel bereits in der Datenbank vorhanden ist. Wenn Sie versuchen, einen bestehenden Eintrag zu ändern, oder es Ihnen egal ist, ob einer bereits existiert, können Sie die `put()`-Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Nachdem die Datenbank einige Informationen enthält, können Sie sie auf verschiedene Arten abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert wie folgt abzurufen:

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

Das ist viel Code für ein "einfaches" Abrufen. So können Sie es etwas verkürzen, vorausgesetzt, dass Sie Fehler auf Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objekt-Store gibt, können Sie vermeiden, eine Liste der benötigten Objekt-Stores in Ihrer Transaktion zu übergeben, und stattdessen einfach den Namen als String übergeben. Da Sie nur aus der Datenbank lesen, benötigen Sie keine `"readwrite"`-Transaktion. Das Aufrufen von `transaction()` ohne einen angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anfrageobjekt tatsächlich nicht auf eine Variable speichern. Da das DOM-Event die Anfrage als Ziel hat, können Sie das Event verwenden, um auf die `result`-Eigenschaften zuzugreifen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, wo wir einige Daten abgerufen haben, ist das Aktualisieren und Zurückschreiben in die IndexedDB ziemlich einfach. Aktualisieren wir das vorherige Beispiel etwas:

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

Also erstellen wir hier einen `objectStore` und fordern einen Kunden-Datensatz daraus an, identifiziert durch seine ssn-Wert (`444-44-4444`). Wir legen das Ergebnis dieser Anfrage in eine Variable (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts, und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kunden-Datensatz zurück in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir auf die Datenbank schreiben wollen, nicht nur daraus lesen.

### Verwenden eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie durch alle Werte in Ihrem Objekt-Store gehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die Funktion `openCursor()` nimmt mehrere Argumente. Zuerst können Sie den Bereich der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereich-Objekt verwenden, auf das wir gleich eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursors ist etwas besonders. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also ist es `event.target.result`). Dann können der tatsächliche Schlüssel und Wert auf den `key`- und `value`-Eigenschaften des Cursorobjekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf den Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gab, die Ihrer `openCursor()`-Anfrage entsprachen), erhalten Sie immer noch einen Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster bei Cursors besteht darin, alle Objekte in einem Objekt-Store abzurufen und sie einem Array hinzuzufügen, wie folgt:

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
> Es gibt einen Leistungskosten, der mit dem Betrachten der `value`-Eigenschaft eines Cursors verbunden ist, da das Objekt verzögert erstellt wird. Wenn Sie beispielsweise `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie sich nur dafür interessieren, sich jedes der Schlüssel anzusehen, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objekt-Store abzurufen, verwenden Sie jedoch `getAll()`.

### Verwenden eines Indexes

Das Speichern von Kundendaten mit der SSN als Schlüssel ist logisch, da die SSN ein Individuum eindeutig identifiziert. (Ob dies für den Datenschutz eine gute Idee ist, ist eine andere Frage und außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch einen Kunden nach Name suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige finden. Eine solche Suche wäre sehr langsam, also können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, daher könnte es mehr als einen Eintrag mit `name` auf `"Donna"` gesetzt geben. In diesem Fall erhalten Sie immer denjenigen mit dem niedrigsten Schlüssel.

Wenn Sie alle Einträge mit einem bestimmten `name` abrufen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursors auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objekt-Store zu. Ein Schlüsselcursor ordnet die Indexeigenschaft dem Schlüssel zu, der verwendet wurde, um das Objekt im Objekt-Store zu speichern. Die Unterschiede werden hier gezeigt:

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

### Den Bereich und die Richtung von Cursors angeben

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" (d.h. der Schlüsselbereich schließt die angegebenen Werte ein) oder "offen" (d.h. der Schlüsselbereich schließt die angegebenen Werte nicht ein) sein. So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstatt in aufsteigender Reihenfolge (der Standardrichtung für alle Cursors) iterieren. Der Richtungswechsel erfolgt, indem `prev` als zweites Argument an die `openCursor()`-Funktion übergeben wird:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, ohne die angezeigten Ergebnisse einzuschränken, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, kann es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objekt-Stores nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist immer der Eintrag mit dem niedrigsten Schlüssel derjenige, der zurückgegeben wird.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich die "[IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente an.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn Ihre Web-App sich so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer größeren Versionsnummer als der tatsächlichen Version der Datenbank aufrufen, müssen alle anderen geöffneten Datenbanken die Anforderung ausdrücklich anerkennen, bevor Sie mit den Änderungen an der Datenbank beginnen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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
  return;
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

Außerdem sollten Sie auf `VersionError`-Fehler hören, um die Situation zu behandeln, in der bereits geöffnete Apps Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an die Herkunft der Website bindet, die ihn erstellt (normalerweise die Domain oder Subdomain der Website), sodass er von keiner anderen Herkunft aus zugänglich ist.

Drittanbieterfensterinhalte (z.B. {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Drittanbieter-Cookies akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnung bei Browser-Shutdown

Wenn der Browser heruntergefahren wird (weil der Benutzer die Option Beenden oder Beenden gewählt hat), das Laufwerk mit der Datenbank unerwartet entfernt wird oder Berechtigungen für den Datenbankspeicher verloren gehen, passieren folgende Dinge:

1. Jede Transaktion in jeder betroffenen Datenbank (oder alle offenen Datenbanken im Falle des Browser-Shutdowns) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) für jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich empfängt das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu hören, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist nur in den folgenden Browserversionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen und es wird kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit schließen kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und auf älteren Browsern werden Sie nicht einmal benachrichtigt, wenn sie nicht abgeschlossen sind. Es gibt mehrere Auswirkungen dieses Verhaltens.

Erstens, Sie sollten darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu verlassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die Sie dem Benutzer erlauben zu bearbeiten. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objekt-Store leeren und dann die neue Liste ausschreiben. Wenn Sie den Objekt-Store in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, was zu einer leeren Datenbank führt. Um dies zu vermeiden, sollten Sie das Leeren und Schreiben in eine einzelne Transaktion kombinieren.

Zweitens, Sie sollten niemals Datenbanktransaktionen an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle im Unload-Eventhandler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um einige Informationen über Browsersitzungen hinweg zu speichern, besteht darin, sie beim Öffnen des Browsers (oder einer bestimmten Seite) aus der Datenbank zu lesen, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in der Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Eventhandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, dafür zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Abschaltungsbenachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Event hinzufügen, um den Benutzer zu warnen, wenn zum Zeitpunkt des Unloading noch keine Transaktionen abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event), können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB Beispiel

Wir haben ein vollständiges Beispiel, das die IndexedDB API verwendet. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weitere Lektüre, wenn Sie mehr Informationen wünschen.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Datenbindung von UI-Elementen mit IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bereitstellt, die im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann localStorage in Browsern zurückgreift, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch eine schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage mit Serversynchronisation über http unterstützt wird. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die größtenteils die IndexedDB-API widerspiegelt, aber mit kleinen Benutzerfreundlichkeitsverbesserungen.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein supereinfacher kleiner (\~600B) auf Versprechen basierender Keyval-Speicher, der mit IndexedDB implementiert ist
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (\~1.3kB) TypeScript-Fassade mit einer auf Versprechen basierenden API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Clientsseitendatenbank, die oben auf IndexedDB verwendet werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
