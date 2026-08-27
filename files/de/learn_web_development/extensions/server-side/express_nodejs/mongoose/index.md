---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 710372d69095aaeadfba6c892f3e39ed63df4c54
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt eine kurze Einführung in Datenbanken und deren Verwendung in Node/Express-Apps. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem werden kurz einige der wichtigsten Möglichkeiten gezeigt, wie auf Modelldaten zugegriffen werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung einer Skelett-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, Ihre eigenen Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Website der Local Library nutzen, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder sie nutzen werden, um nach Büchern zu stöbern und zu suchen, herauszufinden, ob Kopien verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient speichern und abrufen zu können, speichern wir sie in einer _Datenbank_.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen durchzuführen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann detailliert die spezifisch ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Zeit bis zur Produktivität/Lernkurve, Leistung, leichte Replizierung/Backup, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankunabhängigen Backend bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen Abfragesprache erzielt werden, die von der Datenbank unterstützt wird. Objekt-Mapper sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders wahr, wenn der Mapper verschiedene Datenbank-Backends unterstützt und mehr Kompromisse eingehen muss, welche Datenbankfunktionen unterstützt werden).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Begriffen von JavaScript-Objekten denken können, anstatt in Datenbanksemantiken — dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Kosten für Entwicklung und Wartung! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von größter Bedeutung, sollten Sie dringend in Betracht ziehen, ein ODM zu verwenden.

### Welchen ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanagerseite verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teil an!).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Dokuments beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungs-Tool, das für asynchrone Umgebungen entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Web Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, unterstützt Transaktionen, Eager/Nested-Eager-Beziehungen, polymorphe Assoziationen und unterstützt Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Arbeitet mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promises-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und verfügt über solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objekt-Relationship-Manager für Node.js. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank mit einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, ist GraphQL sehr beliebt und verfügt über Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Dokumentationsqualität usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt der Erstellung des Dokuments ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source [NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise, weil das Dokumentenspeicher- und Abfragesystem stark JSON ähnelt und JavaScript-Entwicklern daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die Modelle für das [LocalLibrary Webseitenbeispiel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definiert und darauf zugegriffen werden.

## Entwurf der LocalLibrary-Modelle

Bevor Sie loslegen und mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Kopien verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir könnten mehr Informationen über den Autor speichern müssen als nur seinen Namen, und es könnten mehrere Autoren mit demselben oder ähnlichem Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie zu sortieren.

