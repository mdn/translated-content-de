---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("Objects")}}

> [!WARNING]
> JavaScript aus einem String auszuführen, stellt ein enormes Sicherheitsrisiko dar. Es ist viel zu einfach für einen Angreifer, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Niemals direkte eval() verwenden!](#never_use_direct_eval!), unten.

Die **`eval()`**-Funktion wertet JavaScript-Code, der als String dargestellt wird, aus und gibt dessen Abschlusswert zurück. Der Quellcode wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Es wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Er wird die Quellzeichenfolge als Skripttext auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Der Abschlusswert des Codes wird zurückgegeben. Für Ausdrücke ist es der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (z.B. der Abschlusswert einer Zuweisung ist der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variablen namens `eval` oder die Neu-Zuweisung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines primitiven Strings dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf eine generische Weise zu umgehen, können Sie das Argument [selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi für `eval()`-Aufrufe: _direktes_ eval und _indirektes_ eval. Direktes eval bedeutet, die globale `eval`-Funktion _direkt_ mit `eval(...)` aufzurufen. Alles andere, einschließlich der Verwendung über eine zugeordnete Variable, den Zugriff über ein Mitglied oder andere Ausdrücke oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirektes eval kann so gesehen werden, als ob der Code innerhalb eines separaten `<script>`-Tags ausgewertet wird. Das bedeutet:

- Indirektes eval funktioniert im globalen Gültigkeitsbereich statt im lokalen Gültigkeitsbereich, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Aufrufs.

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

- Indirektes `eval` übernimmt nicht den strikten Modus des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Auf der anderen Seite übernimmt direktes eval die Striktheit des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Gültigkeitsbereich gehen, wenn die Quellzeichenfolge nicht im strikten Modus interpretiert wird - für indirekte eval werden sie zu globalen Variablen. Wenn es sich um ein direktes eval in einem strikten Modus handelt oder wenn die `eval`-Quellzeichenfolge selbst im strikten Modus ist, "leaken" `var`- und Funktionsdeklarationen nicht in den umgebenden Gültigkeitsbereich.

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

- Direktes eval hat möglicherweise Zugriff auf zusätzliche kontextbezogene Ausdrücke. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Niemals direkte eval() verwenden!

Die Verwendung von direktem `eval()` hat mehrere Probleme:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, besteht das Risiko, dass bösartiger Code auf dem Rechner des Benutzers mit den Berechtigungen Ihrer Webseite/Erweiterung ausgeführt wird. Wichtiger ist, dass Dritten die Möglichkeit gegeben wird, auf den Gültigkeitsbereich zuzugreifen, in dem `eval()` aufgerufen wurde (bei direktem eval), was zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter wandeln JavaScript in Maschinencode um. Das bedeutet, dass jedes Konzept der Variablennamen eliminiert wird. Daher zwingt jede Verwendung von `eval()` den Browser dazu, lange und teure Variablennamenssuche durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert festzulegen. Zusätzlich können neue Dinge dieser Variable durch `eval()` hinzugefügt werden, wie das Ändern des Typs dieser Variable, was den Browser zwingt, den gesamten generierten Maschinencode neu zu evaluieren, um dies zu kompensieren.
- Minifier geben jede Minifizierung auf, wenn der Gültigkeitsbereich transitiv von `eval()` abhängt, da ansonsten `eval()` zur Laufzeit nicht auf die korrekte Variable zugreifen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandter Methoden optimiert oder ganz vermieden werden kann.

#### Verwenden von indirektem eval()

Sehen Sie sich diesen Code an:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Einfaches Verwenden von indirektem eval und Erzwingen des strikten Modus kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Code-Snippets scheinen auf die gleiche Weise zu funktionieren, tun es jedoch nicht; die erste Version, die direktes eval verwendet, leidet unter mehreren Problemen.

- Es ist erheblich langsamer, aufgrund von mehr Gültigkeitsbereich-Überprüfungen. Beachten Sie `c: new Map()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Gültigkeitsbereich ausgewertet, sodass es für den Interpreter sicher ist anzunehmen, dass sich `Map` auf den globalen `Map()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Map`. In dem Code, der direktes eval verwendet, kann der Interpreter dies jedoch nicht annehmen. Beispielweise bezieht sich `Map` im ausgewerteten String im folgenden Code nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher wird der Browser in der `eval()`-Version des Codes gezwungen, den teuren Nachschlageaufruf durchzuführen, um zu überprüfen, ob lokale Variablen namens `Map()` existieren.

- Wird der strikte Modus nicht verwendet, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Gültigkeitsbereich. Dies führt zu schwer zu debuggenden Problemen, wenn die Zeichenfolge aus externen Eingaben stammt, insbesondere wenn es eine vorhandene Variable mit demselben Namen gibt.
- Direktes eval kann Bindungen im umgebenden Gültigkeitsbereich lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Bei Verwendung von direktem `eval`, insbesondere wenn die eval-Quelle nicht im strikten Modus bewiesen werden kann, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit Inlining deaktivieren, da die `eval()`-Quelle von jedem Variablennamen im umgebenden Gültigkeitsbereich abhängen kann.

Jedoch erlaubt indirektes `eval()` nicht das Übergeben zusätzlicher Bindungen außer den vorhandenen globalen Variablen, die die ausgewertete Quelle lesen kann. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle zugreifen soll, sollten Sie den `Function()`-Konstruktor verwenden.

#### Verwenden des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist sehr ähnlich zum oben genannten indirekten eval-Beispiel: Er wertet die an ihn übergebene JavaScript-Quelle im globalen Gültigkeitsbereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und ermöglicht es daher den Engines, mehr Optimierungen durchzuführen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper geparst wird, nicht als Skript. Es gibt einige Nuancen — zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, nicht jedoch in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie innerhalb Ihrer eval-Quelle lokale Bindungen erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strengen [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwenden von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die zuzugreifende Eigenschaft des Objekts erst bekannt ist, wenn der Code ausgeführt wird. Dies kann mit `eval()` durchgeführt werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Jedoch ist `eval()` hier nicht notwendig — in der Tat ist es fehleranfälliger, weil wenn `propName` kein gültiger Bezeichner ist, es zu einem Syntaxfehler führt. Außerdem kann, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, dies zur Ausführung von beliebigem Code führen. Stattdessen sollten Sie die viel schnelleren und sichereren [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um Nachkommeneigenschaften zuzugreifen. Mit `eval()` würde dies so aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Um `eval()` hier zu vermeiden, könnte man den Eigenschaftenpfad aufteilen und durch die verschiedenen Eigenschaften durchlaufen:

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

Das Festlegen einer Eigenschaft funktioniert ähnlich:

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

Jedoch beachten Sie, dass die Verwendung von Klammerzugriffen mit uneingeschränktem Input ebenfalls nicht sicher ist — es könnte zu [Objekt-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwenden von Callbacks

JavaScript hat {{Glossary("First-class_Function", "first-class functions")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen und Objekteigenschaften speichern und so weiter können. Viele DOM-APIs sind mit diesem Gedanken im Sinn entworfen worden, sodass Sie (und sollten) schreiben:

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

[Verschlüsse](/de/docs/Web/JavaScript/Closures) sind ebenfalls hilfreich als eine Methode, um parametrisierte Funktionen zu erstellen, ohne Zeichenfolgen zusammenzuführen.

#### Verwenden von JSON

Wenn der String, den Sie mit `eval()` aufrufen, Daten (zum Beispiel ein Array: `"[1, 2, 3]"`) anstelle von Code enthält, sollten Sie in Betracht ziehen, auf {{Glossary("JSON", "JSON")}} umzusteigen, das es der Zeichenfolge erlaubt, ein Teilset von JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, sodass viele gültige JavaScript-Literale nicht als JSON geparst werden. Beispielweise sind nachgestellte Kommata in JSON nicht erlaubt und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Verwenden Sie unbedingt einen JSON-Serializer, um Zeichenfolgen zu generieren, die später als JSON geparst werden.

Das Übergeben vorsichtig eingeschränkter Daten statt beliebigen Codes ist generell eine gute Idee. Beispielsweise könnte eine Erweiterung, die darauf ausgelegt ist, Inhalte von Webseiten zu scrapen, die Scraping-Regeln in [XPath](/de/docs/Web/XPath) anstelle von JavaScript-Code definieren.

## Beispiele

### Verwenden von eval()

Im folgenden Code geben beide Anweisungen mit `eval()` den Wert 42 zurück.
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

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre es der letzte ausgewertete Ausdruck oder die letzte Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um die Zeichenfolge `str` auszuwerten. Diese Zeichenfolge besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` bewirken, dass diese Anweisungen ausgeführt werden, und es wird auch die Anweisungseingabe ausführen und den Wert zurückgeben, der `z` zugewiesen wird, weil der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwenden von eval in Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
