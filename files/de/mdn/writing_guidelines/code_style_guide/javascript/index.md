---
title: Richtlinien zum Schreiben von JavaScript-Codebeispielen
short-title: JavaScript examples
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die folgenden Richtlinien beziehen sich auf das Schreiben von JavaScript-Beispielcode für die MDN Web Docs. Dieser Artikel ist eine Liste von Regeln für das Schreiben prägnanter Beispiele, die von möglichst vielen Personen verstanden werden.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, zu Leerzeichen und Zeilenlängen sind immer umstritten gewesen. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

In den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald alle wichtigen Browser - Chrome, Edge, Firefox und Safari - diese unterstützen.

## Arrays

### Array-Erstellung

Verwenden Sie Literale und keine Konstruktoren, um Arrays zu erstellen.

Erstellen Sie Arrays wie folgt:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht beim Erstellen von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Verwenden Sie beim Hinzufügen von Elementen zu einem Array [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) anstelle einer direkten Zuordnung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie dem Array Elemente wie folgt hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie dem Array keine Elemente wie folgt hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider kann `await` nicht auf der obersten Ebene verwendet werden, es sei denn, es handelt sich um ein ECMAScript-Modul. Von Node.js verwendete CommonJS-Module sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie top-level `await`.

## Kommentare

Kommentare sind entscheidend dafür, gute Codebeispiele zu schreiben. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders darauf.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Auf der anderen Seite ist das Wiedergeben des Codes in Prosa keine sinnvolle Verwendung von Kommentaren:

  ```js example-bad
  let total = 0;

  // For loop from 1 to 4
  for (let i = 0; i < 4; i++) {
    // Add value to the total
    total += arr[i];
  }
  ```

- Kommentare sind auch nicht notwendig, wenn Funktionen explizite Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare sind mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit auskommentierter Code optisch leichter zu erkennen ist. Darüber hinaus ermöglicht diese Konvention das Auskommentieren von Codeabschnitten während des Debuggens mit `/* … */`.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie wie einen Satz mit einem Großbuchstaben, enden Sie aber nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht unmittelbar nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar. Es wird einen Codeblock erstellen, der deutlich macht, worauf sich der Kommentar bezieht. Setzen Sie Ihre Kommentare auch auf separate Zeilen, die dem Code vorausgehen, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // Calculate the total price
    const total = goodsPrice + shipmentPrice + taxes;

    // Create and append a new paragraph to the document
    const para = document.createElement("p");
    para.textContent = `Total price is ${total}`;
    document.body.appendChild(para);
  }
  ```

### Ausgabe von Logs

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie Daten protokollieren. In Codebeispielen verwenden wir häufig `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen zu verstehen, was ohne Ausführen des Codes passieren wird, können Sie nach der Funktion einen Kommentar hinzufügen, der das generierte Protokoll beschreibt. Schreiben Sie:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['banana', 'mango', 'orange']
  }
  ```

  Schreiben Sie nicht:

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Logs: ['banana', 'mango', 'orange']
    console.log(fruitBasket);
  }
  ```

- Falls die Zeile zu lang wird, setzen Sie den Kommentar _nach_ der Funktion so:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, also versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

```js example-good
// This is an example of a multi-line comment.
// The imaginary function that follows has some unusual
// limitations that I want to call out.
// Limitation 1
// Limitation 2
```

Verwenden Sie nicht `/* … */`:

```js example-bad
/* This is an example of a multi-line comment.
  The imaginary function that follows has some unusual
  limitations that I want to call out.
  Limitation 1
  Limitation 2 */
```

### Verwenden Sie Kommentare, um Ellipsen zu kennzeichnen

