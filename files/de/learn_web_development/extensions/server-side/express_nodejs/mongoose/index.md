---
title: "Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)"
short-title: "3: Verwendung von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel führt kurz in Datenbanken ein und erläutert, wie sie in Node/Express-Apps verwendet werden können. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um auf die Datenbank für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website zuzugreifen. Er erklärt, wie Objektschemas und -modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Außerdem werden kurz einige der Hauptmöglichkeiten gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung eines Skelett-Websites</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage zu sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Bibliothekspersonal wird die Local Library-Website nutzen, um Informationen über Bücher und Entleiher zu speichern, während Bibliotheksmitglieder sie verwenden werden, um nach Büchern zu stöbern und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für die Durchführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen verwenden können. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Dinge wie Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzelne "beste" Datenbank gibt, sollten fast alle beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze für die Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbank, wie z.B. SQL.
- Die Verwendung eines Object Relational Mappers ("ORM") oder Object Document Mappers ("ODM"). Diese repräsentieren die Daten der Website als JavaScript-Objekte, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erreicht werden. Objektmapper sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders zutreffend, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse in Bezug auf die unterstützten Datenbankfunktionen machen muss).

Der Vorteil der Verwendung eines ORM/ODM besteht darin, dass Programmierer weiterhin in Begriffen von JavaScript-Objekten denken können, anstatt in Datenbank-Semantiken - dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder auf verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort für die Datenvalidierung.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu niedrigeren Kosten für Entwicklung und Wartung! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von größter Bedeutung, dann sollten Sie in Betracht ziehen, einen ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paketverwaltungssite (schauen Sie sich die Tags [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) für einen Teilbereich an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem auf Express basierenden [Sails](https://sailsjs.com/)-Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl versprechenbasierte als auch traditionelle Callback-Schnittstellen, bietet Transaktionsunterstützung, eifrig/verschachtelte relationale Laden, polymorphe Assoziationen und Unterstützung für eins-zu-eins, eins-zu-viele und viele-zu-viele Beziehungen. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein versprechenbasiertes ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet solide Unterstützung für Transaktionen, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Unterstützt MySQL, SQLite und Postgres, hilft bei der Arbeit mit der Datenbank mit einem objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): Primär eine Abfragesprache für RESTful-APIs, GraphQL ist sehr beliebt und hat Funktionen zum Lesen von Daten aus Datenbanken.

Als Faustregel sollten Sie sowohl die bereitgestellten Features als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) berücksichtigen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose mit Abstand der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://en.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese ODM- und Datenbankkombination ist in der Node-Community äußerst beliebt, teilweise weil der Dokumentenspeicher und das Abfragesystem sehr nach JSON aussehen und daher JavaScript-Entwicklern vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _leichter_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie das Mongoose-Schema und die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugegriffen werden kann.

## Entwurf der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare zur Verfügung haben (mit global eindeutigen IDs, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur dessen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf dem Buchtitel, dem Autor, dem Genre und der Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind offensichtliche Kandidaten für diese Modelle Bücher, Buchexemplare und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. wie eine Dropdown-Liste), anstatt die Auswahlmöglichkeiten direkt in die Website zu kodieren – dies wird empfohlen, wenn alle Optionen nicht im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns über unsere Modelle und Felder im Klaren sind, müssen wir über die Beziehungen zwischen ihnen nachdenken.

In diesem Sinne zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben besprochen, haben wir Modelle für das Buch (die allgemeinen Details des Buches), Buchexemplare (Status spezifischer physischer Exemplare des Buches, die im System verfügbar sind) und Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben - wir werden die zulässigen Werte fest eincodieren, da wir nicht erwarten, dass diese sich ändern. Innerhalb jedes der Kästchen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizität_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Zahlen (maximal und minimal) jedes Modells anzeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und `Genre` miteinander in Beziehung stehen. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele wie gewünscht), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Leitfaden](#mongoose-leitfaden) unten besprochen, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung trotzdem finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Book-Schema zu definieren, und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Wahl war etwas willkürlich – wir hätten das Feld genauso gut im anderen Schema haben können.

![Mongoose Library Model mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, denken Sie darüber nach, wie wir jedes der obigen Modelle im Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Handhabung des Erfolgs oder Scheiterns der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn der Vorgang abgeschlossen ist.
Da anderer Code ausgeführt werden kann, während der Server auf den Abschluss des Datenbankvorgangs wartet, kann der Server auf andere Anfragen reagieren.

JavaScript bietet eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch gesehen hat JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn/Web_development/Client-side_web_APIs/Asynchronous_programming/Introducing) an asynchrone Methoden gesetzt, um die Erfolgs- und Fehlerfälle zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die (sofort) von einer asynchronen Methode zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn der Vorgang abgeschlossen ist, "settelt" das Promise-Objekt und löst ein Objekt auf, das das Ergebnis des Vorgangs oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, wie Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt ist. Wir empfehlen Ihnen dringend, [How to use promises](/de/docs/Learn/Web_development/Client-side_web_APIs/Asynchronous_programming/Promises) für einen Überblick über beide Ansätze zu lesen.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

Bei diesem Ansatz verwenden Sie das Schlüsselwort `async function`, um eine Funktion als asynchron zu markieren, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await`-Methode pausiert, bis das Promise auflöst.
Aus Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Später, wenn das Promise auflöst, kehrt die `await`-Methode innerhalb der asynchronen Funktion mit dem Ergebnis zurück, oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, an dem es erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Code-Ausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise erfüllt ist, zu welchem Zeitpunkt der Code mit `aFunctionThatReturnsPromise()` fortfährt und wieder wartet.
Der Code im `catch`-Block wird ausgeführt, wenn ein Fehler in der asynchronen Funktion ausgelöst wird, und dies geschieht, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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

Die oben genannten asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und den gesamten Vorgang schneller abschließen.
Dies geschieht mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), die ein iterierbares Promise als Eingabe annimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Input-Promises erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der inputbasierten Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie das funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beiden, bis sie mit dem Promise, das von `Promise.all()` zurückgegeben wird, abgeschlossen sind.
Sobald beide abgeschlossen sind, kehrt `await` zurück und das Ergebnisarray wird gefüllt,
die Funktion fährt dann mit dem nächsten `await` fort und wartet, bis das Promise, das von `anotherFunctionThatReturnsPromise()` zurückgegeben wird, abgeschlossen ist.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um eventuelle Fehler abzufangen.

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

Promises mit `await`/`async` erlauben sowohl flexible als auch „verständliche“ Kontrolle über asynchrone Ausführungen!

## Mongoose-Leitfaden

Dieser Abschnitt bietet einen Überblick darüber, wie Sie Mongoose mit einer MongoDB-Datenbank verbinden, ein Schema und ein Modell definieren und grundlegende Abfragen durchführen können.

> [!NOTE]
> Dieser Leitfaden ist stark von der [Mongoose Einführungsdokumentation](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert - mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle seine Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, jedoch wird MongoDB selbst nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial werden wir den kostenlosen [MongoDB Atlas](https://www.mongodb.com/)-Cloud-basierten _Siehe Unsicherheitsebenen-Dienst_ verwenden, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und sinnvoll für das Tutorial, da es die Installation Betriebssystem-unabhängig macht (Datenbank-als-Dienst ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und sich mit `mongoose.connect()` zu einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial werden wir uns jedoch stattdessen mit einer Internet-gehosteten Datenbank verbinden).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben besprochen, warten wir hier auf das Promise, das von der `connect()`-Methode innerhalb einer asynchronen Funktion zurückgegeben wird.
> Wir verwenden den Promise-`catch()`-Handler, um eventuell auftretende Verbindungsfehler zu behandeln, aber wir könnten `main()` auch innerhalb eines `try...catch`-Blocks aufgerufen haben.

Sie können das Standard-Verbindungsobjekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt dieselbe Form einer Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` an und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückgibt; wenn Sie warten müssen, dass die Verbindung hergestellt wird, können Sie es mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden mit der `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die Felder festzulegen, die in jedem Dokument gespeichert sind, zusammen mit ihren Validierungsanforderungen und Standardwerten. Darüber hinaus können Sie statische und instanzbezogene Hilfsfunktionen definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert werden (wir werden dies weiter unten diskutieren).

Schemata werden dann mithilfe der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell-`Schema` definierten Felder/Schema-Typen.

#### Definieren von Schemata

Der folgende Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` Sie Mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen und die verschiedenen Felder innerhalb davon im Objektparameter des Konstruktors zu definieren.

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

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierungen und Methoden zeigen.

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

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose wird die Datenbanksammlung für das Modell _SomeModel_ oben erstellen), und das zweite Argument ist das Schema, das Sie beim Erstellen des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, sowie Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) tun, und wenn wir unsere Ansichten erstellen.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes einzelne stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispielschema, das viele der gängigen Feldtypen zeigt und wie sie deklariert werden, wird unten gezeigt.

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

