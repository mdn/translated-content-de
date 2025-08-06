---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: f97e095b8c0b44bbc6fdd04d380345d4b1743410
---

Ein **Closure** ist die Kombination einer Funktion, die zusammen mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) gebündelt (eingeschlossen) wird. Mit anderen Worten: Ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zum Zeitpunkt der Funktionserstellung.

## Lexikalische Bindung

Betrachten Sie das folgende Beispielcode:

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die `displayName()` Funktion ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Körper der `init()` Funktion verfügbar ist. Beachten Sie, dass die `displayName()` Funktion keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen äußerer Gültigkeitsbereiche haben, kann `displayName()` auf die in der übergeordneten Funktion `init()` deklarierte Variable `name` zugreifen.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()` Anweisung in der `displayName()` Funktion erfolgreich den Wert der Variable `name` anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalische Bindung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen geschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Bindung den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf in ihrem äußeren Gültigkeitsbereich deklarierte Variablen.

### Gültigkeitsbereich mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionsbereich_ und _globaler Bereich_. Mit `var` deklarierte Variablen sind entweder funktionsbezogen oder global, je nachdem, ob sie innerhalb einer Funktion oder außerhalb einer Funktion deklariert sind. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Gültigkeitsbereiche schaffen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Menschen aus anderen Sprachen (z.B. C, Java), in denen Blöcke Gültigkeitsbereiche schaffen, sollte der obige Code einen Fehler in der `console.log` Zeile werfen, da wir uns außerhalb des Bereichs von `x` in einem der Blöcke befinden. Da Blöcke jedoch für `var` keine Gültigkeitsbereiche schaffen, erzeugen die `var`-Anweisungen hier tatsächlich eine globale Variable. Unten wird auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake) eingeführt, das zeigt, wie dies zu tatsächlichen Fehlern führen kann, wenn es mit Closures kombiniert wird.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die es unter anderem wie [temporalen toten Zonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen, blockbezogene Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Gültigkeitsbereiche behandelt, jedoch nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus wurden in ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) eingeführt, die eine weitere Art von Gültigkeitsbereich einführten. Closures sind in der Lage, Variablen in all diesen Gültigkeitsbereichen zu erfassen, die wir später einführen werden.

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

Die Ausführung dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()` Funktion oben. Was anders (und interessant) ist, ist, dass die `displayName()`-Innenfunktion aus der äußeren Funktion _vor ihrer Ausführung_ zurückgegeben wird.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet hat, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch immer noch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, innerhalb derer diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closure im Bereich waren. In diesem Fall ist `myFunc` ein Verweis auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält einen Verweis auf ihre lexikale Umgebung, innerhalb der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ist ein etwas interessanteres Beispiel — eine `makeAdder` Funktion:

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

Im Wesentlichen ist `makeAdder` ein Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen — eine, die fünf zu ihrem Argument addiert, und eine, die zehn addiert.

