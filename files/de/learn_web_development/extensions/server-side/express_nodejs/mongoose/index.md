---
title: "Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel bietet eine kurze Einführung in Datenbanken und wie man sie mit Node/Express-Anwendungen verwendet. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Zugriff auf die Datenbank der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website zu gewähren. Er erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, auf welche Hauptarten Sie auf Modelldaten zugreifen können.

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

Die Bibliotheksmitarbeiter werden die Local Library-Website nutzen, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder die Seite zur Durchsuche und Suche nach Büchern verwenden, herausfinden, ob Exemplare verfügbar sind, und diese dann reservieren oder ausleihen können. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Anwendungen können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für die **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen verwenden können. Dieses Tutorial bietet eine kurze Übersicht über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/keine Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), einschließlich PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Zeit bis zur Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. in Betracht ziehen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Für weitere Informationen zu den Optionen siehe [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Die Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere einen datenbankunabhängigen Backend bieten.

Die beste _Leistung_ kann erzielt werden, indem man SQL oder die von der Datenbank unterstützte Abfragesprache verwendet. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu mappen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders zutreffend, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Entwickler weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über Datenbanksemantik — dies ist besonders zutreffend, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder einer anderen Website). Sie bieten auch einen offensichtlichen Ort, um die Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt häufig zu geringeren Kosten für die Entwicklung und Wartung! Sofern Sie nicht mit der nativen Abfragesprache sehr vertraut sind oder die Leistung von entscheidender Bedeutung ist, sollten Sie dringend die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Ausschnitt an!).

