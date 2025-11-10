---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind einer der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ähnelt einem Verfahren – einer Anweisungensammlung, die eine Aufgabe ausführt oder einen Wert berechnet. Damit ein Verfahren jedoch als Funktion gilt, sollte es einige Eingaben entgegennehmen und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingabe und Ausgabe besteht. Um eine Funktion zu nutzen, müssen Sie sie irgendwo in dem Bereich definieren, von dem aus Sie sie aufrufen möchten.

Sehen Sie auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Definition von Funktionen

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem Schlüsselwort [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter entgegen, der `number` genannt wird. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (also `number`) mit sich selbst multipliziert zurückgegeben werden soll. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung spezifiziert den von der Funktion zurückgegebenen Wert, der `number * number` ist.

Parameter werden im Wesentlichen an Funktionen **als Wert** übergeben – wenn also der Code im Funktionsrumpf einem Parameter, der an die Funktion übergeben wurde, einen völlig neuen Wert zuweist, **ändert sich dies nicht global oder im Code, der diese Funktion aufgerufen hat**.

Wenn Sie ein Objekt als Parameter übergeben, zeigt die Änderung der Eigenschaften des Objekts durch die Funktion diese Änderungen auch außerhalb der Funktion, wie im folgenden Beispiel gezeigt wird:

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

Wenn Sie ein Array als Parameter übergeben, zeigt die Änderung eines Arraywerts durch die Funktion diese Änderungen auch außerhalb der Funktion, wie im folgenden Beispiel dargestellt wird:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, wodurch eine _Sichtbarkeitskette_ entsteht. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Weitere Informationen finden Sie unter [Funktionsbereiche und -schlussfolgerungen](#funktions-bereiche_und_closures).

### Funktionsausdrücke

Obwohl die oben dargestellte Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` wie folgt definiert worden sein:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Es _kann_ jedoch ein Name in einem Funktionsausdruck angegeben werden. Die Angabe eines Namens erlaubt es der Funktion, sich selbst zu referenzieren, und erleichtert auch die Identifizierung der Funktion in den Stack-Traces eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind nützlich, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel definiert eine `map` Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte. Dann wird sie mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert wird:

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

Zusätzlich zum Definieren von Funktionen, wie hier beschrieben, können Sie auch den {{jsxref("Function")}} Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie mit {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Aufruf von Funktionen

Das _Definieren_ einer Funktion führt sie nicht _aus_. Das Definieren benennt die Funktion und spezifiziert, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorangehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Sichtbarkeitsbereich_ vorhanden sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoisted](#funktions-hoisting) werden (erscheint im Code unterhalb des Aufrufs). Der Sichtbarkeitsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wurde (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Zeichenfolgen und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()` Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument übernimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel hier ist eine Funktion, die Fakultäten rekursiv berechnet:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente einer Funktion variiert, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt eingestellt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ – und wiederum haben diese Objekte Methoden. (Siehe das {{jsxref("Function")}} Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktions-Hoisting

Betrachten Sie das untenstehende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Bereichs verschiebt, sodass der obige Code äquivalent ist zu:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Funktions-Hoisting funktioniert nur mit Funktions*deklarationen* – nicht mit Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

### Rekursion

Eine Funktion kann auf sich selbst verweisen und sich selbst aufrufen. Sie kann entweder durch den Namen des Funktionsausdrucks oder der Funktionsdeklaration oder durch jede im Gültigkeitsbereich liegende Variable, die auf das Funktionsobjekt verweist, angesprochen werden. Betrachten Sie zum Beispiel die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie die Funktion selbst entweder als `bar` oder `foo` bezeichnen und sich mit `bar()` oder `foo()` selbst aufrufen.

Eine Funktion, die sich selbst aufruft, wird _rekursive Funktion_ genannt. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus und beide benötigen eine Bedingung (um eine Endlosschleife oder vielmehr in diesem Fall eine unendliche Rekursion zu vermeiden).

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

Einige Algorithmen können jedoch nicht mit einfachen iterativen Schleifen erstellt werden. Zum Beispiel das Abrufen aller Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) ist einfacher per Rekursion:

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

Im Vergleich zur Funktion `loop` macht jeder rekursive Aufruf hier selbst viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven zu konvertieren, aber die Logik ist oft viel komplexer und dazu ist die Nutzung eines Stapels erforderlich.

Tatsächlich nutzt Rekursion selbst einen Stapel: den Funktionsstapel. Das stapelartige Verhalten kann im folgenden Beispiel gesehen werden:

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

### Sofortige Funktionsausdrücke (IIFE)

Ein {{Glossary("IIFE", "sofortiger Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das direkt eine als Ausdruck definierte Funktion aufruft. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variablen zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichwertig zu einfach den Funktionskörper zu schreiben, hat jedoch einige einzigartige Vorteile:

- Es erstellt einen zusätzlichen [Gültigkeitsbereich](#funktions-bereiche_und_closures) für Variablen, was hilft, Variablen auf den Ort zu beschränken, an dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ anstelle einer Folge von _Anweisungen_. Dies erlaubt es Ihnen, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Weitere Informationen finden Sie im {{Glossary("IIFE", "IIFE")}} Glossareintrag.

## Funktions-Bereiche und Closures

Funktionen bilden einen {{Glossary("Scope", "Gültigkeitsbereich")}} für Variablen – das bedeutet, dass innerhalb einer Funktion definierte Variablen von außerhalb der Funktion nicht zugänglich sind. Der Funktionsbereich erbt von allen übergeordneten Gültigkeitsbereichen. Zum Beispiel kann eine im globalen Bereich definierte Funktion auf alle im globalen Bereich definierten Variablen zugreifen. Eine Funktion, die in einer anderen Funktion definiert ist, kann auch auf alle in ihrer Elternfunktion definierten Variablen zugreifen sowie auf jede andere Variable, auf die die Elternfunktion zugreifen kann. Andererseits hat die Elternfunktion (und jeder andere übergeordnete Bereich) _keinen_ Zugang zu den Variablen und Funktionen, die in der inneren Funktion definiert sind. Dies bietet eine Art Kapselung für die Variablen in der inneren Funktion.

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

Wir beziehen uns auch auf den Funktionskörper als _Closure_. Ein Closure ist jedes Quellcode-Element (am häufigsten eine Funktion), das auf einige Variablen verweist, und das Closure "erinnert" sich an diese Variablen, selbst wenn der Gültigkeitsbereich, in dem diese Variablen deklariert wurden, beendet ist.

Closures werden üblicherweise mit verschachtelten Funktionen illustriert, um zu zeigen, dass sie sich an Variablen über die Lebensdauer ihres übergeordneten Gültigkeitsbereichs hinaus erinnern; aber in der Tat sind verschachtelte Funktionen nicht notwendig. Technisch gesehen bilden in JavaScript alle Funktionen Closures – einige erfassen einfach nichts, und Closures müssen nicht einmal Funktionen sein. Die wesentlichen Bestandteile für ein _nützliches_ Closure sind die folgenden:

- Ein übergeordneter Gültigkeitsbereich, der einige Variablen oder Funktionen definiert. Es sollte eine klare Lebensdauer haben, was bedeutet, dass es irgendwann die Ausführung beenden sollte. Jeder Bereich, der nicht der globale Bereich ist, erfüllt dieses Kriterium; dies schließt Blöcke, Funktionen, Module und mehr ein.
- Ein innerer Gültigkeitsbereich, der innerhalb des übergeordneten Gültigkeitsbereichs definiert ist und auf einige im übergeordneten Gültigkeitsbereich definierte Variablen oder Funktionen verweist.
- Der innere Gültigkeitsbereich schafft es, über die Lebensdauer des übergeordneten Gültigkeitsbereichs hinaus zu überleben. Zum Beispiel wird er in einer Variablen gespeichert, die außerhalb des übergeordneten Gültigkeitsbereichs definiert ist, oder er wird vom übergeordneten Gültigkeitsbereich zurückgegeben (wenn der übergeordnete Gültigkeitsbereich eine Funktion ist).
- Dann, wenn Sie die Funktion außerhalb des übergeordneten Gültigkeitsbereichs aufrufen, können Sie immer noch auf die Variablen oder Funktionen zugreifen, die im übergeordneten Gültigkeitsbereich definiert wurden, auch wenn der übergeordnete Gültigkeitsbereich die Ausführung beendet hat.

Das Folgende ist ein typisches Beispiel für ein Closure:

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

Im obigen Code ist die Variable `name` der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicherplätze für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variablen zugewiesen oder benannt werden.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife) Muster. Innerhalb dieses IIFE-Bereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Bereich der zurückgegebenen unbenannten Funktion, aber nicht im Bereich von einem anderen Teil des Programms, sodass es keine Möglichkeit gibt, den Wert von `apiCode` außer über die `getCode` Funktion zu lesen.

### Mehrfach-verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl die Funktionen `B` als auch `C` bilden hier Closures. Also kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Zusätzlich, da `C` auf `B` zugreifen kann, was wiederum auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Somit können die Closures mehrere Bereich enthalten; sie enthalten rekursiv den Bereich der Funktionen, die sie enthalten. Dies wird _Scope Chaining_ genannt. Betrachten Sie das folgende Beispiel:

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

In diesem Beispiel greift `C` auf `B`'s `y` und `A`'s `x` zu. Dies ist möglich, weil:

1. `B` ein Closure einschließlich `A` bildet (d.h. `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` ein Closure einschließlich `B` bildet.
3. Da `C`s Closure `B` einschließt und `B`s Closure `A` einschließt, umfasst `C`s Closure auch `A`. Das bedeutet, `C` kann _sowohl_ auf `B` _als auch_ `A`s Argumente und Variablen zugreifen. In anderen Worten, `C` _verkettet_ die Bereiche von `B` und `A` _in dieser Reihenfolge_.

Umgekehrt ist dies jedoch nicht möglich. `A` kann nicht auf `C` zugreifen, da `A` nicht auf Argumente oder Variablen von `B` zugreifen kann, zu denen `C` gehört. Somit bleibt `C` privat nur für `B`.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Bereichen eines Closures denselben Namen tragen, liegt ein _Namenskonflikt_ vor. Mehr verschachtelte Bereiche haben Vorrang. Der innerste Bereich hat die höchste Priorität, während der äußerste Bereich die niedrigste Priorität hat. Dies ist die Bereichskette. Der erste in der Kette ist der innerste Bereich, und der letzte ist der äußerste Bereich. Betrachten Sie das Folgende:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen dem Parameter `x` von `inside` und der Variablen `x` von `outside`. Die Bereichskette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`'s `x` Vorrang vor `outside`'s `x`, und es wird `20` (`inside`'s `x`) zurückgegeben, anstatt `10` (`outside`'s `x`).

## Verwendung des arguments-Objekts

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie auf die übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Das erste Argument, das an eine Funktion übergeben wird, wäre also `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angegeben.

Mit dem `arguments`-Objekt können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formal zu akzeptieren erklärt. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente der Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen und dann auf jedes Argument mit dem `arguments`-Objekt zugreifen.

Zum Beispiel nehmen wir eine Funktion, die mehrere Zeichenfolgen verkettet. Das einzige formale Argument für die Funktion ist eine Zeichenfolge, die die Trennzeichen spezifiziert, die die zu verkettenden Elemente trennen. Die Funktion wird wie folgt definiert:

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

Sie können dieser Funktion jede Anzahl von Argumenten übergeben, und sie verkettet jedes Argument zu einer Zeichenfolgenliste:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist „array-like“, aber kein Array. Sie ist array-like in dem Sinne, dass sie einen nummerierten Index und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Weitere Informationen finden Sie im {{jsxref("Function")}} Objekt in der JavaScript-Referenz.

## Funktionsparameter

Es gibt zwei besondere Arten der Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

In der Vergangenheit bestand die allgemeine Strategie zur Festlegung von Standardwerten darin, die Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wäre sein Wert beim Berechnen von `a*b` `undefined` und ein Aufruf von `multiply` hätte normalerweise `NaN` zurückgegeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

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

Für mehr Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente ab dem zweiten zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Arrow-Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fat arrow_ genannt, um ihn von einer hypothetischen sich in zukünftigen JavaScript-Syntax entwickelnden `->`-Syntax zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und besitzt kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Arrow-Funktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Arrow-Funktionen: _kürzere Funktionen_ und _kein eigenes `this`_.

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

Bis zu den Arrow-Funktionen definierte jede neue Funktion ihr eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined bei [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als weniger ideal im objektorientierten Programmierstil.

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

In ECMAScript 3/5 wurde dieses Problem behoben, indem der Wert in `this` einer Variablen zugewiesen wurde, die abgeschlossen werden konnte.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der korrekte `this`-Wert an die `growUp()` Funktion übergeben würde.

Ein Arrow-Funktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. Daher hat der `this` im folgenden Code, der innerhalb der Funktion liegt, die an `setInterval` übergeben wird, denselben Wert wie `this` in der umgebenden Funktion:

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
