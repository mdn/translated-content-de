---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt eine kurze Einführung in Datenbanken und deren Verwendung in Node/Express-Anwendungen. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierung. Es zeigt auch kurz einige der Hauptmöglichkeiten, auf die man auf Modelldaten zugreifen kann.

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
      <td>Die Fähigkeit zu erlangen, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Bibliothekspersonal wird die Website der Lokalen Bibliothek nutzen, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen, um nach Büchern zu suchen, zu prüfen, ob Kopien verfügbar sind, und dann diese zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen durchzuführen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und erläutert dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede von _Node_ unterstützte Datenbank nutzen (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbank-Management). Es gibt viele [beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), einschließlich PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Wahl einer Datenbank sollten Faktoren wie Produktivitäts-/Lernkurve, Leistung, Replikations-/Backup-Einfachheit, Kosten, Community-Unterstützung usw. berücksichtigt werden. Während es keine "beste" Datenbank gibt, sind fast alle der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Lokale Bibliothek mehr als akzeptabel.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Verwendung eines Objekt-Relational-Mappers ("ORM") oder eines Objekt-Dokument-Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder der jeweiligen Abfragesprache, die von der Datenbank unterstützt wird, erzielt werden. Objektmapper sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (das ist besonders der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich unterstützter Datenbank-Funktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in JavaScript-Objekten denken können, anstatt in Datenbanksemantik — das ist besonders wichtig, wenn Sie mit unterschiedlichen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort zur Durchführung von Datenvalidierungen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Sofern Sie nicht sehr vertraut mit der nativen Abfragesprache sind oder die Leistung entscheidend ist, sollten Sie die Verwendung eines ODM in Erwägung ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teilbereich an!).

Einige der Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungs-Tool, das für ein asynchrones Umfeld ausgelegt ist.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, der aus dem Express-basierten [Sails](https://sailsjs.com/) Web Framework extrahiert wurde. Es bietet eine einheitliche API zum Zugriff auf viele verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Verfügt sowohl über promise-basierte als auch traditionelle Callback-Schnittstellen und bietet Unterstützung für Transaktionen, eager/nested-eager Relationsladen, polymorphe Assoziationen und Unterstützung für One-to-One, One-to-Many und Many-to-Many Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der darunterliegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet eine solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objekt-Relationship-Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank in einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, ist GraphQL sehr populär und verfügt über Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie bei der Auswahl einer Lösung sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation, usw.) berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden möchten.

### Verwendung von Mongoose und MongoDB für die Lokale Bibliothek

Für das _Lokale Bibliothek_ Beispiel (und den Rest dieses Themas) verwenden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open Source [NoSQL](https://en.wikipedia.org/wiki/NoSQL) Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community extrem populär, zum Teil weil das Dokumentenspeicher- und Abfragesystem sehr wie JSON aussieht und JavaScript-Entwicklern daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [Lokale Bibliothek Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der Lokale Bibliothek Modelle

Bevor Sie loslegen und die Modelle code-technisch umsetzen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere verfügbare Kopien haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor als nur seinen Namen speichern, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und der Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Optionen darzustellen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten in die Website selbst zu kodieren — das wird empfohlen, wenn nicht alle Optionen von vornherein bekannt sind oder sich ändern könnten. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Hintergrund zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben besprochen, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status der spezifischen physischen Kopien des im System verfügbaren Buches) und den Autor erstellt. Wir haben auch beschlossen, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte fest codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kastens sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabewerte.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) jedes Modells zeigen, die in der Beziehung präsent sein dürfen. Beispielsweise zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` zusammenhängend sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Books` haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genres` haben kann.

> [!NOTE]
> Wie in unserem [Mongoose primer](#mongoose_primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich — wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose Library Model with correct cardinality](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren, und der Code, um den Erfolg oder das Scheitern der Methode zu behandeln, zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server trotz anderer Anfragen ansprechbar bleiben kann.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch hat sich JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden verlassen, um den Erfolgs- und Fehlerfall zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "aufgelöst" und löst ein Objekt aus, das das Ergebnis der Operation darstellt oder einen Fehler.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise aufgelöst ist. Wir empfehlen Ihnen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf die Vollendung des Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu leserlicherem und verständlicherem asynchronem Code führt.

Bei diesem Ansatz kennzeichnen Sie eine Funktion mit dem Schlüsselwort `async`, um sie als asynchron zu markieren. Innerhalb dieser Funktion wenden Sie dann `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await`-Methode angehalten, bis das Promise aufgelöst wurde.
Aus der Perspektive des umgebenden Codes gibt dann die asynchrone Funktion zurück, und der Code danach kann ausgeführt werden.
Später, wenn das Promise aufgelöst wird, gibt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler geworfen, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` aufgerufen wird, was dazu führt, dass es erneut anhält, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise aufgelöst wird, woraufhin der Code zu `aFunctionThatReturnsPromise()` weitergeht und wieder wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion geworfen wird, und dies wird geschehen, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