Das Überspringen von redundantem Code unter Verwendung von Ellipsen (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies sorgfältig tun, da Entwickler häufig Beispiele kopieren und in ihren Code einfügen, und alle unsere Codebeispiele gültiges JavaScript sein sollten.

In JavaScript sollten Sie die Ellipsen (`…`) in einem Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der diesen Codeabschnitt wiederverwendet, hinzufügen soll.

Der Einsatz eines Kommentars für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Muster-Code kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie die Ellipsen (…) nicht so:

```js example-bad
function exampleFunc() {
  …
}
```

### Kommentieren Sie Parameter aus

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Codebeispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie dazu `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "camel case")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, lesbare und semantische Namen, wo dies angemessen ist.

Das folgende ist ein korrektes Beispiel für einen Funktionsnamen:

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

Verwenden Sie keine Funktionsnamen wie diese:

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### Funktionsdeklarationen

- Verwenden Sie, wo immer möglich, die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist die empfohlene Art, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Dies ist keine gute Art, eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Wenn Sie anonyme Funktionen als Rückruf verwenden (eine Funktion, die zur Methode-Aufrufübergabe an verwendet wird), verwenden Sie eine Pfeilfunktion (arrow function), um den Code kürzer und sauberer zu machen, wenn Sie nicht auf `this` zugreifen müssen.

  Hier ist die empfohlene Vorgehensweise:

  ```js example-good
  const array = [1, 2, 3, 4];
  const sum = array.reduce((a, b) => a + b);
  ```

  Anstelle von:

  ```js example-bad
  const array = [1, 2, 3, 4];
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  ```

- Vermeiden Sie die Verwendung einer Pfeilfunktion, um eine Funktion einem Bezeichner zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Tun Sie dies nicht:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Wenn Sie Pfeilfunktionen verwenden, verwenden Sie [implizite Rückgaben](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _expression body_), wo immer möglich:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Und nicht:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Schleifen und Bedingungsanweisungen

### Schleifeninitialisierung

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die passende aus von [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

- Vermeiden Sie bei der Iteration durch alle Elementkollektionen die klassische `for (;;)` Schleife und verwenden Sie stattdessen `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Kollektion verwenden, die kein `Array` ist, Sie prüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist), oder dass die `forEach()`-Methode tatsächlich vorhanden ist.

  Verwenden Sie `for...of`:

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  for (const dog of dogs) {
    console.log(dog);
  }
  ```

  Oder `forEach()`:

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  dogs.forEach((dog) => {
    console.log(dog);
  });
  ```

  Verwenden Sie nicht `for (;;)` — nicht nur müssen Sie einen zusätzlichen Index, `i`, hinzufügen, sondern Sie müssen auch die Länge des Arrays verfolgen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer ordnungsgemäß durch das `const` Schlüsselwort für `for...of` oder `let` für die anderen Schleifen definieren. Lassen Sie ihn nicht weg. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das Beispiel unten entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und wird im strict mode fehlschlagen):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch den Index zugreifen müssen, können Sie `.forEach()` anstelle von `for (;;)`. Schreiben Sie:

  ```js example-good
  const gerbils = ["Zoé", "Chloé"];
  gerbils.forEach((gerbil, i) => {
    console.log(`Gerbil #${i}: ${gerbil}`);
  });
  ```

  Schreiben Sie nicht:

  ```js example-bad
  const gerbils = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`Gerbil #${i}: ${gerbils[i]}`);
  }
  ```

> [!WARNING]
> Verwenden Sie niemals `for...in` mit Arrays und Strings.

> [!NOTE]
> Erwägen Sie, überhaupt keine `for` Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, ziehen Sie die Verwendung semantischer Iterationsmethoden in Betracht, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr.

### Kontrollstrukturen

In Bezug auf `if...else` Kontrollstrukturen gibt es einen bemerkenswerten Fall zu beachten. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

Fahren Sie direkt nach der `if`-Anweisung fort. Schreiben Sie:

```js example-good
if (test) {
  // Perform something if test is true
  // …
  return;
}

