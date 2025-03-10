---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus, nicht-strikter Modus, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber es ist gut, ihn zu kennen, falls es vorkommt.

Der strikte Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden, indem man sich implizit gegen den "{{Glossary("Sloppy_mode", "sloppy mode")}}" entscheidet. Der strikte Modus ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Strikter Modus-Code und nicht-strikter Modus-Code können nebeneinander bestehen, sodass Skripte schrittweise in den strikten Modus übergehen können.

Der strikte Modus bewirkt mehrere Änderungen an den normalen JavaScript-Semantiken:

1. Er beseitigt einige stille JavaScript-Fehler, indem diese in Fehler umgewandelt werden.
2. Er behebt Fehler, die es den JavaScript-Engines erschweren, Optimierungen vorzunehmen: Code im strikten Modus kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strikten Modus ist.
3. Er verbietet einige Syntaxen, die möglicherweise in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivierung des strikten Modus

Der strikte Modus gilt für _ganze Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, bewirkt nichts. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, Zeichenfolgen, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und verwandte Funktionen übergeben werden, sind entweder Funktionskörper oder ganze Skripte, und die Aktivierung des strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, stellen Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso aktivieren Sie den strikten Modus für eine Funktion, indem Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) im Funktionskörper vor allen anderen Anweisungen einfügen.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strikter Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strikten Modus, ohne dass eine Anweisung erforderlich ist, um ihn zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind Code im strikten Modus, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der strikte Modus ändert sowohl Syntax als auch Laufzeitverhalten. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Laufzeit- oder Syntaxfehler umwandeln
- Änderungen, die die Auflösung von Variablenreferenzen vereinfachen
- Änderungen, die `eval`- und `arguments`-Handhabung vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen zur Vorbereitung auf zukünftige ECMAScript-Entwicklungen.

### Umwandlung von Fehlern in Laufzeitfehler

Der strikte Modus wandelt einige zuvor akzeptierte Fehler in Laufzeitfehler um. JavaScript wurde entwickelt, um leicht verständlich für Anfänger zu sein, und manchmal weist es Operationen, die Fehler sein sollten, keine Fehlersignale zu. Manchmal behebt dies das unmittelbare Problem, aber manchmal schafft es größere Probleme in der Zukunft. Der strikte Modus behandelt diese Fehler als Fehler, sodass sie entdeckt und schnell behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, unbeabsichtigt globale Variablen zu erstellen. Im sloppy Modus erzeugt das falsche Eintippen einer Variablen in einer Zuweisung eine neue Eigenschaft im globalen Objekt und "funktioniert" weiter. Zuweisungen, die unbeabsichtigt globale Variablen erzeugen würden, werfen im strikten Modus einen Fehler:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlerhafte Zuweisungen an Objekteigenschaften

Der strikte Modus erzwingt, dass Zuweisungen, die andernfalls still fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Möglichkeiten, bei einer Eigenschaftszuweisung zu scheitern:

- Zuweisung an eine nicht schreibbare Dateneigenschaft
- Zuweisung an eine accessor-Eigenschaft, die nur einen getter hat
- Zuweisung zu einer neuen Eigenschaft eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht schreibbare globale Variable. Im sloppy Modus passiert nichts, wenn man `NaN` zuweist; der Entwickler erhält keine Fehlermeldung. Im strikten Modus führt die Zuweisung an `NaN` zu einer Ausnahme.

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

#### Fehlerhafte Löschung von Objekteigenschaften

