---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen erlaubt, Webanwendungen mit komplexen Abfragefähigkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können Ihre Anwendungen sowohl online als auch offline arbeiten.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zuerst den Artikel zu den [Schlüsseleigenschaften und grundlegenden Begriffen von IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Für die Referenzdokumentation zur IndexedDB-API siehe den Artikel zur [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und deren Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundmuster

Das Grundmuster, das IndexedDB empfiehlt, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie eine Anfrage, um eine Datenbankoperation durchzuführen, wie z. B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie auf den Abschluss der Operation, indem Sie auf die richtige Art von DOM-Ereignis hören.
5. Machen Sie etwas mit den Ergebnissen (die Sie im Anfrageobjekt finden können).

Mit diesen großen Konzepten im Kopf, können wir uns konkreteren Dingen zuwenden.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess folgendermaßen:

```js
// Let us open our database
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Haben Sie das gesehen? Eine Datenbank zu öffnen ist wie jede andere Operation – Sie müssen sie "anfordern".

Die offene Anfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis (Erfolg) oder einem Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis der open-Funktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – die Objektspeicher in der Datenbank und ihre Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die open-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie aber eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema im Handler bereitzustellen. Mehr dazu später in [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten, und auf der Referenzseite [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open).

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass es eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Fließkommazahl verwenden können, sonst wird sie auf die nächste niedrigere Ganzzahl gerundet und die Transaktion startet möglicherweise nicht, und das `upgradeneeded`-Ereignis wird möglicherweise nicht ausgelöst. Verwenden Sie also zum Beispiel nicht 2,4 als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // tun Sie dies nicht, da die Version auf 2 gerundet wird`

#### Generieren von Handlern

Das erste, was Sie mit fast allen von Ihnen generierten Anfragen tun sollten, ist das Hinzufügen von Erfolg- und Fehlerbehandlern:

```js
request.onerror = (event) => {
  // Do something with request.error!
};
request.onsuccess = (event) => {
  // Do something with request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgsevent (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als `target` ausgelöst. Sobald es ausgelöst wird, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsevent als Argument aufgerufen. Andernfalls, wenn ein Problem aufgetreten ist, wird ein Fehlerereignis (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) bei `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen werden (zumindest nicht, wenn Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige allgemeine Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer beschlossen hat, Ihrer Web-App keine Erlaubnis zu geben, eine Datenbank zu erstellen. Eines der Hauptziele von IndexedDB ist es, große Datenmengen für die Offline-Nutzung zu speichern. (Um mehr darüber zu erfahren, wie viel Speicher Sie für jeden Browser haben können, lesen Sie [Wie viel Daten können gespeichert werden? auf der Seite zu Browser-Speicherquoten und Eviktionskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine böswillige Website Ihren Computer belastet, deshalb forderten Browser früher Benutzer auf, das erste Mal zu erlauben oder abzulehnen, wenn eine bestimmte Web-App versucht, eine IndexedDB für die Speicherung zu öffnen. Der Benutzer konnte wählen, ob er den Zugriff erlauben oder verweigern möchte. Außerdem dauert der Speicher von IndexedDB in den Datenschutzmodi der Browser nur so lange im Speicher, bis die Inkognito-Sitzung geschlossen wird.

Nun, angenommen, der Benutzer hat Ihre Anfrage zum Erstellen einer Datenbank zugelassen, und Sie haben ein Erfolgsevent erhalten, das den Erfolgscallback auslöst; Was kommt als nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, also ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten diese definitiv für später speichern. Ihr Code könnte so aussehen:

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

Wie oben erwähnt, blasen Fehlerereignisse. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler erzeugt hat, dann blasen sie zur Transaktion und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, Fehlerbehandler zu jeder Anfrage hinzuzufügen, können Sie stattdessen einen einzigen Fehlerbehandler zum Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Generic error handler for all errors targeted at this database's
  // requests!
  console.error(`Database error: ${event.target.error?.message}`);
};
```

Einer der häufig vorkommenden Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Er zeigt an, dass die auf der Festplatte gespeicherte Version der Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerbehandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer vorhandenen Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Ereignisbehandler übergeben, der auf `request.result` (d.h. `db` im Beispiel) eingerichtet wurde. Im Behandler für das `upgradeneeded`-Ereignis sollten Sie die Objektspeicher erstellen, die für diese Version der Datenbank benötigt werden:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall wird die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank haben, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder nicht mehr benötigte Objektspeicher aus der vorherigen Version löschen. Wenn Sie einen vorhandenen Objektspeicher ändern müssen (z. B. um den `keyPath` zu ändern), müssen Sie den alten Objektspeicher löschen und ihn mit den neuen Optionen erneut erstellen. (Beachten Sie, dass dies die Informationen im Objektspeicher löscht! Wenn Sie diese Informationen speichern müssen, sollten Sie sie auslesen und an einem anderen Ort speichern, bevor Sie die Datenbank aktualisieren.)

Der Versuch, einen Objektspeicher mit einem bereits vorhandenen Namen zu erstellen (oder zu versuchen, einen Objektspeicher zu löschen, der nicht existiert) wirft einen Fehler.

Wenn das `onupgradeneeded`-Ereignis erfolgreich abgeschlossen ist, wird der `onsuccess`-Handler der offenen Datenbankanforderung ausgelöst.

### Strukturieren der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher anstelle von Tabellen, und eine einzelne Datenbank kann beliebig viele Objektspeicher enthalten. Jedes Mal, wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt mehrere verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objektspeicher einen [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objektspeicher kann jede Art von Wert enthalten, sogar primitive Werte wie
        Zahlen und Zeichenketten. Sie müssen bei jedem Hinzufügen eines neuen Wertes einen separaten Schlüssel angeben.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Die Objekte müssen
        eine Eigenschaft mit dem gleichen Namen wie der key path haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jede Art von Wert enthalten. Der Schlüssel wird
        Ihnen automatisch generiert oder Sie können ein separates Schlüsselargument angeben, wenn Sie
        einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Normalerweise wird ein Schlüssel
        generiert und der Wert des generierten Schlüssels wird im Objekt in
        einer Eigenschaft mit dem gleichen Namen wie der key path gespeichert. Wenn jedoch eine solche
        Eigenschaft bereits vorhanden ist, wird der Wert dieser Eigenschaft als Schlüssel verwendet
        statt einen neuen Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes auf jedem Objektspeicher erstellen, vorausgesetzt, der Objektspeicher enthält Objekte, keine primitiven Werte. Ein Index erlaubt es Ihnen, die in einem Objektspeicher gespeicherten Werte mithilfe des Werts einer Eigenschaft des gespeicherten Objekts zu durchsuchen, anstatt den Schlüssel des Objekts.

Zusätzlich können Indizes einfache Einschränkungen auf die gespeicherten Daten erzwingen. Wenn Sie das einzigartige Flag beim Erstellen des Indexes setzen, stellt der Index sicher, dass keine zwei Objekte mit dem gleichen Wert für den Schlüsselpfad des Indexes gespeichert werden. Wenn Sie also einen Objektspeicher haben, der eine Sammlung von Personen enthält und sicherstellen möchten, dass keine zwei Personen die gleiche E-Mail-Adresse haben, können Sie einen Index mit gesetztem einzigartigem Flag verwenden, um dies zu erzwingen.

Das mag verwirrend klingen, aber dieses einfache Beispiel sollte die Konzepte verdeutlichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie die Sozialversicherungsnummer einer Person nicht als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum anstelle ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen aus Bequemlichkeitsgründen ignorieren und weitermachen.

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

Wie zuvor erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen sowie Indizes erstellen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameterobjekt an. Auch wenn das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und die Art des Objektspeichers, den Sie erstellen möchten, zu verfeinern. In unserem Fall haben wir um einen Objektspeicher mit dem Namen "customers" gebeten und einen `keyPath` definiert, der die Eigenschaft ist, die ein individuelles Objekt im Speicher einzigartig macht. Diese Eigenschaft ist in diesem Beispiel "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch um einen Index mit dem Namen "name" gebeten, der auf die `name`-Eigenschaft der gespeicherten Objekte schaut. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt an, das die Art des Indexes verfeinert, den Sie erstellen möchten. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, ist weiterhin erfolgreich, aber die Objekte werden nicht im "name"-Index angezeigt.

Wir können nun die gespeicherten Kundenobjekte mithilfe ihrer `ssn` direkt aus dem Objektspeicher abrufen oder mithilfe ihres Namens über den Index. Um zu lernen, wie dies gemacht wird, siehe den Abschnitt über [die Verwendung eines Index](#verwendung_eines_index).

### Verwendung eines Schlüsselgenerators

Wenn Sie beim Erstellen des Objektspeichers ein `autoIncrement`-Flag einrichten, wird der Schlüsselgenerator für diesen Objektspeicher aktiviert. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert in den Objektspeicher hinzufügen. Die aktuelle Zahl eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator zuerst erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 basierend auf dem vorherigen Schlüssel erhöht. Die aktuelle Zahl für einen Schlüsselgenerator nimmt nie ab, außer als Ergebnis von zurückgesetzten Datenbankoperationen, z. B. wird die Datenbanktransaktion abgebrochen. Daher wirkt sich das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objektspeicher nie auf den Schlüsselgenerator des Objektspeichers aus.

Wir können einen anderen Objektspeicher mit dem Schlüsselgenerator wie unten erstellt:

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

Für weitere Details zum Schlüsselgenerator siehe [Key generators](https://w3c.github.io/IndexedDB/#key-generator-construct) in der Spezifikation.

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie irgendetwas mit Ihrer neuen Datenbank machen können, müssen Sie eine Transaktion starten. Transaktionen kommen aus dem Datenbankobjekt, und Sie müssen angeben, auf welche Objektspeicher die Transaktion zugreifen soll. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Als nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur von ihr lesen möchten. Transaktionen haben drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektspeichern oder Indizes umfasst –, muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird geöffnet, indem die Methode [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) mit einer angegebenen `version` aufgerufen wird.

Um die Datensätze eines bestehenden Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder im `readwrite`-Modus sein. Um Änderungen an einem bestehenden Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction). Die Methode akzeptiert zwei Parameter: die `storeNames` (den Geltungsbereich, definiert als ein Array von zugeordneter Objektspeicher, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt zurück, das die Methode [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) enthält, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig, wenn kein Modus angegeben ist, öffnen sich Transaktionen im `readonly`-Modus.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen entspanntere Haltbarkeitssicherheiten, um die Leistung zu erhöhen (siehe [Firefox bug 1112702](https://bugzil.la/1112702)). Zuvor wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten vollständig auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem gesagt wurde, die Daten zu schreiben, aber bevor diese Daten tatsächlich auf die Festplatte geschrieben worden sind. Das `complete`-Ereignis kann daher schneller als zuvor geliefert werden, jedoch besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromverlust kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher darüber nicht weiter Gedanken machen. Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. wenn Sie kritische Daten speichern, die später nicht neu berechnet werden können), können Sie eine Transaktion erzwingen, um auf die Festplatte zu schreiben, bevor das `complete`-Ereignis geliefert wird, indem Sie eine Transaktion mit dem experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Geltungsbereich und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Geltungsbereich definieren, geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit sich nicht überlappenden Geltungsbereichen gleichzeitig ausführen.
- Nur einen `readwrite`-Transaktionsmodus angeben, wenn nötig. Sie können mehrere `readonly`-Transaktionen mit sich überlappenden Geltungsbereichen gleichzeitig ausführen, aber Sie können nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Weitere Informationen finden Sie in der Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [Schlüsseleigenschaften und grundlegende Begriffe von IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Hinzufügen von Daten zur Datenbank

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich in sie schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfasst. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umfasst, aber tun Sie das nicht, da das Spezifizierung besagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine lesende Transaktion. Da Sie hier schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Jetzt, wo Sie eine Transaktion haben, müssen Sie ihre Lebensdauer verstehen. Transaktionen sind sehr eng mit der Ereignisschleife verbunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Die einzige Möglichkeit, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu erstellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis, und vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es noch anstehende Anfragen gibt, bleibt die Transaktion aktiv. Die Lebensdauer von Transaktionen ist wirklich sehr einfach, aber es könnte etwas Zeit brauchen, sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR` Fehlercodes zu sehen, dann haben Sie etwas falsch gemacht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort` und `complete`. Wir haben über die Art gesprochen, wie Fehlerereignisse aufblähen, daher erhält eine Transaktion ein Fehlerereignis von jeder Anfrage, die aus ihr generiert wurde. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers das Abbrechen der Transaktion ist, in der er aufgetreten ist. Wenn Sie nicht den Fehler behandeln, indem Sie zunächst `stopPropagation()` auf dem Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen allgemeinen Fehlerbehandler zur Datenbank hinzufügen, wenn eine feingranulare Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` auf die Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird auf der Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen durchführen, kann das Verfolgen der Transaktion anstelle einzelner Anfragen sicherlich Ihrer Vernunft helfen.

Jetzt, wo Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus erhalten. Transaktionen lassen Ihnen nur einen Objektspeicher, den Sie bei der Erstellung der Transaktion angegeben haben. Dann können Sie alle Daten hinzufügen, die Sie benötigen.

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

Das `result` einer Anfrage, die durch einen Aufruf von `add()` generiert wurde, ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte es also der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass kein Objekt bereits in der Datenbank mit dem gleichen Schlüssel vorhanden ist. Wenn Sie versuchen, einen vorhandenen Eintrag zu ändern, oder wenn es Ihnen nichts ausmacht, wenn bereits einer existiert, können Sie die `put()`-Funktion verwenden, wie unten im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) gezeigt.

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

Jetzt, wo die Datenbank einige Informationen enthält, können Sie sie auf verschiedene Weise abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, wie folgt:

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

Das ist eine Menge Code für ein "einfaches" Abrufen. So können Sie es ein bisschen kürzer machen, vorausgesetzt, dass Sie Fehler auf der Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie vermeiden, eine Liste von Objektspeichern in Ihrer Transaktion zu übergeben und einfach den Namen als Zeichenkette übergeben. Außerdem lesen Sie nur von der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Ein Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiteres Subtilität hier ist, dass Sie das Anfrageobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als Ziel hat, können Sie das Ereignis verwenden, um auf die `result`-Eigenschaft zuzugreifen.

### Aktualisieren eines Eintrags in der Datenbank

Jetzt, da wir einige Daten abgerufen haben, ist das Aktualisieren und Wiedereinfügen in die IndexedDB ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas aktualisieren:

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

Also hier erstellen wir einen `objectStore` und fordern einen Kunden Datensatz daraus an, identifiziert durch seinen ssn-Wert (`444-44-4444`). Dann setzen wir das Ergebnis dieser Anfrage in eine Variable (`data`), aktualisieren die `age`-Eigenschaft dieses Objekts und erstellen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` zu setzen und den vorherigen Wert zu überschreiben.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, weil wir in die Datenbank schreiben und nicht nur von ihr lesen wollen.

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

Die `openCursor()`-Funktion nimmt mehrere Argumente. Zuerst können Sie den Bereich der abgerufenen Elemente begrenzen, indem Sie ein Schlüsselbereichsobjekt verwenden, auf das wir gleich noch eingehen werden. Zweitens können Sie die Richtung angeben, in der Sie iterieren möchten. Im obigen Beispiel durchsuchen wir alle Objekte in aufsteigender Reihenfolge. Der Erfolgscallback für Cursor ist etwas besonders. Das Cursor-Objekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzform, sodass es `event.target.result` ist). Dann können der tatsächliche Schlüssel und Wert in den `key`- und `value`-Eigenschaften des Cursor-Objekts gefunden werden. Wenn Sie weitermachen möchten, müssen Sie `continue()` auf dem Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die Ihrer `openCursor()`-Anfrage entsprechen), erhalten Sie dennoch einen Erfolgscallback, aber die `result`-Eigenschaft ist `undefined`.

Ein gängiges Muster mit Cursors ist, alle Objekte in einem Objektspeicher abzurufen und sie wie folgt zu einem Array hinzuzufügen:

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
> Es gibt einen Leistungskosten, der mit dem Betrachten der `value`-Eigenschaft eines Cursors verbunden ist, weil das Objekt faul erstellt wird. Wenn Sie `getAll()` beispielsweise verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, jeden der Schlüssel zu betrachten, ist es viel effizienter, einen Cursor zu verwenden, als `getAll()`. Wenn Sie jedoch versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, verwenden Sie `getAll()`.

### Verwendung eines Index

Kundendaten mithilfe der SSN als Schlüssel zu speichern ist logisch, da die SSN eine Person eindeutig identifiziert. (Ob dies für den Datenschutz eine gute Idee ist, ist eine andere Frage und außerhalb des Umfangs dieses Artikels.) Wenn Sie jedoch einen Kunden anhand seines Namens suchen müssen, müssen Sie über jede SSN in der Datenbank iterieren, bis Sie die richtige gefunden haben. Eine Suche auf diese Weise wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwise you will get DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donna's SSN is ${event.target.result.ssn}`);
};
```

Der "name"-Index ist nicht eindeutig, sodass es mehr als einen Eintrag mit dem `name` "Donna" geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem bestimmten `name` zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursorn in Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselcursor ordnet die Indexeigenschaft dem Schlüssel zu, der verwendet wird, um das Objekt im Objektspeicher zu speichern. Die Unterschiede sind hier illustriert:

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

### Festlegen des Bereichs und der Richtung von Cursoren

Wenn Sie den Bereich der Werte, die Sie in einem Cursor sehen, einschränken möchten, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen einzigen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" sein (d.h. der Schlüsselbereich umfasst die angegebenen Werte) oder "offen" (d.h. der Schlüsselbereich umfasst die angegebenen Werte nicht). So funktioniert es:

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

Manchmal möchten Sie möglicherweise in absteigender Reihenfolge anstatt in aufsteigender Reihenfolge (der Standardrichtung für alle Cursor) iterieren. Die Änderung der Richtung erfolgt, indem `prev` als zweites Argument an die `openCursor()`-Funktion übergeben wird:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Wenn Sie nur eine Änderung der Richtung angeben, aber die angezeigten Ergebnisse nicht einschränken möchten, können Sie einfach null als erstes Argument übergeben:

```js
objectStore.openCursor(null, "prev").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Da der "name"-Index nicht eindeutig ist, könnte es mehrere Einträge mit demselben `name` geben. Beachten Sie, dass eine solche Situation bei Objektspeichern nicht auftreten kann, da der Schlüssel immer eindeutig sein muss. Wenn Sie während der Cursoriteration über Indizes Duplikate herausfiltern möchten, können Sie `nextunique` (oder `prevunique`, wenn Sie rückwärts gehen) als Richtung angeben. Wenn `nextunique` oder `prevunique` verwendet wird, ist der Eintrag mit dem niedrigsten Schlüssel immer der, der zurückgegeben wird.

```js
index.openKeyCursor(null, "nextunique").onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Bitte sehen Sie sich die "[IDBCursor Constants](/de/docs/Web/API/IDBCursor#constants)" für die gültigen Richtungsargumente an.

## Versionsänderungen, während eine Web-App in einem anderen Tab geöffnet ist

Wenn sich Ihre Web-App in einer Weise ändert, die eine Versionsänderung Ihrer Datenbank erfordert, müssen Sie berücksichtigen, was passiert, wenn der Benutzer die alte Version Ihrer App in einem Tab geöffnet hat und dann die neue Version Ihrer App in einem anderen lädt. Wenn Sie `open()` mit einer höheren Version als der tatsächlichen Version der Datenbank aufrufen, müssen alle anderen offenen Datenbanken die Anfrage ausdrücklich anerkennen, bevor Sie Änderungen an der Datenbank vornehmen können (ein `onblocked`-Ereignis wird ausgelöst, bis sie geschlossen oder neu geladen werden). So funktioniert es:

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

Sie sollten auch auf `VersionError`-Fehler hören, um die Situation zu bewältigen, in der bereits geöffnete Apps möglicherweise Code initiieren, der zu einem neuen Versuch führt, die Datenbank zu öffnen, jedoch mit einer veralteten Version.

## Sicherheit

IndexedDB verwendet das Same-Origin-Prinzip, was bedeutet, dass es den Speicher an den Ursprung der Site bindet, die ihn erstellt (in der Regel ist dies die Domain oder Subdomain der Site), sodass er von keinem anderen Ursprung aus zugänglich ist.

Inhalte in Fenstern von Drittanbietern (zum Beispiel {{htmlelement("iframe")}}-Inhalte) können nicht auf IndexedDB zugreifen, wenn der Browser so eingestellt ist, dass er niemals Cookies von Drittanbietern akzeptiert (siehe [Firefox bug 1147821](https://bugzil.la/1147821)).

## Warnung bei Browser-Schließung

Wenn der Browser geschlossen wird (weil der Benutzer die Option Beenden oder Schließen wählte), die Festplatte, die die Datenbank enthält, unerwartet entfernt wird, oder die Berechtigungen für den Datenbankspeicher verloren gehen, passieren folgende Dinge:

1. Jede Transaktion auf jeder betroffenen Datenbank (oder allen offenen Datenbanken im Falle des Browser-Schlusses) wird mit einem `AbortError` abgebrochen. Der Effekt ist derselbe, als ob [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) auf jede Transaktion aufgerufen wird.
2. Sobald alle Transaktionen abgeschlossen sind, wird die Datenbankverbindung geschlossen.
3. Schließlich erhält das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Datenbankverbindung darstellt, ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis. Sie können den [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignisbehandler verwenden, um auf diese Ereignisse zu hören, damit Sie wissen, wann eine Datenbank unerwartet geschlossen wurde.

Das oben beschriebene Verhalten ist neu und ist erst ab den folgenden Browserversionen verfügbar: Firefox 50, Google Chrome 31 (ungefähr).

Vor diesen Browserversionen werden die Transaktionen stillschweigend abgebrochen und kein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wird ausgelöst, sodass es keine Möglichkeit gibt, eine unerwartete Datenbankschließung zu erkennen.

Da der Benutzer den Browser jederzeit beenden kann, bedeutet dies, dass Sie sich nicht darauf verlassen können, dass eine bestimmte Transaktion abgeschlossen wird, und auf älteren Browsern wird Ihnen nicht einmal mitgeteilt, wenn sie nicht abgeschlossen wird. Es gibt mehrere Auswirkungen dieses Verhaltens.

Erstens sollten Sie darauf achten, dass Sie Ihre Datenbank am Ende jeder Transaktion immer in einem konsistenten Zustand belassen. Angenommen, Sie verwenden IndexedDB, um eine Liste von Elementen zu speichern, die Sie dem Benutzer zur Bearbeitung bereitstellen. Sie speichern die Liste nach der Bearbeitung, indem Sie den Objektspeicher leeren und dann die neue Liste schreiben. Wenn Sie den Objektspeicher in einer Transaktion leeren und die neue Liste in einer anderen Transaktion schreiben, besteht die Gefahr, dass der Browser nach dem Leeren, aber vor dem Schreiben schließt, sodass Sie mit einer leeren Datenbank dastehen. Um dies zu vermeiden, sollten Sie das Leeren und Schreiben in eine einzige Transaktion kombinieren.

Zweitens sollten Sie Datenbanktransaktionen niemals an Unload-Ereignisse binden. Wenn das Unload-Ereignis durch das Schließen des Browsers ausgelöst wird, wird jede Transaktion, die im Unload-Ereignisbehandler erstellt wurde, niemals abgeschlossen. Ein intuitiver Ansatz zur Aufrechterhaltung einiger Informationen über Browsersitzungen hinweg besteht darin, sie aus der Datenbank zu lesen, wenn der Browser (oder eine bestimmte Seite) geöffnet wird, sie zu aktualisieren, während der Benutzer mit dem Browser agiert, und sie dann in der Datenbank zu speichern, wenn der Browser (oder die Seite) geschlossen wird. Dies wird jedoch nicht funktionieren. Die Datenbanktransaktionen werden im Unload-Ereignisbehandler erstellt, aber da sie asynchron sind, werden sie abgebrochen, bevor sie ausgeführt werden können.

Tatsächlich gibt es keine Möglichkeit, sicherzustellen, dass IndexedDB-Transaktionen abgeschlossen werden, selbst bei einem normalen Browser-Schluss. Siehe [Firefox bug 870645](https://bugzil.la/870645). Als Workaround für diese normale Schlussbenachrichtigung könnten Sie Ihre Transaktionen verfolgen und ein `beforeunload`-Ereignis hinzufügen, um den Benutzer zu warnen, wenn noch nicht abgeschlossene Transaktionen zum Zeitpunkt des Entladens vorhanden sind.

Zumindest mit der Hinzufügung von Abbruchsbenachrichtigungen und [`IDBDatabase.onclose`](/de/docs/Web/API/IDBDatabase/close_event) können Sie wissen, wann dies geschehen ist.

## Vollständiges IndexedDB-Beispiel

Wir haben ein vollständiges Beispiel mit der IndexedDB-API. Das Beispiel verwendet IndexedDB, um Publikationen zu speichern und abzurufen.

- [Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Siehe auch

Weitere Lektüre, um bei Bedarf mehr Informationen zu finden.

### Referenz

- [IndexedDB-API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- IndexedDB [Schnittstellendateien](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) im Quellcode von Firefox

### Tutorials und Leitfäden

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — The Store in Your Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Bibliotheken

- [localForage](https://localforage.github.io/localForage/): Ein Polyfill, das eine einfache Name:Wert-Syntax für die clientseitige Datenspeicherung bietet, die im Hintergrund IndexedDB verwendet, aber in Browsern, die IndexedDB nicht unterstützen, auf Web SQL (veraltet) und dann auf localStorage zurückfällt.
- [Dexie.js](https://dexie.org/): Ein Wrapper für IndexedDB, der eine viel schnellere Codeentwicklung über eine schöne, einfache Syntax ermöglicht.
- [JsStore](https://jsstore.net/): Ein einfacher und fortgeschrittener IndexedDB-Wrapper mit SQL-ähnlicher Syntax.
- [MiniMongo](https://github.com/mWater/minimongo): Eine clientseitige In-Memory-MongoDB, die von localstorage mit Serversynchronisation über http unterstützt wird. MiniMongo wird von MeteorJS verwendet.
- [PouchDB](https://pouchdb.com/): Eine clientseitige Implementierung von CouchDB im Browser mithilfe von IndexedDB.
- [IDB](https://github.com/jakearchibald/idb): Eine winzige Bibliothek, die die IndexedDB-API größtenteils widerspiegelt, aber mit kleinen Verbesserungen der Benutzerfreundlichkeit.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Ein super einfacher kleiner (\~600B) versprechensbasierter Schlüssel-Wert-Speicher, der in IndexedDB implementiert ist.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Eine winzige (\~1.3kB) TypeScript-Fassade mit einer API auf Basis von Promises und automatischen Migrationen.
- [RxDB](https://rxdb.info/): Eine NoSQL clientseitige Datenbank, die auf IndexedDB verwendet werden kann. Unterstützt Indizes, Komprimierung und Replikation. Fügt auch Cross-Tab-Funktionalität und Beobachtbarkeit zu IndexedDB hinzu.
