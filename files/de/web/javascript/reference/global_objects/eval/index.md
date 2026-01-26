---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Das an diese Funktion übergebene Argument wird dynamisch geparst und als JavaScript ausgeführt.
> APIs wie diese sind bekannt als [Injektionsziele](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.
>
> Sie können dieses Risiko minimieren, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`eval()`** Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt seinen Abschlusswert zurück. Der Quelltext wird als Skript geparst.

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
  - : Eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz oder ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Abfolge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` nicht ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein primitivierter String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Das `script`-Parameter kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : `script` ist ein String, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode wirft auch jede Ausnahme, die bei der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der `eval()` Funktion ist ein String. Er wird den Quellstring als Skriptkörper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist es der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variablen mit dem Namen `eval` oder die Neuvergabe von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` nicht ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts anstelle eines Primitiven dazu, dass `eval()` das `String`-Objekt anstelle der Auswertung des Strings zurückgibt.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie das [Argument selbst in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direkte_ eval und _indirekte_ eval. Direkte eval bedeutet, dass die globale `eval`-Funktion _direkt_ mit `eval(...)` aufgerufen wird. Alles andere, einschließlich des Aufrufs über eine aliasierte Variable, über einen Memberzugriff oder andere Ausdrücke oder durch den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirekte eval kann betrachtet werden, als ob der Code innerhalb eines separaten `<script>`-Tags ausgewertet wird. Das bedeutet:

- Indirekte eval funktioniert im globalen Bereich statt im lokalen Bereich, und der auszuführende Code hat keinen Zugriff auf lokale Variablen innerhalb des Bereichs, in dem er aufgerufen wird.

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

- Indirekte `eval` erbt nicht die Striktheit des umgebenden Kontexts und ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quellstring selbst eine `"use strict"`-Anweisung hat.

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

- Variablen, die mit `var` deklariert wurden, und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Bereich gehen, wenn der Quellstring nicht im strikten Modus interpretiert wird — für indirekte eval werden sie zu globalen Variablen. Wenn es eine direkte eval in einem strikten Modus-Kontext ist, oder wenn der `eval`-Quellstring selbst im strikten Modus ist, dann "lecken" `var`- und Funktionsdeklarationen nicht in den umgebenden Bereich.

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

- Direkte eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkte eval()!

Die Verwendung von direkter `eval()` hat mehrere Nachteile:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer bösartigen Partei beeinflusst werden könnte, laufen Sie Gefahr, bösartigen Code auf dem Computer des Benutzers mit den Berechtigungen Ihrer Webseite / Erweiterung auszuführen. Wichtiger ist, dass der Drittanbieter-Code Zugang zum Bereich, in dem `eval()` aufgerufen wurde (wenn es eine direkte eval ist), bekommen kann, was zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern. Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für Ansätze, die diese Risiken mindern.
- `eval()` ist langsamer als die Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jedes Konzept der Variablennamen eliminiert wird. Daher wird jede Verwendung von `eval()` den Browser dazu zwingen, lange und teure Variablennamensauflösungen durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert festzulegen. Darüber hinaus können neue Dinge durch `eval()` in diese Variable eingeführt werden, wie zum Beispiel die Änderung des Typs dieser Variable, was den Browser zwingt, den gesamten generierten Maschinencode neu zu bewerten, um dies zu kompensieren.
- Minifizierer geben jede Minifizierung auf, wenn der Bereich transitiv von `eval()` abhängt, weil `eval()` sonst nicht die korrekte Variable zur Laufzeit lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder ähnlichen Methoden optimiert oder vollständig vermieden werden kann.

#### Verwenden von indirekter eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Das einfache Verwenden von indirekter eval und das Erzwingen des strikten Modus kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Codebeispiele scheinen auf die gleiche Weise zu funktionieren, tun es aber nicht; das erste Beispiel mit direkter eval leidet unter mehreren Problemen.

- Es ist erheblich langsamer, aufgrund mehrerer Bereichsinspektionen. Beachten Sie `c: new Map()` im ausgewerteten String. In der Version mit indirekter eval wird das Objekt im globalen Bereich ausgewertet, daher kann der Interpreter sicher annehmen, dass sich `Map` auf den globalen `Map()`-Konstruktor statt auf eine lokale Variable namens `Map` bezieht. Im Code, der direkte eval verwendet, kann der Interpreter dies nicht annehmen. Zum Beispiel bezieht sich im folgenden Code `Map` im ausgewerteten String nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Somit ist der Browser in der `eval()`-Version des Codes gezwungen, den teuren Lookup-Aufruf zu machen, um zu überprüfen, ob es lokale Variablen mit dem Namen `Map()` gibt.

- Wenn der strikte Modus nicht verwendet wird, werden `var`-Deklarationen innerhalb des `eval()`-Quelltextes zu Variablen im umgebenden Bereich. Dies führt zu schwer zu diagnostizierenden Problemen, wenn der String aus externen Eingaben stammt, insbesondere wenn es bereits eine Variable mit demselben Namen gibt.
- Direkte eval kann Bindungen im umgebenden Bereich lesen und mutieren, was dazu führen kann, dass externe Eingaben lokale Daten korrumpieren.
- Bei der Verwendung von direkter `eval`, insbesondere wenn der eval-Quelltext nicht nachweislich im strikten Modus ist, müssen die Engine und die Build-Tools alle Optimierungen im Zusammenhang mit dem Inline-Verfahren deaktivieren, weil der `eval()`-Quelltext von jedem Variablennamen im umgebenden Bereich abhängen kann.

Die Verwendung von indirekter `eval()` erlaubt jedoch nicht das Übergeben zusätzlicher Bindungen außer vorhandenen globalen Variablen, die von der ausgewerteten Quelle gelesen werden können. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle Zugriff haben soll, sollten Sie den `Function()`-Konstruktor verwenden.

#### Verwenden des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Konstruktor ähnelt stark dem indirekten eval-Beispiel oben: Er wertet auch die übergebene JavaScript-Quelle im globalen Bereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und erlaubt somit den Engines, mehr Optimierungen durchzuführen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quelltext als Funktionskörper geparst wird, nicht als Skript. Es gibt einige Nuancen - zum Beispiel können `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers, aber nicht in einem Skript verwendet werden.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihres eval-Quelltextes erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strengen [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwenden von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf das zugegriffen werden soll, erst bekannt ist, wenn der Code ausgeführt wird. Dies kann mit `eval()` durchgeführt werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Jedoch ist `eval()` hier nicht notwendig — tatsächlich ist es fehleranfälliger, da `propName`, wenn es kein gültiger Bezeichner ist, zu einem Syntaxfehler führt. Außerdem kann dies, wenn `getPropName` keine von Ihnen kontrollierte Funktion ist, zur Ausführung von beliebigem Code führen. Verwenden Sie stattdessen die [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um auf untergeordnete Eigenschaften zuzugreifen. Mit `eval()` würde dies folgendermaßen aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Vermeiden Sie `eval()` hier, indem Sie den Eigenschaftenpfad aufteilen und durch die verschiedenen Eigenschaften iterieren:

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

Das Einstellen einer Eigenschaft auf diese Weise funktioniert ähnlich:

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

Beachten Sie jedoch, dass das Verwenden von Klammern-Zugriffen mit unkontrollierten Eingaben ebenfalls unsicher ist — dies kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwenden von Callback-Funktionen

JavaScript hat {{Glossary("First-class_Function", "First-Class-Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, sie in Variablen und den Eigenschaften von Objekten speichern und so weiter können. Viele DOM-APIs sind mit diesem Prinzip im Hinterkopf konzipiert, daher können (und sollten) Sie schreiben:

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

[Abschlüsse](/de/docs/Web/JavaScript/Guide/Closures) sind ebenfalls hilfreich als Möglichkeit, parametrisierte Funktionen ohne das Verkettung von Strings zu erstellen.

#### Verwenden von JSON

Wenn der String, auf den Sie `eval()` anwenden, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), anstatt Code, sollten Sie den Wechsel zu {{Glossary("JSON", "JSON")}} in Betracht ziehen, das es dem String erlaubt, einen Unterbereich der JavaScript-Syntax zu verwenden, um Daten darzustellen.

Da die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, können viele gültige JavaScript-Literale nicht als JSON geparst werden. Beispielsweise sind abschließende Kommata in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen eingeschlossen sein. Verwenden Sie unbedingt einen JSON-Serializer, um Strings zu generieren, die später als JSON geparst werden.

Das Übertragen von sorgfältig eingeschränkten Daten anstelle von beliebigem Code ist generell eine gute Idee. Zum Beispiel könnte eine Erweiterung, die darauf ausgelegt ist, Inhalte von Webseiten zu extrahieren, die Extraktionsregeln in [XPath](/de/docs/Web/XML/XPath) statt in JavaScript-Code definiert haben.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben mit den Berechtigungen des Aufrufers auszuführen. Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wurde, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt der folgende Code, wie `eval()` möglicherweise `untrustedCode` ausführt, das von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Webseiten mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, werden standardmäßig verhindern, dass solcher Code ausgeführt wird. Wenn Sie erlauben müssen, dass die Skripte über `eval()` ausgeführt werden, können Sie die Risiken mildern, indem Sie immer eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz anstelle eines Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `eval()` auszuführen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben. Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort erlaubt ebenfalls `eval()`, ist jedoch viel weniger sicher als `trusted-types-eval`, da es auch auf Browsern, die vertrauenswürdige Typen nicht unterstützen, die Ausführung erlauben würde.

Zum Beispiel könnte die erforderliche CSP für Ihre Seite folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion, die in Ihrer Trusted Types-Richtlinie implementiert ist, hängt vom spezifischen Anwendungsfall ab, der ein benutzerdefiniertes Skript erfordert. Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, dass er ausgeführt wird. Wenn das nicht möglich ist, könnten Sie die Nutzung bestimmter Funktionen innerhalb der bereitgestellten Eingabe erlauben oder blockieren.

## Beispiele

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit vertrauenswürdigen Typen verwendet wird. Die anderen Beispiele lassen diesen Schritt zur Kürze aus.

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScript`-Instanzen an den `script`-Parameter übergeben. Wir müssen dies auch tun, wenn wir vertrauenswürdige Typen aus anderen Gründen erzwingen und einige erlaubte Skriptquellen zulassen möchten (durch `CSP: script-src`).

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill). Dies wirkt als transparenter Ersatz für die Trusted Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode zur Transformation von Eingabestrings in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen definiert.

Für das Beispiel nehmen wir an, dass wir eine Funktion `transformedScript()` haben, die unsere Transformations-/Filterlogik definiert.

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

Das `TrustedScript`-Objekt kann jetzt an `eval()` übergeben werden:

```js
eval(trustedScript);
```

### Verwendung von eval()

Im folgenden Code geben beide Aussagen mit `eval()` 42 zurück.
Die erste wertet den String `"x + y + 1"` aus; die zweite den String
`"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` wäre es die letzte bewertete Anweisung oder der letzte Ausdruck.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Im folgenden Beispiel wird `eval()` verwendet, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und ansonsten 0. Wenn die zweite Anweisung ausgeführt wird, führt `eval()` dazu, dass diese Anweisungen ausgeführt werden, und es wird die Menge der Anweisungen ausgewertet und der Wert zurückgegeben, der auf `z` zugewiesen wird, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### eval() als String, der Funktion definiert, erfordert "(" und ")" als Präfix und Suffix

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
- [WebExtensions: Using eval in content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
