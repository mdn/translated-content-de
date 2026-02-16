---
title: "Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)"
short-title: "3: Verwenden von Datenbanken mit Mongoose"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 1352cffbe6b92309b009882dcf8f58f7e1567b0c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt einen kurzen Überblick über Datenbanken und wie sie mit Node/Express-Apps genutzt werden können. Er zeigt anschließend, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website bereitzustellen. Der Artikel erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierungen. Außerdem wird kurz gezeigt, wie man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Teil 2: Erstellung einer Skeleton-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Das Bibliothekspersonal wird die Local Library-Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen, um Bücher zu durchsuchen und zu suchen, um herauszufinden, ob Kopien verfügbar sind, und diese dann zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, speichern wir sie in einer _Datenbank_.

Express-Apps können viele verschiedene Datenbanken nutzen, und es gibt mehrere Ansätze, die Sie für die **C**reate (Erstellen), **R**ead (Lesen), **U**pdate (Aktualisieren) und **D**elete (Löschen) (CRUD)-Operationen verwenden können. Dieses Tutorial bietet einen kurzen Überblick über einige der verfügbaren Optionen und zeigt dann detailliert die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede von _Node_ unterstützte Datenbank verwenden (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie die Zeit bis zur Produktivität/Lernkurve, Leistung, Einfachheit der Replikation/Sicherung, Kosten, Community-Support etc. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der populären Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als akzeptabel sein.

Für weitere Informationen zu den Optionen siehe [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei übliche Ansätze für die Interaktion mit einer Datenbank:

- Die Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Die Verwendung eines Object Relational Mapper ("ORM") oder Object Document Mapper ("ODM"). Diese stellen die Daten der Website als JavaScript-Objekte dar, die dann auf die zugrunde liegende Datenbank abgebildet werden. Einige ORMs und ODMs sind an eine spezifische Datenbank gebunden, während andere einen datenbankunabhängigen Backend bereitstellen.

Die beste _Performance_ kann durch die Verwendung von SQL oder einer anderen Abfragesprache erzielt werden, die von der Datenbank unterstützt wird. Objektmapper sind oft langsamer, weil sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu vermitteln, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies ist besonders der Fall, wenn der Mapper verschiedene Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingehen muss).

Der Vorteil der Verwendung eines ORM/ODM ist, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte statt auf Datenbanksemantik denken können – dies ist besonders der Fall, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (entweder auf derselben oder verschiedenen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierungen durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt oft zu geringeren Entwicklungs- und Wartungskosten! Es sei denn, Sie sind sehr vertraut mit der nativen Abfragesprache oder die Leistung ist von entscheidender Bedeutung, sollten Sie dringend die Verwendung eines ODM in Betracht ziehen.

### Welches ORM/ODM sollte ich verwenden?

Auf der Website des npm-Paketmanagers gibt es viele ODM/ORM-Lösungen (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für einen Teilbereich an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens populär waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungswerkzeug, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Webframework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, einschließlich Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl Promise-basierte als auch traditionelle Callback-Schnittstellen, bietet Transaktionsunterstützung, Eager/nested-eager Relation Loading, polymorphe Assoziationen und unterstützt Eins-zu-Eins-, Eins-zu-viele- und Viele-zu-viele-Beziehungen. Arbeitet mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Ermöglicht es, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine (unterstützt SQLite3, Postgres und MySQL) so einfach wie möglich zu nutzen.
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein Promise-basierter ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet umfassende Transaktionsunterstützung, Beziehungen, Read Replication und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object-Relationship-Manager für NodeJS. Unterstützt MySQL, SQLite und Postgres und hilft bei der Arbeit mit der Datenbank mit einem objektorientierten Ansatz.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für RESTful APIs, GraphQL ist sehr beliebt und bietet Funktionen, um Daten aus Datenbanken zu lesen.

Als allgemeine Regel sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Bugberichte, Dokumentationsqualität etc.) berücksichtigen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem der beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_ Beispiel (und den Rest dieses Themas) verwenden wir den [Mongoose ODM](https://www.npmjs.com/package/mongoose), um auf unsere Bibliotheksdaten zuzugreifen. Mongoose agiert als Front-End für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentenorientiertes Datenmodell nutzt. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [ist verleichbar mit](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teils weil die Dokumentenspeicherungs- und Abfragesysteme sehr nach JSON aussehen und daher JavaScript-Entwicklern vertraut sind.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugreift.

## Entwurf der LocalLibrary-Modelle

Bevor Sie direkt mit dem Coden der Modelle beginnen, ist es sinnvoll, ein paar Minuten über die Daten nachzudenken, die wir speichern müssen, und die Beziehungen zwischen den verschiedenen Objekten.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und möglicherweise mehrere verfügbare Exemplare haben (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus etc.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnten mehrere Autoren mit den gleichen oder ähnlichen Namen existieren. Wir möchten Informationen basierend auf Buchtitel, Autor, Genre und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind eindeutige Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z.B. eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website zu kodieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern könnten. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science Fiction etc.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen zwischen ihnen nachdenken.

In diesem Sinne zeigt das folgende UML-Assoziationsdiagramm die in diesem Fall definierten Modelle (als Kästchen). Wie oben diskutiert, haben wir Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status spezifischer physischer Kopien des Buches im System) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir werden die zulässigen Werte fest codieren, da wir nicht erwarten, dass diese sich ändern. Innerhalb jedes der Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Beispielsweise zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verknüpft sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr `Book`s haben muss (so viele wie gewünscht), während die Zahlen am anderen Ende der Linie in der Nähe des `Genre` zeigen, dass ein Buch null oder mehr zugeordnete `Genre`s haben kann.

> [!NOTE]
> Wie in unserem [Mongoose-Primer](#mongoose-primer) unten diskutiert, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, in nur _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` im anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema und die Beziehung zwischen dem `Book`/`BookInstance` im `BookInstance`-Schema zu definieren. Diese Wahl war etwas willkürlich – wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Primer darüber, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Suchen, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code zur Behandlung des Erfolgs oder des Misserfolgs der Methode zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server für andere Anforderungen reaktionsfähig bleibt.

JavaScript hat eine Reihe von Mechanismen zur Unterstützung von asynchronem Verhalten.
Historisch gesehen vertraute JavaScript stark auf die Weitergabe von [Callback-Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) an asynchrone Methoden zur Behandlung von Erfolgs- und Fehlerfällen.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden und ihren zukünftigen Zustand darstellen.
Wenn die Operation abgeschlossen ist, wird das Promise-Objekt "abgeschlossen" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmethoden, mit denen Sie Promises verwenden können, um Code auszuführen, wenn ein Promise erfüllt ist, und wir empfehlen Ihnen dringend, [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss von Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu leserlicherem und verständlicherem asynchronem Code führt.

Diese Vorgehensweise funktioniert so, dass Sie das Schlüsselwort `async function` verwenden, um eine Funktion als asynchron zu kennzeichnen, und dann innerhalb dieser Funktion `await` auf eine Methode anwenden, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation bei der ersten `await`-Methode angehalten, bis das Promise abgeschlossen ist.
Aus der Sicht des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der Code danach kann ausgeführt werden.
Später, wenn das Promise abgeschlossen ist, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück oder ein Fehler wird ausgelöst, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder ein weiteres `await` auftritt, bei dem es erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie können sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` angehalten, bis das Promise erfüllt ist, zu welchem Zeitpunkt der Code mit `functionThatReturnsPromise()` fortfährt und erneut wartet.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler auftritt, und dies wird geschehen, wenn eines der von den Methoden zurückgegebenen Promises abgelehnt wird.

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

Die obigen asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängig sind, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies wird mithilfe der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) durchgeführt, die ein iterables Array von Promises als Eingabe nimmt und ein Einzel-Promise zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingangspromises erfüllt sind, mit einem Array der Erfolgsergebnisse.
Es wird abgelehnt, wenn eines der Eingangspromises abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der folgende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Promises zurückgeben.
Wir `await` auf beide, um sie mit dem Promise abzuschließen, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, gibt `await` zurück, und das Ergebnisarray wird gefüllt,
die Funktion fährt dann mit der nächsten `await`-Anweisung fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise abgeschlossen ist.
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

Promises mit `await`/`async` erlauben sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose-Primer

Dieser Abschnitt bietet einen Überblick darüber, wie Mongoose mit einer MongoDB-Datenbank verbunden wird, wie ein Schema und ein Modell definiert werden und wie grundlegende Abfragen durchgeführt werden.

> [!NOTE]
> Dieser Primer ist stark von der [Mongoose-Schnellstartanleitung](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html) beeinflusst.

### Installation von Mongoose und MongoDB

Mongoose wird in Ihrem Projekt (**package.json**) wie jede andere Abhängigkeit installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl innerhalb Ihres Projektordners:

```bash
npm install mongoose
```

Die Installation von _Mongoose_ fügt alle Abhängigkeiten hinzu, einschließlich des MongoDB-Datenbanktreibers, aber es wird nicht MongoDB selbst installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [Installationsprogramme hier herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und lokal installieren. Sie können auch cloud-basierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir den [MongoDB Atlas](https://www.mongodb.com/) cloud-basierten _Datenbank als Service_ Free-Tier, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und macht für das Tutorial Sinn, da es die "Installation" betriebssystemunabhängig macht (Database-as-a-Service ist auch ein Ansatz, den Sie für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Sie können `require()` verwenden und sich mit `mongoose.connect()` mit einer lokal gehosteten Datenbank verbinden, wie unten gezeigt (für das Tutorial werden wir stattdessen eine Internet-gehostete Datenbank verbinden).

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
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) diskutiert, `await`en wir hier auf das Promise, das von der `connect()`-Methode in einer asynchronen Funktion zurückgegeben wird.
> Wir verwenden den Promise `catch()`-Handler, um Fehler beim Versuch, eine Verbindung herzustellen, zu behandeln, aber wir hätten `main()` auch innerhalb eines `try...catch`-Blocks aufrufen können.

Sie können das Standardverbindungsobjekt mit `mongoose.connection` erhalten.
Wenn Sie zusätzliche Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies nimmt die gleiche Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen etc.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückgibt; wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie sie mit `asPromise()` aufrufen, um ein Promise (`mongoose.createConnection(mongoDB).asPromise()`) zurückzugeben.

### Definieren und Erstellen von Modellen

Modelle werden mit dem `Schema`-Interface _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um die Arbeit mit Ihren Datentypen zu erleichtern, sowie virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die jedoch nicht tatsächlich in der Datenbank gespeichert sind (wir werden dies weiter unten diskutieren).

Schemata werden dann mit der `mongoose.model()`-Methode in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird auf eine _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank abgebildet. Die Dokumente enthalten die in der `Schema` des Modells definierten Felder/Schematypen.

#### Definieren von Schemata

Das folgende Codefragment zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()` -en Sie Mongoose, und dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen und die verschiedenen Felder darin im Objektparameter des Konstruktors zu definieren.

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

Im obigen Fall haben wir nur zwei Felder, eine Zeichenkette und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, die Validierung und andere Methoden zeigen.

#### Erstellen eines Modells

Modelle werden aus Schemata mit der Methode `mongoose.model()` erstellt:

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
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und beim Erstellen unserer Ansichten tun können.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben – jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
Ein Beispielschema, das viele der häufigen Feldtypen und deren Deklaration zeigt, ist unten dargestellt.

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

- `ObjectId`: Stellt spezifische Instanzen eines Modells in der Datenbank dar. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies wird tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt enthalten. Wir können die Methode `populate()` verwenden, um bei Bedarf die zugehörigen Informationen abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schematyp.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Methoden zur Deklaration eines Feldes:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (d.h. wie bei den Feldern `name`, `binary` und `living` durchgeführt).
- Feld _name_, gefolgt von einem Objekt, das den `type` und alle anderen _optionen_ für das Feld definiert. Optionen umfassen Dinge wie:
  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist.
  - Ob `String`-Felder automatisch auf Kleinbuchstaben, Großbuchstaben oder beschnitten eingestellt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Für weitere Informationen zu Optionen siehe [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required)-Validator. Dieser wird verwendet, um anzugeben, ob das Feld angegeben werden muss, um ein Dokument zu speichern.
- [Numbers](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:
  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, den die Zeichenkette erfüllen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für die Zeichenkette.

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

Virtuelle Eigenschaften sind Dokumenteigenschaften, die Sie abrufen und festlegen können, die jedoch nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere Werte zur Speicherung zu zerlegen. Die Dokumentationsbeispiele konstruieren (und dekonstruieren) eine vollständige Namens-Eigenschaft aus einem Vor- und Nachnamensfeld, was einfacher und sauberer ist, als jedes Mal beim Verwenden eines Namens in einer Vorlage eine vollständige Namens-Eigenschaft zu konstruieren.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um eine eindeutige URL für jeden Modell-Datensatz mit einem Pfad und dem `_id`-Wert des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics) und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) besitzen. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verknüpft ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [kettbare Abfragebuilder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (z.B. kann dadurch eine Abfrage "byName" hinzugefügt werden, zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell stellt eine Sammlung von Dokumenten in der Datenbank dar, die Sie durchsuchen können, während die Instanzen des Modells Einzel-Dokumente die Sie speichern und abrufen können, darstellen.

Wir bieten einen kurzen Überblick unten. Für weitere Informationen siehe: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. der wesentliche Code zur Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zum Abfangen von Fehlern werden aus Gründen der Klarheit weggelassen.
> Für weitere Informationen zur Verwendung von `await/async` siehe [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Ändern von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

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

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente in einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um die geänderten Werte wieder in der Datenbank zu speichern.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Das Codefragment unten zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und dabei nur die Felder für den Athleten _name_ und _alter_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld (sport) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckkriterien angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig sich daran zu erinnern, dass das Nichterfinden eines Ergebnisses **kein Fehler** für eine Suche ist – aber es könnte ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis überprüfen.

Die Abfrage-APIs, wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>), geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec)-Methode ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie das Ergebnis `awaiten` können.

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

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) Funktion tun und alle Teile unserer Abfrage mit dem Punktoperator (.) aneinanderreihen, anstatt sie separat hinzuzufügen.
Das Codefragment unten ist das gleiche wie unsere obige Abfrage mit einer zusätzlichen Bedingung für das Alter.

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
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das die angegebenen Kriterien erfüllt.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument anhand der `id` oder Kriterien und aktualisiert oder entfernt es. Dies sind nützliche Komfortfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Elemente zu erhalten, die den Bedingungen entsprechen. Dies ist nützlich, wenn Sie eine Zählung durchführen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen tun können. Für weitere Informationen siehe: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten – Populierung

Sie können Verweise von einem Dokument/Modell-Exemplar auf ein anderes mit dem Schemafeld `ObjectId` erstellen, oder von einem Dokument auf viele mit einem Array von `ObjectId`s. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definiert das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzigen Autor haben.
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

Wir können unsere Verweise auf das zugehörige Dokument speichern, indem wir den Wert `_id` zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Autoren-ID dem Author-Feld unserer Geschichte zu.

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
> Ein großer Vorteil dieses Programmierstil ist, dass wir den Hauptpfad unseres Codes nicht mit Fehlerprüfungen verkomplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird geworfen.
> Unser Fehlerbehandlungscode kümmert sich getrennt darum (normalerweise in einem `catch()`-Block), sodass die Absicht unseres Codes sehr klar ist.

Unser Geschichtendokument hat jetzt einen Autor, der durch die Autoren-Dokument-ID referenziert wird. Um die Autoreninformationen in den Geschichteergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir unserem Geschichte einen Autor hinzugefügt haben, es jedoch nicht getan haben, unsere Geschichte zum `stories`-Array unseres Autors hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors erhalten? Eine Möglichkeit wäre, unsere Geschichte zum Geschichten-Array hinzuzufügen, aber dies würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen zur Beziehung von Autoren und Geschichten gepflegt werden müssen.
>
> Eine bessere Vorgehensweise ist, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um danach im author-Feld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Dies ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Modell pro Datei

Während Sie Schemata und Modelle mit jeder gewünschten Dateistruktur erstellen können, empfehlen wir dringend, jedes Modell-Schema in seinem eigenen Modul (Datei) zu definieren und dann die Methode zum Erstellen des Modells zu exportieren.
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

Sie können das Modell dann sofort in anderen Dateien verwenden. Unten zeigen wir Ihnen, wie Sie es zur Abrufung aller Modell-Instanzen verwenden könnten.

```js
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nun, da wir etwas verstanden haben, was Mongoose kann und wie wir unsere Modelle entwerfen wollen, ist es an der Zeit, die Arbeit an der _LocalLibrary_-Website zu beginnen. Das Allererste, was wir tun wollen, ist, eine MongoDB-Datenbank einzurichten, die wir zur Speicherung unserer Bibliotheksdaten verwenden können.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloud-gehostete Sandbox-Datenbank verwenden. Diese Datenbankstufe gilt nicht als geeignet für Produktions-Websites, da sie keine Redundanz aufweist, aber sie ist großartig für die Entwicklung und das Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist und weil MongoDB Atlas ein beliebter _Database-as-a-Service_-Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen würden (andere beliebte Entscheidungen zur Zeit des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie es vorziehen, können Sie eine lokale MongoDB-Datenbank einrichten, indem Sie die [passenden Binärdateien für Ihr System herunterladen und installieren](https://www.mongodb.com/try/download/community-edition/releases). Der Rest der Anweisungen in diesem Artikel wäre ähnlich, abgesehen von der Datenbank-URL, die Sie bei der Verbindung angeben würden.
> Im [Express Tutorial Teil 7: Bereitstellung in die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment) Tutorial hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.com/), aber wir könnten genauso gut eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) genutzt haben.

Zuerst müssen Sie ein Konto bei MongoDB Atlas [erstellen](https://www.mongodb.com/cloud/atlas/register) (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und den Nutzungsbedingungen zustimmen).

Nachdem Sie sich angemeldet haben, gelangen Sie zur [Startseite](https://cloud.mongodb.com/v2):

1. Klicken Sie im Abschnitt _Übersicht_ auf die Schaltfläche **+ Erstellen**.

   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Deploy your cluster_.
   Klicken Sie auf die Vorlage **M0 FREE**.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter, wenn Sie MongoDB Atlas verwenden.](mongodb_atlas_-_createsharedcluster.jpg)
   - Sie können den Namen Ihres Clusters unter _Cluster-Name_ ändern.
     Wir behalten es bei `Cluster0` für dieses Tutorial.
   - Deaktivieren Sie das Kontrollkästchen _Sample-Dataset vorab laden_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und eine beliebige Region aus den Abschnitten _Anbieter_ und _Region_. Verschiedene Regionen bieten verschiedene Anbieter.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Erstellung bereitstellen** (die Erstellung des Clusters wird einige Minuten dauern).

4. Dies öffnet den Abschnitt _Sicherheits-Schnellstart_.
   ![Einrichten der Zugriffsregeln auf dem Sicherheits-Schnellstart-Bildschirm auf MongoDB Atlas.](mongodb_atlas_-_securityquickstart.jpg)
   - Geben Sie einen Benutzernamen und ein Passwort für Ihre Anwendung ein, um auf die Datenbank zuzugreifen (oben haben wir ein neues Login "cooluser" erstellt).
     Denken Sie daran, die Anmeldeinformationen sicher zu kopieren und zu speichern, da wir sie später benötigen werden.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise den Verbindungsstring nicht richtig parst.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen**, um den Zugriff von Ihrem aktuellen Computer aus zu ermöglichen.
   - Geben Sie `0.0.0.0/0` in das IP-Adressen-Feld ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall zulassen möchten.

     > [!NOTE]
     > Es ist eine Best Practice, die IP-Adressen zu beschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall, da wir nicht wissen, woher die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertigstellen und Schließen**.

5. Dadurch wird der folgende Bildschirm geöffnet. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu Datenbanken, nachdem Sie die Zugriffsregeln auf MongoDB Atlas eingerichtet haben](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_-Bildschirm zurück. Klicken Sie im Abschnitt _Datenbank_ im _Bereitstellungs-Menü_ auf der linken Seite auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Erstellen Sie eine Sammlung auf MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen Sie eine Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)
   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie werden zum _Sammlungen_-Bildschirm zurückkehren, wo Ihre Datenbank erstellt wurde.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)
   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie im _Übersicht_-Bildschirm von Cluster0 auf die Schaltfläche **Verbinden**.

    ![Konfigurieren Sie die Verbindung nach der Einrichtung eines Clusters in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Mit Cluster0 verbinden_.

    ![Wählen Sie die Short SRV-Verbindung, wenn Sie auf MongoDB Atlas eine Verbindung einrichten.](mongodb_atlas_-_connectforshortsrv.jpg)
    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den _Treiber_ **Node.js** und die _Version_ wie gezeigt.
    - **NICHT** den Treiber installieren, wie vorgeschlagen.
    - Klicken Sie auf das **Kopieren**-Symbol, um den Verbindungsstring zu kopieren.
    - Fügen Sie diesen in Ihren lokalen Texteditor ein.
    - Ersetzen Sie das `<password>` Placeholder im Verbindungsstring durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei mit diesem String an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die für den Zugriff darauf verwendet werden kann.
Dies wird ungefähr so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Installieren von Mongoose

Öffnen Sie ein Befehlszeilenfenster und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skeleton Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und dessen Abhängigkeiten) zu installieren und es ihrem **package.json**-Datei hinzuzufügen, es sei denn, Sie haben es bereits beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **bin/www** (aus dem Stamm Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie den Port einstellen (nach der Zeile `app.set("port", port);`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') mit der Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. mit den Informationen von _MongoDB Atlas_).

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

Wie im [Mongoose Primer](#verbindung_zu_mongodb) oben diskutiert, erstellt dieser Code die Standardverbindung zur Datenbank und meldet alle Fehler an die Konsole.

> [!NOTE]
> Wir hätten den Datenbankverbindungs-Code in unser **app.js** Code schreiben können.
> Ihn in den Einstiegspunkt der Anwendung zu setzen, entkoppelt die Anwendung und die Datenbank, was es einfacher macht, eine andere Datenbank für das Ausführen von Testcode zu verwenden.

Beachten Sie, dass das Hartkodieren von Datenbank-Zugangsdaten im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den grundlegenden Verbindungscode zeigt, und weil während der Entwicklung keine signifikantes Risiko besteht, dass das Leaken dieser Details empfindliche Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen später, wie Sie dies sicherer tun können, wenn wir [in die Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#database_configuration)!

## Definition der LocalLibrary Schema

Wir werden ein separates Modul für jedes Modell definieren, wie [oben diskutiert](#one_schemamodel_per_file).
Beginnen Sie, indem Sie einen Ordner für unsere Modelle im Projektstamm erstellen (**/models**) und dann separate Dateien für jedes der Modelle erstellen:

```plain
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autor-Modell

Kopieren Sie den unten gezeigten `Author`-Schema-Code und fügen Sie ihn in Ihre Datei **./models/author.js** ein.
Das Schema definiert einen Autor als `String` SchemaTypes für die Vor- und Nachnamen (erforderlich, mit maximal 100 Zeichen), und `Date` Felder für die Geburts- und Sterbedaten.

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

Wir haben auch eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für das AuthorSchema namens "url" deklariert, die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells zu erhalten – wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Es ist eine gute Idee, unsere URLs als virtuell im Schema zu deklarieren, weil dann die URL für einen Artikel nur an einer Stelle geändert werden muss.
> Zu diesem Zeitpunkt würde ein Link mit dieser URL nicht funktionieren, weil wir noch keinen Routenhandling-Code für einzelne Modellinstanzen haben.
> Diese werden wir in einem späteren Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buch-Modell

Kopieren Sie den `Book`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/book.js** ein.
Das meiste davon ist ähnlich wie das Autorenmodell — wir haben ein Schema mit einer Reihe von Zeichenkettenfeldern und einer virtuellen Eigenschaft zum Abrufen der URL von spezifischen Buchdatensätzen deklariert und wir haben das Modell exportiert.

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

- Autor ist ein Verweis auf ein einzelnes `Author`-Modellobjekt, und ist erforderlich.
- Genre ist ein Verweis auf ein Array von `Genre`-Modellobjekten. Dieses Objekt haben wir noch nicht deklariert!

### Buchinstanz-Modell

Zum Schluss kopieren Sie den `BookInstance`-Schema-Code, der unten gezeigt wird, und fügen Sie ihn in Ihre Datei **./models/bookinstance.js** ein.
Der `BookInstance` stellt eine bestimmte Kopie eines Buches dar, die jemand ausleihen könnte und enthält Informationen darüber, ob die Kopie verfügbar ist, wann sie voraussichtlich zurückgegeben wird und "Imprint" (oder Versions-) Details.

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

- `enum`: Damit können wir die zulässigen Werte einer Zeichenfolge festlegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung einer Enumerationsliste bedeutet, dass wir Rechtschreibfehler und willkürliche Werte für unseren Status verhindern können).
- `default`: Wir verwenden default, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" zu setzen und das Standarddatum `due_back` auf `now` (beachten Sie, wie Sie die Date-Funktion aufrufen können, wenn Sie das Datum festlegen!).

Alles andere sollte aus unserem vorherigen Schema vertraut sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre Datei **./models/genre.js** und erstellen Sie ein Schema zum Speichern von Genres (der Buchkategorie, z.B. ob es fiktiv oder nicht-fiktiv ist, Romantik oder Militärgeschichte).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen `String` SchemaType namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, genannt `url`.
- Exportieren Sie das Modell.

## Testen — Erstellen Sie einige Artikel

Das war's. Wir haben jetzt alle Modelle für die Seite eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir nun ein _unabhängiges_ Skript aus, um Artikel jeder Art zu erstellen:

1. Laden Sie (oder erstellen Sie anderweitig) die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) innerhalb Ihres _express-locallibrary-tutorial_ Verzeichnisses herunter (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` könnte nützlich zum Lernen von JavaScript sein, aber das Verständnis davon ist für dieses Tutorial nicht erforderlich.

2. Führen Sie das Skript mit node in Ihrem Befehlszeilenfenster aus und übergeben Sie die URL Ihrer _MongoDB_-Datenbank (die gleiche, die Sie zuvor durch die Platzhalter _insert_your_database_url_here_ in `app.js` ersetzt haben):

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte (") Anführungszeichen einschließen.
   > Unter anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen und Artikel im Terminal anzeigen, sobald sie erstellt werden.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im _Sammlungen_ Tab).
> Sie sollten nun in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen hinein zu bohren und einzelne Dokumente zu überprüfen.

## Zusammenfassung

In diesem Artikel haben wir einiges über Datenbanken und ORMs auf Node/Express gelernt und viel darüber, wie Mongoose-Schema und -Modelle definiert sind. Wir haben dann diese Informationen verwendet, um `Book`, `BookInstance`, `Author` und `Genre`-Modelle für die _LocalLibrary_-Website zu gestalten und zu implementieren.

Zu guter Letzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns damit befassen, einige Seiten zu erstellen, um diese Objekte anzuzeigen.

## Siehe auch

- [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose Dokumentation)
- [Mongoose Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
