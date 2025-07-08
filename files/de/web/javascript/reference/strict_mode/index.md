---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

> [!NOTE]
> Manchmal wird der Standard-Non-Strict-Modus als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, nur für den Fall.

Der Strict-Modus von JavaScript ist eine Möglichkeit, sich zu einer eingeschränkten Variante von JavaScript _anzumelden_ und dabei implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzuwählen. Strict Mode ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Strict-Mode-Code und Non-Strict-Mode-Code können koexistieren, sodass Skripte schrittweise zum Strict Mode übergehen können.

Der Strict Mode bewirkt mehrere Änderungen gegenüber der normalen JavaScript-Semantik:

1. Er beseitigt einige stille JavaScript-Fehler, indem er diese zu Fehlern macht.
2. Er behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strict-Mode-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im Strict Mode ist.
3. Er verbietet gewisse Syntax, die in zukünftigen Versionen von ECMAScript definiert werden könnte.

## Aktivieren des Strict Mode

Strict Mode gilt für _gesamte Skripte_ oder _einzelne Funktionen_. Er gilt nicht für [Block-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Auswirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute, Strings, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergeben werden, und verwandte Funktionen sind entweder Funktionskörper oder gesamte Skripte, und das Aktivieren des Strict Mode in ihnen funktioniert wie erwartet.

### Strict Mode für Skripte

Um den Strict Mode für ein gesamtes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor jede andere Anweisung.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strict Mode für Funktionen

Ebenso, um den Strict Mode für eine Funktion zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) im Körper der Funktion vor jede andere Anweisung.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [Rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [Destrukturierungs-](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strict Mode für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im Strict Mode, ohne dass eine Anweisung erforderlich ist, um ihn zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strict Mode für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind Strict-Mode-Code, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der Strict Mode ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Fehler in Errors konvertieren (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie Variablenreferenzen aufgelöst werden
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die das Schreiben von "sicherem" JavaScript erleichtern
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehlerkonvertierung in Errors

Der Strict Mode konvertiert einige vorher akzeptierte Fehler in Errors. JavaScript wurde entwickelt, um für Entwickler ohne viel Erfahrung einfach zu sein, und manchmal gibt es Operationen, die Errors sein sollten, nicht aus Fehlern bestehende Semantiken. Manchmal löst dies das unmittelbare Problem, aber manchmal schafft es schlimmere Probleme in der Zukunft. Der Strict Mode behandelt diese Fehler als Errors, sodass sie entdeckt und schnell behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der Strict Mode macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy mode erstellt das Vertippen einer Variablen bei einer Zuweisung eine neue Eigenschaft im globalen Objekt und funktioniert "weiter". Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im Strict Mode einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlgeschlagene Zuweisungen an Objekteigenschaften

Der Strict Mode bewirkt, dass Zuweisungen, die ansonsten stillschweigend fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Arten, bei einer Eigenschaftenzuweisung zu scheitern:

- Zuweisung an eine nicht-schreibbare Dateneigenschaft
- Zuweisung an eine nur-getter Zugriffseigenschaft
- Zuweisung an eine neue Eigenschaft auf einem [nicht-erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht-schreibbare globale Variable. Im sloppy mode bewirkt das Zuweisen an `NaN` nichts; der Entwickler erhält kein Feedback über das Scheitern. Im Strict Mode hingegen löst das Zuweisen an `NaN` eine Ausnahme aus.

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

Versuche, eine nicht-konfigurierbare oder anderweitig nicht-löschbare (z. B. wird sie von einem Proxy abgefangen, dessen [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler `false` zurückgibt) Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), führen im Strict Mode zu einem Fehler (wo vorher der Versuch keine Auswirkung gehabt hätte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der Strict Mode verbietet auch das Löschen von einfachen Namen. `delete name` im Strict Mode ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, setzen Sie ihn mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der Strict Mode erfordert, dass Funktions-Parameternamen eindeutig sind. Im sloppy mode überdeckt das letzte doppelte Argument vorher identisch benannte Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) verfügbar, sodass sie nicht völlig unzugänglich sind. Trotzdem macht dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte ein Tippfehler verstecken, zum Beispiel), daher sind doppelte Argumentnamen im Strict Mode ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im Nicht-Strict Mode, doppelte Parameternamen zu haben, wenn die Funktion ein Standard-Parameter, Rest-Parameter oder destrukturierten Parameter hat.

#### Alte Oktal-Literale

Der Strict Mode [verbietet ein `0`-präfixierte Oktal-Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy model wird eine Zahl, die mit `0` beginnt, wie `0644`, als Oktalzahl (`0644 === 420`) interpretiert, wenn alle Ziffern kleiner als 8 sind. Entwickler ohne viel Erfahrung glauben manchmal, ein führendes Null-Präfix hat keine semantische Bedeutung, sodass sie es als Ausrichtungsgerät verwenden könnten - aber das ändert die Bedeutung der Zahl! Eine führende Null-Syntax für Oktal ist selten nützlich und kann irrtümlich verwendet werden, daher macht der Strict Mode es zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Methode, Oktalliterale darzustellen, erfolgt über das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, was `"%"` entspricht, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodenummern in Oktal darzustellen. Im Strict Mode ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Genauer gesagt ist es nicht erlaubt, `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu haben; zum Beispiel `\9` und `\07`.

#### Setzen von Eigenschaften auf primitive Werte

Der Strict Mode verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, daher wird im sloppy mode das Setzen von Eigenschaften ignoriert (no-op). Im Strict Mode wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden früher im Strict Mode als ein {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die Duplikation zur Laufzeit möglich machen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Änderungen, die Code, der früher Errors geworfen hat, zu nicht Errors machen, gelten immer als abwärtskompatibel. Dies ist ein guter Teil des Sprachkonzepts, Errors streng zu behandeln: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scope Managements

Der Strict Mode vereinfacht, wie Variablennamen auf bestimmte Variablendefinitionen im Code abgebildet werden. Viele Compiler-Optimierungen beruhen auf der Fähigkeit, zu sagen, dass Variable _X_ an _diesem_ Ort gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Namen zu Variablendefinitionen im Code bis zur Laufzeit vorzunehmen. Der Strict Mode entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler den Strict-Mode-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der Strict Mode verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` besteht darin, dass jeder Name im Block entweder einer Eigenschaft des übergebenen Objekts oder einer Variable im umgebenden (oder sogar globalen) Scope zur Laufzeit zugeordnet werden könnte; es ist vorher unmöglich zu wissen, welcher. Der Strict Mode macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die Alternative, das Objekt einer kurzen Variablen zuzuweisen und dann auf die entsprechende Eigenschaft auf dieser Variablen zuzugreifen, ist bereit, `with` zu ersetzen.

#### Nicht-leakendes eval

Im Strict Mode [führt `eval` keine neuen Variablen in den umgebenden Scope ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy model führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Scope ein. Dies bedeutet, dass allgemein in einer Funktion, die einen Aufruf an `eval` enthält, jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verdecken würde). Im Strict Mode erstellt `eval` Variablen nur für den evaluierten Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der String, der an `eval()` übergeben wird, im Strict Mode ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direct eval or indirect eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-Scoped Function Declarations

Die JavaScript-Sprachspezifikation hat von Anfang an nicht erlaubt, Funktionsdeklarationen in Block-Anweisungen zu verschachteln. Es war jedoch so intuitiv, dass die meisten Browser dies als Erweiterungsgrammatik implementierten. Leider wichen die Implementierungssemantiken voneinander ab, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringen konnte. Daher sind [block-scope Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im Strict Mode spezifiziert (während sie einst im Strict Mode nicht erlaubt waren), während das Verhalten im sloppy mode weiterhin abweichend zwischen den Browsern bleibt.

### Eval und arguments vereinfachen

Der Strict Mode macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten im sloppy mode eine beträchtliche Menge an magischem Verhalten: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften abzugleichen. Der Strict Mode macht große Fortschritte auf dem Weg, `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern der Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können nicht in der Sprachsyntax gebunden oder zugewiesen werden. Alle diese Versuche sind Syntaxfehler:

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

#### Kein Abgleichen zwischen Parametern und Argument-Indizes

Strict-Mode-Code gleicht Indizes des `arguments` Objekts nicht mit jeder Parameterbindung ab. In einer Funktion im sloppy mode, deren erstes Argument `arg` ist, setzt das Festlegen von `arg` auch `arguments[0]`, und vice versa (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments` Objekte für Strict-Mode-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert in dem entsprechenden `arguments[i]`.

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

### "Sicherung" von JavaScript

Der Strict Mode macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten, mit denen Benutzer JavaScript schreiben können, das von der Website im Namen anderer Benutzer ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, daher muss solches JavaScript teilweise transformiert werden, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalität zu verhindern. Die Flexibilität von JavaScript macht es praktisch unmöglich, dies ohne viele Laufzeit-Checks durchzuführen. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeit-Checks erhebliche Leistungskosten verursacht. Ein paar Strict-Mode-Anpassungen, plus die Anforderung, dass vom Benutzer eingereichtes JavaScript Strict-Mode-Code ist und auf eine bestimmte Weise aufgerufen wird, reduzieren die Notwendigkeit für diese Laufzeit-Checks erheblich.

#### Kein `this`-Ersatz

Der Wert, der als `this` an eine Funktion im Strict Mode übergeben wird, wird nicht gezwungen, ein Objekt zu sein (sog. "gekastet"). Für eine Funktion im sloppy mode ist `this` immer ein Objekt: Entweder das bereitgestellte Objekt, wenn es mit einem Objektwert als `this` aufgerufen wurde; oder der gekastete Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wurde; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wurde. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Kasten eine Leistungskost, sondern auch das Freilegen des globalen Objekts in Browsern ist ein Sicherheitsrisiko, weil das globale Objekt Zugriff auf Funktionalität bietet, die in "sicheren" JavaScript-Umgebungen eingeschränkt werden muss. Daher wird für eine Striktmodusfunktion das angegebene `this` nicht in ein Objekt gekastet, und wenn es nicht angegeben wird, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis).

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

#### Entfernung von Funktionen zum Stack-Walking

Im Strict Mode ist es nicht mehr möglich, im JavaScript-Stack zu "wandern". Viele Implementierungen implementierten zuvor einige Erweiterungsfunktionen, die es möglich machen, den upstream Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` am kürzlichsten aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diese Aufrufinstanz von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie es ermöglichen, dass "gesicherten“ Code auf "privilegierte" Funktionen und deren (möglicherweise nicht gesicherte) Argumente zugreift. Wenn `fun` im Strict Mode ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht-löschbare Eigenschaften, die ein Fehler auswerfen, wenn sie gesetzt oder abgerufen werden.

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode verweist `arguments.callee` auf die umschließende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umschließende Funktion! Zudem behindert `arguments.callee` erheblich Optimierungen wie das Inlining von Funktionen, da es möglich sein muss, eine Referenz auf die nicht-inlining Funktion zu liefern, wenn `arguments.callee` aufgerufen wird. `arguments.callee` für Strict-Mode-Funktionen ist eine nicht-löschbare Eigenschaft, die einen Fehler auswirft, wenn sie gesetzt oder abgerufen wird.

```js
"use strict";
function f() {
  return arguments.callee;
}
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der Strict Mode reserviert einige Namen mehr als der sloppy mode, von denen einige bereits in der Sprache verwendet werden und einige für die Zukunft reserviert sind, um die Implementierung zukünftiger Syntaxerweiterungen zu erleichtern.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang zum Strict Mode

Der Strict Mode wurde so konzipiert, dass der Übergang dazu schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und selbst Code auf der Funktionsebene schrittweise in den Strict Mode zu überführen.

Sie können eine Codebasis auf den Strict Mode umstellen, indem Sie zuerst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Wenn Sie `'use strict';` hinzufügen, führen die folgenden Fälle vor der Skriptausführung zu einem {{jsxref("SyntaxError")}}:

- Oktal-Syntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Erwartung zukünftiger Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklarieren von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklarieren desselben Eigenschaftsnamen zweimal in einem Objektliteralen `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie auf Fehler oder schlechte Praktiken hinweisen. Sie treten auf, bevor der Code ausgeführt wird, und sind daher leicht zu entdecken, solange der Code vom Laufzeitsystem analysiert wird.

### Neue Laufzeitfehler

JavaScript war früher dazu geneigt, in Kontexten stillschweigend zu scheitern, in denen das, was getan wurde, ein Fehler sein sollte. Der Strict Mode wirft in solchen Fällen einen Fehler. Wenn Ihre Codebasis solche Fälle enthält, sind Tests notwendig, um sicherzustellen, dass nichts beschädigt wird. Sie können solche Fehler auf der Funktionsebene aufspüren.

- Das Zuweisen zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Früher setzte dies eine Eigenschaft im globalen Objekt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert im globalen Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft von `globalThis` zu.
- Das Scheitern einer Zuweisung an eine Objekteigenschaft (z. B. es ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im sloppy model würde dies stillschweigend fehlschlagen.
- Das Löschen einer nicht-löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy model würde dies stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im Strict Mode ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Test-Suite solche subtile Unterschiede nicht entdeckt. Eine sorgfältige Überprüfung Ihrer Codebasis wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise bis zur Funktionsebene erfolgen.

- `this`
  - : Im sloppy model würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im Strict Mode ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt gekastet (oder das globale Objekt für `undefined` und `null`). Im Strict Mode wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy model führte das Ändern eines Werts im `arguments`-Objekt zu einer Änderung des entsprechenden benannten Arguments. Dadurch wurden Optimierungen für die JavaScript-Engine komplizierter und der Code schwerer lesbar/nachvollziehbar. Im Strict Mode wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, jedoch werden Änderungen entweder am `arguments`-Objekt oder an den benannten Argumenten nicht gegenseitig reflektiert.
- `eval`
  - : Im Strict Mode-Code erstellt `eval` keine neue Variable im Scope, aus dem es aufgerufen wurde. Natürlich wird auch der String im Strict Mode mit den Regeln des Strict Mode ausgewertet. Gründliche Tests sind erforderlich, um sicherzustellen, dass nichts beschädigt wird. `eval` nicht zu verwenden, wenn es nicht wirklich notwendig ist, kann eine andere pragmatische Lösung sein.
- Block-scope Funktionsdeklarationen
  - : Im sloppy model kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im Strict Mode ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
