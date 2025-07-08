---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Closure** ist die Kombination einer Funktion, die zusammen mit Referenzen zu ihrem umgebenden Zustand (der **lexikalischen Umgebung**) gebündelt wird. Mit anderen Worten, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, also zum Zeitpunkt der Erstellung der Funktion.

## Lexikalische Bindung

Betrachten Sie das folgende Beispiel:

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur innerhalb des Körpers der Funktion `init()` verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen der äußeren Gültigkeitsbereiche haben, kann `displayName()` auf die Variable `name` zugreifen, die in der übergeordneten Funktion `init()` deklariert ist.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()`-Anweisung innerhalb der `displayName()`-Funktion den Wert der Variablen `name`, die in ihrer übergeordneten Funktion deklariert ist, erfolgreich anzeigt. Dies ist ein Beispiel für _lexikalische Bindung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Bindung den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Gültigkeitsbereich deklariert sind.

### Bindung mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionsgültigkeitsbereich_ und _globaler Gültigkeitsbereich_. Variablen, die mit `var` deklariert werden, haben entweder einen funktions- oder globalen Gültigkeitsbereich, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert sind. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Gültigkeitsbereiche erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Menschen aus anderen Programmiersprachen (z.B. C, Java), in denen Blöcke Gültigkeitsbereiche erstellen, sollte der obige Code einen Fehler in der `console.log`-Zeile werfen, da wir uns außerhalb des Gültigkeitsbereichs von `x` in einem der Blöcke befinden. Da Blöcke für `var` jedoch keine Gültigkeitsbereiche erstellen, erstellen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das zeigt, wie dies tatsächliche Fehler verursachen kann, wenn es mit Closures kombiniert wird.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die unter anderem wie [temporal dead zones](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) es ermöglichen, blockgebundene Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Gültigkeitsbereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Gültigkeitsbereich einführten. Closures können Variablen in all diesen Gültigkeitsbereichen erfassen, die wir später einführen werden.

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das zuvor gezeigte Beispiel der `init()`-Funktion. Was anders (und interessant) ist, ist, dass die innere Funktion `displayName()` aus der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet hat, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz zu ihrer lexikalischen Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` beim Aufruf von `myFunc` verfügbar, und "Mozilla" wird an `console.log` übergeben.

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` annimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einzelnes Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen—eine, die fünf zu ihrem Argument hinzufügt, und eine, die 10 hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen dieselbe Funktionskörperdefinition, speichern jedoch unterschiedliche lexikalische Umgebungen. In `add5`'s lexikalischer Umgebung ist `x` 5, während in der lexikalischen Umgebung für `add10`, `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diese Daten wirkt. Das hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie einen Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind besonders im Web häufig. Ein Großteil des in Frontend-JavaScript geschriebenen Codes basiert auf Ereignissen. Sie definieren ein bestimmtes Verhalten und hängen es dann an ein Ereignis, das vom Benutzer ausgelöst wird (z.B. ein Klick oder ein Tastendruck). Der Code wird als Callback angehängt (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Angenommen, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `body`-Elements (in Pixel) festzulegen und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen Einheit `em` festzulegen:

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

Solche interaktiven Textgrößenschaltflächen können die `font-size`-Eigenschaft des `body`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite aufgrund der relativen Einheiten übernommen.

Hier ist der JavaScript-Code:

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

`size12`, `size14`, und `size16` sind jetzt Funktionen, die den Text des Body-Elements auf 12, 14 und 16 Pixel ändern. Sie können diese an Schaltflächen anhängen, wie im folgenden Codebeispiel gezeigt.

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

## Emulation privater Methoden mit Closures

Sprachen wie Java erlauben es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit zur Verwaltung Ihres globalen Namespace.

Der folgende Code zeigt, wie Sie Closures verwenden können, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Entwurfsmuster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement`, und `counter.value`.

Die gemeinsame lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die sofort ausgeführt wird, nachdem sie definiert wurde_ (auch bekannt als ein {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder von außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen darauf zu, die von der anonymen Funktion zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die dieselbe lexikalische Umgebung teilen. Dank der lexikalischen Bindung von JavaScript haben sie alle Zugriff auf die `privateCounter`-Variable und die `changeBy`-Funktion.

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

Beachten Sie, wie die zwei Zähler ihre Unabhängigkeit voneinander beibehalten. Jedes Closure referenziert eine andere Version der `privateCounter`-Variable durch sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung, indem der Wert dieser Variable verändert wird. Änderungen des Variablenwertes in einem Closure beeinflussen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit der objektorientierten Programmierung in Verbindung gebracht werden. Insbesondere die _Datenverbergung_ und _Kapselung_.

## Closures und ihre Gültigkeitsbereichskette

Der Zugriff einer verschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion schließt den umschließenden Gültigkeitsbereich der äußeren Funktion ein—effektiv eine Kette von Funktionsgültigkeitsbereichen erstellend. Um dies zu demonstrieren, betrachten Sie das folgende Beispiel.

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

Sie können dies auch ohne anonyme Funktionen schreiben:

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

Im obigen Beispiel gibt es eine Reihe verschachtelter Funktionen, die alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Kontext können wir sagen, dass Closures Zugriff auf _alle_ äußeren Gültigkeitsbereiche haben.

Closures können auch Variablen in Block- und Modul-Gültigkeitsbereichen erfassen. Zum Beispiel erstellt das folgende einen Closure über die blockgebundene Variable `y`:

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

Closures über Module können noch interessanter sein.

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modul-gebundene Variable `x` schließen. Auch wenn `x` nicht direkt von anderen Modulen zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _live {{Glossary("binding", "Bindings")}}_ betrachtet werden, weil sich der importierte Wert entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn Sie diese in einer Schleife erstellten. Um dies zu demonstrieren, betrachten Sie das folgende Beispiel.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, von denen jeder mit der ID eines Eingabefelds im Dokument verbunden ist. Die Schleife durchläuft diese Definitionen und hängt ein `onfocus`-Ereignis an jede, das die zugehörige Hilfe-Methode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal welches Feld Sie fokussieren, es wird immer die Nachricht über Ihr Alter angezeigt.

Der Grund dafür ist, dass die Funktionen, die `onfocus` zugewiesen sind, Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Gültigkeitsbereich der Funktion `setupHelp`. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt dieselbe einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) aufweist. Dies liegt daran, dass die Variable `item` mit `var` deklariert wurde und daher aufgrund des Hoistings einen Funktions-Gültigkeitsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits durchlaufen ist, zeigt die (von allen drei Closures geteilte) Variable `item` auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall ist die Verwendung von mehr Closures: Insbesondere die Verwendung einer Funktionsfabrik wie vorher beschrieben:

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

Das funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzige lexikalische Umgebung teilen, erstellt die Funktion `makeHelpCallback` _eine neue lexikalische Umgebung_ für jeden Callback, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das obige mit anonymen Closures zu schreiben:

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

Eine weitere Alternative könnte die Verwendung von `forEach()` zur Iteration über das `helpText`-Array und zum Anhängen eines Listeners an jedes [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) sein, wie gezeigt:

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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Gültigkeitsbereich und Closures. Daher ist es unklug, unnötig Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch den Speicherverbrauch negativ beeinflusst.

Zum Beispiel sollten beim Erstellen eines neuen Objekts/Klasse Methoden normalerweise mit dem Prototyp des Objekts verknüpft und nicht im Objektkonstruktor definiert werden. Der Grund dafür ist, dass die Methoden jedes Mal neu zugewiesen würden, wenn der Konstruktor aufgerufen wird (das heißt, für jede Objekterstellung).

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

Da der vorherige Code die Vorteile der Verwendung von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn stattdessen so umschreiben, dass er die Verwendung von Closures vermeidet:

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

Das Neudefinieren des Prototyps wird jedoch nicht empfohlen. Das folgende Beispiel fügt stattdessen dem bestehenden Prototyp hinzu:

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

In den beiden vorherigen Beispielen kann der vererbte Prototyp von allen Objekten geteilt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Siehe [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für weitere Informationen.
