---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende Syntax von JavaScript-Objekten. Außerdem greifen wir einige JavaScript-Funktionen auf, die Sie im Kurs bereits kennengelernt haben, und zeigen, dass viele davon Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich jedes Mal Objekte verwendet haben, wenn Sie mit JavaScript gearbeitet haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden sowie verschachtelte Objekte und Arrays in Objekten.</li>
          <li>Konstruktoren verwenden, um neue Objekte zu erstellen.</li>
          <li>Gültigkeitsbereich von Objekten und <code>this</code>.</li>
          <li>Auf Eigenschaften und Methoden zugreifen – mit Klammer- und Punktschreibweise.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung zusammengehöriger Daten und/oder Funktionen. Es besteht üblicherweise aus mehreren Variablen und Funktionen, die innerhalb eines Objekts als Eigenschaften beziehungsweise Methoden bezeichnet werden. Sehen wir uns ein Beispiel an, um zu verstehen, wie das aussieht.

Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Object-oriented JavaScript example</title>
  </head>

  <body>
    <p>
      This example requires you to enter commands in your browser's JavaScript
      console (see
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"
        >What are browser developer tools</a
      >
      for more information).
    </p>

    <script></script>
  </body>
</html>
```

Die Datei enthält nur wenig: ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Darauf aufbauend untersuchen wir die grundlegende Objektsyntax. Halten Sie während der Arbeit an diesem Beispiel die [JavaScript-Konsole Ihrer Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet, damit Sie Befehle eingeben können.

Wie so oft in JavaScript beginnt das Erstellen eines Objekts damit, eine Variable zu deklarieren und zu initialisieren. Geben Sie die folgende Zeile zwischen Ihren `<script></script>`-Tags ein, speichern Sie die Datei und laden Sie die Seite neu:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, das einer der folgenden Zeilen ähnelt:

```plain
[object Object]
Object { }
{ }
```

Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt! Damit wäre die Aufgabe erledigt. Allerdings ist das Objekt noch leer, sodass wir nicht viel damit anfangen können. Ändern wir das JavaScript-Objekt in unserer Datei wie folgt:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Speichern Sie die Datei, laden Sie die Seite neu und geben Sie einige der folgenden Ausdrücke in die JavaScript-Konsole Ihrer Browser-Entwicklertools ein:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Ihr Objekt enthält jetzt Daten und Funktionen, auf die Sie mit einer einfachen Syntax zugreifen können!

Was passiert hier? Ein Objekt besteht aus mehreren Mitgliedern. Jedes Mitglied hat einen Namen (oben beispielsweise `name` und `age`) und einen Wert (beispielsweise `['Bob', 'Smith']` und `32`). Die Namen-Wert-Paare werden durch Kommas getrennt, während zwischen dem Namen und dem Wert jeweils ein Doppelpunkt steht. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann nahezu alles sein – unser `person`-Objekt enthält eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Einträge sind Datenelemente und werden als **Eigenschaften** des Objekts bezeichnet. Die letzten beiden sind Funktionen, mit denen das Objekt etwas mit diesen Daten tun kann. Sie heißen **Methoden** des Objekts.

Wenn Objektmitglieder Funktionen sind, gibt es eine einfachere Syntax: Statt `bio: function ()` können wir `bio()` schreiben. Zum Beispiel so:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Von nun an verwenden wir diese kürzere Syntax.

Ein solches Objekt wird **Objektliteral** genannt – wir haben den Inhalt des Objekts bei seiner Erstellung direkt ausgeschrieben. Das unterscheidet sich von Objekten, die aus Klassen instanziiert werden. Diese behandeln wir später.

Objektliterale werden häufig verwendet, um mehrere strukturierte, zusammengehörige Datenelemente zu übertragen, etwa bei einer Anfrage an einen Server, der die Daten in einer Datenbank speichern soll. Ein einzelnes Objekt zu senden ist wesentlich effizienter, als mehrere Elemente einzeln zu senden. Außerdem lässt sich damit leichter arbeiten als mit einem Array, wenn Sie einzelne Elemente anhand ihres Namens identifizieren möchten.

## Punktschreibweise

Oben haben Sie mit der **Punktschreibweise** auf die Eigenschaften und Methoden des Objekts zugegriffen. Der Objektname (`person`) dient dabei als **Namensraum**: Er muss zuerst angegeben werden, um auf etwas innerhalb des Objekts zuzugreifen. Danach folgen ein Punkt und das Element, auf das Sie zugreifen möchten. Das kann eine einfache Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer Objektmethode sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Ändern Sie beispielsweise das Mitglied `name` von

```js
const person = {
  name: ["Bob", "Smith"],
};
```

zu

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

Um auf diese Elemente zuzugreifen, hängen Sie mit einem weiteren Punkt einen zusätzlichen Schritt an. Probieren Sie Folgendes in der JS-Konsole aus:

```js
person.name.first;
person.name.last;
```

Wenn Sie diese Änderung vornehmen, müssen Sie auch in Ihrem Methodencode alle Vorkommen von

```js
name[0];
name[1];
```

durch

```js
name.first;
name.last;
```

ersetzen. Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammerschreibweise

Die Klammerschreibweise ist eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Statt die [Punktschreibweise](#punktschreibweise) zu verwenden:

```js
person.age;
person.name.first;
```

können Sie eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Das ähnelt sehr dem Zugriff auf Elemente eines Arrays und funktioniert im Grunde genauso: Statt ein Element über eine Indexzahl auszuwählen, verwenden Sie den Namen, der dem Wert des jeweiligen Mitglieds zugeordnet ist. Daher werden Objekte manchmal auch **assoziative Arrays** genannt: Sie ordnen Zeichenfolgen Werte zu, so wie Arrays Zahlen Werte zuordnen.

Im Allgemeinen wird die Punktschreibweise bevorzugt, weil sie kürzer und leichter lesbar ist. In manchen Fällen müssen Sie jedoch eckige Klammern verwenden. Wenn der Name einer Objekteigenschaft beispielsweise in einer Variablen gespeichert ist, können Sie nicht mit der Punktschreibweise auf ihren Wert zugreifen. Mit der Klammerschreibweise ist das möglich.

Im folgenden Beispiel kann die Funktion `logProperty()` mit `person[propertyName]` den Wert der Eigenschaft abrufen, deren Name in `propertyName` steht.

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

## Objektmitglieder festlegen

Bisher haben wir uns nur angesehen, wie Objektmitglieder abgerufen werden. Sie können ihre Werte aber auch **festlegen** beziehungsweise aktualisieren. Geben Sie dazu das Mitglied, das Sie ändern möchten, in Punkt- oder Klammerschreibweise an:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Geben Sie die obigen Zeilen ein und rufen Sie die Mitglieder anschließend erneut ab, um zu sehen, wie sie sich verändert haben:

```js
person.age;
person["name"]["last"];
```

Sie können nicht nur die Werte vorhandener Eigenschaften und Methoden aktualisieren, sondern auch völlig neue Mitglieder erstellen. Probieren Sie Folgendes in der JS-Konsole aus:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Nun können Sie Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammerschreibweise ist, dass sich damit nicht nur Werte, sondern auch die Namen von Mitgliedern dynamisch festlegen lassen. Angenommen, Benutzer sollen eigene Werte in ihren Personendaten speichern können, indem sie den Namen eines Mitglieds und seinen Wert in zwei Textfelder eingeben. Diese Werte könnten wir so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Anschließend könnten wir den neuen Mitgliedsnamen und Wert wie folgt zum Objekt `person` hinzufügen:

```js
person[myDataName] = myDataValue;
```

Fügen Sie zum Testen die folgenden Zeilen unmittelbar nach der schließenden geschweiften Klammer des Objekts `person` in Ihren Code ein:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern Sie die Datei, laden Sie die Seite neu und geben Sie Folgendes in Ihr Textfeld ein:

```js
person.height;
```

Mit der Punktschreibweise lässt sich eine Eigenschaft nicht auf die oben gezeigte Weise hinzufügen. Sie akzeptiert nur einen direkt angegebenen Mitgliedsnamen, nicht den Wert einer Variablen, die einen Namen enthält.

## Was ist „this“?

Vielleicht ist Ihnen in unseren Methoden etwas Merkwürdiges aufgefallen. Betrachten Sie zum Beispiel diese Methode:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich vermutlich, was „this“ bedeutet. Das Schlüsselwort `this` bezieht sich normalerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezeichnet `this` das Objekt, auf dem die Methode aufgerufen wurde.

Veranschaulichen wir das anhand zweier vereinfachter Personenobjekte:

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
```

