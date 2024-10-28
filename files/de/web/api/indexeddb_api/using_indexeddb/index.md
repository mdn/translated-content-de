---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefunktionen unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Die Referenzdokumentation zur IndexedDB API finden Sie im Artikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten. Dieser Artikel dokumentiert die Arten von Objekten, die von IndexedDB verwendet werden, sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundmuster

Das grundlegende Muster, das IndexedDB fördert, ist das folgende:

1. Eine Datenbank öffnen.
2. Einen Objektspeicher in der Datenbank erstellen.
3. Eine Transaktion starten und eine Anfrage für eine Datenbankoperation stellen, wie z.B. Daten hinzufügen oder abrufen.
4. Auf den Abschluss der Operation warten, indem Sie auf die richtige Art von DOM-Ereignis lauschen.
5. Etwas mit den Ergebnissen tun (die im Anfrageobjekt zu finden sind).

Mit diesen großen Konzepten im Hinterkopf können wir zu konkreteren Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Eine Datenbank öffnen

Wir beginnen den ganzen Prozess folgendermaßen:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Das Öffnen einer Datenbank ist wie jede andere Operation — Sie müssen sie "anfordern".

Die Öffnungsanfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Erfolgs- oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema — die Objektspeicher in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die open-Operation erstellt und ein `onupgradeneeded`-Ereignis wird ausgelöst, und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, aber Sie eine höhere Versionsnummer angeben, wird ein `onupgradeneeded`-Ereignis sofort ausgelöst, sodass Sie ein aktualisiertes Schema im entsprechenden Handler bereitstellen können. Mehr dazu später in [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) weiter unten und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass es eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Kommazahl verwenden können, da sie sonst zum nächst niedrigeren Ganzzahlwert gerundet wird und die Transaktion möglicherweise nicht startet oder das `upgradeneeded`-Ereignis nicht ausgelöst wird. Verwenden Sie daher z. B. nicht 2.4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // Tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Handler generieren

