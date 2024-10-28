---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
slug: Learn/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung einer Skelettwebsite</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>In der Lage zu sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Bibliothekspersonal wird die Local Library-Website nutzen, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder sie zum Durchsuchen und Suchen von Büchern verwenden werden, um herauszufinden, ob Exemplare verfügbar sind, und dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichen und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Erfahrungskurve, Performance, Replikation/Backup-Leichtigkeit, Kosten, Community-Unterstützung usw. berücksichtigen. Obwohl es keine einzelne "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library durchaus akzeptabel sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze zur Interaktion mit einer Datenbank:

- Die Verwendung der nativen Datenbanksprache wie SQL.
- Die Verwendung eines Objekt-Relationaler Mapper ("ORM"). Ein ORM stellt die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs sind an eine spezielle Datenbank gebunden, während andere eine datenbankunabhängige Backend-Unterstützung bieten.

Die beste _Performance_ kann durch die Verwendung von SQL oder einer vom Datenbank unterstützten Abfragesprache erzielt werden. ODMs sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn das ODM verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen machen muss).

Der Vorteil der Verwendung eines ORM ist, dass Programmierer weiterhin in JavaScript-Objekten denken können anstatt in Datenbanksemantik — das gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (entweder auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort für die Durchführung der Datenvalidierung.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt häufig zu geringeren Kosten für Entwicklung und Wartung! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Performance ist höchst wichtig, sollten Sie ernsthaft die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Auf der npm-Paketverwaltungssite sind viele ODM/ORM-Lösungen verfügbar (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teilbereich an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungswerkzeug, das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API zum Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl versprochene als auch traditionelle Callback-Schnittstellen, unterstützt Transaktionen, vacations/nested-eager Relations-Laden, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Relationen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasierter ORM für Node.js und io.js. Unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet umfassende Transaktionsunterstützung, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objekt-Relationship-Manager für NodeJS. Unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank mit einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful-APIs, GraphQL ist sehr beliebt und hat Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie bei der Auswahl einer Lösung sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) in Betracht ziehen. Zum Zeitpunkt des Schreibens ist Mongoose mit Abstand das beliebteste ODM und eine vernünftige Entscheidung, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil die Dokumentenspeicher- und Abfragesysteme sehr nach JSON aussehen und JavaScript-Entwicklern daher vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie anfangen, die Modelle zu programmieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor als nur seinen Namen speichern, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie sortieren können.

Beim Entwurf Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind offensichtliche Kandidaten für diese Modelle Bücher, Buchausgaben und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listen-Optionen darzustellen (z. B. eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten selbst im code zu verankern – dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Hintergrundwissen zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästen). Wie bereits oben besprochen, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchausgabe (Status der physisch verfügbaren Kopien des Buches im System) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit die Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptierten Werte fest codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb der Boxen können Sie den Modellnamen, die Feldnamen und -typen und auch die Methoden und Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die angeben, wie viele der maximalen und minimalen Modelle in der Beziehung stehen können. Beispiel: Die Verbindungslinie zwischen den Boxen zeigt, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Frühkurs](#mongoose-einführung) weiter unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch durch Suchen nach der zugehörigen `_id` im anderen Modell finden). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren, und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance` Schema. Diese Wahl war etwas willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt enthält eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückgeben und der Erfolg oder die Fehlerbehandlung der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server auf andere Anfragen reagieren kann.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung des asynchronen Verhaltens.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu asynchronen Methoden gesetzt, um Erfolg und Fehler zu handhaben.
In modernem JavaScript wurden Callback-Funktionen weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) durch eine asynchrone Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "abgeschlossen" und löst ein Objekt aus, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, um Code auszuführen, wenn ein Versprechen abgeschlossen wird, und wir empfehlen Ihnen dringend, [Anleitung zur Verwendung von Versprechen](/de/docs/Learn/JavaScript/Asynchronous/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) für das Warten auf den Abschluss von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), da dies zu einem besser lesbaren und verständlichen asynchronen Code führt.

