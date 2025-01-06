---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln für das Schreiben von prägnanten Beispielen, die von so vielen Menschen wie möglich verstanden werden können.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Format wählen

Meinungen zu korrektem Einrücken, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

### Nutzung von modernen JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald alle großen Browser — Chrome, Edge, Firefox und Safari — sie unterstützen.

## Arrays

### Array-Erstellung

Verwenden Sie Literale und keine Konstruktoren, um Arrays zu erstellen.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht, wenn Sie Arrays erstellen:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Verwenden Sie beim Hinzufügen von Elementen zu einem Array [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuordnung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie die Elemente so zu:

```js example-good
pets.push("cat");
```

Fügen Sie Elemente nicht so hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Durch das Schreiben von asynchronem Code wird die Leistung verbessert und sollte, wenn möglich, verwendet werden. Insbesondere können Sie die folgenden Techniken nutzen:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

## Kommentare

Kommentare sind entscheidend für das Schreiben guter Codebeispiele. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Calculate the sum of the four first elements of arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Auf der anderen Seite ist das Wiedergeben des Codes in Prosa keine gute Verwendung von Kommentaren:

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

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Die Autoren müssen jede Zeile des Kommentars mit `//` kennzeichnen, damit man kommentierten Code optisch leichter erkennen kann. Darüber hinaus ermöglicht dieses Konvention das Kommentieren von Codeabschnitten mit `/* … */` während des Debuggens.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie bei einem Satz, setzen Sie aber keinen Punkt am Ende des Kommentars.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht direkt nach einem neuen Einrückungslevel beginnt, fügen Sie eine Leerzeile hinzu und danach den Kommentar. Es wird einen Codeblock erstellen, der offensichtlich macht, worauf sich der Kommentar bezieht. Setzen Sie auch Ihre Kommentare auf separate Zeilen vor den Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir häufig `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser ohne Ausführung des Codes verständlich zu machen, was passieren wird, können Sie einen Kommentar _nach_ der Funktion mit dem Log hinzufügen, das produziert wird. Schreiben Sie:

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

- Sollte die Zeile zu lang werden, setzen Sie den Kommentar _nach_ der Funktion, so:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, versuchen Sie also, sie in einer Zeile von 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden von Kommentaren zur Kennzeichnung von Ellipsen

Das Überspringen von redundantem Code mit Ellipsen (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies überlegt tun, da Entwickler häufig Beispiele in ihren Code kopieren und einfügen und alle unsere Codebeispiele gültiges JavaScript sein sollten.

In JavaScript sollten Sie die Ellipsen (`…`) in einem Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der diesen Schnipsel wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

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

Beim Schreiben von Code lassen Sie normalerweise Parameter weg, die Sie nicht benötigen. Aber in einigen Codebeispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Dazu verwenden Sie `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Verwenden Sie für Funktionsnamen {{Glossary("camel_case", "camel case")}} und beginnen Sie mit einem Kleinbuchstaben. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wenn dies angemessen ist.

Das folgende Beispiel zeigt einen korrekten Funktionsnamen:

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

Verwenden Sie Funktionsnamen nicht so:

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### Funktionsdeklarationen

- Verwenden Sie, wenn möglich, die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist der empfohlene Weg, eine Funktion zu deklarieren:

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

- Verwenden Sie bei anonymen Funktionen als Callback (eine Funktion, die einer anderen Methodenaufruf übergeben wird) eine Pfeilfunktion, wenn Sie keinen Zugriff auf `this` benötigen, um den Code kürzer und übersichtlicher zu gestalten.

  Hier ist der empfohlene Weg:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Anstatt dessen:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Vermeiden Sie es, eine Pfeilfunktion zu verwenden, um eine Funktion einem Bezeichner zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Verwenden Sie bei der Verwendung von Pfeilfunktionen [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _Expression-Body_), wenn möglich:

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

- Vermeiden Sie bei der Iteration durch alle Elemente einer Sammlung die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass bei der Verwendung einer Sammlung, die kein `Array` ist, überprüft werden muss, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist) oder dass die `forEach()`-Methode tatsächlich vorhanden ist.

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

- Stellen Sie sicher, dass Sie den Initialisierer ordnungsgemäß definieren, indem Sie das `const` Schlüsselwort für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht weg. Hier sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das untenstehende Beispiel folgt nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und wird im strikten Modus fehlschlagen):

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
> Verwenden Sie niemals `for...in` mit Arrays und Zeichenfolgen.

> [!NOTE]
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder eine [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, sollten Sie in Betracht ziehen, stattdessen mehr semantische Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), und viele mehr.

### Kontrollanweisungen

Es gibt einen bemerkenswerten Fall, den es bei `if...else`-Kontrollanweisungen zu beachten gilt. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

Obwohl Kontrollflussanweisungen wie `if`, `for` und `while` keine Verwendung von geschweiften Klammern erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert das Vergessen der Ergänzung der geschweiften Klammern beim Hinzufügen zusätzlicher Anweisungen.

### Switch-Anweisungen

Switch-Anweisungen können etwas schwierig sein.

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem spezifischen Fall hinzu. Stattdessen schreiben Sie `return`-Anweisungen so:

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

- Denken Sie daran, dass, wenn Sie eine lokale Variable für einen Fall deklarieren, Sie geschweifte Klammern verwenden müssen, um einen Bereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms ungefangene Fehler auslösen, stoppen sie die Ausführung und verringern möglicherweise die Nützlichkeit des Beispiels. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten durchgelassen und die Aufrufkette hinauf geworfen werden.

