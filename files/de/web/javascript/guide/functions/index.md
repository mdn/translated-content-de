---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich einer Prozedur – eine Gruppe von Anweisungen, die eine Aufgabe ausführt oder einen Wert berechnet. Damit eine Prozedur jedoch als Funktion qualifiziert wird, sollte sie einige Eingaben annehmen und Ausgaben zurückgeben, wobei es eine offensichtliche Beziehung zwischen den Eingaben und Ausgaben geben sollte. Um eine Funktion zu nutzen, müssen Sie sie irgendwo im Gültigkeitsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [ausführliche Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern der Funktion, eingeschlossen in runden Klammern und getrennt durch Kommas.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter namens `number`. Die Funktion besteht aus einer Anweisung, die besagt, den Parameter der Funktion (d.h. `number`) mit sich selbst multipliziert zurückzugeben. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, der `number * number` ist.

Parameter werden im Wesentlichen **per Wert** an Funktionen übergeben – daher wird die Änderung, die eine komplett neue Zuweisung innerhalb des Funktionskörpers an einem Parameter vornimmt, nicht global oder in dem aufrufenden Code widergespiegelt.

Wenn Sie ein Objekt als Parameter übergeben, und die Funktion die Eigenschaften des Objekts ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Wenn Sie ein Array als Parameter übergeben, und die Funktion einen der Werte des Arrays ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, wodurch eine _Scope-Kette_ gebildet wird. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Siehe [Funktionen-Scope und Closures](#funktionen_gültigkeitsbereiche_und_closures) für weitere Informationen.

### Funktionsausdrücke

Während die obige Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel hätte die Funktion `square` als folgt definiert werden können:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Jedoch _kann_ ein Name mit einem Funktionsausdruck angegeben werden. Das Angeben eines Namens ermöglicht es der Funktion, auf sich selbst zu verweisen, und erleichtert zudem die Identifizierung der Funktion in den Stack-Traces eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel definiert eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten soll. Dann wird sie mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert ist:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird die folgende Funktionsdefinition nur ausgeführt, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zur Definition von Funktionen, wie hier beschrieben, können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um zur Laufzeit aus einer Zeichenkette Funktionen zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Eine Funktion zu _definieren_ führt sie nicht aus. Durch die Definition wird die Funktion benannt und angegeben, was zu tun ist, wenn die Funktion aufgerufen wird.

Das _Aufrufen_ der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorhergehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Gültigkeitsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoben](#funktion_hoisting) werden (unterhalb des Aufrufs im Code erscheinen). Der Gültigkeitsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wurde (oder das gesamte Programm, wenn sie auf der obersten Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Zeichenfolgen und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel ist hier eine Funktion, die Fakultäten rekursiv berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Oft gibt es Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente, die einer Funktion übergeben werden, variiert, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt eingestellt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ – und diese Objekte wiederum haben Methoden. (Siehe das {{jsxref("Function")}} Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktion Hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Gültigkeitsbereichs hebt, sodass der obige Code äquivalent ist zu:

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

Eine Funktion kann sich selbst referenzieren und aufrufen. Sie kann entweder durch den Funktionsausdruck oder den Funktionsnamen der Deklaration referenziert werden, oder durch jede im Gültigkeitsbereich befindliche Variable, die auf das Funktionsobjekt verweist. Betrachten Sie zum Beispiel die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie auf die Funktion selbst entweder als `bar` oder `foo` verweisen und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrere Male aus und benötigen beide eine Bedingung (um eine unendliche Schleife oder eher eine unendliche Rekursion in diesem Fall zu vermeiden).

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

Einige Algorithmen können jedoch nicht einfach als iterative Schleifen sein. Zum Beispiel ist das Abrufen aller Schlüsselpunkte einer Baumstruktur (wie des [DOMs](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

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

Im Vergleich zur Funktion `loop` führt jeder rekursive Aufruf hier viele rekursive Aufrufe aus.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven zu konvertieren, aber die Logik ist oft viel komplexer, und dazu ist die Verwendung eines Stacks erforderlich.

In der Tat verwendet Rekursion selbst einen Stack: den Funktions-Stack. Das stack-ähnliche Verhalten kann im folgenden Beispiel gesehen werden:

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

Ein {{Glossary("IIFE", "sofort ausgeführter Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine Funktion direkt aufruft, die als Ausdruck definiert ist. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variablen zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichbedeutend damit, einfach den Funktionskörper zu schreiben, aber es gibt ein paar einzigartige Vorteile:

- Es erzeugt einen zusätzlichen [Gültigkeitsbereich](#funktionen_gültigkeitsbereiche_und_closures) von Variablen, was hilft, Variablen auf den Ort zu beschränken, an dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ anstatt einer Abfolge von _Anweisungen_. Dadurch können Sie komplexe Berechnungslogik beim Initialisieren von Variablen schreiben.

Für weitere Informationen siehe den {{Glossary("IIFE", "IIFE")}} Glossareintrag.

## Funktionen Gültigkeitsbereiche und Closures

Funktionen bilden einen {{Glossary("Scope", "Gültigkeitsbereich")}} für Variablen – das bedeutet, dass Variablen, die innerhalb einer Funktion definiert sind, von außerhalb der Funktion aus nicht zugänglich sind. Der Gültigkeitsbereich der Funktion erbt von allen übergeordneten Gültigkeitsbereichen. Zum Beispiel kann eine Funktion, die im globalen Bereich definiert ist, auf alle im globalen Bereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle Variablen zugreifen, die in ihrer übergeordneten Funktion definiert sind, sowie auf alle anderen Variablen, auf die die übergeordnete Funktion zugreifen kann. Andererseits hat die übergeordnete Funktion (und jeder andere übergeordnete Gültigkeitsbereich) _keinen_ Zugriff auf die Variablen und Funktionen, die in der inneren Funktion definiert sind. Dies bietet eine Art Kapselung für die Variablen in der inneren Funktion.

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

Der Funktionskörper wird auch als _Closure_ bezeichnet. Ein Closure ist ein Stück Quellcode (meistens eine Funktion), das sich auf einige Variablen bezieht, und das Closure "erinnert" sich an diese Variablen, auch wenn der Gültigkeitsbereich, in dem diese Variablen deklariert wurden, beendet wurde.

Closures werden normalerweise mit verschachtelten Funktionen illustriert, um zu zeigen, dass sie sich an Variablen über die Lebensdauer ihres übergeordneten Bereichs hinaus erinnern; aber eigentlich sind verschachtelte Funktionen unnötig. Technisch gesehen bilden alle Funktionen in JavaScript Closures – einige erfassen einfach nichts, und Closures müssen nicht einmal Funktionen sein. Die Schlüsselinhaltsstoffe für ein _nützliches_ Closure sind die folgenden:

- Ein übergeordneter Gültigkeitsbereich, der einige Variablen oder Funktionen definiert. Es sollte eine klare Lebensdauer haben, was bedeutet, dass es zu einem bestimmten Zeitpunkt die Ausführung beenden sollte. Jeder Bereich, der nicht der globale Bereich ist, erfüllt diese Anforderung; dies schließt Blöcke, Funktionen, Module und mehr ein.
- Ein innerer Bereich, der innerhalb des übergeordneten Gültigkeitsbereichs definiert ist und sich auf einige Variablen oder Funktionen bezieht, die im übergeordneten Gültigkeitsbereich definiert sind.
- Der innere Bereich schafft es, über die Lebensdauer des übergeordneten Gültigkeitsbereichs hinaus zu überleben. Zum Beispiel wird es in einer Variablen gespeichert, die außerhalb des übergeordneten Gültigkeitsbereichs definiert ist, oder wird aus dem übergeordneten Gültigkeitsbereich zurückgegeben (wenn der übergeordnete Bereich eine Funktion ist).
- Dann können Sie beim Aufrufen der Funktion außerhalb des übergeordneten Gültigkeitsbereichs immer noch auf die Variablen oder Funktionen zugreifen, die im übergeordneten Bereich definiert wurden, obwohl der übergeordnete Bereich die Ausführung beendet hat.

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

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speichereinheiten für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variablen zugewiesen oder benannt werden.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife)-Muster. Innerhalb dieses IIFE-Bereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Gültigkeitsbereich der zurückgegebenen unbenannten Funktion, aber nicht im Gültigkeitsbereich eines anderen Teils des Programms, sodass es keine Möglichkeit gibt, den Wert von `apiCode` außer über die `getCode`-Funktion zu lesen.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die ihrerseits eine Funktion (`C`) enthält.
- Sowohl Funktion `B` als auch `C` bilden hier Closures. So kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Darüber hinaus kann `C`, da `C` auf `B` zugreifen kann, und `B` auf `A`, auch auf `A` zugreifen.

Folglich können die Closures mehrere Gültigkeitsbereiche enthalten; sie enthalten rekursiv den Gültigkeitsbereich der Funktionen, die sie enthalten. Dies wird als _Scope-Chaining_ bezeichnet. Betrachten Sie das folgende Beispiel:

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

1. `B` bildet ein Closure, das `A` einbezieht (d.h. `B` kann auf Argumente und Variablen von `A` zugreifen).
2. `C` bildet ein Closure, das `B` einbezieht.
3. Da `C`'s Closure `B` einbezieht und `B`'s Closure `A` einbezieht, schließt `C`'s Closure auch `A` ein. Das bedeutet, `C` kann sowohl auf `B` als auch auf `A`s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _verkettet_ die Gültigkeitsbereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, da `A` auf kein Argument oder keine Variable von `B` zugreifen kann, deren Variable `C` ist. So bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Gültigkeitsbereichen eines Closure denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Gültigkeitsbereiche haben Vorrang. Daher hat der innerste Gültigkeitsbereich den höchsten Vorrang, während der äußerste Gültigkeitsbereich den niedrigsten hat. Dies ist die Gültigkeitsbereichs-Kette. Das erste in der Kette ist der innerste Gültigkeitsbereich, und das letzte ist der äußerste Gültigkeitsbereich. Betrachten Sie das folgende:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und findet zwischen `inside`'s Parameter `x` und `outside`'s Variable `x` statt. Die Gültigkeitsbereichs-Kette hier ist `inside` => `outside` => Globales Objekt. Daher hat `inside`'s `x` Vorrang vor `outside`'s `x`, und `20` (`inside`'s `x`) wird anstelle von `10` (`outside`'s `x`) zurückgegeben.

## Verwendung des arguments-Objekts

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt aufbewahrt. Innerhalb einer Funktion können Sie die ihr übergebenen Argumente wie folgt adressieren:

```js
arguments[i];
```

wobei `i` die Ordnungszahl des Arguments ist, beginnend bei `0`. Das erste Argument, das an eine Funktion übergeben wird, wäre also `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angezeigt.

Mithilfe des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formell annimmt. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen, und dann auf jedes Argument mithilfe des `arguments`-Objekts zugreifen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Zeichenfolgen zusammenfügt. Das einzig formelle Argument der Funktion ist eine Zeichenfolge, die die Zeichen angibt, die die zu verbindenden Elemente trennen. Die Funktion wird wie folgt definiert:

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

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie fügt jedes Argument in eine Zeichenfolgen-"Liste" zusammen:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist "array-ähnlich", aber kein Array. Sie ist array-ähnlich, da sie einen Nummernindex und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Siehe das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript standardmäßig sind die Parameter von Funktionen `undefined`. Es kann jedoch in einigen Situationen nützlich sein, einen anderen Standardwert zu setzen. Genau das tun Standardparameter.

In der Vergangenheit war die allgemeine Strategie zur Festlegung von Standardwerten, die Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, wenn sie `undefined` waren.

Im folgenden Beispiel wäre der Wert von `b` `undefined`, wenn kein Wert bereitgestellt wird, wenn `a*b` bewertet wird, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparametern_ ist eine manuelle Überprüfung im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf angeben:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

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

## Pfeilfunktionen

Ein [Pfeilfunktions-Ausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fette Pfeil_ genannt, um von einer hypothetischen `->`-Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung der Pfeilfunktionen: _kürzere Funktionen_ und _Nichthängen_ von `this`.

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

Bis zu Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined bei [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, etc.). Das erwies sich als weniger ideal in einem objektorientierten Programmierstil.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der korrekte `this`-Wert an die `growUp()`-Funktion übergeben würde.

Ein Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. So hat im folgenden Code der `this` innerhalb der Funktion, die an `setInterval` übergeben wird, denselben Wert wie `this` in der umgebenden Funktion:

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
