---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt eine kurze Einführung in Datenbanken und zeigt, wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) nutzen können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es erklärt, wie Objekt-Schemas und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem wird kurz gezeigt, auf welche Hauptarten Sie auf Modelldaten zugreifen können.

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
      <td>In der Lage sein, Ihre eigenen Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library-Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen werden, um Bücher zu durchsuchen und zu suchen, um herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen durchzuführen. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivitäts-/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen mehr als ausreichend für eine kleine bis mittelgroße Website wie unsere Local Library sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Verwendung der nativen Abfragesprache der Datenbanken, wie SQL.
- Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankagnostischen Backend bereitstellen.

Die beste _Leistung_ kann erzielt werden, indem SQL oder eine andere von der Datenbank unterstützte Abfragesprache verwendet wird. Object Mappers sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zuzuordnen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM ist, dass Programmierer weiterhin in JavaScript-Objekten denken können, anstatt in Datenbanksemantiken — dies ist besonders wichtig, wenn Sie mit verschiedenen Datenbanken (auf derselben oder verschiedenen Websites) arbeiten müssen. Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Kosten für Entwicklung und Wartung! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von größter Bedeutung, sollten Sie ernsthaft in Betracht ziehen, ein ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der Website des npm-Paketmanagers (schauen Sie sich die Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Textes beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungstool, das für den Betrieb in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl auf Promises basierende als auch traditionelle Callback-Schnittstellen, liefert Transaktionsunterstützung, eager/nested-eager Relation-Loading, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins, Eins-zu-Viele und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht die Nutzung der vollen Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine so einfach wie möglich (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechungsbasiertes ORM für Node.js und io.js. Unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object-Relationship-Manager für NodeJS. Unterstützt MySQL, SQLite und Postgres und erleichtert die Arbeit mit der Datenbank mithilfe eines objektorientierten Ansatzes.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs, ist GraphQL sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Im Allgemeinen sollten Sie bei der Auswahl einer Lösung sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) berücksichtigen. Zum Zeitpunkt der Erstellung dieses Textes ist Mongoose mit Abstand das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community sehr beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr ähnlich wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose verwenden zu können, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary-Website-](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie direkt loslegen und mit der Modellierung beginnen, ist es sinnvoll, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare mit global eindeutigen IDs, Verfügbarkeitsstatus usw. verfügbar haben. Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchexemplare und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahl-Listen-Optionen (z. B. eine Dropdown-Auswahl) darzustellen, anstatt die Auswahlmöglichkeiten in die Website selbst fest einzucodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z. B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit dem im Hinterkopf zeigt das untenstehende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben besprochen, haben wir Modelle für das Buch (die generischen Details des Buches), Buchexemplare (Status spezifischer physischer Kopien des im System verfügbaren Buches) und Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, sodass Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte hartkodieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder Box sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (maximal und minimal) jedes Modells anzeigen, das möglicherweise in der Beziehung vorhanden ist. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Book` und ein `Genre` in Beziehung stehen. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Einführung](#mongoose_einführung) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach dem assoziierten `_id` im anderen Modell suchen). Im Folgenden haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich - wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zum Behandeln des Erfolgs oder Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn der Vorgang abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server auf andere Anfragen reagieren kann.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden gesetzt, um Erfolgs- und Fehlerfälle zu handhaben.
In modernem JavaScript wurden Callbacks weitgehend durch [Promisen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promisen sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und deren zukünftigen Zustand repräsentieren.
Wenn der Vorgang abgeschlossen ist, wird das Verspruchsobjekt "erledigt" und löst ein Objekt aus, das das Ergebnis des Vorgangs oder einen Fehler darstellt.

Es gibt zwei Hauptarten, wie Sie Promisen verwenden können, um Code auszuführen, wenn ein Versprechen erfüllt wird, und wir empfehlen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für einen Überblick über beide Ansätze zu lesen.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf das Abschlussversprechen innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Der Weg, wie dieser Ansatz funktioniert, besteht darin, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu markieren, und dann innerhalb dieser Funktion `await` auf jede Methode anwenden, die ein Versprechen zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb bei der ersten `await`-Methode pausiert, bis das Versprechen erfüllt wird.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Versprechen erfüllt wird, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird geworfen, wenn das Versprechen abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` erreicht wird, an welchem Punkt es wieder pausiert wird, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im untenstehenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird der Code bei `methodThatReturnsPromise()` pausiert, bis das Versprechen erfüllt wird, zu welchem Zeitpunkt der Code zu `functionThatReturnsPromise()` fortgesetzt wird und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion auftritt, und dies geschieht, wenn das Versprechen, das von einer der beiden Methoden zurückgegeben wird, abgelehnt wird.

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

Die oben beschriebenen asynchronen Methoden werden in Reihe ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies wird mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) durchgeführt, die ein Iterable von Versprechen als Eingabe entgegennimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Versprechen wird erfüllt, wenn alle Eingabepromisen erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabeversprechen abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promisen zurückgeben.
Wir `awaiten`, dass sie beide mit dem Versprechen abgeschlossen werden, das von `Promise.all()` zurückgegeben wird.
Sobald sie beide abgeschlossen sind, kehrt `await` zurück und das Ergebnis-Array wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Versprechen erfüllt ist.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler abzufangen.

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

