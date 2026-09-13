---
title: "Express-Tutorial, Teil 3: Eine Datenbank verwenden (mit Mongoose)"
short-title: "3: Datenbanken mit Mongoose verwenden"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 56d0ce5d4214468db560358cc761904f9139c96c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erläutert, wie Sie sie mit Node/Express-Apps verwenden können. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) bereitzustellen. Er erklärt, wie Objekt-Schemas und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem werden kurz einige der wichtigsten Möglichkeiten gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial, Teil 2: Eine Website-Grundstruktur erstellen</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eigene Modelle mit Mongoose entwerfen und erstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Mitarbeitende der Bibliothek werden die Local-Library-Website verwenden, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder sie nutzen werden, um Bücher zu durchsuchen und danach zu suchen, herauszufinden, ob Exemplare verfügbar sind, und diese anschließend zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für **C**reate-, **R**ead-, **U**pdate- und **D**elete-Operationen (CRUD) verwenden können. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann die ausgewählten Mechanismen im Detail.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten bzw. keine Anforderungen für die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie Zeit bis zur Produktivität bzw. Lernkurve, Leistung, einfache Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Zwar gibt es keine einzelne „beste“ Datenbank, aber nahezu jede der beliebten Lösungen sollte für eine kleine bis mittelgroße Website wie unsere Local Library mehr als ausreichend sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist die beste Methode, um mit einer Datenbank zu interagieren?

Es gibt zwei verbreitete Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbank, beispielsweise SQL.
- Verwendung eines Object Relational Mapper („ORM“) oder Object Document Mapper („ODM“). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bereitstellen.

Die allerbeste _Leistung_ lässt sich durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erzielen. Object Mapper sind häufig langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat abzubilden. Dabei werden möglicherweise nicht die effizientesten Datenbankabfragen verwendet. Dies gilt insbesondere, wenn der Mapper unterschiedliche Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der unterstützten Datenbankfunktionen eingehen muss.

Der Vorteil eines ORM/ODM besteht darin, dass Programmierende weiterhin in JavaScript-Objekten statt in Datenbanksemantik denken können – insbesondere, wenn Sie mit unterschiedlichen Datenbanken arbeiten müssen, sei es auf derselben oder auf verschiedenen Websites. Sie bieten außerdem einen naheliegenden Ort für die Datenvalidierung.

> [!NOTE]
> Die Verwendung von ODMs/ORMs führt häufig zu geringeren Entwicklungs- und Wartungskosten! Sofern Sie nicht sehr gut mit der nativen Abfragesprache vertraut sind oder Leistung oberste Priorität hat, sollten Sie die Verwendung eines ODM ernsthaft in Betracht ziehen.

### Welchen ORM/ODM sollte ich verwenden?

Auf der npm-Paketmanager-Website sind viele ODM/ORM-Lösungen verfügbar. Sehen Sie sich beispielsweise die Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) für eine Auswahl an.

Einige Lösungen, die zum Zeitpunkt der Erstellung beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein für asynchrone Umgebungen entwickeltes [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug.
- [Waterline](https://www.npmjs.com/package/waterline): Ein aus dem Express-basierten Webframework [Sails](https://sailsjs.com/) extrahierter ORM. Es stellt eine einheitliche API für den Zugriff auf zahlreiche unterschiedliche Datenbanken bereit, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl Promise-basierte als auch traditionelle Callback-Schnittstellen sowie Unterstützung für Transaktionen, eager/nested-eager Laden von Beziehungen, polymorphe Assoziationen und Eins-zu-eins-, Eins-zu-viele- sowie Viele-zu-viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu verwenden. Unterstützt SQLite3, Postgres und MySQL.
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein Promise-basierter ORM für Node.js und io.js. Er unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Beziehungen, Lesereplikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für Node.js. Er unterstützt MySQL, SQLite und Postgres und erleichtert die Arbeit mit der Datenbank über einen objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): GraphQL ist hauptsächlich eine Abfragesprache für RESTful APIs, sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie bei der Auswahl einer Lösung sowohl die bereitgestellten Funktionen als auch die „Community-Aktivität“ berücksichtigen, also Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw. Zum Zeitpunkt der Erstellung ist Mongoose mit großem Abstand das beliebteste ODM und eine sinnvolle Wahl, wenn Sie MongoDB als Datenbank verwenden.

### Mongoose und MongoDB für LocalLibrary verwenden

Für das Beispiel _Local Library_ und den Rest dieses Themas werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine „Collection“ aus „Dokumenten“ in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer „Tabelle“ aus „Zeilen“ in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil das Speichern und Abfragen von Dokumenten stark JSON ähnelt und daher JavaScript-Entwickelnden vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden. Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) sind jedoch einfacher zu verwenden und zu verstehen, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie Sie die Mongoose-Schemas und -Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definieren und darauf zugreifen.