- `ObjectId`: Repräsentiert bestimmte Instanzen eines Modells in der Datenbank. Beispielsweise könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Tatsächlich wird dies die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die `populate()`-Methode verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Arrayoperationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Methoden der Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_, gefolgt von einem Objekt, das den `type` definiert, und alle anderen _Optionen_ für das Feld. Zu den Optionen gehören Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch in Kleinbuchstaben, Großbuchstaben oder getrimmt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`).

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen zu spezifizieren.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dies wird verwendet, um anzugeben, ob das Feld zur Speicherung eines Dokuments bereitgestellt werden muss.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die erlaubten Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das untenstehende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und setzen können, die aber nicht in MongoDB gespeichert werden. Getter sind nützlich, um Felder zu formatieren oder zu kombinieren, während Setter nützlich sind, um einen einzigen Wert in mehrere Werte für die Speicherung zu zerlegen. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine virtuelle vollständige Namenseigenschaft aus einem Vor- und Nachnamenfeld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu erstellen, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Weitere Informationen finden Sie unter [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfragehelfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfragehelfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und Zugriff auf das aktuelle Objekt hat. Abfragehelfer ermöglichen es Ihnen, die [verkettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (z.B. könnten Sie eine Abfrage "byName" hinzufügen, zusätzlich zu den `find()`, `findOne()` und `findById()` Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente darstellen, die Sie speichern und abrufen können.

Wir geben unten einen kurzen Überblick. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Das Erstellen, Aktualisieren, Löschen und Abfragen von Datensätzen sind asynchrone Vorgänge, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die untenstehenden Beispiele zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. den wesentlichen Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern sind der Klarheit halber weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie unter [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz beim Speichern gleichzeitig zu definieren.
Unten erstellen wir nur eins, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "also_awesome" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies ist die Standardverbindung, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Der untenstehende Codeausschnitt zeigt, wie Sie alle Athleten in einer Datenbank finden könnten, die Tennis spielen, und nur die Felder für Athlet _name_ und _age_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld (`sport`) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdrückskriterien angeben oder die Bedingungen ganz entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu bedenken, dass es **kein Fehler** ist, bei einer Suche keine Ergebnisse zu finden – aber es könnte im Kontext Ihrer Anwendung ein Fehlschlag sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der in den Ergebnissen zurückgegebenen Einträge überprüfen.

Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teile zu zerlegen, bevor Sie sie mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await` verwenden können.

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

