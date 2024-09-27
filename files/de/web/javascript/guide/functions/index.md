---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich wie eine Prozedur – eine Reihe von Anweisungen, die eine Aufgabe ausführen oder einen Wert berechnen. Damit eine Prozedur jedoch als Funktion gilt, sollte sie eine Eingabe entgegennehmen und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingabe und Ausgabe besteht. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Gültigkeitsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, die in Klammern eingeschlossen und durch Kommas getrennt sind.
- Den JavaScript-Anweisungen, die die Funktion definieren, in geschweifte Klammern eingeschlossen `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine einfache Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter mit dem Namen `number`. Die Funktion besteht aus einer Anweisung, die angibt, dass der Parameter der Funktion (also `number`) mit sich selbst multipliziert werden soll. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung spezifiziert den von der Funktion zurückgegebenen Wert, der `number * number` ist.

Parameter werden im Wesentlichen **by value** an Funktionen übergeben – daher wird, wenn der Code im Funktionskörper einem übergebenen Parameter einen neuen Wert zuweist, **diese Änderung nicht global oder im Code widergespiegelt, der diese Funktion aufgerufen hat**.

Wenn Sie ein Objekt als Parameter übergeben, ist die Änderung der Eigenschaften dieses Objekts von der Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Wenn Sie ein Array als Parameter übergeben, ist eine Änderung der Array-Werte durch die Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` so definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Es kann jedoch ein Name mit einem Funktionsausdruck bereitgestellt werden. Die Bereitstellung eines Namens erlaubt es der Funktion, sich selbst zu referenzieren, und macht sie auch in Debugger-Stack-Traces leichter zu identifizieren:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel zeigt eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten soll:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Im folgenden Code erhält die Funktion eine durch einen Funktionsausdruck definierte Funktion und führt diese für jedes Element des als zweites Argument erhaltenen Arrays aus:

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

In JavaScript kann eine Funktion bedingt definiert werden. Zum Beispiel wird die folgende Funktionsdefinition `myFunc` nur definiert, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zu den hier beschriebenen Möglichkeiten, Funktionen zu definieren, können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um zur Laufzeit Funktionen aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht _aus_. Definieren bedeutet, der Funktion einen Namen zu geben und festzulegen, was zu tun ist, wenn die Funktion aufgerufen wird.

