---
title: Strenger Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Mehr")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der nicht streng ist, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber es ist gut, ihn zu kennen, für den Fall.

Der strenge Modus von JavaScript ist eine Möglichkeit, sich bei JavaScript für eine eingeschränkte Variante zu _entscheiden_ und damit implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzulehnen. Strenger Modus ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Code im strengen Modus und Code im nicht strengen Modus können koexistieren, sodass Skripte schrittweise in den strengen Modus wechseln können.

Der strenge Modus ändert mehrere Aspekte der normalen JavaScript-Semantik:

1. Beseitigt einige stille JavaScript-Fehler, indem sie in Fehler umgewandelt werden.
2. Behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Code im strengen Modus kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strengen Modus ist.
3. Verbietet einige Syntaxen, die wahrscheinlich in zukünftigen ECMAScript-Versionen definiert werden.

## Aktivierung des strengen Modus

Der strenge Modus gilt für _gesamte Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keinen Effekt. Code aus [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute, Strings, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergeben werden, und verwandte Funktionen sind entweder Funktionskörper oder gesamte Skripte, und die Aktivierung des strengen Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strengen Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso um den strengen Modus für eine Funktion zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen.

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

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strengen Modus, ohne dass eine Anweisung zur Initiierung erforderlich ist.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind strenger Modus-Code, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class).

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

## Änderungen im strengen Modus

Strenger Modus verändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Fehler in Fehler (als Syntaxfehler oder zur Laufzeit) umwandeln
- Änderungen, die die Auflösung von Variablenreferenzen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Umwandlung von Fehlern in Ausnahmen

Strenger Modus macht einige zuvor akzeptierte Fehler zu Ausnahmen. JavaScript wurde so konzipiert, dass es für unerfahrene Entwickler einfach ist, und manchmal gibt es Operationen, die eigentlich Fehler sein sollten, nicht-Fehler-Semantik. Manchmal behebt das das unmittelbare Problem, aber manchmal schafft es in der Zukunft noch größere Probleme. Strenger Modus behandelt diese Fehler als Ausnahmen, damit sie entdeckt und schnell behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Strenger Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy mode erstellt das falsche Eintippen einer Variablen bei einer Zuweisung eine neue Eigenschaft auf dem globalen Objekt und "funktioniert" weiterhin. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strengen Modus eine Ausnahme:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlerhafte Zuweisung zu Objekteigenschaften

Strenger Modus macht Zuweisungen, die sonst stillschweigend fehlschlagen würden, durch das Werfen einer Ausnahme deutlich. Es gibt drei Möglichkeiten, eine Eigenschaftszuweisung fehlschlagen zu lassen:

- Zuweisung an eine nicht beschreibbare Dateneigenschaft
- Zuweisung an eine reine Getter-Zugriffs-Eigenschaft
- Zuweisung an eine neue Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im sloppy mode führt die Zuweisung an `NaN` zu nichts; der Entwickler erhält kein Feedback über das Scheitern. Im strengen Modus wirft die Zuweisung an `NaN` eine Ausnahme.

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

#### Fehlerhaftes Löschen von Objekteigenschaften

Versuche, eine [nicht konfigurierbare oder sonst nicht löschbare](/de/docs/Web/JavaScript/Reference/Operators/delete) (z. B. wird sie von einem Proxy [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) Handler abgefangen, der `false` zurückgibt) Eigenschaft zu löschen, führen im strengen Modus zu einer Ausnahme (wo der Versuch vorher keine Auswirkungen gehabt hätte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Strenger Modus verbietet auch das Löschen von einfachen Namen. `delete name` im strengen Modus ist ein Syntaxfehler:

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

Strenger Modus verlangt, dass Funktionsparameternamen eindeutig sind. Im sloppy mode verbirgt das letzte doppelte Argument die vorherigen, identisch benannten Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) verfügbar, sodass sie nicht völlig unzugänglich sind. Dennoch macht dieses Verbergen kaum Sinn und ist wahrscheinlich unerwünscht (es könnte beispielsweise einen Tippfehler verbergen), daher sind doppelte Argumentnamen im strengen Modus ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch im nicht strengen Modus ein Syntaxfehler, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder Destrukturierungsparameter hat.

#### Legale Oktal-Literale

Strenger Modus [untersagt ein `0`-präfixiertes Oktal-Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine Zahl, die mit `0` beginnt, wie `0644`, als Oktalzahl (`0644 === 420`) interpretiert, wenn alle Stellen kleiner als 8 sind. Unerfahrene Entwickler glauben manchmal, dass ein führendes Null-Präfix keine semantische Bedeutung hat, daher könnten sie es als Ausrichtungsgerät verwenden - aber das ändert die Bedeutung der Zahl! Eine führende Null-Syntax für den Oktal ist selten nützlich und kann fälschlicherweise verwendet werden, daher macht strenger Modus es zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Methode, Oktal-Literale zu bezeichnen, ist das `0o`-Präfix. Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Octal-Escape-Sequenzen wie `"\45"`, die gleichbedeutend mit `"%"` sind, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}} Zeichen-Codierungsnummern im Oktal darzustellen. Im strengen Modus ist das ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Genauer gesagt, es ist nicht erlaubt, `\` gefolgt von einer anderen Dezimalziffer als `0` zu haben, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07`.

