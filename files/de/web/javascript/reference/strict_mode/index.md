---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der nicht im "strict mode" ist, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber Sie sollten ihn kennen, für den Fall, dass er erwähnt wird.

Der "strict mode" von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden und damit implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzulehnen. Der "strict mode" ist nicht einfach ein Teilmenge: Er hat _absichtlich_ andere Semantiken als normaler Code. Browser, die den "strict mode" nicht unterstützen, führen den "strict mode"-Code mit einem anderen Verhalten aus als Browser, die dies tun. Daher sollte man sich nicht ohne Feature-Tests auf den "strict mode" verlassen, um die Unterstützung für die relevanten Aspekte des "strict mode" zu überprüfen. "Strict mode"-Code und Nicht-"strict mode"-Code können nebeneinander existieren, sodass Skripte schrittweise in den "strict mode" wechseln können.

Der "strict mode" bewirkt mehrere Änderungen in den normalen JavaScript-Semantiken:

1. Er beseitigt einige JavaScript-stille Fehler, indem er sie in Fehler umwandelt.
2. Er behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: "Strict mode"-Code kann manchmal schneller ausgeführt werden als identischer Code im Nicht-"strict mode".
3. Er verbietet einige Syntax, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivierung des strict mode

Der "strict mode" gilt für _ganze Skripte_ oder _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}` geschlossene Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, an [`setTimeout()`](/de/docs/Web/API/setTimeout) übergebene Zeichenfolgen und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte, und die Aktivierung des "strict mode" in ihnen funktioniert wie erwartet.

### "Strict mode" für Skripte

Um den "strict mode" für ein ganzes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### "Strict mode" für Funktionen

Ebenso setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen, um den "strict mode" für eine Funktion zu aktivieren.

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

Die Anweisung `"use strict"` kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### "Strict mode" für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im "strict mode", ohne dass eine Anweisung erforderlich ist, um ihn zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### "Strict mode" für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind "strict mode"-Code, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

## Änderungen im strict mode

Der "strict mode" verändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Syntaxfehler oder Laufzeitfehler umwandeln
- Änderungen, die die Auflösung von Variablennamen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es leichter machen, "sichere" JavaScript-Codes zu schreiben
- Änderungen, die die künftige Entwicklung von ECMAScript vorbereiten.

### Umwandlung von Fehlern in Syntax- oder Laufzeitfehler

Der "strict mode" ändert einige zuvor akzeptierte Fehler in Fehler um. JavaScript wurde entworfen, um einfach für Anfänger zu sein, und manchmal gibt es Operationen, die Fehler haben sollten, nicht-Fehler-Semantiken. Manchmal behebt dies das unmittelbare Problem, aber manchmal entstehen dadurch schlimmere Probleme in der Zukunft. Der "strict mode" behandelt diese Fehler als Fehler, sodass sie entdeckt und schnell behoben werden.

#### Zuordnung zu nicht deklarierten Variablen

Der "strict mode" macht es unmöglich, versehentlich globale Variablen zu erstellen. Im "sloppy mode" führt ein Tippfehler bei einer Zuordnung dazu, dass eine neue Eigenschaft am globalen Objekt erstellt wird und "weiter funktioniert". Zuordnungen, die versehentlich globale Variablen erstellen würden, werfen im "strict mode" einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlgeschlagene Zuordnung zu Objekteigenschaften

Der "strict mode" sorgt dafür, dass Zuordnungen, die ansonsten leise fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Möglichkeiten, eine Eigenschaftszuordnung fehlschlagen zu lassen:

- Zuordnung zu einer nicht beschreibbaren Dateneigenschaft
- Zuordnung zu einer nur lesenden Zugriffsoroeigenschaft
- Zuordnung zu einer neuen Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im "sloppy mode" tut die Zuordnung zu `NaN` nichts; der Entwickler erhält kein Feedback über den Fehler. Im "strict mode" löst die Zuordnung zu `NaN` eine Ausnahme aus.

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

#### Fehlgeschlagene Löschung von Objekteigenschaften

Versuche, eine nicht konfigurierbare oder anderweitig nicht löschbare (z.B. wird sie von einem Proxy's [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler abgefangen, der `false` zurückgibt) Eigenschaft zu löschen, werfen im "strict mode" einen Fehler, wo der Löschversuch ansonsten keine Wirkung gehabt hätte:

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der "strict mode" verbietet auch das Löschen von einfachen Namen. `delete name` im "strict mode" ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, setzen Sie `globalThis` davor, um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der "strict mode" erfordert, dass Funktionsparameternamen eindeutig sind. Im "sloppy mode" verbirgt das letzte doppelte Argument vorher identisch benannte Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, also sind sie nicht vollständig unzugänglich. Dennoch ergibt dieses Verstecken wenig Sinn und ist wahrscheinlich unerwünscht (zum Beispiel könnte es einen Tippfehler verbergen), so dass im "strict mode" doppelte Argumentnamen ein Syntaxfehler sind:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im Nicht-"strict mode", doppelte Parameternamen zu haben, wenn die Funktion einen Default-Parameter, Rest-Parameter oder Destrukturierungsparameter hat.

#### Veraltete Oktalliterale

Der "strict mode" [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im "sloppy mode" wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), sofern alle Ziffern kleiner als 8 sind. Anfänger glauben manchmal, dass ein führendes Nullpräfix keine semantische Bedeutung hat und verwenden es daher zur Ausrichtung — aber dadurch ändert sich die Bedeutung der Zahl! Eine führende Nullsyntax für das Oktal ist selten nützlich und kann versehentlich verwendet werden, daher macht der "strict mode" dies zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Möglichkeit, Oktalliterale zu kennzeichnen, ist durch das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, das gleichbedeutend mit `"%"` ist, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodes in Oktal darzustellen. Im "strict mode" ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formal ist es unzulässig, `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu verwenden; zum Beispiel `\9` und `\07`.

