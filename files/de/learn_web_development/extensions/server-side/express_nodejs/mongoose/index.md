---
title: "Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Datenbanken mit Mongoose verwenden"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: cd8d0bb1068b703abe027522a7c0f3e8c9ce9c39
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erläutert, wie Sie sie mit Node/Express-Apps verwenden. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) bereitzustellen. Er erklärt, wie Objektschemas und Modelle deklariert werden, welche die wichtigsten Feldtypen sind und wie grundlegende Validierung funktioniert. Außerdem zeigt er kurz einige der wichtigsten Möglichkeiten, auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express-Tutorial Teil 2: Erstellen einer Website-Grundstruktur</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eigene Modelle mit Mongoose entwerfen und erstellen können.</td>
    </tr>
  </tbody>
</table>

## Überblick

Mitarbeitende der Bibliothek verwenden die Local-Library-Website, um Informationen über Bücher und Entleihende zu speichern, während Bibliotheksmitglieder sie verwenden, um Bücher zu durchsuchen und nach ihnen zu suchen, herauszufinden, ob Exemplare verfügbar sind, und sie anschließend zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Apps können viele unterschiedliche Datenbanken verwenden, und es gibt mehrere Ansätze zum Ausführen von **C**reate-, **R**ead-, **U**pdate- und **D**elete-Operationen (CRUD). Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und erläutert anschließend die ausgewählten Mechanismen im Detail.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten bzw. keine Anforderungen an die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie Zeit bis zur Produktivität/Lernkurve, Leistung, Einfachheit von Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Zwar gibt es keine einzelne „beste“ Datenbank, aber fast jede der beliebten Lösungen sollte für eine kleine bis mittelgroße Website wie unsere Local Library mehr als geeignet sein.

Weitere Informationen über die Optionen finden Sie unter [Database integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist der beste Weg, mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Verwendung der nativen Abfragesprache der Datenbank, beispielsweise SQL.
- Verwendung eines Object Relational Mapper („ORM“) oder Object Document Mapper („ODM“). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere ein datenbankunabhängiges Backend bereitstellen.

Die allerbeste _Leistung_ lässt sich durch Verwendung von SQL oder der jeweiligen von der Datenbank unterstützten Abfragesprache erzielen. Object Mapper sind häufig langsamer, da sie Übersetzungscode für die Abbildung zwischen Objekten und dem Datenbankformat verwenden, der möglicherweise nicht die effizientesten Datenbankabfragen nutzt. Dies gilt insbesondere, wenn der Mapper unterschiedliche Datenbank-Backends unterstützt und größere Kompromisse hinsichtlich der unterstützten Datenbankfunktionen eingehen muss.

Der Vorteil eines ORM/ODM besteht darin, dass Programmierende weiterhin in JavaScript-Objekten statt in Datenbanksemantik denken können – insbesondere, wenn Sie mit unterschiedlichen Datenbanken arbeiten müssen, sei es auf derselben oder auf verschiedenen Websites. Außerdem bieten sie einen offensichtlichen Ort für die Datenvalidierung.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt häufig zu geringeren Entwicklungs- und Wartungskosten! Sofern Sie nicht sehr gut mit der nativen Abfragesprache vertraut sind oder Leistung von größter Bedeutung ist, sollten Sie die Verwendung eines ODM ernsthaft in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Auf der npm-Paketmanager-Website sind viele ODM/ORM-Lösungen verfügbar. Sehen Sie sich beispielsweise die Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) an.