So funktioniert dieser Ansatz: Sie verwenden das Schlüsselwort `async function`, um eine Funktion als asynchron zu markieren, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Versprechen zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird der Betrieb bei der ersten `await`-Methode angehalten, bis das Versprechen abgeschlossen ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Später, wenn das Versprechen abgeschlossen ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Versprechen abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder eine andere `await`-Methode angetroffen wird, bei der sie erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können in dem folgenden Beispiel sehen, wie das funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Versprechen aufgelöst wird, zu diesem Zeitpunkt wird der Code bei `aFunctionThatReturnsPromise()` fortgesetzt und erneut gewartet.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler geworfen wird, was der Fall sein wird, wenn das Versprechen, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die asynchronen Methoden oben werden sequenziell ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies erfolgt mit der [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)-Methode, die ein iterierbares Versprechens-Array als Eingabe nimmt und ein einziges `Promise` zurückgibt.
Dieses zurückgegebene Versprechen wird erfüllt, wenn alle eingefügten Versprechen erfüllt werden, mit einem Array der Erfolgswerte.
Es wird abgelehnt, wenn eines der eingefügten Versprechen abgelehnt wird, mit dem Ablehnungsgrund als solches.

Der folgende Code zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Versprechen zurückgeben.
Wir `warten` darauf, dass beide mit dem von `Promise.all()` zurückgegebenen Versprechen abgeschlossen werden.
Sobald sie beide abgeschlossen sind, gibt `await` die Ergebnisse als Array zurück,
die Funktion setzt dann auf das nächste `await` fort und wartet, bis das durch `anotherFunctionThatReturnsPromise()` zurückgegebene Versprechen abgeschlossen ist.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler zu erfassen.

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

Promises mit `await`/`async` erlauben sowohl flexible als auch "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose-Einführung

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen stellt.

> [!NOTE]
> Diese Einführung wurde stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Mongoose und MongoDB installieren

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und es lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen nutzen.

