---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) nutzen können, um auf die Datenbank der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website zuzugreifen. Er erklärt, wie Objektschema und Modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierung. Außerdem zeigt er kurz einige der Hauptmethoden, um auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellen einer Grundstruktur für eine Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Modelle mit Mongoose entwerfen und erstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Bibliothekspersonal wird die Local Library Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder diese nutzen, um Bücher zu durchsuchen und zu suchen, um festzustellen, ob Kopien verfügbar sind, und dann Bücher zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir diese in einer _Datenbank_ speichern.

Express-Anwendungen können verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen durchzuführen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie die Produktivität bzw. die Lernkurve, die Leistung, die Einfachheit der Replikation/Sicherung, die Kosten, die Unterstützung durch die Community usw. berücksichtigen. Obwohl es keine "beste" Datenbank gibt, sollten fast alle der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als ausreichend sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Lösung bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erreicht werden. Objektabbildungen sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu konvertieren, das möglicherweise nicht die effizientesten Datenbankabfragen benutzt (dies ist besonders der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der unterstützten Datenbankfeatures eingegangen werden müssen).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Begriffen von JavaScript-Objekten denken können und nicht in Datenbanksemantiken – dies ist besonders der Fall, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Kosten für die Entwicklung und Wartung! Solange Sie nicht sehr vertraut mit der nativen Abfragesprache sind oder die Leistung von höchster Bedeutung ist, sollten Sie ernsthaft die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paket-Manager-Website (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungswerkzeug, das für den Einsatz in einer asynchronen Umgebung konzipiert ist.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl versprechenbasierte als auch traditionelle Callback-Schnittstellen, unterstützt Transaktionen, eagere/verschachtelt eagere Beziehungsladung, polymorphe Assoziationen und unterstützt Eins-zu-eins-, Eins-zu-viele- und Viele-zu-viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objekt-Relationship-Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und erleichtert die Arbeit mit der Datenbank durch einen objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful-APIs, ist GraphQL sehr beliebt und verfügt über Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Features als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlermeldungen, Qualität der Dokumentation usw.) beim Auswählen einer Lösung berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir Mongoose-ODM verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Front-End zu MongoDB, einer Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Kollektion" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr ähnlich wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die Mongoose-Modelle für das [LocalLibrary-Websitebeispiel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definiert und aufgerufen werden.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, ist es sinnvoll, sich einige Minuten über die Daten nachzudenken, die wir speichern müssen, und die Beziehungen zwischen den verschiedenen Objekten zu berücksichtigen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir mehrere Kopien (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.) haben könnten. Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur den Namen, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahl-Listenoptionen zu vertreten (z.B. wie eine Dropdown-Liste von Optionen), anstatt die Optionen fest in die Website zu kodieren - dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Gedanken im Hinterkopf zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben erörtert, haben wir Modelle für das Buch (die allgemeinen Details zum Buch), die Buchinstanz (Status spezifischer physischer Kopien des im System verfügbaren Buches), und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir werden die zulässigen Werte fest codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb der Boxen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabewerte.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximum und minimum) jedes im Zusammenhang stehenden Modells angeben. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Book` und ein `Genre` zusammenhängen. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genres` haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Grundlagenkurs](#mongoose-grundlagen) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung trotzdem finden, indem Sie im anderen Modell nach der zugehörigen `_id` suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich – wir hätten das Feld genauso gut in dem anderen Schema haben können.