Die **Funktion aufzurufen**, führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Wenn Sie zum Beispiel die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorige Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Gültigkeitsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoistet](#funktionen_hoisting) werden (unterhalb des Aufrufs im Code erscheinen). Der Gültigkeitsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert ist (oder das gesamte Programm, wenn sie auf der obersten Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die Funktion `showProps()` (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument akzeptiert.

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente für eine Funktion variieren, oder der Kontext des Funktionsaufrufs zur Laufzeit auf ein bestimmtes Objekt gesetzt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ – und diese Objekte haben wiederum Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können zu diesem Zweck verwendet werden.

### Funktionen hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` vor ihrer Deklaration aufgerufen wird. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an die Spitze des aktuellen Gültigkeitsbereichs verschiebt, sodass der obige Code äquivalent ist zu:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Das Hoisting von Funktionen funktioniert nur mit Funktions*deklarationen* – nicht mit Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Funktionsbereich

Variablen, die innerhalb einer Funktion definiert sind, können von außerhalb der Funktion nicht zugegriffen werden, da die Variable nur im Gültigkeitsbereich der Funktion definiert ist. Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die im Gültigkeitsbereich definiert sind, in dem sie definiert ist.

Mit anderen Worten, eine Funktion, die im globalen Bereich definiert ist, kann auf alle Variablen zugreifen, die im globalen Bereich definiert sind. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle Variablen zugreifen, die in ihrer übergeordneten Funktion definiert sind, sowie auf alle anderen Variablen, auf die die übergeordnete Funktion Zugriff hat.

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

## Bereich und der Funktionsstapel

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Es gibt drei Wege, wie eine Funktion sich selbst referenzieren kann:

1. Der Name der Funktion
2. [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. Eine Variablen im Gültigkeitsbereich, die auf die Funktion verweist

Zum Beispiel, betrachten Sie die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers sind die folgenden alle gleichwertig:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus und beide benötigen eine Bedingung (um eine Endlosschleife oder, in diesem Fall, unendliche Rekursion zu vermeiden).

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

Manche Algorithmen können jedoch nicht einfach als iterative Schleifen ausgeführt werden. Zum Beispiel, das Erfassen aller Knoten in einer Baumstruktur (wie das [DOM](/de/docs/Web/API/Document_Object_Model)) ist über Rekursion einfacher:

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

Im Vergleich zu der Funktion `loop` macht hier jeder rekursive Aufruf selbst viele rekursive Aufrufe.

Es ist möglich, jedes rekursive Algorithmus in einen nicht-rekursiven zu konvertieren, aber die Logik ist oft viel komplexer und erfordert die Verwendung eines Stapels.

Tatsächlich verwendet Rekursion selbst einen Stapel: den Funktionsstapel. Das Verhalten wie ein Stapel kann im folgenden Beispiel gesehen werden:

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

Sie können eine Funktion innerhalb einer anderen Funktion verschachteln. Die verschachtelte (innere) Funktion ist privat für ihre umschließende (äußere) Funktion.

Sie bildet auch eine _Closure_. Eine Closure ist ein Ausdruck (meistens eine Funktion), die freie Variablen zusammen mit einer Umgebung hat, die diese Variablen bindet (das den Ausdruck "schließt").

Da eine verschachtelte Funktion eine Closure ist, bedeutet dies, dass eine verschachtelte Funktion die Argumente und Variablen ihrer umschließenden Funktion "erben" kann. Mit anderen Worten, die innere Funktion enthält den Gültigkeitsbereich der äußeren Funktion.

Zusammenfassend:

- Auf die innere Funktion kann nur von Anweisungen in der äußeren Funktion zugegriffen werden.
- Die innere Funktion bildet eine Closure: Die innere Funktion kann die Argumente und Variablen der äußeren Funktion verwenden, während die äußere Funktion nicht die Argumente und Variablen der inneren Funktion verwenden kann.

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

Da die innere Funktion eine Closure bildet, können Sie die äußere Funktion aufrufen und Argumente für sowohl die äußere als auch die innere Funktion festlegen:

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

Beachten Sie, wie `x` erhalten bleibt, wenn `inside` zurückgegeben wird. Eine Closure muss die Argumente und Variablen in allen Bereichen beibehalten, auf die sie verweist. Da jeder Aufruf potenziell unterschiedliche Argumente bereitstellt, wird bei jedem Aufruf von `outside` eine neue Closure erstellt. Der Speicher kann nur freigegeben werden, wenn das zurückgegebene `inside` nicht mehr zugänglich ist.

Das unterscheidet sich nicht vom Speichern von Referenzen in anderen Objekten, ist jedoch oft weniger offensichtlich, da man die Referenzen nicht direkt festlegt und sie nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl die Funktionen `B` als auch `C` bilden hier Closures. So kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Außerdem, da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Somit können die Closures mehrere Bereiche enthalten; sie enthalten rekursiv den Gültigkeitsbereich der Funktionen, die sie enthalten. Dies wird als _Bereitsverkettung_ bezeichnet. (Warum es "Verkettung" genannt wird, wird später erklärt.)

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

1. `B` bildet eine Closure, die `A` umfasst (d.h., `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` bildet eine Closure, die `B` umfasst.
3. Da `C`'s Closure `B` und `B`'s Closure `A` umfasst, umfasst `C`'s Closure auch `A`. Das bedeutet, `C` kann auf _beide_ `B` _und_ `A`'s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _verkettet_ die Bereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, weil `A` auf kein Argument oder keine Variable von `B` zugreifen kann, das `C` eine Variable von ist. Somit bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Bereichen einer Closure denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Bereiche haben Vorrang. Also hat der innerste Bereich den höchsten Vorrang, während der äußerste Bereich den niedrigsten Vorrang hat. Das ist die Bereichskette. Der erste in der Kette ist der innerste Bereich, und der letzte ist der äußerste Bereich. Betrachten Sie das folgende:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und liegt zwischen `inside`'s Parameter `x` und `outside`'s Variable `x`. Die Bereichskette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`'s `x` Vorrang gegenüber `outside`'s `x`, und `20` (`inside`'s `x`) wird zurückgegeben anstelle von `10` (`outside`'s `x`).

## Closures

Closures sind eines der mächtigsten Merkmale von JavaScript. JavaScript ermöglicht das Verschachteln von Funktionen und gibt der inneren Funktion vollen Zugriff auf alle Variablen und Funktionen, die innerhalb der äußeren Funktion definiert sind (und alle anderen Variablen und Funktionen, auf die die äußere Funktion Zugriff hat).

Die äußere Funktion hat jedoch _keinen_ Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies stellt eine Art Kapselung für die Variablen der inneren Funktion bereit.

Da die innere Funktion Zugriff auf den Bereich der äußeren Funktion hat, leben die Variablen und Funktionen, die in der äußeren Funktion definiert sind, länger als die Ausführungsdauer der äußeren Funktion, wenn es die innere Funktion schafft, über die Lebensdauer der äußeren Funktion hinaus zu überleben. Eine Closure wird erstellt, wenn die innere Funktion auf irgendeine Weise einem Bereich außerhalb der äußeren Funktion zugänglich gemacht wird.

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

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen zuzugreifen, außer durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicher für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten. Die Funktionen müssen nicht einmal einer Variable zugewiesen werden oder einen Namen haben.

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
> Es gibt eine Reihe von Stolperfallen, auf die Sie achten sollten, wenn Sie Closures verwenden!
>
> Wenn eine umschlossene Funktion eine Variable mit demselben Namen wie eine Variable im äußeren Bereich definiert, gibt es keine Möglichkeit, wieder auf die Variable im äußeren Bereich zuzugreifen. (Die innere Bereichsvariable "überschreibt" die äußere, bis das Programm den inneren Bereich verlässt. Dies kann als [Namenskonflikt](#namenskonflikte) betrachtet werden.)
>
> ```js example-bad
> const createPet = function (name) {
>   // Die äußere Funktion definiert eine Variable namens "name".
>   return {
>     setName(name) {
>       // Die umschlossene Funktion definiert auch eine Variable namens "name".
>       name = name; // Wie greifen wir auf das "name" zu, das von der äußeren Funktion definiert wurde?
>     },
>   };
> };
> ```

## Verwendung des arguments-Objekts

Die Argumente einer Funktion werden in einem array-ähnlichen Objekt verwaltet. Innerhalb einer Funktion können Sie die an sie übergebenen Argumente wie folgt ansprechen:

```js
arguments[i];
```

wobei `i` die Ordnungszahl des Arguments ist, beginnend bei `0`. Das erste an eine Funktion übergebene Argument wäre also `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angezeigt.

Mit dem `arguments` Objekt können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formal deklariert akzeptiert. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen und dann jedes Argument mit dem `arguments` Objekt zuzugreifen.

Zum Beispiel, betrachten Sie eine Funktion, die mehrere Zeichenfolgen verknüpft. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die die Zeichen angibt, die die zu verknüpfenden Elemente trennen. Die Funktion ist wie folgt definiert:

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

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie verknüpft jedes Argument in eine Zeichenfolgen-"Liste":

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

Siehe das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei besondere Arten von Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind die Parameter von Funktionen standardmäßig `undefined`. Es kann jedoch in einigen Situationen nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

In der Vergangenheit war die allgemeine Strategie zur Festlegung von Standardwerten, Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel würde, wenn kein Wert für `b` bereitgestellt wird, sein Wert `undefined` sein, wenn `a*b` ausgewertet wird, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Bei _Standardparametern_ ist eine manuelle Überprüfung im Funktionskörper nicht mehr erforderlich. Sie können `1` als Standardwert für `b` im Funktionskopf festlegen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) Syntax erlaubt es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente von dem zweiten bis zum Ende zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _Fat Arrow_ genannt, um von einer hypothetischen `->`-Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

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

Bis zu den Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, `undefined` in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Methodenobjekt" aufgerufen wird, etc.). Dies erwies sich als weniger ideal bei einem objektorientierten Programmierstil.

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

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der richtige `this`-Wert an die `growUp()`-Funktion übergeben würde.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umschließenden Ausführungskontextes wird verwendet. Daher hat im folgenden Code die `this` innerhalb der an `setInterval` übergebenen Funktion denselben Wert wie die `this` in der umschließenden Funktion:

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
