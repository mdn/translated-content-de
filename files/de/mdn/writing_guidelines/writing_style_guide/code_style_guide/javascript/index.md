---
title: Richtlinien für das Schreiben von JavaScript-Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien beziehen sich auf das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln zum Schreiben prägnanter Beispiele, die von möglichst vielen Menschen verstanden werden.

## Allgemeine Richtlinien für JavaScript-Code-Beispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Code-Beispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Format wählen

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um Diskussionen außerhalb des Themas zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, denen Sie folgen müssen.

### Verwenden moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — diese unterstützt.

## Arrays

### Array-Erstellung

Für die Erstellung von Arrays verwenden Sie Literale und keine Konstruktoren.

Arrays so erstellen:

```js example-good
const visitedCities = [];
```

Vermeiden Sie dies bei der Erstellung von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Beim Hinzufügen von Elementen zu einem Array verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Elemente zum Array wie folgt hinzufügen:

```js example-good
pets.push("cat");
```

Elemente nicht wie folgt zum Array hinzufügen:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte nach Möglichkeit genutzt werden. Insbesondere können Sie folgende nutzen:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider kann `await` nicht auf oberster Ebene verwendet werden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie das oberste `await`.

## Kommentare

Kommentare sind entscheidend für das Schreiben guter Code-Beispiele. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

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

- Kommentare sind auch nicht erforderlich, wenn Funktionen explizite Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Einzeilige Kommentare verwenden

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen Einzeilenkommentare, um Code zu kommentieren. Autoren sollten jede Zeile des Kommentars mit `//` markieren, damit ausgeblendeter Code leicht erkennbar ist. Darüber hinaus ermöglicht diese Konvention, Codeabschnitte mit `/* … */` zu kommentieren, während sie debuggen.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie wie einen Satz mit einem Großbuchstaben, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht sofort nach einer neuen Einrückungsebene beginnt, fügen Sie eine leere Zeile ein und dann den Kommentar. Es wird einen Codeblock erstellen, der deutlich macht, worauf sich der Kommentar bezieht. Platzieren Sie Ihre Kommentare in separaten Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie Daten protokollieren. In Code-Beispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was ohne Ausführung des Codes geschehen wird, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Log hinzufügen. Schreiben Sie:

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

- Im Falle, dass die Zeile zu lang wird, setzen Sie den Kommentar _nach_ der Funktion, wie folgt:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind normalerweise besser, versuchen Sie also, sie in einer einzigen Zeile von 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden Sie Kommentare, um Ellipsen zu markieren

Um redundanten Code mit Auslassungspunkten (…) zu überspringen, ist es notwendig, Beispiele kurz zu halten. Dennoch sollten Autoren dies bedacht tun, da Entwickler häufig Beispiele in ihren Code kopieren und einfügen. Alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Auslassungspunkte (`…`) in einem Kommentar platzieren. Wenn möglich, geben Sie an, welche Aktion jemand, der diesen Ausschnitt wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Auslassungspunkte (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie Ellipsen (…) nicht auf diese Weise:

```js example-bad
function exampleFunc() {
  …
}
```

### Parameter auskommentieren

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Code-Beispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Dafür verwenden Sie `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie [camel case](/de/docs/Glossary/camel_case), beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo angemessen.

Das Folgende ist ein korrektes Beispiel für einen Funktionsnamen:

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

Verwenden Sie Funktionsnamen nicht wie diese:

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### Funktionsdeklarationen

- Verwenden Sie nach Möglichkeit die Funktionsdeklaration statt Funktionsausdrücke, um Funktionen zu definieren.

  Hier ist die empfohlene Weise, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Dies ist keine gute Weise, eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Wenn Sie anonyme Funktionen als Callback verwenden (eine Funktion, die an eine andere Methodenaufruf übergeben wird), wenn Sie `this` nicht zugreifen müssen, verwenden Sie eine Pfeilfunktion, um den Code kürzer und sauberer zu machen.

  Hier ist die empfohlene Weise:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Stattdessen dies:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Überlegen Sie, die Verwendung von Pfeilfunktionen zu vermeiden, um einer Funktion einem Bezeichner zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Nicht tun:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Wenn Sie Pfeilfunktionen verwenden, nutzen Sie [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _Ausdruckskörper_), wenn möglich:

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

Wenn [Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) erforderlich sind, wählen Sie die passende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

- Wenn durch alle Elemente einer Sammlung iteriert wird, vermeiden Sie die klassische `for (;;)` Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie prüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — nicht nur, dass Sie einen zusätzlichen Index `i` hinzufügen müssen, sondern auch die Länge des Arrays verfolgen müssen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer korrekt durch das Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen definieren. Lassen Sie es nicht weg. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das folgende Beispiel entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und wird im Strikten Modus fehlschlagen):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch auf den Index zugreifen müssen, können Sie `.forEach()` anstelle von `for (;;)`. Schreiben Sie:

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
> Überlegen Sie, keine `for` Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, überlegen Sie, stattdessen semantischere Iterationsmethoden wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr zu verwenden.

### Kontrollanweisungen

Es gibt einen bemerkenswerten Fall, den man bei den `if...else` Kontrollanweisungen beachten muss. Wenn die `if`-Anweisung mit einer `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

Während Kontrollfluss-Anweisungen wie `if`, `for`, und `while` nicht die Verwendung von geschweiften Klammern erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

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

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem bestimmten Fall hinzu. Schreiben Sie stattdessen `return`-Anweisungen wie folgt:

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

- Verwenden Sie `default` als letzten Fall, und enden Sie nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass wenn Sie eine lokale Variable für einen Fall deklarieren, Sie geschweifte Klammern verwenden müssen, um einen Geltungsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms nicht abgefangene Fehler werfen, beenden sie die Ausführung und können den Nutzen des Beispiels verringern. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _behebbare_ Fehler gefangen und behandelt werden sollten. Alle nicht-behebbaren Fehler sollten durchgelassen und in die Aufrufkette nach oben geleitet werden.

## Objekte

### Objektnamen

- Beim Definieren einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objekteigenschafts- und Methodennamen.

- Beim Definieren einer Objektinstanz, entweder als Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Beim Erstellen allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind), verwenden Sie Literale und keine Konstruktoren.

