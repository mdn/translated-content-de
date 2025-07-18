---
title: "Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel bietet eine kurze Einführung in Datenbanken und deren Verwendung mit Node/Express-Anwendungen. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um den Datenbankzugriff für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) bereitzustellen. Es wird erklärt, wie Objektschema und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, wie man auf Model-Daten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Erstellung eines Grundgerüsts der Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mithilfe von Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Bibliotheksmitarbeiter werden die Local Library-Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen werden, um Bücher zu durchsuchen und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt verschiedene Ansätze für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen auf.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivitätszeit/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Support usw. in Betracht ziehen. Es gibt keine "beste" Datenbank, aber fast jede der beliebten Lösungen sollte für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Welches ist der beste Weg, mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Verwenden der nativen Abfragesprache der Datenbanken, wie SQL.
- Verwenden eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bereitstellen.

Die beste _Leistung_ kann erzielt werden, indem man SQL oder eine andere von der Datenbank unterstützte Abfragesprache verwendet. Objektmapper sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu zuordnen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt auf Datenbanksemantik — dies ist besonders nützlich, wenn mehrere Datenbanken verwendet werden müssen (innerhalb derselben oder unterschiedlicher Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder Leistung ist von größter Bedeutung, sollten Sie stark erwägen, einen ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die im npm Paketmanager verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungs-Tool, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Verfügt sowohl über auf Promise basierende als auch traditionelle Callback-Schnittstellen und bietet Transaktionsunterstützung, eager/nested-eager Relation Loading, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Power von SQL und der zugrunde liegenden Datenbank-Engine zu verwenden (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein auf Promise basierendes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object-Relationship-Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft dabei, mit der Datenbank unter Verwendung eines objektorientierten Ansatzes zu arbeiten.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfrage-Sprache für RESTful APIs, GraphQL ist sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung in Betracht ziehen. Zum Zeitpunkt des Schreibens ist Mongoose mit Abstand der populärste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank ist [analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination von ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr gut wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugegriffen wird.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie beginnen und die Modelle codieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssten möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnten mehrere Autoren mit den gleichen oder ähnlichen Namen auftreten. Wir möchten Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie könnten auch Modelle verwenden, um Auswahloptionen zu repräsentieren (z.B. eine Dropdown-Liste von Optionen), anstatt die Optionen direkt in die Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen von vornherein bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns über unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Wissen zeigt das untenstehende UML-Assoziationsdiagramm die in diesem Fall definierten Modelle (als Boxen). Wie oben beschrieben, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status der im System verfügbaren physischen Exemplare des Buches) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hart codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder Box sehen Sie den Modellnamen, die Feldnamen und Typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) jedes Modells zeigen, die möglicherweise in der Beziehung vorhanden sind. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Book` und ein `Genre` verwandt sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Books` haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genres` haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-primer) unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung trotzdem durch Suchen der zugehörigen `_id` im anderen Modell finden). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich – wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Überblick darüber, wie Modelle definiert und verwendet werden. Während Sie es lesen, denken Sie daran, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zum Behandeln des Erfolgs oder Fehlers der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server weiterhin auf andere Anfragen reagieren kann.

JavaScript verfügt über eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen hat JavaScript stark darauf gesetzt, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks größtenteils durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erfüllt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, Promises zu verwenden, um Code auszuführen, wenn ein Promise abgeschlossen ist. Wir empfehlen Ihnen dringend, [How to use promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für einen allgemeinen Überblick über beide Ansätze zu lesen.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu lesbarerem und verständlicherem asynchronen Code führt.

Der Ansatz funktioniert so, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu kennzeichnen, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Ausführung bei der ersten `await`-Methode unterbrochen, bis das Promise erfüllt ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Später, wenn das Promise erfüllt wird, gibt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann entweder bis zu einem weiteren `await` ausgeführt, bei dem die Ausführung erneut unterbrochen wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Wie dies funktioniert, sehen Sie im folgenden Beispiel.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` unterbrochen, bis das Promise erfüllt ist, woraufhin der Code zu `aFunctionThatReturnsPromise()` fortgesetzt wird und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird, und dies geschieht, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die obigen asynchronen Methoden werden in Reihe ausgeführt. Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen. Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterierbares Objekt von Promises als Eingabe akzeptiert und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt sind, mit einem Array von Erfüllungswerten. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie dies funktioniert. Wir haben zunächst zwei Funktionen, die Promises zurückgeben. Wir `await` auf deren Abschluss mit dem Promise, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, gibt `await` zurück und das Array mit den Ergebnissen wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erfüllt ist.
Sie würden das `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose-Primer

In diesem Abschnitt erhalten Sie einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Dieser Primer ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl im Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt all seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, jedoch wird MongoDB selbst nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloudbasierten _Datenbank als Dienst_ Free-Tier, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und sinnvoll für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (Datenbank als Dienst ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial verbinden wir uns stattdessen mit einer internetgehosteten Datenbank).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, warten wir hier mit einem `await` auf das von der `connect()`-Methode zurückgegebene Promise innerhalb einer `async`-Funktion.
> Wir verwenden den `catch()`-Handler des Promise, um Fehler beim Verbindungsaufbau zu handhaben, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufrufen.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` abrufen.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies übernimmt denselben Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden mit dem `Schema`-Interface _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht in der Datenbank gespeichert werden (wir werden weiter unten darauf eingehen).

Schemas werden dann mithilfe der Methode `mongoose.model()` in Model umgewandelt. Sobald Sie ein Model haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Model entspricht einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die im Model `Schema` definierten Felder/Schema-Typen.

#### Definition von Schemas

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` Sie mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, wobei die verschiedenen Felder im Objektparameter des Konstruktors definiert werden.

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

Im obigen Fall haben wir nur zwei Felder, ein String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierung und andere Methoden.

#### Erstellung eines Modells

Modelle können aus Schemas mit der Methode `mongoose.model()` erstellt werden:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Model erstellt wird (Mongoose erstellt die Datenbanksammlung für das Model _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie für die Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir zeigen Ihnen, wie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) funktioniert, und wenn wir unsere Ansichten erstellen.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Deskriptoren nach "type:" oder nach den Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die Methode `populate()` verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen an diesen Modellen durchführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne speziellen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten zur Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder beschnitten gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für den Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Damit wird angegeben, ob das Feld vorhanden sein muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben die Validatoren [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>).
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das unten gezeigte Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Für vollständige Informationen zur Feldvalidierung siehe [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die aber nicht in MongoDB gespeichert werden. Die Getter sind nützlich, um Felder zu formatieren oder zu kombinieren, während die Setter nützlich sind, um einen einzelnen Wert in mehrere Werte für die Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine Fullname-Virtuelleigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal, wenn ein Vollname in einer Vorlage verwendet wird, einen vollständigen Namen zu erstellen.

> [!NOTE]
> Wir verwenden eine virtuelle Eigenschaft in der Bibliothek, um eine eindeutige URL für jeden Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) enthalten. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die [chainable query builder API von mongoose](https://mongoosejs.com/docs/queries.html) zu erweitern (zum Beispiel, um eine Abfrage "byName" zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` hinzuzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Die Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die nachfolgenden Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern werden zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Database-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Erstellen und ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die folgenden Beispiele gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) auch verwenden, um die Modellinstanz gleichzeitig zu speichern.
Nachfolgend erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können mit der Punktsyntax auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, wobei nur die Felder für den Athleten _name_ und _age_ zurückgegeben werden. Hier geben wir nur ein Übereinstimmungsfeld (Sportart) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** bei einer Suche ist – es kann jedoch ein Fehlschlag in Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausgeführt wird.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` setzen können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Sie können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie separat hinzuzufügen.
Das folgende Codefragment ist die gleiche Abfrage wie oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) erhält alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden führen eine Abfrage für einen einzelnen Datensatz durch:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der mit den Bedingungen übereinstimmenden Elemente zu erhalten. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen machen können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Populierung

Sie können Verweise von einem Dokument/Model-Instanz zu einem anderen mithilfe des `ObjectId`-Schema-Feldes erstellen oder von einem Dokument zu vielen mithilfe eines Arrays von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` repräsentieren.
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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und weisen dem Autorfeld unserer Geschichte die Autoren-ID zu.

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
> Ein großer Vorteil dieser Programmierweise ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfung komplizieren müssen.
> Wenn einer der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode behandelt dies separat (normalerweise in einem `catch()`-Block), sodass der Zweck unseres Codes sehr klar ist.