Einige zum Zeitpunkt der Erstellung beliebte Lösungen sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug für die Verwendung in einer asynchronen Umgebung.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten Webframework [Sails](https://sailsjs.com/) extrahiert wurde. Es stellt eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken bereit, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl Promise-basierte als auch traditionelle Callback-Schnittstellen, Transaktionsunterstützung, vorzeitiges/verschachteltes Laden von Beziehungen, polymorphe Assoziationen sowie Unterstützung für Eins-zu-eins-, Eins-zu-viele- und Viele-zu-viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Ermöglicht es, die volle Leistungsfähigkeit von SQL und der zugrunde liegenden Datenbank-Engine möglichst einfach zu nutzen. Unterstützt SQLite3, Postgres und MySQL.
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein Promise-basiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Transaktionsunterstützung, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für Node.js. Es unterstützt MySQL, SQLite und Postgres und hilft bei der objektorientierten Arbeit mit der Datenbank.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful APIs; GraphQL ist sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie bei der Auswahl einer Lösung sowohl die bereitgestellten Funktionen als auch die „Community-Aktivität“ berücksichtigen, also Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw. Zum Zeitpunkt der Erstellung ist Mongoose mit Abstand das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB als Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für LocalLibrary

Für das Beispiel _Local Library_ – und den Rest dieses Themas – verwenden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose dient als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine „Sammlung“ von „Dokumenten“ in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer „Tabelle“ mit „Zeilen“ in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil das System zum Speichern und Abfragen von Dokumenten stark JSON ähnelt und JavaScript-Entwickelnden daher vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden. Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) sind jedoch einfacher zu verwenden und zu verstehen, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie die Mongoose-Schemas und -Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) definiert und aufgerufen werden.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Programmieren der Modelle beginnen, sollten Sie einige Minuten darüber nachdenken, welche Daten gespeichert werden müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass Informationen zu Büchern gespeichert werden müssen – Titel, Zusammenfassung, Autor, Genre, ISBN – und dass möglicherweise mehrere Exemplare verfügbar sind, jeweils mit global eindeutigen IDs, Verfügbarkeitsstatus usw. Möglicherweise müssen wir mehr Informationen über den Autor als nur dessen Namen speichern, und mehrere Autoren könnten gleiche oder ähnliche Namen haben. Wir möchten Informationen nach Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes „Objekt“ – eine Gruppe zusammengehöriger Informationen – getrennte Modelle zu verwenden. In diesem Fall sind Bücher, Buchexemplare und Autoren offensichtliche Kandidaten für solche Modelle.

Möglicherweise möchten Sie auch Modelle verwenden, um Optionen für Auswahllisten darzustellen, beispielsweise für eine Dropdown-Liste mit Auswahlmöglichkeiten, statt die Optionen direkt in die Website einzuprogrammieren. Dies wird empfohlen, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre, etwa Fantasy oder Science-Fiction.

Nachdem wir uns für Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Vor diesem Hintergrund zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden. Wie oben erläutert, haben wir Modelle für das Buch – die allgemeinen Buchdetails –, das Buchexemplar – den Status konkreter, im System verfügbarer physischer Exemplare – und den Autor erstellt. Zudem haben wir uns für ein Modell für das Genre entschieden, damit Werte dynamisch erstellt werden können. Für `BookInstance:status` haben wir kein Modell vorgesehen; stattdessen programmieren wir die zulässigen Werte fest ein, da wir nicht erwarten, dass sie sich ändern. In jedem Kasten sehen Sie den Modellnamen, Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, welche die Anzahl – Maximum und Minimum – jedes Modells angeben, das in der Beziehung vorhanden sein kann. Beispielsweise zeigt die Verbindungslinie zwischen den Kästen, dass `Book` und `Genre` miteinander verbunden sind. Die Zahlen nahe dem Modell `Book` zeigen, dass ein `Genre` null oder mehr `Book`s haben muss – beliebig viele –, während die Zahlen am anderen Ende der Linie neben `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserer nachstehenden [Mongoose-Einführung](#mongoose-einführung) erläutert, ist es häufig besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben. Sie können die umgekehrte Beziehung weiterhin finden, indem Sie im anderen Modell nach der zugehörigen `_id` suchen. Unten haben wir entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war einigermaßen willkürlich – das Feld hätte ebenso gut im jeweils anderen Schema stehen können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Denken Sie beim Lesen darüber nach, wie wir jedes der oben dargestellten Modelle konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung eines Erfolgs oder Fehlers erst zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Anderer Code kann ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet. Dadurch kann der Server weiterhin auf andere Anfragen reagieren.

JavaScript verfügt über mehrere Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch stützte sich JavaScript stark darauf, [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zu übergeben, um Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode sofort zurückgegeben werden und deren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt „erledigt“ und löst zu einem Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, Promises zu verwenden, um Code auszuführen, wenn ein Promise erledigt ist. Wir empfehlen Ihnen dringend, [How to use promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen allgemeinen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf den Abschluss eines Promise zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Bei diesem Ansatz markieren Sie eine Funktion mit dem Schlüsselwort `async function` als asynchron und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Ausführung bei der ersten `await`-Methode angehalten, bis das Promise erledigt ist.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück, und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Promise erledigt ist, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder es wird ein Fehler ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` erreicht wird – woraufhin er erneut pausiert – oder bis der gesamte Code in der Funktion ausgeführt wurde.