#### Eigenschaften auf primitive Werte setzen

Der "strict mode" verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapperobjekt, das nicht beobachtbar ist, daher wird das Setzen von Eigenschaften im "sloppy mode" ignoriert (no-op). Im "strict mode" wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden im "strict mode" früher als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die die Duplikation zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der früher Fehler war und nun keine Fehler mehr ist, wird immer als rückwärtskompatibel betrachtet. Das ist ein guter Teil der Sprache, die strikt darauf achtet, Fehler zu werfen: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Geltungsbereichs-Managements

Der "strict mode" vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compileroptimierungen beruhen auf der Fähigkeit zu sagen, dass Variable _X_ in _jenem_ Ort gespeichert ist: Dies ist entscheidend für die volle Optimierung von JavaScript-Code. JavaScript macht diese grundlegende Zuordnung von Namen zu Variablendefinition im Code bis zur Laufzeit manchmal unmöglich durchzuführen. Der "strict mode" entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler den "strict mode"-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der "strict mode" verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name innerhalb des Blocks entweder auf eine Eigenschaft des übergebenen Objekts oder auf eine Variable im umgebenden (oder sogar globalen) Geltungsbereich zur Laufzeit verweisen kann; es ist unmöglich, dies vorher zu wissen. Der "strict mode" macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die einfache Alternative, das Objekt einer kurzen Namensvariablen zuzuweisen und dann auf die entsprechende Eigenschaft dieser Variablen zuzugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht-auslaufendes eval