## Die LocalLibrary-Modelle entwerfen

Bevor Sie direkt mit der Codierung der Modelle beginnen, lohnt es sich, einige Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den unterschiedlichen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen, etwa Titel, Zusammenfassung, Autor, Genre und ISBN, und dass möglicherweise mehrere Exemplare verfügbar sind, jeweils mit global eindeutigen IDs, Verfügbarkeitsstatus usw. Möglicherweise müssen wir mehr Informationen über den Autor als nur dessen Namen speichern, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes „Objekt“ – also eine Gruppe zusammenhängender Informationen – separate Modelle zu verwenden. In diesem Fall sind Bücher, Buchinstanzen und Autoren naheliegende Kandidaten für diese Modelle.

Möglicherweise möchten Sie Modelle auch verwenden, um Optionen von Auswahllisten darzustellen, beispielsweise Optionen einer Dropdown-Liste, statt die Auswahlmöglichkeiten direkt in die Website einzucodieren. Dies wird empfohlen, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre, beispielsweise Fantasy, Science-Fiction usw.

Nachdem wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Vor diesem Hintergrund zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden, als Boxen. Wie oben erläutert, haben wir Modelle für das Buch – die allgemeinen Details des Buchs –, die Buchinstanz – den Status konkreter physischer, im System verfügbarer Exemplare eines Buchs – und den Autor erstellt. Außerdem haben wir uns für ein Modell für das Genre entschieden, damit Werte dynamisch erstellt werden können. Wir haben uns dagegen entschieden, ein Modell für `BookInstance:status` zu erstellen: Wir werden die zulässigen Werte fest codieren, da wir nicht erwarten, dass diese sich ändern. Innerhalb jeder Box sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl – Maximum und Minimum – jedes Modells angeben, das in der Beziehung vorhanden sein kann. Die Verbindungslinie zwischen den Boxen zeigt beispielsweise, dass `Book` und `Genre` miteinander verbunden sind. Die Zahlen nahe dem Modell `Book` zeigen, dass ein `Genre` null oder mehr `Book`s haben muss, also beliebig viele, während die Zahlen am anderen Ende der Linie neben `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserer nachfolgenden [Mongoose-Einführung](#mongoose-einführung) erläutert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu haben. Sie können die umgekehrte Beziehung dennoch finden, indem Sie im anderen Modell nach der zugehörigen `_id` suchen. Im Folgenden haben wir uns dafür entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Entscheidung war einigermaßen willkürlich – wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung dazu, wie Modelle definiert und verwendet werden. Berücksichtigen Sie beim Lesen, wie wir jedes der Modelle im obigen Diagramm erstellen werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Suchen, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Verarbeitung des Erfolgs oder Fehlschlags der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Während der Server auf den Abschluss der Datenbankoperation wartet, kann anderer Code ausgeführt werden, sodass der Server auf andere Anfragen reagieren kann.

JavaScript verfügt über mehrere Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch stützte sich JavaScript stark darauf, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um Erfolgs- und Fehlerfälle zu verarbeiten.
In modernem JavaScript wurden Callbacks größtenteils durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode sofort zurückgegeben werden und deren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt „erfüllt“ und löst zu einem Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, Promises zu verwenden, um Code auszuführen, wenn ein Promise erfüllt ist. Wir empfehlen Ihnen nachdrücklich, [Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen allgemeinen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial werden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwenden, um innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf den Abschluss eines Promise zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Bei diesem Ansatz markieren Sie eine Funktion mit dem Schlüsselwort `async function` als asynchron und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Ausführung bei der ersten `await`-Methode angehalten, bis das Promise erfüllt ist.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der darauffolgende Code kann ausgeführt werden.
Später, wenn das Promise erfüllt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` erreicht wird, woraufhin er wieder anhält, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Im folgenden Beispiel können Sie sehen, wie dies funktioniert.
`myFunction()` ist eine asynchrone Funktion, die einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block um die `await`-Ausdrücke enthält.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise aufgelöst wird. Anschließend wird der Code bei `functionThatReturnsPromise()` fortgesetzt und wartet erneut.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird. Dies geschieht, wenn das von einer der Methoden zurückgegebene Promise abgelehnt wird.

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

