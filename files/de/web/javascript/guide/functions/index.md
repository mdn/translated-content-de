---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich einem Verfahren — ein Satz von Anweisungen, der eine Aufgabe ausführt oder einen Wert berechnet. Damit ein Verfahren als Funktion qualifiziert, sollte es eine Eingabe nehmen und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingabe und Ausgabe bestehen sollte. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Geltungsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern der Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter an, genannt `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion zurückgegeben werden soll (also `number`), multipliziert mit sich selbst. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, der `number * number` ist.

Parameter werden im Wesentlichen **nach Wert** an Funktionen übergeben — wenn also der Code im Rumpf einer Funktion einem an die Funktion übergebenen Parameter einen völlig neuen Wert zuweist, **wird die Änderung nicht global oder im Code, der diese Funktion aufgerufen hat, reflektiert**.

Wenn Sie ein Objekt als Parameter übergeben und die Funktion die Eigenschaften des Objekts ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Wenn Sie ein Array als Parameter übergeben und die Funktion einen der Werte des Arrays ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, was eine _Geltungskette_ bildet. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Siehe [Funktionsgeltungsbereiche und Closures](#funktionsgeltungsbereiche_und_closures) für weitere Informationen.

### Funktionsausdrücke

Während die obige Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` folgendermaßen definiert worden sein:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Es kann jedoch ein Name mit einem Funktionsausdruck angegeben werden. Die Angabe eines Namens erlaubt es der Funktion, sich selbst zu referenzieren, und erleichtert es auch, die Funktion in den Ablaufsprotokollen eines Debuggers zu identifizieren:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn man eine Funktion als Argument an eine andere Funktion übergibt. Das folgende Beispiel definiert eine `map`-Funktion, die als erstes Argument eine Funktion und als zweites Argument ein Array erhält. Dann wird sie mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert ist:

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

Neben der hier beschriebenen Definition von Funktionen können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht aus. Das Definieren benennt die Funktion und gibt an, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt die angegebenen Aktionen mit den angegebenen Parametern tatsächlich aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorangehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Geltungsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoistet](#funktionshoisting) werden (unterhalb des Aufrufs im Code erscheinen). Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf der obersten Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument nimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel ist hier eine Funktion, die Fakultäten rekursiv berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, die Anzahl der Argumente einer Funktion variiert, oder der Kontext des Funktionsaufrufs muss zur Laufzeit auf ein bestimmtes Objekt gesetzt werden.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ — und diese Objekte haben wiederum Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktionshoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert wird. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Geltungsbereichs hebt, sodass der obige Code äquivalent ist zu:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Funktionshoisting funktioniert nur mit Funktions*deklarationen* — nicht mit Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

### Rekursion

Eine Funktion kann sich auf sich selbst beziehen und sich selbst aufrufen. Sie kann sich entweder auf den Namen des Funktionsausdrucks oder der Funktionsdeklaration beziehen oder auf jede im Geltungsbereich befindliche Variable, die auf das Funktionsobjekt verweist. Zum Beispiel beachten Sie die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie sich entweder als `bar` oder `foo` auf die Funktion beziehen und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In mancher Hinsicht ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrmals aus, und beide erfordern eine Bedingung (um eine Endlosschleife oder vielmehr, in diesem Fall, eine endlose Rekursion zu vermeiden).

Zum Beispiel beachten Sie die folgende Schleife:

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

Einige Algorithmen können jedoch nicht als einfache iterative Schleifen ausgedrückt werden. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) über Rekursion einfacher:

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

Verglichen mit der Funktion `loop` macht jeder rekursive Aufruf hier viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer, und dies erfordert die Verwendung eines Stacks.

Tatsächlich verwendet die Rekursion selbst einen Stack: den Funktionsstack. Das Stack-ähnliche Verhalten kann im folgenden Beispiel gesehen werden:

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

### Sofort ausgeführte Funktionsausdrücke (IIFE)