// Perform something if test is false
// …
```

Schreiben Sie nicht:

```js example-bad
if (test) {
  // Perform something if test is true
  // …
  return;
} else {
  // Perform something if test is false
  // …
}
```

### Verwenden Sie geschweifte Klammern bei Kontrollflussanweisungen und Schleifen

Während Kontrollflussanweisungen wie `if`, `for` und `while` nicht die Verwendung von geschweiften Klammern erfordern, wenn der Inhalt aus nur einer Anweisung besteht, sollten Sie immer Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass die Klammern beim Hinzufügen weiterer Anweisungen vergessen werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie in einem bestimmten Fall keine `break`-Anweisung nach einer `return`-Anweisung hinzu. Schreiben Sie stattdessen `return`-Anweisungen so:

  ```js example-good
  switch (species) {
    case "chicken":
      return farm.shed;
    case "horse":
      return corral.entry;
    default:
      return "";
  }
  ```

  Wenn Sie eine `break`-Anweisung hinzufügen, wird sie unerreichbar sein. Schreiben Sie nicht:

  ```js example-bad
  switch (species) {
    case "chicken":
      return farm.shed;
      break;
    case "horse":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- Verwenden Sie `default` als letzten Fall und enden Sie nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass Sie beim Deklarieren einer lokalen Variable für einen Fall Klammern verwenden müssen, um einen Geltungsbereich zu definieren:

  ```js
  switch (fruits) {
    case "Orange": {
      const slice = fruit.slice();
      eat(slice);
      break;
    }
    case "Apple": {
      const core = fruit.extractCore();
      recycle(core);
      break;
    }
  }
  ```

### Fehlerbehandlung

- Wenn bestimmte Zustände Ihres Programms unbehandelte Fehler werfen, wird die Ausführung gestoppt und die Nützlichkeit des Beispiels möglicherweise verringert. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block abfangen, wie unten gezeigt:

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- Wenn Sie den Parameter der `catch`-Anweisung nicht benötigen, lassen Sie ihn weg:

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
  ```

> [!NOTE]
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht-wiederherstellbaren Fehler sollten weitergereicht werden und die Aufrufkette hinaufsteigen.

## Objekte

### Objektnamen

- Verwenden Sie beim Definieren einer Klasse _PascalCase_ (Start mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (Start mit einem Kleinbuchstaben) für die Objekteigenschafts- und Methodennamen.

- Verwenden Sie beim Definieren einer Objektinstanz, entweder ein Literal oder einen Konstruktor, _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Verwenden Sie zum Erstellen allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind) Literale und keine Konstruktoren.

Zum Beispiel, tun Sie dies:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt wie folgt:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht alte Konstruktoren.

  Zum Beispiel ist dies die empfohlene Vorgehensweise:

  ```js example-good
  class Person {
    constructor(name, age, pronouns) {
      this.name = name;
      this.age = age;
      this.pronouns = pronouns;
    }

    greeting() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }
  ```

- Verwenden Sie `extends` für die Vererbung:

  ```js example-good
  class Teacher extends Person {
    // …
  }
  ```

### Methoden

Um Methoden zu definieren, verwenden Sie die Methodendefinitionssyntax:

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

Anstatt:

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### Objekteigenschaften

- Die Methode [`Object.prototype.hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) wurde zugunsten von [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) veraltet.
- Verwenden Sie nach Möglichkeit die kürzere Schreibweise und vermeiden Sie die Duplizierung der Eigenchaftsidentifier. Schreiben Sie:

  ```js example-good
  function createObject(name, age) {
    return { name, age };
  }
  ```

  Schreiben Sie nicht:

  ```js example-bad
  function createObject(name, age) {
    return { name: name, age: age };
  }
  ```

## Operatoren

Dieser Abschnitt listet unsere Empfehlungen auf, welche Operatoren zu verwenden sind und wann.

### Bedingungsoperatoren

Wenn Sie einen literalen Wert in einer Variable basierend auf einer Bedingung speichern wollen, verwenden Sie statt einer `if...else`-Anweisung einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator). Diese Regel gilt auch beim Zurückgeben eines Wertes. Schreiben Sie:

```js example-good
const x = condition ? 1 : 2;
```

Schreiben Sie nicht:

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

Der bedingte Operator ist hilfreich beim Erstellen von Zeichenfolgen zum Protokollieren von Informationen. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren und verdeckt den zentralen Punkt des Beispiels.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheits-](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach gleich) und die Ungleichheitsoperatoren gegenüber den losen Gleichheits- (doppelt gleich) und Ungleichheitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Ungleichheitsoperatoren so:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die losen Gleichheits- und Ungleichheitsoperatoren, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlagen wird, möchten wir diese nicht in unseren Codebeispielen haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie es benötigen.

