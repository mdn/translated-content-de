---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standard-, Nicht-Strict-Modus als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, nur für den Fall.

Der Strict-Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden und damit implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzulehnen. Der Strict-Modus ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Browser, die den Strict-Modus nicht unterstützen, führen Strict-Mode-Code mit anderem Verhalten aus als Browser, die dies tun, also verlassen Sie sich nicht auf den Strict-Modus, ohne die Unterstützung für die relevanten Aspekte des Strict-Modus zu testen. Strict-Mode-Code und Nicht-Strict-Mode-Code können koexistieren, sodass Skripte den Strict-Modus schrittweise übernehmen können.

Der Strict-Modus ändert mehrere Aspekte der normalen JavaScript-Semantik:

1. Beseitigt einige stille JavaScript-Fehler, indem sie in Fehler umgewandelt werden.
2. Behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strict-Mode-Code kann manchmal schneller ausgeführt werden als derselbe Code, der nicht im Strict-Modus ist.
3. Verbietet einige Syntaxen, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivieren des Strict-Modus

Der Strict-Modus gilt für _gesamte Skripte_ oder _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, Strings, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und verwandte Funktionen übergeben werden, sind entweder Funktionskörper oder gesamte Skripte, und das Aktivieren des Strict-Modus in ihnen funktioniert wie erwartet.

### Strict-Modus für Skripte

Um den Strict-Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strict-Modus für Funktionen

