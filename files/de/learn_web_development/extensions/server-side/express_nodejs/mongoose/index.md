---
title: "Express Tutorial Teil 3: Eine Datenbank mit Mongoose verwenden"
short-title: "3: Datenbanken mit Mongoose verwenden"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und zeigt, wie man sie mit Node/Express-Apps verwendet. Anschließend wird gezeigt, wie man [Mongoose](https://mongoosejs.com/) verwenden kann, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erläutert, wie Objekt-Schema und Modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierungen erklärt. Außerdem werden einige der Hauptmethoden vorgestellt, um auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Ein Grundgerüst für die Website erstellen</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Bibliotheksmitarbeiter werden die Local Library Website nutzen, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie zum Durchsuchen und Suchen von Büchern verwenden werden, um herauszufinden, ob Exemplare verfügbar sind und diese anschließend zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen durchzuführen. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten oder Anforderungen für die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Support usw. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollten fast alle der beliebten Lösungen mehr als ausreichend für eine kleine bis mittelgroße Website wie unsere Local Library sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbanken, wie SQL.
- Verwendung eines Objekt-Relationalen Mappers ("ORM") oder Objekt-Dokument Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankunabhängigen Backend bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder der jeweils von der Datenbank unterstützen Abfragesprache erzielt werden. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist insbesondere der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der Unterstützung von Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über die Semantik der Datenbank — dies ist besonders dann der Fall, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben Website oder verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierungen durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von größter Bedeutung, sollten Sie stark in Betracht ziehen, einen ODM zu verwenden.

### Welchen ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Package-Manager-Site verfügbar sind (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teil davon an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, der aus dem Express-basierten [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, bietet Unterstützung für Transaktionen, eager/nested-eager Relationsladen, polymorphe Zuordnungen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize): Ein Promise-basierter ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/): Ein Objekt-Relationship-Manager für NodeJS. Unterstützt MySQL, SQLite und Postgres und hilft dabei, mit der Datenbank in einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für REST-APIs, GraphQL ist sehr populär und hat Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Dokumentationsqualität usw.) in Betracht ziehen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem der beliebteste ODM und eine sinnvolle Wahl, wenn Sie MongoDB als Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr ähnlich wie JSON aussieht und somit JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) \_einfacher zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und auf sie zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie sich in das Codieren der Modelle stürzen, lohnt es sich, einige Minuten darüber nachzudenken, welche Daten wir speichern müssen und die Beziehungen zwischen den verschiedenen Objekten.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir weitere Informationen über den Autor speichern als nur den Namen, und es könnte mehrere Autoren mit denselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listen-Optionen darzustellen (z. B. wie eine Dropdown-Liste von Optionen), anstatt die Optionen in der Website selbst fest zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

In Anbetracht dessen zeigt das unten stehende UML-Zusammenhangsdiagramm die in diesem Fall zu definierenden Modelle (als Kästen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), Buchinstanzen (Status der im System verfügbaren spezifischen physischen Exemplare des Buches) und den Autor erstellt. Wir haben uns auch dafür entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die zulässigen Werte fest kodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kastens können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Zahlen (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verwandt sind. Die Zahlen in der Nähe des `Book` Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Leitfaden](#mongoose-einführung) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können immer noch die umgekehrte Beziehung finden, indem Sie nach dem zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war einigermaßen willkürlich — wir könnten genauso gut das Feld im anderen Schema haben.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung in die Definition und Verwendung von Modellen. Lesen Sie sie durch und überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren, und der Code zum Handhaben des Erfolgs oder Scheiterns der Methode später ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codeabschnitte können ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anfragen reaktionsfähig bleibt.

JavaScript verfügt über eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch hat sich JavaScript stark auf das Weitergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu asynchronen Methoden verlassen, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erledigt" (settled) und löst ein Objekt aus, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erledigt ist. Wir empfehlen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen umfassenden Überblick über beide Ansätze zu erhalten.
In diesem Tutorial werden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwenden, um auf das Abschlussversprechen innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlichem asynchronem Code führt.

Das Funktionskonzept beruht darauf, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu kennzeichnen und dann innerhalb dieser Funktion `await` auf jede Methode anzuwenden, die ein Versprechen zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird der Betrieb bei der ersten `await`-Methode angehalten, bis das Promise erledigt ist.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion zurück und der nachfolgende Code kann laufen.
Später, wenn das Promise erledigt ist, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, falls das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` angetroffen wird, bei dem es erneut pausieren wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise gelöst wird, woraufhin der Code zu `aFunctionThatReturnsPromise()` fortgesetzt wird und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und dies wird passieren, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

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

Die asynchronen Methoden oben werden der Reihe nach ausgeführt.
Falls die Methoden keine Abhängigkeit voneinander haben, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies geschieht mithilfe der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die eine Iteration von Promises als Eingabe erwartet und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt sind und mit einem Array der Erfüllungswerte zurückgegeben.
Es wird abgelehnt, wenn eines der eingehenden Promises abgelehnt wird, und gibt diesen ersten Ablehnungsgrund an.

Der unten stehende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf die Erledigung beider, indem wir das Promise verwenden, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, kehrt `await` zurück und das Ergebnisarray wird befüllt,
anschließend wird die Funktion mit dem nächsten `await` fortgeführt und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erledigt ist.
Sie würden die `myFunction()` in einem `try...catch`-Block aufrufen, um etwaige Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl die flexible als auch "verständliche" Kontrolle über asynchrone Ausführungen!

## Mongoose-Einführung

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man einfache Abfragen durchführt.

> [!NOTE]
> Diese Einführung ist stark vom [Mongoose Quick Start](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Mongoose und MongoDB installieren

Mongoose wird in Ihrem Projekt (**package.json**) ebenso wie jede andere Abhängigkeit installiert — mithilfe von npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle Abhängigkeiten hinzu, einschließlich des Datenbank-Treibers für MongoDB, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme für verschiedene Betriebssysteme hier herunterladen](https://www.mongodb.com/try/download/community) und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _database as a service_ kostenlose Stufe verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht Sinn für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (database-as-a-service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und eine Verbindung zu einer lokal gehosteten Datenbank mithilfe von `mongoose.connect()` wie unten gezeigt herstellen (für das Tutorial werden wir stattdessen eine Internet-hosted-Datenbank verbinden).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank_apis_are_asynchronous) besprochen, `await`en wir hier auf das von der `connect()` Methode zurückgegebene Promise innerhalb einer `async` Funktion.
> Wir verwenden den Promise-`catch()`-Handler, um alle Verbindungsfehler zu behandeln, aber wir hätten auch `main()` innerhalb eines `try...catch`-Blocks aufrufen können.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` abrufen.
Falls Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies verwendet dieselbe Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf das Herstellen der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Modelle definieren und erstellen

Modelle werden mithilfe der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit deren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir diskutieren das weiter unten).

Schemas werden dann mithilfe der `mongoose.model()` Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die im Modellschema definierten Felder/Schematypen.

#### Schemas definieren

Das folgende Codefragment zeigt, wie man ein einfaches Schema definieren könnte. Zuerst `require()` man Mongoose und verwendet dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem man die verschiedenen Felder im Objektparameter des Konstruktors definiert.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und andere Methoden.

#### Ein Modell erstellen

Modelle werden aus Schemas mithilfe der `mongoose.model()` Methode erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt werden soll (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie für die Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen abzurufen. Wie das funktioniert, zeigen wir Ihnen im Abschnitt [Modelle verwenden](#verwenden_von_modellen) und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes steht für ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert sind, wird unten gezeigt.

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

Die meisten der [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Deskriptoren nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Stellt spezifische Instanzen eines Modells in der Datenbank dar. Ein Buch könnte dies beispielsweise verwenden, um sein Autorenobjekt darzustellen. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die `populate()` Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein willkürlicher Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne festgelegten Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten zur Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living` gemacht).
- Feld _name_ gefolgt von einem Objekt, das den `Typ` und alle anderen _Optionen_ für das Feld definiert. Zu den Optionen gehören Dinge wie:

  - Standardwerte.
  - Eingebaute Validierungen (z. B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z. B. `{ type: String, lowercase: true, trim: true }`)

Für weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich anzugeben als auch die Fehlermeldung für die Validierungsfehler in allen Fällen.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dieser wird verwendet, um zu spezifizieren, ob das Feld angegeben werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): spezifiziert die Menge der zulässigen Werte für das Feld.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): spezifiziert einen regulären Ausdruck, dem der String entsprechen muss.
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

Virtuelle Eigenschaften sind Dokumenteigenschaften, auf die Sie zugreifen und diese setzen können, die aber nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzigen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle Eigenschaft für den vollständigen Namen aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist als jedes Mal, wenn ein vollständiger Name in einer Vorlage verwendet wird, diesen zu erstellen.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modellrekord mithilfe eines Pfads und des `_id`-Werts des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, unterscheiden sich jedoch offensichtlich darin, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die [chainable Query Builder API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie neben den Methoden `find()`, `findOne()` und `findById()` eine Abfrage "byName" hinzufügen).

### Verwenden von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der betreffenden Methoden und `await` (d.h. den wesentlichen Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zur Fehlerbehandlung werden der Klarheit halber weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank_apis_are_asynchronous) oben.

#### Dokumente erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die folgenden Beispiele gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

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

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Datensätze suchen

Sie können Datensätze mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie möglicherweise alle Sportler in einer Datenbank finden, die Tennis spielen, wobei nur die Felder für Sportname und Alter zurückgegeben werden. Hier spezifizieren wir nur ein übereinstimmendes Feld (Sportart), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichterhalten von Ergebnissen **kein Fehler** für eine Suche ist — aber es kann ein Fehlschlag-Fall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Versprechen zurück, auf das Sie für das Ergebnis `await` verwenden können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) anstatt sie separat hinzuzufügen, zusammen verketten.
Das folgende Codefragment ist das gleiche wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) holt alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, mit der Sie die Anzahl der Objekte ermitteln können, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie hier: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modell-Instanz zu einem anderen mithilfe des `ObjectId`-Schemafeldes oder von einem Dokument zu vielen mithilfe eines Arrays von `ObjectIds` erstellen. Das Feld speichert die ID des verwandten Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Beispielsweise definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
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

Wir können unsere Referenzen zum verwandten Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und weisen dem Autor-Feld unserer Geschichte die Autoren-ID zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfungen verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich getrennt darum (in der Regel in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autordokuments referenziert wird. Um die Autoreninformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Geschichten-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen hätten, an denen die Informationen über Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Authors_ zu erhalten und dann `find()` zu verwenden, um darauf zu suchen, um dies im Autor-Feld über alle Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie wissen müssen, um mit verwandten Elementen _für dieses Tutorial_ zu arbeiten. Weitere detaillierte Informationen finden Sie unter [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Sie können Schemas und Modelle mit beliebiger Dateistruktur erstellen, jedoch empfehlen wir dringend, jedes Modell-Schema in einem eigenen Modul (Datei) zu definieren und dann die Methode zu exportieren, mit der das Modell erstellt wird.
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

Sie können dann das Modell sofort in anderen Dateien anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## MongoDB-Datenbank einrichten

Jetzt, wo wir etwas darüber gelernt haben, was Mongoose tun kann und wie wir unsere Modelle gestalten wollen, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das Erste, was wir tun wollen, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudbasierte Sandbox-Datenbank verwenden. Diese Datenbankenstufe wird für Produktionswebsites nicht als geeignet betrachtet, da sie keine Redundanz hat, aber sie ist großartig für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter Anbieter von _database-as-a-service_ ist, den Sie möglicherweise als Ihre Produktionsdatenbank auswählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens beinhalten [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der URL der Datenbank, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: In Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nach dem Einloggen gelangen Sie zum [Home](https://cloud.mongodb.com/v2) Bildschirm:

1. Klicken Sie im Abschnitt _Overview_ auf die Schaltfläche **+ Create**.

   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Damit öffnet sich der Bildschirm _Deploy your cluster_.
   Klicken Sie auf die Option **M0 FREE** Vorlage.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir belassen ihn als `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unser eigenes Beispiel-Dataset importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_ aus. Unterschiedliche Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Create deployment** (die Erstellung des Clusters wird einige Minuten dauern).

4. Dies wird den Abschnitt _Security Quickstart_ öffnen.
   ![Richten Sie die Zugriffsregeln im Sicherheits-Schnellstartbildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden wird, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Zugangsdaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise den Verbindungsstring nicht korrekt analysiert.

   - Wählen Sie **Add by current IP address** aus, um den Zugriff von Ihrem aktuellen Computer zuzulassen.
   - Geben Sie `0.0.0.0/0` im IP Address-Feld ein und klicken Sie dann auf die Schaltfläche **Add Entry**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen einzuschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Gehen Sie zu Datenbanken nach dem Einrichten der Zugriffsregeln auf MongoDB Atlas.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Overview_ Bildschirm zurück. Klicken Sie unter dem _Deployment_ Menü auf der linken Seite auf den Abschnitt _Database_. Klicken Sie auf die Schaltfläche **Browse Collections**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Damit öffnet sich der Abschnitt _Collections_. Klicken Sie auf die Schaltfläche **Add My Own Data**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Damit öffnet sich der Bildschirm _Create Database_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Collections_ zurück, mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Overview_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie auf dem Cluster0-_Overview_-Bildschirm auf die Schaltfläche **Connect**.

    ![Konfigurieren Sie die Verbindung nach dem Einrichten eines Clusters bei MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Damit öffnet sich der Bildschirm _Connect to Cluster0_.

    ![Wählen Sie die Short SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_ und dann den _Driver_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Platzhalter im Verbindungsstring durch das Passwort Ihres Nutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei, die diesen String enthält, an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und haben eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Diese sieht in etwa so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installiere Mongoose

Öffnen Sie ein Eingabeaufforderungsfenster und navigieren Sie zum Verzeichnis, in dem Sie Ihre [Skeleton Local Library Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben es bereits beim Lesen der [Mongoose Einführung](#mongoose_und_mongodb_installieren) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Projektstammverzeichnis) und kopieren Sie den folgenden Text dort ein, wo Sie das _Express Application Object_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL String ('_insert_your_database_url_here_') durch die URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose-Einführung](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

Es ist zu beachten, dass das Hardcoding von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun dies hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen gefährdet oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer machen, wenn wir [in Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definieren des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstammverzeichnis zu erstellen (**/models**) und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor als `String` SchemaTypes für die Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date` Felder für Geburts- und Sterbedaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, die die absolute URL zurückgibt, die benötigt wird, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuelle im Schema ist eine gute Praxis, weil dann die URL für ein Element nur einmal geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, weil wir noch keinen Routenhandhabungscode für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Buch`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Das meiste davon ist ähnlich dem Autorenmodell — wir haben ein Schema mit einer Reihe von String-Feldern und einer virtuellen Eigenschaft zur Ermittlung der URL bestimmter Buchdatensätze deklariert und wir haben das Modell exportiert.

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

- author ist eine Referenz zu einem einzelnen `Author` Modellobjekt und wird benötigt.
- genre ist eine Referenz zu einem Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz-Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Der `BookInstance` stellt ein spezifisches Exemplar eines Buches dar, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird und "Imprint" (oder Versions-) Details.

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

- `enum`: Dadurch können wir die erlaubten Werte eines Strings festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir Fehlschreibungen und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden Default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standard-`due_back`-Datum auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zur Speicherung von Genres (die Kategorie des Buches, z. B. ob es Fiktion oder Sachbuch ist, Romanze oder Militärgeschichte usw.).

Die Definition wird sehr ähnlich den anderen Modellen sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für die URL des Genres, benannt als `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen Sie einige Elemente

Das war's. Wir haben jetzt alle Modelle für die Site eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), werden wir nun ein _unabhängiges_ Skript ausführen, um Elemente jeder Art zu erstellen:

1. Laden Sie (oder erstellen Sie anderweitig) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihrem _express-locallibrary-tutorial_ Verzeichnis (auf der gleichen Ebene wie `package.json`) herunter.

   > [!NOTE]
   > Der Code in `populatedb.js` mag nützlich sein, um JavaScript zu lernen, aber das Verständnis davon ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit node in Ihrem Eingabeaufforderung aus, indem Sie die URL Ihrer _MongoDB_-Datenbank übergeben (die gleiche, die Sie zuvor in `app.js` mit dem _insert_your_database_url_here_ Platzhalter ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte ("). Um andere Betriebssysteme müssen Sie möglicherweise Einzel-(') Anführungszeichen.

3. Das Skript sollte bis zum Ende durchlaufen und Elemente anzeigen, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Collections_ Tab).
> Jetzt sollten Sie in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen einzudringen und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein bisschen über Datenbanken und ORMs in Node/Express gelernt und viel über die Definition von Mongoose-Schemas und -Modellen. Anschließend haben wir diese Informationen genutzt, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle durch die Erstellung einer Anzahl von Instanzen getestet (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns mit der Erstellung einiger Seiten beschäftigen, um diese Objekte anzuzeigen.

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
