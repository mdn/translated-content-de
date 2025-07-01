---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
short-title: JavaScript examples
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Codebeispielen für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln für das Schreiben prägnanter Beispiele, die von möglichst vielen Menschen verständlich sind.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Auswahl eines Formats

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Allerdings gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Neue Funktionen können verwendet werden, sobald sie in allen wichtigen Browsern – Chrome, Edge, Firefox und Safari – unterstützt werden.

## Arrays

### Array-Erstellung

Verwenden Sie für die Erstellung von Arrays Literale und keine Konstruktoren.

Erstellen Sie Arrays auf diese Weise:

```js example-good
const visitedCities = [];
```

Machen Sie dies nicht bei der Erstellung von Arrays:

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

Fügen Sie Elemente nicht so zum Array hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben asynchronen Codes verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` auf oberster Ebene nicht verwenden, es sei denn, Sie sind in einem ECMAScript-Modul. Von Node.js verwendete CommonJS-Module sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

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

  Andererseits ist das Wiederholen des Codes in Prosa kein guter Gebrauch von Kommentaren:

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

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` kennzeichnen, damit auskommentierter Code visuell leichter zu erkennen ist. Darüber hinaus ermöglicht diese Konvention das Auskommentieren von Codeabschnitten mit `/* … */` während des Debuggens.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie wie einen Satz mit einem Großbuchstaben, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht sofort nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar. Dadurch entsteht ein Codeblock, der deutlich macht, worauf sich der Kommentar bezieht. Setzen Sie Ihre Kommentare auch auf separate Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten einen Kommentar hinzufügen, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen zu verstehen, was passieren wird, ohne den Code ausführen zu müssen, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Log hinzufügen. Schreiben Sie:

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

### Verwenden Sie Kommentare, um Ellipsen zu markieren

Redundanten Code mit Ellipsen (…) zu überspringen, ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies bedacht tun, da Entwickler häufig Beispiele kopieren und in ihren Code einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Ellipsen (`…`) in einen Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der dieses Snippet wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler Beispielcode kopiert und einfügt. Schreiben Sie:

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

Beim Schreiben von Code lassen Sie normalerweise nicht benötigte Parameter weg. Aber in einigen Codebeispielen möchten Sie demonstrieren, dass Sie einige mögliche Parameter nicht verwendet haben.

Tun Sie dies, indem Sie `/* … */` in der Parameterliste verwenden. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "Camel Case")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, für Menschen lesbare und semantische Namen, wo angebracht.

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

- Verwenden Sie, wo möglich, die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

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

- Wenn Sie anonyme Funktionen als Callback (eine Funktion, die an eine andere Methodenaufruf übergeben wird) verwenden, verwenden Sie eine Pfeilfunktion, um den Code kürzer und sauberer zu machen, wenn Sie nicht auf `this` zugreifen müssen.

  Hier ist die empfohlene Art:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Stattdessen:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Erwägen Sie, keine Pfeilfunktionen zu verwenden, um einer Funktion einen Bezeichner zuzuweisen. Insbesondere verwenden Sie keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Bei der Verwendung von Pfeilfunktionen verwenden Sie [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _Expression Body_), wenn möglich:

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

Wenn [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) erforderlich sind, wählen Sie die geeignete aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), usw.

- Beim Iterieren durch alle Elemente einer Sammlung vermeiden Sie die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie prüfen müssen, ob `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder ob die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` – nicht nur müssen Sie einen zusätzlichen Index `i` hinzufügen, sondern Sie müssen auch die Länge des Arrays verfolgen. Dies kann für Anfänger fehleranfällig sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer ordnungsgemäß definieren, indem Sie das Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht weg. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das untenstehende Beispiel folgt nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und schlägt im Strict Mode fehl):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Wenn Sie sowohl auf den Wert als auch auf den Index zugreifen müssen, können Sie `.forEach()` anstelle von `for (;;)` verwenden. Schreiben Sie:

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
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, ziehen Sie vor, anstelle dessen semantischere Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), und viele mehr.

### Steueranweisungen

Es gibt einen bemerkenswerten Fall, den man bei den `if...else`-Steueranweisungen beachten sollte. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

Obwohl bei Kontrollfluss-Anweisungen wie `if`, `for`, und `while` die Verwendung von geschweiften Klammern nicht erforderlich ist, wenn der Inhalt aus nur einer Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass die Klammern vergessen werden, wenn mehr Anweisungen hinzugefügt werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie nach einer `return`-Anweisung in einem bestimmten Fall keine `break`-Anweisung hinzu. Stattdessen schreiben Sie `return`-Anweisungen wie folgt:

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

- Verwenden Sie `default` als letzten Fall und beenden Sie ihn nicht mit einer `break`-Anweisung. Wenn Sie es anders machen müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

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

