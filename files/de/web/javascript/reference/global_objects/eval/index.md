---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Das Ausführen von JavaScript aus einem String stellt ein enormes Sicherheitsrisiko dar. Es ist sehr einfach für einen Angreifer, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Niemals direkt eval() verwenden!](#never_use_direct_eval!) unten.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als Zeichenfolge dargestellt wird, und gibt den Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte umfassen. Es wird als Skript geparst, sodass [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt sind.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Falls der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird die Quellzeichenfolge als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist es der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist `undefined`), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variablen namens `eval` oder die Neuzuordnung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines primitiven Strings dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenfolge auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie das Argument [selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direktes eval bezieht sich, wie der Name schon sagt, auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich der Aufruf über eine zugewiesene Variable, über einen Mitgliederzugriff oder einen anderen Ausdruck oder durch den Operator für optionale Verkettung [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

```js
// Direct call
eval("x + y");

// Indirect call using the comma operator to return eval
(0, eval)("x + y");

// Indirect call through optional chaining
eval?.("x + y");

// Indirect call using a variable to store and return eval
const myEval = eval;
myEval("x + y");

// Indirect call through member access
const obj = { eval };
obj.eval("x + y");
```

Indirektes eval kann betrachtet werden, als ob der Code innerhalb eines separaten `<script>`-Tags ausgeführt wird. Das bedeutet:

- Indirektes eval funktioniert im globalen Bereich anstelle des lokalen Bereichs, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Bereichs, in dem es aufgerufen wird.

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

- Indirektes `eval` erbt nicht die Strenge des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Andererseits erbt direktes eval die Strenge des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gehen in den umgebenden Bereich, wenn die Quellzeichenfolge nicht im strikten Modus interpretiert wird — bei indirektem eval werden sie zu globalen Variablen. Wenn es sich um ein direktes eval in einem strikten Modus handelt oder wenn die eval-Quellzeichenfolge selbst im strikten Modus ist, dann „leaken“ `var` und Funktionsdeklarationen nicht in den umgebenden Bereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb der ausgewerteten Zeichenfolge sind immer auf dieses Skript beschränkt.

- Direktes eval kann auf zusätzliche kontextuelle Ausdrücke zugreifen. Zum Beispiel kann in einem Funktionskörper [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwendet werden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Niemals direkt eval() verwenden!

Die Verwendung von direktem `eval()` leidet unter mehreren Problemen:

- `eval()` führt den Code aus, der mit den Privilegien des Aufrufers übergeben wird. Wenn Sie `eval()` mit einem String ausführen, der von einer bösartigen Partei beeinflusst werden könnte, könnten Sie am Ende bösartigen Code auf dem Rechner des Benutzers mit den Berechtigungen Ihrer Webseite/Erweiterung ausführen. Wichtiger ist, dass es durch die Erlaubnis von Drittanbieter-Code, auf den Bereich zuzugreifen, in dem `eval()` aufgerufen wurde (wenn es sich um ein direktes eval handelt), zu möglichen Angriffen kommen kann, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter wandeln JavaScript in Maschinencode um. Dies bedeutet, dass jeder Begriff der Variablennennung vernichtet wird. Daher zwingt jede Verwendung von `eval()` den Browser, lange teure Variablennamen-Lookups durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Zusätzlich können neue Dinge durch `eval()` in diese Variable eingeführt werden, wie z.B. das Ändern des Variablentyps, was den Browser dazu zwingt, den gesamten generierten Maschinencode neu zu bewerten, um auszugleichen.
- Minimierer geben jede Minimierung auf, wenn der Bereich transitiv von `eval()` abhängt, da `eval()` ansonsten nicht zur Laufzeit die richtige Variable lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Indirektes eval verwenden

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Einfach das indirekte eval zu verwenden und den strikten Modus zu erzwingen, kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Die beiden obigen Code-Snippets mögen auf die gleiche Weise funktionieren, tun es aber nicht; das erste, das direktes eval verwendet, leidet unter mehreren Problemen.

- Es ist wesentlich langsamer aufgrund von mehr Bereichsinspektionen. Beachten Sie `c: new Date()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Bereich ausgewertet, sodass der Interpreter davon ausgehen kann, dass `Date` sich auf den globalen `Date()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Date`. Im Code mit direktem eval kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel bezieht sich `Date` in dem im `eval()`-Code ausgewerteten String nicht auf `window.Date()`.

  ```js
  function looseJsonParse(obj) {
    function Date() {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Date() }`));
  ```

  In der `eval()`-Version des Codes ist der Browser daher gezwungen, den teuren Lookup-Aufruf zu machen, um zu überprüfen, ob es lokale Variablen namens `Date()` gibt.

- Wenn kein strikter Modus verwendet wird, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Bereich. Dies führt zu schwer nachvollziehbaren Problemen, wenn die Zeichenfolge aus externen Eingaben stammt, insbesondere wenn eine vorhandene Variable denselben Namen hat.
- Direktes eval kann Bindungen im umgebenden Bereich lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Wenn direkt `eval` verwendet wird, insbesondere wenn die eval-Quelle nicht im strikten Modus erwiesen ist, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit Inlining deaktivieren, da die `eval()`-Quelle von jedem Variablennamen im umgebenden Bereich abhängen kann.

Die Verwendung von indirektem `eval()` erlaubt jedoch nicht das Übergeben zusätzlicher Bindungen außer bestehender globaler Variablen, die von der ausgewerteten Quelle gelesen werden sollen. Wenn Sie zusätzliche Variablen angeben müssen, auf die der ausgewertete Quellcode zugreifen soll, sollten Sie den `Function()`-Konstruktor verwenden.

#### Verwenden des Function() Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem indirekten eval-Beispiel oben sehr ähnlich: Er wertet die übergebene JavaScript-Quelle im globalen Bereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und erlaubt daher den Engines, mehr Optimierungen zu machen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die übergebene Quellzeichenfolge an `Function()` als Funktionskörper geparst wird, nicht als Skript. Es gibt einige Feinheiten — zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, aber nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie innerhalb Ihrer eval-Quelle lokale Bindungen erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

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

#### Verwenden von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die zuzugreifende Eigenschaft des Objekts erst bekannt ist, wenn der Code ausgeführt wird. Dies kann mit `eval()` gemacht werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Jedoch ist `eval()` hier nicht notwendig — tatsächlich ist es fehleranfälliger, weil, wenn `propName` kein gültiger Bezeichner ist, es zu einem Syntaxfehler führt. Darüber hinaus, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, kann dies zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschaftenzugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die wesentlich schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um Nachkommmenschaftseigenschaften zuzugreifen. Mit `eval()` würde das so aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

`eval()` hier zu vermeiden, könnte erreicht werden, indem der Eigenschaftspfad aufgeteilt und durch die verschiedenen Eigenschaften durchlaufen wird:

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

Achten Sie jedoch darauf, dass die Verwendung von Klammerzugriffen mit unbeschränkter Eingabe auch nicht sicher ist — es kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwenden von Rückruffunktionen

JavaScript hat {{Glossary("First-class_Function", "erstklassige Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und Objekteigenschaften speichern und so weiter können. Viele DOM-APIs sind mit diesem Konzept im Sinn entworfen, daher können (und sollten) Sie schreiben:

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

[Closures](/de/docs/Web/JavaScript/Closures) sind ebenfalls hilfreich, um parametrisierte Funktionen ohne das Zusammenfügen von Zeichenfolgen zu erstellen.

#### Verwenden von JSON

Wenn die Zeichenfolge, auf der Sie `eval()` aufrufen, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), im Gegensatz zu Code, sollten Sie in Erwägung ziehen, zu {{Glossary("JSON", "JSON")}} zu wechseln, das es erlaubt, dass die Zeichenfolge eine Untermenge der JavaScript-Syntax verwendet, um Daten darzustellen.

Beachten Sie, dass, da die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, viele gültige JavaScript-Literale nicht als JSON geparst werden können. Zum Beispiel sind nachgestellte Kommata in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Stellen Sie sicher, dass Sie einen JSON-Serializer verwenden, um Zeichenfolgen zu generieren, die später als JSON geparst werden.

Es ist generell eine gute Idee, sorgfältig eingeschränkte Daten anstelle von beliebigem Code zu übergeben. Zum Beispiel könnte eine Erweiterung, die darauf ausgelegt ist, Inhalte von Webseiten zu extrahieren, die Extraktionsregeln in [XPath](/de/docs/Web/XPath) anstelle von JavaScript-Code definiert haben.

## Beispiele

### Verwenden von eval()

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, 42 zurück.
Die erste wertet den String `"x + y + 1"` aus; die zweite wertet den String
`"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre es der zuletzt ausgewertete Ausdruck oder die zuletzt ausgewertete Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` ansonsten 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` diese Anweisungen ausführen und es wird auch die Anweisungensätze auswerten und den Wert zurückgeben, der `z` zugewiesen wird, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als ein String, der eine Funktion definiert, erfordert "(" und ")" als Präfix und Suffix

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

- [Eigenschaftenzugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Using eval in content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
