---
title: Richtlinien zum Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Die folgenden Richtlinien decken das Schreiben von JavaScript-Beispielcode für MDN Web Docs ab. Dieser Artikel ist eine Liste von Regeln für das Schreiben von prägnanten Beispielen, die von möglichst vielen Menschen verstanden werden.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die Sie beim Schreiben von JavaScript-Codebeispielen beachten sollten. Die späteren Abschnitte behandeln spezifischere Details.

### Wahl eines Formats

Meinungen zur richtigen Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Codestil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — diese unterstützt.

## Arrays

### Array-Erzeugung

Zum Erzeugen von Arrays verwenden Sie Literale und keine Konstruktoren.

Erstellen Sie Arrays wie folgt:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht bei der Erstellung von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Beim Hinzufügen von Elementen zu einem Array verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und keine direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente wie folgt dem Array hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie keine Elemente dem Array wie folgt hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf der oberen Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie das obere `await`.

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

  Die Wiederholung des Codes in Prosa ist hingegen kein guter Gebrauch von Kommentaren:

  ```js example-bad
  let total = 0;

  // For loop from 1 to 4
  for (let i = 0; i < 4; i++) {
    // Add value to the total
    total += arr[i];
  }
  ```

- Kommentare sind auch nicht notwendig, wenn Funktionen eindeutige Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare werden mit `//` gekennzeichnet, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es einfacher ist, auskommentierten Code visuell zu erkennen. Außerdem ermöglicht diese Konvention, Codeabschnitte mit `/* … */` während des Debuggens auszukommentieren.

- Lassen Sie einen Abstand zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie bei einem Satz, enden Sie den Kommentar jedoch nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht direkt nach einer neuen Einrückungsebene beginnt, fügen Sie eine Leerzeile ein und dann den Kommentar. Es wird einen Codeblock erstellen, der offensichtlich macht, worauf sich der Kommentar bezieht. Setzen Sie Ihre Kommentare auch auf separate Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten kommentieren, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen zu verstehen, was ohne Ausführen des Codes passieren wird, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Log hinzufügen. Schreiben Sie:

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

Kurze Kommentare sind normalerweise besser, also versuchen Sie, sie in einer Zeile von 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

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

### Verwenden Sie Kommentare, um Auslassungen zu kennzeichnen