Ebenso aktivieren Sie den Strict-Modus für eine Funktion, indem Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen setzen.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strict-Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im Strict-Modus, ohne dass eine Anweisung zum Initiieren erforderlich ist.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strict-Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind Strict-Mode-Code, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassenexpressionen](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der Strict-Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Fehler in Fehlermeldungen umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie auf Variablen zugegriffen wird
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript vorwegnehmen.

### Umwandlung von Fehlern in Fehlermeldungen

Der Strict-Modus ändert einige zuvor akzeptierte Fehler zu Fehlermeldungen. JavaScript wurde so entworfen, dass es einfach für Neuentwickler ist, und manchmal erhalten Operationen, die eigentlich Fehler sein sollten, eine nicht-fehlerhafte Semantik. Manchmal behebt dies das unmittelbare Problem, aber manchmal schafft dies schlimmere Probleme in der Zukunft. Der Strict-Modus behandelt diese Fehler als Fehlermeldungen, damit sie entdeckt und umgehend behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der Strict-Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im Sloppy-Modus erstellt das Vertippen einer Variablen in einer Zuweisung eine neue Eigenschaft im globalen Objekt und "funktioniert" weiter. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im Strict-Modus einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlschlagende Zuweisung zu Objekteigenschaften

Der Strict-Modus lässt Zuweisungen, die sonst stillschweigend scheitern würden, eine Ausnahme werfen. Es gibt drei Arten, eine Eigenschaftszuweisung scheitern zu lassen:

- Zuweisung zu einer nicht schreibbaren Dateneigenschaft
- Zuweisung zu einer nur-lesenden Accessor-Eigenschaft
- Zuweisung zu einer neuen Eigenschaft an einem [nicht-erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

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

#### Fehlschlagendes Löschen von Objekteigenschaften

Versuche, eine nicht-konfigurierbare oder anderweitig nicht löschbare (z.B. wird sie von einem Proxy's [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler abgefangen, der `false` zurückgibt) Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), werfen im Strict-Modus einen Fehler (wo der vorherige Versuch keine Wirkung hatte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der Strict-Modus verbietet auch das Löschen von Namen. `delete name` ist im Strict-Modus ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, setzen Sie ihn mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voran, um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Im Strict-Modus müssen Funktionsparameternamen eindeutig sein. Im Sloppy-Modus versteckt das zuletzt duplizierte Argument vorher identisch benannte Argumente. Diese früheren Argumente sind über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) weiterhin verfügbar, also sind sie nicht vollständig unzugänglich. Dennoch macht dieses Verstecken wenig Sinn und ist wahrscheinlich unerwünscht (es könnte z.B. einen Tippfehler verbergen), daher sind im Strict-Modus doppelte Argumentnamen ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im Nicht-Strict-Modus, wenn doppelte Parameternamen vorhanden sind, falls die Funktion einen Standardparameter, einen Restparameter oder einen destrukturierten Parameter hat.

#### Legacy-Oktalliterale

Der Strict-Modus [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im Sloppy-Modus wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalliteral (`0644 === 420`) interpretiert, wenn alle Ziffern kleiner als 8 sind. Novice-Entwickler glauben manchmal, dass ein Führungsnullpräfix keine semantische Bedeutung hat, also könnten sie es als Ausrichtungshilfe verwenden — aber dies ändert die Bedeutung der Zahl! Ein Führungsnullsyntax für das Oktal ist selten nützlich und kann versehentlich verwendet werden, daher macht der Strict-Modus es zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Weise, Oktalliterale zu kennzeichnen, ist über das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, die gleichbedeutend mit `"%"` sind, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodenummern im Oktalsystem darzustellen. Im Strict-Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler gesagt, ist es verboten, `\` gefolgt von einer Dezimalziffer außer `0` oder `\0` gefolgt von einer Dezimalziffer zu verwenden; zum Beispiel `\9` und `\07`.

#### Eigenschaften auf primitive Werte setzen

Der Strict-Modus verbietet die Zuweisung von Eigenschaften auf {{Glossary("Primitive", "Primitive")}} Werte. Das Zugreifen auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass es im Sloppy-Modus ignoriert wird (kein Effekt). Im Strict-Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen galten im Strict-Modus als {{jsxref("SyntaxError")}}. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die es ermöglichen, Duplikate zur Laufzeit zu erzeugen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der früher Fehler erzeugte, fehlerfrei zu machen, wird immer als abwärtskompatibel angesehen. Dies ist ein guter Teil der Sprache, die strikt darauf achtet, Fehler zu werfen: Sie lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scope-Managements

Der Strict-Modus vereinfacht, wie Variablennamen auf bestimmte Variablendefinitionen im Code abgebildet werden. Viele Compileroptimierungen basieren darauf, dass gesagt werden kann, dass sich die Variable _X_ an _diesem_ Ort befindet: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht diese grundlegende Zuordnung von Namen zur Variablendefinition im Code manchmal unmöglich, bis zur Laufzeit. Der Strict-Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler strikt-mode-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der Strict-Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` besteht darin, dass jeder Name innerhalb des Blocks entweder zu einer Eigenschaft des an ihn übergebenen Objekts oder zu einer Variablen im umliegenden (oder sogar globalen) Scope zur Laufzeit zugeordnet werden könnte; es ist vorher nicht möglich, zu wissen, welcher gemeint ist. Der Strict-Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die einfache Alternative, das Objekt einer kurzen Namenvariable zuzuweisen und dann auf die entsprechende Eigenschaft dieser Variablen zuzugreifen, ist bereit, `with` zu ersetzen.

#### Nicht-dringende eval

Im Strict-Modus [führt `eval` keine neuen Variablen in den umgebenden Scope ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im Sloppy-Modus fügt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder den globalen Scope ein. Das bedeutet, dass im Allgemeinen in einer Funktion, die einen Aufruf zu `eval` enthält, jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit zu einer bestimmten Definition abgebildet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verbergen würde). Im Strict-Modus erstellt `eval` nur Variablen für den zu evaluierenden Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der String, der an `eval()` übergeben wird, im Strict-Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direkte eval oder indirekte eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Blockscoped Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte von Anfang an nicht erlaubt, dass Funktionsdeklarationen in Blockanweisungen eingebettet werden. Dennoch war es so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Unglücklicherweise divergierten die Semantiken der Implementierungen, und es wurde unmöglich für die Sprachspezifikation, alle Implementierungen in Einklang zu bringen. Daher sind [blockscope-Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im Strict-Modus spezifiziert (während sie früher im Strict-Modus untersagt wurden), während das Sloppy-Modus-Verhalten unter den Browsern weiterhin auseinandergeht.

### Vereinfachung von eval und arguments

Der Strict-Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten eine beträchtliche Menge an magischem Verhalten im Sloppy-Modus: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, das benannte Argumente mit seinen indizierten Eigenschaften synchronisiert. Der Strict-Modus macht große Fortschritte, um `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern der Bindung oder Zuweisung eval und arguments

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

#### Keine Synchronisation zwischen Parameter- und Argumentindizes

Strict-Mode-Code synchronisiert die Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer Sloppy-Modus-Funktion, deren erstes Argument `arg` ist, setzt `arg` auch `arguments[0]`, und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für Strict-Mode-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments und umgekehrt.

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

Der Strict-Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten an, wie Benutzer JavaScript schreiben können, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, daher muss solches JavaScript vor seiner Ausführung teilweise transformiert werden, um den Zugriff auf verbotene Funktionalität zu zensieren. Die Flexibilität von JavaScript macht es praktisch unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so weit verbreitet, dass diese Laufzeitprüfungen erhebliche Leistungskosten mit sich bringen. Einige Änderungen im Strict-Modus, plus die Anforderung, dass benutzergestellter JavaScript-Code Strict-Mode-Code ist und auf eine bestimmte Weise aufgerufen wird, reduzieren diesen Bedarf an Laufzeitprüfungen erheblich.

#### Keine `this`-Substitution

Der Wert, der als `this` an eine Funktion im Strict-Modus übergeben wird, wird nicht gezwungen, ein Objekt zu sein (a.k.a. "boxed"). Für eine Sloppy-Modus-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn mit einem objektwertigen `this` aufgerufen; oder der boxed-Wert von `this`, wenn mit einem primitiven Wert als `this` aufgerufen; oder das globale Objekt, wenn mit `undefined` oder `null` als `this` aufgerufen. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist automatisches Boxing ein Leistungskostenfaktor, sondern die Offenlegung des globalen Objekts in Browsern ist ein Sicherheitsrisiko, da das globale Objekt Zugriff auf Funktionen bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für eine Strict-Modus-Funktion das spezifizierte `this` nicht zu einem Objekt boxed, und wenn nicht spezifiziert, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

Im Strict-Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen boten früher einige Erweiterungsfunktionen, die es ermöglichen, den Upstream-Caller einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie es ermöglichen, dass "gesicherter" Code auf "privilegierte" Funktionen und deren (möglicherweise ungesicherte) Argumente zugreift. Wenn `fun` im Strict-Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen einen Fehler werfen:

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

Ähnlich wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im Sloppy-Modus bezieht sich `arguments.callee` auf die schließende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die schließende Funktion! Zudem behindert `arguments.callee` erheblich Optimierungen wie die Inline-Darstellung von Funktionen, da es möglich gemacht werden muss, einen Verweis auf die nicht-inlinierte Funktion bereitzustellen, wenn `arguments.callee` abgerufen wird. `arguments.callee` für Strict-Modus-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler wirft, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Die Zukunft von JavaScript sichern

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der Strict-Modus reserviert einige weitere Namen als der Sloppy-Modus, einige davon werden bereits in der Sprache verwendet, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter umzusetzen.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Wechsel zum Strict-Modus

Der Strict-Modus wurde so gestaltet, dass der Wechsel dazu schrittweise erfolgen kann. Es ist möglich, jede Datei individuell zu ändern und sogar den Code bis zur Funktionsebenen-Granularität zum Strict-Modus zu wechseln.

Sie können eine Codebasis auf den Strict-Modus migrieren, indem Sie zuerst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Wenn Sie `'use strict';` hinzufügen, werfen die folgenden Fälle einen {{jsxref("SyntaxError")}}, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentnamen
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Voraussicht zukünftiger Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Deklaration desselben Eigenschaftennamens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, also sind sie leicht zu entdecken, solange der Code vom Laufzeitsystem geparst wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher still in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Der Strict-Modus wirft in solchen Fällen. Wenn Ihre Codebasis solche Fälle enthält, ist ein Test notwendig, um sicherzustellen, dass nichts kaputt ist. Sie können solche Fehler auf Funktionsebenen-Granularitätsebene screenen.

- Die Zuweisung an eine nicht deklarierte Variable wirft einen {{jsxref("ReferenceError")}}. Dies setzte früher eine Eigenschaft im globalen Objekt, was selten die erwartete Wirkung ist. Wenn Sie wirklich einen Wert auf das globale Objekt setzen möchten, weisen Sie ihm explizit eine Eigenschaft auf `globalThis` zu.
- Das Scheitern bei der Zuweisung zu einer Objekteigenschaft (z.B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies still scheitern.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies still scheitern.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im Strict-Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass ein Test-Suite diese Art von subtilen Unterschieden nicht erkennt. Eine sorgfältige Überprüfung Ihres Code-Bestands wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinträchtigen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise bis zur Funktionsebenen-Granularität erfolgen.

- `this`
  - : Im Sloppy-Modus würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im Strict-Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wurde der Wert, wenn er ein primitiver Wert war, in ein Objekt geboxed (oder das globale Objekt für `undefined` und `null`). Im Strict-Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im Sloppy-Modus modifiziert das Ändern eines Wertes im `arguments`-Objekt das entsprechende benannte Argument. Dies machte Optimierungen für die JavaScript-Engine kompliziert und erschwerte das Lesen/Verstehen des Codes. Im Strict-Modus wird das `arguments`-Objekt erstellt und mit denselben Werten initialisiert wie die benannten Argumente, aber Änderungen entweder am `arguments`-Objekt oder an den benannten Argumenten werden nicht wechselseitig reflektiert.
- `eval`
  - : Im Strict-Mode-Code führt `eval` keine neue Variable in den Scope ein, von dem es aufgerufen wurde. Außerdem wird der String natürlich im Strict-Modus ausgewertet. Gründliche Tests werden notwendig sein, um sicherzustellen, dass nichts kaputt geht. `eval` nicht zu verwenden, wenn Sie es nicht wirklich brauchen, könnte eine weitere pragmatische Lösung sein.
- Blockscoped Funktionsdeklarationen
  - : Im Sloppy-Modus kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im Strict-Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