Unser Geschichtsdokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert ist. Um die Autorinformationen in den Story-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unserer Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum stories-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen die Autoren und Geschichten verknüpfen, gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Autors_ zu erhalten, dann `find()` zu verwenden, um danach im Autorenfeld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemas und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in einem eigenen Modul (Datei) zu definieren und dann die Methode für die Erstellung des Modells zu exportieren.
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

Sie können dann das Modell sofort in anderen Dateien anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichtung der MongoDB-Datenbank

Da wir nun etwas über Mongoose wissen und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, mit der _LocalLibrary_-Website zu beginnen. Das allererste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudgehostete Sandbox-Datenbank. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz bietet, aber sie ist großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil der MongoDB Atlas ein beliebter _Datenbank als Dienst_-Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (zum Zeitpunkt des Schreibens sind andere beliebte Optionen [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, außer für die Datenbank-URL, die Sie angeben würden, wenn Sie eine Verbindung herstellen.
> Im [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso gut eine Datenbank auf dem [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) mit MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktinformationen eingeben und ihren Nutzungsbedingungen zustimmen).

Nachdem Sie sich angemeldet haben, gelangen Sie zum [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie im Abschnitt _Übersicht_ auf die Schaltfläche **+ Create**.

   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die Optionstemplate **M0 FREE**.

   ![Wählen Sie eine Bereitstellungsoption, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir belassen es in diesem Tutorial bei `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispiel-Daten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_ aus. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Create deployment** (Erstellung des Clusters dauert einige Minuten).

4. Dadurch wird der Abschnitt _Security Quickstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Sicherheits-Quickstart-Bildschirm bei MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Vergessen Sie nicht, die Anmeldeinformationen zu kopieren und sicher zu speichern, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie das Verwenden von Sonderzeichen im MongoDB-Benutzerpasswort, da Mongoose möglicherweise die Verbindungszeichenkette nicht korrekt analysiert.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer zu ermöglichen.
   - Geben Sie `0.0.0.0/0` im IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Add Entry**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall aus zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu beschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall aus, weil wir nicht wissen, von wo die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Gehen Sie zu den Datenbanken nach der Einrichtung der Zugriffsregeln auf dem MongoDB Atlas.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Übersicht_ zurück. Klicken Sie im Menü _Deployment_ auf den Abschnitt _Database_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Browse Collections**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Collections_ geöffnet. Klicken Sie auf die Schaltfläche **Add My Own Data**.
   ![Erstellen einer Datenbank bei MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Create Database_ geöffnet.

   ![Details beim Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Collections_ zurück, wobei Ihre Datenbank erstellt ist.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Overview_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie vom Cluster0-Bildschirm _Overview_ auf die Schaltfläche **Connect**.

    ![Verbindung konfigurieren nach dem Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Connect to Cluster0_ geöffnet.

    ![Wählen Sie die Short SRV-Verbindung, wenn Sie bei MongoDB Atlas eine Verbindung einrichten.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_, dann den _Driver_ **Node.js** und _Version_ wie angezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Copy**-Symbol, um die Verbindungszeichenkette zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>`-Platzhalter in der Verbindungszeichenkette durch Ihr Benutzerpasswort.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit dieser Zeichenkette an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen.
Dies sieht so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skeleton Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose-Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Port-Einrichtung (nach der Zeile `app.set("port", port);`).
Ersetzen Sie die Datenbank-URL-Zeichenkette ('_insert_your_database_url_here_') durch die URL-Standortinformationen Ihrer eigenen Datenbank (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

```js
// Set up mongoose connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";

async function connectMongoose() {
  await mongoose.connect(mongoDB);
}

try {
  connectMongoose();
} catch (err) {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
}
```

Wie im [Mongoose-Primer](#verbindung_zu_mongodb) besprochen, stellt dieser Code die Standardverbindung zur Datenbank her und meldet alle Fehler in der Konsole.

> [!NOTE]
> Wir hätten den Datenbank-Verbindungscode in unserem **app.js**-Code einfügen können.
> Das Platzieren im Anwendungseinstiegspunkt entkoppelt die Anwendung und die Datenbank, was es einfacher macht, eine andere Datenbank für den Testcode zu verwenden.

Beachten Sie, dass das harte Kodieren von Datenbank-Anmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt, und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen freilegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer machen, wenn [in die Produktion bereitgestellt wird](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir definieren ein separates Modul für jedes Modell, wie oben [erwähnt](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstamm (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den folgenden `Author`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor mit `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date` Feldern für die Geburts- und Todesdaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten - wir werden die Eigenschaft in unseren Templates verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, da die URL für ein Element dann nur an einer Stelle geändert werden muss.
> An dieser Stelle würde ein Link mit dieser URL nicht funktionieren, da wir noch keinen Routenverarbeitungscode für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den folgenden `Book`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Das meiste davon ähnelt dem Autorenmodell — wir haben ein Schema mit einer Reihe von Zeichenfolgenfeldern und eine virtuelle für das Abrufen der URL spezifischer Buchdatensätze deklariert und das Modell exportiert.

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

Der Hauptunterschied besteht hier darin, dass wir zwei Verweise auf andere Modelle erstellt haben:

- author ist ein Verweis auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BookInstance-Modell

Kopieren Sie schließlich den folgenden `BookInstance`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
Die `BookInstance` repräsentiert ein bestimmtes Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird, und "Imprint" (oder Version) Details.

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

- `enum`: Dies ermöglicht es uns, die zulässigen Werte einer Zeichenfolge zu setzen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines Enums können wir die Rechtschreibung und beliebige Werte für unseren Status verhindern).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchexemplare auf "Maintenance" und das Standarddatum des `due_back` auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres (der Kategorie des Buches, z.B. ob es Fiktion oder Non-Fiktion, Romanze oder Militärgeschichte ist, usw.).

Die Definition wird sehr ähnlich wie die anderen Modelle sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) für die URL des Genres, benannt als `url`.
- Exportieren Sie das Modell.

## Testen — einige Elemente erstellen

Das ist es. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) und platzieren Sie sie in Ihrem Verzeichnis _express-locallibrary-tutorial_ (auf gleicher Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript nützlich sein, aber das Verständnis ist für dieses Tutorial nicht notwendig.

2. Führen Sie das Skript mit Node in Ihrer Befehlszeile aus und geben Sie die URL Ihrer _MongoDB_-Datenbank an (die gleiche, die Sie zuvor als _insert_your_database_url_here_-Platzhalter in `app.js` ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen einschließen.
   > Unter anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte ohne Unterbrechung durchlaufen und Elemente bei deren Erstellung im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Abschnitt _Collections_).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen vorzudringen und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemas und -Modelle definiert werden. Wir haben dann diese Informationen verwendet, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mithilfe eines eigenständigen Skripts). Im nächsten Artikel werden wir einige Seiten erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
