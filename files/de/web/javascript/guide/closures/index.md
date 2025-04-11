---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination aus einer Funktion, die zusammen mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) eingebunden ist. Mit anderen Worten: Ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zum Zeitpunkt der Erstellung der Funktion.

## Lexikalische Bereichsdefinition

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert wird und nur innerhalb des Körpers der Funktion `init()` verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Bereiche haben, kann `displayName()` auf die in der übergeordneten Funktion `init()` deklarierte Variable `name` zugreifen.

Führen Sie den Code mit [diesem JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus und bemerken Sie, dass die `console.log()`-Anweisung innerhalb der Funktion `displayName()` erfolgreich den Wert der Variablen `name` anzeigt, die in ihrer übergeordneten Funktion deklariert wurde. Dies ist ein Beispiel für _lexikalische Bereichsdefinition_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen geschachtelt sind. Das Wort _lexikalisch_ bezieht sich auf die Tatsache, dass die lexikalische Bereichsdefinition den Ort verwendet, an dem eine Variable innerhalb des Quellcodes deklariert wurde, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf in ihrem äußeren Bereich deklarierte Variablen.

### Bereichsdefinition mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Bereichen: _Funktionsbereich_ und _globaler Bereich_. Variablen, die mit `var` deklariert werden, sind entweder funktions- oder globaler Bereich, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Bereiche erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z.B. C, Java), in denen Blöcke Bereiche erstellen, sollte der obige Code auf der `console.log`-Zeile einen Fehler werfen, da wir außerhalb des Bereichs von `x` in einem der Blöcke sind. Da Blöcke jedoch keine Bereiche für `var` erstellen, erstellt die `var`-Anweisung hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake) weiter unten, das zeigt, wie dies zusammen mit Closures zu tatsächlichen Bugs führen kann.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die unter anderem wie [zeitliche Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) es Ihnen ermöglichen, block-basierte Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden in ES6 Blöcke schließlich als Bereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Bereich einführten. Closures können Variablen in all diesen Bereichen erfassen, die wir später vorstellen werden.

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

Das Ausführen dieses Codes hat genau die gleiche Wirkung wie das vorherige Beispiel der `init()`-Funktion oben. Der Unterschied (und das Interessante) ist, dass die innere Funktion `displayName()` aus der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unlogisch erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch weiterhin wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz auf ihre lexikalische Umgebung, innerhalb der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ist ein etwas interessanteres Beispiel — eine `makeAdder`-Funktion:

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

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument addieren können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen — eine, die fünf zu ihrem Argument hinzufügt, und eine, die 10 hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen sich die gleiche Funktionsdefinition, speichern jedoch unterschiedliche lexikalische Umgebungen. In `add5`s lexikalischer Umgebung ist `x` 5, während in der lexikalischen Umgebung für `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es erlauben, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diese Daten arbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind besonders im Web häufig. Viel JavaScript-Code im Front-End ist ereignisbasiert. Sie definieren ein bestimmtes Verhalten und binden es dann an ein Ereignis, das vom Benutzer ausgelöst wird (z.B. ein Klick oder ein Tastendruck). Der Code wird als Rückruffunktion hinzugefügt (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Nehmen wir zum Beispiel an, wir möchten Schaltflächen auf einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `body`-Elements (in Pixel) festzulegen und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit zu setzen:

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

Solche interaktiven Textgrößentasten können die `font-size`-Eigenschaft des `body`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

Hier das JavaScript:

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

`size12`, `size14` und `size16` sind nun Funktionen, die den Text des `body` auf 12, 14 bzw. 16 Pixel anpassen. Sie können sie an Schaltflächen binden, wie im folgenden Codebeispiel gezeigt.

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

Sprachen wie Java ermöglichen es, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code veranschaulicht, wie Closures verwendet werden können, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Entwurfsmuster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In den vorherigen Beispielen hatte jede Closure ihre eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen `counter.increment`, `counter.decrement` und `counter.value` geteilt wird.

Die geteilte lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert wurde_ (dies wird auch als {{Glossary("IIFE", "IIFE")}} bezeichnet). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Auf keines dieser privaten Mitglieder kann von außerhalb der anonymen Funktion zugegriffen werden. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen darauf zu, die von der anonymen Umhüllung zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikalische Umgebung teilen. Dank der lexikalischen Bereichsdefinition von JavaScript haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

```js
const makeCounter = function () {
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
};

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure bezieht sich auf eine andere Version der Variable `privateCounter` in ihrem eigenen Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich ihre lexikalische Umgebung, indem der Wert dieser Variable geändert wird. Änderungen am Variablenwert in einem Closure beeinflussen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise objektorientierter Programmierung zugeordnet werden. Insbesondere _Datenverbergung_ und _Kapselung_.

## Schließungsbereichskette

Der Zugriff einer verschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion umfasst den umgebenden Gültigkeitsbereich der äußeren Funktion, wodurch effektiv eine Kette von Funktionsbereichen erstellt wird. Um dies zu veranschaulichen, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe verschachtelter Funktionen, die alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures Zugriff auf _alle_ äußeren Bereiche haben.

Closures können auch Variablen in Blockbereichen und Modulbereichen erfassen. Zum Beispiel erstellt das folgende ein Closure über die blockbasierte Variable `y`:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modulbasierte Variable `x` geschlossen werden. Selbst wenn `x` nicht direkt von anderen Modulen aus zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _lebendige {{Glossary("binding", "Bindungen")}}_ betrachtet werden, da sich der importierte Wert entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

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

## Erstellen von Closures in Schleifen: ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn Sie diese innerhalb einer Schleife erstellt haben. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Versuchen Sie, den Code in [JSFiddle](https://jsfiddle.net/v7gjv/8164/) auszuführen.

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verknüpft ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfsmethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal welches Feld Sie fokussieren, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die den `onfocus`-Ereignissen zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Gültigkeitsbereich der Funktion `setupHelp`. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt die gleiche einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) enthält. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und daher durch Hoisting einen Funktionsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Rückrufe ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits durchgelaufen ist, zeigt das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: insbesondere eine Funktionsfabrik, wie weiter oben beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass die Rückrufe alle eine einzelne lexikalische Umgebung teilen, erstellt die Funktion `makeHelpCallback` _eine neue lexikalische Umgebung_ für jeden Rückruf, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine weitere Möglichkeit, das oben genannte mit anonymen Closures zu schreiben, ist:

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

