---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Die Ausführung von JavaScript aus einem String stellt ein enormes Sicherheitsrisiko dar. Es ist viel zu einfach für böswillige Akteure, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Verwenden Sie niemals direkt eval()!](#never_use_direct_eval!), unten.

Die **`eval()`** Funktion wertet JavaScript-Code aus, der als String dargestellt wird, und gibt seinen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Abfolge von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklarationen (die nur in Modulen existieren können) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des angegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` keine String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Auswertung des Codes auftritt, einschließlich eines {{jsxref("SyntaxError")}}, falls `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der `eval()` Funktion ist ein String. Es wird die Quellzeichenfolge als Skript-Körper auswerten, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (zum Beispiel ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im Strict Mode führt die Deklaration einer Variablen namens `eval` oder die Neuzuordnung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unerwartet eval oder arguments im Strict Mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt die Übergabe eines `String`-Objekts anstelle eines Primitivs dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt die Zeichenfolge auszuwerten.

```js
eval(new String("2 + 2")); // Gibt ein String-Objekt zurück, das "2 + 2" enthält
eval("2 + 2"); // Gibt 4 zurück
```

Um das Problem auf allgemeine Weise zu lösen, können Sie das Argument selbst [in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // Gibt 4 zurück
```

### Direkte und indirekte Auswertung

Es gibt zwei Modi von `eval()` Aufrufen: _direkte_ Auswertung und _indirekte_ Auswertung. Direkte Auswertung bezieht sich auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine aliasisierte Variable, über einen Memberzugriff oder einen anderen Ausdruck, oder über den optionalen Verkettungsoperator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

```js
// Direktaufruf
eval("x + y");

// Indirekter Aufruf unter Verwendung des Komma-Operators, um eval zurückzugeben
(0, eval)("x + y");

// Indirekter Aufruf durch optionale Verkettung
eval?.("x + y");

// Indirekter Aufruf unter Verwendung einer Variablen, um eval zu speichern und zurückzugeben
const geval = eval;
geval("x + y");

// Indirekter Aufruf durch Memberzugriff
const obj = { eval };
obj.eval("x + y");
```

Indirekte Auswertung kann als würde der Code innerhalb eines separaten `<script>`-Tags ausgewertet werden, verstanden werden. Das bedeutet:

- Indirekte Auswertung funktioniert im globalen Scope anstelle des lokalen Scopes, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Scopes, in dem er aufgerufen wird.

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // Direkter Aufruf, verwendet lokalen Scope
    console.log(eval("x + y")); // Ergebnis ist 6
    // Indirekter Aufruf, verwendet globalen Scope
    console.log(eval?.("x + y")); // Wirft einen Fehler, weil x im globalen Scope nicht definiert ist
  }
  ```

- Indirekte `eval` erben nicht die Strenge des umgebenden Kontexts und sind nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn die Quellzeichenfolge selbst eine `"use strict"` Direktive hat.

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
  nonStrictContext(); // Gibt 3.141592653589793 aus
  strictContext(); // Gibt 3.141592653589793 aus
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  Andererseits erbt direkte Auswertung die Strenge des aufrufenden Kontexts.

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
  nonStrictContext(); // Gibt 3.141592653589793 aus
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

- `var`-deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) würden in den umgebenden Scope gelangen, wenn die Quellzeichenfolge nicht im Strict Mode interpretiert wird — für indirekte Auswertung werden sie zu globalen Variablen. Handelt es sich um eine direkte Auswertung in einem Strict Mode-Kontext oder wenn die `eval` Quellzeichenfolge selbst im Strict Mode ist, dann "leaken" `var` und Funktionsdeklarationen nicht in den umgebenden Scope.

  ```js
  // Weder Kontext noch Quellzeichenfolge sind strikt,
  // also erstellt var eine Variable im umgebenden Scope
  eval("var a = 1;");
  console.log(a); // 1
  // Kontext ist nicht strikt, aber die eval Quelle ist strikt,
  // also ist b auf das ausgewertete Skript beschränkt
  eval("'use strict'; var b = 1;");
  console.log(b); // ReferenceError: b is not defined

  function strictContext() {
    "use strict";
    // Kontext ist strikt, aber das ist indirekt und die Quellzeichenfolge
    // ist nicht strikt, sodass c immer noch global ist
    eval?.("var c = 1;");
    // Direkte Auswertung in einem strikten Kontext, sodass d beschränkt ist
    eval("var d = 1;");
  }
  strictContext();
  console.log(c); // 1
  console.log(d); // ReferenceError: d is not defined
  ```

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen innerhalb der ausgewerteten Zeichenfolge sind immer auf dieses Skript beschränkt.

- Direkte Auswertung kann auf zusätzliche kontextbezogene Ausdrücke zugreifen. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkt eval()!

Die Verwendung von direkter `eval()` leidet unter mehreren Problemen:

- `eval()` führt den Code aus, der ihm mit den Berechtigungen des Aufrufers übergeben wird. Wenn Sie `eval()` mit einem String verwenden, der von einer böswilligen Partei beeinflusst werden könnte, könnten Sie möglicherweise böswilligen Code auf dem Rechner des Benutzers mit den Berechtigungen Ihrer Webseite / Erweiterung ausführen. Wichtiger noch, wenn Drittanbieter-Code auf den Scope zugreifen kann, in dem `eval()` aufgerufen wurde (wenn es sich um eine direkte Auswertung handelt), können daraus mögliche Angriffe resultieren, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter wandeln JavaScript in Maschinencode um. Das bedeutet, dass jedes Konzept der Variablennamen zerstört wird. Daher zwingt jede Verwendung von `eval()` den Browser zu langen und teuren Lookups von Variablennamen, um herauszufinden, wo sich die Variable im Maschinencode befindet und ihren Wert zu setzen. Darüber hinaus können durch `eval()` neue Dinge zu dieser Variablen hinzugefügt werden, wie z.B. die Änderung des Variablentyps, die den Browser zwingt, den gesamten generierten Maschinencode neu zu bewerten.
- Minifier geben jede Minifizierung auf, wenn der Scope transitiv von `eval()` abhängt, da `eval()` andernfalls die korrekte Variable zur Laufzeit nicht lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder ganz vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Durch die einfache Verwendung von indirekter Auswertung und das Erzwingen des Strict Mode kann der Code wesentlich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));
```

Die beiden obigen Codebeispiele scheinen auf die gleiche Weise zu funktionieren, tun es aber nicht; die erste Version mit direkter Auswertung leidet unter mehreren Problemen.

- Sie ist wesentlich langsamer aufgrund von mehr Scope-Inspektionen. Beachten Sie `c: new Date()` in der ausgewerteten Zeichenfolge. In der Version mit indirekter Auswertung wird das Objekt im globalen Scope ausgewertet, sodass der Interpreter sicher annehmen kann, dass sich `Date` auf den globalen `Date()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Date`. In dem mit direkter Auswertung implementierten Code jedoch kann der Interpreter dies nicht annehmen. Zum Beispiel bezieht sich `Date` in der ausgewerteten Zeichenfolge im folgenden Code nicht auf `window.Date()`.

  ```js
  function looseJsonParse(obj) {
    function Date() {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Date() }`));
  ```

  Daher wird der Browser in der eval()-Version des Codes gezwungen, den teuren Lookup-Aufruf durchzuführen, um zu prüfen, ob lokale Variablen mit Namen `Date()` existieren.

- Wenn nicht im Strict Mode verwendet, werden `var` Deklarationen innerhalb der eval()-Quelle zu Variablen im umgebenden Scope. Dies führt zu schwer zu debuggenden Problemen, wenn die Zeichenfolge aus externem Input stammt, insbesondere wenn bereits eine Variable mit dem gleichen Namen existiert.
- Direkte Auswertung kann Bindungen im umgebenden Scope lesen und ändern, was dazu führen kann, dass externer Input lokale Daten beschädigt.
- Beim Einsatz von direkter `eval()`, insbesondere wenn nicht nachgewiesen werden kann, dass die eval-Quelle im Strict Mode ist, müssen die Engine — und Build-Tools — alle Optimierungen in Bezug auf Inlining deaktivieren, da die `eval()`-Quelle von beliebigen Variablennamen im umgebenden Scope abhängig sein kann.

Jedoch erlaubt es die Verwendung von indirekter `eval()` nicht, zusätzliche Bindungen zu übergeben außer den bereits vorhandenen globalen Variablen, die der ausgewertete Code lesen kann. Wenn Sie zusätzliche Variablen spezifizieren müssen, auf die der ausgewertete Code Zugriff haben soll, erwägen Sie die Verwendung des `Function()`-Konstruktors.

#### Verwendung des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Konstruktor ist sehr ähnlich zum indirekten eval-Beispiel oben: Er wertet ebenfalls die übergebene JavaScript-Quelle im globalen Scope aus, ohne jegliche lokale Bindungen zu lesen oder zu ändern, und erlaubt daher der Engine mehr Optimierungen als direkte `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass die an `Function()` übergebene Quellzeichenfolge als Funktionskörper und nicht als Skript geparst wird. Es gibt ein paar Nuancen – zum Beispiel können Sie `return`-Anweisungen auf oberster Ebene eines Funktionskörpers verwenden, aber nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie möchten, dass lokale Bindungen innerhalb Ihres eval-Quellcodes erstellt werden, indem Sie die Variablen als Parameterbindungen übergeben.

```javascript
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

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind in strengen [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt auch zusätzliche sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für allgemeine Anwendungsfälle.

#### Verwendung von Klammer-Zugriffen

Sie sollten `eval()` nicht verwenden, um dynamisch auf Eigenschaften zuzugreifen. Betrachten Sie das folgende Beispiel, bei dem die Eigenschaft des Objekts, auf das zugegriffen werden soll, erst während der Codeausführung bekannt wird. Dies kann mit `eval()` erreicht werden:

```javascript
const obj = { a: 20, b: 30 };
const propName = getPropName(); // gibt "a" oder "b" zurück

const result = eval(`obj.${propName}`);
```

`eval()` ist hier jedoch nicht notwendig — tatsächlich ist es fehleranfälliger, denn wenn `propName` kein gültiger Bezeichner ist, führt es zu einem Syntaxfehler. Darüber hinaus kann dies zur Ausführung von beliebigem Code führen, wenn `getPropName` keine Funktion ist, die Sie kontrollieren. Verwenden Sie stattdessen die [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```javascript
const obj = { a: 20, b: 30 };
const propName = getPropName(); // gibt "a" oder "b" zurück
const result = obj[propName]; // obj["a"] ist dasselbe wie obj.a
```

Sie können diese Methode sogar verwenden, um auf nachfolgende Eigenschaften zuzugreifen. Mit `eval()` würde dies so aussehen:

```javascript
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // Angenommen, es gibt "a.b.c" zurück

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` hier könnte durch das Aufteilen des Eigenschaftspfads und das Durchlaufen der verschiedenen Eigenschaften erreicht werden:

```javascript
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // Angenommen, es gibt "a.b.c" zurück
const result = getDescendantProp(obj, propPath); // 0
```

Das Setzen einer Eigenschaft auf diese Weise funktioniert ähnlich:

```javascript
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // Angenommen, es gibt "a.b.c" zurück
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c ist jetzt 1
```

Seien Sie jedoch vorsichtig, denn auch die Verwendung von Klammerzutrittsoperationen mit uneingeschränktem Eingabewert ist nicht sicher — dies kann zu [Objektinjektionsangriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript besitzt [Erstklassige Funktionen](/de/docs/Glossary/First-class_Function), was bedeutet, dass Sie Funktionen als Argumente für andere APIs übergeben, sie in Variablen speichern und als Eigenschaft von Objekten verwenden können und so weiter. Viele DOM-APIs sind so konzipiert, dass Sie (und sollten) Folgendes schreiben:

```javascript
// Anstatt setTimeout("…", 1000) zu verwenden:
setTimeout(() => {
  // …
}, 1000);

// Anstatt elt.setAttribute("onclick", "…") zu verwenden:
elt.addEventListener("click", () => {
  // …
});
```

[Closures](/de/docs/Web/JavaScript/Closures) sind ebenfalls hilfreich, um parametrisierte Funktionen zu erstellen, ohne Zeichenfolgen zu verketten.

#### Verwendung von JSON

Wenn die Zeichenfolge, auf die Sie `eval()` aufrufen, Daten (beispielsweise ein Array: `"[1, 2, 3]"`) und keinen Code enthält, sollten Sie in Betracht ziehen, zu {{Glossary("JSON")}} zu wechseln, das erlaubt, die Zeichenfolge als Teilsyntax von JavaScript darzustellen, um Daten darzustellen.

Beachten Sie, dass die JSON-Syntax im Vergleich zur JavaScript-Syntax eingeschränkt ist, daher werden viele gültige JavaScript-Literale nicht als JSON geparst. Beispielsweise sind abschließende Kommata in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen eingeschlossen sein. Verwenden Sie unbedingt einen JSON-Serializer, um Zeichenfolgen zu erzeugen, die später als JSON geparst werden.

Das Übergeben von sorgfältig eingeschränkten Daten anstelle von beliebigem Code ist im Allgemeinen eine gute Idee. Zum Beispiel könnte eine Erweiterung, die Inhalte von Webseiten abruft, die Abrufregeln in [XPath](/de/docs/Web/XPath) anstelle von JavaScript-Code definiert haben.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide mit `eval()` enthaltenden Anweisungen 42 zurück. Die erste wertet die Zeichenfolge `"x + y + 1"` aus; die zweite wertet die Zeichenfolge `"42"` aus.

```javascript
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert der Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Bei `if` wäre dies der letzte ausgewertete Ausdruck oder die zuletzt ausgeführte Anweisung.

```javascript
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Im folgenden Beispiel verwendet `eval()` die Zeichenfolge `str`, um eine Zuweisung zu bewerten. Diese Zeichenfolge besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, wenn `x` fünf ist, und andernfalls `z` den Wert 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, wird `eval()` diese Anweisungen ausführen und außerdem die Anweisungen auswerten und den der Variable `z` zugewiesenen Wert zurückgeben, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

```javascript
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

```javascript
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

### eval() als eine Zeichenkette, die Funktion definiert, erfordert "(" und ")" als Präfix und Suffix

```javascript
// Dies ist eine Funktionsdeklaration
const fctStr1 = "function a() {}";
// Dies ist ein Funktionsausdruck
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // Gibt undefined zurück, aber `a` ist jetzt verfügbar als globale Funktion
const fct2 = eval(fctStr2); // Gibt die Funktion `b` zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
