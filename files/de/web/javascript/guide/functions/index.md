---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind einer der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich einer Prozedur—eine Reihe von Anweisungen, die eine Aufgabe ausführen oder einen Wert berechnen. Damit eine Prozedur jedoch als Funktion qualifiziert wird, sollte sie einige Eingaben entgegennehmen und eine Ausgabe liefern, wobei eine offensichtliche Beziehung zwischen Eingabe und Ausgabe bestehen sollte. Um eine Funktion zu verwenden, müssen Sie sie irgendwo im Gültigkeitsbereich definieren, von dem aus Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und durch Kommas getrennt.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter entgegen, der `number` genannt wird. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (d.h. `number`) mit sich selbst multipliziert zurückgegeben wird. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung gibt den von der Funktion zurückgegebenen Wert an, welcher `number * number` ist.

Parameter werden im Wesentlichen **als Wert** an Funktionen übergeben — das bedeutet, wenn der Code innerhalb des Funktionskörpers einem Parameter, der an die Funktion übergeben wurde, einen völlig neuen Wert zuweist, **spiegelt sich die Änderung nicht global oder im Code wider, der diese Funktion aufgerufen hat**.

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

Funktionsdeklarationen und -ausdrücke können verschachtelt werden, was eine _Gültigkeitsbereichkette_ bildet. Zum Beispiel:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

