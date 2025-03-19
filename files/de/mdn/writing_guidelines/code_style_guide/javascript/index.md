---
title: Richtlinien zum Schreiben von JavaScript-Code-Beispielen
short-title: JavaScript examples
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Code-Beispielen für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln zum Schreiben prägnanter Beispiele, die von möglichst vielen Menschen verstanden werden können.

## Allgemeine Richtlinien für JavaScript-Code-Beispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Code-Beispielen zu beachten sind. In späteren Abschnitten werden spezifischere Details behandelt.

### Wahl des Formats

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer kontrovers. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — diese unterstützt.

## Arrays

### Array-Erstellung

Verwenden Sie beim Erstellen von Arrays Literale und keine Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht beim Erstellen von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Verwenden Sie beim Hinzufügen von Elementen zu einem Array [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht direkte Zuordnung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie dem Array Elemente so hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie dem Array keine Elemente so hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die Verwendung der einfacheren `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

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

  Andererseits ist es keine gute Nutzung der Kommentare, den Code in Prosa zu wiederholen:

  ```js example-bad
  let total = 0;

  // For loop from 1 to 4
  for (let i = 0; i < 4; i++) {
    // Add value to the total
    total += arr[i];
  }
  ```

- Kommentare sind auch nicht notwendig, wenn Funktionen klare Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Verwenden Sie Kommentare in einer Zeile

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um den Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit ausgeblendeter Code visuell leichter zu erkennen ist. Darüber hinaus ermöglicht diese Konvention, Codeabschnitte mit `/* … */` beim Debuggen auskommentieren zu können.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie wie einen Satz mit einem Großbuchstaben, enden Sie jedoch nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht unmittelbar nach einem neuen Einrückungslevel beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar hinzu. Dadurch wird ein Codeblock erstellt, der offensichtlich macht, worauf sich der Kommentar bezieht. Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- Bei Code, der in einer Produktionsumgebung laufen soll, müssen Sie selten Kommentare hinzufügen, wenn Sie einige Daten loggen. In Code-Beispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was ohne den Code auszuführen passieren wird, können Sie einen Kommentar _nach_ der Funktion hinzufügen mit dem Log, das erzeugt wird. Schreiben Sie:

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

- Falls die Zeile zu lang wird, platzieren Sie den Kommentar _nach_ der Funktion, wie folgt:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, daher versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

Das Überspringen redundanten Codes mit Ellipsen („…“) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren es durchdacht tun, da Entwickler häufig Beispiele kopieren und einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Ellipsen („…“) in einen Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der dieses Snippet erneut verwendet, hinzufügen muss.

Die Verwendung eines Kommentars für die Ellipsen („…“) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie die Ellipsen („…“) nicht so:

```js example-bad
function exampleFunc() {
  …
}
```

### Kommentieren Sie Parameter aus

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Code-Beispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie dazu `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "camel case")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, verständliche und semantische Namen, wo es angebracht ist.

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

- Verwenden Sie, wo möglich, die Funktionsdeklaration gegenüber Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist der empfohlene Weg, eine Funktion zu deklarieren:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Dies ist kein guter Weg, eine Funktion zu definieren:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Wenn Sie anonyme Funktionen als Rückruf (eine Funktion, die an einen anderen Methodenaufruf übergeben wird) verwenden und Sie nicht auf `this` zugreifen müssen, verwenden Sie eine Pfeilfunktion, um den Code kürzer und sauberer zu machen.

  Hier ist der empfohlene Weg:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Stattdessen tun Sie dies:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Verzichten Sie darauf, eine Pfeilfunktion einer Kennung zuzuweisen. Besonders verwenden Sie keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Wenn Sie Pfeilfunktionen verwenden, nutzen Sie [implizite Rückgaben](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _expression body_), wo möglich:

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

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die entsprechende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

- Vermeiden Sie bei der Iteration durch alle Sammlungsobjekte die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie überprüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder dass die Methode `forEach()` tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — nicht nur müssen Sie einen zusätzlichen Index, `i`, hinzufügen, sondern auch die Länge des Arrays im Auge behalten. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer korrekt definieren, indem Sie das Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht weg. Dies sind korrekte Beispiele:

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

- Wenn Sie sowohl auf den Wert als auch den Index zugreifen müssen, können Sie `.forEach()` statt `for (;;)`. Schreiben Sie:

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
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, erwägen Sie die Verwendung eher semantischer Iterationsmethoden wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr.

### Kontrollanweisungen

Es gibt einen besonders zu beachtenden Fall bei der `if...else`-Kontrollanweisung. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

### Verwenden Sie immer geschweifte Klammern bei Kontrollflussanweisungen und Schleifen

Obwohl Kontrollflussanweisungen wie `if`, `for` und `while` die Verwendung von geschweiften Klammern nicht erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass beim Hinzufügen weiterer Anweisungen die Klammern vergessen werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem bestimmten Fall hinzu. Stattdessen schreiben Sie `return`-Anweisungen wie folgt:

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

- Verwenden Sie `default` als letzten Fall und beenden Sie ihn nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass wenn Sie eine lokale Variable für einen Fall deklarieren, Sie geschweifte Klammern nutzen müssen, um einen Geltungsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms unbehandelte Fehler auslösen, werden diese die Ausführung stoppen und die Nützlichkeit des Beispiels potenziell verringern. Daher sollten Sie Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten unbehandelt gelassen und die Anrufkette hinaufwandern.

