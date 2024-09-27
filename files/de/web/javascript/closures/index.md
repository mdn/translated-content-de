---
title: Closures
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 2463abc1ca0fb6588d182651f8f659ae0d618915
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion, die zusammen mit Referenzen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) gebündelt wird. Anders ausgedrückt: Ein Closure gibt einer Funktion Zugriff auf ihren äußeren Umfang. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, zur Zeit der Funktionserstellung.

## Lexikalische Umfassung

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur innerhalb des Körpers der `init()`-Funktion verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Umfänge haben, kann `displayName()` auf die in der Elternfunktion `init()` deklarierte Variable `name` zugreifen.

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus und bemerken Sie, dass die `console.log()`-Anweisung innerhalb der Funktion `displayName()` erfolgreich den Wert der Variable `name` anzeigt, die in ihrer Elternfunktion deklariert ist. Dies ist ein Beispiel für _lexikalische Umfassung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen geschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Umfassung den Ort verwendet, an dem eine Variable innerhalb des Quellcodes deklariert wurde, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf in ihrem äußeren Umfang deklarierte Variablen.

### Umfassung mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Umfängen: _Funktionsumfang_ und _globalen Umfang_. Variablen, die mit `var` deklariert werden, sind entweder funktions- oder globalen Umfangs, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Umfänge erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Menschen aus anderen Sprachen (z.B. C, Java), in denen Blöcke Umfänge erstellen, sollte der obige Code auf der `console.log`-Zeile einen Fehler auslösen, da wir außerhalb des Umfangs von `x` in einem der Blöcke sind. Da Blöcke jedoch keine Umfänge für `var` erstellen, erstellen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake) weiter unten, das illustriert, wie dies tatsächliche Bugs verursachen kann, wenn es mit Closures kombiniert wird.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die es unter anderem wie [zeitliche Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen, blockbasierte Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Umfänge behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zusätzlich führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Umfang einführten. Closures sind in der Lage, Variablen in all diesen Umfängen zu erfassen, die wir später vorstellen werden.

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion oben. Der Unterschied (und das Interessante) ist, dass die innere Funktion `displayName()` aus der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick könnte es unlogisch erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung abgeschlossen hat, könnte man erwarten, dass die `name`-Variable nicht mehr zugänglich ist. Da der Code immer noch wie erwartet funktioniert, ist dies in JavaScript offensichtlich nicht der Fall.

Der Grund ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Umfang waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz auf ihre lexikalische Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ist ein etwas interessanteres Beispiel—eine `makeAdder`-Funktion:

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einziges Argument `x` annimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ebenfalls ein einziges Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument addieren können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen—eine, die fünf zu ihrem Argument addiert, und eine, die zehn addiert.

`add5` und `add10` formen beide Closures. Sie teilen dieselbe Funktionsdefinition, speichern jedoch unterschiedliche lexikalische Umgebungen. In `add5`'s lexikalischer Umgebung ist `x` 5, während in der lexikalischen Umgebung von `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diesen Daten operiert. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind besonders im Web häufig. Ein Großteil des in Front-End-JavaScript geschriebenen Codes ist ereignisbasierend. Sie definieren ein Verhalten und verknüpfen es dann mit einem Ereignis, das vom Benutzer ausgelöst wird (wie z.B. ein Klick oder ein Tastendruck). Der Code wird als Callback angehängt (eine einzelne Funktion, die als Antwort auf das Ereignis ausgeführt wird).