Eine asynchrone Funktion gibt ein Promise zurück, das abgelehnt wird, wenn ein Fehler nicht innerhalb der Funktion abgefangen wird.
Um diesen Fehler im aufrufenden Code abzufangen, verwenden Sie die [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode des zurückgegebenen Promise oder verwenden Sie `await` für den Funktionsaufruf innerhalb eines `try...catch`-Blocks.
Das Aufrufen der Funktion in einem `try...catch`-Block ohne `await` fängt die Ablehnung nicht ab, da `await` das zurückgegebene abgelehnte Promise in einen ausgelösten Fehler umwandelt.

Die obigen asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies erfolgt mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterable von Promises als Eingabe annimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt werden, und liefert ein Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit dem Grund dieser ersten Ablehnung.

Der folgende Code zeigt, wie dies funktioniert.
Zunächst haben wir zwei Funktionen, die Promises zurückgeben.
Wir verwenden `await` für beide, damit sie mithilfe des von `Promise.all()` zurückgegebenen Promise abgeschlossen werden.
Nachdem beide abgeschlossen sind, gibt `await` zurück und das Ergebnis-Array wird befüllt. Die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erfüllt ist.
Sie würden einen `catch()`-Handler an das von `myFunction()` zurückgegebene Promise anhängen, um Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch verständliche Steuerung asynchroner Ausführung!

## Mongoose-Einführung

Dieser Abschnitt bietet einen Überblick darüber, wie Sie Mongoose mit einer MongoDB-Datenbank verbinden, ein Schema und ein Modell definieren und grundlegende Abfragen ausführen.

> [!NOTE]
> Diese Einführung ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und von der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Mongoose und MongoDB installieren

Mongoose wird wie jede andere Abhängigkeit mit npm in Ihrem Projekt, also in **package.json**, installiert.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle Abhängigkeiten einschließlich des MongoDB-Datenbanktreibers hinzu, installiert aber MongoDB selbst nicht. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installer herunterladen](https://www.mongodb.com/try/download/community) und ihn lokal für verschiedene Betriebssysteme installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir die kostenlose Stufe der cloudbasierten _Database as a Service_ von [MongoDB Atlas](https://www.mongodb.com/) verwenden, um die Datenbank bereitzustellen. Dies eignet sich für die Entwicklung und ist für das Tutorial sinnvoll, da die „Installation“ dadurch unabhängig vom Betriebssystem ist. Database as a Service ist außerdem ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden.

### Verbindung mit MongoDB herstellen

_Mongoose_ benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt. Für das Tutorial verbinden wir uns stattdessen mit einer im Internet gehosteten Datenbank.

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) erläutert, verwenden wir hier `await` für das Promise, das die Methode `connect()` innerhalb einer `async`-Funktion zurückgibt.
> Wir verwenden den Promise-Handler `catch()`, um Fehler beim Verbindungsversuch zu behandeln. Alternativ hätten wir in einer anderen `async`-Funktion auch `await main()` in einem `try...catch`-Block verwenden können.

Sie können das Standard-`Connection`-Objekt mit `mongoose.connection` abrufen.
Falls Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Diese Methode nimmt dieselbe Form von Datenbank-URI – mit Host, Datenbank, Port, Optionen usw. – wie `connect()` an und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt. Falls Sie warten müssen, bis die Verbindung hergestellt ist, können Sie sie mit `asPromise()` aufrufen, um ein Promise zurückzugeben: `mongoose.createConnection(mongoDB).asPromise()`.

### Modelle definieren und erstellen

Modelle werden mithilfe der Schnittstelle `Schema` _definiert_. Mit Schema können Sie die in jedem Dokument gespeicherten Felder sowie deren Validierungsanforderungen und Standardwerte definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die aber nicht tatsächlich in der Datenbank gespeichert werden. Darauf gehen wir weiter unten noch etwas genauer ein.