> [!NOTE]
> Für dieses Tutorial verwenden wir das cloudbasierte [MongoDB Atlas](https://www.mongodb.com/) _Database as a Service_ Free-Tier, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht Sinn für das Tutorial, weil es die "Installation" betriebssystemunabhängig macht (Database-as-a-Service ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktivdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` herstellen, wie unten gezeigt (für das Tutorial stellen wir stattdessen eine Verbindung zu einer Internet-gehosteten Datenbank her).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, warten wir hier innerhalb einer `async`-Funktion auf das durch die `connect()`-Methode zurückgegebene Versprechen.
> Wir verwenden den Versprechens-Handler `catch()`, um Fehler beim Verbindungsversuch zu handhaben, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standardverbindungs-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies übernimmt dieselbe Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf die Herstellung der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Versprechen zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit dem `Schema`-Interface _definiert_.
Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit deren Validierungsanforderungen und Standardwerten zu definieren.
Zusätzlich können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die wie jedes andere Feld verwendet werden können, aber die nicht tatsächlich in der Datenbank gespeichert werden (wir werden weiter unten noch mehr erläutern).

Schemata werden dann mit der `mongoose.model()`-Methode in Modelle „kompiliert“.
Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die Felder/Schema-Typen, die im Modell `Schema` definiert sind.

#### Definition von Schemata

Der unten stehende Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` mongoose, dann verwenden Sie den Schema-Constructor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Objektparameter des Constructors definieren.

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

Im oben genannten Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und andere Methoden.

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

Der erste Parameter ist der singuläre Name der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und der zweite Parameter ist das Schema, das Sie verwenden möchten, um das Modell zu erstellen.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und beim Erstellen unserer Ansichten tun.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes von ihnen stellt ein Feld in den Dokumenten dar, die in _MongoDB_ gespeichert sind.
Ein Beispielschema, das viele der häufigen Feldtypen und wie sie deklariert sind zeigt, finden Sie unten.

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

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Das wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen mit diesen Modellen ausführen (push, pop, unshift usw.). Die Beispiele oben zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _Name_ und _Typ_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living` gemacht).
- Feld _Name_, gefolgt von einem Objekt, das den `Typ` angibt, und alle anderen _Optionen_ für das Feld. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z. B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String` Felder automatisch in Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z. B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren, sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehler anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dieser wird verwendet, um anzugeben, ob das Feld geliefert werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den der String erfüllen muss.
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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die aber nicht in MongoDB gespeichert werden. Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und zerlegt) eine virtuelle vollständige Nameigenschaft aus einem Vor- und Nachnamefeld, was einfacher und sauberer ist als bei jeder Verwendung eines vollständigen Namens in einem Template einen neuen zu konstruieren.

> [!NOTE]
> Wir verwenden eine virtuelle Eigenschaft in der Bibliothek, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer erlauben es Ihnen, die [kettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie eine Abfrage "byName" zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden hinzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells individuelle Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten eine kurze Übersicht. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Nutzung der relevanten Methoden und `await` (das wesentliche Codesegment zur Verwendung der Methoden).
> Die umgebende `async`-Funktion und der `try...catch`-Block zur Fehlerbehandlung sind aus Gründen der Klarheit ausgelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Modifizieren von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten setzen voraus, dass `SomeModel` ein Modell (mit einem einzelnen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modell-Instanz gleichzeitig mit dem Speichern zu definieren.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (das wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Der unten stehende Codeausschnitt zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und dabei nur die Felder für den Athleten _name_ und _age_ zurückgeben. Hier geben wir nur ein passendes Feld (sport) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdrücke verwenden oder die Bedingungen entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu bedenken, dass das Nichtfinden von Ergebnissen kein **Fehler** für eine Suche ist — jedoch kann es ein Fehlerfall im Zusammenhang mit Ihrer Anwendung sein.
> Wenn Ihre Anwendung das Finden eines Werts erwartet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Versprechen zurück, auf das Sie auf das Ergebnis warten können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>)-Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punkt-Operator (.) verkettet hinzufügen, anstatt sie separat hinzuzufügen.
Der unten stehende Codeausschnitt ist dasselbe wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) erhält alle passenden Datensätze, aber oft möchten Sie nur einen Treffer erhalten. Die folgenden Methoden suchen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument anhand von `id` oder Kriterien, um es entweder zu aktualisieren oder zu entfernen. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>)-Methode, die Sie verwenden können, um die Anzahl der Elemente zu erhalten, die Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung ausführen möchten, ohne tatsächlich die Datensätze abzurufen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Populierung

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen mit dem `ObjectId`-Schema-Feld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und ordnen die Autor-ID dem Autoren-Feld unserer Geschichte zu.

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
> Ein großer Vorteil dieser Programmierweise ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfung komplizieren müssen.
> Wenn einer der `save()`-Operationen fehlschlägt, wird das Versprechen abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode befasst sich separat damit (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtsdokument hat jetzt einen Autoren, der durch die ID des Autordokuments referenziert wird. Um die Autorinformationen in den Geschichteergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser haben vielleicht bemerkt, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum `stories`-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen, die Autoren und Geschichten verknüpfen, gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _autors_ zu erhalten, dann `find()` zu verwenden, um danach im `author`-Feld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Populierung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle unter Verwendung jeder beliebigen Dateistruktur erstellen können, empfehlen wir sehr, jedes Modellschema in seinem eigenen Modul (Datei) zu definieren, und dann die Methode zum Erstellen des Modells zu exportieren.
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

Dann können Sie das Modell sofort in anderen Dateien einbinden und verwenden. Unten zeigen wir, wie Sie es beispielsweise verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Da wir nun etwas darüber erfahren haben, was Mongoose leisten kann und wie wir unsere Modelle entwerfen wollen, können wir mit der Arbeit an der _LocalLibrary_-Website beginnen. Das erste, was wir tun möchten, ist das Einrichten einer MongoDB-Datenbank, die wir nutzen können, um unsere Bibliotheksdaten zu speichen.

Für dieses Tutorial verwenden wir die cloudbasierte [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)-Sandbox-Datenbank. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz aufweist, aber sie ist großartig für die Entwicklung und das Prototyping. Wir nutzen sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Database as a Service_-Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Optionen zur Zeit des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Der Rest der Anweisungen in diesem Artikel wäre ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im Tutorial [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.app/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden.

Zuerst müssen Sie ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nach dem Einloggen gelangen Sie zum [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Create**-Schaltfläche im Abschnitt _Overview_.

   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den _Deploy your cluster_-Bildschirm.
   Klicken Sie auf die **M0 FREE**-Optionsvorlage.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten, um die verschiedenen Optionen zu sehen.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten ihn als `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das _Preload sample dataset_-Kontrollkästchen, da wir später unsere eigenen Beispieldaten importieren.
   - Wählen Sie einen beliebigen Anbieter und eine Region im Abschnitt _Provider_ und _Region_ aus. Verschiedene Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die **Create deployment**-Schaltfläche (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Security Quickstart_.
   ![Richten Sie die Zugriffsregeln auf dem Bildschirm Security Quickstart auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, das Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die **Create User**-Schaltfläche.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen im MongoDB-Benutzerpasswort, da mongoose möglicherweise nicht den Verbindungsstring richtig parst.

   - Wählen Sie die **Add by current IP address** Option, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` im IP-Adresse-Feld ein und klicken Sie dann auf die **Add Entry**-Schaltfläche.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu begrenzen, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir die Verbindung von überall, da wir nicht wissen, von wo die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Gehen Sie zu Datenbanken, nachdem Sie Zugriffsregeln auf MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Übersicht_ zurück. Klicken Sie im Abschnitt _Datenbank_ im Menü _Deployment_ links auf den Abschnitt und klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Eigenen Daten hinzufügen**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details bei der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Vom Cluster0 _Übersicht_ Bildschirm klicken Sie auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung, nachdem Sie ein Cluster in MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die kurze SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Driver_ **Node.js** und die _Version_ wie angegeben.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Platzhalter im Verbindungsstring mit Ihrem Benutzerpasswort.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei, die diesen String enthält, an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzernamen und Passwort), die für den Zugriff verwendet werden kann.
Diese sieht etwa so aus: `mongodb+srv://ihr_benutzername:ihr_passwort@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren Sie Mongoose

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local Library Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose-Einstiegs](#mongoose_und_mongodb_installieren) oben getan.

```bash
npm install mongoose
```

## Verbinden mit MongoDB

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unter die Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank darstellt (d. h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie im Abschnitt [Mongoose-Frühkurs](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

Beachten Sie, dass die fest codierte Datenbankanmeldeinformationen im Quellcode wie oben gezeigt nicht empfohlen wird.
Wir machen es hier, weil es den Kernverbindungscode zeigt, und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen preisgibt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer machen, wenn wir [in die Produktion gehen](/de/docs/Learn/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie oben [besprochen](#one_schemamodel_per_file).
Beginnen Sie mit dem Erstellen eines Ordners für unsere Modelle im Stammverzeichnis des Projekts (**/models**) und dann mit dem Erstellen separater Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor als `String`-SchemaTypes für den Vor- und Familiennamen (erforderlich, mit maximal 100 Zeichen), und `Date`-Felder für die Geburts- und Todesdaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, die die absolute URL zurückgibt, die benötigt wird, um eine bestimmte Instanz des Modells zu erhalten – wir werden die Eigenschaft in unseren Templates verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, weil die URL für ein Objekt nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link, der diese URL verwendet, nicht funktionieren, weil wir keinen Routen-Verarbeitungscode für individuelle Modellinstanzen eingerichtet haben.
> Wir werden dies in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Der Großteil davon ähnelt dem Autor-Modell — wir haben ein Schema mit einer Reihe von String-Feldern und einer virtuellen Eigenschaft zum Abrufen der URL spezifischer Buchdatensätze deklariert sowie das Modell exportiert.

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

- author ist eine Referenz zu einem einzelnen `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz zu einem Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BuchInstanz-Modell

Kopieren Sie abschließend den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
Die `BookInstance` stellt eine spezifische Kopie eines Buches dar, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie erwartet wird zurückzugeben und "imprint" (oder Versions-) Details.

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

- `enum`: Damit können wir die erlaubten Werte einer Zeichenfolge festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines Enums können wir Schreibfehler und willkürliche Werte für unseren Status vermeiden).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Maintenance" und das Standard-`due_back`-Datum auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zur Speicherung von Genres (die Kategorie eines Buches, z.B. ob es Belletristik oder Sachbuch ist, Romantik oder Militärgeschichte usw.).

Die Definition wird sehr ähnlich wie bei den anderen Modellen:

- Das Modell sollte einen `String`-SchemaType mit dem Namen `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für die URL des Genres mit dem Namen `url`.
- Exportieren Sie das Modell.

## Testen - Erstellen Sie einige Elemente

Das war's. Wir haben nun alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), werden wir nun ein unabhängiges Script ausführen, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) und speichern Sie sie in Ihrem _express-locallibrary-tutorial_-Verzeichnis (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis ist nicht notwendig für dieses Tutorial.

2. Führen Sie das Script mithilfe von Node an der Eingabeaufforderung aus, und übergeben Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, mit der Sie den _insert_your_database_url_here_ Platzhalter in der Datei `app.js` früher ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") einfügen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Script sollte bis zur Vollendung durchlaufen und dabei Artikel erstellen, die es im Terminal anzeigt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tab _Sammlungen_).
> Sie sollten nun in der Lage sein, in die einzelnen Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu bohren und sich einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein bisschen über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemata und -Modelle definiert werden. Dann haben wir diese Informationen genutzt, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zu guter Letzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns damit befassen, einige Seiten zu erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Populierung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}
