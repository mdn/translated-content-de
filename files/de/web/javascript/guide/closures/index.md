---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion, die zusammengebündelt (eingeschlossen) ist, mit Referenzen auf ihren umgebenden Zustand (die **lexikalische Umgebung**). Anders ausgedrückt, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zum Zeitpunkt der Funktionserstellung.

## Lexikalische Bereichseinschränkung

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

`init()` erstellt eine lokale Variable mit dem Namen `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur innerhalb des Körpers der `init()`-Funktion verfügbar ist. Beachten Sie, dass die `displayName()`-Funktion keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen der äußeren Bereiche haben, kann `displayName()` auf die in der übergeordneten Funktion `init()` deklarierte Variable `name` zugreifen.

Führen Sie den Code mit [diesem JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus und beachten Sie, dass die `console.log()`-Anweisung innerhalb der `displayName()`-Funktion erfolgreich den Wert der `name`-Variablen anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalische Bereichseinschränkung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Bereichseinschränkung den Ort verwendet, an dem eine Variable im Quellcode deklariert ist, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Bereich deklariert sind.

### Bereichseinschränkungen mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionbereich_ und _globaler Bereich_. Variablen, die mit `var` deklariert sind, haben entweder einen Funktionenbereich oder einen globalen Bereich, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert sind. Dies kann kompliziert sein, denn Blöcke mit geschweiften Klammern erstellen keine Bereiche:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z.B. C, Java), in denen Blöcke Bereiche erstellen, sollte der obige Code einen Fehler in der `console.log`-Zeile werfen, da wir außerhalb des Bereichs von `x` in einem der Blöcke sind. Da Blöcke jedoch keine Bereiche für `var` erstellen, erzeugen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das unten eingeführt wird und veranschaulicht, wie dies tatsächliche Fehler verursachen kann, wenn es mit Closures kombiniert wird.

In ES6 führte JavaScript die `let`- und `const`-Deklarationen ein, die es Ihnen unter anderem, wie [temporäre Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz), ermöglichen, blockbezogene Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Bereiche behandelt, jedoch nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zudem führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine andere Art von Gültigkeitsbereich einführten. Closures können Variablen in all diesen Bereichen erfassen, die wir später einführen werden.

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

Die Ausführung dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion oben. Der Unterschied (und das Interessante) ist, dass die innere Funktion `displayName()` von der äußeren Funktion zurückgegeben wird, _bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code weiterhin funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Nachdem `makeFunc()` die Ausführung beendet hat, könnten Sie erwarten, dass die `name`-Variable nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erzeugung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz auf ihre lexikalische Umgebung bei, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ein etwas interessanteres Beispiel – eine `makeAdder`-Funktion:

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` annimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einzelnes Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` ein Funktionsfabrikator. Es erstellt Funktionen, die einen spezifischen Wert zu ihrem Argument addieren können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen: eine, die fünf zu ihrem Argument addiert, und eine, die 10 addiert.

`add5` und `add10` bilden beide Closures. Sie teilen sich dieselbe Funktionskörperdefinition, speichern aber unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung von `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diesen Daten arbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Dementsprechend können Sie ein Closure überall dort einsetzen, wo Sie normalerweise ein Objekt mit nur einer einzigen Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, treten insbesondere im Web häufig auf. Ein großer Teil des in Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein Verhalten und hängen es dann an ein Ereignis, das durch den Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Rückruf angehängt (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Angenommen, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `<body>`-Elements (in Pixeln) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit festzulegen:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

Solche interaktiven Schaltflächen zur Textgröße können die `font-size`-Eigenschaft des `<body>`-Elements ändern, und die Anpassungen werden durch die relativen Einheiten von anderen Elementen auf der Seite übernommen.

Hier ist der JavaScript-Code:

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

`size12`, `size14` und `size16` sind nun Funktionen, die den Text des Hauptbereichs auf 12, 14 und 16 Pixel vergrößern. Sie können sie an Schaltflächen anhängen, wie im folgenden Codebeispiel gezeigt.

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```

Führen Sie den Code mit [JSFiddle](https://jsfiddle.net/hotae160/) aus.

## Emulieren privater Methoden mit Closures

Sprachen wie Java erlauben es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf den Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code zeigt, wie Sie Closures verwenden, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures das [Modul-Design-Muster](https://www.google.com/search?q=javascript+module+pattern) befolgen.

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

In vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier gibt es jedoch eine einzige lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die geteilte lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert ist_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können weder auf eines dieser privaten Mitglieder außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt auf sie zu, indem Sie die drei öffentlichen Funktionen verwenden, die aus dem anonymen Wrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die dieselbe lexikalische Umgebung teilen. Dank der lexikalischen Bereichseinschränkung in JavaScript haben sie jeweils Zugriff auf die `privateCounter`-Variable und die `changeBy`-Funktion.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure referenziert eine andere Version der `privateCounter`-Variable durch sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung durch Änderung des Werts dieser Variable. Ändert sich der Wert der Variablen in einem Closure, hat dies keine Auswirkungen auf den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind. Insbesondere _Datenverbergung_ und _Kapselung_.

## Gültigkeitsbereichskette von Closures

Der Zugriff einer verschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion umfasst den umgebenden Gültigkeitsbereich der äußeren Funktion – was effektiv eine Kette von Funktionsbereichen erstellt. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, die alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures Zugriff auf _alle_ äußeren Bereiche haben.

Closures können auch Variablen in Blockbereichen und Modulbereichen erfassen. Zum Beispiel erstellt das folgende eine Closure über die blockgebundene Variable `y`:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modulgebundene Variable `x` schließen. Selbst wenn `x` nicht direkt von anderen Modulen zugänglich ist, kann es mit den Funktionen gelesen und beschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _lebendige {{Glossary("binding", "Bindungen")}}_ betrachtet werden, weil sich der importierte Wert entsprechend ändert, wenn sich der Originalwert ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Schlüsselworts trat häufig ein Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellten. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

```html
<p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

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
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Probieren Sie den Code in [JSFiddle](https://jsfiddle.net/v7gjv/8164/) aus.

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet jeweils ein `onfocus`-Ereignis, das die zugehörige Hilfsmethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal, auf welches Feld Sie klicken, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die an `onfocus` zugewiesenen Funktionen Closures bilden. Sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Gültigkeitsbereich der Funktion `setupHelp`. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt die gleiche einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und daher aufgrund von Hoisting den Gültigkeitsbereich der Funktion hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus` Rückrufe ausgeführt werden. Da die Schleife bis zu diesem Zeitpunkt bereits abgeschlossen ist, zeigt das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall ist, mehr Closures zu verwenden: insbesondere, um eine Funktionsfabrik zu verwenden, wie zuvor beschrieben:

```js
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

Führen Sie den Code mit [diesem JSFiddle-Link](https://jsfiddle.net/v7gjv/9573/) aus.

Dies funktioniert wie erwartet. Statt dass alle Rückrufe eine einzige lexikalische Umgebung teilen, erstellt die `makeHelpCallback`-Funktion _eine neue lexikalische Umgebung_ für jeden Rückruf, in der sich `help` auf den entsprechenden String aus dem `helpText`-Array bezieht.

Eine andere Möglichkeit, das obige Beispiel zu schreiben, besteht darin, anonyme Closures zu verwenden:

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

Wenn Sie nicht mehr Closures verwenden möchten, können Sie auch das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort verwenden:

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

Dieses Beispiel verwendet `const` statt `var`, sodass jede Closure die blockgebundene Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte es sein, `forEach()` zu verwenden, um über das `helpText`-Array zu iterieren und einen Listener für jedes [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) anzuhängen, wie gezeigt:

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

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## Leistungsüberlegungen

Wie bereits erwähnt, verwaltet jede Instanz einer Funktion ihren eigenen Gültigkeitsbereich und ihr eigenes Closure. Daher ist es unklug, Funktionen unnötigerweise innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungszeit als auch auf den Speicherverbrauch negativ beeinflusst.

Zum Beispiel sollten Methoden normalerweise mit dem Prototyp des Objekts verknüpft werden, anstatt im Konstruktor des Objekts definiert zu werden, wenn ein neues Objekt/eine Klasse erstellt wird. Der Grund dafür ist, dass die Methoden jedes Mal neu zugewiesen würden, wenn der Konstruktor aufgerufen wird (das heißt, für jede Objekterzeugung).

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

Da der vorherige Code nicht von den Vorteilen der Verwendung von Closures in diesem speziellen Fall profitiert, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden:

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

Allerdings wird nicht empfohlen, den Prototyp neu zu definieren. Das folgende Beispiel fügt stattdessen dem vorhandenen Prototyp Elemente hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden, und die Methodendefinitionen müssen nicht bei jeder Objekterzeugung erfolgen. Weitere Informationen finden Sie unter [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
