---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt eine kurze Einführung in Datenbanken und wie sie in Node/Express-Anwendungen verwendet werden. Er zeigt dann, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugang für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website bereitzustellen. Er erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem werden kurz einige der Hauptmethoden gezeigt, mit denen Sie auf Modelldaten zugreifen können.

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
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Bibliotheksmitarbeiter werden die Local Library-Website nutzen, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie verwenden, um nach Büchern zu suchen, herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt verschiedene Ansätze, die Sie für das **Erstellen** (Create), **Lesen** (Read), **Aktualisieren** (Update) und **Löschen** (Delete) von Daten (CRUD-Operationen) verwenden können. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede Datenbank verwenden, die von _Node_ unterstützt wird (Express selbst definiert keine spezifischen zusätzlichen Anforderungen für die Datenbankverwaltung). Es gibt viele [beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Erlernbarkeit, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Obwohl es keine einzige "beste" Datenbank gibt, sollte fast jede der populären Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als ausreichend sein.

Weitere Informationen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Wie interagiere ich am besten mit einer Datenbank?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Die native Abfragesprache der Datenbanken, wie z.B. SQL, verwenden.
- Ein Object Relational Mapper ("ORM") oder Object Document Mapper ("ODM") verwenden. Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Unterstützung bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erzielt werden. Objektrelationale Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Form von JavaScript-Objekten denken können, anstatt in Datenbanksemantiken – dies gilt besonders, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (entweder auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt häufig zu geringeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind sehr mit der nativen Abfragesprache vertraut oder die Leistung ist von größter Bedeutung, sollten Sie unbedingt die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM soll ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paketmanager-Seite (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungstool, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl Promise-basierte als auch traditionelle Callback-Schnittstellen, Transaktionsunterstützung, schnelles/nachgezogenes Relation Laden, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Es so einfach wie möglich machen, die volle Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize): Ein auf Promises basierendes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/): Ein Objektrelationsmanager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank mit einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, ist GraphQL sehr beliebt und verfügt über Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwenden von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und das restliche Thema) verwenden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil der Dokumentenspeicher und das Abfragesystem sehr ähnlich wie JSON aussehen und somit JavaScript-Entwicklern vertraut sind.

