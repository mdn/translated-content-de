---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
short-title: JavaScript examples
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: 359d3c9cea9b2caa691c63ed3b01714ad4416372
---

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln zum Schreiben prägnanter Beispiele, die von möglichst vielen Menschen verstanden werden können.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte werden spezifischere Details behandeln.

### Format wählen

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Moderne JavaScript-Funktionen verwenden, wenn unterstützt

Sie können neue Funktionen verwenden, sobald alle großen Browser – Chrome, Edge, Firefox und Safari – sie unterstützen (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die JavaScript-Funktion, die auf der Seite dokumentiert wird (die stattdessen von den [Aufnahmekriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) bestimmt wird). Zum Beispiel können Sie [nicht standardmäßige oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele schreiben, die ihr Verhalten demonstrieren, aber Sie sollten davon absehen, diese Funktionen in Demos für andere nicht verwandte Funktionen, wie eine Web-API, zu verwenden.

## Arrays

### Array-Erstellung

Verwenden Sie bei der Erstellung von Arrays Literale und keine Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht bei der Erstellung von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Wenn Sie Elemente zu einem Array hinzufügen, verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente so hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie keine Elemente so hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte wenn möglich verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await` Syntax. Leider können Sie `await` nicht auf der obersten Ebene verwenden, es sei denn, Sie sind in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf Top-Level.

## Kommentare

Kommentare sind entscheidend für das Schreiben guter Codebeispiele. Sie verdeutlichen die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Andernfalls ist das Wiedergeben des Codes in Prosa keine gute Nutzung von Kommentaren:

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

### Einzeilige Kommentare verwenden

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Im Allgemeinen verwenden Sie einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es einfacher ist, auskommentierten Code visuell zu erkennen. Zusätzlich ermöglicht diese Konvention, Abschnitte des Codes mit `/* … */` während des Debuggens auszukommentieren.

- Lassen Sie einen Leerraum zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie wie bei einem Satz mit einem Großbuchstaben, jedoch enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Falls ein Kommentar nicht unmittelbar nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile hinzu und dann den Kommentar. Dadurch wird ein Codeblock erzeugt, der deutlich macht, worauf sich der Kommentar bezieht. Außerdem sollten Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, platzieren. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was geschehen wird, ohne den Code auszuführen, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Log setzen. Schreiben Sie:

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

- Falls die Zeile zu lang wird, setzen Sie den Kommentar _nach_ der Funktion, wie folgt:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind normalerweise besser, daher versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Falls dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden Sie Kommentare, um Auslassungspunkte zu kennzeichnen

Das Überspringen von redundantem Code mit Ellipsen (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies bedacht tun, da Entwickler häufig Beispiele kopieren und in ihren Code einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Ellipsen (`…`) in einen Kommentar setzen. Wo möglich, geben Sie an, welche Aktion jemand, der diesen Schnipsel wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie Ellipsen (…) nicht wie folgt:

```js example-bad
function exampleFunc() {
  …
}
```

### Parameter auskommentieren

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Codebeispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Um dies zu tun, verwenden Sie `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Verwenden Sie für Funktionsnamen {{Glossary("camel_case", "camel case")}} und beginnen Sie mit einem Kleinbuchstaben. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo es angemessen ist.

Das folgende Beispiel zeigt einen korrekten Funktionsnamen:

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

- Verwenden Sie nach Möglichkeit die Funktionsdeklaration gegenüber Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist die empfohlene Art, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Dies ist keine gute Möglichkeit, eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Bei der Verwendung anonymer Funktionen als Callback (eine Funktion, die einer anderen Methode übergeben wird), verwenden Sie eine Pfeilfunktion, wenn Sie `this` nicht benötigen, um den Code kürzer und sauberer zu gestalten.

  Hier ist die empfohlene Weise:

  ```js example-good
  const array = [1, 2, 3, 4];
  const sum = array.reduce((a, b) => a + b);
  ```

  Anstatt dies:

  ```js example-bad
  const array = [1, 2, 3, 4];
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  ```

- Vermeiden Sie es, eine Pfeilfunktion zu verwenden, um eine Funktion einem Identifikator zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Tun Sie nicht:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Bei der Verwendung von Pfeilfunktionen verwenden Sie den [impliziten Rückgabewert](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _Expression-Body_), wann immer möglich:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Und nicht:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Schleifen und Kontrollstrukturen

### Schleifeninitialisierung

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die passende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), usw.

- Bei der Iteration durch alle Elemente einer Sammlung vermeiden Sie die klassische `for (;;)` Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass Sie, wenn Sie eine Sammlung verwenden, die kein `Array` ist, überprüfen müssen, ob `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder dass die `forEach()` Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — nicht nur müssen Sie einen zusätzlichen Index, `i`, hinzufügen, sondern auch die Länge des Arrays verfolgen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer ordnungsgemäß definieren, indem Sie das Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht aus. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das folgende Beispiel entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und wird im strict mode fehlschlagen):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch auf den Index zugreifen müssen, können Sie `.forEach()` statt `for (;;)` verwenden. Schreiben Sie:

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
> Überlegen Sie, überhaupt keine `for` Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) benutzen, ziehen Sie in Betracht, stattdessen mehr semantische Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), und viele mehr.

### Steueranweisungen

Es gibt einen bemerkenswerten Fall, den Sie bei den Kontrollstrukturen `if...else` beachten sollten. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

### Verwenden Sie Klammern bei Kontrollflussanweisungen und Schleifen

Obwohl Kontrollflussanweisungen wie `if`, `for` und `while` keine Klammern erfordern, wenn der Inhalt aus einer einzelnen Anweisung besteht, sollten Sie immer Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass Klammern vergessen werden, wenn weitere Anweisungen hinzugefügt werden.

### Switch-Anweisungen

Switch-Anweisungen können ein wenig knifflig sein.

- Fügen Sie keinen `break`-Befehl nach einer `return`-Anweisung in einem spezifischen Fall hinzu. Schreiben Sie stattdessen `return`-Anweisungen so:

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

  Wenn Sie einen `break`-Befehl hinzufügen, wird dieser nicht erreichbar sein. Schreiben Sie nicht:

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

- Verwenden Sie `default` als letzten Fall und beenden Sie ihn nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass Sie, wenn Sie eine lokale Variable für einen Fall deklarieren, Klammern verwenden müssen, um einen Gültigkeitsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms nicht abgefangene Fehler werfen, unterbrechen sie die Ausführung und verringern potenziell den Nutzen des Beispiels. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten durchgelassen werden und den Aufruf-Stack hocharbeiten.

## Objekte

### Objektnamen

- Verwenden Sie bei der Definition einer Klasse _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objekteigenschafts- und Methodennamen.

- Verwenden Sie bei der Definition einer Objektinstanz, sei es als Literal oder über einen Konstruktor, _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Verwenden Sie bei der Erstellung allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind) Literale und keine Konstruktoren.

Zum Beispiel so:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt wie folgt:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, keine alten Konstruktoren.

  Zum Beispiel, hier ist der empfohlene Weg:

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

Verwenden Sie zur Definition von Methoden die Methodendefinitionssyntax:

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
- Wann immer möglich, verwenden Sie die Kurzform, um die Duplizierung des Eigenschaftsidentifikators zu vermeiden. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen zu welchen Operatoren und wann diese zu verwenden sind.

### Bedingungsoperatoren

Wenn Sie einem Variablenliteral abhängig von einer Bedingung einen Wert zuweisen möchten, verwenden Sie einen [Bedingungsoperator (ternärer Operator)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch, wenn ein Wert zurückgegeben wird. Schreiben Sie:

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

Der Bedingungsoperator ist hilfreich, wenn Sie Zeichenfolgen zum Protokollieren von Informationen erstellen. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren und verschleiert den zentralen Punkt des Beispiels.

### Strikter Gleichheitsoperator

Bevorzugen Sie die [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach gleich) und Ungleichheitsoperatoren gegenüber den losen Gleichheits- (doppelt gleich) und Ungleichheitsoperatoren.

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

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlägt, möchten wir sie nicht in unseren Beispielcode aufnehmen. Fügen Sie in Erwägung, einen Kommentar hinzuzufügen, um zu erklären, warum Sie es brauchen.

### Abkürzungen für Boolesche Tests

Bevorzugen Sie Abkürzungen für Boolesche Tests. Zum Beispiel verwenden Sie `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich behandelt.

## Strings

Stringliterale können innerhalb von einfachen Anführungszeichen, wie in `'A string'`, oder innerhalb von doppelten Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Sorgen darüber, welches verwendet wird; Prettier hält es konsistent.

### Template-Literale

Zum Einfügen von Werten in Strings verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verbinden Sie keine Strings so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Überbeanspruchen Sie keine Template-Literale. Wenn es keine Substitutionen gibt, verwenden Sie stattdessen ein normales Stringliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend, um Code verständlich zu machen.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht gebräuchliche Abkürzungen. Gute Variablennamen sind normalerweise zwischen 3 bis 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Abkürzung `acclmtr` der Zeichenlänge wegen.
- Versuchen Sie, realitätsbezogene Beispiele zu verwenden, in denen jede Variable klare Semantik hat. Verwenden Sie nur Platzhalternamen wie `foo` und `bar`, wenn das Beispiel einfach und banal ist.
- Verwenden Sie nicht die [Ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation) Namenskonvention. Präfixieren Sie den Variablennamen nicht mit seinem Typ. Zum Beispiel schreiben Sie `bought = car.buyer !== null` statt `bBought = oCar.sBuyer != null` oder `name = "Maria Sanchez"` statt `sName = "Maria Sanchez"`.
- Für Sammlungen vermeiden Sie es, den Typ wie Liste, Array, Queue im Namen hinzuzufügen. Verwenden Sie den Inhaltsnamen in Pluralform. Zum Beispiel für ein Array von Autos verwenden Sie `cars` statt `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo es angemessen ist. Zum Beispiel verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Zum Beispiel verwenden Sie `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie eine Funktion im Allgemeinen ohne praktischen Kontext beschreiben.
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
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention besteht, wie z.B. die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Verwenden Sie beim Deklarieren von Variablen und Konstanten die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf den MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, so:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variablen ändern, verwenden Sie `let`, wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir möchten diese Verwendung in MDN Web Docs-Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das folgende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler werfen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `var`, wodurch der globale Bereich verunreinigt wird:

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

  Deklarieren Sie keine mehreren Variablen in einer Zeile, getrennt durch Kommata oder Kettendeklaration. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typkonvertierung

Vermeiden Sie implizite Typkonvertierungen. Insbesondere vermeiden Sie `+val`, um einen Wert in eine Zahl zu zwingen und `"" + val`, um ihn in eine Zeichenfolge zu zwingen. Verwenden Sie `Number()` und `String()`, ohne `new`, stattdessen. Schreiben Sie:

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

## Web-APIs zu vermeiden

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien in Bezug auf Web-APIs, die Sie beachten sollten.

### Vermeiden Sie Browser-Präfixe

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, präfixieren Sie die Funktion nicht. Schreiben Sie:

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

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außerhalb ihrer Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht abschließende Liste von Web-APIs, die Sie meiden sollten, und was Sie stattdessen verwenden können:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um ausschließlich textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren es vermeiden, es zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das Beispiel unten zeigt die Verwendung von `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  Verwenden Sie nicht `innerHTML`, um _reinen Text_ in DOM-Knoten einzufügen.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Darüber hinaus ist es modal zum gesamten Fenster, was störend sein kann. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die entsprechende Log-Methode

- Wenn Sie eine Nachricht protokollieren, verwenden Sie `console.log()`.
- Wenn Sie einen Fehler protokollieren, verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchsuchen Sie unsere JavaScript-Referenzseiten, um einige gute, prägnante, bedeutungsvolle JavaScript-Snippets anzusehen.
