---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

> [!WARNING]
> Das an diese Funktion übergebene Argument wird dynamisch als JavaScript geparst und ausgeführt.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein.
>
> Sie können dieses Risiko verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Funktion **`eval()`** wertet JavaScript-Code aus, der als String vorliegt, und gibt dessen Abschlusswert zurück. Der Quelltext wird als Skript geparst.

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
  - : Eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz oder ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Folge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Er wird als Skript geparst; daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, die nur in Modulen vorkommen können, nicht zulässig.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Ist der Abschlusswert leer, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` weder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) noch ein primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der Parameter `script` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : `script` ist ein String, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode löst außerdem jede Ausnahme aus, die bei der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der Funktion `eval()` ist ein String. Sie wertet den Quelltext-String als Skriptkörper aus; damit sind sowohl Anweisungen als auch Ausdrücke zulässig. Sie gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Auch viele Anweisungen und Deklarationen haben Abschlusswerte, doch das Ergebnis kann überraschend sein: Beispielsweise ist der Abschlusswert einer Zuweisung der zugewiesene Wert, während der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) `undefined` ist. Daher empfiehlt es sich, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im Strict Mode führt die Deklaration einer Variablen namens `eval` oder eine erneute Zuweisung an `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` weder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) noch ein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel bewirkt die Übergabe eines `String`-Objekts anstelle eines primitiven Strings, dass `eval()` das `String`-Objekt zurückgibt, statt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Als allgemeine Lösung können Sie das Argument selbst [in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte Auswertung mit eval

Es gibt zwei Arten von `eval()`-Aufrufen: _direkte_ und _indirekte_ Aufrufe. Bei der direkten Auswertung wird die globale Funktion `eval` ihrem Namen entsprechend _direkt_ mit `eval(...)` aufgerufen. Alle anderen Aufrufarten sind indirekt. Dazu gehören Aufrufe über eine Aliasvariable, über einen Eigenschaftszugriff oder einen anderen Ausdruck sowie über den Operator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für Optional Chaining.

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

Eine indirekte Auswertung mit `eval` lässt sich so betrachten, als würde der Code innerhalb eines separaten `<script>`-Tags ausgewertet. Das bedeutet:

- Indirektes `eval` arbeitet im globalen statt im lokalen Gültigkeitsbereich. Der ausgewertete Code hat keinen Zugriff auf lokale Variablen des Gültigkeitsbereichs, aus dem der Aufruf erfolgt.

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

- Indirektes `eval` übernimmt den Strict Mode des umgebenden Kontexts nicht. Es arbeitet nur dann im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quelltext-String selbst eine `"use strict"`-Direktive enthält.

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

  Dagegen übernimmt direktes `eval` den Strict Mode des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gelangen in den umgebenden Gültigkeitsbereich, wenn der Quelltext-String nicht im Strict Mode interpretiert wird. Bei indirektem `eval` werden sie zu globalen Variablen. Erfolgt ein direkter `eval`-Aufruf in einem Strict-Mode-Kontext oder ist der `eval`-Quelltext-String selbst im Strict Mode, gelangen `var`- und Funktionsdeklarationen nicht in den umgebenden Gültigkeitsbereich.

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

  Deklarationen mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) innerhalb des ausgewerteten Strings sind stets auf dieses Skript beschränkt.

- Direktes `eval` kann auf zusätzliche kontextabhängige Ausdrücke zugreifen. Im Körper einer Funktion lässt sich beispielsweise [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direktes eval()!

Die Verwendung von direktem `eval()` bringt mehrere Probleme mit sich:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String aufrufen, den eine böswillige Partei beeinflussen kann, führen Sie möglicherweise schädlichen Code auf dem Gerät des Benutzers mit den Berechtigungen Ihrer Webseite oder Erweiterung aus. Besonders problematisch ist, dass fremder Code bei direktem `eval` auf den Gültigkeitsbereich des Aufrufs zugreifen kann. Dadurch werden Angriffe möglich, die lokale Variablen auslesen oder verändern. Ansätze zur Verringerung dieser Risiken finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter übersetzen JavaScript in Maschinencode. Dabei gehen Informationen über Variablennamen verloren. Jede Verwendung von `eval()` zwingt den Browser daher zu aufwendigen Nachschlagevorgängen, um herauszufinden, wo sich eine Variable im Maschinencode befindet, und ihren Wert zu setzen. Außerdem kann `eval()` neue Eigenschaften einer Variablen einführen, etwa ihren Typ ändern. Dadurch muss der Browser den gesamten erzeugten Maschinencode erneut auswerten, um die Änderung zu berücksichtigen.
- Minifier verzichten auf jede Minifizierung, wenn ein Gültigkeitsbereich mittelbar von `eval()` abhängt, da `eval()` andernfalls zur Laufzeit nicht die richtige Variable lesen könnte.

In vielen Fällen lässt sich die Verwendung von `eval()` oder verwandten Methoden optimieren oder ganz vermeiden.

#### Indirektes eval() verwenden

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Schon die Verwendung von indirektem `eval` zusammen mit erzwungenem Strict Mode kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Codebeispiele scheinen möglicherweise gleich zu funktionieren, tun es aber nicht: Das erste verwendet direktes `eval` und bringt mehrere Probleme mit sich.

- Es ist erheblich langsamer, weil mehr Gültigkeitsbereiche geprüft werden müssen. Beachten Sie `c: new Map()` im ausgewerteten String. Bei indirektem `eval` wird das Objekt im globalen Gültigkeitsbereich ausgewertet. Der Interpreter kann daher davon ausgehen, dass `Map` auf den globalen `Map()`-Konstruktor und nicht auf eine lokale Variable namens `Map` verweist. Bei direktem `eval` kann er das nicht annehmen. Im folgenden Code verweist `Map` im ausgewerteten String beispielsweise nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  In der Codeversion mit `eval()` muss der Browser daher aufwendig nachschlagen, ob lokale Variablen mit dem Namen `Map` vorhanden sind.

- Ohne Strict Mode werden `var`-Deklarationen im `eval()`-Quelltext zu Variablen im umgebenden Gültigkeitsbereich. Das kann zu schwer zu debuggenden Problemen führen, wenn der String aus einer externen Eingabe stammt – insbesondere, wenn bereits eine gleichnamige Variable existiert.
- Direktes `eval` kann Bindungen im umgebenden Gültigkeitsbereich lesen und verändern. Dadurch können externe Eingaben lokale Daten beschädigen.
- Bei direktem `eval` müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit Inlining deaktivieren, insbesondere wenn sich nicht nachweisen lässt, dass der auszuwertende Quelltext im Strict Mode ausgeführt wird. Der `eval()`-Quelltext kann nämlich von jedem Variablennamen in seinem umgebenden Gültigkeitsbereich abhängen.

Indirektes `eval()` erlaubt allerdings nicht, dem ausgewerteten Quelltext zusätzliche Bindungen außer den bereits vorhandenen globalen Variablen bereitzustellen. Wenn Sie zusätzliche Variablen festlegen müssen, auf die der ausgewertete Quelltext zugreifen soll, sollten Sie den `Function()`-Konstruktor verwenden.

#### Den Function()-Konstruktor verwenden

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ähnelt dem obigen Beispiel mit indirektem `eval` stark: Auch er wertet den übergebenen JavaScript-Quelltext im globalen Gültigkeitsbereich aus, ohne lokale Bindungen zu lesen oder zu verändern. Dadurch können Engines mehr Optimierungen vornehmen als bei direktem `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quelltext-String als Funktionskörper und nicht als Skript geparst wird. Das bringt einige Besonderheiten mit sich: Beispielsweise können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, nicht aber in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie innerhalb des auszuwertenden Quelltexts lokale Bindungen erstellen möchten, indem Sie Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind bei strengen [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Für häufige Anwendungsfälle gibt es außerdem weitere, sicherere (und schnellere!) Alternativen zu `eval()` und `Function()`.

#### Zugriff über eckige Klammern verwenden

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Im folgenden Beispiel ist erst zur Laufzeit bekannt, auf welche Eigenschaft des Objekts zugegriffen werden soll. Das lässt sich mit `eval()` umsetzen:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist `eval()` jedoch nicht erforderlich. Tatsächlich ist es fehleranfälliger: Wenn `propName` kein gültiger Bezeichner ist, entsteht ein Syntaxfehler. Wenn `getPropName` keine Funktion ist, die Sie kontrollieren, kann dies außerdem zur Ausführung beliebigen Codes führen. Verwenden Sie stattdessen die [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die wesentlich schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Mit dieser Methode können Sie sogar auf Eigenschaften verschachtelter Objekte zugreifen. Mit `eval()` sähe das so aus:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Um hier auf `eval()` zu verzichten, können Sie den Eigenschaftspfad aufteilen und die einzelnen Eigenschaften nacheinander durchlaufen:

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

Das Setzen einer Eigenschaft funktioniert auf ähnliche Weise:

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

Beachten Sie jedoch, dass auch der Zugriff über eckige Klammern mit uneingeschränkter Eingabe nicht sicher ist: Er kann zu [Object-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Callbacks verwenden

JavaScript unterstützt {{Glossary("First-class_Function", "Funktionen als First-Class-Objekte")}}. Das bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen und Objekteigenschaften speichern und Ähnliches tun können. Viele DOM-APIs sind darauf ausgelegt. Daher können (und sollten) Sie Folgendes schreiben:

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

Auch [Closures](/de/docs/Web/JavaScript/Guide/Closures) helfen dabei, parametrisierte Funktionen zu erstellen, ohne Strings verketten zu müssen.

#### JSON verwenden

Wenn der String, den Sie mit `eval()` auswerten, Daten statt Code enthält – beispielsweise ein Array wie `"[1, 2, 3]" –, sollten Sie die Verwendung von {{Glossary("JSON", "JSON")}} erwägen. Damit lassen sich Daten in einem String mit einer Teilmenge der JavaScript-Syntax darstellen.

Beachten Sie, dass die JSON-Syntax gegenüber der JavaScript-Syntax eingeschränkt ist. Daher können viele gültige JavaScript-Literale nicht als JSON geparst werden. Beispielsweise sind abschließende Kommas in JSON nicht zulässig, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Verwenden Sie unbedingt einen JSON-Serializer, um Strings zu erzeugen, die später als JSON geparst werden.

Sorgfältig eingeschränkte Daten statt beliebigen Codes zu übergeben, ist grundsätzlich sinnvoll. Beispielsweise könnte eine Erweiterung, die Inhalte von Webseiten extrahiert, ihre Extraktionsregeln in [XPath](/de/docs/Web/XML/XPath) statt in JavaScript-Code definieren.

### Sicherheitsaspekte

Mit der Methode lassen sich beliebige Eingaben mit den Berechtigungen des Aufrufers ausführen. Wenn die Eingabe ein potenziell unsicherer, von einem Benutzer bereitgestellter String ist, kann dies ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein.

Der folgende Code zeigt beispielsweise, wie `eval()` den von einem Benutzer bereitgestellten Wert `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) festlegt, verhindern standardmäßig die Ausführung solchen Codes. Wenn Sie die Ausführung von Skripten über `eval()` zulassen müssen, können Sie die Risiken verringern, indem Sie stets eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz statt eines Strings zuweisen und mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types). Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft.

Damit `eval()` ausgeführt werden kann, müssen Sie außerdem das [Schlüsselwort `trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der `script-src`-Direktive Ihrer CSP angeben. Das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) erlaubt `eval()` ebenfalls, ist aber wesentlich unsicherer als `trusted-types-eval`, da es die Ausführung auch in Browsern zulässt, die Trusted Types nicht unterstützen.

Die erforderliche CSP für Ihre Website könnte beispielsweise so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Wie sich die Transformationsfunktion in Ihrer Trusted-Types-Richtlinie verhält, hängt vom jeweiligen Anwendungsfall ab, für den ein vom Benutzer bereitgestelltes Skript erforderlich ist. Wenn möglich, sollten Sie nur genau die Skripte zulassen, deren Ausführung Sie vertrauen. Falls das nicht möglich ist, können Sie die Verwendung bestimmter Funktionen in der bereitgestellten Eingabe erlauben oder blockieren.

## Beispiele

Das erste Beispiel zeigt, wie die Methode mit Trusted Types verwendet wird. In den übrigen Beispielen wird dieser Schritt der Kürze halber ausgelassen.

### TrustedScript verwenden

Um das XSS-Risiko zu verringern, sollten wir dem Parameter `script` stets `TrustedScript`-Instanzen zuweisen. Das ist auch erforderlich, wenn wir Trusted Types aus anderen Gründen erzwingen und bestimmte durch `CSP: script-src` zugelassene Skriptquellen erlauben möchten.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill). Er dient als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Anschließend erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) definiert, um Eingabe-Strings in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass eine Funktion `transformedScript()` unsere Transformations- und Filterlogik definiert.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Our filter method
    return transformed;
  },
});
```

Dann verwenden wir das Objekt `policy`, um aus einem potenziell unsicheren Eingabe-String ein `TrustedScript`-Objekt zu erstellen:

```js
// The potentially malicious string
const untrustedScript = "alert('Potentially evil code!');";

// Create a TrustedScript instance using the policy
const trustedScript = policy.createScript(untrustedScript);
```

Das `TrustedScript`-Objekt kann nun an `eval()` übergeben werden:

```js
eval(trustedScript);
```

### eval() verwenden

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, den Wert 42 zurück.
Die erste wertet den String `"x + y + 1"` aus, die zweite den String
`"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` ist dies der zuletzt ausgewertete Ausdruck oder die zuletzt ausgewertete Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Im folgenden Beispiel wird `eval()` verwendet, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` den Wert 42 zuweisen, wenn `x` fünf ist, und andernfalls `z` den Wert 0 zuweisen. Bei der Ausführung der zweiten Anweisung bewirkt `eval()`, dass diese Anweisungen ausgeführt werden. Außerdem wertet es die Anweisungsfolge aus und gibt den `z` zugewiesenen Wert zurück, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() benötigt bei einem String mit einer Funktionsdefinition „(“ als Präfix und „)“ als Suffix

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

- [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: eval in Content Scripts verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
