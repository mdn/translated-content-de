---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eines der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ähnelt einer Prozedur—einem Satz von Anweisungen, der eine Aufgabe ausführt oder einen Wert berechnet. Damit eine Prozedur jedoch als Funktion qualifiziert, sollte sie einige Eingaben übernehmen und eine Ausgabe zurückgeben, bei der eine offensichtliche Beziehung zwischen Eingabe und Ausgabe besteht. Um eine Funktion zu verwenden, müssen Sie sie in dem Geltungsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweifte Klammern, `{ /* … */ }`.

Beispielsweise definiert der folgende Code eine einfache Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter namens `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (also `number`) mit sich selbst multipliziert zurückgegeben wird. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung spezifiziert den Wert, der von der Funktion zurückgegeben wird, was `number * number` ist.

Parameter werden im Wesentlichen **nach Wert** an Funktionen übergeben — daher, wenn der Code innerhalb des Körpers einer Funktion einem Parameter, der an die Funktion übergeben wurde, einen komplett neuen Wert zuweist, **wird die Änderung nicht global oder im Code, der diese Funktion aufgerufen hat, widergespiegelt**.

Wenn Sie ein Objekt als Parameter übergeben, sind Änderungen, die die Funktion an den Eigenschaften des Objekts vornimmt, außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
```

Wenn Sie ein Array als Parameter übergeben, sind Änderungen, die die Funktion an den Werten des Arrays vornimmt, außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

### Funktionsausdrücke

Während die obige Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` wie folgt definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Ein Name _kann_ jedoch mit einem Funktionsausdruck angegeben werden. Ein Name ermöglicht der Funktion, sich selbst zu referenzieren, und vereinfacht auch die Identifizierung der funktion in den Stack-Spuren eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn man eine Funktion als Argument an eine andere Funktion übergibt. Das folgende Beispiel zeigt eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Im folgenden Code erhält die Funktion eine Funktion, die durch einen Funktionsausdruck definiert wird, und führt sie für jedes Element des Arrays aus, das als zweites Argument übergeben wird:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
```

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird die folgende Funktionsdefinition `myFunc` nur dann definiert, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zur Definition von Funktionen wie hier beschrieben, können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden im Abschnitt [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht _aus_. Das Definieren vergibt der Funktion einen Namen und gibt an, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt die angegebenen Aktionen mit den angegebenen Parametern tatsächlich aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorhergehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen im _Geltungsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoisted](<#funktion-heebung_(hoisting)>) werden (unterhalb des Aufrufs im Code erscheinen). Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument nimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel, hier ist eine Funktion, die rekursiv Fakultäten berechnet:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

Sie könnten dann die Fakultäten von `1` bis `5` wie folgt berechnen:

```js
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

Es gibt andere Methoden, um Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente einer Funktion variieren, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt gesetzt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ — und wiederum haben diese Objekte Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktion-Heebung (Hoisting)

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, trotz der Tatsache, dass die Funktion `square()` aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Geltungsbereichs verschiebt, sodass der obige Code äquivalent ist zu:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Die Heebung funktioniert nur bei Funktions*deklarationen* — nicht bei Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Funktionsumfang

Variablen, die innerhalb einer Funktion definiert sind, können von außerhalb der Funktion nicht zugegriffen werden, da die Variable nur im Geltungsbereich der Funktion definiert ist. Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die innerhalb des Geltungsbereichs definiert sind, in dem sie definiert ist.

Mit anderen Worten, eine Funktion, die im globalen Geltungsbereich definiert ist, kann auf alle im globalen Geltungsbereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle in ihrer übergeordneten Funktion definierten Variablen zugreifen und auf jede andere Variable, auf die die übergeordnete Funktion Zugriff hat.

```js
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
```

## Umfang und der Funktionsstack

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Es gibt drei Möglichkeiten, wie eine Funktion sich selbst referenzieren kann:

1. Der Name der Funktion
2. [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. Eine im Geltungsbereich befindliche Variable, die auf die Funktion verweist

Zum Beispiel, betrachten Sie folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers sind die folgenden alle äquivalent:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Eine Funktion, die sich selbst aufruft, wird _rekursive Funktion_ genannt. Auf gewisse Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrmals aus, und beide erfordern eine Bedingung (um eine Endlosschleife zu vermeiden, oder besser gesagt, unendliche Rekursion in diesem Fall).

Zum Beispiel, betrachten Sie die folgende Schleife:

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

Sie kann in eine rekursive Funktionsdeklaration umgewandelt werden, gefolgt von einem Aufruf dieser Funktion:

```js
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Einige Algorithmen können jedoch nicht einfach iterativ laufen. Zum Beispiel ist es einfacher, alle Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) durch Rekursion zu erhalten:

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

