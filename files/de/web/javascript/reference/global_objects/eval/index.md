---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 06f8ebf948372dfb6c3c22d26d4f672c99cd4e0d
---

> [!WARNING]
> Das an diese Funktion übergebene Argument wird dynamisch als JavaScript geparst und ausgeführt.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Funktion **`eval()`** wertet JavaScript-Code aus, der als Zeichenfolge dargestellt wird, und gibt dessen Abschlusswert zurück. Der Quelltext wird als Skript geparst.

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
  - : Eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz oder eine Zeichenfolge, die einen JavaScript-Ausdruck, eine Anweisung oder eine Folge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Er wird als Skript geparst. Daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, die nur in Modulen vorkommen können, nicht zulässig.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Ist der Abschlusswert leer, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` weder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) noch eine primitive Zeichenfolge ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der Parameter `script` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : `script` ist eine Zeichenfolge, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode löst außerdem jede Ausnahme aus, die bei der Auswertung des Codes auftritt.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der Funktion `eval()` ist eine Zeichenfolge. Die Funktion wertet die Quellzeichenfolge als Skriptkörper aus; sowohl Anweisungen als auch Ausdrücke sind daher zulässig. Sie gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Auch viele Anweisungen und Deklarationen haben Abschlusswerte, doch das Ergebnis kann überraschend sein: Beispielsweise ist der Abschlusswert einer Zuweisung der zugewiesene Wert, während der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) undefined ist. Daher sollten Sie sich nicht auf die Abschlusswerte von Anweisungen verlassen.

Im strikten Modus führt die Deklaration einer Variablen namens `eval` oder eine erneute Zuweisung an `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` weder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) noch eine Zeichenfolge ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt die Übergabe eines `String`-Objekts statt eines primitiven Werts dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenfolge auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um dieses Problem allgemein zu umgehen, können Sie das Argument selbst [in eine Zeichenfolge umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkte und indirekte Auswertung mit eval

Es gibt zwei Arten von `eval()`-Aufrufen: _direkte_ und _indirekte_ Aufrufe. Bei einem direkten Aufruf wird die globale Funktion `eval`, wie der Name nahelegt, _direkt_ mit `eval(...)` aufgerufen. Alle anderen Aufrufe sind indirekt. Dazu gehören Aufrufe über eine Aliasvariable, über einen Eigenschaftszugriff oder einen anderen Ausdruck sowie über den Operator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für optionale Verkettung.

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

Eine indirekte Auswertung mit eval lässt sich so betrachten, als würde der Code innerhalb eines separaten `<script>`-Tags ausgewertet. Das bedeutet:

- Die indirekte Auswertung erfolgt im globalen statt im lokalen Gültigkeitsbereich. Der ausgewertete Code hat keinen Zugriff auf lokale Variablen des Gültigkeitsbereichs, aus dem er aufgerufen wird.

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

- Eine indirekte Auswertung mit `eval` übernimmt den strikten Modus des umgebenden Kontexts nicht. Sie erfolgt nur dann im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"`-Direktive enthält.

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

  Eine direkte Auswertung übernimmt dagegen den strikten Modus des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gelangen in den umgebenden Gültigkeitsbereich, wenn die Quellzeichenfolge nicht im strikten Modus interpretiert wird. Bei einer indirekten Auswertung werden sie somit zu globalen Variablen. Erfolgt eine direkte Auswertung in einem Kontext mit striktem Modus oder befindet sich die `eval`-Quellzeichenfolge selbst im strikten Modus, dringen `var`- und Funktionsdeklarationen nicht in den umgebenden Gültigkeitsbereich vor.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb der ausgewerteten Zeichenfolge sind immer auf dieses Skript beschränkt.

