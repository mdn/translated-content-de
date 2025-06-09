---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 6bd53fd47bae780dd5bb5b6e711b0a0181ffe232
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eines der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich einer Prozedur—ein Satz von Anweisungen, der eine Aufgabe ausführt oder einen Wert berechnet, aber damit eine Prozedur als Funktion qualifiziert, sollte sie eine Eingabe nehmen und eine Ausgabe zurückgeben, wobei es eine offensichtliche Beziehung zwischen der Eingabe und der Ausgabe gibt. Um eine Funktion zu verwenden, müssen Sie sie an einer Stelle im Geltungsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Die JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweifte Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter, genannt `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (also `number`) mit sich selbst multipliziert zurückgegeben werden soll. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, der `number * number` ist.

Parameter werden im Wesentlichen **wertmäßig** an Funktionen übergeben — also wenn der Code innerhalb des Funktionskörpers einem übergebenen Parameter einen völlig neuen Wert zuweist, **wird diese Änderung weder global noch im Code, der die Funktion aufgerufen hat, reflektiert**.

Wenn Sie ein Objekt als Parameter übergeben, sind Änderungen, die die Funktion an den Eigenschaften des Objekts vornimmt, außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"
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

Funktionsdeklarationen und -ausdrücke können verschachtelt sein, was eine _Scope-Kette_ bildet. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Siehe [Funktions-Scope und Closures](#funktions-scope_und_closures) für mehr Informationen.

### Funktionsausdrücke

Während die oben erklärte Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` wie folgt definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Es _kann_ jedoch ein Name mit einem Funktionsausdruck angegeben werden. Die Angabe eines Namens ermöglicht der Funktion, sich selbst zu referenzieren und macht es zudem einfacher, die Funktion in den Stack-Traces eines Debuggers zu identifizieren:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben werden soll. Das folgende Beispiel definiert eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten soll. Dann wird sie mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert wird:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]
```

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel definiert die folgende Funktionsdefinition `myFunc` nur, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zur Funktionsdefinition, wie hier beschrieben, können Sie auch den {{jsxref("Function")}} Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht aus. Das Definieren benennt die Funktion und legt fest, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorhergehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Geltungsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoben](#funktionshoisting) werden (im Code unterhalb des Aufrufs erscheinen). Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert wird).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel, hier ist eine Funktion, die rekursiv Fakultäten berechnet:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

Dann könnten Sie die Fakultäten von `1` bis `5` wie folgt berechnen:

```js
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente zu einer Funktion variiert, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt gesetzt werden muss.

Tatsächlich sind _Funktionen selbst Objekte_ — und diese Objekte haben wiederum Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktionshoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, trotz dass die Funktion `square()` vor ihrer Deklaration aufgerufen wird. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Geltungsbereichs hebt, sodass der obige Code gleichbedeutend ist mit:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Das Funktionshoisting funktioniert nur mit Funktions*deklarationen* — nicht mit Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Sie kann entweder durch den Namen des Funktionsausdrucks oder der Deklaration referenziert werden, oder durch jede im Geltungsbereich befindliche Variable, die auf das Funktionsobjekt verweist. Zum Beispiel, betrachten Sie die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie die Funktion selbst entweder als `bar` oder `foo` referenzieren und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus und beide benötigen eine Bedingung (um eine Endlosschleife oder eher eine unendliche Rekursion in diesem Fall zu vermeiden).

Zum Beispiel, betrachten Sie die folgende Schleife:

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

Diese kann in eine rekursive Funktionsdeklaration überführt werden, gefolgt von einem Aufruf dieser Funktion:

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

