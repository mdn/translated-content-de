---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: fab1ac5452f0c92d7ed804d468229bd003631e0e
---

> [!WARNING]
> Das an diese Methode übergebene Argument wird dynamisch ausgewertet und als JavaScript ausgeführt.
> Solche APIs sind bekannt als [Injection-Ziele](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und bieten potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als String repräsentiert ist, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

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
  - : Eine Instanz von [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Anweisungsfolge darstellt.
    Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Ist der Abschlusswert leer, wird {{jsxref("undefined")}} zurückgegeben.
Wenn `script` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Das `script`-Parameter kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : `script` ist ein String, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode löst auch jede Ausnahme aus, die bei der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird die Quellzeichenfolge als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist es der Wert, auf den der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefiniert), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus wird das Deklarieren einer Variablen namens `eval` oder das erneute Zuweisen von `eval` als {{jsxref("SyntaxError")}} behandelt.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder String ist, gibt `eval()` das Argument unverändert zurück.
Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines Primitivtyps dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um dieses Problem auf generische Weise zu umgehen, können Sie [das Argument selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ Eval und _indirekte_ Eval. Direktes eval bezieht sich, wie der Name impliziert, auf das direkte Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufens über eine aliasede Variable, über einen Memberzugriff oder einen anderen Ausdruck, oder durch den optionalen Chaining-Operator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirektes eval kann als das Ausführen des Codes innerhalb eines separaten `<script>`-Tags betrachtet werden. Das bedeutet:

- Indirektes eval arbeitet im globalen Scope anstatt im lokalen Scope, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Scopes, in dem er aufgerufen wird.

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

- Indirektes `eval` erbt nicht die Striktheit des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Andererseits erbt direktes eval die Striktheit des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Scope gehen, wenn die Quellzeichenfolge nicht im strikten Modus ausgewertet wird — bei indirektem eval werden sie zu globalen Variablen. Wenn es ein direktes eval in einem strikten Moduskontext ist oder wenn die `eval`-Quellzeichenfolge selbst im strikten Modus ist, dann "leaken" weder `var` noch Funktionsdeklarationen in den umgebenden Scope.

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

- Direktes eval kann Zugang zu zusätzlichen kontextuellen Ausdrücken haben. Zum Beispiel kann man in einem Funktionskörper [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direktes eval()!

Direktes `eval()` zu verwenden, birgt mehrere Probleme:

- `eval()` führt den übergebenen Code mit den Privilegien des Aufrufers aus.
  Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, läuft möglicherweise schädlicher Code auf dem Rechner des Nutzers mit den Berechtigungen Ihrer Webseite / Erweiterung.
  Wichtiger ist, dass der Drittanbieter-Code Zugriff auf den Scope erhält, in dem `eval()` aufgerufen wurde (wenn es ein direktes eval ist), was zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern.
  Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für Ansätze, die diese Risiken mindern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter wandeln JavaScript in Maschinencode um. Das bedeutet, dass jedes Konzept der Variablennamen zunichtegemacht wird. Daher erfordert jede Verwendung von `eval()`, dass der Browser lange teure Variable-Lookups durchführt, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert festzulegen. Darüber hinaus können durch `eval()` neue Dinge in diese Variable eingeführt werden, wie das Ändern des Typs dieser Variable, was den Browser zwingt, den gesamten generierten Maschinencode neu zu bewerten.
- Minifizierer geben jede Minifizierung auf, wenn der Scope transitiv von `eval()` abhängig ist, da `eval()` sonst zur Laufzeit nicht die korrekte Variable lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwenden von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Alleine durch die Verwendung von indirektem eval und das Erzwingen des strikten Modus kann der Code erheblich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden Code-Snippets oben scheinen auf die gleiche Weise zu funktionieren, aber sie tun es nicht; das erste mit direktem eval leidet unter mehreren Problemen.

- Es ist deutlich langsamer, aufgrund von mehr Scopen-Inspektionen. Beachten Sie `c: new Map()` in der ausgewerteten Zeichenfolge. In der indirekten eval-Version wird das Objekt im globalen Scope ausgewertet, sodass der Interpreter sicher annehmen kann, dass sich `Map` auf den globalen `Map()`-Konstruktor bezieht anstatt auf eine lokale Variable namens `Map`. Im Code mit direktem eval hingegen kann der Interpreter das nicht annehmen. Zum Beispiel bezieht sich `Map` in der ausgewerteten Zeichenfolge im folgenden Code nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher ist der Browser im `eval()`-Version des Codes gezwungen, den teuren Lookup-Aufruf durchzuführen, um zu prüfen, ob es lokale Variablen namens `Map()` gibt.

- Ohne strikten Modus werden `var`-Deklarationen in der `eval()`-Quelle zu Variablen im umgebenden Scope. Dies führt zu schwer zu debuggenden Problemen, wenn die Zeichenfolge von externer Eingabe stammt, insbesondere wenn bereits eine vorhandene Variable mit demselben Namen existiert.
- Direktes eval kann Bindungen im umgebenden Scope lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten korrumpieren.
- Bei der Verwendung von direktem `eval`, insbesondere wenn die eval-Quelle nicht nachweislich im strikten Modus ist, müssen die Engine — und Build-Tools — alle Optimierungen in Bezug auf Inline-Setups deaktivieren, weil die `eval()`-Quelle von jedem Variablennamen im umgebenden Scope abhängen kann.

Allerdings erlaubt indirektes `eval()` nicht das Übergeben zusätzlicher Bindungen außer bestehenden globalen Variablen, die die ausgewertete Quelle lesen soll. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle Zugriff haben soll, ziehen Sie den Einsatz des `Function()`-Konstruktors in Betracht.

#### Verwenden des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem indirekten eval-Beispiel oben sehr ähnlich: er wertet die übergebene JavaScript-Quelle im globalen Scope aus, ohne lokale Bindungen zu lesen oder zu ändern, und ermöglicht den Engines daher mehr Optimierungen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper und nicht als Skript geparst wird. Es gibt ein paar Nuancen — beispielsweise können `return`-Anweisungen auf diese Weise auf der obersten Ebene eines Funktionskörpers verwendet werden, jedoch nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihrer eval-Quelle erstellen möchten, indem Sie die Variablen als Parameterbindunbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen untersagt. Es gibt auch zusätzlich sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für gängige Anwendungsfälle.

#### Verwenden von Eckklammer-Zugriffsmethoden

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die zu zugreifende Eigenschaft des Objekts bis zur Ausführung des Codes nicht bekannt ist. Dies kann mit `eval()` durchgeführt werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Jedoch ist `eval()` hier nicht notwendig — in der Tat ist es fehleranfälliger, da es zu einem Syntaxfehler führt, wenn `propName` kein gültiger Bezeichner ist. Zudem, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, könnte dies zu Ausführung von beliebigem Code führen. Stattdessen verwenden Sie die [Eigenschaftszugriffsmethoden](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Diese Methode können Sie sogar verwenden, um auf Nachkommenseigenschaften zuzugreifen. Mit `eval()` sähe das so aus:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Um `eval()` hier zu vermeiden, könnte man den Eigenschaftspfad aufspalten und durch die verschiedenen Eigenschaften schleifen:

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

Das Setzen einer Eigenschaft funktioniert ähnlich:

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

Seien Sie jedoch gewarnt, dass die Verwendung von Eckklammer-Zugriffsmethoden mit unbeschränkter Eingabe ebenfalls nicht sicher ist — es könnte zu [Objekt-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwenden von Callbacks

JavaScript verfügt über {{Glossary("First-class_Function", "first-class Funktionen")}}, das bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen speichern oder in Objekteigenschaften speichern können und so weiter. Viele DOM-APIs sind mit diesem Gedanken gestaltet, also können (und sollten) Sie so schreiben:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind ebenfalls hilfreich als eine Methode zur Erstellung parametrischer Funktionen ohne das Verketteten von Strings.

#### Verwenden von JSON

Wenn der String, auf den Sie `eval()` anwenden, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstatt Code, sollten Sie den Wechsel zu {{Glossary("JSON", "JSON")}} erwägen, was es erlaubt, dass der String ein Subset von JavaScript-Syntax zur Darstellung von Daten verwendet.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, sodass viele gültige JavaScript-Literale nicht als JSON geparst werden können. Zum Beispiel sind abschließende Kommata in JSON nicht erlaubt und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Verwenden Sie einen JSON-Serialisierer, um Zeichenfolgen zu generieren, die später als JSON geparst werden.

Das Übergeben von sorgfältig eingeschränkten Daten anstelle von beliebigem Code ist generell eine gute Idee. Beispielsweise könnte eine Erweiterung, die für die Extraktion von Inhalten auf Webseiten entworfen ist, die Extraktionsregeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code definieren.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben mit den Berechtigungen des Aufrufers auszuführen.
Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Nutzer zur Verfügung gestellt wird, stellt dies einen möglichen Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.

Das folgende Beispiel zeigt, wie `eval()` möglicherweise `untrustedCode` ausführt, das von einem Nutzer bereitgestellt wird:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Webseiten mit einer [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern standardmäßig die Ausführung dieses Codes.
Wenn Sie das Ausführen von Skripten über `eval()` zulassen müssen, können Sie die Risiken mindern, indem Sie stets eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz anstelle eines Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um die Ausführung von `eval()` zuzulassen, müssen Sie zusätzlich das [`trusted-types-eval`-Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben.

Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Schlüsselwort erlaubt ebenfalls `eval()`, ist jedoch wesentlich unsicherer als `trusted-types-eval`, da es auch auf Browsern, die Trusted Types nicht unterstützen, die Ausführung ermöglichen würde.

Das erforderliche CSP für Ihre Webseite könnte folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion, die in Ihrer Trusted Types-Richtlinie implementiert ist, hängt vom spezifischen Anwendungsfall ab, der ein benutzerdefiniertes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie zutrauen, dass er ausgeführt wird.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Eingabe erlauben oder blockieren.

## Beispiele

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit Trusted Types verwendet wird.
Die anderen Beispiele lassen diesen Schritt der Kürze halber aus.

### Verwenden von TrustedScript

Um das Risiko von XSS zu mindern, sollten wir stets `TrustedScript`-Instanzen dem `script`-Parameter zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen Trusted Types erzwingen und einige Skriptquellen erlauben wollen, die zugelassen sind (durch `CSP: script-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst die [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Diese fungiert als transparente Ersetzung für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Anschließend erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode zum Transformieren von Eingabestrings in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen definiert.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine Funktion `transformedScript()` haben, die unsere Transformations-/Filterlogik definiert.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Our filter method
    return transformed;
  },
});
```

Dann verwenden wir das `policy`-Objekt, um ein `TrustedScript`-Objekt aus einem potenziell unsicheren Eingabestring zu erstellen:

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

### Verwenden von eval()

Im folgenden Code liefern beide `eval()`-Anweisungen den Wert 42 zurück.
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

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und `z` andernfalls den Wert 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` diese Anweisungen ausführen und auch die Anweisungen auswerten und den Wert zurückgeben, der `z` zugewiesen wird, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als string-definierende Funktion erfordert "(" und ")" als Präfix und Suffix

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

- [Eigenschaftszugriffsmethoden](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwenden von eval in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
