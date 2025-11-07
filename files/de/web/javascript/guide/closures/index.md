---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 984adfc302136da0ee90eab7caaa85d577b735e6
---

Ein **Closure** ist die Kombination einer Funktion, die zusammen mit den Referenzen zu ihrem umgebenden Zustand (der **lexikalischen Umgebung**) gebündelt ist. Mit anderen Worten, ein Closure ermöglicht einer Funktion den Zugriff auf ihren äußeren Scope. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zur Zeit der Funktionsdefinition.

## Lexikalische Scoping

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die `displayName()`-Funktion ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur innerhalb des Rumpfes der `init()`-Funktion zur Verfügung steht. Beachten Sie, dass die `displayName()`-Funktion keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen von äußeren Scopes haben, kann `displayName()` auf die Variable `name` zugreifen, die in der übergeordneten Funktion `init()` deklariert ist.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()`-Anweisung innerhalb der `displayName()`-Funktion erfolgreich den Wert der `name`-Variable anzeigt, der in ihrer übergeordneten Funktion deklariert ist. Dies ist ein Beispiel für _lexikalisches Scoping_, das beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass lexikalisches Scoping den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Scope deklariert sind.

### Scoping mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Scopes: _Funktions-Scope_ und _globaler Scope_. Mit `var` deklarierte Variablen sind entweder funktions-gescope oder global-gescope, je nachdem, ob sie innerhalb oder außerhalb einer Funktion deklariert sind. Das kann problematisch sein, da Blöcke mit geschweiften Klammern keine Scopes erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z. B. C, Java), in denen Blöcke Scopes erstellen, sollte der obige Code einen Fehler in der `console.log`-Zeile werfen, da wir uns außerhalb des Scopes von `x` in einem der Blöcke befinden. Da Blöcke jedoch keine Scopes für `var` erstellen, wird hier tatsächlich eine globale Variable erstellt. Es gibt auch [ein praktisches Beispiel](#creating_closures_in_loops_a_common_mistake) weiter unten, das veranschaulicht, wie dies in Kombination mit Closures tatsächlich Fehler verursachen kann.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die Ihnen unter anderem erlauben, block-gescopte Variablen zu erstellen, wie beispielsweise [temporale Todeszonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Scopes behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Darüber hinaus führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Scope einführten. Closures können Variablen in all diesen Scopes erfassen, die wir später einführen werden.

## Closures

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

Das Ausführen dieses Codes hat exakt die gleiche Wirkung wie das vorherige Beispiel der `init()`-Funktion oben. Der Unterschied (und das Interessante) ist, dass die `displayName()`-innere Funktion aus der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code weiterhin funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung abgeschlossen hat, könnte man erwarten, dass die `name`-Variable nicht mehr zugänglich ist. Da der Code jedoch weiterhin funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Scope waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält eine Referenz auf ihre lexikalische Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einziges Argument `x` annimmt und eine neue Funktion zurückgibt. Die Funktion, die sie zurückgibt, nimmt ein einziges Argument `y` an und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. In dem obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen — eine, die fünf zu ihrem Argument addiert, und eine, die 10 addiert.

`add5` und `add10` bilden beide Closures. Sie teilen sich die gleiche Funktionskörperdefinition, speichern jedoch unterschiedliche lexikalische Umgebungen. In `add5`' lexikalischer Umgebung ist `x` 5, während in der lexikalischen Umgebung für `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die diese Daten verarbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind insbesondere im Web häufig. Ein Großteil des in Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren nach einem bestimmten Verhalten und verknüpfen es dann mit einem Ereignis, das vom Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Rückruf (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird) angehängt.

Angenommen, wir möchten der Seite Tasten hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `<body>`-Elements (in Pixeln) festzulegen und dann die Größe der anderen Elemente auf der Seite (z. B. Header) mit der relativen `em`-Einheit zu setzen:

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

Solche interaktiven Textgrößenknöpfe können die `font-size`-Eigenschaft des `<body>`-Elements ändern, und die Anpassungen werden dank der relativen Einheiten von anderen Elementen auf der Seite übernommen.

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Body-Text auf 12, 14 bzw. 16 Pixel ändern. Sie können sie an Tasten anhängen, wie im folgenden Codebeispiel demonstriert.

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

## Private Methoden mit Closures emulieren

Sprachen wie Java erlauben es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code zu beschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namespace zu verwalten.

