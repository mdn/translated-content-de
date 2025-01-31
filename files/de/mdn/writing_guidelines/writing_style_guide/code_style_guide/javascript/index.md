---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die folgenden Richtlinien decken das Schreiben von JavaScript-Beispielcode für die MDN Web Docs ab. Dieser Artikel ist eine Liste von Regeln für das Schreiben prägnanter Beispiele, die für möglichst viele Menschen verständlich sind.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Auswahl eines Formats

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jeder große Browser – Chrome, Edge, Firefox und Safari – sie unterstützt.

## Arrays

### Erstellung von Arrays

Für die Erstellung von Arrays verwenden Sie Literale und nicht Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Machen Sie dies nicht, wenn Sie Arrays erstellen:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Wenn Sie Elemente zu einem Array hinzufügen, verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente zum Array wie folgt hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie keine Elemente zum Array auf diese Weise hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte nach Möglichkeit verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie sind in einem ECMAScript-Modul. Die von Node.js verwendeten CommonJS-Module sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

## Kommentare

Kommentare sind entscheidend für das Schreiben guter Codebeispiele. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders darauf.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Andererseits ist es keine gute Verwendung von Kommentaren, den Code in Prosa zu wiederholen:

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

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Schriftsteller müssen jede Zeile des Kommentars mit `//` markieren, damit kommentierter Code visuell leichter zu erkennen ist. Darüber hinaus ermöglicht diese Konvention das Kommentieren von Codeabschnitten mit `/* … */` während des Debuggings.

- Lassen Sie einen Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie in einem Satz, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht direkt nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar hinzu. Dadurch entsteht ein Codeblock, der offensichtlich macht, worauf sich der Kommentar bezieht. Platzieren Sie Ihre Kommentare auch in separaten Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie Daten protokollieren. In Codebeispielen verwenden wir häufig `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen zu verstehen, was ohne Ausführen des Codes passiert, können Sie einen Kommentar _nach_ der Funktion mit dem Protokoll anfügen, das erzeugt wird. Schreiben Sie:

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

- Falls die Zeile zu lang wird, fügen Sie den Kommentar _nach_ der Funktion hinzu, wie folgt:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, daher versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Falls dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden Sie Kommentare, um Auslassungen zu markieren

Das Überspringen redundanten Codes mit Auslassungspunkten (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies bedacht tun, da Entwickler häufig Beispiele in ihren Code kopieren und einfügen, und alle unsere Codebeispiele gültiges JavaScript sein sollten.

In JavaScript sollten Sie das Auslassungszeichen (`…`) in einen Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand ausführen soll, der dieses Snippet wiederverwendet.

Die Verwendung eines Kommentars für das Auslassungszeichen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie keine Auslassungszeichen (…) auf diese Weise:

```js example-bad
function exampleFunc() {
  …
}
```

### Parameter auskommentieren

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. In einigen Codebeispielen möchten Sie jedoch zeigen, dass Sie einige mögliche Parameter nicht verwenden.

Verwenden Sie dazu `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "camel case")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, für Menschen lesbare und semantische Namen, wo es angemessen ist.

Das folgende Beispiel ist ein korrekter Funktionsname:

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

- Verwenden Sie, wo möglich, die Funktionsdeklaration statt Funktionsausdrücke, um Funktionen zu definieren.

  Hier ist die empfohlene Methode, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Dies ist keine gute Methode, um eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Wenn Sie anonyme Funktionen als Callback verwenden (eine Funktion, die an eine andere Methodenaufruf übergeben wird), verwenden Sie eine Pfeilfunktion, um den Code kürzer und sauberer zu machen, wenn Sie nicht auf `this` zugreifen müssen.

  Hier ist die empfohlene Methode:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Anstatt dies:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Erwägen Sie, keine Pfeilfunktion zu verwenden, um einer Funktion einen Bezeichner zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Nicht so machen:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Wenn Sie Pfeilfunktionen verwenden, nutzen Sie [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _expression body_), wann immer möglich:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Und nicht:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Schleifen und konditionale Anweisungen

### Schleifeninitialisierung

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die geeignete, z.B. [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

- Wenn Sie durch alle Elemente einer Sammlung iterieren, vermeiden Sie die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie überprüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder dass die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — Sie müssen nicht nur einen zusätzlichen Index, `i`, hinzufügen, sondern auch die Länge des Arrays verfolgen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer korrekt mit dem Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen definieren. Lassen Sie ihn nicht weg. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das folgende Beispiel entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und wird im strikten Modus fehlschlagen):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch auf den Index zugreifen müssen, können Sie `.forEach()` anstelle von `for (;;)`. verwenden. Schreiben Sie:

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
> Verwenden Sie niemals `for...in` mit Arrays und Zeichenfolgen.

> [!NOTE]
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder eine [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, ziehen Sie stattdessen vor, semantischere Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), und viele mehr.

### Kontrollstrukturen

Es gibt einen bemerkenswerten Fall, den man bei `if...else`-Kontrollstrukturen beachten sollte. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

### Verwenden Sie geschweifte Klammern bei Kontrollfluss-Anweisungen und Schleifen

Obwohl Kontrollfluss-Anweisungen wie `if`, `for` und `while` keine Verwendung von geschweiften Klammern erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass die geschweiften Klammern vergessen werden, wenn weitere Anweisungen hinzugefügt werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie nach einer `return`-Anweisung in einem bestimmten Fall keine `break`-Anweisung hinzu. Schreiben Sie `return`-Anweisungen stattdessen so:

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

  Wenn Sie eine `break`-Anweisung hinzufügen, wird sie nicht erreichbar sein. Schreiben Sie nicht:

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