#### Festlegung von Eigenschaften auf primitiven Werten

Strenger Modus verbietet das Festlegen von Eigenschaften auf {{Glossary("Primitive", "primitiven")}} Werten. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im sloppy mode das Setzen von Eigenschaften ignoriert wird (keine Operation). Im strengen Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden einst im strengen Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die Duplikation zur Laufzeit möglich machen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Der Rückwärtskompatibilität wird immer Aufmerksamkeit geschenkt, wenn ein Code, der früher Fehler erzeugte, in Fehler umgewandelt wird. Dies ist ein wichtiger Aspekt der Sprache, die strikt in Bezug auf das Werfen von Fehlern ist: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung der Bereichsverwaltung

Strenger Modus vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compiler-Optimierungen beruhen auf der Möglichkeit, zu sagen, dass Variable _X_ in _diesem_ Speicherort gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht manchmal diese grundlegende Zuordnung von Name zur Variablendefinition im Code unmöglich, bis es zur Laufzeit ausgeführt wird. Strenger Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler den strengen Modus-Code besser optimieren kann.

#### Entfernen der with-Anweisung

Strenger Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` ist, dass jeder Name im Block entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen im umgebenden (oder sogar globalen) Bereich zur Laufzeit zugeordnet werden könnte; es ist unmöglich, dies im Voraus zu wissen. Strenger Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Speicherort verweist:

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

Die Alternative, das Objekt einer Kurzname-Variablen zuzuweisen und dann auf die entsprechende Eigenschaft auf dieser Variablen zuzugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht-leckendes eval

Im strengen Modus, [führt `eval` keine neuen Variablen in den umgebenden Bereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode führt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder den globalen Bereich ein. Dies bedeutet, dass im Allgemeinen, in einer Funktion, die einen Aufruf von `eval` enthält, jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit auf eine bestimmte Definition abgebildet werden muss (da dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verdecken würde). Im strengen Modus erstellt `eval` nur Variablen für den ausgewerteten Code, sodass `eval` nicht beeinflussen kann, ob ein Name sich auf eine äußere Variable oder eine interne Variable bezieht:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der an `eval()` übergebene String im strengen Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval und indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Blockbereich-Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte von Anfang an nicht erlaubt, dass Funktionsdeklarationen in Blockanweisungen verschachtelt sind. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringt. Daher sind [block-spezifische Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur jetzt explizit im strengen Modus spezifiziert (während sie einst im strengen Modus verboten waren), während das Verhalten im sloppy mode bei den Browsern weiterhin abweicht.

### Eval- und Arguments-Vereinfachungen

Strenger Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) nicht mehr magisch unverständlich. Beide beinhalten im sloppy mode eine beträchtliche Menge an magischer Verarbeitung: `eval`, um Bindungen hinzuzufügen oder zu entfernen und die Werte von Bindungen zu ändern, und `arguments` um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Strenger Modus macht große Fortschritte, um `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern von Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können im Sprachsyntax nicht gebunden oder zugewiesen werden. Alle diese Versuche sind Syntaxfehler:

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

#### Keine Synchronisation zwischen Parametern und Argumentindices

