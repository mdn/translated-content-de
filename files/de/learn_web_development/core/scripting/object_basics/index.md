---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende Syntax von JavaScript-Objekten. Außerdem greifen wir einige JavaScript-Funktionen auf, die Sie im Verlauf des Kurses bereits kennengelernt haben, und zeigen, dass viele davon Objekte sind.

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
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie vermutlich jedes Mal Objekte verwendet haben, wenn Sie mit JavaScript gearbeitet haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden sowie verschachtelte Objekte und Arrays innerhalb von Objekten.</li>
          <li>Konstruktoren verwenden, um ein neues Objekt zu erstellen.</li>
          <li>Gültigkeitsbereich von Objekten und <code>this</code>.</li>
          <li>Auf Eigenschaften und Methoden zugreifen – mit Klammer- und Punktsyntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung zusammengehöriger Daten und/oder Funktionen.
Es besteht üblicherweise aus mehreren Variablen und Funktionen. Innerhalb eines Objekts werden diese Eigenschaften beziehungsweise Methoden genannt.
Sehen wir uns ein Beispiel an, um zu verstehen, wie Objekte aussehen.

Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

```html
<!doctype html>
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

Die Datei enthält nur wenig – ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir nutzen sie als Grundlage, um die grundlegende Objektsyntax zu untersuchen. Halten Sie bei der Arbeit mit diesem Beispiel die [JavaScript-Konsole Ihrer Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet, damit Sie Befehle eingeben können.

Wie so oft in JavaScript beginnt das Erstellen eines Objekts damit, eine Variable zu definieren und zu initialisieren. Geben Sie die folgende Zeile innerhalb der `<script></script>`-Tags ein, speichern Sie die Datei und laden Sie die Seite neu:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, das einer der folgenden Zeilen ähnelt:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Fertig! Allerdings ist dieses Objekt leer, sodass wir noch nicht viel damit anfangen können. Ändern wir das JavaScript-Objekt in unserer Datei wie folgt:

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

Speichern Sie die Datei, laden Sie die Seite neu und geben Sie einige der folgenden Ausdrücke in die JavaScript-Konsole der Entwicklertools Ihres Browsers ein:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Ihr Objekt enthält nun Daten und Funktionen, auf die Sie mit einer einfachen Syntax zugreifen können!

Was geschieht hier? Ein Objekt besteht aus mehreren Mitgliedern. Jedes Mitglied hat einen Namen (oben beispielsweise `name` und `age`) und einen Wert (beispielsweise `['Bob', 'Smith']` und `32`). Die Name-Wert-Paare werden jeweils durch ein Komma getrennt, Name und Wert durch einen Doppelpunkt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann fast alles sein – unser `person`-Objekt enthält eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Einträge sind Datenelemente und werden als **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Einträge sind Funktionen, mit denen das Objekt etwas mit diesen Daten tun kann. Sie werden als **Methoden** des Objekts bezeichnet.

Wenn Objektmitglieder Funktionen sind, gibt es eine einfachere Syntax. Statt `bio: function ()` können wir `bio()` schreiben. Zum Beispiel so:

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

Ab jetzt verwenden wir diese kürzere Syntax.

Ein solches Objekt wird als **Objektliteral** bezeichnet – wir haben den Inhalt des Objekts beim Erstellen direkt ausgeschrieben. Das unterscheidet sich von Objekten, die aus Klassen instanziiert werden. Diese behandeln wir später.

Objektliterale werden häufig verwendet, um mehrere strukturierte, zusammengehörige Datenelemente zu übertragen, beispielsweise mit einer Anfrage an einen Server, damit dieser die Daten in einer Datenbank speichert. Ein einzelnes Objekt zu senden ist wesentlich effizienter, als mehrere Elemente einzeln zu senden. Außerdem lässt sich damit leichter arbeiten als mit einem Array, wenn Sie einzelne Elemente anhand ihres Namens identifizieren möchten.

## Punktsyntax

Oben haben Sie mit der **Punktsyntax** auf die Eigenschaften und Methoden des Objekts zugegriffen. Der Objektname (`person`) dient als **Namensraum**: Er muss zuerst angegeben werden, um auf etwas innerhalb des Objekts zuzugreifen. Danach schreiben Sie einen Punkt und anschließend das Element, auf das Sie zugreifen möchten. Das kann eine einfache Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer Objektmethode sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie beispielsweise, das Mitglied `name` von

```js
const person = {
  name: ["Bob", "Smith"],
};
```

in Folgendes zu ändern:

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

Um auf diese Elemente zuzugreifen, ergänzen Sie am Ende einfach einen weiteren Punkt und den Namen des Elements. Probieren Sie Folgendes in der JavaScript-Konsole aus:

```js
person.name.first;
person.name.last;
```

Wenn Sie diese Änderung vornehmen, müssen Sie auch Ihren Methodencode durchgehen und alle Vorkommen von

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

## Klammersyntax

Die Klammersyntax bietet eine weitere Möglichkeit, auf Objekteigenschaften zuzugreifen.
Statt die [Punktsyntax](#punktsyntax) zu verwenden:

```js
person.age;
person.name.first;
```

können Sie eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Das sieht dem Zugriff auf Elemente eines Arrays sehr ähnlich und funktioniert im Wesentlichen genauso: Statt ein Element über eine Indexnummer auszuwählen, verwenden Sie den Namen, der dem Wert des jeweiligen Mitglieds zugeordnet ist.
Daher werden Objekte manchmal auch als **assoziative Arrays** bezeichnet: Sie ordnen Zeichenfolgen Werte zu, so wie Arrays Zahlen Werte zuordnen.

Die Punktsyntax wird im Allgemeinen der Klammersyntax vorgezogen, da sie kürzer und leichter zu lesen ist.
In manchen Fällen müssen Sie jedoch eckige Klammern verwenden.
Wenn beispielsweise der Name einer Objekteigenschaft in einer Variablen gespeichert ist, können Sie mit der Punktsyntax nicht auf den Wert zugreifen. Mit der Klammersyntax ist das hingegen möglich.

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

## Objektmitglieder setzen

Bisher haben wir nur betrachtet, wie Objektmitglieder abgerufen werden. Sie können den Wert eines Objektmitglieds auch **setzen** (aktualisieren), indem Sie das betreffende Mitglied mit Punkt- oder Klammersyntax angeben:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Geben Sie die obigen Zeilen ein und rufen Sie anschließend die Mitglieder erneut ab, um zu sehen, wie sie sich verändert haben:

```js
person.age;
person["name"]["last"];
```

Beim Setzen von Mitgliedern können Sie nicht nur die Werte bestehender Eigenschaften und Methoden aktualisieren, sondern auch völlig neue Mitglieder erstellen. Probieren Sie Folgendes in der JavaScript-Konsole aus:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Jetzt können Sie Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammersyntax ist, dass Sie damit nicht nur die Werte von Mitgliedern, sondern auch deren Namen dynamisch festlegen können. Angenommen, Benutzer sollen eigene Wertetypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingabefelder eingeben. Diese Werte könnten wir so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Anschließend könnten wir den neuen Mitgliedsnamen und Wert wie folgt zum `person`-Objekt hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um das zu testen, fügen Sie die folgenden Zeilen direkt unterhalb der schließenden geschweiften Klammer des `person`-Objekts in Ihren Code ein:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern Sie die Datei, laden Sie die Seite neu und geben Sie Folgendes in die Texteingabefelder ein:

```js
person.height;
```

Mit der Punktsyntax lässt sich eine Eigenschaft nicht auf die oben gezeigte Weise zu einem Objekt hinzufügen. Sie akzeptiert nur einen direkt angegebenen Mitgliedsnamen, keinen Variablenwert, der auf einen Namen verweist.

## Was ist „this“?

Vielleicht ist Ihnen in unseren Methoden etwas Ungewöhnliches aufgefallen. Sehen Sie sich beispielsweise diese Methode an:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was „this“ bedeutet. Das Schlüsselwort `this` verweist normalerweise auf das aktuelle Objekt, in dessen Kontext der Code ausgeführt wird. Innerhalb einer Objektmethode verweist `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Veranschaulichen wir das mit zwei vereinfachten `person`-Objekten:

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

