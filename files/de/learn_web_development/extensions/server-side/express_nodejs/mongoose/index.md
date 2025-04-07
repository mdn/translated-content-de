---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) nutzen können, um Zugang zur Datenbank für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Zudem werden kurz einige der Hauptmethoden zur Zugriff auf Modelldaten gezeigt.

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

Die Mitarbeiter der Bibliothek nutzen die Local Library Website, um Informationen über Bücher und Ausleiher zu speichern, während Mitglieder der Bibliothek sie verwenden, um nach Büchern zu stöbern und zu suchen, herauszufinden, ob Kopien verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken nutzen, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen auszuführen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Apps können jede von _Node_ unterstützte Datenbank nutzen (_Express_ selbst definiert kein spezifisches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html) wie PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivitätssteigerung/Lernkurve, Performance, einfache Replikation/Sicherung, Kosten, Community-Support usw. berücksichtigen. Obwohl es keine einzelne "beste" Datenbank gibt, sollte fast jede der populären Lösungen mehr als akzeptabel für eine kleinere bis mittelgroße Seite wie unsere Local Library sein.

Für weitere Informationen zu den Optionen siehe [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Die Verwendung der nativen Abfragesprache der Datenbanken, wie SQL.
- Die Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs und ODMs sind an eine spezifische Datenbank gebunden, während andere ein datenbankunabhängiges Backend bieten.

Die allerbeste _Performance_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erreicht werden. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu mappen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (insbesondere wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der Unterstützung von Datenbankfunktionen machen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt sich mit den Datenbanksemantiken zu befassen – das ist besonders zutreffend, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder unterschiedlichen Websites). Sie bieten auch einen offensichtlichen Ort für die Datenvalidierung.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Wenn Sie mit der nativen Abfragesprache nicht sehr vertraut sind oder die Leistung nicht im Vordergrund steht, sollten Sie ernsthaft die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der Webseite des npm-Paketverwalters (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Auswahl an!).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Dokuments populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungswerkzeug, das für asynchrone Umgebungen entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, extrahiert aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Verfügt über sowohl versprechenbasierte als auch traditionelle Callback-Schnittstellen, die Transaktionsunterstützung, großzügiges/eingeschachteltes Laden von Beziehungen, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins, Eins-zu-Viele und Viele-zu-Viele Beziehungsarten bieten. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und des zugrunde liegenden Datenbankmanagementsystems zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft dabei, mit der Datenbank in einer objektorientierten Weise zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für REST-APIs, ist GraphQL sehr populär und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) verwenden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist vergleichbar mit](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil die Dokumentenspeicherung und das Abfragesystem sehr ähnlich wie JSON aussehen und JavaScript-Entwicklern daher vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) \_einfacher zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie anfangen, die Modelle zu programmieren, sollten Sie sich ein paar Minuten Zeit nehmen, um darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass mehrere Exemplare verfügbar sein könnten (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir könnten mehr Informationen über den Autor als nur seinen Namen speichern müssen und es könnte mehrere Autoren mit denselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ergibt es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie könnten auch Modelle verwenden, um Auswahllisten-Optionen (z. B. wie eine Dropdown-Liste mit Auswahlmöglichkeiten) zu repräsentieren, anstatt die Auswahlmöglichkeiten direkt in die Website zu kodieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern könnten. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Nachdem wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

In Anbetracht dessen zeigt das UML-Assoziationsdiagramm unten die in diesem Fall definierten Modelle (als Boxen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status von bestimmten physischen Kopien des Buches, die im System verfügbar sind) und die Autoren erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir werden die akzeptablen Werte hardcodieren, da wir nicht erwarten, dass diese sich ändern. Innerhalb jeder der Boxen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Buch` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Buch`-Modells zeigen, dass ein `Genre` null oder mehr `Buch`-Exemplare haben muss (so viele wie Sie möchten), während die Zahlen auf der anderen Seite der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose_primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Buch`/`Genre` und `Buch`/`Autor` im Buch-Schema und die Beziehung zwischen `Buch`/`Buchinstanz` im `Buchinstanz`-Schema zu definieren. Diese Wahl war etwas willkürlich – wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung des Erfolgs oder Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anfragen reaktionsfähig bleiben kann.

JavaScript bietet mehrere Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden gesetzt, um Erfolgs- und Fehlerfälle zu behandeln.
In modernen JavaScript werden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erledigt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erledigt ist, und wir empfehlen Ihnen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf die Erledigung von Promises zu warten, da dies zu lesbareren und verständlicheren asynchronen Code führt.

Der Weg, wie dieser Ansatz funktioniert, besteht darin, das `async function`-Schlüsselwort zu verwenden, um eine Funktion als asynchron zu kennzeichnen, und dann innerhalb dieser Funktion auf jede Methode `await` anzuwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb an der ersten `await`-Methode pausiert, bis das Promise erledigt ist.
Aus der Sicht des umgebenden Codes gibt dann die asynchrone Funktion zurück und der Code danach kann ausgeführt werden.
Später, wenn das Promise erledigt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, an dem Punkt wird es erneut pausieren, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie das in dem untenstehenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird der Code an `methodThatReturnsPromise()` pausiert, bis das Promise aufgelöst wird, zu welchem Zeitpunkt der Code zu `aFunctionThatReturnsPromise()` fortfährt und wieder wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion auftritt, und das wird passieren, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die asynchronen Methoden oben werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), welche eine Iterable von Promises als Eingabe nimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabe-Promises erfüllt sind, mit einem Array der Erfüllungswerte.
Es lehnt ab, wenn eines der Eingabe-Promises ablehnt, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, bis sie mit dem Promise, das von `Promise.all()` zurückgegeben wird, abgeschlossen sind.
Sobald beide abschließen, kehrt `await` zurück und das Ergebnis-Array wird aufgefüllt,
die Funktion fährt dann zum nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, erledigt ist.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um alle Fehler abzufangen.

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

Promises mit `await`/`async` bieten sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose Primer

Dieser Abschnitt bietet einen Überblick darüber, wie Sie Mongoose mit einer MongoDB-Datenbank verbinden, wie Sie ein Schema und ein Modell definieren und wie Sie grundlegende Abfragen durchführen.

> [!NOTE]
> Dieser Primer wird stark vom [Mongoose Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und von der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert – mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, jedoch wird MongoDB selbst nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und es lokal installieren. Sie können auch Cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den [MongoDB Atlas](https://www.mongodb.com/) Cloud-basierten _database as a service_ Free-Tier verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht Sinn für das Tutorial, weil es die "Installation" betriebssystemunabhängig macht (database-as-a-service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und zu einer lokal gehosteten Datenbank mit `mongoose.connect()` verbinden, wie unten gezeigt (für das Tutorial werden wir stattdessen zu einer internet-gehosteten Datenbank verbinden).

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
> Wir verwenden den Promise `catch()` Handler, um alle Fehler zu behandeln, die beim Versuch einer Verbindung auftreten können, aber wir hätten `main()` auch innerhalb eines `try...catch`-Blocks aufrufen können.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` abrufen.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies verwendet die gleiche Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie darauf warten müssen, dass die Verbindung hergestellt wird, können Sie eine Promise mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit dem `Schema`-Interface _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder sowie deren Validierungsanforderungen und Standardwerte zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht in der Datenbank gespeichert werden (wir diskutieren es weiter unten).

Schema werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell `Schema` definierten Felder/Schema-Typen.

#### Definition von Schemas

Das unten gezeigte Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` sie mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder innerhalb des Objektparameters des Konstruktors definieren.

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

#### Erstellen eines Modells

Modelle werden aus Schema mit der `mongoose.model()`-Methode erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Modellsammlung _SomeModel_ in der Datenbank oben), und das zweite Argument ist das Schema, das Sie beim Erstellen des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie das im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) funktioniert, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes Feld repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der gängigen Feldtypen und deren Deklaration zeigt, wird unten gezeigt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autor-Objekt zu repräsentieren. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne spezifizierten Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `Type` und alle anderen _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingerichtete Validatoren (z. B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder beschnitten gesetzt werden sollen (z. B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie in [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebettete und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehlern in allen Fällen anzugeben.

Die eingebauten Validatoren beinhalten:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt einen regulären Ausdruck an, den der String erfüllen muss.
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

Für vollständige Informationen zur Feldvalidierung siehe [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, auf die Sie zugreifen und die Sie setzen können, die aber nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine vollständige Namensvirtualeigenschaft aus einem Vor- und Nachnamensfeld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu erzeugen, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um für jedes Modell einen eindeutigen URL-Pfad unter Verwendung eines Pfades und des `_id`-Wertes des Datensatzes zu definieren.

Weitere Informationen finden Sie in [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die [verkettbare Abfrageerstellungs-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, um eine Abfrage "byName" hinzuzufügen, zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell stellt eine Sammlung von Dokumenten in der Datenbank dar, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben einen kurzen Überblick unten. Weitere Informationen finden Sie unter: [Models](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wichtigen Code zur Verwendung der Methoden).
> Die umgebende `async`-Funktion und der `try...catch`-Block zum Abfangen von Fehlern werden der Klarheit halber weggelassen.
> Weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

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

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte zurück in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können mithilfe von Abfragemethoden nach Datensätzen suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für Athleten _name_ und _age_ zurückgeben. Hier geben wir nur ein passendes Feld an (sport), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen völlig weglassen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu bedenken, dass das Nicht-Finden von Ergebnissen für eine Suche **kein Fehler** ist – es könnte jedoch in Ihrem Anwendungskontext ein Fehlfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der in dem Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie es mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt eine Promise zurück, auf die Sie für das Ergebnis `await` verwenden können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mithilfe einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verkettet zusammenfügen, anstatt sie separat hinzuzufügen.
Das folgende Codefragment ist dasselbe wie unsere Abfrage oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode holt alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Artikel zu erhalten, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich zu holen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Queries](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen durch das `ObjectId`-Schema-Feld erstellen, oder von einem Dokument zu vielen durch ein Array von `ObjectIds`. Das Feld speichert die ID des verwandten Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
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

Wir können unsere Referenzen zum verwandten Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode befasst sich separat damit (gewöhnlich in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtsdokument hat jetzt einen Autor, der durch die Author-Dokument-ID referenziert wird. Um die Autoreninformationen in den Geschichtenergebnisse zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts unternommen haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, unsere Geschichte dem stories-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Orte haben, an denen die Informationen bezüglich Autoren und Geschichten aufrechterhalten werden müssen.
>
> Ein besserer Weg wäre es, die `_id` unseres _Authors_ zu erhalten und dann `find()` zu verwenden, um danach im Autorenfeld aller Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemas und Modelle mit jeder Dateistruktur erstellen können, die Sie mögen, empfehlen wir dringend, jedes Modellschema in einem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können das Modell dann in anderen Dateien sofort verwenden, indem Sie es einbinden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nun, da wir etwas darüber wissen, was Mongoose tun kann und wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Als Allererstes möchten wir eine MongoDB-Datenbank einrichten, die wir zur Speicherung unserer Bibliotheksdaten nutzen können.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) Cloud-gehostete Sandbox-Datenbank. Diese Datenbank-Stufe wird nicht als geeignet für Produktionswebsites betrachtet, da sie keine Redundanz bietet, aber sie ist großartig für die Entwicklung und Prototyping. Wir verwenden es hier, weil es kostenlos und einfach einzurichten ist, und weil MongoDB Atlas ein beliebter _database as a service_-Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Auswahlmöglichkeiten zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [geeigneten Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im Tutorial [Express Tutorial Teil 7: Deployment in Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zunächst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nach dem Einloggen gelangen Sie auf den [Home-Bildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Erstellen**-Schaltfläche im _Übersicht_-Bereich.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies wird den Bildschirm _Cluster bereitstellen_ öffnen.
   Klicken Sie auf die **M0 FREE**-Option.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir lassen ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Sample-Dataset vorladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_. Verschiedene Regionen bieten unterschiedliche Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die **Bereitstellung erstellen**-Schaltfläche (die Erstellung des Clusters wird einige Minuten dauern).

4. Dies wird den _Sicherheits-Schnelleinstieg_-Bereich öffnen.
   ![Richten Sie die Zugriffsregeln auf dem Bildschirm für den Sicherheits-Schnelleinstieg auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Zugangsdaten sicher zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die **Benutzer erstellen**-Schaltfläche.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzer-Passwort, da mongoose möglicherweise die Verbindungszeichenfolge nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` im IP-Adressfeld ein und klicken Sie auf die **Eintrag hinzufügen**-Schaltfläche.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen einzuschränken, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, von wo aus die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die **Fertigstellen und Schließen**-Schaltfläche.

5. Dies wird den folgenden Bildschirm öffnen. Klicken Sie auf die **Zu Übersicht gehen**-Schaltfläche.
   ![Gehen Sie zu Datenbanken, nachdem Sie Zugriffsregeln auf MongoDB Atlas eingerichtet haben](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_-Bildschirm zurück. Klicken Sie auf den _Datenbank_-Bereich unter dem _Bereitstellung_-Menü auf der linken Seite. Klicken Sie auf die **Sammlungen durchsuchen**-Schaltfläche.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies wird den _Sammlungen_-Bereich öffnen. Klicken Sie auf die **Meine eigenen Daten hinzufügen**-Schaltfläche.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die **Erstellen**-Schaltfläche, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ mit Ihrer erstellten Datenbank zurück.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die _Überblick_-Registerkarte, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im _Cluster0_-Überblicksbildschirm auf die **Verbinden**-Schaltfläche.

    ![Konfigurieren der Verbindung, nachdem ein Cluster in MongoDB Atlas eingerichtet wurde.](mongodb_atlas_-_connectbutton.jpg)

11. Dies wird den Bildschirm _Mit Cluster0 verbinden_ öffnen.

    ![Wählen Sie die Short SRV-Verbindung bei der Einrichtung einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die _Treiber_-Kategorie, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **Installieren Sie** den Treiber nicht wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren**-Symbol, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie sie in Ihren lokalen Texteditor ein.
    - Ersetzen Sie die Platzhalter `<password>` in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die für den Zugriff verwendet werden kann.
Diese wird ungefähr so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie die [Skelett-Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json** Datei (sofern nicht bereits geschehen) beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben hinzuzufügen.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie die **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Deklaration des _Express-Anwendungsobjekts_ (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Lokations-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose-Pimer](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler in der Konsole.

Beachten Sie, dass das Hardcodieren von Datenbank-Anmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass durch das Lecken dieser Details sensible Informationen offengelegt oder gefährdet werden.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn wir [in die Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir definieren ein separates Modul für jedes Modell, wie [oben erläutert](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstammverzeichnis (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schemcode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor als `String`-SchemaTypen für die Vor- und Familiennamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date`-Feldern für die Geburts- und Sterbedaten.

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

Wir haben auch einen [virtuellen](#virtuelle_eigenschaften) für das AuthorSchema namens "url" erklärt, der die absolute URL zurückgibt, die benötigt wird, um eine bestimmte Instanz des Modells abzurufen – wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, weil dann die URL für ein Element nur an einem Ort geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link, der diese URL verwendet, nicht funktionieren, da wir keinen Route-Handling-Code für einzelne Modellinstanzen haben.
> Diese werden wir in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schemcode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Das meiste davon ähnelt dem Autorenmodell – wir haben ein Schema mit einer Reihe von String-Feldern und einem virtuellen zur Abrufung der URL von spezifischen Buchdatensätzen erklärt, und wir haben das Modell exportiert.

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
- Genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Dieses Objekt haben wir noch nicht erklärt!

### Buchinstanzmodell

Abschließend kopieren Sie den `BookInstance`-Schemcode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Die `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie voraussichtlich zurück sein wird und "Imprint" (oder Versions)-Details.

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

- `enum`: Dies ermöglicht es uns, die erlaubten Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines Enums können wir Tippfehler und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" zu setzen und das Standard-`due_back`-Datum auf `now` (beachten Sie, wie Sie die Datumsfunktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie des Buches, z. B. ob es Fiktion oder Non-Fiktion, Romanze oder Militärgeschichte ist).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte ein `String`-SchemaTyp haben, das `name` heißt, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Erklären Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, die `url` genannt wird.
- Exportieren Sie das Modell.

## Testen — Erstellen einiger Artikel

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) innerhalb Ihres _express-locallibrary-tutorial_ Verzeichnisses (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript nützlich sein, aber das Verständnis ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus, indem Sie die URL Ihrer _MongoDB_-Datenbank übergeben (dieselbe, die Sie im Platzhalter _insert_your_database_url_here_ innerhalb von `app.js` zuvor ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen und dabei Artikel in der Konsole erstellen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_-Tab).
> Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen hineinzubohren und sich einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schema und Modelle definiert werden. Wir haben diese Informationen dann genutzt, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

Zum Schluss haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen mithilfe eines eigenständigen Skripts erstellt haben. Im nächsten Artikel werden wir uns ansehen, wie wir einige Seiten erstellen können, um diese Objekte anzuzeigen.

## Siehe auch

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose Webseite](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