- Eine direkte Auswertung kann auf zusätzliche kontextabhängige Ausdrücke zugreifen. Im Körper einer Funktion lässt sich beispielsweise [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals eine direkte Auswertung mit eval()!

Die direkte Verwendung von `eval()` bringt mehrere Probleme mit sich:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einer Zeichenfolge aufrufen, die von böswilligen Dritten beeinflusst werden könnte, führen Sie möglicherweise schädlichen Code auf dem Gerät des Benutzers mit den Berechtigungen Ihrer Webseite oder Erweiterung aus. Vor allem kann es zu Angriffen führen, bei denen lokale Variablen gelesen oder verändert werden, wenn Code von Dritten auf den Gültigkeitsbereich zugreifen kann, in dem `eval()` aufgerufen wurde (bei einer direkten Auswertung). Unter [Sicherheitsaspekte](#sicherheitsaspekte) finden Sie Ansätze zur Verringerung dieser Risiken.
- `eval()` ist langsamer als die Alternativen, da der JavaScript-Interpreter aufgerufen werden muss, während moderne JS-Engines viele andere Konstrukte optimieren.
- Moderne JavaScript-Interpreter wandeln JavaScript in Maschinencode um. Dabei gehen Informationen über Variablennamen verloren. Jede Verwendung von `eval()` zwingt den Browser deshalb zu aufwendigen Suchvorgängen nach Variablennamen, um festzustellen, wo sich eine Variable im Maschinencode befindet, und ihren Wert zu setzen. Darüber hinaus kann `eval()` neue Eigenschaften einer Variablen einführen, etwa ihren Typ ändern. Dadurch muss der Browser den gesamten erzeugten Maschinencode erneut auswerten, um die Änderung zu berücksichtigen.
- Minifier verzichten auf jegliche Minifizierung, wenn ein Gültigkeitsbereich mittelbar von `eval()` abhängt, da `eval()` andernfalls zur Laufzeit nicht die richtige Variable lesen könnte.

In vielen Fällen lässt sich die Verwendung von `eval()` oder verwandten Methoden optimieren oder ganz vermeiden.

#### Indirekte Auswertung mit eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Allein die indirekte Auswertung und das Erzwingen des strikten Modus können den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden obigen Codeausschnitte scheinen möglicherweise gleich zu funktionieren, tun es aber nicht. Der erste verwendet eine direkte Auswertung und hat mehrere Nachteile.

- Er ist deutlich langsamer, weil mehr Gültigkeitsbereiche durchsucht werden müssen. Beachten Sie `c: new Map()` in der ausgewerteten Zeichenfolge. Bei der indirekten Auswertung wird das Objekt im globalen Gültigkeitsbereich ausgewertet. Der Interpreter kann daher davon ausgehen, dass `Map` auf den globalen `Map()`-Konstruktor und nicht auf eine lokale Variable namens `Map` verweist. Bei einer direkten Auswertung kann der Interpreter diese Annahme nicht treffen. Im folgenden Code verweist `Map` in der ausgewerteten Zeichenfolge beispielsweise nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Bei der `eval()`-Variante muss der Browser daher aufwendig prüfen, ob lokale Variablen namens `Map()` vorhanden sind.

- Ohne strikten Modus werden `var`-Deklarationen im `eval()`-Quelltext zu Variablen im umgebenden Gültigkeitsbereich. Das kann zu schwer zu debuggenden Problemen führen, wenn die Zeichenfolge aus externen Eingaben stammt – insbesondere, wenn bereits eine Variable mit demselben Namen existiert.
- Eine direkte Auswertung kann Bindungen im umgebenden Gültigkeitsbereich lesen und verändern. Dadurch können externe Eingaben lokale Daten beschädigen.
- Bei der direkten Verwendung von `eval` müssen die Engine und Build-Tools alle Optimierungen für das Inlining deaktivieren, insbesondere wenn nicht nachgewiesen werden kann, dass der ausgewertete Quelltext im strikten Modus ausgeführt wird. Der `eval()`-Quelltext kann nämlich von jedem Variablennamen in seinem umgebenden Gültigkeitsbereich abhängen.

Bei einer indirekten Auswertung mit `eval()` können Sie dem ausgewerteten Quelltext allerdings keine zusätzlichen Bindungen außer bereits vorhandenen globalen Variablen zur Verfügung stellen. Wenn der ausgewertete Quelltext Zugriff auf weitere Variablen benötigt, sollten Sie den `Function()`-Konstruktor verwenden.

#### Verwendung des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ähnelt dem obigen Beispiel einer indirekten Auswertung: Er wertet den übergebenen JavaScript-Quelltext ebenfalls im globalen Gültigkeitsbereich aus, ohne lokale Bindungen zu lesen oder zu verändern. Daher können Engines mehr Optimierungen vornehmen als bei einer direkten Auswertung mit `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper und nicht als Skript geparst wird. Daraus ergeben sich einige Besonderheiten: So können Sie beispielsweise `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, nicht aber in einem Skript.

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

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind bei strengen [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen verboten. Für häufige Anwendungsfälle gibt es außerdem weitere sicherere (und schnellere!) Alternativen zu `eval()` und `Function()`.

#### Verwendung des Zugriffs mit eckigen Klammern

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Im folgenden Beispiel ist die Eigenschaft des Objekts, auf die zugegriffen werden soll, erst bei der Ausführung des Codes bekannt. Der Zugriff lässt sich mit `eval()` umsetzen:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist `eval()` jedoch nicht erforderlich. Tatsächlich ist es fehleranfälliger: Wenn `propName` kein gültiger Bezeichner ist, führt dies zu einem Syntaxfehler. Wenn `getPropName` keine Funktion ist, die Sie kontrollieren, kann zudem beliebiger Code ausgeführt werden. Verwenden Sie stattdessen den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), der wesentlich schneller und sicherer ist:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Mit dieser Methode können Sie sogar auf verschachtelte Eigenschaften zugreifen. Mit `eval()` sähe das so aus:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Um `eval()` hier zu vermeiden, können Sie den Eigenschaftspfad aufteilen und die einzelnen Eigenschaften nacheinander durchlaufen:

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

Beachten Sie jedoch, dass auch der Zugriff mit eckigen Klammern bei uneingeschränkten Eingaben nicht sicher ist. Er kann zu [Object-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

In JavaScript sind {{Glossary("First-class_Function", "Funktionen First-Class-Objekte")}}. Das bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben oder in Variablen und Objekteigenschaften speichern können. Viele DOM-APIs sind darauf ausgelegt. Sie können (und sollten) daher Folgendes schreiben:

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

Auch [Closures](/de/docs/Web/JavaScript/Guide/Closures) sind hilfreich, um parametrisierte Funktionen zu erstellen, ohne Zeichenfolgen zu verketten.

#### Verwendung von JSON

Wenn die Zeichenfolge, mit der Sie `eval()` aufrufen, Daten statt Code enthält – beispielsweise ein Array wie `"[1, 2, 3]"` –, sollten Sie {{Glossary("JSON", "JSON")}} verwenden. Damit kann die Zeichenfolge Daten mithilfe einer Teilmenge der JavaScript-Syntax darstellen.

Beachten Sie, dass die JSON-Syntax gegenüber der JavaScript-Syntax eingeschränkt ist. Viele gültige JavaScript-Literale lassen sich daher nicht als JSON parsen. Beispielsweise sind nachgestellte Kommas in JSON nicht zulässig, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Verwenden Sie unbedingt einen JSON-Serializer, um Zeichenfolgen zu erzeugen, die später als JSON geparst werden sollen.

Sorgfältig eingeschränkte Daten statt beliebigen Codes zu übergeben, ist generell sinnvoll. Beispielsweise könnten die Regeln einer Erweiterung zum Extrahieren von Inhalten aus Webseiten in [XPath](/de/docs/Web/XML/XPath) statt in JavaScript-Code definiert werden.

### Sicherheitsaspekte

Mit der Methode können beliebige Eingaben mit den Berechtigungen des Aufrufers ausgeführt werden. Stammt die Eingabe aus einer potenziell unsicheren, von einem Benutzer bereitgestellten Zeichenfolge, kann dies einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.

Der folgende Code zeigt beispielsweise, wie `eval()` den von einem Benutzer bereitgestellten Wert `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) festlegt, verhindern standardmäßig die Ausführung solchen Codes. Wenn Sie die Ausführung von Skripten über `eval()` zulassen müssen, können Sie die Risiken verringern, indem Sie immer eine [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanz statt einer Zeichenfolge zuweisen und [Trusted Types mithilfe der CSP-Direktive](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen. So wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft.

Damit `eval()` ausgeführt werden kann, müssen Sie zusätzlich das [Schlüsselwort `trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der `script-src`-Direktive Ihrer CSP angeben. Das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) erlaubt `eval()` ebenfalls, ist aber deutlich weniger sicher als `trusted-types-eval`, da es die Ausführung auch in Browsern zulässt, die Trusted Types nicht unterstützen.

Die erforderliche CSP für Ihre Website könnte beispielsweise so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion in Ihrer Trusted-Types-Richtlinie hängt vom konkreten Anwendungsfall ab, für den ein vom Benutzer bereitgestelltes Skript benötigt wird. Wenn möglich, sollten Sie die zulässigen Skripte auf genau den Code beschränken, dessen Ausführung Sie vertrauen. Ist das nicht möglich, können Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Eingabe erlauben oder blockieren.

## Beispiele

Das erste Beispiel zeigt die Verwendung der Methode mit Trusted Types. In den anderen Beispielen wird dieser Schritt der Kürze halber ausgelassen.

### Verwendung von TrustedScript

Um das XSS-Risiko zu verringern, sollten wir dem Parameter `script` immer `TrustedScript`-Instanzen zuweisen. Dies ist auch erforderlich, wenn wir Trusted Types aus anderen Gründen erzwingen und bestimmte Skriptquellen zulassen möchten, die durch `CSP: script-src` erlaubt wurden.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill). Er dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Anschließend erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) definiert, um Eingabezeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass eine Funktion `transformedScript()` unsere Transformations- und Filterlogik definiert.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Our filter method
    return transformed;
  },
});
```

Dann verwenden wir das Objekt `policy`, um aus einer potenziell unsicheren Eingabezeichenfolge ein `TrustedScript`-Objekt zu erstellen:

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

Im folgenden Code geben beide Anweisungen, die `eval()` enthalten, den Wert 42 zurück.
Die erste wertet die Zeichenfolge `"x + y + 1"` aus, die zweite die Zeichenfolge
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

Im folgenden Beispiel wertet `eval()` die Zeichenfolge `str` aus. Sie besteht aus JavaScript-Anweisungen, die `z` den Wert 42 zuweisen, wenn `x` gleich fünf ist, und andernfalls `z` den Wert 0 zuweisen. Bei der Ausführung der zweiten Anweisung führt `eval()` diese Anweisungen aus, wertet die Anweisungsfolge aus und gibt den Wert zurück, der `z` zugewiesen wurde. Das liegt daran, dass der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

### Bei eval() benötigt eine Zeichenfolge, die eine Funktion definiert, „(“ und „)“ als Präfix und Suffix

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

- [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
