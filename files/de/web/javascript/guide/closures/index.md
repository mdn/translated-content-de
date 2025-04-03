---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**). Mit anderen Worten, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Gültigkeitsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, also zum Zeitpunkt der Funktionserstellung.

## Lexikalische Gültigkeitsbereiche

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die `displayName()`-Funktion ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Körper der `init()`-Funktion verfügbar ist. Beachten Sie, dass die `displayName()`-Funktion keine eigenen lokalen Variablen besitzt. Da innere Funktionen jedoch Zugriff auf die Variablen ihrer äußeren Gültigkeitsbereiche haben, kann `displayName()` auf die Variable `name` zugreifen, die in der übergeordneten Funktion `init()` deklariert wurde.

Führen Sie den Code über [diesen JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus. Beachten Sie, dass die `console.log()`-Anweisung innerhalb der `displayName()`-Funktion erfolgreich den Wert der Variablen `name` anzeigt, die in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalische Gültigkeitsbereiche_, die beschreiben, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass lexikalische Gültigkeitsbereiche den Ort verwenden, an dem eine Variable im Quellcode deklariert wurde, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Gültigkeitsbereich deklariert wurden.

### Gültigkeitsbereiche mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Gültigkeitsbereichen: _Funktionsbereich_ und _globaler Bereich_. Variablen, die mit `var` deklariert sind, haben entweder Funktions- oder globalen Gültigkeitsbereich, je nachdem, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann verwirrend sein, da Blöcke mit geschweiften Klammern keine Gültigkeitsbereiche erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Programmiersprachen (z. B. C, Java), in denen Blöcke Gültigkeitsbereiche erstellen, sollte der obige Code bei der `console.log`-Zeile einen Fehler auslösen, da wir uns außerhalb des Gültigkeitsbereichs von `x` in einem der Blöcke befinden. Da Blöcke jedoch keine Gültigkeitsbereiche für `var` erstellen, erstellen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake) unten, das zeigt, wie dies in Kombination mit Closures echte Fehler verursachen kann.

In ES6 führte JavaScript die `let`- und `const`-Deklarationen ein, die unter anderem [temporale tote Zonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen, block-skopierte Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Gültigkeitsbereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zusätzlich führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Gültigkeitsbereich einführten. Closures können Variablen in all diesen Gültigkeitsbereichen erfassen, die wir später einführen werden.

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion oben. Was anders (und interessant) ist, ist, dass die innere Funktion `displayName()` aus der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet hat, könnten Sie erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch immer noch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination aus einer Funktion und der lexikalischen Umgebung, innerhalb derer diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` ein Verweis auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält einen Verweis auf ihre lexikalische Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` bei der Ausführung von `myFunc` verfügbar und "Mozilla" wird an `console.log` übergeben.

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einzelnes Argument `x` nimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einzelnes Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen - eine, die fünf zu ihrem Argument hinzufügt, und eine, die 10 hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen dieselbe Funktionskörperdefinition, speichern aber unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung für `add10`, `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die diese Daten verarbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, in der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind insbesondere im Web üblich. Ein Großteil des in Frontend-JavaScript geschriebenen Codes basiert auf Ereignissen. Sie definieren ein Verhalten und verknüpfen es dann mit einem Ereignis, das vom Benutzer ausgelöst wird (z. B. ein Klick oder ein Tastendruck). Der Code wird als Callback (eine einzelne Funktion, die als Antwort auf das Ereignis ausgeführt wird) angehängt.

Angenommen, wir möchten Schaltflächen auf einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `<body>`-Elements (in Pixeln) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Header) mit der relativen Einheit `em` festzulegen:

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

Solche interaktiven Textgrößeschaltflächen können die `font-size`-Eigenschaft des `<body>`-Elements ändern, und die Anpassungen werden von anderen Elementen auf der Seite dank der relativen Einheiten übernommen.

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Textkörper auf 12, 14 und 16 Pixel ändern. Sie können diese wie im folgenden Codebeispiel an Schaltflächen anhängen.

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

Führen Sie den Code mithilfe von [JSFiddle](https://jsfiddle.net/hotae160/) aus.

## Emulieren privater Methoden mit Closures

Sprachen wie Java ermöglichen es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Classes](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code einzuschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code veranschaulicht, wie man Closures verwendet, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul-Designmuster](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In den vorherigen Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen: `counter.increment`, `counter.decrement` und `counter.value` geteilt wird.

Die geteilte lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert wurde_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder von außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt darauf zu, indem Sie die drei öffentlichen Funktionen verwenden, die von der anonymen Umhüllung zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die dieselbe lexikalische Umgebung teilen. Dank der lexikalischen Gültigkeitsbereiche von JavaScript haben sie jeweils Zugriff auf die `privateCounter`-Variable und die `changeBy`-Funktion.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit von einander bewahren. Jedes Closure verweist durch sein eigenes Closure auf eine andere Version der `privateCounter`-Variable. Jedes Mal, wenn einer der Zähler aufgerufen wird, wird seine lexikalische Umgebung durch Ändern des Wertes dieser Variable geändert. Änderungen des Variablenwerts in einem Closure haben keine Auswirkungen auf den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit der objektorientierten Programmierung verbunden sind. Insbesondere _Datenkapselung_ und _Datenverbergen_.

## Closure-Bereichskette

Der Zugriff einer verschachtelten Funktion auf den Gültigkeitsbereich der äußeren Funktion schließt den umgebenden Gültigkeitsbereich der äußeren Funktion ein und erstellt letztendlich eine Kette von Funktionsbereichen. Zur Veranschaulichung betrachten Sie den folgenden Beispielcode.

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

Closures können auch Variablen in Block-Gültigkeitsbereichen und Modul-Gültigkeitsbereichen erfassen. Zum Beispiel erstellt das folgende über die block-skopierte Variable `y` ein Closure:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modul-skopierte Variable `x` schließen. Auch wenn `x` nicht direkt von anderen Modulen zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _Live-{{Glossary("binding", "Bindings")}}_ angesehen werden, da sich der importierte Wert entsprechend ändert, wenn sich der Originalwert ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellten. Zur Veranschaulichung betrachten Sie den folgenden Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfsmethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal, auf welches Feld Sie sich konzentrieren, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die den `onfocus` zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Gültigkeitsbereich der `setupHelp`-Funktion. Drei Closures wurden von der Schleife erstellt, aber jedes davon teilt dieselbe lexikalische Umgebung, die eine Variable mit sich ändernden Werten aufweist (`item`). Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und daher aufgrund von Hoisting einen Funktionsbereich hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits abgeschlossen ist, wurde das `item`-Variablenobjekt (geteilt von allen drei Closures) auf den letzten Eintrag in der `helpText`-Liste verwiesen.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: insbesondere eine Funktionsfabrik wie zuvor beschrieben zu verwenden:

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

Führen Sie den Code über [diesen JSFiddle-Link](https://jsfiddle.net/v7gjv/9573/) aus.

Dies funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzige lexikalische Umgebung teilen, erstellt die `makeHelpCallback`-Funktion _eine neue lexikalische Umgebung_ für jeden Callback, in der sich `help` auf den entsprechenden String des `helpText`-Arrays bezieht.

Eine andere Möglichkeit, das Obige mithilfe anonymer Closures zu schreiben, ist:

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

Dieses Beispiel verwendet `const` anstelle von `var`, sodass jedes Closure die block-skopierte Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte darin bestehen, `forEach()` zu verwenden, um über das `helpText`-Array zu iterieren und einen Listener an jedes [`\<input>`](/de/docs/Web/HTML/Element/input) anzuhängen, wie unten gezeigt:

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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Gültigkeitsbereich und Closure. Daher ist es unklug, innerhalb anderer Funktionen unnötig Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch den Speicherverbrauch negativ beeinflusst.

Wenn Sie beispielsweise ein neues Objekt/eine neue Klasse erstellen, sollten Methoden normalerweise dem Prototyp des Objekts zugeordnet und nicht im Objektkonstruktor definiert werden. Der Grund dafür ist, dass die Methoden jedes Mal neu zugewiesen würden (das heißt, bei jedem Objektaufruf), wenn der Konstruktor aufgerufen wird.

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

Da der vorherige Code die Vorteile von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden:

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

In den beiden vorhergehenden Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Weitere Informationen finden Sie unter [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
