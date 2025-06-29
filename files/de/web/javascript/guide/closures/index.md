---
title: Closures
slug: Web/JavaScript/Guide/Closures
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination aus einer Funktion, die zusammen mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) gebündelt wird. Mit anderen Worten, ein Closure gibt einer Funktion Zugriff auf ihren äußeren Bereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zum Zeitpunkt der Funktionserstellung.

## Lexikalisches Scoping

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

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die Funktion `displayName()` ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Körper der Funktion `init()` verfügbar ist. Beachten Sie, dass die Funktion `displayName()` keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen von äußeren Bereichen haben, kann `displayName()` auf die in der übergeordneten Funktion `init()` deklarierte Variable `name` zugreifen.

Wenn Sie diesen Code in Ihrer Konsole ausführen, können Sie sehen, dass die `console.log()`-Anweisung innerhalb der Funktion `displayName()` den Wert der in ihrer übergeordneten Funktion deklarierten Variablen `name` erfolgreich anzeigt. Dies ist ein Beispiel für _lexikalisches Scoping_, das beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt sind. Das Wort _lexikalisch_ bezieht sich darauf, dass das lexikalische Scoping den Ort verwendet, an dem eine Variable im Quellcode deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Verschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Bereich deklariert sind.

### Scoping mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Bereichen: _Funktionsbereich_ und _globaler Bereich_. Mit `var` deklarierte Variablen sind entweder funktionsbezogen oder global bezogen, je nachdem, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Bereiche erstellen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z.B. C, Java), bei denen Blöcke Bereiche erzeugen, sollte der obige Code einen Fehler in der `console.log`-Zeile werfen, da wir uns außerhalb des Bereichs von `x` in einem der Blöcke befinden. Da Blöcke jedoch keine Bereiche für `var` erstellen, erzeugen die `var`-Anweisungen hier tatsächlich eine globale Variable. Es gibt auch ein [praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das weiter unten eingeführt wird und zeigt, wie dies in Verbindung mit Closures tatsächliche Fehler verursachen kann.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die es unter anderem wie [temporal dead zones](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) ermöglichen, blockbegrenzte Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Bereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zusätzlich führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Bereich einführten. Closures können Variablen in all diesen Bereichen erfassen, die wir später einführen werden.

## Closure

Betrachten Sie das folgende Code-Beispiel:

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der Funktion `init()` oben. Was anders (und interessant) ist, ist, dass die innere Funktion `displayName()` von der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unintuitiv erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen in einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet hat, könnte man erwarten, dass die Variable `name` nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination aus einer Funktion und der lexikalischen Umgebung, innerhalb derer diese Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zum Zeitpunkt der Erstellung des Closures im Gültigkeitsbereich waren. In diesem Fall ist `myFunc` eine Referenz auf die Instanz der Funktion `displayName`, die beim Ausführen von `makeFunc` erstellt wird. Die Instanz von `displayName` behält eine Referenz zu ihrer lexikalischen Umgebung bei, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

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