Einige der zum Zeitpunkt des Schreibens beliebten Lösungen sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektdatentool, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, Transaktionsunterstützung, eager/nested-eager Relation Loading, polymorphe Zuordnungen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und dem zugrunde liegenden Datenbankmotor zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basierter ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft dabei, mit der Datenbank mit einem objektorientierten Ansatz zu arbeiten.
- [GraphQL](https://graphql.org/): In erster Linie eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und hat Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivitäten" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) berücksichtigen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Die Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Collection" von "Dokumenten" in einer MongoDB-Datenbank [ist analog zu](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community aufgrund der Dokumentenspeicherung und des Abfragesystems, das sehr nach JSON aussieht und JavaScript-Entwicklern daher vertraut ist, äußerst beliebt.

> [!NOTE]
> Sie müssen nicht viel über MongoDB wissen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _eher_ leichter zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man die Mongoose-Schema- und -Modelle für das [LocalLibrary website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir könnten mehr Informationen über den Autor speichern müssen als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, Autor, Genre und Kategorie zu sortieren.

Bei der Gestaltung Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Bücherexemplare und Autoren.

Sie könnten auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten hart zu codieren - dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Unter Berücksichtigung dieser Überlegungen zeigt das unten stehende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben diskutiert, haben wir Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (Status bestimmter physischer Exemplare des im System verfügbaren Buches) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns dagegen entschieden, ein Modell für den `BookInstance:status` zu haben - wir werden die akzeptablen Werte hart kodieren, da wir nicht erwarten, dass sie sich ändern. Innerhalb jedes der Kästchen sehen Sie den Modellnamen, die Feldnamen und Typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (Maximum und Minimum) jedes Modells zeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie in der Nähe des `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserer [Mongoose-Einführung](#einführung_in_mongoose) unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung trotzdem finden, indem Sie nach der zugeordneten `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich - wir könnten das Feld genauso gut im anderen Schema haben.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren, und der Code zur Behandlung des Erfolgs oder Fehlschlags der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn der Vorgang abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss des Datenbankvorgangs wartet, sodass der Server auch bei anderen Anfragen reaktionsfähig bleiben kann.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch gesehen hat sich JavaScript stark darauf verlassen, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand repräsentieren.
Wenn der Vorgang abgeschlossen ist, wird das Promise-Objekt "eingelöst" und löst ein Objekt aus, das das Ergebnis des Vorgangs oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, wie Sie mit Promises arbeiten können, um Code auszuführen, wenn ein Promise eingelöst wird. Wir empfehlen dringend, [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf die Fertigstellung eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, weil dies zu besser lesbarem und verständlicherem asynchronen Code führt.

Bei diesem Ansatz markieren Sie eine Funktion mit dem Schlüsselwort `async function` als asynchron und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihr Betrieb bei der ersten `await`-Methode pausiert, bis das Promise eingehalten wird.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Promise eingehalten wird, gibt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder eine andere `await`-Anweisung auftritt, an welcher Stelle sie erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie das in dem unten stehenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird der Code bei `methodThatReturnsPromise()` pausiert, bis das Promise eingehalten wird, woraufhin der Code weiter zu `functionThatReturnsPromise()` geht und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird, was der Fall ist, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die oben beschriebenen asynchronen Methoden werden der Reihe nach ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterables Promise als Eingabe akzeptiert und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabepromies erfüllt werden, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabepromises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `awaiten` beide, bis sie mithilfe des von `Promise.all()` zurückgegebenen Promises abgeschlossen sind.
Sobald sie beide abgeschlossen sind, wird `await` zurückgegeben und das Ergebnisarray wird gefüllt.
Die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise abgeschlossen wird.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um etwaige Fehler zu erfassen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständlich" kontrollierbare asynchrone Ausführungen!

## Einführung in Mongoose

Dieser Abschnitt bietet eine Übersicht darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Diese Einführung ist stark von dem [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird wie jede andere Abhängigkeit in Ihr Projekt (**package.json**) installiert - mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Das Installieren von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, installiert jedoch nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den [MongoDB Atlas](https://www.mongodb.com/) cloud-basierten _Database as a Service_ Free-Tier verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht für das Tutorial Sinn, da es die "Installation" betriebssystemunabhängig ermöglicht (Database as a Service ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden).

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und eine Verbindung zu einer lokal gehosteten Datenbank mit `mongoose.connect()` herstellen, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Verbindung zu einer im Internet gehosteten Datenbank herstellen).

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
> Wie in dem Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, `awaiten` wir hier das von der `connect()`-Methode zurückgegebene Promise in einer `async`-Funktion.
> Wir verwenden den `catch()`-Handler des Promise, um etwaige Fehler beim Herstellen der Verbindung zu behandeln, aber wir hätten auch `main()` innerhalb eines `try...catch`-Blocks aufrufen können.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form von Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückgegeben wird; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie es mit `asPromise()` aufrufen, um ein Promise zu erhalten (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies weiter unten noch genauer erörtern).

Schemas werden dann mithilfe der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell mappt auf eine _Collection_ von _Documents_ in der MongoDB-Datenbank. Die Dokumente enthalten die im Modell-`Schema` definierten Felder/Schemas.

#### Definieren von Schemas

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren können. Zuerst `require()` Sie mongoose und verwenden dann den Schema-Konstruktor, um eine neue Instanz des Schemas zu erstellen, wobei Sie die verschiedenen Felder im Objekt-Parameter des Konstruktors definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und anderer Methoden.

#### Erstellen eines Modells

Modelle werden aus Schemas mit der `mongoose.model()`-Methode erstellt:

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

Das erste Argument ist der Singularname der Collection, die für Ihr Modell erstellt wird (Mongoose wird die Datenbank-Collection für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Modelle verwenden](#modelle_verwenden) und beim Erstellen unserer Ansichten tun können.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispiel-Schema, das viele der häufigen Feldtypen und wie sie deklariert werden zeigt, ist unten zu sehen.

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

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen an diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne einen angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von Objekten eines beliebigen Typs haben.

Der Code zeigt außerdem beide Möglichkeiten zur Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validierer (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben gesetzt oder getrimmt werden sollten (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu den Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumente).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validierer, und sowohl synchrone als auch asynchrone Validierer. Es ermöglicht Ihnen, sowohl den akzeptablen Bereich von Werten als auch die Fehlermeldung bei Validierungsfehlern in allen Fällen anzugeben.

Die eingebauten Validierer umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validierer. Dieser wird verwendet, um anzugeben, ob das Feld geliefert werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validierer.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das Beispiel unten (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validierertypen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die aber nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle Eigenschaft für den vollständigen Namen aus einem Vor- und Nachnamensfeld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu generieren, wenn er in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die Mongoose [Kettbare Abfrage-API](https://mongoosejs.com/docs/queries.html) zu erweitern (zum Beispiel können Sie eine Abfrage "byName" hinzufügen zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden).

### Modelle verwenden

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die unten stehenden Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch` Block zur Fehlerbehandlung sind aus Gründen der Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Modifizieren von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

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

Jedes Modell hat eine zugehörige Verbindung (diese wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Sie können nach Datensätzen mit Abfragemethoden suchen, wobei die Abfragebedingungen als JSON-Dokument angegeben werden. Das Codefragment unten zeigt, wie Sie möglicherweise alle Sportler in einer Datenbank finden, die Tennis spielen, und nur die Felder für Sportler _name_ und _age_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an (sport), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Sportler zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** für eine Suche ist — aber es könnte ein Misserfolgsfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen zu erstellen, bevor Sie es mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mithilfe des Punktoperators (.) zusammenketten, anstatt sie separat hinzuzufügen.
Das folgende Codefragment entspricht unserer obigen Abfrage mit einer zusätzlichen Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) holt alle übereinstimmenden Datensätze, aber oft möchten Sie nur einen Treffer erhalten. Die folgenden Methoden suchen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet einen einzelnen Datensatz anhand der `id` oder Kriterien und aktualisiert oder entfernt ihn. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), mit der Sie die Anzahl der mit Bedingungen übereinstimmenden Elemente abrufen können. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modell-Instanz zu einer anderen mithilfe des `ObjectId`-Schemafeldes erstellen oder von einem Dokument zu vielen mithilfe eines Arrays von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Beispielsweise definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzigen Autor haben.
Die Eigenschaft `ref` sagt dem Schema, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen auf das zugehörige Dokument speichern, indem wir `_id`-Wert zuweisen.
Unten erstellen wir einen Autor und dann eine Geschichte und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen verkomplizieren müssen.
> Wenn einer der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode behandelt das separat (in der Regel in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Informationen des Autors in den Geschichte-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserer Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir also alle Geschichten von einem bestimmten Autor erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Stories-Array hinzuzufügen, aber das würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen, die Autoren und Geschichten betreffen, gepflegt werden müssten.
>
> Ein besserer Weg ist, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um danach in den Autor-Feldern aller Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie wissen müssen, um in diesem Tutorial mit verwandten Elementen zu arbeiten. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemas und Modelle mit einer beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in einem eigenen Modul (Datei) zu definieren und dann die Methode zur Erstellung des Modells zu exportieren.
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

Sie können dann das Modell in andere Dateien einbinden und sofort verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nun, da wir etwas über Mongoose und die Gestaltung unserer Modelle wissen, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_-Website zu beginnen. Das erste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudbasierte Sandbox-Datenbank verwenden. Diese Datenbankstufe wird nicht als für Produktionswebsites geeignet betrachtet, da sie keine Redundanz hat, aber sie ist großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Database as a Service_-Anbieter ist, den Sie möglicherweise als Ihre Produktionsdatenbank wählen würden (weitere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas)).

> [!NOTE]
> Wenn Sie möchten, können Sie lokal eine MongoDB-Datenbank einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Die restlichen Anweisungen in diesem Artikel wären ähnlich, abgesehen von dem Datenbank-URL, den Sie beim Herstellen der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und ihre Nutzungsbedingungen anerkennen).

Nach dem Einloggen werden Sie zum [Startbildschirm](https://cloud.mongodb.com/v2) geleitet:

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Bereitstellen Ihres Clusters_ geöffnet.
   Klicken Sie auf das **M0 FREE**-Optionstemplate.

   ![Wählen Sie eine Bereitstellungsoption bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir belassen es bei `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das _Preload sample dataset_ Kontrollkästchen, da wir später unsere eigenen Beispieldaten importieren werden
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Deployment erstellen** (die Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Stellen Sie die Zugangsregeln auf dem Sicherheits-Schnellstart-Bildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Verwenden Sie so wenig wie möglich Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose den Verbindungsstring möglicherweise nicht richtig parst.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer zu erlauben
   - Geben Sie `0.0.0.0/0` in das IP-Adressfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall her zulassen möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu beschränken, die mit Ihrer Datenbank und anderen Ressourcen verbunden werden können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Beenden und Schließen**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu den Datenbanken, nachdem Sie Zugangsregeln auf MongoDB Atlas festgelegt haben](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_-Bildschirm zurück. Klicken Sie auf den Abschnitt _Datenbank_ im Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Einrichten einer Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Sammlungen_ geöffnet. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Datenbank erstellen_ geöffnet.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, und Ihre Datenbank wurde erstellt.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf den Tab _Übersicht_, um zur Clusterübersicht zurückzukehren.

10. Vom Cluster0 _Übersicht_-Bildschirm aus klicken Sie auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung, nachdem Sie ein Cluster in MongoDB Atlas eingerichtet haben.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Mit Cluster0 verbinden_ geöffnet.

    ![Wählen Sie die Verbindung "Short SRV" beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Driver_, dann den Treiber **Node.js** und die _Version_, wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopier**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihrem lokalen Texteditor ein.
    - Ersetzen Sie `<password>` Platzhalter im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei, die diesen String enthält, irgendwo sicher.

Sie haben nun die Datenbank erstellt und haben eine URL (mit Benutzername und Passwort), die verwendet werden kann, um darauf zuzugreifen.
Diese sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits getan, als Sie die [Mongoose-Einführung](#installation_von_mongoose_und_mongodb) oben gelesen haben.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port festlegen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den String der Datenbank-URL ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank darstellt (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie in der [Mongoose-Einführung](#verbindung_zu_mongodb_herstellen) oben diskutiert, erstellt dieser Code die Standardverbindung zur Datenbank und meldet etwaige Fehler in der Konsole.

> [!NOTE]
> Wir könnten den Datenbankverbindungscode in unseren **app.js**-Code einfügen.
> Das Platzieren im Einstiegspunkt der Anwendung entkoppelt die Anwendung und die Datenbank, was es einfacher macht, eine andere Datenbank zum Ausführen von Testcode zu verwenden.

Beachten Sie, dass das harte Kodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun dies hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Lecken dieser Details sensible Informationen gefährdet oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn [Bereitstellung in die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir definieren ein separates Modul für jedes Modell, wie [oben diskutiert](#one_schemamodel_per_file).
Beginnen Sie mit dem Erstellen eines Ordners für unsere Modelle im Projektstammverzeichnis (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autor-Modell

Kopieren Sie den Autor-Schema-Code unten und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor mit `String` SchemaTypes für den Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen) und `Date` Feldern für das Geburts- und Sterbedatum.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema namens "url" erklärt, das die absolute URL zurückgibt, die benötigt wird, um eine bestimmte Instanz des Modells zu erhalten - wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Deklaration unserer URLs als ein virtuelles in dem Schema ist eine gute Idee, da dann die URL für ein Element nur an einer Stelle geändert werden muss.
> An diesem Punkt würde ein Link unter Verwendung dieser URL nicht funktionieren, da wir noch keine Routenverarbeitungscode für individuelle Modellinstanzen haben.
> Wir werden diese im späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buch-Modell

Kopieren Sie den `Book`-Schema-Code unten und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Der größte Teil davon ist dem Autor-Modell ähnlich - wir haben ein Schema mit einer Reihe von String-Feldern und einem virtuellen für den Abruf der URL spezifischer Buchdatensätze deklariert und das Modell exportiert.

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

Der Hauptunterschied besteht hier darin, dass wir zwei Referenzen zu anderen Modellen erstellt haben:

- Author ist ein Verweis auf ein einzelnes `Author` Model-Objekt und wird benötigt.
- Genre ist ein Verweis auf ein Array von `Genre` Model-Objekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz-Modell

Kopieren Sie schließlich den `BookInstance`-Schema-Code unten und fügen Sie ihn in Ihre **./models/bookinstance.js** Datei ein.
Die `BookInstance` repräsentiert ein spezifisches Buch, das jemand ausleihen könnte und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurück erwartet wird, und "Imprimatur" (oder Version) Details.

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

- `enum`: Dies ermöglicht es uns, die zulässigen Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher zu spezifizieren (die Verwendung eines Enums bedeutet, dass wir Tippfehler und beliebige Werte für unseren Status vermeiden können).
- `default`: Wir verwenden `default`, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standard-`due_back`-Datum auf `jetzt` zu setzen (beachten Sie, wie Sie die Datum-Funktion beim Festlegen des Datums aufrufen können!).

Alles andere sollte uns von unseren bisherigen Schemas vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie des Buches, z.B. ob es Belletristik oder Sachbücher sind, Romane oder Militärgeschichte usw.).

Die Definition wird sehr ähnlich zu den anderen Modellen sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie ein [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, benannt `url`.
- Exportieren Sie das Modell.

## Testen — einige Artikel erstellen

Das war's. Wir haben jetzt alle Modelle für die Webseite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) in Ihrem _express-locallibrary-tutorial_ Verzeichnis (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit Node in Ihrer Kommandozeile aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie vorher im Platzhalter _insert_your_database_url_here_ in `app.js` ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > Unter anderen Betriebssystemen müssen Sie möglicherweise einfache (') Anführungszeichen verwenden.

3. Das Skript sollte bis zum Abschluss ausgeführt werden und die Elemente beim Erstellen im Terminal anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu splitten und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schemas und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Webseite zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir mehrere Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns mit dem Erstellen einiger Seiten zum Anzeigen dieser Objekte befassen.

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