![Mongoose Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung dazu, wie Modelle definiert und verwendet werden. Beim Lesen sollten Sie darüber nachdenken, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zum Behandeln des Erfolgs oder Fehlers der Methode später ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, so dass der Server weiterhin auf andere Anfragen reagieren kann.

JavaScript verfügt über verschiedene Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Rückruffunktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zurückgegriffen, um Erfolg und Fehler zu behandeln.
In modernem JavaScript wurden Rückrufe weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die sofort von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "abgewickelt" und löst ein Objekt auf, das das Ergebnis der Operation oder eines Fehlers darstellt.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise abgewickelt wird. Wir empfehlen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu lesbarerem und verständlicherem asynchronem Code führt.

Diese Vorgehensweise funktioniert so, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu markieren, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb an der ersten `await`-Methode unterbrochen, bis das Promise abgewickelt ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Später, wenn das Promise abgewickelt wird, kehrt die `await`-Methode in der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein anderes `await` erreicht wird, an welchem Punkt es erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung an `methodThatReturnsPromise()` pausiert, bis das Promise aufgelöst wird, zu welchem Zeitpunkt der Code zu `aFunctionThatReturnsPromise()` fortfährt und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und dies wird passieren, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden in Reihenfolge ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies wird mit der [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode durchgeführt, die ein Iterable von Promises als Eingabe nimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt werden, mit einem Array von Erfüllungswerten.
Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der unten stehende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, um mit dem Promise abzuschließen, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, wird `await` zurückgegeben und das Ergebnisse-Array ist gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, abgewickelt ist.
Sie würden das `myFunction()` in einem `try...catch` Block aufrufen, um Fehler zu fangen.

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

Promises mit `await`/`async` erlauben sowohl flexible als auch "verständlichere" Kontrolle über die asynchrone Ausführung!

## Mongoose-Grundlagen

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Diese Einführung ist stark von dem [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert – mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber MongoDB selbst wird nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Database as a Service_ Free-Tier verwenden, um die Datenbank bereitzustellen. Diese ist für die Entwicklung geeignet und macht für das Tutorial Sinn, da sie das "Installieren" betriebssystemunabhängig macht (Database as a Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und mit `mongoose.connect()` zu einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial verbinden wir uns stattdessen zu einer internet-gehosteten Datenbank).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, warten wir hier auf das Promise, das von der `connect()`-Methode innerhalb einer `async`-Funktion zurückgegeben wird.
> Wir verwenden den `catch()`-Handler des Promises, um Fehler beim Verbindungsversuch zu behandeln. Wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form des Datenbank-URIs (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` an und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückgibt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfemethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (dies werden wir weiter unten besprechen).

Schemas werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Kollektion_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente werden die Felder/Schematypen enthalten, die im Modell-`Schema` definiert sind.

#### Definieren von Schemas

Das untenstehende Codefragment zeigt, wie Sie ein einfaches Schema definieren können. Zuerst verwenden Sie `require()`, um mongoose zu laden, dann nutzen Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, und definieren darin die verschiedenen Felder innerhalb des Objektparameters des Konstruktors.

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

Im obigen Fall haben wir nur zwei Felder, eine Zeichenkette und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und andere Methoden.

#### Erstellen eines Modells

Modelle werden aus Schemata mithilfe der `mongoose.model()`-Methode erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle Datensätze oder bestimmte Datensatzuntergruppen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und bei der Erstellung unserer Ansichten tun.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispielschema, das viele der gebräuchlichen Feldtypen zeigt und wie sie deklariert werden, ist unten gezeigt.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Beschreibungen nach "type:" oder nach Feldnamen) erklären sich von selbst. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorobjekt zu repräsentieren. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schemastyp.
- `[]`: Ein Array von Gegenständen. Sie können JavaScript-Array-Operationen für diese Modelle ausführen (push, pop, unshift, usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Varianten der Deklaration eines Feldes:

- Feld _Name_ und _Typ_ als Schlüssel-Wert-Paar (z.B. wie es mit den Feldern `name`, `binary` und `living` gemacht wurde).
- Feld _Name_ gefolgt von einem Objekt, das den `Typ` und alle anderen _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder geschnitten gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumente).

#### Validierung

Mongoose bietet sowohl eingebaute als auch benutzerdefinierte Validatoren und unterstützt sowohl synchrone als auch asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für das Scheitern der Validierung in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [erforderlich](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel (leicht modifiziert von den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Für vollständige Informationen zur Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumente).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die abgerufen und gesetzt werden können, sich aber nicht in MongoDB persistent speichern lassen. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert für die Speicherung in mehrere Werte zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und dekomponiert) eine virtuelle Eigenschaft "vollständiger Name" aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal einen vollständigen Namen zu erstellen, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modelldatensatz mit einem Pfad und dem `_id` Wert des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehilfen

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehilfen](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanzmethoden sind den statischen Methoden ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehilfen ermöglichen es Ihnen, die [verkettbare Abfrage-API von Mongoose](https://mongoosejs.com/docs/queries.html) zu erweitern (z.B. könnten Sie in der Lage sein, eine Abfrage "byName" zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden hinzuzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumente).

> [!NOTE]
> Die Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch` Block zur Fehlererfassung werden zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten setzen voraus, dass `SomeModel` ein Modell ist (mit einem einzelnen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig zu definieren, wenn Sie sie speichern.
Unten erstellen wir nur eines, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das Codefragment unten zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und dabei nur die Felder für den Athleten _name_ und _age_ zurückgeben. Hier geben wir nur ein passendes Feld (Sport) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden eines Ergebnisses **kein Fehler** ist bei einer Suche – aber es kann in Ihrem Anwendungskontext ein Misserfolgsfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie sie von [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) bereitgestellt werden, geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, das Sie auf das Ergebnis `awaiten` können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun und alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie separat hinzuzufügen.
Das Codefragment unten ist dasselbe wie unsere Abfrage oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode holt alle übereinstimmenden Datensätze, aber oft möchten Sie nur einen Treffer bekommen. Die folgenden Methoden fragen nach einem einzigen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein Einzelnes Dokument anhand der `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, mit der Sie die Anzahl der Elemente erhalten können, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie einen Count durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, das Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumente).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modelinstanz zu einem anderen mit dem `ObjectId`-Schemafeld oder von einem Dokument zu vielen mit einem Array von `ObjectIds` erstellen. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren folgende Schemata Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, was wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzigen Autor haben.
Die `ref`-Eigenschaft sagt dem Schema, welches Modell diesem Feld zugeordnet werden kann.

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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und ordnen die Autoren-ID dem Autorfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptweg unseres Codes nicht mit Fehlerüberprüfungskomplexitäten verbinden müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich separat darum (normalerweise in einem `catch()`-Block), so dass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat nun einen Autor, der durch die ID des Autordokuments referenziert wird. Um die Autorinformationen in den Geschichte-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserer Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories` Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten nach einem bestimmten Autor bekommen? Eine Möglichkeit wäre, unsere Geschichte in das Stories-Array aufzunehmen, aber dies würde dazu führen, dass wir zwei Orte haben, an denen die Informationen über Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Methode besteht darin, die `_id` unseres _Autor_ zu erhalten und dann `find()` zu verwenden, um diesen im Autorfeld über alle Geschichten hinweg zu durchsuchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über die Arbeit mit verwandten Objekten _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumente).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit jeder Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
Dies wird unten gezeigt:

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

Sie können dann das Modell in anderen Dateien sofort einbinden und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, da wir ein gewisses Verständnis dafür haben, was Mongoose leisten kann und wie wir unsere Modelle entwerfen möchten, ist es Zeit, an der _LocalLibrary_ Website zu arbeiten. Das allererste, was wir tun möchten, ist die Einrichtung einer MongoDB-Datenbank, mit der wir unsere Bibliotheksdaten speichern können.

Für dieses Tutorial verwenden wir das [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank. Diese Datenbank-Stufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz bietet, ist aber ideal für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenfrei und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Database as a Service_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank auswählen könnten (andere beliebte Optionen zum Zeitpunkt dieses Schreibens umfassen [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es bevorzugen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, außer dem Datenbank-URL, den Sie beim Verbinden angeben würden.
> Im Tutorial [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zunächst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten angeben und deren Nutzungsbedingungen zustimmen).

Nach der Anmeldung werden Sie auf den [Startbildschirm](https://cloud.mongodb.com/v2) weitergeleitet:

1. Klicken Sie auf die Schaltfläche **+ Create** im Bereich _Overview_.

   ![Erstellen einer Datenbank in MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die Option _M0 FREE_ Vorlage.

   ![Wählen Sie eine Bereitstellungsoption bei Nutzung von MongoDB Atlas aus.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter bei Nutzung von MongoDB Atlas aus.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir lassen ihn für dieses Tutorial als `Cluster0`.
   - Entfernen Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Create deployment** (Die Erstellung des Clusters wird einige Minuten in Anspruch nehmen).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Richten Sie die Zugriffsregeln im Menü Sicherheits-Schnellstart auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, den Ihre Anwendung für den Zugriff auf die Datenbank verwenden soll (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen zu kopieren und sicher zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose den Verbindungsstring möglicherweise nicht richtig analysiert.

   - Wählen Sie **Add by current IP address** aus, um den Zugriff von Ihrem aktuellen Computer zu ermöglichen.
   - Geben Sie `0.0.0.0/0` in das IP-Adressfeld ein und klicken Sie anschließend auf die Schaltfläche **Entry hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen einzuschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen aufbauen können. Hier erlauben wir eine Verbindung von überall her, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dadurch wird folgender Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zurück zur Übersicht**.
   ![Zurück zur Datenbank nach Einrichten der Zugriffsregeln in MongoDB Atlas gehen](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur _Übersicht_ zurück. Klicken Sie auf den Abschnitt _Datenbank_ im Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung in MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Sammlungen_ geöffnet. Klicken Sie auf die Schaltfläche **Eigene Daten hinzufügen**.
   ![Erstellen Sie eine Datenbank in MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Datenbank erstellen_ geöffnet.

   ![Details während der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ mit Ihrer erstellten Datenbank zurück.
   ![Bestätigung der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_ um zur Clusterübersicht zurückzukehren.

10. Klicken Sie im Cluster0-Bildschirm _Übersicht_ auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Mit Cluster0 verbinden_ geöffnet.

    ![Wählen Sie die kurze SRV-Verbindung bei Einrichtung einer Verbindung in MongoDB Atlas aus.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und die _Version_ wie angezeigt.
    - **INSTALLIEREN SIE DEN TREIBER NICHT**, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren** Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>` Platzhalter im Verbindungsstring mit dem Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und einen URL (mit Benutzernamen und Passwort), mit dem Sie darauf zugreifen können.
Dies wird in etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Befehlszeile und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits bei der Lesen des [Mongoose-Grundlagenkurses](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie die Datenbank-URL-Zeichenfolge ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_ ).

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

Wie im Abschnitt [Mongoose-Grundlagen](#verbindung_zu_mongodb) oben beschrieben, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

Beachten Sie, dass es nicht empfohlen wird, die Zugangsdaten der Datenbank im Quellcode fest zu codieren, wie oben gezeigt.
Wir machen das hier, weil es den Kern-Code der Verbindung zeigt und während der Entwicklung kein signifikantes Risiko besteht, dass durch das Leaken dieser Details sensible Informationen gefährdet oder beschädigt werden.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn wir [in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definieren des LocalLibrary-Schemas

Wir definieren ein separates Modul für jedes Modell, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstammverzeichnis zu erstellen (**/models**) und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den `Author`-Schema-Code unten und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor als Verwendung von `String` SchemaTypes für die Vor- und Familiennamen (erforderlich, mit einem Maximum von 100 Zeichen) und `Date` Felder für die Geburts- und Todesdaten.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, das die absolute URL angibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten – wir verwenden die Eigenschaft in unseren Vorlagen, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Erklärung unserer URLs als virtuell im Schema ist eine gute Idee, weil dann die URL zu einem Element nur an einem Ort geändert werden muss.
> An diesem Punkt würde ein Link mit dieser URL nicht funktionieren, weil wir noch keinen Routencode für die Verarbeitung von einzelnen Modellinstanzen haben.
> Wir richten das in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den `Book`-Schema-Code unten und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Das meiste davon ähnelt dem Author-Modell – wir haben ein Schema mit einer Anzahl von Zeichenfolgenfeldern und einem Virtuellen zum Abrufen der URL von spezifischen Buchdatensätzen deklariert und wir haben das Modell exportiert.

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

Der Hauptunterschied hier ist, dass wir zwei Verweise auf andere Modelle erstellt haben:

- Autor ist ein Verweis auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- Genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Dies würden wir noch nicht deklariert haben!

### BookInstance-Modell

Kopieren Sie abschließend den `BookInstance`-Schema-Code unten und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie erwartet zurückgegeben zu werden, und "Imprint" (oder Versions-) Informationen.

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

Die neuen Dinge hier sind die Feldoptionen:

- `enum`: Damit können wir die erlaubten Werte einer Zeichenkette festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines enums bedeutet, dass wir falsche Schreibweisen und beliebige Werte für unseren Status vermeiden können).
- `default`: Wir verwenden standardmäßig den Status neu erstellter Buchinstanzen als "Wartung" und das Standard-`due_back`-Datum auf `now` gesetzt (Beachten Sie, wie Sie die Datum-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unseren früheren Schemas vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema für das Speichern von Genres (die Kategorie des Buches, z.B. ob es Fiktion oder Non-Fiction, Romantik oder Militärgeschichte, usw. ist).

Die Definition wird sehr ähnlich wie die anderen Modelle sein:

- Das Modell sollte einen `String`-SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, benannt `url`.
- Exportieren Sie das Modell.

## Testing — einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können) führen wir nun ein _unabhängiges_ Skript aus, um Elemente jeder Art zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie auf andere Weise) und fügen Sie sie in Ihrem _express-locallibrary-tutorial_-Verzeichnis (auf derselben Ebene wie `package.json`) ein.

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis davon ist für dieses Tutorial nicht unbedingt erforderlich.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus, indem Sie die URL Ihrer _MongoDB_-Datenbank übergeben (die gleiche, mit der Sie den _insert_your_database_url_here_ Platzhalter ersetzt haben, in `app.js` früher):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen einschließen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte vollständig durchlaufen und dabei die erstellten Elemente im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungs_-Tab).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen herunterzudrillen und einzelne Dokumente zu berücksichtigen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt, und viel darüber, wie Mongoose-Schema und Modelle definiert werden. Wir haben dann diese Informationen genutzt, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen (mithilfe eines eigenständigen Skripts) erstellt haben. Im nächsten Artikel werden wir uns mit der Erstellung einiger Seiten beschäftigen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
