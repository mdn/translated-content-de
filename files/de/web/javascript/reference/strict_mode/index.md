---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der kein strikter Modus ist, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber Sie sollten darauf achten, nur für den Fall.

Der strikte Modus von JavaScript ist eine Möglichkeit, auf eine eingeschränkte Variante von JavaScript _einzuwirken_ und sich damit implizit vom "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzumelden. Der strikte Modus ist nicht einfach nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Browser, die den strikten Modus nicht unterstützen, führen strikten Modus-Code mit anderem Verhalten aus als Browser, die ihn unterstützen. Daher sollten Sie sich nicht auf den strikten Modus verlassen, ohne die relevanten Aspekte des strikten Modus zu testen. Strikter Modus-Code und nicht-strikter Modus-Code können koexistieren, sodass Skripte schrittweise in den strikten Modus überführt werden können.

Der strikte Modus führt mehrere Änderungen an den normalen JavaScript-Semantiken durch:

1. Er beseitigt einige leise Fehler in JavaScript, indem er sie in Fehler umwandelt.
2. Er behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strikter Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strikten Modus ist.
3. Er verbietet einige Syntaxen, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden sollen.

## Strikten Modus aktivieren

Der strikte Modus gilt für _gesamte Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}` geschlossene Klammern eingeschlossen sind; der Versuch, ihn in einem solchen Kontext anzuwenden, bewirkt nichts. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignisbehandlungs-](/de/docs/Web/HTML/Attributes#event_handler_attributes)attribute, an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergebene Zeichenfolgen und verwandte Funktionen sind entweder Funktionskörper oder gesamte Skripte, und die Aktivierung des strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, stellen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso, um den strikten Modus für eine Funktion zu aktivieren, stellen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) im Körper der Funktion vor allen anderen Anweisungen.

```js
function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}
```

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [standardmäßigen](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strikter Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strikten Modus, ohne dass eine Anweisung erforderlich ist, um diesen zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) im strikten Modus, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class).

```js
class C1 {
  // All code here is evaluated in strict mode
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
  // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error
```

## Änderungen im strikten Modus

Der strikte Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in die folgenden Kategorien:

- Änderungen, die Fehler in Fehler konvertieren (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie Variablenreferenzen aufgelöst werden
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehler in Fehler umwandeln

Der strikte Modus wandelt einige zuvor akzeptierte Fehler in Fehler um. JavaScript wurde entworfen, um einfach für unerfahrene Entwickler zu sein, und gibt manchmal Vorgänge zurück, die keine Fehler, aber an sich Fehler sein sollten. Manchmal behebt dies das unmittelbare Problem, aber manchmal erzeugt dies in Zukunft größere Probleme. Der strikte Modus behandelt diese Fehler als Fehler, sodass sie entdeckt und umgehend behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy mode erstellt das falsche Tippen einer Variablen in einer Zuweisung eine neue Eigenschaft am globalen Objekt und "funktioniert" weiter. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strikten Modus einen Fehler:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Scheitern bei der Zuweisung zu Objekteigenschaften

Der strikte Modus macht Zuweisungen, die andernfalls leise fehlschlagen würden, zu einer Ausnahme. Es gibt drei Möglichkeiten, eine Eigenschaftszuweisung zu scheitern:

- Zuweisung zu einer nicht beschreibbaren Dateneigenschaft
- Zuweisung zu einer nur Lese-Accessor-Eigenschaft
- Zuweisung zu einer neuen Eigenschaft an einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine unveränderliche globale Variable. Im sloppy mode macht die Zuweisung an `NaN` nichts; der Entwickler erhält kein Feedback über das Scheitern. Im strikten Modus wirft die Zuweisung an `NaN` eine Ausnahme.

```js
"use strict";

// Assignment to a non-writable global
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError
```

#### Löschen von Objekteigenschaften, das fehlschlägt

Versuche, eine nicht konfigurierbare oder sonstige nicht löschbare (z.B. abgefangen durch einen Proxy's [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) Handler, welcher `false` zurückgibt) Eigenschaft zu löschen, werfen im strikten Modus (wobei der Versuch zuvor keinen Effekt hatte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der strikte Modus verbietet auch das Löschen von einfachen Namen. `delete name` im strikten Modus ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, verwenden Sie das Präfix [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus erfordert, dass Funktionsparameter eindeutig sind. Im sloppy mode versteckt das letzte duplizierte Argument vorherige identisch benannte Argumente. Diese vorherigen Argumente sind über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) weiterhin zugänglich, also sind sie nicht vollständig unzugänglich. Trotzdem macht dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte zum Beispiel einen Tippfehler verbergen), so dass im strikten Modus doppelte Argumentnamen ein Syntaxfehler sind:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im nicht strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder einen Destrukturierungsparameter hat.

#### Legacy Oktal-Literale

Der strikte Modus [verbietet ein `0`-präfixiertes Oktal-Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine Zahl, die mit `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Unerfahrene Entwickler glauben manchmal, dass ein Präfix mit führender Null keine semantische Bedeutung hat, also könnten sie es als Ausrichtungsgerät verwenden - aber das ändert die Bedeutung der Zahl! Eine führende Null für die Oktalsyntax ist selten nützlich und kann versehentlich verwendet werden, daher macht der strikte Modus dies zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Der standardisierte Weg, Oktalliterale zu kennzeichnen, ist über das `0o` Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Fluchtsequenzen, wie `"\45"`, was gleich `"%"` ist, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}} Zeichenkodierungsnummern in Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler gesagt, es ist nicht erlaubt, `\` gefolgt von einer Ziffer größer als `0` oder `\0` gefolgt von einer Ziffer zu haben, zum Beispiel `\9` und `\07`.

#### Eigenschaften auf primitiven Werten setzen

Im strikten Modus ist es untersagt, Eigenschaften auf {{Glossary("Primitive", "primitiven")}} Werten festzulegen. Wenn im sloppy mode auf eine Eigenschaft eines primitiven Werts zugegriffen wird, wird implizit ein unpraktisch unveränderlicher Wrapper-Objekt erstellt, sodass das Setzen von Eigenschaften ignoriert wird (No-Op). Im strikten Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden im strikten Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [Berechnete Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die eine Duplikation zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der ursprünglich einen Fehler auslöste, becomeing non-errors wird immer als abwärtskompatibel betrachtet. Dies ist ein guter Teil der Sprache, die sich streng mit dem Werfen von Fehlern verhält: Es bleibt Raum für zukünftige semantische Änderungen.

### Vereinfachen des Geltungsbereichsmanagements

Der strikte Modus vereinfacht die Zuordnung von Variablennamen zu bestimmten Variablendefinitionen im Code. Viele Compiler-Optimierungen hängen von der Fähigkeit ab, zu sagen, dass Variable _X_ an _dieser_ Stelle gespeichert wird: Dies ist entscheidend, um JavaScript-Code vollständig zu optimieren. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Name zu Variablendefinition im Code vor der Laufzeit zu erreichen. Der strikte Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler strikten Modus-Code besser optimieren kann.

#### Entfernung der `with`-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` besteht darin, dass jeder Name im Block entweder einer Eigenschaft des an ihn übergebenen Objekts oder einer Variablen im umgebenden (oder sogar globalen) Geltungsbereich zur Laufzeit zugeordnet werden könnte; es ist unmöglich, im Voraus zu wissen, welcher. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass keine Möglichkeit besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