Jedoch können einige Algorithmen nicht als einfache iterative Schleifen umgesetzt werden. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie das [DOM](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (const child of node.childNodes) {
    walkTree(child);
  }
}
```

Im Vergleich zur Funktion `loop` macht jeder rekursive Aufruf hier viele rekursive Aufrufe selbst.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer, und dazu ist die Verwendung eines Stacks erforderlich.

Tatsächlich verwendet die Rekursion selbst einen Stack: den Funktionsstack. Das stapelartige Verhalten kann im folgenden Beispiel gesehen werden:

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

### Sofort aufgerufene Funktionsausdrücke (IIFE)

Ein {{Glossary("IIFE", "sofortiger Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine als Ausdruck definierte Funktion direkt aufruft. Es sieht folgendermaßen aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variable zu speichern, wird die Funktion sofort aufgerufen. Das ist fast gleichbedeutend mit dem direkten Schreiben des Funktionskörpers, aber es gibt einige einzigartige Vorteile:

- Es schafft einen zusätzlichen [Geltungsbereich](#funktions-scope_und_closures) für Variablen, was hilft, Variablen auf den Ort zu beschränken, an dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ statt einer Abfolge von _Anweisungen_. Dies ermöglicht es Ihnen, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Für weitere Informationen, siehe den {{Glossary("IIFE", "IIFE")}} Glossareintrag.

## Funktions-Scope und Closures

Funktionen bilden einen {{Glossary("Scope", "Geltungsbereich")}} für Variablen—das bedeutet, dass Variablen, die innerhalb einer Funktion definiert sind, von außerhalb der Funktion nicht zugänglich sind. Der Funktions-Geltungsbereich erbt von allen oberen Geltungsbereichen. Zum Beispiel kann eine im globalen Geltungsbereich definierte Funktion auf alle im globalen Geltungsbereich definierten Variablen zugreifen. Eine innerhalb einer anderen Funktion definierte Funktion kann auch auf alle in ihrer übergeordneten Funktion definierten Variablen zugreifen und auf alle anderen Variablen, auf die die übergeordnete Funktion Zugriff hat. Andererseits hat die übergeordnete Funktion (und jeder andere übergeordnete Geltungsbereich) _keinen_ Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies bietet eine Art der Kapselung der Variablen in der inneren Funktion.

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

### Closures

Wir bezeichnen den Funktionskörper auch als _Closure_. Ein Closure ist jedes Stück Quellcode (meist eine Funktion), das sich auf einige Variablen bezieht und das Closure „merkt“ sich diese Variablen, selbst wenn der Geltungsbereich, in dem diese Variablen deklariert wurden, verlassen wurde.

Closures werden üblicherweise mit verschachtelten Funktionen veranschaulicht, um zu zeigen, dass sie sich über die Lebenszeit ihres übergeordneten Geltungsbereichs hinaus an Variablen erinnern; aber in der Tat sind verschachtelte Funktionen nicht notwendig. Technisch gesehen bilden alle Funktionen in JavaScript Closures—einige erfassen nur nichts, und Closures müssen nicht einmal Funktionen sein. Die Schlüsselelemente für ein _nützliches_ Closure sind die folgenden:

- Ein übergeordneter Geltungsbereich, der einige Variablen oder Funktionen definiert. Er sollte eine klare Lebenszeit haben, was bedeutet, dass er irgendwann die Ausführung beenden sollte. Jeder Geltungsbereich, der nicht der globale Geltungsbereich ist, erfüllt diese Anforderung; dies umfasst Blöcke, Funktionen, Module und mehr.
- Ein innerer Geltungsbereich, der innerhalb des übergeordneten Geltungsbereichs definiert ist und sich auf einige im übergeordneten Geltungsbereich definierte Variablen oder Funktionen bezieht.
- Der innere Geltungsbereich schafft es, über die Lebenszeit des übergeordneten Geltungsbereichs hinaus zu überdauern. Zum Beispiel wird er in einer Variablen gespeichert, die außerhalb des übergeordneten Geltungsbereichs definiert ist, oder er wird aus dem übergeordneten Geltungsbereich zurückgegeben (wenn der übergeordnete Geltungsbereich eine Funktion ist).
- Wenn Sie die Funktion außerhalb des übergeordneten Geltungsbereichs aufrufen, können Sie immer noch auf die im übergeordneten Geltungsbereich definierten Variablen oder Funktionen zugreifen, obwohl der übergeordnete Geltungsbereich die Ausführung beendet hat.

Das folgende ist ein typisches Beispiel für ein Closure:

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

Im obigen Code sind die `name`-Variablen der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keinen anderen Weg, auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Diese inneren Variablen der inneren Funktionen fungieren als sichere Speicherorte für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variablen zugewiesen werden oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife)-Muster. Innerhalb dieses IIFE-Geltungsbereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben wird und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Geltungsbereich der zurückgegebenen unbenannten Funktion, jedoch nicht im Geltungsbereich eines anderen Teils des Programms, so dass es keine Möglichkeit gibt, den Wert von `apiCode` außer über die `getCode`-Funktion zu lesen.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Beide Funktionen `B` und `C` bilden hier Closures. So kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Zusätzlich, da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Daher können die Closures mehrere Geltungsbereiche enthalten; sie enthalten rekursiv den Geltungsbereich der Funktionen, die es enthalten. Dies wird _Scope-Kettung_ genannt. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel greift `C` auf `B`s `y` und `A`s `x` zu. Dies ist möglich, weil:

1. `B` bildet ein Closure einschließlich `A` (d.h. `B` kann auf `A`s Argumente und Variablen zugreifen).
2. `C` bildet ein Closure einschließlich `B`.
3. Da `C`s Closure `B` einschließt und `B`s Closure `A` einschließt, schließt `C`s Closure auch `A` ein. Das bedeutet, `C` kann auf _sowohl_ `B` _als auch_ `A`s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _verkettet_ die Bereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte trifft jedoch nicht zu. `A` kann nicht auf `C` zugreifen, weil `A` nicht auf irgendein Argument oder eine Variable von `B` zugreifen kann, die eine Variable von `C` ist. Daher bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen eines Closures denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Geltungsbereiche haben Vorrang. Daher hat der innerste Geltungsbereich den höchsten Vorrang, während der äußerste Geltungsbereich den niedrigsten Vorrang hat. Dies ist die Geltungskette. Der Erste in der Kette ist der innerste Geltungsbereich, und der Letzte ist der äußerste Geltungsbereich. Betrachten Sie das folgende:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen `inside`s Parameter `x` und `outside`s Variable `x`. Die Geltungskette hier ist `inside` => `outside` => globales Objekt. Daher erhält `inside`s `x` Vorrang über `outside`s `x`, und `20` (`inside`s `x`) wird zurückgegeben statt `10` (`outside`s `x`).

## Verwenden des arguments-Objekts

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie auf die an sie übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Also wäre das erste an eine Funktion übergebene Argument `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angegeben.

