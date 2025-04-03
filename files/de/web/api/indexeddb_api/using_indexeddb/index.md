---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefunktionen unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline funktionieren.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zunächst den Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das von IndexedDB geförderte Grundmuster ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objekt-Store in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anforderung, um eine Datenbankoperation durchzuführen, z.B. Daten hinzuzufügen oder abzurufen.
4. Warten Sie auf den Abschluss der Operation, indem Sie das richtige DOM-Ereignis abhören.
5. Machen Sie etwas mit den Ergebnissen (die Sie im Anforderungsobjekt finden).

Mit diesen wesentlichen Konzepten im Rücken können wir zu konkreteren Schritten übergehen.

## Erstellen und Strukturieren des Stores

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Eine Datenbank zu öffnen ist wie jede andere Operation – Sie müssen sie "anfordern".

Die offene Anforderung öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der Funktion `open()` gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt mit einem Ergebnis- (Erfolg) oder Fehlertyp zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die Open-Funktion ist eine Instanz von `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Datenbankversion bestimmt das Datenbankschema – die Objekt-Stores in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open` Operation erstellt, danach wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank jedoch existiert, Sie aber eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema im Handler bereitzustellen. Mehr dazu später unter [Erstellen oder Aktualisieren der Datenbankversion](#erstellen_oder_aktualisieren_der_datenbankversion) unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass sie eine sehr große ganze Zahl sein kann. Es bedeutet auch, dass Sie keine Fließkommazahl verwenden können, da sie sonst auf den nächstgelegenen niedrigeren ganzzahligen Wert gerundet wird und die Transaktion möglicherweise nicht startet, noch das `upgradeneeded`-Ereignis auslöst. Verwenden Sie also zum Beispiel keine 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlern

Das Erste, was Sie mit fast allen Anfragen tun möchten, die Sie generieren, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles gelingt, wird ein Erfolgsereignis (das heißt, ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als `target` gefeuert. Sobald es gefeuert ist, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsereignis als Argument ausgelöst. Wenn jedoch ein Problem aufgetreten ist, wird ein Fehlerereignis (das heißt, ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) bei `request` gefeuert. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind). Im Falle des Öffnens einer Datenbank gibt es jedoch einige übliche Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer entschieden hat, Ihrer Web-App keine Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB ist es, große Datenmengen zur Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, siehe [Wie viel Speicher kann gespeichert werden? auf der Seite Browser-Speicherquoten und Räumungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, sodass Browser den Benutzer früher dazu aufforderten, wenn eine gegebene Web-App zum ersten Mal versucht, ein IndexedDB zur Speicherung zu öffnen. Der Benutzer konnte den Zugriff erlauben oder verweigern. Auch die IndexedDB-Speicherung im Privatsphärenmodus des Browsers bleibt nur im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Nun, nehmen wir an, der Benutzer erlaubt Ihre Anfrage, eine Datenbank zu erstellen, und Sie haben ein Erfolgsereignis erhalten, um den Erfolg-Callback auszulösen; und jetzt? Die Anforderung hier wurde mit einem Aufruf von `indexedDB.open()` generiert, sodass `request.result` eine Instanz von `IDBDatabase` ist, und Sie möchten diese definitiv für später speichern. Ihr Code könnte in etwa so aussehen:

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

Wie oben erwähnt, schlagen Fehlerereignisse Blasen. Fehlerereignisse sind auf die Anforderung gerichtet, die den Fehler generiert hat, dann blasen sie zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anforderung hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler auf dem Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiger möglicher Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er zeigt an, dass die Version der auf dem Datenträger gespeicherten Datenbank _größer_ ist als die Version, die Sie öffnen möchten. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Datenbankversion

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor, beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent) Objekt wird an jeden `onversionchange`-Ereignishandler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet ist. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objekt-Stores erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objekt-Stores aus der vorherigen Version der Datenbank, sodass Sie diese Objekt-Stores nicht erneut erstellen müssen. Sie müssen nur neue Objekt-Stores erstellen oder Objekt-Stores aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objekt-Store ändern müssen (z.B. um den `keyPath` zu ändern), müssen Sie den alten Objekt-Store löschen und erneut mit den neuen Optionen erstellen. (Beachten Sie, dass dadurch die Informationen im Objekt-Store gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Upgrade der Datenbank auslesen und an anderer Stelle speichern.)

Ein Versuch, einen Objekt-Store mit einem Namen zu erstellen, der bereits existiert (oder ein Versuch, einen Objekt-Store zu löschen, dessen Name nicht existiert), wird einen Fehler auslösen.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird dann der `onsuccess`-Handler der offenen Datenbankanforderung ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objekt-Stores anstelle von Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objekt-Stores enthalten. Wann immer ein Wert in einem Objekt-Store gespeichert wird, ist er mit einem Schlüssel verbunden. Es gibt mehrere verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objekt-Store einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objekt-Store kann jede Art von Wert halten, auch primitive Werte wie
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
        Dieser Objekt-Store kann jede Art von Wert enthalten. Der Schlüssel wird
        automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte enthalten. Normalerweise wird ein Schlüssel
        generiert und der Wert des generierten Schlüssels wird im Objekt in
        einer Eigenschaft mit demselben Namen wie der Key Path gespeichert. Wenn jedoch eine
        solche Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft als Schlüssel
        verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objekt-Store erstellen, sofern der Objekt-Store Objekte und keine Primitiven enthält. Ein Index ermöglicht es Ihnen, die in einem Objekt-Store gespeicherten Werte anhand des Werts einer Eigenschaft des gespeicherten Objekts abzurufen, anstatt anhand des Schlüssels des Objekts.

Darüber hinaus haben Indizes die Fähigkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Durch das Setzen des einzigartigen Flags bei der Erstellung des Index sorgt der Index dafür, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie also beispielsweise einen Objekt-Store haben, der eine Gruppe von Personen enthält, und Sie sicherstellen möchten, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index mit dem gesetzten einzigartigen Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zunächst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden stattdessen das Geburtsdatum speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Bequemlichkeit halber ignorieren und weitermachen.

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

Wie zuvor angegeben, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objekt-Stores erstellen und löschen sowie Indizes auf- und abbauen.

Objekt-Stores werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Stores und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objekt-Stores, den Sie erstellen möchten, festzulegen. In unserem Fall haben wir nach einem Objekt-Store namens "customers" gefragt und einen `keyPath` definiert, der die Eigenschaft ist, die ein einzelnes Objekt im Store einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss auf jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch nach einem Index namens "name" gefragt, der die `name` Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options` Objekt, das den Typ des zu erstellenden Index verfeinert. Das Hinzufügen von Objekten, die keine `name` Eigenschaft haben, gelingt weiterhin, aber die Objekte erscheinen nicht im "name" Index.

Wir können jetzt die gespeicherten Kundenobjekte anhand ihrer `ssn` direkt aus dem Objekt-Store abrufen oder anhand ihres Namens über den Index. Um zu lernen, wie dies gemacht wird, siehe den Abschnitt über [Verwendung eines Indexes](#verwendung_eines_indexes).

### Verwendung eines Schlüsselgenerators

Das Setzen eines `autoIncrement` Flags beim Erstellen des Objekt-Stores würde den Schlüsselgenerator für diesen Objekt-Store aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator würde der Schlüssel automatisch generiert, während Sie den Wert zum Objekt-Store hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objekt-Store für diesen Schlüsselgenerator erstmals erstellt wird. Im Wesentlichen wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator wird niemals verringert, außer als Folge von Rückabwicklungen von Datenbankoperationen, z.B. wenn die Datenbanktransaktion abgebrochen wird. Daher beeinflusst das Löschen eines Eintrags oder sogar das Löschen aller Einträge eines Objekt-Stores niemals den Schlüsselgenerator des Objekt-Stores.

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

Für weitere Informationen über den Schlüsselgenerator, bitte sehen Sie ["W3C Key Generators"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen stammen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objekt-Stores die Transaktion umfassen soll. Sobald Sie sich innerhalb der Transaktion befinden, können Sie auf die Objekt-Stores zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Anschließend müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur davon lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objekt-Stores oder Indizes umfasst – muss die Transaktion im `versionchange` Modus sein. Diese Transaktion wird durch Aufruf der [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objekt-Stores zu lesen, kann die Transaktion entweder im `readonly` oder `readwrite` Modus sein. Um Änderungen an einem bestehenden Objekt-Store vorzunehmen, muss die Transaktion im `readwrite` Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Umfang, definiert als ein Array von Objekt-Stores, auf die Sie zugreifen möchten) und den `modus` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt mit der Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) zurück, mit der Sie auf Ihren Objekt-Store zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly` Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen verringerte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702).) Zuvor wurde in einer `readwrite` Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event) Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete` Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete` Ereignis kann also schneller als zuvor geliefert werden, jedoch besteht ein geringes Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es einen Stromausfall gibt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Nutzer nicht weiter darum kümmern. Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. wenn Sie kritische Daten speichern, die später nicht neu berechnet werden können), können Sie eine Transaktion zwingen, auf die Festplatte zu schreiben, bevor das `complete` Ereignis ausgeliefert wird, indem Sie eine Transaktion im experimentellen (nicht standardisierten) `readwriteflush` Modus erzeugen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Umfang und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Umfang definieren, geben Sie nur die Objekt-Stores an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Umfängen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite` Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly` Transaktionen mit überlappenden Umfängen gleichzeitig ausführen, aber Sie können nur eine `readwrite` Transaktion für einen Objekt-Store haben. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten in die Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich Daten hineinschreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()` Funktion nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objekt-Stores, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objekt-Stores umfasst, aber tun Sie das nicht, da die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier hinein schreiben möchten, müssen Sie das `"readwrite"` Flag übergeben.

Jetzt, da Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt die Anfrage war erfolgreich, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Die Lebensdauer von Transaktionen ist eigentlich sehr einfach, aber es könnte ein wenig Zeit dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie `TRANSACTION_INACTIVE_ERR` Fehlercodes sehen, dann haben Sie etwas durcheinander gebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen erhalten: `error`, `abort` und `complete`. Wir haben über die Art und Weise gesprochen, wie sich Fehlerereignisse blasen, also empfängt eine Transaktion Fehlermeldungen von allen Anfragen, die von ihr generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Es sei denn, Sie behandeln den Fehler, indem Sie zuerst `stopPropagation()` auf das Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgerollt. Dieses Design zwingt Sie dazu, Fehler zu überdenken und zu behandeln, aber Sie können immer einen allgemeinen Fehlerbehandler zur Datenbank hinzufügen, wenn feine Fehlerbehandlung zu umständlich ist. Wenn Sie kein Fehlerereignis behandeln oder `abort()` auf die Transaktion aufrufen, dann wird die Transaktion zurückgerollt und ein `abort` Ereignis wird auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete` Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich Ihren Verstand unterstützen.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objekt-Store daraus erhalten. Transaktionen lassen Ihnen nur Zugriff auf einen Objekt-Store, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle benötigten Daten hinzufügen.

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