Im folgenden Beispiel sehen Sie, wie dies funktioniert.
`myFunction()` ist eine asynchrone Funktion, die einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block um die `await`-Ausdrücke enthält.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise aufgelöst wird. Anschließend wird mit `functionThatReturnsPromise()` fortgefahren und erneut gewartet.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler ausgelöst wird. Dies geschieht, wenn das von einer der beiden Methoden zurückgegebene Promise abgelehnt wird.

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
Um diesen Fehler im aufrufenden Code abzufangen, verwenden Sie die Methode [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) des zurückgegebenen Promise oder verwenden Sie `await` für den Funktionsaufruf innerhalb eines `try...catch`-Blocks.
Der Aufruf der Funktion innerhalb eines `try...catch`-Blocks ohne `await` fängt die Ablehnung nicht ab, da erst `await` das zurückgegebene abgelehnte Promise in einen ausgelösten Fehler umwandelt.

Die obigen asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies erfolgt mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterierbares Objekt von Promises als Eingabe annimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt werden, und enthält ein Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, und zwar mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zunächst haben wir zwei Funktionen, die Promises zurückgeben.
Wir verwenden `await` für beide, damit sie mithilfe des von `Promise.all()` zurückgegebenen Promise abgeschlossen werden.
Sobald beide abgeschlossen sind, kehrt `await` zurück und das Ergebnis-Array wird gefüllt. Die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erledigt ist.
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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch „verständliche“ Kontrolle über asynchrone Ausführung!

## Mongoose-Einführung

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Diese Einführung ist stark vom [Mongoose-Schnellstart](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installieren von Mongoose und MongoDB

Mongoose wird wie jede andere Abhängigkeit mithilfe von npm in Ihrem Projekt – **package.json** – installiert.
Verwenden Sie zur Installation im Projektordner den folgenden Befehl:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, installiert jedoch nicht MongoDB selbst. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community), die für verschiedene Betriebssysteme verfügbar sind, und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir das kostenlose Kontingent von [MongoDB Atlas](https://www.mongodb.com/) als cloudbasierte _Datenbank als Dienst_. Dies eignet sich für die Entwicklung und ist für das Tutorial sinnvoll, da die „Installation“ dadurch unabhängig vom Betriebssystem wird. Datenbank als Dienst ist zudem ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten.

### Verbindung mit MongoDB herstellen

_Mongoose_ benötigt eine Verbindung mit einer MongoDB-Datenbank.
Sie können `require()` verwenden und mit `mongoose.connect()` eine Verbindung zu einer lokal gehosteten Datenbank herstellen, wie unten gezeigt. Für das Tutorial stellen wir stattdessen eine Verbindung zu einer im Internet gehosteten Datenbank her.

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) erläutert, verwenden wir hier `await` für das von der Methode `connect()` zurückgegebene Promise innerhalb einer `async`-Funktion.
> Wir verwenden den Promise-Handler `catch()`, um Fehler beim Verbindungsversuch zu behandeln. Alternativ hätten wir auch `await main()` innerhalb eines `try...catch`-Blocks in einer anderen `async`-Funktion verwenden können.

Sie können das Standardobjekt `Connection` mit `mongoose.connection` abrufen.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies verwendet dieselbe Form einer Datenbank-URI – mit Host, Datenbank, Port, Optionen usw. – wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt. Wenn Sie darauf warten müssen, dass die Verbindung hergestellt wird, können Sie die Methode mit `asPromise()` aufrufen, um ein Promise zurückzugeben: `mongoose.createConnection(mongoDB).asPromise()`.

### Modelle definieren und erstellen

Modelle werden mit der Schnittstelle `Schema` _definiert_. Das Schema ermöglicht Ihnen, die in jedem Dokument gespeicherten Felder sowie deren Validierungsanforderungen und Standardwerte zu definieren. Zusätzlich können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden. Dies wird weiter unten erläutert.