Der folgende Code zeigt, wie man Closures verwendet, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Module Design Pattern](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

In früheren Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzige lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die geteilte lexikalische Umgebung wird im Rumpf einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert ist_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder von außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt über die drei öffentlichen Funktionen, die aus dem anonymen Wrapper zurückgegeben werden, darauf zu.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikalische Umgebung teilen. Dank der lexikalischen Scoping von JavaScript haben sie alle Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Counter ihre Unabhängigkeit voneinander bewahren. Jedes Closure bezieht sich auf eine andere Version der `privateCounter`-Variable durch sein eigenes Closure. Jedes Mal, wenn einer der Counter aufgerufen wird, ändert sich seine lexikalische Umgebung, indem der Wert dieser Variable geändert wird. Änderungen am Variablenwert in einem Closure beeinflussen nicht den Wert im anderen Closure.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind. Insbesondere _Datenverbergen_ und _Kapselung_.

## Closure-Scope-Kette

Der Zugriff einer verschachtelten Funktion auf den Scope der äußeren Funktion schließt den umgebenden Scope der äußeren Funktion ein und erstellt effektiv eine Kette von Funktionsscopes. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, die alle Zugriff auf den Scope der äußeren Funktionen haben. In diesem Kontext können wir sagen, dass Closures Zugriff auf _alle_ äußeren Scopes haben.

Closures können auch Variablen in Blockscopes und Moduls scopes erfassen. Zum Beispiel wird im Folgenden ein Closure über die block-scoped Variable `y` erstellt:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die im Modul gescoped Variable `x` schließen. Auch wenn `x` nicht direkt von anderen Modulen zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _dynamische {{Glossary("binding", "Bindings")}}_ betrachtet werden, weil sich der importierte Wert entsprechend ändert, wenn sich der Originalwert ändert.

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

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Schlüsselworts trat ein häufiges Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellten. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefeldes im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfsmethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie sehen, dass er nicht wie erwartet funktioniert. Unabhängig davon, auf welches Feld Sie sich konzentrieren, wird die Nachricht über Ihr Alter angezeigt.

Der Grund dafür ist, dass die Funktionen, die `onfocus` zugewiesen wurden, Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Scope der `setupHelp`-Funktion. Drei Closures wurden durch die Schleife erstellt, aber jedes teilt die gleiche einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und daher aufgrund des Hoistings Funktions-Scope hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Rückrufe ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits durchgelaufen ist, zeigt das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: Insbesondere eine Funktionsfabrik, wie zuvor beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass alle Rückrufe eine einzelne lexikalische Umgebung teilen, erstellt die `makeHelpCallback`-Funktion _eine neue lexikalische Umgebung_ für jeden Rückruf, in der `help` sich auf den entsprechenden String aus dem `helpText`-Array bezieht.

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

In diesem Beispiel wird `const` anstelle von `var` verwendet, sodass jedes Closure die block-gescopte Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Wenn Sie ohnehin modernen JavaScript schreiben, können Sie weitere Alternativen zur einfachen `for`-Schleife in Betracht ziehen, wie z. B. die Verwendung von {{jsxref("Statements/for...of", "for...of")}}-Schleifen und `item` als `let` oder `const` zu deklarieren oder die {{jsxref("Array/forEach", "forEach()")}}-Methode zu verwenden, die beide das Closure-Problem vermeiden.

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

## Leistungsüberlegungen

Wie zuvor erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Scope und ihr eigenes Closure. Daher ist es unklug, unnötig Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies negative Auswirkungen auf die Skriptleistung sowohl in Bezug auf Verarbeitungsgeschwindigkeit als auch Speicherverbrauch haben wird.

Wenn Sie beispielsweise ein neues Objekt/eine neue Klasse erstellen, sollten Methoden normalerweise mit dem Prototyp des Objekts verknüpft werden, anstatt in den Objektkonstruktor definiert zu werden. Der Grund dafür ist, dass die Methoden jedes Mal, wenn der Konstruktor aufgerufen wird, neu zugewiesen würden (d.h. für jede Objekterstellung).

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

Da der vorherige Code in diesem speziellen Fall nicht die Vorteile der Verwendung von Closures nutzt, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden:

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

Die Neudefinition des Prototyps wird jedoch nicht empfohlen. Im folgenden Beispiel wird dem vorhandenen Prototyp stattdessen etwas hinzugefügt:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten gemeinsam genutzt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Weitere Informationen finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
