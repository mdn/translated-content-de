---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus ohne strikte Einschränkungen als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, nur für den Fall.

Der strikte Modus von JavaScript ist eine Möglichkeit, eine eingeschränkte Variante von JavaScript zu wählen und damit implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzuwählen. Der strikte Modus ist nicht nur ein Teilmenge: Er hat _absichtlich_ andere Semantiken als normaler Code. Strikter Modus-Code und nicht-strikter Modus-Code können koexistieren, sodass Skripte schrittweise in den strikten Modus übergehen können.

Der strikte Modus bewirkt mehrere Änderungen an den normalen JavaScript-Semantiken:

1. Er eliminiert einige JavaScript-Fehler, indem sie in Fehlermeldungen umgewandelt werden.
2. Er behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strikter Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der sich nicht im strikten Modus befindet.
3. Er verbietet einige Syntaxen, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivierung des strikten Modus

Der strikte Modus gilt für _gesamte Skripte_ oder _einzelne Funktionen_. Er gilt nicht für [Block-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignis-Handler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute, Strings, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergeben werden, und verwandte Funktionen sind entweder Funktionskörper oder gesamte Skripte, und die Aktivierung des strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso sollte, um den strikten Modus für eine Funktion zu aktivieren, die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) im Funktionskörper vor alle anderen Anweisungen gesetzt werden.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

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

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind strikte Modus-Codes, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der strikte Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Die Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Fehler (als Syntaxfehler oder zur Laufzeit) umwandeln
- Änderungen, die die Auflösung von Variablenverweisen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehler in Fehler umwandeln

Der strikte Modus verwandelt einige zuvor akzeptierte Fehler in tatsächliche Fehler. JavaScript wurde entwickelt, um für unerfahrene Entwickler einfach zu sein, und manchmal verleiht es Operationen, die Fehler sein sollten, nicht-fehlerhafte Semantik. Manchmal behebt dies das unmittelbare Problem, aber manchmal schafft es in der Zukunft schlimmere Probleme. Der strikte Modus behandelt diese Fehler als Fehler, damit sie entdeckt und umgehend behoben werden können.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy mode führt ein Tippfehler bei einer Variablen in einer Zuweisung dazu, dass eine neue Eigenschaft am globalen Objekt erstellt wird, die "weiter funktioniert". Zuweisungen, die versehentlich globale Variablen erstellen würden, führen im strikten Modus zu einem Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Scheitern bei der Zuweisung zu Objekteigenschaften

Der strikte Modus bewirkt, dass Zuweisungen, die andernfalls stillschweigend fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Möglichkeiten, eine Objekteigenschaftszuweisung fehlschlagen zu lassen:

- Zuweisung zu einer nicht beschreibbaren Dateneigenschaft
- Zuweisung zu einer nur lesbaren Zugriffseigenschaft
- Zuweisung zu einer neuen Eigenschaft eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts

Beispielsweise ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im sloppy mode bewirkt die Zuweisung an `NaN` nichts; der Entwickler erhält kein Fehlerrückmeldung. Im strikten Modus löst die Zuweisung an `NaN` eine Ausnahme aus.

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

Versuche, eine [nicht konfigurierbare oder anderweitig nicht löschbare (z. B. wird es von einem Proxy abgefangen, dessen [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) Handler `false` zurückgibt)](/de/docs/Web/JavaScript/Reference/Operators/delete) Eigenschaft zu löschen, führen im strikten Modus zu Fehlern (wobei der Versuch vorher keine Auswirkungen hatte):

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

Wenn der Name eine konfigurierbare globale Eigenschaft ist, gehen Sie ihm mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voraus, um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus erfordert, dass Funktionsparameternamen eindeutig sind. Im sloppy mode überdeckt das letzte doppelt vorhandene Argument vorangegangene Argumente mit demselben Namen. Diese vorherigen Argumente sind weiterhin über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) verfügbar, sodass sie nicht vollständig unzugänglich sind. Dennoch macht dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte z. B. einen Tippfehler verbergen), also ist im strikten Modus ein doppelter Argumentname ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im nicht-strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standard-, Rest- oder destrukturierten Parameter hat.

#### Legacy Oktal-Literale