Der Versuch, eine nicht-löschbare oder anderweitig nicht löschbare (z.B. durch einen Proxy-Handler [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) abgefangene) Eigenschaft zu löschen, wirft im strikten Modus einen Fehler (wo vorher der Versuch keine Wirkung hatte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der strikte Modus verbietet auch das Löschen von einfachen Namen. `delete name` im strikten Modus führt zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, prefixen Sie ihn mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus verlangt, dass Funktionsparameternamen eindeutig sind. Im sloppy Modus verdeckt das letzte doppelte Argument die vorherigen, identisch benannten Argumente. Diese vorherigen Argumente bleiben durch [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, sodass sie nicht vollständig unzugänglich sind. Dennoch macht dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte beispielsweise einen Tippfehler verdecken), daher sind im strikten Modus doppelte Argumentnamen ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch im nicht-strikten Modus ein Syntaxfehler, doppelte Parameternamen zu verwenden, wenn die Funktion einen Standard-, Rest- oder Destructuring-Parameter hat.

#### Ältere Oktalliterale

Der strikte Modus [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy Modus wird eine Zahl, die mit `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Anfänger glauben manchmal, dass ein führendes Nullpräfix keine semantische Bedeutung hat, sodass sie es als Ausrichtungswerkzeug verwenden — aber das ändert die Bedeutung der Zahl! Eine führende Nullsyntax für Oktal ist selten nützlich und kann fälschlicherweise verwendet werden, daher macht der strikte Modus es zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Der standardisierte Weg, Oktalliterale darzustellen, ist das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, was gleichbedeutend mit `"%"` ist, können verwendet werden, um Zeichen durch erweiterte {{Glossary("ASCII", "ASCII")}}-Zeichencodenummern im Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formell ist es nicht erlaubt, `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu verwenden; zum Beispiel `\9` und `\07`.

#### Festlegen von Eigenschaften auf primitive Werte

Der strikte Modus verbietet das Festlegen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft eines primitiven Werts erzeugt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im sloppy Modus das Festlegen von Eigenschaften ignoriert wird (no-op). Im strikten Modus wird eine {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden früher als {{jsxref("SyntaxError")}} im strikten Modus betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die eine Duplikation zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Das Erstellen von Code, der früher zu Fehlern führte, nun aber keine Fehler mehr sind, wird immer als rückwärtskompatibel betrachtet. Dies ist ein positiver Aspekt des strikten Ansatzes der Sprache beim Werfen von Fehlern: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scope-Managements

Der strikte Modus vereinfacht, wie Variablennamen auf bestimmte Variablendefinitionen im Code abgebildet werden. Viele Compiler-Optimierungen beruhen auf der Möglichkeit zu sagen, dass Variable _X_ an _diesem_ Ort gespeichert ist: dies ist entscheidend, um JavaScript-Code vollständig zu optimieren. JavaScript macht es manchmal unmöglich, diese grundlegende Abbildung von Namen zu Variablendefinitionen im Code bis zur Laufzeit vorzunehmen. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, sodass der Compiler den Code im strikten Modus besser optimieren kann.

#### Entfernung der `with`-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name im Block entweder mit einer Eigenschaft des übergebenen Objekts oder mit einer Variable im umgebenden (oder sogar globalen) Scope zur Laufzeit übereinstimmen könnte; es ist unmöglich, dies vorher zu wissen. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die Alternative, das Objekt einem Kurznamen zuzuweisen und dann auf die entsprechende Eigenschaft dieses Kurznamens zuzugreifen, steht bereit, `with` zu ersetzen.

#### Nicht-leckendes eval

Im strikten Modus, [`eval` führt keine neuen Variablen in den umgebenden Scope ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy Modus führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Scope ein. Das bedeutet, dass in einer Funktion, die einen Aufruf von `eval` enthält, im Allgemeinen jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` möglicherweise eine neue Variable eingeführt hat, die die äußere Variable verdecken würde). Im strikten Modus erstellt `eval` Variablen nur für den ausgewerteten Code, sodass `eval` nicht beeinflussen kann, ob sich ein Name auf eine äußere Variable oder eine lokale Variable bezieht:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob die an `eval()` übergebene Zeichenkette im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direkter eval oder indirekter eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Blockverbundene Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte seit ihrem Beginn nicht erlaubt, dass Funktionsdeklarationen in Blockanweisungen eingeschlossen sind. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, die Implementierungen der Sprachspezifikation zu harmonisieren. Daher sind [blockgebundene Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im strikten Modus spezifiziert (während sie im strikten Modus früher verboten waren), während das Verhalten im sloppy Modus bei den Browsern unterschiedlich bleibt.

### Vereinfachung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten im sloppy Modus eine beträchtliche Menge an magischem Verhalten: `eval` um Binder zu ergänzen oder zu entfernen und Bindungswerte zu ändern, und `arguments` um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der strikte Modus macht große Fortschritte, um `eval` und `arguments` als Schlüsselwörter zu behandeln.

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

#### Keine Synchronisation zwischen Parametern und Argumentindizes

Strikte Modus-Code synchronisiert die Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer sloppy Modus-Funktion, deren erstes Argument `arg` ist, setzt `arg` auch `arguments[0]` und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wurde gelöscht). `arguments`-Objekte für strikte Modus-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

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

Der strikte Modus erleichtert es, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten, dass Benutzer JavaScript schreiben können, das von der Website _im Auftrag anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, sodass solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalität zu zensieren. Die Flexibilität von JavaScript macht es praktisch unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeitprüfungen erhebliche Leistungskosten verursacht. Ein paar strikte Modus-Anpassungen, plus die Anforderung, dass von Benutzern übermitteltes JavaScript strikte Modus-Code sein muss und in einer bestimmten Weise aufgerufen werden muss, reduzieren wesentlich den Bedarf an diesen Laufzeitprüfungen.

#### Keine Substitution von this

Der Wert, der als `this` an eine Funktion im strikten Modus übergeben wird, wird nicht in ein Objekt "geboxed". Für eine sloppy Modus-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem Objektwert als `this` aufgerufen wird; oder der boxed Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Boxing eine Leistungskosten, sondern die Exposition des globalen Objekts in Browsern ist ein Sicherheitsrisiko, da das globale Objekt Zugriff auf Funktionalität bietet, den "sichere" JavaScript-Umgebungen einschränken müssen. Für eine strikte Modus-Funktion wird das angegebene `this` nicht in ein Objekt umgewandelt, und wenn es nicht angegeben wird, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung der Stack-Walking-Eigenschaften

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stack "durchzuwandern". Viele Implementierungen implementierten früher einige Erweiterungsfunktionen, die es ermöglichten, den upstream Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, da sie es ermöglichen, durch den "sicheren" Code auf "privilegierte" Funktionen und deren (möglicherweise unsichere) Argumente zuzugreifen. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen einen Fehler auslösen:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy Modus bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Außerdem behindert `arguments.callee` die Optimierung erheblich, wie zum Beispiel das Inlining von Funktionen, da es möglich gemacht werden muss, einen Verweis auf die nicht-gecacte Funktion bereitzustellen, wenn `arguments.callee` aufgerufen wird. `arguments.callee` für strikte Modus-Funktionen ist eine nicht löschbare Eigenschaft, die beim Setzen oder Abrufen einen Fehler auslöst:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherheit für JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Identifikatoren, die nicht als Variablennamen verwendet werden können. Der strikte Modus reserviert einige Namen mehr als der sloppy Modus, von denen einige bereits in der Sprache verwendet werden, und andere sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter umsetzen zu können.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang zum strikten Modus

Der strikte Modus wurde so entworfen, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und sogar den Code bis hin zur Funktion granular in den strikten Modus zu überführen.

Sie können eine Codebasis in den strikten Modus migrieren, indem Sie zunächst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werfen die folgenden Fälle einen {{jsxref("SyntaxError")}}, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwenden von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einen Variablennamen `delete myVariable`;
- Verwenden von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwenden eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Vorausplanung für zukünftige Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklarieren von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklarieren desselben Eigenschaftsnamens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie einfache Fehler oder schlechte Praktiken aufzeigen. Sie treten auf, bevor der Code ausgeführt wird, wodurch sie leicht entdeckt werden, solange der Code vom Laufzeitsystem geparst wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher stillschweigend in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Der strikte Modus wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, sind Tests erforderlich, um sicherzustellen, dass nichts kaputt geht. Sie können nach solchen Fehlern auf Funktionsebene suchen.

- Das Zuweisen zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Dies setzte früher eine Eigenschaft im globalen Objekt, was selten die erwartete Wirkung ist. Wenn Sie wirklich einen Wert im globalen Objekt setzen wollen, weisen Sie ihn explizit als Eigenschaft von `globalThis` zu.
- Das Versagen bei der Zuweisung zu einer Objekteigenschaft (z.B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im sloppy Modus würde dies still scheitern.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy Modus würde dies still scheitern.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Testreihe dieser Art von subtilen Unterschieden nicht erfasst. Eine sorgfältige Überprüfung Ihrer Codebasis wird wahrscheinlich erforderlich sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Zum Glück kann diese sorgfältige Überprüfung schrittweise bis hin zur Funktionsebene erfolgen.

- `this`
  - : Im sloppy Modus würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt umgewandelt (oder das globale Objekt für `undefined` und `null`). Im strikten Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy Modus würde das Ändern eines Werts im `arguments`-Objekt das entsprechende benannte Argument ändern. Dies machte die Optimierung für die JavaScript-Engine kompliziert und machte den Code schwieriger zu lesen/zu verstehen. Im strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten werden nicht wechselseitig reflektiert.
- `eval`
  - : Im strikten Modus erzeugt `eval` keine neue Variable im Scope, aus dem es aufgerufen wurde. Auch wird im strikten Modus natürlich die Zeichenfolge mit den Regeln des strikten Modus ausgewertet. Gründliche Tests sind erforderlich, um sicherzustellen, dass nichts kaputt geht. Die Nichtverwendung von `eval`, wenn Sie es nicht wirklich benötigen, könnte eine weitere pragmatische Lösung sein.
- Blockgebundene Funktionsdeklarationen
  - : Im sloppy Modus könnte eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar ausführbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