Wenn Sie Ihre Modelle entwerfen, macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listen-Optionen darzustellen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in der Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Gedanken zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästen). Wie oben diskutiert, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status spezifischer physischer Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben auch beschlossen, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hartcodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes der Kästen können Sie den Modellnamen, die Feldnamen und Typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplikationen_. Die Multiplikationen sind die Zahlen im Diagramm, die die Anzahl (Maximum und Minimum) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen nahe dem `Book` Modell zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose primer](#mongoose_primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie die zugehörige `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance` Schema. Diese Wahl war etwas willkürlich – wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt gibt eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im oben gezeigten Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code, der den Erfolg oder Misserfolg der Methode behandelt, zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anfragen reaktionsfähig bleiben kann.

JavaScript verfügt über eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch stützte sich JavaScript stark auf das Übergeben von [Rückruffunktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Rückrufe weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und deren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erfüllt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt ist, und wir empfehlen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen umfassenden Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf die Erfüllung eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, weil dies zu lesbarerem und verständlicherem asynchronem Code führt.

Die Vorgehensweise funktioniert so, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu kennzeichnen, und dann in dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation bei der ersten `await`-Methode pausiert, bis das Promise erfüllt ist.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Wenn das Promise später erfüllt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird geworfen, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, woraufhin es wieder pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie das in dem folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise erfüllt ist, zu welchem Zeitpunkt der Code zu `functionThatReturnsPromise()` fortfährt und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion geworfen wird, und dies wird geschehen, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

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

Die asynchronen Methoden oben werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterierbares Promise als Eingabe annimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise erfüllt sich, wenn alle eingegebenen Promises erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der eingegebenen Promises abgelehnt wird, mit dem ersten Ablehnungsgrund.

Der unten stehende Code zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await`en darauf, dass beide mit dem Promise abgeschlossen werden, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, wird `await` zurückgegeben und das Ergebnisse-Array befüllt,
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

Promises mit `await`/`async` ermöglichen sowohl eine flexible als auch eine "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose Primer

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert wird und wie grundlegende Abfragen ausgeführt werden.

> [!NOTE]
> Dieser Primer ist stark beeinflusst von der [Mongoose Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Installation von Mongoose und MongoDB

Mongoose wird in Ihr Projekt (**package.json**) wie jede andere Abhängigkeit installiert - mithilfe von npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, jedoch installiert es nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme herunterladen und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir die kostenlose _Datenbank als Service_ Stufe von [MongoDB Atlas](https://www.mongodb.com/). Diese ist für die Entwicklung geeignet und macht in diesem Tutorial Sinn, da sie die "Installation" betriebssystemunabhängig macht (Datenbanken als Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und mit `mongoose.connect()` eine Verbindung zu einer lokal gehosteten Datenbank herstellen, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer internetgehosteten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, wartet hier die `await` auf das Promise, das von der `connect()`-Methode innerhalb einer `async`-Funktion zurückgegeben wird.
> Wir verwenden den `catch()`-Handler des Promises, um Fehler beim Verbindungsversuch zu behandeln, aber wir hätten auch `main()` in einem `try...catch`-Block aufrufen können.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Diese Methode verwendet dieselbe Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` direkt zurückkehrt; wenn Sie darauf warten müssen, dass die Verbindung hergestellt wird, können Sie `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden mithilfe der `Schema`-Schnittstelle definiert. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Zusätzlich können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies weiter unten diskutieren).

Schemen werden dann mit der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell `Schema` definierten Felder/Schema-Typen.

#### Schemen definieren

Der unten stehende Codeausschnitt zeigt, wie Sie möglicherweise ein einfaches Schema definieren. Zuerst `require()` Sie mongoose, verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder darin im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, die Validierung und andere Methoden zeigen.

#### Ein Modell erstellen

Modelle werden aus Schemen unter Verwendung der Methode `mongoose.model()` erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie verwenden möchten, um das Modell zu erstellen.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie das im Abschnitt [Modelle verwenden](#verwendung_von_modellen) und wenn wir unsere Ansichten erstellen, funktioniert.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispielschema, das viele der gängigen Feldtypen und deren Deklaration zeigt, wird unten angezeigt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die Methode `populate()` verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, Sie können jedoch ein Array eines jeden Typen von Objekt haben.

Der Code zeigt auch beide Möglichkeiten zur Deklarierung eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Optionen beinhalten Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z.B. maximale/minimale Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String` Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder beschnitten gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen in allen Fällen sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehlern anzugeben.

Zu den eingebauten Validatoren gehören:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld vorhanden sein muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der für das Feld erlaubten Werte an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das unten (leicht modifizierte) Beispiel aus den Mongoose-Dokumenten zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenten-Eigenschaften, auf die Sie zugreifen und die Sie setzen können, die jedoch nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert zu zerlegen und für die Speicherung in mehrere Werte umzuwandeln. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle Eigenschaft für den vollständigen Namen aus einem Vornamen- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal einen vollständigen Namen zu erstellen, wenn er in einer Vorlage verwendet wird.

> [!NOTE]
> In der Bibliothek verwenden wir eine virtuelle Eigenschaft, um eine eindeutige URL für jeden Modell-Datensatz basierend auf einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und auf das aktuelle Objekt zugreifen kann. Abfrage-Helfer ermöglichen es Ihnen, die [kettbare Abfrage-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie eine Abfrage "byName" in Ergänzung zu den Methoden `find()`, `findOne()` und `findById()` hinzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Nutzung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern werden zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

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

Jedes Modell hat eine zugehörige Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Sie können nach Datensätzen suchen, indem Sie Abfragemethoden verwenden und die Abfragebedingungen als JSON-Dokument angeben. Der untere Codeausschnitt zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, indem nur die Felder für den Athleten _name_ und _age_ zurückgegeben werden. Hier geben wir nur ein übereinstimmendes Feld an (sport), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, daran zu denken, dass das Nicht-Finden von Ergebnissen **kein Fehler** bei einer Suche ist — aber es kann ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der in das Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` rufen können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) zusammenketten, anstatt sie separat hinzuzufügen.
Der unten stehende Codeausschnitt ist der gleiche wie unsere obige Abfrage mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) erhält alle übereinstimmenden Datensätze, aber oft wollen Sie nur einen Treffer erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der Einträge zu erhalten, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung ohne das tatsächliche Abrufen der Datensätze durchführen möchten.

Es gibt noch viel mehr, das Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verbundenen Dokumenten – Auflösung

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen erstellen, indem Sie das `ObjectId` Schema-Feld verwenden, oder von einem Dokument zu vielen, indem Sie ein Array von `ObjectIds` verwenden. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des verbundenen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren die folgenden Schemata Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als ein Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
Das `ref`-Attribut sagt dem Schema, welcher Modell für dieses Feld zugewiesen werden kann.

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
Unten erstellen wir einen Autor, dann eine Geschichte und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

```js
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob now exists, so let's create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();
```

> [!NOTE]
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfung verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise zurückgewiesen und ein Fehler wird geworfen.
> Unser Fehlerbehandlungscode behandelt das separat (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat nun einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autoreninformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum `stories`-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Orte haben, an denen die Informationen zur Beziehung von Autoren und Geschichten gepflegt werden müssen.
>
> Ein besserer Weg ist, die `_id` unseres _Autors_ zu erhalten, dann `find()` zu verwenden, um dies im Autorenfeld über alle Geschichten hinweg zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemen und Modelle mit jeder Dateistruktur erstellen können, die Sie möchten, empfehlen wir dringend, jedes Modellschema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können dann das Modell ohne Umwege in anderen Dateien verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nachdem wir nun etwas darüber verstanden haben, was Mongoose kann und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das allererste, was wir tun möchten, ist das Einrichten einer MongoDB-Datenbank, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die cloud-gehostete Sandbox-Datenbank von [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz aufweist, eignet sich jedoch hervorragend für die Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Service_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Entscheidungen zum Zeitpunkt der Erstellung waren [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas)).

> [!NOTE]
> Wenn Sie es bevorzugen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binaries für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, abgesehen von der Datenbank-URL, die Sie beim Herstellen der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Deployment in die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Zuerst müssen Sie [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nachdem Sie sich angemeldet haben, gelangen Sie zum [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Erstellen**-Schaltfläche im Abschnitt _Übersicht_.

   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die **M0 FREI**-Option.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten auf der Seite, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster-Name_ ändern.
     Wir belassen es bei `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das Kontrollkästchen _Sample-Dataset vorladen_, da wir später unsere eigenen Beispiel-Daten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_ aus. Verschiedene Regionen bieten verschiedene Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die **Bereitstellung erstellen**-Schaltfläche (die Erstellung des Clusters dauert einige Minuten).

4. Dadurch wird der Abschnitt _Sicherheits-Schnellstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Bildschirm Sicherheits-Schnellstart in MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die **Benutzer erstellen**-Schaltfläche.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen im Passwort Ihres MongoDB-Benutzers, da Mongoose den Verbindungsstring möglicherweise nicht korrekt analysiert.

   - Wählen Sie **Durch aktuelle IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer aus zu erlauben.
   - Geben Sie `0.0.0.0/0` in das IP-Adressfeld ein und klicken Sie dann auf die **Eintrag hinzufügen**-Schaltfläche.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall her erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu beschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall her, weil wir nicht wissen, woher die Anforderung nach der Bereitstellung kommen wird.

   - Klicken Sie auf die **Fertigstellen und Schließen**-Schaltfläche.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die **Zur Übersicht gehen**-Schaltfläche.
   ![Gehen Sie zu Datenbanken, nachdem Sie die Zugriffsregeln in MongoDB Atlas eingerichtet haben](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur _Übersicht_ zurück. Klicken Sie im Menü _Bereitstellung_ links im Abschnitt _Datenbank_ auf die **Sammlungen durchsuchen**-Schaltfläche.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Sammlungen_ geöffnet. Klicken Sie auf die **Meine eigenen Daten hinzufügen**-Schaltfläche.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Datenbank erstellen_ geöffnet.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die **Erstellen**-Schaltfläche, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ mit Ihrer erstellten Datenbank zurück.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im Bildschirm _Übersicht_ des Clusters0 auf die **Verbinden**-Schaltfläche.

    ![Konfigurieren Sie die Verbindung, nachdem Sie ein Cluster in MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Mit Cluster0 verbinden_ geöffnet.

    ![Wählen Sie die Short SRV Verbindung bei der Einrichtung einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und die _Version_ wie gezeigt.
    - _Installieren Sie den Treiber nicht_, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>`-Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzernamen und Passwort), die zum Zugriff darauf verwendet werden kann.
Dies wird in etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Befehlszeile und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Website der Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es in Ihre **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stamm Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Zeile, auf der Sie den Port setzen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die Standort-URL Ihrer eigenen Datenbank (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose Primer](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet Fehler in der Konsole.

> [!NOTE]
> Wir hätten den Datenbankverbindungscode in unseren **app.js**-Code einfügen können.
> Das Platzieren im Einstiegspunkt der Anwendung entkoppelt die Anwendung und die Datenbank, wodurch es einfacher wird, eine andere Datenbank für das Ausführen von Testcode zu verwenden.

Es ist zu beachten, dass die direkte Hardcodierung von Datenbank-Anmeldedaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kern-Verbindungscode zeigt und da während der Entwicklung kein signifikantes Risiko besteht, dass das Lecken dieser Details sensible Informationen ans Licht bringt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun, wenn Sie [in die Produktion gehen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir definieren für jedes Modell ein separates Modul, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie mit der Erstellung eines Ordners für unsere Modelle im Stamm des Projekts (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den unten gezeigten `Author`-Schema Code und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor mit `String` SchemaTypes für den Vornamen und den Familiennamen (erforderlich, mit maximal 100 Zeichen) und `Date` Feldern für die Geburts- und Sterbedaten.

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

Wir haben auch eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Deklaration unserer URLs als virtuelle Eigenschaft im Schema ist eine gute Idee, da die URL für einen Artikel dann nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link unter Verwendung dieser URL nicht funktionieren, da wir keinen Code zur Behandlung von Routen für einzelne Modell-Instanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den unten gezeigten `Book`-Schema Code und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Der größte Teil dieses Codes ähnelt dem Author-Modell - wir haben ein Schema mit mehreren String-Feldern und einer virtuellen Eigenschaft erstellt, um die URL von spezifischen Buch-Datensätzen zu erhalten, und haben das Modell exportiert.

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

Kopieren Sie schließlich den unten gezeigten `BookInstance`-Schema Code und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie zurückerwartet wird, und "Impressum" (oder Version) Details.

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

- `enum`: Dies ermöglicht es uns, die erlaubten Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher zu spezifizieren (die Verwendung eines enum bedeutet, dass wir falsche Schreibweisen und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" zu setzen und das Standard-`due_back`-Datum auf `now` (beachten Sie, dass Sie die Date-Funktion aufrufen können, um das Datum zu setzen).

Alles andere sollte Ihnen aus unseren vorherigen Schemas vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zur Speicherung von Genres (der Kategorie des Buches, z.B. ob es sich um Sach- oder Fachliteratur, Romanze oder Militärgeschichte handelt).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, benannt als `url`.
- Exportieren Sie das Modell.

## Testen — erstellen Sie einige Artikel

Das ist es. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Artikel jeder Art zu erstellen:

1. Laden Sie (oder erstellen Sie auf andere Weise) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf der gleichen Ebene wie die `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript nützlich sein, aber das Verständnis davon ist für dieses Tutorial nicht notwendig.

2. Führen Sie das Skript mithilfe von node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie zuvor im `app.js` anstelle des _insert_your_database_url_here_ Platzhalters ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen und Artikel im Terminal anzeigen, während sie erstellt werden.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tab _Sammlungen_).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen einzudringen und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs in Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen (mit einem eigenständigen Skript) erstellt haben. Im nächsten Artikel werden wir einige Seiten erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Auflösung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