In diesem Fall gibt `person1.introduceSelf()` „Hi! I'm Chris.“ aus und `person2.introduceSelf()` gibt „Hi! I'm Deepti.“ aus. Das liegt daran, dass sich `this` beim Methodenaufruf auf das Objekt bezieht, auf dem die Methode aufgerufen wird. So kann dieselbe Methodendefinition für mehrere Objekte verwendet werden.

Wenn Sie Objektliterale von Hand schreiben, ist das noch nicht besonders nützlich: Die Verwendung des jeweiligen Objektnamens (`person1` oder `person2`) führt zum selben Ergebnis. Es wird jedoch unverzichtbar, wenn wir **Konstruktoren** verwenden, um aus einer einzigen Objektdefinition mehrere Objekte zu erstellen. Darum geht es im nächsten Abschnitt.

## Einführung in Konstruktoren

Objektliterale eignen sich gut, wenn Sie nur ein Objekt erstellen müssen. Wenn Sie jedoch wie im vorherigen Abschnitt mehrere Objekte erstellen möchten, sind sie wenig geeignet. Für jedes Objekt müssten wir denselben Code erneut schreiben. Wenn wir dann eine Eigenschaft des Objekts ändern möchten – etwa eine Eigenschaft `height` hinzufügen –, müssten wir daran denken, jedes Objekt zu aktualisieren.

