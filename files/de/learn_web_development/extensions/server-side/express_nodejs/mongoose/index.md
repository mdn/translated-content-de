---
title: "Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und zeigt, wie Sie sie mit Node/Express-Anwendungen verwenden können. Anschließend wird erläutert, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website bereitzustellen. Es wird erklärt, wie Objekt-Schemata und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem wird kurz gezeigt, auf welche Hauptweisen Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Erstellen eines Skelett-Websites</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Website der Lokalen Bibliothek verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie zum Durchsuchen und Suchen von Büchern nutzen, um herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann detailliert die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede von Node unterstützte Datenbank verwenden (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), einschließlich PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie die Produktivität/Lernkurve, Leistung, einfache Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzelne "beste" Datenbank gibt, sollte nahezu jede der populären Lösungen für eine kleine bis mittelgroße Website wie unsere Lokale Bibliothek mehr als akzeptabel sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbank, wie z. B. SQL.
- Verwendung eines Object Relational Mappers ("ORM"). Ein ORM stellt die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bieten.

Die beste _Leistung_ kann erzielt werden, indem SQL oder die von der Datenbank unterstützte Abfragesprache verwendet wird. ODMs sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zuzuordnen, wodurch möglicherweise nicht die effizientesten Datenbankabfragen verwendet werden (dies gilt insbesondere, wenn das ODM unterschiedliche Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM besteht darin, dass Programmierer weiterhin in Form von JavaScript-Objekten denken können, anstatt sich mit der Datenbanksemantik auseinanderzusetzen — dies gilt insbesondere, wenn Sie mit unterschiedlichen Datenbanken arbeiten müssen (auf derselben oder auf unterschiedlichen Websites). Sie bieten auch einen offensichtlichen Ort für die Durchführung von Datenvalidierungen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Sofern Sie mit der nativen Abfragesprache nicht sehr vertraut sind oder die Leistung von größter Bedeutung ist, sollten Sie dringend die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paketmanager-Website (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teil an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein Objektmodellierungs-Tool für [MongoDB](https://www.mongodb.com/), das dazu entwickelt wurde, in einer asynchronen Umgebung zu arbeiten.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, extrahiert aus dem Express-basierten [Sails](https://sailsjs.com/) Web-Framework. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, bietet Transaktionsunterstützung, eager/nested-eager-Relation-Loading, polymorphe Assoziationen und Unterstützung für eins-zu-eins, eins-zu-viele und viele-zu-viele Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank in einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, GraphQL ist sehr populär und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als Faustregel gilt, dass Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation etc.) berücksichtigen sollten, wenn Sie eine Lösung auswählen. Mongoose ist zum Zeitpunkt des Schreibens mit Abstand das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die Lokale Bibliothek

Für das Beispiel der _Lokalen Bibliothek_ (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose agiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank ist [vergleichbar mit](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil die Dokumentenspeicherung und das Abfragesystem sehr ähnlich wie JSON aussehen und daher JavaScript-Entwicklern vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose verwenden zu können, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie mit MongoDB bereits vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [Lokale Bibliothek-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definiert und darauf zugreift.

## Entwerfen der Lokalen Bibliothek-Modelle

Bevor Sie die Modelle codieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und möglicherweise mehrere Exemplare verfügbar sind (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listen-Optionen zu repräsentieren (z. B. eine Dropdown-Liste von Optionen), anstatt die Optionen fest in die Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Daher zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben diskutiert, haben wir Modelle für das Buch erstellt (die generischen Details des Buches), Buchinstanz (Status spezifischer physikalischer Kopien des Buches, die im System verfügbar sind), und Autor. Wir haben auch beschlossen, ein Model für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hart kodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder der Boxen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindung zwischen den Boxen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie neben `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Grundlagen](#mongoose-grundlagen) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können immer noch die umgekehrte Beziehung finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buch-Schema zu definieren und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war eher willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Überlegen Sie beim Lesen, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung des Erfolgs oder Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server darauf wartet, dass die Datenbankoperation abgeschlossen ist, sodass der Server auf andere Anfragen reagieren kann.

JavaScript verfügt über eine Reihe von Mechanismen zur Unterstützung des asynchronen Verhaltens.
Historisch gesehen hat JavaScript stark darauf zurückgegriffen, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "eingelöst" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, mit denen Sie Promises verwenden können, um Code auszuführen, wenn ein Promise abgeschlossen ist, und wir empfehlen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlichem asynchronem Code führt.

Die Funktionsweise dieses Ansatzes ist, dass Sie die `async function`-Anweisung verwenden, um eine Funktion als asynchron zu kennzeichnen, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird der Vorgang an der ersten `await`-Methode pausiert, bis das Promise abgeschlossen ist.
Vom Standpunkt des umgebenden Codes aus kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Promise abgeschlossen wird, gibt die `await`-Methode in der asynchronen Funktion das Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, an welchem Punkt es erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung an `methodThatReturnsPromise()` angehalten, bis das Promise aufgelöst ist, an welchem Punkt der Code zu `aFunctionThatReturnsPromise()` fortfährt und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und dies geschieht, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterable von Promises als Eingabe übernimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Promises der Eingaben abgelehnt wird, mit dem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, um abzuschließen, indem wir das versprochene Promise, das von `Promise.all()` zurückgegeben wird, verwenden.
Sobald sie beide abgeschlossen sind, wird `await` zurückgegeben und das Ergebnisarray wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Promise von `anotherFunctionThatReturnsPromise()` abgeschlossen ist.
Sie würden die `myFunction()` in einem `try...catch`-Block aufrufen, um etwaige Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose-Grundlagen

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Diese Einführung ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installieren von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, installiert jedoch nicht die MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir das _Datenbank als Dienstleistung_ [MongoDB Atlas](https://www.mongodb.com/) in der kostenlosen Stufe, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht im Tutorial Sinn, da es eine Betriebssystem-unabhängige "Installation" ermöglicht (Datenbank-als-Dienstleistung ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden).

### Verbindung zu MongoDB herstellen

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial stellen wir stattdessen eine Verbindung zu einer internetbasierten Datenbank her).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, warten wir hier auf das Promise, das von der `connect()`-Methode innerhalb einer `async`-Funktion zurückgegeben wird.
> Wir verwenden den Promise-`catch()`-Handler, um etwaige Fehler beim Verbindungsversuch zu behandeln, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückgibt; wenn Sie warten möchten, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, aber die nicht tatsächlich in der Datenbank gespeichert werden (wir werden weiter unten mehr darüber sprechen).

Schemata werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell entspricht einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die im Modell definierten Felder/Schematypen.

#### Definition von Schemata

Der unten gezeigte Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` Sie mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Objektparameter des Konstruktors definieren.

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

In dem obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und andere Methoden.

#### Erstellen eines Modells

Modelle werden aus Schemata mit der `mongoose.model()`-Methode erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie zum Erstellen des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder besondere Datensatzuntergruppen zu erhalten. Wir zeigen Ihnen, wie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) funktioniert, und wenn wir unsere Ansichten erstellen.

#### Schemavors (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes steht für ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der allgemeinen Feldtypen zeigt und wie sie deklariert werden, ist unten gezeigt.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Deskriptoren nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Ein Buch kann beispielsweise dieses verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die Beispiele oben zeigen ein Array von Objekten ohne einen bestimmten Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Arten der Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (z. B. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _optionen_ für das Feld definiert. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z. B. Maximal-/Minimalwerte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder zugeschnitten (e.g. `{ type: String, lowercase: true, trim: true }`) gesetzt werden sollen.

Für weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertbereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()?>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()?>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die Menge der für das Feld zulässigen Werte an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt einen regulären Ausdruck an, den der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validator-Typen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die jedoch nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle vollständige Namenseigenschaft aus einem Vor- und Nachnamensfeld, die einfacher und sauberer ist als die Erstellung eines vollständigen Namens jedes Mal, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz unter Verwendung eines Pfads und des `_id`-Werts des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode einem bestimmten Datensatz zugeordnet ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [chainable Abfrage-API von Mongoose](https://mongoosejs.com/docs/queries.html) zu erweitern (z. B. um eine Abfrage "byName" neben den `find()`, `findOne()` und `findById()` Methoden hinzuzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d. h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async`-Funktion und der `try...catch`-Block zum Abfangen von Fehlern werden der Klarheit halber ausgelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die unten gezeigten Beispiele gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig zu definieren, während Sie sie speichern.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte in die Datenbank zurückzuschreiben.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, indem Sie Abfragemethoden verwenden und die Abfragebedingungen als JSON-Dokument angeben. Der folgende Codeausschnitt zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und nur die Felder für _name_ und _age_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an (sport), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, daran zu denken, dass das Nichtfinden von Ergebnissen für eine Suche **kein Fehler** ist — es kann jedoch ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie beispielsweise [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec)-Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` aufrufen können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mithilfe des Punktoperators (.) miteinander verketten, anstatt sie separat hinzuzufügen.
Der folgende Codeausschnitt ist der gleiche wie unsere Abfrage oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>)-Methode holt alle passenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung finden. Die folgenden Methoden suchen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>)-Methode, die Sie verwenden können, um die Anzahl der mit den Bedingungen übereinstimmenden Elemente zu erhalten. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzuholen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modell-Exemplar zu einem anderen mit dem `ObjectId`-Schemavor erstellen, oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html)-Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als ein Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzigen Autor haben.
Die `ref`-Eigenschaft sagt dem Schema, welches Modell diesem Feld zugewiesen werden kann.

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
> Ein großer Vorteil dieser Art der Programmierung ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfung verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode befasst sich separat damit (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die Autoren-ID des Dokuments referenziert wird. Um die Autorinformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts unternommen haben, um unsere Geschichte zum Geschichtennetzwerk des Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Geschichten-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Orte hätten, an denen die Informationen, die Autoren und Geschichten betreffen, gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um danach im Autorenfeld über alle Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modellschema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
Dies ist unten gezeigt:

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

Sie können das Modell dann sofort in anderen Dateien einbringen und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Da wir jetzt etwas darüber verstehen, was Mongoose tun kann und wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der Website der _Lokalen Bibliothek_ zu arbeiten. Das allererste, was wir tun möchten, ist eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial verwenden wir die cloud-gehostete Sandbox-Datenbank [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe wird nicht als geeignet für produktionsreife Websites angesehen, da sie keine Redundanz hat, aber sie ist großartig für Entwicklung und Prototypenerstellung. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Dienstleistung_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Entscheidungen zum Zeitpunkt des Schreibens umfassen [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Der Rest der Anweisungen in diesem Artikel wäre ähnlich, mit Ausnahme der Datenbank-URL, die Sie beim Herstellen der Verbindung angeben würden.
> Im [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.app/), aber wir hätten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Zuerst müssen Sie ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nach dem Einloggen gelangen Sie auf den [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Erstellung einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Cluster bereitstellen_.
   Klicken Sie auf die Vorlage **M0 FREE**.

   ![Eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Einen Cloud-Anbieter bei MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatensatz vorladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (Die Erstellung des Clusters wird einige Minuten dauern).

4. Dies öffnet den Abschnitt _Sicherheitsokstart_.
   ![Die Zugriffsregeln im Schnellstart-Bildschirm zur Sicherheit auf MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen sicher zu kopieren und zu speichern, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerkennwort, da Mongoose die Verbindungszeichenfolge möglicherweise nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen** aus, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall aus erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen, die Ihre Datenbank und andere Ressourcen verbinden können, zu begrenzen. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommt.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Rufen Sie nach der Einrichtung von Zugriffsregeln auf MongoDB Atlas auf die Registerkarte Datenbanken zu.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Übersicht_ zurück. Klicken Sie im Menü _Bereitstellung_ auf der linken Seite auf den Abschnitt _Datenbank_. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Eine Sammlung auf MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Eigene Daten hinzufügen**.
   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details bei der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum _Sammlungen_-Bildschirm zurück mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Vom _Übersicht_ Bildschirm von Cluster0 klicken Sie auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach dem Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die Short SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die _Treiber_ Kategorie, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **INSTALLIEREN** Sie nicht den Treiber, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren** Symbol, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>` Platzhalter in der Verbindungszeichenfolge mit dem Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und haben eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen.
Dies wird in etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Grundlegende Lokale Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und ihn Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen der [Mongoose-Grundlagen](#installieren_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zur MongoDB herstellen

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Zeile, in der Sie das _Express Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie die Datenbank-URL-Zeichenfolge ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank darstellt (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im Abschnitt [Mongoose-Grundlagen](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet etwaige Fehler in der Konsole.

Beachten Sie, dass das Festcodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir machen es hier, weil es den grundlegenden Verbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Durchsickern dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer machen, wenn wir [die Bereitstellung in der Produktion durchführen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des Lokalen Bibliothek-Schemas

Wir definieren ein separates Modul für jedes Modell, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstamm zu erstellen (**/models**) und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den `Author`-Schema-Code unten und fügen Sie ihn in Ihre **./models/author.js**-Datei ein.
Das Schema definiert einen Autor durch `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit einem Maximum von 100 Zeichen) und `Date` Feldern für die Geburts- und Todesdaten.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema mit dem Namen "url" deklariert, das die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, weil dann die URL eines Elements nur an einer Stelle geändert werden muss.
> An diesem Punkt würde ein Link mit dieser URL nicht funktionieren, weil wir keinen Routen-Code für individuelle Modellinstanzen eingerichtet haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den `Book`-Schema-Code unten und fügen Sie ihn in Ihre **./models/book.js**-Datei ein.
Das meiste davon ähnelt dem Author-Modell — wir haben ein Schema mit einer Anzahl von Zeichenkettenfeldern und einem Virtuellen für das Abrufen der URL von bestimmten Buchdatensätzen deklariert und das Modell exportiert.

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

- author ist eine Referenz zu einem einzelnen `Author` Modellobjekt und ist erforderlich.
- genre ist eine Referenz zu einem Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BookInstance-Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code unten und fügen Sie ihn in Ihre **./models/bookinstance.js**-Datei ein.
Das `BookInstance` repräsentiert ein spezifisches Exemplar eines Buches, das jemand möglicherweise ausleiht, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurück erwartet wird, und Details zum "Cover".

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

Die neuen Dinge, die wir hier zeigen, sind die Felderoptionen:

- `enum`: Damit können wir die erlaubten Werte eines Strings festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines Enums können wir Schreibfehler und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden `default`, um den Standardstatus für neu erstellte Buchinstanzen auf "Instandhaltung" und das Standard-`due_back`-Datum auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte Ihnen aus unseren vorherigen Schemata vertraut sein.

### Genre-Modell - Aufgabe

Öffnen Sie Ihre **./models/genre.js**-Datei und erstellen Sie ein Schema zum Speichern von Genres (der Kategorie des Buches, z. B. ob es Fiktion oder Sachbuch, Romanze oder Militärgeschichte ist).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte ein `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) für die URL des Genres, die `url` genannt wird.
- Exportieren Sie das Modell.

## Testen — einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie (oder erstellen Sie andernfalls) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` könnte nützlich sein, um JavaScript zu lernen, ist aber für dieses Tutorial nicht erforderlich, um es zu verstehen.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus und geben Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, mit der Sie den Platzhalter _insert_your_database_url_here_ in `app.js` zuvor ersetzt haben) als Argument an:

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") setzen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zur Fertigstellung durchlaufen und Elemente anzeigen, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten jetzt in der Lage sein, in individuelle Sammlungen von Büchern, Autoren, Genres und BookInstances zu navigieren und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel über die Definition von Mongoose-Schemas und -Modellen. Anschließend haben wir diese Informationen genutzt, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _Lokale Bibliothek_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns mit der Erstellung einiger Seiten zur Anzeige dieser Objekte befassen.

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
