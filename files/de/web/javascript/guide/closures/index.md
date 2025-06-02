---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: e779eeec61df5e639c37a895b5cdc648c4601cb4
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion, die zusammen (eingeschlossen) mit Referenzen zu ihrem umgebenden Status (der **lexikalischen Umgebung**) gebündelt ist. Mit anderen Worten, ein Closure ermöglicht einer Funktion den Zugriff auf ihren äußeren Geltungsbereich. In JavaScript wird ein Closure jedes Mal erstellt, wenn eine Funktion erstellt wird, also zum Zeitpunkt der Funktionserstellung.

## Lexikalische Bindung

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Körper der `init()`-Funktion verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Geltungsbereiche haben, kann `displayName()` auf die in der übergeordneten Funktion `init()` deklarierte Variable `name` zugreifen.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()`-Anweisung innerhalb der Funktion `displayName()` erfolgreich den Wert der Variablen `name` anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalische Bindung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Bindung den Ort verwendet, an dem eine Variable im Quellcode deklariert ist, um festzustellen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Geltungsbereich deklariert sind.

### Geltungsbereich mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Geltungsbereichen: _Funktions-Geltungsbereich_ und _globaler Geltungsbereich_. Variablen, die mit `var` deklariert sind, haben entweder einen Funktions-Geltungsbereich oder einen globalen Geltungsbereich, abhängig davon, ob sie innerhalb einer Funktion oder außerhalb einer Funktion deklariert sind. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keinen Geltungsbereich erzeugen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Menschen aus anderen Programmiersprachen (z.B. C, Java), bei denen Blöcke Geltungsbereiche erzeugen, sollte der obige Code einen Fehler in der `console.log`-Zeile auslösen, da wir uns außerhalb des Geltungsbereichs von `x` in jedem Block befinden. Da Blöcke jedoch keine Geltungsbereiche für `var` erzeugen, erstellen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das unten eingeführt wird und zeigt, wie dies in Kombination mit Closures tatsächlich Fehler verursachen kann.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die, neben anderen Dingen wie [temporäre tote Zonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz), es ermöglichen, blockgebundene Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Geltungsbereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Geltungsbereich einführten. Closures können Variablen in all diesen Geltungsbereichen erfassen, die wir später einführen werden.

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion oben. Was anders (und interessant) ist, ist, dass die innere Funktion `displayName()` von der äußeren Funktion _bevor sie ausgeführt wird_ zurückgegeben wird.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` beendet ist, könnte man erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination aus einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Geltungsbereich waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz auf ihre lexikalische Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt bei der Ausführung von `myFunc` die Variable `name` verfügbar, und "Mozilla" wird an `console.log` übergeben.

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einziges Argument `x` annimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einziges Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen — eine, die fünf zu ihrem Argument hinzufügt, und eine, die 10 hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen dieselbe Funktionskörper-Definition, speichern jedoch unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung für `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, da sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diesen Daten arbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (die Objekteigenschaften) mit einer oder mehreren Methoden zu verknüpfen.

Daher können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun könnten, sind insbesondere im Web häufig. Ein Großteil des in Front-End-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein Verhalten und hängen es dann an ein Ereignis, das durch den Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Callback angefügt (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Angenommen, wir möchten der Seite Buttons hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `<body>`-Elements (in Pixel) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit zu setzen:

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

Solche interaktiven Textgrößenbuttons können die `font-size`-Eigenschaft des `<body>`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

Hier das JavaScript:

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

`size12`, `size14` und `size16` sind nun Funktionen, die den Body-Text auf 12, 14 und 16 Pixel anpassen. Sie können sie an Buttons anhängen, wie im folgenden Codebeispiel gezeigt.

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

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code zu beschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code veranschaulicht, wie Sie mithilfe von Closures öffentliche Funktionen definieren können, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Entwurfsmuster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen `counter.increment`, `counter.decrement` und `counter.value` geteilt wird.

Die gemeinsame lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert wurde_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können von außerhalb der anonymen Funktion nicht auf diese privaten Mitglieder zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen darauf zu, die aus der anonymen Wrapper-Funktion zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die dieselbe lexikalische Umgebung teilen. Dank der lexikalischen Bindung in JavaScript haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander aufrechterhalten. Jedes Closure referenziert eine andere Version der Variablen `privateCounter` über sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung, indem der Wert dieser Variablen geändert wird. Änderungen am Variablenwert in einem Closure wirken sich nicht auf den Wert im anderen Closure aus.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise der objektorientierten Programmierung zugeschrieben werden. Insbesondere _Datenverbergung_ und _Kapselung_.

## Closure-Geltungsbereichskette

Der Zugriff einer geschachtelten Funktion auf den Geltungsbereich der äußeren Funktion umfasst den umschließenden Geltungsbereich der äußeren Funktion — effektiv wird eine Kette von Funktionsgeltungsbereichen erstellt. Um dies zu verdeutlichen, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Serie von verschachtelten Funktionen, die alle Zugriff auf den äußeren Geltungsbereich der Funktionen haben. In diesem Kontext kann man sagen, dass Closures Zugriff auf _alle_ äußeren Geltungsbereiche haben.

Closures können auch Variablen in Block- und Modul-Geltungsbereichen erfassen. Beispielweise wird im Folgenden ein Closure über die blockgebundene Variable `y` erstellt:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modulgebundene Variable `x` schließen. Selbst wenn `x` von anderen Modulen aus nicht direkt zugänglich ist, kann es mit den Funktionen gelesen und beschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _aktive {{Glossary("binding", "Bindungen")}}_ angesehen werden, da sich der importierte Wert entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn Sie diese innerhalb einer Schleife erstellt haben. Um dies zu verdeutlichen, betrachten Sie den folgenden Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfe-Methode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Unabhängig davon, welches Feld Sie fokussieren, wird die Nachricht über Ihr Alter angezeigt.

Der Grund dafür ist, dass die den `onfocus`-Ereignissen zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Geltungsbereich der Funktion `setupHelp`. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt dieselbe einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und somit aufgrund von Hoisting einen Funktions-Geltungsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits abgeschlossen ist, zeigt das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall ist die Verwendung von mehr Closures: insbesondere die Verwendung eines Funktionsfabrik-Konzepts, wie zuvor beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass die Callbacks ein einzelnes lexikalisches Umfeld teilen, erstellt die Funktion `makeHelpCallback` _ein neues lexikalisches Umfeld_ für jeden Callback, in dem sich `help` auf den entsprechenden String aus dem `helpText`-Array bezieht.

Eine andere Möglichkeit, das Obige unter Verwendung anonymer Closures zu schreiben, ist:

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

Wenn Sie keine zusätzlichen Closures verwenden möchten, können Sie die Schlüsselwörter [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwenden:

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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Geltungsbereich und ihr eigenes Closure. Daher ist es unklug, Funktionen unnötigerweise innerhalb anderer Funktionen zu erstellen, wenn keine Closures für eine bestimmte Aufgabe benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch auf den Speicherverbrauch negativ beeinflussen wird.

Wenn Sie beispielsweise ein neues Objekt/eine neue Klasse erstellen, sollten Methoden normalerweise dem Prototyp des Objekts zugeordnet werden, anstatt in den Objektkonstruktor definiert zu werden. Der Grund dafür ist, dass die Methoden jedes Mal neu zugewiesen würden, wenn der Konstruktor aufgerufen wird (das heißt, bei jeder Objekterstellung).

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

Da der vorhergehende Code in diesem speziellen Fall keine Vorteile aus der Nutzung von Closures zieht, könnten wir ihn stattdessen umschreiben, um auf die Verwendung von Closures zu verzichten:

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

Das Neudefinieren des Prototyps wird jedoch nicht empfohlen. Das folgende Beispiel fügt stattdessen dem vorhandenen Prototyp hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden, und die Methoden müssen nicht bei jeder Objekterstellung definiert werden. Weitere Informationen finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