Promisen mit `await`/`async` ermöglichen sowohl eine flexible als auch eine "verständliche" Kontrolle über die asynchrone Ausführung!

## Mongoose Einführung

Dieser Abschnitt bietet einen Überblick, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen vorgenommen werden.

> [!NOTE]
> Diese Einführung ist stark von dem [Mongoose Quick Start](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit — über npm installiert.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, installiert jedoch nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme herunterladen und es lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir das [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Database as a Service_ Free-Tier verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht im Tutorial Sinn, da dadurch die "Installation" unabhängig vom Betriebssystem erfolgt (Datenbank-as-a-Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

Mongoose erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` aufrufen und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` herstellen, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer internetgehosteten Datenbank herstellen).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) erläutert, `awaiten` wir hier auf das von der `connect()`-Methode zurückgegebene Versprechen innerhalb einer `async` Funktion.
> Wir verwenden den Versprechen-`catch()`-Handler, um mit Fehlern beim Verbindungsversuch umzugehen, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt die gleiche Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` entgegen und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Versprechen zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mithilfe der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanzen-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (im Folgenden wird dies weiter diskutiert).

Schemata werden dann mithilfe der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die in dem Modell-Schema definierten Felder/Schematypen.

#### Definieren von Schemata

Das folgende Codefragment zeigt, wie Sie ein simples Schema definieren können. Zuerst `require()` Sie mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen, indem Sie die verschiedenen Felder im Objektparameter des Konstruktors definieren.

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

In dem obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierung und andere Methoden zeigen.

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwenden_von_modellen) tun, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes repräsentiert ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Ein Beispiel für ein Schema, das viele der gängigen Feldtypen und deren Deklarationen zeigt, ist unten dargestellt.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt zu repräsentieren. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die Methode `populate()` verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen durchführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Zu den Optionen gehören Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z. B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder Trimmed gesetzt werden sollten (z. B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen zu spezifizieren.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld angegeben werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der für das Feld zulässigen Werte an.
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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während die Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und dekomponiert) eine virtuelle Eigenschaft für den vollständigen Namen aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu konstruieren, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz unter Verwendung eines Pfads und des `_id`-Werts des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch über [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) verfügen. Die Instanz- und statischen Methoden sind ähnlich, unterscheiden sich jedoch offensichtlich dadurch, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehilfe ermöglicht es Ihnen, die [kettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel, sodass Sie eine Abfrage "byName" zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` hinzufügen können).

### Verwenden von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir bieten nachfolgend einen kurzen Überblick. Für weitere Informationen siehe: [Models](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Auffangen von Fehlern werden der Klarheit halber weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Bearbeiten von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf anwenden.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

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

