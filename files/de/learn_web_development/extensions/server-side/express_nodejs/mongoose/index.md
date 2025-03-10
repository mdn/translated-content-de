---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erläutert, wie Sie diese mit Node/Express-Anwendungen verwenden können. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um auf die Datenbank der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website zuzugreifen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Es werden auch kurz einige der wichtigsten Wege gezeigt, wie Sie auf Modelldaten zugreifen können.

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
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library Website verwenden, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder sie nutzen können, um Bücher zu durchsuchen und zu durchsuchen, herauszufinden, ob Kopien verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient speichern und abrufen zu können, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für das Durchführen von **E**rstellen, **L**esen, **A**ktualisieren und **L**öschen (CRUD) Operationen verwenden können. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Zeit bis zur Produktivität/Lernkurve, Leistung, Einfachheit von Replikation/Sicherung, Kosten, Community-Support usw. berücksichtigen. Während es keine "beste" Datenbank gibt, sollte fast jede der populären Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als ausreichend sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbank, wie SQL.
- Die Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Lösung bieten.

Die allerbeste _Leistung_ kann erzielt werden, indem SQL oder eine andere vom Datenbankmanagementsystem unterstützte Abfragesprache verwendet wird. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um die Abbildung zwischen Objekten und dem Datenbankformat vorzunehmen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (insbesondere, wenn der Mapper unterschiedliche Datenbank-Backends unterstützt und dabei größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM ist, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über Datenbanksemantik — dies gilt insbesondere dann, wenn Sie mit unterschiedlichen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie stellen auch einen offensichtlichen Ort für die Durchführung der Datenvalidierung dar.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Kosten bei Entwicklung und Wartung! Sofern Sie nicht sehr vertraut mit der nativen Abfragesprache sind oder die Leistung von größter Bedeutung ist, sollten Sie ernsthaft die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden Web-Framework [Sails](https://sailsjs.com/) extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche unterschiedliche Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, bietet Transaktionsunterstützung, eager/nested-eager relation loading, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Relationen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft dabei, mit der Datenbank unter Verwendung eines objektorientierten Ansatzes zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und verfügt über Funktionen für das Lesen von Daten aus Datenbanken.

Generell sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Dokumentationsqualität usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt der Erstellung dieses Dokuments ist Mongoose bei weitem der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwenden von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source [NoSQL](https://de.wikipedia.org/wiki/NoSQL) Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil die Dokumentenspeicherung und das Abfragesystem sehr ähnlich wie JSON aussehen und JavaScript-Entwicklern daher vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) \_leichter zu benutzen und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie die Mongoose-Schemata und -Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugegriffen werden kann.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie sich in den Code stürzen und die Modelle erstellen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und wie die Beziehungen zwischen den verschiedenen Objekten aussehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare zur Verfügung haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit dem gleichen oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchexemplare und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z.B. wie eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Optionen direkt in die Website zu kodieren — dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesen Überlegungen im Hinterkopf zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben diskutiert, haben wir Modelle für das Buch (die generischen Details des Buchs), das Buchexemplar (Status der spezifischen physischen Kopien des Buchs, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hart kodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder der Boxen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (Maximum und Minimum) jedes Modells darstellen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Buch` und ein `Genre` verwandt sind. Die Zahlen in der Nähe des Modells `Buch` zeigen, dass ein `Genre` null oder mehr `Buch`-Objekte haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie in der Nähe des `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre` haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-primer) weiter unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns dafür entschieden, die Beziehung zwischen `Buch`/`Genre` und `Buch`/`Autor` im Buch-Schema und die Beziehung zwischen dem `Buch`/`Buchexemplar` im `Buchexemplar`-Schema zu definieren. Diese Wahl war etwas willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose-Bibliothek-Modell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Primer, der erklärt, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code, der den Erfolg oder Fehlschlag der Methode behandelt, zu einem späteren Zeitpunkt ausgeführt wird, wenn der Vorgang abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server darauf wartet, dass der Datenbankvorgang abgeschlossen wird, sodass der Server auf andere Anfragen reagiert.

JavaScript verfügt über mehrere Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen verließ sich JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn der Vorgang abgeschlossen ist, wird das Promise-Objekt "erledigt" und löst ein Objekt auf, das das Ergebnis des Vorgangs oder einen Fehler darstellt.

Es gibt zwei Hauptwege, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erledigt ist, und wir empfehlen dringend, dass Sie sich [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) ansehen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial werden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwenden, um auf den Abschluss von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbaren und verständlichen asynchronen Code führt.

Die Funktionsweise dieses Ansatzes besteht darin, dass Sie das `async function` Schlüsselwort verwenden, um eine Funktion als asynchron zu markieren und dann innerhalb dieser Funktion `await` auf jede Methode anzuwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird die Operation an der ersten `await`-Methode unterbrochen, bis das Promise erledigt ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Später, wenn das Promise erledigt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann fortgesetzt, bis entweder eine weitere `await` erreicht wird, an welchem Punkt er erneut unterbrochen wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie das in dem folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` unterbrochen, bis das Promise aufgelöst wird, an welchem Punkt der Code zu `aFunctionThatReturnsPromise()` fortsetzt und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und dies wird passieren, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die asynchronen Methoden oben werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterable von Promises als Eingabe nimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabepromises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie das funktioniert.
Erstens, wir haben zwei Funktionen, die Promises zurückgeben.
Wir 'awaiten' auf beide, damit sie mit dem Promise abgeschlossen werden, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, gibt `await` zurück und das Ergebnisarray wird bevölkert,
dann geht die Funktion zum nächsten `await` weiter und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, erledigt ist.
Sie würden die `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler abzufangen.

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

Promises mit `await`/`async` erlauben sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose-Primer

Dieser Abschnitt gibt einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie Sie ein Schema und ein Modell definieren und wie Sie grundlegende Abfragen durchführen.

> [!NOTE]
> Dieser Primer ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, installiert aber nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installer herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloudbasierten _Datenbankas-a-Service_ kostenlosen Plan, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht im Tutorial Sinn, da es "installationsunabhängig" ist (Datenbank-as-a-Service ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden würden).

### Verbindung zu MongoDB

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial verbinden wir uns stattdessen mit einer Internet-gehosteten Datenbank).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank_apis_sind_asynchron) besprochen, haben wir hier `await` auf dem von der `connect()` Methode zurückgegebenen Promise innerhalb einer `async`-Funktion verwendet.
> Wir verwenden den `catch()` Handler des Promises, um Fehler bei der Verbindung zu behandeln, wir könnten die `main()` Methode aber auch innerhalb eines `try...catch` Blocks aufgerufen haben.

Sie können das standardmäßige `Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies erfordert denselben Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, aber die nicht tatsächlich in der Datenbank gespeichert werden (wir werden weiter unten darauf eingehen).

Schemata werden dann mit der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell entspricht einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die im Modell-Schema definierten Felder/Schema-Typen.

#### Definieren von Schemata

Der unten stehende Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` Sie mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, wobei Sie die verschiedenen Felder darin im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierung und andere Methoden.

#### Erstellen eines Modells

Modelle werden aus Schemata mit der `mongoose.model()` Methode erstellt:

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

Das erste Argument ist der singuläre Name der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie beim Erstellen des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir zeigen Ihnen, wie das im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) funktioniert, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, ist unten gezeigt.

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

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()` Methode verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diese Modelle durchführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne einen angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Arten, ein Feld zu deklarieren:

- Feld _Name_ und _Typ_ als Schlüssel-Wert-Paar (d.h. wie mit den Feldern `name`, `binary` und `living`).
- Feld _Name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Optionen beinhalten Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min-Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Klein- oder Großschreibung oder gestutzt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Für weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht es Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dies wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
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

Für vollständige Informationen zur Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die aber nicht an MongoDB übertragen werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und dekonstruiert) eine virtuelle Eigenschaft für einen vollständigen Namen aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als immer dann einen vollständigen Namen zu konstruieren, wenn einer in einer Vorlage benötigt wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um für jeden Modell-Eintrag eine eindeutige URL zu definieren, indem wir einen Pfad und den `_id`-Wert des Eintrags verwenden.

Für weitere Informationen siehe [Virtuelle Felder](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehilfen

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehilfen](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehilfen ermöglichen es Ihnen, die [kettbare Abfrage-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie eine Abfrage "byName" zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden hinzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch` Block, um Fehler abzufangen, sind der Klarheit halber weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank_apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten setzen voraus, dass `SomeModel` ein Modell ist (mit einem einzigen `name` Feld), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig beim Speichern zu definieren.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen darauf `.model()` auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Notation zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, indem Sie Abfragemethoden verwenden und die Abfragebedingungen als JSON-Dokument angeben. Der unten stehende Codeausschnitt zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und nur die Felder für den Athlet _name_ und _age_ zurückgegeben werden. Hier geben wir nur ein übereinstimmendes Feld an (sport), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass es **kein Fehler** ist, keine Ergebnisse zu finden — aber es kann ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie es mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` verwenden können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun und alle Teile unserer Abfrage unter Verwendung des Punktoperators (.) miteinander verkettet, anstatt sie separat hinzuzufügen.
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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode holt alle passenden Datensätze, aber oft möchten Sie nur einen Treffer erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, mit der Sie die Anzahl der Dokumente, die die Bedingungen erfüllen, abrufen können. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, das Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen mit dem `ObjectId`-Schemafeld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie die tatsächlichen Inhalte des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren die folgenden Schemata Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
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
> Ein großer Vorteil dieser Programmierweise ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfung verkomplizieren müssen.
> Wenn einer der `save()` Vorgänge fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich separat darum (normalerweise in einem `catch()`-Block), so dass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat nun einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autorinformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten von einem bestimmten Autor erhalten? Eine Möglichkeit wäre, unsere Geschichte dem Geschichten-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Orte hätten, an denen die Informationen, die Autoren und Geschichten betreffen, gepflegt werden müssten.
>
> Eine bessere Lösung ist, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um danach im Autor-Feld über alle Geschichten hinweg zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Model pro Datei

Obwohl Sie Schemata und Modelle mit jeder Datei-Struktur erstellen können, die Sie mögen, empfehlen wir dringend, jedes Model-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können das Modell dann sofort in anderen Dateien anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, wo wir ein wenig darüber wissen, was Mongoose tun kann und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das Allererste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandkasten-Datenbank verwenden. Diese Datenbankstufe wird nicht für Produktionswebsites empfohlen, da sie keine Redundanz bietet, aber sie ist hervorragend für die Entwicklung und das Prototyping geeignet. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank-as-a-Service_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen würden (andere beliebte Entscheidungen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nach dem Einloggen landen Sie auf dem [Home-Bildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Erstellen** Schaltfläche im Abschnitt _Übersicht_.

   ![Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Cluster bereitstellen_.
   Klicken Sie auf die **M0 Kostenlos** Option Vorlage.

   ![Eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das _Beispieldatensatz vorladen_ Kontrollkästchen, da wir später eigene Beispieldaten importieren werden.
   - Wählen Sie jeden Anbieter und jede Region aus den Abschnitten _Anbieter_ und _Region_. Verschiedene Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Sicherheitsstart_.
   ![Einrichten der Zugriffseinstellungen auf dem Sicherheitsstartbildschirm auf MongoDB Atlas.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise den Verbindungsstring nicht richtig parst.

   - Wählen Sie **Aktuelle IP-Adresse hinzufügen** aus, um den Zugriff von Ihrem aktuellen Computer aus zu erlauben
   - Geben Sie `0.0.0.0/0` im Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies sagt MongoDB, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Best Practices bestehen darin, die IP-Adressen zu beschränken, die sich mit Ihrer Datenbank und anderen Ressourcen verbinden können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und Schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht**.
   ![Zu den Datenbanken gehen, nachdem die Zugriffseinstellungen auf MongoDB Atlas eingerichtet wurden](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Übersicht_ zurück. Klicken Sie im Menü _Bereitstellung_ auf der linken Seite auf den Abschnitt _Datenbank_. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Eine Sammlung auf MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Eigene Daten hinzufügen**.
   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, mit Ihrer erstellten Datenbank.
   ![Bestätigung der Erstellung der Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie auf dem _Übersicht_ Bildschirm von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Verbindung konfigurieren, nachdem ein Cluster in MongoDB Atlas eingerichtet wurde.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Die kurze SRV-Verbindung wählen, wenn eine Verbindung zu MongoDB Atlas eingerichtet wird.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **INSTALLIEREN SIE NICHT** den Treiber wie vorgeschlagen.
    - Klicken Sie auf das **Kopier** Symbol, um den Verbindungscode zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort ab.

Sie haben nun die Datenbank erstellt und haben eine URL (mit Benutzernamen und Passwort), die verwendet werden kann, um darauf zuzugreifen.
Diese sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Grundstruktur der Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits bei der Lektüre des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Deklaration des _Express-Anwendungsobjekts_ (nach der Zeile `const app = express();`).
Ersetzen Sie die `Datenbank-URL-String` ('_insert_your_database_url_here_') durch die URL, die Ihre eigene Datenbank repräsentiert (d.h. mit den Informationen aus _MongoDB Atlas_).

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

Wie im [Mongoose-Primer](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und gibt alle Fehler in der Konsole aus.

Beachten Sie, dass das Hardcodieren von Datenbankanmeldedaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun dies hier, weil es den Kernverbindungscode zeigt und weil im Laufe der Entwicklung kein erhebliches Risiko besteht, dass das Leaken dieser Details sensible Informationen offenlegt oder korrumpiert.
Wir zeigen Ihnen, wie das sicherer geht, wenn wir [in Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#datenbankkonfiguration)!

## Definieren des LocalLibrary-Schemas

Wir werden für jedes Modell ein separates Modul definieren, wie oben (siehe [Ein Schema/Model pro Datei](#ein_schema_model_pro_datei)) diskutiert.
Beginnen Sie damit, im Projektstamm einen Ordner für unsere Modelle (**/models**) zu erstellen und dann für jedes der Modelle separate Dateien zu erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schemacode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor, der `String` Schemadaten-Typen für die Vor- und Familiennamen (erforderlich, mit maximal 100 Zeichen) hat und `Date` Felder für das Geburts- und Sterbedatum.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das `AuthorSchema` deklariert, das "url" heißt und die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wenn immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, da dann die URL für einen Artikel nur an einem Ort geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link, der diese URL verwendet, nicht funktionieren, da wir keinen Routenbearbeitungscode für einzelne Modellinstanzen haben.
> Wir werden das in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schemacode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Das meiste davon ist ähnlich wie beim Autor-Modell — wir haben ein Schema mit einer Reihe von String-Feldern und einem Virtuellen zum Abrufen der URL bestimmter Buchenbestände deklariert und das Modell exportiert.

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

- author ist ein Verweis auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchexemplar-Modell

Schließlich kopieren Sie den `BookInstance`-Schemacode, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert ein bestimmtes Exemplar eines Buches, das jemand ausleihen könnte, und beinhaltet Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurück erwartet wird, und "Impressum" (oder Version) Details.

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

- `enum`: Damit können wir die zulässigen Werte eines Strings festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir Tippfehler und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden `default`, um den Standardstatus für neu erstellte Buchexemplare auf "Wartung" zu setzen und das Standardwert `due_back` Datum auf `now` (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zur Speicherung von Genres (der Buchkategorie, d.h. ob es sich um Belletristik oder Sachbücher, Romantik oder Militärgeschichte handelt usw.).

Die Definition wird der anderen Modelle sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaTyp mit dem Namen `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, benannt `url`.
- Exportieren Sie das Modell.

## Testen — einige Objekte erstellen

Das wärs. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Objekte jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) und speichern Sie sie in Ihrem _express-locallibrary-tutorial_ Verzeichnis (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis dafür ist nicht notwendig für dieses Tutorial.

2. Führen Sie das Skript über Node in Ihrem Eingabeaufforderungsfenster aus und übergeben Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, die Sie zuvor inside `app.js` anstelle des Platzhalters _insert_your_database_url_here_ eingefügt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL mit doppelten Anführungszeichen (") umschließen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Ende durchlaufen, indem Objekte bei der Erstellung im Terminal angezeigt werden.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchexemplaren zu navigieren und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemata und -Modelle definiert werden. Wir haben dann diese Informationen genutzt, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Webseite zu entwerfen und zu implementieren.

Zu guter Letzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (unter Verwendung eines eigenständigen Skripts). Im nächsten Artikel werden wir uns darauf konzentrieren, einige Seiten zu erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
