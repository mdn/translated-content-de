---
title: Richtlinien für das Schreiben von JavaScript-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln das Schreiben von JavaScript-Beispielcode für MDN Web Docs. Dieser Artikel ist eine Liste von Regeln für das Schreiben prägnanter Beispiele, die für so viele Menschen wie möglich verständlich sind.

## Allgemeine Richtlinien für JavaScript-Codebeispiele

Dieser Abschnitt erklärt die allgemeinen Richtlinien, die beim Schreiben von JavaScript-Codebeispielen zu beachten sind. Die späteren Abschnitte behandeln spezifischere Details.

### Auswahl eines Formats

Ansichten über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken vom Erstellen und Pflegen des Inhalts ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Nutzung moderner JavaScript-Funktionen

Sie können neue Funktionen verwenden, sobald jede größere Browser—Chrome, Edge, Firefox und Safari—sie unterstützt.

## Arrays

### Array-Erstellung

Zur Erstellung von Arrays verwenden Sie Literale und keine Konstruktoren.

Erstellen Sie Arrays so:

```js example-good
const visitedCities = [];
```

Tun Sie dies nicht bei der Erstellung von Arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Hinzufügen von Elementen

Beim Hinzufügen von Elementen zu einem Array verwenden Sie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) und nicht die direkte Zuweisung. Betrachten Sie das folgende Array:

```js
const pets = [];
```

Fügen Sie Elemente dem Array so hinzu:

```js example-good
pets.push("cat");
```

Fügen Sie Elemente dem Array nicht so hinzu:

```js example-bad
pets[pets.length] = "cat";
```

## Asynchrone Methoden

Das Schreiben von asynchronem Code verbessert die Leistung und sollte, wenn möglich, verwendet werden. Insbesondere können Sie verwenden:

- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

Wenn beide Techniken möglich sind, bevorzugen wir die einfachere `async`/`await`-Syntax. Leider können Sie `await` nicht auf oberster Ebene verwenden, es sei denn, Sie befinden sich in einem ECMAScript-Modul. CommonJS-Module, die von Node.js verwendet werden, sind keine ES-Module. Wenn Ihr Beispiel überall verwendet werden soll, vermeiden Sie `await` auf oberster Ebene.

## Kommentare

Kommentare sind entscheidend für das Schreiben guter Codebeispiele. Sie klären die Absicht des Codes und helfen Entwicklern, ihn zu verstehen. Achten Sie besonders auf sie.

- Wenn der Zweck oder die Logik des Codes nicht offensichtlich ist, fügen Sie einen Kommentar mit Ihrer Absicht hinzu, wie unten gezeigt:

  ```js example-good
  let total = 0;

  // Berechnen Sie die Summe der ersten vier Elemente von arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Andererseits ist das Umformulieren des Codes in Prosa keine gute Nutzung von Kommentaren:

  ```js example-bad
  let total = 0;

  // For-Schleife von 1 bis 4
  for (let i = 0; i < 4; i++) {
    // Fügen Sie den Wert zur Summe hinzu
    total += arr[i];
  }
  ```

- Kommentare sind auch nicht notwendig, wenn Funktionen explizite Namen haben, die beschreiben, was sie tun. Schreiben Sie:

  ```js example-good
  closeConnection();
  ```

  Schreiben Sie nicht:

  ```js example-bad
  closeConnection(); // Verbindung schließen
  ```

### Verwenden Sie einzeilige Kommentare

Einzeilige Kommentare werden mit `//` gekennzeichnet, im Gegensatz zu Blockkommentaren, die zwischen `/* … */` eingeschlossen sind.

Im Allgemeinen verwenden Sie einzeilige Kommentare, um Code zu kommentieren. Autoren müssen jede Zeile des Kommentars mit `//` markieren, damit es einfacher ist, auskommentierten Code visuell zu bemerken. Darüber hinaus ermöglicht diese Konvention das Auskommentieren von Codeteilen mit `/* … */` während der Fehlersuche.

