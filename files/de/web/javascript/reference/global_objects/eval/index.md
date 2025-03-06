---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Das Ausführen von JavaScript aus einem String stellt ein enormes Sicherheitsrisiko dar. Es ist zu leicht für einen Angreifer beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Niemals direktes eval() verwenden!](#never_use_direct_eval!), unten.

Die **`eval()`** Funktion wertet JavaScript-Code aus, der als String dargestellt wurde, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - eval()")}}

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
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Folge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Es wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Ist der Abschlusswert leer, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` keine String-Primitve ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Löst jede Ausnahme aus, die während der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wertet den Quellstring als Skript aus, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Für Ausdrücke ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, das Ergebnis kann jedoch überraschend sein (zum Beispiel ist der Abschlusswert einer Zuordnung der zugewiesene Wert, während der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) undefined ist), daher wird empfohlen, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im strengen Modus ist es ein {{jsxref("SyntaxError")}}, eine Variable namens `eval` zu deklarieren oder `eval` neu zuzuweisen.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines Primitivtyps dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf allgemeine Weise zu umgehen, können Sie [das Argument in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi für `eval()`-Aufrufe: _direkte_ eval und _indirekte_ eval. Direkte eval bezieht sich, wie der Name andeutet, auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Memberzugriff oder einen anderen Ausdruck, oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirekte eval kann so gesehen werden, als ob der Code innerhalb eines separaten `<script>`-Tags ausgewertet wird. Das bedeutet:

- Indirekte eval funktioniert im globalen Gültigkeitsbereich statt im lokalen Gültigkeitsbereich, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Geltungsbereichs, aus dem es aufgerufen wird.

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

- Indirekte `eval` erbt nicht die Strenge des umgebenden Kontexts und ist nur im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quellstring selbst ein `"use strict"`-Direktiv hat.

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

  Andererseits erbt direkte eval die Strenge des aufrufenden Kontexts.

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

- In nicht-strengem Modus würden mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) in den umgebenden Gültigkeitsbereich gelangen — bei indirekter eval werden sie zu globalen Variablen. Wenn es sich um eine direkte eval in einem strengen Modus-Kontext handelt oder wenn der eval-Quellstring selbst im strengen Modus ist, "lecken" `var`- und Funktionsdeklarationen nicht in den umgebenden Gültigkeitsbereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb des ausgewerteten Strings sind immer auf dieses Skript beschränkt.

- Direkte eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Beispielsweise kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Niemals direktes eval() verwenden!

Die Verwendung von direktem `eval()` leidet unter mehreren Problemen:

- `eval()` führt den Code, der ihm übergeben wurde, mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer bösartigen Partei beeinflusst werden könnte, riskieren Sie, bösartigen Code auf dem Computer des Benutzers mit den Berechtigungen Ihrer Webseite/Erweiterung auszuführen. Wichtiger, wenn Drittcodes auf den Gültigkeitsbereich zugreifen können, in dem `eval()` aufgerufen wurde (falls es sich um ein direktes eval handelt), können mögliche Angriffe stattfinden, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jegliches Konzept der Variablennamen zerstört wird. Daher zwingt jede Verwendung von `eval()` den Browser, lange und teure Variablennamenssuchen durchzuführen, um herauszufinden, wo sich die Variable im Maschinencode befindet und ihren Wert zu setzen. Darüber hinaus können neue Dinge dieser Variablen durch `eval()` hinzugefügt werden, z. B. das Ändern des Typs dieser Variablen, was den Browser zwingt, den gesamten generierten Maschinencode erneut zu bewerten, um dies zu kompensieren.
- Minifier geben die Minifizierung auf, wenn der Gültigkeitsbereich transitiv von `eval()` abhängt, weil es ansonsten nicht möglich ist, dass `eval()` zur Laufzeit die korrekte Variable liest.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Einfach durch die Verwendung von indirektem eval und das Erzwingen des strengen Modus kann der Code erheblich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Code-Snippets scheinen auf die gleiche Weise zu funktionieren, tun es jedoch nicht; das erste, das direktes eval verwendet, leidet unter mehreren Problemen.

- Es ist erheblich langsamer aufgrund von mehr Gültigkeitsbereichsüberprüfungen. Beachten Sie `c: new Map()` im ausgewerteten String. In der indirekten eval-Version wird das Objekt im globalen Gültigkeitsbereich ausgewertet, sodass der Interpreter sicher annehmen kann, dass `Map` sich auf den globalen `Map()`-Konstruktor bezieht anstatt auf eine lokale Variable namens `Map`. In dem Code, der direktes eval verwendet, kann der Interpreter diese Annahme jedoch nicht machen. Zum Beispiel bezieht sich `Map` im ausgewerteten String im folgenden Code nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Folglich wird der Browser bei der `eval()`-Version des Codes gezwungen, den teuren Lookup-Aufruf zu machen, um festzustellen, ob es lokale Variablen namens `Map()` gibt.

- Wenn nicht im strengen Modus, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Gültigkeitsbereich. Dies führt zu schwer auffindbaren Problemen, wenn der String aus externem Input stammt, insbesondere wenn bereits eine Variable mit demselben Namen existiert.
- Direkte eval kann Bindungen im umgebenden Gültigkeitsbereich lesen und ändern, was dazu führen kann, dass externer Input lokale Daten beschädigt.
- Wenn man direktes `eval` verwendet, insbesondere wenn der eval-Quellcode nicht beweisbar im strengen Modus ist, müssen die Engine und die Build-Tools alle Optimierungen im Zusammenhang mit Inline-Setzungen deaktivieren, weil der `eval()`-Quellcode von jedem Variablennamen im umgebenden Gültigkeitsbereich abhängen kann.

Doch die Verwendung von indirektem `eval()` erlaubt es nicht, zusätzliche Bindungen außer bestehenden globalen Variablen für die auszuwertende Quelle zu übergeben. Wenn Sie zusätzliche Variablen angeben müssen, auf die die auszuwertende Quelle Zugriff haben sollte, sollten Sie den `Function()`-Konstruktor verwenden.

#### Verwendung des Function() Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem Beispiel mit indirektem eval oben sehr ähnlich: er wertet ebenfalls den übergebenen JavaScript-Quellcode im globalen Gültigkeitsbereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und ermöglicht daher der Engine mehr Optimierungen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quellcode als Funktionskörper und nicht als Skript geparst wird. Es gibt ein paar Nuancen — zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, jedoch nicht in einem Skript.

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

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt auch sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwendung von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf die zugegriffen werden soll, erst während der Ausführung des Codes bekannt ist. Dies kann mit `eval()` erfolgen:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht notwendig — tatsächlich ist es fehleranfälliger, da ein Syntaxfehler auftritt, wenn `propName` kein gültiger Bezeichner ist. Außerdem führt die Ausführung von beliebigem Code zu Konsequenzen, wenn `getPropName` keine Funktion ist, die Sie kontrollieren. Verwenden Sie stattdessen die [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um Nachfahre-Eigenschaften zuzugreifen. Mit `eval()` würde dies folgendermaßen aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Die Vermeidung von `eval()` hier könnte erreicht werden, indem der Eigenschaftspfad aufgeteilt und durch die verschiedenen Eigenschaften iteriert wird:

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

Beachten Sie jedoch, dass die Verwendung von Klammerzugriffen mit nicht eingeschränktem Input ebenfalls nicht sicher ist — dies kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript hat {{Glossary("First-class_Function", "First-Class Functions")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und Objekt-Eigenschaften speichern können, und so weiter. Viele DOM-APIs sind mit diesem Gedanken im Hinterkopf entworfen, sodass Sie (und sollten) schreiben:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind auch nützlich, um parametrisierte Funktionen zu erstellen, ohne Strings zu verknüpfen.

#### Verwendung von JSON

Wenn der String, auf den Sie `eval()` anwenden, Daten (zum Beispiel ein Array: `"[1, 2, 3]"`) anstelle von Code enthält, sollten Sie in Erwägung ziehen, zu {{Glossary("JSON", "JSON")}} zu wechseln, das dem String erlaubt, ein Subset der JavaScript-Syntax zur Darstellung von Daten zu verwenden.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist und viele gültige JavaScript-Literale nicht als JSON geparst werden können. Zum Beispiel sind Abschlusskommata in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen eingeschlossen sein. Stellen Sie sicher, dass Sie einen JSON-Serializer verwenden, um Strings zu generieren, die später als JSON geparst werden.

Das Übergeben von sorgfältig eingeschränkten Daten anstelle von beliebigem Code ist generell eine gute Idee. Ein Beispiel wäre eine Erweiterung, die zur Erfassung von Webseiteninhalten konzipiert ist, wobei die Erfassungsregeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code definiert werden könnten.

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

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre dies der letzte ausgewertete Ausdruck oder die Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Im folgenden Beispiel wird `eval()` verwendet, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, führt `eval()` diese Anweisungen aus und wertet auch die Menge der Anweisungen aus und gibt den Wert zurück, der `z` zugewiesen wurde, da der Abschlusswert einer Zuordnung der zugewiesene Wert ist.

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

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