Nehmen wir zum Beispiel an, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `body` Elements (in Pixel) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em` Einheit festzulegen:

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

Solche interaktiven Textgrößentasten können die `font-size`-Eigenschaft des `body` Elements ändern, und die Anpassungen übernehmen die anderen Elemente auf der Seite dank der relativen Einheiten.

Hier ist das JavaScript:

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Textkörper auf 12, 14 bzw. 16 Pixel neu skalieren. Sie können sie wie im folgenden Codebeispiel an Schaltflächen anhängen.

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

## Emulierung privater Methoden mit Closures

Sprachen wie Java erlauben es, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor den [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code zeigt, wie man Closures verwendet, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Moduldesignmuster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In den vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die geteilte lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert wurde_ (auch bekannt als [IIFE](/de/docs/Glossary/IIFE)). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können von außerhalb der anonymen Funktion auf keines dieser privaten Mitglieder zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen, die aus dem anonymen Wrapper zurückgegeben werden, auf sie zu.

Diese drei öffentlichen Funktionen bilden Closures, die alle dieselbe lexikalische Umgebung teilen. Dank der lexikalischen Umfassung in JavaScript haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure verweist über sein eigenes Closure auf eine andere Version der `privateCounter`-Variablen. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung, indem sich der Wert dieser Variable ändert. Änderungen des Variablenwerts in einem Closure beeinflussen den Wert im anderen Closure nicht.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit der objektorientierten Programmierung verbunden sind. Insbesondere _Datenverbergung_ und _Kapselung_.

## Bereich der Closure-Verkettung

Der Zugriff einer verschachtelten Funktion auf den Umfang der äußeren Funktion umfasst den umschließenden Umfang der äußeren Funktion—effektiv eine Kette von Funktionsumfängen zu schaffen. Um dies zu veranschaulichen, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, von denen alle Zugriff auf den Umfang der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures _alle_ äußeren Umfänge zugänglich haben.

Closures können auch Variablen in Blockumfängen und Modulumfängen erfassen. Zum Beispiel erstellt das folgende eine Closure über die blockbezogene Variable `y`:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die Modul-Scoped-Variable `x` geschlossen sind. Auch wenn `x` von anderen Modulen nicht direkt zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _live [bindings](/de/docs/Glossary/binding)_ betrachtet werden, da sich die importierte Variable entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

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

## Erstellung von Closures in Schleifen: Ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat häufig ein Problem mit Closures auf, wenn Sie diese innerhalb einer Schleife erstellt haben. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Der Grund dafür ist, dass die an `onfocus` zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Umfang der Funktion `setupHelp`. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt dieselbe einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und somit aufgrund des Hebens (Hoisting) einen Funktionsumfang hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu dieser Zeit bereits durchgelaufen ist, zeigt das (`item`) Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall ist die Verwendung von mehr Closures: insbesondere die Verwendung einer Funktionsfabrik wie zuvor beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzelne lexikalische Umgebung teilen, erstellt die Funktion `makeHelpCallback` _eine neue lexikalische Umgebung_ für jedes Callback, in der `help` auf die entsprechende Zeichenfolge aus dem `helpText`-Array verweist.

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

Wenn Sie keine weiteren Closures verwenden möchten, können Sie das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort verwenden:

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

In diesem Beispiel wird `const` anstelle von `var` verwendet, sodass jedes Closure die blockweise Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte sein, `forEach()` zu verwenden, um über das `helpText`-Array zu iterieren und einen Listener an jedes [`<input>`](/de/docs/Web/HTML/Element/input) anzuhängen, wie gezeigt:

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

## Leistungserwägungen

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Umfang und ihr eigenes Closure. Daher ist es unklug, unnötigerweise Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf Verarbeitungsgeschwindigkeit als auch Speicherverbrauch negativ beeinflusst.

Wenn Sie zum Beispiel ein neues Objekt oder eine neue Klasse erstellen, sollten Methoden normalerweise zum Prototyp des Objekts anstatt im Konstruktor des Objekts definiert werden. Der Grund ist, dass die Methoden jedes Mal neu zugewiesen würden, wenn der Konstruktor aufgerufen wird (das bedeutet, für jede Objekt-Erstellung).

Betrachten wir den folgenden Fall:

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

Da der vorherige Code die Vorteile der Verwendung von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn umschreiben, um Closures zu vermeiden, wie folgt:

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

Es wird jedoch nicht empfohlen, den Prototyp neu zu definieren. Das folgende Beispiel fügt stattdessen zum bestehenden Prototyp hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Weitere Informationen finden Sie in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
