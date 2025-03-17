---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion, die zusammen mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) gebündelt ist. Mit anderen Worten, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, zum Zeitpunkt der Funktionserstellung.

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die `displayName()`-Funktion ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur innerhalb des Körpers der `init()`-Funktion verfügbar ist. Beachten Sie, dass die `displayName()`-Funktion keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Gültigkeitsbereiche haben, kann `displayName()` auf die Variable `name` zugreifen, die in der übergeordneten Funktion `init()` deklariert ist.

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus und beachten Sie, dass die `console.log()`-Anweisung in der `displayName()`-Funktion erfolgreich den Wert der Variable `name` anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalische Bindung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Bindung den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Gültigkeitsbereich deklariert sind.

### Bindung mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionsgültigkeitsbereich_ und _globaler Gültigkeitsbereich_. Variablen, die mit `var` deklariert werden, haben entweder einen Funktions- oder einen globalen Gültigkeitsbereich, je nachdem, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Das kann knifflig sein, da Blöcke mit geschweiften Klammern keine Gültigkeitsbereiche schaffen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Menschen aus anderen Sprachen (z. B. C, Java), in denen Blöcke Gültigkeitsbereiche schaffen, sollte der obige Code einen Fehler in der `console.log`-Zeile auslösen, da wir außerhalb des Gültigkeitsbereichs von `x` in einem der Blöcke sind. Da Blöcke jedoch für `var` keine Gültigkeitsbereiche schaffen, erzeugen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch ein [praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das weiter unten eingeführt wird und zeigt, wie dies in Kombination mit Closures tatsächliche Bugs verursachen kann.

In ES6 hat JavaScript die Deklarationen `let` und `const` eingeführt, die unter anderem auch [zeitliche Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen, block-skopierte Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Gültigkeitsbereiche behandelt, jedoch nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus hat ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) eingeführt, die eine andere Art von Gültigkeitsbereich eingeführt haben. Closures können Variablen in all diesen Gültigkeitsbereichen erfassen, die wir später vorstellen werden.

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

Das Ausführen dieses Codes hat genau die gleiche Wirkung wie das vorherige Beispiel der `init()`-Funktion oben. Der Unterschied (und Interessante) ist, dass die `displayName()`-Innenfunktion von der Außenfunktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code dennoch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch weiterhin wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` ein Verweis auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält einen Verweis auf ihre lexikalische Umgebung bei, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ist ein etwas interessanteres Beispiel – eine `makeAdder`-Funktion:

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` annimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einzelnes Argument `y` und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erzeugt die Funktionsfabrik zwei neue Funktionen – eine, die fünf zu ihrem Argument addiert, und eine, die 10 addiert.

`add5` und `add10` bilden beide Closures. Sie teilen sich die gleiche Funktionskörper-Definition, speichern aber unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung von `add10`, `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diese Daten wirkt. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, in der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind besonders im Web häufig. Ein großer Teil des in Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein Verhalten und hängen es dann an ein Ereignis, das vom Benutzer ausgelöst wird (zum Beispiel ein Klick oder ein Tastendruck). Der Code wird als Rückruf (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird) angehängt.

Zum Beispiel nehmen wir an, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, ist, die Schriftgröße des `body`-Elements (in Pixeln) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit festzulegen:

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

Solche interaktiven Textgrößenschaltflächen können die `font-size`-Eigenschaft des `body`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Textkörper auf 12, 14 und 16 Pixel ändern. Sie können sie an Schaltflächen anhängen, wie im folgenden Codebeispiel demonstriert.

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

## Emulation privater Methoden mit Closures

Programmiersprachen wie Java ermöglichen es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden innerhalb derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code zeigt, wie man Closures verwendet, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Design-Pattern](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In früheren Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier hingegen gibt es eine einzelne lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die gemeinsame lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert ist_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen darauf zu, die vom Anwendungswrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikalische Umgebung teilen. Dank JavaScripts lexikalischer Bindung haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure verweist über sein eigenes Closure auf eine andere Version der Variable `privateCounter`. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung, indem der Wert dieser Variable geändert wird. Änderungen des Variablenwerts in einem Closure beeinträchtigen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind, insbesondere _Datenverbergung_ und _Kapselung_.

## Gültigkeitsbereich von Closures

Der Zugriff einer verschachtelten Funktion auf den Gültigkeitsbereich der äußereren Funktion umfasst den umgebenden Gültigkeitsbereich der äußereren Funktion – was effektiv eine Kette von Funktions-Gültigkeitsbereichen schafft. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, die alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures Zugriff auf _alle_ äußeren Gültigkeitsbereiche haben.

Closures können auch Variablen in Block-Skopen und Modul-Skopen erfassen. Zum Beispiel erstellt das folgende ein Closure über die Block-skopierten Variable `y`:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die Modul-skopierte Variable `x` schließen. Auch wenn `x` nicht direkt aus anderen Modulen zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _"lebendige {{Glossary("binding", "Bindings")}}"_ betrachtet werden, weil sich der importierte Wert entsprechend des originalen Werts ändert, wenn dieser sich ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Stichworts trat ein häufiges Problem mit Closures auf, wenn sie innerhalb einer Schleife erstellt wurden. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und hängt ein `onfocus`-Ereignis an jede an, das die zugehörige Hilfemethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal auf welches Feld Sie den Fokus setzen, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die den `onfocus` zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Gültigkeitsbereich der `setupHelp`-Funktion. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt die gleiche einzige lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) enthält. Dies ist der Fall, weil die Variable `item` mit `var` deklariert wurde und somit aufgrund der Anhebung einen Funktionsgültigkeitsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits durchlaufen wurde, zeigt das `item`-Variableobjekt (gemeinsam für alle drei Closures) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: insbesondere eine Funktionsfabrik, wie zuvor beschrieben:

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

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/v7gjv/9573/) aus.

Dies funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzelne lexikalische Umgebung teilen, erstellt die `makeHelpCallback`-Funktion _eine neue lexikalische Umgebung_ für jedes Callback, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das Obige zu schreiben, besteht darin, anonyme Closures zu verwenden:

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

Wenn Sie nicht mehr Closures verwenden möchten, können Sie das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Stichwort verwenden:

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

In diesem Beispiel wird `const` anstelle von `var` verwendet, sodass jedes Closure die block-skopierte Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte sein, `forEach()` zu verwenden, um über das `helpText`-Array zu iterieren und an jedes [`<input>`](/de/docs/Web/HTML/Element/input) einen Listener anzuhängen, wie gezeigt:

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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Gültigkeitsbereich und ihr Closure. Daher ist es unklug, Funktionen unnötig innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht erforderlich sind, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch auf den Speicherverbrauch negativ beeinflusst.

Zum Beispiel sollten beim Erstellen eines neuen Objekts / einer neuen Klasse Methoden normalerweise dem Prototyp des Objekts zugeordnet und nicht in den Objektkonstruktor definiert werden. Der Grund ist, dass die Methoden bei jedem Aufruf des Konstruktors neu zugewiesen würden (d.h. für jede Objekterstellung).

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

Da der vorherige Code die Vorteile von Closures in diesem speziellen Fall nicht ausnutzt, könnten wir ihn stattdessen umschreiben, um Closures wie folgt zu vermeiden:

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

Das Neudefinieren des Prototyps wird jedoch nicht empfohlen. Das folgende Beispiel hängt den existierenden Prototyp an:

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

In den zwei vorherigen Beispielen kann der geerbte Prototyp von allen Objekten gemeinsam genutzt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Weitere Informationen finden Sie unter [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
