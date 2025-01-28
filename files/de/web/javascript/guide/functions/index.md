---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 8f10db5cabb50ee778f781f96adadc8cff98761a
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich wie eine Prozedur – eine Sammlung von Anweisungen, die eine Aufgabe ausführt oder einen Wert berechnet. Damit eine Prozedur jedoch als Funktion gilt, sollte sie einige Eingaben entgegennehmen und eine Ausgabe liefern, wobei es eine offensichtliche Beziehung zwischen Eingabe und Ausgabe gibt. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Bereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [ausführliche Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details zu erfahren.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch als **Funktionsdeklaration** oder **Funktionsanweisung** bezeichnet) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und durch Kommata getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter namens `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (d.h. `number`) mit sich selbst multipliziert zurückgegeben wird. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, der `number * number` ist.

Parameter werden im Wesentlichen **by value** an Funktionen übergeben – wenn also der Code im Körper einer Funktion einem Parameter, der an die Funktion übergeben wurde, einen völlig neuen Wert zuweist, **wird die Änderung nicht global oder im Code widergespiegelt, der diese Funktion aufgerufen hat**.

Wird ein Objekt als Parameter übergeben, sind Änderungen an den Objekteigenschaften außerhalb der Funktion sichtbar, wie am folgenden Beispiel gezeigt:

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

Wird ein Array als Parameter übergeben, sind Änderungen an den Array-Werten außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, was eine _Scope-Kette_ bildet. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Siehe [Funktions-Scope und Closures](#funktions-scope_und_closures) für weitere Informationen.

### Funktionsausdrücke

Während die oben gezeigte Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` folgendermaßen definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Ein Name _kann_ jedoch bei einem Funktionsausdruck angegeben werden. Ein Name ermöglicht der Funktion, sich selbst zu referenzieren und erleichtert auch die Identifizierung der Funktion in Debugger-Stacktraces:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel definiert eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte. Dann wird sie mit einer durch einen Funktionsausdruck definierten Funktion aufgerufen:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird die folgende Funktionsdefinition `myFunc` nur dann definiert, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Neben der Definition von Funktionen, wie hier beschrieben, können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um zur Laufzeit aus einem String Funktionen zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion bedeutet nicht, dass sie _ausgeführt_ wird. Beim Definieren wird der Funktion ein Name gegeben und festgelegt, was die Funktion tun soll, wenn sie aufgerufen wird.

Das **Aufrufen** der Funktion führt die spezifizierten Aktionen mit den angegebenen Parametern tatsächlich aus. Wenn Sie zum Beispiel die Funktion `square` definieren, könnten Sie es wie folgt aufrufen:

```js
square(5);
```