Das `result` einer Anforderung, die aus einem Aufruf von `add()` generiert wurde, ist der Schlüssel des hinzugefügten Werts. Daher sollte es in diesem Fall der `ssn` Eigenschaft des hinzugefügten Objekts entsprechen, da der Objekt-Store die `ssn` Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()` Funktion erfordert, dass kein Objekt mit demselben Schlüssel bereits in der Datenbank vorhanden ist. Wenn Sie einen bestehenden Eintrag ändern möchten oder es Ihnen egal ist, ob bereits einer existiert, können Sie die `put()` Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Jetzt, wo die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Weise abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, so:

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

Das ist viel Code für eine "einfache" Abfrage. So können Sie es etwas abkürzen, vorausgesetzt, dass Sie Fehler auf der Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objekt-Store gibt, können Sie vermeiden, eine Liste von Objekt-Stores, die Sie in Ihrer Transaktion benötigen, zu übergeben und einfach den Namen als String anzugeben. Außerdem lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"` Transaktion benötigen. Wenn Sie `transaction()` ohne angegebenen Modus aufrufen, erhalten Sie eine `"readonly"` Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anforderungsobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anforderung als Ziel hat, können Sie das Ereignis verwenden, um die `result` Eigenschaft zu erreichen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, da wir einige Daten abgerufen haben, ist das Aktualisieren und Zurücklegen in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir also einen `objectStore` und fordern einen Kundenrekord daraus an, identifiziert durch seinen `ssn` Wert (`444-44-4444`). Wir legen dann das Ergebnis dieser Anfrage in einer Variablen ab (`data`), aktualisieren die `age` Eigenschaft dieses Objekts, erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundenrekord wieder in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite` Transaktion angeben, da wir in die Datenbank schreiben möchten, nicht nur daraus lesen.

### Verwendung eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie durch alle Werte in Ihrem Objekt-Store Schritt für Schritt durchgehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die `openCursor()` Funktion nimmt mehrere Argumente. Erstens können Sie den Bereich der abgerufenen Elemente mit einem Schlüsselbereichsobjekt begrenzen, auf das wir gleich noch eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgsrückruf für Cursor ist ein wenig speziell. Das Cursorobjekt selbst ist das `result` der Anforderung (oben verwenden wir die Kurzform, daher ist es `event.target.result`). Der tatsächliche Schlüssel und Wert können dann auf den `key` und `value` Eigenschaften des Cursorobjekts gefunden werden. Wenn Sie fortfahren möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn keine Einträge vorhanden waren, die Ihrer `openCursor()` Anforderung entsprochen haben), erhalten Sie immer noch einen Erfolgsrückruf, aber die `result` Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursorn besteht darin, alle Objekte in einem Objekt-Store abzurufen und sie zu einem Array hinzuzufügen:

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
> Alternativ können Sie `getAll()` verwenden, um diesen Fall zu behandeln (und `getAllKeys()`). Der folgende Code macht genau das Gleiche wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungskosten im Zusammenhang mit dem Betrachten der `value` Eigenschaft eines Cursors, da das Objekt nach Bedarf erstellt wird. Wenn Sie `getAll()` verwenden, muss der Browser beispielsweise alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, sich jeden der Schlüssel anzusehen, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()`. Wenn Sie jedoch versuchen, ein Array aller Objekte in einem Objekt-Store zu erhalten, verwenden Sie `getAll()`.

