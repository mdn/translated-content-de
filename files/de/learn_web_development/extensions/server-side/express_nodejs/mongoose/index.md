---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie Sie [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website bereitzustellen. Es wird erklärt, wie Objektschema und -modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierung. Außerdem werden kurz einige der wichtigsten Möglichkeiten gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellen einer Skeleton-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Bibliotheksmitarbeiter werden die Local Library-Website nutzen, um Informationen über Bücher und Ausleiher zu speichern, während die Bibliotheksmitglieder sie nutzen, um nach Büchern zu suchen, zu sehen, ob Exemplare verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, wird diese in einer _Datenbank_ gespeichert.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen verwenden können. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann ausführlich die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten oder Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html) wie PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Lernkurve, Leistung, Replizierbarkeit/Backup, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen mehr als akzeptabel für eine kleine bis mittelgroße Website wie unsere Local Library sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Wie interagiere ich am besten mit einer Datenbank?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbanken, wie SQL.
- Verwendung eines Object Relational Mapper ("ORM") oder Object Document Mapper ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bereitstellen.

Die beste _Leistung_ kann erzielt werden, indem SQL oder die unterstützte Abfragesprache der Datenbank verwendet wird. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu vermitteln, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn der Mapper verschiedene Datenbank-Backends unterstützt, und größere Kompromisse in Bezug auf unterstützte Datenbankfunktionen machen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt Datenbanksemantik — dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder unterschiedlichen Websites). Sie bieten auch einen offensichtlichen Ort für die Durchführung von Datenvalidierungen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind mit der nativen Abfragesprache sehr vertraut oder die Leistung ist von größter Wichtigkeit, sollten Sie die Verwendung eines ODM ernsthaft in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Auszug an!).

Einige Lösungen, die zum Zeitpunkt der Erstellung populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, bietet Unterstützung für Transaktionen, eager/nested-eager-Beziehungsladen, polymorphe Assoziationen sowie Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basierter ORM für Node.js und io.js. Er unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objektbeziehungsmanager für NodeJS. Er unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank in einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für RESTful APIs, GraphQL ist sehr populär und bietet Funktionen zum Lesen von Daten aus Datenbanken an.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung in Betracht ziehen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwenden von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) werden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend zu [MongoDB](https://www.mongodb.com/company/what-is-mongodb), einer Open-Source-NoSQL-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem stark JSON ähnelt und JavaScript-Entwicklern daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl einige Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie die Mongoose-Schema und -Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugegriffen werden.

## Gestaltung der LocalLibrary-Modelle

Bevor Sie direkt beginnen und die Modelle codieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare zur Verfügung haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über die Autoren speichern als nur ihren Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und der Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z. B. eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Hintergrund zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästen). Wie oben besprochen, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status der spezifischen physischen Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hartcodieren, da wir nicht erwarten, dass sie sich ändern. In jedem der Kästen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabearten sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) der Modelle zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästen, dass `Book` und `Genre` verwandt sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s (so viele Sie möchten) haben muss, während die Zahlen am anderen Ende der Linie neben dem `Genre` anzeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (man kann die umgekehrte Beziehung immer noch finden, indem man nach der zugeordneten `_id` im anderen Modell sucht). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet ein grundlegendes Primer, das erklärt, wie Modelle definiert und verwendet werden. Während Sie es lesen, bedenken Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung des Erfolgs oder Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist. Während der Server auf den Abschluss der Datenbankoperation wartet, kann anderer Code ausgeführt werden, sodass der Server auf andere Anfragen weiterhin reagieren kann.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens. Historisch verlässt sich JavaScript stark darauf, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um die Erfolgs- und Fehlerfälle zu behandeln. In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden und ihren zukünftigen Zustand repräsentieren. Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erfüllt" und löst ein Objekt, das das Ergebnis der Operation oder einen Fehler repräsentiert.

Es gibt zwei Hauptwege, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt ist, und wir empfehlen Ihnen dringend, [Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten. In diesem Tutorial nutzen wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) um auf das Fischwerden des Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu leserlichem und verständlicherem asynchronen Code führt.

