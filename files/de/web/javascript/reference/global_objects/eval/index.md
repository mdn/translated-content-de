---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

> [!WARNING]
> JavaScript von einem String auszuführen ist ein enormes Sicherheitsrisiko. Es ist viel zu einfach für einen böswilligen Akteur, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Verwenden Sie niemals direkt eval()!](#never_use_direct_eval!), weiter unten.

Die **`eval()`** Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{InteractiveExample("JavaScript Demo: eval()")}}

```js interactive-example
console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false
```

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der ein JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Es werden alle Ausnahmen ausgelöst, die während der Auswertung des Codes auftreten, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird den Quellstring als Skript-Körper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Für Ausdrücke ist das der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus wird das Deklarieren einer Variablen mit dem Namen `eval` oder das Neuzuweisen von `eval` als {{jsxref("SyntaxError")}} betrachtet.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstatt eines Primitivs dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie [das Argument in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direkte eval bezieht sich, wie der Name schon sagt, auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Member-Zugriff oder einen anderen Ausdruck, oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirekte eval kann so betrachtet werden, als ob der Code in einem separaten `<script>`-Tag ausgewertet wird. Das bedeutet:

- Indirekte eval arbeitet im globalen Bereich und nicht im lokalen Bereich, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen in dem Bereich, in dem er aufgerufen wird.

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

- Indirekte `eval` erbt nicht die Strenge des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quellstring selbst eine `"use strict"`-Direktive enthält.

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

  Andererseits erbt die direkte eval die Strenge des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gelangen in den umgebenden Bereich, wenn der Quellstring nicht im strikten Modus interpretiert wird — für indirekte eval werden sie zu globalen Variablen. Ist es eine direkte eval in einem strikten Modus-Kontext, oder befindet sich der `eval`-Quellstring selbst im strikten Modus, dann "lecken" `var`- und Funktionsdeklarationen nicht in den umgebenden Bereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen innerhalb des ausgewerteten Strings sind immer auf dieses Skript beschränkt.

- Direkte eval darf auf zusätzliche kontextbezogene Ausdrücke zugreifen. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkt eval()!

Die Verwendung von direkter `eval()` leidet unter mehreren Problemen:

- `eval()` führt den Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, riskieren Sie, schädlichen Code auf dem Rechner des Nutzers mit den Berechtigungen Ihrer Webseite / Erweiterung auszuführen. Wichtiger noch, die Ermöglichung, dass Drittanbieter-Code auf den Bereich zugreift, in dem `eval()` aufgerufen wurde (wenn es sich um eine direkte eval handelt), kann zu möglichen Angriffen führen, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreten konvertieren JavaScript in Maschinencode. Dies bedeutet, dass jegliches Konzept der Variablennamensgebung zunichte gemacht wird. Daher wird jede Verwendung von `eval()` den Browser dazu zwingen, lange, teure Nachschlagevorgänge für Variablennamen durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Zusätzlich können neue Dinge durch `eval()` eingeführt werden, wie das Ändern des Typs dieser Variablen, was den Browser zwingt, den gesamten generierten Maschinencode neu zu evaluieren.
- Minifizierer geben jede Minifizierung auf, wenn der Bereich transitiv von `eval()` abhängig ist, da `eval()` andernfalls zur Laufzeit nicht mehr auf die richtige Variable zugreifen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandter Methoden optimiert oder ganz vermieden werden kann.

#### Indirekte eval verwenden

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die Verwendung von indirekter eval und die Erzwingung des strikten Modus können den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Code-Snippets mögen auf den ersten Blick gleich funktionieren, aber das tun sie nicht; das erste Snippet, das direkte eval verwendet, leidet unter mehreren Problemen.

- Es ist erheblich langsamer, da mehr Bereichsinspektionen nötig sind. Beachten Sie `c: new Map()` in dem ausgewerteten String. In der indirekten eval-Version wird das Objekt im globalen Bereich ausgewertet, daher kann der Interpreter davon ausgehen, dass sich `Map` auf den globalen `Map()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Map`. Im Code mit direktem eval kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel verweist in folgendem Code `Map` im ausgewerteten String nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher ist der Browser in der `eval()`-Version des Codes gezwungen, den teuren Nachschlagevorgang durchzuführen, um zu überprüfen, ob es lokale Variablen namens `Map()` gibt.

- Ohne Verwendung des strikten Modus werden `var`-Deklarationen innerhalb des `eval()`-Quelltexts zu Variablen im umgebenden Bereich. Dies führt zu schwer zu debuggenden Problemen, wenn der String aus externen Eingaben stammt, insbesondere wenn bereits eine Variable mit demselben Namen existiert.
- Direkte eval kann Bindungen im umgebenden Bereich lesen und verändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Bei Verwendung von direkter `eval`, insbesondere wenn nicht sicher ist, dass der eval-Quelltext im strikten Modus ist, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit dem Inlinecode deaktivieren, da der `eval()`-Code sich auf jeden Variablennamen im umgebenden Bereich stützen kann.

Die Nutzung von indirekter `eval()` erlaubt jedoch nicht die Übergabe zusätzlicher Bindungen außer bestehender globaler Variablen, um die der ausgewertete Quellcode lesen soll. Wenn Sie zusätzliche Variablen angeben müssen, auf die der ausgewertete Code zugreifen soll, sollten Sie den `Function()`-Konstruktor in Betracht ziehen.

#### Den Function()-Konstruktor verwenden

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem obigen Beispiel mit indirektem eval sehr ähnlich: Er wertet den übergebenen JavaScript-Quellcode im globalen Bereich aus, ohne lokale Bindungen zu lesen oder zu verändern, und erlaubt daher den Engines mehr Optimierungen als die direkte `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quelltext als Funktionskörper und nicht als Skript geparst wird. Es gibt einige Nuancen, zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, aber nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie innerhalb Ihres eval-Quelltexts lokale Bindungen erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen untersagt. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwenden von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts nicht bekannt ist, bis der Code ausgeführt wird. Dies kann mit `eval()` geschehen:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Allerdings ist `eval()` hier nicht notwendig — tatsächlich ist es fehleranfälliger, da es zu einem Syntaxfehler führt, wenn `propName` kein gültiger Bezeichner ist. Zudem, wenn `getPropName` keine Funktion ist, die unter Ihrer Kontrolle steht, kann dies zur Ausführung beliebigen Codes führen. Verwenden Sie stattdessen die [Eigenschaftenaccessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um Nachkomma-Eigenschaften zuzugreifen. Ohne `eval()` könnte dies so aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Um `eval()` hier zu vermeiden, könnten Sie den Eigenschaftenpfad aufteilen und durch die verschiedenen Eigenschaften durchlaufen:

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

Eine Eigenschaft auf diese Weise zu setzen funktioniert ähnlich:

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

Beachten Sie jedoch, dass die Verwendung von Klammerzugriffen mit unbeschränktem Input ebenfalls nicht sicher ist — es kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Rückrufen

JavaScript hat {{Glossary("First-class_Function", "erstklassige Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und Eigenschaften von Objekten speichern und so weiter können. Viele DOM-APIs sind dafür ausgelegt, daher können (und sollten) Sie schreiben:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind auch hilfreich, um parametrierte Funktionen zu erstellen, ohne Strings zu verketten.

#### Verwendung von JSON

Wenn der String, den Sie mit `eval()` aufrufen, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstatt Code, sollten Sie erwägen, auf {{Glossary("JSON", "JSON")}} umzusteigen, das es dem String ermöglicht, ein Subset der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist und viele gültige JavaScript-Literale nicht als JSON geparst werden. Beispielsweise sind abschließende Kommata im JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen gesetzt werden. Verwenden Sie einen JSON-Serializer, um Strings zu generieren, die später als JSON geparst werden.

Allgemein ist es eine gute Idee, sorgfältig eingeschränkte Daten statt beliebigem Code zu übergeben. Zum Beispiel könnte eine Erweiterung, die dazu gedacht ist, Inhalte von Webseiten zu analysieren, die Analyse-Regeln in [XPath](/de/docs/Web/XML/XPath) statt JavaScript-Code definiert haben.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, 42 zurück. Die erste wertet den String `"x + y + 1"` aus; die zweite wertet den String `"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre das der letzte Ausdruck oder die letzte ausgewertete Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` diese Anweisungen ausführen und auch die Menge der Anweisungen auswerten und den Wert zurückgeben, der `z` zugewiesen wird, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als String, der eine Funktion definiert, erfordert "(" und ")" als Präfix und Suffix

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

- [Eigenschaftenaccessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Using eval in content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
