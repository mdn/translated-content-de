---
title: "Express Tutorial Teil 3: Nutzung einer Datenbank (mit Mongoose)"
short-title: "3: Nutzung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 3d04bc6079a6b9d051c72c465a6e0421f20f603c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erklärt, wie man sie mit Node/Express-Apps einsetzt. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website bereitzustellen. Es wird erklärt, wie Objektschema und -modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Zudem wird kurz auf einige der Hauptmethoden eingegangen, mit denen man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung einer Skeleton-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Die Fähigkeit erlangen, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Bibliothekspersonal wird die Local Library Website nutzen, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen, um nach Büchern zu durchsuchen und zu suchen, um herauszufinden, ob Exemplare verfügbar sind, und sie dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Apps können viele verschiedene Datenbanken nutzen, und es gibt mehrere Ansätze, um **C**reate, **R**ead, **U**pdate und **D**elete (CRUD) Operationen durchzuführen. Dieses Tutorial gibt einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_ Apps können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration/), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie Lernkurve/Zeit bis zur Produktivität, Performanz, Einfachheit der Replikation/Sicherung, Kosten, Unterstützung durch die Community usw. berücksichtigen. Obwohl es keine "beste" Datenbank gibt, sollten fast alle der beliebten Lösungen für eine kleine bis mittelgroße Seite wie unsere Local Library mehr als ausreichend sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei häufige Ansätze, um mit einer Datenbank zu interagieren:

- Verwendung der nativen Abfragesprache der Datenbanken, z.B. SQL.
- Verwendung eines Object-Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann mit der zugrunde liegenden Datenbank verknüpft werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Unterstützung bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder der unterstützten Abfragesprache der Datenbank erreicht werden. Objekt-Mapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu mappen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist insbesondere der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte denken können, anstatt über Datenbanksemantik - dies gilt insbesondere dann, wenn Sie mit verschiedenen Datenbanken (entweder auf derselben oder auf verschiedenen Websites) arbeiten müssen. Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind mit der nativen Abfragesprache sehr vertraut oder die Leistung ist von größter Wichtigkeit, dann sollten Sie ernsthaft in Erwägung ziehen, einen ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM-/ORM-Lösungen, die auf der npm-Paketmanager-Website verfügbar sind (schauen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/) Objektmodellierungs-Tool, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl versprechenbasierte als auch herkömmliche Callback-Schnittstellen, bietet Unterstützung für Transaktionen, eager/nested-eager Relation Loading, polymorphe Assoziationen und Unterstützung für Eins-zu-Eins-, Eins-zu-Viele- und Viele-zu-Viele-Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und verfügt über solide Unterstützung für Transaktionen, Relationen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für Node.js. Es unterstützt MySQL, SQLite und Postgres und hilft bei der Arbeit mit der Datenbank mit einem objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful-APIs, ist GraphQL sehr beliebt und bietet Funktionen zum Lesen von Daten aus Datenbanken.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) bei der Auswahl einer Lösung berücksichtigen. Zum Zeitpunkt des Schreibens ist Mongoose mit Abstand der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source [NoSQL](https://de.wikipedia.org/wiki/NoSQL) Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil die Dokumentenspeicherung und das Abfragesystem sehr ähnlich wie JSON aussehen und JavaScript-Entwicklern daher vertraut sind.

> [!NOTE]
> Man muss MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn man bereits mit MongoDB vertraut ist.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Gestaltung der LocalLibrary-Modelle

Bevor Sie sich eifrig ans Entwickeln der Modelle machen, ist es sinnvoll, sich ein paar Minuten Gedanken darüber zu machen, welche Daten gespeichert werden müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass möglicherweise mehrere Exemplare verfügbar sind (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es kann mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf dem Buchtitel, Autor, Genre und der Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe von verwandten Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie könnten auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. eine Drop-Down-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website zu kodieren - dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel dafür ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

Mit diesem Wissen zeigt das UML-Zusammenhänge-Diagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen). Wie oben diskutiert, haben wir Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status der spezifischen physischen Exemplare des Buches im System) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben beschlossen, kein Modell für den `BookInstance:status` zu haben - wir werden die akzeptablen Werte fest codieren, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder Box sehen Sie den Modellnamen, die Feldnamen und Typen, sowie die Methoden und deren Rückgabewerte.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen nahe dem `Book`-Modell zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose_einführung) unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu platzieren (Sie können die umgekehrte Beziehung immer noch finden, indem Sie im anderen Modell nach der zugehörigen `_id` suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buch-Schema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Auswahl war etwas willkürlich - wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Bibliotheksmodell mit richtiger Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Beim Lesen sollten Sie bedenken, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Dies bedeutet, dass die Methoden sofort zurückkehren, und der Code zur erfolgreichen oder fehlerhaften Behandlung der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server auf die Fertigstellung der Datenbankoperation wartet, sodass der Server auf andere Anfragen reaktionsfähig bleibt.

JavaScript hat eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch hat sich JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden gestützt, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "abgewickelt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptwege, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise abgewickelt wird. Wir empfehlen dringend das Lesen von [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für einen Überblick über beide Ansätze.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Die Funktionsweise dieses Ansatzes besteht darin, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu markieren und dann innerhalb dieser Funktion `await` auf jede Methode anzuwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihr Vorgang an der ersten `await`-Methode angehalten, bis das Promise abgewickelt ist.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der folgende Code kann ausgeführt werden.
Später, wenn das Promise abgewickelt ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück, oder es wird ein Fehler ausgegeben, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder eine weitere `await`-Methode erreicht wird, an welchem Punkt es erneut pausieren würde, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Unten sehen Sie, wie das funktioniert.
`myFunction()` ist eine asynchrone Funktion, die einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block um die `await`-Ausdrücke herum enthält.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise aufgelöst wird, danach wird der Code auf `functionThatReturnsPromise()` fortgesetzt und erneut gewartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgegeben wird, und dies geschieht, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Eine asynchrone Funktion gibt ein Promise zurück, das abgelehnt wird, wenn ein Fehler innerhalb der Funktion nicht abgefangen wird.
Um diesen Fehler im aufrufenden Code abzufangen, verwenden Sie die `catch()`-Methode des zurückgegebenen Promises, oder `await` den Funktionsaufruf innerhalb eines `try...catch` Blocks.
Ein Funktionsaufruf innerhalb eines `try...catch` Blocks ohne `await` fängt die Ablehnung nicht ab, weil es `await` ist, das das zurückgegebene abgelehnte Promise in einen ausgegebenen Fehler umwandelt.

Die oben genannten asynchronen Methoden werden der Reihe nach ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein Iterable von Promises als Eingabe nimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise erfüllt, wenn alle Eingabe-Promises erfüllt werden, mit einem Array der Erfüllungswerte.
Es lehnt ab, wenn eines der Eingangspromises ablehnt, mit diesem ersten Ablehnungsgrund.

Der Code unten zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, bis sie mit dem Promise abgeschlossen sind, das von `Promise.all()` zurückgegeben wird.
Sobald sie beide abgeschlossen sind, gibt `await` zurück und das Ergebnisse-Array wird gefüllt, dann fährt die Funktion mit dem nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, abgewickelt ist.
Sie würden einen `catch()`-Handler an das Promise anhängen, das von `myFunction()` zurückgegeben wird, um alle Fehler abzufangen.

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

Promises mit `await`/`async` ermöglichen sowohl eine flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose Einführung

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und grundlegende Abfragen durchführt.

> [!NOTE]
> Diese Einführung ist stark beeinflusst von der [Mongoose Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Installation von Mongoose und MongoDB

Mongoose ist in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert - mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es wird MongoDB selbst nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme von hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloud-basierten Datenbankdienst der freien Stufe, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und sinnvoll für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (Datenbank-als-ein-Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB herstellen

Mongoose benötigt eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` und sich zu einer lokal gehosteten Datenbank mit `mongoose.connect()` verbinden, wie unten gezeigt (für das Tutorial werden wir stattdessen zu einer internet-gehosteten Datenbank verbinden).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) besprochen, warten wir hier auf das Promise, das von der `connect()`-Methode zurückgegeben wird, innerhalb einer `async` Funktion.
> Wir verwenden den Promise `catch()`-Handler, um alle Fehler beim Versuch zu verbinden zu behandeln, könnten dies aber auch mit `await main()` in einem `try...catch` Block in einer anderen `async` Funktion getan haben.

Sie können das Standard `Connection`-Objekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt die gleiche Form des Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) an wie `connect()` und gibt ein `Connection`-Objekt zurück).
Beachten Sie, dass `createConnection()` sofort zurückkehrt; wenn Sie auf die Herstellung der Verbindung warten müssen, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definition und Erstellung von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die Felder zu definieren, die in jedem Dokument gespeichert sind, zusammen mit ihren Validierungsanforderungen und Standardwerten. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die aber nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies weiter unten erläutern).

Schemas werden dann mit der `mongoose.model()` Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des angegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird mit einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank verknüpft. Die Dokumente enthalten die im Modell `Schema` definierten Felder/Schema-Typen.

#### Definition von Schemata

Das unten gezeigte Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()`en Sie mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen und definieren die verschiedenen Felder darin im Objektparameter des Konstruktors.

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

In dem obigen Fall haben wir nur zwei Felder, ein String und ein Datum. In den nächsten Abschnitten zeigen wir einige der anderen Feldtypen, Validierungen und andere Methoden.

#### Erstellung eines Modells

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

Das erste Argument ist der singuläre Name der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie zur Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen durchzuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie das im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) funktioniert und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben - jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
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

- `ObjectId`: Stellt spezifische Instanzen eines Modells in der Datenbank dar. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()` Methode verwenden, um die zugehörigen Informationen bei Bedarf zu ziehen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen verwenden (push, pop, unshift, etc.). Die obigen Beispiele zeigen ein Array von Objekten ohne spezifizierten Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Arten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und alle anderen _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String` Felder automatisch auf Kleinschrift, Großschrift oder beschnitten eingestellt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung beim Validierungsfehler in allen Fällen zu spezifizieren.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dies wird verwendet, um anzugeben, ob das Feld geliefert werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): gibt einen regulären Ausdruck an, den der String erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das untenstehende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen spezifizieren können:

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

Virtuelle Eigenschaften sind Dokumenteneigenschaften, die Sie abrufen und setzen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während die Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Das Beispiel in der Dokumentation konstruiert (und zerlegt) eine vollständige Namensvirtuelle Eigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu konstruieren, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mithilfe eines Pfads und des `_id` Wertes des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics), und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [verknüpfbare Abfrag-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (zum Beispiel können Sie eine Abfrage "byName" hinzufügen, neben den Methoden `find()`, `findOne()` und `findById()`).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells individuelle Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir bieten unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code zur Nutzung der Methoden).
> Die umgebende `async function` und der `try...catch` Block zum Abfangen von Fehlern sind zur Klarheit weggelassen.
> Für mehr Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die unten gezeigten Beispiele gehen davon aus, dass `SomeModel` ein Modell (mit einem einzigen Feld `name`) ist, das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig zu definieren und zu speichern.
Unten erstellen wir nur eine, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugehörige Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mithilfe von Abfragemethoden suchen, wobei Sie die Abfragebedingungen als JSON-Dokument angeben. Das unten gezeigte Codefragment zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, wobei nur die Felder für den Namen und das Alter des Athleten zurückgegeben werden. Hier geben wir nur ein übereinstimmendes Feld an (Sportart), aber Sie können weitere Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen kein **Fehler** für eine Suche ist - es könnte jedoch ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis prüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teile zu zerlegen, bevor Sie es mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await`en können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verketten, anstatt sie separat hinzuzufügen.
Das unten gezeigte Codefragment ist dieselbe Abfrage wie oben, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode erhält alle passenden Datensätze, aber oft möchte man nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzigen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es. Diese sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Elemente zu erhalten, die Bedingungen erfüllen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten - Population

Sie können Referenzen von einem Dokument/Modell-Instanz auf eine andere mithilfe des `ObjectId` Schema-Felds erstellen oder von einem Dokument auf viele mithilfe eines Arrays von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
Die `ref` Eigenschaft teilt dem Schema mit, welches Modell diesem Feld zugewiesen werden kann.

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

Wir können unsere Referenzen auf das zugehörige Dokument speichern, indem wir den `_id` Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autoren-ID unserem Geschichtsautor-Feld zu.

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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfungen verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler ausgegeben.
> Unser Fehlerbehandlungscode kümmert sich dann separat darum (normalerweise in einem `catch()` Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Story-Dokument hat jetzt einen Autor, der durch den Autor-Dokument-ID referenziert wird. Um die Autoreninformationen in den Story-Ergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden festgestellt haben, dass wir unserem Geschichte einen Autor hinzugefügt haben, aber nichts getan haben, um unsere Geschichte in das `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte in das Stories-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Orte hätten, an denen die Informationen, die Autoren und Geschichten betreffen, aufrechterhalten werden müssten.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um in dem Autorenfeld aller Geschichten danach zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über das Arbeiten mit verwandten Gegenständen _für dieses Tutorial_ wissen müssen. Für ausführlichere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Obwohl Sie Schemas und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zur Erstellung des Modells zu exportieren.
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