Das erste, was Sie mit fast allen generierten Anfragen tun möchten, ist, Erfolgs- und Fehlerhandler hinzuzufügen:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgseignis (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als `target` ausgelöst. Sobald es ausgelöst wird, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgseignis als Argument aufgerufen. Andernfalls, wenn es ein Problem gab, wird ein Fehlerereignis (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) bei `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen (zumindest nicht, wenn Sie mit der API vertraut sind!). Beim Öffnen einer Datenbank gibt es jedoch einige häufige Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Web-App keine Erlaubnis zur Erstellung einer Datenbank erteilt hat. Eines der Hauptziele von IndexedDB ist es, die Speicherung großer Datenmengen für die Offline-Nutzung zu ermöglichen. (Um mehr darüber zu erfahren, wie viel Speicherplatz Sie für jeden Browser haben können, lesen Sie [Wie viel Daten können gespeichert werden? auf der Browser-Speicherquoten und Löschkriterien-Seite](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer mit Daten überflutet, daher forderten Browser früher den Benutzer auf, wenn eine gegebene Web-App zum ersten Mal versucht, eine IndexedDB zu öffnen. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem dauert der IndexedDB-Speicher in den privaten Modi der Browser nur, bis die Inkognito-Sitzung beendet wird.

Nun, vorausgesetzt, der Benutzer hat Ihrer Anfrage zur Erstellung einer Datenbank zugestimmt und Sie haben ein Erfolgseignis erhalten, um den Erfolgs-Callback auszulösen; Was kommt als nächstes? Die hier erzeugte Anfrage wurde mit einem Aufruf von `indexedDB.open()` erstellt, sodass `request.result` eine Instanz von `IDBDatabase` ist, die Sie definitiv für später speichern möchten. Ihr Code könnte in etwa so aussehen:

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

#### Fehlerverwaltung

Wie oben erwähnt, sprießen Fehlerereignisse auf. Fehlerereignisse werden auf die Anforderung gerichtet, die den Fehler generiert hat, dann sprießt das Ereignis zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, jedem Antrag Fehler-Handler hinzuzufügen, können Sie stattdessen einen einzigen Fehler-Handler für das Datenbankobjekt hinzufügen, so:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Ein häufiger möglicher Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Dies zeigt an, dass die Version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehler-Handler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer als zuvor angeben, als Sie [eine Datenbank öffnen](#eine_datenbank_öffnen)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignis-Handler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet ist. Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektspeicher erstellen:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z.B., um den `keyPath` zu ändern), dann müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die Informationen im Objektspeicher löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Upgrade der Datenbank lesen und woanders speichern.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder einen Objektspeicher mit einem Namen zu löschen, der nicht bereits existiert), führt zu einem Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich beendet wird, wird der `onsuccess`-Handler der offenen Datenbankanforderung anschließend ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstelle von Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Immer wenn ein Wert in einem Objektspeicher gespeichert wird, ist er mit einem Schlüssel verbunden. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objektspeicher einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

Die folgende Tabelle zeigt die verschiedenen Arten, wie die Schlüssel bereitgestellt werden:

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
        Dieser Objektspeicher kann jede Art von Wert halten, sogar primitive Werte wie
        Zahlen und Zeichenfolgen. Sie müssen jedes Mal ein separates Schlüsselargument angeben,
        wenn Sie einen neuen Wert hinzufügen möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Die Objekte müssen
        eine Eigenschaft mit demselben Namen wie der Schlüsselpfad haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jede Art von Wert halten. Der Schlüssel wird
        automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument angeben, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte speichern. Normalerweise wird ein Schlüssel generiert und der Wert des generierten Schlüssels wird im Objekt in
        einer Eigenschaft mit dem gleichen Namen wie dem Schlüsselpfad gespeichert. Wenn jedoch eine solche
        Eigenschaft bereits vorhanden ist, wird der Wert dieser Eigenschaft als Schlüssel verwendet
        anstatt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes für jeden Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte, keine primitiven Daten. Ein Index ermöglicht es Ihnen, die in einem Objektspeicher gespeicherten Werte mithilfe des Wertes einer Eigenschaft des gespeicherten Objekts zu durchsuchen, anstatt den Schlüssel des Objekts zu verwenden.

Zusätzlich haben Indizes die Möglichkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Indem Sie das eindeutige Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte gespeichert werden, die beide den gleichen Wert für den Schlüsselpfad des Indexes haben. Wenn Sie also beispielsweise einen Objektspeicher haben, der eine Menge von Personen enthält, und sicherstellen möchten, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index mit dem eindeutigen Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden wollen:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer als Primärschlüssel für eine Kundentabelle verwenden, weil nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen aus Gründen der Bequemlichkeit ignorieren und weitermachen.

Jetzt schauen wir uns an, wie man eine IndexedDB erstellt, um unsere Daten zu speichern:

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

Wie zuvor angegeben, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen und Indizes erstellen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode benötigt einen Namen des Speichers und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und die Art des Objektspeichers, die Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir einen Objektspeicher mit dem Namen "customers" angefordert und einen `keyPath` definiert, der die Eigenschaft ist, die ein einzelnes Objekt im Speicher eindeutig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss bei jedem im `objectStore` gespeicherten Objekt vorhanden sein.

Wir haben auch einen Index mit dem Namen "name" angefordert, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, das die Art des Indexes, den Sie erstellen möchten, verfeinert. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, schlägt dennoch nicht fehl, aber die Objekte erscheinen nicht im "name"-Index.

Wir können jetzt die gespeicherten Kundenobjekte direkt mit ihrer `ssn` aus dem Objektspeicher oder mit ihrem Namen über den Index abrufen. Um zu erfahren, wie das gemacht wird, sehen Sie sich den Abschnitt über [die Verwendung eines Indexes](#verwendung_eines_indexes) an.

### Verwendung eines Schlüsselgenerators

Das Festlegen eines `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselgenerator für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert dem Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator zuerst erstellt wird. Grundsätzlich wird der neu generierte Schlüssel um 1 gegenüber dem vorherigen Schlüssel erhöht. Die aktuelle Nummer für einen Schlüsselgenerator sinkt nie, es sei denn, es gibt einen Rückgang von Datenbankoperationen, z.B. wird die Datenbanktransaktion abgebrochen. Daher beeinflusst das Löschen eines Eintrags oder sogar das Löschen aller Einträge aus einem Objektspeicher nie den Schlüsselgenerator des Objektspeichers.

Wir können einen weiteren Objektspeicher mit dem Schlüsselgenerator wie unten erstellen:

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

Für weitere Details zum Schlüsselgenerator, siehe ["W3C Key Generators"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen kommen aus dem Datenbankobjekt, und Sie müssen angeben, welche Objektspeicher Sie abdecken möchten. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Als nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern — was das Erstellen oder Löschen von Objektspeichern oder Indizes beinhaltet — muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird geöffnet, indem die [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)-Methode mit einer angegebenen `Version` aufgerufen wird.

Um die Datensätze eines bestehenden Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem bestehenden Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore)-Methode enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen gelockerte Dauerhaftigkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Vorher wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann somit schneller als zuvor geliefert werden, allerdings besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu Datenverlusten kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Benutzer nicht weiter damit beschäftigen müssen. Wenn Sie aus irgendeinem Grund (z.B. Sie speichern kritische Daten, die nicht später neu berechnet werden können) die Dauerhaftigkeit sicherstellen müssen, können Sie eine Transaktion erzwingen, um vor der Zustellung des `complete`-Ereignisses auf die Festplatte zu schreiben, indem Sie eine Transaktion mit dem experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Geltungsbereich und den Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Geltungsbereich definieren, geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Geltungsbereichen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn es notwendig ist. Sie können mehrere `readonly`-Transaktionen mit überlappenden Geltungsbereichen gleichzeitig ausführen, aber nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Um mehr zu erfahren, siehe die Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten zur Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie sie wahrscheinlich schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente an (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, auf die sich die Transaktion bezieht. Sie können ein leeres Array übergeben, wenn Sie möchten, dass sich die Transaktion auf alle Objektspeicher bezieht, tun Sie dies jedoch nicht, da die Spezifikation besagt, dass ein leeres Array einen `InvalidAccessError` erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, da Sie eine Transaktion haben, müssen Sie ihre Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis, und vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange ausstehende Anfragen bestehen, bleibt die Transaktion aktiv. Transaktionslebenszyklen sind wirklich sehr einfach, aber es kann ein wenig Zeit in Anspruch nehmen, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie `TRANSACTION_INACTIVE_ERR`-Fehlercodes sehen, haben Sie etwas durcheinander gebracht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen erhalten: `error`, `abort` und `complete`. Wir haben über die Art und Weise gesprochen, wie Fehlerereignisse sprießen, sodass eine Transaktion Fehlerereignisse von allen Anfragen erhält, die daraus generiert werden. Ein subtiler Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er aufgetreten ist, abzubrechen. Es sei denn, Sie behandeln den Fehler, indem Sie zuerst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie dazu, über Fehler nachzudenken und diese zu behandeln, aber Sie können dem Datenbankobjekt immer einen allgemeinen Fehlerhandler hinzufügen, wenn eine feinkörnige Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf der Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen ausführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich Ihre Belastung verringern.

Jetzt, da Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus abrufen. Transaktionen ermöglichen Ihnen nur den Zugriff auf einen Objektspeicher, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer aus einem Aufruf von `add()` generierten Anfrage ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte er der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt mit demselben Schlüssel bereits in der Datenbank vorhanden ist. Wenn Sie versuchen, einen vorhandenen Eintrag zu ändern oder Ihnen es egal ist, ob bereits einer vorhanden ist, können Sie die `put()`-Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

### Holen von Daten aus der Datenbank

Jetzt, da die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Arten abrufen. Zuerst die einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, so:

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

Das ist eine Menge Code für ein "einfaches" Abrufen. Hier ist, wie Sie es etwas abkürzen können, vorausgesetzt, dass Sie Fehler auf Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie das Übergeben einer Liste von benötigten Objektspeichern in Ihrer Transaktion vermeiden und einfach den Namen als String übergeben. Da Sie auch nur aus der Datenbank lesen, benötigen Sie keine `"readwrite"`-Transaktion. Das Aufrufen von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Eine weitere Feinheit hier ist, dass Sie das Anfrageobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, da wir einige Daten abgerufen haben, ist das Aktualisieren und Zurücksenden in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Hier erstellen wir einen `objectStore` und fordern einen Kunden-Datensatz daraus an, der durch seinen `ssn`-Wert (`444-44-4444`) identifiziert wird. Wir legen das Ergebnis dieser Anfrage in einer Variablen (`data`) ab, aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz zurück in den `objectStore` zu legen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, weil wir in die Datenbank schreiben und nicht nur von ihr lesen möchten.

### Verwendung eines Cursors

Die Verwendung von `get()` erfordert, dass Sie den Schlüssel kennen, den Sie abrufen möchten. Wenn Sie durch alle Werte in Ihrem Objektspeicher gehen möchten, können Sie einen Cursor verwenden. So sieht das aus:

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

Die `openCursor()`-Funktion nimmt mehrere Argumente an. Erstens können Sie den Umfang der abgerufenen Elemente einschränken, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir gleich eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursors ist etwas Besonderes. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, also ist es `event.target.result`). Dann können die eigentlichen Schlüssel und Werte in den Eigenschaften `key` und `value` des Cursorobjekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn keine Einträge vorhanden waren, die Ihrer `openCursor()`-Anfrage entsprochen haben), erhalten Sie dennoch einen Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursorn ist, alle Objekte in einem Objektspeicher abzurufen und sie zu einem Array hinzuzufügen, so:

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
> Alternativ können Sie `getAll()` verwenden, um diesen Fall zu behandeln (und `getAllKeys()`). Der folgende Code tut genau das, was oben beschrieben ist:
>
> ```js
> objectStore.getAll().onsuccess = (event) => {
>   console.log(`Alle Kunden abgerufen: ${event.target.result}`);
> };
> ```
>
> Es gibt einen Leistungskosten, der mit dem Betrachten der `value`-Eigenschaft eines Cursors verbunden ist, weil das Objekt verzögert erstellt wird. Wenn Sie beispielsweise `getAll()` verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie sich nur für das Betrachten der Schlüssel interessieren, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()`. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwendung eines Indexes

Kundendaten mithilfe der SSN als Schlüssel zu speichern, ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies eine gute Idee in Bezug auf die Privatsphäre ist, ist eine andere Frage und liegt außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch einen Kunden nach seinem Namen suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige finden. Eine Suche auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht einzigartig, daher könnte es mehr als einen Eintrag mit dem `name` "Donna" geben. In diesem Fall erhalten Sie immer denjenigen mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn auf Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselcursor ordnet die Indexeigenschaft dem Schlüssel zu, der verwendet wurde, um das Objekt im Objektspeicher zu speichern. Die Unterschiede werden hier veranschaulicht:

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

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt erstellen und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzelnen Schlüssel zulässt, oder einen mit einer unteren oder oberen Grenze oder einem geschlossenen oder offenen Bereich. Ein geschlossener Bereich beinhaltet den angegebenen Wert/Werte, während ein offener Bereich die angegebenen Werte nicht enthält. So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstelle von aufsteigender Reihenfolge (der Standardrichtung für alle Cursors) iterieren. Die Umstellung der Richtung erfolgt, indem `prev` als zweites Argument an die `openCursor()`-Funktion übergeben wird:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur die Richtung ändern, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht einzigartig ist, kann es mehrere Einträge geben, bei denen der `name` gleich ist. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtung angeben. Wenn `nextunique` oder `prevunique` verwendet wird, wird immer der Eintrag mit dem niedrigsten Schlüssel zurückgegeben.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich "[IDBCursor Constants](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente an.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App so ändert, dass eine Versionsänderung für Ihre Datenbank erforderlich ist, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer größeren Version als der aktuellen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anforderung ausdrücklich anerkennen, bevor Sie mit dem Ändern der Datenbank beginnen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler achten, um die Situation zu handhaben, in der bereits geöffnete Apps Code initiieren können, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der Site bindet, die ihn erstellt (normalerweise die Site-Domain oder Subdomain), sodass er von keinem anderen Ursprung aus zugänglich ist.

Inhalte von Drittanbietern (z.B. Inhalte in einem {{htmlelement("iframe")}}) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass [niemals Cookies von Drittanbietern akzeptiert werden](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

## Warnung bei Browserabschaltung

Wenn der Browser heruntergefahren wird (weil der Benutzer die Option Beenden oder Schließen wählt), das Laufwerk, das die Datenbank enthält, unerwartet entfernt wird oder Berechtigungen für den Datenbankspeicher verloren gehen, passieren folgende Dinge:

1. Jede Transaktion in jeder betroffenen Datenbank (oder alle geöffneten Datenbanken, im Fall der Browserabschaltung) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jeder Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignishandler verwenden, um auf diese Ereignisse zu lauschen, sodass Sie wissen, wann eine Datenbank unerwartet geschlossen wird.

Das oben beschriebene Verhalten ist neu und ist erst ab den folgenden Browserversionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen, und es wird kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich darauf nicht verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und dass Sie in älteren Browsern nicht einmal erfahren, wenn sie nicht abgeschlossen werden. Es gibt mehrere Implikationen dieses Verhaltens.

Erstens sollten Sie darauf achten, Ihre Datenbank am Ende jeder Transaktion immer in einem konsistenten Zustand zu halten. Zum Beispiel, wenn Sie IndexedDB verwenden, um eine Liste von Elementen zu speichern, die der Benutzer bearbeiten darf, und Sie die Liste nach der Bearbeitung speichern, indem Sie den Objektspeicher leeren und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreibvorgang geschlossen wird, sodass Sie mit einer leeren Datenbank zurückbleiben. Um dies zu vermeiden, sollten Sie das Leeren und das Schreiben in einer einzigen Transaktion kombinieren.

Zweitens sollten Sie Transaktionen in keine Unload-Ereignisse einbinden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, werden alle Transaktionen, die im Unload-Ereignishandler erstellt werden, nie abgeschlossen. Ein intuitiver Ansatz, um einige Informationen über Browsersitzungen hinweg beizubehalten, besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser interagiert, und dann bei Schließen des Browsers (oder der Seite) in der Datenbank zu speichern. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Ereignishandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, sicherzustellen, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei normalem Browser-Shutdown. Siehe [Firefox-Bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Shutdown-Benachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Event hinzufügen, um den Benutzer zu warnen, wenn beim Entladen Transaktionen noch nicht abgeschlossen sind.

Zumindest mit der Ergänzung der Abbruchbenachrichtigungen und der [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Veranstaltungsebenen können Sie wissen, wann dies passiert ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel mit der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie den Quellcode](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weiterführende Literatur für Sie, um weitere Informationen zu finden, falls gewünscht.

### Referenz

- [Referenz zur IndexedDB-API](/de/docs/Web/API/IndexedDB_API)
- [Spezifikation der Indexed Database API](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Firefox-Quellcode

### Tutorials und Leitfäden

- [Datenbindung von UI-Elementen mit IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, der eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bietet, die im Hintergrund IndexedDB verwendet, auf Web SQL (veraltet) und dann auf localStorage zurückfällt in Browsern, die IndexedDB nicht unterstützen.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung über eine angenehme, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die durch localstorage gesichert ist, mit Server-Sync über http. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser unter Verwendung von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die größtenteils die IndexedDB-API widerspiegelt, jedoch mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super-einfacher-kleiner (\~600B) Promise-basierter Key-Value-Store, der mit IndexedDB implementiert ist.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Kleiner (\~1.3kB) TypeScript-Fassade mit Promise-basierter API und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL-Client-Seite-Datenbank, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Kompression und Replikation. Fügt außerdem Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
