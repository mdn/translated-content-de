---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien umfassen das Schreiben von JavaScript-Codebeispielen für die MDN Web Docs. Dieser Artikel ist eine Liste von Regeln zum Schreiben prägnanter Beispiele, die für möglichst viele Menschen verständlich sind.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erläutert die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, zum Leerraum und zu Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

### Verwendung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jeder große Browser – Chrome, Edge, Firefox und Safari – sie unterstützt.

## Arrays

### Erzeugung von Arrays

Verwenden Sie zum Erstellen von Arrays Literale und nicht Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Machen Sie das nicht, während Sie Arrays erstellen:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Verwenden Sie beim Hinzufügen von Elementen zu einem Array [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht direkte Zuweisung. Betrachten Sie folgendes Array:

```js
const pets = [];
```

Fügen Sie Elemente zum Array so hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie keine Elemente zum Array so hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Sollte Ihr Beispiel überall verwendet werden, vermeiden Sie `await` auf oberster Ebene.

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

  Andererseits ist es nicht sinnvoll, den Code in Prosa zu wiederholen:

  ```js example-bad
  let total = 0;

  // For loop from 1 to 4
  for (let i = 0; i < 4; i++) {
    // Add value to the total
    total += arr[i];
  }
  ```

- Kommentare sind ebenfalls nicht erforderlich, wenn Funktionen explizite Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Closing the connection
  ```

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare werden mit `//` markiert, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Verwenden Sie im Allgemeinen einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es leichter ist, auskommentierten Code visuell zu erkennen. Darüber hinaus ermöglicht diese Konvention das Auskommentieren von Codeabschnitten mit `/* … */` beim Debuggen.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie bei einem Satz, aber enden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // This is a well-written single-line comment
  ```

- Wenn ein Kommentar nicht unmittelbar nach einer neuen Einrückungsebene beginnt, fügen Sie eine leere Zeile hinzu und dann den Kommentar. Dadurch wird ein Codeblock erstellt, der deutlich macht, worauf sich der Kommentar bezieht. Setzen Sie Ihre Kommentare auch auf separate Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

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

- In Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten Kommentare hinzufügen, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir oft `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen zu verstehen, was ohne Ausführung des Codes passieren wird, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Log hinzufügen. Schreiben Sie:

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

- Wenn die Zeile zu lang wird, setzen Sie den Kommentar _nach_ der Funktion, so:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Mehrzeilige Kommentare

Kurze Kommentare sind in der Regel besser, also versuchen Sie, sie in eine Zeile mit 60–80 Zeichen zu halten. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

```js example-good
// This is an example of a multi-line comment.
// The imaginary function that follows has some unusual
// limitations that I want to call out.
// Limitation 1
// Limitation 2
```

Benutzen Sie nicht `/* … */`:

```js example-bad
/* This is an example of a multi-line comment.
  The imaginary function that follows has some unusual
  limitations that I want to call out.
  Limitation 1
  Limitation 2 */
```

### Verwenden Sie Kommentare, um Auslassungszeichen zu markieren

Das Auslassen von redundantem Code mit Auslassungspunkten (…) ist notwendig, um Beispiele kurz zu halten. Trotzdem sollten Autoren dies bedacht tun, da Entwickler oft Beispiele kopieren und in ihren Code einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Auslassungspunkte (`…`) in einen Kommentar setzen. Wo möglich, geben Sie an, welche Aktion von jemandem, der diesen Schnipsel verwendet, hinzugefügt werden sollte.

Die Verwendung eines Kommentars für die Auslassungspunkte (…) ist expliziter und verhindert Fehler, wenn ein Entwickler Codebeispiele kopiert und einfügt. Schreiben Sie:

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

### Kommentare zu Parametern

Beim Schreiben von Code lassen Sie normalerweise Parameter aus, die Sie nicht benötigen. In einigen Codebeispielen möchten Sie jedoch zeigen, dass Sie einige mögliche Parameter nicht verwendet haben.

Verwenden Sie dazu `/* … */` in der Parameterliste. Dies ist eine Ausnahme zur Regel, nur Einzeilenkommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Verwenden Sie für Funktionsnamen [Camel Case](/de/docs/Glossary/camel_case), beginnend mit einem Kleinbuchstaben. Verwenden Sie kurze, menschenlesbare und semantische Namen, wo dies angebracht ist.

Das Folgende ist ein korrektes Beispiel für einen Funktionsnamen:

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

- Wo möglich, verwenden Sie die Funktionsdeklaration anstelle von Funktionsausdrücken, um Funktionen zu definieren.

  Dies ist der empfohlene Weg, eine Funktion zu deklarieren:

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

- Wenn Sie anonyme Funktionen als Callback (eine Funktion, die an eine andere Methodenaufruf übergeben wird) verwenden, verwenden Sie eine Arrow-Funktion, um den Code kürzer und sauberer zu machen, wenn Sie nicht auf `this` zugreifen müssen.

  Dies ist der empfohlene Weg:

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

- Erwägen Sie, keine Arrow-Funktion zu verwenden, um einer Kennung eine Funktion zuzuweisen. Insbesondere verwenden Sie keine Arrow-Funktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  Machen Sie das nicht:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Beim Verwenden von Arrow-Funktionen verwenden Sie [implizite Rückgaben](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch als _expression body_ bekannt) wenn möglich:

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

Wenn [Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) erforderlich sind, wählen Sie die passende aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

- Wenn Sie durch alle Elemente einer Sammlung iterieren, vermeiden Sie die klassische `for (;;)` Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass Sie, wenn Sie eine Sammlung verwenden, die kein `Array` ist, prüfen müssen, ob `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist), oder ob die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)` — nicht nur müssen Sie einen zusätzlichen Index, `i`, hinzufügen, sondern Sie müssen auch die Länge des Arrays verfolgen. Dies kann anfällig für Fehler bei Anfängern sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer richtig definieren, indem Sie das `const`-Schlüsselwort für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht weg. Dies sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das untenstehende Beispiel folgt nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und schlägt im strikten Modus fehl):

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
> Verwenden Sie `for...in` niemals mit Arrays und Strings.

