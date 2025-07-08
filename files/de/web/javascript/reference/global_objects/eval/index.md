---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

> [!WARNING]
> Das Ausführen von JavaScript aus einem String ist ein enormes Sicherheitsrisiko. Es ist viel zu einfach für einen böswilligen Akteur, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Never use direct eval()!](#never_use_direct_eval!), unten.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript analysiert.

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
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Er wird als Skript geparst, sodass [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt sind.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Er wird die Quell-Zeichenfolge als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Für Ausdrücke ist es der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefiniert), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus ist das Deklarieren einer Variablen namens `eval` oder das Neuzuweisen von `eval` ein {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines primitiven Strings dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenfolge auszuwerten.

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

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direkte eval bezieht sich darauf, die globale `eval`-Funktion _direkt_ mit `eval(...)` aufzurufen. Alles andere, einschließlich der Verwendung über eine aliasierte Variable, über einen Memberzugriff oder einen anderen Ausdruck oder über den Optional Chaining [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Operator, ist indirekt.

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

Indirekte eval kann so gesehen werden, als ob der Code in einem separaten `<script>`-Tag ausgewertet wird. Das bedeutet:

- Indirekte eval arbeitet im globalen Bereich statt im lokalen Bereich, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Bereichs, in dem er aufgerufen wird.

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

- Indirektes `eval` erbt keine Striktheit des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quell-Zeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Auf der anderen Seite erbt direktes eval die Striktheit des aufrufenden Kontexts.

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

- `var`-deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gehen in den umgebenden Bereich, wenn die Quell-Zeichenfolge nicht im strikten Modus interpretiert wird — bei indirektem eval werden sie zu globalen Variablen. Wenn es sich um ein direktes eval in einem strikten Moduskontext handelt, oder wenn die `eval`-Quell-Zeichenfolge selbst im strikten Modus ist, dann "leaken" `var` und Funktionsdeklarationen nicht in den umgebenden Bereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb der ausgewerteten Zeichenfolge sind immer auf dieses Skript beschränkt.

- Direktes eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Zum Beispiel in einem Funktionskörper kann man [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Niemals direkte eval() verwenden!

Die Verwendung von direkter `eval()` hat mehrere Probleme:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, können Sie am Ende bösartigen Code auf dem Computer des Benutzers mit den Berechtigungen Ihrer Webseite / Erweiterung ausführen. Noch wichtiger ist, dass das Zulassen von Drittcode den Zugriff auf den Bereich, in dem `eval()` aufgerufen wurde (wenn es sich um eine direkte eval handelt), führen kann, was zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jegliches Konzept von Variablennamen zerstört wird. Daher zwingt jede Verwendung von `eval()` den Browser zu langen, teuren Variablennamenssuchen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Zusätzlich können durch `eval()` neue Dinge in diese Variable eingefügt werden, wie etwa das Ändern des Variablentyps, was den Browser dazu zwingt, den gesamten erzeugten Maschinencode neu zu bewerten.
- Minifier geben jegliche Minifizierung auf, wenn der Bereich transitiv von `eval()` abhängt, da `eval()` sonst die richtige Variable zur Laufzeit nicht lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Einfach nur indirektes eval zu verwenden und den strikten Modus zu erzwingen, kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Code-Snippets scheinen auf die gleiche Weise zu funktionieren, aber das tun sie nicht; das erstere, das direkte eval verwendet, leidet unter mehreren Problemen.

- Es ist erheblich langsamer aufgrund umfassenderer Bereichsprüfungen. Beachten Sie `c: new Map()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Bereich ausgewertet, sodass es für den Interpreter sicher ist, anzunehmen, dass `Map` sich auf den globalen `Map()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Map`. Im Code, der direkte eval verwendet, kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel bezieht sich im folgenden Code `Map` in der ausgewerteten Zeichenfolge nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher wird im `eval()`-Version des Codes der Browser gezwungen, den teuren Lookup-Aufruf zu machen, um zu überprüfen, ob es lokale Variablen namens `Map()` gibt.

- Wenn kein strikter Modus verwendet wird, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Bereich. Dies führt zu schwer zu debuggenden Problemen, wenn die Zeichenfolge aus externen Eingaben stammt, insbesondere wenn es bereits eine Variable mit demselben Namen gibt.
- Direktes eval kann Bindungen im umgebenden Bereich lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Bei der Verwendung von direktem `eval`, insbesondere wenn die eval-Quelle nicht im strikten Modus sichergestellt werden kann, müssen die Engine und die Build-Tools alle Optimierungen im Zusammenhang mit Inlinefunktionen deaktivieren, da die `eval()`-Quelle von jedem Variablennamen im umgebenden Bereich abhängen kann.

Die Verwendung von indirektem `eval()` erlaubt jedoch nicht das Übergeben von zusätzlichen Bindungen außer den existierenden globalen Variablen, die die ausgewertete Quelle lesen kann. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle Zugriff haben sollte, sollten Sie den `Function()`-Konstruktor in Betracht ziehen.

#### Verwendung des Function-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem oben genannten indirekten eval-Beispiel sehr ähnlich: Er wertet auch die übergebene JavaScript-Quelle im globalen Bereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und erlaubt es daher den Engines, mehr Optimierungen durchzuführen als bei direktem `eval()`.

Der Unterschied zwischen `eval()` und `Function()` ist, dass die an `Function()` übergebene Quell-Zeichenfolge als Funktionskörper und nicht als Skript geparst wird. Es gibt einige Nuancen — zum Beispiel können Sie `return`-Anweisungen auf oberster Ebene eines Funktionskörpers verwenden, aber nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihrer eval-Quelle erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwendung von Klammerzugriff

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf das zugegriffen werden soll, erst zur Ausführungszeit bekannt ist. Dies kann mit `eval()` erfolgen:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht notwendig — in der Tat ist es fehleranfälliger, da, wenn `propName` kein gültiger Bezeichner ist, es zu einem Syntaxfehler führt. Darüber hinaus, wenn `getPropName` keine Funktion ist, die Sie steuern, kann dies zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschafts-Zugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Mit dieser Methode können Sie sogar auf untergeordnete Eigenschaften zugreifen. Mit `eval()` würde dies folgendermaßen aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

`eval()` hier zu vermeiden, könnte durch das Aufteilen des Eigenschaftspfads und das Schleifen durch die verschiedenen Eigenschaften erreicht werden:

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

Beachten Sie jedoch, dass die Verwendung von Klammerzugriffen mit unbeschränktem Input ebenfalls nicht sicher ist — es kann zu [Objekt-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Rückrufen

JavaScript hat {{Glossary("First-class_Function", "erstklassige Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und Objekteigenschaften speichern und so weiter können. Viele DOM-APIs sind mit diesem Gedanken entworfen, sodass Sie (und sollten) Folgendes schreiben:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind auch hilfreich, um parametrisierte Funktionen zu erstellen, ohne Zeichenfolgen zu verketten.

#### Verwendung von JSON

Wenn der String, den Sie mit `eval()` aufrufen, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), im Gegensatz zu Code, sollten Sie in Erwägung ziehen, auf {{Glossary("JSON", "JSON")}} umzusteigen, das es der Zeichenfolge ermöglicht, ein Unterset aus JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, sodass viele gültige JavaScript-Literale nicht als JSON geparst werden. Zum Beispiel sind nachgestellte Kommas in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objekt-Literalen müssen in Anführungszeichen eingeschlossen sein. Stellen Sie sicher, dass Sie einen JSON-Serializer verwenden, um Zeichenfolgen zu generieren, die später als JSON geparst werden.

Es ist im Allgemeinen eine gute Idee, vorsichtig eingeschränkte Daten anstelle von beliebigem Code zu übergeben. Zum Beispiel könnte eine Erweiterung, die Inhalte von Webseiten extrahiert, die Extraktionsregeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code definiert haben.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, 42 zurück.
Die erste wertet die Zeichenfolge `"x + y + 1"` aus; die zweite wertet die Zeichenfolge
`"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` ist es der letzte ausgewertete Ausdruck oder die Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um die Zeichenfolge `str` auszuwerten. Diese Zeichenfolge besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, werden diese Anweisungen durch `eval()` ausgeführt und auch ausgewertet. Der Wert, der `z` zugewiesen wird, wird zurückgegeben, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als eine Zeichenfolge, die eine Funktion definiert, erfordert "(" und ")" als Präfix und Suffix

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

- [Eigenschafts-Zugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwenden von eval in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