## Objekte

### Objektnamen

- Beim Definieren einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für Objekt-Eigenschaften und Methodennamen.

- Bei der Definition einer Objektinstanz, entweder ein Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Für die Erstellung allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind) verwenden Sie Literale und keine Konstruktoren.

Zum Beispiel, tun Sie dies:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht alte Konstruktoren.

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

Zum Definieren von Methoden verwenden Sie die Methodendefinitionssyntax:

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

Stattdessen tun Sie dies:

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

- Wenn möglich, verwenden Sie die Verkürzung, um die Duplizierung der Eigenschaftenkennung zu vermeiden. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen auf, welche Operatoren verwendet werden sollen und wann.

### Bedingte Operatoren

Wenn Sie einem Literalwert basierend auf einer Bedingung einer Variablen zuweisen möchten, verwenden Sie einen [Bedingungsoperator (ternär)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch, wenn Sie einen Wert zurückgeben. Schreiben Sie:

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

Der Bedingungsoperator ist hilfreich beim Erstellen von Zeichenfolgen zum Protokollieren von Informationen. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Code-Blöcken für eine Nebenoperation wie das Protokollieren und verschleiert den zentralen Punkt des Beispiels.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheits-](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifaches Gleichheitszeichen) und Ungleichheitsoperator gegenüber dem losen Gleichheits-(doppeltes Gleichheitszeichen) und Ungleichheitsoperator.

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

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript bei allen anderen Fällen fehlschlägt, möchten wir sie nicht in unserem Beispielcode haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie es benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Beispielsweise verwenden Sie `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedenen Arten von `truthy` oder `falsy` Werten werden unterschiedlich behandelt.

## Strings

Zeichenfolgenliterale können in einfache Anführungszeichen, wie in `'A string'`, oder in doppelte Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Sorgen darüber, welche Sie verwenden sollen; Prettier hält es konsistent.

### Vorlagen-Literale

Zum Einfügen von Werten in Zeichenfolgen verwenden Sie [Vorlagenliterale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Vorlagenliteralen. Ihre Verwendung verhindert viele Leerzeichenfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettungszeichenfolgen nicht so wie folgt:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie keine Vorlagenliterale übermäßig. Wenn keine Ersetzungen erforderlich sind, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis von Code.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Kennungen und vermeiden Sie nicht-übliche Abkürzungen. Gute Variablennamen sind in der Regel 3 bis 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Abkürzung `acclmtr` um der Länge willen.
- Versuchen Sie, Beispiele aus der realen Welt zu verwenden, bei denen jede Variable eine klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://de.wikipedia.org/wiki/Ungarische_Notation) Namenskonvention. Präfixen Sie den Variablennamen nicht mit seinem Typ. Schreiben Sie zum Beispiel `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` anstelle von `sName = "John Doe"`.
- Vermeiden Sie bei Sammlungen, den Typ wie Liste, Array, Warteschlange im Namen hinzuzufügen. Verwenden Sie den Inhaltsnamen in der Pluralform. Verwenden Sie zum Beispiel für ein Array von Autos `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie zum Beispiel, wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer konkreten Anwendung darstellen möchten.
- Verwenden Sie für primitive Werte _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, verständliche und semantische Namen, wo es angebracht ist. Beispielsweise verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessiven. Verwenden Sie zum Beispiel `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie zum Beispiel, wenn Sie eine Funktion im Allgemeinen ohne praktischen Kontext beschreiben.
- Verwenden Sie Variablennamen wie hier gezeigt:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  Nennen Sie Variablen nicht so:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> Der einzige Ort, an dem es erlaubt ist, keine verständlichen, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention besteht, wie die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Wenn Sie Variablen und Konstanten deklarieren, verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

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

- Das folgende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir möchten diese Nutzung in den Codebeispielen der MDN Web Docs vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das folgende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das folgende Beispiel verwendet `var`, was den globalen Bereich verschmutzt:

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

  Deklarieren Sie keine mehreren Variablen in einer Zeile, indem Sie sie mit Kommas trennen oder die Verkettung verwenden. Vermeiden Sie das Deklarieren von Variablen wie folgt:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert in eine Zahl zu zwingen, und `"" + val`, um ihn in eine Zeichenfolge zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Neben diesen JavaScript-Spracheigenschaften empfehlen wir einige Richtlinien im Zusammenhang mit Web-APIs, die zu beachten sind.

### Vermeiden Sie Browser-Präfixe

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, präfixen Sie die Funktion nicht. Schreiben Sie:

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

Hier ist eine nicht erschöpfende Liste von Web-APIs, die zu vermeiden sind und womit sie ersetzt werden können:

- Verwenden Sie `fetch()` statt XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` statt `ScriptProcessorNode`, in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht, um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je weniger wir als Autoren sie verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das folgende Beispiel zeigt die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Außerdem ist sie modal für das gesamte Fenster, was ärgerlich ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Protokollierungsmethode

- Wenn Sie eine Nachricht protokollieren, verwenden Sie `console.log()`.
- Wenn Sie einen Fehler protokollieren, verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchsuchen Sie unsere JavaScript-Referenzseiten, um einige gute, prägnante und bedeutungsvolle JavaScript-Snippets zu überprüfen.
