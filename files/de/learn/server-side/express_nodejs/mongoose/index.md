---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
slug: Learn/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 5f32dcfb43924bb35330ca0ab8f7e192dcd4d8ed
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) nutzen können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem werden kurz einige der wichtigsten Möglichkeiten gezeigt, wie man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellen einer Grundgerüst-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library Website nutzen, um Informationen über Bücher und Leihende zu speichern, während Bibliotheksmitglieder sie nutzen werden, um Bücher zu durchsuchen und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen verwenden können. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Beim Wählen einer Datenbank sollten Sie Aspekte wie Zeit bis zur Produktivität/Einarbeitungskurve, Leistung, Replizierbarkeit/Backup, Kosten und Support der Community berücksichtigen. Obwohl es keine einzelne "beste" Datenbank gibt, sollten fast alle gängigen Lösungen mehr als ausreichend für eine kleine bis mittelgroße Website wie unsere Local Library sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze zur Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbanken wie SQL.
- Verwendung eines Object Relational Mappers ("ORM"). Ein ORM stellt die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankunabhängigen Backend bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erzielt werden. ODMs sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn das ODM verschiedene Datenbank-Backends unterstützt und daher größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt sich mit Datenbanksemantiken auseinanderzusetzen – dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken (auf derselben oder unterschiedlichen Website) arbeiten müssen. Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Wenn Sie nicht sehr vertraut mit der nativen Abfragesprache sind oder die Leistung nicht von größter Bedeutung ist, sollten Sie dringend die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paket-Manager-Website (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Ausschnitt an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungswerkzeug, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl auf Versprechen basierende als auch traditionelle Callback-Schnittstellen, bietet Unterstützung für Transaktionen, das Laden von eager/nested-eager Relationen, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Objektbeziehungsmanager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und erleichtert die Arbeit mit der Datenbank basierend auf einem objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und das restliche Thema) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source [NoSQL](https://de.wikipedia.org/wiki/NoSQL) Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht einer](https://www.mongodb.com/docs/manual/core/databases-and-collections/) "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community besonders beliebt, zum Teil weil das Speichern von Dokumenten und das Abfragesystem sehr wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie loslegen und mit dem Kodieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass möglicherweise mehrere Exemplare verfügbar sind (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur deren Namen, und es könnte mehrere Autoren mit demselben oder ähnlichem Namen geben. Wir möchten Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie sortieren können.

Beim Entwerfen von Modellen ist es sinnvoll, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahlmöglichkeiten (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten) darzustellen, anstatt die Auswahlmöglichkeiten in die Website selbst zu hartkodieren — dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

In diesem Sinne zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben besprochen, haben wir Modelle für das Buch erstellt (die allgemeinen Details des Buches), die Buchinstanz (Status der spezifischen physischen Kopien des Buches, die im System verfügbar sind) und den Autor. Wir haben auch entschieden, ein Modell für das Genre zu haben, sodass Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir werden die akzeptablen Werte hartkodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes dieser Boxen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells anzeigen, die in der Beziehung vorkommen können. Beispielsweise zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` verbunden sind. Die Zahlen in der Nähe des `Book` Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Einleitungskurs](#mongoose_einleitungskurs) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance` Schema zu definieren. Diese Wahl war etwas willkürlich — wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Einleitungskurs zur Erklärung, wie Modelle definiert und verwendet werden. Während Sie diesen lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren, und der Code zur Behandlung des Erfolgs oder Fehlers der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anforderungen reaktionsfähig bleiben kann.

JavaScript verfügt über mehrere Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen hat JavaScript stark auf die Übergabe von [Callback-Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu asynchronen Methoden zurückgegriffen, um Erfolgs- und Fehlerfälle zu handhaben.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Versprechen sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Versprechensobjekt "erledigt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, um Verpflichtungen zu verwenden, um Code auszuführen, wenn ein Versprechen abgeschlossen ist, und wir empfehlen dringend, dass Sie [Wie man Versprechen verwendet](/de/docs/Learn/JavaScript/Asynchronous/Promises) lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss von Versprechen innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies verständlicher und lesbarer asynchronen Code führt.

So funktioniert dieser Ansatz: Sie verwenden das Schlüsselwort `async function`, um eine Funktion als asynchron zu kennzeichnen, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Versprechen zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await` Methode angehalten, bis das Versprechen erfüllt ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Versprechen erfüllt wird, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Versprechen abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` angetroffen wird, an welchem Punkt es erneut pausieren wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie das funktioniert, im Beispiel unten.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Code-Ausführung bei `methodThatReturnsPromise()` pausiert, bis das Versprechen erfüllt wird, woraufhin der Code zu `aFunctionThatReturnsPromise()` fortschreitet und erneut wartet.
Der Code im `catch` Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und das passiert, wenn das Versprechen, das von einer der Methoden zurückgegeben wird, zurückgewiesen wird.

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
Wenn die Methoden nicht voneinander abhängig sind, können sie parallel ausgeführt werden, um die gesamte Operation schneller abzuschließen.
Dies geschieht mit der [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) Methode, die ein iterierbares Versprechen als Eingabe nimmt und ein einziges `Promise` zurückgibt.
Dieses zurückgegebene Versprechen wird erfüllt, wenn alle Versprechen der Eingabe erfüllt sind, und zwar mit einem Array der erfülltenden Werte.
Es wird abgewiesen, wenn eines der Eingangsversprechen abgelehnt wird, und zwar mit diesem ersten Ablehnungsgrund.

Der Code unten zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Versprechen zurückgeben.
Wir `await` auf beide Funktionen, um sie mithilfe des Versprechens, das von `Promise.all()` zurückgegeben wird, zu vervollständigen.
Sobald sie beide abgeschlossen sind, gibt `await` zurück und das Ergebniss-Array wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Versprechen, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, erfüllt ist.
Sie würden `myFunction()` in einem `try...catch` Block aufrufen, um etwaige Fehler abzufangen.

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

Versprechen mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose Einleitungskurs

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie man ein Schema und ein Modell definiert und wie man einfache Abfragen durchführt.

> [!NOTE]
> Dieses Einleitungskurs wurde stark vom [Mongoose Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Mongoose und MongoDB installieren

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit — mit npm — installiert.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es installiert nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installer von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Datenbank als Dienst_ freie Stufe verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht für das Tutorial Sinn, weil es die "Installation" betriebssystemunabhängig macht (Datenbank-als-Dienst ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können sich die Datenbank mit `require()` und `mongoose.connect()` verbinden, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer internetbasierten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, `await`-en wir hier auf das Versprechen, das von der `connect()` Methode innerhalb einer `async` Funktion zurückgegeben wird.
> Wir verwenden den Promise `catch()`-Handler, um Fehler beim Verbindungsversuch zu behandeln, aber wir könnten `main()` auch in einem `try...catch` Block aufgerufen haben.

Sie können das Standard `Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form einer Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` an und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Versprechen zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit dem `Schema`-Interface definiert. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder sowie deren Validierungsanforderungen und Standardwerte zu definieren. Darüber hinaus können Sie statische und Instanzhilfsmethoden definieren, um es einfacher zu machen, mit Ihren Datentypen zu arbeiten, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies weiter unten besprechen).

Schemas werden dann mithilfe der `mongoose.model()` Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die im Modell `Schema` definierten Felder/Schema-Typen.

#### Definieren von Schemas

Der unten gezeigte Codeausschnitt zeigt, wie Sie ein simples Schema definieren könnten. Zuerst `require()`-en Sie Mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Parameter-Objekt des Konstruktors definieren.

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

In diesem Fall haben wir nur zwei Felder, eine Zeichenkette und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validationen und andere Methoden.

#### Erstellen eines Modells

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Aufzeichnungen zu erstellen, zu aktualisieren oder zu löschen, und Abfragen zu starten, um alle Aufzeichnungen oder bestimmte Teilmengen von Aufzeichnungen zu erhalten. Wie das geht, zeigen wir Ihnen im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben - jedes repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispielschema, das viele der üblichen Feldtypen zeigt und wie sie deklariert werden, ist unten dargestellt.

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

Die meisten der [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Beschreiber nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Stellt spezielle Instanzen eines Modells in der Datenbank dar. Beispielsweise könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()` Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die oben gezeigten Beispiele zeigen ein Array von Objekten ohne spezifizierten Typ und ein Array von `String` Objekten, aber Sie können ein Array mit jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Zu den Optionen gehören Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String` Felder automatisch in Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu den Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren, sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die Menge der erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt einen regulären Ausdruck an, den die Zeichenkette erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Zeichenkette.

Das untenstehende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validierungstypen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie sehen und setzen können, die jedoch nicht in MongoDB gespeichert werden. Getter sind nützlich für das Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzigen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und zerlegt) eine vollständige Namens virtuelle Eigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als jedes Mal, wenn ein vollständiger Name in einer Vorlage verwendet wird, einen vollständigen Namen zu konstruieren.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mithilfe eines Pfads und des `_id` Werts des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuelles](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [kaskadierbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (z.B. Ihnen zu ermöglichen, eine Abfrage "byName" zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden hinzuzufügen).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben einen kurzen Überblick unten. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Vorgänge, die ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die untenstehenden Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. der wesentliche Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch` Block zur Fehlerbehandlung werden zur Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) weiter oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und anschließend [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die untenstehenden Beispiele gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz zu definieren und gleichzeitig zu speichern.
Unten erstellen wir nur ein, Sie können jedoch mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Eintrag mit der Punktnotation zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte zurück in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können mit Abfragemethoden nach Datensätzen suchen, indem Sie die Abfragebedingungen als ein JSON-Dokument angeben. Der folgende Codeausschnitt zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen und nur die Felder für Athleten- _name_ und _age_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an (Sportart), Sie können jedoch weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen insgesamt entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, sich daran zu erinnern, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist – aber es könnte ein Fehlfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), gibt eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um Abfragen in Teilen zusammenzustellen, bevor Sie es mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Versprechen zurück, auf das Sie für das Ergebnis `await`-en können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mithilfe des Punktoperators (.) aneinanderhängen, anstatt sie separat hinzuzufügen.
Der folgende Codeausschnitt ist dasselbe wie unsere Abfrage oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode erfasst alle übereinstimmenden Datensätze, aber oft möchten Sie nur einen Treffer erzielen. Die folgenden Methoden fragen nach einem einzelnen Eintrag:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen für das Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Objekte zu erhalten, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne tatsächlich die Datensätze abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumente).

#### Arbeiten mit zugehörigen Dokumenten — Population

Sie können Verweise von einem Dokument/Modellinstanz auf ein anderes mittels des `ObjectId` Schemas erstellen, oder von einem Dokument auf viele mittels eines Arrays von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID mit den tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren die folgenden Schemas Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
Die `ref` Eigenschaft sagt dem Schema, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id` Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Haupfad unseres Codes nicht mit Fehlerprüfungen komplizieren müssen.
> Wenn eine der `save()` Operationen fehlschlägt, wird das Versprechen abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich separat um solche Fälle (gewöhnlich in einem `catch()` Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autoren, der durch die ID des Autordokuments referenziert wird. Um die Autorinformation in den Geschichtergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts unternommen haben, um unsere Geschichte im `stories` Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Geschichten-Array hinzuzufügen, aber dies würde uns dazu führen, zwei Stellen zu haben, an denen die Informationen bezüglich Autoren und Geschichten aufrechterhalten werden müssen.
>
> Eine bessere Möglichkeit ist, die `_id` unseres _Autors_ zu erhalten und `find()` zu verwenden, um diese im Autorenfeld über alle Geschichten hinweg zu durchsuchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemas und Modelle mit jeder gewünschten Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
Dies wird unten gezeigt:

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

Sie können dann das Modell sofort in anderen Dateien einbinden und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, da wir etwas über Mongoose wissen und wie wir unsere Modelle gestalten möchten, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_ Website zu beginnen. Das erste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudgehostete Sandbox-Datenbank nutzen. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz hat, ist jedoch ideal für Entwicklung und Prototypen. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Dienst_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen (andere beliebte Optionen zum Zeitpunkt des Schreibens umfassen [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es bevorzugen, können Sie eine MongoDB-Datenbank vor Ort einrichten, indem Sie die [passenden binären Dateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.app/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Sie müssen zunächst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nach dem Einloggen gelangen Sie auf die [Startseite](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die **M0 FREE**-Option.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster-Name_ ändern.
     Wir behalten ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldaten herunterladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Anbieter_ und _Region_ aus. Unterschiedliche Regionen bieten verschiedene Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Richten Sie die Zugriffsregeln auf dem Sicherheits-Schnellstartbildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie spezielle Zeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise die Verbindungszeichenfolge nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer aus zu ermöglichen.
   - Geben Sie `0.0.0.0/0` im IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall aus erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen einzuschränken, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir eine Verbindung von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Beenden und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu Datenbanken, nachdem Sie Zugriffsregeln auf MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_ Bildschirm zurück. Klicken Sie unter dem Menüpunkt _Bereitstellung_ auf die Sektion _Datenbank_. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Einrichten einer Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Fügen Sie meine eigenen Daten hinzu**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den _Datenbank erstellen_ Bildschirm.

   ![Einzelheiten beim Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankenstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie im Bildschirm _Übersicht_ von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung, nachdem Sie einen Cluster auf MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den _Verbinden zu Cluster0_ Bildschirm.

    ![Wählen Sie die Kurz-SRV-Verbindung bei der Einrichtung einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren** Symbol, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie diese in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Platzhalter in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und haben eine URL (mit Benutzernamen und Passwort), die verwendet werden kann, um darauf zuzugreifen.
Dies wird etwa so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren von Mongoose

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zum Verzeichnis, in dem Sie Ihre [Grundgerüst-Lokalbibliothek-Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose-Einleitungskurses](#mongoose_und_mongodb_installieren) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Applikationsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie die Datenbank-URL-Zeichenfolge ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose-Einleitungskurs](#verbindung_zu_mongodb_herstellen) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und protokolliert alle Fehler in der Konsole.

Beachten Sie, dass das Hardcodieren von Datenbank-Anmeldedaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt und während der Entwicklung kein signifikantes Risiko besteht, dass das Lecken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn [für die Produktion bereitgestellt wird](/de/docs/Learn/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie, indem Sie einen Ordner für unsere Modelle im Projektstamm erstellen (**/models**) und dann separate Dateien für jedes der Modelle erstellen:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author Modell

Kopieren Sie den `Author`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor mit `String`-Schema-Typen für den Vor- und Nachnamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date` Feldern für die Geburts- und Todesdaten.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das `AuthorSchema` deklariert, das "url" genannt wird und die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor erhalten möchten.

> [!NOTE]
> Die Deklaration unserer URLs als virtuell im Schema ist eine gute Idee, da die URL für ein Element nur an einer Stelle geändert werden muss.
> An diesem Punkt würde ein Link mit dieser URL nicht funktionieren, da wir keine Routenhandhabungscode für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Book Modell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Die meisten sind ähnlich dem Autor Modell — wir haben ein Schema mit einer Anzahl von String-Feldern deklariert und ein Virtual für das Abrufen der URL spezifischer Bucheinträge, und wir haben das Modell exportiert.

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

- author ist ein Verweis auf ein einzelnes `Author` Modellobjekt und ist erforderlich.
- genre ist ein Verweis auf ein Array von `Genre` Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BookInstance Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Die `BookInstance` repräsentiert ein spezielles Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurück erwartet wird und Details zur "Imprint" (oder Version).

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

Die neuen Merkmale, die wir hier zeigen, sind die Feldoptionen:

- `enum`: Dies ermöglicht es uns, die erlaubten Werte einer Zeichenkette festzulegen. In diesem Fall verwenden wir sie, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines enum bedeutet, dass wir Tippfehler und beliebige Werte für unseren Status verhindern können).
- `default`: Wir verwenden Standard, um den Standardstatus für neu erstellte Buchinstanzen auf "Maintenance" und das Standarddatum `due_back` auf `now` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie eines Buches, z.B. ob es Belletristik oder Sachbuch, Romanze oder Militärgeschichte ist).

Die Definition wird sehr ähnlich zu den anderen Modellen sein:

- Das Modell sollte einen `String`-Schema-Typ namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, mit dem Namen `url`.
- Exportieren Sie das Modell.

## Testen – einige Elemente erstellen

Das ist es. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispieldatenbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), werden wir jetzt ein _unabhängiges_ Skript ausführen, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) und legen Sie sie in Ihrem _express-locallibrary-tutorial_ Verzeichnis ab (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu erlernen, aber zum Verständnis dieses Tutorials ist es nicht erforderlich.

2. Führen Sie das Skript mit Node in Ihrer Eingabeaufforderung aus und übergeben Sie dabei die URL Ihrer _MongoDB_ Datenbank (die gleiche, die Sie den Platzhalter _insert_your_database_url_here_ ersetzt haben, innerhalb von `app.js` früher):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Auf Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen einschließen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zur Fertigstellung durchlaufen und Elemente während der Erstellung im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen einzutauchen und einzelne Dokumente zu untersuchen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und sehr viel darüber, wie Mongoose-Schema und -Modelle definiert werden. Wir haben dann diese Informationen verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mithilfe eines eigenständigen Skripts). Im nächsten Artikel werden wir einige Seiten erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumente)
- [Mongoose Webseite](https://mongoosejs.com/) (Mongoose-Dokumente)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumente)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumente)
- [Schema Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumente)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumente)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumente)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}