> [!NOTE]
> Erwägen Sie, überhaupt keine `for`-Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder einen [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) für einige Vorgänge) verwenden, erwägen Sie, stattdessen semantischere Iterationsmethoden wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr zu verwenden.

### Kontrollstrukturen

Es gibt einen bemerkenswerten Fall, den Sie für die Kontrollstrukturen `if...else` im Auge behalten sollten. Wenn die `if`-Anweisung mit einer `return`-Anweisung endet, fügen Sie keine `else`-Anweisung hinzu.

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

### Verwenden Sie Klammern mit Kontrollflussanweisungen und Schleifen

Während Kontrollflussanweisungen wie `if`, `for` und `while` keine Verwendung von Klammern erfordern, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass die Klammern vergessen werden, wenn weitere Anweisungen hinzugefügt werden.

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

- Verwenden Sie `default` als letzten Fall und enden Sie nicht mit einer `break`-Anweisung. Wenn Sie es anders tun müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

- Denken Sie daran, dass, wenn Sie eine lokale Variable für einen Fall deklarieren, Sie Klammern verwenden müssen, um einen Geltungsbereich festzulegen:

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

- Wenn bestimmte Zustände Ihres Programms unbehandelte Fehler auslösen, stoppen diese die Ausführung und könnten die Nützlichkeit des Beispiels verringern. Sie sollten daher Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block abfangen, wie unten gezeigt:

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
> Beachten Sie, dass nur _wiederherstellbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht wiederherstellbaren Fehler sollen weitergeleitet und die Aufrufkette nach oben hin durchlaufen werden.

## Objekte

### Objekt-Namen

- Bei der Definition einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Eigenschafts- und Methodennamen des Objekts.

- Wenn Sie eine Objektinstanz definieren, entweder ein Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Erstellen von Objekten

Für das Erstellen allgemeiner Objekte (d.h. wenn keine Klassen beteiligt sind) verwenden Sie Literale und nicht Konstruktoren.

Tun Sie dies zum Beispiel so:

```js example-good
const object = {};
```

Erstellen Sie ein allgemeines Objekt nicht so:

```js example-bad
const object = new Object();
```

### Objektklassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht alte Konstruktorstile.

  Dies ist der empfohlene Weg:

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
- Wo möglich, verwenden Sie die Kurzschreibweise, um die Duplizierung der Eigenschaftskennzeichnung zu vermeiden. Schreiben Sie:

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

In diesem Abschnitt sind unsere Empfehlungen aufgelistet, welche Operatoren wann zu verwenden sind.

### Bedingte Operatoren