Diese Methode funktioniert folgendermaßen: Sie verwenden das Schlüsselwort `async function`, um eine Funktion als asynchron zu markieren, und innerhalb dieser Funktion wenden Sie `await` auf jede Methode an, die ein Promise zurückgibt. Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb an der ersten `await`-Methode pausiert, bis das Promise erfüllt wird. Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück, und der nachfolgende Code kann ausgeführt werden. Sobald das Promise erfüllt wird, kehrt die `await`-Methode in der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde. Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` angetroffen wird, bei dem wieder pausiert wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert. `myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird. Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise erfüllt wird. Dann geht es weiter zu `aFunctionThatReturnsPromise()` und wartet erneut. Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird. Dies geschieht, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

```js
async function myFunction() {
  // …
  await someObject.methodThatReturnsPromise();
  // …
  await aFunctionThatReturnsPromise();
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

Die asynchronen Methoden oben werden nacheinander ausgeführt. Wenn die Methoden voneinander unabhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen. Dies wird mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) erreicht, die ein Iterable von Promises als Eingabe entgegennimmt und ein einziges `Promise` zurückgibt. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe erfüllt sind, mit einem Array der Erfolgswerte. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit dem ersten Ablehnungsgrund.

Der nachfolgende Code zeigt, wie das funktioniert. Wir haben zunächst zwei Funktionen, die Promises zurückgeben. Wir `await` auf beide, um sie mit dem Promise, das von `Promise.all()` zurückgegeben wird, abzuschließen. Sobald beide abgeschlossen sind, kehrt `await` zurück und das Array der Ergebnisse wird befüllt, die Funktion fährt dann fort zum nächsten `await` und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise beendet ist. Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um alle Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch verständliche Kontrolle über die asynchrone Ausführung!

## Mongoose-Primer

Dieser Abschnitt bietet eine Übersicht darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Dieser Primer ist stark von der [Mongoose-Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit – mit npm – installiert. Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Datenbank als Dienst_ Free Tier, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und ergibt Sinn für das Tutorial, da es die „Installation“ betriebssystemunabhängig macht. (Database-as-a-Service ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank. Sie können `require()` verwenden und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial werden wir uns stattdessen mit einer internetgehosteten Datenbank verbinden).

```js
// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

> [!NOTE]
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, `await`en wir hier auf das von der `connect()`-Methode zurückgebene Promise innerhalb einer `async`-Funktion.
> Wir verwenden den `catch()`-Handler des Promises, um Fehler beim Verbindungsversuch zu behandeln, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten. Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden. Dies akzeptiert dieselbe Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück. Beachten Sie, dass `createConnection()` sofort zurückgibt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie sie mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die Felder, die in jedem Dokument gespeichert werden, zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Zudem können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, aber die nicht in der Datenbank gespeichert werden (wir werden dies weiter unten besprechen).

Schemas werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell mappt zu einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die Felder/schema-Typen, die im Modell-Schema definiert sind.

#### Definieren von Schemata

Der folgende Code-Schnipsel zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()`n Sie Mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierung und andere Methoden.

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

Das erste Argument ist der singuläre Name der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen sowie Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir werden Ihnen zeigen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und beim Erstellen unserer Ansichten tun können.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben - jedes davon repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten. Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, wird unten gezeigt.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Beschreibungen nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt zu repräsentieren. Es wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()` Methode verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein willkürlicher Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift, usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Typ von Objekt haben.

Der Code zeigt auch beide Möglichkeiten der Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und andere _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben gesetzt oder getrimmt werden sollten (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren, sowie synchrone und asynchrone Validatoren. Es erlaubt Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren beinhalten:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eing...

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die Menge der erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt ein reguläres Ausdrucksmuster an, das der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

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

Für vollständige Informationen zur Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteneigenschaften, die Sie abrufen und setzen können, die jedoch nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzigen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und zerlegt) einen vollständigen Namen als virtuelle Eigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist als das Konstruieren eines vollständigen Namens jedes Mal, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden in der Bibliothek eine virtuelle Eigenschaft verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es, die [verweilbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem man eine Abfrage "byName" in Ergänzung zu den `find()`, `findOne()` und `findById()`-Methoden hinzufügt).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zur Erfassung von Fehlern werden aus Gründen der Klarheit weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig zu definieren, wenn Sie sie speichern.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (das wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können mit der Punktnotation auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, wobei Sie die Abfragebedingungen als JSON-Dokument angeben. Der folgende Codeausschnitt zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und nur die Felder für den Namen und das Alter der Athleten zurückgeben. Hier geben wir nur ein übereinstimmendes Feld (Sportart) an, aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zu erhalten.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, sich daran zu erinnern, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — aber es kann ein Fehlschlagfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor sie mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausgeführt wird.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie `await` für das Ergebnis machen können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) aneinanderketten, anstatt sie separat hinzuzufügen.
Der folgende Codeausschnitt entspricht unserer oben genannten Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode holt alle übereinstimmenden Datensätze, aber oft möchte man nur eine Übereinstimmung erhalten. Die folgenden Methoden suchen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Elemente, die Bedingungen entsprechen, zu erhalten. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne tatsächlich die Datensätze abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten – Population