Ein {{Glossary("IIFE", "Sofort ausgeführter Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine Funktion direkt aufruft, die als Ausdruck definiert ist. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Statt die Funktion in einer Variablen zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichbedeutend damit, einfach den Funktionskörper zu schreiben, aber es gibt einige einzigartige Vorteile:

- Es schafft einen zusätzlichen [Geltungsbereich](#funktionsgeltungsbereiche_und_closures) für Variablen, was hilft, Variablen auf den Ort zu beschränken, an dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ statt einer Reihenfolge von _Anweisungen_. Dies ermöglicht es, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Für weitere Informationen siehe den {{Glossary("IIFE", "IIFE")}} Glossar-Eintrag.

## Funktionsgeltungsbereiche und Closures

Funktionen bilden einen {{Glossary("Scope", "Geltungsbereich")}} für Variablen — das bedeutet, dass in einer Funktion definierte Variablen nicht von außerhalb der Funktion zugegriffen werden können. Der Funktionsgeltungsbereich erbt aus allen oberen Geltungsbereichen. Zum Beispiel kann eine im globalen Geltungsbereich definierte Funktion auf alle im globalen Geltungsbereich definierten Variablen zugreifen. Eine Funktion, die in einer anderen Funktion definiert ist, kann auch auf alle in ihrer übergeordneten Funktion definierten Variablen zugreifen und auf alle anderen Variablen, auf die die übergeordnete Funktion Zugriff hat. Andererseits hat die übergeordnete Funktion (und jeder andere übergeordnete Geltungsbereich) _keinen_ Zugriff auf die in der inneren Funktion definierten Variablen und Funktionen. Dies bietet eine Art von Kapselung für die Variablen in der inneren Funktion.

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

Wir bezeichnen den Funktionskörper auch als _Closure_. Ein Closure ist ein beliebiges Stück Quellcode (meistens eine Funktion), das auf einige Variablen verweist, und das Closure "erinnert" sich an diese Variablen, selbst wenn der Geltungsbereich, in dem diese Variablen deklariert wurden, beendet ist.

Closures werden normalerweise mit verschachtelten Funktionen veranschaulicht, um zu zeigen, dass sie sich an Variablen über die Lebensdauer ihres übergeordneten Geltungsbereichs hinaus erinnern; jedoch sind verschachtelte Funktionen nicht erforderlich. Technisch gesehen bilden alle Funktionen in JavaScript Closures — einige erfassen einfach nichts, und Closures müssen nicht einmal Funktionen sein. Die entscheidenden Zutaten für ein _nützliches_ Closure sind folgende:

- Ein übergeordneter Geltungsbereich, der einige Variablen oder Funktionen definiert. Er sollte eine klare Lebensdauer haben, was bedeutet, dass er irgendwann die Ausführung beenden sollte. Jeder Geltungsbereich, der nicht der globale Geltungsbereich ist, erfüllt diese Anforderung; dazu gehören Blöcke, Funktionen, Module und mehr.
- Ein innerer Geltungsbereich, der innerhalb des übergeordneten Geltungsbereichs definiert wird und einige Variablen oder Funktionen des übergeordneten Geltungsbereichs referenziert.
- Der innere Geltungsbereich überlebt über die Lebensdauer des übergeordneten Geltungsbereichs hinaus. Zum Beispiel wird er in einer Variablen gespeichert, die außerhalb des übergeordneten Geltungsbereichs definiert ist, oder er wird vom übergeordneten Geltungsbereich zurückgegeben (wenn der übergeordnete Geltungsbereich eine Funktion ist).
- Wenn Sie dann die Funktion außerhalb des übergeordneten Geltungsbereichs aufrufen, können Sie weiterhin auf die Variablen oder Funktionen zugreifen, die im übergeordneten Geltungsbereich definiert wurden, selbst wenn der übergeordnete Geltungsbereich die Ausführung beendet hat.

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

Es kann viel komplexer als der obige Code sein. Ein Objekt, das Methoden zum Manipulieren der inneren Variablen der äußeren Funktion enthält, kann zurückgegeben werden.

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

Im obigen Code ist die Variable `name` der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keinen anderen Weg, auf die inneren Variablen zuzugreifen, als durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicher für die äußeren Argumente und Variablen. Sie halten "persistente" und "kapsulierte" Daten für die inneren Funktionen bereit, um mit ihnen zu arbeiten. Die Funktionen müssen nicht einmal einer Variablen zugewiesen oder benannt sein.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife)-Muster. Innerhalb dieses IIFE-Geltungsbereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben wird und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Geltungsbereich der zurückgegebenen unbenannten Funktion, aber nicht im Geltungsbereich eines anderen Teils des Programms, daher gibt es keine Möglichkeit, den Wert von `apiCode` zu lesen, außer über die Funktion `getCode`.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl Funktionen `B` als auch `C` bilden hier Closures. Somit kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Darüber hinaus kann `C` auf `A` zugreifen, da `C` auf `B` zugreifen kann, welches auf `A` zugreifen kann.

Daher können Closures mehrere Geltungsbereiche enthalten; sie enthalten rekursiv den Geltungsbereich der sie enthaltenden Funktionen. Dies wird als _Scope Chaining_ bezeichnet. Betrachten Sie das folgende Beispiel:

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

1. `B` bildet ein Closure, das `A` einschließt (d.h. `B` kann auf `A`s Argumente und Variablen zugreifen).
2. `C` bildet ein Closure, das `B` einschließt.
3. Da `C`s Closure `B` einschließt und `B`s Closure `A` einschließt, enthält `C`s Closure auch `A`. Das bedeutet, dass `C` auf _sowohl_ `B` _als auch_ `A`s Argumente und Variablen zugreifen kann. Mit anderen Worten, `C` _verkettet_ die Geltungsbereiche von `B` und `A` in _dieser Reihenfolge_.

Das Umgekehrte ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, da `A` auf kein Argument oder keine Variable von `B` zugreifen kann, bei der `C` eine Variable ist. Daher bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen eines Closures denselben Namen haben, liegt ein _Namenskonflikt_ vor. Mehr verschachtelte Geltungsbereiche haben Vorrang. Daher hat der innerste Geltungsbereich die höchste Priorität, während der äußerste Geltungsbereich die niedrigste hat. Dies ist die Scope Chain. Der erste in der Kette ist der innerste Geltungsbereich, und der letzte ist der äußerste Geltungsbereich. Betrachten Sie folgendes:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen `inside`s Parameter `x` und `outside`s Variable `x`. Die Scope Chain ist hier `inside` => `outside` => globales Objekt. Daher hat `inside`s `x` Vorrang vor `outside`s `x`, und `20` (`inside`s `x`) wird zurückgegeben statt `10` (`outside`s `x`).

## Das arguments-Objekt verwenden

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie mit den übergebenen Argumenten wie folgt umgehen:

```js
arguments[i];
```

wobei `i` die laufende Nummer des Arguments ist, beginnend bei `0`. Also wäre das erste an eine Funktion übergebene Argument `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angezeigt.

Mithilfe des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formell akzeptiert. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächliche Anzahl der an die Funktion übergebenen Argumente zu ermitteln, und dann auf jedes Argument mithilfe des `arguments`-Objekts zugreifen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Strings zusammenführt. Das einzige formelle Argument für die Funktion ist ein String, der die Zeichen angibt, die die zu verkettenden Elemente trennen. Die Funktion ist wie folgt definiert:

```js
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (const arg of arguments) {
    result += arg + separator;
  }
  return result;
}
```

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie verkettet jedes Argument zu einem String "Liste":

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist "array-ähnlich", aber kein Array. Es ist array-ähnlich, da es einen nummerierten Index und eine `length`-Eigenschaft hat. Es besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Sehen Sie das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind die Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Dies ist genau das, was Standardparameter tun.

In der Vergangenheit bestand die allgemeine Strategie zum Festlegen von Standardwerten darin, Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wäre sein Wert `undefined`, wenn `a*b` ausgewertet wird, und ein Aufruf von `multiply` hätte normalerweise `NaN` zurückgegeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparametern_ ist eine manuelle Prüfung im Funktionskörper nicht mehr notwendig. Sie können im Funktionskopf `1` als Standardwert für `b` setzen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für mehr Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax erlaubt es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente vom zweiten bis zum letzten zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Arrow-Funktionen

Ein [Arrow-Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch genannt _fat arrow_, um sich von einem hypothetischen `->`-Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat keinen eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Arrow-Funktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Arrow-Funktionen: _kürzere Funktionen_ und _nicht-bindung_ von `this`.

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

### Keine separate this-Referenz

Bis zu den Arrow-Funktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined in [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als weniger ideal mit einem objektorientierten Programmieransatz.

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

In ECMAScript 3/5 wurde dieses Problem durch die Zuweisung des Wertes in `this` an eine Variable, die geschlossen werden konnte, behoben.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der richtige `this`-Wert an die `growUp()`-Funktion übergeben würde.

Eine Arrow-Funktion hat keinen eigenen `this`; der `this`-Wert des umgebenden Ausführungskontextes wird verwendet. Daher hat im folgenden Code das `this` innerhalb der an `setInterval` übergebenen Funktion denselben Wert wie `this` in der umgebenden Funktion:

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