Wenn Sie einem Literalwert abhängig von einer Bedingung einer Variablen zuweisen möchten, verwenden Sie einen [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else`-Anweisung. Diese Regel gilt auch, wenn ein Wert zurückgegeben wird. Schreiben Sie:

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

Der bedingte Operator ist beim Erstellen von Strings hilfreich, um Informationen zu protokollieren. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langen Codeblöcken für eine Nebenoperation wie das Protokollieren, was den zentralen Punkt des Beispiels verschleiert.

### Strikter Gleichheitsoperator

Bevorzugen Sie den [strikten Gleichheits-](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (Triple-Equals) und Ungleichheitsoperator gegenüber den lockeren Gleichheits- (Double-Equals) und Ungleichheitsoperatoren.

Verwenden Sie die strikten Gleichheits- und Ungleichheitsoperatoren so:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die lockeren Gleichheits- und Ungleichheitsoperatoren, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, bedenken Sie, dass `== null` der einzige akzeptable Fall ist. Da TypeScript in allen anderen Fällen fehlschlägt, möchten wir sie nicht in unseren Beispielcodes haben. Erwaägen Sie, einen Kommentar hinzuzufügen, um zu erklären, warum Sie es benötigen.

### Abkürzungen für boolesche Tests

Bevorzugen Sie Abkürzungen für boolesche Tests. Zum Beispiel verwenden Sie `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, Sie behandeln unterschiedliche Arten von "truthy" oder "falsy" Werten unterschiedlich.

## Strings

String-Literale können in einzelne Anführungszeichen eingeschlossen werden, wie in `'Ein String'`, oder in doppelte Anführungszeichen, wie in `"Ein String"`. Denken Sie nicht darüber nach, welche zu verwenden; Prettier hält es konsistent.

### Template-Literale

Zum Einfügen von Werten in Strings verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel für den empfohlenen Weg, um Template-Literale zu verwenden. Ihre Verwendung verhindert viele Abstandsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Konkatenieren Sie keine Strings so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn keine Ersetzungen vorhanden sind, verwenden Sie stattdessen einen normalen String-Literal.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis von Code.

- Verwenden Sie kurze Bezeichner und vermeiden Sie ungebräuchliche Abkürzungen. Gute Variablennamen sind in der Regel 3 bis 10 Zeichen lang, aber dies ist nur ein Hinweis. Zum Beispiel ist `accelerometer` beschreibender als die Abkürzung zu `acclmtr` um der Zeichenlänge willen.
- Versuchen Sie, realitätsbezogene Beispiele zu verwenden, bei denen jede Variable eine klare Semantik hat. Greifen Sie nur dann auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und konstruiert ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation) Namenskonvention. Geben Sie dem Variablennamen nicht seinen Typ an. Zum Beispiel schreiben Sie `bought = car.buyer !== null` statt `bBought = oCar.sBuyer != null` oder `name = "John Doe"` statt `sName = "John Doe"`.
- Für Sammlungen vermeiden Sie die Hinzufügung des Typs wie Liste, Array, Warteschlange im Namen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel für ein Array von Autos verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form einer Funktion ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie keinen `_`. Verwenden Sie kurze, menschenlesbare und semantische Namen, wo es angebracht ist. Zum Beispiel verwenden Sie `currencyName` statt `currency_name`.
- Vermeiden Sie die Verwendung von Artikeln und Possessivpronomen. Verwenden Sie zum Beispiel `car` statt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie eine Funktion im Allgemeinen ohne praktischen Kontext beschreiben.
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
> Der einzige Ort, an dem es erlaubt ist, keine menschenlesbaren, semantischen Namen zu verwenden, ist dort, wo eine allgemein anerkannte Konvention existiert, wie die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Schlüsselwörter, nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was auf MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, etwa so:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Wenn Sie den Wert einer Variable ändern werden, verwenden Sie `let`, wie unten gezeigt:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- Das untenstehende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir möchten diese Verwendung in den Codebeispielen von MDN Web Docs vermeiden.

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

- Das untenstehende Beispiel verwendet `var`, was den globalen Gültigkeitsbereich verschmutzt:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Deklarieren Sie eine Variable pro Zeile, etwa so:

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

Vermeiden Sie implizite Typumwandlungen. Insbesondere vermeiden Sie `+val`, um einen Wert in eine Zahl zu zwingen, und `"" + val`, um ihn in einen String zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir einige Richtlinien zu Web-APIs, die Sie im Kopf behalten sollten.

### Vermeiden Sie Browser-Präfixe

Wenn alle großen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, versehen Sie die Funktion nicht mit einem Präfix. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität von Präfixen. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Die gleiche Regel gilt für CSS-Präfixe.

### Vermeiden Sie abgelehnte APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle abgelehnt wird, verwenden Sie sie nicht (außerhalb ihrer Dokumentation). Verwenden Sie stattdessen die moderne API.

Hier ist eine nicht erschöpfende Liste von zu vermeidenden Web-APIs und was sie ersetzen sollen:

- Verwenden Sie `fetch()` statt XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` statt `ScriptProcessorNode` in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht, um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen [`Node.textContent`](/de/docs/Web/API/Node/textContent). Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je weniger wir als Autoren es verwenden, desto weniger Sicherheitsmängel werden erzeugt, wenn ein Entwickler unseren Code kopiert und einfügt.

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

- Die `alert()`-Funktion ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf MDN Web Docs, die sich innerhalb eines {{HTMLElement("iframe")}} befinden. Außerdem ist sie modal für das gesamte Fenster, was lästig ist. In statischen Code-Beispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, da sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Log-Methode

- Verwenden Sie `console.log()`, wenn Sie eine Nachricht protokollieren.
- Verwenden Sie `console.error()`, wenn Sie einen Fehler protokollieren.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - stöbern Sie in unseren JavaScript-Referenzseiten, um einige gute, präzise, sinnvolle JavaScript-Snippets zu entdecken.