In diesem Beispiel haben wir eine Funktion `makeAdder(x)` definiert, die ein einziges Argument `x` übernimmt und eine neue Funktion zurückgibt. Die zurückgegebene Funktion nimmt ein einziges Argument `y` und gibt die Summe von `x` und `y` zurück.

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. Im obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen—eine, die fünf zu ihrem Argument hinzufügt, und eine, die zehn hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen denselben Funktionskörper, speichern jedoch unterschiedliche lexikalische Umgebungen. In der lexikalischen Umgebung von `add5` ist `x` 5, während in der lexikalischen Umgebung für `add10` `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie es Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die auf diese Daten wirkt. Das hat offensichtliche Parallelen zur objektorientierten Programmierung, bei der Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind auf Webseiten besonders häufig. Ein Großteil des in Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein Verhalten und verknüpfen es dann mit einem Ereignis, das vom Benutzer ausgelöst wird (z.B. ein Klick oder ein Tastendruck). Der Code wird als Callback verknüpft (eine einzelne Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Angenommen, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `<body>`-Elements (in Pixel) festzulegen und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mithilfe der relativen Einheit `em` einzustellen:

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

`size12`, `size14` und `size16` sind nun Funktionen, die den Textkörper auf 12, 14 bzw. 16 Pixel ändern. Sie können sie an Schaltflächen anhängen, wie im folgenden Codebeispiel gezeigt.

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

## Private Methoden mit Closures nachbilden

Sprachen wie Java ermöglichen es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_methods) zu deklarieren, aber es war möglich, private Methoden mithilfe von Closures nachzubilden. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code zu beschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

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

In früheren Beispielen hatte jedes Closure seine eigene lexikalische Umgebung. Hier jedoch gibt es eine einzelne lexikalische Umgebung, die von den drei Funktionen geteilt wird: `counter.increment`, `counter.decrement` und `counter.value`.

Die geteilte lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die sofort ausgeführt wird, sobald sie definiert wurde_ (auch bekannt als {{Glossary("IIFE", "IIFE")}}). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Diese privaten Mitglieder können außerhalb der anonymen Funktion nicht aufgerufen werden. Stattdessen greifen Sie indirekt auf sie zu, indem Sie die drei öffentlichen Funktionen verwenden, die aus dem anonymen Wrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die die gleiche lexikalische Umgebung teilen. Dank des lexikalischen Scopings von JavaScript haben sie alle Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander bewahren. Jedes Closure referenziert eine andere Version der Variablen `privateCounter` durch sein eigenes Closure. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung durch Ändern des Werts dieser Variable. Änderungen des Variablenwerts in einem Closure beeinflussen den Wert im anderen Closure nicht.

> [!NOTE]
> Die Verwendung von Closures in dieser Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden werden. Insbesondere _Datenverbergung_ und _Kapselung_.

## Closure-Scope-Kette

Der Zugriff einer verschachtelten Funktion auf den Bereich der äußeren Funktion umfasst den umgebenden Bereich der äußeren Funktion—effektiv wird eine Kette von Funktionsbereichen erstellt. Zur Demonstration betrachten Sie den folgenden Beispielcode.

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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, die alle Zugriff auf den Bereich der äußeren Funktionen haben. In diesem Zusammenhang können wir sagen, dass Closures Zugriff auf _alle_ äußere Bereiche haben.

Closures können auch Variablen in Block-Scopes und Modul-Scopes erfassen. Zum Beispiel erstellt das folgende ein Closure über die blockbegrenzte Variable `y`:

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

Hier exportiert das Modul ein Paar von Getter-Setter-Funktionen, die über die modulbegrenzte Variable `x` geschlossen werden. Auch wenn `x` nicht direkt von anderen Modulen aus zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte geschlossen werden, die als _live {{Glossary("binding", "Bindings")}}_ angesehen werden, da sich der importierte Wert ändert, wenn sich der ursprüngliche Wert ändert.

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

## Closures in Schleifen erstellen: Ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselwortes trat ein häufiges Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellten. Zur Demonstration betrachten Sie den folgenden Beispielcode.

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

Das `helpText`-Array definiert drei hilfreiche Tipps, die jeweils einer ID eines Eingabefeldes im Dokument zugeordnet sind. Die Schleife durchläuft diese Definitionen und verbindet ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfemethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie feststellen, dass er nicht wie erwartet funktioniert. Egal welches Feld Sie fokussieren, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die den `onfocus`-Ereignissen zugewiesenen Funktionen Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Bereich der `setupHelp`-Funktion. Durch die Schleife wurden drei Closures erstellt, aber jedes von ihnen teilt die gleiche einzelne lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert wird und aufgrund des Hoistings einen Funktionsbereich hat. Der Wert von `item.help` wird ermittelt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits abgeschlossen ist, zeigt das `item`-Variablenobjekt (das von allen drei Closures geteilt wird) auf den letzten Eintrag in der `helpText`-Liste.

Eine Lösung in diesem Fall besteht darin, mehr Closures zu verwenden: insbesondere eine Funktionsfabrik wie zuvor beschrieben:

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

Dies funktioniert wie erwartet. Anstatt dass die Callbacks alle eine einzelne lexikalische Umgebung teilen, erstellt die Funktion `makeHelpCallback` für jeden Callback _eine neue lexikalische Umgebung_, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das Obige mit anonymen Closures zu schreiben, ist:

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

Wenn Sie nicht mehr Closures verwenden möchten, können Sie das Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwenden:

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

In diesem Beispiel wird `const` anstelle von `var` verwendet, sodass jedes Closure die blockbegrenzte Variable bindet, was bedeutet, dass keine zusätzlichen Closures erforderlich sind.

Eine weitere Alternative könnte darin bestehen, `forEach()` zu verwenden, um über das `helpText`-Array zu iterieren und einen Listener zu jedem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) hinzuzufügen, wie gezeigt:

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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Bereich und Closure. Es ist daher unklug, unnötigerweise Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch auf den Speicherverbrauch negativ beeinflusst.

Zum Beispiel sollten beim Erstellen eines neuen Objekts/einer neuen Klasse Methoden normalerweise dem Prototyp des Objekts zugeordnet werden, anstatt in den Objektkonstruktor definiert zu werden. Der Grund dafür ist, dass wann immer der Konstruktor aufgerufen wird, die Methoden neu zugeordnet werden (das heißt, für jede Objekterstellung).

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

Da der vorherige Code die Vorteile der Verwendung von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn stattdessen umschreiben, um die Verwendung von Closures zu vermeiden:

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

Die Neudefinition des Prototyps wird jedoch nicht empfohlen. Das folgende Beispiel fügt stattdessen dem bestehenden Prototyp hinzu:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden und die Methodendefinitionen müssen nicht bei jeder Objekterstellung erfolgen. Weitere Informationen finden Sie unter [Vererbung und der Prototypbaum](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