> [!NOTE]
> Es ist nicht notwendig, MongoDB zu kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) leichter zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugegriffen werden kann.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie beginnen, die Modelle zu programmieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es kann mehrere Autoren mit demselben oder ähnlichem Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchexemplare und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahl-Listen-Optionen (z.B. wie eine Dropdown-Liste mit Auswahlmöglichkeiten) darzustellen, anstatt die Auswahlmöglichkeiten direkt in der Website fest zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Gedanken zeigt das UML-Zusammenführungsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (Status spezifischer physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, sodass Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hartcodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder Box können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Kardinalitäten_. Die Kardinalitäten sind die Zahlen im Diagramm, die die (maximalen und minimalen) Zahlen jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Linie, die die Boxen verbindet, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen nahe dem `Book`-Modell zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr damit verbundene `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose-einführung) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung trotzdem finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich — wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Überblick darüber, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, denken Sie darüber nach, wie wir jedes der oben im Diagramm abgebildeten Modelle konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung des Erfolgs oder Fehlers der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anfragen weiterhin ansprechbar bleibt.

JavaScript hat mehrere Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden gesetzt, um die Erfolgs- und Fehlerszenarien zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und deren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "erledigt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, wie Sie Promises nutzen können, um Code auszuführen, wenn ein Promise aufgelöst wird, und wir empfehlen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf die Fertigstellung von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Dieser Ansatz funktioniert so, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu markieren, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await`-Methode angehalten, bis das Promise abgeschlossen ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der darauf folgende Code kann ausgeführt werden.
Später, wenn das Promise abgeschlossen ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann bis zum Auftreten einer weiteren `await`-Anweisung oder bis der gesamte Code in der Funktion ausgeführt wurde, fortgesetzt.

Sie können sehen, wie das funktioniert, im Beispiel unten.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung an `methodThatReturnsPromise()` angehalten, bis das Promise aufgelöst wird, woraufhin der Code zu `aFunctionThatReturnsPromise()` fortgesetzt wird und nochmal wartet.
Der Code im `catch` Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler auftritt und dies wird passieren, wenn das Promise von einer der Methoden abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterables Promise als Eingabe erwartet und ein einziges `Promise` zurückgibt.
Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabe-Promises erfüllt sind, und gibt ein Array bestehend aus den erfüllten Werten zurück.
Es wird abgelehnt, wenn einer der Eingabe-Promises abgelehnt wird und stellt den ersten Ablehnungsgrund bereit.

Der Code unten zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, bis sie mithilfe des Promise, das von `Promise.all()` zurückgegeben wird, abgeschlossen sind.
Sobald beide abgeschlossen sind, gibt `await` zurück und das Ergebnisarray wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erledigt ist.
Sie würden `myFunction()` in einem `try...catch` Block aufrufen, um Fehler abzufangen.

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

Promises zusammen mit `await`/`async` bieten sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführungen!

## Mongoose-Einführung

Dieser Abschnitt gibt einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, ein Schema und ein Modell definiert und grundlegende Abfragen durchführt.

> [!NOTE]
> Diese Einführung ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und es lokal installieren. Sie können auch cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/) cloud-basierte _Datenbank als Dienst_ kostenlose Stufe verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht für das Tutorial Sinn, da es die "Installation" betriebssystemunabhängig macht (Datenbank als Dienst ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und mit `mongoose.connect()` eine Verbindung zu einer lokal gehosteten Datenbank herstellen, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer internet-gehosteten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, `await`en wir hier auf das Promise, das von der `connect()` Methode zurückgegeben wird, innerhalb einer `async` Funktion.
> Wir verwenden den `catch()` Handler des Promise, um Fehler beim Verbindungsversuch zu behandeln, wir könnten aber auch `main()` in einem `try...catch` Block aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` an und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie darauf warten müssen, dass die Verbindung hergestellt wird, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die Felder zu definieren, die in jedem Dokument gespeichert werden, zusammen mit ihren Validierungsanforderungen und Standardwerten. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht in der Datenbank gespeichert werden (wir besprechen das weiter unten).

Schemas werden dann mit der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die im Modell-Schema definierten Felder/Schematypen.

#### Definieren von Schemas

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()`n Sie Mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder darin im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierung und andere Methoden zeigen.

#### Erstellen eines Modells

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

Das erste Argument ist der singuläre Name der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben) und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie das im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) geht, und wenn wir unsere Ansichten erstellen.

#### Schemata-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes steht für ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispiel-Schema, das viele der gängigen Feldtypen und deren Deklaration zeigt, ist unten dargestellt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die Methode `populate()` verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Methoden zur Deklaration eines Feldes:

