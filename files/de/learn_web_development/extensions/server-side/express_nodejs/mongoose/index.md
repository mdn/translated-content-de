---
title: "Express-Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose)"
short-title: "3: Datenbanken mit Mongoose verwenden"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken und ihre Verwendung mit Node-/Express-Anwendungen ein. Anschließend zeigt er, wie Sie mit [Mongoose](https://mongoosejs.com/) den Datenbankzugriff für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) bereitstellen können. Er erläutert, wie Objektschemata und Modelle deklariert werden, welche wichtigen Feldtypen es gibt und wie die grundlegende Validierung funktioniert. Außerdem zeigt er kurz einige der wichtigsten Möglichkeiten, auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Eine Website-Grundstruktur erstellen</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>Sie können eigene Modelle mit Mongoose entwerfen und erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Bibliotheksmitarbeitende werden die LocalLibrary-Website verwenden, um Informationen über Bücher und ausleihende Personen zu speichern. Bibliotheksmitglieder werden damit Bücher durchstöbern und suchen, die Verfügbarkeit von Exemplaren prüfen und diese anschließend reservieren oder ausleihen. Um Informationen effizient zu speichern und abzurufen, verwenden wir eine _Datenbank_.

Express-Anwendungen können viele verschiedene Datenbanken verwenden. Auch für **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) – also das Erstellen, Lesen, Aktualisieren und Löschen – gibt es verschiedene Ansätze. Dieses Tutorial gibt einen kurzen Überblick über einige Möglichkeiten und erläutert anschließend die ausgewählten Verfahren im Detail.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede Datenbank verwenden, die _Node_ unterstützt (_Express_ selbst legt keine zusätzlichen Verhaltensweisen oder Anforderungen für die Datenbankverwaltung fest). Es gibt [viele verbreitete Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Wahl einer Datenbank sollten Sie Aspekte wie Einarbeitungszeit, Produktivität, Leistung, Aufwand für Replikation und Backups, Kosten und Unterstützung durch die Community berücksichtigen. Es gibt zwar nicht die eine „beste“ Datenbank, aber fast jede der verbreiteten Lösungen sollte für eine kleine bis mittelgroße Website wie unsere LocalLibrary gut geeignet sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Wie interagiere ich am besten mit einer Datenbank?

Es gibt zwei übliche Ansätze für die Interaktion mit einer Datenbank:

- Die native Abfragesprache der Datenbank verwenden, beispielsweise SQL.
- Einen Object Relational Mapper („ORM“) oder Object Document Mapper („ODM“) verwenden. Diese stellen die Daten der Website als JavaScript-Objekte dar, die anschließend auf die zugrunde liegende Datenbank abgebildet werden. Manche ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bereitstellen.

Die höchste _Leistung_ lässt sich mit SQL oder der jeweiligen Abfragesprache der Datenbank erzielen. Object Mapper sind häufig langsamer, weil sie Objekte mithilfe von Übersetzungscode auf das Datenbankformat abbilden. Dabei verwenden sie möglicherweise nicht die effizientesten Datenbankabfragen. Das gilt insbesondere, wenn ein Mapper verschiedene Datenbank-Backends unterstützt und deshalb bei den unterstützten Datenbankfunktionen größere Kompromisse eingehen muss.

Ein ORM/ODM hat den Vorteil, dass Programmierende weiterhin in JavaScript-Objekten statt in Datenbankkonzepten denken können. Das ist besonders hilfreich, wenn Sie mit verschiedenen Datenbanken arbeiten müssen – auf derselben Website oder auf unterschiedlichen Websites. Außerdem bieten ORMs/ODMs einen naheliegenden Ort für die Datenvalidierung.

> [!NOTE]
> Der Einsatz von ODMs/ORMs senkt häufig die Entwicklungs- und Wartungskosten! Sofern Sie nicht sehr gut mit der nativen Abfragesprache vertraut sind oder die Leistung oberste Priorität hat, sollten Sie den Einsatz eines ODM ernsthaft erwägen.

### Welches ORM/ODM sollte ich verwenden?

Auf der npm-Paketwebsite gibt es viele ODM-/ORM-Lösungen. Eine Auswahl finden Sie unter den Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm).

