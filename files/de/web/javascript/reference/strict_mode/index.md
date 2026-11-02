---
title: Strict Mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

> [!NOTE]
> Der standardmäßige, nicht strikte Modus wird manchmal als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Das ist kein offizieller Begriff, aber es ist hilfreich, ihn zu kennen.

Der Strict Mode von JavaScript ermöglicht es, sich bewusst für eine eingeschränkte Variante von JavaScript und damit gegen den „{{Glossary("Sloppy_mode", "sloppy mode")}}“ zu entscheiden. Der Strict Mode ist nicht einfach eine Teilmenge von JavaScript: Er hat _bewusst_ eine andere Semantik als gewöhnlicher Code. Code im Strict Mode und Code außerhalb davon können nebeneinander bestehen. So können Skripte schrittweise auf den Strict Mode umgestellt werden.

Der Strict Mode ändert die übliche JavaScript-Semantik in mehrfacher Hinsicht:

1. Er macht einige Fehler sichtbar, die JavaScript sonst stillschweigend übergeht, indem er Ausnahmen auslöst.
2. Er behebt Fehlerquellen, die JavaScript-Engines die Optimierung erschweren: Code im Strict Mode kann daher manchmal schneller ausgeführt werden als identischer Code außerhalb davon.
3. Er verbietet bestimmte Syntax, die möglicherweise in künftigen ECMAScript-Versionen definiert wird.

## Strict Mode aktivieren

Der Strict Mode kann für _ganze Skripte_ oder _einzelne Funktionen_ aktiviert werden. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die von `{}` umschlossen sind; ein Versuch, ihn dort zu aktivieren, hat keine Wirkung. Code in [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), Attribute für [Event-Handler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes), an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergebene Strings und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte. In ihnen lässt sich der Strict Mode wie erwartet aktivieren.

### Strict Mode für Skripte

Um den Strict Mode für ein ganzes Skript zu aktivieren, setzen Sie die Anweisung `"use strict";` (oder `'use strict';`) _genau in dieser Form_ vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strict Mode für Funktionen

Um den Strict Mode für eine Funktion zu aktivieren, setzen Sie entsprechend die Anweisung `"use strict";` (oder `'use strict';`) _genau in dieser Form_ vor alle anderen Anweisungen in den Funktionskörper.

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

