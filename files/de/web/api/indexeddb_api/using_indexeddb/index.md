---
title: Verwenden von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 62ce78b5c89fd809e00683b62f8e6a116990f82d
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, um Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit reichhaltigen Abfragefähigkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten. Dieser Artikel dokumentiert die Arten von Objekten, die von IndexedDB verwendet werden, sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB fördert, ist folgendes:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objekt-Store in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, z. B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie auf die richtige Art von DOM-Ereignis hören.
5. Machen Sie etwas mit den Ergebnissen (die sich im Anfrageobjekt befinden).

Mit diesen großen Konzepten im Hinterkopf können wir uns konkreteren Dingen zuwenden.

## Erstellen und Strukturieren des Stores

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess so:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation - Sie müssen sie "anfragen".

Die Öffnungsanfrage öffnet die Datenbank nicht sofort und startet auch nicht die Transaktion. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder einem Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der Open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der Open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema - die Objekt-Stores in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie aber eine aktualisierte Versionsnummer angeben, wird ein `onupgradeneeded`-Ereignis sofort ausgelöst, damit Sie im Handler ein aktualisiertes Schema bereitstellen können. Mehr dazu später im Abschnitt [Erstellen oder Aktualisieren der Datenbankversion](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass es eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Gleitkommazahl verwenden können, da sie ansonsten auf die nächstniedrigere Ganzzahl gerundet wird und die Transaktion möglicherweise nicht startet, noch das `upgradeneeded`-Ereignis ausgelöst wird. Verwenden Sie also beispielsweise nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // Tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlern

Das Erste, was Sie mit fast allen von Ihnen generierten Anfragen tun möchten, ist, Erfolgs- und Fehler-Handler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgsevent (das ist ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als Ziel ausgelöst. Sobald es ausgelöst ist, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsevent als Argument ausgelöst. Andernfalls, wenn es ein Problem gibt, wird ein Fehlerevent (das ist ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) auf `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerevent als Argument aus.

Die IndexedDB-API ist speziell darauf ausgelegt, den Bedarf an Fehlerbehandlung zu minimieren, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Webanwendung nicht die Erlaubnis erteilt hat, eine Datenbank zu erstellen. Eines der Hauptziele des Designs von IndexedDB ist es, große Mengen von Daten für die Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, sehen Sie sich [Wie viel Daten können gespeichert werden? auf der Seite über Browser-Speicherquoten und Räumungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored) an.)

Natürlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt. Daher hat der Browser den Benutzer in der Vergangenheit zum ersten Mal dazu aufgefordert, einer gegebenen Web-App das Öffnen einer IndexedDB zur Speicherung zu erlauben oder abzulehnen. Auch die IndexedDB-Speicherinhalte im privaten Modus der Browser bleiben nur im Speicher bestehen, bis die Inkognito-Sitzung geschlossen wird.

Wenn der Benutzer Ihrer Anfrage zur Erstellung einer Datenbank zugestimmt hat und Sie ein Erfolgsevent erhalten haben, um den Erfolg-Callback auszulösen: Was kommt als nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie sollten diese definitiv für später speichern. Ihr Code könnte dann so aussehen:

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

Wie oben erwähnt, steigen Fehlerereignisse nach oben. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler erzeugt hat, dann steigt das Ereignis zur Transaktion auf und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerhandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler auf der Datenbank hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der häufigsten möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Es zeigt an, dass die auf der Festplatte gespeicherte Version der Datenbank _größer_ ist als die, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer vorhandenen Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange` Ereignishandler gesendet, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet ist. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die benötigten Objekt-Stores für diese Version der Datenbank erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objekt-Stores der vorherigen Version der Datenbank, sodass Sie diese Objekt-Stores nicht erneut erstellen müssen. Sie müssen nur neue Objekt-Stores erstellen oder Objekt-Stores der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen vorhandenen Objekt-Store ändern müssen (z. B. um den `keyPath` zu ändern), müssen Sie den alten Objekt-Store löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die im Objekt-Store gespeicherten Informationen löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie auslesen und vor dem Upgrade der Datenbank an einem anderen Ort speichern.)

Der Versuch, einen Objekt-Store mit einem bereits vorhandenen Namen zu erstellen (oder den Versuch, einen nicht vorhandenen Objekt-Store zu löschen), führt zu einem Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der Datenbankanfrage geöffnet und ausgelöst.

### Strukturieren der Datenbank

Nun zur Struktur der Datenbank. IndexedDB verwendet Objekt-Stores anstelle von Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objekt-Stores enthalten. Immer wenn ein Wert in einem Objekt-Store gespeichert wird, ist er mit einem Schlüssel verbunden. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel geliefert werden kann, abhängig davon, ob der Objekt-Store einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Möglichkeiten, wie die Schlüssel geliefert werden:

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
      <td>No</td>
      <td>No</td>
      <td>
        Dieser Objekt-Store kann jede Art von Wert speichern, sogar primitive Werte wie
        Zahlen und Zeichenfolgen. Sie müssen ein separates Schlüsselargument liefern, wann immer
        Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>No</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte speichern. Die Objekte müssen
        eine Eigenschaft mit demselben Namen wie der Key Path haben.
      </td>
    </tr>
    <tr>
      <td>No</td>
      <td>Yes</td>
      <td>
        Dieser Objekt-Store kann jede Art von Wert speichern. Der Schlüssel wird für
        Sie automatisch generiert, oder Sie können ein separates Schlüsselargument liefern, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Yes</td>
      <td>Yes</td>
      <td>
        Dieser Objekt-Store kann nur JavaScript-Objekte speichern. Normalerweise wird ein Schlüssel
        generiert und der Wert des generierten Schlüssels wird im Objekt in
        einer Eigenschaft mit demselben Namen wie der Key Path gespeichert. Wenn jedoch eine solche
        Eigenschaft bereits existiert, wird der Wert dieser Eigenschaft als Schlüssel
        verwendet, anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objekt-Store erstellen, sofern der Objekt-Store Objekte und keine primitiven Datentypen enthält. Ein Index ermöglicht es Ihnen, die in einem Objekt-Store gespeicherten Werte anhand des Werts einer Eigenschaft des gespeicherten Objekts abzufragen, anstatt anhand des Schlüssels des Objekts.

Darüber hinaus haben Indizes die Fähigkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Durch Einstellen des einzigartigen Flags beim Erstellen des Index stellt der Index sicher, dass keine zwei Objekte mit demselben Wert für den Key Path des Indexes gespeichert werden. Also, wenn Sie beispielsweise einen Objekt-Store haben, der eine Menge von Personen hält, und Sie sicherstellen wollen, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index mit gesetztem einzigartigen Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zuerst definieren wir einige Kundendaten für unser Beispiel:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer nicht als Primärschlüssel für eine Kundentabelle verwenden, weil nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum speichern anstelle ihres Alters, aber ignorieren wir diese unglücklichen Entscheidungen der Einfachheit halber und machen weiter.

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

Wie zuvor erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. In ihm können Sie Objekt-Stores erstellen und löschen sowie Indizes erstellen und entfernen.

Objekt-Stores werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Stores und ein Parameterobjekt an. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, weil es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objekt-Stores zu verfeinern, den Sie erstellen möchten. In unserem Fall haben wir um ein Objekt-Store namens "customers" gebeten und einen `keyPath` definiert, der die Eigenschaft ist, die ein einzelnes Objekt im Store einzigartig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss bei jedem Objekt, das im `objectStore` gespeichert wird, vorhanden sein.

Wir haben auch um einen Index namens "name" gebeten, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Ebenso wie `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, das den Typ des Index, den Sie erstellen möchten, verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, gelingt trotzdem, aber die Objekte werden nicht im "name"-Index erscheinen.

Wir können jetzt die gespeicherten Kundenobjekte mit ihrer `ssn` direkt aus dem Objekt-Store abrufen oder mit ihrem Namen unter Verwendung des Indexes. Um zu lernen, wie dies getan wird, siehe den Abschnitt über [Verwendung eines Indexes](#verwendung_eines_indexes).

### Verwenden eines Key Generators

Das Einrichten eines `autoIncrement`-Flags beim Erstellen des Objekt-Stores würde den Key Generator für diesen Objekt-Store aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Key Generator würde der Schlüssel automatisch generiert werden, während Sie den Wert zum Objekt-Store hinzufügen. Die aktuelle Nummer eines Key Generators wird immer auf 1 gesetzt, wenn der Objekt-Store für diesen Key Generator zuerst erstellt wird. Im Wesentlichen wird der neu automatisch generierte Schlüssel um 1 erhöht, basierend auf dem vorherigen Schlüssel. Die aktuelle Nummer eines Key Generators verringert sich nie, außer durch das Rückgängigmachen von Datenbankoperationen, beispielsweise wird die Datenbanktransaktion abgebrochen. Daher wirkt sich das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objekt-Store niemals auf den Key Generator des Objekt-Stores aus.

Wir können einen weiteren Objekt-Store mit dem Key Generator wie unten erstellen:

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

Für weitere Details zum Key Generator siehe ["W3C Key Generators"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank tun können, müssen Sie eine Transaktion starten. Transaktionen stammen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objekt-Stores Sie mit der Transaktion abdecken möchten. Sobald Sie sich innerhalb der Transaktion befinden, können Sie auf die Objekt-Stores zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Als Nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder ob Sie nur aus ihr lesen müssen. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern - was das Erstellen oder Löschen von Objekt-Stores oder Indizes beinhaltet - muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird geöffnet, indem die Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer angegebenen `Version` aufgerufen wird.

Um die Datensätze eines vorhandenen Objekt-Stores zu lesen, kann die Transaktion entweder im `readonly`- oder im `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objekt-Store vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als ein Array von Objekt-Stores, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie auf Ihren Objekt-Store zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, werden Transaktionen im `readonly`-Modus geöffnet.

> [!NOTE]
> Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien zur Leistungssteigerung (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Vorher wurde in einer `readwrite`-Transaktion nur ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Event ausgelöst, wenn alle Daten garantiert auf die Festplatte gespült wurden. In Firefox 40+ wird das `complete`-Event ausgelöst, nachdem dem Betriebssystem gesagt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Event kann folglich schneller als zuvor geliefert werden, jedoch gibt es eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder ein Stromausfall eintritt, bevor die Daten auf die Festplatte gespült werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter um diese Angelegenheit kümmern müssen. Wenn Sie aus irgendeinem Grund (z. B. wenn Sie kritische Daten speichern, die später nicht mehr berechnet werden können) Haltbarkeit sicherstellen müssen, können Sie eine Transaktion zwingen, sie auf die Festplatte zu schreiben, bevor das `complete`-Event geliefert wird, indem Sie eine Transaktion mit dem experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Geltungsbereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Geltungsbereich definieren, geben Sie nur die Objekt-Stores an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Geltungsbereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn dies erforderlich ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Geltungsbereichen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objekt-Store haben. Um mehr zu erfahren, siehe die Definition der [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich Daten darin speichern. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die Funktion `transaction()` nimmt zwei Argumente an (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste der Objekt-Stores, die von der Transaktion abgedeckt werden. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objekt-Stores abdeckt, aber tun Sie es nicht, weil die Spezifikation besagt, dass ein leeres Array einen InvalidAccessError generieren sollte. Wenn Sie für das zweite Argument nichts angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Nun, da Sie eine Transaktion haben, müssen Sie deren Lebensdauer verstehen. Transaktionen sind eng mit der Ereignisschleife verknüpft. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, dann wird die Transaktion inaktiv. Der einzige Weg, um die Transaktion aktiv zu halten, ist, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, sofern die Anfrage erfolgreich ist, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Die Lebensdauern von Transaktionen sind wirklich sehr einfach, aber es kann einige Zeit dauern, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, dann haben Sie etwas durcheinander gebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben die Art und Weise besprochen, wie Fehlerereignisse aufsteigen, sodass eine Transaktion Fehlerereignisse von allen Anfragen empfängt, die daraus generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Es sei denn, Sie bearbeiten den Fehler, indem Sie zuerst `stopPropagation()` beim Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie dazu, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen pauschalen Fehlerhandler zur Datenbank hinzufügen, wenn eine fein granulare Fehlerbehandlung zu mühsam ist. Wenn Sie ein Fehlerereignis nicht behandeln oder wenn Sie `abort()` bei der Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis bei der Transaktion ausgelöst. Andernfalls erhalten Sie ein `complete`-Ereignis, sobald alle ausstehenden Anfragen abgeschlossen sind. Wenn Sie viele Datenbankoperationen durchführen, kann das Nachverfolgen der Transaktion anstelle einzelner Anfragen sicherlich zu Ihrer geistigen Gesundheit beitragen.

Jetzt, wo Sie eine Transaktion haben, müssen Sie den Objekt-Store daraus holen. Transaktionen erlauben Ihnen nur den Zugriff auf den Objekt-Store, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die durch einen Aufruf von `add()` generiert wurde, ist der Schlüssel des Werts, der hinzugefügt wurde. In diesem Fall sollte es der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objekt-Store die `ssn`-Eigenschaft für den Key Path verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass sich noch kein Objekt mit demselben Schlüssel in der Datenbank befindet. Wenn Sie versuchen, einen vorhandenen Eintrag zu ändern oder es Ihnen egal ist, ob bereits einer existiert, können Sie die `put()`-Funktion verwenden, wie im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) unten gezeigt.

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

Jetzt, da die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Weise abrufen. Zuerst die einfache `get()`-Methode. Sie müssen den Schlüssel angeben, um den Wert abzurufen, folgendermaßen:

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

Das ist eine Menge Code für einen "einfachen" Abruf. Hier ist, wie Sie es ein wenig abkürzen können, vorausgesetzt, Sie behandeln Fehler auf der Datenbankebene:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objekt-Store gibt, können Sie die Liste der Objekt-Stores, die Sie in Ihrer Transaktion benötigen, weglassen und einfach den Namen als Zeichenfolge übergeben. Außerdem lesen Sie nur aus der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Wenn Sie `transaction()` ohne angegebenen Modus aufrufen, erhalten Sie eine `"readonly"`-Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anfrageobjekt nicht tatsächlich in eine Variable speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, da wir einige Daten abgerufen haben, ist es ziemlich einfach, sie zu aktualisieren und wieder in die IndexedDB einzufügen. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir also einen `objectStore` und fordern einen Kundendatensatz daraus an, der durch seinen ssn-Wert (`444-44-4444`) identifiziert wird. Wir legen dann das Ergebnis dieser Anfrage in einer Variable ab (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz zurück in den `objectStore` zu legen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion spezifizieren, weil wir in die Datenbank schreiben möchten, und nicht nur aus ihr lesen.

### Verwenden eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objekt-Store Schritt für Schritt durchgehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die `openCursor()`-Funktion nimmt mehrere Argumente an. Zuerst können Sie den Bereich der abgerufenen Elemente einschränken, indem Sie ein Key-Range-Objekt verwenden, auf das wir in Kürze eingehen. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgsrückruf für Cursor ist ein wenig speziell. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also ist es `event.target.result`). Dann können der tatsächliche Schlüssel und der Wert in den Eigenschaften `key` und `value` des Cursor-Objekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn keine Einträge vorhanden waren, die Ihrer `openCursor()`-Anforderung entsprechen), erhalten Sie immer noch einen Erfolgsevent, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursorn besteht darin, alle Objekte in einem Objekt-Store abzurufen und zu einem Array hinzuzufügen, wie dieses:

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
> Alternativ können Sie `getAll()` verwenden, um diesen Fall zu behandeln (und `getAllKeys()`). Der folgende Code tut genau dasselbe wie oben:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Got all customers: ${event.target.result}`);
> };
> ```
>
> Es gibt eine Leistungskosten, die mit dem Betrachten der `value`-Eigenschaft eines Cursors verbunden ist, weil das Objekt nach Bedarf erstellt wird. Wenn Sie beispielsweise `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, sich die Schlüssel anzusehen, ist es effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objekt-Store zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwendung eines Indexes

Das Speichern von Kundendaten unter Verwendung der SSN als Schlüssel ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies eine gute Idee für den Datenschutz ist, ist eine andere Frage und außerhalb des Geltungsbereichs dieses Artikels.) Wenn Sie jedoch einen Kunden nach Namen durchsuchen müssen, müssen Sie alle SSNs in der Datenbank durchgehen, bis Sie die richtige gefunden haben. Die Suche auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht einzigartig, sodass es mehr als einen Eintrag mit dem `name` auf `"Donna"` gesetzt geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Typen von Cursor auf Indizes öffnen. Ein normaler Cursor ordnet die Index-Eigenschaft dem Objekt im Objekt-Store zu. Ein Schlüssel-Cursor ordnet die Index-Eigenschaft dem Schlüssel zu, der verwendet wurde, um das Objekt im Objekt-Store zu speichern. Die Unterschiede werden hier veranschaulicht:

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

### Angeben des Bereichs und der Richtung von Cursors

Wenn Sie den Bereich der in einem Cursor angezeigten Werte einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzelnen Schlüssel zulässt, oder einen mit einer unteren oder oberen Begrenzung oder einen mit sowohl einer unteren als auch einer oberen Begrenzung. Die Begrenzung kann "geschlossen" sein (d. h. der Schlüsselbereich umfasst die angegebenen Werte) oder "offen" (d. h. der Schlüsselbereich umfasst die angegebenen Werte nicht). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstelle von aufsteigender Reihenfolge iterieren (die Standardrichtung für alle Cursors). Um die Richtung zu ändern, geben Sie `prev` als zweites Argument in die `openCursor()`-Funktion ein:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Richtungsänderung angeben möchten, die angezeigten Ergebnisse jedoch nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht einzigartig ist, kann es mehrere Einträge geben, bei denen `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objekt-Stores nicht auftreten kann, da der Schlüssel immer einzigartig sein muss. Wenn Sie duplikate Einträge während der Cursor-Iteration über Indizes vermeiden möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtungsparameter angeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist immer der Eintrag mit dem niedrigsten Schlüssel derjenige, der zurückgegeben wird.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie "[IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Argumente der Richtung.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn Ihre Web-App sich so verändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen Tab lädt. Wenn Sie `open()` mit einer höheren Version als die tatsächliche Version der Datenbank aufrufen, müssen alle anderen geöffneten Datenbanken die Anforderung explizit bestätigen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis diese geschlossen sind oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler achten, um die Situation zu handhaben, in der bereits geöffnete Apps Code ausführen könnten, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch unter Verwendung einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Prinzip gleichen Ursprungs, was bedeutet, dass es die Speicherung an den Ursprung der Seite bindet, die sie erstellt (normalerweise ist dies die Domain oder Subdomain der Seite), sodass sie von keinem anderen Ursprung aus zugänglich ist.

Inhalte von Drittanbieterfenstern (z. B. {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/de/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnhinweise zum Herunterfahren des Browsers

Wenn der Browser heruntergefahren wird (weil der Benutzer die Option Beenden oder Verlassen gewählt hat), die Festplatte mit der Datenbank unerwartet entfernt wird, oder die Berechtigungen für den Datenbankspeicher verloren gehen, passiert Folgendes:

1. Jede Transaktion bei jeder betroffenen Datenbank (oder allen offenen Datenbanken im Falle eines Browser-Shutdowns) wird mit einem `AbortError` abgebrochen. Der Effekt ist der gleiche, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jeder Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu hören, um zu wissen, wann eine Datenbank unerwartet geschlossen wurde.

Das oben beschriebene Verhalten ist neu und ist erst ab den folgenden Browser-Releases verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen und es wird kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit verlassen kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und dass Sie bei älteren Browsern nicht einmal darüber informiert werden, wenn sie nicht abgeschlossen wird. Es gibt mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank immer in einem konsistenten Zustand am Ende jeder Transaktion zu lassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die der Benutzer bearbeiten darf. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objekt-Store leeren und dann die neue Liste ausgeben. Wenn Sie den Objekt-Store in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren aber vor dem Schreiben geschlossen wird, was Ihnen eine leere Datenbank hinterlässt. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in einer einzigen Transaktion kombinieren.

Zweitens sollten Sie Datenbanktransaktionen niemals an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle in dem Unload-Events-Handler erstellten Transaktionen niemals abgeschlossen. Ein intuitiver Ansatz, einige Informationen über Browsersitzungen hinweg zu verwalten, besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, wenn der Benutzer mit dem Browser interagiert, und sie dann in die Datenbank zu speichern, wenn der Browser (oder die Seite) schließt. Dies funktioniert jedoch nicht. Die Datenbanktransaktionen werden im Unload-Event-Handler erstellt, aber weil sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, sicherzustellen, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Herunterfahren des Browsers. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Herunterfahren-Benachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Event hinzufügen, um den Benutzer zu warnen, wenn zum Zeitpunkt des Unloadings noch Transaktionen nicht abgeschlossen sind.

Zumindest mit dem Hinzufügen von Abbruchbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies passiert ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel mit der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Beispiel ausprobieren](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterlesen, um weitere Informationen zu erhalten, falls gewünscht.

### Referenz

- [IndexedDB API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API-Spezifikation](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — The Store in Your Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bereitstellt, das im Hintergrund IndexedDB verwendet, aber auf Web SQL (veraltet) und dann auf localStorage zurückgreift, wenn IndexedDB in Browsern nicht unterstützt wird.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung über eine schöne, einfache Syntax erlaubt.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage gesichert und über http mit dem Server synchronisiert wird. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine kleine Bibliothek, die größtenteils die IndexedDB-API spiegelt, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein supereinfacher, kleiner (\~600B) promises-basierter Keyval-Speicher, implementiert mit IndexedDB.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine kleine (\~1.3kB) TypeScript-Fassade mit promises-basierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-Datenbank, die auf IndexedDB aufgebaut werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
