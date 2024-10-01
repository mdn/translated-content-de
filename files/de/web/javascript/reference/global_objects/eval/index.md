---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Das Ausführen von JavaScript aus einem String stellt ein enormes Sicherheitsrisiko dar. Es ist viel zu leicht für einen Angreifer, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Verwenden Sie niemals direkt eval()!](#never_use_direct_eval!), unten.

Die **`eval()`** Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Abfolge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte beinhalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` keine String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()` Funktion ist ein String. Er wird als Skriptkörper ausgewertet, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke zulässig sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist es der Wert, auf den der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variablen namens `eval` oder die erneute Zuweisung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel verursacht das Übergeben eines `String`-Objekts statt eines Primitivs, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem allgemein zu umgehen, können Sie [das Argument in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi des `eval()`-Aufrufs: _direkte_ eval und _indirekte_ eval. Direkte eval, wie der Name andeutet, bezieht sich auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Memberzugriff oder einen anderen Ausdruck oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirekte eval kann so betrachtet werden, als ob der Code innerhalb eines separaten `<script>`-Tags ausgewertet wird. Das bedeutet:

- Indirekte eval arbeitet im globalen Scope anstatt im lokalen Scope, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Scopes, in dem sie aufgerufen wird.

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

- Indirekte `eval` übernimmt nicht den Striktheitsgrad des umgebenden Kontextes und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive hat.

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

  Direct eval hingegen übernimmt den Striktheitsgrad des aufrufenden Kontextes.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Scope gelangen, wenn die Quellzeichenfolge nicht im strikten Modus interpretiert wird — für indirekte eval werden sie zu globalen Variablen. Wenn es eine direkte eval in einem strikten Modus-Kontext ist oder wenn die eval-Quellzeichenfolge selbst im strikten Modus ist, dann "leaken" `var` und Funktionsdeklarationen nicht in den umgebenden Scope.

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

- Direktes `eval` kann auf zusätzliche kontextuelle Ausdrücke zugreifen. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkt eval()!

Das Verwenden von direktem `eval()` leidet unter mehreren Problemen:

- `eval()` führt den übergebenen Code mit den Privilegien des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, laufen Sie Gefahr, dass unbefugter Code auf dem Rechner des Benutzers mit den Berechtigungen Ihrer Webseite / Erweiterung ausgeführt wird. Wichtiger noch, das Zulassen von Drittanbietercode, auf den Scope zuzugreifen, in dem `eval()` aufgerufen wurde (wenn es ein direktes eval ist), kann zu möglichen Angriffen führen, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jede Konzeptidee der Variablennamen ausgelöscht wird. Daher wird jede Verwendung von `eval()` den Browser zwingen, lange, teure Variablen-Namenssuchen durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und welchen Wert sie hat. Darüber hinaus können neue Elemente in diese Variable durch `eval()` eingeführt werden, wie z.B. das Ändern des Variablentyps, was den Browser zwingt, den gesamten generierten Maschinencode neu zu evaluieren, um dies auszugleichen.
- Minifier geben jede Minifizierung auf, wenn der Scope transitiv von `eval()` abhängt, da `eval()` sonst die korrekte Variable zur Laufzeit nicht lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder vollständig vermieden werden kann.

#### Verwendung von indirekter eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Indem Sie einfach indirekte eval verwenden und den strikten Modus erzwingen, kann der Code viel besser gemacht werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Die beiden obigen Code-Snippets scheinen auf die gleiche Weise zu funktionieren, tun es aber nicht; das erste Snippet, das direkte eval verwendet, leidet unter mehreren Problemen.

- Es ist beträchtlich langsamer aufgrund von mehr Scope-Inspektionen. Beachten Sie `c: new Date()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Scope ausgewertet, daher kann der Interpreter sicher annehmen, dass sich `Date` auf den globalen `Date()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Date`. Im Code, der direkte eval verwendet, kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel bezieht sich im folgenden Code `Date` in der ausgewerteten Zeichenfolge nicht auf `window.Date()`.

  ```js
  function looseJsonParse(obj) {
    function Date() {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Date() }`));
  ```

  Daher ist der Browser in der `eval()`-Version des Codes gezwungen, den teuren Lookup-Aufruf durchzuführen, um zu überprüfen, ob es lokale Variablen namens `Date()` gibt.

- Wenn der strikte Modus nicht verwendet wird, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Scope. Dies führt zu schwer zu debuggen Problemen, wenn der String aus externer Eingabe stammt, insbesondere wenn es bereits eine Variable mit demselben Namen gibt.
- Direktes eval kann Bindungen im umgebenden Scope lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Wenn direktes `eval` verwendet wird, insbesondere wenn nachgewiesen werden kann, dass die eval-Quelle nicht im strikten Modus ist, müssen die Engine - und Build-Werkzeuge - alle Optimierungen im Zusammenhang mit Inlining deaktivieren, da die `eval()`-Quelle von jedem Variablennamen in ihrem umgebenden Scope abhängen kann.

Das Verwenden von indirekter `eval` erlaubt jedoch nicht das Übergeben anderer Bindungen als bestehender globaler Variablen, die von der ausgewerteten Quelle gelesen werden. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle zugreifen kann, sollten Sie den `Function()` Konstruktor verwenden.

#### Verwendung des Function() Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Konstruktor ist dem obigen Beispiel der indirekten eval sehr ähnlich: Er wertet auch die JavaScript-Quelle aus, die ihm im globalen Scope ohne Lesen oder Ändern lokaler Bindungen übergeben wird, und ermöglicht daher den Engines, mehr Optimierungen als direktes `eval()` durchzuführen.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper geparst wird, nicht als Skript. Es gibt einige Nuancen — zum Beispiel können Sie Rückgabeanweisungen auf der obersten Ebene eines Funktionskörpers verwenden, jedoch nicht in einem Skript.

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

#### Verwendung von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, in dem die Eigenschaft des zuzugreifenden Objekts erst zur Laufzeit bekannt ist. Dies kann mit `eval()` gemacht werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht notwendig - in der Tat ist es fehleranfälliger, da, wenn `propName` kein gültiger Bezeichner ist, dies zu einem Syntaxfehler führt. Zudem, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, kann dies zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um auf Nachkommenschaftseigenschaften zuzugreifen. Mit `eval()` sähe dies so aus:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` hier könnte durch das Aufteilen des Eigenschaftspfads und das Durchlaufen der verschiedenen Eigenschaften erfolgen:

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

Beachten Sie jedoch, dass die Verwendung von Klammerzugriffen mit unkontrollierten Eingaben auch nicht sicher ist - dies kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Rückrufen

JavaScript hat {{Glossary("First-class_Function", "erstklassige Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und Objekt-Eigenschaften speichern und so weiter können. Viele DOM-APIs sind mit diesem Gedanken entworfen, sodass Sie (und sollten) schreiben:

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

[Closures](/de/docs/Web/JavaScript/Closures) sind auch hilfreich, um parametrisierte Funktionen ohne das Verketten von Strings zu erstellen.

#### Verwendung von JSON

Wenn der String, den Sie mit `eval()` aufrufen, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstatt Code, sollten Sie überlegen zu {{Glossary("JSON", "JSON")}} zu wechseln, was dem String ermöglicht, eine Untermenge der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist und viele gültige JavaScript-Literale nicht als JSON geparst werden. Zum Beispiel sind nachgestellte Kommata in JSON nicht erlaubt und Eigenschaftennamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen gesetzt werden. Stellen Sie sicher, dass Sie einen JSON-Serializer verwenden, um Strings zu generieren, die später als JSON geparst werden.

Das Übergeben sorgfältig beschränkter Daten anstelle von beliebigem Code ist generell eine gute Idee. Zum Beispiel könnte eine Erweiterung, die zum Scrapen von Webinhalten entworfen wurde, die Scraping-Regeln in [XPath](/de/docs/Web/XPath) anstelle von JavaScript-Code definiert haben.

## Beispiele

### Verwendung von eval()

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

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre es der letzte ausgewertete Ausdruck oder die Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und ansonsten 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, bewirkt `eval()`, dass diese Anweisungen ausgeführt werden, und es wird auch die Menge der Anweisungen ausgewertet und der Wert zurückgegeben, der an `z` zugewiesen ist, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Eval in Inhalts-Skripten verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