Sie können Referenzen von einem Dokument/Modellelement zu einem anderen mit dem `ObjectId`-Schema-Feld erstellen, oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID mit den tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren die folgenden Schemas Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzigen Autor haben.
Die `ref`-Eigenschaft teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen zum zugehörigen Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autor-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstil ist es, dass wir den Hauptpfad unseres Codes nicht mit der Fehlerprüfung verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Versprechen abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode befasst sich separat damit (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autorinformationen in den Geschichten-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserer Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte in das `stories`-Array unseres Autors aufzunehmen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte dem `stories`-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen, die Autoren und Geschichten in Beziehung setzen, gepflegt werden müssen.
>
> Ein besserer Weg besteht darin, die `_id` unseres _autors_ zu erhalten und dann `find()` zu verwenden, um nach dieser im autorenfeld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und die Methode zum Erstellen des Modells zu exportieren. Dies ist unten gezeigt:

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

Sie können dann das Modell sofort in anderen Dateien verwenden. Im Folgenden zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Da wir nun etwas darüber wissen, was Mongoose leisten kann und wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_-Website zu beginnen. Das allererste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank. Diese Datenbankstufe wird nicht für Produktionswebsites als geeignet angesehen, da sie keine Redundanz hat, aber sie ist großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Database as a Service_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Wahlmöglichkeiten zur Zeit des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, bis auf die Datenbank-URL, die Sie bei der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nach der Anmeldung gelangen Sie auf den [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Erstellen** Schaltfläche im Abschnitt _Überblick_.

   ![Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Cluster bereitstellen_.
   Klicken Sie auf die **M0 FREE** Option Schablone.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie herunter, um die verschiedenen Auswahlmöglichkeiten zu sehen.
   ![Wählen Sie einen Cloud-Anbieter bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern. Wir behalten `Cluster0` für dieses Tutorial bei.
   - Deaktivieren Sie das _Beispieldaten-Set vorab laden_-Kontrollkästchen, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Deployment erstellen** (die Erstellung vom Cluster dauert einige Minuten).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Richten Sie die Zugriff Regeln im Sicherheits-Schnellstartbildschirm ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort an, das Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten zu kopieren und sicher zu speichern, da wir diese später benötigen.
     Klicken Sie auf die Schaltfläche **Benutzer anlegen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise den Verbindung...

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise den Verbindung...

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise den Verbindungsstring nicht korrekt analysiert.

   - Wählen Sie **Hinzufügen durch aktuelle IP-Adresse** aus, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` im IP-Adressfeld ein und klicken Sie dann auf **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine Best Practice, die IP-Adressen zu beschränken, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir einen Zugriff von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und Schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Gehe zu Übersicht**.
   ![Gehe zu Datenbanken, nachdem die Zugriff Regeln auf MongoDB Atlas eingerichtet wurden.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Überblick_ Bildschirm zurück. Klicken Sie im Menü _Bereitstellung_ auf der linken Seite auf den Abschnitt _Datenbank_ und dann auf **Sammlungen durchsuchen**.
   ![Einrichten einer Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Eigene Daten hinzufügen**.
   ![Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details bei der Erstellung der Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie als Namen für die neue Datenbank `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ mit ihrer erstellten Datenbank zurück.
   ![Datenbank-Erstellungsbestätigung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Überblick_ um zu der Clusterübersicht zurückzukehren.

10. Vom Cluster0 _Überblick_ Bildschirm klicken Sie auf die Schaltfläche **Verbinden**.

    ![Verbindung einrichten, nachdem ein Cluster in MongoDB Atlas erstellt wurde.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Verbindung mit Cluster0 aufbauen_.

    ![Wählen Sie die kurze SRV-Verbindung bei der Einrichtung der Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den **Node.js**-Treiber und die _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihren lokalen Texteditor ein.
    - Ersetzen Sie das `<password>` Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Diese sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren Sie Mongoose

Öffnen Sie ein Eingabeaufforderungsfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skeleton Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits getan, als Sie den [Mongoose Primer](#installation_von_mongoose_und_mongodb) oben gelesen haben.

```bash
npm install mongoose
```

## Stellen Sie die Verbindung zu MongoDB her

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklariert haben (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der URL, die Ihre eigene Datenbank darstellt (d.h. mit den Informationen von _MongoDB Atlas_).

```js
// Set up mongoose connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

Wie im [Mongoose-Primer](#verbindung_zu_mongodb) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

Beachten Sie, dass das Hardcoding von Datenbank-Anmeldedaten im Quellcode wie oben gezeigt nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies auf sicherere Weise tun, wenn Sie [in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie, indem Sie einen Ordner für unsere Modelle im Stammverzeichnis des Projekts (**/models**) erstellen und dann separate Dateien für jedes der Modelle erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie Ihn in Ihre **./models/author.js**-Datei ein.
Das Schema definiert einen Autor als `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date` Felder für die Geburts- und Sterbedaten.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema mit dem Namen "url" deklariert, das die absolute URL für den Zugriff auf bestimmte Modellinstanzen zurückgibt – wir verwenden diese Eigenschaft in unseren Vorlagen, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuelle im Schema ist eine gute Idee, da der URL für ein Element nur einmal geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, da wir noch keinen Routenhandling-Code für individuelle Modellinstanzen haben.
> Wir werden diese später in einem anderen Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js**-Datei ein.
Das meiste davon ist dem Author-Modell ähnlich - wir haben ein Schema mit mehreren String-Feldern und einem virtuellen für die URL-Erstellung bestimmter Buchdatensätze deklariert, und wir haben das Modell exportiert.

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

Der wichtigste Unterschied hier liegt darin, dass wir zwei Referenzen zu anderen Modellen erstellt haben:

- author ist eine Referenz zu einem einzelnen `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz zu einem Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BookInstance-Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie Ihn in ihre **./models/bookinstance.js**-Datei ein.
`BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie zurückerwartet wird, und "Imprint" (oder Versions-) Details.

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

Die neuen Elemente, die wir hier zeigen, sind die Feldoptionen:

- `enum`: Dies ermöglicht es uns, die erlaubten Werte eines Strings festzulegen. In diesem Fall verwenden wir ihn, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir falsche Schreibweisen und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden Standardwerte, um den Standardstatus für neu erstellte Buchinstanzen auf "Maintenance" zu setzen und das Standard-`due_back`-Datum auf `now` (beachten Sie, wie Sie die Date-Funktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte Ihnen von unseren vorherigen Schemata vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js**-Datei und erstellen Sie ein Schema für die Speicherung von Genres (die Kategorie des Buches, z.B., ob es Fiktion oder Sachbuch ist, Romantik oder Militärgeschichte, usw.).

Die Definition wird den anderen Modellen sehr ähneln:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, die `url` genannt wird.
- Exportieren Sie das Modell.

## Testen - einige Artikel erstellen

Das war's. Wir haben nun alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Gegenstände zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Script aus, um Gegenstände jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich beim Erlernen von JavaScript sein, aber ihn zu verstehen ist für dieses Tutorial nicht notwendig.

2. Führen Sie das Script mit Node in Ihrer Befehlszeile aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie zuvor verwendet haben, um das _insert_your_database_url_here_ Platzhalter in `app.js` zu ersetzen):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > In anderen Betriebssystemen könnten einfache (') Anführungszeichen notwendig sein.

3. Das Script sollte bis zum Ende laufen und dabei Artikel erstellen, die in der Konsole angezeigt werden.

> [!NOTE]
> Gehen Sie in Ihre Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen einzusteigen und einzelne Dokumente nachzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemata und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um die `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (mit einem eigenständigen Script). Im nächsten Artikel werden wir uns anschauen, wie wir einige Seiten erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Bevölkerung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