Schemas werden dann mit der Methode `mongoose.model()` in Modelle „kompiliert“. Sobald Sie ein Modell haben, können Sie damit Objekte des angegebenen Typs suchen, erstellen, aktualisieren und löschen.

> [!NOTE]
> Jedes Modell wird einer _Collection_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell-`Schema` definierten Feld-/Schema-Typen.

#### Schemas definieren

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren können. Zunächst verwenden Sie `require()` für mongoose und verwenden dann den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen. Dabei definieren Sie die verschiedenen Felder im Objektparameter des Konstruktors.

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

Im obigen Fall haben wir nur zwei Felder: einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierung und weitere Methoden.

#### Ein Modell erstellen

Modelle werden mithilfe der Methode `mongoose.model()` aus Schemas erstellt:

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

Das erste Argument ist der Singularname der Collection, die für Ihr Modell erstellt wird. Mongoose erstellt die Datenbank-Collection für das obige Modell _SomeModel_. Das zweite Argument ist das Schema, das Sie beim Erstellen des Modells verwenden möchten.

> [!NOTE]
> Nachdem Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen sowie Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Im Abschnitt [Modelle verwenden](#modelle_verwenden) und beim Erstellen unserer Views wird gezeigt, wie dies funktioniert.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes davon stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispiel-Schema, das viele der gängigen Feldtypen und ihre Deklaration zeigt, ist nachfolgend dargestellt.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) – die Beschreibungen nach „type:“ oder nach Feldnamen – sind selbsterklärend. Ausnahmen sind:

- `ObjectId`: Repräsentiert konkrete Instanzen eines Modells in der Datenbank. Ein Buch könnte diesen Typ beispielsweise verwenden, um sein Autorobjekt darzustellen. Dieser enthält tatsächlich die eindeutige ID (`_id`) des angegebenen Objekts. Bei Bedarf können wir mit der Methode `populate()` die zugehörigen Informationen abrufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen für diese Modelle ausführen, etwa push, pop oder unshift. Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array mit jedem beliebigen Objekttyp haben.

Der Code zeigt außerdem beide Möglichkeiten, ein Feld zu deklarieren:

- Feld_name_ und -_typ_ als Schlüssel-Wert-Paar, also wie bei den Feldern `name`, `binary` und `living`.
- Feld_name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Zu den Optionen gehören beispielsweise:
  - Standardwerte.
  - Integrierte Validatoren, etwa Maximal-/Minimalwerte, und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Klein- oder Großbuchstaben umgewandelt oder gekürzt werden sollen, beispielsweise `{ type: String, lowercase: true, trim: true }`.

Weitere Informationen über Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) in der Mongoose-Dokumentation.

#### Validierung

Mongoose stellt integrierte und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren bereit. In allen Fällen können Sie sowohl den zulässigen Wertebereich als auch die Fehlermeldung bei einer fehlgeschlagenen Validierung festlegen.

Die integrierten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) verfügen über den integrierten Validator [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required). Damit wird angegeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) verfügen über die Validatoren [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>).
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) verfügen über:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge zulässiger Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel, leicht aus der Mongoose-Dokumentation angepasst, zeigt, wie Sie einige der Validatortypen und Fehlermeldungen festlegen können:

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

Vollständige Informationen zur Feldvalidierung finden Sie unter [Validation](https://mongoosejs.com/docs/validation.html) in der Mongoose-Dokumentation.

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die aber nicht in MongoDB gespeichert werden. Getter sind nützlich, um Felder zu formatieren oder zu kombinieren, während Setter nützlich sind, um einen einzelnen Wert für die Speicherung in mehrere Werte aufzuteilen. Das Beispiel in der Dokumentation erstellt und zerlegt eine virtuelle Eigenschaft für den vollständigen Namen aus einem Feld für Vor- und Nachnamen. Dies ist einfacher und übersichtlicher, als jedes Mal einen vollständigen Namen zu erstellen, wenn er in einem Template verwendet wird.

> [!NOTE]
> Wir werden in der Bibliothek eine virtuelle Eigenschaft verwenden, um mithilfe eines Pfads und des `_id`-Werts des Datensatzes eine eindeutige URL für jeden Modell-Datensatz zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) in der Mongoose-Dokumentation.

