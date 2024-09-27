---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Objects")}}

> [!WARNING]
> JavaScript aus einem String auszuführen, stellt ein enormes Sicherheitsrisiko dar. Es ist viel zu einfach für einen Angreifer, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Verwenden Sie niemals direkt eval()!](#never_use_direct_eval!), unten.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als String dargestellt ist, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, -Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren dürfen) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die bei der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird die Quellzeichenfolge als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, nicht auf Abschlusswerte von Anweisungen zu vertrauen.

Im Strikten Modus, eine Variable namens `eval` zu deklarieren oder `eval` neu zuzuweisen, ist ein {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines primitiven Strings dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenkette auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf allgemeine Weise zu umgehen, können Sie das Argument selbst [in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi der `eval()`-Aufrufe: _direktes_ eval und _indirektes_ eval. Direktes eval bezieht sich, wie der Name impliziert, auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Member-Zugriff oder anderen Ausdruck, oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

```js
// Direct call
eval("x + y");

// Indirect call using the comma operator to return eval
(0, eval)("x + y");

// Indirect call through optional chaining
eval?.("x + y");

// Indirect call using a variable to store and return eval
const geval = eval;
geval("x + y");

// Indirect call through member access
const obj = { eval };
obj.eval("x + y");
```

Indirektes eval kann als ob der Code innerhalb eines separaten `<script>`-Tags ausgewertet wird gesehen werden. Das bedeutet:

- Indirektes eval arbeitet im globalen Kontext, anstatt im lokalen Kontext, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen im Kontext, in dem es aufgerufen wurde.

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // Direct call, uses local scope
    console.log(eval("x + y")); // Result is 6
    // Indirect call, uses global scope
    console.log(eval?.("x + y")); // Throws because x is not defined in global scope
  }
  ```

- Indirektes `eval` erbt nicht die Stringenz des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenkette selbst eine `"use strict"`-Direktive hat.

  ```js
  function nonStrictContext() {
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Logs 3.141592653589793
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  Andererseits erbt direktes eval die Stringenz des anrufenden Kontexts.

  ```js
  function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Kontext gehen, wenn die Quellzeichenkette nicht im strikten Modus interpretiert wird — für indirektes eval werden sie zu globalen Variablen. Wenn es sich um ein direktes eval in einem strikten Modus-Kontext handelt oder wenn die eval-Quellzeichenkette selbst im strikten Modus ist, dann "leaken" `var` und Funktionsdeklarationen nicht in den umgebenden Kontext.

  ```js
  // Neither context nor source string is strict,
  // so var creates a variable in the surrounding scope
  eval("var a = 1;");
  console.log(a); // 1
  // Context is not strict, but eval source is strict,
  // so b is scoped to the evaluated script
  eval("'use strict'; var b = 1;");
  console.log(b); // ReferenceError: b is not defined

  function strictContext() {
    "use strict";
    // Context is strict, but this is indirect and the source
    // string is not strict, so c is still global
    eval?.("var c = 1;");
    // Direct eval in a strict context, so d is scoped
    eval("var d = 1;");
  }
  strictContext();
  console.log(c); // 1
  console.log(d); // ReferenceError: d is not defined
  ```

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb der ausgewerteten Zeichenkette sind immer auf dieses Skript beschränkt.

- Direktes eval kann auf zusätzliche kontextuelle Ausdrücke zugreifen. Zum Beispiel, im Körper einer Funktion kann man [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkt eval()!

Die Verwendung von direktem `eval()` leidet unter mehreren Problemen:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Anrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer bösartigen Partei beeinflusst werden könnte, könnten Sie bösartigen Code auf dem Computer des Nutzers mit den Berechtigungen Ihrer Webseite/Erweiterung ausführen. Noch wichtiger ist, dass der Zugriff auf den Kontext, in dem `eval()` aufgerufen wurde (wenn es sich um ein direktes eval handelt), durch Drittanbieter-Code möglichen Angriffen, die lokale Variablen lesen oder ändern, Tür und Tor öffnet.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jegliches Konzept der Variablennamengebung zunichtegemacht wird. Daher zwingt jede Verwendung von `eval()` den Browser, aufwendige Nachschlageoperationen durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert, und ihren Wert festzulegen. Zudem können durch `eval()` neue Dinge in diese Variable eingeführt werden, beispielsweise das Ändern des Variablentyps, wodurch der Browser den gesamten generierten Maschinencode neu bewerten muss, um dies auszugleichen.
- Minifier geben jede Art der Komprimierung auf, wenn der Kontext transitiv von `eval()` abhängt, weil `eval()` die richtige Variable zur Laufzeit nicht lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Allein durch die Verwendung von indirektem eval und das Erzwingen des strikten Modus kann der Code erheblich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Die beiden obigen Codeschnipsel mögen ähnlich funktionieren, tun es aber nicht; das erste Beispiel mit direktem eval leidet unter mehreren Problemen.

- Es ist erheblich langsamer aufgrund von mehr Überprüfungen des Kontexts. Beachten Sie `c: new Date()` in der ausgewerteten Zeichenkette. In der indirekten eval-Version wird das Objekt im globalen Kontext ausgewertet, sodass es für den Interpreter sicher ist anzunehmen, dass `Date` sich auf den globalen `Date()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Date`. Im Code mit direktem eval kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel, im folgenden Code bezieht sich `Date` in der ausgewerteten Zeichenkette nicht auf `window.Date()`.

  ```js
  function looseJsonParse(obj) {
    function Date() {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Date() }`));
  ```

  Somit wird im `eval()`-Code die teure Nachschlageoperation gezwungen, um zu überprüfen, ob lokale Variablen mit dem Namen `Date()` existieren.

- Wenn der strikte Modus nicht verwendet wird, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Kontext. Dies führt zu schwer zu debuggenden Problemen, wenn die Zeichenkette aus Eingaben von außen stammt, insbesondere wenn bereits eine Variable mit demselben Namen existiert.
- Direktes eval kann Bindungen im umgebenden Kontext lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Bei der Verwendung von direktem `eval`, insbesondere wenn die eval-Quelle nicht im strikten Modus nachgewiesen werden kann, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit dem Inline-Schreiben deaktivieren, da die `eval()`-Quelle von jedem Variablennamen im umgebenden Kontext abhängen kann.

Die Verwendung von indirektem `eval()` erlaubt jedoch nicht das Übergeben anderer Bindungen außer den bestehenden globalen Variablen, die von der ausgewerteten Quelle gelesen werden. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle Zugriff haben soll, ziehen Sie in Betracht, den `Function()`-Konstruktor zu verwenden.

#### Verwendung des Function() Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ähnelt sehr dem obigen Beispiel des indirekten eval: Er wertet ebenfalls den übergebenen JavaScript-Quelltext im globalen Kontext aus, ohne lokale Bindungen zu lesen oder zu verändern, und ermöglicht es daher den Engines, mehr Optimierungen als direktes `eval()` durchzuführen.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenkette als Funktionskörper und nicht als Skript geparst wird. Es gibt einige Nuancen — zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, jedoch nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihrer eval-Quelle erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function("Date", `"use strict";return (${obj});`)(Date);
}
console.log(runCodeWithDateFunction("Date(5)")); // Saturday
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwendung von Zugriff über eckige Klammern

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf die zugegriffen werden soll, erst bekannt ist, wenn der Code ausgeführt wird. Dies kann mit `eval()` gemacht werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Jedoch ist `eval()` hier nicht notwendig — in der Tat ist es fehleranfälliger, weil, wenn `propName` keine gültige Kennung ist, dies zu einem Syntaxfehler führt. Außerdem kann, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, dies zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um Nachkommens-Eigenschaften zuzugreifen. Mit `eval()` würde dies so aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` hier könnte durch das Aufteilen des Eigenschaftspfads und das Schleifen durch die verschiedenen Eigenschaften gemacht werden:

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = getDescendantProp(obj, propPath); // 0
```

Das Setzen einer Eigenschaft auf diese Weise funktioniert ähnlich:

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c is now 1
```

Seien Sie jedoch gewarnt, dass die Verwendung von Zugriff über eckige Klammern mit unbeschränktem Eingabematerial ebenfalls nicht sicher ist — dies kann zu [Object Injection Attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript verfügt über [First-Class-Funktionen](/de/docs/Glossary/First-class_Function), was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen speichern und in den Eigenschaften von Objekten zuweisen können. Viele DOM-APIs sind mit diesem Gedanken konzipiert, sodass Sie (und sollten) schreiben:

```js
// Instead of setTimeout("…", 1000) use:
setTimeout(() => {
  // …
}, 1000);

// Instead of elt.setAttribute("onclick", "…") use:
elt.addEventListener("click", () => {
  // …
});
```

[Closures](/de/docs/Web/JavaScript/Closures) sind auch hilfreich, um parametrisierte Funktionen ohne das Zusammenfügen von Strings zu erstellen.

#### Verwendung von JSON

Wenn der String, den Sie an `eval()` übergeben, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstatt Code, sollten Sie in Erwägung ziehen, zu [JSON](/de/docs/Glossary/JSON) zu wechseln, welches es dem String erlaubt, eine Teilmenge der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax begrenzt ist und viele gültige JavaScript-Literale nicht als JSON geparst werden können. Zum Beispiel sind nachgestellte Kommas in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen gesetzt sein. Stellen Sie sicher, dass Sie einen JSON-Serializer verwenden, um Zeichenfolgen zu generieren, die später als JSON geparst werden sollen.

Vorsicht walten zu lassen und sorgfältig begrenzte Daten anstelle von beliebigem Code zu übergeben, ist generell eine gute Idee. Beispielsweise könnte eine Erweiterung, die dazu entworfen wurde, Inhalte von Webseiten auszulesen, die Suchregeln in [XPath](/de/docs/Web/XPath) anstelle von JavaScript-Code definiert haben.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, 42 zurück. Die erste wertet die Zeichenkette `"x + y + 1"` aus; die zweite wertet die Zeichenkette `"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` wäre es der letzte ausgewertete Ausdruck oder die letzte Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um die Zeichenkette `str` auszuwerten. Diese Zeichenkette besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, falls `x` fünf ist und andernfalls `z` den Wert 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, veranlasst `eval()` das Ausführen dieser Anweisungen und es wird auch die Menge der Anweisungen ausgewertet und der Wert zurückgegeben, der `z` zugewiesen wird, weil der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

```js
const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42
```

Wenn Sie mehrere Werte zuweisen, wird der letzte Wert zurückgegeben.

```js
let x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log("x is", eval(str)); // z is 42  x is 420
```

### eval() als String definierte Funktion erfordert "(" und ")" als Präfix und Suffix

```js
// This is a function declaration
const fctStr1 = "function a() {}";
// This is a function expression
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // return undefined, but `a` is available as a global function now
const fct2 = eval(fctStr2); // return the function `b`
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
