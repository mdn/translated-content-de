---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
l10n:
  sourceCommit: 62ce78b5c89fd809e00683b62f8e6a116990f82d
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefunktionen unabhängig von der Netzwerkverfügbarkeit zu erstellen, können Ihre Anwendungen sowohl online als auch offline funktionieren.

## Über dieses Dokument

Dieses Tutorial führt Sie durch die Verwendung der asynchronen API von IndexedDB. Wenn Sie mit IndexedDB nicht vertraut sind, sollten Sie zunächst den Artikel zu den [Schlüsseleigenschaften und grundlegenden Begriffen von IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology) lesen.

Die Referenzdokumentation zur IndexedDB-API finden Sie im Artikel zur [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und in deren Unterseiten. Dieser Artikel dokumentiert die von IndexedDB verwendeten Objekttypen sowie die Methoden der asynchronen API (die synchrone API wurde aus der Spezifikation entfernt).

## Grundlegendes Muster

Das grundlegende Muster, das IndexedDB empfiehlt, ist das folgende:

1. Öffnen Sie eine Datenbank.
2. Erstellen Sie einen Objektspeicher in der Datenbank.
3. Starten Sie eine Transaktion und stellen Sie einen Antrag, um eine Datenbankoperation auszuführen, z. B. das Hinzufügen oder Abrufen von Daten.
4. Warten Sie, bis die Operation abgeschlossen ist, indem Sie dem richtigen DOM-Ereignis lauschen.
5. Tun Sie etwas mit den Ergebnissen (die im Anfrageobjekt zu finden sind).

Mit diesen großen Konzepten im Hinterkopf können wir zu konkreten Dingen übergehen.

## Erstellen und Strukturieren des Speichers

### Öffnen einer Datenbank

Wir beginnen den gesamten Prozess so:

```js
// Lassen Sie uns unsere Datenbank öffnen
const request = window.indexedDB.open("MyTestDatabase", 3);
```

Sehen Sie das? Eine Datenbank zu öffnen ist wie jede andere Operation – man muss sie "anfordern".

Die Öffnungsanfrage öffnet die Datenbank oder startet die Transaktion nicht sofort. Der Aufruf der `open()`-Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt mit einem Ergebnis- (Erfolgs-) oder Fehlerwert zurück, den Sie als Ereignis behandeln. Die meisten anderen asynchronen Funktionen in IndexedDB tun dasselbe - sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt mit dem Ergebnis oder Fehler zurück. Das Ergebnis für die Öffnungsfunktion ist eine Instanz einer `IDBDatabase`.

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema — die Objektspeicher in der Datenbank und deren Struktur. Wenn die Datenbank noch nicht existiert, wird sie durch die `open`-Operation erstellt, dann wird ein `onupgradeneeded`-Ereignis ausgelöst und Sie erstellen das Datenbankschema im Handler für dieses Ereignis. Wenn die Datenbank existiert, Sie jedoch eine höhere Versionsnummer angeben, wird sofort ein `onupgradeneeded`-Ereignis ausgelöst, das es Ihnen ermöglicht, ein aktualisiertes Schema in dessen Handler bereitzustellen. Mehr dazu später im Abschnitt [Erstellen oder Aktualisieren der Version der Datenbank](#erstellen_oder_aktualisieren_der_version_der_datenbank) unten und auf der {{ domxref("IDBFactory.open") }} Referenzseite.

> [!WARNING]
> Die Versionsnummer ist eine `unsigned long long` Zahl, was bedeutet, dass sie eine sehr große Ganzzahl sein kann. Es bedeutet auch, dass Sie keine Gleitkommazahl verwenden können, da diese ansonsten auf die nächstniedrigere Ganzzahl gerundet wird und die Transaktion möglicherweise nicht startet, noch das `upgradeneeded`-Ereignis ausgelöst wird. Verwenden Sie also zum Beispiel 2.4 nicht als Versionsnummer:
> `const request = indexedDB.open("MyTestDatabase", 2.4); // machen Sie dies nicht, da die Version auf 2 gerundet wird`

#### Handler erzeugen

Das Erste, was Sie mit fast allen Anfragen, die Sie generieren, tun möchten, ist das Hinzufügen von Erfolgs- und Fehlerhandlern:

```js
request.onerror = (event) => {
  // Tun Sie etwas mit request.error!
};
request.onsuccess = (event) => {
  // Tun Sie etwas mit request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles erfolgreich ist, wird ein Erfolgsevent (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"success"` gesetzt ist) mit `request` als dessen `target` ausgelöst. Sobald es ausgelöst wird, wird die `onsuccess()`-Funktion auf `request` mit dem Erfolgsevent als Argument ausgelöst. Andernfalls, wenn es ein Problem gab, wird ein Fehlerereignis (d.h. ein DOM-Ereignis, dessen `type`-Eigenschaft auf `"error"` gesetzt ist) bei `request` ausgelöst. Dies löst die `onerror()`-Funktion mit dem Fehlerereignis als Argument aus.

Die IndexedDB-API ist so konzipiert, dass der Bedarf an Fehlerbehandlung minimiert wird, sodass Sie wahrscheinlich nicht viele Fehlerereignisse sehen (zumindest nicht, wenn Sie mit der API vertraut sind!). Im Fall des Öffnens einer Datenbank gibt es jedoch einige allgemeine Bedingungen, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer Ihrer Webanwendung keine Berechtigung erteilt hat, eine Datenbank zu erstellen. Ein Hauptziel von IndexedDB ist es, das Speichern großer Datenmengen für die Offline-Nutzung zu ermöglichen. (Um mehr darüber zu erfahren, wie viel Speicherplatz Sie für jeden Browser haben können, siehe [Wie viel Daten können gespeichert werden? auf der Seite zur Speicherquoten und Löschkriterien von Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).)

Offensichtlich möchten Browser nicht zulassen, dass ein Werbenetzwerk oder eine bösartige Website Ihren Computer verschmutzt, daher forderten Browser früher beim ersten Versuch jeder Webanwendung, eine IndexedDB zum Speichern zu öffnen, den Benutzer zur Erlaubnis auf. Der Benutzer konnte den Zugriff erlauben oder verweigern. Außerdem hält der IndexedDB-Speicher im Datenschutzmodus der Browser nur im Speicher, bis die Inkognito-Session geschlossen wird.

Nun, vorausgesetzt, der Benutzer hat Ihrer Anfrage zur Erstellung einer Datenbank zugestimmt und Sie haben ein Erfolgsevent erhalten, um den Erfolgs-Callback auszulösen; Was kommt als nächstes? Die Anfrage hier wurde mit einem Aufruf von `indexedDB.open()` generiert, daher ist `request.result` eine Instanz von `IDBDatabase`, und Sie möchten diese unbedingt für später speichern. Ihr Code könnte so ähnlich aussehen:

```js
let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error("Warum haben Sie meiner Web-App nicht erlaubt, IndexedDB zu verwenden?!");
};
request.onsuccess = (event) => {
  db = event.target.result;
};
```

#### Fehlerbehandlung

Wie oben erwähnt, steigen Fehlerereignisse auf. Fehlerereignisse sind auf die Anfrage gerichtet, die den Fehler generiert hat, und dann steigt das Ereignis zur Transaktion auf und schließlich zum Datenbankobjekt. Wenn Sie vermeiden möchten, jedem Antrag Fehlerhandler hinzuzufügen, können Sie stattdessen einen einzigen Fehlerhandler zum Datenbankobjekt hinzufügen, wie folgt:

```js
db.onerror = (event) => {
  // Allgemeiner Fehlerhandler für alle Fehler, die auf diese Datenbank gerichtet sind
  // Anfragen!
  console.error(`Datenbankfehler: ${event.target.error?.message}`);
};
```

Einer der häufig möglichen Fehler beim Öffnen einer Datenbank ist `VER_ERR`. Dieser zeigt an, dass die version der auf der Festplatte gespeicherten Datenbank _größer_ ist als die Version, die Sie zu öffnen versuchen. Dies ist ein Fehlerfall, der immer vom Fehlerhandler behandelt werden muss.

### Erstellen oder Aktualisieren der Version der Datenbank

Wenn Sie eine neue Datenbank erstellen oder die Versionsnummer einer bestehenden Datenbank erhöhen (indem Sie eine höhere Versionsnummer angeben als zuvor beim [Öffnen einer Datenbank](#öffnen_einer_datenbank)), wird das `onupgradeneeded`-Ereignis ausgelöst und ein [IDBVersionChangeEvent](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt wird an jeden `onversionchange`-Eventhandler übergeben, der auf `request.result` eingerichtet ist (also `db` im Beispiel). Im Handler für das `upgradeneeded`-Ereignis sollten Sie die für diese Version der Datenbank benötigten Objektspeicher erstellen:

```js
// Dieses Ereignis ist nur in neueren Browsern implementiert
request.onupgradeneeded = (event) => {
  // Speichern Sie die IDBDatabase-Schnittstelle
  const db = event.target.result;

  // Erstellen Sie einen Objektspeicher für diese Datenbank
  const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

In diesem Fall hat die Datenbank bereits die Objektspeicher aus der vorherigen Version der Datenbank, sodass Sie diese Objektspeicher nicht erneut erstellen müssen. Sie müssen nur neue Objektspeicher erstellen oder Objektspeicher aus der vorherigen Version löschen, die nicht mehr benötigt werden. Wenn Sie einen bestehenden Objektspeicher ändern müssen (z.B. den `keyPath` ändern), müssen Sie den alten Objektspeicher löschen und ihn erneut mit den neuen Optionen erstellen. (Beachten Sie, dass dadurch die Informationen im Objektspeicher gelöscht werden! Wenn Sie diese Informationen speichern müssen, sollten Sie sie vor dem Upgrade der Datenbank an anderer Stelle lesen und speichern.)

Wenn versucht wird, einen Objektspeicher mit einem bereits existierenden Namen zu erstellen oder einen Objektspeicher mit einem nicht existierenden Namen zu löschen, wird ein Fehler ausgelöst.

Wenn das `onupgradeneeded`-Ereignis erfolgreich endet, wird der `onsuccess`-Handler der offenen Datenbankanfrage ausgelöst.

### Strukturierung der Datenbank

Nun zur Strukturierung der Datenbank. IndexedDB verwendet Objektspeicher statt Tabellen, und eine einzelne Datenbank kann eine beliebige Anzahl von Objektspeichern enthalten. Jedes Mal, wenn ein Wert in einem Objektspeicher gespeichert wird, wird er mit einem Schlüssel verknüpft. Es gibt verschiedene Möglichkeiten, wie ein Schlüssel bereitgestellt werden kann, abhängig davon, ob der Objektspeicher einen [Key Path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) oder einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) verwendet.

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
        Dieser Objektspeicher kann jeden beliebigen Wert enthalten, sogar primitive Werte wie
        Zahlen und Zeichenfolgen. Sie müssen bei jedem Hinzufügen eines neuen Wertes ein separates
        Schlüsselargument angeben.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Nein</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Die Objekte müssen
        eine Eigenschaft mit demselben Namen wie der Key Path haben.
      </td>
    </tr>
    <tr>
      <td>Nein</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann jeden beliebigen Wert enthalten. Der Schlüssel wird
        automatisch für Sie generiert, oder Sie können ein separates Schlüsselargument angeben,
        wenn Sie einen bestimmten Schlüssel verwenden möchten.
      </td>
    </tr>
    <tr>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        Dieser Objektspeicher kann nur JavaScript-Objekte enthalten. Üblicherweise wird ein Schlüssel
        generiert und der Wert des generierten Schlüssels wird im Objekt in einer Eigenschaft mit
        demselben Namen wie der Key Path gespeichert. Existiert jedoch bereits eine solche
        Eigenschaft, wird der Wert dieser Eigenschaft als Schlüssel verwendet statt einen neuen
        Schlüssel zu generieren.
      </td>
    </tr>
  </tbody>
</table>

Sie können auch Indizes für jeden Objektspeicher erstellen, vorausgesetzt der Objektspeicher enthält Objekte und keine primitiven Daten. Ein Index ermöglicht es, die in einem Objektspeicher gespeicherten Werte anhand des Wertes einer Eigenschaft des gespeicherten Objekts nachzuschlagen, anstatt den Schlüssel des Objekts zu verwenden.

Zusätzlich haben Indizes die Möglichkeit, einfache Einschränkungen für die gespeicherten Daten durchzusetzen. Indem Sie das einzigartige Flag beim Erstellen des Indexes setzen, gewährleistet der Index, dass keine zwei Objekte gespeichert werden, die denselben Wert für den Schlüsselpfad des Indexes haben. Wenn Sie beispielsweise einen Objektspeicher haben, der eine Gruppe von Personen enthält, und sicherstellen möchten, dass keine zwei Personen dieselbe E-Mail-Adresse haben, können Sie einen Index mit gesetztem einzigartigem Flag verwenden, um dies durchzusetzen.

Das mag verwirrend klingen, aber dieses einfache Beispiel soll die Konzepte veranschaulichen. Zuerst definieren wir einige Kundendaten, die wir in unserem Beispiel verwenden:

```js
// So sehen unsere Kundendaten aus.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

Natürlich würden Sie nicht die Sozialversicherungsnummer als Primärschlüssel für eine Kundentabelle verwenden, da nicht jeder eine Sozialversicherungsnummer hat, und Sie würden ihr Geburtsdatum statt ihres Alters speichern, aber lassen Sie uns diese unglücklichen Entscheidungen der Einfachheit halber ignorieren und weitermachen.

Nun schauen wir uns an, wie eine IndexedDB erstellt wird, um unsere Daten zu speichern:

```js
const dbName = "the_name";

const request = indexedDB.open(dbName, 2);

request.onerror = (event) => {
  // Fehler behandeln.
};
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Erstellen Sie einen Objektspeicher, um Informationen über unsere Kunden zu halten. Wir werden
  // "ssn" als Schlüsselpfad verwenden, da es garantiert einzigartig ist –
  // oder zumindest wurde mir das beim Kick-Off-Meeting gesagt.
  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Erstellen Sie einen Index, um Kunden nach Name zu suchen. Wir können keine eindeutigen Indizes verwenden,
  // da wir Duplikate haben können.
  objectStore.createIndex("name", "name", { unique: false });

  // Erstellen Sie einen Index, um Kunden nach E-Mail zu suchen. Wir möchten sicherstellen, dass
  // keine zwei Kunden dieselbe E-Mail haben, daher verwenden wir einen eindeutigen Index.
  objectStore.createIndex("email", "email", { unique: true });

  // Verwenden Sie die Transaktion "oncomplete", um sicherzustellen, dass das Erstellen des Objektspeichers
  // abgeschlossen ist, bevor Daten hineingefügt werden.
  objectStore.transaction.oncomplete = (event) => {
    // Speichern Sie Werte im neu erstellten Objektspeicher.
    const customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customerObjectStore.add(customer);
    });
  };
};
```

Wie bereits erwähnt, ist `onupgradeneeded` der einzige Ort, an dem Sie die Struktur der Datenbank ändern können. Darin können Sie Objektspeicher erstellen und löschen und Indizes erstellen und entfernen.

Objektspeicher werden mit einem einzigen Aufruf von `createObjectStore()` erstellt. Die Methode nimmt einen Namen des Speichers und ein Parameterobjekt. Obwohl das Parameterobjekt optional ist, ist es sehr wichtig, da es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren und den Typ des Objektspeichers zu verfeinern, den Sie erstellen möchten. In unserem Fall haben wir nach einem Objektspeicher namens "customers" gefragt und einen `keyPath` definiert, der die Eigenschaft ist, die ein individuelles Objekt im Speicher einzigartig macht. Diese Eigenschaft in diesem Beispiel ist "ssn", da eine Sozialversicherungsnummer garantiert einzigartig ist. "ssn" muss in jedem Objekt vorhanden sein, das im `objectStore` gespeichert wird.

Wir haben auch nach einem Index namens "name" gefragt, der die `name`-Eigenschaft der gespeicherten Objekte betrachtet. Wie bei `createObjectStore()` nimmt `createIndex()` ein optionales `options`-Objekt, das den Typ des Indexes verfeinert, den Sie erstellen möchten. Das Hinzufügen von Objekten, die keine `name`-Eigenschaft haben, ist immer noch erfolgreich, aber die Objekte erscheinen nicht im "name"-Index.

Wir können jetzt die gespeicherten Kundenobjekte mithilfe ihrer `ssn` aus dem Objektspeicher direkt abrufen oder mithilfe ihres Namens über den Index suchen. Um zu erfahren, wie dies gemacht wird, sehen Sie sich den Abschnitt über [die Verwendung eines Indexes](#verwendung_eines_indexes) an.

### Verwendung eines Schlüsselgenerators

Das Festlegen eines `autoIncrement`-Flags beim Erstellen des Objektspeichers würde den Schlüsselgenerator für diesen Objektspeicher aktivieren. Standardmäßig ist dieses Flag nicht gesetzt.

Mit dem Schlüsselgenerator wird der Schlüssel automatisch generiert, wenn Sie den Wert in den Objektspeicher hinzufügen. Die aktuelle Nummer eines Schlüsselgenerators wird immer auf 1 gesetzt, wenn der Objektspeicher für diesen Schlüsselgenerator erstmals erstellt wird. Grundsätzlich wird der neu automatisch generierte Schlüssel um 1 erhöht, basierend auf dem vorherigen Schlüssel. Die aktuelle Nummer für einen Schlüsselgenerator wird nie verringert, abgesehen davon, dass Datenbankoperationen rückgängig gemacht werden, z.B. wenn die Datenbanktransaktion abgebrochen wird. Daher führt das Löschen eines Datensatzes oder sogar das Löschen aller Datensätze aus einem Objektspeicher niemals dazu, dass der Schlüsselgenerator des Objektspeichers beeinflusst wird.

Wir können einen anderen Objektspeicher mit dem Schlüsselgenerator wie unten erstellen:

```js
// Öffnen der indexedDB.
const request = indexedDB.open(dbName, 3);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Erstellen Sie einen weiteren Objektspeicher namens "names" mit dem automatisch inkrementierenden Flag auf true gesetzt.
  const objStore = db.createObjectStore("names", { autoIncrement: true });

  // Da der Objektspeicher "names" über den Schlüsselgenerator verfügt, wird der Schlüssel für den Namenswert automatisch generiert.
  // Die hinzugefügten Datensätze wären wie folgt:
  // Schlüssel : 1 => Wert : "Bill"
  // Schlüssel : 2 => Wert : "Donna"
  customerData.forEach((customer) => {
    objStore.add(customer.name);
  });
};
```

Für weitere Details zum Schlüsselgenerator siehe ["W3C Key Generators"](https://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Hinzufügen, Abrufen und Entfernen von Daten

Bevor Sie mit Ihrer neuen Datenbank irgendetwas tun können, müssen Sie eine Transaktion starten. Transaktionen stammen vom Datenbankobjekt, und Sie müssen angeben, welche Objektspeicher die Transaktion umfassen soll. Sobald Sie sich in der Transaktion befinden, können Sie auf die Objektspeicher zugreifen, die Ihre Daten enthalten, und Ihre Anfragen stellen. Als nächstes müssen Sie entscheiden, ob Sie Änderungen an der Datenbank vornehmen oder nur daraus lesen möchten. Transaktionen verfügen über drei verfügbare Modi: `readonly`, `readwrite` und `versionchange`.

Um das "Schema" oder die Struktur der Datenbank zu ändern – was das Erstellen oder Löschen von Objektspeichern oder Indizes beinhaltet – muss die Transaktion im `versionchange`-Modus sein. Diese Transaktion wird durch Aufruf der {{domxref("IDBFactory.open")}}-Methode mit einer angegebenen `version` geöffnet.

Um die Datensätze eines vorhandenen Objektspeichers zu lesen, kann die Transaktion entweder im `readonly`- oder `readwrite`-Modus sein. Um Änderungen an einem vorhandenen Objektspeicher vorzunehmen, muss die Transaktion im `readwrite`-Modus sein. Sie öffnen solche Transaktionen mit {{domxref("IDBDatabase.transaction")}}. Die Methode akzeptiert zwei Parameter: die `storeNames` (den Umfang, definiert als ein Array von Objektspeichern, auf die Sie zugreifen möchten) und den `mode` (`readonly` oder `readwrite`) für die Transaktion. Die Methode gibt ein Transaktionsobjekt mit der {{domxref("IDBIndex.objectStore")}}-Methode zurück, mit der Sie auf Ihren Objektspeicher zugreifen können. Standardmäßig werden Transaktionen ohne angegebenen Modus im `readonly`-Modus geöffnet.

> [!NOTE]
> Ab Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien zur Leistungssteigerung (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)). Zuvor wurde in einer `readwrite`-Transaktion nur dann ein {{domxref("IDBTransaction.complete_event", "complete")}}-Ereignis ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem gesagt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann somit schneller als zuvor geliefert werden, allerdings besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter damit befassen müssen. Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. speichern Sie kritische Daten, die später nicht mehr rekombiniert werden können), können Sie eine Transaktion erstellen, die garantiert auf die Festplatte geschrieben wird bevor das `complete`-Ereignis geliefert wird, indem Sie die Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe {{domxref("IDBDatabase.transaction")}}).

Sie können den Datenzugriff beschleunigen, indem Sie den richtigen Umfang und Modus in der Transaktion verwenden. Hier sind ein paar Tipps:

- Wenn Sie den Umfang definieren, geben Sie nur die Objektspeicher an, die Sie benötigen. Auf diese Weise können Sie mehrere Transaktionen mit nicht überlappenden Umfängen gleichzeitig ausführen.
- Geben Sie nur dann einen `readwrite`-Transaktionsmodus an, wenn dies erforderlich ist. Sie können mehrere `readonly`-Transaktionen mit sich überschneidenden Umfängen gleichzeitig ausführen, aber Sie können immer nur eine `readwrite`-Transaktion für einen Objektspeicher haben. Weitere Informationen finden Sie in der Definition für [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) im Artikel [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).

### Daten zur Datenbank hinzufügen

Wenn Sie gerade eine Datenbank erstellt haben, möchten Sie wahrscheinlich darauf schreiben. So sieht das aus:

```js
const transaction = db.transaction(["customers"], "readwrite");
// Hinweis: Ältere experimentelle Implementierungen verwenden die veraltete Konstante IDBTransaction.READ_WRITE anstelle von "readwrite".
// Falls Sie eine solche Implementierung unterstützen möchten, können Sie schreiben:
// const transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

Die `transaction()`-Funktion nimmt zwei Argumente (obwohl eines optional ist) und gibt ein Transaktionsobjekt zurück. Das erste Argument ist eine Liste von Objektspeichern, die die Transaktion umfassen wird. Sie können ein leeres Array übergeben, wenn Sie möchten, dass die Transaktion alle Objektspeicher umfasst, aber tun Sie dies nicht, da die Spezifikation sagt, dass ein leeres Array einen InvalidAccessError erzeugen sollte. Wenn Sie nichts für das zweite Argument angeben, erhalten Sie eine schreibgeschützte Transaktion. Da Sie hier darauf schreiben möchten, müssen Sie das `"readwrite"`-Flag übergeben.

Nun, da Sie eine Transaktion haben, müssen Sie ihre Lebensdauer verstehen. Transaktionen sind sehr eng an die Ereignisschleife gebunden. Wenn Sie eine Transaktion erstellen und zur Ereignisschleife zurückkehren, ohne sie zu verwenden, wird die Transaktion inaktiv. Der einzige Weg, die Transaktion aktiv zu halten, besteht darin, eine Anfrage darauf zu stellen. Wenn die Anfrage abgeschlossen ist, erhalten Sie ein DOM-Ereignis und, vorausgesetzt, dass die Anfrage erfolgreich war, haben Sie eine weitere Gelegenheit, die Transaktion während dieses Rückrufs zu verlängern. Wenn Sie zur Ereignisschleife zurückkehren, ohne die Transaktion zu verlängern, wird sie inaktiv, und so weiter. Solange es ausstehende Anfragen gibt, bleibt die Transaktion aktiv. Transaktionslebensdauern sind wirklich sehr einfach, aber es kann ein wenig dauern, um sich daran zu gewöhnen. Ein paar weitere Beispiele werden auch helfen. Wenn Sie anfangen, `TRANSACTION_INACTIVE_ERR`-Fehlercodes zu sehen, haben Sie etwas falsch gemacht.

Transaktionen können DOM-Ereignisse von drei verschiedenen Typen empfangen: `error`, `abort`, und `complete`. Wir haben über die Art gesprochen, wie Fehlerereignisse aufsteigen, so dass eine Transaktion Fehlerereignisse von allen Anfragen empfängt, die daraus generiert werden. Ein subtilerer Punkt hier ist, dass das Standardverhalten eines Fehlers darin besteht, die Transaktion, in der er auftrat, abzubrechen. Wenn Sie den Fehler nicht behandeln, indem Sie zuerst `stopPropagation()` für das Fehlerereignis aufrufen und dann etwas anderes tun, wird die gesamte Transaktion zurückgesetzt. Dieses Design zwingt Sie, über Fehler nachzudenken und sie zu behandeln, aber Sie können immer einen allgemeinen Fehlerhandler zur Datenbank hinzufügen, wenn eine feingranulare Fehlerbehandlung zu umständlich ist. Wenn Sie ein Fehlerereignis nicht behandeln oder `abort()` für die Transaktion aufrufen, wird die Transaktion zurückgesetzt und ein `abort`-Ereignis wird auf die Transaktion ausgelöst. Andernfalls, nachdem alle ausstehenden Anfragen abgeschlossen sind, erhalten Sie ein `complete`-Ereignis. Wenn Sie viele Datenbankoperationen ausführen, kann das Verfolgen der Transaktion anstatt einzelner Anfragen sicherlich Ihrer Vernunft zugute kommen.

Nun, da Sie eine Transaktion haben, müssen Sie den Objektspeicher daraus abrufen. Transaktionen erlauben Ihnen nur, einen Objektspeicher zu haben, den Sie beim Erstellen der Transaktion angegeben haben. Dann können Sie alle benötigten Daten hinzufügen.

```js
// Tun Sie etwas, wenn alle Daten zur Datenbank hinzugefügt sind.
transaction.oncomplete = (event) => {
  console.log("Alles erledigt!");
};

transaction.onerror = (event) => {
  // Vergessen Sie nicht, Fehler zu behandeln!
};

const objectStore = transaction.objectStore("customers");
customerData.forEach((customer) => {
  const request = objectStore.add(customer);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
  };
});
```

Das `result` einer Anfrage, die aus einem Aufruf von `add()` generiert wurde, ist der Schlüssel des hinzugefügten Wertes. In diesem Fall sollte es also der `ssn`-Eigenschaft des hinzugefügten Objekts entsprechen, da der Objektspeicher die `ssn`-Eigenschaft für den Schlüsselpfad verwendet. Beachten Sie, dass die `add()`-Funktion erfordert, dass sich kein Objekt bereits in der Datenbank mit demselben Schlüssel befindet. Wenn Sie versuchen, einen bestehenden Eintrag zu ändern, oder es Ihnen egal ist, ob einer bereits existiert, können Sie die `put()`-Funktion verwenden, wie im Abschnitt [Aktualisieren eines Eintrags in der Datenbank](#aktualisieren_eines_eintrags_in_der_datenbank) weiter unten gezeigt.

### Daten aus der Datenbank entfernen

Das Entfernen von Daten ist sehr ähnlich:

```js
const request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = (event) => {
  // Es ist gelöscht!
};
```

### Daten aus der Datenbank abrufen

Nun, da die Datenbank einige Informationen enthält, können Sie diese auf verschiedene Arten abrufen. Zuerst das einfache `get()`. Sie müssen den Schlüssel angeben, um den Wert abzurufen, so:

```js
const transaction = db.transaction(["customers"]);
const objectStore = transaction.objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // Fehler behandeln!
};
request.onsuccess = (event) => {
  // Tun Sie etwas mit request.result!
  console.log(`Name für SSN 444-44-4444 ist ${request.result.name}`);
};
```

Das ist eine Menge Code für ein "einfaches" Abrufen. Hier ist, wie Sie es etwas abkürzen können, vorausgesetzt, dass Sie Fehler auf der Datenbankebene behandeln:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name für SSN 444-44-4444 ist ${event.target.result.name}`);
};
```

Sehen Sie, wie das funktioniert? Da es nur einen Objektspeicher gibt, können Sie vermeiden, eine Liste von Objektspeichern zu übergeben, die Sie in Ihrer Transaktion benötigen, und einfach den Namen als String übergeben. Außerdem lesen Sie nur von der Datenbank, sodass Sie keine `"readwrite"`-Transaktion benötigen. Ein Aufruf von `transaction()` ohne angegebenen Modus gibt Ihnen eine `"readonly"`-Transaktion. Ein weiterer Feinpunkt hier ist, dass Sie das Anfrageobjekt nicht tatsächlich in einer Variablen speichern. Da das DOM-Ereignis die Anfrage als target hat, können Sie das Ereignis verwenden, um zur `result`-Eigenschaft zu gelangen.

### Aktualisieren eines Eintrags in der Datenbank

Nun haben wir einige Daten abgerufen, das Aktualisieren und Wiedereinfügen in die IndexedDB ist ziemlich einfach. Lassen Sie uns das vorherige Beispiel etwas ändern:

```js
const objectStore = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // Fehler behandeln!
};
request.onsuccess = (event) => {
  // Holen Sie sich den alten Wert, den wir aktualisieren möchten
  const data = event.target.result;

  // Aktualisieren Sie den oder die Wert(e) im Objekt, den oder die Sie ändern möchten
  data.age = 42;

  // Legen Sie dieses aktualisierte Objekt wieder in die Datenbank.
  const requestUpdate = objectStore.put(data);
  requestUpdate.onerror = (event) => {
    // Tun Sie etwas mit dem Fehler
  };
  requestUpdate.onsuccess = (event) => {
    // Erfolg - die Daten sind aktualisiert!
  };
};
```

Wir erstellen hier also einen `objectStore` und fordern einen Kundendatensatz daraus an, identifiziert durch seinen `ssn`-Wert (`444-44-4444`). Wir legen dann das Ergebnis dieser Anfrage in einer Variablen (`data`) ab, aktualisieren die `age`-Eigenschaft dieses Objekts, und erzeugen dann eine zweite Anfrage (`requestUpdate`), um den Kundendatensatz wieder in den `objectStore` zu legen, wobei der vorherige Wert überschrieben wird.

> [!NOTE]
> In diesem Fall mussten wir eine `readwrite`-Transaktion angeben, da wir in die Datenbank schreiben möchten, nicht nur daraus lesen.

### Verwendung eines Cursors

Die Verwendung von `get()` erfordert, dass Sie wissen, welchen Schlüssel Sie abrufen möchten. Wenn Sie alle Werte in Ihrem Objektspeicher durchlaufen möchten, können Sie einen Cursor verwenden. Das sieht so aus:

```js
const objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`Name für SSN ${cursor.key} ist ${cursor.value.name}`);
    cursor.continue();
  } else {
    console.log("Keine weiteren Einträge!");
  }
};
```

Die Funktion `openCursor()` nimmt mehrere Argumente. Erstens können Sie den Bereich der abgerufenen Elemente mit einem Schlüsselbereichsobjekt einschränken, zu dem wir gleich kommen werden. Zweitens können Sie die Richtung festlegen, in der Sie iterieren möchten. Im obigen Beispiel iterieren wir über alle Objekte in aufsteigender Reihenfolge. Der Erfolg-Callback für Cursors ist ein wenig besonders. Das Cursorobjekt selbst ist das `result` der Anfrage (oben verwenden wir die Kurzschreibweise, also ist es `event.target.result`). Dann können der tatsächliche Schlüssel und Wert auf den `key`- und `value`-Eigenschaften des Cursorobjekts gefunden werden. Wenn Sie fortfahren möchten, müssen Sie `continue()` für den Cursor aufrufen. Wenn Sie das Ende der Daten erreicht haben (oder wenn es keine Einträge gibt, die Ihrer `openCursor()`-Anfrage entsprechen), erhalten Sie immer noch einen Erfolg-Callback, aber die `result`-Eigenschaft ist `undefined`.

Ein häufiges Muster mit Cursors besteht darin, alle Objekte in einem Objektspeicher abzurufen und sie in ein Array zu setzen, wie folgt:

```js
const customers = [];

objectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    console.log(`Alle Kunden erhalten: ${customers}`);
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
> Es gibt einen Leistungskosten im Zusammenhang mit der Betrachtung der `value`-Eigenschaft eines Cursors, weil das Objekt faul erstellt wird. Wenn Sie `getAll()` verwenden, muss der Browser beispielsweise alle Objekte auf einmal erstellen. Wenn Sie nur daran interessiert sind, jeden der Schlüssel zu betrachten, wäre es viel effizienter, einen Cursor zu verwenden, als `getAll()` zu verwenden. Wenn Sie versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, verwenden Sie jedoch `getAll()`.

### Verwendung eines Indexes

Das Speichern von Kundendaten mit der Sozialversicherungsnummer als Schlüssel ist logisch, da die Sozialversicherungsnummer eine Person eindeutig identifiziert. (Ob dies für die Privatsphäre eine gute Idee ist, ist eine andere Frage und fällt nicht in den Geltungsbereich dieses Artikels.) Wenn Sie jedoch einen Kunden nach Name suchen müssen, müssen Sie alle Sozialversicherungsnummern in der Datenbank durchsuchen, bis Sie die richtige gefunden haben. Eine solche Suche wäre sehr langsam, daher können Sie stattdessen einen Index verwenden.

```js
// Stellen Sie zunächst sicher, dass Sie den Index in request.onupgradeneeded erstellt haben:
// objectStore.createIndex("name", "name");
// Andernfalls erhalten Sie eine DOMException.

const index = objectStore.index("name");

index.get("Donna").onsuccess = (event) => {
  console.log(`Donnas SSN ist ${event.target.result.ssn}`);
};
```

