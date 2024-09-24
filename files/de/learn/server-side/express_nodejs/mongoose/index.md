---
title: "Express Lernprogramm Teil 3: Verwendung einer Datenbank (mit Mongoose)"
slug: Learn/Server-side/Express_Nodejs/mongoose
l10n:
  sourceCommit: 5f32dcfb43924bb35330ca0ab8f7e192dcd4d8ed
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

Dieser Artikel stellt kurz Datenbanken vor und wie sie mit Node/Express-Anwendungen verwendet werden. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um der Website [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Zugriff auf Datenbanken zu bieten. Er erklärt, wie Objektschema und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem werden kurz einige der Hauptmethoden gezeigt, mit denen Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Lernprogramm Teil 2: Erstellen einer Skelett-Website</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>In der Lage zu sein, eigene Modelle mit Mongoose zu entwerfen und zu erstellen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Das Bibliothekspersonal wird die Local Library-Website verwenden, um Informationen über Bücher und Ausleiher zu speichern, während Bibliotheksmitglieder sie nutzen, um Bücher zu durchsuchen und zu suchen, herauszufinden, ob Exemplare verfügbar sind, und dann Bücher zu reservieren oder auszuleihen. Um Informationen effizient zu speichern und abzurufen, werden wir sie in einer _Datenbank_ speichern.

Express-Apps können viele verschiedene Datenbanken verwenden, und es gibt mehrere Ansätze, die Sie für die Ausführung von **C**reate, **R**ead, **U**pdate und **D**elete (CRUD)-Operationen verwenden können. Dieses Tutorial bietet eine kurze Übersicht über einige der verfügbaren Optionen und zeigt dann im Detail die ausgewählten Mechanismen.

### Welche Datenbanken kann ich verwenden?

_Express_-Apps können jede Datenbank verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung). Es gibt [viele beliebte Optionen](https://expressjs.com/en/guide/database-integration.html), darunter PostgreSQL, MySQL, Redis, SQLite und MongoDB.

Bei der Auswahl einer Datenbank sollten Sie Aspekte wie Time-to-Productivity/Lernkurve, Leistung, Einfachheit der Replikation/Backup, Kosten, Community-Unterstützung usw. berücksichtigen. Während es keine einzige "beste" Datenbank gibt, sollte fast jede der beliebten Lösungen für eine kleine bis mittelgroße Website wie unsere Local Library mehr als ausreichend sein.

Weitere Informationen zu den Optionen finden Sie unter [Datenbank-Integration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation).

### Was ist der beste Weg, um mit einer Datenbank zu interagieren?

Es gibt zwei gängige Ansätze, um mit einer Datenbank zu interagieren:

- Verwendung der nativen Abfragesprache der Datenbanken, wie z.B. SQL.
- Verwendung eines Object Relational Mappers ("ORM"). Ein ORM stellt die Daten der Website als JavaScript-Objekte dar, die dann der zugrunde liegenden Datenbank zugeordnet werden. Einige ORMs sind an eine bestimmte Datenbank gebunden, während andere eine datenbankunabhängige Backend-Lösung bieten.

Die beste _Leistung_ kann durch die Verwendung von SQL oder einer anderen von der Datenbank unterstützten Abfragesprache erzielt werden. ODMs sind oft langsamer, da sie Übersetzungscode verwenden, um zwischen Objekten und dem Datenbankformat zu übersetzen, was möglicherweise nicht die effizientesten Datenbankabfragen verwendet (dies gilt insbesondere dann, wenn das ODM verschiedene Datenbank-Backends unterstützt und größere Kompromisse bei den unterstützten Datenbankfunktionen eingegangen werden müssen).

Der Vorteil der Verwendung eines ORMs besteht darin, dass Programmierer weiterhin in Bezug auf JavaScript-Objekte statt auf Datenbanksemantik denken können — dies gilt insbesondere, wenn Sie mit verschiedenen Datenbanken arbeiten müssen (auf derselben oder unterschiedlichen Websites). Sie bieten auch einen offensichtlichen Ort, um Datenvalidierung durchzuführen.

> [!NOTE]
> Die Verwendung von ODM/ORMs führt häufig zu niedrigeren Entwicklungs- und Wartungskosten! Wenn Sie mit der nativen Abfragesprache nicht sehr vertraut sind oder die Leistung von größter Bedeutung ist, sollten Sie ernsthaft in Betracht ziehen, ein ODM zu verwenden.

### Welches ORM/ODM sollte ich verwenden?

Es gibt viele ODM/ORM-Lösungen auf der npm-Paketmanager-Website (sehen Sie sich die [odm](https://www.npmjs.com/search?q=keywords:odm) und [orm](https://www.npmjs.com/search?q=keywords:orm) Tags für eine Teilmenge an!).

Einige Lösungen, die zum Zeitpunkt des Schreibens beliebt waren, sind:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose ist ein [MongoDB](https://www.mongodb.com/)-Objektmodellierungstool, das für die Arbeit in einer asynchronen Umgebung entwickelt wurde.
- [Waterline](https://www.npmjs.com/package/waterline): Ein ORM, das aus dem Express-basierten [Sails](https://sailsjs.com/) Web-Framework extrahiert wurde. Es bietet eine einheitliche API für den Zugriff auf zahlreiche verschiedene Datenbanken, darunter Redis, MySQL, LDAP, MongoDB und Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Bietet sowohl promise-basierte als auch traditionelle Callback-Schnittstellen, unterstützt Transaktionen, eager/nested-eager Relation Loading, polymorphe Assoziationen und unterstützt Beziehungen von eins-zu-eins, eins-zu-viele und viele-zu-viele. Funktioniert mit PostgreSQL, MySQL und SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Macht es so einfach wie möglich, die volle Leistung von SQL und der zugrunde liegenden Datenbank-Engine zu nutzen (unterstützt SQLite3, Postgres und MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) ist ein promise-basierter ORM für Node.js und io.js. Es unterstützt die Dialekte PostgreSQL, MySQL, MariaDB, SQLite und MSSQL und bietet umfassende Unterstützung für Transaktionen, Beziehungen, Lese-Replikation und mehr.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) ist ein Object Relationship Manager für NodeJS. Es unterstützt MySQL, SQLite und Postgres und hilft, mit der Datenbank objektorientiert zu arbeiten.
- [GraphQL](https://graphql.org/): Hauptsächlich eine Abfragesprache für RESTful-APIs, ist GraphQL sehr beliebt und verfügt über Funktionen zum Lesen von Datenbanken.

Im Allgemeinen sollten Sie sowohl die bereitgestellten Funktionen als auch die "Community-Aktivität" (Downloads, Beiträge, Fehlerberichte, Qualität der Dokumentation usw.) berücksichtigen, wenn Sie eine Lösung auswählen. Zum Zeitpunkt des Schreibens ist Mongoose bei weitem das beliebteste ODM und eine vernünftige Wahl, wenn Sie MongoDB für Ihre Datenbank verwenden.

### Verwendung von Mongoose und MongoDB für die LocalLibrary

Für das _Local Library_-Beispiel (und den Rest dieses Themas) werden wir das [Mongoose ODM](https://www.npmjs.com/package/mongoose) verwenden, um auf unsere Bibliotheksdaten zuzugreifen. Mongoose fungiert dabei als Frontend für [MongoDB](https://www.mongodb.com/company/what-is-mongodb), eine Open-Source-[NoSQL](https://de.wikipedia.org/wiki/NoSQL)-Datenbank, die ein dokumentorientiertes Datenmodell verwendet. Eine "Sammlung" von "Dokumenten" in einer MongoDB-Datenbank [entspricht](https://www.mongodb.com/docs/manual/core/databases-and-collections/) einer "Tabelle" von "Zeilen" in einer relationalen Datenbank.

Diese Kombination aus ODM und Datenbank ist in der Node-Community äußerst beliebt, teilweise weil das Dokumentenspeicher- und Abfragesystem sehr stark wie JSON aussieht und daher JavaScript-Entwicklern vertraut ist.

> [!NOTE]
> Sie müssen MongoDB nicht kennen, um Mongoose zu verwenden, obwohl Teile der [Mongoose-Dokumentation](https://mongoosejs.com/docs/guide.html) _einfacher_ zu verwenden und zu verstehen sind, wenn Sie bereits mit MongoDB vertraut sind.

Der Rest dieses Tutorials zeigt, wie man das Mongoose-Schema und die Modelle für das [LocalLibrary-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Beispiel definiert und darauf zugreift.

## Entwurf der LocalLibrary-Modelle

Bevor Sie anfangen, die Modelle zu codieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten gespeichert werden müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Genre, ISBN) speichern müssen und dass möglicherweise mehrere Exemplare vorhanden sind (mit weltweit eindeutigen IDs, Verfügbarkeitsstatus usw.). Es könnte notwendig sein, mehr Informationen über den Autor zu speichern als nur seinen Namen, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf Buchtitel, Autor, Genre und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind einige offensichtliche Kandidaten für diese Modelle Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahloptionen (z.B. eine Dropdown-Liste von Auswahlmöglichkeiten) zu repräsentieren, anstatt die Auswahl in der Website selbst fest zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Ein gutes Beispiel ist ein Genre (z.B. Fantasy, Science-Fiction usw.).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über deren Beziehungen nachdenken.

Im Hinblick darauf zeigt das untenstehende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästchen). Wie oben diskutiert, haben wir Modelle für das Buch (die allgemeinen Informationen über das Buch), die Buchinstanz (Status spezifischer physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte dynamisch erstellt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir werden die akzeptablen Werte fest kodieren, da wir nicht erwarten, dass sich diese ändern. In jedem der Kästchen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Zahlen (maximal und minimal) jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass `Book` und ein `Genre` miteinander verbunden sind. Die Zahlen in der Nähe des `Book`-Modells zeigen, dass ein `Genre` null oder mehr Bücher haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem `Genre` zeigen, dass ein Buch null oder mehr zugehörige `Genres` haben kann.

> [!NOTE]
> Wie in unserem [Mongoose Primer](#mongoose-übersicht) weiter unten diskutiert wird, ist es oft besser, das Feld, das die Beziehung zwischen den Dokumenten/Modellen definiert, nur in _einem_ Modell zu haben (Sie können die umgekehrte Beziehung immer noch finden, indem Sie nach der zugehörigen `_id` in dem anderen Modell suchen). Unten haben wir uns entschieden, die Beziehung zwischen `Book`/`Genre` und `Book`/`Author` im Buchschema zu definieren und die Beziehung zwischen `Book`/`BookInstance` im `BookInstance`-Schema. Diese Entscheidung war etwas willkürlich — wir hätten das Feld ebenso gut im anderen Schema haben können.

![Mongoose-Bibliotheksmodell mit korrekter Kardinalität](library_website_-_mongoose_express.png)

> [!NOTE]
> Der nächste Abschnitt bietet einen grundlegenden Überblick darüber, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

### Datenbank-APIs sind asynchron

Datenbankmethoden zum Erstellen, Finden, Aktualisieren oder Löschen von Datensätzen sind asynchron.
Das bedeutet, dass die Methoden sofort zurückkehren und der Code, der den Erfolg oder Misserfolg der Methode behandelt, zu einem späteren Zeitpunkt ausgeführt wird, wenn die Operation abgeschlossen ist.
Andere Codes können ausgeführt werden, während der Server auf den Abschluss der Datenbankoperation wartet, sodass der Server auf andere Anforderungen reagieren kann.

JavaScript hat eine Reihe von Mechanismen zur Unterstützung asynchronen Verhaltens.
Historisch hat sich JavaScript stark auf das Übergeben von [Callback-Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) an asynchrone Methoden verlassen, um Erfolgs- und Fehlersituationen zu behandeln.
In modernem JavaScript wurden Callbacks weitgehend durch [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) ersetzt.
Promises sind Objekte, die von einer asynchronen Methode (sofort) zurückgegeben werden und deren zukünftigen Zustand repräsentieren.
Wenn die Operation abgeschlossen ist, ist das Promise-Objekt "erledigt" und löst ein Objekt auf, das das Ergebnis der Operation oder einen Fehler darstellt.

Es gibt zwei Hauptmöglichkeiten, Promises zu verwenden, um Code auszuführen, wenn ein Promise erfüllt ist, und wir empfehlen dringend, [How to use promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) zu lesen, um einen Überblick über beide Ansätze zu erhalten.
In diesem Tutorial verwenden wir hauptsächlich [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf den Abschluss eines Promises innerhalb einer [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu warten, da dies zu besser lesbarem und verständlicherem asynchronem Code führt.

So funktioniert dieser Ansatz: Sie verwenden das Schlüsselwort `async function`, um eine Funktion als asynchron zu kennzeichnen, und wenden dann innerhalb dieser Funktion `await` auf jede Methode an, die ein Promise zurückgibt.
Wenn die asynchrone Funktion ausgeführt wird, wird ihre Operation an der ersten `await`-Methode pausiert, bis das Promise erfüllt ist.
Aus der Perspektive des umgebenden Codes kehrt die asynchrone Funktion dann zurück und der nachfolgende Code kann ausgeführt werden.
Wenn das Promise zu einem späteren Zeitpunkt abgeschlossen wird, gibt die `await`-Methode innerhalb der asynchronen Funktion das Ergebnis zurück, oder ein Fehler wird geworfen, wenn das Promise abgelehnt wurde.
Der Code in der asynchronen Funktion wird dann ausgeführt, bis entweder eine andere `await`-Anweisung auftritt, an der sie erneut pausiert, oder bis der gesamte Code in der Funktion ausgeführt wurde.

Sie sehen, wie dies im folgenden Beispiel funktioniert.
`myFunction()` ist eine asynchrone Funktion, die innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks aufgerufen wird.
Wenn `myFunction()` ausgeführt wird, wird die Codeausführung bei `methodThatReturnsPromise()` pausiert, bis das Promise erfüllt ist. Dann geht der Code weiter zu `aFunctionThatReturnsPromise()` und wartet erneut.
Der Code im `catch`-Block wird ausgeführt, wenn in der asynchronen Funktion ein Fehler geworfen wird, und das wird passieren, wenn das Promise, das von einer der Methoden zurückgegeben wird, abgelehnt wird.

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
  // Fehlerbehandlungscode
}
```

Die oben genannten asynchronen Methoden werden nacheinander ausgeführt.
Wenn die Methoden nicht voneinander abhängen, können Sie sie parallel ausführen und die gesamte Operation schneller abschließen.
Dies wird mit der Methode [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) durchgeführt, die ein iterierbares Versprechen als Eingabe nimmt und ein einzelnes `Promise` zurückgibt.
Dieses zurückgegebene Promise wird erfüllt, wenn alle Versprechen der Eingabe erfüllt sind, mit einem Array der Erfüllungswerte.
Es wird abgelehnt, wenn eines der Eingabeversprechen abgelehnt wird, mit diesem ersten Ablehnungsgrund.

Der untenstehende Code zeigt, wie dies funktioniert.
Zuerst haben wir zwei Funktionen, die Versprechen zurückgeben.
Wir `await` auf beide, bis sie mit dem Promise abgeschlossen sind, das von `Promise.all()` zurückgegeben wird.
Sobald beide abgeschlossen sind, gibt `await` zurück und das Ergebnisarray wird befüllt,
dann fährt die Funktion mit dem nächsten `await` fort und wartet, bis das von `anotherFunctionThatReturnsPromise()` zurückgegebene Promise erfüllt ist.
Sie würden `myFunction()` in einem `try...catch`-Block aufrufen, um Fehler zu erfassen.

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

Promises mit `await`/`async` ermöglichen sowohl flexible als auch "verständliche" Kontrolle über asynchrone Ausführung!

## Mongoose-Übersicht

Dieser Abschnitt bietet einen Überblick darüber, wie man Mongoose mit einer MongoDB-Datenbank verbindet, wie man ein Schema und ein Modell definiert und wie man grundlegende Abfragen durchführt.

> [!NOTE]
> Dieser Leitfaden ist stark beeinflusst von dem [Mongoose quick start](https://www.npmjs.com/package/mongoose) auf _npm_ und der [offiziellen Dokumentation](https://mongoosejs.com/docs/guide.html).

### Installation von Mongoose und MongoDB

Mongoose wird wie jede andere Abhängigkeit in Ihrem Projekt (**package.json**) installiert — mit npm.
Um es zu installieren, verwenden Sie den folgenden Befehl in Ihrem Projektordner:

```bash
npm install mongoose
```

Durch die Installation von _Mongoose_ werden alle seine Abhängigkeiten hinzugefügt, einschließlich des MongoDB-Datenbanktreibers, aber MongoDB selbst wird nicht installiert. Wenn Sie einen MongoDB-Server installieren möchten, können Sie [hier Installationsprogramme herunterladen](https://www.mongodb.com/try/download/community) für verschiedene Betriebssysteme und ihn lokal installieren. Sie können auch cloudbasierte MongoDB-Instanzen verwenden.

> [!NOTE]
> Für dieses Tutorial verwenden wir das [MongoDB Atlas](https://www.mongodb.com/) cloudbasierte _Datenbank als Dienst_ in der kostenlosen Stufe, um die Datenbank bereitzustellen. Dies ist für die Entwicklung geeignet und sinnvoll für das Tutorial, da es die "Installation" betriebssystemunabhängig macht (Datenbank als Dienst ist auch ein Ansatz, den Sie möglicherweise für Ihre Produktionsdatenbank verwenden könnten).

### Verbindung zu MongoDB

_Mongoose_ erfordert eine Verbindung zu einer MongoDB-Datenbank.
Binden Sie die Mongoose-Bibliothek ein und stellen Sie mit `mongoose.connect()` eine Verbindung zu einer lokal gehosteten Datenbank her, wie unten gezeigt. Für das Tutorial werden wir jedoch eine internetgehostete Datenbank verwenden.

```js
// Importieren Sie das mongoose-Modul
const mongoose = require("mongoose");

// Setzen Sie `strictQuery: false`, um global auf das Filtern nach Eigenschaften zu verzichten, die nicht im Schema enthalten sind
// Eingeschlossen, weil es vorbereitende Warnungen für Mongoose 7 entfernt.
// Siehe: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Definieren Sie die Datenbank-URL, mit der eine Verbindung hergestellt werden soll.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Warten Sie, bis die Datenbank verbunden ist, und protokollieren Sie einen Fehler, wenn ein Problem vorliegt
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

> [!NOTE]
> Wie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) erörtert, `await`en wir hier auf das von der `connect()`-Methode zurückgegebene Promise in einer `async`-Funktion.
> Wir verwenden den `catch()`-Handler des Promise, um Fehler beim Verbindungsversuch zu behandeln, aber wir könnten auch `main()` in einem `try...catch`-Block aufgerufen haben.

Sie können das Standard-Verbindungsobjekt mit `mongoose.connection` erhalten.
Wenn Sie weitere Verbindungen erstellen müssen, können Sie `mongoose.createConnection()` verwenden.
Dies verwendet dieselbe Form der Datenbank-URI (mit Host, Datenbank, Port, Optionen usw.) wie `connect()` und gibt ein `Connection`-Objekt zurück.
Beachten Sie, dass `createConnection()` sofort zurückkehrt. Wenn Sie warten müssen, bis die Verbindung hergestellt ist, können Sie sie mit `asPromise()` aufrufen, um ein Promise zurückzugeben (`mongoose.createConnection(mongoDB).asPromise()`).

### Definieren und Erstellen von Modellen

Modelle werden über die `Schema`-Schnittstelle _definiert_. Das Schema ermöglicht es Ihnen, die in jedem Dokument gespeicherten Felder zusammen mit ihren Validierungsanforderungen und Standardwerten zu definieren. Darüber hinaus können Sie statische und Instanz-Hilfsmethoden definieren, um es einfacher zu machen, mit Ihren Datentypen zu arbeiten, und auch virtuelle Eigenschaften, die Sie wie jedes andere Feld verwenden können, die aber nicht wirklich in der Datenbank gespeichert sind (wir werden dies weiter unten besprechen).

Schemata werden dann mithilfe der Methode `mongoose.model()` in Modelle "kompiliert". Sobald Sie ein Modell haben, können Sie es verwenden, um Objekte des gegebenen Typs zu finden, zu erstellen, zu aktualisieren und zu löschen.

> [!NOTE]
> Jedes Modell wird einer _Sammlung_ von _Dokumenten_ in der MongoDB-Datenbank zugeordnet. Die Dokumente enthalten die im Modell `Schema` definierten Felder/Schemata.

#### Definition von Schemata

Der unten gezeigte Codeausschnitt zeigt, wie Sie ein einfaches Schema definieren könnten. Zuerst `require()`-en Sie mongoose, dann verwenden Sie den Schema-Konstruktor, um eine neue Schema-Instanz zu erstellen und definieren die verschiedenen Felder darin im Objektparameter des Konstruktors.

```js
// Mongoose einbinden
const mongoose = require("mongoose");

// Definieren Sie ein Schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

Im obigen Fall haben wir nur zwei Felder, einen String und ein Datum. In den nächsten Abschnitten werden wir einige der anderen Feldtypen, Validierungen und andere Methoden zeigen.

#### Ein Modell erstellen

Modelle werden aus Schemata mithilfe der `mongoose.model()`-Methode erstellt:

```js
// Schema definieren
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Modell aus Schema kompilieren
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
```

Das erste Argument ist der Singularname der Sammlung, die für Ihr Modell erstellt wird (Mongoose erstellt die Datenbanksammlung für das Modell _SomeModel_ oben), und das zweite Argument ist das Schema, das Sie bei der Erstellung des Modells verwenden möchten.

> [!NOTE]
> Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen abzurufen. Wir zeigen Ihnen, wie Sie dies im Abschnitt [Verwendung von Modellen](#verwendung_von_modellen) und bei der Erstellung unserer Ansichten tun.

#### Schema-Typen (Felder)

Ein Schema kann eine beliebige Anzahl von Feldern haben — jedes stellt ein Feld in den in _MongoDB_ gespeicherten Dokumenten dar.
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
  ofString: [String], // Sie können auch ein Array von jedem der anderen Typen haben.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

Die meisten [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (die Deskriptoren nach "type:" oder nach Feldnamen) sind selbsterklärend. Die Ausnahmen sind:

- `ObjectId`: Repräsentiert spezifische Instanzen eines Modells in der Datenbank. Zum Beispiel könnte ein Buch dies verwenden, um sein Autorenobjekt darzustellen. Dies enthält tatsächlich die eindeutige ID (`_id`) für das angegebene Objekt. Wir können die Methode `populate()` verwenden, um die zugehörigen Informationen bei Bedarf abzurufen.
- [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): Ein beliebiger Schema-Typ.
- `[]`: Ein Array von Elementen. Sie können JavaScript-Array-Operationen auf diesen Modellen ausführen (push, pop, unshift usw.). Die obigen Beispiele zeigen ein Array von Objekten ohne einen angegebenen Typ und ein Array von `String`-Objekten, aber Sie können ein Array von jedem Objekttyp haben.

Der Code zeigt auch beide Möglichkeiten, ein Feld zu deklarieren:

- Feld _name_ und _type_ als Schlüssel-Wert-Paar (wie bei den Feldern `name`, `binary` und `living`).
- Feld _name_ gefolgt von einem Objekt, das den `type` und andere _Optionen_ für das Feld definiert. Optionen umfassen Dinge wie:

  - Standardwerte.
  - Eingebaute Validatoren (z.B. max/min Werte) und benutzerdefinierte Validierungsfunktionen.
  - Ob das Feld erforderlich ist
  - Ob `String`-Felder automatisch auf Kleinschreibung, Großschreibung oder Beschnitt gesetzt werden sollen (z.B. `{ type: String, lowercase: true, trim: true }`)

Weitere Informationen zu Optionen finden Sie unter [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation).

#### Validierung

Mongoose bietet eingebaute und benutzerdefinierte Validatoren sowie synchrone und asynchrone Validatoren. Es ermöglicht es Ihnen, sowohl den akzeptablen Wertebereich als auch die Fehlermeldung für Validierungsfehler in allen Fällen anzugeben.

Die eingebauten Validatoren umfassen:

- Alle [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) haben den eingebauten [required](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) Validator. Dieser wird verwendet, um anzugeben, ob das Feld bereitgestellt werden muss, um ein Dokument zu speichern.
- [Zahlen](https://mongoosejs.com/docs/api/schemanumber.html) haben [min](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.min()>) und [max](<https://mongoosejs.com/docs/api/schemanumber.html#SchemaNumber.prototype.max()>) Validatoren.
- [Strings](https://mongoosejs.com/docs/api/schemastring.html) haben:

  - [enum](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.enum()>): Gibt die Menge der zulässigen Werte für das Feld an.
  - [match](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.match()>): Gibt einen regulären Ausdruck an, dem der String entsprechen muss.
  - [maxLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.maxlength()>) und [minLength](<https://mongoosejs.com/docs/api/schemastring.html#SchemaString.prototype.minlength()>) für den String.

Das folgende Beispiel (leicht modifiziert aus den Mongoose-Dokumenten) zeigt, wie Sie einige der Validatortypen und Fehlermeldungen angeben können:

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Zu wenige Eier"],
    max: 12,
    required: [true, "Warum keine Eier?"],
  },
  drink: {
    type: String,
    enum: ["Kaffee", "Tee", "Wasser"],
  },
});
```

Für vollständige Informationen zur Feldvalidierung siehe [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation).

#### Virtuelle Eigenschaften

Virtuelle Eigenschaften sind Dokumenteneigenschaften, die Sie abrufen und setzen können, die aber nicht in MongoDB gespeichert werden. Die Getter sind nützlich zum Formatieren oder Kombinieren von Feldern, während Setter nützlich sind, um einen einzelnen Wert in mehrere zu zerlegen, um sie zu speichern. Das Beispiel in der Dokumentation erstellt (und zerlegt) eine vollständige Namen virtuelle Eigenschaft aus einem Vornamen und Nachnamen-Feld, was einfacher und sauberer ist, als einen vollständigen Namen jedes Mal zu erstellen, wenn einer in einer Vorlage verwendet wird.

> [!NOTE]
> Wir werden eine virtuelle Eigenschaft in der Bibliothek verwenden, um für jeden Modell-Datensatz eine eindeutige URL mithilfe eines Pfades und des `_id`-Wertes des Datensatzes zu definieren.

Für weitere Informationen siehe [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose-Dokumentation).

#### Methoden und Abfrage-Helfer

Ein Schema kann auch [Instanzmethoden](https://mongoosejs.com/docs/guide.html#methods), [statische Methoden](https://mongoosejs.com/docs/guide.html#statics), und [Abfrage-Helfer](https://mongoosejs.com/docs/guide.html#query-helpers) haben. Die Instanz- und statischen Methoden sind ähnlich, aber mit dem offensichtlichen Unterschied, dass eine Instanzmethode mit einem bestimmten Datensatz verbunden ist und Zugriff auf das aktuelle Objekt hat. Abfrage-Helfer ermöglichen es Ihnen, die [kettbare Abfrage-Builder-API](https://mongoosejs.com/docs/queries.html) von Mongoose zu erweitern (z. B. um eine Abfrage "byName" hinzuzufügen, zusätzlich zu den `find()`, `findOne()` und `findById()`-Methoden).

### Verwendung von Modellen

Sobald Sie ein Schema erstellt haben, können Sie es verwenden, um Modelle zu erstellen. Das Modell repräsentiert eine Sammlung von Dokumenten in der Datenbank, die Sie durchsuchen können, während die Instanzen des Modells einzelne Dokumente repräsentieren, die Sie speichern und abrufen können.

Wir bieten einen kurzen Überblick unten. Weitere Informationen finden Sie unter: [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation).

> [!NOTE]
> Erstellung, Aktualisierung, Löschung und Abfrage von Datensätzen sind asynchrone Operationen, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben.
> Die Beispiele unten zeigen nur die Verwendung der relevanten Methoden und `await` (d.h. der wesentliche Code für die Verwendung der Methoden).
> Die umgebende `async function` und der `try...catch`-Block zur Error-Catching sind aus Gründen der Klarheit weggelassen.
> Weitere Informationen zur Verwendung von `await/async` finden Sie im Abschnitt [Datenbank-APIs sind asynchron](#datenbank-apis_sind_asynchron) oben.

#### Erstellen und Bearbeiten von Dokumenten

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann [`save()`](https://mongoosejs.com/docs/api/model.html#Model.prototype.save) darauf aufrufen.
Die Beispiele unten gehen davon aus, dass `SomeModel` ein Modell ist (mit einem einzigen Feld `name`), das wir aus unserem Schema erstellt haben.

```js
// Erstellen Sie eine Instanz von Modell SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Speichern Sie die neue Modellinstanz asynchron
await awesome_instance.save();
```

Sie können auch [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create) verwenden, um die Modellinstanz gleichzeitig mit dem Speichern zu definieren.
Unten erstellen wir nur ein einziges, aber Sie können mehrere Instanzen erstellen, indem Sie ein Array von Objekten übergeben.

```js
await SomeModel.create({ name: "auch_cool" });
```

Jedes Modell hat eine zugeordnete Verbindung (dies wird die Standardverbindung sein, wenn Sie `mongoose.model()` verwenden). Sie erstellen eine neue Verbindung und rufen `.model()` darauf auf, um die Dokumente auf einer anderen Datenbank zu erstellen.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` oder `update()` aufrufen, um geänderte Werte wieder in der Datenbank zu speichern.

```js
// Zugriff auf Modell-Feldwerte durch Punktnotation
console.log(awesome_instance.name); //sollte 'auch_cool' ausgeben

// Datensatz ändern, indem Sie die Felder ändern und dann speichern aufrufen.
awesome_instance.name = "Neuer cooler Name";
await awesome_instance.save();
```

#### Suche nach Datensätzen

Sie können nach Datensätzen mit Abfragemethoden suchen, indem Sie die Abfragebedingungen als JSON-Dokument angeben. Der untenstehende Codeausschnitt zeigt, wie Sie möglicherweise alle Athleten in einer Datenbank finden, die Tennis spielen, und nur die Felder für den Athlet_namen_ und _alter_ zurückgeben. Hier geben wir nur ein übereinstimmendes Feld (`sport`) an, aber Sie können mehr Kriterien hinzufügen, reguläre Ausdruckskriterien angeben oder die Bedingungen vollständig entfernen, um alle Athleten zurückzugeben.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// finde alle Athleten, die Tennis spielen, und gib die Felder 'name' und 'age' zurück
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

> [!NOTE]
> Es ist wichtig zu beachten, dass das Nichtfinden von Ergebnissen **kein Fehler** bei einer Suche ist — aber es kann ein Fehlerfall im Kontext Ihrer Anwendung sein.
> Wenn Ihre Anwendung erwartet, dass eine Suche einen Wert findet, können Sie die Anzahl der zurückgegebenen Einträge im Ergebnis überprüfen.

Abfrage-APIs wie [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) geben eine Variable vom Typ [Query](https://mongoosejs.com/docs/api/query.html) zurück.
Sie können ein Abfrageobjekt verwenden, um eine Abfrage in Teilen aufzubauen, bevor Sie sie mit der Methode [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec) ausführen.
`exec()` führt die Abfrage aus und gibt ein Promise zurück, auf das Sie für das Ergebnis `await`en können.

```js
// finde alle Athleten, die Tennis spielen
const query = Athlete.find({ sport: "Tennis" });

// Auswahl der Felder 'name' und 'age'
query.select("name age");

// Begrenzung unserer Ergebnisse auf 5 Elemente
query.limit(5);

// sortieren nach Alter
query.sort({ age: -1 });

// führen Sie die Abfrage zu einem späteren Zeitpunkt aus
query.exec();
```

Oben haben wir die Abfragebedingungen in der Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) definiert. Wir können dies auch mit einer Funktion [`where()`](<https://mongoosejs.com/docs/api/model.html#Model.where()>) tun, und wir können alle Teile unserer Abfrage mit dem Punktoperator (.) verkettet anstatt sie separat hinzuzufügen.
Der unten stehende Codeausschnitt ist das Gleiche wie unsere obige Abfrage, mit einer zusätzlichen Bedingung für das Alter.

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Zusätzliche where Abfrage
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();
```

Die Methode [`find()`](<https://mongoosejs.com/docs/api/model.html#Model.find()>) ruft alle übereinstimmenden Datensätze ab, aber oft möchten Sie nur eine Übereinstimmung erhalten. Die folgenden Methoden fragen nach einem einzelnen Datensatz:

- [`findById()`](<https://mongoosejs.com/docs/api/model.html#Model.findById()>): Findet das Dokument mit der angegebenen `id` (jedes Dokument hat eine eindeutige `id`).
- [`findOne()`](<https://mongoosejs.com/docs/api/model.html#Model.findOne()>): Findet ein einzelnes Dokument, das den angegebenen Kriterien entspricht.
- [`findByIdAndDelete()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>), [`findByIdAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()>), [`findOneAndRemove()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndRemove()>), [`findOneAndUpdate()`](<https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()>): Findet ein einzelnes Dokument nach `id` oder Kriterien und aktualisiert oder entfernt es dann. Diese sind nützliche bequemlichkeitfunktionen zum Aktualisieren und Entfernen von Datensätzen.

> [!NOTE]
> Es gibt auch eine [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) Methode, die Sie verwenden können, um die Anzahl der Artikel zu erhalten, die die Bedingungen erfüllen. Dies ist nützlich, wenn Sie eine Zählung vornehmen möchten, ohne die Datensätze tatsächlich abzurufen.

Es gibt noch viel mehr, was Sie mit Abfragen machen können. Weitere Informationen finden Sie unter: [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation).

#### Arbeiten mit verwandten Dokumenten — Population

Sie können Referenzen von einem Dokument/Modell-Instanz zu einem anderen mit dem `ObjectId`-Schemafeld erstellen oder von einem Dokument zu vielen mit einem Array von `ObjectIds`. Das Feld speichert die ID des zugehörigen Modells. Wenn Sie den tatsächlichen Inhalt des zugehörigen Dokuments benötigen, können Sie die Methode [`populate()`](https://mongoosejs.com/docs/populate.html) in einer Abfrage verwenden, um die ID durch die tatsächlichen Daten zu ersetzen.

Zum Beispiel definieren das folgende Schema Autoren und Geschichten.
Jeder Autor kann mehrere Geschichten haben, die wir als Array von `ObjectId` darstellen.
Jede Geschichte kann einen einzelnen Autor haben.
Die `ref`-Eigenschaft sagt dem Schema, welches Modell diesem Feld zugeordnet werden kann.

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

Wir können unsere Referenzen auf das verwandte Dokument speichern, indem wir den `_id`-Wert zuweisen.
Unten erstellen wir einen Autor, dann eine Geschichte, und weisen die Author-ID dem Autorenfeld unserer Geschichte zu.

```js
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob existiert jetzt, also erstellen wir eine Geschichte
const story = new Story({
  title: "Bob geht rodeln",
  author: bob._id, // die _id von unserem Autor Bob zuweisen. Diese ID wird standardmäßig erstellt!
});

await story.save();
```

> [!NOTE]
> Ein großer Vorteil dieses Programmierstils besteht darin, dass wir den Hauptpfad unseres Codes nicht mit Fehlerüberprüfungen komplizieren müssen.
> Wenn eine der `save()`-Operationen fehlschlägt, wird das Promise abgelehnt und ein Fehler wird geworfen.
> Unser Fehlerbehandlungscode befasst sich separat damit (normalerweise in einem `catch()`-Block), und somit ist die Absicht unseres Codes sehr klar.

Unsere Geschichtendokument hat jetzt einen Autor, der durch die ID des Autordokuments referenziert wird. Um die Autoreninformationen in den Geschichteergebnissen zu erhalten, verwenden wir [`populate()`](https://mongoosejs.com/docs/api/model.html#Model.populate), wie unten gezeigt.

```js
Story.findOne({ title: "Bob geht rodeln" })
  .populate("author") // Ersetzt die Autoren-ID durch tatsächliche Autoreninformationen in den Ergebnissen
  .exec();
```

> [!NOTE]
> Aufmerksame Leser werden bemerkt haben, dass wir einen Autor zu unserer Geschichte hinzugefügt haben, aber nichts getan haben, um unsere Geschichte zu den Geschichtenfeldern unserer Autoren hinzuzufügen. Wie können wir dann alle Geschichten eines bestimmten Autors bekommen? Eine Möglichkeit wäre, unsere Geschichte zum Geschichtenarray hinzuzufügen, aber das würde dazu führen, dass wir zwei Stellen haben, an denen die Informationen, die Autoren und Geschichten in Beziehung setzen, gepflegt werden müssen.
>
> Eine bessere Möglichkeit ist, die `_id` unseres _Autors_ zu erhalten und dann `find()` zu verwenden, um nach diesem im Autorenfeld in allen Geschichten zu suchen.
>
> ```js
> Story.find({ author: bob._id }).exec();
> ```

Das ist fast alles, was Sie über die Arbeit mit verwandten Elementen _für dieses Tutorial_ wissen müssen. Für detailliertere Informationen siehe [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation).

### Ein Schema/Model pro Datei

Auch wenn Sie Schemata und Modelle mit jeder beliebigen Dateistruktur erstellen können, empfehlen wir dringend, dass Sie jedes Modell-Schema in seinem eigenen Modul (Datei) definieren und dann die Methode zum Erstellen des Modells exportieren.
Dies wird unten gezeigt:

```js
// Datei: ./models/somemodel.js

// Mongoose einbinden
const mongoose = require("mongoose");

// Definieren Sie ein Schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Funktion exportieren, um "SomeModel" Modellklasse zu erstellen
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

Sie können dann das Modell sofort in anderen Dateien anfordern und verwenden. Unten zeigen wir, wie Sie es verwenden könnten, um alle Instanzen des Modells abzurufen.

```js
// Erstellen Sie ein SomeModel Modell, indem Sie einfach das Modul anfordern
const SomeModel = require("../models/somemodel");

// Verwenden Sie das SomeModel-Objekt (Modell), um alle SomeModel-Datensätze zu finden
const modelInstances = await SomeModel.find().exec();
```

## Einrichten der MongoDB-Datenbank

Nun, da wir etwas über Mongoose gelernt haben und wissen, wie wir unsere Modelle entwerfen möchten, ist es an der Zeit, mit der Arbeit an der _LocalLibrary_-Website zu beginnen. Das erste, was wir tun möchten, ist das Einrichten einer MongoDB-Datenbank, die wir verwenden können, um unsere Bibliotheksdaten zu speichern.

Für dieses Tutorial werden wir die [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cloudgehostete Sandbox-Datenbank verwenden. Diese Datenbankstufe wird nicht als geeignet für Produktionswebsites angesehen, da sie keine Redundanz aufweist, aber sie ist großartig für Entwicklung und Prototyping. Wir verwenden sie hier, weil sie kostenlos und einfach einzurichten ist, und weil MongoDB Atlas ein beliebter _Datenbank als Dienst_ Anbieter ist, den Sie möglicherweise für Ihre Produktionsdatenbank wählen könnten (andere beliebte Optionen zum Zeitpunkt des Schreibens sind [ScaleGrid](https://scalegrid.io/) und [ObjectRocket](https://www.objectrocket.com/)).

> [!NOTE]
> Wenn Sie möchten, können Sie eine MongoDB-Datenbank lokal einrichten, indem Sie die [entsprechenden Binärdateien für Ihr System](https://www.mongodb.com/try/download/community-edition/releases) herunterladen und installieren. Die restlichen Anweisungen in diesem Artikel wären ähnlich, außer für die Datenbank-URL, die Sie beim Verbinden angeben würden.
> Im Tutorial [Express Lernprogramm Teil 7: Bereitstellung auf Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment) hosten wir sowohl die Anwendung als auch die Datenbank auf [Railway](https://railway.app/), aber wir hätten ebenso eine Datenbank auf [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) verwenden können.

Sie müssen zuerst ein Konto bei [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) erstellen (dies ist kostenlos und erfordert nur, dass Sie grundlegende Kontaktdaten eingeben und deren Nutzungsbedingungen anerkennen).

Nachdem Sie sich eingeloggt haben, gelangen Sie auf den [Startbildschirm](https://cloud.mongodb.com/v2):

1. Klicken Sie auf die Schaltfläche **+ Erstellen** im Bereich _Übersicht_.

   ![Datenbank auf MongoDB Atlas erstellen.](mongodb_atlas_-_createdatabase.jpg)

2. Dies öffnet den Bildschirm _Cluster bereitstellen_.
   Klicken Sie auf die Option **M0 FREE**.

   ![Wählen Sie eine Bereitstellungsoption bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_deploy.jpg)

3. Scrollen Sie die Seite nach unten, um die verschiedenen Optionen zu sehen, die Sie auswählen können.
   ![Wählen Sie einen Cloud-Anbieter bei der Verwendung von MongoDB Atlas.](mongodb_atlas_-_createsharedcluster.jpg)

   - Sie können den Namen Ihres Clusters unter _Cluster-Name_ ändern.
     Wir behalten es für dieses Tutorial bei `Cluster0`.
   - Deaktivieren Sie das Kontrollkästchen _Beispieldatensatz vorab laden_, da wir später unsere eigenen Beispieldaten importieren werden.
   - Wählen Sie einen beliebigen Anbieter und Region aus den Abschnitten _Anbieter_ und _Region_ aus. Verschiedene Regionen bieten verschiedene Anbieter an.
   - Tags sind optional. Wir werden sie hier nicht verwenden.
   - Klicken Sie auf die Schaltfläche **Bereitstellung erstellen** (Erstellung des Clusters dauert einige Minuten).

4. Dies öffnet den Abschnitt _Schnellstart zur Sicherheit_.
   ![Richten Sie die Zugriffseinstellungen auf dem Bildschirm „Schnellstart zur Sicherheit“ ein, MongoDB Atlas.](mongodb_atlas_-_securityquickstart.jpg)

   - Geben Sie einen Benutzernamen und ein Passwort ein, die Ihre Anwendung verwenden soll, um auf die Datenbank zuzugreifen (oben haben wir einen neuen Login "cooluser" erstellt).
     Merken Sie sich die Anmeldeinformationen und speichern Sie sie sicher, da wir sie später benötigen.
     Klicken Sie auf die Schaltfläche **Benutzer erstellen**.

     > [!NOTE]
     > Vermeiden Sie die Verwendung von Sonderzeichen in Ihrem MongoDB-Benutzerpasswort, da mongoose möglicherweise die Verbindungszeichenfolge nicht richtig analysiert.

   - Wählen Sie **Nach aktueller IP-Adresse hinzufügen**, um den Zugang von Ihrem aktuellen Computer aus zu ermöglichen
   - Geben Sie `0.0.0.0/0` in das Feld IP-Adresse ein und klicken Sie dann auf die Schaltfläche **Eintrag hinzufügen**.
     Dies teilt MongoDB mit, dass wir den Zugriff von überall erlauben möchten.

     > [!NOTE]
     > Es ist eine bewährte Methode, die IP-Adressen zu beschränken, die eine Verbindung zu Ihrer Datenbank und anderen Ressourcen herstellen können. Hier erlauben wir eine Verbindung von überall, da wir nicht wissen, von wo die Anfrage nach der Bereitstellung kommen wird.

   - Klicken Sie auf die Schaltfläche **Fertig und schließen**.

5. Dies öffnet den folgenden Bildschirm. Klicken Sie auf die Schaltfläche **Zur Übersicht gehen**.
   ![Gehen Sie zu Datenbanken, nachdem Sie Access Rules auf MongoDB Atlas festgelegt haben.](mongodb_atlas_-_accessrules.jpg)

6. Sie kehren zum _Übersicht_ Bildschirm zurück. Klicken Sie auf den Abschnitt _Datenbank_ unter dem Menü _Bereitstellung_ links. Klicken Sie auf die Schaltfläche **Sammlungen durchsuchen**.
   ![Richten Sie eine Sammlung auf MongoDB Atlas ein.](mongodb_atlas_-_createcollection.jpg)

7. Dies öffnet den Abschnitt _Sammlungen_. Klicken Sie auf die Schaltfläche **Meine eigenen Daten hinzufügen**.
   ![Erstellen einer Datenbank auf MongoDB Atlas.](mongodb_atlas_-_adddata.jpg)

8. Dies öffnet den Bildschirm _Datenbank erstellen_.

   ![Details während der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Geben Sie den Namen für die neue Datenbank als `local_library` ein.
   - Geben Sie den Namen der Sammlung als `Collection0` ein.
   - Klicken Sie auf die Schaltfläche **Erstellen**, um die Datenbank zu erstellen.

9. Sie kehren zum Bildschirm _Sammlungen_ zurück und Ihre Datenbank wurde erstellt.
   ![Bestätigung der Datenbankerstellung auf MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Klicken Sie auf die Registerkarte _Übersicht_, um zur Cluster-Übersicht zurückzukehren.

10. Klicken Sie auf die Schaltfläche **Verbinden** auf dem Cluster0 _Übersicht_ Bildschirm.

    ![Konfigurieren Sie die Verbindung nach dem Einrichten eines Clusters auf MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)

11. Dies öffnet den Bildschirm _Zu Cluster0 verbinden_.

    ![Wählen Sie die Short SRV-Verbindung beim Einrichten einer Verbindung zu MongoDB Atlas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Wählen Sie Ihren Datenbankbenutzer aus.
    - Wählen Sie die Kategorie _Treiber_, dann den Treiber **Node.js** und die _Version_ wie gezeigt.
    - **Installieren Sie den Treiber nicht**, wie es vorgeschlagen wird.
    - Klicken Sie auf das Symbol **Kopieren**, um die Verbindungszeichenfolge zu kopieren.
    - Fügen Sie dies in Ihren lokalen Texteditor ein.
    - Ersetzen Sie den `<password>`-Platzhalter in der Verbindungszeichenfolge durch das Passwort Ihres Benutzers.
    - Fügen Sie den Datenbanknamen "local_library" im Pfad vor den Optionen ein (`...mongodb.net/local_library?retryWrites...`)
    - Speichern Sie die Datei, die diese Zeichenfolge enthält, an einem sicheren Ort.

Sie haben nun die Datenbank erstellt und eine URL (mit Benutzername und Passwort), die zum Zugriff darauf verwendet werden kann.
Diese wird ungefähr so aussehen: `mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`

## Mongoose installieren

Öffnen Sie eine Eingabeaufforderung und navigieren Sie zu dem Verzeichnis, in dem Sie Ihre [Skelett-Local Library-Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt haben.
Geben Sie den folgenden Befehl ein, um Mongoose (und seine Abhängigkeiten) zu installieren und es Ihrer **package.json**-Datei hinzuzufügen, es sei denn, Sie haben dies bereits beim Lesen des [Mongoose Primers](#installation_von_mongoose_und_mongodb) oben getan.

```bash
npm install mongoose
```

## Verbindung zu MongoDB herstellen

Öffnen Sie **/app.js** (im Root Ihres Projekts) und kopieren Sie den folgenden Text unterhalb der Stelle, an der Sie das _Express-Anwendungsobjekt_ deklarieren (nach der Zeile `const app = express();`).
Ersetzen Sie den Datenbank-URL-String ('_insert_your_database_url_here_') durch die Standort-URL, die Ihre eigene Datenbank repräsentiert (d.h. unter Verwendung der Informationen von _MongoDB Atlas_).

```js
// Richten Sie die mongoose-Verbindung ein
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

Wie im [Mongoose Primer](#verbindung_zu_mongodb) oben diskutiert wird, erstellt dieser Code die Standardverbindung zur Datenbank und gibt alle Fehler auf der Konsole aus.

Beachten Sie, dass das Hardcodieren von Datenbankanmeldeinformationen im Quellcode, wie oben gezeigt, nicht empfohlen wird.
Wir tun es hier, weil es den Kernverbindungscode zeigt und weil es in der Entwicklung kein erhebliches Risiko gibt, dass das Lecken dieser Details sensible Informationen offenlegt oder beschädigt.
Wir zeigen Ihnen, wie Sie dies sicherer tun können, wenn Sie [in die Produktion bereitstellen](/de/docs/Learn/Server-side/Express_Nodejs/deployment#database_configuration)!

## Das LocalLibrary-Schema definieren

Wir werden ein separates Modul für jedes Modell definieren, wie [oben beschrieben](#one_schemamodel_per_file).
Beginnen Sie damit, einen Ordner für unsere Modelle im Projekt-Root (**/models**) zu erstellen und dann separate Dateien für jedes der Modelle zu erstellen:

```plain
/express-locallibrary-tutorial  // das Projekt-Root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Autorenmodell

Kopieren Sie den unten gezeigten `Author`-Schema-Code und fügen Sie ihn in Ihre **./models/author.js**-Datei ein.
Das Schema definiert einen Autor als SchemaTypes `String` für den ersten und Familiennamen (erforderlich, mit einer maximalen Länge von 100 Zeichen) und `Date` Felder für die Geburts- und Todesdaten.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtuell für den vollständigen Namen des Autors
AuthorSchema.virtual("name").get(function () {
  // Um Fehler zu vermeiden, wenn ein Autor weder Nachname noch Vorname hat
  // Wir möchten sicherstellen, dass wir den Ausnahmefall durch Rückgabe eines leeren Strings für diesen Fall behandeln
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtuell für die URL des Autors
AuthorSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/author/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Author", AuthorSchema);
```

Wir haben auch eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für das AuthorSchema deklariert mit dem Namen "url", die die absolute URL zurückgibt, die erforderlich ist, um eine bestimmte Instanz des Modells abzurufen — wir werden die Eigenschaft in unseren Vorlagen verwenden, wann immer wir einen Link zu einem bestimmten Autor benötigen.

> [!NOTE]
> Das Deklarieren unserer URLs als virtuelle Eigenschaft im Schema ist eine gute Idee, da dann die URL für ein Element nur an einer Stelle geändert werden muss.
> An dieser Stelle würde ein Link mit dieser URL nicht funktionieren, da wir noch keinen Routenverarbeitungscode für einzelne Modellinstanzen haben.
> Wir werden das später in einem Artikel einrichten!

Am Ende des Moduls exportieren wir das Modell.

### Buchmodell

Kopieren Sie den unten gezeigten `Book`-Schema-Code und fügen Sie ihn in Ihre **./models/book.js**-Datei ein.
Das meiste davon ist dem Modell des Autors ähnlich — wir haben ein Schema mit mehreren String-Feldern deklariert und eine virtuelle Eigenschaft, um die URL bestimmter Buchdatensätze abzurufen, und wir haben das Modell exportiert.

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

// Virtuell für die URL des Buchs
BookSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/book/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Book", BookSchema);
```

Der Hauptunterschied besteht hier darin, dass wir zwei Referenzen zu anderen Modellen erstellt haben:

- `author` ist eine Referenz auf ein einzelnes `Author`-Modellobjekt und ist erforderlich.
- `genre` ist eine Referenz auf ein Array von `Genre`-Modellobjekten. Wir haben dieses Objekt noch nicht deklariert!

### Buchinstanz-Modell

Schließlich kopieren Sie den unten gezeigten `BookInstance`-Schema-Code und fügen ihn in Ihre **./models/bookinstance.js** Datei ein.
Die `BookInstance` stellt eine spezifische Kopie eines Buches dar, das jemand ausleihen könnte, und umfasst Informationen darüber, ob das Exemplar verfügbar ist, an welchem Datum es voraussichtlich zurückgegeben wird, und "Druck"-Details (oder Version).

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // Referenz auf das zugehörige Buch
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Verfügbar", "Wartung", "Ausgeliehen", "Reserviert"],
    default: "Wartung",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtuell für die URL der Buchinstanz
BookInstanceSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/bookinstance/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
```

Die neuen Dinge, die wir hier zeigen, sind die Feldoptionen:

- `enum`: Dies ermöglicht es uns, die zulässigen Werte eines Strings festzulegen. In diesem Fall verwenden wir es, um den Verfügbarkeitsstatus unserer Bücher anzugeben (die Verwendung eines Enums bedeutet, dass wir Tippfehler und willkürliche Werte für unseren Status verhindern können).
- `default`: Wir verwenden standard, um den Standardstatus für neu erstellte Buchinstanzen auf "Wartung" und das Standard `due_back`-Datum auf `jetzt` zu setzen (beachten Sie, wie Sie die Datumsfunktion beim Setzen des Datums aufrufen können!).

Alles andere sollte uns von unserem vorherigen Schema her bekannt sein.

### Genre-Modell - Herausforderung

Öffnen Sie Ihre **./models/genre.js** Datei und erstellen Sie ein Schema zum Speichern von Genres (der Buchkategorie, z.B. ob es sich um Fiktion oder Sachbuch, Romanze oder Militärgeschichte handelt).

Die Definition wird den anderen Modellen sehr ähnlich sein:

- Das Modell sollte einen Schema-Typ `String` namens `name` haben, um das Genre zu beschreiben.
- Dieser Name sollte erforderlich sein und zwischen 3 und 100 Zeichen lang sein.
- Deklarieren Sie eine [virtuelle Eigenschaft](#virtuelle_eigenschaften) für die URL des Genres, die `url` genannt wird.
- Exportieren Sie das Modell.

## Testen — einige Elemente erstellen

Das war's. Wir haben jetzt alle Modelle für die Website eingerichtet!

Um die Modelle zu testen (und um einige Beispielbücher und andere Artikel zu erstellen, die wir in unseren nächsten Artikeln verwenden können), führen wir jetzt ein _unabhängiges_ Skript aus, um Elemente jeder Art zu erstellen:

1. Laden Sie die Datei [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/populatedb.js) herunter (oder erstellen Sie sie anderweitig) und legen Sie sie in Ihrem _express-locallibrary-tutorial_ Verzeichnis ab (auf derselben Ebene wie `package.json`).

   > [!NOTE]
   > Der Code in `populatedb.js` kann nützlich sein, um JavaScript zu lernen, aber das Verständnis davon ist für dieses Tutorial nicht notwendig.

2. Führen Sie das Skript mit node in Ihrer Eingabeaufforderung aus, indem Sie die URL Ihrer _MongoDB_ Datenbank (die gleiche, die Sie anstelle des Platzhalters _insert_your_database_url_here_ früher in `app.js` ersetzt haben) übergeben:

   ```bash
   node populatedb <your MongoDB url>
   ```

   > [!NOTE]
   > Unter Windows müssen Sie die Datenbank-URL in doppelte Anführungszeichen (") setzen.
   > In anderen Betriebssystemen benötigen Sie möglicherweise einfache (') Anführungszeichen.

3. Das Skript sollte bis zum Abschluss durchlaufen werden und während es in das Terminal Elemente erstellt, diese anzeigen.

> [!NOTE]
> Gehen Sie zu Ihrer Datenbank auf MongoDB Atlas (im Reiter _Sammlungen_).
> Sie sollten jetzt in der Lage sein, in einzelne Sammlungen von Büchern, Autoren, Genres und Buchinstanzen zu bohren und einzelne Dokumente anzusehen.

## Zusammenfassung

In diesem Artikel haben wir ein wenig über Datenbanken und ORMs auf Node/Express gelernt, und viel darüber, wie Mongoose-Schema und Modelle definiert werden. Wir haben diese Informationen dann verwendet, um `Book`, `BookInstance`, `Author` und `Genre` Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zuletzt haben wir unsere Modelle getestet, indem wir eine Reihe von Instanzen erstellt haben (mit einem eigenständigen Skript). Im nächsten Artikel werden wir uns mit der Erstellung einiger Seiten zur Anzeige dieser Objekte beschäftigen.

## Siehe auch

- [Datenbankintegration](https://expressjs.com/en/guide/database-integration.html) (Express-Dokumentation)
- [Mongoose-Website](https://mongoosejs.com/) (Mongoose-Dokumentation)
- [Mongoose-Leitfaden](https://mongoosejs.com/docs/guide.html) (Mongoose-Dokumentation)
- [Validierung](https://mongoosejs.com/docs/validation.html) (Mongoose-Dokumentation)
- [Schema-Typen](https://mongoosejs.com/docs/schematypes.html) (Mongoose-Dokumentation)
- [Modelle](https://mongoosejs.com/docs/models.html) (Mongoose-Dokumentation)
- [Abfragen](https://mongoosejs.com/docs/queries.html) (Mongoose-Dokumentation)
- [Population](https://mongoosejs.com/docs/populate.html) (Mongoose-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}