- Wenn bestimmte Zustände Ihres Programms nicht abgefangene Fehler werfen, unterbrechen sie die Ausführung und verringern möglicherweise die Nützlichkeit des Beispiels. Daher sollten Sie Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- Wenn Sie den Parameter der `catch`-Anweisung nicht benötigen, lassen Sie ihn aus:

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
  ```

> [!NOTE]
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht-wiederherstellbaren Fehler sollten durchgelassen und den Aufrufstapel hochblubbern gelassen werden.

## Objekte

### Objektnamen

- Bei der Definition einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objekt-Eigenschaften- und Methodennamen.

- Bei der Definition einer Objektinstanz, entweder als Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit kleinem Buchstaben, für den Instanznamen. Beispielsweise:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Für das Erstellen allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind), verwenden Sie Literale und keine Konstruktoren.

Beispielsweise machen Sie Folgendes:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht alte Konstruktorstile.

  Beispielsweise ist dies die empfohlene Art:

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
- Wenn möglich, verwenden Sie die Kurzform, die die Verdopplung des Eigenschaftsidentifikators vermeidet. Schreiben Sie:

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

Wenn Sie einer Variablen einen Literalwert abhängig von einer Bedingung zuweisen wollen, verwenden Sie den [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch beim Zurückgeben eines Wertes. Schreiben Sie:

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

Der bedingte Operator ist hilfreich beim Erstellen von Zeichenfolgen zur Protokollierung von Informationen. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie die Protokollierung und verschleiert den zentralen Punkt des Beispiels.

### Strikter Gleichheitsoperator

Bevorzugen Sie die [strikten Gleichheits-](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach gleich) und Ungleichheitsoperatoren gegenüber den losen Gleichheits- (doppelt gleich) und Ungleichheitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Ungleichheitsoperatoren so:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie die losen Gleichheits- und Ungleichheitsoperatoren nicht, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlägt, wollen wir sie nicht in unseren Codebeispielen haben. Erwägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie ihn benötigen.

### Abkürzungen für Boolesche Tests

Bevorzugen Sie Abkürzungen für Boolesche Tests. Verwenden Sie zum Beispiel `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von truthy oder falsy Werten werden unterschiedlich behandelt.

## Zeichenfolgen

Zeichenfolgenliterale können innerhalb von einfachen Anführungszeichen, wie in `'A string'`, oder innerhalb von doppelten Anführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Gedanken darüber, welche zu verwenden; Prettier hält es konsistent.

### Template-Literale

Zum Einfügen von Werten in Zeichenfolgen verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel, wie man Template-Literale empfohlen verwendet. Deren Einsatz verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettete Zeichenfolgen nicht so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis von Code.

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht verbreitete Abkürzungen. Gute Variablennamen sind in der Regel zwischen 3 und 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Verkürzung auf `acclmtr` um der Länge der Zeichen willen.
- Versuchen Sie, realweltbezogene Beispiele zu verwenden, bei denen jede Variable eine klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation) Benennungskonvention. Präfixieren Sie den Variablennamen nicht mit seinem Typ. Zum Beispiel schreiben Sie `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "Maria Sanchez"` statt `sName = "Maria Sanchez"`.
- Für Sammlungen vermeiden Sie die Hinzufügung des Typs wie Liste, Array, Warteschlange im Namen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel bei einem Array von Autos, verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form eines Features ohne den Kontext einer bestimmten Anwendung zeigen wollen.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, für Menschen lesbare und semantische Namen, wo angebracht. Zum Beispiel verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie Artikel und Possessiva. Zum Beispiel verwenden Sie `car` anstelle von `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie eine Funktion im Allgemeinen ohne einen praktischen Kontext beschreiben.
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
> Der einzige Ort, an dem es erlaubt ist, keine für Menschen lesbaren, semantischen Namen zu verwenden, ist dort, wo es eine sehr allgemein anerkannte Konvention gibt, wie zum Beispiel die Verwendung von `i` und `j` für Schleifen-Iteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, wie folgt:

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

- Das untenstehende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir wollen diese Verwendung in MDN Web Docs Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das untenstehende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das untenstehende Beispiel verwendet `var` und verschmutzt den globalen Gültigkeitsbereich:

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

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, indem Sie sie mit Kommata trennen oder eine Kettendeklaration verwenden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert in eine Zahl zu zwingen und `"" + val`, um ihn in eine Zeichenfolge zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Neben diesen JavaScript-Sprachmerkmalen empfehlen wir einige Richtlinien in Bezug auf Web-APIs, die Sie beachten sollten.

### Vermeiden Sie Browser-Präfixe

Wenn alle wichtigen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, verzichten Sie auf das Präfix der Funktion. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Diese Regel gilt auch für CSS-Präfixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine gesamte Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in deren Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht erschöpfende Liste von Web-APIs, die vermieden werden sollten und was sie ersetzen kann:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web-Audio-API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht, um reinen Text in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren es vermeiden, sie zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das untenstehende Beispiel zeigt die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich in einem {{HTMLElement("iframe")}} befinden. Außerdem ist sie modal für das gesamte Fenster, was störend ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, weil sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Log-Methode

- Beim Protokollieren einer Nachricht verwenden Sie `console.log()`.
- Beim Protokollieren eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Stöbern Sie auf unseren JavaScript-Referenzseiten, um einige gute, prägnante, bedeutungsvolle JavaScript-Ausschnitte zu finden.