Schemas werden anschließend mit der Methode `mongoose.model()` zu Modellen „kompiliert“. Sobald Sie ein Modell haben, können Sie damit Objekte des angegebenen Typs finden, erstellen, aktualisieren und löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell-`Schema` definierten Feld-/Schematypen.

#### Schemas definieren

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst verwenden Sie `require()` für mongoose, dann erstellen Sie mit dem `Schema`-Konstruktor eine neue Schema-Instanz und definieren deren verschiedene Felder im Objektparameter des Konstruktors.

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

Im obigen Fall haben wir nur zwei Felder: einen String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, die Validierung und weitere Methoden.

#### Ein Modell erstellen

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird – Mongoose erstellt die Datenbanksammlung für das obige Modell _SomeModel_. Das zweite Argument ist das Schema, das Sie zum Erstellen des Modells verwenden möchten.

> [!NOTE]
> Nachdem Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen sowie Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wie dies funktioniert, zeigen wir im Abschnitt [Modelle verwenden](#modelle_verwenden) sowie beim Erstellen unserer Ansichten.

#### Schematypen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes davon stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispiel-Schema mit vielen der gebräuchlichen Feldtypen und ihrer Deklaration ist unten dargestellt.

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

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) – die Deskriptoren nach „type:“ oder nach Feldnamen – sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorobjekt darzustellen. Es enthält tatsächlich die eindeutige ID (`_id`) des angegebenen Objekts. Bei Bedarf können wir die Methode `populate()` verwenden, um die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen, etwa push, pop oder unshift. Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, Sie können jedoch ein Array jedes beliebigen Objekttyps haben.

Der Code zeigt außerdem beide Möglichkeiten zur Deklaration eines Feldes:

- Feld-_Name_ und -_Typ_ als Schlüssel-Wert-Paar, wie bei den Feldern `name`, `binary` und `living`.
- Feld-_Name_, gefolgt von einem Objekt, das den `type` und alle weiteren _Optionen_ für das Feld definiert. Optionen umfassen beispielsweise:
  - Standardwerte.
  - Integrierte Validatoren, etwa Maximal-/Minimalwerte, sowie benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Klein- oder Großbuchstaben umgewandelt oder gekürzt werden sollen, beispielsweise `{ type: String, lowercase: true, trim: true }`.

Weitere Informationen über Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet integrierte und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. In allen Fällen können Sie sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für einen Validierungsfehler angeben.