Code im strengen Modus synchronisiert die Indizes des `arguments`-Objekts nicht mehr mit jeder Parameterbindung. In einer Funktion im sloppy mode, deren erstes Argument `arg` ist, wird durch das Setzen von `arg` auch `arguments[0]` gesetzt und umgekehrt (es sei denn, keine Argumente wurden bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für Funktionen im strengen Modus speichern die ursprünglichen Argumente bei Funktionsaufruf. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, und ein benanntes Argument verfolgt auch nicht den Wert im entsprechenden `arguments[i]`.

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

### JavaScript "sichern"

Strenger Modus erleichtert das Schreiben von "sicheren" JavaScript. Einige Webseiten bieten nun Möglichkeiten für Benutzer, JavaScript zu schreiben, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf private Informationen des Benutzers zugreifen, daher muss solches JavaScript teilweise transformiert werden, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalitäten zu zensieren. Die Flexibilität von JavaScript macht es praktisch unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Einige Sprachfunktionen sind so verbreitet, dass das Durchführen von Laufzeitprüfungen erhebliche Leistungskosten verursacht. Einige wenige Anpassungen des strengen Modus zusammen mit der Anforderung, dass vom Benutzer bereitgestelltes JavaScript strenge Modus-Code ist und auf bestimmte Weise aufgerufen wird, reduzieren erheblich den Bedarf an diesen Laufzeitprüfungen.

#### Keine this-Substitution

Der im strengen Modus an eine Funktion übergebene Wert `this` wird nicht erzwungen, ein Objekt zu sein (auch bekannt als "Boxing"). Für eine Funktion im sloppy mode ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektwertigen `this` aufgerufen wird; oder der verpackte Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist automatisches Boxing ein Leistungskosten, sondern die Freigabe des globalen Objekts in Browsern ist ein Sicherheitsrisiko, da das globale Objekt Zugriff auf Funktionen bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für Funktionen im strengen Modus das angegebene `this` nicht in ein Objekt verpackt und, wenn nicht angegeben, ist `this` `undefined` statt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Stack-Walking Eigenschaften

Im strengen Modus ist es nicht mehr möglich, den JavaScript-Stack "abzulaufen". Viele Implementierungen haben früher einige Erweiterungsfunktionen implementiert, die es möglich machen, den oberliegenden Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade in der Mitte eines Aufrufs ist, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diese Invocation von `fun`. Beide Erweiterungen sind problematisch für "sichere" JavaScript, da sie es ermöglichen, dass "gesicherter" Code auf "privilegierte" Funktionen und ihre (potenziell ungesicherten) Argumente zugreifen kann. Wenn `fun` im strengen Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen eine Ausnahme auslösen:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode bezieht sich `arguments.callee` auf die umschließende Funktion. Dies ist ein schwacher Anwendungsfall: Benennen Sie die umschließende Funktion! Zudem hindert `arguments.callee` erheblich Optimierungen wie das Inlining von Funktionen, da es möglich sein muss, einen Verweis auf die nicht-inlinebare Funktion bereitzustellen, wenn auf `arguments.callee` zugegriffen wird. `arguments.callee` für Funktionen im strengen Modus ist eine nicht löschbare Eigenschaft, die beim Setzen oder Abrufen einen Fehler auslöst:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Im strengen Modus werden einige weitere Namen reserviert als im sloppy mode, einige werden bereits in der Sprache verwendet und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen einfacher implementieren zu können.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang zum strengen Modus

Der strenge Modus wurde so gestaltet, dass der Übergang dazu schrittweise erfolgen kann. Sie können jede Datei individuell ändern und sogar den Code bis auf die Funktionseben genau in den strengen Modus überführen.

Sie können eine Codebasis in den strengen Modus migrieren, indem Sie zuerst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden die folgenden Fälle einen {{jsxref("SyntaxError")}} werfen, bevor das Skript ausgeführt wird:

- Oktal-Syntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einen Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (im Hinblick auf zukünftige Sprachmerkmale): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklarieren von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklarieren desselben Eigenschaftsnamens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code vom Laufzeit-System geparst wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher stillschweigend in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Strenger Modus wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, sind Tests erforderlich, um sicherzustellen, dass nichts kaputt geht. Sie können nach solchen Fehlern auf der Funktionsgranularitätsebene suchen.

- Die Zuweisung an eine nicht deklarierte Variable löst einen {{jsxref("ReferenceError")}} aus. Dies setzte früher eine Eigenschaft auf das globale Objekt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert auf das globale Objekt setzen möchten, weisen Sie ihn ausdrücklich als Eigenschaft auf `globalThis` zu.
- Das Scheitern der Zuweisung zu einer Objekteigenschaft (z. B. sie ist schreibgeschützt) löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde dies stillschweigend fehlschlagen.
- Das Löschen einer nicht-löschbaren Eigenschaft löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde dies stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) löst einen {{jsxref("TypeError")}} aus, wenn die Funktion im strengen Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtil. Es ist möglich, dass ein Testkit diese Art von subtilen Unterschieden nicht erkennt. Eine sorgfältige Überprüfung Ihrer gesamten Codebasis wird wahrscheinlich erforderlich sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinträchtigen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise auf der Funktionsgranularitätsebene durchgeführt werden.

- `this`
  - : Im sloppy mode würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strengen Modus ist es nun `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt verpackt (oder das globale Objekt für `undefined` und `null`). Im strengen Modus wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy mode würde das Ändern eines Werts im `arguments`-Objekt auch das entsprechende benannte Argument ändern. Dies machte Optimierungen für JavaScript Engines kompliziert und den Code schwerer lesbar/verstehbar. Im strengen Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen am `arguments`-Objekt oder an den benannten Argumenten spiegeln sich nicht gegenseitig wider.
- `eval`
  - : Im strengen Modus erstellt `eval` keine neue Variable im Bereich, aus dem sie aufgerufen wurde. Natürlich wird der String im strengen Modus ausgewertet. Gründliche Tests werden erforderlich sein, um sicherzustellen, dass nichts kaputt geht. Die Praxis, `eval` nicht zu verwenden, wenn es nicht wirklich notwendig ist, kann eine pragmatische Lösung sein.
- Blockbereich-Funktionsdeklarationen
  - : Im sloppy mode kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strengen Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