Der strikte Modus [verbietet ein mit `0` vorangestelltes Oktal-Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine mit `0` beginnende Zahl wie `0644` als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Unerfahrene Entwickler glauben manchmal, dass ein führender Null keine semantische Bedeutung hat, also könnten sie sie als Ausrichtungsgerät verwenden – aber das ändert die Bedeutung der Zahl! Die Syntax mit vorangestellter Null für Oktal ist selten nützlich und kann versehentlich verwendet werden, sodass der strikte Modus sie zu einem Syntaxfehler macht:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Art, Oktalliterale zu notieren, ist über das `0o` Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, was `"%"` entspricht, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodes in Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formal ist es nicht erlaubt, `\` gefolgt von einer Dezimalziffer, die keine `0` ist, oder `\0` gefolgt von einer Dezimalziffer zu haben; zum Beispiel `\9` und `\07`.

#### Eigenschaften auf primitive Werte setzen

Der strikte Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primäre")}} Werte. Der Zugriff auf eine Eigenschaft eines Primitiven erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, somit wird im sloppy mode das Setzen von Eigenschaften ignoriert (no-op). Im strikten Modus wird eine {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden im strikten Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die Duplizierung zur Laufzeit möglich machen, wurde diese Beschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Das Machen von Code, der bisher ein Fehler war, zu nicht Fehlern zu machen, wird immer als rückwärtskompatibel betrachtet. Dies ist ein guter Bestandteil der Sprache, die streng im Hinblick auf Fehler ist: Sie lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Geltungsbereichs-Managements

Der strikte Modus vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compiler-Optimierungen hängen von der Fähigkeit ab, zu sagen, dass die Variable _X_ an _diesem_ Ort gespeichert ist: Dies ist entscheidend, um JavaScript-Code vollständig zu optimieren. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Namen zu Variablendefinitionen im Code bis zur Laufzeit durchzuführen. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, sodass der Compiler strikte Modus-Codes besser optimieren kann.

#### Entfernung der with-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name im Block zur Laufzeit entweder einer Eigenschaft des übergebenen Objekts oder einer Variable im umgebenden (oder sogar globalen) Geltungsbereich zugeordnet werden könnte; es ist unmöglich, dies vorher zu wissen. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass es keine Chance gibt, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die Alternative, das Objekt einem kurzen Namen einer Variablen zuzuweisen und dann auf die entsprechende Eigenschaft an dieser Variablen zuzugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht-leckendes eval

Im strikten Modus, [`eval` fügt der umgebenden Geltungsbereich keine neuen Variablen hinzu](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode wird durch `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder globalen Bereich eingeführt. Dies bedeutet, dass in einer Funktion, die einen Aufruf von `eval` enthält, jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` möglicherweise eine neue Variable eingeführt hat, die die äußere Variable verdecken würde). Im strikten Modus erstellt `eval` nur für den ausgewerteten Code Variablen, sodass `eval` nicht beeinflussen kann, ob ein Name sich auf eine äußere Variable oder eine lokale Variable bezieht:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der String, der an `eval()` übergeben wird, im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-scoped Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte von Beginn an nicht erlaubt, Funktionsdeklarationen in Blockanweisungen zu verschachteln. Dies war jedoch so intuitiv, dass die meisten Browser es als erweiterte Grammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringt. Daher sind [mit Block scoped Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur im strikten Modus explizit spezifiziert (während sie im strikten Modus einst untersagt waren), während das Verhalten im sloppy mode zwischen Browsern unterschiedlich bleibt.

### Vereinfachung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten eine beträchtliche Menge an magischem Verhalten im sloppy mode: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments` synchronisiert benannte Argumente mit seinen indizierten Eigenschaften. Der strikte Modus macht große Fortschritte dahingehend, `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern des Bindens oder Zuweisens von eval und arguments

Die Namen `eval` und `arguments` können in der Sprachsyntax nicht gebunden oder zugewiesen werden. Alle diese Versuche sind Syntaxfehler:

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

#### Kein Synchronisieren zwischen Parametern und Argumenten-Indizes

Der strikte Modus-Code synchronisiert die Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer sloppy mode-Funktion, deren erstes Argument `arg` ist, setzt `arg` auch `arguments[0]` und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für strikte Modus-Funktionen speichern die ursprünglichen Argumente, wenn die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, und ein benanntes Argument verfolgt nicht den Wert im entsprechenden `arguments[i]`.

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

### "Sichern" des JavaScripts

Der strikte Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten mittlerweile Möglichkeiten für Benutzer, JavaScript zu schreiben, das von der Website _im Auftrag anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, sodass solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionen zu zensieren. Die Flexibilität von JavaScript macht es faktisch unmöglich, dies ohne viele Laufzeitüberprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeitüberprüfungen erhebliche Leistungskosten hat. Einige Anpassungen im strikten Modus, insbesondere durch die Anforderung, dass von Benutzern eingereichtes JavaScript strikten Modus-Code sein muss und dass es in einer bestimmten Weise aufgerufen wird, reduzieren den Bedarf für diese Laufzeitüberprüfungen erheblich.

#### Kein Ersetzen von this

Der im strikten Modus an eine Funktion übergebene Wert von `this` wird nicht gezwungen, ein Objekt zu sein (auch bekannt als "verpackt"). Bei einer sloppy mode Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektwerten `this` aufgerufen wird; oder der verpackte Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder dem globalen Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Benutzen Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) um einen bestimmten `this` anzugeben.) Nicht nur ist automatisches Verpacken ein Leistungskostenfaktor, sondern das Bereitstellen des globalen Objekts in Browsern ist ein Sicherheitsrisiko, weil das globale Objekt den Zugriff auf Funktionen ermöglicht, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird bei einer strikten Modus-Funktion das angegebene `this` nicht in ein Objekt verpackt, und wenn nicht angegeben, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Stack-Inspection-Eigenschaften

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen verwendeten einige erweiterte Eigenschaften, die es ermöglichen, den aufrufenden Caller einer Funktion zu ermitteln. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diese Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie es ermöglichen, dass "abgesichertes" Code auf "privilegierte" Funktionen und deren (möglicherweise nicht gesicherte) Argumente zugreifen kann. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abfragen eine Ausnahme auslösen:

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

Ähnliches gilt für [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), das nicht länger unterstützt wird. Im sloppy mode bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie das Inline-Schalten von Funktionen, weil es möglich gemacht werden muss, eine Referenz auf die nicht-inlinestrukturierte Funktion bereitzustellen, wenn `arguments.callee` zugegriffen wird. `arguments.callee` für strikte Modus-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler auswirft, wenn sie gesetzt oder abgefragt wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden dürfen. Der strikte Modus reserviert einige mehr Namen als der sloppy mode, einige davon werden bereits in der Sprache verwendet, und einige davon sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen einfacher umsetzen zu können.

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

Der strikte Modus wurde so gestaltet, dass der Übergang schrittweise gemacht werden kann. Es ist möglich, jede Datei einzeln zu ändern und sogar den Code auf die Funktionsebene schrittweise in den strikten Modus zu überführen.

Sie können eine Codebasis in den strikten Modus migrieren, indem Sie zunächst `"use strict"` zu einem Quellcodeabschnitt hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` führen die folgenden Fälle zu einem {{jsxref("SyntaxError")}}, bevor das Skript ausgeführt wird:

- Oktal-Syntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variable oder Funktionsargumentname
- Verwendung eines der neu reservierten [Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Vorbereitung auf zukünftige Sprachfeatures): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklaration desselben Eigenschaftsnamens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie schlichte Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code vom Laufzeitsystem geparst wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher stillschweigend in Kontexten, in denen das, was getan wurde, ein Fehler hätte sein sollen. Der strikte Modus wirft in solchen Fällen einen Fehler. Wenn Ihre Codebasis solche Fälle enthält, sind Tests notwendig, um sicherzustellen, dass nichts kaputt geht. Sie können nach solchen Fehlern auf der Funktionsebene screenen.

- Eine nicht deklarierte Variable wirft einen {{jsxref("ReferenceError")}}. Dies setzte früher eine Eigenschaft am globalen Objekt, was selten die erwartete Wirkung ist. Wenn Sie wirklich einen Wert am globalen Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft auf `globalThis` zu.
- Scheitern bei der Zuweisung zu einer Objekteigenschaft (z. B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im sloppy mode scheiterte das stille.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy mode scheiterte das stille.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller), oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Testreihe diese Art von subtilen Unterschieden nicht erkennt. Eine sorgfältige Überprüfung Ihrer Codebasis wird wahrscheinlich notwendig sein, um sicherzugehen, dass diese Unterschiede nicht die Semantik Ihres Codes beeinträchtigen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise auf Funktionsebene erfolgen.

- `this`
  - : Im sloppy mode führten Funktionsaufrufe wie `f()` dazu, dass das globale Objekt als `this`-Wert übergeben wurde. Im strikten Modus ist nun `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt (oder das globale Objekt für `undefined` und `null`) verpackt. Im strikten Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy mode führte die Änderung eines Werts im `arguments`-Objekt zur Änderung des entsprechenden benannten Arguments. Dies machte Optimierungen für JavaScript-Engines kompliziert und erschwerte das Lesen/Verstehen von Code. Im strikten Modus wird das `arguments`-Objekt erstellt und mit den gleichen Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten werden nicht in einander widerspiegeln.
- `eval`
  - : Im strikten Modus-Code erstellt `eval` keine neue Variable im Geltungsbereich, aus dem es aufgerufen wurde. Auch wird natürlich der String im strikten Modus ausgewertet. Gründliche Tests sind notwendig, um sicherzustellen, dass nichts kaputt geht. Wenn Sie `eval` nicht wirklich benötigen, kann das Nichtverwenden von `eval` eine weitere pragmatische Lösung sein.
- Block-scoped Funktionsdeklarationen
  - : Im sloppy mode kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
