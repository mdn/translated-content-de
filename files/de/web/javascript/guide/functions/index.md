---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ähnelt einer Prozedur – einem Satz von Anweisungen, die eine Aufgabe ausführen oder einen Wert berechnen. Damit eine Prozedur als Funktion qualifiziert, sollte sie jedoch einige Eingaben annehmen und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingaben und Ausgabe besteht. Um eine Funktion zu nutzen, müssen Sie sie irgendwo im Geltungsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [ausführliche Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function) Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste der Parameter der Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweifte Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine einfache Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter namens `number`. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (also `number`) mit sich selbst multipliziert zurückzugeben ist. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den Wert an, der von der Funktion zurückgegeben wird, nämlich `number * number`.

Parameter werden im Wesentlichen **nach Wert** an Funktionen übergeben – wenn der Code innerhalb des Funktionskörpers einem an die Funktion übergebenen Parameter einen vollständig neuen Wert zuweist, **wird die Änderung nicht global oder im Code, der die Funktion aufgerufen hat, übernommen**.

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

Wenn Sie ein Array als Parameter übergeben und die Funktion einen der Array-Werte ändert, ist diese Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Während die oben gezeigte Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` so definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Jedoch kann mit einem Funktionsausdruck ein Name angegeben werden. Ein Name ermöglicht es, dass sich die Funktion selbst referenzieren kann, und erleichtert die Identifizierung der Funktion in den Stapelspuren eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn Sie eine Funktion als Argument an eine andere Funktion übergeben. Das folgende Beispiel zeigt eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten sollte:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Im folgenden Code erhält die Funktion eine durch einen Funktionsausdruck definierte Funktion und führt sie für jedes Element des als zweites Argument empfangenen Arrays aus:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Beispielsweise definiert die folgende Funktionsdefinition `myFunc` nur, wenn `num` `0` entspricht:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Neben den hier beschriebenen Funktionen können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um Funktionen zur Laufzeit aus einem String zu erstellen, ähnlich wie {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden im [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht _aus_. Durch die Definition wird der Funktion ein Name gegeben und festgelegt, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Zum Beispiel, wenn Sie die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorangegangene Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Geltungsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [hochgehoben](#function_hoisting) (unterhalb des Aufrufs im Code erscheinen) werden. Der Geltungsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert wird).

Die Argumente einer Funktion sind nicht nur auf Zeichenketten und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die `showProps()`-Funktion (definiert im [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel hier eine Funktion, die Fakultäten rekursiv berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, die Anzahl der Argumente für eine Funktion variieren kann, oder in denen der Kontext des Funktionsaufrufs auf ein bestimmtes Objekt gesetzt werden muss, das zur Laufzeit bestimmt wird.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ – und als solche haben diese Objekte Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Function hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert wird. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Geltungsbereichs verschiebt (hoisting), sodass der obige Code gleichwertig ist zu:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Function hoisting funktioniert nur mit Funktions*deklarationen* – nicht mit Funktions*ausdrücken*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Funktionsbereich

Variablen, die innerhalb einer Funktion definiert sind, können von außerhalb der Funktion nicht zugegriffen werden, da die Variable nur im Geltungsbereich der Funktion definiert ist. Allerdings kann eine Funktion auf alle Variablen und Funktionen zugreifen, die im Geltungsbereich definiert sind, in dem sie definiert wird.

Mit anderen Worten, eine Funktion, die im globalen Geltungsbereich definiert ist, kann auf alle Variablen zugreifen, die im globalen Geltungsbereich definiert sind. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle Variablen zugreifen, die in ihrer übergeordneten Funktion definiert sind, sowie auf alle anderen Variablen, auf die die übergeordnete Funktion selbst zugreifen kann.

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

## Geltungsbereich und der Funktionsstapel

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Es gibt drei Möglichkeiten, wie eine Funktion sich selbst referenzieren kann:

1. Der Name der Funktion
2. [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. Eine im Geltungsbereich stehende Variable, die auf die Funktion verweist

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

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus, und beide erfordern eine Bedingung (um eine Endlosschleife, oder besser gesagt, eine endlose Rekursion in diesem Fall zu vermeiden).

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

Allerdings können einige Algorithmen nicht einfach in iterative Schleifen umgewandelt werden. Zum Beispiel ist das Durchlaufen alle Knoten einer Baumstruktur (wie des [DOM](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

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

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer und erfordert die Verwendung eines Stapels.

Tatsächlich verwendet Rekursion selbst einen Stapel: den Funktionsstapel. Das stapelartige Verhalten kann im folgenden Beispiel gesehen werden:

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

Sie können eine Funktion in eine andere Funktion einbetten. Die verschachtelte (innere) Funktion ist privat zu ihrer übergeordneten (äußeren) Funktion.

Sie bildet auch eine _Closure_. Eine Closure ist ein Ausdruck (am häufigsten eine Funktion), die freie Variablen zusammen mit einer Umgebung haben kann, die diese Variablen bindet (die den Ausdruck "schließt").

Da eine verschachtelte Funktion eine Closure ist, bedeutet dies, dass eine verschachtelte Funktion die Argumente und Variablen ihrer übergeordneten Funktion "erben" kann. Mit anderen Worten, die innere Funktion enthält den Geltungsbereich der äußeren Funktion.

Zusammengefasst:

- Die innere Funktion kann nur von Anweisungen in der äußeren Funktion aus aufgerufen werden.
- Die innere Funktion bildet eine Closure: Die innere Funktion kann die Argumente und Variablen der äußeren Funktion verwenden, während die äußere Funktion die Argumente und Variablen der inneren Funktion nicht verwenden kann.

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

### Erhalt von Variablen

Beachten Sie, wie `x` erhalten bleibt, wenn `inside` zurückgegeben wird. Eine Closure muss die Argumente und Variablen in allen Bereichen erhalten, auf die sie verweist. Da jeder Aufruf potenziell unterschiedliche Argumente liefert, wird für jeden Aufruf von `outside` eine neue Closure erstellt. Der Speicher kann nur freigegeben werden, wenn das zurückgegebene `inside` nicht mehr zugänglich ist.

Dies unterscheidet sich nicht vom Speichern von Referenzen in anderen Objekten, ist aber oft weniger offensichtlich, da man die Referenzen nicht direkt setzt und sie nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl die Funktionen `B` als auch `C` bilden hier Closures. Also kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Somit können die Closures mehrere Geltungsbereiche enthalten; sie enthalten rekursiv den Geltungsbereich der sie umgebenden Funktionen. Das wird als _Scope Chaining_ bezeichnet. (Der Grund, warum es als "Chaining" bezeichnet wird, wird später erklärt.)

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

In diesem Beispiel greift `C` auf `B's` `y` und `A's` `x` zu.

Dies ist möglich, weil:

1. `B` bildet eine Closure, die `A` einschließt (d.h. `B` kann auf die Argumente und Variablen von `A` zugreifen).
2. `C` bildet eine Closure, die `B` einschließt.
3. Da `C's` Closure `B` einschließt und `B's` Closure `A` einschließt, dann schließt `C's` Closure auch `A` ein. Das bedeutet, `C` kann auf _sowohl_ `B` _als auch_ `A's` Argumente und Variablen zugreifen. Mit anderen Worten, `C` _kettet_ die Geltungsbereiche von `B` und `A`, _in dieser Reihenfolge_.

Das Umgekehrte jedoch ist nicht wahr. `A` kann nicht auf `C` zugreifen, da `A` auf kein Argument oder Variable von `B` zugreifen kann, von dem `C` eine Variable ist. Folglich bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Geltungsbereichen einer Closure denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Geltungsbereiche haben Vorrang. Daher hat der innerste Geltungsbereich den höchsten Vorrang, während der äußerste den niedrigsten hat. Dies ist die Scope-Kette. Die erste auf der Kette ist der innerste Geltungsbereich, und die letzte ist der äußerste Geltungsbereich. Betrachten Sie Folgendes:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen `inside's` Parameter `x` und `outside's` Variable `x`. Die Scope-Kette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside's` `x` Vorrang vor `outside's` `x`, und `20` (`inside's` `x`) wird zurückgegeben anstelle von `10` (`outside's` `x`).