In diesem Fall gibt `person1.introduceSelf()` „Hi! I'm Chris.“ aus und `person2.introduceSelf()` gibt „Hi! I'm Deepti.“ aus. Das funktioniert, weil `this` beim Aufruf der Methode auf das Objekt verweist, auf dem sie aufgerufen wurde. So kann dieselbe Methodendefinition für mehrere Objekte verwendet werden.

Wenn Sie Objektliterale von Hand schreiben, ist das noch nicht besonders nützlich: Die Verwendung des jeweiligen Objektnamens (`person1` oder `person2`) würde zum selben Ergebnis führen. Unverzichtbar wird `this` jedoch, wenn wir **Konstruktoren** verwenden, um aus einer einzigen Objektdefinition mehrere Objekte zu erstellen. Darum geht es im nächsten Abschnitt.

## Einführung in Konstruktoren

Objektliterale eignen sich gut, wenn Sie nur ein Objekt erstellen müssen. Wenn Sie wie im vorherigen Abschnitt mehrere Objekte erstellen möchten, sind sie jedoch wenig geeignet. Wir müssten für jedes Objekt denselben Code schreiben. Und wenn wir Eigenschaften des Objekts ändern möchten – etwa eine Eigenschaft `height` hinzufügen –, müssten wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten stattdessen die „Form“ eines Objekts definieren – also die Methoden und Eigenschaften, die es haben kann – und dann beliebig viele Objekte erstellen, wobei wir nur die Werte der Eigenschaften anpassen, die sich unterscheiden.

