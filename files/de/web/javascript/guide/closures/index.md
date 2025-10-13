---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Ein **Closure** ist die Kombination aus einer Funktion, die zusammen mit Verweisen auf ihren umgebenden Zustand (die **lexikale Umgebung**) gebündelt wird. Mit anderen Worten, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, also zur Erstellungszeit der Funktion.

## Lexikalisches Scoping

Betrachten Sie den folgenden Beispielcode:

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Rumpf der `init()`-Funktion verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen besitzt. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Gültigkeitsbereiche haben, kann `displayName()` auf die Variable `name` zugreifen, die in der übergeordneten Funktion `init()` deklariert wurde.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()`-Anweisung innerhalb der Funktion `displayName()` erfolgreich den Wert der Variablen `name` anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalisches Scoping_, das beschreibt, wie ein Parser Variablennamen löst, wenn Funktionen geschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass lexikalisches Scoping den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Geschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Gültigkeitsbereich deklariert sind.

### Scoping mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionsscope_ und _globaler Scope_. Variablen, die mit `var` deklariert werden, sind entweder funktionsabhängig oder global, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann schwierig sein, da Blöcke mit geschweiften Klammern keine Scopes erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z. B. C, Java), bei denen Blöcke Scopes erstellen, würde der obige Code am `console.log`-Linie einen Fehler auslösen, da wir außerhalb des Gültigkeitsbereichs von `x` in beiden Blöcken sind. Da Blöcke jedoch für `var` keine Scopes erstellen, erstellen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das unten eingeführt wird und veranschaulicht, wie dies in Kombination mit Closures tatsächliche Fehler verursachen kann.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die unter anderem [temporäre Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen und blockgebundene Variablen erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Scopes behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zusätzlich führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine andere Art von Scope eingeführt haben. Closures können Variablen in all diesen Gültigkeitsbereichen erfassen, die wir später einführen werden.

## Closure

Betrachten Sie das folgende Codebeispiel:

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion. Was anders (und interessant) ist, ist, dass die innere Funktion `displayName()` von der äußeren Funktion zurückgegeben wird, _bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unlogisch erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offenbar nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination aus einer Funktion und der lexikalen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` ein Verweis auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält einen Verweis auf ihre lexikale Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` beim Aufruf von `myFunc` zur Verwendung verfügbar, und "Mozilla" wird an `console.log` übergeben.

Hier ist ein etwas interessanteres Beispiel - eine `makeAdder`-Funktion:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` nimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einzelnes Argument `y` und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen - eine, die fünf zu ihrem Argument hinzufügt, und eine, die 10 hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen sich die gleiche Funktionskörperdefinition, speichern jedoch unterschiedliche lexikale Umgebungen. In `add5`'s lexikaler Umgebung ist `x` gleich 5, während in der lexikalen Umgebung von `add10` `x` gleich 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikale Umgebung) mit einer Funktion zu verknüpfen, die mit diesen Daten operiert. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind insbesondere im Web häufig. Viel vom Code, der in Frontend-JavaScript geschrieben wird, ist ereignisbasiert. Sie definieren ein Verhalten und verknüpfen es dann mit einem Ereignis, das vom Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Rückruf (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird) angehängt.

Nehmen wir zum Beispiel an, wir möchten Buttons zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `body`-Elements (in Pixeln) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen Maßeinheit `em` festzulegen:

```css
body {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

Solche interaktiven Textgrößen-Buttons können die `font-size`-Eigenschaft des `body`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

Hier ist das JavaScript:

```js
function makeSizer(size) {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Körpertext auf 12, 14 bzw. 16 Pixel skalieren. Sie können sie an Buttons anhängen, wie im folgenden Codebeispiel gezeigt.

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
<p>This is some text that will change size when you click the buttons above.</p>
```

{{EmbedLiveSample("practical closures", "", "200")}}

## Private Methoden mit Closures nachahmen

Sprachen wie Java erlauben es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu simulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code veranschaulicht, wie man mit Closures öffentliche Funktionen definiert, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Module Design Pattern](https://www.google.com/search?q=javascript+module+pattern) folgen.

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

In früheren Beispielen hatte jedes Closure seine eigene lexikale Umgebung. Hier hingegen gibt es eine einzelne lexikale Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die geteilte lexikale Umgebung wird im Rumpf einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert wurde_ (auch bekannt als ein {{Glossary("IIFE", "IIFE")}}). Die lexikale Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können von außerhalb der anonymen Funktion aus nicht auf eines dieser privaten Mitglieder zugreifen. Stattdessen greifen Sie indirekt auf sie zu, indem Sie die drei öffentlichen Funktionen verwenden, die vom anonymen Wrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikale Umgebung teilen. Dank des lexikalischen Scopings von JavaScript haben sie jeweils Zugang zur `privateCounter`-Variable und zur Funktion `changeBy`.

```js
function makeCounter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

Beachten Sie, wie die zwei Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure referenziert eine andere Version der `privateCounter`-Variable durch sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikale Umgebung, indem der Wert dieser Variable geändert wird. Änderungen des Variablenwerts in einem Closure beeinflussen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind. Insbesondere _Datenverbergen_ und _Kapselung_.

## Scope-Kette von Closures

Der Zugriff einer geschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion umfasst den umgebenden Gültigkeitsbereich der äußeren Funktion und erstellt effektiv eine Kette von Funktionsscopes. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

```js
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

Sie können auch ohne anonyme Funktionen schreiben:

```js
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

Im obigen Beispiel gibt es eine Reihe von geschachtelten Funktionen, die alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures Zugriff auf _alle_ äußeren Scopes haben.

Closures können auch Variablen in Blockscopes und Modulscope erfassen. Zum Beispiel erstellt das folgende ein Closure über die blockgebundene Variable `y`:

```js
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```

Closures über Module können interessanter sein.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

Hier exportiert das Modul ein Paar Getter-Setter-Funktionen, die über die Modul-Scope-Variable `x` schließen. Auch wenn `x` nicht direkt von anderen Modulen aus zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _live {{Glossary("binding", "Bindings")}}_ angesehen werden, da sich das importierte Element entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

```js
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // Close over an imported live binding
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## Erstellen von Closures in Schleifen: Ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat häufig ein Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellt haben. Um dies zu demonstrieren, beachten Sie den folgenden Beispielcode.

```html live-sample___closures_bad
<p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```js example-bad live-sample___closures_bad
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

{{EmbedLiveSample("closures_bad", "", "200")}}

Das Array `helpText` definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verknüpft ein `onfocus`-Ereignis, das die zugehörige Hilfemethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal welches Feld Sie fokussieren, es wird die Nachricht zu Ihrem Alter angezeigt.

Der Grund dafür ist, dass die den `onfocus` zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Scope der `setupHelp`-Funktion. Drei Closures wurden von der Schleife erstellt, aber jedes teilt dieselbe einzige lexikale Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und aufgrund von Hoisting funktionalen Scope hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits ihren Lauf beendet hat, verweist das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall ist die Verwendung von mehr Closures: insbesondere die Verwendung einer Funktionsfabrik, wie zuvor beschrieben:

```html hidden live-sample___closures_factory
<p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```js live-sample___closures_factory
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

{{EmbedLiveSample("closures_factory", "", "200")}}

Dies funktioniert wie erwartet. Statt dass alle Callbacks ein einzelnes lexikales Umfeld teilen, erstellt die Funktion `makeHelpCallback` _eine neue lexikale Umgebung_ für jeden Callback, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das obige mit anonymen Closures zu schreiben, ist:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

Wenn Sie nicht mehr Closures verwenden möchten, können Sie das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort verwenden:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Dieses Beispiel verwendet `const` anstelle von `var`, sodass jedes Closure die blockgebundene Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Wenn Sie ohnehin modernes JavaScript schreiben, können Sie weitere Alternativen zur einfachen `for`-Schleife in Betracht ziehen, wie die Verwendung der {{jsxref("Statements/for...of", "for...of")}}-Schleife und die Deklaration von `item` als `let` oder `const`, oder die Verwendung der {{jsxref("Array/forEach", "forEach()")}}-Methode, die beide das Closure-Problem vermeiden.

```js
for (const item of helpText) {
  document.getElementById(item.id).onfocus = () => {
    document.getElementById("help").textContent = item.help;
  };
}

helpText.forEach((item) => {
  document.getElementById(item.id).onfocus = () => {
    showHelp(item.help);
  };
});
```

## Performanceüberlegungen

Wie zuvor erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Scope und ihr eigenes Closure. Daher ist es unklug, unnötigerweise Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht erforderlich sind, da dies die Skript-Performance sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch den Speicherverbrauch negativ beeinflusst.

Bei der Erstellung eines neuen Objekts oder einer neuen Klasse sollten Methoden normalerweise dem Prototyp des Objekts zugewiesen werden, anstatt direkt im Objektkonstruktor definiert zu werden. Der Grund ist, dass jedes Mal, wenn der Konstruktor aufgerufen wird, die Methoden neu zugewiesen würden (das heißt, für jede Objekterstellung).

Betrachten Sie den folgenden Fall:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

Da der vorherige Code in diesem speziellen Fall nicht von den Vorteilen der Verwendung von Closures profitiert, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

Das Ersetzen des Prototyps wird jedoch nicht empfohlen. Das folgende Beispiel fügt stattdessen dem bestehenden Prototyp Elemente hinzu:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten gemeinsam genutzt werden, und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.