- Verwenden Sie `default` als letzten Fall, und beenden Sie ihn nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt warum.

- Denken Sie daran, dass wenn Sie eine lokale Variable für einen Fall deklarieren, Sie geschweifte Klammern verwenden müssen, um einen Gültigkeitsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms unbehandelte Fehler werfen, werden sie die Ausführung stoppen und möglicherweise die Nützlichkeit des Beispiels verringern. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block abfangen, wie unten gezeigt:

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- Wenn Sie den Parameter der `catch` Anweisung nicht benötigen, lassen Sie ihn weg:

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
  ```

> [!NOTE]
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten durchgelassen und den Aufrufstapel hinauf geblubbert werden.

## Objekte

### Objektnamen

- Wenn Sie eine Klasse definieren, verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objekteigenschaft und Methodennamen.

- Wenn Sie eine Objektinstanz definieren, entweder ein Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Für die Erstellung allgemeiner Objekte (d.h. wenn Klassen nicht beteiligt sind), verwenden Sie Literale und keine Konstruktoren.

Zum Beispiel machen Sie dies:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie ES-Klassensyntax für Objekte, nicht alte Konstruktionen.

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

- Verwenden Sie `extends` für Vererbung:

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

- Die Methode [`Object.prototype.hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) wurde zugunsten von [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) abgelehnt.
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

Dieser Abschnitt listet unsere Empfehlungen auf, welche Operatoren zu verwenden und wann.

### Bedingungsoperatoren

Wenn Sie einer Variablen einen literalen Wert basierend auf einer Bedingung zuweisen möchten, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch beim Zurückgeben eines Wertes. Schreiben Sie:

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

Der bedingte Operator ist nützlich beim Erstellen von Zeichenfolgen, um Informationen zu protokollieren. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren und verschleiert den zentralen Punkt des Beispiels.

### Strict-Equality-Operator

Bevorzugen Sie die [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifaches Gleichheitszeichen) und Ungleichheitsoperatoren gegenüber den lockeren Gleichheits- (doppeltes Gleichheitszeichen) und Ungleichheitsoperatoren.

Verwenden Sie die Operatoren für strikte Gleichheit und Ungleichheit wie folgt:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die Operatoren für lockere Gleichheit und Ungleichheit, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript bei allen anderen Fällen fehlschlagen wird, wollen wir sie nicht in unserem Beispielcode haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie ihn benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Verwenden Sie zum Beispiel `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich behandelt.

## Strings

Zeichenfolgenliterale können in einfachen Anführungszeichen, wie in `'A string'`, oder in doppelten Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Sorgen darüber, welche Sie verwenden; Prettier hält es konsistent.

### Template-Literale

Zum Einfügen von Werten in Zeichenfolgen verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Nutzung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettete Zeichenfolgen nicht wie folgt:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis des Codes.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht gängige Abkürzungen. Gute Variablennamen sind in der Regel zwischen 3 bis 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Verkürzung zu `acclmtr` aus Gründen der Zeichenlänge.
- Versuchen Sie, relevante Beispiele aus der realen Welt zu verwenden, in denen jede Variable klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation) Namenskonvention. Präfixieren Sie den Variablennamen nicht mit seinem Typ. Zum Beispiel schreiben Sie `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` statt `sName = "John Doe"`.
- Für Sammlungen vermeiden Sie es, den Typ wie Liste, Array, Warteschlange im Namen hinzuzufügen. Verwenden Sie den Inhaltnamen in der Pluralform. Zum Beispiel, für ein Array von Autos, verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, zum Beispiel wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie kein `_`. Verwenden Sie prägnante, für Menschen lesbare und semantische Namen, wo es angemessen ist. Zum Beispiel verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Zum Beispiel verwenden Sie `car` statt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie bei der Beschreibung einer Funktion im Allgemeinen ohne praktischen Kontext.
- Verwenden Sie Variablennamen, wie hier gezeigt:

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
> Der einzige Ort, an dem es erlaubt ist, keine für Menschen lesbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention existiert, wie die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Schlüsselwörter, nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, wie folgt:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Falls Sie den Wert einer Variablen ändern werden, verwenden Sie `let`, wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das untenstehende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir wollen diese Nutzung in MDN Web Docs-Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das untenstehende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler werfen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das untenstehende Beispiel verwendet `var`, wodurch der globale Gültigkeitsbereich verschmutzt wird:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Deklarieren Sie eine Variable pro Zeile, so:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, indem Sie sie mit Kommas trennen oder eine Kettendeklaration verwenden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert zu einer Zahl zu zwingen, und `"" + val`, um ihn in eine Zeichenfolge zu erzwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien im Zusammenhang mit Web-APIs, die Sie beachten sollten.

### Browser-Präfixe vermeiden

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, verwenden Sie keine Präfixe. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Dieselbe Regel gilt für CSS-Präfixe.

### Veraltete APIs vermeiden

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in deren Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht abschließende Liste von Web-APIs, die vermieden werden sollten, und was sie ersetzen kann:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode`, in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) stattdessen. Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren es vermeiden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das Beispiel unten zeigt die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf den MDN Web Docs, die sich in einem {{HTMLElement("iframe")}} befinden. Außerdem ist es modal für das gesamte Fenster, was ärgerlich ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) verwenden Sie `console.log()` und `console.error()` nicht, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Protokollierungsmethode

- Wenn Sie eine Nachricht protokollieren, verwenden Sie `console.log()`.
- Wenn Sie einen Fehler protokollieren, verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - navigieren Sie durch unsere JavaScript-Referenzseiten, um einige gute, prägnante und bedeutungsvolle JavaScript-Snippets zu prüfen.