Die Direktive `"use strict"` darf nur im Körper von Funktionen mit einfachen Parametern verwendet werden. In Funktionen mit [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten Parametern](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) führt `"use strict"` zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strict Mode für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im Strict Mode. Eine Anweisung zu seiner Aktivierung ist nicht erforderlich.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strict Mode für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) befinden sich im Strict Mode. Das gilt sowohl für [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch für [Klassenausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

## Änderungen im Strict Mode

Der Strict Mode verändert sowohl die Syntax als auch das Verhalten zur Laufzeit. Die Änderungen lassen sich im Allgemeinen in folgende Kategorien einteilen:

- Fehler, die zuvor übergangen wurden, werden zu Syntaxfehlern oder Fehlern zur Laufzeit
- die Auflösung von Variablenreferenzen wird vereinfacht
- `eval` und `arguments` werden vereinfacht
- das Schreiben von „sicherem“ JavaScript wird erleichtert
- künftige Entwicklungen von ECMAScript werden berücksichtigt

### Fehler sichtbar machen

Der Strict Mode macht aus einigen zuvor akzeptierten Fehlern tatsächliche Fehler. JavaScript wurde so gestaltet, dass es für Entwickler mit wenig Erfahrung leicht zugänglich ist. Deshalb haben manche Operationen, die einen Fehler auslösen sollten, eine andere Semantik. Das behebt bisweilen das unmittelbare Problem, kann aber später größere Probleme verursachen. Im Strict Mode werden solche Fehler sichtbar, damit sie erkannt und zeitnah behoben werden können.

#### Zuweisungen an nicht deklarierte Variablen

Der Strict Mode verhindert, dass versehentlich globale Variablen erstellt werden. Im sloppy mode erzeugt ein Tippfehler in einem Variablennamen bei einer Zuweisung eine neue Eigenschaft auf dem globalen Objekt, und der Code „funktioniert“ weiter. Im Strict Mode lösen Zuweisungen, die versehentlich globale Variablen erstellen würden, einen Fehler aus:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlgeschlagene Zuweisungen an Objekteigenschaften

Im Strict Mode lösen bestimmte Zuweisungen einen Fehler aus, statt stillschweigend fehlzuschlagen. Eine Zuweisung an eine Eigenschaft kann auf drei Arten fehlschlagen:

- Zuweisung an eine nicht beschreibbare Dateneigenschaft
- Zuweisung an eine Accessor-Eigenschaft, die nur einen Getter hat
- Zuweisung an eine neue Eigenschaft eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts

Beispielsweise ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im sloppy mode bewirkt eine Zuweisung an `NaN` nichts; die entwickelnde Person erhält keinen Hinweis auf den Fehler. Im Strict Mode löst die Zuweisung an `NaN` eine Ausnahme aus.

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

#### Fehlgeschlagenes Löschen von Objekteigenschaften

Im Strict Mode lösen Versuche, eine nicht konfigurierbare oder aus anderen Gründen nicht löschbare Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), einen Fehler aus. Das gilt beispielsweise, wenn ein [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler eines Proxys den Vorgang abfängt und `false` zurückgibt. Zuvor blieb ein solcher Versuch ohne Wirkung:

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der Strict Mode verbietet außerdem das Löschen einfacher Namen. `delete name` ist im Strict Mode ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft bezeichnet, stellen Sie [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voran, um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Im Strict Mode müssen die Namen von Funktionsparametern eindeutig sein. Im sloppy mode verdeckt das letzte Argument mit einem mehrfach verwendeten Namen die vorherigen Argumente desselben Namens. Diese bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, sind also nicht völlig unerreichbar. Dennoch ist dieses Verdecken wenig sinnvoll und wahrscheinlich unerwünscht – beispielsweise kann es einen Tippfehler verbergen. Daher sind doppelte Parameternamen im Strict Mode ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Auch außerhalb des Strict Mode sind doppelte Parameternamen ein Syntaxfehler, wenn die Funktion einen Standardparameter, einen Rest-Parameter oder einen destrukturierten Parameter hat.

#### Veraltete Oktalliterale

Der Strict Mode [verbietet Oktalliterale mit vorangestellter `0`](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine Zahl wie `0644`, die mit `0` beginnt, als Oktalzahl interpretiert (`0644 === 420`), sofern alle Ziffern kleiner als 8 sind. Entwickler mit wenig Erfahrung nehmen manchmal an, eine führende Null habe keine semantische Bedeutung, und verwenden sie zur Ausrichtung von Zahlen – dabei ändert sie deren Wert! Diese Schreibweise für Oktalzahlen ist selten nützlich und kann versehentlich verwendet werden. Deshalb ist sie im Strict Mode ein Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Schreibweise für Oktalliterale verwendet das Präfix `0o`. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen wie `"\45"`, das `"%"` entspricht, können Zeichen über ihre Zeichen-Codenummern im erweiterten {{Glossary("ASCII", "ASCII")}} in oktaler Schreibweise darstellen. Im Strict Mode ist das ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Genauer gesagt darf auf `\` keine Dezimalziffer außer `0` folgen; auf `\0` darf keine Dezimalziffer folgen. Beispiele dafür sind `\9` und `\07`.

#### Setzen von Eigenschaften auf primitiven Werten

Der Strict Mode verbietet es, Eigenschaften auf {{Glossary("Primitive", "primitiven")}} Werten zu setzen. Beim Zugriff auf eine Eigenschaft eines primitiven Werts wird implizit ein nicht beobachtbares Wrapper-Objekt erstellt. Im sloppy mode wird das Setzen einer Eigenschaft daher ignoriert und hat keine Wirkung. Im Strict Mode wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen galten im Strict Mode früher als {{jsxref("SyntaxError")}}. Mit der Einführung [berechneter Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), durch die doppelte Namen zur Laufzeit entstehen können, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Es gilt stets als abwärtskompatibel, wenn Code, der zuvor einen Fehler auslöste, keinen Fehler mehr auslöst. Dass die Sprache Fehler konsequent meldet, hat hier einen Vorteil: Es schafft Spielraum für künftige semantische Änderungen.

### Vereinfachung der Gültigkeitsbereichsverwaltung

Der Strict Mode vereinfacht die Zuordnung von Variablennamen zu bestimmten Variablendefinitionen im Code. Viele Compiler-Optimierungen setzen voraus, dass sich sagen lässt, Variable _X_ sei an _dieser_ Stelle gespeichert. Für die vollständige Optimierung von JavaScript-Code ist das entscheidend. In JavaScript lässt sich diese grundlegende Zuordnung zwischen Namen und Variablendefinition im Code manchmal erst zur Laufzeit ermitteln. Der Strict Mode beseitigt die meisten dieser Fälle, sodass Compiler Code im Strict Mode besser optimieren können.

#### Entfernung der with-Anweisung

Der Strict Mode verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` besteht darin, dass ein Name innerhalb des Blocks zur Laufzeit entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen in einem umgebenden – möglicherweise sogar globalen – Gültigkeitsbereich zugeordnet werden kann. Welche Zuordnung gilt, lässt sich vorher nicht feststellen. Im Strict Mode ist `with` ein Syntaxfehler. So kann ein Name innerhalb von `with` zur Laufzeit nicht auf eine unbekannte Stelle verweisen:

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

Statt `with` können Sie das Objekt einer Variablen mit kurzem Namen zuweisen und anschließend über diese Variable auf die jeweilige Eigenschaft zugreifen.

#### Keine Variablen aus eval im umgebenden Gültigkeitsbereich

Im Strict Mode [führt `eval` keine neuen Variablen in den umgebenden Gültigkeitsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Gültigkeitsbereich ein. Das bedeutet, dass bei einer Funktion mit einem Aufruf von `eval` im Allgemeinen erst zur Laufzeit bestimmt werden kann, auf welche Definition ein Name verweist, sofern er kein Argument und keine lokale Variable bezeichnet. Schließlich könnte `eval` eine neue Variable eingeführt haben, die eine äußere Variable verdeckt. Im Strict Mode erstellt `eval` Variablen nur für den ausgewerteten Code. Somit kann `eval` nicht beeinflussen, ob ein Name auf eine äußere oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der an `eval()` übergebene String im Strict Mode ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Funktionsdeklarationen mit Block-Gültigkeitsbereich

Die JavaScript-Sprachspezifikation erlaubte von Anfang an keine Funktionsdeklarationen innerhalb von Blockanweisungen. Da diese Verwendung jedoch so naheliegend war, implementierten die meisten Browser sie als Syntaxerweiterung. Leider unterschieden sich die Implementierungen in ihrer Semantik, und es wurde unmöglich, sie in der Sprachspezifikation miteinander in Einklang zu bringen. Deshalb sind [Funktionsdeklarationen mit Block-Gültigkeitsbereich](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur im Strict Mode ausdrücklich spezifiziert – obwohl sie dort früher nicht erlaubt waren. Das Verhalten im sloppy mode unterscheidet sich weiterhin zwischen Browsern.

### Vereinfachung von eval und arguments

Der Strict Mode verringert das ungewöhnliche Sonderverhalten von [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Im sloppy mode weisen beide ein erhebliches Maß an Sonderverhalten auf: `eval` kann Bindungen hinzufügen oder entfernen und deren Werte ändern; `arguments` synchronisiert benannte Argumente mit seinen indizierten Eigenschaften. Der Strict Mode unternimmt wichtige Schritte, um `eval` und `arguments` eher wie Schlüsselwörter zu behandeln.

#### Bindung und Zuweisung von eval und arguments verhindern

Die Namen `eval` und `arguments` dürfen in der Sprachsyntax weder gebunden noch als Zuweisungsziel verwendet werden. Alle folgenden Versuche sind Syntaxfehler:

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

#### Keine Synchronisierung zwischen Parametern und arguments-Indizes

Code im Strict Mode synchronisiert die Indizes des `arguments`-Objekts nicht mit den jeweiligen Parameterbindungen. In einer Funktion im sloppy mode, deren erstes Argument `arg` heißt, ändert eine Zuweisung an `arg` auch `arguments[0]` und umgekehrt – es sei denn, es wurden keine Argumente übergeben oder `arguments[0]` wurde gelöscht. Bei Funktionen im Strict Mode speichert das `arguments`-Objekt die ursprünglich beim Aufruf übergebenen Argumente. `arguments[i]` folgt nicht dem Wert des entsprechenden benannten Arguments; ebenso folgt ein benanntes Argument nicht dem Wert im entsprechenden `arguments[i]`.

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

### JavaScript „sicherer“ machen

Der Strict Mode erleichtert das Schreiben von „sicherem“ JavaScript. Manche Websites ermöglichen es ihren Nutzern, JavaScript zu schreiben, das die Website _im Namen anderer Nutzer_ ausführt. JavaScript im Browser kann auf private Informationen der Nutzer zugreifen. Deshalb muss solcher Code vor der Ausführung teilweise umgewandelt werden, um den Zugriff auf verbotene Funktionen zu unterbinden. Wegen der Flexibilität von JavaScript ist das ohne zahlreiche Prüfungen zur Laufzeit praktisch unmöglich. Bestimmte Sprachfunktionen werden so häufig verwendet, dass Prüfungen zur Laufzeit erhebliche Leistungseinbußen verursachen. Einige Anpassungen im Strict Mode reduzieren den Bedarf an solchen Prüfungen erheblich – vorausgesetzt, von Nutzern eingereichter JavaScript-Code läuft im Strict Mode und wird auf eine bestimmte Weise aufgerufen.

#### Keine Ersetzung von this

Ein Wert, der einer Funktion im Strict Mode als `this` übergeben wird, wird nicht zwangsläufig in ein Objekt umgewandelt („boxed“). Bei einer Funktion im sloppy mode ist `this` immer ein Objekt: entweder das übergebene Objekt, wenn `this` einen Objektwert hat; der in ein Objekt umgewandelte Wert, wenn `this` ein primitiver Wert ist; oder das globale Objekt, wenn `this` `undefined` oder `null` ist. (Mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) können Sie einen bestimmten `this`-Wert festlegen.) Die automatische Umwandlung in ein Objekt kostet nicht nur Leistung. Das Offenlegen des globalen Objekts im Browser ist auch ein Sicherheitsrisiko, weil es Zugriff auf Funktionen bietet, die „sichere“ JavaScript-Umgebungen einschränken müssen. Bei einer Funktion im Strict Mode wird der angegebene `this`-Wert daher nicht in ein Objekt umgewandelt. Wird keiner angegeben, ist `this` `undefined` statt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Eigenschaften zur Untersuchung des Aufruf-Stacks

Im Strict Mode ist es nicht mehr möglich, den JavaScript-Aufruf-Stack auf diese Weise zu durchlaufen. Viele Implementierungen boten früher Erweiterungen, mit denen sich die aufrufende Funktion ermitteln ließ. Während eine Funktion `fun` ausgeführt wird, bezeichnet [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat. [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) bezeichnet das `arguments`-Objekt dieses Aufrufs von `fun`. Beide Erweiterungen sind für „sicheres“ JavaScript problematisch: Sie ermöglichen es „abgesichertem“ Code, auf „privilegierte“ Funktionen und deren möglicherweise nicht abgesicherte Argumente zuzugreifen. Befindet sich `fun` im Strict Mode, lösen sowohl `fun.caller` als auch `fun.arguments` beim Lesen oder Setzen einen Fehler aus:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode verweist `arguments.callee` auf die umgebende Funktion. Für diesen Anwendungsfall gibt es eine einfache Alternative: Geben Sie der umgebenden Funktion einen Namen. Außerdem erschwert `arguments.callee` Optimierungen wie das Inlining von Funktionen erheblich. Wenn auf `arguments.callee` zugegriffen wird, muss nämlich weiterhin ein Verweis auf die nicht inline eingefügte Funktion bereitgestellt werden können. Bei Funktionen im Strict Mode ist `arguments.callee` eine nicht löschbare Eigenschaft, die beim Lesen oder Setzen einen Fehler auslöst:

```js
"use strict";
function f() {
  return arguments.callee;
}
f(); // throws a TypeError
```

### JavaScript zukunftssicher machen

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden dürfen. Im Strict Mode sind mehr Namen reserviert als im sloppy mode. Einige werden bereits in der Sprache verwendet, andere sind für die Zukunft reserviert, um spätere Syntaxerweiterungen leichter implementieren zu können.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Umstellung auf den Strict Mode

Der Strict Mode wurde so gestaltet, dass eine schrittweise Umstellung möglich ist. Sie können jede Datei einzeln umstellen – oder sogar einzelne Funktionen innerhalb des Codes.

Um eine Codebasis auf den Strict Mode umzustellen, fügen Sie zunächst `"use strict"` zu einem Teil des Quellcodes hinzu. Beheben Sie anschließend alle Fehler bei der Ausführung und achten Sie dabei auf semantische Unterschiede.

### Syntaxfehler

Nach dem Hinzufügen von `'use strict';` lösen die folgenden Fälle einen {{jsxref("SyntaxError")}} aus, bevor das Skript ausgeführt wird:

- Oktale Syntax `const n = 023;`
- eine [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- die Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) mit einem Variablennamen: `delete myVariable`;
- die Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablenname oder Name eines Funktionsparameters
- die Verwendung eines der zusätzlich [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words), die für künftige Sprachfunktionen vorgesehen sind: `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- die Deklaration zweier Funktionsparameter mit demselben Namen: `function f(a, b, b) {}`
- die doppelte Deklaration eines Eigenschaftsnamens in einem Objektliteral: `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind hilfreich, weil sie tatsächliche Fehler oder schlechte Praktiken aufdecken. Sie treten vor der Ausführung auf und sind daher leicht zu erkennen, sofern der Code von der Laufzeitumgebung geparst wird.

### Neue Fehler zur Laufzeit

JavaScript schlug früher in Situationen stillschweigend fehl, in denen eine Operation einen Fehler auslösen sollte. Der Strict Mode löst in solchen Fällen einen Fehler aus. Wenn Ihre Codebasis solche Fälle enthält, müssen Sie durch Tests sicherstellen, dass nichts beschädigt wird. Sie können auf Ebene einzelner Funktionen nach solchen Fehlern suchen.

- Eine Zuweisung an eine nicht deklarierte Variable löst einen {{jsxref("ReferenceError")}} aus. Früher wurde dadurch eine Eigenschaft auf dem globalen Objekt gesetzt, was selten dem beabsichtigten Verhalten entspricht. Wenn Sie dem globalen Objekt tatsächlich einen Wert zuweisen möchten, setzen Sie ihn ausdrücklich als Eigenschaft von `globalThis`.
- Eine fehlgeschlagene Zuweisung an eine Objekteigenschaft, beispielsweise weil sie schreibgeschützt ist, löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde sie stillschweigend fehlschlagen.
- Das Löschen einer nicht löschbaren Eigenschaft löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde der Versuch stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) löst einen {{jsxref("TypeError")}} aus, wenn sich die Funktion im Strict Mode befindet. Wenn Sie `arguments.callee` für einen rekursiven Funktionsaufruf verwenden, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtil. Eine Testsuite erfasst sie möglicherweise nicht. Wahrscheinlich müssen Sie Ihre Codebasis sorgfältig prüfen, um sicherzustellen, dass sie die Semantik Ihres Codes nicht beeinflussen. Diese Prüfung lässt sich jedoch schrittweise für einzelne Funktionen durchführen.

- `this`
  - : Im sloppy mode wird bei Funktionsaufrufen wie `f()` das globale Objekt als `this`-Wert übergeben. Im Strict Mode ist `this` stattdessen `undefined`. Wurde eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen, wurde ein primitiver Wert in ein Objekt umgewandelt; bei `undefined` und `null` wurde das globale Objekt verwendet. Im Strict Mode wird der Wert ohne Umwandlung oder Ersetzung direkt übergeben.
- `arguments`
  - : Im sloppy mode ändert das Ändern eines Werts im `arguments`-Objekt auch das entsprechende benannte Argument. Das erschwerte JavaScript-Engines Optimierungen und machte Code schwerer lesbar und verständlich. Im Strict Mode wird das `arguments`-Objekt mit denselben Werten wie die benannten Argumente erstellt und initialisiert. Spätere Änderungen am `arguments`-Objekt oder an den benannten Argumenten werden jedoch nicht gegenseitig übernommen.
- `eval`
  - : In Code im Strict Mode erstellt `eval` keine neue Variable im Gültigkeitsbereich, aus dem es aufgerufen wurde. Außerdem wird der String im Strict Mode natürlich nach dessen Regeln ausgewertet. Um sicherzustellen, dass nichts beschädigt wird, sind gründliche Tests erforderlich. Eine weitere pragmatische Lösung besteht darin, `eval` nicht zu verwenden, wenn es nicht wirklich nötig ist.
- Funktionsdeklarationen mit Block-Gültigkeitsbereich
  - : Im sloppy mode kann eine Funktionsdeklaration innerhalb eines Blocks auch außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im Strict Mode ist sie nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
