---
title: Closures
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 2463abc1ca0fb6588d182651f8f659ae0d618915
---

{{jsSidebar("Intermediate")}}

Ein **Closure** ist die Kombination einer Funktion, die zusammen (eingeschlossen) mit Verweisen auf ihren umgebenden Zustand (die **lexikalische Umgebung**) gebündelt ist. Mit anderen Worten ermöglicht ein Closure einer Funktion den Zugriff auf ihren äußeren Geltungsbereich. In JavaScript werden Closures jedes Mal erstellt, wenn eine Funktion erstellt wird, und zwar zum Zeitpunkt der Funktionserstellung.

## Lexikalische Abgrenzung

Betrachten Sie das folgende Beispielcode:

```js
function init() {
  var name = "Mozilla"; // name ist eine lokale Variable, die von init erstellt wurde
  function displayName() {
    // displayName() ist die innere Funktion, die ein Closure bildet
    console.log(name); // benutzt die Variable, die in der Elternfunktion deklariert wurde
  }
  displayName();
}
init();
```

`init()` erstellt eine lokale Variable namens `name` und eine Funktion namens `displayName()`. Die `displayName()`-Funktion ist eine innere Funktion, die innerhalb von `init()` definiert ist und nur im Körper der `init()`-Funktion verfügbar ist. Beachten Sie, dass die `displayName()`-Funktion keine eigenen lokalen Variablen hat. Da innere Funktionen jedoch Zugriff auf die Variablen der äußeren Geltungsbereiche haben, kann `displayName()` auf die Variable `name` zugreifen, die in der Elternfunktion `init()` deklariert wurde.

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/3dxck52m/) aus und beachten Sie, dass die `console.log()`-Anweisung innerhalb der `displayName()`-Funktion erfolgreich den Wert der `name`-Variablen anzeigt, die in ihrer Elternfunktion deklariert ist. Dies ist ein Beispiel für _lexikalische Abgrenzung_, die beschreibt, wie ein Parser Variablennamen auflöst, wenn Funktionen verschachtelt werden. Das Wort _lexikalisch_ bezieht sich darauf, dass die lexikalische Abgrenzung den Ort verwendet, an dem eine Variable innerhalb des Quellcodes deklariert wird, um zu bestimmen, wo diese Variable verfügbar ist. Geschachtelte Funktionen haben Zugriff auf Variablen, die in ihrem äußeren Geltungsbereich deklariert wurden.

### Abgrenzung mit let und const

Traditionell (vor ES6) hatten JavaScript-Variablen nur zwei Arten von Geltungsbereichen: _Funktionsabgrenzung_ und _globaler Geltungsbereich_. Variablen, die mit `var` deklariert werden, sind entweder funktionsbezogen oder global, abhängig davon, ob sie innerhalb oder außerhalb einer Funktion deklariert werden. Dies kann knifflig sein, da Blöcke mit geschweiften Klammern keine Geltungsbereiche schaffen:

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