Oben haben wir die Abfragebedingungen in der [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun, und wir können alle Teile unserer Abfrage mithilfe des Punktoperators (.) miteinander verketten, anstatt sie separat hinzuzufügen.
Der untenstehende Codeausschnitt ist dasselbe wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

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

Die [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) Methode erhält alle übereinstimmenden Datensätze, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz ab:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument anhand der `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Artikel zu erhalten, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Anzahl durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Verweise von einem Dokument/Modell-Instanz zu einem anderen mit dem `ObjectId`-Schema-Feld erstellen, oder von einem Dokument zu vielen mit einem Array von `ObjectId`s. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die [`populate()`](https://mongoosejs.com/docs/populate.html) Methode in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den `_id`-Wert zuweisen.
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
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit der Fehlerüberprüfung verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird ausgelöst.
> Unser Fehlerbehandlungscode kümmert sich separat darum (in der Regel in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die ID des Autorendokuments referenziert wird. Um die Autorinformationen in den Geschichtenergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber wir haben nichts unternommen, um unsere Geschichte zum `stories`-Array unserer Autoren hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Stories-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen zu Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Möglichkeit besteht darin, die `_id` unseres _autors_ zu erhalten und dann `find()` zu verwenden, um nach dieser in dem Autorenfeld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über das Arbeiten mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, jedes Modellschema in einem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können dann das Modell sofort in anderen Dateien verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells zu erhalten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nun, da wir etwas darüber wissen, was Mongoose kann und wie wir unsere Modelle gestalten möchten, ist es Zeit, mit der _LocalLibrary_-Website zu beginnen. Das Allererste, was wir tun möchten, ist, eine MongoDB-Datenbank einzurichten, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)-cloud-gehostete Sandbox-Datenbank verwenden. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz bietet, eignet sich jedoch hervorragend für die Entwicklung und Prototypenerstellung. Wir verwenden sie hier, da sie kostenlos und einfach einzurichten ist und da MongoDB Atlas ein beliebter _Datenbank-als-Dienst_ Anbieter ist, den Sie auch für Ihre Produktionsdatenbank auswählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [passenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im [Express Tutorial Teil 7: Deploying to Production](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)-Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwendet haben.

Zuerst müssen Sie [ein Konto erstellen](https://www.mongodb.com/cloud/atlas/register) bei MongoDB Atlas (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nach dem Login gelangen Sie zum [Home](https://cloud.mongodb.com/v2)-Bildschirm:

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Abschnitt _Übersicht_.

   ![Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dadurch wird der Bildschirm _Cluster bereitstellen_ geöffnet.
   Klicken Sie auf die Vorlagenoption **M0 FREE**.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, aus denen Sie wählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster Name_ ändern.
     Wir behalten ihn als `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldaten vorladen_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und Standort aus den Abschnitten _Provider_ und _Region_ aus. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (Erstellung des Clusters dauert einige Minuten).

4. Dadurch wird der Abschnitt _Sicherheits-Quickstart_ geöffnet.
   ![Richten Sie die Zugriffsregeln auf dem Sicherheits-Quickstart-Bildschirm auf MongoDB Atlas ein.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, das Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldedaten sicher zu kopieren und zu speichern, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da Mongoose den Verbindungsstring möglicherweise nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen** aus, um den Zugriff von Ihrem aktuellen Computer zu ermöglichen.
   - Geben Sie `0.0.0.0/0` in das IP-Adressenfeld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall ermöglichen möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu begrenzen, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall, weil wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertig stellen und schließen**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu Datenbanken nach dem Einrichten von Zugriffsregeln auf MongoDB Atlas.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersichts_-Bildschirm zurück. Klicken Sie auf den Abschnitt _Datenbank_ im Menü _Bereitstellung_ auf der linken Seite. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Setup einer Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dadurch wird der Abschnitt _Sammlungen_ geöffnet. Klicken Sie auf die Schaltfläche **Eigene Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dadurch wird der Bildschirm _Datenbank erstellen_ geöffnet.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen der neuen Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück, mit Ihrer erstellten Datenbank.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Übersichtsseite des Clusters zurückzukehren.

10. Klicken Sie auf dem _Übersichtsbildschirm_ von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Verbindung konfigurieren nach dem Einrichten eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dadurch wird der Bildschirm _Mit Cluster0 verbinden_ geöffnet.

    ![Wählen Sie die kurze SRV-Verbindung beim Einrichten einer Verbindung auf MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und die _Version_, wie gezeigt.
    - **NICHT** den Treiber installieren, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den `<password>`-Platzhalter im Verbindungsstring mit dem Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" in den Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String irgendwo sicher.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Diese sieht ungefähr so aus: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie ein Eingabeaufforderungsfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Local Library-Website-Skelett-Datei](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und zu Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose-Leitfadens](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB

Öffnen Sie **/app.js** (im Stammverzeichnis Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die URL, die Ihre eigene Datenbank darstellt (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im Abschnitt [Mongoose-Leitfaden](#verbindung_zu_mongodb) oben besprochen, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

Beachten Sie, dass das Hardcoding von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kern des Verbindungscodes zeigt und weil während der Entwicklung kein signifikantes Risiko besteht, dass das Leaken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn [Sie in die Produktion gehen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition des LocalLibrary-Schemas

Wir erstellen ein separates Modul für jedes Modell, wie [oben besprochen](#one_schemamodel_per_file).
Beginnen Sie mit der Erstellung eines Ordners für unsere Modelle im Projektstammverzeichnis (**/models**) und erstellen Sie dann separate Dateien für jedes der Modelle:

```plain
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den im Folgenden gezeigten `Author`-Schemecode und fügen Sie ihn in Ihre **./models/author.js**-Datei ein.
Das Schema definiert einen Autor als `String`-Schema-Typen für die Vor- und Nachnamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date`-Felder für die Geburts- und Todesdaten.

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

Wir haben auch eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für das `AuthorSchema` namens "url" deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Models zu erhalten – wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuell im Schema ist eine gute Idee, da die URL für ein Element dann nur an einer Stelle geändert werden muss.
> An diesem Punkt würde ein Link, der diese URL verwendet, nicht funktionieren, da wir noch keinen Routencode für einzelne Modellinstanzen haben.
> Wir werden diese in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den im Folgenden gezeigten `Book`-Schemecode und fügen Sie ihn in Ihre **./models/book.js**-Datei ein.
Das meiste davon ist dem Autorenmodell ähnlich – wir haben ein Schema mit einer Anzahl von Stringfeldern und einer virtuellen Eigenschaft für das Abrufen der URL von spezifischen Buchdatensätzen deklariert und das Modell exportiert.

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

- author ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- genre ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanzmodell

Kopieren Sie schließlich den im Folgenden gezeigten `BookInstance`-Schemocode und fügen Sie ihn in Ihre **./models/bookinstance.js**-Datei ein.
Das `BookInstance` repräsentiert ein bestimmtes Exemplar eines Buches, das jemand ausleihen könnte und enthält Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es zurückerwartet wird und "Impressum" (oder Versionsdetails).

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

- `enum`: Dies ermöglicht es uns, die zulässigen Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir Tippfehler und willkürliche Werte für unseren Status verhindern können).
- `default`: Wir verwenden den Standardwert, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" zu setzen und das Standard-`due_back`-Datum auf `now` (beachten Sie, wie Sie die Date-Funktion beim Festlegen des Datums aufrufen können!).

Alles Andere sollte Ihnen aus unserem vorherigen Schema bekannt sein.

### Genremodell - Herausforderung

Öffnen Sie Ihre **./models/genre.js**-Datei und erstellen Sie ein Schema zur Speicherung von Genres (die Kategorie des Buches, z.B. ob es sich um Fiktion oder Sachbuch handelt, um Romantik oder Militärgeschichte usw.).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String`-Schema-Typ namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen haben.
- Deklarieren Sie eine [virtuelle](#virtuelle_eigenschaften) Eigenschaft für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen — einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und einige Beispielbücher und andere Elemente zu erstellen, die wir in unserem nächsten Artikel verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Elemente jedes Typs zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) in Ihr Verzeichnis _express-locallibrary-tutorial_ herunter (auf der gleichen Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber für dieses Tutorial ist es nicht notwendig, ihn zu verstehen.

2. Führen Sie das Skript mit node in Ihrem Eingabeaufforderungsfenster aus, indem Sie die URL Ihrer _MongoDB_-Datenbank übergeben (die gleiche, die Sie zuvor in `app.js` anstelle des Platzhalters _insert_your_database_url_here_ ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen setzen.
   > Unter anderen Betriebssystemen möglicherweise in einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen und Elemente erstellen, während es sie im Terminal anzeigt.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Tabellenreiter _Collections_).
> Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu bohren und einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir etwas über Datenbanken und ORMs in Node/Express gelernt und viel darüber, wie Mongoose-Schemas und -Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`-, `BookInstance`-, `Author`- und `Genre`-Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Anzahl von Instanzen erstellt haben (mit einem unabhängigen Skript). Im nächsten Artikel werden wir uns ansehen, wie wir einige Seiten erstellen können, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