Der Name-Index ist nicht einzigartig, so dass es mehr als einen Eintrag mit dem Namen `"Donna"` geben könnte. In diesem Fall erhalten Sie immer den mit dem niedrigsten Schlüsselwert.

Wenn Sie auf alle Einträge mit einem gegebenen Namen zugreifen müssen, können Sie einen Cursor verwenden. Sie können zwei verschiedene Arten von Cursors für Indizes öffnen. Ein normaler Cursor ordnet die Indexeigenschaft dem Objekt im Objektspeicher zu. Ein Schlüsselkursor ordnet die Indexeigenschaft dem Schlüssel zu, der zum Speichern des Objekts im Objektspeicher verwendet wurde. Die Unterschiede werden hier veranschaulicht:

```js
// Verwenden eines normalen Cursors, um ganze Kundenaufzeichnungsobjekte zu erfassen
index.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key ist ein Name, wie "Bill", und cursor.value ist das ganze Objekt.
    console.log(
      `Name: ${cursor.key}, SSN: ${cursor.value.ssn}, E-Mail: ${cursor.value.email}`,
    );
    cursor.continue();
  }
};

// Verwenden eines Schlüsselkursors, um die Schlüssel der Kundenaufzeichnungsobjekte zu erfassen
index.openKeyCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key ist ein Name, wie "Bill", und cursor.primaryKey ist die SSN.
    // Keine Möglichkeit, den Rest des gespeicherten Objekts direkt abzurufen.
    console.log(`Name: ${cursor.key}, SSN: ${cursor.primaryKey}`);
    cursor.continue();
  }
};
```

### Spezifizieren des Bereichs und der Richtung von Cursors

Wenn Sie den Bereich der Werte einschränken möchten, die Sie in einem Cursor sehen, können Sie ein `IDBKeyRange`-Objekt verwenden und es als erstes Argument an `openCursor()` oder `openKeyCursor()` übergeben. Sie können einen Schlüsselbereich erstellen, der nur einen Schlüssel zulässt, oder einen, der eine untere oder obere Grenze hat, oder einen, der sowohl eine untere als auch eine obere Grenze hat. Die Grenze kann "geschlossen" sein (d.h. der Schlüsselbereich umfasst die angegebenen Wert(e)) oder "offen" (d.h. der Schlüsselbereich umfasst die angegeben