Sie können auf die Felder in diesem neuen Datensatz über die Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für den Athletennamen und das Alter zurückgeben. Hier spezifizieren wir nur ein übereinstimmendes Feld (Sport), aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien spezifizieren oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — es kann jedoch ein Fehlfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, einen Wert für eine Suche zu finden, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis prüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Versprechen zurück, bei dem Sie auf das Ergebnis `awaiten` können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Methode [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie einzeln hinzuzufügen.
Das folgende Codefragment entspricht unserer oben genannten Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), die Sie verwenden können, um die Anzahl der mit den Bedingungen übereinstimmenden Artikel zu erhalten. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt viel mehr, was Sie mit Abfragen tun können. Weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modell-Instanz zu einer anderen mit dem `ObjectId`-Schema-Feld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectId`s. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die eigentlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` repräsentieren.
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

Wir können unsere Referenzen auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte und weisen die Autor-ID dem Feld Autor unserer Geschichte zu.

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
> Ein großer Vorteil dieser Programmierweise besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen komplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Versprechen abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich separat darum (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autoreninformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autoren zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum Story-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, unsere Geschichte zum Story-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen über Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Authors_ zu erhalten und dann `find()` zu verwenden, um danach im author-Feld aller Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemata und Modelle mit jeder gewünschten Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in einem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können das Modell dann in anderen Dateien sofort verwenden und benötigen. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Jetzt, da wir etwas darüber wissen, was Mongoose tun kann und wie wir unsere Modelle entwerfen möchten, ist es Zeit, mit der Arbeit an der _LocalLibrary_-Website zu beginnen. Das allererste, was wir tun möchten, ist eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial verwenden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) Cloud-gehostete Sandbox-Datenbank. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz bietet, aber sie ist großartig für Entwicklung und Prototyping geeignet. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Datenbank als Dienstanbieter_ ist, den Sie möglicherweise auch für Ihre Produktionsdatenbank wählen würden (andere beliebte Möglichkeiten zum Zeitpunkt der Erstellung dieses Textes sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [für Ihr System geeigneten Binärdateien herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, abgesehen von der Datenbank-URL, die Sie bei der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Zuerst müssen Sie ein [Konto bei MongoDB Atlas erstellen](https://www.mongodb.com/cloud/atlas/register) (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen akzeptieren).

Nach dem Einloggen gelangen Sie zur [Startseite](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Bereitstellung Ihres Clusters_.
   Klicken Sie auf die Option **M0 FREE**.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster-Namen_ ändern.
     Wir belassen ihn für dieses Tutorial als `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatensatz vorladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen Anbieter und eine Region im Abschnitt _Anbieter_ und _Region_. Verschiedene Regionen bieten unterschiedliche Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Richten Sie die Zugriffseinstellungen auf dem Bildschirm Sicherheits-Schnellstart auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose den Verbindungsstring möglicherweise nicht korrekt analysieren kann.

   - Wählen Sie **Aktuelle IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer aus zu ermöglichen.
   - Geben Sie `0.0.0.0/0` ins Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu begrenzen, die auf Ihre Datenbank und andere Ressourcen zugreifen können. Hier erlauben wir eine Verbindung von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und Schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Nach dem Einrichten der Zugriffsregeln auf MongoDB Atlas zu den Datenbanken gehen](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur _Übersicht_-Seite zurück. Klicken Sie im _Bereitstellungsmenü_ links im Bereich _Datenbank_ auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Eine Sammlung auf MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Bereich _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details beim Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum _Sammlungen_-Bildschirm zurück, in dem Ihre Datenbank erstellt wurde.
   ![Bestätigung zur Erstellung der Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf den Tab _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie auf dem Cluster0-_Übersicht_-Bildschirm auf die Schaltfläche **Verbinden**.

    ![Verbindung konfigurieren nach dem Einrichten eines Clusters auf MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die kurze SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den `<password>` Platzhalter im Verbindungsstring mit dem Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zur Zugriff darauf verwendet werden kann.
Diese wird ungefähr so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie ein Kommandozeilenfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen der [Mongoose Einführung](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port einstellen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie in der [Mongoose Einführung](#verbindung_zu_mongodb) oben erläutert, erstellt dieser Code die Standardverbindung zur Datenbank und meldet Fehler in der Konsole.

> [!NOTE]
> Wir hätten den Datenbankverbindungscode in unseren **app.js** Code einfügen können.
> Das Platzieren im Anwendungseingangspunkt entkoppelt die Anwendung und die Datenbank, was es einfacher macht, für Tests eine andere Datenbank zu verwenden.

Beachten Sie, dass es nicht empfohlen wird, Datenbankanmeldedaten im Quellcode wie oben gezeigt fest zu hinterlegen.
Wir tun es hier, weil es den Kernverbindungscode zeigt und weil es während der Entwicklung kein signifikantes Risiko gibt, dass das Leaken dieser Details sensible Informationen offenlegt oder korrumpiert.
Wir zeigen Ihnen, wie Sie dies sicherer tun, wenn wir [in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie, indem Sie einen Ordner für unsere Modelle im Projektstammverzeichnis (**/models**) erstellen und dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autor-Modell

Kopieren Sie den `Author`-Schemaschlüssel unten und fügen Sie ihn in Ihre **./models/author.js**-Datei ein.
Das Schema definiert einen Autor so, dass er `String`-SchemaTypen für die Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) sowie `Date`-Felder für die Geburts- und Todestage hat.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) für das AuthorSchema namens „url“ deklariert, die die absolute URL zurückgibt, die benötigt wird, um eine bestimmte Instanz des Modells zu erhalten — wir verwenden die Eigenschaft in unseren Vorlagen, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die URLS als virtuelle im Schema zu deklarieren, ist eine gute Idee, da dann die URL für ein Element nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, da wir keinen Routen-Handling-Code für einzelne Modellinstanzen haben.
> Wir richten die in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Buch-Modell

Kopieren Sie den `Book`-Schema-Code unten und fügen Sie ihn in Ihre **./models/book.js**-Datei ein.
Das meiste davon ist dem Autor-Modell ähnlich — wir haben ein Schema mit einer Reihe von String-Feldern und einem virtuellen Element erstellt, um die URL bestimmter Buchdatensätze zu erhalten, und wir haben das Modell exportiert.

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

- author ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf eine Reihe von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### BookInstance-Modell

Schließlich kopieren Sie den `BookInstance`-Schema-Code unten und fügen Sie ihn in Ihre **./models/bookinstance.js**-Datei ein.
Die `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird und "Imprint" (oder Versions-)Details.

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

Die neuen Dinge, die wir hier zeigen, sind die Felderoptionen:

- `enum`: Dies ermöglicht es uns, die akzeptablen Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums ermöglicht es uns, Tippfehler und willkürliche Werte für unseren Status zu verhindern).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standard-`due_back`-Datum auf `jetzt` zu setzen (beachten Sie, wie Sie die Date-Funktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte Ihnen aus unseren vorherigen Schemas vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js**-Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie des Buches, z. B., ob es sich um Fiktion oder Sachbuch, Romantik oder Militärgeschichte usw. handelt).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-SchemaTyp mit dem Namen `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte obligatorisch sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) für die URL des Genres, benannt `url`.
- Exportieren Sie das Modell.

## Testen — einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Seite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie (oder erstellen Sie anderweitig) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_-Verzeichnis (auf derselben Ebene wie `package.json`) herunter.

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit Node in Ihrem Befehlszeilenfenster aus, wobei Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie mit dem Platzhalter _insert_your_database_url_here_ in `app.js` früher ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > Unter anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zur Fertigstellung ausgeführt werden und währenddessen Elemente in das Terminal erstellen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tab _Sammlungen_).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu bohren und einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und einiges darüber, wie Mongoose-Schemas und -Modelle definiert werden. Wir haben diese Informationen dann genutzt, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (unter Verwendung eines eigenständigen Skripts). Im nächsten Artikel werden wir uns damit befassen, einige Seiten zu erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
