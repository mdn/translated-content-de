---
title: Richtlinien zum Schreiben von JavaScript-Codebeispielen
short-title: JavaScript examples
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln zum Verfassen prägnanter Beispiele, die so verständlich wie möglich für eine große Anzahl von Menschen sind.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen beachtet werden sollten. In den späteren Abschnitten werden spezifischere Details behandelt.

### Format wählen

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Codenstil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können in unserer [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) die aktuellen Regeln nachlesen und in der [Prettier-Dokumentation](https://prettier.io/docs/index.html) mehr erfahren.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Verwenden Sie moderne JavaScript-Funktionen, wenn unterstützt

Sie können neue Funktionen verwenden, sobald sie von jedem wichtigen Browser – Chrome, Edge, Firefox und Safari – unterstützt werden (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die JavaScript-Funktion, die auf der Seite dokumentiert wird (die stattdessen durch die [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) vorgegeben wird). Zum Beispiel können Sie [nicht standardmäßige oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele schreiben, die ihr Verhalten demonstrieren, aber Sie sollten diese Funktionen nicht in Demos für andere nicht verwandte Funktionen wie eine Web-API verwenden.

## Arrays

### Erstellung von Arrays

Verwenden Sie für die Erstellung von Arrays Literale und keine Konstruktoren.

Erstellen Sie Arrays auf diese Weise:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht bei der Erstellung von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Verwenden Sie beim Hinzufügen von Elementen zu einem Array [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente dem Array auf diese Weise hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie Elemente dem Array nicht auf diese Weise hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

## Kommentare

Kommentare sind entscheidend beim Schreiben guter Codebeispiele. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Andererseits ist es keine gute Nutzung von Kommentaren, den Code in Prosa nachzuerzählen:

  ```js example-bad
  let total = 0;

  // For loop from 1 to 4
  for (let i = 0; i < 4; i++) {
    // Add value to the total
    total += arr[i];
  }
  ```

- Kommentare sind ebenfalls nicht notwendig, wenn Funktionen explizite Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* ... */` eingeschlossen sind.

Im Allgemeinen verwenden Sie einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es einfacher ist, auskommentierten Code visuell zu erkennen. Darüber hinaus ermöglicht diese Konvention, Abschnitte von Code mit `/* ... */` während der Fehlersuche auszukommentieren.

- Lassen Sie einen Abstand zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie bei einem Satz, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht unmittelbar nach einem neuen Einrückungsniveau beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar. Es wird einen Codeblock erstellen, der offensichtlich macht, worauf sich der Kommentar bezieht. Platzieren Sie Ihre Kommentare auch in separaten Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

### Ausgabe von Protokollen

- In Code, der in einer Produktionsumgebung ausgeführt wird, müssen Sie selten kommentieren, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was passiert, ohne den Code auszuführen, können Sie einen Kommentar _nach_ der Funktion hinzufügen, mit dem das Protokoll erstellt wird. Schreiben Sie:

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

- Falls die Zeile zu lang wird, setzen Sie den Kommentar _nach_ der Funktion, so wie hier:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, versuchen Sie daher, sie in einer Zeile von 60–80 Zeichen zu halten. Falls dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

```js example-good
// This is an example of a multi-line comment.
// The imaginary function that follows has some unusual
// limitations that I want to call out.
// Limitation 1
// Limitation 2
```

Verwenden Sie nicht `/* ... */`:

```js example-bad
/* This is an example of a multi-line comment.
  The imaginary function that follows has some unusual
  limitations that I want to call out.
  Limitation 1
  Limitation 2 */
```

### Verwenden Sie Kommentare, um Auslassungspunkte zu kennzeichnen

Das Überspringen von redundantem Code mithilfe von Auslassungspunkten (…) ist notwendig, um Beispiele kurz zu halten. Autoren sollten dies jedoch durchdacht tun, da Entwickler häufig Beispiele in ihren Code kopieren und einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Auslassungspunkte (`…`) in einem Kommentar setzen. Wann immer möglich, geben Sie an, welche Aktion jemand, der diesen Codeabschnitt wiederverwendet, ergänzen soll.

Die Verwendung eines Kommentars für die Auslassungspunkte (…) ist expliziter und verhindert Fehler, wenn ein Entwickler Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie Auslassungspunkte (…) nicht so:

```js example-bad
function exampleFunc() {
  …
}
```

### Parameter auskommentieren

Beim Schreiben von Code lassen Sie in der Regel Parameter weg, die Sie nicht benötigen. In einigen Codebeispielen möchten Sie jedoch zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie dazu `/* ... */` in der Parameterliste. Dies ist eine Ausnahme zur Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "CamelCase")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, gut lesbare und semantische Namen, wo angebracht.

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

- Verwenden Sie nach Möglichkeit die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist die empfohlene Methode, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Das ist keine gute Methode, um eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Wenn Sie anonyme Funktionen als Rückruf (eine an eine andere Methodenaufruf übergebene Funktion) verwenden, verwenden Sie einen Pfeilfunktionsausdruck, wenn Sie nicht auf `this` zugreifen müssen, um den Code kürzer und sauberer zu machen.

  Hier ist die empfohlene Methode:

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

- Vermeiden Sie, einen Pfeilfunktionsausdruck zu verwenden, um einer Kennung eine Funktion zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionsausdrücke für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Tun Sie das nicht:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Wenn Sie Pfeilfunktionsausdrücke verwenden, verwenden Sie die [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als Ausdruckskörper), wenn möglich:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Und nicht:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Schleifen und bedingte Anweisungen

### Schleifeninitialisierung

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die geeignete aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

- Wenn Sie durch alle Elemente einer Sammlung iterieren, vermeiden Sie die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass, wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie überprüfen müssen, ob `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder dass die Methode `forEach()` tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` – nicht nur, dass Sie einen zusätzlichen Index `i` hinzufügen müssen, sondern Sie müssen auch die Länge des Arrays verfolgen. Dies kann fehleranfällig für Anfänger sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer richtig definieren, indem Sie das Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht aus. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das folgende Beispiel entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und schlägt im Strict-Modus fehl):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch auf den Index zugreifen müssen, können Sie `.forEach()` verwenden anstelle von `for (;;)`. Schreiben Sie:

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
> Erwägen Sie, keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, überlegen Sie, stattdessen mehr semantische Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr.

### Kontrollanweisungen

Es gibt einen bemerkenswerten Fall bei `if...else`-Kontrollanweisungen zu beachten. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

### Verwenden Sie geschweifte Klammern mit Kontrollflussanweisungen und Schleifen

Während Kontrollflussanweisungen wie `if`, `for` und `while` keine Verwendung von geschweiften Klammern erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert das Vergessen, die geschweiften Klammern hinzuzufügen, wenn weitere Befehle hinzugefügt werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem bestimmten Fall hinzu. Stattdessen schreiben Sie `return`-Anweisungen so:

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

- Verwenden Sie `default` als den letzten Fall und enden Sie ihn nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass, wenn Sie eine lokale Variable für einen Fall deklarieren, Sie geschweifte Klammern verwenden müssen, um einen Gültigkeitsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms unbehandelte Fehler werfen, werden sie die Ausführung anhalten und möglicherweise die Nützlichkeit des Beispiels verringern. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten weitergeleitet und nach oben in den Aufrufstapel gelangen.

## Objekte

### Objektnamen

- Beim Definieren einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Namen der Objekteigenschaften und -methoden.

- Beim Definieren einer Objektinstanz, entweder als Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Erstellung von Objekten

Verwenden Sie für die Erstellung allgemeiner Objekte (d.h. wenn Klassen nicht beteiligt sind) Literale und keine Konstruktoren.

Zum Beispiel machen Sie es so:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt wie folgt:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht die alte Konstruktoren.

  Zum Beispiel ist dies die empfohlene Methode:

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

Stattdessen:

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
- Verwenden Sie nach Möglichkeit die Kurzform und vermeiden Sie die Duplikation des Eigenschaftenidentifikators. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen zur Verwendung von Operatoren auf.

### Bedingte Operatoren

Wenn Sie abhängig von einer Bedingung einen Literale Wert in einer Variablen speichern möchten, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch für die Rückgabe eines Wertes. Schreiben Sie:

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

Der bedingte Operator ist hilfreich, wenn Sie Zeichenfolgen erstellen, um Informationen zu protokollieren. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren, was den zentralen Punkt des Beispiels verschleiert.

### Strikte Gleichheitsoperatoren

Bevorzugen Sie die [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach Gleichheitszeichen) und Ungleichheitsoperatoren gegenüber den lockeren Gleichheits- (doppelte Gleichheitszeichen) und Ungleichheitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Ungleichheitsoperatoren so:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die lockeren Gleichheits- und Ungleichheitsoperatoren, wie unten dargestellt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlagen wird, wollen wir diese nicht in unserem Beispielcode haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie ihn benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Verwenden Sie z.B. `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich behandelt.

## Zeichenfolgen

Zeichenfolgenliterale können in einfache Anführungszeichen, wie in `'A string'`, oder in doppelte Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Sorgen darüber, welche Sie verwenden sollten; Prettier hält es konsistent.

### Template-Literale

Um Werte in Zeichenketten einzufügen, verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Fügen Sie Zeichenketten nicht wie folgt zusammen:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Überbeanspruchen Sie Template-Literale nicht. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis des Codes.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht übliche Abkürzungen. Gute Variablennamen sind in der Regel zwischen 3 und 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als `acclmtr` zur Zeichenlänge zu kürzen.
- Versuchen Sie, relevante Beispiele aus der realen Welt zu verwenden, in denen jede Variable klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie keine ungarische Notation, indem Sie den Variablennamen mit seinem Typ voranstellen. Schreiben Sie z.B. `bought = car.buyer !== null` statt `bBought = oCar.sBuyer != null` oder `name = "Maria Sanchez"` statt `sName = "Maria Sanchez"`.
- Bei Sammlungen vermeiden Sie, den Typ wie Liste, Array, Warteschlange im Namen hinzuzufügen. Verwenden Sie den Inhaltsnamen in der Pluralform. Beispielsweise für ein Array von Autos verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Nutzen Sie prägnante, leicht lesbare und semantische Namen, wo angebracht. Verwenden Sie z.B. `currencyName` anstelle von `currency_name`.
- Vermeiden Sie Artikel und Possessiva in Variablennamen. Verwenden Sie z.B. `car` statt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn eine Funktion im Allgemeinen ohne praktischen Kontext beschrieben wird.
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
> Der einzige Fall, in dem es erlaubt ist, keine leicht lesbaren, semantischen Namen zu verwenden, ist, wenn eine allgemein anerkannte Konvention besteht, wie die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Wenn Variablen und Konstanten deklariert werden, verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, wie so:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variablen ändern werden, verwenden Sie `let`, wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `let`, wo `const` sein sollte. Der Code wird funktionieren, aber wir wollen diese Verwendung in MDN Web Docs-Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das folgende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung führt zu einem Fehler.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `var`, was den globalen Gültigkeitsbereich verschmutzt:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Deklarieren Sie eine Variable pro Zeile, wie so:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  Deklarieren Sie keine mehreren Variablen in einer Zeile, indem Sie sie mit Kommas trennen oder Ketten-Deklarationen verwenden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert in eine Zahl zu verwandeln, und `"" + val`, um ihn in einen String zu verwandeln. Verwenden Sie stattdessen `Number()` und `String()` ohne `new`. Schreiben Sie:

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

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien im Zusammenhang mit Web-APIs, die beachtet werden sollten.

### Vermeiden Sie Browser-Präfixe

Wenn alle wichtigen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, verzichten Sie auf das Präfix. Schreiben Sie:

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

Hier ist eine nicht erschöpfende Liste von Web-APIs, die vermieden und durch was ersetzt werden soll:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um rein textuelle Inhalte in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren ihre Verwendung vermeiden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das folgende Beispiel zeigt die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die in einem {{HTMLElement("iframe")}} liegen. Darüber hinaus ist sie modal für das gesamte Fenster, was ärgerlich ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Protokollierungsmethode

- Wenn Sie eine Nachricht protokollieren, verwenden Sie `console.log()`.
- Wenn Sie einen Fehler protokollieren, verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - durchstöbern Sie unsere JavaScript-Referenzseiten, um einige gute, prägnante, bedeutungsvolle JavaScript-Snippets zu sehen.
