---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Die folgenden Richtlinien betreffen das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln für das Schreiben prägnanter Beispiele, die von möglichst vielen Menschen verstanden werden können.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte werden spezifischere Details behandeln.

### Auswahl eines Formats

Meinungen zur richtigen Einrückung, Leerzeichen und Zeilenlängen waren schon immer kontrovers. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für einen konsistenten Stil. Trotzdem gibt es ein paar zusätzliche Regeln, die Sie beachten müssen.

### Verwendung moderner JavaScript-Funktionen

Neue Funktionen können genutzt werden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — sie unterstützt.

## Arrays

### Array-Erstellung

Verwenden Sie zur Erstellung von Arrays Literale und keine Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Nicht auf diese Weise beim Erstellen von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Beim Hinzufügen von Elementen zu einem Array verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und keine direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente zu dem Array so hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie keine Elemente zu dem Array hinzu auf diese Weise:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben asynchroner Codes verbessert die Leistung und sollte nach Möglichkeit verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` auf oberster Ebene nicht verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie es, `await` auf oberster Ebene zu verwenden.

## Kommentare

Kommentare sind entscheidend, um gute Codebeispiele zu schreiben. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Andererseits ist es keine gute Nutzung von Kommentaren, den Code im Text wiederzugeben:

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

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* ... */` eingeschlossen sind.

Im Allgemeinen verwenden Sie einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es leichter ist, kommentierte Codes visuell zu bemerken. Darüber hinaus ermöglicht diese Konvention das Auskommentieren von Codeabschnitten mit `/* … */` während der Fehlersuche.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie in einem Satz, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht sofort nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile hinzu und dann den Kommentar. Es wird einen Codeblock erstellen, der deutlich macht, worauf sich der Kommentar bezieht. Außerdem setzen Sie Ihre Kommentare auf separate Zeilen, die dem Code, den sie betreffen, vorausgehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir häufig `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was passiert, ohne den Code auszuführen, können Sie einen Kommentar _nach_ der Funktion mit dem Log schreiben, das erzeugt wird. Schreiben Sie:

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

Kurze Kommentare sind in der Regel besser, daher versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Ist das nicht möglich, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden Sie Kommentare für Ellipsen

Um redundanten Code zu überspringen und Beispiele kurz zu halten, sollten Autoren es trotzdem mit Bedacht tun, da Entwickler häufig Beispiele in ihren Code kopieren & einfügen und alle unsere Codebeispiele validen JavaScript-Code darstellen sollten.

In JavaScript sollten Sie die Ellipsen (`…`) in einem Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der diesen Ausschnitt wiederverwendet, hinzufügen soll.

Ein Kommentar für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie Ellipsen (…) nicht so:

```js example-bad
function exampleFunc() {
  …
}
```

### Kommentieren Sie Parameter aus

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Codebeispielen möchten Sie demonstrieren, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie `/* … */` in der Parameterliste, um dies zu tun. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Verwenden Sie für Funktionsnamen das {{Glossary("camel_case", "camel case")}} Format, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo dies angebracht ist.

Das Folgende ist ein korrektes Beispiel für einen Funktionsnamen:

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

Verwenden Sie Funktionsnamen nicht wie die folgenden:

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### Funktionsdeklarationen

- Wo möglich, verwenden Sie die Funktionsdeklaration (function declaration) über Funktionsausdrücke (function expressions) zur Definition von Funktionen.

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

- Wenn anonyme Funktionen als Callback verwendet werden (eine Funktion, die einer anderen Methodenaufruf übergeben wird), verwenden Sie eine Pfeilfunktion, um den Code kürzer und sauberer zu machen, wenn Sie nicht auf `this` zugreifen müssen.

  Hier ist die empfohlene Methode:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Anstelle von:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Vermeiden Sie es, eine Pfeilfunktion zu verwenden, um einer Funktion einen Bezeichner zuzuordnen. Insbesondere verwenden Sie keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Wenn Sie Pfeilfunktionen verwenden, nutzen Sie die [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _expression body_), wenn möglich:

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

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die passende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

- Wenn alle Elemente einer Sammlung durchlaufen werden, vermeiden Sie die klassische `for (;;) `-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie überprüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist), oder dass die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — nicht nur müssen Sie einen zusätzlichen Index `i` hinzufügen, sondern auch die Länge des Arrays nachverfolgen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer richtig definieren, indem Sie das `const`-Schlüsselwort für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht aus. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das folgende Beispiel folgt nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und schlägt im strengen Modus fehl):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch den Index zugreifen müssen, können Sie `.forEach()` anstelle von `for (;;) ` verwenden. Schreiben Sie:

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
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, ziehen Sie in Betracht, stattdessen semantischere Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr.

### Kontrollstrukturen

Es gibt einen bemerkenswerten Fall, der für `if...else`-Kontrollstrukturen zu beachten ist. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

Fahren Sie nach der `if`-Anweisung fort. Schreiben Sie:

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

Während Kontrollflussanweisungen wie `if`, `for` und `while` die Verwendung von geschweiften Klammern nicht erfordern, wenn der Inhalt aus nur einer Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass Sie vergessen, die geschweiften Klammern hinzuzufügen, wenn Sie weitere Anweisungen hinzufügen.

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

  Wenn Sie eine `break`-Anweisung hinzufügen, wird diese unerreichbar. Schreiben Sie nicht:

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

- Verwenden Sie `default` als letzten Fall und enden Sie nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt warum.

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

- Wenn bestimmte Zustände Ihres Programms nicht abgefangene Fehler auslösen, beenden sie die Ausführung und verringern möglicherweise die Nützlichkeit des Beispiels. Daher sollten Sie Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Bedenken Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten durchgelassen und den Aufrufstack hinaufbubbleiert werden.

## Objekte

### Objektnamen

- Beim Definieren einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objektattribut- und Methodennamen.

- Beim Definieren einer Objektinstanz verwenden Sie entweder ein Literal oder einen Konstruktor mit _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekt erstellen

Zum Erstellen allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind) verwenden Sie Literale und keine Konstruktoren.

Zum Beispiel so:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie für Objekte die ES-Klassensyntax, nicht alte Konstruktorstile.

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
- Wann immer möglich, verwenden Sie die Kurzschreibweise und vermeiden Sie die doppelte Nennung des Eigenschaftsbezeichners. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen auf, welche Operatoren wann verwendet werden sollten.

### Bedingte Operatoren

Wenn Sie einer Variablen einen Literalwert je nach einer Bedingung zuweisen möchten, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch beim Zurückgeben eines Werts. Schreiben Sie:

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

Der bedingte Operator ist hilfreich beim Erstellen von Zeichenfolgen zum Protokollieren von Informationen. In solchen Fällen führt die Verwendung einer normalen `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren, die den zentralen Punkt des Beispiels verschleiert.

