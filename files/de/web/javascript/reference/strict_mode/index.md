---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 63fee14f8c716fb79d2b9a1bb95b7ebc95c21c58
---

> [!NOTE]
> Manchmal wird der Standard-Non-Strict-Modus als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, nur für den Fall.

Der Strict-Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden und dabei implizit aus dem "{{Glossary("Sloppy_mode", "sloppy mode")}}" auszusteigen. Der Strict-Modus ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Strict-Modus-Code und Non-Strict-Modus-Code können koexistieren, sodass Skripte schrittweise in den Strict-Modus wechseln können.

Der Strict-Modus führt mehrere Änderungen an den normalen JavaScript-Semantiken durch:

1. Er eliminiert einige stille JavaScript-Fehler, indem er sie zu Fehlern macht.
2. Er behebt Fehler, die es schwierig machen, dass JavaScript-Engines Optimierungen vornehmen: Strict-Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im Strict-Modus ist.
3. Er verbietet einige Syntaxen, die voraussichtlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivieren des Strict-Modus

Der Strict-Modus gilt für _komplette Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn in solchen Kontexten anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler-](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute, Zeichenketten, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und verwandte Funktionen übergeben werden, sind entweder Funktionskörper oder komplette Skripte, und der Strict-Modus in ihnen wird wie erwartet aktiviert.

### Strict-Modus für Skripte

Um den Strict-Modus für ein komplettes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strict-Modus für Funktionen

Ebenso setzt man die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen, um den Strict-Modus für eine Funktion zu aktivieren.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [Rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strict-Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im Strict-Modus, ohne dass eine Anweisung zur Initiierung erforderlich ist.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strict-Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind Strict-Modus-Code, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

## Änderungen im Strict-Modus

Der Strict-Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Die Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Fehler in Fehler umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die die Auflösung von Variablenreferenzen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen zur Vorbereitung der zukünftigen ECMAScript-Entwicklung.

### Umwandlung von Fehlern in Fehler

Der Strict-Modus wandelt einige zuvor akzeptierte Fehler in tatsächliche Fehler um. JavaScript wurde so konzipiert, dass es für Anfänger leicht zugänglich ist, weshalb es manchmal Operationen zulässt, die eigentlich Fehler sein sollten, und stattdessen keine Fehler-Semantik verwendet. Manchmal löst dies das unmittelbare Problem, aber manchmal führt dies in der Zukunft zu schlimmeren Problemen. Der Strict-Modus behandelt diese Fehler als Fehler, sodass sie entdeckt und sofort behoben werden.

#### Zuordnung zu nicht-deklarierten Variablen

Der Strict-Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im Sloppy-Modus erzeugt das falsche Schreiben einer Variablen in einer Zuweisung eine neue Eigenschaft im globalen Objekt und "funktioniert" weiterhin. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im Strict-Modus einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlgeschlagene Zuweisung zu Objekteigenschaften

Im Strict-Modus werfen bestimmte Zuweisungen Fehler, anstatt still zu scheitern. Es gibt drei Möglichkeiten, wie eine Eigenschaftszuweisung scheitern kann:

- Zuweisung zu einer nicht-veränderlichen Daten-Eigenschaft
- Zuweisung zu einer nur-lesbaren Accessor-Eigenschaft
- Zuweisung zu einer neuen Eigenschaft auf einem [nicht-erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht-schreibbare globale Variable. Im Sloppy-Modus tut die Zuweisung zu `NaN` nichts; der Entwickler erhält kein Feedback über das Scheitern. Im Strict-Modus wirft die Zuweisung zu `NaN` eine Ausnahme.

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

Versuche, eine nicht-konfigurierbare oder anderweitig nicht löschbare (z. B. wird sie von einem Proxy abgefangen, dessen [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler `false` zurückgibt) Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), werfen im Strict-Modus einen Fehler (wo der Versuch vorher keinen Effekt hatte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der Strict-Modus verbietet auch das Löschen von einfachen Namen. `delete name` ist im Strict-Modus ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, präfixieren Sie ihn mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der Strict-Modus fordert, dass Funktionsparameter-Namen eindeutig sind. Im Sloppy-Modus verbirgt das letzte doppelte Argument vorherige gleichnamige Argumente. Diese vorherigen Argumente sind über `arguments`(/de/docs/Web/JavaScript/Reference/Functions/arguments) weiterhin zugänglich und nicht vollständig unzugänglich. Dennoch ergibt dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte z. B. einen Tippfehler verbergen), daher ist es im Strict-Modus ein Syntaxfehler, doppelte Argumentnamen zu haben:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch im Non-Strict-Modus ein Syntaxfehler, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Rest-Parameter oder destruierte Parameter hat.

#### Legacy Oktalliterale

Der Strict-Modus [verbot ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im Sloppy-Modus wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Anfänger glauben manchmal, dass ein Vorzeichen der Null keine semantische Bedeutung hat, sodass sie es als Ausrichtungsgerät verwenden könnten - aber dies ändert die Bedeutung der Zahl! Eine Vorzeichen-Null-Syntax für das Oktal ist selten nützlich und kann versehentlich verwendet werden, daher macht der Strict-Modus dies zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Der standardisierte Weg, Oktalliterale zu kennzeichnen, ist das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, die dem `"%"` entsprechen, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichen-Code-Nummern im Oktal darzustellen. Im Strict-Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler ist es nicht erlaubt, `\` gefolgt von einer Dezimalziffer, die nicht `0` ist, oder `\0` gefolgt von einer Dezimalziffer zu haben; zum Beispiel `\9` und `\07`.

#### Setzen von Eigenschaften auf primitive Werte

Der Strict-Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Das Zugreifen auf eine Eigenschaft auf einem primitiven Wert erzeugt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, so dass das Setzen von Eigenschaften im Sloppy-Modus ignoriert wird (keine Operation). Im Strict-Modus wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden einst als {{jsxref("SyntaxError")}} im Strict-Modus betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die eine Duplizierung zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der früher Fehler verursacht hat, nicht mehr als Fehler zu behandeln, wird immer als rückwärtskompatibel betrachtet. Dies ist ein guter Teil der Sprache, die strikt in Bezug auf das Werfen von Fehlern ist: Es schafft Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scope-Managements

Der Strict-Modus vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugewiesen werden. Viele Compiler-Optimierungen beruhen darauf, dass sie sagen können, dass die Variable _X_ an diesem Ort gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht manchmal diese grundlegende Zuordnung von Namen zu Variablendefinitionen im Code bis zur Laufzeit unmöglich. Der Strict-Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler den Strict-Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der Strict-Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name innerhalb des Blocks entweder auf eine Eigenschaft des übergebenen Objekts oder auf eine Variable in umgebenden (oder sogar globalen) Scope zur Laufzeit abgebildet werden könnte; es ist vorher nicht möglich zu wissen, welches. Der Strict-Modus macht `with` zu einem Syntaxfehler, sodass es keine Chance gibt, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die Alternative, das Objekt einer kurzen Namenvariable zuzuweisen und die entsprechende Eigenschaft auf dieser Variablen zuzugreifen, steht bereit, `with` zu ersetzen.

#### Nicht-leckendes eval

Im Strict-Modus {{Glossary("OCaml#new_vars_created_by_strict_mode_eval_code_are_local_to_that_code_only/", "fügt `eval` keine neuen Variablen in den umgebenden Scope ein")}}. Im Sloppy-Modus führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Scope ein. Dies bedeutet, dass in einer Funktion, die einen Aufruf zu `eval` enthält, im Allgemeinen jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verbergen würde). Im Strict-Modus erstellt `eval` nur Variablen für den Code, der ausgewertet wird, sodass `eval` nicht beeinflusst, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob die Zeichenfolge, die an `eval()` übergeben wird, im Strict-Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-scope-Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte seit ihrem Beginn keine Funktionsdeklarationen zugelassen, die in Block-Anweisungen verschachtelt sind. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringt. Daher sind [Block-scope-Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im Strict-Modus spezifiziert (während sie im Strict-Modus früher nicht erlaubt waren), während das Sloppy-Modus-Verhalten weiterhin unter den Browsern divergent bleibt.

### Vereinfachung von eval und arguments

Der Strict-Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten im Sloppy-Modus eine beträchtliche Menge an magischem Verhalten: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, zur Synchronisierung benannter Argumente mit seinen indizierten Eigenschaften. Der Strict-Modus unternimmt große Schritte hin zur Behandlung von `eval` und `arguments` als Schlüsselwörter.

#### Verhindern der Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können in der Sprachsyntax nicht gebunden oder zugewiesen werden. Alle Versuche in dieser Richtung sind Syntaxfehler:

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

Der Strict-Modus-Code synchronisiert nicht die Indizes des `arguments`-Objekts mit jeder Parameterbindung. In einer Sloppy-Modus-Funktion, deren erstes Argument `arg` ist, setzt `arg` auch `arguments[0]`, und umgekehrt (es sei denn, keine Argumente wurden bereitgestellt oder `arguments[0]` wurde gelöscht). `arguments`-Objekte für Funktionen im Strict-Modus speichern die ursprünglichen Argumente, wenn die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

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

### "Absichern" von JavaScript

Der Strict-Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Webseiten bieten jetzt Möglichkeiten an, wie Benutzer JavaScript schreiben können, das von der Webseite im Namen anderer Benutzer ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, daher muss solches JavaScript teilweise transformiert werden, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalitäten zu zensieren. JavaScripts Flexibilität macht es effektiv unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeitprüfungen erhebliche Leistungskosten hat. Einige Strict-Modus-Änderungen, gepaart mit der Anforderung, dass benutzereingereichtes JavaScript Strict-Modus-Code sein muss und dass es in einer bestimmten Weise aufgerufen wird, reduziert den Bedarf an diesen Laufzeitprüfungen erheblich.

#### Keine `this`-Substitution

Der im Strict-Modus an eine Funktion übergebene `this`-Wert wird nicht dazu gezwungen, ein Objekt zu sein (sogenanntes "Boxen"). Für eine Sloppy-Modus-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektwertigen `this` aufgerufen wird; oder der "geboxte" Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um einen bestimmten `this` anzugeben.) Nicht nur ist das automatische Boxen ein Leistungskostenfaktor, sondern das Offenlegen des globalen Objekts in Browsern stellt eine Sicherheitsgefährdung dar, da das globale Objekt Zugriff auf Funktionalitäten bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für eine Funktion im Strict-Modus das angegebene `this` nicht in ein Objekt geboxet, und wenn nicht angegeben wird `this` stattdessen `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Stack-Walking-Eigenschaften

Im Strict-Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen implementierten früher einige Erweiterungsfunktionen, die es ermöglichen, den stromaufwärts liegenden Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) ist das `arguments` für diese Ausführung von `fun`. Beide Erweiterungen sind problematisch für sicheres JavaScript, da sie es ermöglichen, dass "gesicherter" Code auf "privilegierte" Funktionen und deren (möglicherweise ungesicherte) Argumente zugreifen kann. Wenn `fun` im Strict-Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen einen Fehler werfen.

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im Sloppy-Modus bezieht sich `arguments.callee` auf die umschließende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umschließende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie das Inlining von Funktionen, da es möglich gemacht werden muss, einen Verweis auf die nicht-inline-fähige Funktion bereitzustellen, wenn `arguments.callee` zugegriffen wird. `arguments.callee` für Funktionen im Strict-Modus ist eine nicht löschbare Eigenschaft, die beim Setzen oder Abrufen einen Fehler wirft:

```js
"use strict";
function f() {
  return arguments.callee;
}
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Im Strict-Modus sind einige Namen reserviert, die im Sloppy-Modus nicht reserviert sind, von denen einige bereits in der Sprache verwendet werden, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter implementierbar zu machen.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang in den Strict-Modus

Der Strict-Modus wurde so konzipiert, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jedes einzelne Datei individuell zu ändern und sogar Code bis zur Funktion granular in den Strict-Modus zu überführen.

Sie können eine Codebasis in den Strict-Modus migrieren, indem Sie zunächst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden die folgenden Fälle einen {{jsxref("SyntaxError")}} werfen, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Die Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) bei einem Variablennamen `delete myVariable`;
- Die Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variable oder Funktionsargumentname
- Die Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Vorbereitung auf zukünftige Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, und `yield`
- Die Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Die Deklaration desselben Eigenschaftsnamen zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie klare Fehler oder schlechte Praktiken offenlegen. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code von der Laufzeitumgebung geparst wird.

### Neue Laufzeitfehler

JavaScript versagte früher stillschweigend in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Der Strict-Modus wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, wird ein Test notwendig sein, um sicherzustellen, dass nichts kaputt geht. Sie können solche Fehler auf Funktionsebene ausfiltern.

- Die Zuweisung zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Dies stellte früher eine Eigenschaft auf dem globalen Objekt ein, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert auf dem globalen Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft auf `globalThis` zu.
- Das Scheitern bei der Zuweisung zu einer Eigenschaft eines Objekts (z. B. ist sie schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies stillschweigend scheitern.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies stillschweigend scheitern.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller), oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im Strict-Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Testreihe diese Art von geringfügigen Unterschieden nicht erfasst. Eine gründliche Überprüfung Ihrer Codebasis wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese gründliche Überprüfung schrittweise auf Funktionsebene durchgeführt werden.

- `this`
  - : Im Sloppy-Modus würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert weitergeben. Im Strict-Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, würde der Wert in ein Objekt geboxet werden (oder das globale Objekt für `undefined` und `null`). Im Strict-Modus wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im Sloppy-Modus würde das Ändern eines Werts im `arguments`-Objekt das entsprechende benannte Argument ändern. Dies machte Optimierungen für JavaScript-Engines kompliziert und den Code schwerer zu lesen/verstehen. Im Strict-Modus wird das `arguments`-Objekt erstellt und mit den gleichen Werten initialisiert wie die benannten Argumente, aber Änderungen am `arguments`-Objekt oder den benannten Argumenten werden nicht gegenseitig widergespiegelt.
- `eval`
  - : Im Strict-Modus-Code erstellt `eval` keine neue Variable im Scope, von dem aus es aufgerufen wurde. Natürlich wird im Strict-Modus die Zeichenfolge mit Strict-Modus-Regeln ausgewertet. Eine gründliche Testung wird erforderlich sein, um sicherzustellen, dass nichts kaputtgeht. Nicht-verwenden von `eval`, falls Sie es nicht wirklich benötigen, könnte eine andere pragmatische Lösung sein.
- Block-scoped-Funktionsdeklarationen
  - : Im Sloppy-Modus kann eine Funktionsdeklaration in einem Block außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im Strict-Modus ist eine Funktionsdeklaration in einem Block nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