Durch die Verwendung des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formell deklariert ist anzunehmen. Dies ist oft nützlich, wenn Sie nicht im Voraus wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen, und dann auf jedes Argument mithilfe des `arguments`-Objekts zugreifen.

Zum Beispiel, betrachten Sie eine Funktion, die mehrere Strings zusammensetzt. Das einzige formale Argument für die Funktion ist ein String, der die Zeichen angibt, die die Elemente, die zu verbinden sind, trennen. Die Funktion wird wie folgt definiert:

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
> Die `arguments`-Variable ist "array-ähnlich", aber kein Array. Sie ist array-ähnlich, da sie einen nummerierten Index und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Siehe das {{jsxref("Function")}}-Objekt im JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind Parameter von Funktionen standardmäßig auf `undefined` gesetzt. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

In der Vergangenheit war die allgemeine Strategie zum Setzen von Standardwerten das Testen von Parameterwerten im Funktionskörper und das Zuweisen eines Werts, wenn sie `undefined` sind.

Im folgenden Beispiel wäre `b`s Wert `undefined`, wenn keine Angabe gemacht würde, wenn `a*b` berechnet wird, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparametern_ ist ein manueller Check im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf angeben:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax erlaubt es uns, eine unbestimmte Anzahl von Argumenten als ein Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente vom zweiten bis zum Ende zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow-Funktionen

Ein [Arrow-Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fat arrow_ genannt, um es von einer hypothetischen `->`-Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Arrow-Funktionen sind immer anonym.

Zwei Faktoren haben die Einführung von Arrow-Funktionen beeinflusst: _kürzere Funktionen_ und _nichthandhabung_ von `this`.

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

Bis zu den Arrow-Funktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Falle eines Konstruktors, undefined in [striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als weniger als ideal in einem objektorientierten Programmierstil.

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

In ECMAScript 3/5 wurde dieses Problem behoben, indem der Wert in `this` einer Variablen zugewiesen wurde, die geschlossen werden konnte.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, so dass der richtige `this`-Wert an die `growUp()`-Funktion übergeben wird.

Eine Arrow-Funktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. In folgendem Code hat das `this` innerhalb der an `setInterval` übergebenen Funktion denselben Wert wie `this` in der umgebenden Funktion:

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