### Abkürzungen für booleanische Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Verwenden Sie beispielsweise `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy- oder falsy-Werten werden unterschiedlich behandelt.

## Strings

Zeichenfolgenliterale können in einzelne Anführungszeichen gesetzt werden, wie in `'Ein String'`, oder in doppelte Anführungszeichen, wie in `"Ein String"`. Machen Sie sich keine Gedanken darüber, welche Sie verwenden sollen; Prettier hält es konsistent.

### Template-Literale

Verwenden Sie zum Einfügen von Werten in Strings [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verketteten Strings nicht so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn es keine Substitutionen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis von Code.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht gebräuchliche Abkürzungen. Gute Variablennamen sind in der Regel zwischen 3 und 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Verkürzung zu `acclmtr` zum Zweck der Zeichenlänge.
- Versuchen Sie, reale, relevante Beispiele zu verwenden, bei denen jede Variable eine klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://de.wikipedia.org/wiki/Ungarische_Notation). Prefixieren Sie den Variablennamen nicht mit seinem Typ. Schreiben Sie zum Beispiel `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "Maria Sanchez"` statt `sName = "Maria Sanchez"`.
- Für Kollektionen vermeiden Sie es, den Typ wie Liste, Array, Warteschlange in den Namen einzufügen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel, für ein Array von Autos, verwenden Sie `cars` anstelle von `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form eines Features ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, lesbare und semantische Namen, wo es angebracht ist. Verwenden Sie zum Beispiel `currencyName` anstelle von `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Verwenden Sie zum Beispiel `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie ein Feature im Allgemeinen ohne praktischen Kontext beschreiben möchten.
- Verwenden Sie Variablennamen wie hier gezeigt:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  Benennen Sie Variablen nicht so:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> Der einzige Ort, an dem es erlaubt ist, keine lesbaren, semantischen Namen zu verwenden, ist dort, wo es eine sehr allgemein anerkannte Konvention gibt, wie z.B. die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, so:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variablen ändern, verwenden Sie `let` wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das Beispiel unten verwendet `let`, obwohl es `const` sein sollte. Der Code wird funktionieren, aber wir möchten diese Verwendung in den Codebeispielen der MDN-Web-Dokumentation vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das Beispiel unten verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuvergabe wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das Beispiel unten verwendet `var` und verschmutzt damit den globalen Gültigkeitsbereich:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Deklarieren Sie eine Variable pro Zeile, wie folgt:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, die durch Kommata getrennt oder Verkettungserklärungen verwendet werden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typkonvertierungen

Vermeiden Sie implizite Typkonvertierungen. Verwenden Sie insbesondere nicht `+val`, um einen Wert in eine Zahl zu zwingen, und `"" + val`, um einen Wert in eine Zeichenfolge zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

Schreiben Sie nicht:

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## Zu vermeidende Web-APIs

Zusätzlich zu diesen JavaScript-Sprachmerkmalen empfehlen wir einige Richtlinien bezüglich der Web-APIs, die zu beachten sind.

### Vermeiden Sie Browser-Präfixe

Wenn alle wichtigen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, setzen Sie das Präfix der Funktion nicht voran. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Die gleiche Regel gilt für CSS-Präfixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in ihrer Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht vollständige Liste von Web-APIs, die vermieden werden sollten, und was sie ersetzen sollen:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode`, in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht, um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler keinen Zugriff auf den Parameter hat. Je mehr wir als Autoren vermeiden, sie zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das Beispiel unten demonstriert die Verwendung von `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  Verwenden Sie `innerHTML` nicht, um _reinen Text_ in DOM-Knoten einzufügen.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Zudem ist sie modal für das gesamte Fenster, was ärgerlich ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Protokollierungsmethode

- Beim Protokollieren einer Nachricht verwenden Sie `console.log()`.
- Beim Protokollieren eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - stöbern Sie durch unsere JavaScript-Referenzseiten, um gute, prägnante, bedeutungsvolle JavaScript-Snippets zu sehen.