- Lassen Sie ein Leerzeichen zwischen den Schrägstrichen und dem Kommentar. Beginnen Sie mit einem Großbuchstaben, wie bei einem Satz, aber beenden Sie den Kommentar nicht mit einem Punkt.

  ```js example-good
  // Dies ist ein gut geschriebener einzeiliger Kommentar
  ```

- Wenn ein Kommentar nicht direkt nach einer neuen Einrückungsebene beginnt, fügen Sie eine leere Zeile hinzu und dann den Kommentar. Es wird einen Codeblock erstellen und deutlich machen, worauf sich der Kommentar bezieht. Platzieren Sie Ihre Kommentare auch in separaten Zeilen vor dem Code, auf den sie sich beziehen. Dies wird im folgenden Beispiel gezeigt:

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // Berechnen Sie den Gesamtpreis
    const total = goodsPrice + shipmentPrice + taxes;

    // Erstellen und fügen Sie ein neues Absatz-Element zum Dokument hinzu
    const para = document.createElement("p");
    para.textContent = `Gesamtpreis ist ${total}`;
    document.body.appendChild(para);
  }
  ```

### Ausgabe von Protokollen

- Bei Code, der in einer Produktionsumgebung ausgeführt werden soll, müssen Sie selten Kommentare hinzufügen, wenn Sie einige Daten protokollieren. In Codebeispielen verwenden wir häufig `console.log()`, `console.error()` oder ähnliche Funktionen, um wichtige Werte auszugeben. Um dem Leser zu helfen, zu verstehen, was passieren wird, ohne den Code auszuführen, können Sie einen Kommentar _nach_ der Funktion mit dem erzeugten Protokoll hinzufügen. Schreiben Sie:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['banana', 'mango', 'orange']
  }
  ```

  Schreiben Sie nicht:

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Protokolliert: ['banana', 'mango', 'orange']
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

Kurze Kommentare sind meistens besser, versuchen Sie also, sie auf eine Zeile von 60–80 Zeichen zu beschränken. Wenn dies nicht möglich ist, verwenden Sie `//` am Anfang jeder Zeile:

```js example-good
// Dies ist ein Beispiel für einen mehrzeiligen Kommentar.
// Die imaginäre Funktion, die folgt, hat einige ungewöhnliche
// Einschränkungen, die ich nennen möchte.
// Einschränkung 1
// Einschränkung 2
```

Verwenden Sie nicht `/* … */`:

```js example-bad
/* Dies ist ein Beispiel für einen mehrzeiligen Kommentar.
  Die imaginäre Funktion, die folgt, hat einige ungewöhnliche
  Einschränkungen, die ich nennen möchte.
  Einschränkung 1
  Einschränkung 2 */
```

### Verwenden Sie Kommentare, um Ellipsen zu markieren

Das Auslassen von redundantem Code mit Ellipsen (…) ist notwendig, um Beispiele kurz zu halten. Dennoch sollten Autoren dies bedacht tun, da Entwickler häufig Beispiele in ihren Code kopieren & einfügen, und alle unsere Codebeispiele sollten gültiges JavaScript sein.

In JavaScript sollten Sie die Ellipsen (`…`) in einen Kommentar setzen. Wenn möglich, geben Sie an, welche Aktion jemand, der dieses Snippet wiederverwendet, hinzufügen soll.

Die Verwendung eines Kommentars für die Ellipsen (…) ist expliziter und verhindert Fehler, wenn ein Entwickler einen Beispielcode kopiert und einfügt. Schreiben Sie:

```js example-good
function exampleFunc() {
  // Fügen Sie hier Ihren Code hinzu
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

Dazu verwenden Sie `/* … */` in der Parameterliste. Dies ist eine Ausnahme von der Regel, ausschließlich einzeilige Kommentare (`//`) zu verwenden.

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funktionen

### Funktionsnamen

Bei Funktionsnamen verwenden Sie {{Glossary("camel_case", "camelCase")}}, beginnend mit einem Kleinbuchstaben. Verwenden Sie prägnante, menschlich lesbare und semantische Namen, wo angemessen.

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