Eine erste Möglichkeit ist eine einfache Funktion:

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

Beachten Sie, dass `createPerson()` den Parameter `name` entgegennimmt, um den Wert der Eigenschaft `name` festzulegen. Die Methode `introduceSelf()` ist dagegen für alle mit dieser Funktion erstellten Objekte gleich. Das ist ein sehr verbreitetes Muster zum Erstellen von Objekten.

Nun können wir unter Wiederverwendung dieser Definition beliebig viele Objekte erstellen:

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
- `this` wird an das neue Objekt gebunden, sodass Sie im Konstruktorcode mit `this` darauf verweisen können.
- Der Code im Konstruktor wird ausgeführt.
- Das neue Objekt wird zurückgegeben.

Konstruktoren beginnen üblicherweise mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Wir könnten unser Beispiel daher so umschreiben:

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

Beim Durcharbeiten dieser Beispiele ist Ihnen die Punktsyntax wahrscheinlich bekannt vorgekommen. Das liegt daran, dass Sie sie im gesamten Kurs verwendet haben! Immer wenn wir ein Beispiel mit einer integrierten Browser-API oder einem JavaScript-Objekt bearbeitet haben, haben wir Objekte verwendet. Solche Funktionen basieren auf denselben Objektstrukturen, die wir hier betrachtet haben – auch wenn sie komplexer sind als unsere einfachen eigenen Beispiele.

Als Sie beispielsweise String-Methoden wie diese verwendet haben:

```js
myString.split(",");
```

haben Sie eine Methode eines [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekts verwendet. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenfolge erstellen, wird sie automatisch als Instanz von `String` erstellt. Deshalb stehen ihr mehrere allgemeine Methoden und Eigenschaften zur Verfügung.

Als Sie mit Zeilen wie dieser auf das Document Object Model zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden eines [`Document`](/de/docs/Web/API/Document)-Objekts verwendet. Für jede geladene Webseite wird eine Instanz von `Document` namens `document` erstellt. Sie repräsentiert die gesamte Struktur und den Inhalt der Seite sowie weitere Merkmale wie ihre URL. Auch für dieses Objekt stehen daher mehrere allgemeine Methoden und Eigenschaften zur Verfügung.

Dasselbe gilt für nahezu alle anderen integrierten Objekte oder APIs, die Sie bisher verwendet haben – etwa [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und viele weitere.

Beachten Sie, dass integrierte Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Bei der [Notifications API](/de/docs/Web/API/Notifications_API), mit der moderne Browser Systembenachrichtigungen anzeigen können, müssen Sie beispielsweise für jede Benachrichtigung mithilfe des Konstruktors eine neue Objektinstanz erstellen. Geben Sie Folgendes in Ihre JavaScript-Konsole ein:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie Sie in JavaScript mit Objekten arbeiten und eigene einfache Objekte erstellen. Objekte sind nützliche Strukturen, um zusammengehörige Daten und Funktionen zu speichern. Würden Sie alle Eigenschaften und Methoden unseres `person`-Objekts als getrennte Variablen und Funktionen verwalten, wäre das ineffizient und mühsam. Außerdem könnten Namenskonflikte mit anderen Variablen und Funktionen entstehen. Mit Objekten können wir diese Informationen sicher in einer eigenen Einheit zusammenfassen.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Inhalte verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
