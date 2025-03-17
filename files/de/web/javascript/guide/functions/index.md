---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind einer der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich wie eine Prozedur - eine Reihe von Anweisungen, die eine Aufgabe ausführen oder einen Wert berechnen. Damit eine Prozedur als Funktion gilt, sollte sie jedoch eine Eingabe erhalten und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingabe und Ausgabe besteht. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Geltungsbereich definieren, aus dem Sie sie aufrufen möchten.

Sehen Sie auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function) Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste der Parameter der Funktion, eingeklammert und durch Kommata getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweifte Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter an, der `number` genannt wird. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (d.h. `number`) mit sich selbst multipliziert zurückgegeben wird. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung gibt den von der Funktion zurückgegebenen Wert an, welcher `number * number` ist.

Parameter werden im Wesentlichen **by value** an Funktionen übergeben — wenn der Code innerhalb des Funktionskörpers einem übergebenen Parameter einen völlig neuen Wert zuweist, **wird die Änderung weder global noch im Aufrufer der Funktion reflektiert**.

Wenn Sie ein Objekt als Parameter übergeben, und die Funktion die Eigenschaften des Objekts ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie das folgende Beispiel zeigt:

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

Wenn Sie ein Array als Parameter übergeben, und die Funktion die Werte des Arrays ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie das folgende Beispiel zeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, was eine _Geltungsketten_ bildet. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Weitere Informationen finden Sie unter [Funktion Geltungsbereiche und Closures](#funktionsbereiche_und_closures).

### Funktionsausdrücke

Während die oben stehende Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` definiert werden als:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Ein Name _kann_ jedoch mit einem Funktionsausdruck angegeben werden. Das Angeben eines Namens erlaubt es der Funktion, sich selbst zu referenzieren, und erleichtert auch das Erkennen der Funktion in den Stack-Traces eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel definiert eine `map` Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte. Dann wird sie mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert ist:

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

In JavaScript kann eine Funktion auf einer Bedingung basieren. Zum Beispiel definiert die folgende Funktionsdefinition `myFunc` nur dann, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zur Definition von Funktionen, wie hier beschrieben, können Sie auch den {{jsxref("Function")}} Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Weitere Informationen zu Objekten und Methoden finden Sie unter [Mit Objekten arbeiten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Eine Funktion zu _definieren_ führt sie nicht _aus_. Sie zu definieren benennt die Funktion und spezifiziert, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt die angegebenen Aktionen mit den angegebenen Parametern tatsächlich aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die obige Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _in Geltung_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [hochgehoben](#funktionshoisting) werden (unter dem Aufruf im Code erscheinen). Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf der obersten Ebene deklariert wird).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()` Funktion (definiert in [Mit Objekten arbeiten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel, hier ist eine Funktion, die fakultativ rekursiv berechnet:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente einer Funktion variiert, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein spezifisches Objekt eingestellt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ — und wiederum haben diese Objekte Methoden. (Siehe das {{jsxref("Function")}} Objekt.) Die [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) Methoden können verwendet werden, um dieses Ziel zu erreichen.

### Funktionshoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code wird ohne Fehler ausgeführt, obwohl die `square()` Funktion aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an die Spitze des aktuellen Geltungsbereichs hebt, sodass der obige Code äquivalent ist zu:

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

Eine Funktion kann sich selbst referenzieren und aufrufen. Es kann durch den Namen des Funktionsausdrucks oder der Deklaration referenziert werden oder durch jede im Geltungsbereich befindliche Variable, die auf das Funktionsobjekt verweist. Zum Beispiel, betrachten Sie die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie die Funktion selbst entweder als `bar` oder `foo` referenzieren und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen den gleichen Code mehrfach aus, und beide benötigen eine Bedingung (um eine Endlosschleife bzw. unendliche Rekursion in diesem Fall zu vermeiden).

Betrachten Sie zum Beispiel die folgende Schleife:

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

Einige Algorithmen können jedoch keine einfachen iterativen Schleifen sein. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

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

Im Vergleich zur Funktion `loop` macht hier jeder rekursive Aufruf selbst viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer und erfordert die Verwendung eines Stacks.

Tatsächlich verwendet die Rekursion selbst einen Stack: den Funktionsstack. Das stackartige Verhalten kann im folgenden Beispiel gesehen werden:

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

Ein {{Glossary("IIFE", "sofort aufgerufenes Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine als Ausdruck definierte Funktion direkt aufruft. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variable zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichbedeutend damit, den Funktionskörper einfach zu schreiben, bietet jedoch einige einzigartige Vorteile:

- Es erzeugt einen zusätzlichen [Geltungsbereich](#funktionsbereiche_und_closures) von Variablen, was hilft, Variablen an dem Ort zu begrenzen, an dem sie nützlich sind.
- Es ist nun ein _Ausdruck_ anstelle einer Sequenz von _Anweisungen_. Dies ermöglicht es, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Weitere Informationen finden Sie im {{Glossary("IIFE", "IIFE")}} Glossareintrag.

## Funktionsbereiche und Closures

Funktionen bilden einen {{Glossary("Scope", "Geltungsbereich")}} für Variablen—das bedeutet, Variablen, die innerhalb einer Funktion definiert werden, können nicht von außerhalb der Funktion zugegriffen werden. Der Funktionsbereich erbt von allen oberen Geltungsbereichen. Zum Beispiel kann eine in einem globalen Geltungsbereich definierte Funktion auf alle im globalen Geltungsbereich definierten Variablen zugreifen. Eine Funktion, die in einer anderen Funktion definiert ist, kann auch auf alle in ihrer Elternfunktion definierten Variablen zugreifen und auf andere Variablen, auf die die Elternfunktion Zugriff hat. Die Elternfunktion (und jeder andere Elterngeltungsbereich) hat jedoch _keinen_ Zugriff auf die in der inneren Funktion definierten Variablen und Funktionen. Dies bietet eine Art von Kapselung für die Variablen in der inneren Funktion.

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

Wir bezeichnen den Funktionskörper auch als _Closure_. Ein Closure ist jede Quellcodeeinheit (meistens eine Funktion), die auf einige Variablen verweist, und das Closure "merkt sich" diese Variablen, auch wenn der Geltungsbereich, in dem diese Variablen deklariert wurden, verlassen wurde.

Closures werden normalerweise mit [verschachtelten Funktionen](#nested_functions) illustriert, um zu zeigen, dass sie sich an Variablen über die Lebensdauer des Elterngeltungsbereichs hinaus erinnern; aber tatsächlich sind verschachtelte Funktionen nicht notwendig. Technisch gesehen bilden alle Funktionen in JavaScript Closures—manche erfassen nur nichts, und Closures müssen nicht einmal Funktionen sein. Die Schlüsselinhaltsstoffe für ein _nützliches_ Closure sind die folgenden:

- Ein Elterngeltungsbereich, der einige Variablen oder Funktionen definiert. Es sollte eine klare Lebensdauer haben, das heißt, es sollte zu einem bestimmten Punkt die Ausführung beenden. Jeder Geltungsbereich, der nicht der globale Geltungsbereich ist, erfüllt dieses Erfordernis; dies beinhaltet Blöcke, Funktionen, Module und mehr.
- Ein innerer Geltungsbereich, der im Elterngeltungsbereich definiert ist und auf einige im Elterngeltungsbereich definierte Variablen oder Funktionen verweist.
- Der innere Geltungsbereich überlebt über die Lebensdauer des Elterngeltungsbereichs hinaus. Zum Beispiel, es wird in einer außerhalb des Elterngeltungsbereichs definierten Variable gespeichert oder es wird vom Elterngeltungsbereich zurückgegeben (wenn der Elterngeltungsbereich eine Funktion ist).
- Dann, wenn Sie die Funktion außerhalb des Elterngeltungsbereichs aufrufen, können Sie immer noch auf die Variablen oder Funktionen zugreifen, die im Elterngeltungsbereich definiert wurden, selbst wenn der Elterngeltungsbereich die Ausführung beendet hat.

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

Es kann viel komplexer sein als der obige Code. Ein Objekt, das Methoden zum Manipulieren der internen Variablen der äußeren Funktion enthält, kann zurückgegeben werden.

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

Im obigen Code ist die `name` Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen außer durch die inneren Funktionen zuzugreifen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicher für die äußeren Argumente und Variablen. Sie speichern "beständige" und "gekapselte" Daten für die inneren Funktionen zum Arbeiten. Die Funktionen müssen nicht einmal einer Variable zugewiesen werden oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife) Muster. Innerhalb dieses IIFE-Geltungsbereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Geltungsbereich der zurückgegebenen unbenannten Funktion, jedoch nicht im Geltungsbereich eines anderen Teils des Programms, sodass es keine Möglichkeit gibt, den Wert von `apiCode` abzulesen, außer über die `getCode` Funktion.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Beide Funktionen `B` und `C` bilden hier Closures. Daher kann `B` auf `A` zugreifen und `C` kann auf `B` zugreifen.
- Da `C` auf `B` zugreifen kann und `B` auf `A`, kann `C` auch auf `A` zugreifen.

Daher können die Closures mehrere Geltungsbereiche enthalten; sie enthalten rekursiv den Geltungsbereich der sie enthaltenden Funktionen. Dies wird als _Geltungskette_ bezeichnet. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel greift `C` auf `B`'s `y` und `A`'s `x` zu. Dies kann getan werden, weil:

1. `B` bildet ein Closure, einschließlich `A` (d.h. `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` bildet ein Closure, einschließlich `B`.
3. Da `C`'s Closure `B` einschließt und `B`'s Closure `A` einschließt, schließt `C`'s Closure auch `A` ein. Das bedeutet, `C` kann auf _beide_ `B` _und_ `A`'s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _verknüpft_ die Geltungsbereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, da `A` nicht auf ein Argument oder eine Variable von `B` zugreifen kann, von der `C` eine Variable ist. Daher bleibt `C` privat nur für `B`.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen eines Closures denselben Namen haben, gibt es einen _Namenskonflikt_. Nähere Geltungsbereiche haben Vorrang. Dies bedeutet, dass der innerste Geltungsbereich die höchste Priorität hat, während der äußerste Geltungsbereich die niedrigste Priorität hat. Dies ist die Geltungskette. Die erste im Kette ist der innerste Geltungsbereich, und die letzte ist der äußerste Geltungsbereich. Betrachten Sie den folgenden Fall:

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

Der Namenskonflikt tritt in der Anweisung `return x * 2` auf und besteht zwischen dem Parameter `x` von `inside` und der Variablen `x` von `outside`. Die Geltungskette hier ist `inside` => `outside` => globales Objekt. Deshalb hat `inside`'s `x` Vorrang vor `outside`'s `x`, und `20` (`inside`'s `x`) wird zurückgegeben anstelle von `10` (`outside`'s `x`).

## Verwenden des Arguments-Objekts

Die Argumente einer Funktion werden in einem Array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie auf die übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungszahl des Arguments ist, beginnend bei `0`. So wäre das erste Argument, das an eine Funktion übergeben wird, `arguments[0]`. Die Gesamtanzahl der Argumente wird durch `arguments.length` angegeben.

Mithilfe des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formal deklariert ist zu akzeptieren. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächlich übergebenen Argumente zu bestimmen, und dann auf jedes Argument mithilfe des `arguments`-Objekts zugreifen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Zeichenketten verkettet. Das einzige formale Argument für die Funktion ist eine Zeichenkette, die die Zeichen angibt, die die zusammenzufügenden Elemente trennen. Die Funktion ist wie folgt definiert:

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

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie verketten jedes Argument in einer Zeichenkette "Liste":

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments` Variable ist "array-like", aber kein echtes Array. Sie ist array-ähnlich, da sie einen nummerierten Index und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Methoden zur Array-Manipulation.

Siehe das {{jsxref("Function")}} Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei spezielle Arten der Parametersyntax: _Default-Parameter_ und _Rest-Parameter_.

### Default-Parameter

In JavaScript sind Standardwerte der Funktionsparameter `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Dies ist genau das, was Default-Parameter tun.

In der Vergangenheit bestand die allgemeine Strategie zur Festlegung von Standardwerten darin, Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, falls sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wäre sein Wert `undefined` bei der Auswertung von `a*b`, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Default-Parametern_ ist eine manuelle Prüfung im Funktionskörper nicht mehr nötig. Sie können `1` als den Standardwert für `b` im Funktionskopf setzen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Rest-Parameter

Die [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Rest-Parameter_, um Argumente ab dem zweiten bis zum Enden aufzusammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _Fat Arrow_ genannt, um ihn von einer hypothetischen `->` Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und besitzt kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Pfeilfunktionen: _kürzere Funktionen_ und die _Nicht-Bindung_ von `this`.

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

Bis zu den Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert (ein neues Objekt im Fall eines Konstruktors, undefiniert in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objekt-Methode" aufgerufen wird, usw.). Dies stellte sich als suboptimal im objektorientierten Programmierstil heraus.

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

In ECMAScript 3/5 wurde dieses Problem durch die Zuweisung des Werts in `this` an eine Variable behoben, die überdeckt werden konnte.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der richtige `this` Wert an die `growUp()` Funktion übergeben würde.

Eine Pfeilfunktion besitzt kein eigenes `this`; der `this` Wert des umgebenden Ausführungskontextes wird verwendet. Daher hat im folgenden Code das `this` innerhalb der Funktion, die an `setInterval` übergeben wird, den gleichen Wert wie `this` in der umgebenden Funktion:

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
