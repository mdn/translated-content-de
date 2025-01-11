---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 99a44005f9d90b831526e9d0ffd7803cdafa4a72
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standards-Modus ohne strikte Regeln als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber Sie sollten sich dessen bewusst sein, falls es Ihnen begegnet.

Der strikte Modus in JavaScript ist eine Methode, um sich für eine eingeschränkte Variante von JavaScript zu entscheiden, und gleichzeitig den "{{Glossary("Sloppy_mode", "sloppy mode")}}" auszuschließen. Der strikte Modus ist nicht nur ein Teilbereich: Er hat _absichtlich_ eine andere Semantik als normaler Code. Code im strikten Modus und im normalen Modus können nebeneinander existieren, sodass Skripte schrittweise in den strikten Modus wechseln können.

Der strikte Modus führt mehrere Änderungen in der Semantik von normalem JavaScript ein:

1. Beseitigt einige stille JavaScript-Fehler, indem diese in Fehlermeldungen umgewandelt werden.
2. Behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Code im strikten Modus kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strikten Modus ist.
3. Verbietet einige Syntaxen, die wahrscheinlich in zukünftigen ECMAScript-Versionen definiert werden.

## Strikten Modus aktivieren

Der strikte Modus gilt für _gesamte Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}` Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, bewirkt nichts. Code in [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, Zeichenfolgen, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und verwandte Funktionen übergeben werden, sind entweder Funktionskörper oder ganze Skripte, und das Aktivieren des strikten Modus in ihnen funktioniert wie erwartet.

### Strikten Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikten Modus für Funktionen

Ebenso müssen Sie, um den strikten Modus für eine Funktion zu aktivieren, die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen setzen.

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

Die `"use strict"`-Direktive kann nur auf den Funktionskörper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strikten Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strikten Modus, ohne dass eine Anweisung erforderlich ist, um ihn zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikten Modus für Klassen

Alle Teile des Rumpfes einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) befinden sich im strikten Modus, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der strikte Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Die Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Fehler in Fehler umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie Variablenreferenzen aufgelöst werden
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehler in Fehler umwandeln

Der strikte Modus macht einige zuvor akzeptierte Fehler zu Fehlern. JavaScript wurde entwickelt, um einfach für unerfahrene Entwickler zu sein, und manchmal gibt es Operationen, die Fehler sein sollten, eine nicht-fehlertolerante Semantik. Manchmal behebt dies das unmittelbare Problem, aber manchmal führt dies zu noch schlimmeren Problemen in der Zukunft. Der strikte Modus behandelt diese Fehler als Fehler, damit sie entdeckt und schnell behoben werden.

#### Zuweisung zu nicht deklarierten Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy mode führt das Vertippen einer Variablen in einer Zuweisung zur Erstellung einer neuen Eigenschaft auf dem globalen Objekt und funktioniert weiterhin "tadellos". Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strikten Modus einen Fehler:

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

Der strikte Modus macht Zuweisungen, die sonst stumm scheitern würden, zu einer Ausnahme. Es gibt drei Möglichkeiten, dass eine Eigenschaftszuweisung fehlschlägt:

- Zuweisung an eine nicht beschreibbare Dateneigenschaft
- Zuweisung an eine nur lesbare Accessor-Eigenschaft
- Zuweisung zu einer neuen Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im sloppy mode bringt die Zuweisung zu `NaN` nichts; der Entwickler erhält kein Feedback über das Scheitern. Im strikten Modus wirft die Zuweisung zu `NaN` eine Ausnahme.

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

#### Scheitern beim Löschen von Objekteigenschaften

Versuche, eine nicht konfigurierbare oder anderweitig nicht löschbare Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete) (zum Beispiel wird sie von einem Proxy abgefangen, dessen [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler `false` zurückgibt), werfen im strikten Modus einen Fehler, wo der Versuch zuvor keine Wirkung gehabt hätte:

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der strikte Modus verbietet auch das Löschen einfacher Namen. `delete name` im strikten Modus ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, verwenden Sie `globalThis` als Präfix, um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus erfordert, dass die Parameternamen von Funktionen eindeutig sind. Im sloppy mode verbirgt das letzte doppelt vorhandene Argument frühere identisch benannte Argumente. Diese vorherigen Argumente sind über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) weiterhin zugänglich, daher sind sie nicht vollständig unzugänglich. Dennoch ist dieses Verbergen kaum sinnvoll und wahrscheinlich unerwünscht (es könnte zum Beispiel einen Tippfehler verbergen), sodass im strikten Modus doppelte Argumentnamen ein Syntaxfehler sind:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im nicht-strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder destrukturierten Parameter hat.

#### Legacy-Oktal-Literale

Der strikte Modus [verbietet eine `0`-präfixierte Oktalzahl](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl (`0644 === 420`) interpretiert, wenn alle Ziffern kleiner als 8 sind. Unerfahrene Entwickler glauben manchmal, dass ein führendes Null-Präfix keine semantische Bedeutung hat, sodass sie es möglicherweise als Ausrichtungsgerät verwenden — aber das ändert die Bedeutung der Zahl! Eine führende Null-Syntax für die Oktalzahl ist selten nützlich und kann irrtümlich verwendet werden, sodass der strikte Modus daraus einen Syntaxfehler macht:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Methode zur Darstellung von Oktalzahlen ist das Präfix `0o`. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktalescape-Sequenzen wie `"\45"`, was gleichbedeutend ist mit `"%"`, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodenummern im Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formell ist es nicht erlaubt, dass auf `\` eine dezimale Ziffer folgt, die nicht `0` ist, oder `\0`, gefolgt von einer dezimalen Ziffer; zum Beispiel `\9` und `\07`.

#### Eigenschaften bei primitiven Werten setzen

Der strikte Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Das Zugreifen auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im sloppy mode das Setzen von Eigenschaften ignoriert wird (no-op). Im strikten Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden im strikten Modus früher als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die eine Duplizierung zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der früher zu Fehlern führte, zur Nicht-Fehler zu machen, gilt immer als rückwärtskompatibel. Dies ist ein Vorteil der Sprache, wenn sie strikt ist in Bezug auf das Auslösen von Fehlern: es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Gültigkeitsbereichs-Managements

Der strikte Modus vereinfacht, wie Variablennamen auf bestimmte Variablen-Definitionen im Code abgebildet werden. Viele Compiler-Optimierungen hängen davon ab, dass gesagt werden kann, dass Variable _X_ in _dieser_ Position gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht diese grundlegende Zuordnung von Namen zur Variablen-Definition im Code manchmal erst zur Laufzeit möglich. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, sodass der Compiler den strikten Modus-Code besser optimieren kann.

#### Entfernen der with-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name im Block entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen im umgebenden (oder sogar globalen) Gültigkeitsbereich zur Laufzeit zugeordnet werden kann; es ist vorher nicht möglich zu wissen, welche. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Speicherort verweist:

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

Die Alternative, das Objekt einer kurzen Namen-Variable zuzuweisen und dann auf die entsprechende Eigenschaft dieser Variablen zuzugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht-leckendes eval

Im strikten Modus [führt `eval` keine neuen Variablen in den umgebenden Gültigkeitsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode führt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder globalen Gültigkeitsbereich ein. Dies bedeutet, dass in einer Funktion, die einen Aufruf zu `eval` enthält, im Allgemeinen jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (da dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verdecken würde). Im strikten Modus erstellt `eval` Variablen nur für den evaluierten Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der an `eval()` übergebene String im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Funktionsdeklarationen mit Blockscope

Die JavaScript-Sprachspezifikation hatte seit ihrem Beginn keine Funktionsdeklarationen erlaubt, die in Blockanweisungen verschachtelt sind. Da dies jedoch sehr intuitiv war, implementierten es die meisten Browser als Erweiterungsgrammatik. Leider divergierten die Implementierungssemantiken und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringt. Daher sind [blockbezogene Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im strikten Modus spezifiziert (während sie im strikten Modus einmal untersagt waren), während sich das Verhalten im sloppy mode weiterhin zwischen den Browsern unterscheidet.

### Vereinfachung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger merkwürdig magisch. Beide beinhalten im sloppy mode eine beträchtliche Menge an magischem Verhalten: `eval` zum Hinzufügen oder Entfernen von Bindungen und zum Ändern von Wertebindungen, und `arguments` die Synchronisation von benannten Argumenten mit seinen indizierten Eigenschaften. Der strikte Modus macht große Fortschritte bei der Behandlung von `eval` und `arguments` als Schlüsselwörter.

#### Verhindern der Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können nicht in der Sprachsyntax gebunden oder zugewiesen werden. Alle diese Versuche führen zu Syntaxfehlern:

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

#### Keine Synchronisation zwischen Parameter- und Argumentindizes

Im strikten Modus wird die Indizierung des `arguments`-Objekts nicht mit jeder Parameterbindung synchronisiert. In einer sloppy Modus-Funktion, deren erstes Argument `arg` ist, bedeutet das Setzen von `arg` auch, dass `arguments[0]` gesetzt wird und umgekehrt (sofern keine Argumente bereitgestellt wurden oder `arguments[0]` gelöscht wurde). `arguments`-Objekte für strikten Modus-Funktionen speichern die ursprünglichen Argumente beim Aufruf der Funktion. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert in `arguments[i]`.

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

### "Absicherung" von JavaScript

Der strikte Modus erleichtert es, "sicheres" JavaScript zu schreiben. Einige Websites bieten mittlerweile Möglichkeiten für Benutzer, JavaScript zu schreiben, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf persönliche Informationen des Benutzers zugreifen, daher muss solches JavaScript vor der Ausführung teilweise transformiert werden, um den Zugriff auf verbotene Funktionen zu unterdrücken. Die Flexibilität von JavaScript macht es praktisch unmöglich, dies ohne viele Laufzeitüberprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass dies eine erhebliche Leistungskosten hat. Einige Verschärfungen im strikten Modus, sowie die Anforderung, dass von Benutzern bereitgestelltes JavaScript im strikten Modus sein und auf eine bestimmte Weise aufgerufen werden muss, reduzieren erheblich den Bedarf an diesen Laufzeitüberprüfungen.

#### Kein this-Ersatz

Der im strikten Modus an eine Funktion übergebene Wert `this` wird nicht zu einem Objekt gezwungen (auch als "boxing" bekannt). Bei einer Funktion im sloppy mode ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn eine Objektwertige `this` übergeben ist; oder der geboxte Wert von `this`, wenn ein primitiver Wert als `this` übergeben ist; oder das globale Objekt, wenn `undefined` oder `null` als `this` übergeben ist. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Boxing ein Leistungskostenfaktor, das Aussetzen des globalen Objekts in Browsern ist ein Sicherheitsrisiko, da das globale Objekt Zugang zu Funktionen bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für eine Funktion im strikten Modus das angegebene `this` nicht in ein Objekt geboxed, und falls nicht angegeben, ist `this` `undefined`, anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchwandern". Viele Implementierungen haben einige Erweiterungsfunktionen implementiert, die es ermöglichen, den Anrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diese Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie es ermöglichen, dass "gesicherte" Codes auf "privilegierte" Funktionen und deren (möglicherweise unsicheren) Argumente zugreifen. Wenn `fun` im strikten Modus ist, werden sowohl `fun.caller` als auch `fun.arguments` zu nicht löschbaren Eigenschaften, die einen Fehler werfen, wenn sie gesetzt oder abgerufen werden:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Mehr noch, `arguments.callee` behindert Optimierungen erheblich wie das Inlining von Funktionen, da es möglich gemacht werden muss, eine Referenz auf die nicht-inline Funktion bereitzustellen, wenn auf `arguments.callee` zugegriffen wird. `arguments.callee` für strikte Modus-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler wirft, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Für die Zukunftssicherheit von JavaScript sorgen

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Kennzeichnungen, die nicht als Variablennamen verwendet werden können. Der strikte Modus reserviert einige weitere Namen als der sloppy mode reserviert, wobei einige davon bereits in der Sprache verwendet werden und einige von denen für die Zukunft reserviert sind, um zukünftige Syntaxerweiterungen einfacher umsetzbar zu machen.

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

Der strikte Modus wurde so konzipiert, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und sogar den Code bis auf die Funktionsebene in den strikten Modus zu überführen.

Sie können einen Codebestand in den strikten Modus migrieren, indem Sie zuerst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Wenn Sie `'use strict';` hinzufügen, werfen die folgenden Fälle einen {{jsxref("SyntaxError")}}, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (als Vorbereitung für zukünftige Sprachmerkmale): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklaration zweier Funktionsparameter mit demselben Namen `function f(a, b, b) {}`
- Doppelte Deklaration eines Eigenschaftsnamens in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, da sie ganz normale Fehler oder schlechte Praktiken offenbaren. Sie treten auf, bevor der Code ausgeführt wird, also sind sie leicht entdeckbar, solange der Code vom Runtime-Parser analysiert wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher stumm in Kontexten, in denen das, was gemacht wurde, ein Fehler sein sollte. Der strikte Modus wirft in solchen Fällen Fehler. Wenn Ihr Codebestand solche Fälle enthält, müssen Tests durchgeführt werden, um sicherzustellen, dass nichts kaputt geht. Sie können solche Fehler auf der Ebene der Funktion analysieren.

- Zuweisung zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Dies setze früher eine Eigenschaft auf dem globalen Objekt, was selten der beabsichtigte Effekt ist. Wenn Sie wirklich einen Wert auf dem globalen Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft auf `globalThis` zu.
- Scheitern bei der Zuweisung zu einer Eigenschaft eines Objekts (z. B. ist dieses schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im sloppy mode würde dies still scheitern.
- Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy mode würde dies still scheitern.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Test-Suite diese Art von subtilen Unterschieden nicht erfasst. Eine sorgfältige Überprüfung Ihres Codebestands wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise auf Funktionsebene erfolgen.

- `this`
  - : Im sloppy mode würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde und der Wert ein primitiver Wert war, wurde dieser in ein Objekt (oder das globale Objekt für `undefined` und `null`) geboxed. Im strikten Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy mode führt das Ändern eines Wertes im `arguments`-Objekt zu einer Änderung des entsprechenden benannten Arguments. Dies machte Optimierungen für die JavaScript Engine kompliziert und den Code schwerer lesbar/verstehbar. Im strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen weder am `arguments`-Objekt noch an den benannten Argumenten werden wechselseitig widergespiegelt.
- `eval`
  - : Im strikten Modus erstellt `eval` keine neue Variable im Gültigkeitsbereich, von welchem es aufgerufen wurde. Ebenso wird im strikten Modus der String strikt ausgewertet. Umfassendes Testen wird notwendig sein, um sicherzustellen, dass nichts kaputtgeht. Die Nichtverwendung von eval, wenn Sie es wirklich nicht benötigen, könnte eine andere pragmatische Lösung sein.
- Block-scoped Funktionsdeklarationen
  - : Im sloppy mode kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
