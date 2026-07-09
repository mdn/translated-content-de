---
title: "Express Tutorial Teil 3: Nutzung einer Datenbank (mit Mongoose)"
short-title: "3: Nutzung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und wie Sie sie mit Node/Express-Anwendungen nutzen können. Im Anschluss wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um für die Webseite der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) den Datenbankzugang zu bieten. Es wird erklärt, wie Objektschemas und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem wird kurz auf einige der Hauptmethoden eingegangen, wie auf Modelldaten zugegriffen werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellen einer Skelett-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Bibliotheksmitarbeiter:innen werden die Local Library Webseite verwenden, um Informationen über Bücher und Entleiher:innen zu speichern, während Bibliotheksmitglieder sie nutzen werden, um Bücher zu durchsuchen und zu suchen, herauszufinden, ob es verfügbare Exemplare gibt, und dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen verwenden können. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), einschließlich PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Wahl einer Datenbank sollten Sie Dinge wie Zeit bis zur Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen mehr als akzeptabel für eine kleine bis mittelgroße Seite wie unsere Local Library sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Die Verwendung der nativen Abfragesprache der Datenbank, wie z.B. SQL.
- Die Verwendung eines Object Relational Mapper ("ORM") oder Object Document Mapper ("ODM"). Diese repräsentieren die Daten der Webseite als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankagnostisches Backend bieten.

Die beste _Leistung_ kann erzielt werden, indem SQL oder eine andere von der Datenbank unterstützte Abfragesprache verwendet wird. Objektmapper sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu mappen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer:innen in Begriffen von JavaScript-Objekten anstatt von Datenbanksemantik denken können – dies gilt besonders, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder verschiedenen Webseiten). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von größter Bedeutung, sollten Sie die Verwendung eines ODM ernsthaft in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Artikels beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten web framework [Sails](https://sailsjs.com/) extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf viele verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen und unterstützt Transaktionen, eifrige/verschachtelte relationale Laden, polymorphe Assoziationen sowie Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Ermöglicht es, die volle Leistung von SQL und der darunterliegenden Datenbank-Engine so einfach wie möglich zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank auf eine objektorientierte Weise zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Bug-Reports, Qualität der Dokumentation usw.) in Betracht ziehen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose mit großem Abstand der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend zu [MongoDB](https://www.mongodb.com/company/what-is-mongodb), einer Open Source [NoSQL](https://en.wikipedia.org/wiki/NoSQL) Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem dem JSON sehr ähnlich sieht und daher JavaScript-Entwickler:innen vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose Dokmentation](https://mongoosejs.com/docs/guide.html) _easier_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie anfangen, die Modelle zu programmieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere verfügbare Exemplare haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über die Autor:innen speichern als nur ihren Namen, und es könnte mehrere Autor:innen mit gleichen oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe von verwandten Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie Modelle auch verwenden, um Auswahllistenoptionen darzustellen (z. B. wie eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Webseite zu codieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasie, Wissenschaftsfiction, usw.).

Sobald wir uns über unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Hintergrund zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status spezifischer physischer Kopien des Buches im System) und die Autor:innen erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für `BookInstance:status` zu haben – wir werden die akzeptablen Werte hart kodieren, weil wir nicht erwarten, dass diese sich ändern. Innerhalb jedes der Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die zeigen, wie viele (maximale und minimale) Modelle in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` verwandt sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose_primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren, und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich – wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren und der Code, der den Erfolg oder das Scheitern der Methode behandelt, zu einem späteren Zeitpunkt ausführt, wenn die Operation abgeschlossen ist. Anderer Code kann ausgeführt werden, während der Server darauf wartet, dass die Datenbankoperation abgeschlossen wird, sodass der Server auf andere Anfragen weiterhin reagieren kann.

JavaScript verfügt über eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens. Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu asynchronen Methoden vertraut, um die Erfolgs- und Fehlerfälle zu behandeln. Im modernen JavaScript wurden die Rückrufe weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen. Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "abgewickelt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, um Code auszuführen, wenn ein Promise abgewickelt wird. Es ist sehr empfehlenswert, die [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten. In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf die Erfüllung des Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, weil dies zu lesbarerem und verständlicherem asynchronem Code führt.

Dieser Ansatz funktioniert folgendermaßen: Sie verwenden das `async function` Schlüsselwort, um eine Funktion als asynchron zu kennzeichnen, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt. Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb an der ersten `await`-Methode pausiert, bis das Promise abgewickelt wird. Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden. Später, wenn das Promise abgewickelt wird, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde. Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder eine andere `await`-Anweisung encountered wird, wobei er erneut pausiert, oder der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert. `myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird. Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise aufgelöst wird. Zu diesem Zeitpunkt wird der Code mit `functionThatReturnsPromise()` fortgesetzt und erneut gewartet. Der Code im `catch`-Block wird ausgeführt, wenn innerhalb der asynchronen Funktion ein Fehler ausgelöst wird, was passiert, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

