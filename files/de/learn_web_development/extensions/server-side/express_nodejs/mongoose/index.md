---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Artikel werden Datenbanken kurz vorgestellt und erläutert, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um der Website der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Datenbankzugriff zu ermöglichen. Der Artikel erklärt, wie Objektschema und -modelle deklariert werden, behandelt die wichtigsten Feldtypen und die grundlegende Validierung. Zudem wird kurz gezeigt, auf welche Hauptarten Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung einer Website-Skelettstruktur</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library-Website nutzen, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder die Möglichkeit haben, Bücher zu durchstöbern und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze für die Durchführung von **C**reate-, **R**ead-, **U**pdate- und **D**elete-Operationen (CRUD). Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählte Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Erfordernis für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie Produktivitätszeitpunkt/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Auch wenn es keine einzige "beste" Datenbank gibt, sollten fast alle gängigen Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Weitere Informationen zu den Optionen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist die beste Methode, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze zur Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbank, wie SQL.
- Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankagnostische Backend bereitstellen.

Die beste _Leistung_ kann erzielt werden, indem SQL oder eine andere von der Datenbank unterstützte Abfragesprache verwendet wird. Objektmapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat umzuwandeln, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt auf Datenbanksemantik — dies gilt insbesondere, wenn Sie mit mehreren Datenbanken arbeiten müssen (entweder auf derselben oder unterschiedlichen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Sofern Sie nicht mit der nativen Abfragesprache sehr vertraut sind oder die Leistung von entscheidender Bedeutung ist, sollten Sie stark in Betracht ziehen, ein ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketverwaltungssite verfügbar sind (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags an, um eine Teilmenge zu finden!).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Artikels beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungswerkzeug, das für eine asynchrone Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework extrahiertes ORM. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl eine auf Promises basierende als auch eine traditionelle Callback-Schnittstelle, Unterstützung für Transaktionen, eager/nested-eager Relation Loading, polymorphe Beziehungen und Unterstützung für One-to-One-, One-to-Many- und Many-to-Many-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrundeliegenden Datenbankengine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein auf Promises basierendes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank unter Verwendung eines objektorientierten Ansatzes zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und hat Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt der Erstellung dieses Artikels ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community extrem beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr nach JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie Sie das Mongoose-Schema und die -Modelle für das Beispiel [LocalLibrary website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definieren und darauf zugreifen.

## Entwurf der LocalLibrary-Modelle

Bevor Sie direkt mit dem Programmieren der Modelle beginnen, lohnt es sich, ein paar Minuten über die Daten nachzudenken, die wir speichern müssen, und über die Beziehungen zwischen den verschiedenen Objekten.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Kopien verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Vielleicht müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnten mehrere Autoren mit demselben oder ähnlichem Namen existieren. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe zusammenhängender Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listenoptionen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten) darzustellen, anstatt die Auswahlmöglichkeiten in der Website selbst hart zu codieren — dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Wissen zeigt das untenstehende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästen). Wie oben erwähnt, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status bestimmter physischer Exemplare des Buches im System) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben beschlossen, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hart codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kästchens können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells anzeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-überblick) unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugeordneten `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buch-Schema zu definieren und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Library Model with correct cardinality](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Überblick darüber, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Suchen, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren und der Code, um den Erfolg oder das Scheitern der Methode zu behandeln, zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist. Während der Server auf den Abschluss der Datenbankoperation wartet, kann anderer Code ausgeführt werden, sodass der Server auf andere Anfragen reagieren kann.

JavaScript hat mehrere Mechanismen zur Unterstützung asynchronen Verhaltens. Historisch gesehen hat sich JavaScript stark darauf verlassen, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um die Erfolgs- und Fehlerfälle zu behandeln. Im modernen JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden, die ihren zukünftigen Zustand repräsentieren. Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erledigt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptwege, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt ist, und wir empfehlen Ihnen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für einen allgemeinen Überblick über beide Ansätze zu lesen. In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss des Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu lesbarerem und verständlicherem asynchronem Code führt.

Bei diesem Ansatz verwenden Sie das Schlüsselwort `async function`, um eine Funktion als asynchron zu kennzeichnen, und innerhalb dieser Funktion wenden Sie `await` auf jede Methode an, die ein Promise zurückgibt. Wenn die asynchrone Funktion ausgeführt wird, wird die Operation an der ersten `await`-Methode angehalten, bis das Promise erfüllt ist. Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück, und der nachfolgende Code kann ausgeführt werden. Später, wenn das Promise erfüllt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde. Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, an dem Punkt wird erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Wie dies funktioniert, sehen Sie im untenstehenden Beispiel. `myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird. Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise erfüllt ist, dann fährt der Code bei `aFunctionThatReturnsPromise()` fort und wartet erneut. Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion auftritt, und das passiert, wenn das Promise von einer der Methoden abgelehnt wird.