Weitere Informationen finden Sie unter [Funktions-Gültigkeitsbereiche und Closures](#funktionsbereiche_und_closures).

### Funktionsausdrücke

Während die obige Funktionsdeklaration syntaktisch eine Anweisung ist, können Funktionen auch durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel könnte die Funktion `square` wie folgt definiert werden:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Allerdings _kann_ ein Name mit einem Funktionsausdruck angegeben werden. Das Bereitstellen eines Namens ermöglicht es der Funktion, sich selbst zu referenzieren, und erleichtert auch die Identifizierung der Funktion in den Stack-Traces eines Debuggers:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsausdrücke sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben wird. Das folgende Beispiel definiert eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten soll. Dann wird es mit einer Funktion aufgerufen, die durch einen Funktionsausdruck definiert ist:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird im folgenden Funktionsdefinition die Funktion `myFunc` nur definiert, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Zusätzlich zur Definition von Funktionen, wie hier beschrieben, können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um Funktionen aus einem String zur Laufzeit zu erstellen, ähnlich wie bei {{jsxref("Global_Objects/eval", "eval()")}}.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Eine Funktion zu _definieren_ führt sie nicht _aus_. Sie zu definieren, benennt die Funktion und spezifiert, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Wenn Sie beispielsweise die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorangehende Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Gültigkeitsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoben](#funktion_hoisting) werden (und im Code unter dem Aufruf erscheinen). Der Gültigkeitsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf höchster Ebene deklariert ist).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die Funktion `showProps()` (definiert in [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument nimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel, hier ist eine Funktion, die rekursiv Fakultäten berechnet:

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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Es gibt oft Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, oder die Anzahl der Argumente für eine Funktion variiert, oder in denen der Kontext des Funktionsaufrufs auf ein bestimmtes Objekt festgelegt werden muss, das zur Laufzeit bestimmt wird.

Es stellt sich heraus, dass _Funktionen selbst Objekte_ sind — und diese Objekte haben wiederum Methoden. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktion Hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code wird ohne Fehler ausgeführt, obwohl die Funktion `square()` vor ihrer Deklaration aufgerufen wird. Das liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Gültigkeitsbereichs hebt, so dass der obige Code gleichwertig ist mit:

```js
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Das Hebe-Verhalten gilt nur für Funktions*deklarationen* — nicht für Funktions*ausdrücke*. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Sie kann entweder durch den Funktionsausdruck oder den Namen der Deklaration angesprochen werden oder durch jede im Gültigkeitsbereich befindliche Variable, die sich auf das Funktionsobjekt bezieht. Erwägen Sie das folgende Funktionsdefinition:

```js
const foo = function bar() {
  // statements go here
};
```

Innerhalb des Funktionskörpers können Sie sich auf die Funktion selbst entweder als `bar` oder `foo` beziehen und sich selbst mit `bar()` oder `foo()` aufrufen.

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. In gewisser Weise ist Rekursion analog zu einem Schleifen. Beide führen denselben Code mehrmals aus und beide erfordern eine Bedingung (um eine Endlosschleife oder genauer, eine endlos Rekursion in diesem Fall zu vermeiden).

Erwägen Sie beispielsweise die folgende Schleife:

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

Allerdings können nicht alle Algorithmen einfach in iterative Schleifen umgewandelt werden. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie dem [DOM](/de/docs/Web/API/Document_Object_Model)) über Rekursion einfacher:

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

Im Vergleich zur Funktion `loop` macht jeder rekursive Aufruf hier viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer und erfordert die Verwendung eines Stapels.

Tatsächlich verwendet die Rekursion selbst einen Stapel: den Funktionsstapel. Das stapelähnliche Verhalten kann im folgenden Beispiel gesehen werden:

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

### Sofortige aufgerufene Funktionsausdrücke (IIFE)

Ein {{Glossary("IIFE", "sofortiger aufgerufener Funktionsausdruck (IIFE)")}} ist ein Code-Muster, das eine als Ausdruck definierte Funktion direkt aufruft. Es sieht so aus:

```js
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
```

Anstatt die Funktion in einer Variablen zu speichern, wird die Funktion sofort aufgerufen. Dies ist fast gleichwertig damit, den Funktionskörper einfach zu schreiben, aber es gibt einige einzigartige Vorteile:

- Es erstellt einen zusätzlichen [Gültigkeitsbereich](#funktionsbereiche_und_closures) von Variablen, der dazu beiträgt, Variablen auf den Ort zu beschränken, an dem sie nützlich sind.
- Es ist jetzt ein _Ausdruck_ anstatt einer Folge von _Anweisungen_. Dies ermöglicht es Ihnen, komplexe Berechnungslogik beim Initialisieren von Variablen zu schreiben.

Für weitere Informationen siehe den {{Glossary("IIFE", "IIFE")}}-Glossareintrag.

## Funktionsbereiche und Closures

Funktionen bilden einen {{Glossary("Scope", "Gültigkeitsbereich")}} für Variablen—das bedeutet, dass Variablen, die innerhalb einer Funktion definiert sind, von außerhalb der Funktion aus nicht zugegriffen werden können. Der Funktionsbereich erbt von allen oberen Bereichen. Zum Beispiel kann eine Funktion, die im globalen Bereich definiert ist, auf alle im globalen Bereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle in ihrer übergeordneten Funktion definierten Variablen zugreifen, und auf alle anderen Variablen, auf die die übergeordnete Funktion zugreifen kann. Auf der anderen Seite hat die übergeordnete Funktion (und alle anderen übergeordneten Bereiche) keinen Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies bietet eine Art von Kapselung für die Variablen in der inneren Funktion.

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

Wir bezeichnen den Funktionskörper auch als _Closure_. Ein Closure ist ein beliebiges Stück Quellcode (häufiger eine Funktion), das sich auf einige Variablen bezieht, und das Closure "merkt sich" diese Variablen, selbst wenn der Bereich, in dem diese Variablen deklariert wurden, verlassen wurde.

Closures werden normalerweise mit verschachtelten Funktionen veranschaulicht, um zu zeigen, dass sie sich Variablen über die Lebensdauer ihres Elternbereichs hinaus merken; aber eigentlich sind verschachtelte Funktionen unnötig. Technisch gesehen bilden alle Funktionen in JavaScript Closures—einige erfassen einfach nichts, und Closures müssen nicht einmal Funktionen sein. Die entscheidenden Zutaten für ein _nützliches_ Closure sind die folgenden:

- Ein übergeordneter Bereich, der einige Variablen oder Funktionen definiert. Er sollte eine klare Lebensdauer haben, was bedeutet, dass er die Ausführung zu einem bestimmten Zeitpunkt beenden sollte. Jeder Bereich, der nicht der globale Bereich ist, erfüllt diese Anforderung; dazu gehören Blöcke, Funktionen, Module und mehr.
- Ein innerer Bereich, der innerhalb des übergeordneten Bereichs definiert ist und sich auf einige Variablen oder Funktionen bezieht, die im übergeordneten Bereich definiert sind.
- Der innere Bereich überlebt über die Lebensdauer des übergeordneten Bereichs hinaus. Zum Beispiel wird er in einer Variablen gespeichert, die außerhalb des übergeordneten Bereichs definiert ist, oder er wird aus dem übergeordneten Bereich zurückgegeben (falls der übergeordnete Bereich eine Funktion ist).
- Wenn Sie die Funktion außerhalb des übergeordneten Bereichs aufrufen, können Sie noch auf die Variablen oder Funktionen zugreifen, die im übergeordneten Bereich definiert wurden, obwohl der übergeordnete Bereich die Ausführung beendet hat.

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

Es kann viel komplexer sein als der obige Code. Ein Objekt, das Methoden zum Bearbeiten der inneren Variablen der äußeren Funktion enthält, kann zurückgegeben werden.

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

Im obigen Code ist die Variable `name` der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keine andere Möglichkeit, auf die inneren Variablen zuzugreifen als durch die inneren Funktionen. Die inneren Variablen der inneren Funktionen dienen als sichere Speicherorte für die äußeren Argumente und Variablen. Sie halten "persistente" und "gekapselte" Daten bereit, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variablen zugewiesen sein oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

Im obigen Code verwenden wir das [IIFE](#immediately_invoked_function_expressions_iife)-Muster. Innerhalb dieses IIFE-Bereichs existieren zwei Werte: eine Variable `apiCode` und eine unbenannte Funktion, die zurückgegeben wird und der Variablen `getCode` zugewiesen wird. `apiCode` befindet sich im Gültigkeitsbereich der zurückgegebenen unbenannten Funktion, aber nicht im Gültigkeitsbereich eines anderen Teils des Programms, daher gibt es keine Möglichkeit, den Wert von `apiCode` außer über die Funktion `getCode` zu lesen.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrmals verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl `B` als auch `C` bilden hier Closures. Daher kann `B` auf `A` zugreifen und `C` kann auf `B` zugreifen.
- Da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Somit können die Closures mehrere Bereiche enthalten; sie enthalten rekursiv den Bereich der Funktionen, die sie enthalten. Dies wird als _Gültigkeitsbereich-Kette_ bezeichnet. Betrachten Sie das folgende Beispiel:

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

1. `B` ein Closure bildet, das `A` einschließt (d.h. `B` kann auf die Argumente und Variablen von `A` zugreifen).
2. `C` bildet ein Closure, das `B` einschließt.
3. Da `C`'s Closure `B` einschließt und `B`'s Closure `A` einschließt, schließt `C`'s Closure auch `A` ein. Das bedeutet, `C` kann auf _sowohl_ `B` _als auch_ `A`'s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _kettet_ die Bereiche von `B` und `A`, _in dieser Reihenfolge_.

Der Umkehrschluss ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, weil `A` nicht auf ein Argument oder eine Variable von `B` zugreifen kann, von dem `C` eine Variable ist. Daher bleibt `C` nur für `B` privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Bereichen eines Closures denselben Namen haben, liegt ein _Namenskonflikt_ vor. Mehr verschachtelte Bereiche haben Vorrang. Der innerste Bereich hat den höchsten Vorrang, während der äußerste Bereich den niedrigsten hat. Dies ist die Gültigkeitsbereich-Kette. Der erste in der Kette ist der innerste Bereich, und der letzte ist der äußerste Bereich. Betrachten Sie das folgende Beispiel:

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

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen `inside`'s Parameter `x` und `outside`'s Variable `x`. Die Gültigkeitsbereich-Kette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`'s `x` Vorrang vor `outside`'s `x`, und `20` (`inside`'s `x`) wird zurückgegeben anstelle von `10` (`outside`'s `x`).

## Verwenden des Arguments-Objekts

Die Argumente einer Funktion werden in einem arrayähnlichen Objekt aufbewahrt. Innerhalb einer Funktion können Sie auf die ihr übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordnungsnummer des Arguments ist, beginnend bei `0`. Das erste an eine Funktion übergebene Argument wäre `arguments[0]`. Die Gesamtzahl der Argumente wird durch `arguments.length` angegeben.

Mithilfe des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als sie formell akzeptieren soll. Dies ist oft nützlich, wenn Sie nicht im Voraus wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die tatsächliche Anzahl der an die Funktion übergebenen Argumente zu bestimmen, und dann auf jedes Argument mithilfe des `arguments`-Objekts zugreifen.

Zum Beispiel, betrachten Sie eine Funktion, die mehrere Zeichenfolgen zusammenfügt. Das einzige formale Argument für die Funktion ist eine Zeichenfolge, die die Trennzeichen angibt, mit denen die Elemente zusammengefügt werden sollen. Die Funktion ist wie folgt definiert:

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

Sie können beliebig viele Argumente an diese Funktion übergeben, und sie fügt jedes Argument in eine Zeichenfolgenliste zusammen:

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Die `arguments`-Variable ist „arrayähnlich“, aber kein Array. Sie ist arrayähnlich, da sie einen nummerierten Index und eine `length`-Eigenschaft hat. Sie besitzt jedoch _nicht_ alle Array-Manipulationsmethoden.

Weitere Informationen erhalten Sie im {{jsxref("Function")}}-Objekt im JavaScript-Referenzhandbuch.

## Parameter von Funktionen

Es gibt zwei spezielle Arten von Parametern: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript haben die Parameter von Funktionen standardmäßig den Wert `undefined`. Allerdings kann es in einigen Situationen nützlich sein, einen anderen Standardwert festzulegen. Genau das tun Standardparameter.

Bisher bestand die allgemeine Strategie zur Festlegung von Standardwerten darin, die Parameterwerte im Funktionskörper zu prüfen und einen Wert zuzuweisen, wenn sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wäre sein Wert `undefined` beim Auswerten von `a*b`, und ein Aufruf von `multiply` würde normalerweise `NaN` zurückgegeben. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

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

Für weitere Details, siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) in der Referenz.

### Restparameter

Die [Restparameter]-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente von dem zweiten bis zum letzten zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fetter Pfeil_ genannt, um es von einem hypothetischen `->`-Syntax in zukünftigen JavaScript zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsausdrücken und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Pfeilfunktionen: _kürzere Funktionen_ und _keine Bindung von `this`_.

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

### Kein gesondertes this

Bis zu Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Fall eines Konstruktors, undefined bei [striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als „Objektmethode“ aufgerufen wird, usw.). Dies erwies sich als weniger ideal bei einem objektorientierten Programmiersstil.

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

In ECMAScript 3/5 wurde dieses Problem durch die Zuweisung des Werts in `this` an eine Variable gelöst, die geschlossen werden konnte.

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

Alternativ hätte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden können, so dass der korrekte `this`-Wert an die `growUp()`-Funktion übergeben würde.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umschließenden Ausführungskontexts wird verwendet. Somit hat im folgenden Code das `this` innerhalb der Funktion, die an `setInterval` übergeben wird, denselben Wert wie `this` in der umschließenden Funktion:

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