Im "strict mode" [führt `eval` keine neuen Variablen in den umgebenden Geltungsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im "sloppy mode" führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Geltungsbereich ein. Dies bedeutet, dass in einer Funktion, die einen `eval`-Aufruf enthält, jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verdecken würde). Im "strict mode" erstellt `eval` nur Variablen für den evaluierten Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der an `eval()` übergebene String im "strict mode" ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direkte eval oder indirekte eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-skopierte Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte von Anfang an keine Funktionsdeklarationen in Anweisungsblöcken erlaubt. Dennoch war dies so intuitiv, dass die meisten Browser dies als erweiterte Grammatik implementierten. Leider unterschieden sich die Implementierungssemantiken, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen vereinigt. Daher sind [block-skopierte Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im "strict mode" spezifiziert (während sie einst im "strict mode" untersagt waren), während das Verhalten im "sloppy mode" zwischen Browsern unterschiedlich bleibt.

### Vereinfachung von eval und arguments

Der "strict mode" macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr-magisch. Beide beinhalten eine beträchtliche Menge an magischem Verhalten im "sloppy mode": `eval`, um Bindungen hinzuzufügen oder zu entfernen und um Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der "strict mode" macht große Fortschritte dahin, `eval` und `arguments` wie Schlüsselwörter zu behandeln.

#### Verhinderung der Bindung oder Zuordnung von eval und arguments

Die Namen `eval` und `arguments` können nicht in der Sprachsyntax gebunden oder zugewiesen werden. Alle diese Versuche, dies zu tun, sind Syntaxfehler:

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

"Strict mode"-Code synchronisiert die Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer "sloppy mode"-Funktion, deren erstes Argument `arg` ist, setzt das Setzen von `arg` auch `arguments[0]` und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für "strict mode"-Funktionen speichern die ursprünglichen Argumente beim Aufruf der Funktion. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, und ein benanntes Argument verfolgt nicht den Wert im entsprechenden `arguments[i]`.

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

Der "strict mode" erleichtert das Schreiben von "sicherem" JavaScript. Einige Websites bieten nun Möglichkeiten, dass Nutzer JavaScript schreiben, das von der Website im Auftrag anderer Nutzer ausgeführt wird. JavaScript in Browsern kann auf private Informationen der Nutzer zugreifen, sodass solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalitäten zu zensieren. JavaScript's Flexibilität macht es effektiv unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Ausführen von Laufzeitprüfungen erhebliche Leistungskosten hat. Einige Änderungen im "strict mode", zusammen mit der Anforderung, dass vom Nutzer eingereichtes JavaScript "strict mode"-Code ist und auf eine bestimmte Weise aufgerufen wird, reduzieren erheblich die Notwendigkeit für diese Laufzeitprüfungen.

#### Kein this-Ersatz

Der als `this` an eine Funktion im "strict mode" übergebene Wert wird nicht gezwungen, ein Objekt zu sein (auch bekannt als "boxed"). Für eine "sloppy mode"-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objekteingewerteten `this` aufgerufen wird; oder der boxierte Wert von `this`, wenn es mit einem primitiven Wert für `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` für `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Boxen eine Leistungskosten, sondern das globale Objekt in Browsern freizulegen ist ein Sicherheitsrisiko, da das globale Objekt Zugriff auf Funktionen bietet, die in "sicheren" JavaScript-Umgebungen eingeschränkt werden müssen. Daher wird für eine "strict mode"-Funktion das angegebene `this` nicht in ein Objekt boxiert, und wenn es nicht angegeben ist, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Stapelverfolgungs-Eigenschaften

Im "strict mode" ist es nicht mehr möglich, auf den JavaScript-Stapel zu "wandern". Viele Implementierungen haben einige Erweiterungsfunktionen implementiert, die es ermöglichen, den nachgeschalteten Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, da sie "gesicherten" Code den Zugriff auf "privilegierte" Funktionen und deren (möglicherweise ungesicherte) Argumente ermöglichen. Wenn `fun` im "strict mode" ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die einen Fehler beim Setzen oder Abrufen werfen:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im "sloppy mode" bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie die Inline-Einfügung von Funktionen, da es möglich sein muss, eine Referenz auf die uninlineisierte Funktion bereitzustellen, wenn `arguments.callee` zugegriffen wird. `arguments.callee` für "strict mode"-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler wirft, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicheres JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der "strict mode" reserviert einige mehr Namen als der "sloppy mode", einige davon sind bereits in der Sprache verwendet, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter implementieren zu können.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang zum strict mode

Der "strict mode" wurde so gestaltet, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jede Datei individuell zu ändern und sogar auf höhere Funktionsgranularität umzusteigen.

Sie können eine Codebasis auf den "strict mode" umstellen, indem Sie zuerst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden bei folgenden Fällen vor der Skriptausführung {{jsxref("SyntaxError")}}-Fehler ausgelöst:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einen Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (vorbehaltlich zukünftiger Sprachfeatures): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Doppelte Eigenschaftsnamen in einem Objektliteral `{a: 1, b: 3, a: 7}` deklarieren. Diese Einschränkung wurde später entfernt ([bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, da sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten vor der Codeausführung auf, sodass sie leicht erkennbar sind, solange der Code vom Laufzeitsystem analysiert wird.

### Neue Laufzeitfehler

JavaScript war früher still in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Der "strict mode" wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, ist ein Test erforderlich, um sicherzugehen, dass nichts kaputt geht. Sie können solche Fehler auf der Funktionsgranularitätsebene anzeigen.

- Zuordnungen zu einer nicht deklarierten Variablen werfen einen {{jsxref("ReferenceError")}}. Das setzte früher eine Eigenschaft am globalen Objekt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert zum globalen Objekt setzen möchten, weisen Sie ihn explizit als eine Eigenschaft von `globalThis` zu.
- Fehlgeschlagene Zuordnungen zu einer Objekteigenschaft (z.B. sie ist schreibgeschützt) werfen einen {{jsxref("TypeError")}}. Im "sloppy mode" würde dies leise fehlschlagen.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im "sloppy mode" würde dies leise fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im "strict mode" ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Möglicherweise erkennt eine Test-Suite solche subtilen Unterschiede nicht. Eine sorgfältige Überprüfung Ihrer Codebasis ist wahrscheinlich notwendig, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinträchtigen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise bis zur Funktionsgranularität durchgeführt werden.

- `this`
  - : Im "sloppy mode" würden Funktionsaufrufe wie `f()` das globale Objekt als den `this`-Wert übergeben. Im "strict mode" ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wurde der Wert bei einem primitiven Wert in ein Objekt eingeschlossen (oder das globale Objekt für `undefined` und `null`). Im "strict mode" wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im "sloppy mode" änderte das Ändern eines Werts im `arguments`-Objekt das entsprechende benannte Argument. Dies machte Optimierungen für die JavaScript-Engine kompliziert und den Code schwieriger zu lesen/zu verstehen. Im "strict mode" wird das `arguments`-Objekt erstellt und mit den gleichen Werten wie die benannten Argumente initialisiert, aber Änderungen entweder im `arguments`-Objekt oder in den benannten Argumenten spiegeln sich nicht gegenseitig wider.
- `eval`
  - : Im "strict mode"-Code erstellt `eval` keine neue Variable im Geltungsbereich, aus dem es aufgerufen wurde. Natürlich wird im "strict mode" der String auch mit "strict mode"-Regeln ausgewertet. Umfangreiche Tests müssen durchgeführt werden, um sicherzustellen, dass nichts kaputt geht. "Eval" nicht zu verwenden, wenn Sie es nicht wirklich benötigen, könnte auch eine pragmatische Lösung sein.
- Block-skopierte Funktionsdeklarationen
  - : Im "sloppy mode" kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im "strict mode" ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