```js
async function myFunction() {
  // …
  await someObject.methodThatReturnsPromise();
  // …
  await functionThatReturnsPromise();
  // …
}

try {
  // …
  myFunction();
  // …
} catch (e) {
  // error handling code
}
```

Die obigen asynchronen Methoden werden der Reihe nach ausgeführt. Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen. Dies erfolgt mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterierbares von Promises als Eingabe übernimmt und ein einzelnes `Promise` zurückgibt. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe zu Erfüllung gelangen, mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie dies funktioniert. Zuerst haben wir zwei Funktionen, die Promises zurückgeben. Wir `await` auf das Ergebnis von beiden, indem wir auf das von `Promise.all()` zurückgegebene Promise warten. Sobald beide abgeschlossen sind, gibt `await` zurück und das Ergebnisarray wird gefüllt, die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise abgewickelt ist. Sie würden `myFunction()` innerhalb eines `try...catch`-Blocks aufrufen, um Fehler abzufangen.

```js
async function myFunction() {
  // …
  const [resultFunction1, resultFunction2] = await Promise.all([
    functionThatReturnsPromise1(),
    functionThatReturnsPromise2(),
  ]);
  // …
  await anotherFunctionThatReturnsPromise(resultFunction1);
}
```

Promises mit `await`/`async` ermöglichen sowohl flexibles als auch "verständliches" Management asynchroner Ausführungen!

## Mongoose Primer