- Wo möglich, verwenden Sie die Funktionsdeklaration anstelle von Funktionsausdrücken zur Definition von Funktionen.

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

- Wenn Sie anonyme Funktionen als Callback (eine Funktion, die an eine andere Methodenaufruf übergeben wird) verwenden, wenn Sie auf `this` nicht zugreifen müssen, verwenden Sie eine Pfeilfunktion, um den Code kürzer und übersichtlicher zu machen.

  Hier die empfohlene Vorgehensweise:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  Anstelle dessen:

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- Überlegen Sie, ob Sie vermeiden, eine Pfeilfunktion zum Zuweisen einer Funktion zu einem Bezeichner zu verwenden. Insbesondere verwenden Sie keine Pfeilfunktionen für Methoden. Verwenden Sie Funktionsdeklarationen mit dem Schlüsselwort `function`:

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

- Bei der Verwendung von Pfeilfunktionen verwenden Sie [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (auch bekannt als _Expression Body_), wo möglich:

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

Wenn [Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) erforderlich sind, wählen Sie die passende Schleifenart aus [`for(;;)`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), usw.

- Wenn Sie alle Sammlungselemente durchlaufen, vermeiden Sie die klassische `for (;;)` Schleife; bevorzugen Sie `for...of` oder `forEach()`. Beachten Sie, dass, wenn Sie eine Sammlung verwenden, die kein `Array` ist, Sie prüfen müssen, dass `for...of` tatsächlich unterstützt wird (es erfordert, dass die Variable iterierbar ist), oder dass die `forEach()`-Methode tatsächlich vorhanden ist.

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

  Verwenden Sie nicht `for (;;)`—nicht nur, dass Sie einen zusätzlichen Index `i` hinzufügen müssen, sondern Sie müssen auch die Länge des Arrays verfolgen. Dies kann fehleranfällig für Anfänger sein.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Stellen Sie sicher, dass Sie den Initialisierer richtig definieren, indem Sie das `const` Schlüsselwort für `for...of` oder `let` für die anderen Schleifen verwenden. Lassen Sie es nicht aus. Diese sind korrekte Beispiele:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  Das Beispiel unten entspricht nicht den empfohlenen Richtlinien für die Initialisierung (es erstellt implizit eine globale Variable und schlägt im Strict-Modus fehl):

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
> Erwägen Sie, überhaupt keine `for` Schleife zu verwenden. Wenn Sie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (oder für einige Operationen ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)) verwenden, sollten Sie in Betracht ziehen, stattdessen eher semantische Iterationsmethoden zu verwenden, wie [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und viele mehr.

### Kontrollstrukturen

Es gibt einen bemerkenswerten Fall, den Sie für die `if...else` Kontrollstrukturen beachten sollten. Wenn die `if` Anweisung mit einem `return` endet, fügen Sie keine `else` Anweisung hinzu.

Setzen Sie direkt nach der `if` Anweisung fort. Schreiben Sie:

```js example-good
if (test) {
  // Führen Sie etwas aus, wenn test wahr ist
  // …
  return;
}

// Führen Sie etwas aus, wenn test falsch ist
// …
```

Schreiben Sie nicht:

```js example-bad
if (test) {
  // Führen Sie etwas aus, wenn test wahr ist
  // …
  return;
} else {
  // Führen Sie etwas aus, wenn test falsch ist
  // …
}
```

### Verwenden Sie geschweifte Klammern mit Kontrollfluss-Anweisungen und Schleifen

Obwohl Kontrollfluss-Anweisungen wie `if`, `for` und `while` nicht erfordern, dass geschweifte Klammern verwendet werden, wenn der Inhalt aus einer einzigen Anweisung besteht, sollten Sie immer geschweifte Klammern verwenden. Schreiben Sie:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

Schreiben Sie nicht:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Dies verhindert, dass die geschweiften Klammern beim Hinzufügen weiterer Anweisungen vergessen werden.

### Switch-Anweisungen

Switch-Anweisungen können etwas knifflig sein.

- Fügen Sie keine `break`-Anweisung nach einer `return`-Anweisung in einem spezifischen Fall hinzu. Schreiben Sie stattdessen `return`-Anweisungen so:

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

- Verwenden Sie `default` als letzten Fall und enden Sie nicht mit einer `break`-Anweisung. Falls Sie es anders tun müssen, fügen Sie einen Kommentar hinzu, der erklärt, warum.

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

- Wenn bestimmte Zustände Ihres Programms nicht abgefangene Fehler auslösen, wird die Ausführung gestoppt und möglicherweise die Nützlichkeit des Beispiels reduziert. Deshalb sollten Sie Fehler mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block abfangen, wie unten gezeigt:

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
    console.error("Ein Fehler ist aufgetreten!");
  }
  ```

> [!NOTE]
> Bedenken Sie, dass nur _behebbare_ Fehler abgefangen und behandelt werden sollten. Alle nicht behebbaren Fehler sollten durchgelassen und den Aufrufstapel aufsteigen.

## Objekte

### Objektnamen

- Bei der Definition einer Klasse verwenden Sie _PascalCase_ (beginnend mit einem Großbuchstaben) für den Klassennamen und _camelCase_ (beginnend mit einem Kleinbuchstaben) für die Objekteigenschafts- und Methodennamen.

- Bei der Definition einer Objektinstanz, entweder ein Literal oder über einen Konstruktor, verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben, für den Instanznamen. Zum Beispiel:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Objekt-Erstellung

Zur Erstellung allgemeiner Objekte (d.h. wenn keine Klassen involviert sind) verwenden Sie Literale und keine Konstruktoren.

Zum Beispiel, tun Sie dies:

```js example-good
const object = {};
```

Erstellen Sie kein allgemeines Objekt wie dieses:

```js example-bad
const object = new Object();
```

### Objekt-Klassen

- Verwenden Sie die ES-Klassensyntax für Objekte, nicht alte Stil-Konstruktoren.

  Beispielsweise ist dies die empfohlene Vorgehensweise:

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
- Verwenden Sie, wenn möglich, die Abkürzung, indem Sie die Duplikation des Eigenschaftsbezeichners vermeiden. Schreiben Sie:

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

Dieser Abschnitt listet unsere Empfehlungen, welche Operatoren Sie verwenden und wann Sie diese verwenden sollten.

### Konditionale Operatoren

Wenn Sie einem Variablenwert eine literale Bedingung zuweisen möchten, verwenden Sie einen [konditionalen (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) anstelle einer `if...else` Anweisung. Diese Regel gilt auch für die Rückgabe eines Wertes. Schreiben Sie:

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

Der konditionale Operator ist hilfreich beim Erstellen von Zeichenfolgen zur Protokollierung von Informationen. In solchen Fällen führt die Verwendung einer regulären `if...else`-Anweisung zu langatmigen Codeblöcken für eine Nebenoperation wie die Protokollierung, was den Hauptaspekt des Beispiels verschleiert.

### Strikter Gleichheits-Operator

Bevorzugen Sie den [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dreifach gleich) und die Ungleichheitsoperatoren über den lockeren Gleichheitsoperatoren (doppelt gleich) und Ungleichheitsoperatoren.

Verwenden Sie den strikten Gleichheits- und Ungleichheitsoperator so:

```js example-good
name === "Shilpa";
age !== 25;
```

Verwenden Sie nicht die lockeren Gleichheits- und Ungleichheitsoperatoren, wie unten gezeigt:

```js example-bad
name == "Shilpa";
age != 25;
```

Wenn Sie `==` oder `!=` verwenden müssen, denken Sie daran, dass `== null` der einzige akzeptable Fall ist. Da TypeScript bei allen anderen Fällen fehlschlagen wird, möchten wir diese in unseren Beispielcodes nicht haben. Erwägen Sie das Hinzufügen eines Kommentars, um zu erklären, warum Sie es benötigen.

### Abkürzungen für Boolesche Tests

Bevorzugen Sie Abkürzungen für Boolesche Tests. Verwenden Sie zum Beispiel `if (x)` und `if (!x)`, nicht `if (x === true)` und `if (x === false)`, es sei denn, verschiedene Arten von "truthy" oder "falsy" Werten werden unterschiedlich behandelt.

## Zeichenfolgen

Zeichenfolgenliterale können in einfachen Anführungszeichen, wie in `'A string'`, oder in Doppelanführungszeichen, wie in `"A string"`, eingeschlossen werden. Machen Sie sich keine Gedanken darüber, welches Sie verwenden; Prettier hält es konsistent.

### Template-Literale

Zum Einfügen von Werten in Zeichenfolgen verwenden Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

- Hier ist ein Beispiel der empfohlenen Verwendung von Template-Literalen. Ihre Verwendung verhindert viele Platzierungsfehler.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  Verknüpfen Sie Zeichenfolgen nicht so:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- Verwenden Sie Template-Literale nicht übermäßig. Wenn es keine Ersetzungen gibt, verwenden Sie stattdessen ein normales Zeichenfolgenliteral.

## Variablen

### Variablennamen

Gute Variablennamen sind entscheidend für das Verständnis von Code.

- Verwenden Sie kurze Bezeichner und vermeiden Sie nicht übliche Abkürzungen. Gute Variablennamen sind normalerweise zwischen 3 bis 10 Zeichen lang, aber dies ist nur als Hinweis gedacht. Zum Beispiel ist `accelerometer` aussagekräftiger als die Abkürzung `acclmtr` um der Zeichenlänge willen.
- Versuchen Sie, reale relevante Beispiele zu verwenden, bei denen jede Variable klare Semantik hat. Greifen Sie nur auf Platzhalternamen wie `foo` und `bar` zurück, wenn das Beispiel einfach und erfunden ist.
- Verwenden Sie nicht die [ungarische Notation](https://en.wikipedia.org/wiki/Hungarian_notation). Präfixieren Sie den Variablennamen nicht mit seinem Typ. Schreiben Sie zum Beispiel `bought = car.buyer !== null` anstelle von `bBought = oCar.sBuyer != null` oder `name = "John Doe"` anstelle von `sName = "John Doe"`.
- Für Sammlungen vermeiden Sie, den Typ wie Liste, Array, Warteschlange im Namen hinzuzufügen. Verwenden Sie den Inhaltsnamen in der Pluralform. Zum Beispiel, für ein Array von Autos, verwenden Sie `cars` und nicht `carArray` oder `carList`. Es kann Ausnahmen geben, wie wenn Sie die abstrakte Form eines Features ohne den Kontext einer bestimmten Anwendung zeigen möchten.
- Für primitive Werte verwenden Sie _camelCase_, beginnend mit einem Kleinbuchstaben. Verwenden Sie kein `_`. Verwenden Sie, wo angemessen, prägnante, menschlich lesbare und semantische Namen. Zum Beispiel verwenden Sie `currencyName` anstatt `currency_name`.
- Vermeiden Sie den Einsatz von Artikeln und Possessivpronomen. Zum Beispiel verwenden Sie `car` statt `myCar` oder `aCar`. Es kann Ausnahmen geben, wie wenn Sie ein Feature im Allgemeinen beschreiben, ohne einen praktischen Kontext.
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
> Der einzige Ort, an dem es erlaubt ist, keine menschlich lesbaren, semantischen Namen zu verwenden, ist dort, wo eine sehr allgemein anerkannte Konvention besteht, wie die Verwendung von `i` und `j` für Schleifeniteratoren.

### Variablendeklarationen

Beim Deklarieren von Variablen und Konstanten verwenden Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), nicht [`var`](/de/docs/Web/JavaScript/Reference/Statements/var). Die folgenden Beispiele zeigen, was bei MDN Web Docs empfohlen wird und was nicht:

- Wenn eine Variable nicht neu zugewiesen wird, bevorzugen Sie `const`, so:

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

- Das unten stehende Beispiel verwendet `let`, wo es `const` sein sollte. Der Code wird funktionieren, aber wir möchten diese Verwendung in MDN Web Docs Codebeispielen vermeiden.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- Das unten stehende Beispiel verwendet `const` für eine Variable, die neu zugewiesen wird. Die Neuzuordnung wird einen Fehler auslösen.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Alles Gute zum Geburtstag!");
  ```