### Strikter Gleichheitsoperator

Bevorzugen Sie die [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (drei gleich) und Ungleichheitsoperatoren über die lose Gleichheit (zwei gleich) und Ungleichheitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Ungleichheitsoperatoren wie folgt:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie keine losen Gleichheits- und Ungleichheitsoperatoren, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlägt, wollen wir sie nicht in unseren Beispielcode haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie ihn benötigen.

### Abkürzungen für Boolesche Tests

Bevorzugen Sie Abkürzungen für Boolesche Tests. Verwenden Sie zum Beispiel `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich gehandhabt.

## Strings

Zeichenfolgenliterale können innerhalb von einfachen Anführungszeichen, wie in `'A string'`, oder in doppelte Anführungszeichen eingeschlossen werden, wie in `"A string"`. Machen Sie sich keine Sorgen darüber, welche Sie verwenden sollten; Prettier hält es konsistent.

### Template Literale

Zum Einfügen von Werten in Zeichenfolgen verwenden Sie [template literals](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von template literals. Ihr Gebrauch verhindert viele Platzierungsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettete Strings nicht so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie template literals nicht übermäßig. Wenn keine Ersetzungen erforderlich sind, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind essentiell für das Verständnis von Code.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht allgemeine Abkürzungen. Gute Variablennamen sind in der Regel zwischen 3 bis 10 Zeichen lang, aber das ist nur ein Hinweis. Zum Beispiel ist `accelerometer` beschreibender als das Abkürzen zu `acclmtr` der Zeichenlänge wegen.
- Versuchen Sie, realistisch relevante Beispiele zu verwenden, bei denen jede Variable eine klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://de.wikipedia.org/wiki/Ungarische_Notation). Präfixieren Sie den Variablennamen nicht mit seinem Typ. Zum Beispiel, schreiben Sie `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` statt `sName = "John Doe"`.
- Für Sammlungen, vermeiden Sie das Hinzufügen des Typs wie Liste, Array, Warteschlange im Namen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel für ein Array von Autos verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form eines Merkmals ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Verwenden Sie für primitive Werte _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wo angemessen. Zum Beispiel verwenden Sie `currencyName` statt `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Verwenden Sie zum Beispiel `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie beim Beschreiben eines Merkmals im Allgemeinen ohne praktischen Kontext.
- Verwenden Sie Variablennamen, wie hier gezeigt:

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
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention existiert, wie der Gebrauch von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was bei MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, wie folgt:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variable ändern, verwenden Sie `let` wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das Beispiel unten verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir wollen diese Verwendung in MDN Web Docs-Beispielcodes vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das Beispiel unten verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler werfen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das Beispiel unten verwendet `var`, das den globalen Bereich verschmutzt:

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

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, indem Sie sie mit Kommas trennen oder eine Kettendeklaration verwenden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert zu einer Zahl zu zwingen, und `"" + val`, um ihn zu einer Zeichenfolge zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien zu Web-APIs, die beachtet werden sollten.

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

Dieselbe Regel gilt für CSS-Präfixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in ihrer Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht erschöpfende Liste von Web-APIs, die vermieden werden sollten, und womit sie ersetzt werden sollten:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht, um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren vermeiden, sie zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das folgende Beispiel demonstriert die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich in einem {{HTMLElement("iframe")}} befinden. Darüber hinaus ist sie modal zum gesamten Fenster, was ärgerlich ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die passende Log-Methode

- Beim Protokollieren einer Nachricht verwenden Sie `console.log()`.
- Beim Protokollieren eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchsuchen Sie unsere JavaScript-Referenzseiten, um gute, prägnante, sinnvolle JavaScript-Snippets zu finden.