Wenn Sie keine zusätzlichen Closures verwenden möchten, können Sie das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort verwenden:

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

In diesem Beispiel wird `const` anstelle von `var` verwendet, damit jedes Closure die blockbasierte Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte die Verwendung von `forEach()` sein, um über das `helpText`-Array zu iterieren und einen Listener an jedes [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) anzuhängen, wie gezeigt:

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

Wie zuvor erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Bereich und ihr Closure. Daher ist es unklug, unnötig Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch auf den Speicherverbrauch negativ beeinflusst.

Wenn Sie beispielsweise ein neues Objekt/Klasse erstellen, sollten Methoden normalerweise mit dem Prototyp des Objekts verknüpft werden, anstatt sie im Objektkonstruktor zu definieren. Der Grund dafür ist, dass die Methoden jedes Mal, wenn der Konstruktor aufgerufen wird, neu zugewiesen würden (d.h. bei jeder Objekterstellung).

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

Da der vorherige Code die Vorteile der Verwendung von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden, wie folgt:

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

Es wird jedoch nicht empfohlen, den Prototyp neu zu definieren. Das folgende Beispiel fügt stattdessen dem vorhandenen Prototyp hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden, und die Methodendefinitionen müssen nicht bei jeder Objekterstellung stattfinden. Weitere Informationen finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