Zum Beispiel so:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt wie folgt:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie ES-Klassen-Syntax für Objekte, nicht alte Konstruktoren.

  Zum Beispiel ist dies der empfohlene Weg:

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

Um Methoden zu definieren, verwenden Sie die Methodendefinitions-Syntax:

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

Anstelle von:

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
- Verwenden Sie nach Möglichkeit die Kurzschreibweise, um die Verdopplung des Eigenschaftsnamen zu vermeiden. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen auf, welche Operatoren wann zu verwenden sind.

### Bedingte Operatoren

Wenn Sie einen Variablenwert abhängig von einer Bedingung speichern möchten, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch bei der Rückgabe eines Wertes. Schreiben Sie:

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

Der bedingte Operator ist hilfreich, wenn Sie Zeichenfolgen erstellen, um Informationen zu protokollieren. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Logging, die den zentralen Punkt des Beispiels verschleiern.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheits-](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifache Gleichheit) und Ungleichheitsoperator gegenüber den losen Gleichheits- (doppelte Gleichheit) und Ungleichheitsoperatoren.

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

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlagen wird, möchten wir sie nicht in unserem Beispielcode haben. Erwägen Sie, einen Kommentar hinzuzufügen, der erklärt, warum Sie es benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Verwenden Sie beispielsweise `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich behandelt.

## Strings

String-Literale können innerhalb von einfachen Anführungszeichen, wie in `'A string'`, oder in doppelten Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Gedanken darüber, welche Sie verwenden; Prettier hält es konsistent.

### Template-Literale

Um Werte in Zeichenfolgen einzusetzen, verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verketten Sie Zeichenfolgen nicht wie folgt:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn keine Ersetzungen erforderlich sind, verwenden Sie stattdessen ein normales String-Literal.

## Variablen

### Variablennamen

Gute Variablennamen sind wesentlich für das Verständnis von Code.

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht übliche Abkürzungen. Gute Variablennamen sind normalerweise zwischen 3 und 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als auf die Länge der Zeichen zugunsten abzukürzen in `acclmtr`.
- Versuchen Sie, reale, relevante Beispiele zu verwenden, bei denen jede Variable eine klare Semantik hat. Fallback auf Platzhalternamen wie `foo` und `bar` nur, wenn das Beispiel einfach und unkonventionell ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation). Präfixieren Sie den Variablennamen nicht mit seinem Typ. Schreiben Sie zum Beispiel `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` statt `sName = "John Doe"`.
- Vermeiden Sie bei Sammlungen, den Typ wie Liste, Array, Warteschlange im Namen hinzuzufügen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel, für ein Array von Autos, verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie keine `_`. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo angemessen. Zum Beispiel verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie Artikel und Possessivformen. Zum Beispiel verwenden Sie `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn ohne praktischen Kontext eine Funktionalität insgesamt beschrieben wird.
- Verwenden Sie Variablennamen wie hier gezeigt:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  Benennen Sie Variablen nicht wie folgt:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention wie die Verwendung von `i` und `j` für Schleifen-Iteratoren existiert.

### Variablendeklarationen

Wenn Sie Variablen und Konstanten deklarieren, verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, wie folgt:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variable ändern, verwenden Sie `let`, wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `let`, wo `const` es besser wäre. Der Code wird funktionieren, aber wir wollen diese Verwendung in MDN Web Docs Code-Beispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das folgende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler verursachen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `var`, was den globalen Geltungsbereich verschmutzt:

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

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, indem Sie sie mit Kommas trennen, oder verwenden Sie Ketten-Deklarationen. Vermeiden Sie Variablen-Deklarationen wie:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Vermeiden Sie insbesondere `+val`, um einen Wert zu einer Zahl zu erzwingen, und `"" + val`, um ihn in eine Zeichenfolge zu erzwingen. Verwenden Sie `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, verwenden Sie keine Präfixe. Schreiben Sie:

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

Hier ist eine nicht erschöpfende Liste von zu vermeidenden Web-APIs und was Sie stattdessen verwenden sollten:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren vermeiden, es zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das folgende Beispiel zeigt die Verwendung von `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  Verwenden Sie `innerHTML` nicht, um reinen Text in DOM-Knoten einzufügen.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb einer {{HTMLElement("iframe")}} befinden. Außerdem ist sie modal zum gesamten Fenster, was störend ist. In statischen Code-Beispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, weil sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die passende Log-Methode

- Bei der Protokollierung einer Nachricht verwenden Sie `console.log()`.
- Bei der Protokollierung eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Stöbern Sie durch unsere JavaScript-Referenzseiten, um sich einige gute, prägnante, bedeutungsvolle JavaScript-Snippets anzusehen.