```js-nolint example-bad
"use strict";
const x = 17;
with (obj) {
  // Syntax error
  // If this weren't strict mode, would this be const x, or
  // would it instead be obj.x? It's impossible in general
  // to say without running the code, so the name can't be
  // optimized.
  x;
}
```

Die Alternative, das Objekt einer kurzen Namenvariable zuzuordnen und dann die entsprechende Eigenschaft an dieser Variablen zuzugreifen, ist bereit, `with` zu ersetzen.

#### Nicht-leckendes eval

Im strikten Modus [führt `eval` keine neuen Variablen in den umgebenden Geltungsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode führt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder globalen Geltungsbereich ein. Dies bedeutet, dass im Allgemeinen in einer Funktion, die einen Aufruf zu `eval` enthält, jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verdecken würde). Im strikten Modus erstellt `eval` Variablen nur für den Code, der ausgewertet wird, sodass `eval` die Namen-Referenzierung auf eine äußere Variable oder eine lokale Variable nicht beeinflussen kann:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob die übergebene Zeichenkette an `eval()` im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wurde ([direkt oder indirekt](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Blockierte Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hat seit ihrem Beginn immer keine Funktionsdeklarationen, die in Blockanweisungen verschachtelt sind, erlaubt. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementiert haben. Leider haben sich die Semantiken der Implementierungen auseinanderentwickelt, und es war für die Sprachspezifikation unmöglich, alle Implementierungen zu vereinen. Daher werden [blockierte Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im strikten Modus spezifiziert (während sie einst im strikten Modus verboten waren), während das Verhalten im sloppy mode unter den Browsern nach wie vor unterschiedlich bleibt.

### Einfachere Handhabung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger seltsam magisch. Beide beinhalten im sloppy mode eine beträchtliche Menge magischen Verhaltens: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der strikte Modus macht große Fortschritte dahin, `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern der Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können in der Sprachsyntax nicht gebunden oder zugewiesen werden. All diese Versuche werden zu Syntaxfehlern:

```js-nolint example-bad
"use strict";
eval = 17;
arguments++;
++eval;
const obj = { set p(arguments) {} };
let eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
const y = function eval() {};
const f = new Function("arguments", "'use strict'; return 17;");
```

#### Kein Synchronisieren zwischen Parametern und Argumentindizes

Strikter Modus-Code synchronisiert keine Indizes des `arguments`-Objekts mit jeder Parameterbindung. In einer sloppy Modus-Funktion, deren erstes Argument `arg` ist, setzt `arg` auch `arguments[0]` und umgekehrt (es sei denn, keine Argumente wurden bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für strikte Modus-Funktionen speichern die ursprünglichen Argumente, wenn die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
const pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

### "Sichern" von JavaScript

Der strikte Modus erleichtert das Schreiben von "sicherem" JavaScript. Einige Websites bieten nun Benutzern Möglichkeiten an, JavaScript zu schreiben, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, sodass solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalitäten zu zensieren. Die Flexibilität von JavaScript macht es äußerst schwierig, dies ohne viele Laufzeitsüberprüfungen durchzuführen. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass die Durchführung von Laufzeitsüberprüfungen erhebliche Leistungskosten verursacht. Einige Änderungen im strikten Modus plus das Erfordernis, dass vom Benutzer eingereichtes JavaScript strikter Modus-Code ist und auf bestimmte Weise aufgerufen wird, reduzieren erheblich den Bedarf an diesen Laufzeitsüberprüfungen.

#### Kein this-Ersatz

Der Wert, der als `this` an eine Funktion im strikten Modus übergeben wird, wird nicht in ein Objekt "gezwungen" (auch als "boxed" bezeichnet). Für eine Funktion im sloppy mode ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn sie mit einem Objektwert `this` aufgerufen wird; oder der umstrukturierte Wert von `this`, wenn sie mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn sie mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` zu bestimmen.) Nicht nur bedeutet das automatische Boxing eine Leistungseinbuße, sondern die Bereitstellung des globalen Objekts in Browsern stellt auch eine Sicherheitsgefahr dar, da das globale Objekt Zugriff auf Funktionen bietet, die in "sicheren" JavaScript-Umgebungen eingeschränkt werden müssen. Für eine Funktion im strikten Modus wird das angegebene `this` nicht in ein Objekt umgewandelt, und wenn nicht spezifiziert, ist `this` `undefined` statt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

#### Entfernen der Stapeleigenschaften

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen implementierten früher einige Erweiterungsmerkmale, mit denen es möglich ist, den aufwärtsliegenden Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` sich gerade in der Mitte des Aufrufs befindet, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, da sie es erlauben, dass "gesicherter" Code Zugriff auf "privilegierte" Funktionen und deren (potenziell ungesicherte) Argumente erhalten kann. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen einen Fehler werfen:

```js
function restricted() {
  "use strict";
  restricted.caller; // throws a TypeError
  restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Darüber hinaus behindert `arguments.callee` Optimierungen wie das Inline-gettingen von Funktionen erheblich, da es möglich gemacht werden muss, im Falle eines Zugriffs auf `arguments.callee` einen Verweis auf die nicht-inline-Funktion zu liefern. `arguments.callee` für strikte Modus-Funktionen ist eine nicht löschbare Eigenschaft, die beim Setzen oder Abrufen einen Fehler wirft:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der strikte Modus reserviert einige weitere Namen als der sloppy mode, einige von ihnen werden bereits in der Sprache verwendet und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen einfacher implementieren zu können.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang in den strikten Modus

Der strikte Modus wurde so gestaltet, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und sogar Code bis zur Funktionsebene in den strikten Modus zu überführen.

Sie können eine Codebasis in den strikten Modus migrieren, indem Sie zuerst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden die folgenden Fälle einen {{jsxref("SyntaxError")}} werfen, bevor das Skript ausgeführt wird:

- Oktal-Syntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) bei einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Vorbereitung auf zukünftige Sprachfeatures): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklarieren von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklarieren desselben Eigenschaftennamens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code vom Laufzeitsystem analysiert wird.

### Neue Laufzeitfehler

JavaScript fiel früher stillschweigend in Kontexten aus, in denen das, was gemacht wurde, eigentlich ein Fehler sein sollte. Der strikte Modus wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, sind Tests erforderlich, um sicherzustellen, dass nichts kaputtgeht. Sie können nach solchen Fehlern auf der Funktionsgranularitätsebene suchen.

- Die Zuweisung zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Dies legte früher eine Eigenschaft am globalen Objekt fest, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert am globalen Objekt zuweisen möchten, weisen Sie ihn explizit als Eigenschaft von `globalThis` zu.
- Das Scheitern, eine Eigenschaft eines Objekts zuzuweisen (z.B. sie ist schreibgeschützt), wirft einen {{jsxref("TypeError")}}. Im sloppy mode würde dies stillschweigend fehlschlagen.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy mode würde dies stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass ein Testfall diese Art subtiler Unterschiede nicht erfasst. Eine sorgfältige Prüfung Ihrer Codebasis wird wahrscheinlich erforderlich sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Prüfung schrittweise bis zur Funktionsebene durchgeführt werden.

- `this`
  - : Im sloppy mode würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert bezeichnen. Im strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen werden, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt umgeformt (oder das globale Objekt für `undefined` und `null`). Im strikten Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy mode ändert das Modifizieren eines Wertes im `arguments`-Objekt das entsprechende benannte Argument. Dies machte Optimierungen für JavaScript-Engine und Code schwieriger zu lesen/verstehen. Im strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten werden nicht in einander widergespiegelt.
- `eval`
  - : Im strikten Modus-Code erstellt `eval` keine neue Variable im Geltungsbereich, aus dem es aufgerufen wurde. Natürlich wird auch die Zeichenkette im strikten Modus mit strikten Regelwerken ausgewertet. Umfassende Tests müssen durchgeführt werden, um sicherzustellen, dass nichts bricht. Wenn Sie `eval` nicht wirklich brauchen, kann es eine weitere pragmatische Lösung sein, `eval` zu vermeiden.
- Blockierte Funktionsdeklarationen
  - : Im sloppy mode kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