```js
async function myFunction() {
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

Die oben genannten asynchronen Methoden werden der Reihe nach ausgeführt. Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller beenden. Dies wird mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) durchgeführt, die ein Iterable von Promises als Eingabe annimmt und ein einzelnes `Promise` zurückgibt. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabepromises erfüllt sind, mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabepromises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie das funktioniert. Erstens haben wir zwei Funktionen, die Promises zurückgeben. Wir `await` auf beide, damit sie mit dem Promise fertig sind, das von `Promise.all()` zurückgegeben wird. Sobald beide abgeschlossen sind, gibt `await` zurück und das Array der Ergebnisse wird gefüllt, dann fährt die Funktion zum nächsten `await` fort, und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erfüllt ist. Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler abzufangen.

```js
async function myFunction() {
  // ...
  const [resultFunction1, resultFunction2] = await Promise.all([
    functionThatReturnsPromise1(),
    functionThatReturnsPromise2(),
  ]);
  // ...
  await anotherFunctionThatReturnsPromise(resultFunction1);
}
```

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose-Überblick

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden, und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Dieser Überblick ist stark vom [Mongoose Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm. Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektverzeichnis:

```bash
npm install mongoose
```

Das Installieren von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und es lokal installieren. Sie können auch cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den [MongoDB Atlas](https://www.mongodb.com/) cloud-basierten _database as a service_ Free Tier verwenden, um die Datenbank bereitzustellen. Dies eignet sich für die Entwicklung und ist sinnvoll für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (Datenbank-as-a-Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank. Sie können `require()` verwenden und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` wie unten gezeigt herstellen (für das Tutorial werden wir stattdessen eine Verbindung zu einer internet-gehosteten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, `await` wir hier auf das Promise, das von der `connect()`-Methode innerhalb einer `async`-Funktion zurückgegeben wird. Wir verwenden den `catch()`-Handler des Promise, um alle Fehler zu behandeln, die beim Versuch der Verbindung auftreten, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` abrufen. Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden. Dies nimmt dieselbe Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück). Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf die Herstellung der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden über die `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um das Arbeiten mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert sind (wir werden dies weiter unten besprechen).

Schemas werden dann mithilfe der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird in der MongoDB-Datenbank einer _Collection_ von _Dokumenten_ zugeordnet. Die Dokumente enthalten die im Modell-`Schema` definierten Felder/Schemata-Typen.

#### Definieren von Schemas

Der untenstehende Codeausschnitt zeigt, wie Sie vielleicht ein einfaches Schema definieren. Zuerst `require()` Sie mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder darin im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, ein String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierungen und anderen Methoden zeigen.

#### Erstellung eines Modells

Modelle werden aus Schemas mit der Methode `mongoose.model()` erstellt:

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

Das erste Argument ist der singuläre Name der Collection, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbank-Collection für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) tun, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar. Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, ist unten dargestellt.

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

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorobjekt zu repräsentieren. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die Methode `populate()` verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift, usw.). Die Beispiele oben zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von beliebigen Objekttypen haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_, gefolgt von einem Objekt, das den `type` und alle anderen _options_ für das Feld definiert. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z. B. Max-/Min-Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder gekürzt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validierer. Dies wird verwendet, um anzugeben, ob das Feld ausgefüllt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die erlaubte Menge von Werten für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, auf die Sie zugreifen und die Sie setzen können, die aber nicht in MongoDB gespeichert werden. Die Getter sind nützlich, um Felder zu formatieren oder zu kombinieren, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte für die Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine vollständige Namen-Virtuelleigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal, wenn ein vollständiger Name in einer Vorlage verwendet wird, einen vollständigen Namen zu erstellen.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modellrekord zu definieren, indem wir einen Pfad und den `_id`-Wert des Rekords verwenden.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Hilfsfunktionen

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Hilfsfunktionen](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Hilfsfunktionen ermöglichen es Ihnen, die [verkettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie eine Abfrage "byName" zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden hinzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, in der Sie suchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Für weitere Informationen siehe: [Models](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Der umgebende `async function`- und `try...catch`-Block zur Fehlererfassung sind aus Gründen der Übersichtlichkeit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen. Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig mit dem Speichern zu definieren. Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie können eine neue Verbindung erstellen und `.model()` aufrufen, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, indem Sie Abfragemethoden verwenden und die Abfragebedingungen als JSON-Dokument angeben. Der Codeausschnitt unten zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und nur die Felder für den Athletennamen und das Alter zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an (Sport), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — aber es kann ein Fehlfall im Kontext Ihrer Anwendung sein. Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfragen-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück. Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen. `exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie mit `await` auf das Ergebnis warten können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>)-Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie separat hinzuzufügen. Der untenstehende Codeausschnitt entspricht unserer Abfrage oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) erhält alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind hilfreiche Komfortfunktionen für das Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der Artikel, die Bedingungen erfüllen, zu erhalten. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die tatsächlichen Datensätze abzurufen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Queries](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Instanz auf ein anderes mit dem Feld `ObjectId` des Schemas erstellen, oder von einem Dokument auf viele mit einem Array von `ObjectIds`. Das Feld speichert die ID des verwandten Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten. Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen. Jede Geschichte kann einen einzelnen Autor haben. Die `ref`-Eigenschaft teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen auf das verwandte Dokument speichern, indem wir den `_id`-Wert zuweisen. Unten erstellen wir einen Autor, dann eine Geschichte und weisen die Autor-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir die Hauptpfad unseres Codes nicht mit Fehlerüberprüfung verkomplizieren müssen. Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst. Unser Fehlerbehandlungs-Code kümmert sich separat darum (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtsdokument hat jetzt einen Autor, der durch die ID des Autor-Dokuments referenziert wird. Um die Autoreninformationen in den Story-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate) wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserer Geschichte einen Autor hinzugefügt haben, aber wir haben nichts unternommen, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir also alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, unsere Geschichte dem Geschichten-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen über die Beziehung zwischen Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Methode besteht darin, die `_id` unseres _Autor_ abzurufen und dann `find()` zu verwenden, um danach im Autorenfeld über alle Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemas und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zur Erstellung des Modells zu exportieren. Dies wird unten gezeigt:

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

Jetzt, da wir etwas über Mongoose erfahren haben und wissen, wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das allererste, was wir tun wollen, ist, eine MongoDB-Datenbank einzurichten, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) Cloud-gehostete Sandbox-Datenbank verwenden. Dieser Datenbank-Tier wird nicht als geeignet für Produktionswebseiten angesehen, da sie keine Redundanz bietet, aber es ist großartig für die Entwicklung und das Prototyping. Wir verwenden es hier, weil es kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank as a Service_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen würden (andere beliebte Entscheidungen zum Zeitpunkt der Erstellung dieses Artikels sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, abgesehen von der Datenbank-URL, die Sie beim Verbinden angeben würden. Im Tutorial [Express Tutorial Teil 7: Deployment in Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdetails ausfüllen und deren Nutzungsbedingungen anerkennen).

Nach dem Einloggen werden Sie zum [Startbildschirm](https://cloud.mongodb.com/v2) weitergeleitet:

1. Klicken Sie auf die Schaltfläche **+ Create** im Abschnitt _Overview_.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Deploy your cluster_ geöffnet.
   Klicken Sie auf die Option **M0 FREE** Vorlage.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten auf der Seite, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern. Wir belassen es für dieses Tutorial bei `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir verwenden sie hier nicht.
   - Klicken Sie auf die Schaltfläche **Create deployment** (die Erstellung des Clusters dauert einige Minuten).

4. Dadurch wird der Abschnitt _Security Quickstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Bildschirm "Security Quickstart" auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort an, das Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt). Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose den Verbindungsstring möglicherweise nicht richtig analysieren kann.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Add Entry**. Dies teilt MongoDB mit, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu beschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Gehen Sie zu Datenbanken, nachdem Sie die Zugriffsregeln auf MongoDB Atlas eingerichtet haben](mongodb_atlas_-_accessrules.jpg)

6. Sie werden zum _Overview_ Bildschirm zurückkehren. Klicken Sie auf den Abschnitt _Database_ unter dem Menü _Deployment_ links. Klicken Sie auf die Schaltfläche **Browse Collections**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies wird den Abschnitt _Collections_ öffnen. Klicken Sie auf die Schaltfläche **Add My Own Data**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Create Database_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie werden zum Bildschirm _Collections_ zurückkehren, und Ihre Datenbank wurde erstellt.
   ![Datenbankerstellungsbestätigung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Overview_, um zur Clusterübersicht zurückzukehren.

10. Vom _Overview_-Bildschirm des Cluster0 klicken Sie auf die Schaltfläche **Connect**.

    ![Konfigurieren Sie die Verbindung, nachdem Sie ein Cluster in MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Connect to Cluster0_.

    ![Wählen Sie die Short SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Drivers_, dann den _Driver_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Copy**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie das `<password>`-Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen. Diese sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben. Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben es bereits getan, als Sie den [Mongoose-Überblick](#installation_von_mongoose_und_mongodb) gelesen haben.

```bash
npm install mongoose
```

## Verbindung zu MongoDB

Öffnen Sie **/app.js** (im Wurzelverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`). Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen aus _MongoDB Atlas_).

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

Wie im [Mongoose-Überblick](#verbindung_zu_mongodb) oben diskutiert, erstellt dieser Code die Standardverbindung zur Datenbank und berichtet alle Fehler an die Konsole.

Beachten Sie, dass das Hardcodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird. Wir tun es hier, weil es den Kerneinbindungscode zeigt und weil während der Entwicklung kein erhebliches Risiko besteht, dass das Offenlegen dieser Details sensible Informationen gefährden oder beschädigen wird. Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn [Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie oben [diskutiert](#one_schemamodel_per_file). Beginnen Sie mit der Erstellung eines Ordners für unsere Modelle im Projektstamm (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schema-Code, der unten angezeigt wird, und fügen Sie ihn in Ihre Datei **./models/author.js** ein. Das Schema definiert einen Autor mit `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date`-Feldern für die Geburts- und Todesdaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für das AuthorSchema mit dem Namen "url" deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuelle Eigenschaft im Schema ist eine gute Idee, da die URL für ein Element nur an einer Stelle geändert werden muss. An diesem Punkt würde ein Link mit dieser URL nicht funktionieren, weil wir keinen Routenbehandlungscode für einzelne Modellinstanzen haben. Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schema-Code, der unten angezeigt wird, und fügen Sie ihn in Ihre Datei **./models/book.js** ein. Das meiste davon ist dem Modell des Autors ähnlich — wir haben ein Schema mit einer Anzahl von String-Feldern und einer virtuellen Eigenschaft zur Ermittlung der URL bestimmter Buchdatensätze deklariert und wir haben das Modell exportiert.

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

- autor ist ein Verweis auf ein einzelnes `Author` Modellobjekt und ist erforderlich.
- genre ist ein Verweis auf ein Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanzmodell

Schließlich kopieren Sie den `BookInstance`-Schema-Code, der unten angezeigt wird, und fügen ihn in Ihre Datei **./models/bookinstance.js** ein. Die `BookInstance` stellt ein bestimmtes Exemplar eines Buches dar, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, wann es zurückerwartet wird, und "Imprint" (oder Versions-)Details.

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

- `enum`: Dadurch können wir erlaubte Werte für einen String festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines enums können wir Tippfehler und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden Default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standard-`due_back`-Datum auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte uns von unserem vorherigen Schema bekannt vorkommen.

### Genremodell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres (der Kategorie des Buches, z.B. ob es Fiktion oder Sachbuch, Liebesroman oder Militärgeschichte usw. ist).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen umfassen.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für die URL des Genres, benannt `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen Sie einige Artikel

Das war's. Wir haben nun alle Modelle für die Seite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), werden wir jetzt ein _unabhängiges_ Skript ausführen, um Elemente jeden Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie auf andere Weise) innerhalb Ihres _express-locallibrary-tutorial_ Verzeichnisses (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich beim Erlernen von JavaScript sein, aber das Verständnis dafür ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (dieselbe, die Sie als _insert_your_database_url_here_-Platzhalter in `app.js` zuvor ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") setzen.
   > In anderen Betriebssystemen müssen Sie möglicherweise einfache ('') Anführungszeichen verwenden.

3. Das Skript sollte bis zum Schluss durchlaufen und Elemente anzeigen, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tab _Collections_).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen einzutauchen und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir einiges über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`-, `BookInstance`-, `Author`- und `Genre`-Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zum Schluss haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (unter Verwendung eines eigenständigen Skripts). Im nächsten Artikel werden wir uns ansehen, wie wir einige Seiten erstellen können, um diese Objekte anzuzeigen.

## Siehe auch

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
