---
title: "Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)"
slug: Learn/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 5f32dcfb43924bb35330ca0ab8f7e192dcd4d8ed
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Apps verwendet. Er zeigt dann, wie wir [Mongoose](https://mongoosejs.com/) nutzen können, um den Datenbankzugriff für die [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website bereitzustellen. Er erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem wird kurz gezeigt, wie man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Erstellen einer Skeleton-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library-Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen werden, um nach Büchern zu stöbern und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir diese in einer _Datenbank_ speichern.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen auszuführen. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert keine speziellen zusätzlichen Verhaltensweisen/Anforderungen für die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Support usw. berücksichtigen. Während es keine "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen mehr als akzeptabel für eine kleine bis mittelgroße Website wie unsere Local Library sein.

Weitere Informationen zu den Optionen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze zur Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbank, wie SQL.
- Die Verwendung eines Object Relational Mappers ("ORM"). Ein ORM stellt die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Schnittstelle bieten.

Der beste _Leistung_ kann erzielt werden, indem man SQL oder die von der Datenbank unterstützte Abfragesprache verwendet. ODMs sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders dann der Fall, wenn das ODM verschiedene Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der Unterstützung von Datenbank-Features eingehen muss).

Der Vorteil der Verwendung eines ORM besteht darin, dass Programmierer weiterhin in JavaScript-Objekten denken können, anstatt in Begriffen der Datenbanksemantik — dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Kosten für Entwicklung und Wartung! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder Leistung ist ausschlaggebend, sollten Sie stark in Betracht ziehen, ein ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paketmanager-Site (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungstool, das für asynchrone Umgebungen gestaltet wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, extrahiert aus dem Express-basierten [Sails](https://sailsjs.com/)-Webframework. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Rückruf-Schnittstellen, bietet Unterstützung für Transaktionen, eifriges/verschachteltes Laden von Relationen, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-viele- und Viele-zu-viele-Relationen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein auf Promises basierendes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank unter Verwendung eines objektorientierten Ansatzes zu arbeiten.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für restful APIs, sehr beliebt und hat Funktionen für das Lesen von Daten aus Datenbanken.

Generell sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) in Betracht ziehen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open Source [NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Kollektion" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einem "Tisch" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination von ODM und Datenbank ist in der Node-Community extrem beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr nach JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man die Mongoose-Schemata und -Modelle für das [LocalLibrary-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit der Codierung der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und die Beziehungen zwischen den verschiedenen Objekten.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie zu sortieren.

Beim Entwurf Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe zusammenhängender Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z. B. wie eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Auswahl in die Website selbst hart zu kodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Gedanken im Hinterkopf zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben diskutiert, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status der spezifischen physikalischen Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch dazu entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu erstellen — wir werden die akzeptablen Werte hart kodieren, da wir nicht erwarten, dass sich diese ändern. In jedem der Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (Maximal- und Minimalzahl) jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Beispielsweise zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verwandt sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose_primer) weiter unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in einem Modell zu haben (Sie können die umgekehrte Beziehung dennoch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buch-Schema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance` Schema zu definieren. Diese Wahl war etwas willkürlich — wir hätten genauso gut das Feld im anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Einblick, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der oben stehenden Modelle im Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren, und der Code zur Behandlung des Erfolgs oder Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist. Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server weiterhin auf andere Anfragen reagieren kann.

JavaScript hat eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens. Historisch hat sich JavaScript stark darauf verlassen, [Callback-Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) an asynchrone Methoden zu übergeben, um den Erfolg und die Fehlerfälle zu behandeln. In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen. Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "eingelöst" und löst ein Objekt, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, mit denen Sie Promises verwenden können, um Code auszuführen, wenn ein Promise eingelöst wird, und wir empfehlen Ihnen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten. In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) um auf den Abschluss von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu lesbarerem und verständlichem asynchronem Code führt.

Diese Methode funktioniert, indem Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu markieren, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Promise zurückgibt. Wenn die asynchrone Funktion ausgeführt wird, wird ihr Vorgang bei der ersten `await`-Methode pausiert, bis das Promise eingelöst wird. Aus der Sicht des umgebenden Codes kehrt die asynchrone Funktion zurück und der Code danach kann ausgeführt werden. Später, wenn das Promise eingelöst wird, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler geworfen, wenn das Promise abgelehnt wurde. Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` angetroffen wird, an welchem Punkt es wieder pausieren wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im Beispiel unten funktioniert. `myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird. Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise eingelöst wird, zu welchem Zeitpunkt der Code mit `aFunctionThatReturnsPromise()` fortfährt und erneut wartet. Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion geworfen wird, und dies wird geschehen, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden in der Reihenfolge ausgeführt. Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen. Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterable von Promises als Eingabe akzeptiert und ein einzelnes `Promise` zurückgibt. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt werden, und hat ein Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der Code unten zeigt, wie dies funktioniert. Zuerst haben wir zwei Funktionen, die Promises zurückgeben. Wir warten auf beide, um sie mithilfe des von `Promise.all()` zurückgegebenen Promise abzuschließen. Sobald beide abgeschlossen sind, kehrt `await` zurück und das Ergebnisarray wird gefüllt, die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, eingelöst wird. Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um alle Fehler abzufangen.

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

## Mongoose Primer

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie man grundlegende Abfragen erstellt.

> [!NOTE]
> Dieser Primer ist stark beeinflusst von dem [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm. Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installer herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloudbasierten _Datenbank als Dienst_ kostenloser Stufe, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und ergibt Sinn für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (Datenbank-als-Dienst ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden).

### Verbindung zu MongoDB

Mongoose benötigt eine Verbindung zu einer MongoDB-Datenbank. Sie können `require()` und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` wie unten gezeigt herstellen (für das Tutorial werden wir uns stattdessen mit einer internetgehosteten Datenbank verbinden).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, warten wir hier auf das Promise, das von der Methode `connect()` zurückgegeben wird, innerhalb einer `async`-Funktion. Wir verwenden den Promise `catch()`-Handler, um Fehler beim Verbindungsversuch zu behandeln, aber wir könnten `main()` auch innerhalb eines `try...catch` Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten. Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden. Dies hat die gleiche Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück. Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf das Herstellen der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden unter Verwendung der `Schema`-Schnittstelle _definiert_. Mit dem Schema können Sie die Felder definieren, die in jedem Dokument gespeichert sind, zusammen mit ihren Validierungsanforderungen und Standardwerten. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die aber nicht tatsächlich in der Datenbank gespeichert werden (dazu später mehr).

Die Schemas werden dann mithilfe der Methode `mongoose.model()` zu Modellen "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die im Modellschema definierten Felder/Schematypen.

#### Schemata definieren

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` Sie Mongoose und verwenden dann den Konstruktor `Schema`, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Objektparameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen Zeichenkette und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierungen und Methoden zeigen.

#### Ein Modell erstellen

Modelle werden aus Schemata mithilfe der Methode `mongoose.model()` erstellt:

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie bei der Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie dies im Abschnitt [Using models](#verwenden_von_modellen) funktioniert, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten. Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, ist unten gezeigt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die Methode `populate()` verwenden, um die zugeordneten Informationen bei Bedarf zu holen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Eine Liste von Objekten. Sie können JavaScript-Array-Operationen auf diese Modelle durchführen (push, pop, unshift, etc.). Die obigen Beispiele zeigen eine Liste von Objekten ohne angegebenen Typ und eine Liste von `String`-Objekten, aber Sie können eine Liste von Objekten jeden Typs haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu erklären:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_, gefolgt von einem Objekt, das den `type` und alle anderen _options_ für das Feld definiert. Zu den Optionen gehören Dinge wie:

  - Standardwerte.
  - Integrierte Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet integrierte und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es erlaubt Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung bei Validierungsfehlern in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den die Zeichenfolge erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Zeichenfolge.

Das folgende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen spezifizieren können:

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

Für vollständige Informationen zur Validierung von Feldern siehe [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, aber die nicht in MongoDB gespeichert werden. Die Getter sind nützlich für das Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte für die Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle Eigenschaft für den vollständigen Namen aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal, wenn ein vollständiger Name in einer Vorlage verwendet wird, diesen zu erstellen.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuelle](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzenmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die [Chainable Query Builder API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, indem Sie es ermöglichen, eine Abfrage "byName" zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` hinzuzufügen).

### Verwenden von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, in der Sie suchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die unten gezeigten Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den essentiellen Code zur Nutzung der Methoden).
> Der umgebende `async function` und `try...catch` Block zum Abfangen von Fehlern sind der Klarheit halber weggelassen.
> Weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` darauf aufrufen. Die Beispiele unten setzen voraus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch `create()` verwenden, um die Modellinstanz gleichzeitig mit deren Speicherung zu definieren. Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz über die Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mithilfe von Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das Codefragment unten zeigt, wie Sie alle Sportler in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für Sportler _name_ und _age_ zurückgeben. Hier spezifizieren wir nur ein übereinstimmendes Feld (Sportart), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruck-Kriterien spezifizieren oder die Bedingungen ganz weglassen, um alle Sportler zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu erinnern, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — es kann jedoch ein Fehlfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der Einträge im Ergebnis überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück. Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen. `exec()` führt die Abfrage aus und gibt ein Promise zurück, das Sie für das Ergebnis `await`en können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun und wir können alle Teile unserer Abfrage zusammen mit dem Punktoperator (.) verbinden, anstatt sie separat hinzuzufügen. Das Codefragment unten entspricht unserer obigen Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) erhält alle passenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument durch `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen für die Aktualisierung und Entfernung von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der Elemente zu erhalten, die Konditionen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Baumpopulation

Sie können Referenzen von einem Dokument/Modellexemplar zum anderen mit dem `ObjectId` Schema-Feld erstellen oder von einem Dokument zu vielen unter Verwendung eines Arrays von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugeordneten Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID mit den tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten. Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen. Jede Geschichte kann einen einzelnen Autor haben. Die `ref`-Eigenschaft sagt dem Schema, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen zum zugehörigen Dokument speichern, indem wir den `_id`-Wert zuweisen. Unten erstellen wir einen Autor und dann eine Geschichte und weisen der Autor-ID das Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen verkomplizieren müssen. Wenn einer der `save()`-Vorgänge fehlschlägt, wird das Promise abgelehnt und ein Fehler wird geworfen. Unser Fehlerbehandlungs-Code befasst sich damit separat (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autorinformationen in den Storyergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte in das `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Stories-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen zu Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Methode besteht darin, die `_id` unseres _Autoren_ zu erhalten und dann `find()` zu verwenden, um diese im Autorenfeld in allen Geschichten zu durchsuchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie wissen müssen, wenn Sie mit verwandten Elementen _für dieses Tutorial_ arbeiten. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit einer beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren. Das ist unten gezeigt:

```js
// File: ./models/somemodel.js

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

Sie können dann das Modell sofort in anderen Dateien anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Modellinstanzen zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nachdem wir nun etwas darüber gelernt haben, was Mongoose kann und wie wir unsere Modelle gestalten möchten, ist es an der Zeit, mit der _LocalLibrary_-Website zu beginnen. Das allererste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir zur Speicherung unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank. Diese Datenbankstufe wird nicht als geeignet für Produktions-Websites angesehen, da sie keine Redundanz hat, ist jedoch großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist, und weil MongoDB Atlas ein beliebter _Datenbank als Dienst_-Anbieter ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie auch lokal eine MongoDB-Datenbank einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen](https://www.mongodb.com/try/download/community-edition/releases) und installieren. Die Rest der Anweisungen in diesem Artikel wären ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express-Tutorial Teil 7: Deployment in Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.app/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Zuerst müssen Sie ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihren Nutzungsbedingungen zustimmen).

Nach dem Einloggen gelangen Sie zum [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie im Abschnitt _Übersicht_ auf die Schaltfläche **+ Erstellen**.

   ![Erstellen einer Datenbank in MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Cluster bereitstellen_. Klicken Sie auf die Option **M0 FREE** Vorlage.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Clustername_ ändern. Für dieses Tutorial behalten wir es als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatensatz laden_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_ aus. Unterschiedliche Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Bereich _Sicherheit-Quickstart_.
   ![Einrichten der Zugriffsregeln auf dem Bildschirm "Sicherheit Quickstart" in MongoDB Atlas.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen sicher zu kopieren und zu speichern, da wir diese später benötigen werden. Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise den Verbindungsstring nicht richtig parsen kann.

   - Wählen Sie **Durch aktuelle IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer aus zu erlauben.
   - Geben Sie `0.0.0.0/0` im Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu begrenzen, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach dem Deployment kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht**.
   ![Gehen Sie zu Datenbanken, nachdem Sie Zugriffsregeln in MongoDB Atlas festgelegt haben.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_ Bildschirm zurück. Klicken Sie auf den Abschnitt _Datenbank_ unter dem Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung in MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Bereich _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank in MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details bei der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library`.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ mit Ihrer erstellten Datenbank zurück.
   ![Datenbankerstellungsbestätigung in MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im _Übersicht_ Bildschirm von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach der Einrichtung eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Verbindung zu Cluster0_.

    ![Wählen Sie die kurze SRV-Verbindung bei der Einrichtung einer Verbindung in MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - Installieren Sie den Treiber **NICHT**, wie vorgeschlagen.
    - Klicken Sie auf das **Kopier**-Symbol, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie diese in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei, die diese Zeichenfolge enthält, an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzernamen und Passwort), die verwendet werden kann, um darauf zuzugreifen. Diese wird etwas Ähnliches wie: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0` aussehen.

## Installieren von Mongoose

Öffnen Sie eine Eingabeaufforderung und navigieren Sie in das Verzeichnis, in dem Sie Ihre [Skeleton Local Library Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt haben. Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json**-Datei hinzuzufügen, falls Sie dies noch nicht getan haben, als Sie den [Mongoose Primer](#installation_von_mongoose_und_mongodb) oben gelesen haben.

```bash
npm install mongoose
```

## Verbindung zu MongoDB

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`). Ersetzen Sie die Datenbank-URL-Zeichenfolge ('_insert_your_database_url_here_') durch die URL Ihres eigenen Datenbankspeicherorts (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose Primer](#verbindung_zu_mongodb) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und berichtet über auftretende Fehler auf der Konsole.

Beachten Sie, dass das harte Codieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird. Wir tun dies hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Veröffentlichen dieser Details sensible Informationen preisgibt oder beschädigt. Wir zeigen Ihnen, wie Sie dies sicherer tun, wenn [Sie in die Produktion gehen](/de/docs/Learn/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben diskutiert](#one_schemamodel_per_file). Beginnen Sie damit, einen Ordner für unsere Modelle im Projektstammverzeichnis (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/author.js** ein. Das Schema definiert einen Autor als `String` SchemaTypes für die Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date`-Felder für die Geburts- und Todesdaten.

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
> Das Deklarieren unserer URLs als virtual im Schema ist eine gute Idee, weil dann die URL für ein Element nur an einer einzigen Stelle geändert werden muss. Zu diesem Zeitpunkt würde ein Link, der diese URL verwendet, nicht funktionieren, da wir noch keinen Routen-Handling-Code für einzelne Modellinstanzen haben. Wir werden dies in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/book.js** ein. Das meiste davon ist ähnlich wie beim Autor-Modell — wir haben ein Schema mit einer Reihe von String-Feldern deklariert, eine virtuelle Eigenschaft zum Abrufen der URL bestimmter Buchdatensätze erstellt und das Modell exportiert.

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

- author ist eine Referenz zu einem einzigen `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz zu einem Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanzmodell

Zuletzt kopieren Sie den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein. Die `BookInstance` repräsentiert ein spezifisches Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird und "Abdruck" (oder Version) Details.

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

Die neuen Dinge, die wir hier zeigen, sind die Feldeinstellungen:

- `enum`: Dies erlaubt uns, die zugelassenen Werte einer Zeichenfolge festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines enums bedeutet, dass wir Rechtschreibfehler und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden default, um den Standardstatus für neue Buchinstanzen auf "Maintenance" zu setzen und das Standard-`due_back`-Datum auf `now` (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres (der Kategorie des Buches, z.B. ob es Fiktion oder Sachbuch, Romanze oder Militärgeschichte ist, usw.).

Die Definition wird sehr ähnlich zu den anderen Modellen sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen von Einträgen

Das war's. Wir haben nun alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Gegenstände zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Einträge für jeden Typ zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) in Ihrem _express-locallibrary-tutorial_-Verzeichnis (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` könnte Ihnen beim Lernen von JavaScript nützlich sein, aber das Verstehen davon ist für dieses Tutorial nicht notwendig.

2. Führen Sie das Skript mit Node in Ihrem Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie zuvor mit dem _insert_your_database_url_here_ Platzhalter in `app.js` ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelten Anführungszeichen setzen (").
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss laufen und Elemente anzeigen, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank bei MongoDB Atlas (im _Collections_ Tab). Sie sollten jetzt in der Lage sein, in die einzelnen Sammlungen von Büchern, Autoren, Genres und BuchInstanzen hineinzubohren und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs in Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen mit einem eigenständigen Skript erstellt haben. Im nächsten Artikel werden wir auf die Erstellung einiger Seiten eingehen, um diese Objekte anzuzeigen.

## Siehe auch

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}