## Objekte

### Objektbezeichnungen

- Verwenden Sie bei der Definition einer Klasse _PascalCase_ (begonnen mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (begonnen mit einem Kleinbuchstaben) für die Namen von Objekteigenschaften und Methoden.

- Verwenden Sie bei der Definition einer Objektinstanz, entweder als Literal oder über einen Konstruktor, _camelCase_, begonnen mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterstellung

Verwenden Sie bei der Erstellung von allgemeinen Objekten (d. h. wenn keine Klassen beteiligt sind) Literale und keine Konstruktoren.

Zum Beispiel, tun Sie dies:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht die alte Konstruktoren-Syntax.

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

Anstatt dessen:

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
- Verwenden Sie nach Möglichkeit die Kurzform, um die Duplikation des Eigenschaftenidentifizierers zu vermeiden. Schreiben Sie:

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

### Bedingungsoperatoren

Wenn Sie einer Variablen einen wörtlichen Wert je nach Bedingung zuweisen wollen, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch bei der Rückgabe eines Wertes. Schreiben Sie:

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

Der bedingte Operator ist hilfreich, wenn Strings zur Protokollierung von Informationen erstellt werden. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie die Protokollierung, die den zentralen Punkt des Beispiels verschleiern.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheits](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach gleich) und Ungleichheitsoperator gegenüber dem losen Gleichheits- (doppel gleich) und Ungleichheitsoperator.

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

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlägt, möchten wir sie nicht in unseren Beispielcode haben. Überlegen Sie, ob Sie einen Kommentar hinzufügen, um zu erklären, warum Sie ihn benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Verwenden Sie zum Beispiel `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, unterschiedliche Arten von `truthy` oder `falsy` Werten werden unterschiedlich behandelt.

## Zeichenketten

Zeichenkettenliterale können innerhalb von einfachen Anführungszeichen, wie bei `'Eine Zeichenkette'`, oder innerhalb von doppelten Anführungszeichen, wie bei `"Eine Zeichenkette"`, eingeschlossen werden. Machen Sie sich keine Gedanken darüber, welche Sie verwenden sollen; Prettier hält es konsistent.

### Template-Literals

Verwenden Sie [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals), um Werte in Zeichenketten einzufügen.

- Hier ist ein Beispiel für den empfohlenen Weg, Template-Literals zu verwenden. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettungen Sie keine Zeichenketten so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Überbeanspruchen Sie keine Template-Literals. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenkettenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend, um Code zu verstehen.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht gebräuchliche Abkürzungen. Gute Variablennamen sind normalerweise zwischen 3 bis 10 Zeichen lang, aber nur als Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Abkürzung `acclmtr` aus Gründen der Zeichenlänge.
- Versuchen Sie, realitätsnahe Beispiele zu verwenden, bei denen jede Variable klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und übertrieben ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation) im Benennungskonvention. Präfixieren Sie den Variablennamen nicht mit seinem Typ. Schreiben Sie zum Beispiel `bought = car.buyer !== null` anstatt `bBought = oCar.sBuyer != null` oder `name = "John Doe"` anstelle von `sName = "John Doe"`.
- Verwenden Sie für Sammlungen nicht den Typ wie Liste, Array, Warteschlange im Namen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel, für ein Array von Autos, verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen wollen.
- Verwenden Sie für primitive Werte _camelCase_, angefangen mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie prägnante, menschenlesbare und semantische Namen, wenn dies angemessen ist. Zum Beispiel verwenden Sie `currencyName` anstelle von `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Zum Beispiel verwenden Sie `car` anstatt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie beim Beschreiben einer Funktion im Allgemeinen ohne praktischen Kontext.
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
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesenbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention existiert, wie z.B. die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Verwenden Sie beim Deklarieren von Variablen und Konstanten die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

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

- Das Beispiel unten verwendet `let`, wo `const` verwendet werden sollte. Der Code wird funktionieren, aber wir wollen diese Nutzung in MDN Web Docs-Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das Beispiel unten verwendet `const`, für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das Beispiel unten verwendet `var`, was die globale Umgebung verschmutzt:

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

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, getrennt durch Kommata oder Nutzung einer Kettendeklaration. Vermeiden Sie solch eine Deklaration:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Typkonvertierung

Vermeiden Sie implizite Typkonvertierungen. Vermeiden Sie insbesondere `+val`, um einen Wert in eine Zahl umzuwandeln, und `"" + val`, um ihn in eine Zeichenkette umzuwandeln. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`, so:

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

## Web APIs zu vermeiden

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien in Bezug auf Web-APIs, die im Auge behalten werden sollten.

### Vermeiden Sie Browser-Präfixe

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, fügen Sie der Funktion kein Präfix hinzu. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Dasselbe gilt für CSS-Präfixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in deren Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht erschöpfende Liste von Web-APIs, die zu vermeiden sind und was man an ihrer Stelle verwenden sollte:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je seltener wir als Autoren sie verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Zudem ist sie für das gesamte Fenster modal, was störend ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Log-Methode

- Beim Protokollieren einer Nachricht verwenden Sie `console.log()`.
- Beim Protokollieren eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchstöbern Sie unsere JavaScript-Referenzseiten, um sich einige gute, prägnante und sinnvolle JavaScript-Snippets anzusehen.