`add5` und `add10` bilden beide Closures. Sie teilen sich die gleiche Funktionskörperdefinition, aber haben unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung von `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikale Umgebung) mit einer Funktion zu verknüpfen, die auf diese Daten operiert. Es gibt offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie überall dort, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden, ein Closure verwenden.

Situationen, in denen Sie dies tun möchten, sind besonders häufig im Web. Viel des im Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein Verhalten und verknüpfen es dann mit einem Ereignis, das durch den Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Callback (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird) hinzugefügt.

Angenommen, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, ist, die Schriftgröße des `<body>`-Elements (in Pixeln) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit festzulegen:

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

Solche interaktiven Textgrößenschaltflächen können die `font-size`-Eigenschaft des `<body>`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Body-Text auf 12, 14 bzw. 16 Pixel skalieren. Sie können sie wie im folgenden Codebeispiel gezeigt an Schaltflächen anhängen.

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

## Emulieren von privaten Methoden mit Closures

Sprachen wie Java erlauben es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code zu beschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code zeigt, wie Sie Closures verwenden können, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Design-Muster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzelne lexikale Umgebung, die von den drei Funktionen `counter.increment`, `counter.decrement` und `counter.value` geteilt wird.

Die gemeinsame lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die sofort ausgeführt wird, nachdem sie definiert wurde_ (auch bekannt als ein {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder von außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen darauf zu, die vom anonymen Wrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikale Umgebung teilen. Dank der lexikalischen Bindung von JavaScript haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure bezieht sich auf eine andere Version der Variable `privateCounter` über sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikale Umgebung durch Ändern des Werts dieser Variablen. Änderungen am Variablenwert in einem Closure beeinflussen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind. Insbesondere _Datenverbergen_ und _Kapselung_.

## Closure-Gültigkeitsketten

Der Zugriff einer geschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion umfasst den umschließenden Gültigkeitsbereich der äußeren Funktion — wodurch effektiv eine Kette von Funktions-Gültigkeitsbereichen erstellt wird. Um dies zu demonstrieren, betrachten Sie das folgende Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, von denen alle Zugriff auf den Gültigkeitsbereich der äußeren Funktionen haben. In diesem Kontext können wir sagen, dass Closures Zugriff auf _alle_ äußeren Gültigkeitsbereiche haben.

Closures können auch Variablen in Block- und Modul-Gültigkeitsbereichen erfassen. Zum Beispiel das folgende Beispiel, das ein Closure über die blockbeschränkte Variable `y` erstellt:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modulumfassende Variable `x` schließen. Auch wenn `x` nicht direkt von anderen Modulen aus zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _lebendige {{Glossary("binding", "Verknüpfungen")}}_ betrachtet werden, da sich bei Änderungen des ursprünglichen Werts der importierte Wert entsprechend ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn sie innerhalb einer Schleife erstellt wurden. Um dies zu demonstrieren, betrachten Sie das folgende Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet jedes mit einem `onfocus`-Ereignis, das die zugehörige Hilfsmethode zeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal welches Feld Sie fokussieren, die Nachricht zu Ihrem Alter wird angezeigt.

Der Grund dafür ist, dass die den `onfocus`-Ereignissen zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem `setupHelp`-Funktionsbereich. Drei Closures wurden von der Schleife erstellt, aber jedes teilt die gleiche einzelne lexikale Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und somit aufgrund von Hoisting Funktionsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits beendet ist, zeigt das `item` Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: insbesondere einen Funktionsfabrik wie zuvor beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzelne lexikale Umgebung teilen, erstellt die `makeHelpCallback` Funktion _eine neue lexikale Umgebung_ für jeden Callback, in der `help` auf die entsprechende Zeichenfolge aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das oben Stehende unter Verwendung anonymer Closures zu schreiben, ist:

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

Wenn Sie ohnehin modernen JavaScript schreiben, können Sie mehr Alternativen zur einfachen `for` Schleife in Betracht ziehen, wie die Verwendung der {{jsxref("Statements/for...of", "for...of")}} Schleife und die Deklaration von `item` als `let` oder `const`, oder die Verwendung der {{jsxref("Array/forEach", "forEach()")}} Methode, die beide das Closure-Problem vermeiden.

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

## Leistungserwägungen

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Gültigkeitsbereich und Closure. Daher ist es nicht ratsam, unnötigerweise Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch den Speicherverbrauch negativ beeinflussen wird.

Zum Beispiel sollte beim Erstellen eines neuen Objekts/einer neuen Klasse normalerweise die Methode mit dem Prototyp des Objekts assoziiert werden, anstatt in den Objektkonstruktor definiert zu werden. Der Grund ist, dass die Methoden immer dann neu zugewiesen würden, wenn der Konstruktor aufgerufen wird (d.h. bei jeder Objekterstellung).

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

Da der vorherige Code nicht von den Vorteilen der Verwendung von Closures in diesem speziellen Fall profitiert, könnten wir ihn neu schreiben, um die Verwendung von Closures zu vermeiden:

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

Das Neudefinieren des Prototyps wird jedoch nicht empfohlen. Stattdessen fügt das folgende Beispiel dem bestehenden Prototyp etwas hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden und die Methodendefinitionen müssen bei jeder Objekterstellung nicht vorgenommen werden. Siehe [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) für mehr Informationen.