### Verwendung eines Indexes

Das Speichern von Kundendaten mit der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies eine gute Idee für den Datenschutz ist, ist eine andere Frage und liegt außerhalb des Geltungsbereichs dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige finden. Die Suche in dieser Weise wäre sehr langsam, deshalb können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name" Index ist nicht einzigartig, sodass es mehr als einen Eintrag mit dem `name` Set auf `"Donna"` geben könnte. In diesem Fall erhalten Sie immer denjenigen mit dem niedrigsten Schlüsselwert.

Wenn Sie alle Einträge mit einem bestimmten `name` abrufen möchten, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objekt-Store zu. Ein Schlüssel-Cursor ordnet die Indexeigenschaft dem Schlüssel zu, mit dem das Objekt im Objekt-Store gespeichert ist. Die Unterschiede sind hier veranschaulicht:

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

### Festlegen des Bereichs und der Richtung von Cursorn

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, begrenzen möchten, können Sie ein `IDBKeyRange` Objekt verwenden und es als das erste Argument für `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" sein (d.h. der Schlüsselbereich enthält die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich schließt die angegebenen Werte aus). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge iterieren, anstatt in aufsteigender Reihenfolge (die Standardrichtung für alle Cursor). Das Ändern der Richtung geschieht durch Übergeben von `prev` an die `openCursor()` Funktion als zweites Argument:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur die Richtung ändern möchten, aber nicht die angezeigten Ergebnisse beschränken möchten, können Sie einfach `null` als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name" Index nicht einzigartig ist, kann es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation mit Objekt-Stores nicht auftreten kann, da der Schlüssel immer einzigartig sein muss. Wenn Sie während der Kursiteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie "[IDBCursor Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn Ihre Web-App sich so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie in Betracht ziehen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer höheren Version als der tatsächlichen Version der Datenbank aufrufen, müssen alle anderen geöffneten Datenbanken die Anforderung ausdrücklich anerkennen, bevor Sie Änderungen an der Datenbank vornehmen können (es wird ein `onblocked` Ereignis ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch nach `VersionError` Fehlern Ausschau halten, um die Situation zu behandeln, in der bereits geöffnete Apps Code initiieren könnten, der zu einer neuen Versuche führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Prinzip des gleichen Ursprungs, was bedeutet, dass es den Store an den Ursprung der Seite bindet, die ihn erstellt (typischerweise ist dies die Site-Domain oder Subdomain), sodass er von keinem anderen Ursprung aus zugänglich ist.

Drittanbieter-Fensterinhalte (z.B. {{htmlelement("iframe")}} Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [nie Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox Bug 1147821](https://bugzil.la/1147821)).

## Warnung vor dem Herunterfahren des Browsers

Beim Herunterfahren des Browsers (weil der Benutzer die Option Beenden oder Verlassen gewählt hat), wird die Festplatte, die die Datenbank enthält, unerwartet entfernt oder die Berechtigungen für den Datenbank-Store gehen verloren. Die folgenden Dinge geschehen:

1. Jede Transaktion in jeder betroffenen Datenbank (oder alle offenen Datenbanken im Falle des Herunterfahrens des Browsers) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) für jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event) Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) Ereignishandler verwenden, um auf diese Ereignisse zu hören, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist erst ab den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browser-Versionen wurden die Transaktionen stillschweigend abgebrochen, und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event) Ereignis wurde ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit schließen kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und in älteren Browsern erfahren Sie nicht einmal, wann sie nicht abgeschlossen wird. Daraus ergeben sich mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu hinterlassen. Zum Beispiel, nehmen wir an, dass Sie IndexedDB verwenden, um eine Liste von Elementen zu speichern, die Sie dem Benutzer zur Bearbeitung erlauben. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objekt-Store leeren und dann die neue Liste schreiben. Wenn Sie den Objekt-Store in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, sodass Sie mit einer leeren Datenbank dastehen. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in einer einzigen Transaktion kombinieren.

Zweitens sollten Sie niemals Datenbanktransaktionen an Entladeereignisse binden. Wenn das Entladeereignis durch das Schließen des Browsers ausgelöst wird, werden alle im Entladeereignishandler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, um Informationen über Browsersitzungen hinweg aufrechtzuerhalten, besteht darin, sie beim Öffnen des Browsers (oder einer bestimmten Seite) aus der Datenbank zu lesen, sie zu aktualisieren, wenn der Benutzer mit dem Browser interagiert, und sie dann beim Schließen des Browsers (oder der Seite) wieder in die Datenbank zu speichern. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Entladeereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, zu garantieren, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Herunterfahren-Benachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload` Ereignis hinzufügen, um den Benutzer zu warnen, wenn zum Zeitpunkt des Entladens noch keine Transaktionen abgeschlossen sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel zur Verwendung der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Literatur, damit Sie bei Bedarf weitere Informationen finden können.

### Referenz

- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Spezifikation](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Store in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Syntax für die clientseitige Datenspeicherung mit Namen/Wert-Paaren bietet und im Hintergrund IndexedDB verwendet, aber auf Web SQL (deprecated) und dann localStorage in Browsern, die IndexedDB nicht unterstützen, zurückfällt.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung mit einer schönen, einfachen Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortschrittlicher IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die durch localStorage gesichert ist, mit Serversynchronisation über http. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die größtenteils die IndexedDB-API spiegelt, aber mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfacher-kleiner (\~600B) versprechenbasierter Schlüssel-Wert-Speicher, der mit IndexedDB implementiert ist.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (\~1.3kB) TypeScript-Fassade mit versprechenbasierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-clientseitige Datenbank, die auf IndexedDB aufgesetzt werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