Das Auslassen von redundantem Code mit Auslassungszeichen (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren es sorgfältig tun, da Entwickler häufig Beispiele in ihren Code kopieren und einfügen und alle unsere Codebeispiele gültiges JavaScript sein sollten.

In JavaScript sollten Sie die Auslassungszeichen (`…`) in einem Kommentar setzen. Wann immer möglich, geben Sie an, welche Aktion jemand, der diesen Ausschnitt wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Auslassungszeichen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Add your code here
  // …
}
```

Verwenden Sie Auslassungszeichen (…) nicht so:

```js example-bad
function exampleFunc() {
  …
}
```

### Kommentieren Sie Parameter aus

Beim Schreiben von Code lassen Sie normalerweise Parameter aus, die Sie nicht benötigen. Aber in einigen Codebeispielen möchten Sie zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie dazu `/* … */` in der Parameterliste. Dies ist eine Ausnahme zur Regel, nur einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Für Funktionsnamen verwenden Sie {{Glossary("camel_case", "camel case")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie kurze, menschenlesbare und semantische Namen, wo angebracht.

Das folgende Beispiel ist ein korrektes Beispiel eines Funktionsnamens:

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

- Soweit möglich, verwenden Sie die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

  Hier ist die empfohlene Methode, um eine Funktion zu deklarieren:

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

- Wenn Sie anonyme Funktionen als Rückrufe (eine Funktion, die an eine andere Methodenaufruf übergeben wird) verwenden, verwenden Sie eine Pfeilfunktion, wenn Sie nicht auf `this` zugreifen müssen, um den Code kürzer und klarer zu gestalten.

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

- Vermeiden Sie, eine Pfeilfunktion zu verwenden, um eine Funktion einem Bezeichner zuzuweisen. Verwenden Sie insbesondere keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Wenn Sie Pfeilfunktionen verwenden, nutzen Sie die [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _expression body_), wann immer es möglich ist:

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

Wenn [Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) erforderlich sind, wählen Sie die passende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), usw.

- Wenn Sie durch alle Elemente einer Sammlung iterieren, verwenden Sie nicht die klassische `for (;;)`-Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie überprüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist), oder dass die Methode `forEach()` tatsächlich vorhanden ist.

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

- Stellen Sie sicher, dass Sie den Initialisierer ordnungsgemäß mit dem Schlüsselwort `const` für `for...of` oder `let` für die anderen Schleifen definieren. Lassen Sie es nicht aus. Diese sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das unten stehende Beispiel folgt nicht den empfohlenen Richtlinien für die Initialisierung (es erzeugt implizit eine globale Variable und wird im Strict-Modus fehlschlagen):

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
> Überlegen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Operationen) verwenden, sollten Sie statt dessen mehr semantische Iterationsmethoden wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr verwenden.

### Kontrollanweisungen

Es gibt einen bemerkenswerten Fall, den Sie für die Kontrollanweisungen `if...else` im Auge behalten sollten. Wenn die `if`-Anweisung mit einem `return` endet, fügen Sie keine `else`-Anweisung hinzu.

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

Obwohl Kontrollflussanweisungen wie `if`, `for` und `while` keine geschweiften Klammern erfordern, wenn der Inhalt aus einem einzigen Satz besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass vergessen wird, die geschweiften Klammern hinzuzufügen, wenn weitere Anweisungen hinzugefügt werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem spezifischen Fall hinzu. Stattdessen schreiben Sie `return`-Anweisungen wie folgt:

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

  Wenn Sie eine `break`-Anweisung hinzufügen, wird sie nicht erreichbar. Schreiben Sie nicht:

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

- Denken Sie daran, dass wenn Sie eine lokale Variable für einen Fall deklarieren, müssen Sie geschweifte Klammern verwenden, um einen Gültigkeitsbereich zu definieren:

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

- Wenn bestimmte Zustände Ihres Programms ungefangene Fehler werfen, werden sie die Ausführung stoppen und möglicherweise die Nützlichkeit des Beispiels verringern. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Denken Sie daran, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollten durchgelassen werden und den Aufrufstapel hochsteigen.

## Objekte

### Objektnamen

- Beim Definieren einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objektenamen und Methodennamen.

- Beim Definieren einer Objektinstanz, entweder als Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekterzeugung

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

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht die alte Konstruktor-Stil.

  Zum Beispiel wird dies empfohlen:

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

- Verwenden Sie `extends` für das Erben:

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
- Verwenden Sie, wenn möglich, die Kurzform und vermeiden Sie die Duplizierung des Eigenschaftsbezeichners. Schreiben Sie:

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

Wenn Sie je nach Bedingung einen wörtlichen Wert einer Variablen zuweisen möchten, verwenden Sie einen [konditionalen (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch, wenn ein Wert zurückgegeben wird. Schreiben Sie:

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

Der bedingte Operator ist hilfreich beim Erstellen von Zeichenfolgen, um Informationen zu protokollieren. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie Logging, die den zentralen Punkt des Beispiels verdecken.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifaches Gleichheitszeichen) und Unstimmigkeitsoperatoren über die losen Gleichheits- (doppeltes Gleichheitszeichen) und Unstimmigkeitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Unstimmigkeitsoperatoren wie folgt:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die losen Gleichheits- und Unstimmigkeitsoperatoren, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, bedenken Sie, dass `== null` der einzige akzeptable Fall ist. Da TypeScript bei allen anderen Fällen fehlschlagen wird, wollen wir sie nicht in unserem Beispielcode haben. Überlegen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie es brauchen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Zum Beispiel verwenden Sie `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, es werden unterschiedliche Arten von truthy oder falsy Werten unterschiedlich behandelt.