Zu den Lösungen, die zum Zeitpunkt der Erstellung dieses Artikels verbreitet waren, gehören:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein Werkzeug zur Objektmodellierung für [MongoDB](https://www.mongodb.com/), das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten Web-Framework [Sails](https://sailsjs.com/) hervorgegangen ist. Es bietet eine einheitliche API für den Zugriff auf zahlreiche Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl Promise-basierte als auch herkömmliche Callback-Schnittstellen sowie Unterstützung für Transaktionen, Eager Loading und Nested Eager Loading von Beziehungen, polymorphe Assoziationen und Eins-zu-eins-, Eins-zu-viele- und Viele-zu-viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Erleichtert die Nutzung des vollen Funktionsumfangs von SQL und der zugrunde liegenden Datenbank-Engine (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein Promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Beziehungen, Lesereplikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für Node.js. Es unterstützt MySQL, SQLite und Postgres und erleichtert die Arbeit mit Datenbanken durch einen objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): GraphQL ist in erster Linie eine Abfragesprache für RESTful APIs. Es ist sehr verbreitet und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Bei der Auswahl einer Lösung sollten Sie grundsätzlich sowohl die angebotenen Funktionen als auch die Aktivität der Community berücksichtigen – etwa Downloads, Beiträge, Fehlermeldungen und die Qualität der Dokumentation. Zum Zeitpunkt der Erstellung dieses Artikels ist Mongoose mit Abstand das verbreitetste ODM und eine sinnvolle Wahl, wenn Sie MongoDB als Datenbank verwenden.

### Mongoose und MongoDB für die LocalLibrary verwenden

Für das Beispiel _LocalLibrary_ und den Rest dieses Themenbereichs verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose dient als Schnittstelle zu [MongoDB](https://www.mongodb.com/company/what-is-mongodb), einer quelloffenen [NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank mit einem dokumentorientierten Datenmodell. Eine „Collection“ von „Dokumenten“ in einer MongoDB-Datenbank [entspricht ungefähr](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer „Tabelle“ mit „Zeilen“ in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt. Ein Grund dafür ist, dass die Speicherung und Abfrage von Dokumenten JSON stark ähnelt und JavaScript-Entwickelnden daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden. Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) sind allerdings leichter zu nutzen und zu verstehen, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie Sie die Mongoose-Schemata und -Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definieren und darauf zugreifen.

## Die LocalLibrary-Modelle entwerfen

Bevor Sie mit der Implementierung der Modelle beginnen, sollten Sie sich einige Minuten Zeit nehmen, um über die zu speichernden Daten und die Beziehungen zwischen den verschiedenen Objekten nachzudenken.

Wir wissen, dass wir Informationen zu Büchern speichern müssen – Titel, Zusammenfassung, Autor, Genre und ISBN – und dass möglicherweise mehrere Exemplare verfügbar sind, jeweils mit global eindeutigen IDs, Verfügbarkeitsstatus und weiteren Angaben. Vielleicht müssen wir mehr Informationen über einen Autor als nur seinen Namen speichern. Außerdem kann es mehrere Autoren mit gleichen oder ähnlichen Namen geben. Die Informationen sollen sich nach Buchtitel, Autor, Genre und Kategorie sortieren lassen.

Beim Entwurf Ihrer Modelle ist es sinnvoll, für jedes „Objekt“, also jede Gruppe zusammengehöriger Informationen, ein eigenes Modell anzulegen. In diesem Fall bieten sich Bücher, Buchexemplare und Autoren an.

Sie können Modelle auch für Optionen in Auswahllisten verwenden, beispielsweise in einem Dropdown-Menü, statt diese Optionen fest in die Website einzubauen. Das empfiehlt sich besonders, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Ein gutes Beispiel sind Genres wie Fantasy oder Science-Fiction.

Nachdem wir uns für Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Das folgende UML-Assoziationsdiagramm zeigt die Modelle, die wir in diesem Fall definieren werden, als Kästen. Wie oben beschrieben, haben wir Modelle für Bücher (die allgemeinen Angaben zum Buch), Buchexemplare (den Status bestimmter physischer Exemplare im System) und Autoren vorgesehen. Außerdem haben wir uns für ein Genre-Modell entschieden, damit Werte dynamisch erstellt werden können. Für `BookInstance:status` legen wir dagegen kein eigenes Modell an: Wir definieren die zulässigen Werte fest im Code, weil wir keine Änderungen daran erwarten. Jeder Kasten enthält den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen einschließlich ihrer _Multiplizitäten_. Die Zahlen im Diagramm geben an, wie viele Instanzen eines Modells mindestens und höchstens an einer Beziehung beteiligt sein können. Die Verbindungslinie zwischen den Kästen zeigt beispielsweise eine Beziehung zwischen `Book` und `Genre`. Die Zahlen beim Modell `Book` besagen, dass einem `Genre` null oder mehr `Book`-Instanzen zugeordnet sein können – beliebig viele. Die Zahlen am anderen Ende der Linie neben `Genre` besagen, dass einem Buch null oder mehr `Genre`-Instanzen zugeordnet sein können.

> [!NOTE]
> Wie unten in unserer [Mongoose-Einführung](#einführung_in_mongoose) erläutert, ist es oft besser, das Feld, das die Beziehung zwischen Dokumenten oder Modellen definiert, nur in _einem_ Modell anzulegen. Die umgekehrte Beziehung können Sie weiterhin ermitteln, indem Sie im anderen Modell nach der zugehörigen `_id` suchen. Hier haben wir die Beziehungen zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema definiert, die Beziehung zwischen `Book`/`BookInstance` dagegen im `BookInstance`-Schema. Diese Entscheidung war in gewissem Maße beliebig – das Feld hätte genauso gut im jeweils anderen Schema stehen können.

![Mongoose-Bibliotheksmodell mit korrekten Kardinalitäten](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung in die Definition und Verwendung von Modellen. Überlegen Sie beim Lesen, wie wir die einzelnen Modelle im obigen Diagramm erstellen werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Suchen, Aktualisieren oder Löschen von Datensätzen sind asynchron. Das bedeutet, dass die Methoden sofort zurückkehren. Der Code, der Erfolg oder Fehlschlag verarbeitet, wird erst später ausgeführt, wenn der Vorgang abgeschlossen ist. Während der Server auf den Abschluss des Datenbankvorgangs wartet, kann anderer Code ausgeführt werden. So kann der Server weiterhin auf andere Anfragen reagieren.

JavaScript bietet verschiedene Mechanismen für asynchrones Verhalten. Früher wurden an asynchrone Methoden häufig [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) übergeben, um Erfolgs- und Fehlerfälle zu behandeln. In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt. Promises sind Objekte, die eine asynchrone Methode sofort zurückgibt und die ihren zukünftigen Zustand repräsentieren. Sobald der Vorgang abgeschlossen ist, erhält das Promise-Objekt einen endgültigen Zustand: Es wird entweder mit einem Ergebnis erfüllt oder aufgrund eines Fehlers abgelehnt.

Es gibt zwei wesentliche Möglichkeiten, Code auszuführen, sobald ein Promise seinen endgültigen Zustand erreicht. Wir empfehlen Ihnen, [Promises verwenden](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um sich einen Überblick über beide Ansätze zu verschaffen. In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf den Abschluss eines Promise zu warten. Dadurch wird asynchroner Code besser lesbar und verständlicher.

Bei diesem Ansatz markieren Sie eine Funktion mit `async function` als asynchron und verwenden innerhalb der Funktion `await` für Methoden, die ein Promise zurückgeben. Bei der Ausführung der asynchronen Funktion wird diese an der ersten `await`-Anweisung angehalten, bis das Promise seinen endgültigen Zustand erreicht. Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion währenddessen zurück, sodass der darauf folgende Code ausgeführt werden kann. Wenn das Promise später abgeschlossen ist, liefert der `await`-Ausdruck innerhalb der asynchronen Funktion das Ergebnis zurück. Wurde das Promise abgelehnt, wird stattdessen ein Fehler ausgelöst. Anschließend läuft der Code in der asynchronen Funktion weiter, bis er entweder auf ein weiteres `await` trifft und erneut angehalten wird oder bis der gesamte Code der Funktion ausgeführt wurde.

Das folgende Beispiel zeigt, wie das funktioniert. `myFunction()` ist eine asynchrone Funktion mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block um die `await`-Ausdrücke. Bei der Ausführung von `myFunction()` wird der Code bei `methodThatReturnsPromise()` angehalten, bis das Promise erfüllt ist. Dann läuft er bei `functionThatReturnsPromise()` weiter und wartet erneut. Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird. Das geschieht, wenn das von einer der beiden Methoden zurückgegebene Promise abgelehnt wird.

```js
async function myFunction() {
  try {
    // …
    await someObject.methodThatReturnsPromise();
    // …
    await functionThatReturnsPromise();
    // …
  } catch (e) {
    // error handling code
  }
}

myFunction();
```

Eine asynchrone Funktion gibt ein Promise zurück, das abgelehnt wird, wenn ein Fehler innerhalb der Funktion nicht abgefangen wird. Um diesen Fehler im aufrufenden Code abzufangen, verwenden Sie die Methode [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) des zurückgegebenen Promise oder rufen die Funktion mit `await` innerhalb eines `try...catch`-Blocks auf. Ein Funktionsaufruf in einem `try...catch`-Block ohne `await` fängt die Ablehnung nicht ab. Erst `await` wandelt ein zurückgegebenes, abgelehntes Promise in einen ausgelösten Fehler um.

Die obigen asynchronen Methoden werden nacheinander ausgeführt. Wenn sie nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen. Dafür verwenden Sie die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Sie nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück. Dieses Promise wird erfüllt, wenn alle übergebenen Promises erfüllt sind. Sein Ergebnis ist ein Array mit deren Ergebnissen. Wird eines der übergebenen Promises abgelehnt, wird auch das zurückgegebene Promise mit dem Grund dieser ersten Ablehnung abgelehnt.

Der folgende Code zeigt, wie das funktioniert. Zunächst gibt es zwei Funktionen, die Promises zurückgeben. Mithilfe des von `Promise.all()` zurückgegebenen Promise warten wir mit `await`, bis beide abgeschlossen sind. Danach liefert `await` das Ergebnis-Array zurück, und die Funktion läuft bis zum nächsten `await` weiter. Dort wartet sie, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise seinen endgültigen Zustand erreicht. Um Fehler abzufangen, würden Sie an das von `myFunction()` zurückgegebene Promise einen `catch()`-Handler anhängen.

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

Promises mit `await`/`async` ermöglichen eine flexible und zugleich verständliche Steuerung asynchroner Abläufe!

## Einführung in Mongoose

Dieser Abschnitt gibt einen Überblick darüber, wie Sie Mongoose mit einer MongoDB-Datenbank verbinden, ein Schema und ein Modell definieren und grundlegende Abfragen ausführen.

> [!NOTE]
> Diese Einführung orientiert sich stark am [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und an der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Mongoose und MongoDB installieren

Mongoose wird wie jede andere Abhängigkeit mit npm in Ihrem Projekt (**package.json**) installiert. Führen Sie dazu im Projektordner folgenden Befehl aus:

```bash
npm install mongoose
```

Bei der Installation von _Mongoose_ werden alle seine Abhängigkeiten installiert, einschließlich des MongoDB-Datenbanktreibers. MongoDB selbst wird jedoch nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme herunterladen und lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den kostenlosen Tarif des cloudbasierten _Database-as-a-Service_-Angebots [MongoDB Atlas](https://www.mongodb.com/). Er eignet sich für die Entwicklung und ist für dieses Tutorial sinnvoll, weil die „Installation“ damit unabhängig vom Betriebssystem ist. Database as a Service ist auch eine Möglichkeit für Ihre Produktionsdatenbank.

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank. Sie können eine lokal gehostete Datenbank mit `require()` einbinden und mit `mongoose.connect()` eine Verbindung herstellen, wie unten gezeigt. Für das Tutorial verwenden wir stattdessen eine im Internet gehostete Datenbank.

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) erläutert, warten wir hier innerhalb einer `async`-Funktion mit `await` auf das von der Methode `connect()` zurückgegebene Promise.
> Mit dem `catch()`-Handler des Promise behandeln wir Fehler beim Verbindungsversuch. Alternativ könnten wir `await main()` innerhalb eines `try...catch`-Blocks in einer anderen `async`-Funktion verwenden.

Das standardmäßige `Connection`-Objekt erhalten Sie über `mongoose.connection`. Wenn Sie weitere Verbindungen benötigen, können Sie `mongoose.createConnection()` verwenden. Diese Methode nimmt einen Datenbank-URI im gleichen Format wie `connect()` entgegen – mit Host, Datenbank, Port, Optionen usw. – und gibt ein `Connection`-Objekt zurück. Beachten Sie, dass `createConnection()` sofort zurückkehrt. Wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie mit `asPromise()` ein Promise erhalten (`mongoose.createConnection(mongoDB).asPromise()`).

### Modelle definieren und erstellen

Modelle werden über die Schnittstelle `Schema` _definiert_. Mit dem Schema legen Sie die Felder fest, die in jedem Dokument gespeichert werden, sowie deren Validierungsanforderungen und Standardwerte. Darüber hinaus können Sie statische Hilfsmethoden und Instanzmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern. Auch virtuelle Eigenschaften sind möglich: Sie lassen sich wie andere Felder verwenden, werden aber nicht tatsächlich in der Datenbank gespeichert. Darauf gehen wir weiter unten näher ein.

Anschließend werden die Schemata mit der Methode `mongoose.model()` zu Modellen „kompiliert“. Mit einem Modell können Sie Objekte des betreffenden Typs suchen, erstellen, aktualisieren und löschen.

> [!NOTE]
> Jedes Modell entspricht einer _Collection_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die Felder und Schematypen, die im `Schema` des Modells definiert sind.

#### Schemata definieren

Der folgende Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren können. Zunächst binden Sie mongoose mit `require()` ein. Anschließend erstellen Sie mit dem Schema-Konstruktor eine neue Schemainstanz und definieren die verschiedenen Felder im Objektparameter des Konstruktors.

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

Im obigen Beispiel gibt es nur zwei Felder: einen String und ein Datum. In den nächsten Abschnitten stellen wir weitere Feldtypen sowie Validierung und andere Methoden vor.

#### Ein Modell erstellen

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

Das erste Argument ist der Name der Collection, die für Ihr Modell erstellt wird, in der Einzahl. Im obigen Beispiel erstellt Mongoose die Datenbank-Collection für das Modell _SomeModel_. Das zweite Argument ist das Schema, aus dem das Modell erstellt werden soll.

> [!NOTE]
> Nachdem Sie Ihre Modellklassen definiert haben, können Sie damit Datensätze erstellen, aktualisieren und löschen sowie alle Datensätze oder bestimmte Teilmengen abfragen. Wie das funktioniert, zeigen wir im Abschnitt [Modelle verwenden](#modelle_verwenden) und beim Erstellen unserer Ansichten.

#### Schematypen (Felder)

Ein Schema kann beliebig viele Felder enthalten. Jedes entspricht einem Feld in den Dokumenten, die in _MongoDB_ gespeichert sind. Das folgende Beispielschema zeigt viele der üblichen Feldtypen und wie sie deklariert werden.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) – die Bezeichnungen nach „type:“ oder nach Feldnamen – sind selbsterklärend. Ausnahmen sind:

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Ein Buch könnte damit beispielsweise sein Autor-Objekt referenzieren. Das Feld enthält tatsächlich die eindeutige ID (`_id`) des angegebenen Objekts. Mit der Methode `populate()` können wir die zugehörigen Informationen bei Bedarf laden.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Auf diesen Modellen können Sie JavaScript-Array-Operationen ausführen, etwa push, pop oder unshift. Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten. Arrays können jedoch Objekte beliebigen Typs enthalten.

Der Code zeigt außerdem zwei Möglichkeiten, ein Feld zu deklarieren:

- Feld-_Name_ und -_Typ_ als Schlüssel-Wert-Paar, wie bei den Feldern `name`, `binary` und `living`.
- Feld-_Name_, gefolgt von einem Objekt, das den `type` und weitere _Optionen_ für das Feld definiert. Zu den Optionen gehören beispielsweise:
  - Standardwerte.
  - Integrierte Validatoren, etwa Höchst- und Mindestwerte, sowie eigene Validierungsfunktionen.
  - Die Angabe, ob das Feld erforderlich ist.
  - Die Angabe, ob `String`-Felder automatisch in Klein- oder Großbuchstaben umgewandelt oder von Leerzeichen an den Rändern befreit werden sollen, beispielsweise `{ type: String, lowercase: true, trim: true }`.

Weitere Informationen zu den Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet integrierte und benutzerdefinierte sowie synchrone und asynchrone Validatoren. In jedem Fall können Sie sowohl den zulässigen Wertebereich als auch die Fehlermeldung für eine fehlgeschlagene Validierung festlegen.

Zu den integrierten Validatoren gehören:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) verfügen über den integrierten Validator [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required). Mit ihm legen Sie fest, ob ein Feld angegeben werden muss, damit ein Dokument gespeichert werden kann.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) verfügen über die Validatoren [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>).
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) verfügen über:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Legt die zulässigen Werte für das Feld fest.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Legt einen regulären Ausdruck fest, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Stringlänge.

Das folgende Beispiel, leicht angepasst aus der Mongoose-Dokumentation, zeigt, wie Sie einige Validatortypen und Fehlermeldungen angeben können:

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

Ausführliche Informationen zur Feldvalidierung finden Sie unter [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie lesen und setzen können, die aber nicht dauerhaft in MongoDB gespeichert werden. Getter eignen sich zum Formatieren oder Kombinieren von Feldern. Setter sind nützlich, um einen einzelnen Wert für die Speicherung in mehrere Werte aufzuteilen. Das Beispiel in der Dokumentation setzt eine virtuelle Eigenschaft für den vollständigen Namen aus Feldern für Vor- und Nachnamen zusammen und zerlegt sie wieder. Das ist einfacher und übersichtlicher, als den vollständigen Namen bei jeder Verwendung in einem Template neu zusammenzusetzen.

> [!NOTE]
> In unserer Bibliotheksanwendung werden wir eine virtuelle Eigenschaft verwenden, um für jeden Modelldatensatz aus einem Pfad und dem `_id`-Wert des Datensatzes eine eindeutige URL zu erstellen.

Weitere Informationen finden Sie unter [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Query Helpers

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Query Helpers](https://mongoosejs.com/docs/guide.html#query-helpers) enthalten. Instanzmethoden und statische Methoden sind ähnlich. Der wesentliche Unterschied ist, dass eine Instanzmethode zu einem bestimmten Datensatz gehört und Zugriff auf das aktuelle Objekt hat. Mit Query Helpers können Sie die [verkettbare Query-Builder-API](https://mongoosejs.com/docs/queries.html) von mongoose erweitern. Beispielsweise können Sie neben den Methoden `find()`, `findOne()` und `findById()` eine Abfrage „byName“ hinzufügen.

### Modelle verwenden

Nachdem Sie ein Schema erstellt haben, können Sie daraus Modelle erstellen. Ein Modell repräsentiert eine durchsuchbare Collection von Dokumenten in der Datenbank. Die Instanzen des Modells repräsentieren einzelne Dokumente, die Sie speichern und abrufen können.

Im Folgenden geben wir einen kurzen Überblick. Weitere Informationen finden Sie unter [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der jeweiligen Methoden und von `await` – also den für die Methoden wesentlichen Code.
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern wurden der Übersichtlichkeit halber weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Dokumente erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und darauf [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) aufrufen. In den folgenden Beispielen gehen wir davon aus, dass `SomeModel` ein Modell mit einem einzigen Feld `name` ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Mit [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) können Sie die Modellinstanz auch beim Speichern erstellen. Im folgenden Beispiel erstellen wir nur eine Instanz. Wenn Sie ein Array von Objekten übergeben, können Sie mehrere Instanzen erstellen.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell ist einer Verbindung zugeordnet. Bei Verwendung von `mongoose.model()` ist das die Standardverbindung. Um Dokumente in einer anderen Datenbank zu erstellen, können Sie eine neue Verbindung anlegen und darauf `.model()` aufrufen.

Auf die Felder des neuen Datensatzes können Sie mit der Punktsyntax zugreifen und ihre Werte ändern. Um geänderte Werte in der Datenbank zu speichern, müssen Sie `save()` oder `update()` aufrufen.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Mit Abfragemethoden können Sie nach Datensätzen suchen. Die Abfragebedingungen geben Sie dabei als JSON-Dokument an. Der folgende Codeausschnitt zeigt, wie Sie alle Tennisspielenden in einer Datenbank finden und nur die Felder für ihren _Namen_ und ihr _Alter_ zurückgeben könnten. Hier geben wir nur ein Suchkriterium an, nämlich die Sportart. Sie können weitere Kriterien hinzufügen, reguläre Ausdrücke verwenden oder die Bedingungen ganz weglassen, um alle Sporttreibenden zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Denken Sie daran: Wenn eine Suche keine Ergebnisse liefert, ist das **kein Fehler**. Im Kontext Ihrer Anwendung kann es dennoch ein Fehlschlag sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge prüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben einen Wert vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück. Mit einem Query-Objekt können Sie eine Abfrage schrittweise aufbauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen. `exec()` führt die Abfrage aus und gibt ein Promise zurück, auf dessen Ergebnis Sie mit `await` warten können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Sie können dafür auch eine [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>)-Funktion verwenden. Außerdem können Sie alle Teile Ihrer Abfrage mit dem Punktoperator (.) verketten, statt sie einzeln hinzuzufügen. Der folgende Codeausschnitt entspricht der obigen Abfrage, enthält aber eine zusätzliche Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) liefert alle passenden Datensätze. Häufig möchten Sie jedoch nur einen Treffer erhalten. Die folgenden Methoden fragen jeweils einen einzelnen Datensatz ab:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Finden anhand der `id` oder anderer Kriterien ein einzelnes Dokument und aktualisieren oder entfernen es. Diese Hilfsfunktionen erleichtern das Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Mit der Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) können Sie außerdem ermitteln, wie viele Elemente bestimmten Bedingungen entsprechen. Das ist nützlich, wenn Sie Datensätze zählen möchten, ohne sie abzurufen.

Mit Abfragen können Sie noch viel mehr tun. Weitere Informationen finden Sie unter [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Mit verknüpften Dokumenten arbeiten – Population

Mit dem Schemafeld `ObjectId` können Sie von einem Dokument oder einer Modellinstanz auf eine andere verweisen. Ein Array von `ObjectIds` ermöglicht Verweise von einem Dokument auf mehrere andere. Das Feld speichert die ID des verknüpften Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie in einer Abfrage mit der Methode [`populate()`](https://mongoosejs.com/docs/populate.html) die ID durch die tatsächlichen Daten ersetzen.

Das folgende Schema definiert beispielsweise Autoren und Geschichten. Jeder Autor kann mehrere Geschichten haben; diese stellen wir als Array von `ObjectId` dar. Jede Geschichte kann genau einen Autor haben. Die Eigenschaft `ref` teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können Verweise auf ein verknüpftes Dokument speichern, indem wir den Wert seiner `_id` zuweisen. Im Folgenden erstellen wir einen Autor und dann eine Geschichte und weisen dem Autor-Feld der Geschichte die ID des Autors zu.

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
> Ein großer Vorteil dieser Programmierweise ist, dass wir den Hauptablauf unseres Codes nicht durch Fehlerprüfungen verkomplizieren müssen.
> Wenn einer der `save()`-Vorgänge fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst.
> Unser Code zur Fehlerbehandlung kümmert sich separat darum, üblicherweise in einem `catch()`-Block. So bleibt die Absicht unseres Codes klar erkennbar.

Das Dokument unserer Geschichte verweist nun über die ID des Autor-Dokuments auf einen Autor. Um die Autoreninformationen zusammen mit dem Ergebnis für die Geschichte zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leserinnen und Leser haben vielleicht bemerkt, dass wir unserer Geschichte einen Autor zugewiesen, die Geschichte aber nicht zum Array `stories` des Autors hinzugefügt haben. Wie können wir dann alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, die Geschichte zum Array hinzuzufügen. Dann müssten wir die Information über die Beziehung zwischen Autoren und Geschichten allerdings an zwei Stellen pflegen.
>
> Besser ist es, die `_id` unseres _Autors_ zu ermitteln und mit `find()` im Autor-Feld aller Geschichten danach zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Damit wissen Sie fast alles, was Sie _für dieses Tutorial_ über die Arbeit mit verknüpften Elementen benötigen. Ausführlichere Informationen finden Sie unter [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Sie können Schemata und Modelle zwar in einer beliebigen Dateistruktur erstellen. Wir empfehlen jedoch nachdrücklich, jedes Modellschema in einem eigenen Modul (einer eigenen Datei) zu definieren und anschließend das Modell zu exportieren. Das wird hier gezeigt:

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

Sie können das Modell dann in anderen Dateien unmittelbar mit `require()` einbinden und verwenden. Im Folgenden sehen Sie, wie Sie damit alle Instanzen des Modells abrufen könnten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Die MongoDB-Datenbank einrichten

Nun wissen wir etwas darüber, was Mongoose kann und wie wir unsere Modelle entwerfen möchten. Jetzt können wir mit der Arbeit an der _LocalLibrary_-Website beginnen. Zunächst richten wir eine MongoDB-Datenbank ein, in der wir unsere Bibliotheksdaten speichern können.

Für dieses Tutorial verwenden wir die cloudgehostete Sandbox-Datenbank von [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe gilt nicht als geeignet für produktive Websites, weil sie keine Redundanz bietet. Für Entwicklung und Prototyping ist sie jedoch hervorragend geeignet. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist. Außerdem ist MongoDB Atlas ein beliebter _Database-as-a-Service_-Anbieter, den Sie durchaus auch für Ihre Produktionsdatenbank wählen könnten. Weitere verbreitete Anbieter zum Zeitpunkt der Erstellung dieses Artikels sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die übrigen Anweisungen in diesem Artikel wären ähnlich; lediglich beim Herstellen der Verbindung würden Sie eine andere Datenbank-URL angeben.
> Im Tutorial [Express-Tutorial Teil 7: Bereitstellung für den Produktivbetrieb](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/). Wir könnten aber genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden.

Zuerst müssen Sie bei MongoDB Atlas [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register). Das ist kostenlos; Sie müssen lediglich grundlegende Kontaktdaten eingeben und den Nutzungsbedingungen zustimmen.

Nach der Anmeldung gelangen Sie zur [Startseite](https://cloud.mongodb.com/v2):

1. Klicken Sie im Bereich _Overview_ auf die Schaltfläche **+ Create**.

   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch öffnet sich die Ansicht _Deploy your cluster_.
   Klicken Sie auf die Option **M0 FREE**.

   ![Eine Bereitstellungsoption in MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie nach unten, um die verschiedenen verfügbaren Optionen zu sehen.
   ![Einen Cloudanbieter in MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)
   - Unter _Cluster Name_ können Sie den Namen Ihres Clusters ändern. Für dieses Tutorial behalten wir `Cluster0` bei.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später eigene Beispieldaten importieren.
   - Wählen Sie in den Bereichen _Provider_ und _Region_ einen beliebigen Anbieter und eine Region aus. Je nach Region stehen unterschiedliche Anbieter zur Verfügung.
   - Tags sind optional. Wir verwenden hier keine.
   - Klicken Sie auf **Create deployment**. Die Erstellung des Clusters dauert einige Minuten.

4. Dadurch öffnet sich der Bereich _Security Quickstart_.
   ![Zugriffsregeln in der Ansicht „Security Quickstart“ von MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, mit denen Ihre Anwendung auf die Datenbank zugreifen soll. Im obigen Beispiel haben wir den neuen Benutzer „cooluser“ erstellt.
     Kopieren Sie die Zugangsdaten und bewahren Sie sie sicher auf, da wir sie später benötigen.
     Klicken Sie auf **Create User**.

     > [!NOTE]
     > Vermeiden Sie Sonderzeichen im Passwort Ihres MongoDB-Benutzers, da mongoose den Verbindungsstring sonst möglicherweise nicht richtig parst.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld „IP Address“ ein und klicken Sie auf **Add Entry**.
     Damit teilen Sie MongoDB mit, dass Sie den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist bewährte Praxis, die IP-Adressen einzuschränken, von denen Verbindungen zu Ihrer Datenbank und anderen Ressourcen hergestellt werden können. Hier erlauben wir Verbindungen von überall, weil wir noch nicht wissen, von wo aus die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf **Finish and Close**.

5. Daraufhin erscheint die folgende Ansicht. Klicken Sie auf **Go to Overview**.
   ![Nach dem Einrichten der Zugriffsregeln in MongoDB Atlas zur Übersicht wechseln.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur Ansicht _Overview_ zurück. Klicken Sie links im Menü _Deployment_ auf den Bereich _Database_. Klicken Sie anschließend auf **Browse Collections**.
   ![Eine Collection in MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch öffnet sich der Bereich _Collections_. Klicken Sie auf **Add My Own Data**.
   ![Eine Datenbank in MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dadurch öffnet sich die Ansicht _Create Database_.

   ![Angaben beim Erstellen einer Datenbank in MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie als Namen der neuen Datenbank `local_library` ein.
   - Geben Sie als Namen der Collection `Collection0` ein.
   - Klicken Sie auf **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bereich _Collections_ zurück, in dem Ihre erstellte Datenbank angezeigt wird.
   ![Bestätigung der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf den Tab _Overview_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie in der _Overview_-Ansicht von Cluster0 auf **Connect**.

    ![Nach dem Einrichten eines Clusters in MongoDB Atlas die Verbindung konfigurieren.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch öffnet sich die Ansicht _Connect to Cluster0_.

    ![Beim Einrichten einer Verbindung in MongoDB Atlas die kurze SRV-Verbindung auswählen.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_ und anschließend _Driver_ **Node.js** sowie die angezeigte _Version_ aus.
    - Installieren Sie den Treiber **NICHT**, auch wenn dies vorgeschlagen wird.
    - Klicken Sie auf das Symbol **Copy**, um den Verbindungsstring zu kopieren.
    - Fügen Sie ihn in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen „local_library“ vor den Optionen in den Pfad ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und verfügen über eine URL mit Benutzername und Passwort, über die Sie darauf zugreifen können. Sie sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und wechseln Sie in das Verzeichnis, in dem Sie die [Grundstruktur der LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben. Geben Sie den folgenden Befehl ein, um Mongoose und seine Abhängigkeiten zu installieren und zu Ihrer Datei **package.json** hinzuzufügen – sofern Sie dies nicht bereits beim Lesen der obigen [Mongoose-Einführung](#mongoose_und_mongodb_installieren) getan haben.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** im Stammverzeichnis Ihres Projekts und kopieren Sie den folgenden Text unter die Stelle, an der Sie den Port festlegen, also nach der Zeile `app.set("port", port);`. Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die URL Ihrer eigenen Datenbank. Verwenden Sie dazu die Informationen aus _MongoDB Atlas_.

```js
// Set up mongoose connection
const mongoose = require("mongoose");

const mongoDB = "insert_your_database_url_here";

connectMongoose()
  .then(startServer)
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

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
```

Wie oben in der [Mongoose-Einführung](#verbindung_zu_mongodb_herstellen) erläutert, stellt dieser Code die Standardverbindung zur Datenbank her und gibt etwaige Fehler auf der Konsole aus. Nach erfolgreichem Verbindungsaufbau ruft er außerdem die Funktion `startServer()` auf, die wir als Nächstes erstellen.

Die generierte Datei **bin/www** erstellt den HTTP-Server und beginnt sofort, auf Anfragen zu warten – unabhängig davon, ob die Datenbankverbindung erfolgreich hergestellt wurde. Suchen Sie weiter unten in derselben Datei nach folgendem Code:

```js
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
```

Ersetzen Sie ihn durch den folgenden Code. Dadurch werden das Erstellen und Starten des Servers in eine Funktion `startServer()` verschoben, die erst ausgeführt wird, nachdem `connectMongoose()` erfolgreich abgeschlossen wurde:

```js
/**
 * Create HTTP server and listen on provided port, on all network
 * interfaces, once the MongoDB connection is established.
 */

var server;

function startServer() {
  server = http.createServer(app);

  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
}
```

> [!NOTE]
> Wir hätten den Code für die Datenbankverbindung auch in **app.js** unterbringen können.
> Im Einstiegspunkt der Anwendung bleiben Anwendung und Datenbank voneinander entkoppelt. Das erleichtert es, für Tests eine andere Datenbank zu verwenden.

Beachten Sie, dass es nicht empfohlen wird, Datenbankzugangsdaten wie oben direkt im Quellcode zu hinterlegen. Wir tun es hier, um den grundlegenden Verbindungscode zu zeigen. Außerdem besteht während der Entwicklung kein erhebliches Risiko, dass durch die Offenlegung dieser Daten sensible Informationen preisgegeben oder beschädigt werden. Wie Sie dies sicherer umsetzen, zeigen wir bei der [Bereitstellung für den Produktivbetrieb](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Das LocalLibrary-Schema definieren

Wie [oben beschrieben](#one_schemamodel_per_file), definieren wir für jedes Modell ein eigenes Modul. Erstellen Sie zunächst im Projektstammverzeichnis einen Ordner für unsere Modelle (**/models**) und darin separate Dateien für die einzelnen Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den folgenden Schemacode für `Author` in Ihre Datei **./models/author.js**. Das Schema definiert für Vor- und Nachnamen `String`-SchemaTypes (Pflichtfelder mit maximal 100 Zeichen) sowie `Date`-Felder für Geburts- und Sterbedatum.

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

Außerdem haben wir für das AuthorSchema eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) namens „url“ deklariert. Sie gibt die absolute URL zurück, über die eine bestimmte Instanz des Modells abgerufen werden kann. Diese Eigenschaft verwenden wir in unseren Templates immer dann, wenn wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Unsere URLs als virtuelle Eigenschaften im Schema zu deklarieren, ist sinnvoll: So muss die URL eines Elements bei Änderungen nur an einer einzigen Stelle angepasst werden.
> Ein Link mit dieser URL würde derzeit noch nicht funktionieren, weil wir noch keinen Code für Routen zu einzelnen Modellinstanzen haben.
> Diese Routen richten wir in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den folgenden Schemacode für `Book` in Ihre Datei **./models/book.js**. Vieles ähnelt dem Author-Modell: Wir deklarieren ein Schema mit mehreren Stringfeldern und einer virtuellen Eigenschaft für die URL bestimmter Buchdatensätze und exportieren das Modell.

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

Der wichtigste Unterschied ist, dass wir zwei Verweise auf andere Modelle erstellt haben:

- author ist ein erforderlicher Verweis auf ein einzelnes `Author`-Modellobjekt.
- genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Dieses Objekt haben wir noch nicht deklariert!

### BookInstance-Modell

Kopieren Sie abschließend den folgenden Schemacode für `BookInstance` in Ihre Datei **./models/bookinstance.js**. Eine `BookInstance` repräsentiert ein bestimmtes Exemplar eines Buchs, das ausgeliehen werden kann. Sie enthält Informationen darüber, ob das Exemplar verfügbar ist, wann es voraussichtlich zurückgegeben wird, sowie Angaben zum „Imprint“ beziehungsweise zur Ausgabe.

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

Neu sind hier die folgenden Feldoptionen:

- `enum`: Damit legen wir die zulässigen Werte eines Strings fest. In diesem Fall verwenden wir die Option für den Verfügbarkeitsstatus unserer Bücher. So verhindern wir Schreibfehler und beliebige Werte für den Status.
- `default`: Damit setzen wir den Standardstatus neu erstellter Buchexemplare auf „Maintenance“ und das Standarddatum für `due_back` auf `now`. Beachten Sie, wie die Date-Funktion beim Festlegen des Datums aufgerufen werden kann.

Alles andere sollte Ihnen aus den bisherigen Schemata bekannt sein.

### Genre-Modell – Aufgabe

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres – also Buchkategorien wie Belletristik oder Sachbuch, Liebesroman oder Militärgeschichte.

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-SchemaType namens `name` enthalten, der das Genre beschreibt.
- Dieser Name muss angegeben werden und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) namens `url` für die URL des Genres.
- Exportieren Sie das Modell.

## Testen – einige Elemente erstellen

Das war's: Wir haben nun alle Modelle für die Website eingerichtet!

Um die Modelle zu testen und einige Beispielbücher sowie andere Elemente für die nächsten Artikel zu erstellen, führen wir jetzt ein _eigenständiges_ Skript aus, das Elemente jedes Typs erstellt:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr Verzeichnis _express-locallibrary-tutorial_ herunter oder erstellen Sie sie auf andere Weise. Sie sollte auf derselben Verzeichnisebene wie `package.json` liegen.

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript hilfreich sein. Für dieses Tutorial müssen Sie ihn jedoch nicht verstehen.

2. Führen Sie das Skript in Ihrer Eingabeaufforderung mit node aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank. Verwenden Sie dieselbe URL, mit der Sie zuvor den Platzhalter _insert_your_database_url_here_ in `app.js` ersetzt haben:

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") setzen.
   > Unter anderen Betriebssystemen benötigen Sie möglicherweise einfache Anführungszeichen (').

3. Das Skript sollte vollständig durchlaufen und die erstellten Elemente jeweils im Terminal anzeigen.

> [!NOTE]
> Öffnen Sie Ihre Datenbank in MongoDB Atlas im Tab _Collections_.
> Dort sollten Sie nun die einzelnen Collections für Books, Authors, Genres und BookInstances sowie deren Dokumente ansehen können.

## Zusammenfassung

In diesem Artikel haben wir die Grundlagen von Datenbanken und ORMs mit Node/Express kennengelernt und ausführlich behandelt, wie Mongoose-Schemata und -Modelle definiert werden. Mit diesem Wissen haben wir die Modelle `Book`, `BookInstance`, `Author` und `Genre` für die _LocalLibrary_-Website entworfen und implementiert.

Zum Schluss haben wir unsere Modelle getestet, indem wir mit einem eigenständigen Skript mehrere Instanzen erstellt haben. Im nächsten Artikel sehen wir uns an, wie Sie Seiten zur Anzeige dieser Objekte erstellen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schematypen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