Im Vergleich zu der Funktion `loop` führt jeder rekursive Aufruf hier viele rekursive Aufrufe aus.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven zu konvertieren, aber die Logik ist oft viel komplexer, und es erfordert die Verwendung eines Stacks.

Tatsächlich verwendet Rekursion selbst einen Stack: den Funktionsstack. Das Stapelverhalten kann im folgenden Beispiel gesehen werden:

```js
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

### Verschachtelte Funktionen und Closures

Sie können eine Funktion in eine andere Funktion verschachteln. Die verschachtelte (innere) Funktion ist privat für ihre enthaltende (äußere) Funktion.

Sie bildet auch eine _Closure_. Eine Closure ist ein Ausdruck (häufig eine Funktion), die freie Variablen zusammen mit einer Umgebung, die diese Variablen bindet (die den Ausdruck "schließt"), umfassen kann.

Da eine verschachtelte Funktion eine Closure ist, bedeutet dies, dass eine verschachtelte Funktion die Argumente und Variablen ihrer enthaltendender Funktion "erben" kann. Mit anderen Worten, die innere Funktion enthält den Geltungsbereich der äußeren Funktion.

Zusammenfassend:

- Die innere Funktion kann nur von Anweisungen in der äußeren Funktion aufgerufen werden.
- Die innere Funktion bildet eine Closure: die innere Funktion kann die Argumente und Variablen der äußeren Funktion verwenden, während die äußere Funktion die Argumente und Variablen der inneren Funktion nicht verwenden kann.

Das folgende Beispiel zeigt verschachtelte Funktionen:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
```

Da die innere Funktion eine Closure bildet, können Sie die äußere Funktion aufrufen und Argumente sowohl für die äußere als auch die innere Funktion angeben:

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```

### Erhaltung von Variablen

Beachten Sie, wie `x` erhalten bleibt, wenn `inside` zurückgegeben wird. Eine Closure muss die Argumente und Variablen in allen Geltungsbereichen, auf die sie verweist, bewahren. Da jeder Aufruf potenziell unterschiedliche Argumente liefert, wird für jeden Aufruf von `outside` eine neue Closure erstellt. Der Speicher kann nur freigegeben werden, wenn die zurückgegebene `inside`-Funktion nicht mehr zugänglich ist.

Dies ist nicht anders als das Speichern von Referenzen in anderen Objekten, ist aber oft weniger offensichtlich, weil man die Referenzen nicht direkt setzt und sie nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl `B` als auch `C` bilden hier Closures. `B` kann also auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Außerdem, da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Somit können die Closures mehrere Geltungsbereiche enthalten; sie enthalten rekursiv den Geltungsbereich der Funktionen, die sie enthalten. Dies nennt man _Scope Chaining_. (Warum es "Chaining" genannt wird, wird später erklärt.)

Betrachten Sie das folgende Beispiel:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)
```

In diesem Beispiel greift `C` auf `B`'s `y` und `A`'s `x` zu.

Dies kann getan werden, weil:

1. `B` bildet eine Closure einschließlich `A` (d. h. `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` bildet eine Closure einschließlich `B`.
3. Da `C`'s Closure `B` und `B`'s Closure `A` einbezieht, schließt `C`'s Closure auch `A` ein. Das bedeutet `C` kann auf _sowohl_ `B` _als auch_ `A`'s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _verknüpft_ die Geltungsbereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte trifft jedoch nicht zu. `A` kann nicht auf `C` zugreifen, da `A` auf keine Argumente oder Variablen von `B` zugreifen kann, von denen `C` eine Variable ist. So bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen einer Closure denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Geltungsbereiche haben Vorrang. So hat der innerste Geltungsbereich die höchste Priorität, während der äußerste Geltungsbereich die niedrigste Priorität hat. Dies ist die Geltungskette. Der erste in der Kette ist der innerste Geltungsbereich, und der letzte ist der äußerste Geltungsbereich. Betrachten Sie folgendes:

```js
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
```

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und tritt zwischen `inside`'s Parameter `x` und `outside`'s Variable `x` auf. Die Geltungskette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`'s `x` Vorrang vor `outside`'s `x`, und `20` (`inside`'s `x`) wird zurückgegeben statt `10` (`outside`'s `x`).

## Closures

Closures sind eines der mächtigsten Funktionen von JavaScript. JavaScript erlaubt das Verschachteln von Funktionen und gewährt der inneren Funktion vollen Zugriff auf alle innerhalb der äußeren Funktion definierten Variablen und Funktionen (und alle anderen Variablen und Funktionen, auf die die äußere Funktion Zugriff hat).

Die äußere Funktion hat jedoch _keinen_ Zugriff auf die innerhalb der inneren Funktion definierten Variablen und Funktionen. Dies bietet eine Art Kapselung für die Variablen der inneren Funktion.

Außerdem, da die innere Funktion Zugriff auf den Geltungsbereich der äußeren Funktion hat, bleiben die in der äußeren Funktion definierten Variablen und Funktionen länger bestehen als die Ausführungsdauer der äußeren Funktion, wenn die innere Funktion es schafft, über das Leben der äußeren Funktion hinaus zu bestehen. Eine Closure wird erstellt, wenn die innere Funktion irgendwie einem Geltungsbereich außerhalb der äußeren Funktion zugänglich gemacht wird.

```js
// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
```

Es kann viel komplexer sein als der obige Code. Ein Objekt, das Methoden zum Manipulieren der inneren Variablen der äußeren Funktion enthält, kann zurückgegeben werden.

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
```

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keinen anderen Weg, um auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicher für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten für die Arbeit der inneren Funktionen bereit. Die Funktionen müssen nicht einmal einer Variablen zugewiesen werden oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

> [!NOTE]
> Es gibt einige Fallstricke, auf die Sie achten sollten, wenn Sie Closures verwenden!
>
> Wenn eine geschlossene Funktion eine Variable mit demselben Namen wie eine Variable im äußeren Geltungsbereich definiert, gibt es keine Möglichkeit, auf die Variable im äußeren Geltungsbereich zuzugreifen. (Die innere Geltungsbereichsvariable "überschreibt" die äußere, bis das Programm den inneren Geltungsbereich verlässt. Das kann als [Namenskonflikt](#namenskonflikte) betrachtet werden.)
>
> ```js example-bad
> const createPet = function (name) {
>   // Die äußere Funktion definiert eine Variable namens "name".
>   return {
>     setName(name) {
>       // Die eingeschlossene Funktion definiert auch eine Variable namens "name".
>       name = name; // Wie greifen wir auf das "name" der äußeren Funktion zu?
>     },
>   };
> };
> ```

## Verwendung des arguments-Objekts

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie die übergebenen Argumente wie folgt ansprechen:

```js
arguments[i];
```

wobei `i` die Ordnungszahl des Arguments ist, beginnend bei `0`. Das erste an eine Funktion übergebene Argument wäre also `arguments[0]`. Die Gesamtnummer der Argumente wird durch `arguments.length` angezeigt.

Mit dem `arguments`-Objekt können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formal angegeben ist, zu akzeptieren. Dies ist oft nützlich, wenn Sie nicht im Voraus wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächliche Anzahl der an die Funktion übergebenen Argumente zu bestimmen und dann jedes Argument mithilfe des `arguments`-Objekts ansprechen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Strings zusammenfügt. Das einzige formelle Argument für die Funktion ist ein String, der die Zeichen definiert, die die Elemente, die zusammengefügt werden sollen, trennen. Die Funktion ist wie folgt definiert:

```js
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

Sie können eine beliebige Anzahl von Argumenten an diese Funktion übergeben, und sie fügt jedes Argument in eine String-"Liste" zusammen:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die Variable `arguments` ist "array-ähnlich", aber kein Array. Sie ist array-ähnlich, da sie einen nummerierten Index und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Sehen Sie sich das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen an.

## Funktionsparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Default-Parameter_ und _Rest-Parameter_.

### Default-Parameter

In JavaScript sind die Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau dies tun Default-Parameter.

In der Vergangenheit war die allgemeine Strategie zur Festlegung von Defaults, die Parametervariablen im Funktionskörper zu testen und ihnen im Fall von `undefined` einen Wert zuzuweisen.

Im folgenden Beispiel wäre, wenn kein Wert für `b` angegeben wird, sein Wert `undefined` bei der Auswertung von `a*b`, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Default-Parametern_ ist eine manuelle Überprüfung im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf festlegen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Rest-Parameter

Die [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Rest-Parameter_, um Argumente von dem zweiten bis zum Ende zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Arrow Function Expression](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _Fat Arrow_ genannt, um es von einer hypothetischen `->`-Syntax in zukünftigen JavaScripts zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Pfeilfunktionen: _kürzere Funktionen_ und _keine Bindung_ von `this`.

### Kürzere Funktionen

In einigen funktionalen Mustern sind kürzere Funktionen willkommen. Vergleichen Sie:

```js
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```

### Kein separates this

Vor Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als suboptimal in einem objektorientierten Stil der Programmierung.

```js
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();
```

In ECMAScript 3/5 wurde dieses Problem durch das Zuweisen des Werts in `this` an eine Variable behoben, die geschlossen werden konnte.

```js
function Person() {
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der richtige `this`-Wert an die `growUp()`-Funktion übergeben wird.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. Daher hat im folgenden Code `this` innerhalb der Funktion, die an `setInterval` übergeben wird, denselben Wert wie `this` in der umgebenden Funktion:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();
```

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}