Sie können es dann in anderen Dateien sofort anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nachdem wir nun etwas darüber wissen, was Mongoose kann und wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der _LocalLibrary_ Website zu beginnen. Der allererste Schritt besteht darin, eine MongoDB-Datenbank einzurichten, die wir zur Speicherung unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank verwenden. Diese Datenbank-Stufe wird nicht als geeignet für Produktionswebsites betrachtet, weil sie keine Redundanz hat, aber sie ist großartig für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _database as a service_ Anbieter ist, den Sie für Ihre Produktionsdatenbank vernünftigerweise wählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [Rackspace](https://www.rackspace.com/data/rackspace-dbaas)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine lokale MongoDB-Datenbank einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir hätten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein [Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eintragen und deren Nutzungsbedingungen akzeptieren).

Nach dem Einloggen gelangen Sie zur [Startseite](https://cloud.mongodb.com/v2).

1. Klicken Sie auf die Schaltfläche **+ Erstellung** im Abschnitt _Übersicht_.

   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die **M0 FREE**-Optionvorlage.

   ![Wählen Sie bei der Verwendung von MongoDB Atlas eine Bereitstellungsoption aus.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite herunter, um die verschiedenen Optionen zu sehen, die Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Für dieses Tutorial behalten wir ihn als `Cluster0` bei.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatenset vorladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine Region aus den Abschnitten _Provider_ und _Region_. Unterschiedliche Regionen bieten unterschiedliche Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Erstellung bereitstellen** (das Erstellen des Clusters wird einige Minuten in Anspruch nehmen).

4. Dadurch wird der Abschnitt _Security Quickstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Bildschirm Security Quickstart auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen zu kopieren und sicher zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie in Ihrem MongoDB-Benutzerpasswort die Verwendung von Sonderzeichen, da Mongoose den Verbindungsstring möglicherweise nicht richtig analysiert.

   - Wählen Sie **Zur Liste durch aktuelle IP hinzufügen**, um den Zugriff von Ihrem aktuellen Computer zu erlauben.
   - Geben Sie `0.0.0.0/0` in das Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist bewährte Praxis, die IP-Adressen zu begrenzen, die sich mit Ihrer Datenbank und anderen Ressourcen verbinden können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertig stellen und schließen**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu Datenbanken nach dem Einrichten von Zugriffsregeln auf MongoDB Atlas](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zur _Übersicht_ zurück. Klicken Sie auf den Abschnitt _Datenbank_ im Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Sammlungen_ geöffnet. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Datenbank erstellen_ geöffnet.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Clusterübersicht zurückzukehren.

10. Klicken Sie auf dem Bildschirm _Overview_ von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach dem Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Verbinden mit Cluster0_ geöffnet.

    ![Wählen Sie die Short SRV Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und _Version_ wie gezeigt.
    - **NICHT** den Treiber wie vorgeschlagen installieren.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den Platzhalter `<password>` im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`).
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben jetzt die Datenbank erstellt und haben eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Dies sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie ein Eingabeaufforderungsfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skeleton Local Library website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es zu Ihrer **package.json** Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen der [Mongoose Einführung](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port setzen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die Standorts-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

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

Wie in der [Mongoose Einführung](#verbindung_zu_mongodb_herstellen) oben erörtert, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.
Er ruft auch eine `startServer()` Funktion auf, sobald die Verbindung erfolgreich ist, die wir als nächstes erstellen werden.

Die generierte **bin/www** Datei erstellt den HTTP-Server und startet diesen sofort, unabhängig davon, ob die Datenbankverbindung erfolgreich ist.
Finden Sie diesen Code, weiter unten in derselben Datei:

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

Ersetzen Sie ihn durch den folgenden, der die Servererstellung und das Lauschen in eine `startServer()` Funktion verschiebt, damit er nur ausgeführt wird, wenn `connectMongoose()` gelöst ist:

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
> Wir hätten der Datenbankverbindungs-Code in unseren **app.js** Code einfügen können.
> Die Trennung der Anwendung und der Datenbank erleichtert es, eine andere Datenbank für die Ausführung von Testcode zu verwenden.

Hinweis: Das harte Kodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, wird nicht empfohlen.
Wir tun es hier, weil es den Kernverbindungscode zeigt und weil während der Entwicklung kein erhebliches Risiko besteht, dass diese Details lecken und sensible Informationen exponieren oder beschädigen.
Wir zeigen Ihnen, wie man dies sicherer macht, wenn wir über [Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration) sprechen!

## Definieren des LocalLibrary-Schemas

Wir werden ein separates Modul für jedes Modell definieren, wie [oben diskutiert](#one_schemamodel_per_file).
Beginnen Sie mit dem Erstellen eines Ordners für unsere Modelle im Projektstamm (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autor-Modell

Kopieren Sie den oben gezeigten `Author`-Schema-Code und fügen Sie ihn in Ihre **./models/author.js** Datei ein.
Das Schema definiert einen Autor mit `String` SchemaTypes für Vor- und Familienname (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date` Felder für die Geburts- und Sterbedaten.

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

Wir haben auch ein [virtuelles](#virtuelle_eigenschaften) für das AuthorSchema mit dem Namen "url" deklariert, das die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten - wir verwenden die Eigenschaft in unseren Vorlagen, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Die Deklaration unserer URLs als virtuell im Schema ist eine gute Idee, da dann die URL für ein Element nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, da wir noch keinen Routen-Handlercode für individuelle Modellinstanzen haben.
> Wir werden das in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buch-Modell

Kopieren Sie den unten gezeigten `Book`-Schema-Code und fügen Sie ihn in Ihre **./models/book.js** Datei ein.
Der größte Teil davon ähnelt dem Autor-Modell - wir haben ein Schema mit einer Reihe von String-Feldern und ein virtuelles Feld zum Abrufen der URL von spezifischen Buchdatensätzen deklariert und das Modell exportiert.

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

- author ist eine Referenz auf ein einzelnes `Author` Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf ein Array von `Genre` Modell-Objekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz-Modell

Schließlich kopieren Sie den unten gezeigten `BookInstance`-Schema-Code und fügen ihn in Ihre **./models/bookinstance.js** Datei ein.
Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen kann und enthält Informationen darüber, ob die Kopie verfügbar ist, an welchem Datum sie zurück erwartet wird und "Impressum" (oder Version) Details.

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

- `enum`: Dies erlaubt uns, die erlaubten Werte eines Strings zu setzen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (durch die Verwendung eines Enums können wir falsche Schreibweisen und willkürliche Werte für unseren Status verhindern).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Maintenance" zu setzen und das Standard `due_back` Datum auf `now` (beachten Sie, wie Sie die Date-Funktion beim Setzen des Datum Aufrufs).

Alles andere sollte Ihnen von unserem vorherigen Schema vertraut vorkommen.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (die Kategorie des Buches, z.B. ob es sich um Fiktion oder Nicht-Fiktion handelt, Romantik oder Militärgeschichte usw.).

Die Definition ist sehr ähnlich den anderen Modellen:

- Das Modell sollte einen `String` SchemaTyp namens `name` haben, der das Genre beschreibt.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie [virtuelles](#virtuelle_eigenschaften) für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen einiger Artikel

Das war's. Wir haben nun alle Modelle für die Site eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Gegenstände jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr _express-locallibrary-tutorial_ Verzeichnis herunter (auf der gleichen Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, das Verständnis ist jedoch für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript in Ihrer Eingabeaufforderung mit node aus und übergeben Sie die URL Ihrer _MongoDB_ Datenbank (dieselbe, die Sie anstelle von _insert_your_database_url_here_ Platzhalter mit `app.js` früher ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") einschließen.
   > Unter anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen, indem es Artikel anzeigt, während es sie im Terminal erstellt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tab _Sammlungen_).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu bohren und individuelle Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir einiges über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert werden. Anschließend haben wir diese Informationen verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zum Schluss haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen (mit einem eigenständigen Skript) erstellt haben. Im nächsten Artikel werden wir uns mit der Erstellung von Seiten befassen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration/) (Express-Dokumentation)
- [Mongoose Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