Stattdessen möchten wir die „Form“ eines Objekts definieren – also die Menge seiner möglichen Methoden und Eigenschaften – und dann beliebig viele Objekte erstellen, wobei wir nur die Werte der Eigenschaften anpassen, die sich unterscheiden.

Ein erster Ansatz dafür ist eine einfache Funktion:

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

Diese Funktion erstellt bei jedem Aufruf ein neues Objekt und gibt es zurück. Das Objekt hat zwei Mitglieder:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Beachten Sie, dass `createPerson()` den Parameter `name` entgegennimmt, um den Wert der Eigenschaft `name` festzulegen. Die Methode `introduceSelf()` ist dagegen bei allen Objekten gleich, die mit dieser Funktion erstellt werden. Das ist ein sehr gängiges Muster zum Erstellen von Objekten.

Nun können wir die Definition wiederverwenden und beliebig viele Objekte erstellen:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Möglichkeit ist ein **Konstruktor**. Ein Konstruktor ist eine Funktion, die mit dem Schlüsselwort {{jsxref("new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, geschieht Folgendes:

- Ein neues Objekt wird erstellt.
- `this` wird an das neue Objekt gebunden, sodass Sie im Konstruktorcode über `this` darauf zugreifen können.
- Der Code im Konstruktor wird ausgeführt.
- Das neue Objekt wird zurückgegeben.

Konventionsgemäß beginnen Konstruktornamen mit einem Großbuchstaben und sind nach dem Objekttyp benannt, den sie erstellen. Wir könnten unser Beispiel also so umschreiben:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

Um `Person()` als Konstruktor aufzurufen, verwenden wir `new`:

```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## Sie haben die ganze Zeit Objekte verwendet

Während Sie diese Beispiele durchgearbeitet haben, kam Ihnen die Punktschreibweise wahrscheinlich bekannt vor. Das liegt daran, dass Sie sie im gesamten Kurs bereits verwendet haben! Immer wenn wir mit einem Beispiel gearbeitet haben, das eine integrierte Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet. Solche Funktionen beruhen auf denselben Objektstrukturen, die wir hier betrachtet haben – auch wenn sie komplexer sind als unsere einfachen eigenen Beispiele.

Wenn Sie also String-Methoden wie diese verwendet haben:

```js
myString.split(",");
```

haben Sie eine Methode eines [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekts verwendet. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenfolge erstellen, wird sie automatisch als Instanz von `String` erstellt. Deshalb stehen ihr mehrere gemeinsame Methoden und Eigenschaften zur Verfügung.

Wenn Sie mit einer Zeile wie dieser auf das Document Object Model zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden eines [`Document`](/de/docs/Web/API/Document)-Objekts verwendet. Für jede geladene Webseite wird eine Instanz von `Document` namens `document` erstellt. Sie repräsentiert die gesamte Struktur und den Inhalt der Seite sowie weitere Merkmale wie ihre URL. Auch ihr stehen daher mehrere gemeinsame Methoden und Eigenschaften zur Verfügung.

Dasselbe gilt für nahezu alle anderen integrierten Objekte und APIs, die Sie verwendet haben – etwa [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass integrierte Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Bei der [Notifications API](/de/docs/Web/API/Notifications_API), mit der moderne Browser Systembenachrichtigungen ausgeben können, müssen Sie beispielsweise für jede Benachrichtigung mithilfe des Konstruktors eine neue Objektinstanz erzeugen. Geben Sie Folgendes in Ihre JavaScript-Konsole ein:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie Sie in JavaScript mit Objekten arbeiten und eigene einfache Objekte erstellen. Objekte sind außerdem sehr nützlich, um zusammengehörige Daten und Funktionen zu bündeln. Würden Sie alle Eigenschaften und Methoden unseres Objekts `person` als separate Variablen und Funktionen verwalten, wäre das umständlich und ineffizient. Außerdem könnten Namenskonflikte mit anderen Variablen und Funktionen entstehen. Mit Objekten können wir diese Informationen sicher in einer eigenen Einheit zusammenhalten.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Inhalte verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