Für Personen aus anderen Sprachen (z.B. C, Java), in denen Blöcke Geltungsbereiche erstellen, sollte der obige Code auf der `console.log`-Linie einen Fehler werfen, da wir uns außerhalb des Geltungsbereichs von `x` in jedem Block befinden. Da Blöcke jedoch keine Geltungsbereiche für `var` schaffen, erstellt die `var`-Anweisung hier tatsächlich eine globale Variable. Es gibt auch ein [praktisches Beispiel](#creating_closures_in_loops_a_common_mistake), das weiter unten vorgestellt wird und zeigt, wie dies tatsächliche Fehler verursachen kann, wenn es mit Closures kombiniert wird.

In ES6 führte JavaScript die Deklarationen `let` und `const` ein, die unter anderem [temporal dead zones](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) umfassen und es Ihnen ermöglichen, blockbezogene Variablen zu erstellen.

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

Im Wesentlichen werden Blöcke in ES6 endlich als Geltungsbereiche behandelt, aber nur, wenn Sie Variablen mit `let` oder `const` deklarieren. Zusätzlich führte ES6 [Module](/de/docs/Web/JavaScript/Guide/Modules) ein, die eine weitere Art von Geltungsbereich einführten. Closures sind in der Lage, Variablen in all diesen Geltungsbereichen zu erfassen, die wir später vorstellen werden.

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

Das Ausführen dieses Codes hat genau denselben Effekt wie das vorherige Beispiel der `init()`-Funktion. Was anders (und interessant) ist, ist, dass die `displayName()`-innere Funktion von der äußeren Funktion _zurückgegeben wird, bevor sie ausgeführt wird_.

Auf den ersten Blick mag es unlogisch erscheinen, dass dieser Code immer noch funktioniert. In einigen Programmiersprachen existieren die lokalen Variablen innerhalb einer Funktion nur für die Dauer der Ausführung dieser Funktion. Sobald `makeFunc()` die Ausführung beendet, könnte man erwarten, dass die `name`-Variable nicht mehr zugänglich ist. Da der Code jedoch wie erwartet funktioniert, ist dies offensichtlich nicht der Fall in JavaScript.

Der Grund dafür ist, dass Funktionen in JavaScript Closures bilden. Ein _Closure_ ist die Kombination einer Funktion und der lexikalischen Umgebung, in der die Funktion deklariert wurde. Diese Umgebung besteht aus allen Variablen, die zur Zeit der Erstellung des Closures im Geltungsbereich waren. In diesem Fall ist `myFunc` ein Verweis auf die Instanz der Funktion `displayName`, die erstellt wird, wenn `makeFunc` ausgeführt wird. Die Instanz von `displayName` behält einen Verweis auf ihre lexikalische Umgebung, in der die Variable `name` existiert. Aus diesem Grund bleibt die Variable `name` verfügbar, wenn `myFunc` aufgerufen wird, und "Mozilla" wird an `console.log` übergeben.

Hier ein etwas interessanteres Beispiel—eine `makeAdder`-Funktion:

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

Im Wesentlichen ist `makeAdder` eine Funktionsfabrik. Sie erstellt Funktionen, die einen bestimmten Wert zu ihrem Argument hinzufügen können. In dem obigen Beispiel erstellt die Funktionsfabrik zwei neue Funktionen—eine, die fünf zu ihrem Argument hinzufügt, und eine, die zehn hinzufügt.

`add5` und `add10` bilden beide Closures. Sie teilen sich dieselbe Funktionskörperdefinition, speichern jedoch unterschiedliche lexikalische Umgebungen. In `add5`'s lexikalischer Umgebung ist `x` 5, während in der lexikalischen Umgebung für `add10`, `x` 10 ist.

## Praktische Closures

Closures sind nützlich, weil sie Ihnen ermöglichen, Daten (die lexikalische Umgebung) mit einer Funktion zu verknüpfen, die mit diesen Daten arbeitet. Dies hat offensichtliche Parallelen zur objektorientierten Programmierung, wo Objekte es Ihnen ermöglichen, Daten (die Eigenschaften des Objekts) mit einer oder mehreren Methoden zu verknüpfen.

Folglich können Sie ein Closure überall dort verwenden, wo Sie normalerweise ein Objekt mit nur einer einzigen Methode verwenden würden.

Situationen, in denen Sie dies tun möchten, sind besonders häufig im Web zu finden. Ein großer Teil des in Frontend-JavaScript geschriebenen Codes ist ereignisbasiert. Sie definieren ein gewisses Verhalten und hängen es dann an ein Ereignis, das vom Benutzer ausgelöst wird (wie ein Klick oder ein Tastendruck). Der Code wird als Callback angehängt (eine einzige Funktion, die als Reaktion auf das Ereignis ausgeführt wird).

Angenommen, wir möchten Schaltflächen zu einer Seite hinzufügen, um die Textgröße anzupassen. Eine Möglichkeit, dies zu tun, besteht darin, die Schriftgröße des `body`-Elements (in Pixel) anzugeben und dann die Größe der anderen Elemente auf der Seite (wie Überschriften) mit der relativen `em`-Einheit festzulegen:

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

Solche interaktiven Textgrößenschaltflächen können die `font-size`-Eigenschaft des `body`-Elements ändern und die Anpassungen werden dank der relativen Einheiten von anderen Elementen auf der Seite übernommen.

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

`size12`, `size14` und `size16` sind jetzt Funktionen, die den Text des `body` auf 12, 14 und 16 Pixel verkleinern. Sie können sie an Schaltflächen anhängen, wie im folgenden Codebeispiel gezeigt.

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

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/hotae160/) aus.

## Emulieren privater Methoden mit Closures

Sprachen wie Java ermöglichen es Ihnen, Methoden als privat zu deklarieren, was bedeutet, dass sie nur von anderen Methoden in derselben Klasse aufgerufen werden können.

JavaScript hatte vor [Klassen](/de/docs/Web/JavaScript/Reference/Classes) keine native Möglichkeit, [private Methoden](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_methods) zu deklarieren, aber es war möglich, private Methoden mit Closures zu emulieren. Private Methoden sind nicht nur nützlich, um den Zugriff auf Code zu beschränken. Sie bieten auch eine leistungsstarke Möglichkeit, Ihren globalen Namensraum zu verwalten.