Zu den integrierten Validatoren gehören:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den integrierten Validator [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required). Dieser legt fest, ob das Feld angegeben werden muss, damit ein Dokument gespeichert werden kann.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) verfügen über die Validatoren [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>).
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) verfügen über:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge zulässiger Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel, leicht aus den Mongoose-Dokumenten angepasst, zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Vollständige Informationen zur Feldvalidierung finden Sie unter [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die aber nicht in MongoDB persistiert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert für die Speicherung in mehrere Werte zu zerlegen. Das Beispiel in der Dokumentation erstellt – und zerlegt – eine virtuelle Eigenschaft für den vollständigen Namen aus einem Feld für Vor- und Nachnamen. Dies ist einfacher und übersichtlicher, als jedes Mal einen vollständigen Namen zu erstellen, wenn er in einem Template verwendet wird.

> [!NOTE]
> Wir verwenden in der Bibliothek eine virtuelle Eigenschaft, um mithilfe eines Pfads und des `_id`-Werts des Datensatzes eine eindeutige URL für jeden Modelldatensatz zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Query-Hilfsfunktionen

Ein Schema kann auch über [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Query-Hilfsfunktionen](https://mongoosejs.com/docs/guide.html#query-helpers) verfügen. Die Instanz- und statischen Methoden sind ähnlich, allerdings mit dem offensichtlichen Unterschied, dass eine Instanzmethode einem bestimmten Datensatz zugeordnet ist und Zugriff auf das aktuelle Objekt hat. Query-Hilfsfunktionen ermöglichen es Ihnen, die [verkettbare Query-Builder-API](https://mongoosejs.com/docs/queries.html) von mongoose zu erweitern, beispielsweise indem Sie zusätzlich zu den Methoden `find()`, `findOne()` und `findById()` eine Abfrage „byName“ hinzufügen.

### Modelle verwenden

Sobald Sie ein Schema erstellt haben, können Sie daraus Modelle erstellen. Das Modell stellt eine Sammlung von Dokumenten in der Datenbank dar, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Im Folgenden geben wir einen kurzen Überblick. Weitere Informationen finden Sie unter [Models](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die folgenden Beispiele zeigen nur die Verwendung der relevanten Methoden und von `await`, also den wesentlichen Code zur Verwendung der Methoden.
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern wurden zur besseren Übersichtlichkeit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie oben unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron).

#### Dokumente erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die folgenden Beispiele setzen voraus, dass `SomeModel` ein Modell mit einem einzigen Feld `name` ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig mit ihrem Speichern zu definieren.
Unten erstellen wir nur eine Instanz, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell besitzt eine zugehörige Verbindung. Wenn Sie `mongoose.model()` verwenden, ist dies die Standardverbindung. Sie erstellen eine neue Verbindung und rufen darauf `.model()` auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können mit der Punktsyntax auf die Felder dieses neuen Datensatzes zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte zurück in die Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Nach Datensätzen suchen

Sie können mit Query-Methoden nach Datensätzen suchen und die Abfragebedingungen als JSON-Dokument angeben. Das folgende Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und dabei nur die Felder für _Name_ und _Alter_ des Athleten zurückgeben. Hier geben wir nur ein übereinstimmendes Feld an – sport –, aber Sie können weitere Kriterien hinzufügen, Kriterien für reguläre Ausdrücke angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig, sich daran zu erinnern, dass das Nichtfinden von Ergebnissen bei einer Suche **kein Fehler** ist – im Kontext Ihrer Anwendung kann es jedoch ein Fehlerfall sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der im Ergebnis zurückgegebenen Einträge prüfen.

Query-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable des Typs [Query](https://mongoosejs.com/docs/api/query.html) zurück.
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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun und alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, statt sie getrennt hinzuzufügen.
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

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) ruft alle passenden Datensätze ab, aber häufig möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen einen einzelnen Datensatz ab:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id`; jedes Dokument hat eine eindeutige `id`.
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Finden ein einzelnes Dokument anhand von `id` oder Kriterien und aktualisieren oder entfernen es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt außerdem eine Methode [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>), mit der Sie die Anzahl der Elemente abrufen können, die Bedingungen entsprechen. Dies ist nützlich, wenn Sie zählen möchten, ohne die Datensätze tatsächlich abzurufen.

Mit Abfragen können Sie noch wesentlich mehr tun. Weitere Informationen finden Sie unter [Queries](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Mit zugehörigen Dokumenten arbeiten – Population

Sie können mithilfe des Schemafelds `ObjectId` Referenzen von einer Dokument-/Modellinstanz auf eine andere erstellen oder mithilfe eines Arrays von `ObjectIds` von einem Dokument auf viele. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugeordneten Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

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
Unten erstellen wir einen Autor und anschließend eine Geschichte und weisen die Autoren-ID dem Autorenfeld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstils ist, dass wir den Hauptpfad unseres Codes nicht durch Fehlerprüfungen verkomplizieren müssen.
> Falls eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgelöst.
> Unser Fehlerbehandlungscode behandelt dies getrennt – normalerweise in einem `catch()`-Block –, sodass die Absicht unseres Codes sehr klar bleibt.

Unser Story-Dokument enthält nun einen Autor, auf den durch die ID des Autorendokuments verwiesen wird. Um die Autoreninformationen in den Story-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir unserer Geschichte einen Autor hinzugefügt haben, aber nichts unternommen haben, um unsere Geschichte zum Array `stories` unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors abrufen? Eine Möglichkeit wäre, unsere Geschichte dem Array `stories` hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen hätten, an denen die Informationen über die Beziehung zwischen Autoren und Geschichten gepflegt werden müssen.
>
> Ein besserer Weg besteht darin, die `_id` unseres _Autors_ abzurufen und dann mit `find()` in allen Geschichten im Feld author danach zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist beinahe alles, was Sie für dieses Tutorial über die Arbeit mit zugehörigen Elementen wissen müssen. Ausführlichere Informationen finden Sie unter [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Sie können zwar Schemas und Modelle mit jeder beliebigen Dateistruktur erstellen, wir empfehlen jedoch dringend, jedes Modell-Schema in einem eigenen Modul – einer eigenen Datei – zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
Dies ist unten dargestellt:

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

Anschließend können Sie das Modell in anderen Dateien mit `require` laden und sofort verwenden. Im Folgenden zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nachdem wir nun etwas darüber wissen, was Mongoose leisten kann, und wie wir unsere Modelle entwerfen möchten, ist es Zeit, mit der Arbeit an der Website _LocalLibrary_ zu beginnen. Als Erstes richten wir eine MongoDB-Datenbank ein, die wir zum Speichern unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial verwenden wir die cloudgehostete Sandbox-Datenbank von [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). Diese Datenbankstufe gilt als nicht geeignet für Produktionswebsites, da sie keine Redundanz bietet, eignet sich jedoch hervorragend für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter Anbieter für _Datenbank als Dienst_ ist, den Sie vernünftigerweise für Ihre Produktionsdatenbank wählen könnten. Andere beliebte Optionen zum Zeitpunkt der Erstellung sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die übrigen Anweisungen in diesem Artikel wären ähnlich, mit Ausnahme der Datenbank-URL, die Sie beim Herstellen der Verbindung angeben würden.
> Im Tutorial [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), hätten aber ebenso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Zunächst müssen Sie bei MongoDB Atlas [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register). Dies ist kostenlos und erfordert lediglich die Eingabe grundlegender Kontaktdaten sowie die Zustimmung zu den Nutzungsbedingungen.

Nach der Anmeldung gelangen Sie zum Bildschirm [home](https://cloud.mongodb.com/v2):

1. Klicken Sie im Abschnitt _Overview_ auf die Schaltfläche **+ Create**.

   ![Eine Datenbank in MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Deploy your cluster_ geöffnet.
   Klicken Sie auf die Optionsvorlage **M0 FREE**.

   ![Eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas auswählen.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie auf der Seite nach unten, um die verschiedenen auswählbaren Optionen zu sehen.
   ![Einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas auswählen.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     In diesem Tutorial behalten wir `Cluster0` bei.
   - Deaktivieren Sie das Kontrollkästchen _Preload sample dataset_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie im Abschnitt _Provider_ und _Region_ einen beliebigen Anbieter und eine beliebige Region aus. Unterschiedliche Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir verwenden sie hier nicht.
   - Klicken Sie auf die Schaltfläche **Create deployment**. Das Erstellen des Clusters dauert einige Minuten.

4. Dadurch wird der Abschnitt _Security Quickstart_ geöffnet.
   ![Die Zugriffsregeln auf dem Bildschirm Security Quickstart in MongoDB Atlas einrichten.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung für den Zugriff auf die Datenbank verwendet. Oben haben wir eine neue Anmeldung namens „cooluser“ erstellt.
     Denken Sie daran, die Zugangsdaten zu kopieren und sicher zu speichern, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Create User**.

     > [!NOTE]
     > Vermeiden Sie Sonderzeichen im Passwort Ihres MongoDB-Benutzers, da mongoose die Verbindungszeichenfolge möglicherweise nicht korrekt analysiert.

   - Wählen Sie **Add by current IP address**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld IP Address ein und klicken Sie dann auf die Schaltfläche **Add Entry**.
     Dadurch teilen Sie MongoDB mit, dass wir den Zugriff von überall aus erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Vorgehensweise, die IP-Adressen zu begrenzen, die sich mit Ihrer Datenbank und anderen Ressourcen verbinden dürfen. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, von wo die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Finish and Close**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Go to Overview**.
   ![Nach dem Einrichten der Zugriffsregeln in MongoDB Atlas zu Databases wechseln](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum Bildschirm _Overview_ zurück. Klicken Sie im Menü _Deployment_ auf der linken Seite auf den Abschnitt _Database_. Klicken Sie auf die Schaltfläche **Browse Collections**.
   ![Eine Sammlung in MongoDB Atlas einrichten.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Collections_ geöffnet. Klicken Sie auf die Schaltfläche **Add My Own Data**.
   ![Eine Datenbank in MongoDB Atlas erstellen.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Create Database_ geöffnet.

   ![Details während der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie als Namen der neuen Datenbank `local_library` ein.
   - Geben Sie als Namen der Sammlung `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Create**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Collections_ zurück, in dem Ihre Datenbank erstellt wurde.
   ![Bestätigung der Datenbankerstellung in MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Overview_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie im Bildschirm _Overview_ von Cluster0 auf die Schaltfläche **Connect**.

    ![Verbindung nach dem Einrichten eines Clusters in MongoDB Atlas konfigurieren.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Connect to Cluster0_ geöffnet.

    ![Die Short-SRV-Verbindung beim Einrichten einer Verbindung in MongoDB Atlas auswählen.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Drivers_ und anschließend den _Driver_ **Node.js** sowie die angezeigte _Version_.
    - Installieren Sie den Treiber **NICHT**, wie vorgeschlagen.
    - Klicken Sie auf das Symbol **Copy**, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie diese in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen „local_library“ im Pfad vor den Optionen ein: `...mongodb.net/local_library?retryWrites...`
    - Speichern Sie die Datei mit dieser Zeichenfolge an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und verfügen über eine URL mit Benutzernamen und Passwort, über die darauf zugegriffen werden kann.
Sie sieht etwa so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Local-Library-Website-Grundstruktur](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose einschließlich seiner Abhängigkeiten zu installieren und es zu Ihrer Datei **package.json** hinzuzufügen, sofern Sie dies nicht bereits beim Lesen der obigen [Mongoose-Einführung](#installieren_von_mongoose_und_mongodb) getan haben.

```bash
npm install mongoose
```

## Mit MongoDB verbinden

Öffnen Sie **bin/www** im Stammverzeichnis Ihres Projekts und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port festlegen, also nach der Zeile `app.set("port", port);`.
Ersetzen Sie die Datenbank-URL-Zeichenfolge (`insert_your_database_url_here`) durch die Standort-URL Ihrer eigenen Datenbank, also anhand der Informationen aus _MongoDB Atlas_.

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

Wie oben in der [Mongoose-Einführung](#verbindung_mit_mongodb_herstellen) erläutert, erstellt dieser Code die Standardverbindung zur Datenbank und gibt Fehler in der Konsole aus.
Er ruft außerdem eine Funktion `startServer()` auf, sobald die Verbindung erfolgreich hergestellt wurde; diese erstellen wir als Nächstes.

Die generierte Datei **bin/www** erstellt den HTTP-Server und beginnt sofort mit dem Lauschen, unabhängig davon, ob die Datenbankverbindung erfolgreich ist.
Suchen Sie weiter unten in derselben Datei diesen Code:

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

Ersetzen Sie ihn durch Folgendes. Dadurch werden die Servererstellung und das Lauschen in eine Funktion `startServer()` verschoben, sodass sie erst ausgeführt wird, wenn `connectMongoose()` aufgelöst wurde:

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
> Wir hätten den Datenbankverbindungscode auch in **app.js** einfügen können.
> Das Platzieren im Einstiegspunkt der Anwendung entkoppelt Anwendung und Datenbank, wodurch es einfacher wird, eine andere Datenbank zum Ausführen von Testcode zu verwenden.

Beachten Sie, dass das harte Codieren von Datenbankzugangsdaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun dies hier, weil es den grundlegenden Verbindungscode zeigt und weil während der Entwicklung kein erhebliches Risiko besteht, dass das Offenlegen dieser Details sensible Informationen preisgibt oder beschädigt.
Beim [Bereitstellen in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration) zeigen wir Ihnen, wie Sie dies sicherer umsetzen können!

## Definieren des LocalLibrary-Schemas

Wir definieren ein separates Modul für jedes Modell, wie [oben besprochen](#one_schemamodel_per_file).
Erstellen Sie zunächst im Projektstamm einen Ordner für unsere Modelle (**/models**) und anschließend für jedes Modell eigene Dateien:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author-Modell

Kopieren Sie den unten dargestellten `Author`-Schemacode und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor mit `String`-SchemaTypes für Vor- und Nachnamen – erforderlich, mit maximal 100 Zeichen – sowie `Date`-Feldern für Geburts- und Sterbedatum.

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

Wir haben außerdem eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für das AuthorSchema mit dem Namen „url“ deklariert, die die absolute URL zurückgibt, die zum Abrufen einer bestimmten Instanz des Modells erforderlich ist. Wir verwenden diese Eigenschaft in unseren Templates immer dann, wenn wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Unsere URLs im Schema als virtuelle Eigenschaft zu deklarieren, ist eine gute Idee, weil die URL eines Elements dann nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL noch nicht funktionieren, da wir noch keinen Code für Routen haben, die einzelne Modellinstanzen behandeln.
> Diese richten wir in einem späteren Artikel ein!

Am Ende des Moduls exportieren wir das Modell.

### Book-Modell

Kopieren Sie den unten dargestellten `Book`-Schemacode und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Der größte Teil ähnelt dem Autorenmodell: Wir haben ein Schema mit mehreren String-Feldern und eine virtuelle Eigenschaft deklariert, um die URL bestimmter Buchdatensätze abzurufen, und wir haben das Modell exportiert.

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

- author ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und erforderlich.
- genre ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Dieses Objekt haben wir noch nicht deklariert!

### BookInstance-Modell

Kopieren Sie abschließend den unten dargestellten `BookInstance`-Schemacode und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
Die `BookInstance` repräsentiert ein konkretes Exemplar eines Buchs, das jemand ausleihen könnte. Sie enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es voraussichtlich zurückgegeben wird und Details zur „Imprint“- oder Versionsangabe.

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

Die hier neu dargestellten Elemente sind die Feldoptionen:

- `enum`: Damit können wir die zulässigen Werte eines Strings festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben. Durch die Verwendung eines Enum können wir Schreibfehler und beliebige Werte für unseren Status verhindern.
- `default`: Mit `default` legen wir den Standardstatus neu erstellter Buchexemplare auf „Maintenance“ und das Standarddatum `due_back` auf `now` fest. Beachten Sie, dass Sie beim Festlegen des Datums die Funktion Date aufrufen können.

Alles andere sollte Ihnen aus unserem vorherigen Schema bekannt sein.

### Genre-Modell – Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres, also der Buchkategorie, beispielsweise Belletristik oder Sachbuch, Liebesroman oder Militärgeschichte usw.

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-SchemaType namens `name` zur Beschreibung des Genres haben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres mit dem Namen `url`.
- Exportieren Sie das Modell.

## Testen – einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen und einige Beispielbücher sowie andere Elemente zu erstellen, die wir in unseren nächsten Artikeln verwenden können, führen wir nun ein _unabhängiges_ Skript aus, das Elemente jedes Typs erstellt:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter – oder erstellen Sie sie auf andere Weise – und speichern Sie sie in Ihrem Verzeichnis _express-locallibrary-tutorial_ auf derselben Ebene wie `package.json`.

   > [!NOTE]
   > Der Code in `populatedb.js` kann beim Lernen von JavaScript nützlich sein, das Verständnis ist jedoch für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript in Ihrer Eingabeaufforderung mit node aus und übergeben Sie dabei die URL Ihrer _MongoDB_-Datenbank. Dabei handelt es sich um dieselbe URL, mit der Sie zuvor in `app.js` den Platzhalter _insert_your_database_url_here_ ersetzt haben:

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (`"`) einschließen.
   > Auf anderen Betriebssystemen benötigen Sie möglicherweise einfache Anführungszeichen (`'`).

3. Das Skript sollte vollständig ausgeführt werden und während der Erstellung die Elemente im Terminal anzeigen.

> [!NOTE]
> Wechseln Sie zu Ihrer Datenbank in MongoDB Atlas, auf der Registerkarte _Collections_.
> Sie sollten nun in einzelne Sammlungen von Books, Authors, Genres und BookInstances wechseln und einzelne Dokumente ansehen können.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs in Node/Express sowie viel darüber gelernt, wie Mongoose-Schemas und -Modelle definiert werden. Anschließend haben wir diese Informationen verwendet, um die Modelle `Book`, `BookInstance`, `Author` und `Genre` für die Website _LocalLibrary_ zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir mehrere Instanzen mit einem eigenständigen Skript erstellt haben. Im nächsten Artikel betrachten wir das Erstellen einiger Seiten zur Anzeige dieser Objekte.

## Siehe auch

- [Database integration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema Types](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Models](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Queries](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
