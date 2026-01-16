---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

> [!WARNING]
> Das Argument, das an diese Methode übergeben wird, wird dynamisch ausgewertet und als JavaScript ausgeführt.
> Solche APIs sind bekannt als [Einschleusungspunkte](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für mehr Informationen.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt dessen Abschlusswert zurück. Der Quelltext wird als Skript analysiert.

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
  - : Eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz oder Zeichenfolge, die einen JavaScript-Ausdruck, -Anweisung oder eine Sequenz von Anweisungen darstellt.
    Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Er wird als Skript analysiert, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben.
Wenn `script` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Das `script`-Parameter kann nicht als Skript analysiert werden.
- {{jsxref("TypeError")}}
  - : `script` ist eine Zeichenfolge, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

Die Methode löst auch jede Ausnahme aus, die während der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird die Quellzeichenfolge als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist es der Wert, den der Ausdruck ergibt. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variablen namens `eval` oder die Neuzuordnung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder String ist, gibt `eval()` das Argument unverändert zurück.
Im folgenden Beispiel führt die Übergabe eines `String`-Objekts anstelle eines primitiven dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenfolge auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie [das Argument selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direkte eval, wie der Name impliziert, bezieht sich auf den _direkten_ Aufruf der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Member-Zugriff oder einen anderen Ausdruck, oder durch den optionalen Kettenoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirekte eval kann als ob der Code in einem separaten `<script>`-Tag ausgewertet wird betrachtet werden. Das bedeutet:

- Indirekte eval arbeitet im globalen Bereich anstelle des lokalen Bereichs, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen im Bereich, in dem er aufgerufen wird.

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

- Indirekte `eval` erbt nicht die Striktheit des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Auf der anderen Seite erbt direkte eval die Striktheit des aufrufenden Kontexts.

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

- `var`-deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Bereich gelangen, wenn die Quellzeichenfolge nicht im strikten Modus interpretiert wird — für indirekte eval werden sie zu globalen Variablen. Wenn es eine direkte eval in einem strikten Modus-Kontext ist oder wenn die `eval`-Quellzeichenfolge selbst im strikten Modus ist, dann lecken `var` und Funktionsdeklarationen nicht in den umgebenden Bereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen innerhalb der ausgewerteten Zeichenfolge sind immer auf dieses Skript beschränkt.

- Direkte eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkte eval()!

Die Verwendung von direkter `eval()` ist mit mehreren Problemen verbunden:

- `eval()` führt den übergebenen Code mit den Privilegien des Aufrufers aus.
  Wenn Sie `eval()` mit einer Zeichenfolge ausführen, die von einer böswilligen Partei beeinflusst werden könnte, laufen Sie Gefahr, böswilligen Code auf dem Computer des Benutzers mit den Berechtigungen Ihrer Webseite / Erweiterung auszuführen.
  Noch wichtiger ist, dass es Dritten erlaubt werden könnte, auf den Bereich, in dem `eval()` aufgerufen wurde (wenn es sich um eine direkte eval handelt), zuzugreifen, was zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern.
  Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für Ansätze zur Minderung dieser Risiken.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Dies bedeutet, dass jede Konzept von Variablennamen eliminiert wird. Daher wird jede Verwendung von `eval()` den Browser dazu zwingen, lange und teure Variablenname-Lookups durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Zusätzlich können neue Dinge durch `eval()` in diese Variable eingeführt werden, wie das Ändern des Typs dieser Variablen, was den Browser dazu zwingt, den gesamten generierten Maschinencode neu zu bewerten, um zu kompensieren.
- Minifizierer geben jede Minifizierung auf, wenn der Bereich transitiv von `eval()` abhängt, da `eval()` dann sonst nicht in der Lage ist, die korrekte Variable zur Laufzeit zu lesen.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung der indirekten eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Einfach die indirekte eval zu verwenden und den strikten Modus zu erzwingen, kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Codeausschnitte scheinen auf die gleiche Weise zu funktionieren, tun es aber nicht; die erste, die direkte eval verwendet, leidet unter mehreren Problemen.

- Sie ist erheblich langsamer aufgrund mehrerer Bereichsinspektionen. Beachten Sie `c: new Map()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Bereich ausgewertet, sodass es für den Interpreter sicher ist anzunehmen, dass `Map` sich auf den globalen `Map()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Map`. Im im Code mit direkter eval kann der Interpreter dies jedoch nicht annehmen. Beispielsweise bezieht sich im folgenden Code `Map` in der ausgewerteten Zeichenfolge nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher wird der Browser in der `eval()`-Version des Codes gezwungen, den teuren Lookup-Aufruf durchzuführen, um zu überprüfen, ob lokale Variablen namens `Map()` existieren.

- Wenn der strikte Modus nicht verwendet wird, werden `var`-Deklarationen innerhalb der `eval()`-Quelle zu Variablen im umgebenden Bereich. Dies führt zu schwer zu behebenen Problemen, wenn die Zeichenfolge aus externen Eingaben stammt, insbesondere wenn eine vorhandene Variable mit demselben Namen existiert.
- Direkte eval kann Bindungen im umgebenden Bereich lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten korrumpieren.
- Bei der Verwendung von direkter `eval`, insbesondere wenn die eval-Quelle nicht nachweislich im strikten Modus ist, müssen die Engine und Build-Tools alle Optimierungen in Bezug auf das Inlining deaktivieren, da die `eval()`-Quelle von jedem Variablennamen im umgebenden Bereich abhängen kann.

Die Verwendung von indirekter `eval()` erlaubt jedoch nicht das Übergeben zusätzlicher Bindungen als bestehender globaler Variablen für die ausgewertete Quelle zum Lesen. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle zugreifen soll, sollten Sie den `Function()`-Konstruktor in Betracht ziehen.

#### Verwendung des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem indirekten eval-Beispiel oben sehr ähnlich: Er bewertet ebenfalls die übergebene JavaScript-Quelle im globalen Bereich, ohne lokale Bindungen zu lesen oder zu ändern, und erlaubt daher, dass Engines mehr Optimierungen vornehmen können als bei direkter `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper und nicht als Skript analysiert wird. Es gibt ein paar Nuancen — z.B. können `return`-Anweisungen auf oberster Ebene eines Funktionskörpers verwendet werden, aber nicht in einem Skript.

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

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für allgemeine Anwendungsfälle.

#### Verwendung von Klammer-Operatoren

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die zuzugreifende Eigenschaft des Objekts erst zur Laufzeit unbekannt ist. Dies kann mit `eval()` gemacht werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht nötig — tatsächlich ist es fehleranfälliger, denn wenn `propName` kein gültiger Bezeichner ist, führt dies zu einem Syntaxfehler. Darüber hinaus, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, könnte dies zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschafts-Zugriffs-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar nutzen, um auf Nachkommenseigenschaften zuzugreifen. Mit `eval()` würde dies folgendermaßen aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` kann hier erreicht werden, indem der Eigenschaftspfad aufgeteilt und durch die verschiedenen Eigenschaften iteriert wird:

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

Seien Sie jedoch vorsichtig, dass die Verwendung von Klammer-Operatoren mit unkontrollierter Eingabe auch nicht sicher ist — es kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Rückruffunktionen

JavaScript hat {{Glossary("First-class_Function", "erstklassige Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen und Objekteigenschaften speichern und so weiter können. Viele DOM-APIs sind mit diesem Prinzip entworfen, sodass Sie (und sollten) folgendes schreiben können:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind auch hilfreich als ein Weg, parameterisierte Funktionen zu erstellen, ohne Zeichenfolgen zu verketten.

#### Verwendung von JSON

Wenn die Zeichenfolge, auf die Sie `eval()` anwenden, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstelle von Code, sollten Sie in Betracht ziehen, auf {{Glossary("JSON", "JSON")}} zu wechseln, das es der Zeichenfolge erlaubt, eine Teilmenge der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Beachten Sie, dass da die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, viele gültige JavaScript-Literalen nicht als JSON analysiert werden. Zum Beispiel sind nachgestellte Kommata im JSON nicht erlaubt und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen gesetzt werden. Verwenden Sie unbedingt einen JSON-Serializer, um Zeichenfolgen zu generieren, die später als JSON analysiert werden.

Das Übergeben von sorgfältig eingeschränkten Daten anstelle von beliebigem Code ist im Allgemeinen eine gute Idee. Zum Beispiel könnte eine Erweiterung, die zum Scrapen von Inhalten von Webseiten entworfen wurde, die Scrape-Regeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code haben.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben mit den Privilegien des Aufrufers auszuführen.
Wenn die Eingabe eine potenziell unsichere Zeichenfolge ist, die von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt der folgende Code, wie `eval()` eventuell von einem Benutzer bereitgestellten `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Webseiten mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, werden diesen Code standardmäßig nicht ausführen lassen.
Wenn Sie die Skripte über `eval()` ausführen lassen müssen, können Sie die Risiken mildern, indem Sie immer eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz anstelle einer Zeichenfolge zuweisen und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion erfolgt.

Um `eval()` ausführen zu lassen, müssen Sie zusätzlich das [`trusted-types-eval`-Keyword](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben.

Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Keyword erlaubt auch `eval()`, ist aber viel weniger sicher als `trusted-types-eval`, da es die Ausführung auch auf Browsern erlaubt, die trusted types nicht unterstützen.

Zum Beispiel könnte die erforderliche CSP für Ihre Seite folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion, die in Ihrer trusted types-Policy implementiert ist, hängt von dem spezifischen Anwendungsfall ab, der ein bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, den Sie ausführen möchten.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Eingabe zulassen oder blockieren.

## Beispiele

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit trusted types verwendet wird.
Die anderen Beispiele lassen diesen Schritt der Kürze halber aus.

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScript`-Instanzen dem `script`-Parameter zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen trusted types durchsetzen und einige Skriptquellen zulassen möchten, die zugelassen wurden (durch `CSP: script-src`).

Trusted types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die JavaScript-API von Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) definiert, um Eingabestrings in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels gehen wir davon aus, dass wir eine Funktion `transformedScript()` haben, die unsere Transformations-/Filterlogik definiert.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Our filter method
    return transformed;
  },
});
```

Dann verwenden wir das `policy`-Objekt, um aus einer potenziell unsicheren Eingabezeichenfolge ein `TrustedScript`-Objekt zu erstellen:

```js
// The potentially malicious string
const untrustedScript = "alert('Potentially evil code!');";

// Create a TrustedScriptURL instance using the policy
const trustedScript = policy.createScript(untrustedScript);
```

Das `TrustedScript`-Objekt kann nun an `eval()` übergeben werden:

```js
eval(trustedScriptURL);
```

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen mit `eval()` 42 zurück.
Die erste wertet die Zeichenfolge `"x + y + 1"` aus; die zweite wertet die Zeichenfolge `"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` wäre dies der letzte ausgewertete Ausdruck oder die letzte Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Diese Zeichenfolge besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` bewirken, dass diese Anweisungen ausgeführt werden, und es wird auch die Menge der Anweisungen auswerten und den Wert zurückgeben, der `z` zugewiesen wird, weil der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als eine Zeichenfolge, die eine Funktion definiert, benötigt "(" und ")" als Präfix und Suffix

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

- [Property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwenden von eval in Inhalteskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