```js
async function myFunction {
  // ...
  await someObject.methodThatReturnsPromise();
  // ...
  await aFunctionThatReturnsPromise();
  // ...
}

try {
  // ...
  myFunction();
  // ...
} catch (e) {
 // error handling code
}
```

Die obigen asynchronen Methoden werden in Reihenfolge ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies wird mit der [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode gemacht, die ein iterierbares Promise als Eingabe entgegennimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingaben-Promises erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingaben-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf sie beide, bis sie mit dem Promise, das von `Promise.all()` zurückgegeben wird, abgeschlossen sind.
Sobald sie beide abgeschlossen sind, gibt `await` zurück und das Ergebnisarray wird gefüllt,
Die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise aufgelöst ist.
Sie würden das `myFunction()` in einem `try...catch` Block aufrufen, um Fehler abzufangen.

```js
async function myFunction {
  // ...
  const [resultFunction1, resultFunction2] = await Promise.all([
     functionThatReturnsPromise1(),
     functionThatReturnsPromise2()
  ]);
  // ...
  await anotherFunctionThatReturnsPromise(resultFunction1);
}
```

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose Primer

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Dieses Primer ist stark beeinflusst vom [Mongoose Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert – mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie die [Installationsprogramme von hier](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme herunterladen und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den [MongoDB Atlas](https://www.mongodb.com/) Cloud-basierten _Database as a Service_ Free-Tier verwenden, um die Datenbank bereitzustellen. Dies eignet sich für die Entwicklung und macht für das Tutorial Sinn, da es die "Installation" betriebssystemunabhängig macht (Database-as-a-Service ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` herstellen, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer internet-gehosteten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, verwenden wir hier `await` auf das Promise, das von der `connect()`-Methode zurückgegeben wird, innerhalb einer `async`-Funktion.
> Wir verwenden den Promise `catch()`-Handler, um Fehler beim Verbindungsversuch zu behandeln, könnten jedoch auch `main()` in einem `try...catch` Block aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` an und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden über das `Schema` Interface _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Zusätzlich können Sie statische und Instanzmethoden definieren, um das Arbeiten mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (dies werden wir weiter unten diskutieren).

Die Schemata werden dann mit der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Kollektion_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente werden die im Modell-Schema definierten Felder/Schematypen enthalten.

#### Definition von Schemata

Das untenstehende Codefragment zeigt, wie man ein einfaches Schema definieren könnte. Zuerst `require()` Sie Mongoose und verwenden den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder darin im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierungen und Methoden zeigen.

#### Erstellen eines Modells

Modelle werden aus Schemata mit der Methode `mongoose.model()` erstellt:

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

Das erste Argument ist der singuläre Name der Kollektion, die für Ihr Modell erstellt wird (Mongoose wird die Datenbankkollektion für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie bei der Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie man dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und wenn wir unsere Ansichten erstellen, durchführt.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, wird unten gezeigt.

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

Die meisten der [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Deskriptoren nach "type:" oder nach Feldnamen) sind selbsterklärend. Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Ein Buch könnte dies beispielsweise verwenden, um sein Autorenobjekt darzustellen. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die Methode `populate()` verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen an diesen Modellen durchführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne einen angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Arten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Zu den Optionen gehören Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren und synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren beinhalten:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [erforderlich](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, damit ein Dokument gespeichert werden kann.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): spezifiziert die erlaubten Werte für das Feld.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): spezifiziert einen regulären Ausdruck, den der String erfüllen muss.
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

Für vollständige Informationen zur Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die aber nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und dekonstruiert) eine Vollnamen-virtuelle Eigenschaft aus einem Vor- und Nachnamen-Feld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu konstruieren, wenn einer verwendet wird in einer Vorlage.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer erlauben es Ihnen, die [verkettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (beispielsweise können Sie eine Abfrage "byName" hinzufügen, zusätzlich zu den Methoden `find()`, `findOne()` und `findById()`).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den essentiellen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch` Block zur Fehlererfassung sind aus Gründen der Klarheit weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Modifizieren von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig zu definieren und zu speichern.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz zugreifen, indem Sie die Punkt-Syntax verwenden und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können Datensätze mit Abfragemethoden durchsuchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das untenstehende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen und nur die Felder für den Athleten _name_ und _age_ zurückgeben. Hier spezifizieren wir nur ein übereinstimmendes Feld (Sport), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nicht-Finden von Ergebnissen **kein Fehler** bei einer Suche ist - es kann jedoch ein Fehlschlag im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie es mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` machen können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun und wir können alle Teile unserer Abfrage mit dem Punkt-Operator (.) aneinanderketten, anstatt sie separat hinzuzufügen.
Das Codefragment unten ist dasselbe wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode erhält alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Convenience-Funktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Elemente zu ermitteln, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modellinstanz zu einer anderen mit dem `ObjectId`-Schemafeld erstellen, oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als ein Array von `ObjectId` darstellen.
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

Wir können unsere Referenzen auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieser Programmierweise ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlermanagement verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird geworfen.
> Unser Fehlerbehandlungscode behandelt das separat (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autoreninformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserem Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte dem `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte dem `stories`-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Orte hätten, an denen die Informationen über Autoren und Geschichten gepflegt werden müssten.
>
> Besser ist es, die `_id` unseres _Author_ zu erhalten, dann `find()` zu verwenden, um nach dieser im Autor-Feld über alle Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir Ihnen dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können dann das Modell sofort in anderen Dateien `require()` und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, da wir etwas über das, was Mongoose tun kann und wie wir unsere Modelle entwerfen wollen, wissen, ist es an der Zeit, mit der Arbeit an der _Lokalen Bibliothek_ Website zu beginnen. Das Allererste, was wir tun wollen, ist eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank. Diese Datenbank-Tier gilt nicht als geeignet für Produktionswebseiten, da sie keine Redundanz hat, aber sie ist großartig zum Entwickeln und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _database as a service_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie auf Ihrem System eine lokale MongoDB-Datenbank einrichten, indem Sie die [entsprechenden Binärdateien herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nachdem Sie sich eingeloggt haben, werden Sie zum [Home](https://cloud.mongodb.com/v2) Bildschirm geführt:

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der _Bereitstellen Ihres Clusters_ Bildschirm geöffnet.
   Klicken Sie auf die **M0 FREE** Option Vorlage.

   ![Gewählen Sie eine Bereitstellungsoption, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster-Name_ ändern.
     Für dieses Tutorial behalten wir es als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatensatz laden_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und Standort aus den _Provider_ und _Region_ Abschnitten. Unterschiedliche Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Deployment erstellen** (das Erstellen des Clusters dauert einige Minuten).

4. Dies wird den Abschnitt _Security Quickstart_ öffnen.
   ![Richtlinien für den Zugriff im Security Quickstart-Bildschirm auf MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, das Ihre Anwendung verwenden wird, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Zugangsdaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerkennwort, da Mongoose möglicherweise die Verbindungszeichenfolge nicht richtig parst.

   - Wählen Sie **Aktuelle IP-Adresse hinzufügen**, um Zugang von Ihrem aktuellen Computer aus zu ermöglichen.
   - Geben Sie `0.0.0.0/0` in das IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugang von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu beschränken, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir einen Zugang von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und schließen**.

5. Dies wird den folgenden Bildschirm öffnen. Klicken Sie auf die Schaltfläche **Zur Übersicht**.
   ![Gehe zu Datenbanken, nachdem die Zugriffsrichtlinien auf MongoDB Atlas eingerichtet wurden](mongodb_atlas_-_accessrules.jpg)

6. Sie werden zum Übersicht-Bildschirm zurückkehren. Klicken Sie auf den Abschnitt _Datenbank_ unter dem Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der _Sammlungen_ Abschnitt geöffnet. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der _Datenbank erstellen_ Bildschirm geöffnet.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library`.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie werden zum _Sammlungen_ Bildschirm zurückkehren mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Clusterübersicht zurückzukehren.

10. Vom Cluster0 _Übersicht_ Bildschirm aus klicken Sie auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie eine Verbindung nach der Einrichtung eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies wird den _Verbinden mit Cluster0_ Bildschirm öffnen.

    ![Wählen Sie die kurze SRV-Verbindung, wenn Sie eine Verbindung auf MongoDB Atlas einrichten.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber installieren, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren**-Symbol, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Placeholder in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei, die diese Zeichenfolge enthält, an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Dies wird etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren von Mongoose

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Lokale-Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB

Öffnen Sie **/app.js** (im Root-Verzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie die Datenbank-URL-Zeichenfolge ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose primer](#verbindung_zu_mongodb) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und gibt alle Fehler in der Konsole aus.

Beachten Sie, dass das Einbetten von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir machen es hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein erhebliches Risiko besteht, dass das Durchsickern dieser Details vertrauliche Informationen preisgibt oder beschädigt.
Wir zeigen Ihnen, wie man dies sicherer macht, wenn [in die Produktion bereitgestellt wird](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des Lokale Bibliothek Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projekt-Root-Verzeichnis (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den unten gezeigten `Author` Schema-Code und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor als jene mit `String` Schematypen für den Vor- und Nachnamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date` Feldern für die Geburts- und Todesdaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft namens "url" für das AuthorSchema deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Deklaration unserer URLs als virtuelle Eigenschaft im Schema ist eine gute Idee, da die URL für einen Posten dann nur an einem Ort geändert werden muss.
> An diesem Punkt würde ein Link mit dieser URL nicht funktionieren, da wir keinen Routes-Handling-Code für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den unten gezeigten `Book` Schema-Code und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Der größte Teil davon ist ähnlich dem Autorenmodell — wir haben ein Schema mit einer Reihe von String-Feldern und einem Virtuellen für das Abrufen der URL spezifischer Buchdatensätze deklariert und das Modell exportiert.

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

Der Hauptunterschied ist hier, dass wir zwei Referenzen auf andere Modelle erstellt haben:

- author ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz Modell

Kopieren Sie schließlich den unten gezeigten `BookInstance` Schema-Code und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie zurückerwartet wird, und "Impressum" (oder Versions-) Details.

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

- `enum`: Erlaubt es uns, die erlaubten Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines `enum` können wir Schreibfehler und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden die Standardeinstellung, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standardrückgabedatum auf `now` zu setzen (beachten Sie, wie Sie die Datumsfunktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte Ihnen von unseren vorherigen Schemata vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zur Speicherung von Genres (der Kategorie des Buches, z.B. ob es Fiktion oder Sachbuch, Romantik oder Militärgeschichte ist usw.).

Die Definition wird der der anderen Modelle sehr ähnlich sein:

- Das Modell soll einen `String` Schematyp namens `name` haben, um das Genre zu beschreiben.
- Dieser Name soll erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen — einige Objekte erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Objekte zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Objekte jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript nützlich sein, aber er muss für dieses Tutorial nicht verstanden werden.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, mit der Sie den _insert_your_database_url_here_ Placeholder in `app.js` vorher ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL mit doppelten ("') Anführungszeichen umschließen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Ende laufen und Objekte anzeigen, während es sie in der Konsole erstellt.

> [!NOTE]
> Wechseln Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Reiter).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Books, Authors, Genres und BookInstances hinein zu bohren und sich einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemata und Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`-, `BookInstance`-, `Author`- und `Genre`-Modelle für die _Lokale Bibliothek_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns ansehen, wie man einige Seiten erstellt, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose Webseite](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
