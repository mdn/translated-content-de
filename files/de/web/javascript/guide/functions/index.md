---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Funktionen sind eine der grundlegenden Bausteine in JavaScript. Eine Funktion in JavaScript ist ähnlich einer Prozedur—eine Reihe von Aussagen, die eine Aufgabe ausführen oder einen Wert berechnen. Damit eine Prozedur als Funktion qualifiziert ist, sollte sie einige Eingaben nehmen und eine Ausgabe liefern, bei der es eine offensichtliche Beziehung zwischen der Eingabe und der Ausgabe gibt. Um eine Funktion zu verwenden, müssen Sie sie irgendwo in dem Gültigkeitsbereich definieren, aus dem Sie sie aufrufen möchten.

Siehe auch das [umfassende Referenzkapitel über JavaScript-Funktionen](/de/docs/Web/JavaScript/Reference/Functions), um die Details kennenzulernen.

## Funktionen definieren

### Funktionsdeklarationen

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsstatement** genannt) besteht aus dem [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Schlüsselwort, gefolgt von:

- Dem Namen der Funktion.
- Einer Liste von Parametern für die Funktion, eingeschlossen in Klammern und getrennt durch Kommata.
- Den JavaScript-Anweisungen, die die Funktion definieren, eingeschlossen in geschweiften Klammern, `{ /* … */ }`.

Zum Beispiel definiert der folgende Code eine einfache Funktion namens `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square` nimmt einen Parameter, genannt `number`. Die Funktion besteht aus einer Aussage, die angibt, den Parameter der Funktion (d.h. `number`) mit sich selbst zu multiplizieren und zurückzugeben. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung spezifiziert den Wert, der von der Funktion zurückgegeben wird, nämlich `number * number`.

Parameter werden im Wesentlichen **als Wert** an Funktionen übergeben — wenn also der Code im Körper einer Funktion einem Parameter, der an die Funktion übergeben wurde, einen völlig neuen Wert zuweist, **ist diese Änderung global oder im aufrufenden Code nicht sichtbar**.

Wenn Sie ein Objekt als Parameter übergeben, ist eine Änderung der Eigenschaften des Objekts durch die Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

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

Wenn Sie ein Array als Parameter übergeben, ist eine Änderung eines Wertes im Array durch die Funktion außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt:

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

### Funktionsexpressionen

Während die oben dargestellte Funktionsdeklaration syntaktisch eine Aussage ist, können Funktionen auch durch eine [Funktionsexpression](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werden.

Eine solche Funktion kann **anonym** sein; sie muss keinen Namen haben. Zum Beispiel hätte die Funktion `square` so definiert werden können:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

Ein Name _kann_ jedoch bei einer Funktionsexpression angegeben werden. Ein Name erlaubt es der Funktion, auf sich selbst zu verweisen, und erleichtert es auch, die Funktion in den Stack-Traces eines Debuggers zu identifizieren:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Funktionsexpressionen sind praktisch, wenn eine Funktion als Argument an eine andere Funktion übergeben werden muss. Das folgende Beispiel zeigt eine `map`-Funktion, die eine Funktion als erstes Argument und ein Array als zweites Argument erhalten soll:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Im folgenden Code erhält die Funktion eine durch eine Funktionsexpression definierte Funktion und führt sie für jedes Element des als zweites Argument empfangenen Arrays aus:

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

In JavaScript kann eine Funktion basierend auf einer Bedingung definiert werden. Zum Beispiel wird die folgende Funktionsdefinition `myFunc` nur definiert, wenn `num` gleich `0` ist:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Neben der beschriebenen Funktionsdefinition können Sie auch den {{jsxref("Function")}}-Konstruktor verwenden, um zur Laufzeit Funktionen aus einem String zu erstellen, ähnlich der {{jsxref("Global_Objects/eval", "eval()")}}-Funktion.

Eine **Methode** ist eine Funktion, die eine Eigenschaft eines Objekts ist. Lesen Sie mehr über Objekte und Methoden im Kapitel [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects).

## Funktionen aufrufen

Das _Definieren_ einer Funktion führt sie nicht aus. Die Definition benennt die Funktion und legt fest, was zu tun ist, wenn die Funktion aufgerufen wird.

Das **Aufrufen** der Funktion führt tatsächlich die angegebenen Aktionen mit den angegebenen Parametern aus. Wenn Sie beispielsweise die Funktion `square` definieren, könnten Sie sie wie folgt aufrufen:

```js
square(5);
```

Die vorherige Anweisung ruft die Funktion mit einem Argument von `5` auf. Die Funktion führt ihre Anweisungen aus und gibt den Wert `25` zurück.

Funktionen müssen _im Gültigkeitsbereich_ sein, wenn sie aufgerufen werden, aber die Funktionsdeklaration kann [gehoben](#funktion_hoisting) werden (unterhalb des Aufrufs im Code erscheinen). Der Gültigkeitsbereich einer Funktionsdeklaration ist die Funktion, in der sie deklariert wird (oder das gesamte Programm, wenn sie auf oberster Ebene deklariert wird).

Die Argumente einer Funktion sind nicht auf Strings und Zahlen beschränkt. Sie können ganze Objekte an eine Funktion übergeben. Die Funktion `showProps()` (definiert im Kapitel [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)) ist ein Beispiel für eine Funktion, die ein Objekt als Argument annimmt.

Eine Funktion kann sich selbst aufrufen. Zum Beispiel finden Sie hier eine Funktion, die rekursiv Fakultäten berechnet:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
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

Es gibt andere Möglichkeiten, Funktionen aufzurufen. Oft gibt es Fälle, in denen eine Funktion dynamisch aufgerufen werden muss, die Anzahl der Argumente für eine Funktion variiert oder der Kontext des Funktionsrufs zur Laufzeit auf ein bestimmtes Objekt festgelegt werden muss.

Es stellt sich heraus, dass _Funktionen selbst Objekte sind_ — und diese Objekte wiederum Methoden haben. (Siehe das {{jsxref("Function")}}-Objekt.) Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) und [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) können verwendet werden, um dieses Ziel zu erreichen.

### Funktion hoisting

Betrachten Sie das folgende Beispiel:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

Dieser Code läuft ohne Fehler, obwohl die Funktion `square()` aufgerufen wird, bevor sie deklariert ist. Dies liegt daran, dass der JavaScript-Interpreter die gesamte Funktionsdeklaration an den Anfang des aktuellen Gültigkeitsbereichs hebt, sodass der obenstehende Code äquivalent zu folgendem ist:

```js
// Alle Funktionsdeklarationen befinden sich effektiv am Anfang des Gültigkeitsbereichs
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Funktionshoisting funktioniert nur mit Funktions_deklarationen_ — nicht mit Funktions_expressionen_. Der folgende Code wird nicht funktionieren:

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Funktionsscope

In einer Funktion definierte Variablen können von außerhalb der Funktion nicht aufgerufen werden, da die Variable nur im Gültigkeitsbereich der Funktion definiert ist. Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die im Gültigkeitsbereich definiert sind, in dem sie definiert ist.

Mit anderen Worten, eine Funktion, die im globalen Gültigkeitsbereich definiert ist, kann auf alle im globalen Gültigkeitsbereich definierten Variablen zugreifen. Eine Funktion, die innerhalb einer anderen Funktion definiert ist, kann auch auf alle im übergeordneten Gültigkeitsbereich definierten Variablen zugreifen und auf alle anderen Variablen, auf die die übergeordnete Funktion zugreifen kann.

```js
// Die folgenden Variablen sind im globalen Gültigkeitsbereich definiert
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// Diese Funktion ist im globalen Gültigkeitsbereich definiert
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// Ein Beispiel für eine verschachtelte Funktion
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

## Scope und der Funktionsstack

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Es gibt drei Möglichkeiten, wie eine Funktion sich selbst referenzieren kann:

1. Der Name der Funktion
2. [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. Eine im Gültigkeitsbereich befindliche Variable, die auf die Funktion verweist

Betrachten Sie zum Beispiel die folgende Funktionsdefinition:

```js
const foo = function bar() {
  // Anweisungen hier
};
```

Im Funktionskörper sind alle folgenden Äquivalente:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Eine Funktion, die sich selbst aufruft, nennt man _rekursive Funktion_. In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen den gleichen Code mehrmals aus und erfordern eine Bedingung (um eine Endlosschleife oder vielmehr in diesem Fall eine endlose Rekursion zu vermeiden).

Betrachten Sie zum Beispiel die folgende Schleife:

```js
let x = 0;
// "x < 10" ist die Schleifenbedingung
while (x < 10) {
  // Aktionen ausführen
  x++;
}
```

Es kann in eine rekursive Funktionsdeklaration umgewandelt werden, gefolgt von einem Aufruf dieser Funktion:

```js
function loop(x) {
  // "x >= 10" ist die Abbruchbedingung (entspricht "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // Aktionen ausführen
  loop(x + 1); // der rekursive Aufruf
}
loop(0);
```

Einige Algorithmen können jedoch nicht einfache iterative Schleifen sein. Zum Beispiel ist das Abrufen aller Knoten einer Baumstruktur (wie des [DOM](/de/docs/Web/API/Document_Object_Model)) einfacher über Rekursion:

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // etwas mit node tun
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

Im Vergleich zur Funktion `loop` macht jeder rekursive Aufruf hier viele rekursive Aufrufe.

Es ist möglich, jeden rekursiven Algorithmus in einen nicht-rekursiven umzuwandeln, aber die Logik ist oft viel komplexer, und dazu ist die Verwendung eines Stacks erforderlich.

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

// Protokolle:
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

Sie können eine Funktion innerhalb einer anderen Funktion verschachteln. Die verschachtelte (innere) Funktion ist privat zu ihrer umschließenden (äußeren) Funktion.

Sie bildet auch ein _Closure_. Ein Closure ist ein Ausdruck (meistens eine Funktion), der freie Variablen zusammen mit einer Umgebung haben kann, die diese Variablen bindet (die den Ausdruck "schließt").

Da eine verschachtelte Funktion ein Closure ist, bedeutet dies, dass eine verschachtelte Funktion die Argumente und Variablen ihrer umschließenden Funktion "erben" kann. Mit anderen Worten, die innere Funktion enthält den Gültigkeitsbereich der äußeren Funktion.

Zusammengefasst:

- Die innere Funktion kann nur von Anweisungen in der äußeren Funktion aus aufgerufen werden.
- Die innere Funktion bildet ein Closure: Die innere Funktion kann die Argumente und Variablen der äußeren Funktion verwenden, während die äußere Funktion die Argumente und Variablen der inneren Funktion nicht verwenden kann.

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

Da die innere Funktion ein Closure bildet, können Sie die äußere Funktion aufrufen und sowohl für die äußere als auch für die innere Funktion Argumente angeben:

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Denken Sie daran wie: Geben Sie mir eine Funktion, die 3 zu allem hinzufügt, was Sie ihr geben
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```

### Erhaltung von Variablen

Beachten Sie, wie `x` erhalten bleibt, wenn `inside` zurückgegeben wird. Ein Closure muss die Argumente und Variablen in allen Gültigkeitsbereichen, auf die es verweist, bewahren. Da jeder Aufruf potenziell unterschiedliche Argumente liefert, wird für jeden Aufruf von `outside` ein neues Closure erstellt. Der Speicher kann erst freigegeben werden, wenn die zurückgegebene `inside` nicht mehr zugänglich ist.

Dies unterscheidet sich nicht von der Speicherung von Referenzen in anderen Objekten, ist aber oft weniger offensichtlich, da man die Referenzen nicht direkt setzt und sie nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt werden. Zum Beispiel:

- Eine Funktion (`A`) enthält eine Funktion (`B`), die selbst eine Funktion (`C`) enthält.
- Sowohl `B` als auch `C` bilden hier Closures. Daher kann `B` auf `A` zugreifen, und `C` kann auf `B` zugreifen.
- Darüber hinaus, da `C` auf `B` zugreifen kann, das auf `A` zugreifen kann, kann `C` auch auf `A` zugreifen.

Damit können Closures mehrere Gültigkeitsbereiche enthalten; sie enthalten rekursiv den Gültigkeitsbereich der Funktionen, die sie enthalten. Dies wird als _Scope Chaining_ bezeichnet. (Warum dies als "Chaining" bezeichnet wird, wird später erklärt.)

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
A(1); // Protokolliert 6 (was 1 + 2 + 3 ist)
```

In diesem Beispiel greift `C` auf `B`'s `y` und `A`'s `x` zu.

Dies kann durchgeführt werden, da:

1. `B` bildet ein Closure, das `A` enthält (d.h. `B` kann auf `A`'s Argumente und Variablen zugreifen).
2. `C` bildet ein Closure, das `B` enthält.
3. Da `C`'s Closure `B` enthält und `B`'s Closure `A` enthält, enthält `C`'s Closure auch `A`. Das bedeutet `C` kann sowohl `B` als auch `A`'s Argumente und Variablen zugreifen. Mit anderen Worten, `C` _kettet_ die Gültigkeitsbereiche von `B` und `A`, in dieser Reihenfolge.

Das Gegenteil ist jedoch nicht wahr. `A` kann nicht auf `C` zugreifen, weil `A` auf kein Argument oder Variable von `B` zugreifen kann, welches `C` eine Variable davon ist. Daher bleibt `C` privat nur für `B`.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in den Gültigkeitsbereichen eines Closures denselben Namen haben, gibt es einen _Namenskonflikt_. Mehr verschachtelte Gültigkeitsbereiche haben Vorrang. Der innerste Gültigkeitsbereich hat die höchste Priorität, während der äußerste Gültigkeitsbereich die niedrigste hat. Dies ist die Scope-Kette. Die erste in der Kette ist der innerste Gültigkeitsbereich, und die letzte ist der äußerste Gültigkeitsbereich. Betrachten Sie das folgende:

```js
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (statt 10)
```

Der Namenskonflikt tritt bei der Anweisung `return x * 2` auf und besteht zwischen dem Parameter `x` der `inside`-Funktion und der Variablen `x` der `outside`-Funktion. Die Scope-Kette hier ist `inside` => `outside` => globales Objekt. Daher hat `inside`'s `x` Vorrang vor `outside`'s `x`, und `20` (`inside`'s `x`) wird zurückgegeben statt `10` (`outside`'s `x`).

## Closures

Closures sind eine der leistungsfähigsten Funktionen von JavaScript. JavaScript erlaubt die Verschachtelung von Funktionen und bietet der inneren Funktion vollen Zugriff auf alle Variablen und Funktionen, die innerhalb der äußeren Funktion definiert sind (sowie auf alle anderen Variablen und Funktionen, auf die die äußere Funktion Zugriff hat).

Die äußere Funktion hat jedoch _keinen_ Zugriff auf die Variablen und Funktionen, die innerhalb der inneren Funktion definiert sind. Dies bietet eine Art von Kapselung für die Variablen der inneren Funktion.

Da aber die innere Funktion Zugriff auf den Gültigkeitsbereich der äußeren Funktion hat, werden die in der äußeren Funktion definierten Variablen und Funktionen länger leben als die Dauer der Ausführung der äußeren Funktion, wenn es der inneren Funktion gelingt, die Lebensdauer der äußeren Funktion zu überdauern. Ein Closure wird erstellt, wenn die innere Funktion irgendwie für jeden Bereich außerhalb der äußeren Funktion verfügbar gemacht wird.

```js
// Die äußere Funktion definiert eine Variable namens "name"
const pet = function (name) {
  const getName = function () {
    // Die innere Funktion hat Zugriff auf die "name"-Variable der äußeren Funktion
    return name;
  };
  return getName; // Rückgabe der inneren Funktion, damit sie für äußere Bereiche zugänglich ist
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
```

Es kann noch viel komplexer sein als der obige Code. Ein Objekt, das Methoden zur Manipulation der inneren Variablen der äußeren Funktion enthält, kann zurückgegeben werden.

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) ist äquivalent zu setName: function (newName)
    // in diesem Kontext
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

Im obigen Code ist die `name`-Variable der äußeren Funktion für die inneren Funktionen zugänglich, und es gibt keinen anderen Weg, auf die inneren Variablen außer durch die inneren Funktionen zuzugreifen. Die inneren Variablen der inneren Funktionen fungieren als sichere Speicher für die Argumente und Variablen der äußeren Funktion. Sie halten „beständige“ und „verkapselte“ Daten, mit denen die inneren Funktionen arbeiten können. Die Funktionen müssen nicht einmal einer Variable zugewiesen werden oder einen Namen haben.

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // Ein Code, den wir nicht wollen, dass Outsider ihn ändern…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

> [!NOTE]
> Es gibt eine Reihe von Stolpersteinen, auf die Sie achten sollten, wenn Sie Closures verwenden!
>
> Wenn eine eingeschlossene Funktion eine Variable mit demselben Namen wie eine Variable im äußeren Gültigkeitsbereich definiert, gibt es keine Möglichkeit mehr, auf die Variable im äußeren Gültigkeitsbereich zuzugreifen. (Die innere Bereichsvariable „überschreibt“ die äußere, bis das Programm den inneren Bereich verlässt. Dies kann als [Namenskonflikt](#namenskonflikte) betrachtet werden.)
>
> ```js example-bad
> const createPet = function (name) {
>   // Die äußere Funktion definiert eine Variable mit dem Namen „name“.
>   return {
>     setName(name) {
>       // Die eingeschlossene Funktion definiert auch eine Variable mit dem Namen „name“.
>       name = name; // Wie greifen wir auf das im äußeren Bereich definierte „name“ zu?
>     },
>   };
> ```

## Das arguments-Objekt verwenden

Die Argumente einer Funktion werden in einem arrayähnlichen Objekt gespeichert. Innerhalb einer Funktion können Sie auf die ihr übergebenen Argumente wie folgt zugreifen:

```js
arguments[i];
```

wobei `i` die Ordinalzahl des Arguments ist, beginnend bei `0`. Das erste an eine Funktion übergebene Argument wäre also `arguments[0]`. Die Gesamtanzahl der Argumente wird durch `arguments.length` angegeben.

Durch die Verwendung des `arguments`-Objekts können Sie eine Funktion mit mehr Argumenten aufrufen, als formal angibt. Dies ist oft nützlich, wenn Sie im Voraus nicht wissen, wie viele Argumente an die Funktion übergeben werden. Sie können `arguments.length` verwenden, um die Anzahl der tatsächlich an die Funktion übergebenen Argumente zu bestimmen, und dann auf jedes Argument mit dem `arguments`-Objekt zugreifen.

Zum Beispiel, betrachten Sie eine Funktion, die mehrere Zeichenketten verkettet. Das einzige formale Argument für die Funktion ist eine Zeichenkette, die die Zeichen spezifiziert, die die zu verkettenden Elemente trennt. Die Funktion wird wie folgt definiert:

```js
function myConcat(separator) {
  let result = ""; // Liste initialisieren
  // Durch Argumente iterieren
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

Sie können eine beliebige Anzahl von Argumenten an diese Funktion übergeben, und sie verkettet jedes Argument zu einer Zeichenketten-"Liste":

```js
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

> [!NOTE]
> Das `arguments`-Objekt ist "arrayähnlich", aber kein tatsächliches Array. Es ist arrayähnlich in dem Sinne, dass es einen nummerierten Index und eine `length`-Eigenschaft besitzt. Es besitzt jedoch _nicht_ alle Methoden zur Array-Manipulation.

Weitere Informationen finden Sie im {{jsxref("Function")}}-Objekt in der JavaScript-Referenz.

## Funktionsparameter

Es gibt zwei spezielle Arten der Parametersyntax: _Standardparameter_ und _Restparameter_.

### Standardparameter

In JavaScript sind Parameter von Funktionen standardmäßig `undefined`. In einigen Situationen kann es jedoch nützlich sein, einen anderen Standardwert festzulegen. Genau das machen Standardparameter.

In der Vergangenheit bestand die allgemeine Strategie, Standardwerte festzulegen, darin, Parameterwerte im Funktionskörper zu testen und ihnen einen Wert zuzuweisen, falls sie `undefined` sind.

Im folgenden Beispiel, wenn kein Wert für `b` angegeben wird, wäre sein Wert `undefined`, wenn `a*b` ausgewertet wird, und ein Aufruf von `multiply` hätte normalerweise `NaN` zurückgeliefert. Dies wird jedoch durch die zweite Zeile in diesem Beispiel verhindert:

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

Die [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax ermöglicht es uns, eine unbestimmte Anzahl von Argumenten als Array darzustellen.

Im folgenden Beispiel verwendet die Funktion `multiply` _Restparameter_, um Argumente vom zweiten bis zum letzten zu sammeln. Die Funktion multipliziert diese dann mit dem ersten Argument.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (auch _fat arrow_ genannt, um ihn von einer hypothetischen `->`-Syntax in zukünftigen JavaScript-Versionen zu unterscheiden) hat eine kürzere Syntax im Vergleich zu Funktionsexpressionen und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) oder [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target). Pfeilfunktionen sind immer anonym.

Zwei Faktoren beeinflussten die Einführung von Pfeilfunktionen: _kürzere Funktionen_ und _Nicht-Bindung_ von `this`.

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

Bis zu den Pfeilfunktionen definierte jede neue Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (ein neues Objekt im Falle eines Konstruktors, undefined in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Funktionsaufrufen, das Basisobjekt, wenn die Funktion als „Objektmethode“ aufgerufen wird, usw.). Dies stellte sich im objektorientierten Programmierstil als weniger als ideal heraus.

```js
function Person() {
  // Der Person()-Konstruktor definiert `this` als sich selbst.
  this.age = 0;

  setInterval(function growUp() {
    // Im nichtstrikten Modus definiert die growUp()-Funktion `this`
    // als das globale Objekt, das sich von dem `this` unterscheidet,
    // das vom Person()-Konstruktor definiert wird.
    this.age++;
  }, 1000);
}

const p = new Person();
```

In ECMAScript 3/5 wurde dieses Problem behoben, indem der Wert in `this` einer Variablen zugewiesen wurde, die geschlossen werden konnte.

```js
function Person() {
  // Manche wählen `that` statt `self`.
  // Wählen Sie eine und seien Sie konsistent.
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // Der Rückruf bezieht sich auf die `self`-Variable,
    // deren Wert das erwartete Objekt ist.
    self.age++;
  }, 1000);
}
```

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, so dass der richtige `this`-Wert an die `growUp()`-Funktion übergeben würde.

Eine Pfeilfunktion hat kein eigenes `this`; der `this`-Wert des umgebenden Ausführungskontexts wird verwendet. Daher hat im folgenden Code das `this` innerhalb der Funktion, die an `setInterval` übergeben wird, denselben Wert wie das `this` in der umgebenden Funktion:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` verweist korrekt auf das Personenobjekt
  }, 1000);
}

const p = new Person();
```

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}