- Feld _Name_ und _Typ_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _Name_ gefolgt von einem Objekt, das den `type` und alle weiteren _Optionen_ für das Feld definiert. Optionen beinhalten Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder trimmiert gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Für weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren und sowohl synchrone als auch asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehlern in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Legt die Menge der erlaubten Werte für das Feld fest.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich für die Formatierung oder Kombination von Feldern, während die Setter nützlich sind, um einen einzigen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine vollwertige virtuelle Namenseigenschaft aus einem Feld für den Vornamen und einen für den Nachnamen, was einfacher und sauberer ist als bei jeder Verwendung in einer Vorlage einen vollständigen Namen zu erstellen.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz unter Verwendung eines Pfads und des `_id`-Werts des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen Ihnen, die [Abfrage-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie eine Abfrage "byName" zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` hinzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Modellinstanzen einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben einen kurzen Überblick unten. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code für die Verwendung der Methoden).
> Die umgebende `async` Funktion und ein `try...catch` Block zum Abfangen von Fehlern sind der Klarheit halber weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig mit dem Speichern zu definieren.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (diese ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können über die Punkt-Syntax auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können mit Abfragemethoden nach Datensätzen suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das Codefragment unten zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und nur die Felder für Athleten _name_ und _age_ zurückgeben. Wir geben hier nur ein übereinstimmendes Feld an (Sport), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu bedenken, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — es kann jedoch ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der Einträge in dem Ergebnis prüfen.

Abfrage-APIs, wie z.B. [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf dem Sie für das Ergebnis `awaiten` können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können das auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und können alle Teile unserer Abfrage mit dem Punktoperator (.) aneinandereihen, anstatt sie separat hinzuzufügen.
Das Codefragment unten ist das gleiche wie oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) ruft alle übereinstimmenden Datensätze ab, aber oft möchten Sie nur einen Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der Elemente zu zählen, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt viel mehr, was Sie mit Abfragen machen können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Bevölkerung (Population)

Sie können Referenzen von einem Dokument/Modellinstanz zu einem anderen mit dem `ObjectId`-Schemafeld erstellen oder von einem Dokument zu vielen durch Verwenden eines Arrays von `ObjectId`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren die folgenden Schemas Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als ein Array von `ObjectId` repräsentieren.
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

Wir können unsere Referenzen zu dem verwandten Dokument speichern, indem wir den `_id`-Wert zuweisen.
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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfung verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird geworfen.
> Unser Fehlerbehandlungscode behandelt das separat (in der Regel in einem `catch()`-Block), also ist die Absicht unseres Codes sehr klar.

Unser Story-Dokument hat jetzt einen Autor, referenziert durch die ID des Autorendokuments. Um die Autoreninformationen in den Storyergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, wir jedoch nichts unternommen haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum `stories`-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen, die Autoren und Geschichten verbinden, gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Author_ zu erhalten und dann `find()` zu verwenden, um nach diesem im `author`-Feld über alle Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über das Arbeiten mit verwandten Objekten _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Bevölkerung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modellschema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
Das wird unten gezeigt:

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

Sie können das Modell dann sofort in anderen Dateien `require`n und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, wo wir etwas darüber wissen, was Mongoose tun kann und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das erste, was wir tun wollen, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank verwenden. Diese Datenbank-Stufe wird nicht für Produktionswebsites empfohlen, da sie keine Redundanz hat, aber sie ist großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Dienst_ Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Entscheidungen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Falls gewünscht, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [geeigneten Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, abgesehen von der Datenbank-URL, die Sie bei der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Zuerst müssen Sie ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert lediglich die Eingabe grundlegender Kontaktdaten und die Anerkennung ihrer Nutzungsbedingungen).

Nach dem Einloggen gelangen Sie zum [Home-Bildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die **+ Create**-Schaltfläche im _Überblick_-Abschnitt.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Deploy your cluster_ geöffnet.
   Klicken Sie auf die **M0 FREE** Vorlagenoption.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten ihn für dieses Tutorial als `Cluster0` bei.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine beliebige Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir verwenden sie hier nicht.
   - Klicken Sie auf die Schaltfläche **Erstellen Deployment** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Security Quickstart_.
   ![Einrichten der Zugriffsregeln im Bildschirm "Security Quickstart" auf MongoDB Atlas.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Vergessen Sie nicht, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Verwenden Sie keine Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose möglicherweise die Verbindungszeichenkette nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen** um den Zugriff von Ihrem aktuellen Computer aus zu ermöglichen.
   - Geben Sie `0.0.0.0/0` im Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine Best Practice, die IP-Adressen zu beschränken, die mit Ihrer Datenbank und anderen Ressourcen verbunden werden können. Hier erlauben wir eine Verbindung von überall aus, da wir nicht wissen, woher die Anforderung nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertig und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Wechseln zur Übersicht**.
   ![Datenbanken nach der Einrichtung von Zugriffsregeln auf MongoDB Atlas wechseln.](mongodb_atlas_-_accessrules.jpg)

6. Sie gelangen zurück zur _Überblick_-Seite. Klicken Sie im _Bereitstellung_ Menü auf der linken Seite auf den Abschnitt _Datenbank_. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Einrichtung einer Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details bei der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Überblick_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie auf dem Bildschirm _Cluster0 Übersicht_ auf die Schaltfläche **Verbinden**.

    ![Konfigurieren der Verbindung nach der Einrichtung eines Clusters auf MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die Short SRV Verbindung bei der Einrichtung einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das Symbol **Kopieren**, um die Verbindungszeichenkette zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie das `<password>` Platzhalter in der Verbindungszeichenkette durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit dieser Zeichenkette an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Diese wird in etwa so aussehen: `mongodb+srv://Ihr_Benutzername:Ihr_Passwort@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren Sie Mongoose

Öffnen Sie ein Eingabeaufforderungsfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_hier_ihre_datenbank_url_einfügen_') durch die Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im Abschnitt [Mongoose Primer](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und protokolliert alle Fehler in der Konsole.

Es ist zu beachten, dass die Festcodierung von Datenbankanmeldedaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt, und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie das sicherer tun können, wenn wir [in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie oben [besprochen](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstamm (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schemcode unten und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor mit `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date` Feldern für die Geburts- und Sterbedaten.

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

Wir haben auch ein [virtuelles Attribut](#virtuelle_eigenschaften) für die AuthorSchema namens "url" deklariert, das die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Deklaration unserer URLs als virtuell im Schema ist eine gute Idee, weil die URL für ein Element dann nur an einer Stelle geändert werden muss.
> An dieser Stelle würde ein Link mit dieser URL nicht funktionieren, da wir keinen Routenbearbeitungscode für einzelne Modellinstanzen haben.
> Wir werden dies in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schemcode unten und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Das meiste davon ist dem Autorenmodell ähnlich — wir haben ein Schema mit einer Reihe von String-Feldern und einem virtuellen Attribut für die URL von spezifischen Buchdatensätzen deklariert und das Modell exportiert.

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

- author ist eine Referenz auf ein einzelnes `Autor` Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf ein Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanzmodell

Kopieren Sie schließlich den `BookInstance`-Schemcode unten und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
Die `BookInstance` stellt ein bestimmtes Exemplar eines Buches dar, das jemand entleihen kann, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird und "Impressum" (oder Versions-)details.

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

- `enum`: Dadurch können wir die zulässigen Werte einer Zeichenfolge festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines enum können wir Tippfehler und beliebige Werte für unseren Status verhindern).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchexemplare auf "Wartung" und das Standard-`due_back`-Datum auf schließlich (beachten Sie, wie Sie die Datumsfunktion aufrufen können, wenn Sie das Datum festlegen!).

Alles andere sollte aus unseren vorherigen Schemas vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres (der Kategorie eines Buches, z.B. ob es Fiktion oder Sachliteratur, Romantik oder Militärgeschichte usw. ist).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) Attribut für die URL des Genres, namens `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen von einigen Elementen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Gegenstände zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anders) innerhalb Ihres _express-locallibrary-tutorial_ Verzeichnisses (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` mag bei der JavaScript-Ausbildung nützlich sein, ist jedoch nicht notwendig, um dieses Tutorial zu vervollständigen.

2. Führen Sie das Skript unter Verwendung von node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, mit der Sie den _insert_your_database_url_here_ Platzhalter früher in `app.js` ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL innerhalb von doppelten (")-Anführungszeichen einfügen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss laufen und die erstellten Elemente im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchexemplaren zu gehen und die individuellen Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt, und viel darüber, wie Mongoose-Schemas und Modelle definiert werden. Wir haben diese Informationen anschließend genutzt, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zum Schluss haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt (mithilfe eines eigenständigen Skripts). Im nächsten Artikel werden wir uns ansehen, wie man einige Seiten erstellt, um diese Objekte anzuzeigen.

## Siehe auch

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Bevölkerung](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