Der folgende Code veranschaulicht, wie Sie Closures verwenden können, um öffentliche Funktionen zu definieren, die auf private Funktionen und Variablen zugreifen können. Beachten Sie, dass diese Closures dem [Modul Design Pattern](https://www.google.com/search?q=javascript+module+pattern) folgen.

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

Die gemeinsame lexikalische Umgebung wird im Körper einer anonymen Funktion erstellt, _die ausgeführt wird, sobald sie definiert ist_ (auch bekannt als [IIFE](/de/docs/Glossary/IIFE)). Die lexikalische Umgebung enthält zwei private Elemente: eine Variable namens `privateCounter` und eine Funktion namens `changeBy`. Sie können auf keines dieser privaten Mitglieder außerhalb der anonymen Funktion zugreifen. Stattdessen greifen Sie indirekt mit den drei öffentlichen Funktionen auf sie zu, die aus dem anonymen Wrapper zurückgegeben werden.

Diese drei öffentlichen Funktionen bilden Closures, die dieselbe lexikalische Umgebung teilen. Dank des lexikalischen Scopings von JavaScript haben sie jeweils Zugriff auf die Variable `privateCounter` und die Funktion `changeBy`.

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

Beachten Sie, wie die beiden Zähler ihre Unabhängigkeit voneinander beibehalten. Jedes Closure verweist durch sein eigenes Closure auf eine andere Version der `privateCounter`-Variable. Jedes Mal, wenn einer der Zähler aufgerufen wird, ändert sich seine lexikalische Umgebung durch Ändern des Werts dieser Variablen. Änderungen des Variablenwerts in einem Closure wirken sich nicht auf den Wert im anderen Closure aus.

> [!NOTE]
> Die Verwendung von Closures auf diese Weise bietet Vorteile, die normalerweise mit objektorientierter Programmierung verbunden sind. Insbesondere _Datenverbergung_ und _Kapselung_.

## Scope-Kette von Closures

Der Zugriff einer verschachtelten Funktion auf den Geltungsbereich der äußeren Funktion umfasst den umgebenden Geltungsbereich der äußeren Funktion und schafft effektiv eine Kette von Funktionsgeltungsbereichen. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

```js
// globaler Geltungsbereich
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // äußere Funktionen
      return function (d) {
        // lokale Funktionen
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

Sie können auch ohne anonyme Funktionen schreiben:

```js
// globaler Geltungsbereich
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // äußere Funktionen
      return function sum4(d) {
        // lokale Funktionen
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

Im obigen Beispiel gibt es eine Reihe von verschachtelten Funktionen, die alle Zugriff auf den Geltungsbereich der äußeren Funktionen haben. In diesem Kontext können wir sagen, dass Closures Zugriff auf _alle_ äußeren Geltungsbereiche haben.

Closures können auch Variablen in Block-Geltungsbereichen und Modul-Geltungsbereichen erfassen. Zum Beispiel erstellt das folgende ein Closure über die blockgebundene Variable `y`:

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

Hier exportiert das Modul ein Paar Getter-Setter-Funktionen, die über die modulgebundene Variable `x` schließen. Selbst wenn `x` nicht direkt von anderen Modulen aus zugänglich ist, kann es mit den Funktionen gelesen und geschrieben werden.

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures können auch über importierte Werte schließen, die als _live {{Glossary("binding", "Bindings")}}_ angesehen werden, weil sich der importierte Wert entsprechend ändert, wenn sich der ursprüngliche Wert ändert.

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

export const getX = () => x; // Über einen importierten Live-Bindung schließen
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## Schaffen von Closures in Schleifen: Ein häufiger Fehler

Vor der Einführung des [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Schlüsselwortes trat ein häufiges Problem mit Closures auf, wenn Sie sie innerhalb einer Schleife erstellten. Um dies zu demonstrieren, betrachten Sie den folgenden Beispielcode.

```html
<p id="help">Hilfreiche Hinweise erscheinen hier</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Alter: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", hilfe: "Ihre E-Mail-Adresse" },
    { id: "name", hilfe: "Ihr vollständiger Name" },
    { id: "age", hilfe: "Ihr Alter (Sie müssen über 16 Jahre alt sein)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Schuldiger ist die Verwendung von `var` in dieser Zeile
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Probieren Sie den Code in [JSFiddle](https://jsfiddle.net/v7gjv/8164/) aus.

Das `helpText`-Array definiert drei hilfreiche Hinweise, die jeweils mit der ID eines Eingabefelds im Dokument verknüpft sind. Die Schleife durchläuft diese Definitionen und verbindet ein `onfocus`-Ereignis mit jedem, das die zugehörige Hilfemethode anzeigt.

Wenn Sie diesen Code ausprobieren, werden Sie sehen, dass er nicht wie erwartet funktioniert. Egal auf welches Feld Sie fokussieren, die Nachricht über Ihr Alter wird angezeigt.

Der Grund dafür ist, dass die Funktionen, die `onfocus` zugewiesen sind, Closures bilden; sie bestehen aus der Funktionsdefinition und der erfassten Umgebung aus dem Geltungsbereich der `setupHelp`-Funktion. Drei Closures wurden durch die Schleife erstellt, aber jede teilt dieselbe einzige lexikalische Umgebung, die eine Variable mit sich ändernden Werten (`item`) hat. Dies liegt daran, dass die Variable `item` mit `var` deklariert ist und aufgrund von Hoisting einen Funktionsumfang hat. Der Wert von `item.help` wird bestimmt, wenn die `onfocus`-Callbacks ausgeführt werden. Da die Schleife zu diesem Zeitpunkt bereits durchlaufen wurde, zeigt das `item`-Variablenobjekt (geteilt von allen drei Closures) auf den letzten Eintrag in der `helpText`-Liste.

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
    { id: "email", hilfe: "Ihre E-Mail-Adresse" },
    { id: "name", hilfe: "Ihr vollständiger Name" },
    { id: "age", hilfe: "Ihr Alter (Sie müssen über 16 Jahre alt sein)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

Führen Sie den Code mit diesem [JSFiddle-Link](https://jsfiddle.net/v7gjv/9573/) aus.

Dies funktioniert wie erwartet. Anstatt dass alle Callbacks eine einzige lexikalische Umgebung teilen, erstellt die Funktion `makeHelpCallback` _eine neue lexikalische Umgebung_ für jeden Callback, in der `help` auf den entsprechenden String aus dem `helpText`-Array verweist.

Eine andere Möglichkeit, das oben Genannte mit anonymen Closures zu schreiben, ist:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", hilfe: "Ihre E-Mail-Adresse" },
    { id: "name", hilfe: "Ihr vollständiger Name" },
    { id: "age", hilfe: "Ihr Alter (Sie müssen über 16 Jahre alt sein)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Sofortige Event-Listener-Überprüfung mit dem aktuellen Wert von item (bis zur Iteration erhalten).
  }
}

setupHelp();
```

Wenn Sie keine zusätzlichen Closures verwenden möchten, können Sie das [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort verwenden:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", hilfe: "Ihre E-Mail-Adresse" },
    { id: "name", hilfe: "Ihr vollständiger Name" },
    { id: "age", hilfe: "Ihr Alter (Sie müssen über 16 Jahre alt sein)" },
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

Eine weitere Alternative könnte sein, die `forEach()`-Methode zu verwenden, um über das `helpText`-Array zu iterieren und einen Listener an jedes [`<input>`](/de/docs/Web/HTML/Element/input) anzuhängen, wie gezeigt:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", hilfe: "Ihre E-Mail-Adresse" },
    { id: "name", hilfe: "Ihr vollständiger Name" },
    { id: "age", hilfe: "Ihr Alter (Sie müssen über 16 Jahre alt sein)" },
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

Wie bereits erwähnt, verwaltet jede Funktionsinstanz ihren eigenen Geltungsbereich und Closure. Daher ist es unklug, unnötig Funktionen innerhalb anderer Funktionen zu erstellen, wenn Closures für eine bestimmte Aufgabe nicht benötigt werden, da dies die Skriptleistung sowohl in Bezug auf die Verarbeitungsgeschwindigkeit als auch den Speicherverbrauch negativ beeinflusst.

Zum Beispiel sollten beim Erstellen eines neuen Objekts/Klasse Methoden normalerweise dem Prototyp des Objekts zugeordnet werden, anstatt im Objektkonstruktor definiert zu werden. Der Grund dafür ist, dass die Methoden jedes Mal, wenn der Konstruktor aufgerufen wird, neu zugewiesen werden (d.h. bei jedem Erstellen von Objekten).

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

Da der vorherige Code die Vorteile der Verwendung von Closures in diesem speziellen Fall nicht nutzt, könnten wir ihn stattdessen umschreiben, um Closures zu vermeiden, wie folgt:

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

Das Neudefinieren des Prototyps wird jedoch nicht empfohlen. Im folgenden Beispiel wird stattdessen dem existierenden Prototyp hinzugefügt:

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

In den beiden vorherigen Beispielen kann der geerbte Prototyp von allen Objekten geteilt werden, und die Methodendefinitionen müssen nicht bei jeder Objekterstellung auftreten. Siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) für weitere Informationen.
