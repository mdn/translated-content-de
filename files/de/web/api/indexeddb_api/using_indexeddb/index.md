---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, um Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline funktionieren.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zunächst den Artikel [IndexedDB-Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten. Dieser Artikel dokumentiert die Arten von Objekten, die von IndexedDB verwendet werden, sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundmuster

Das Grundmuster, das IndexedDB fördert, ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und machen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, wie z.B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie der richtigen Art von DOM-Ereignis zuhören.
5. Tun Sie etwas mit den Ergebnissen (die sich im Anfrageobjekt befinden).

Mit diesen großen Konzepten können wir zu konkreteren Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Eine Datenbank zu öffnen, ist wie jede andere Operation – Sie müssen es "anfordern".

Die Öffnungsanfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis- (Erfolg) oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB machen das Gleiche – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die Öffnungsfunktion ist eine Instanz von `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objektspeicher in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie aber eine erweiterte Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema in seinem Handler bereitzustellen. Mehr dazu weiter unten im Abschnitt [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Versionsnummern sind ganze Zahlen, daher unterliegen die übergebenen Werte einer Rundung – zum Beispiel werden Werte von 2.1 und 2.4 beide auf 2 gerundet.
> Ein Versuch, zwischen Zahlen zu aktualisieren, die auf die gleiche ganze Zahl gerundet werden, wird kein `onupgradeneeded`-Ereignis auslösen.
> Beachten Sie bitte auch den [Bereich der Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), die in JavaScript darstellbar sind, wenn Sie mit großen Versionsnummern arbeiten.

#### Generieren von Handlern

Das Erste, was Sie mit fast allen von Ihnen generierten Anfragen tun möchten, ist das Hinzufügen von Erfolgs- und Fehlerhandlern:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Wenn die Anfrage erfolgreich ist, wird das [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis ausgelöst, und die Funktion, die `onsuccess` zugewiesen ist, wird aufgerufen. Wenn die Anfrage fehlschlägt, wird das [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis ausgelöst, und die Funktion, die `onerror` zugewiesen ist, wird aufgerufen.

Die IndexedDB-API ist darauf ausgelegt, den Bedarf an Fehlerbehandlung zu minimieren, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, sobald Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem besteht darin, dass der Benutzer entschieden hat, Ihrer Web-App keine Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptdesignziele von IndexedDB besteht darin, große Datenmengen für die Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, siehe [Wie viel Daten können gespeichert werden? auf der Seite zu Browser-Speichergrenzen und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Natürlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher wurden die Benutzer früher aufgefordert, erstmals einer bestimmten Web-App den Zugriff auf IndexedDB zum Speichern zu gestatten. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem bleibt die IndexedDB-Speicherung in den Datenschutzmodi der Browser nur im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Angenommen, der Benutzer hat Ihrer Anfrage, eine Datenbank zu erstellen, zugestimmt, und Sie haben ein Erfolgsevent erhalten, um die Erfolgsrückruf-Funktion auszulösen; Was kommt als Nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, sodass `request.result` eine Instanz von `IDBDatabase` ist, und Sie wollen diese auf jeden Fall für später speichern. Ihr Code könnte so aussehen:

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

Wie bereits erwähnt, steigen Fehlerereignisse zu höheren Ebenen auf. Fehlerereignisse sind auf die Anfrage, die den Fehler erzeugt hat, gerichtet und steigen dann zur Transaktion auf, und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler auf dem Datenbankobjekt hinzufügen, so:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiges mögliches Problem beim Öffnen einer Datenbank ist `VER_ERR`. Es zeigt an, dass die Version der auf dem Datenträger gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer vorhandenen Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignishandler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet ist. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die Objektspeicher erstellen, die für diese Version der Datenbank benötigt werden:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektspeicher der vorherigen Version der Datenbank, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z. B. um den `keyPath` zu ändern), müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die im Objektspeicher enthaltenen Informationen löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Aktualisieren der Datenbank auslesen und woanders speichern.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder einen Objektspeicher mit einem Namen zu löschen, der nicht existiert), führt zu einem Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird anschließend der `onsuccess`-Handler der Anfrage zum Öffnen der Datenbank ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstatt Tabellen, und eine einzelne Datenbank kann beliebig viele Objektspeicher enthalten. Jedes Mal, wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt mehrere verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objektspeicher einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objektspeicher kann jede Art von Wert halten, auch primitive Werte wie Zahlen und Zeichenfolgen. Sie müssen ein separates Schlüsselargument bereitstellen, wann immer
        Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Die Objekte müssen
        eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jede Art von Wert enthalten. Der Schlüssel wird für
        Sie automatisch generiert, oder Sie können ein separates Schlüsselargument bereitstellen, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Normalerweise wird ein Schlüssel
        generiert und der Wert des generierten Schlüssels wird im Objekt in
        einer Eigenschaft mit demselben Namen wie der Schlüsselpfad gespeichert. Falls jedoch eine
        solche Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft anstelle der Generierung eines neuen Schlüssels verwendet.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes für jeden Objektspeicher erstellen, sofern der Objektspeicher Objekte und keine primitiven Werte enthält. Ein Index ermöglicht es Ihnen, die in einem Objektspeicher gespeicherten Werte unter Verwendung des Werts einer Eigenschaft des gespeicherten Objekts anstelle des Schlüsselwerts des Objekts abzurufen.

Darüber hinaus haben Indizes die Fähigkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Durch das Setzen des `unique`-Flags beim Erstellen des Indexes wird sichergestellt, dass keine zwei Objekte mit demselben Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie also beispielsweise einen Objektspeicher haben, der eine Gruppe von Personen enthält, und sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit gesetztem `unique`-Flag verwenden, um dies durchzusetzen.

Das klingt vielleicht verwirrend, aber dieses einfache Beispiel sollte die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kunden-Tabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Einfachheit halber ignorieren und fortfahren.

Schauen wir uns nun an, wie wir eine IndexedDB erstellen, um unsere Daten zu speichern:

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

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode erfordert einen Namen für den Speicher und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen erlaubt, wichtige optionale Eigenschaften zu definieren und die Art des Objektspeichers zu verfeinern, den Sie erstellen möchten. In unserem Fall haben wir einen Objektspeicher mit dem Namen "customers" und einen `keyPath` definiert, welcher die Eigenschaft ist, die ein individuelles Objekt im Speicher einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch einen Index mit dem Namen "name" angefordert, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, welches die Art des gewünschten Indexes verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, wird dennoch erfolgreich durchgeführt, aber die Objekte erscheinen nicht im "name"-Index.

Wir können nun die gespeicherten Kundenobjekte direkt über ihre `ssn` aus dem Objektspeicher oder über ihren Namen mit dem Index abrufen. Um zu sehen, wie das funktioniert, siehe den Abschnitt über das [Verwenden eines Indexes](#verwenden_eines_index).

### Verwenden eines Schlüsselgenerators

Das Setzen eines `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselgenerator für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert dem Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator wird nie verringert, außer durch das Zurücksetzen von Datenbankoperationen, beispielsweise wenn eine Datenbanktransaktion abgebrochen wird. Daher hat das Löschen eines Eintrags oder sogar das Leeren aller Einträge eines Objektspeichers keinen Einfluss auf dessen Schlüsselgenerator.

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

Bevor Sie etwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen stammen vom Datenbankobjekt und Sie müssen angeben, welche Objektspeicher Sie für die Transaktion Zugriff benötigen. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten halten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektspeichern oder Indizes umfasst – muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufruf der Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer `version` geöffnet.

Um die Datensätze eines vorhandenen Objektspeichers zu lesen, kann die Transaktion entweder im `readonly` oder `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Solche Transaktionen öffnen Sie mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Bereich, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig öffnen Transaktionen, bei denen kein Modus angegeben ist, im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702)). Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem das Betriebssystem darum gebeten wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor ausgeliefert werden, jedoch besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Systemleistung unterbrochen wird, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Anwender darüber keine Gedanken machen. Wenn Sie die Haltbarkeit aus irgendeinem Grund sicherstellen müssen (z.B. weil Sie kritische Daten speichern, die später nicht mehr berechnet werden können), können Sie eine Transaktion zwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis ausgelöst wird, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Bereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Geben Sie beim Definieren des Bereichs nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Bereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn dies erforderlich ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Bereichen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten zur Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, dann möchten Sie wahrscheinlich darauf schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die Funktion `transaction()` nimmt zwei Argumente an (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass sich die Transaktion über alle Objektspeicher erstreckt. Tun Sie es aber nicht, da die Spezifikation besagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine read-only Transaktion. Da Sie hier darauf schreiben wollen, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, wo Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind sehr eng mit der Event-Schleife verbunden. Wenn Sie eine Transaktion durchführen und zur Event-Schleife zurückkehren, ohne sie zu verwenden, dann wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis, und falls die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Event-Schleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Die Lebensdauer von Transaktionen ist wirklich sehr einfach, aber es könnte eine Weile dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie beginnen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, haben Sie etwas vermasselt.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben bereits darüber gesprochen, wie Fehlerereignisse auf höhere Ebenen aufsteigen, sodass eine Transaktion Fehlerereignisse von allen Anfragen erhält, die von ihr generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Sofern Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` für das Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie dazu, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen allgemeinen Fehlerhandler zur Datenbank hinzufügen, wenn die detaillierte Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder wenn Sie `abort()` für die Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird für die Transaktion ausgelöst. Andernfalls erhalten Sie, nachdem alle ausstehenden Anfragen abgeschlossen sind, ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann es sicherlich Ihrer geistigen Gesundheit zugutekommen, die Transaktion zu verfolgen, anstatt einzelne Anfragen.

Jetzt, wo Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus erhalten. Transaktionen ermöglichen es Ihnen nur, einen Objektspeicher zu haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `Resultat` einer aus einem Aufruf von `add()` generierten Anfrage ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte er der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die Funktion `add()` erfordert, dass kein Objekt bereits in der Datenbank mit dem gleichen Schlüssel existiert. Wenn Sie versuchen, einen vorhandenen Eintrag zu ändern, oder es Ihnen egal ist, ob schon einer existiert, können Sie die Funktion `put()` verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Jetzt, wo die Datenbank einige Informationen enthält, können Sie sie auf mehrere Arten abrufen. Zuerst die einfache `get()`. Sie müssen den Schlüssel bereitstellen, um den Wert abzurufen, so:

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

Das ist eine Menge Code für einen "einfachen" Abruf. So können Sie es etwas abkürzen, vorausgesetzt, dass Sie Fehler auf Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie das Übergeben einer Liste von Objektspeichern, die Sie in Ihrer Transaktion benötigen, vermeiden und einfach den Namen als Zeichenfolge übergeben. Außerdem lesen Sie nur von der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Der Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiterer Punkt: Sie speichern das Anfrageobjekt nicht tatsächlich in einer Variable. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, wo wir einige Daten abgerufen haben, ist das Aktualisieren und Wiedereinfügen in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir also einen `objectStore` und fordern einen Kundendatensatz von ihm an, identifiziert durch seinen ssn-Wert (`444-44-4444`). Wir legen dann das Ergebnis dieser Anfrage in einer Variable (`data`) ab, aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` einzufügen, wodurch der vorherige Wert überschrieben wird.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir auf die Datenbank schreiben möchten und nicht nur von ihr lesen möchten.

### Verwenden eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektspeicher durchlaufen möchten, können Sie einen Cursor verwenden. So sieht es aus:

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

Die `openCursor()`-Funktion nimmt mehrere Argumente an. Erstens können Sie den Bereich von Elementen, die abgerufen werden sollen, mit einem Schlüsselbereichsobjekt einschränken, auf das wir gleich noch eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursors ist etwas Besonderes. Der Cursor selbst ist das `Resultat` der Anfrage (oben verwenden wir die Kurzform, also ist es `event.target.result`). Dann können der tatsächliche Schlüssel und Wert in den `key`- und `value`-Eigenschaften des Cursor-Objekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gab, die Ihre `openCursor()`-Anfrage erfüllten), erhalten Sie trotzdem einen Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursors ist das Abrufen aller Objekte in einem Objektspeicher und das Hinzufügen zu einem Array, wie folgt:

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
> Alternativ können Sie in diesem Fall `getAll()` (und `getAllKeys()`) verwenden. Der folgende Code macht genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungskosten, der mit der Betrachtung der `value`-Eigenschaft eines Cursors verbunden ist, da das Objekt faul erstellt wird. Wenn Sie zum Beispiel `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, sich jeden Schlüssel anzusehen, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwenden eines Index

Kundendaten mit der SSN als Schlüssel zu speichern, ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies eine gute Idee für den Datenschutz ist, ist eine andere Frage und außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch einen Kunden nach seinem Namen suchen müssen, müssten Sie jede SSN in der Datenbank durchlaufen, bis Sie die richtige finden. Eine solche Suche wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, sodass es mehr als einen Eintrag mit dem `name`-Wert `"Donna"` geben kann. In diesem Fall erhalten Sie immer denjenigen mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursors auf Indizes öffnen. Ein normaler Cursor ordnet die Index-Eigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselcursor ordnet die Index-Eigenschaft dem Schlüssel zu, der zum Speichern des Objekts im Objektspeicher verwendet wird. Die Unterschiede werden hier veranschaulicht:

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

Der Index kann auch auf mehreren Eigenschaften erstellt werden, sodass Sie Datensätze mit einer Kombination von Werten suchen können, z. B. eine Person sowohl nach ihrem Namen als auch nach ihrer E-Mail zu finden. Um einen zusammengesetzten Index zu erstellen, geben Sie beim Aufruf von `createIndex` ein Array von Eigenschaftsnamen als Schlüssel-Pfad an. Dann können Sie den Index abfragen, indem Sie ein Array von Werten in derselben Reihenfolge übergeben.

Stellen Sie zunächst sicher, dass Sie den Index in `request.onupgradeneeded` erstellt haben:

```js
const index = objectStore.createIndex("name_email", ["name", "email"]);
```

Dann können Sie den Index wie folgt abfragen:

```js
const index = objectStore.index("name_email");

index.get(["Donna", "donna@home.org"]).onsuccess = (event) => {
  console.log(event.target.result);
  // {ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org'}
};
```

### Festlegen des Bereichs und der Richtung von Cursors

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen möchten, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt erstellen und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen bestimmten Schlüssel zulässt, oder einen, der ein unteres oder oberes Limit hat, oder einen, der sowohl ein unteres als auch ein oberes Limit hat. Das Limit kann "geschlossen" sein (d.h. der Schlüsselbereich schließt die angegebenen Werte ein) oder "offen" (d.h. der Schlüsselbereich schließt die angegebenen Werte nicht ein). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge statt in aufsteigender Reihenfolge (die Standard-Richtung für alle Cursors) iterieren. Die Richtungsänderung erfolgt, indem Sie der `openCursor()`-Funktion `prev` als zweites Argument übergeben:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach `null` als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, können mehrere Einträge mit demselben `name` vorhanden sein. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht vorkommen kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie doppelte Einträge bei der Cursoriteration über Indizes ausschließen möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter übergeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte beachten Sie "[IDBCursor Constants](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn Ihre Web-App in einer Weise geändert wird, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie überlegen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen Tab lädt. Wenn Sie `open()` mit einer höheren Version als der aktuellen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anfrage ausdrücklich anerkennen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler hören, um die Situation zu bewältigen, in der bereits geöffnete Apps möglicherweise Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, aber mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an die Herkunft der Website bindet, die ihn erstellt hat (normalerweise ist dies die Domäne oder Subdomäne der Website), sodass er von keiner anderen Herkunft aus zugänglich ist.

Inhalte von Drittfenstern (z.B. {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass [niemals Cookies von Drittanbietern akzeptiert werden](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox Bug 1147821](https://bugzil.la/1147821)).

## Warnung bei Browser-Ausfall

Wenn der Browser heruntergefahren wird (weil der Benutzer die Optionen "Beenden" oder "Exit" gewählt hat), das Laufwerk, das die Datenbank enthält, unerwartet entfernt wird oder Berechtigungen für den Datenbankspeicher verloren gehen, passieren folgende Dinge:

1. Jede Transaktion in jeder betroffenen Datenbank (oder alle offenen Datenbanken im Fall des Herunterfahrens des Browsers) wird mit einem `AbortError` abgebrochen. Die Wirkung ist dieselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) für jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung repräsentiert, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu hören, sodass Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist nur ab den folgenden Browser-Versionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browser-Versionen werden die Transaktionen stillschweigend abgebrochen und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wird ausgelöst, sodass es keine Möglichkeit gibt, einen unerwarteten Datenbankschluss zu erkennen.

Da der Benutzer den Browser jederzeit schließen kann, bedeutet das, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und bei älteren Browsern werden Sie nicht einmal darüber informiert, wenn sie nicht abgeschlossen wird. Dies hat mehrere Auswirkungen auf dieses Verhalten.

Erstens sollten Sie darauf achten, Ihre Datenbank am Ende jeder Transaktion immer in einem konsistenten Zustand zu belassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die der Benutzer bearbeiten kann. Sie speichern die Liste nach dem Bearbeiten, indem Sie den Objektspeicher leeren und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben geschlossen wird, was Ihnen eine leere Datenbank hinterlässt. Um dies zu vermeiden, sollten Sie das Löschen und das Schreiben in eine einzelne Transaktion kombinieren.

Zweitens sollten Sie niemals Datenbanktransaktionen an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle in dem Unload-Ereignishandler erstellten Transaktionen nie abgeschlossen. Ein intuitiver Ansatz, um bestimmte Informationen über Browsersitzungen hinweg aufrechtzuerhalten, besteht darin, sie aus der Datenbank abzurufen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und sie dann in der Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Ereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keinen Weg, um sicherzustellen, dass IndexedDB-Transaktionen abgeschlossen werden, selbst mit einem normalen Herunterfahren des Browsers. Siehe [Firefox Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Herunterfahrensbenachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn bei dem Entladen noch ausstehende Transaktionen vorhanden sind.

Zumindest mit der Hinzufügung der Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies passiert ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel unter Verwendung der IndexedDB-API. Das Beispiel verwendet IndexedDB zum Speichern und Abrufen von Publikationen.

- [Beispiel ausprobieren](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Den Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Literatur für Sie, um bei Bedarf weitere Informationen zu finden.

### Referenz

- [IndexedDB-API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Spezifikation der Indexed Database API](https://w3c.github.io/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/firefox-main/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Benutzerschnittstellenelemente mit IndexedDB binden (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Namens-Wert-Syntax für die Client-seitige Datenspeicherung bereitstellt, die im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann auf localStorage zurückfällt, wenn IndexedDB in Browsern nicht unterstützt wird.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung durch eine schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortschrittlicher IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die mit Localstorage und Serversynchronisation über HTTP unterstützt wird. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine Client-seitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die größtenteils die IndexedDB-API nachbildet, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein extrem einfaches, kleines (\~600B) versprechen-basiertes Schlüssel-Wert-Speicher, das mit IndexedDB implementiert ist.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (\~1.3kB) TypeScript-Fassade mit versprechen-basierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-Datenbank, die oben auf IndexedDB verwendet werden kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
