---
title: "Express-Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose)"
short-title: "3: Datenbanken mit Mongoose verwenden"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken und ihre Verwendung mit Node-/Express-Anwendungen ein. Anschließend zeigt er, wie [Mongoose](https://mongoosejs.com/) den Datenbankzugriff für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) bereitstellt. Er erklärt, wie Objektschemas und Modelle definiert werden, stellt die wichtigsten Feldtypen und grundlegende Validierung vor und zeigt einige der wichtigsten Möglichkeiten für den Zugriff auf Modelldaten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Eine Website-Grundstruktur erstellen</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eigene Modelle mit Mongoose entwerfen und erstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local-Library-Website nutzen, um Informationen über Bücher und Ausleihende zu speichern. Bibliotheksmitglieder werden damit Bücher durchstöbern und suchen, prüfen, ob Exemplare verfügbar sind, und diese anschließend reservieren oder ausleihen. Um Informationen effizient zu speichern und abzurufen, legen wir sie in einer _Datenbank_ ab.

Express-Anwendungen können viele verschiedene Datenbanken verwenden. Auch für **C**reate (Erstellen), **R**ead (Lesen), **U**pdate (Aktualisieren) und **D**elete (Löschen) – zusammen CRUD – gibt es mehrere Ansätze. Dieses Tutorial gibt einen kurzen Überblick über einige Möglichkeiten und erläutert anschließend die ausgewählten Verfahren im Detail.

### Welche Datenbanken kann ich verwenden?

_Express_-Anwendungen können jede von _Node_ unterstützte Datenbank verwenden. _Express_ selbst legt keine zusätzlichen Verhaltensweisen oder Anforderungen für die Datenbankverwaltung fest. Es gibt [viele gängige Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Wahl einer Datenbank sollten Sie unter anderem berücksichtigen, wie schnell Sie produktiv arbeiten können, wie steil die Lernkurve ist, wie leistungsfähig die Datenbank ist, wie einfach sie sich replizieren und sichern lässt und welche Kosten sowie Community-Unterstützung zu erwarten sind. Die eine „beste“ Datenbank gibt es nicht. Für eine kleine bis mittelgroße Website wie unsere Local Library sollte jedoch nahezu jede der gängigen Lösungen gut geeignet sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Wie interagiere ich am besten mit einer Datenbank?

Für die Interaktion mit einer Datenbank gibt es zwei gängige Ansätze:

- Die native Abfragesprache der Datenbank verwenden, beispielsweise SQL.
- Einen Object Relational Mapper („ORM“) oder Object Document Mapper („ODM“) verwenden. Diese stellen die Daten der Website als JavaScript-Objekte dar und ordnen sie anschließend der zugrunde liegenden Datenbank zu. Manche ORMs und ODMs sind an eine bestimmte Datenbank gebunden, andere stellen ein datenbankunabhängiges Backend bereit.

Die höchste _Leistung_ lässt sich mit SQL oder der jeweiligen Abfragesprache der Datenbank erzielen. Object Mapper sind häufig langsamer, weil sie mit Übersetzungscode zwischen Objekten und dem Datenbankformat vermitteln. Dabei verwenden sie möglicherweise nicht die effizientesten Datenbankabfragen. Das gilt besonders, wenn ein Mapper verschiedene Datenbank-Backends unterstützt und deshalb bei den unterstützten Datenbankfunktionen größere Kompromisse eingehen muss.

Ein ORM/ODM hat den Vorteil, dass Programmierende weiterhin in JavaScript-Objekten statt in Datenbankkonzepten denken können. Das ist besonders hilfreich, wenn Sie mit verschiedenen Datenbanken arbeiten müssen – auf derselben Website oder auf unterschiedlichen Websites. Außerdem bieten ORMs/ODMs einen naheliegenden Ort für die Datenvalidierung und können in der Regel TypeScript-Typen aus dem Datenschema ableiten.

> [!NOTE]
> Die Verwendung von ODMs/ORMs senkt häufig die Entwicklungs- und Wartungskosten! Sofern Sie mit der nativen Abfragesprache nicht sehr vertraut sind oder höchste Leistung nicht entscheidend ist, sollten Sie die Verwendung eines ODM ernsthaft in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Auf der Website des npm-Paketmanagers gibt es viele ODM-/ORM-Lösungen. Eine Auswahl finden Sie unter den Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm).

Einige Lösungen, die zum Zeitpunkt der Erstellung dieses Artikels beliebt waren:

- [Mongoose](https://mongoosejs.com/): Mongoose ist ein Werkzeug zur Objektmodellierung für [MongoDB](https://www.mongodb.com/), das für den Einsatz in einer asynchronen Umgebung entwickelt wurde.
- [Prisma ORM](https://www.prisma.io/orm): Definiert Modelle in einer eigenen Schemadatei und erzeugt daraus einen Datenbank-Client. Dadurch erhalten Sie Autovervollständigung und Typprüfung für Abfragen Ihrer eigenen Modelle. Migrationswerkzeuge helfen dabei, die Datenbankstruktur mit dem Schema synchron zu halten.
- [Drizzle ORM](https://orm.drizzle.team/docs/overview): Definiert Schemas direkt in TypeScript und bietet eine Abfrage-API, die sich eng an SQL orientiert. So können Entwicklerinnen und Entwickler mit SQL-Kenntnissen dieses Wissen für Joins und andere Abfragen nutzen und zugleich abgeleitete TypeScript-Typen erhalten, ohne einen separaten Datenbank-Client zu erzeugen.
- [TypeORM](https://typeorm.io/docs/guides/active-record-data-mapper/): Ordnet Datenbankeinträge JavaScript- oder TypeScript-Klassen zu. Sie können Abfragemethoden direkt in den Modellklassen unterbringen (Active Record) oder den Datenbankzugriff in separate Repositories auslagern (Data Mapper). So können Sie selbst entscheiden, wie Sie Persistenz und Anwendungslogik organisieren.
- [Sequelize](https://sequelize.org/): Ein Promise-basiertes ORM für Node.js und TypeScript. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet unter anderem zuverlässige Transaktionsunterstützung, Beziehungen und Lesereplikation.
- [GraphQL](https://graphql.org/): Eine Abfragesprache für APIs, die häufig als Alternative zu REST verwendet wird. Ein GraphQL-Server bezieht seine Daten über Resolver-Funktionen, die einen Datenbanktreiber oder ein ORM verwenden können.

Bei der Auswahl einer Lösung sollten Sie grundsätzlich sowohl die bereitgestellten Funktionen als auch die „Aktivität der Community“ berücksichtigen: Downloads, Beiträge, Fehlermeldungen, Qualität der Dokumentation und Ähnliches. Weitere Fragen sind:

- Erfordert das ORM eine separate Schemadatei, und sind zusätzliche Kompilierungsschritte erforderlich, um den verbindenden JavaScript-Code zu erhalten?
- Erzeugt es automatisch strenge TypeScript-Typen?
- Ist es für die Anwendung leistungsfähig genug?
- Kann es das Datenmodell der Anwendung ausreichend beschreiben?

Zum Zeitpunkt der Erstellung dieses Artikels ist Mongoose eine vernünftige Wahl, wenn Sie MongoDB als Datenbank verwenden.

### Mongoose und MongoDB für die LocalLibrary verwenden

Für das Beispiel der _Local Library_ und den Rest dieses Themas verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose dient als Schnittstelle zu [MongoDB](https://www.mongodb.com/company/what-is-mongodb), einer quelloffenen [NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank mit einem dokumentenorientierten Datenmodell. Eine „Collection“ von „Dokumenten“ in einer MongoDB-Datenbank [entspricht ungefähr](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer „Tabelle“ mit „Zeilen“ in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt. Ein Grund dafür ist, dass das System zum Speichern und Abfragen von Dokumenten JSON stark ähnelt und JavaScript-Entwicklerinnen und -Entwicklern daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose verwenden zu können. Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) lassen sich allerdings leichter verwenden und verstehen, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie Sie das Mongoose-Schema und die Modelle für die Beispielwebsite [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definieren und darauf zugreifen.

## Die LocalLibrary-Modelle entwerfen

Bevor Sie mit der Programmierung der Modelle beginnen, lohnt es sich, einige Minuten über die benötigten Daten und die Beziehungen zwischen den verschiedenen Objekten nachzudenken.

Wir wissen, dass wir Informationen über Bücher speichern müssen: Titel, Zusammenfassung, Autor, Genre und ISBN. Außerdem können mehrere Exemplare verfügbar sein, jeweils mit einer global eindeutigen ID, einem Verfügbarkeitsstatus und weiteren Angaben. Möglicherweise müssen wir über Autorinnen und Autoren mehr als nur ihren Namen speichern; außerdem können mehrere Personen gleiche oder ähnliche Namen haben. Die Informationen sollen sich nach Buchtitel, Autor, Genre und Kategorie sortieren lassen.

Beim Entwurf der Modelle ist es sinnvoll, für jedes „Objekt“ – also eine Gruppe zusammengehöriger Informationen – ein eigenes Modell anzulegen. Hier bieten sich Bücher, Buchexemplare und Autorinnen und Autoren an.

Sie können auch Modelle verwenden, um Optionen einer Auswahlliste darzustellen, beispielsweise Einträge in einer Dropdown-Liste, statt die Auswahlmöglichkeiten fest in der Website zu hinterlegen. Das empfiehlt sich, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Ein gutes Beispiel sind Genres wie Fantasy oder Science-Fiction.

Sobald Modelle und Felder feststehen, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Das folgende UML-Assoziationsdiagramm zeigt die Modelle, die wir in diesem Fall definieren; sie sind als Kästen dargestellt. Wie oben erläutert, haben wir Modelle für das Buch (seine allgemeinen Angaben), das Buchexemplar (den Status eines bestimmten physischen Exemplars im System) und die Autorin oder den Autor vorgesehen. Auch für das Genre verwenden wir ein Modell, damit Werte dynamisch erstellt werden können. Für `BookInstance:status` haben wir uns gegen ein eigenes Modell entschieden: Die zulässigen Werte werden fest im Code hinterlegt, da wir nicht erwarten, dass sie sich ändern. In jedem Kasten sehen Sie den Modellnamen, die Namen und Typen der Felder sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen einschließlich ihrer _Multiplizitäten_. Die Zahlen im Diagramm geben an, wie viele Instanzen eines Modells mindestens und höchstens an einer Beziehung beteiligt sein können. Die Verbindungslinie zwischen den Kästen zeigt beispielsweise, dass `Book` und `Genre` miteinander verbunden sind. Die Zahlen nahe dem Modell `Book` bedeuten, dass zu einem `Genre` null oder mehr `Book`-Instanzen gehören können – beliebig viele. Die Zahlen am anderen Ende der Linie neben `Genre` bedeuten, dass einem Buch null oder mehr `Genre`-Instanzen zugeordnet sein können.

> [!NOTE]
> Wie unten in unserer [Einführung in Mongoose](#einführung_in_mongoose) erläutert, ist es häufig besser, das Feld, das die Beziehung zwischen Dokumenten bzw. Modellen definiert, nur in _einem_ Modell anzulegen. Die umgekehrte Beziehung lässt sich weiterhin ermitteln, indem Sie im anderen Modell nach der zugehörigen `_id` suchen. Hier haben wir die Beziehungen zwischen `Book` und `Genre` sowie zwischen `Book` und `Author` im Book-Schema definiert, die Beziehung zwischen `Book` und `BookInstance` dagegen im `BookInstance`-Schema. Diese Entscheidung war weitgehend beliebig – wir hätten das Feld genauso gut im jeweils anderen Schema anlegen können.

![Mongoose-Bibliotheksmodell mit korrekten Kardinalitäten](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt führt in die Definition und Verwendung von Modellen ein. Überlegen Sie beim Lesen, wie wir die einzelnen Modelle aus dem obigen Diagramm erstellen werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Suchen, Aktualisieren und Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren. Der Code, der Erfolg oder Fehlschlag behandelt, wird erst später ausgeführt, wenn der Vorgang abgeschlossen ist.
Während der Server auf den Abschluss eines Datenbankvorgangs wartet, kann anderer Code ausgeführt werden. So bleibt der Server für weitere Anfragen erreichbar.

JavaScript bietet verschiedene Mechanismen zur Unterstützung asynchronen Verhaltens.
Früher wurden an asynchrone Methoden häufig [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) übergeben, um Erfolge und Fehler zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die eine asynchrone Methode sofort zurückgibt und die ihren zukünftigen Zustand repräsentieren.
Wenn der Vorgang abgeschlossen ist, nimmt das Promise einen endgültigen Zustand an: Es wird mit einem Ergebnis erfüllt oder mit einem Fehler zurückgewiesen.

Es gibt zwei wesentliche Möglichkeiten, Code auszuführen, sobald ein Promise einen endgültigen Zustand erreicht hat. Wir empfehlen Ihnen ausdrücklich, für einen Überblick über beide Ansätze [Promises verwenden](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf den Abschluss eines Promise zu warten. Dadurch wird asynchroner Code lesbarer und verständlicher.

Bei diesem Ansatz kennzeichnen Sie eine Funktion mit dem Schlüsselwort `async function` als asynchron und verwenden darin `await` für Methoden, die ein Promise zurückgeben.
Wenn die asynchrone Funktion ausgeführt wird, hält sie am ersten `await` an, bis das Promise einen endgültigen Zustand erreicht.
Aus Sicht des umgebenden Codes gibt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Sobald das Promise später einen endgültigen Zustand erreicht, liefert der Aufruf mit `await` innerhalb der asynchronen Funktion das Ergebnis zurück. Wurde das Promise zurückgewiesen, wird stattdessen ein Fehler ausgelöst.
Der Code in der asynchronen Funktion läuft anschließend weiter, bis er entweder auf ein weiteres `await` trifft und erneut anhält oder vollständig ausgeführt wurde.

Das folgende Beispiel zeigt die Funktionsweise.
`myFunction()` ist eine asynchrone Funktion mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block um die `await`-Ausdrücke.
Bei der Ausführung von `myFunction()` hält der Code bei `methodThatReturnsPromise()` an, bis das Promise erfüllt wird. Anschließend fährt er mit `functionThatReturnsPromise()` fort und wartet erneut.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird – etwa weil das Promise einer der beiden Methoden zurückgewiesen wurde.

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

Eine asynchrone Funktion gibt ein Promise zurück, das zurückgewiesen wird, wenn ein Fehler innerhalb der Funktion nicht abgefangen wird.
Um diesen Fehler im aufrufenden Code abzufangen, verwenden Sie die Methode [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) des zurückgegebenen Promise oder rufen die Funktion mit `await` innerhalb eines `try...catch`-Blocks auf.
Ein Funktionsaufruf innerhalb eines `try...catch`-Blocks ohne `await` fängt die Zurückweisung nicht ab: Erst `await` wandelt das zurückgegebene, zurückgewiesene Promise in einen ausgelösten Fehler um.

Die obigen asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dazu dient die Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Sie nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück.
Dieses zurückgegebene Promise wird erfüllt, wenn alle übergebenen Promises erfüllt wurden; sein Ergebnis ist ein Array ihrer Ergebnisse.
Wird eines der übergebenen Promises zurückgewiesen, wird auch das zurückgegebene Promise mit dem Grund der ersten Zurückweisung zurückgewiesen.

Der folgende Code zeigt, wie das funktioniert.
Zunächst haben wir zwei Funktionen, die Promises zurückgeben.
Mit `await` warten wir über das von `Promise.all()` zurückgegebene Promise darauf, dass beide abgeschlossen werden.
Sind beide abgeschlossen, liefert `await` ein Ergebnis und das Ergebnisarray wird gefüllt. Danach fährt die Funktion mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise einen endgültigen Zustand erreicht.
Um Fehler abzufangen, würden Sie dem von `myFunction()` zurückgegebenen Promise einen `catch()`-Handler hinzufügen.

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

Promises mit `await`/`async` ermöglichen eine flexible und zugleich gut verständliche Steuerung asynchroner Abläufe!

## Einführung in Mongoose

Dieser Abschnitt gibt einen Überblick darüber, wie Sie Mongoose mit einer MongoDB-Datenbank verbinden, Schemas und Modelle definieren und einfache Abfragen ausführen.

> [!NOTE]
> Diese Einführung orientiert sich stark am [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und an der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Mongoose und MongoDB installieren

Mongoose wird wie jede andere Abhängigkeit mit npm in Ihrem Projekt (**package.json**) installiert.
Führen Sie dazu im Projektordner folgenden Befehl aus:

```bash
npm install mongoose
```

Bei der Installation von _Mongoose_ werden alle zugehörigen Abhängigkeiten hinzugefügt, einschließlich des MongoDB-Datenbanktreibers. MongoDB selbst wird jedoch nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme für verschiedene Betriebssysteme herunterladen](https://www.mongodb.com/try/download/community) und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir das kostenlose Angebot des cloudbasierten _Database-as-a-Service_-Dienstes [MongoDB Atlas](https://www.mongodb.com/) als Datenbank. Es eignet sich für die Entwicklung und ist für dieses Tutorial sinnvoll, weil die „Installation“ damit unabhängig vom Betriebssystem ist. Database as a Service ist auch ein möglicher Ansatz für Ihre Produktionsdatenbank.

### Verbindung zu MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können Mongoose importieren und mit `mongoose.connect()` wie unten gezeigt eine Verbindung zu einer lokal betriebenen Datenbank herstellen. Im Tutorial verbinden wir uns stattdessen mit einer im Internet gehosteten Datenbank.

```js
import mongoose from "mongoose";

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
> Fehler beim Verbindungsaufbau behandeln wir mit dem Promise-Handler `catch()`. Alternativ könnten wir `await main()` innerhalb eines `try...catch`-Blocks in einer anderen `async`-Funktion verwenden.

Das standardmäßige `Connection`-Objekt erhalten Sie über `mongoose.connection`.
Wenn Sie weitere Verbindungen benötigen, können Sie `mongoose.createConnection()` verwenden.
Diese Methode nimmt dieselbe Form einer Datenbank-URI mit Host, Datenbank, Port, Optionen usw. entgegen wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt. Wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie `asPromise()` aufrufen, um ein Promise zu erhalten (`mongoose.createConnection(mongoDB).asPromise()`).

### Modelle definieren und erstellen

Modelle werden über die `Schema`-Schnittstelle _definiert_. Mit einem Schema legen Sie die Felder fest, die in jedem Dokument gespeichert werden, sowie deren Validierungsanforderungen und Standardwerte. Außerdem können Sie statische und instanzbezogene Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern. Auch virtuelle Eigenschaften sind möglich: Sie lassen sich wie andere Felder verwenden, werden aber nicht in der Datenbank gespeichert. Darauf gehen wir weiter unten näher ein.

Anschließend werden Schemas mit der Methode `mongoose.model()` zu Modellen „kompiliert“. Mit einem Modell können Sie Objekte des jeweiligen Typs suchen, erstellen, aktualisieren und löschen.

> [!NOTE]
> Jedes Modell entspricht einer _Collection_ von _Dokumenten_ in der MongoDB-Datenbank. Die Dokumente enthalten die Felder und Schematypen, die im `Schema` des Modells definiert sind.

#### Schemas definieren

Der folgende Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren können. Zuerst importieren Sie mongoose. Anschließend erzeugen Sie mit dem Schema-Konstruktor eine neue Schemainstanz und definieren die verschiedenen Felder im Objektparameter des Konstruktors.

```js
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

Im obigen Beispiel haben wir nur zwei Felder: eine Zeichenfolge und ein Datum. In den nächsten Abschnitten stellen wir einige weitere Feldtypen, Validierungsmöglichkeiten und Methoden vor.

#### Ein Modell erstellen

Modelle werden mit der Methode `mongoose.model()` aus Schemas erstellt:

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

Das erste Argument ist der Name im Singular für die Collection, die für Ihr Modell erstellt wird – Mongoose erstellt im obigen Beispiel die Datenbank-Collection für das Modell _SomeModel_. Das zweite Argument ist das Schema, das Sie für das Modell verwenden möchten.

> [!NOTE]
> Sobald Ihre Modellklassen definiert sind, können Sie damit Datensätze erstellen, aktualisieren und löschen sowie Abfragen nach allen Datensätzen oder bestimmten Teilmengen ausführen. Wie das geht, zeigen wir im Abschnitt [Modelle verwenden](#modelle_verwenden) und beim Erstellen unserer Ansichten.

#### Schematypen (Felder)

Ein Schema kann beliebig viele Felder haben. Jedes davon steht für ein Feld in den in _MongoDB_ gespeicherten Dokumenten.
Das folgende Beispielschema zeigt viele gängige Feldtypen und wie sie deklariert werden.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) – die Bezeichnungen nach „type:“ oder nach Feldnamen – erklären sich von selbst. Ausnahmen sind:

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Ein Buch könnte damit beispielsweise sein Autor-Objekt referenzieren. Das Feld enthält tatsächlich die eindeutige ID (`_id`) des angegebenen Objekts. Mit der Methode `populate()` können wir die zugehörigen Informationen bei Bedarf laden.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Auf diesen Modellen können Sie JavaScript-Array-Operationen wie push, pop oder unshift ausführen. Die obigen Beispiele zeigen ein Array von Objekten ohne festgelegten Typ und ein Array von `String`-Objekten. Arrays können jedoch Objekte beliebiger Typen enthalten.

Der Code zeigt außerdem beide Möglichkeiten, ein Feld zu deklarieren:

- Feld-_name_ und -_typ_ als Schlüssel-Wert-Paar, wie bei den Feldern `name`, `binary` und `living`.
- Feld-_name_, gefolgt von einem Objekt, das `type` und weitere _Optionen_ für das Feld definiert. Zu den Optionen gehören:
  - Standardwerte.
  - Integrierte Validatoren, etwa für Höchst- und Mindestwerte, sowie eigene Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Klein- oder Großbuchstaben umgewandelt oder von Leerzeichen am Anfang und Ende bereinigt werden sollen, beispielsweise `{ type: String, lowercase: true, trim: true }`.

Weitere Informationen zu den Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet integrierte und eigene sowie synchrone und asynchrone Validatoren. Sie können damit jeweils sowohl den zulässigen Wertebereich als auch die Fehlermeldung für einen Validierungsfehler festlegen.

Zu den integrierten Validatoren gehören:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) verfügen über den integrierten Validator [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required). Damit legen Sie fest, ob ein Feld angegeben werden muss, damit ein Dokument gespeichert werden kann.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) verfügen über die Validatoren [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>).
- [Zeichenfolgen](https://mongoosejs.com/docs/api/schemastring.html) verfügen über:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Legt die zulässigen Werte für das Feld fest.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Legt einen regulären Ausdruck fest, dem die Zeichenfolge entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Länge der Zeichenfolge.

Das folgende, leicht an die Mongoose-Dokumentation angelehnte Beispiel zeigt, wie Sie einige Validatortypen und Fehlermeldungen festlegen können:

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

Vollständige Informationen zur Feldvalidierung finden Sie unter [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie lesen und setzen können, die aber nicht in MongoDB gespeichert werden. Getter eignen sich zum Formatieren oder Kombinieren von Feldern. Setter sind nützlich, um einen einzelnen Wert zur Speicherung in mehrere Werte aufzuteilen. Das Beispiel in der Dokumentation erstellt eine virtuelle Eigenschaft für den vollständigen Namen aus den Feldern für Vor- und Nachnamen und zerlegt ihn wieder. Das ist einfacher und übersichtlicher, als den vollständigen Namen jedes Mal neu zusammenzusetzen, wenn er in einer Vorlage benötigt wird.

> [!NOTE]
> In der Bibliothek verwenden wir eine virtuelle Eigenschaft, um für jeden Modelldatensatz anhand eines Pfads und seines `_id`-Werts eine eindeutige URL zu definieren.

Weitere Informationen finden Sie unter [Virtuelle Eigenschaften](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehilfen

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehilfen](https://mongoosejs.com/docs/guide.html#query-helpers) enthalten. Instanzmethoden und statische Methoden ähneln sich. Der wesentliche Unterschied besteht darin, dass eine Instanzmethode einem bestimmten Datensatz zugeordnet ist und auf das aktuelle Objekt zugreifen kann. Mit Abfragehilfen können Sie die [verkettbare Query-Builder-API](https://mongoosejs.com/docs/queries.html) von mongoose erweitern und beispielsweise zusätzlich zu `find()`, `findOne()` und `findById()` eine Abfrage „byName“ hinzufügen.

### Modelle verwenden

Nachdem Sie ein Schema erstellt haben, können Sie daraus Modelle erzeugen. Ein Modell repräsentiert eine durchsuchbare Collection von Dokumenten in der Datenbank. Die Instanzen des Modells repräsentieren einzelne Dokumente, die Sie speichern und abrufen können.

Im Folgenden geben wir einen kurzen Überblick. Weitere Informationen finden Sie unter [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der jeweiligen Methoden und von `await`, also den wesentlichen Code für die Methoden.
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern wurden der Übersichtlichkeit halber weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Dokumente erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und darauf [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) aufrufen.
Die folgenden Beispiele setzen voraus, dass `SomeModel` ein aus unserem Schema erstelltes Modell mit einem einzigen Feld `name` ist.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Mit [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) können Sie eine Modellinstanz auch gleichzeitig definieren und speichern.
Im folgenden Beispiel erstellen wir nur eine Instanz. Sie können aber auch mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedem Modell ist eine Verbindung zugeordnet. Wenn Sie `mongoose.model()` verwenden, ist das die Standardverbindung. Um Dokumente in einer anderen Datenbank zu erstellen, können Sie eine neue Verbindung herstellen und darauf `.model()` aufrufen.

Auf die Felder des neuen Datensatzes können Sie mit der Punktschreibweise zugreifen und ihre Werte ändern. Um geänderte Werte wieder in der Datenbank zu speichern, müssen Sie `save()` oder `update()` aufrufen.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Mit Abfragemethoden können Sie nach Datensätzen suchen und die Abfragebedingungen als JSON-Dokument angeben. Der folgende Codeausschnitt zeigt, wie Sie in einer Datenbank alle Athletinnen und Athleten finden könnten, die Tennis spielen, und dabei nur die Felder für _Name_ und _Alter_ zurückgeben. Hier geben wir nur ein Feld als Suchbedingung an (Sport). Sie können weitere Kriterien oder reguläre Ausdrücke hinzufügen oder die Bedingungen ganz weglassen, um alle Athletinnen und Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Beachten Sie: Wenn eine Suche keine Ergebnisse liefert, ist das **kein Fehler**. Im Kontext Ihrer Anwendung kann es dennoch ein unerwünschtes Ergebnis sein.
> Falls Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge prüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben einen Wert vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Mit einem Abfrageobjekt können Sie eine Abfrage schrittweise aufbauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf dessen Ergebnis Sie mit `await` warten können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Dafür können wir auch eine [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>)-Funktion verwenden. Außerdem lassen sich alle Teile der Abfrage mit dem Punktoperator (.) verketten, statt sie einzeln hinzuzufügen.
Der folgende Codeausschnitt entspricht unserer obigen Abfrage, enthält aber eine zusätzliche Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) liefert alle passenden Datensätze. Oft benötigen Sie jedoch nur einen Treffer. Die folgenden Methoden fragen einen einzelnen Datensatz ab:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Finden ein einzelnes Dokument anhand seiner `id` oder bestimmter Kriterien und aktualisieren oder entfernen es. Diese Hilfsfunktionen erleichtern das Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Mit der Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) können Sie außerdem ermitteln, wie viele Einträge bestimmten Bedingungen entsprechen. Das ist nützlich, wenn Sie Datensätze zählen möchten, ohne sie tatsächlich abzurufen.

Mit Abfragen ist noch deutlich mehr möglich. Weitere Informationen finden Sie unter [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Mit verknüpften Dokumenten arbeiten – Population

Mit dem Schemafeld `ObjectId` können Sie eine Referenz von einer Dokument- bzw. Modellinstanz auf eine andere erstellen. Für Referenzen von einem Dokument auf mehrere verwenden Sie ein Array von `ObjectIds`. Das Feld speichert die ID des verknüpften Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie in einer Abfrage die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) verwenden, um die ID durch die eigentlichen Daten zu ersetzen.

Das folgende Schema definiert beispielsweise Autorinnen und Autoren sowie Geschichten.
Jede Autorin und jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId`-Werten darstellen.
Jede Geschichte kann genau eine Autorin oder einen Autor haben.
Die Eigenschaft `ref` teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

```js
import mongoose from "mongoose";

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

Wir können eine Referenz auf das verknüpfte Dokument speichern, indem wir den Wert `_id` zuweisen.
Im Folgenden erstellen wir erst eine Autorin oder einen Autor, dann eine Geschichte und weisen die Autoren-ID dem Autorenfeld der Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptablauf unseres Codes nicht durch Fehlerprüfungen verkomplizieren müssen.
> Schlägt eine der `save()`-Operationen fehl, wird das Promise zurückgewiesen und ein Fehler ausgelöst.
> Unser Code zur Fehlerbehandlung kümmert sich separat darum, normalerweise in einem `catch()`-Block. Dadurch bleibt die Absicht unseres Codes klar erkennbar.

Unser Geschichtendokument referenziert nun eine Autorin oder einen Autor über die ID des Autorendokuments. Um die Autoreninformationen zusammen mit den Ergebnissen für Geschichten zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksamen Leserinnen und Lesern ist vielleicht aufgefallen, dass wir unserer Geschichte eine Autorin oder einen Autor zugewiesen haben, die Geschichte aber nicht zum Array `stories` des Autorendokuments hinzugefügt haben. Wie können wir dann alle Geschichten einer bestimmten Person abrufen? Eine Möglichkeit wäre, die Geschichte dem Array hinzuzufügen. Dann müssten wir die Informationen über die Beziehung zwischen Autorinnen und Autoren und Geschichten allerdings an zwei Stellen pflegen.
>
> Besser ist es, die `_id` unseres _Autorendokuments_ abzurufen und anschließend mit `find()` im Autorenfeld aller Geschichten danach zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist nahezu alles, was Sie _für dieses Tutorial_ über die Arbeit mit verknüpften Einträgen wissen müssen. Ausführlichere Informationen finden Sie unter [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Sie können Schemas und Modelle in einer beliebigen Dateistruktur anlegen. Wir empfehlen jedoch ausdrücklich, jedes Modellschema in einem eigenen Modul (einer eigenen Datei) zu definieren und das Modell anschließend zu exportieren.
Das sieht folgendermaßen aus:

```js
// File: ./models/some-model.js

// Import Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export model
export default mongoose.model("SomeModel", SomeModelSchema);
```

Danach können Sie das Modell in anderen Dateien direkt importieren und verwenden. Unten zeigen wir, wie Sie damit beispielsweise alle Instanzen des Modells abrufen können.

```js
// Import the SomeModel model
import SomeModel from "../models/some-model.js";

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Die MongoDB-Datenbank einrichten

Da wir nun wissen, was Mongoose leisten kann und wie wir unsere Modelle gestalten möchten, können wir mit der Arbeit an der _LocalLibrary_-Website beginnen. Als Erstes richten wir eine MongoDB-Datenbank ein, in der wir unsere Bibliotheksdaten speichern können.

Für dieses Tutorial verwenden wir die cloudgehostete Sandbox-Datenbank von [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe gilt nicht als geeignet für produktive Websites, weil sie keine Redundanz bietet. Für die Entwicklung und das Erstellen von Prototypen ist sie jedoch hervorragend geeignet. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist. Außerdem ist MongoDB Atlas ein beliebter _Database-as-a-Service_-Anbieter, den Sie auch für Ihre Produktionsdatenbank wählen könnten. Weitere zum Zeitpunkt der Erstellung dieses Artikels beliebte Optionen sind [Supabase](https://supabase.com/), [Firebase Firestore](https://firebase.google.com/docs/firestore) und [Cloudflare D1](https://developers.cloudflare.com/d1/).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die weiteren Anweisungen in diesem Artikel wären ähnlich; lediglich die beim Verbindungsaufbau angegebene Datenbank-URL wäre anders.
> Im Tutorial [Express-Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/). Wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden.

Zunächst müssen Sie bei MongoDB Atlas [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register). Das ist kostenlos; Sie müssen lediglich grundlegende Kontaktdaten angeben und die Nutzungsbedingungen bestätigen.

Nach der Anmeldung gelangen Sie zur [Startseite](https://cloud.mongodb.com/v2):

1. Klicken Sie im Bereich _Overview_ auf **+ Create**.

   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Daraufhin öffnet sich die Ansicht _Deploy your cluster_.
   Klicken Sie auf die Option **M0 FREE**.

   ![Eine Bereitstellungsoption auf MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie auf der Seite nach unten, um die verschiedenen verfügbaren Optionen zu sehen.
   ![Einen Cloudanbieter auf MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)
   - Unter _Cluster Name_ können Sie den Namen Ihres Clusters ändern.
     Für dieses Tutorial belassen wir ihn bei `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später eigene Beispieldaten importieren.
   - Wählen Sie unter _Provider_ und _Region_ einen beliebigen Anbieter und eine Region aus. In verschiedenen Regionen stehen unterschiedliche Anbieter zur Verfügung.
   - Tags sind optional. Wir verwenden hier keine.
   - Klicken Sie auf **Create deployment**. Das Erstellen des Clusters dauert einige Minuten.

4. Daraufhin öffnet sich der Bereich _Security Quickstart_.
   ![Zugriffsregeln in der Ansicht „Security Quickstart“ auf MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, mit denen Ihre Anwendung auf die Datenbank zugreifen soll. Oben haben wir die neuen Zugangsdaten „cooluser“ erstellt.
     Kopieren Sie die Zugangsdaten und bewahren Sie sie sicher auf, da wir sie später benötigen.
     Klicken Sie auf **Create User**.

     > [!NOTE]
     > Vermeiden Sie Sonderzeichen im Passwort Ihres MongoDB-Benutzers, da mongoose die Verbindungszeichenfolge möglicherweise nicht korrekt verarbeitet.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld „IP Address“ ein und klicken Sie anschließend auf **Add Entry**.
     Damit teilen Sie MongoDB mit, dass Zugriffe von überall aus erlaubt sein sollen.

     > [!NOTE]
     > Es empfiehlt sich, die IP-Adressen einzuschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen dürfen. Hier erlauben wir Verbindungen von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf **Finish and Close**.

5. Daraufhin öffnet sich die folgende Ansicht. Klicken Sie auf **Go to Overview**.
   ![Nach dem Einrichten der Zugriffsregeln auf MongoDB Atlas zur Übersicht wechseln](mongodb_atlas_-_accessrules.jpg)

6. Sie gelangen zurück zur Ansicht _Overview_. Klicken Sie links im Menü _Deployment_ auf den Bereich _Database_. Klicken Sie auf **Browse Collections**.
   ![Eine Collection auf MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Daraufhin öffnet sich der Bereich _Collections_. Klicken Sie auf **Add My Own Data**.
   ![Eine Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Daraufhin öffnet sich die Ansicht _Create Database_.

   ![Angaben beim Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie `local_library` als Namen der neuen Datenbank ein.
   - Geben Sie `Collection0` als Namen der Collection ein.
   - Klicken Sie auf **Create**, um die Datenbank zu erstellen.

9. Sie gelangen zurück zur Ansicht _Collections_; Ihre Datenbank ist jetzt erstellt.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf den Tab _Overview_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie in der _Overview_-Ansicht von Cluster0 auf **Connect**.

    ![Nach dem Einrichten eines Clusters auf MongoDB Atlas eine Verbindung konfigurieren.](mongodb_atlas_-_connectbutton.jpg)

11. Daraufhin öffnet sich die Ansicht _Connect to Cluster0_.

    ![Beim Einrichten einer Verbindung auf MongoDB Atlas die kurze SRV-Verbindung auswählen.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_, dann unter _Driver_ **Node.js** und die abgebildete _Version_.
    - Installieren Sie den Treiber **NICHT**, auch wenn dies vorgeschlagen wird.
    - Klicken Sie auf das Symbol **Copy**, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie sie in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen „local_library“ im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und verfügen über eine URL mit Benutzername und Passwort, über die Sie darauf zugreifen können.
Sie sieht etwa so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und wechseln Sie in das Verzeichnis, in dem Sie die [Grundstruktur der Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Führen Sie den folgenden Befehl aus, um Mongoose und seine Abhängigkeiten zu installieren und es Ihrer Datei **package.json** hinzuzufügen – sofern Sie das nicht bereits beim Lesen der obigen [Einführung in Mongoose](#mongoose_und_mongodb_installieren) getan haben.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **server.js** im Stammverzeichnis Ihres Projekts und fügen Sie den Mongoose-Import oben in der Datei neben den anderen Paketimporten hinzu:

```js
import mongoose from "mongoose";
```

Fügen Sie dann den folgenden Code nach `app.set("port", port);` und vor `const server = createServer(app);` ein. Ersetzen Sie die Datenbank-URL (`"insert_your_database_url_here"`) durch die URL Ihrer Datenbank aus _MongoDB Atlas_.

```js
const mongoDB = "insert_your_database_url_here";

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

await mongoose.connect(mongoDB);
```

Wie oben in der [Einführung in Mongoose](#verbindung_zu_mongodb_herstellen) erläutert, wird damit die Standardverbindung hergestellt; Verbindungsfehler werden gemeldet. Da **server.js** ein ES-Modul ist, kann es [`await` auf oberster Ebene](/de/docs/Web/JavaScript/Reference/Operators/await#top-level_await) verwenden. Node wartet auf die Verbindung, bevor der Code zum Erstellen und Starten des Servers fortgesetzt wird. Schlägt die anfängliche Verbindung fehl, kann das Modul nicht geladen werden und Node beendet sich, ohne den HTTP-Server zu starten.

> [!NOTE]
> Wenn die Datenbankverbindung in **server.js** verbleibt, kann **app.js** die Anwendung konfigurieren und exportieren, ohne eine Verbindung zur Datenbank herzustellen oder einen Server zu starten.

> [!WARNING]
> Wir schreiben die Datenbankzugangsdaten fest in den Quellcode – das ist eine ausgesprochen schlechte Vorgehensweise.
> Wir tun es hier, um den grundlegenden Verbindungscode zu zeigen. Außerdem besteht während der Entwicklung kein erhebliches Risiko, dass durch eine Weitergabe dieser Angaben vertrauliche Informationen offengelegt oder beschädigt werden.
> Wenn Sie Ihren Code auf GitHub committen und pushen, **hören Sie sofort auf, Commits zu erstellen**, bis wir dieses Tutorial abgeschlossen haben. Wenn Sie den Code committen, bleiben Ihre Datenbankzugangsdaten dauerhaft im Git-Verlauf und sind für alle Personen zugänglich, die Zugriff auf Ihr GitHub-Repository haben.
> Bei der [Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration) zeigen wir Ihnen, wie Sie das sicherer lösen.
>
> Falls Ihre Datenbankzugangsdaten versehentlich in veröffentlichten Quellcode gelangen, ändern Sie umgehend Ihr Datenbankpasswort.

## Das LocalLibrary-Schema definieren

Wie [oben besprochen](#one_schemamodel_per_file), definieren wir für jedes Modell ein eigenes Modul.
Erstellen Sie zunächst im Projektstamm einen Ordner für unsere Modelle (**models/**) und darin für jedes Modell eine eigene Datei:

```plain
express-locallibrary-tutorial
├── models
│   ├── author.js
│   ├── book.js
│   ├── bookinstance.js
│   └── genre.js
...
```

Wenn Sie Bash oder eine ähnliche Shell verwenden, können Sie alle Dateien mit diesem Befehl erstellen:

```bash
mkdir models && touch models/{author,book,bookinstance,genre}.js
```

### Author-Modell

Kopieren Sie den unten gezeigten Schemacode für `Author` in die Datei **./models/author.js**.
Das Schema definiert für eine Autorin oder einen Autor `String`-SchemaTypes für Vor- und Nachnamen – beide erforderlich und auf höchstens 100 Zeichen begrenzt – sowie `Date`-Felder für Geburts- und Sterbedatum.

```js
import mongoose from "mongoose";

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
export default mongoose.model("Author", AuthorSchema);
```

Außerdem haben wir für das AuthorSchema eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) namens „url“ deklariert. Sie gibt die absolute URL zurück, über die eine bestimmte Instanz des Modells abgerufen werden kann. Wir verwenden diese Eigenschaft in unseren Vorlagen, wenn wir einen Link zu einer bestimmten Autorin oder einem bestimmten Autor benötigen.

> [!NOTE]
> URLs als virtuelle Eigenschaften im Schema zu deklarieren, ist sinnvoll: Die URL eines Eintrags muss dann nur an einer Stelle geändert werden.
> Derzeit würde ein Link mit dieser URL noch nicht funktionieren, weil wir noch keinen Code für Routen eingerichtet haben, die einzelne Modellinstanzen verarbeiten.
> Das erledigen wir in einem späteren Artikel!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den unten gezeigten Schemacode für `Book` in die Datei **./models/book.js**.
Vieles ähnelt dem Author-Modell: Wir deklarieren ein Schema mit mehreren Zeichenfolgenfeldern und einer virtuellen Eigenschaft für die URL bestimmter Buchdatensätze und exportieren das Modell.

```js
import mongoose from "mongoose";

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
export default mongoose.model("Book", BookSchema);
```

Der wichtigste Unterschied besteht darin, dass wir zwei Referenzen auf andere Modelle erstellt haben:

- author ist eine erforderliche Referenz auf ein einzelnes `Author`-Modellobjekt.
- genre ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Dieses Modell haben wir noch nicht deklariert!

### BookInstance-Modell

Kopieren Sie schließlich den unten gezeigten Schemacode für `BookInstance` in die Datei **./models/bookinstance.js**.
`BookInstance` repräsentiert ein bestimmtes Exemplar eines Buchs, das ausgeliehen werden kann. Das Modell enthält Angaben dazu, ob das Exemplar verfügbar ist, wann es voraussichtlich zurückgegeben wird, sowie Details zur „Ausgabe“ bzw. Version.

```js
import mongoose from "mongoose";

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
export default mongoose.model("BookInstance", BookInstanceSchema);
```

Neu sind hier die Feldoptionen:

- `enum`: Damit legen wir die zulässigen Werte einer Zeichenfolge fest. Hier verwenden wir die Option, um den Verfügbarkeitsstatus unserer Bücher vorzugeben. So verhindern wir Schreibfehler und beliebige Statuswerte.
- `default`: Mit dieser Option setzen wir den Standardstatus neu erstellter Buchexemplare auf „Maintenance“ und das Standarddatum für `due_back` auf `now`. Beachten Sie, wie beim Setzen des Datums die Date-Funktion aufgerufen werden kann!

Alles Weitere sollte Ihnen aus den vorherigen Schemas bekannt sein.

### Genre-Modell – Übung

Öffnen Sie die Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres – also Buchkategorien wie Belletristik oder Sachbuch, Liebesroman oder Militärgeschichte.

Die Definition ähnelt stark den anderen Modellen:

- Das Modell soll einen `String`-SchemaType namens `name` enthalten, der das Genre beschreibt.
- Dieser Name soll erforderlich sein und zwischen 3 und 100 Zeichen umfassen.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) namens `url` für die URL des Genres.
- Exportieren Sie das Modell.

## Testen – einige Einträge erstellen

Damit sind alle Modelle für die Website eingerichtet!

Um die Modelle zu testen und einige Beispielbücher sowie weitere Einträge für die nächsten Artikel zu erstellen, führen wir nun ein _eigenständiges_ Skript aus, das Einträge jedes Typs erzeugt:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter oder erstellen Sie sie auf andere Weise im Verzeichnis _express-locallibrary-tutorial_ (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Lernen von JavaScript hilfreich sein. Für dieses Tutorial müssen Sie ihn aber nicht verstehen.

2. Führen Sie das Skript in Ihrer Eingabeaufforderung mit node aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank. Verwenden Sie dieselbe URL, mit der Sie zuvor in `server.js` den Platzhalter _insert_your_database_url_here_ ersetzt haben:

   ```bash
   node populatedb.js "<your MongoDB URL>"
   ```

   Denken Sie daran, die URL in doppelte Anführungszeichen zu setzen.

3. Das Skript sollte vollständig durchlaufen und die erstellten Einträge währenddessen im Terminal anzeigen.

> [!NOTE]
> Öffnen Sie Ihre Datenbank in MongoDB Atlas auf dem Tab _Collections_.
> Sie sollten nun die einzelnen Collections für Books, Authors, Genres und BookInstances öffnen und die jeweiligen Dokumente ansehen können.

## Zusammenfassung

In diesem Artikel haben wir Grundlagen zu Datenbanken und ORMs unter Node/Express kennengelernt und ausführlich betrachtet, wie Schemas und Modelle in Mongoose definiert werden. Mit diesem Wissen haben wir die Modelle `Book`, `BookInstance`, `Author` und `Genre` für die _LocalLibrary_-Website entworfen und implementiert.

Abschließend haben wir unsere Modelle getestet, indem wir mit einem eigenständigen Skript mehrere Instanzen erstellt haben. Im nächsten Artikel sehen wir uns an, wie Sie Seiten zur Anzeige dieser Objekte erstellen.

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