## Closures

Closures sind eine der mächtigsten Funktionen von JavaScript. JavaScript erlaubt das Verschachteln von Funktionen und gewährt der inneren Funktion vollen Zugriff auf alle Variablen und Funktionen, die in der äußeren Funktion (und allen anderen Variablen und Funktionen, auf die die äußere Funktion zugreifen kann) definiert sind.

Die äußere Funktion hat jedoch _keinen_ Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies bietet eine Art Kapselung für die Variablen der inneren Funktion.

Da die innere Funktion Zugriff auf den Geltungsbereich der äußeren Funktion hat, überleben die Variablen und Funktionen, die in der äußeren Funktion definiert sind, länger als die Dauer der Ausführung der äußeren Funktion, wenn es der inneren Funktion gelingt, über die Lebensdauer der äußeren Funktion hinaus zu überleben. Eine Closure wird erstellt, wenn die innere Funktion auf irgendeine Weise einem Geltungsbereich außerhalb der äußeren Funktion zugänglich gemacht wird.

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

Es kann viel komplexer sein als der oben gezeigte Code. Ein Objekt mit Methoden zum Manipulieren der inneren Variablen der äußeren Funktion könnte zurückgegeben werden.

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

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen zuzugreifen als über die inneren Funktionen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicherorte für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variable zugewiesen werden oder einen Namen haben.

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
> Es gibt eine Reihe von Fallstricken, auf die Sie beim Verwenden von Closures achten müssen!
>
> Wenn eine eingeschlossene Funktion eine Variable mit demselben Namen wie eine Variable im äußeren Geltungsbereich definiert, dann gibt es keine Möglichkeit mehr, die Variable im äußeren Geltungsbereich noch einmal zu referenzieren. (Die innere Geltungsbereichsvariable "überdeckt" die äußere, bis das Programm den inneren Geltungsbereich verlässt. Es kann als ein [Namenskonflikt](#namenskonflikte) angesehen werden.)
>
> ```js example-bad
> const createPet = function (name) {
>   // Die äußere Funktion definiert eine Variable namens "name".
>   return {
>     setName(name) {
>       // Die eingeschlossene Funktion definiert auch eine Variable namens "name".
>       name = name; // Wie greifen wir auf das "name", das von der äußeren Funktion definiert ist, zu?
>     },
>   };
> };
> ```

## Verwenden des arguments-Objekts

Die Argumente einer Funktion werden in einem Array-ähnlichen Objekt gehalten. Innerhalb einer Funktion können Sie auf die an sie übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Also wäre das erste an eine Funktion übergebene Argument `arguments[0]`. Die Gesamtanzahl der Argumente wird durch `arguments.length` angezeigt.

Mit dem `arguments`-Objekt können Sie eine Funktion mit mehr Argumenten als formell erklärt aufrufen lassen. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächliche Anzahl der Argumente zu bestimmen, die an die Funktion übergeben werden, und dann auf jedes Argument mit dem `arguments`-Objekt zugreifen.

Zum Beispiel, betrachten Sie eine Funktion, die mehrere Zeichenketten konkateniert. Das einzige formale Argument für die Funktion ist eine Zeichenfolge, die die Zeichen spezifiziert, die die zu verkettenden Elemente trennen. Die Funktion ist wie folgt definiert:

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

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie verkettet jedes Argument in eine Zeichenfolgenliste:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist "array-ähnlich", aber kein Array. Sie ist array-ähnlich, weil sie einen nummerierten Index und eine `length`-Eigenschaft besitzt. Sie verfügt jedoch _nicht_ über alle Methoden zur Array-Manipulation.

Siehe das {{jsxref("Function")}}-Objekt in der JavaScript-Referenz für weitere Informationen.

## Funktionsparameter

Es gibt zwei spezielle Arten von Parametersyntax: _Standardparameter_ und _Rest-Parameter_.

### Standardparameter

In JavaScript sind Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

In der Vergangenheit war die allgemeine Strategie zur Einstellung von Defaults, die Parameterwerte im Funktionskörper zu testen und einen Wert zuzuweisen, falls sie `undefined` sind.

Im folgenden Beispiel wäre, wenn kein Wert für `b` angegeben wird, sein Wert beim Auswerten von `a*b` `undefined`, und ein Aufruf von `multiply` hätte normalerweise `NaN` zurückgegeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

Mit _Standardparametern_ ist ein manueller Check im Funktionskörper nicht mehr notwendig. Sie können `1` als Standardwert für `b` im Funktionskopf setzen:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

Für weitere Einzelheiten siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Rest-Parameter

Die [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Rest-Parameter_, um Argumente vom zweiten bis zum letzten zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Arrow Function Expression](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fat arrow_ genannt, um es von einer hypothetischen `->`-Syntax in zukünftigem JavaScript zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und besitzt kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

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

Bis zu den Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Falle eines Konstruktors, undefined bei [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als "Objektmethode" aufgerufen wird, etc.). Dies erwies sich als suboptimal in einem objektorientierten Programmierstil.

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

In ECMAScript 3/5 wurde dieses Problem behoben, indem der Wert in `this` auf eine Variable gesetzt wurde, die geschlossen werden konnte.

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

Alternativ konnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der richtige `this`-Wert an die `growUp()`-Funktion übergeben werden würde.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. Daher hat im folgenden Code das `this` innerhalb der an `setInterval` übergebenen Funktion denselben Wert wie `this` in der umgebenden Funktion:

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