#### Methoden und Abfrage-Hilfsfunktionen

Ein Schema kann außerdem über [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Hilfsfunktionen](https://mongoosejs.com/docs/guide.html#query-helpers) verfügen. Die Instanz- und statischen Methoden sind ähnlich, mit dem offensichtlichen Unterschied, dass eine Instanzmethode einem bestimmten Datensatz zugeordnet ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Hilfsfunktionen ermöglichen Ihnen, die [verkettbare Query-Builder-API](https://mongoosejs.com/docs/queries.html) von mongoose zu erweitern, beispielsweise indem Sie zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` eine Abfrage „byName“ hinzufügen können.

### Modelle verwenden

Nachdem Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Collection von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Im Folgenden bieten wir einen kurzen Überblick. Weitere Informationen finden Sie unter [Models](https://mongoosejs.com/docs/models.html) in der Mongoose-Dokumentation.

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der relevanten Methoden und von `await`, also den wesentlichen Code für die Verwendung der Methoden.
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern wurden aus Gründen der Übersichtlichkeit ausgelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Dokumente erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und anschließend [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) dafür aufrufen.
Die folgenden Beispiele setzen voraus, dass `SomeModel` ein Modell mit einem einzelnen Feld `name` ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können außerdem [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig mit ihrem Speichern zu definieren.
Nachfolgend erstellen wir nur eine Instanz, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell verfügt über eine zugehörige Verbindung. Dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden. Sie erstellen eine neue Verbindung und rufen `.model()` dafür auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können mit der Punktsyntax auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Sie können mithilfe von Abfragemethoden nach Datensätzen suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für den Namen und das Alter des Athleten zurückgeben. Hier geben wir nur ein übereinstimmendes Feld – sport – an, Sie können jedoch weitere Kriterien hinzufügen, Kriterien für reguläre Ausdrücke angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, daran zu denken, dass das Nichtfinden von Ergebnissen bei einer Suche **kein Fehler** ist – im Kontext Ihrer Anwendung kann es jedoch ein Fehlerfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge prüfen.

Query-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Query-Objekt verwenden, um eine Abfrage schrittweise aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun und alle Teile unserer Abfrage mithilfe des Punktoperators (.) verketten, statt sie separat hinzuzufügen.
Das folgende Codefragment entspricht unserer obigen Abfrage, ergänzt um eine zusätzliche Bedingung für das Alter.

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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) ruft alle passenden Datensätze ab, aber häufig möchten Sie nur eine Übereinstimmung abrufen. Die folgenden Methoden fragen einen einzelnen Datensatz ab:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id`. Jedes Dokument hat eine eindeutige `id`.
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument anhand von `id` oder Kriterien und aktualisiert oder entfernt es. Diese praktischen Funktionen sind zum Aktualisieren und Entfernen von Datensätzen nützlich.

> [!NOTE]
> Es gibt außerdem eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), mit der Sie die Anzahl der Elemente ermitteln können, die Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Anzahl ermitteln möchten, ohne die Datensätze tatsächlich abzurufen.

Mit Abfragen können Sie noch viel mehr tun. Weitere Informationen finden Sie unter [Queries](https://mongoosejs.com/docs/queries.html) in der Mongoose-Dokumentation.

#### Mit verknüpften Dokumenten arbeiten – Population

Sie können mit dem Schemafeld `ObjectId` Referenzen von einer Dokument-/Modellinstanz zu einer anderen erstellen oder mit einem Array von `ObjectId`s von einem Dokument zu vielen. Das Feld speichert die ID des verknüpften Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Das folgende Schema definiert beispielsweise Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
Die Eigenschaft `ref` teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen auf das zugehörige Dokument speichern, indem wir den Wert `_id` zuweisen.
Im Folgenden erstellen wir einen Autor, dann eine Geschichte und weisen die Autor-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode verarbeitet dies separat, üblicherweise in einem `catch()`-Block, sodass die Absicht unseres Codes sehr deutlich wird.

Unser Geschichtendokument enthält nun einen Autor, auf den per ID des Autorendokuments verwiesen wird. Um die Autorinformationen in den Geschichtenergebnissen abzurufen, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten dargestellt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Lesende werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts unternommen haben, um unsere Geschichte dem `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, unsere Geschichte zum stories-Array hinzuzufügen, aber dann hätten wir zwei Stellen, an denen die Informationen über die Beziehung zwischen Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Autors_ abzurufen und anschließend mit `find()` in allen Geschichten im Autorenfeld danach zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie für _dieses Tutorial_ über die Arbeit mit verknüpften Elementen wissen müssen. Detailliertere Informationen finden Sie unter [Population](https://mongoosejs.com/docs/populate.html) in der Mongoose-Dokumentation.

### Ein Schema/Modell pro Datei

Sie können Schemas und Modelle zwar mit jeder beliebigen Dateistruktur erstellen, wir empfehlen jedoch dringend, jedes Modell-Schema in einem eigenen Modul, also einer Datei, zu definieren und anschließend die Methode zum Erstellen des Modells zu exportieren.
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

Anschließend können Sie das Modell sofort in anderen Dateien mit require einbinden und verwenden. Im Folgenden wird gezeigt, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Die MongoDB-Datenbank einrichten

Nun, da wir etwas darüber wissen, was Mongoose leisten kann und wie wir unsere Modelle entwerfen möchten, ist es Zeit, mit der Arbeit an der Website _LocalLibrary_ zu beginnen. Als Erstes möchten wir eine MongoDB-Datenbank einrichten, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die in der Cloud gehostete Sandbox-Datenbank [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe gilt nicht als geeignet für Produktionswebsites, da sie keine Redundanz bietet, eignet sich aber hervorragend für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter Anbieter für _Database as a Service_ ist, den Sie vernünftigerweise auch für Ihre Produktionsdatenbank wählen könnten. Andere beliebte Optionen zum Zeitpunkt der Erstellung waren [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [für Ihr System passenden Binärdateien](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, mit Ausnahme der Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im Tutorial [Express-Tutorial, Teil 7: Bereitstellung in Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), hätten aber ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Zunächst müssen Sie ein [Konto](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas erstellen. Dies ist kostenlos und erfordert nur die Eingabe grundlegender Kontaktdaten sowie die Zustimmung zu den Nutzungsbedingungen.

Nach der Anmeldung gelangen Sie zum [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie im Abschnitt _Overview_ auf die Schaltfläche **+ Create**.

   ![Eine Datenbank in MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Deploy your cluster_ geöffnet.
   Klicken Sie auf die Optionsvorlage **M0 FREE**.

   ![Eine Bereitstellungsoption bei MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie auf der Seite nach unten, um die verschiedenen auswählbaren Optionen zu sehen.
   ![Einen Cloud-Anbieter bei MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     In diesem Tutorial behalten wir `Cluster0` bei.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie im Abschnitt _Provider_ und _Region_ einen beliebigen Anbieter und eine beliebige Region. Unterschiedliche Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir verwenden sie hier nicht.
   - Klicken Sie auf die Schaltfläche **Create deployment**. Das Erstellen des Clusters dauert einige Minuten.

4. Dadurch wird der Abschnitt _Security Quickstart_ geöffnet.
   ![Die Zugriffsregeln im Bildschirm Security Quickstart in MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung für den Zugriff auf die Datenbank verwenden soll. Oben haben wir einen neuen Login namens „cooluser“ erstellt.
     Denken Sie daran, die Anmeldedaten zu kopieren und sicher zu speichern, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie Sonderzeichen im Passwort Ihres MongoDB-Benutzers, da mongoose die Verbindungszeichenfolge möglicherweise nicht richtig analysiert.

   - Wählen Sie **Add by current IP address**, um Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld IP Address ein und klicken Sie dann auf die Schaltfläche **Add Entry**.
     Damit teilen Sie MongoDB mit, dass wir Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Praxis, die IP-Adressen zu begrenzen, die sich mit Ihrer Datenbank und anderen Ressourcen verbinden können. Hier erlauben wir eine Verbindung von überall, da wir nach der Bereitstellung nicht wissen, woher die Anfrage kommt.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Nach dem Einrichten der Zugriffsregeln in MongoDB Atlas zu Databases wechseln](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Overview_ zurück. Klicken Sie im Menü _Deployment_ links auf den Abschnitt _Database_. Klicken Sie auf die Schaltfläche **Browse Collections**.
   ![Eine Collection in MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Collections_ geöffnet. Klicken Sie auf die Schaltfläche **Add My Own Data**.
   ![Eine Datenbank in MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Create Database_ geöffnet.

   ![Details während der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie als Namen für die neue Datenbank `local_library` ein.
   - Geben Sie als Namen der Collection `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Collections_ zurück, wobei Ihre Datenbank erstellt wurde.
   ![Bestätigung der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Overview_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im Bildschirm _Overview_ von Cluster0 auf die Schaltfläche **Connect**.

    ![Verbindung nach der Einrichtung eines Clusters in MongoDB Atlas konfigurieren.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Connect to Cluster0_ geöffnet.

    ![Die kurze SRV-Verbindung beim Einrichten einer Verbindung in MongoDB Atlas auswählen.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_, dann den _Driver_ **Node.js** und die _Version_ wie dargestellt.
    - Installieren Sie den vorgeschlagenen Treiber **NICHT**.
    - Klicken Sie auf das Symbol **Copy**, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie diese in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie vor den Optionen den Datenbanknamen „local_library“ in den Pfad ein: `...mongodb.net/local_library?retryWrites...`
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und verfügen über eine URL mit Benutzername und Passwort, die für den Zugriff darauf verwendet werden kann.
Sie sieht etwa so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie in das Verzeichnis, in dem Sie Ihre [Local-Library-Website-Grundstruktur](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose und seine Abhängigkeiten zu installieren und es zu Ihrer Datei **package.json** hinzuzufügen, sofern Sie dies nicht bereits beim Lesen der obigen [Mongoose-Einführung](#mongoose_und_mongodb_installieren) getan haben.

```bash
npm install mongoose
```

## Mit MongoDB verbinden

Öffnen Sie **bin/www** im Stammverzeichnis Ihres Projekts und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port festlegen, also nach der Zeile `app.set("port", port);`.
Ersetzen Sie die Datenbank-URL-Zeichenfolge (`insert_your_database_url_here`) durch die Standort-URL Ihrer eigenen Datenbank, also mithilfe der Informationen aus _MongoDB Atlas_.

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

Wie in der obigen [Mongoose-Einführung](#verbindung_mit_mongodb_herstellen) erläutert, erstellt dieser Code die Standardverbindung zur Datenbank und meldet Fehler an die Konsole.
Nach einer erfolgreichen Verbindung ruft er außerdem eine Funktion `startServer()` auf, die wir als Nächstes erstellen werden.

Die generierte Datei **bin/www** erstellt den HTTP-Server und beginnt sofort mit dem Lauschen, unabhängig davon, ob die Datenbankverbindung erfolgreich hergestellt wird.
Suchen Sie weiter unten in derselben Datei nach diesem Code:

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

Ersetzen Sie ihn durch Folgendes. Dadurch werden die Servererstellung und das Lauschen in eine Funktion `startServer()` verschoben, sodass sie erst ausgeführt wird, nachdem `connectMongoose()` aufgelöst wurde:

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
> Wir hätten den Datenbankverbindungscode auch in unserem Code in **app.js** platzieren können.
> Die Platzierung im Einstiegspunkt der Anwendung entkoppelt die Anwendung und die Datenbank, wodurch es einfacher wird, eine andere Datenbank für die Ausführung von Testcode zu verwenden.

Beachten Sie, dass es nicht empfohlen wird, Datenbank-Anmeldedaten wie oben gezeigt im Quellcode fest zu codieren.
Wir tun dies hier, weil es den Kerncode für die Verbindung zeigt und weil während der Entwicklung kein erhebliches Risiko besteht, dass durch das Offenlegen dieser Details sensible Informationen preisgegeben oder beschädigt werden.
Wir zeigen Ihnen bei der [Bereitstellung in Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration), wie Sie dies sicherer tun können!

## Das LocalLibrary-Schema definieren

Wir werden für jedes Modell ein separates Modul definieren, wie [oben erläutert](#one_schemamodel_per_file).
Erstellen Sie zunächst im Projektstamm einen Ordner für unsere Modelle, **/models**, und anschließend separate Dateien für jedes Modell:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Modell Author

Kopieren Sie den folgenden `Author`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor mit `String`-SchemaTypes für Vor- und Nachnamen, die erforderlich sind und maximal 100 Zeichen enthalten dürfen, sowie mit `Date`-Feldern für Geburts- und Todesdatum.

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

Wir haben außerdem eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für AuthorSchema mit dem Namen „url“ deklariert, die die absolute URL zurückgibt, die zum Abrufen einer bestimmten Instanz des Modells erforderlich ist. Wir werden diese Eigenschaft in unseren Templates immer dann verwenden, wenn wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuelle Eigenschaft im Schema ist sinnvoll, da die URL eines Elements dann nur an einer Stelle geändert werden muss.
> Ein Link mit dieser URL würde zu diesem Zeitpunkt nicht funktionieren, da wir noch keinen Routing-Code für einzelne Modellinstanzen haben.
> Diesen richten wir in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Modell Book

Kopieren Sie den folgenden `Book`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Der größte Teil ähnelt dem Autorenmodell: Wir haben ein Schema mit mehreren String-Feldern und eine virtuelle Eigenschaft zum Abrufen der URL bestimmter Buchdatensätze deklariert und das Modell exportiert.

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

Der Hauptunterschied besteht darin, dass wir zwei Referenzen auf andere Modelle erstellt haben:

- author ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Dieses Objekt haben wir noch nicht deklariert!

### Modell BookInstance

Kopieren Sie abschließend den folgenden `BookInstance`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
`BookInstance` stellt ein bestimmtes Exemplar eines Buchs dar, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es voraussichtlich zurückgegeben wird, sowie Details zum „Imprint“ bzw. zur Version.

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

Die hier gezeigten neuen Aspekte sind die Feldoptionen:

- `enum`: Damit können wir die zulässigen Werte eines Strings festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben. Durch die Verwendung eines Enum können wir Tippfehler und beliebige Werte für unseren Status verhindern.
- `default`: Mit default setzen wir den Standardstatus für neu erstellte Buchinstanzen auf „Maintenance“ und das Standarddatum `due_back` auf `now`. Beachten Sie, dass Sie die Date-Funktion beim Festlegen des Datums aufrufen können.

Alles andere sollte aus unseren vorherigen Schemas bekannt sein.

### Modell Genre – Aufgabe

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres, also der Buchkategorie, beispielsweise ob es sich um Belletristik oder Sachbuch, Romanze oder Militärgeschichte handelt.

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-SchemaType namens `name` zur Beschreibung des Genres haben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen enthalten.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres mit dem Namen `url`.
- Exportieren Sie das Modell.

## Testen – einige Elemente erstellen

Das war's. Jetzt haben wir alle Modelle für die Website eingerichtet!

Um die Modelle zu testen und einige Beispielbücher und andere Elemente zu erstellen, die wir in den nächsten Artikeln verwenden können, führen wir nun ein _eigenständiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter oder erstellen Sie sie auf andere Weise in Ihrem Verzeichnis _express-locallibrary-tutorial_, auf derselben Ebene wie `package.json`.

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Erlernen von JavaScript hilfreich sein, sein Verständnis ist jedoch für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit node in Ihrer Eingabeaufforderung aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank. Verwenden Sie dabei dieselbe URL, mit der Sie zuvor in `app.js` den Platzhalter `insert_your_database_url_here` ersetzt haben:

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (`"`) einschließen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache Anführungszeichen (`'`).

3. Das Skript sollte vollständig ausgeführt werden und die Elemente während ihrer Erstellung im Terminal anzeigen.

> [!NOTE]
> Wechseln Sie zu Ihrer Datenbank in MongoDB Atlas, auf der Registerkarte _Collections_.
> Sie sollten nun in einzelne Collections von Books, Authors, Genres und BookInstances navigieren und einzelne Dokumente untersuchen können.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs in Node/Express gelernt sowie viel darüber, wie Mongoose-Schemas und -Modelle definiert werden. Anschließend haben wir diese Informationen verwendet, um die Modelle `Book`, `BookInstance`, `Author` und `Genre` für die Website _LocalLibrary_ zu entwerfen und umzusetzen.

Zuletzt haben wir unsere Modelle getestet, indem wir mehrere Instanzen mit einem eigenständigen Skript erstellt haben. Im nächsten Artikel sehen wir uns an, wie einige Seiten erstellt werden, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