Dieser Abschnitt gibt einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Dieses Primer ist stark von der [Mongoose Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird wie jede andere Abhängigkeit in Ihrem Projekt (**package.json**) installiert — mit npm. Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Datenbank als Dienst_ für die kostenlose Ebene verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht für das Tutorial Sinn, da es die "Installation" betriebssystemunabhängig macht (Datenbank als Dienst ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank. Sie können `require()` und eine lokal gehostete Datenbank mit `mongoose.connect()` verbinden, wie unten gezeigt (für das Tutorial werden wir stattdessen eine internet-gehostete Datenbank verbinden).

```js
// Import the mongoose module
const mongoose = require("mongoose");

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

> [!NOTE]
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, `await`en wir hier auf das von der `connect()`-Methode zurückgegebene Promise innerhalb einer `async`-Funktion.
> Wir verwenden den `catch()`-Handler des Promises, um Fehler bei der Verbindung zu behandeln, aber wir könnten auch `main()` innerhalb eines `try...catch`-Blocks aufrufen.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten. Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden. Dies verwendet dieselbe Datenbank-URI-Form (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück. Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf das Herstellen der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Außerdem können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies ein wenig weiter unten diskutieren).

Schemas werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird in der MongoDB-Datenbank auf eine _Sammlung_ von _Dokumenten_ abgebildet. Die Dokumente werden die im Modell `Schema` definierten Felder/schema-Typen enthalten.

#### Definieren von Schemas

Das untenstehende Codefragment zeigt, wie Sie ein einfaches Schema definieren können. Zuerst `require()` Sie Mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, wobei die verschiedenen Felder im Objektparameter des Konstruktors definiert werden.

```js
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

Im obigen Fall haben wir nur zwei Felder, eine Zeichenkette und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, die Validierung und andere Methoden.

#### Erstellen eines Modells

Modelle werden aus Schemas mit der `mongoose.model()`-Methode erstellt:

```js
// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
```

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen durchzuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und beim Erstellen unserer Ansichten tun können.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes davon repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten. Ein Beispielschema, das viele der häufigen Feldtypen zeigt und wie sie deklariert werden, ist unten dargestellt.

```js
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

Die meisten der [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Beschreibungen nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autor:innenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein willkürlicher Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können auf diesen Modellen JavaScript-Array-Operationen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jeder Art von Objekt haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüsselwertpaar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z. B. max/min-Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder trimgeschnitten gesetzt werden sollen (z. B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, für alle Fälle sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für das Fehlschlagen der Validierung anzugeben.

Die eingebauten Validatoren sind unter anderem:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld angegeben werden muss, um ein Dokument zu speichern.
- [Nummern](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt einen regulären Ausdruck an, dem die Zeichenfolge entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Zeichenfolge.

Das Beispiel unten (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
```

Für vollständige Informationen über die Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzigen Wert in mehrere Werte zur Speicherung aufzuteilen. Das Beispiel in der Dokumentation konstruiert (und dekonstruiert) eine virtuelle Eigenschaft für den vollen Namen aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als einen vollen Namen jedes Mal zu konstruieren, wenn er in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Datensatz unter Verwendung eines Pfades und des `_id`-Werts des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [kettbare Abfragebauer-API von Mongoose](https://mongoosejs.com/docs/queries.html) zu erweitern (beispielsweise können Sie eine Abfrage "byName" hinzufügen, zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells individuelle Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben Ihnen einen kurzen Überblick unten. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Die Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. der wesentliche Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern sind zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen. Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig beim Speichern zu definieren. Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz über die Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte zurück in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können Datensätze mit Abfragemethoden durchsuchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das untenstehende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden können, die Tennis spielen und nur die Felder für den Namen und das Alter der Athleten zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an (Sport), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu bedenken, dass das Nichtfinden von Ergebnissen kein **Fehler** bei einer Suche ist – aber es kann im Kontext Ihrer Anwendung ein Fehlfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der in der Rückgabe erfassten Einträge überprüfen.

Query-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück. Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zusammenzustellen, bevor Sie sie mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen. `exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `awaiten` können.

```js
// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec();
```

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie separat hinzuzufügen. Das untenstehende Codefragment ist dasselbe wie unsere vorherige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();
```

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode erhält alle übereinstimmenden Datensätze, aber oft möchten Sie nur einen Treffer finden. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der mit Bedingungen übereinstimmenden Elemente zu erhalten. Dies ist nützlich, wenn Sie eine Zählung ohne tatsächlich das Abrufen der Datensätze durchführen möchten.

Es gibt noch viel mehr, was Sie mit Abfragen machen können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen mit dem `ObjectId` Schemafeld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des assoziierten Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Ein Beispiel dafür, wie Autoren und Geschichten als Schema definiert werden, wird im folgenden Code gezeigt. Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen. Jede Geschichte kann eine:n einzigen Autor:in haben. Die `ref`-Eigenschaft zeigt dem Schema, welches Modell diesem Feld zugewiesen werden kann.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
```

Wir können unsere Referenzen zum zugehörigen Dokument speichern, indem wir den `_id`-Wert zuweisen. Unten erstellen wir ein:e Autor:in, dann eine Geschichte und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

```js
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob now exists, so lets create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();
```

> [!NOTE]
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfungen komplizieren müssen. Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst. Unser Fehlerbehandlungscode behandelt das separat (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autors referenziert wird. Um die Autorinformation in den Geschichtsergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser:innen werden bemerkt haben, dass wir einen Author zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories` Array unseres Authors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre es, unsere Geschichte zum `stories` Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Orte haben, an denen die Information zur Beziehung zwischen Autoren und Geschichten gepflegt werden muss.
>
> Eine bessere Möglichkeit ist es, die `_id` unseres _Authors_ zu erhalten und dann `find()` zu verwenden, um nach dieser in dem `author` Feld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemas und Modelle mit jeder gewünschten Dateistruktur erstellen können, empfehlen wir dringend, jedes Modellschema in einem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren. Dies wird unten dargestellt:

```js
// File: ./models/some-model.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

Sie können das Modell dann direkt in anderen Dateien verwenden, indem Sie es einbinden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Da wir nun etwas über das, was Mongoose tun kann, und darüber, wie wir unsere Modelle entwerfen möchten, erfahren haben, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Webseite zu beginnen. Das erste, was wir tun möchten, ist eine MongoDB-Datenbank einzurichten, die wir zur Speicherung unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudbasierte Sandbox-Datenbank. Diese Datenbankstufe wird nicht als geeignet für Produktionswebseiten angesehen, da sie keine Redundanz hat, ist jedoch großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Dienst_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, mit Ausnahme der Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellen in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten ebenso eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Zunächst müssen Sie ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten angeben und ihren Nutzungsbedingungen zustimmen).

Nach der Anmeldung werden Sie zur [Startseite](https://cloud.mongodb.com/v2) weitergeleitet:

1. Klicken Sie auf die **+ Erstellen** Schaltfläche im _Übersicht_ Bereich.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den _Bereitstellen Ihres Clusters_ Bildschirm.
   Klicken Sie auf die **M0 FREE** Vorlagenoption.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie zur Seite, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten es in diesem Tutorial als `Cluster0`.
   - Deaktivieren Sie das _Preload sample dataset_ Kontrollkästchen, da wir später unsere eigenen Beispieldaten importieren.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_. Verschiedene Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Deployment erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den _Security Quickstart_ Abschnitt.
   ![Richten Sie die Zugriffsregeln auf dem Security Quickstart Bildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Anmelde "cooluser" erstellt).
     Denken Sie daran, die cP]

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise den Verbindungsstring nicht richtig analysiert.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer aus zu erlauben.
   - Geben Sie `0.0.0.0/0` im IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall aus zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu begrenzen, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall aus, da wir nicht wissen, von wo aus die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertig stellen und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht**.
   ![Gehen Sie zu den Datenbanken nach dem Einrichten der Zugriffsregeln auf MongoDB Atlas.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur Übersicht zurück. Klicken Sie im Abschnitt _Datenbank_ im linken Menü _Bereitstellung_ auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, nachdem Ihre Datenbank erstellt wurde.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im Überblick von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach dem Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Verbindung zu Cluster0_.

    ![Wählen Sie die kurze SRV-Verbindung, wenn Sie eine Verbindung auf MongoDB Atlas einrichten.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das Symbol **Kopieren**, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den `<password>`-Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit diesem String irgendwo sicher.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen. Diese wird in etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben. Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits bei der Lektüre des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (vom Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unter die Stelle, an der Sie den Port setzen (nach der Zeile `app.set("port", port);`). Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. mit den Informationen von _MongoDB Atlas_).

```js
// Set up mongoose connection
const mongoose = require("mongoose");

const mongoDB = "insert_your_database_url_here";

async function connectMongoose() {
  await mongoose.connect(mongoDB);

  // Add connection error handlers
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
}

try {
  connectMongoose();
} catch (err) {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
}
```

Wie im [Mongoose Primer](#verbindung_zu_mongodb) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet Fehler an die Konsole.

> [!NOTE]
> Wir hätten den Datenbankverbindungscode in unseren **app.js** Code setzen können. Wenn wir ihn im Anwendungseinstiegspunkt platzieren, entkoppelt dies die Anwendung und die Datenbank, was es einfacher macht, eine andere Datenbank für das Ausführen von Testcode zu verwenden.

Beachten Sie, dass das Hardcoding von Datenbank-Anmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird. Wir tun es hier, weil es den Kernverbindungscode zeigt und weil es während der Entwicklung kein erhebliches Risiko gibt, dass das Lecken dieser Details sensible Informationen offenlegt oder korrumpiert. Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn Sie [in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definieren des LocalLibrary Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file). Beginnen Sie mit der Erstellung eines Ordners für unsere Modelle im Projektstammverzeichnis (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den `Author`-Schema-Code unten und fügen Sie ihn in Ihre **./models/author.js** Datei ein. Das Schema definiert einen Autor mit `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date` Feldern für die Geburts- und Sterbedaten.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
```

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema mit dem Namen "url" deklariert, das die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten – wir werden die Eigenschaft in unseren Templates verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, da dann die URL für ein Element nur an einer Stelle geändert werden muss. Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, da wir noch keinen Routenbehandlungscode für einzelne Modellinstanzen haben. Wir richten diese in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Buch-Modell

Kopieren Sie den `Book`-Schema-Code unten und fügen Sie ihn in Ihre **./models/book.js** Datei ein. Die meisten Teile dieses Codes sind dem Autorenmodell ähnlich – wir haben ein Schema mit einer Reihe von String-Feldern und einem virtuellen Feld zur Erlangung der URL für spezifische Buchdatensätze deklariert und haben das Modell exportiert.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Book", BookSchema);
```

Der Hauptunterschied hier ist, dass wir zwei Referenzen zu anderen Modellen erstellt haben:

- Autor ist eine Referenz zu einem einzelnen `Author` Modellobjekt und ist erforderlich.
- Genre ist eine Referenz zu einem Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz-Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code unten und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein. Die `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie voraussichtlich zurückgegeben wird und "im Print" (oder Versionsangaben).

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/bookinstance/${this._id}`;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
```

Die neuen Dinge, die wir hier zeigen, sind die Feldoptionen:

- `enum`: Dies erlaubt es uns, die erlaubten Werte einer Zeichenkette festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher zu spezifizieren (durch die Verwendung eines Enums können wir Fehlschreibungen und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden `default`, um den Standardstatus für neu erstellte Buchinstanzen auf "Maintenance" und das Standard-`due_back`-Datum auf `now` zu setzen (beachten Sie, wie Sie beim Setzen des Datums die Date-Funktion aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema für die Speicherung von Genres (der Kategorie des Buches, z. B. ob es Fiktion oder Sachbuch, Romantik oder Militärgeschichte usw. ist).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen – Erstellen einiger Elemente

Das war's. Wir haben jetzt alle Modelle für die Seite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), werden wir jetzt ein _unabhängiges_ Skript ausführen, um Elemente jedes Typs zu erstellen:

1. Laden Sie (oder erstellen Sie) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` ist möglicherweise nützlich, um JavaScript zu lernen, muss jedoch für dieses Tutorial nicht verstanden werden.

2. Führen Sie das Skript mit node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie verwendet haben, um den _insert_your_database_url_here_ Platzhalter in `app.js` früher zu ersetzen):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen ("). In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zur Fertigstellung ausgeführt werden und Elemente bei der Erstellung im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab). Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autor:innen, Genres und Buchinstanzen zu drillen und sich einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemas und -Modelle definiert werden. Dann haben wir diese Informationen verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_-Webseite zu gestalten und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns mit der Erstellung einiger Seiten zur Anzeige dieser Objekte befassen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokument)
- [Mongoose Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
