---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und zeigt, wie diese mit Node/Express-Anwendungen genutzt werden können. Danach wird erklärt, wie wir [Mongoose](https://mongoosejs.com/) einsetzen können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Es wird auch kurz gezeigt, wie man auf verschiedene Weisen auf Modelldaten zugreifen kann.

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

Die Bibliotheksmitarbeiter werden die Local Library Website nutzen, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie verwenden werden, um Bücher zu durchsuchen und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze zur Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Wahl einer Datenbank sollten Sie Dinge wie die Zeit bis zur Produktivität/Lernkurve, Leistung, Replikations-/Backup-Leichtigkeit, Kosten, Community-Support usw. berücksichtigen. Obwohl es keine "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze zur Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbank, wie SQL.
- Die Verwendung eines Object Relational Mapper ("ORM") oder Object Document Mapper ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankneutralen Backend anbieten.

Die beste _Leistung_ kann erzielt werden, indem SQL oder eine andere von der Datenbank unterstützte Abfragesprache verwendet wird. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen machen muss).

Der Vorteil der Verwendung eines ORM/ODMs besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstelle von Datenbanksemantiken — dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort zur Durchführung von Datenvalidierungen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind mit der nativen Abfragesprache sehr vertraut oder die Leistung hat oberste Priorität, Sie sollten ernsthaft in Erwägung ziehen, ein ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Website verfügbar sind (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm)- und [orm](https://www.npmjs.com/search?q=keywords:orm)-Tags für eine Teilmenge an!).

Einige zum Zeitpunkt der Erstellung beliebte Lösungen sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungs-Tool, das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/)-Webframework extrahiert wurde. Es bietet eine einheitliche API zum Zugriff auf zahlreiche verschiedene Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl versprechenbasierte als auch traditionelle Callback-Schnittstellen, bietet Transaktionsunterstützung, gieriges/nested-gieriges Laden von Beziehungen, polymorphe Zuordnungen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und verfügt über solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank über einen objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für RESTful-APIs, GraphQL ist sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Dokumentationsqualität usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt der Erstellung ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank ist [analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr ähnlich wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) \_leichter zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die -Modelle für das [LocalLibrary-Website-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definiert und darauf zugegriffen wird.

## Entwurf der LocalLibrary-Modelle

Bevor Sie in die Codierung der Modelle eintauchen, lohnt es sich, ein paar Minuten nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass möglicherweise mehrere Exemplare verfügbar sind (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir könnten mehr Informationen über den Autor speichern müssen als nur seinen Namen, und es könnten mehrere Autoren mit demselben oder ähnlichen Namen existieren. Wir möchten Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie sortieren können.

Beim Entwurf Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z. B. wie eine Drop-Down-Liste mit Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten in die Website selbst zu hardcodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Gedanken zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status spezifischer physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hardcodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder der Boxen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Book` und ein `Genre` verwandt sind. Die Zahlen nahe dem `Book`-Modell zeigen, dass ein `Genre` null oder mehr `Book`s (so viele, wie Sie möchten) haben muss, während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-primer) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach dem zugehörigen `_id` in dem anderen Modell suchen). Unten haben wir uns dafür entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich — wir hätten das Feld gleichermaßen in dem anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Primer, der erklärt, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im oben gezeigten Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren und der Code, der den Erfolg oder Misserfolg der Methode behandelt, zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist. Während der Server auf den Abschluss der Datenbankoperation wartet, kann anderer Code ausgeführt werden, sodass der Server für andere Anfragen weiterhin antwortbereit bleibt.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten. Historisch gesehen hat JavaScript stark darauf gesetzt, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um die Erfolgs- und Fehlerfälle zu behandeln. In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen. Wenn die Operation abschließt, wird das Promise-Objekt "erledigt" und löst ein Objekt aus, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt wird, und wir empfehlen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten. In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu lesbarerem und verständlicherem asynchronem Code führt.

Diese Vorgehensweise funktioniert folgendermaßen: Sie verwenden das Schlüsselwort `async function`, um eine Funktion als asynchron zu kennzeichnen, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt. Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await`-Methode angehalten, bis das Promise erfüllt wird. Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden. Später, wenn das Promise erfüllt wird, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde. Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, an welchem Punkt er erneut angehalten wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können in dem unten gezeigten Beispiel sehen, wie dies funktioniert. `myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird. Wenn `myFunction()` ausgeführt wird, wird die Codesausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise erfüllt wird, zu diesem Zeitpunkt wird der Code zu `functionThatReturnsPromise()` fortgesetzt und wartet erneut. Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion auftritt, und dies wird passieren, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden der Reihe nach ausgeführt. Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen. Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterables Promise als Eingang benötigt und ein einzelnes `Promise` zurückgibt. Dieses zurückgegebene Promise wird erfüllt, wenn alle Versprechen des Eingabewerts erfüllt sind, mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der unten gezeigte Code zeigt, wie dies funktioniert. Zuerst haben wir zwei Funktionen, die Promises zurückgeben. Wir `await` auf beide, um unter Verwendung des Promises zu laufen, das von `Promise.all()` zurückgegeben wird. Sobald beide abgeschlossen sind, wird `await` zurückgegeben und das Ergebnisarray gefüllt, die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, erfüllt ist. Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler abzufangen.

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

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Dieser Primer ist stark von der [Mongoose-Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm. Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber sie installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und diese lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloudbasierten _Datenbank als Dienst_ Free-Tier, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und sinnvoll für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (datenbank-als-Dienst ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank. Sie können `require()` verwenden und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial verbinden wir uns stattdessen mit einer internetgehosteten Datenbank).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, `await`en wir hier das Promise, das von der `connect()`-Methode innerhalb einer `async`-Funktion zurückgegeben wird. Wir verwenden den Promise-`catch()`-Handler, um Fehler beim Verbindungsversuch zu behandeln, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten. Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden. Dies nimmt dieselbe Form von Datenbank-URI an (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück). Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mithilfe der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die Felder zu definieren, die in jedem Dokument gespeichert werden, zusammen mit ihren Validierungsanforderungen und Standardwerten. Zusätzlich können Sie statische und instanzbezogene Hilfsmethoden definieren, um Ihre Datentypen einfacher zu bearbeiten, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert sind (wir werden weiter unten noch näher darauf eingehen).

Schemata werden dann mit der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell entspricht einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die in der Modellstruktur definierten Felder/Schematypen.

#### Definieren von Schemata

Das Codefragment unten zeigt, wie Sie ein einfaches Schema definieren können. Zuerst `require()`en Sie mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schemainstanz zu erstellen und definieren die verschiedenen Felder darin im Objektparameter des Konstruktors.

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

Im obigen Fall haben wir nur zwei Felder, ein String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, die Validierung und andere Methoden zeigen.

#### Erstellen eines Modells

Modelle werden mit der Methode `mongoose.model()` aus Schemata erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie bei der Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) machen, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes davon stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar. Ein Beispielschema, das viele der gebräuchlichen Feldtypen und deren Deklaration zeigt, ist unten dargestellt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schemattyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten zur Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Options_ für das Feld definiert. Optionen beinhalten Dinge wie:
  - Standardwerte.
  - Eingebaute Validierungsfunktionen (z. B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch auf Kleinbuchstaben oder Großbuchstaben gesetzt werden oder getrimmt werden sollen (z. B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen über Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet integrierte und benutzerdefinierte Validatoren sowie synchronisierte und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen zu spezifizieren.

Die integrierten Validatoren beinhalten:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dies wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das unten stehende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie einige der Validatortypen und Fehlermeldungen angegeben werden können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte für die Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine vollständige Namen-Virtual Property aus einem Vor- und Nachnamen-Feld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu erstellen, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz zu definieren, indem ein Pfad und der `_id`-Wert des Datensatzes verwendet wird.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz in Verbindung gebracht wird und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die abfragefähige Abfrageschnittstelle von mongoose zu erweitern (z. B. können Sie eine Abfrage "byName" hinzufügen, zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumente).

> [!NOTE]
> Die Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die unten gezeigten Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zur Behandlung von Fehlern sind zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Erstellen und Modifizieren von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die folgenden Beispiele gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um das Modell gleichzeitig zu definieren und es zu speichern.
Unten erstellen wir nur eins, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, wobei die Abfragebedingungen als JSON-Dokument angegeben werden. Das folgende Codefragment zeigt, wie Sie alle Sportler in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für Sportler _name_ und _age_ zurückgeben. Hier haben wir nur ein übereinstimmendes Feld (Sport) angegeben, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdrucksbedingungen angeben oder die Bedingungen vollständig entfernen, um alle Sportler zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — aber es kann in Ihrem Anwendungskontext ein Fehlerfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `awaiten` können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>)-Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>)-Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) zusammensetzen, anstatt sie separat hinzuzufügen.
Das folgende Codefragment ist das Gleiche wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>)-Methode ruft alle übereinstimmenden Datensätze ab, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Convenience-Funktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>)-Methode, die Sie verwenden können, um die Anzahl der Elemente zu erhalten, die Bedingungen erfüllen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Exemplar zu einem anderen mit dem `ObjectId`-Schemafeld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectId`s. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html)-Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren das folgende Schema Autoren und Geschichten. Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` repräsentieren. Jede Geschichte kann einen einzelnen Autor haben. Die `ref`-Eigenschaft gibt dem Schema an, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen. Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen komplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode befasst sich separat damit (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtsdokument hat jetzt einen Autor, auf den durch die Autoren-ID verwiesen wird. Um die Autoreninformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir unserem Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte dem Stories-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Orte haben, an denen die Informationen zu Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _authors_ zu erhalten und dann `find()` zu verwenden, um danach im Autorenfeld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über das Arbeiten mit verwandten Elementen für dieses Tutorial wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren. Das wird unten gezeigt:

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

Sie können das Modell dann sofort in anderen Dateien verwenden. Unten wird gezeigt, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, da wir etwas darüber wissen, was Mongoose tun kann und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, mit der Arbeit an unserer _LocalLibrary_-Website zu beginnen. Das allererste, was wir tun möchten, ist eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial verwenden wir die cloud-gehostete Sandbox-Datenbank [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, weil sie keine Redundanz bietet, aber sie ist großartig für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _database as a service_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere zum Zeitpunkt des Schreibens beliebte Optionen sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie bevorzugen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der Datenbank-URL, die Sie bei der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Zuerst müssen Sie [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (Dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktinformationen eingeben und die Nutzungsbedingungen akzeptieren).

Nachdem Sie sich eingeloggt haben, werden Sie zum [Home](https://cloud.mongodb.com/v2) Bildschirm weitergeleitet:

1. Klicken Sie auf die **+ Erstellen** Taste im Abschnitt _Überblick_.

   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Diese Aktion öffnet den Bildschirm _Bereitstellen Ihres Clusters_.
   Klicken Sie auf die **M0 GRATIS** Option.

   ![Wählen Sie eine Bereitstellungsoption auf MongoDB Atlas aus.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten auf der Seite, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter auf MongoDB Atlas aus.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Clustername_ ändern.
     Wir behalten ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das _Beispieldataset vorladen_ Kontrollkästchen, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_ aus. Verschiedene Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (die Erstellung des Clusters kann einige Minuten dauern).

4. Dadurch wird der Abschnitt _Sicherheits-Schnellstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Sicherheits-Schnellstartbildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (obere haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise den Verbindungsstring nicht richtig analysiert.

   - Wählen Sie **Hinzufügen nach aktueller IP-Adresse**, um den Zugriff von Ihrem aktuellen Computer zu ermöglichen.
   - Geben Sie `0.0.0.0/0` im IP-Adressenfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen, die auf Ihre Datenbank und andere Ressourcen zugreifen können, zu begrenzen. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und Schließen**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zur Übersicht** gehen.
   ![Gehen Sie zu den Datenbanken, nachdem Sie Zugriffsregeln auf MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Überblick_ Bildschirm zurück. Klicken Sie auf den _Datenbank_-Abschnitt unter dem _Bereitstellungs_-Menü auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum _Sammlungen_ Bildschirm mit Ihrer erstellten Datenbank zurück.
   ![Datenbank-Erstellungsbestätigung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf den _Überblick_ Tab, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie auf dem _Cluster0 Überblick_ Bildschirm auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung, nachdem ein Cluster auf MongoDB Atlas eingerichtet wurde.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die kurze SRV-Verbindung bei der Einrichtung einer Verbindung auf MongoDB Atlas aus.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die _Treiber_ Kategorie, dann den _Treiber_ **Node.js** und die _Version_, wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren** Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>` Platzhalter im Verbindungsstring mit dem Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und haben eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen. Dies wird etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren Sie Mongoose

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose-Primer](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbinden Sie sich mit MongoDB

Öffnen Sie **bin/www** (aus dem Wurzelverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Zeile, wo Sie den Port festlegen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank darstellt (d.h. die Informationen von _MongoDB Atlas_ verwenden).

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

Wie im [Mongoose-Primer](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet eventuelle Fehler an die Konsole.

> [!NOTE]
> Wir könnten den Datenbank-Verbindungscode in unseren **app.js** Code einfügen.
> Das Hinzufügen des Codes in den Anwendungseintrittspunkt entkoppelt die Anwendung und die Datenbank, was es einfacher macht, eine andere Datenbank zum Ausführen des Testcodes verwenden.

Beachten Sie, dass das Hardcodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun dies hier, weil es den Kernverbindungscode zeigt, und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun, wenn [in der Produktion bereitgestellt wird](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben diskutiert](#one_schemamodel_per_file).
Erstellen Sie zunächst einen Ordner für unsere Modelle im Projektstamm (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor als `String`-SchemaTypen für den Vor- und Nachnamen (erforderlich, mit einem Maximum von 100 Zeichen) und `Date`-Felder für das Geburts- und Todesdatum.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema deklariert, das "url" genannt wird und die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, weil dann die URL für ein Element nur an einem Ort geändert werden muss.
> Zu diesem Punkt würde ein Link, der diese URL verwendet, nicht funktionieren, weil wir noch keinen Routenhandling-Code für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Der Großteil dieses Codes ist dem Autorenmodell ähnlich — wir haben ein Schema mit mehreren String-Feldern und einem Virtuellen für die URL-Spezifische Buchdatensätze deklariert und haben das Modell exportiert.

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

Der Hauptunterschied hier besteht darin, dass wir zwei Referenzen zu anderen Modellen erstellt haben:

- Autor ist eine Referenz zu einem einzelnen `Author`-Modellobjekt und ist erforderlich.
- Genre ist eine Referenz zu einem Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanzmodell

Kopieren Sie schließlich den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte und beinhaltet Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird, und "Impressum" (oder Versions-) Details.

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

- `enum`: Dies ermöglicht es uns, die erlaubten Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir Schreibfehler und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden Default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" zu setzen und das Standard-`due_back`-Datum auf `jetzt` (beachten Sie, wie Sie die Date-Funktion beim Einstellen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie des Buches, z. B., ob es sich um Fiktion oder Sachbuch handelt, Romanze oder Militärgeschichte usw.).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie ein [virtuell](#virtuelle_eigenschaften) für die URL des Genres, mit dem Namen `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen Sie einige Artikel

Das war's. Wir haben jetzt alle Modelle für die Seite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Script aus, um Artikel jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie auf andere Weise) und legen Sie sie in Ihrem _express-locallibrary-tutorial_ Verzeichnis ab (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript nützlich sein, ist aber für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus, indem Sie die URL Ihrer _MongoDB_-Datenbank übergeben (die gleiche, die Sie durch den _insert_your_database_url_here_-Platzhalter in `app.js` weiter oben ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in Doppelte (") setzen.
   > Unter anderen Betriebssystemen sind möglicherweise einfache (') Anführungszeichen erforderlich.

3. Das Skript sollte bis zum Abschluss laufen und Artikel auflisten, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten jetzt in der Lage sein, einzeln in Sammlungen von Büchern, Autoren, Genres und Buchinstanzen hineinzusehen und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs bei Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert sind. Wir haben diese Informationen dann verwendet, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (unter Verwendung eines eigenständigen Skripts). Im nächsten Artikel werden wir uns mit der Erstellung von Seiten befassen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
