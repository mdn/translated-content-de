---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eines der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich wie eine Prozedur – eine Reihe von Anweisungen, die eine Aufgabe ausführt oder einen Wert berechnet. Damit jedoch eine Prozedur als Funktion gilt, sollte sie einige Eingaben entgegennehmen und eine Ausgabe liefern, zwischen denen eine offensichtliche Beziehung besteht. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Geltungsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [ausführliche Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details zu erfahren.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und getrennt durch Kommas.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweifte Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter namens `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (d.h. `number`) mit sich selbst multipliziert zurückgegeben werden soll. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, nämlich `number * number`.

Parameter werden im Wesentlichen **durch Wert** an Funktionen übergeben - wenn also der Code im Körper einer Funktion einem übergebenen Parameter einen völlig neuen Wert zuweist, **wird die Änderung global oder im aufrufenden Code nicht reflektiert**.

Wenn Sie ein Objekt als Parameter übergeben, ist eine Änderung der Eigenschaften des Objekts durch die Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt wird:

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

Wenn Sie ein Array als Parameter übergeben, ist eine Änderung von Werten im Array durch die Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt wird:

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

Jedoch kann ein Name _angegeben_ werden. Die Angabe eines Namens erlaubt es der Funktion, sich auf sich selbst zu beziehen und macht es außerdem einfacher, die Funktion in den Stacktraces eines Debuggers zu identifizieren:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel zeigt eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Im folgenden Code empfängt die Funktion eine durch einen Funktionsausdruck definierte Funktion und führt sie für jedes Element des als zweites Argument übergebenen Arrays aus:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird die folgende Funktionsdefinition `myFunc` nur dann definieren, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zu den hier beschriebenen Methoden zur Definition von Funktionen können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden im Abschnitt [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht aus. Durch das Definieren wird der Funktion ein Name gegeben und festgelegt, was passiert, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den bezeichneten Parametern aus. Zum Beispiel könnten Sie, wenn Sie die Funktion `square` definieren, sie wie folgt aufrufen:

```js
square(5);
```

Die vorhergehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Geltungsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [hochgehoben](#funktionshoisting) werden (im Code unterhalb des Aufrufs erscheinen). Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert wird).

Die Argumente einer Funktion sind nicht auf Zeichenfolgen und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert im Abschnitt [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument entgegennimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel hier ist eine Funktion, die Fakultäten rekursiv berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Oft gibt es Fälle, in denen eine Funktion dynamisch aufgerufen werden muss oder die Anzahl der Argumente für eine Funktion variiert, oder in denen der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt festgelegt werden muss.

Funktionen sind tatsächlich _Objekte_ — und diese Objekte haben wiederum Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dies zu erreichen.

### Funktionshoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne jeglichen Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert wird. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Geltungsbereichs anhebt, sodass der obige Code gleichwertig ist mit:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Funktionshoisting funktioniert nur mit Funktions*deklarationen* — nicht mit Funktions*ausdrücken*. Der folgende Code funktioniert nicht:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Funktionsbereich

Variablen, die innerhalb einer Funktion definiert sind, können nicht von außerhalb der Funktion aus zugegriffen werden, da die Variable nur im Geltungsbereich der Funktion definiert ist. Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die in dem Geltungsbereich definiert sind, in dem sie definiert ist.

Mit anderen Worten, eine im globalen Bereich definierte Funktion kann auf alle im globalen Bereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle Variablen zugreifen, die in ihrer übergeordneten Funktion definiert sind, sowie auf alle anderen Variablen, auf die die übergeordnete Funktion zugreifen kann.

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

## Bereich und der Funktionsstack

### Rekursion

Eine Funktion kann sich aufrufen und sich selbst aufrufen. Es gibt drei Möglichkeiten, wie eine Funktion sich selbst aufrufen kann:

1. Der Name der Funktion
2. [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. Eine im Bereich befindliche Variable, die auf die Funktion verweist

Zum Beispiel, betrachte die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers sind alle folgenden gleichwertig:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus und beide benötigen eine Bedingung (um eine Endlosschleife zu vermeiden oder in diesem Fall eher eine endlose Rekursion).

Zum Beispiel, betrachte die folgende Schleife:

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

Dagegen können einige Algorithmen keine einfachen iterativen Schleifen sein. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

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

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven zu konvertieren, aber die Logik ist oft viel komplizierter, und dies erfordert die Verwendung eines Stapels.

Tatsächlich verwendet die Rekursion selbst einen Stapel: den Funktionsstapel. Das stapelartige Verhalten kann im folgenden Beispiel gesehen werden:

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

Sie können eine Funktion innerhalb einer anderen Funktion verschachteln. Die verschachtelte (innere) Funktion ist privat für ihre enthaltende (äußere) Funktion.

Sie bildet auch eine _Closure_. Eine Closure ist ein Ausdruck (am häufigsten eine Funktion), der freie Variablen zusammen mit einer Umgebung haben kann, die diese Variablen bindet (die den Ausdruck "schließt").

Da eine verschachtelte Funktion eine Closure ist, bedeutet dies, dass eine verschachtelte Funktion die Argumente und Variablen ihrer enthaltenden Funktion "vererben" kann. Mit anderen Worten, die innere Funktion enthält den Geltungsbereich der äußeren Funktion.

Zusammenfassend:

- Auf die innere Funktion kann nur von Anweisungen innerhalb der äußeren Funktion zugegriffen werden.
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

Da die innere Funktion eine Closure bildet, können Sie die äußere Funktion aufrufen und Argumente sowohl für die äußere als auch für die innere Funktion angeben:

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

Beachten Sie, wie `x` erhalten bleibt, wenn `inside` zurückgegeben wird. Eine Closure muss die Argumente und Variablen in allen Referenzbereichen bewahren. Da jeder Aufruf potenziell unterschiedliche Argumente bereitstellt, wird für jeden Aufruf von `outside` eine neue Closure erstellt. Der Speicher kann nur freigegeben werden, wenn das zurückgegebene `inside` nicht mehr zugänglich ist.

Dies unterscheidet sich nicht vom Speichern von Referenzen in anderen Objekten, aber es ist oft weniger offensichtlich, da man die Referenzen nicht direkt setzt und sie nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl Funktionen `B` als auch `C` bilden hier Closures. Somit kann `B` auf `A` zugreifen und `C` kann auf `B` zugreifen.
- Darüber hinaus, da `C` auf `B` zugreifen kann, welches wiederum auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

So können Closures mehrere Bereiche enthalten; sie enthalten rekursiv den Bereich der Funktionen, die sie enthalten. Dies wird _Geltungsketten_ genannt. (Der Grund, warum es "Ketten" genannt wird, wird später erklärt.)

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

Dies kann gemacht werden, weil:

1. `B` bildet eine Closure einschließlich `A` (d.h. `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` bildet eine Closure einschließlich `B`.
3. Da `C`'s Closure `B` einschließt und `B`'s Closure `A` einschließt, schließt `C`'s Closure auch `A` ein. Das bedeutet, dass `C` auf _sowohl_ `B` _als auch_ `A`'s Argumente und Variablen zugreifen kann. Mit anderen Worten, `C` _verkettet_ die Geltungsbereiche von `B` und `A`, _in dieser Reihenfolge_.

Umgekehrt ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, da `A` auf kein Argument oder keine Variable von `B` zugreifen kann, von dem `C` eine Variable ist. Somit bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen einer Closure denselben Namen tragen, gibt es einen _Namenskonflikt_. Mehr verschachtelte Bereiche haben Vorrang. Also hat der innerste Bereich die höchste Priorität, während der äußerste Bereich die niedrigste hat. Dies ist die Geltungskette. Der erste in der Kette ist der innerste Bereich, und der letzte ist der äußerste Bereich. Betrachten Sie folgendes:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen dem Parameter `x` von `inside` und der Variablen `x` von `outside`. Die Geltungskette hier ist `inside` => `outside` => globales Objekt. Da es sich in `inside`'s Bereich befindet, wird `inside`'s `x` über `outside`'s `x` priorisiert und `20` (`inside`'s `x`) wird zurückgegeben, anstatt `10` (`outside`'s `x`).

## Closures

Closures sind eines der mächtigsten Merkmale von JavaScript. JavaScript erlaubt die Verschachtelung von Funktionen und gibt der inneren Funktion vollen Zugriff auf alle Variablen und Funktionen, die innerhalb der äußeren Funktion definiert sind (sowie auf alle anderen Variablen und Funktionen, auf die die äußere Funktion zugreifen kann).

Jedoch hat die äußere Funktion _keinen_ Zugriff auf die in der inneren Funktion definierten Variablen und Funktionen. Dies bietet eine Art Kapselung der Variablen der inneren Funktion.

Da die innere Funktion auf den Bereich der äußeren Funktion zugreifen kann, werden die in der äußeren Funktion definierten Variablen und Funktionen länger als die Ausführungsdauer der äußeren Funktion "leben", wenn die innere Funktion es schafft, über die Lebensdauer der äußeren Funktion hinaus zu überleben. Eine Closure wird erstellt, wenn die innere Funktion auf irgendeine Weise in einen Bereich außerhalb der äußeren Funktion verfügbar gemacht wird.

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

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keinen anderen Weg, um auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicherorte für die äußeren Argumente und Variablen. Sie speichern "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variable zugewiesen oder benannt werden.

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
> Es gibt eine Reihe von Fallstricken, auf die Sie bei der Verwendung von Closures achten sollten!
>
> Wenn eine eingeschlossene Funktion eine Variable mit demselben Namen wie eine Variable im äußeren Bereich definiert, gibt es keine Möglichkeit, erneut auf die Variable im äußeren Bereich zuzugreifen. (Die Variable im inneren Bereich "überschreibt" die äußere, bis das Programm den inneren Bereich verlässt. Dies kann als ein [Namenskonflikt](#namenskonflikte) betrachtet werden.)
>
> ```js example-bad
> const createPet = function (name) {
>   // Die äußere Funktion definiert eine Variable namens "name".
>   return {
>     setName(name) {
>       // Die eingeschlossene Funktion definiert ebenfalls eine Variable "name".
>       name = name; // Wie greifen wir auf "name" zu, das von der äußeren Funktion definiert wurde?
>     },
>   };
> };
> ```

## Verwendung des arguments-Objekts

Die Argumente einer Funktion werden in einem Array-ähnlichen Objekt gepeichert. Innerhalb einer Funktion können Sie auf die übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Das erste Argument, das an eine Funktion übergeben wird, wäre also `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angegeben.

Mit dem `arguments`-Objekt können Sie eine Funktion mit mehr Argumenten aufrufen, als formell deklariert sind. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächlich übergebene Anzahl von Argumenten zu ermitteln, und dann auf jedes Argument über das `arguments`-Objekt zugreifen.

Betrachten Sie zum Beispiel eine Funktion, die mehrere Zeichenfolgen verkettet. Das einzige formelle Argument für die Funktion ist eine Zeichenfolge, die die Zeichen angibt, die die zu verkettenden Elemente trennen. Die Funktion wird wie folgt definiert:

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

Sie können dieser Funktion beliebig viele Argumente übergeben und sie verkettet jedes Argument zu einer Zeichenfolgen-"Liste":

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

Weitere Informationen finden Sie im {{jsxref("Function")}}-Objekt in der JavaScript-Referenz.

## Funktionenparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind die Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen könnte es jedoch nützlich sein, einen anderen Standardwert festzulegen. Das ist genau das, was Standardparameter tun.

In der Vergangenheit war die allgemeine Strategie zur Einstellung von Standardwerten, die Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wäre sein Wert `undefined`, wenn `a*b` bewertet wird, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparameter_ ist eine manuelle Überprüfung im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf setzen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Weitere Details finden Sie unter [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbegrenzte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente von der zweiten bis zur letzten zu sammeln. Die Funktion multipliziert dann diese mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fat arrow_ genannt, um sich von einer hypothetischen `->`-Syntax in zukünftigem JavaScript zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Pfeilfunktionen: _kürzere Funktionen_ und _nicht-bindung_ von `this`.

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

Bis Arrow-Funktionen definierten jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Falle eines Konstruktors, undefined in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, usw.). Dies erwies sich als weniger ideal mit einem objektorientierten Programmierstil.

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

In ECMAScript 3/5 wurde dieses Problem durch die Zuweisung des Werts in `this` zu einer Variablen behoben, die geschlossen sein könnte.

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

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontextes wird verwendet. Somit hat `this` im folgenden Code innerhalb der Funktion, die an `setInterval` übergeben wird, denselben Wert wie `this` in der umgebenden Funktion:

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