## Strings

Zeichenfolgen-Literale können innerhalb einzelner Anführungszeichen, wie in `'Ein String'`, oder innerhalb doppelter Anführungszeichen, wie in `"Ein String"`, eingeschlossen werden. Machen Sie sich keine Sorgen darüber, welche zu verwenden; Prettier hält es konsistent.

### Template-Literale

Für das Einfügen von Werten in Zeichenfolgen verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für die empfohlene Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verkettete Strings nicht so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Überbeanspruchen Sie Template-Literale nicht. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind wesentlich, um den Code zu verstehen.

<!-- cSpell:ignore acclmtr -->

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht gebräuchliche Abkürzungen. Gute Variablennamen sind in der Regel 3 bis 10 Zeichen lang, aber nur als Anhaltspunkt. Zum Beispiel ist `accelerometer` beschreibender als `acclmtr` zur Kürzung der Zeichenzahl.
- Versuchen Sie, realitätsnahe Beispiele zu verwenden, bei denen jede Variable klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und gekünstelt ist.
- Verwenden Sie die [Hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation)-Namenskonvention nicht. Präfixieren Sie den Variablennamen nicht mit seinem Typ. Zum Beispiel schreiben Sie `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` anstelle von `sName = "John Doe"`.
- Für Sammlungen vermeiden Sie es, den Typ wie Liste, Array, Warteschlange im Namen zu verwenden. Verwenden Sie den Inhaltsnamen in Pluralform. Zum Beispiel für ein Array von Autos verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie nicht `_`. Verwenden Sie kurze, menschenlesbare und semantische Namen, wo angebracht. Zum Beispiel verwenden Sie `currencyName` anstatt `currency_name`.
- Vermeiden Sie es, Artikel und Possessivformen zu verwenden. Zum Beispiel verwenden Sie `car` anstatt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie eine Funktion im Allgemeinen ohne praktischen Kontext beschreiben.
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
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesbaren, semantischen Namen zu verwenden, ist der, wo es eine sehr allgemein anerkannte Konvention gibt, wie z.B. die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwörter, nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

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

- Das unten stehende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir wollen diese Verwendung in MDN Web Docs-Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das unten stehende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuweisung wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das unten stehende Beispiel verwendet `var` und verunreinigt den globalen Gültigkeitsbereich:

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

  Deklarieren Sie keine mehrere Variablen in einer Zeile, indem Sie sie durch Kommas trennen oder Kettendeklarationen verwenden. Vermeiden Sie Variablen wie folgt zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 is implicitly created as a global variable; fails in strict mode
  ```

### Type Coercion

Vermeiden Sie implizite Typumwandlungen. Verwenden Sie insbesondere nicht `+val`, um einen Wert in eine Zahl umzuwandeln, und `"" + val`, um ihn in eine Zeichenfolge umzuwandeln. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

### Vermeiden Sie Browser-Präfixe

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, präfixieren Sie die Funktion nicht. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die hinzugefügte Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Die gleiche Regel gilt für CSS-Präfixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in deren Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht erschöpfende Liste von zu vermeidenden Web-APIs und was Sie stattdessen verwenden sollten:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren es vermeiden, sie zu verwenden, desto weniger Sicherheitslücken entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das unten stehende Beispiel zeigt die Verwendung von `textContent`.

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

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Darüber hinaus ist sie für das gesamte Fenster modal, was störend ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein spezielles UI-Element.

### Verwenden Sie die passende Log-Methode

- Bei der Protokollierung einer Nachricht verwenden Sie `console.log()`.
- Bei der Protokollierung eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchsuchen Sie unsere JavaScript-Referenzseiten, um sich einige gute, prägnante und bedeutungsvolle JavaScript-Snippets anzusehen.