Die vorhergehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Bereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoistet](#funktion_hoisting) werden (unterhalb des Aufrufs im Code erscheinen). Der Bereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert ist (oder das gesamte Programm, wenn sie auf der obersten Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel hier ist eine Funktion, die fakultativ rekursiv berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Häufig gibt es Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente zu einer Funktion variiert, oder in dem der Kontext des Funktionsaufrufs auf ein spezifisches Objekt zur Laufzeit gesetzt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ – und wiederum haben diese Objekte Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktion Hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne einen Fehler, obwohl die `square()`-Funktion aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Scopes hoisted, sodass der obige Code gleichwertig ist mit:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Funktion Hoisting funktioniert nur mit _Deklarationen_ — nicht mit _Ausdrücken_. Der folgende Code funktioniert nicht:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

### Rekursion

Eine Funktion kann auf sich selbst verweisen und sich selbst aufrufen. Sie kann entweder durch den Namen des Funktionsausdrucks oder -deklaration referenziert werden oder über jede im Scope befindliche Variable, die auf das Funktionsobjekt verweist. Beispielsweise betrachten Sie die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie auf die Funktion selbst entweder als `bar` oder `foo` verweisen und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus, und beide benötigen eine Bedingung (um eine Endlosschleife bzw. eine unendliche Rekursion in diesem Fall zu vermeiden).

Betrachten Sie zum Beispiel die folgende Schleife:

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

Es kann in eine rekursive Funktionsdeklaration umgewandelt werden, gefolgt von einem Aufruf dieser Funktion:

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

Einige Algorithmen können jedoch nicht einfache iterierende Schleifen sein. Zum Beispiel ist es einfacher, alle Knoten einer Baumstruktur zu erhalten (wie das [DOM](/de/docs/Web/API/Document_Object_Model)) über Rekursion:

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

Im Vergleich zur Funktion `loop` macht hier jeder rekursive Aufruf viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer, und dazu muss ein Stack verwendet werden.

In der Tat verwendet Rekursion selbst einen Stack: den Funktions-Stack. Das Stack-ähnliche Verhalten kann im folgenden Beispiel gesehen werden:

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

Ein {{Glossary("IIFE", "Sofort aufgerufener Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine Funktion, die als Ausdruck definiert ist, direkt aufruft. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variablen zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichwertig mit dem bloßen Schreiben des Funktionskörpers, aber es gibt ein paar einzigartige Vorteile:

- Es erstellt einen zusätzlichen [Scope](#funktions-scope_und_closures) von Variablen, der hilft, Variablen auf den Bereich zu beschränken, in dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ anstelle einer Abfolge von _Anweisungen_. Dies ermöglicht es Ihnen, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Weitere Informationen finden Sie im {{Glossary("IIFE", "IIFE")}}-Glossareintrag.

## Funktions-Scope und Closures

Funktionen bilden einen {{Glossary("Scope", "Scope")}} für Variablen—das bedeutet, dass Variablen, die innerhalb einer Funktion definiert sind, von außerhalb der Funktion nicht zugänglich sind. Der Funktionsbereich erbt von allen übergeordneten Bereichen. Zum Beispiel kann eine im globalen Bereich definierte Funktion auf alle im globalen Bereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle im übergeordneten Bereich definierten Variablen und auf jede andere Variable zugreifen, auf die die übergeordnete Funktion Zugriff hat. Andererseits haben die übergeordnete Funktion (und jeder andere übergeordnete Bereich) _keinen_ Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies bietet eine Art Kapselung für die Variablen in der inneren Funktion.

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

Wir bezeichnen den Funktionskörper auch als _Closure_. Ein Closure ist ein beliebiger Quellcode (am häufigsten eine Funktion), der auf einige Variablen verweist, und der Closure "merkt" sich diese Variablen, auch wenn der Bereich, in dem diese Variablen deklariert wurden, verlassen wurde.

Closures werden in der Regel mit [verschachtelten Funktionen](#nested_functions) illustriert, um zu zeigen, dass sie sich Variablen über die Lebensdauer des übergeordneten Bereichs hinaus merken; aber tatsächlich sind verschachtelte Funktionen nicht notwendig. Technisch gesehen bilden alle Funktionen in JavaScript Closures – einige erfassen einfach nichts, und Closures müssen nicht einmal Funktionen sein. Die Schlüsselbestandteile für ein _nützliches_ Closure sind die folgenden:

- Ein übergeordneter Bereich, der einige Variablen oder Funktionen definiert. Es sollte eine klare Lebensdauer haben, was bedeutet, dass es irgendwann mit der Ausführung enden sollte. Jeder Bereich, der nicht der globale Bereich ist, erfüllt dieses Erfordernis; dazu gehören Blöcke, Funktionen, Module und mehr.
- Ein innerer Bereich, der innerhalb des übergeordneten Bereichs definiert ist und auf einige im übergeordneten Bereich definierte Variablen oder Funktionen verweist.
- Der innere Bereich schafft es, über die Lebensdauer des übergeordneten Bereichs hinaus zu überleben. Beispielsweise wird er in einer Variablen gespeichert, die außerhalb des übergeordneten Bereichs definiert ist, oder er wird aus dem übergeordneten Bereich zurückgegeben (wenn der übergeordnete Bereich eine Funktion ist).
- Wenn Sie dann die Funktion außerhalb des übergeordneten Bereichs aufrufen, können Sie weiterhin auf die im übergeordneten Bereich definierten Variablen oder Funktionen zugreifen, obwohl der übergeordnete Bereich die Ausführung abgeschlossen hat.

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

Im obigen Code ist die Variable `name` der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen außer durch die inneren Funktionen zuzugreifen. Die inneren Variablen der inneren Funktionen agieren als sichere Speicher für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variablen zugewiesen oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](immediately_invoked_function_expressions_iife)-Pattern. Innerhalb dieses IIFE-Bereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben wird und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Bereich der zurückgegebenen unbenannten Funktion, aber nicht im Bereich irgendeines anderen Teils des Programms, sodass es keinen Weg gibt, den Wert von `apiCode` abzufragen außer über die `getCode`-Funktion.

### Mehrfachverschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl die Funktionen `B` als auch `C` bilden hier Closures. So kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Zusätzlich, da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Dies bedeutet, dass die Closures mehrere Bereiche enthalten können; sie enthalten rekursiv den Bereich der sie enthaltenden Funktionen. Dies wird als _Scope-Ketten_ bezeichnet. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel greift `C` auf `B`s `y` und `A`s `x` zu. Dies kann geschehen, weil:

1. `B` bildet ein Closure einschließlich `A` (d.h., `B` kann auf `A`s Argumente und Variablen zugreifen).
2. `C` bildet ein Closure einschließlich `B`.
3. Da `C`s Closure `B` und `B`s Closure `A` einschließt, schließt `C`s Closure auch `A` ein. Das bedeutet, dass `C` sowohl auf `B` als auch auf `A`s Argumente und Variablen zugreifen kann. Mit anderen Worten, `C` _verkettet_ die Bereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Gegenteil ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, weil `A` auf kein Argument oder eine Variable von `B` zugreifen kann, was `C` eine Variable von ist. So bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn in den Scopes eines Closures zwei Argumente oder Variablen denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Bereiche haben Vorrang. So hat der innerste Bereich den höchsten Vorrang, während der äußerste Bereich den niedrigsten hat. Dies ist die Scope-Kette. Der erste in der Kette ist der innerste Bereich, und der letzte ist der äußerste Bereich. Betrachten Sie Folgendes:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen dem Parameter `x` von `inside` und der Variablen `x` von `outside`. Die Scope-Kette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`s `x` Vorrang vor `outside`s `x`, und `20` (`inside`s `x`) wird anstelle von `10` (`outside`s `x`) zurückgegeben.

## Das arguments-Objekt verwenden

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt aufbewahrt. Innerhalb einer Funktion können Sie die an sie übergebenen Argumente wie folgt ansprechen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Also wäre das erste Argument, das an eine Funktion übergeben wird, `arguments[0]`. Die Gesamtanzahl der Argumente wird durch `arguments.length` angezeigt.

Mit dem `arguments`-Objekt können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formal zu akzeptieren erklärt ist. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen, und dann auf jedes Argument mit dem `arguments`-Objekt zugreifen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Strings zusammenfügt. Das einzige formelle Argument für die Funktion ist ein String, der die Zeichen angibt, die die zu verknüpfenden Elemente trennen. Die Funktion ist wie folgt definiert:

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

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie fügt jedes Argument zu einer String-"Liste" zusammen:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist "array-ähnlich", aber kein echtes Array. Sie ist array-ähnlich, insofern sie einen numerischen Index und eine `length`-Eigenschaft besitzt. Sie besitzt jedoch _nicht_ alle Methoden zur Array-Manipulation.

Siehe das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei besondere Arten der Parameter-Syntax: _Standardparameter_ und _Rest-Parameter_.

### Standardparameter

In JavaScript haben die Parameter einer Funktion standardmäßig den Wert `undefined`. In manchen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

Früher bestand die allgemeine Strategie zum Festlegen von Standardwerten darin, Parameterwerte im Körper der Funktion zu testen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` übergeben wird, wäre sein Wert `undefined`, wenn `a*b` ausgewertet wird, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparametern_ ist eine manuelle Prüfung im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf setzen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Rest-Parameter

Die [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array zu repräsentieren.

Im folgenden Beispiel verwendet die Funktion `multiply` _Rest-Parameter_, um Argumente von der zweiten bis zum Ende zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch als _fat arrow_ bezeichnet, um ihn von einer hypothetischen `->`-Syntax in zukünftigem JavaScript zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und besitzt kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren haben die Einführung von Pfeilfunktionen beeinflusst: _kürzere Funktionen_ und _nicht-bindung_ von `this`.

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

Bis zu den Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufe, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als weniger ideal mit einem objektorientierten Stil der Programmierung.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der korrekte `this`-Wert an die Funktion `growUp()` übergeben wird.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. So hat im folgenden Code das `this` innerhalb der Funktion, die an `setInterval` übergeben wird, den gleichen Wert wie `this` in der umgebenden Funktion:

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