- Das unten stehende Beispiel verwendet `var`, was den globalen Bereich verschmutzt:

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

  Deklarieren Sie nicht mehrere Variablen in einer Zeile, indem Sie sie mit Kommas trennen oder Kettendeklaration verwenden. Vermeiden Sie es, Variablen so zu deklarieren:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 wird implizit als globale Variable erstellt; scheitert im Strict-Modus
  ```

### Typumwandlung

Vermeiden Sie implizite Typumwandlungen. Vermeiden Sie insbesondere `+val`, um einen Wert in eine Zahl zu zwingen, und `"" + val`, um ihn in eine Zeichenfolge zu zwingen. Verwenden Sie stattdessen `Number()` und `String()`, ohne `new`. Schreiben Sie:

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

Zusätzlich zu diesen JavaScript-Sprachfunktionen empfehlen wir, einige Richtlinien in Bezug auf Web-APIs im Kopf zu behalten.

### Vermeidung von Browser-Prefixen

Wenn alle wichtigen Browser (Chrome, Edge, Firefox und Safari) eine Funktion unterstützen, setzen Sie kein Prefix vor diese Funktion. Schreiben Sie:

```js example-good
const context = new AudioContext();
```

Vermeiden Sie die zusätzliche Komplexität durch Prefixe. Schreiben Sie nicht:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

Dasselbe gilt für CSS-Prefixe.

### Vermeiden Sie veraltete APIs

Wenn eine Methode, eine Eigenschaft oder eine ganze Schnittstelle veraltet ist, verwenden Sie sie nicht (außer in ihrer Dokumentation). Stattdessen verwenden Sie die moderne API.

Hier ist eine nicht-exhaustive Liste von Web-APIs, die zu vermeiden sind, und was Ihre Alternativen sind:

- Verwenden Sie `fetch()` anstelle von XHR (`XMLHttpRequest`).
- Verwenden Sie `AudioWorklet` anstelle von `ScriptProcessorNode`, in der Web Audio API.

### Verwenden Sie sichere und zuverlässige APIs

- Verwenden Sie nicht {{DOMxRef("Element.innerHTML")}}, um rein textuellen Inhalt in ein Element einzufügen; verwenden Sie stattdessen {{DOMxRef("Node.textContent")}}. Die Eigenschaft `innerHTML` führt zu Sicherheitsproblemen, wenn ein Entwickler den Parameter nicht kontrolliert. Je mehr wir als Autoren es vermeiden, sie zu verwenden, desto weniger Sicherheitsfehler entstehen, wenn ein Entwickler unseren Code kopiert und einfügt.

  Das unten stehende Beispiel demonstriert die Verwendung von `textContent`.

  ```js example-good
  const text = "Hallo an alle guten Menschen";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  Verwenden Sie nicht `innerHTML`, um _reinen Text_ in DOM-Knoten einzufügen.

  ```js example-bad
  const text = "Hallo an alle guten Menschen";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- Die Funktion `alert()` ist unzuverlässig. Sie funktioniert nicht in Live-Beispielen auf den MDN Web Docs, die innerhalb eines {{HTMLElement("iframe")}} sind. Darüber hinaus ist sie modal für das gesamte Fenster, was lästig ist. In statischen Codebeispielen verwenden Sie `console.log()` oder `console.error()`. In [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) vermeiden Sie `console.log()` und `console.error()`, weil sie nicht angezeigt werden. Verwenden Sie ein dediziertes UI-Element.

### Verwenden Sie die geeignete Protokolliermethode

- Beim Protokollieren einer Nachricht verwenden Sie `console.log()`.
- Beim Protokollieren eines Fehlers verwenden Sie `console.error()`.

## Siehe auch

[JavaScript-Sprachreferenz](/de/docs/Web/JavaScript/Reference) - Durchstöbern Sie unsere JavaScript-Referenzseiten, um einige gute, prägnante, bedeutungsvolle JavaScript-Snippets zu entdecken.
