---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

> [!WARNING]
> Das an diese Funktion übergebene Argument wird dynamisch als JavaScript geparst und ausgeführt.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings übergeben und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

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
  - : Eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz oder ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Es wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `script`-Parameter kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : `script` ist ein String, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durch ein CSP [erzwingt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode löst auch jede Ausnahme aus, die während der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()`-Funktion ist ein String. Es wird den Quellstring als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Für Ausdrücke ist es der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschen (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt das Deklarieren einer Variablen namens `eval` oder das Neuzuweisen von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines Primitivs dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie [das Argument vor der Übergabe an `eval()` selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direkte eval, wie der Name impliziert, bezieht sich auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich der Aufruf über eine aliasierte Variable, über eine Member-Zugriffs- oder andere Ausdrücke, oder durch den optionalen Verknüpfungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

- Indirekte eval arbeitet im globalen Scope anstelle des lokalen Scopes, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Scopes, in dem er aufgerufen wird.

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

- Indirekte `eval` erbt nicht die Striktheit des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quellstring selbst eine `"use strict"`-Direktive enthält.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gehen in den umgebenden Scope, wenn der Quellstring nicht im strikten Modus interpretiert wird — bei indirekter eval werden sie zu globalen Variablen. Wenn es eine direkte eval in einem strikten Modus-Kontext ist oder wenn der `eval`-Quellstring selbst im strikten Modus ist, dann "leaken" `var`- und Funktionsdeklarationen nicht in den umgebenden Scope.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb des ausgewerteten Strings sind immer auf dieses Skript begrenzt.

- Direkte eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Zum Beispiel kann im Rumpf einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwendet werden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkte eval()!

Die Verwendung von direkter `eval()` leidet unter mehreren Problemen:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, laufen Sie Gefahr, dass auf dem Rechner des Benutzers schädlicher Code mit den Berechtigungen Ihrer Webseite/Erweiterung ausgeführt wird. Wichtiger ist, dass das Zulassen von Drittanbieter-Code, auf den Scope zuzugreifen, in dem `eval()` aufgerufen wurde (wenn es sich um eine direkte eval handelt), zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern. Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für Ansätze, die diese Risiken mindern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jedes Konzept der Variablenbenennung zerstört wird. Daher erzwingt jede Verwendung von `eval()`, dass der Browser lange, teure Variablennamenssuche durchführen muss, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert festzulegen. Darüber hinaus können durch `eval()` neue Dinge in diese Variable eingeführt werden, wie z.B. die Änderung des Variablentyps, was den Browser dazu zwingt, den gesamten generierten Maschinencode neu zu evaluieren, um dies auszugleichen.
- Minifizierer geben jede Minifizierung auf, wenn der Scope transitiv von `eval()` abhängt, da `eval()` andernfalls zur Laufzeit nicht die richtige Variable lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung von indirekter eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Durch die einfache Verwendung von indirekter eval und das Erzwingen des strikten Modus kann der Code erheblich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Code-Snippets scheinen auf die gleiche Weise zu funktionieren, tun dies jedoch nicht; das erste mit direkter eval leidet unter mehreren Problemen.

- Es ist viel langsamer aufgrund von mehr Scope-Inspektionen. Beachten Sie `c: new Map()` im evaluierten String. In der Version mit indirekter eval wird das Objekt im globalen Scope ausgewertet, daher ist es für den Interpreter sicher anzunehmen, dass `Map` sich auf den globalen `Map()`-Konstruktor bezieht anstelle einer lokalen Variable namens `Map`. Im Code mit direkter eval kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel bedeutet im folgenden Code `Map` im evaluierten String nicht `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher zwingt die `eval()`-Version des Codes den Browser, den teuren Lookup-Aufruf durchzuführen, um zu prüfen, ob es lokale Variablen mit dem Namen `Map()` gibt.

- Wenn kein strikter Modus verwendet wird, werden `var`-Deklarationen innerhalb des `eval()`-Quellcodes zu Variablen im umgebenden Scope. Dies führt zu schwer zu debuggen Fehlern, wenn der String aus externer Eingabe stammt, insbesondere wenn es bereits eine Variable mit demselben Namen gibt.
- Direkte eval kann Lese- und Schreibzugriff auf Bindungen im umgebenden Scope haben, was dazu führen könnte, dass externe Eingaben lokale Daten beschädigen.
- Bei Verwendung von direkter `eval`, insbesondere wenn der eval-Quellcode nicht im strikten Modus nachgewiesen werden kann, müssen die Engine und die Build-Tools alle Optimierungen im Zusammenhang mit Inlining deaktivieren, da der `eval()`-Quellcode von jedem Variablennamen in seinem umgebenden Scope abhängen kann.

Aber die Verwendung von indirekter `eval()` erlaubt nicht, zusätzliche Bindungen außer bestehenden globalen Variablen für die auszuwertende Quelle zu übergeben. Wenn Sie zusätzliche Variablen angeben müssen, auf die die auszuwertende Quelle zugreifen soll, ziehen Sie die Verwendung des `Function()`-Konstruktors in Betracht.

#### Verwendung des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist der indirekten eval-Beispiel oben sehr ähnlich: Er wertet ebenfalls den übergebenen JavaScript-Quellcode im globalen Scope aus, ohne lokale Bindungen zu lesen oder zu ändern, und ermöglicht es daher den Engines, mehr Optimierungen als bei direkter `eval()` durchzuführen.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quellcode als Funktionskörper und nicht als Script geparst wird. Es gibt ein paar Nuancen - zum Beispiel können `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwendet werden, jedoch nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihres eval-Quellcodes erstellen möchten, indem Sie die Variablen als Parameter-Bindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit willkürlichen Code aus und sind in strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Es gibt auch sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwendung von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf das zugegriffen werden soll, erst zur Laufzeit bekannt ist. Dies kann mit `eval()` getan werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht notwendig — tatsächlich ist es fehleranfälliger, da wenn `propName` kein gültiger Bezeichner ist, dies zu einem Syntaxfehler führt. Darüber hinaus, wenn `getPropName` keine Funktion ist, die Sie kontrollieren, kann dies zur Ausführung von willkürlichem Code führen. Verwenden Sie stattdessen die [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um auf untergeordnete Eigenschaften zuzugreifen. Mit `eval()` sähe das so aus:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` könnte hier durch das Aufteilen des Property-Pfades und das Schleifen durch die verschiedenen Eigenschaften erfolgen:

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

Sehen Sie jedoch davon ab, dass die Verwendung von Klammerzugriffen mit unkontrollierter Eingabe ebenfalls nicht sicher ist — es kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript hat {{Glossary("First-class_Function", "First-Class Functions")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen und in Objekteigenschaften speichern usw. können. Viele DOM-APIs sind mit dieser Idee im Hintergrund gestaltet, sodass Sie (und sollten) es so schreiben:

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

[Closures](/de/docs/Web/JavaScript/Guide/Closures) sind auch hilfreich, um parametrisierte Funktionen ohne String-Konkatenation zu erstellen.

#### Verwendung von JSON

Wenn der String, auf den Sie `eval()` anwenden möchten, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`) statt Code, sollten Sie die Verwendung von {{Glossary("JSON", "JSON")}} in Betracht ziehen, das dem String ermöglicht, eine Teilmenge der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Da die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, wird beachten, dass viele gültige JavaScript-Literale nicht als JSON geparst werden. Zum Beispiel sind nachgestellte Kommata in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen eingeschlossen sein. Verwenden

Sie sicher einen JSON-Serializer, um Strings zu generieren, die später als JSON geparst werden.

Das Übergeben von sorgfältig eingeschränkten Daten anstelle von willkürlichem Code ist generell eine gute Idee. Zum Beispiel könnte eine Erweiterung, die dazu gedacht ist, Inhalte von Webseiten zu scrapen, die Scraping-Regeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code definieren.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um mit den Berechtigungen des Aufrufers willkürliche Eingaben auszuführen. Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt folgender Code, wie `eval()` den `untrustedCode`-String, der von einem Benutzer bereitgestellt wurde, ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Webseiten mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, werden das Ausführen eines solchen Codes standardmäßig verhindern. Wenn Sie den Skripten erlauben müssen, über `eval()` ausgeführt zu werden, können Sie die Risiken mindern, indem Sie immer eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz anstelle eines Strings zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden. Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird.

Um `eval()` auszuführen, müssen Sie zusätzlich das [`trusted-types-eval`-Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben. Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Schlüsselwort erlaubt ebenfalls `eval()`, ist jedoch viel unsicherer als `trusted-types-eval`, da es die Ausführung auch in Browsern erlauben würde, die trusted types nicht unterstützen.

Zum Beispiel könnte die erforderliche CSP für Ihre Seite folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion, die in Ihrer Trusted-Types-Richtlinie implementiert ist, hängt vom spezifischen Anwendungsfall ab, der ein benutzerdefiniertes Skript erfordert. Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, ausgeführt zu werden. Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Eingaben erlauben oder blockieren.

## Beispiele

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit trusted types verwendet wird. Die anderen Beispiele lassen diesen Schritt der Kürze halber weg.

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten Sie immer `TrustedScript`-Instanzen an den `script`-Parameter übergeben. Wir müssen dies auch tun, wenn wir aus anderen Gründen trusted types erzwingen und einige Skriptquellen erlauben möchten, die erlaubt wurden (durch `CSP: script-src`).

Trusted types werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill). Dies fungiert als transparenter Ersatz für das Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode definiert, um Eingabestrings in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen zu transformieren.

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
eval(trustedScript);
```

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen mit `eval()` 42 zurück.
Die erste wertet den String `"x + y + 1"` aus; die zweite wertet den String `"42"` aus.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` wäre es der letzte ausgewertete Ausdruck oder die Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel benutzt `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` den Wert 42 zuweisen, wenn `x` fünf ist, und `z` ansonsten 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, führt `eval()` diese Anweisungen aus und wertet auch das Set von Anweisungen aus und gibt den Wert zurück, der `z` zugewiesen wurde, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als String definierende Funktion erfordert "(" und ")" als Präfix und Suffix

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

- [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
