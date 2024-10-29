---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Mehr")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der nicht-strikte Modus, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber es ist gut, ihn zu kennen, falls er Ihnen begegnet.

Der strikte Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden und dabei implizit aus dem "{{Glossary("Sloppy_mode", "sloppy mode")}}" auszutreten. Der strikte Modus ist nicht nur ein Subset: Er hat _absichtlich_ andere Semantiken als normaler Code. Browser, die den strikten Modus nicht unterstützen, führen strikten Modus-Code mit unterschiedlichem Verhalten im Vergleich zu Browsern, die ihn unterstützen, aus. Daher sollten Sie sich nicht auf den strikten Modus verlassen, ohne die Unterstützung der relevanten Aspekte des strikten Modus zu testen. Strikter Modus-Code und nicht-strikter Modus-Code können koexistieren, sodass Skripte schrittweise in den strikten Modus wechseln können.

Der strikte Modus nimmt mehrere Änderungen an den normalen JavaScript-Semantiken vor:

1. Er eliminiert einige stillschweigende JavaScript-Fehler, indem er sie in werfende Fehler umwandelt.
2. Er behebt Fehler, die es den JavaScript-Engines schwer machen, Optimierungen durchzuführen: Strikter Modus-Code kann manchmal schneller ausgeführt werden als identischer Code im nicht-strikten Modus.
3. Er verbietet einige Syntax, die wahrscheinlich in zukünftigen ECMAScript-Versionen definiert werden.

## Strikten Modus aktivieren

Der strikte Modus kann für _gesamte Skripte_ oder für _einzelne Funktionen_ angewendet werden. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, Zeichenfolgen, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergeben werden, und verwandte Funktionen sind entweder Funktionskörper oder gesamte Skripte, und das Aktivieren des strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor alle anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Um den strikten Modus für eine Funktion zu aktivieren, setzen Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) in den Funktionskörper vor alle anderen Anweisungen.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)-Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strikter Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strikten Modus, ohne dass eine Anweisung zur Initiierung erforderlich ist.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile eines [Klasses](/de/docs/Web/JavaScript/Reference/Classes)-Körpers sind strikter Modus-Code, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

- Änderungen, die Fehler in (Syntax- oder Laufzeit-) Fehler umwandeln
- Änderungen, die die Resolution von Variablenreferenzen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es erleichtern, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript vorbereiten.

### Umwandlung von Fehlern in Ausnahmen

Der strikte Modus wandelt einige zuvor akzeptierte Fehler in Fehler um. JavaScript wurde so gestaltet, dass es leicht für unerfahrene Entwickler ist, und manchmal gibt es Operationen, die Fehler sein sollten, nicht-fehlerhafte Semantiken. Manchmal behebt dies das unmittelbare Problem, aber manchmal schafft es in der Zukunft schlimmere Probleme. Der strikte Modus behandelt diese Fehler als Fehler, sodass sie entdeckt und umgehend behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im "sloppy mode" erstellt die falsche Eingabe einer Variablen bei einer Zuweisung eine neue Eigenschaft des globalen Objekts und funktioniert weiterhin. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strikten Modus einen Fehler:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Nicht zugewiesene Eigenschaften von Objekten

Der strikte Modus lässt Zuweisungen, die andernfalls stillschweigend fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Möglichkeiten, eine Eigenschaftszuweisung fehlschlagen zu lassen:

- Zuweisung an eine nicht-schreibbare Dateneigenschaft
- Zuweisung an eine nur-lesbare Zugriffsoroperty
- Zuweisung an eine neue Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht-schreibbare globale Variable. Im "sloppy mode" hat eine Zuweisung an `NaN` keine Wirkung; der Entwickler erhält kein Fehlerfeedback. Im strikten Modus löst eine Zuweisung an `NaN` eine Ausnahme aus.

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

#### Löschen von Objekten mit Eigenschaften

Der Versuch, eine nicht-konfigurierbare oder anderweitig nicht-löschbare (z. B. wird sie von einem Proxy-Handler wie [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) abgefangen, der `false` zurückgibt) Eigenschaft zu löschen, führt im strikten Modus zu einer Ausnahme (wo der Versuch vorher keine Wirkung hatte):

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

Wenn der Name eine konfigurierbare globale Eigenschaft ist, prefixen Sie ihn mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus erfordert, dass Funktionsparameter eindeutig sind. Im "sloppy mode" überdeckt das letzte duplizierte Argument vorherige identische benannte Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) verfügbar, sind also nicht vollständig unzugänglich. Dennoch macht dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte z. B. einen Tippfehler verbergen), sodass im strikten Modus doppelte Argumentnamen ein Syntaxfehler sind:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im nicht-strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, einen Restparameter oder einen destrukturierten Parameter hat.

#### Veraltete Oktal-Literale

Der strikte Modus [verbietet ein `0`-präfixiertes Oktal-Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im "sloppy mode" wird eine Zahl, die mit `0` beginnt, wie `0644`, als Oktalzahl (`0644 === 420`) interpretiert, wenn alle Ziffern kleiner als 8 sind. Unerfahrene Entwickler glauben manchmal, dass ein führendes Nullen-Syntax keine semantische Bedeutung hat, also könnten sie es als Ausrichtungsmittel verwenden — aber das ändert die Bedeutungen der Zahl! Eine führende Nullen-Syntax für Oktal ist selten nützlich und kann versehentlich verwendet werden, sodass der strikte Modus dies als Syntaxfehler behandelt:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Der standardisierte Weg, Oktal-Literale zu kennzeichnen, ist durch das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, die gleich `"%"` sind, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodenummern im Oktal zu repräsentieren. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler, es ist nicht erlaubt, `\` gefolgt von einer Dezimalziffer außer `0` zu haben, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07`.

#### Setzen von Eigenschaften auf primitive Werte

Der strikte Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im "sloppy mode" das Setzen von Eigenschaften ignoriert wird (no-op). Im strikten Modus wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Property-Namen

Doppelte Property-Namen wurden im strikten Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Property-Namen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die zur Laufzeit doppelte Eigenschaften ermöglichen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Das Erlauben von Code, der früher ein Fehler war, aber keine Fehler mehr erzeugt, wird immer als rückwärtskompatibel angesehen. Dies ist ein wesentlicher Teil der Sprache, die strikt im Werfen von Fehlern ist: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Geltungsbereichs-Managements

Der strikte Modus vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compiler-Optimierungen basieren darauf, dass eine Variable _X_ an _diese_ Stelle gespeichert ist: dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Name zu Variablendefinition im Code bis zur Laufzeit durchzuführen. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, damit der Compiler den strikten Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` ist, dass jeder Name innerhalb des Blocks entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen im umgebenden (oder gar globalen) Geltungsbereich zugeordnet werden könnte, und das zur Laufzeit; es ist unmöglich, vorher zu wissen, welcher. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die einfache Alternative, das Objekt einer kurzen Namensvariablen zuzuweisen und dann auf die entsprechende Property dieser Variablen zugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht-leakendes eval

Im strikten Modus [führt `eval` keine neuen Variablen in den umgebenden Geltungsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im "sloppy mode" führt `eval("var x;")` eine Variable `x` im umgebenden Funktions- oder im globalen Geltungsbereich ein. Das bedeutet, dass in einer Funktion, die einen Aufruf von `eval` enthält, im Allgemeinen jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einem bestimmten Definition zugeordnet werden muss (weil `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verbergen würde). Im strikten Modus erstellt `eval` nur Variablen für den zu evaluierenden Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der an `eval()` übergebene String im strikten Modus evaluiert wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-Scoped-Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hat seit ihrem Beginn keine Funktionsdeklarationen in Blockanweisungen erlaubt. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang zu bringen. Daher sind [Block-scoped Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im strikten Modus spezifiziert (während sie einst im strikten Modus verboten waren), während das "sloppy mode"-Verhalten unter den Browsern divergiert.

### Einfacher zu handhabende eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten eine erhebliche Menge an magischem Verhalten im "sloppy mode": `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der strikte Modus macht große Fortschritte darin, `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern von Bindings oder Zuweisungen von eval und arguments

Die Namen `eval` und `arguments` können in der Sprache nicht gebunden oder zugewiesen werden. Alle diese Versuche sind Syntaxfehler:

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

#### Keine Synchronisierung zwischen Parameter und arguments-Indizes

Strikter Modus-Code synchronisiert nicht die Indizes des `arguments`-Objekts mit jeder Parameterbindung. In einer "sloppy mode"-Funktion, deren erstes Argument `arg` ist, führt das Setzen von `arg` auch zu `arguments[0]`, und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für Funktionen im strikten Modus speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

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

Der strikte Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten, dass Benutzer JavaScript schreiben, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, daher muss solches JavaScript vor der Ausführung teils transformiert werden, um den Zugriff auf verbotene Funktionalitäten zu zensieren. Die Flexibilität von JavaScript macht es faktisch unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeitprüfungen einen erheblichen Performance-Kosten hat. Ein paar Anpassungen im strikten Modus, plus die Anforderung, dass benutzereingestelltes JavaScript strikter Modus-Code sein muss und auf eine bestimmte Weise aufgerufen wird, reduzieren die Notwendigkeit für diese Laufzeitprüfungen erheblich.

#### Kein this-Austausch

Der an eine Funktion im strikten Modus übergebene Wert `this` wird nicht gezwungen, ein Objekt zu sein (d. h. "boxed"). Für eine "sloppy mode"-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektwertigen `this` aufgerufen wird; oder der umschlossene Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Boxing ein Performance-Kostenpunkt, sondern das globale Objekt in Browsern bereitzustellen ist ein Sicherheitsrisiko, da das globale Objekt Zugang zu Funktionalitäten bietet, die in "sicheren" JavaScript-Umgebungen eingeschränkt werden müssen. Daher wird für eine Funktion im strikten Modus das angegebene `this` nicht in ein Objekt umgewandelt, und wenn es nicht angegeben wird, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stapel zu "durchlaufen". Viele Implementierungen hatten einige Erweiterungsfunktionen eingeführt, die es ermöglichten, den aufwärts gerichteten Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, da sie "gesichertem" Code ermöglichen, auf "privilegierte" Funktionen und deren (potenziell ungesicherte) Argumente zuzugreifen. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` undurchlässige Eigenschaften, die einen Fehler werfen, wenn sie gesetzt oder abgerufen werden:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im "sloppy mode" verweist `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie das Inline-Skalieren von Funktionen, denn es muss möglich gemacht werden, einen Verweis auf die nicht-inline-funktionale Funktion bereitzustellen, falls `arguments.callee` aufgerufen wird. Für Funktionen im strikten Modus ist `arguments.callee` eine nicht löschbare Eigenschaft, die einen Fehler auslöst, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Weitere reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der strikte Modus reserviert einige mehr Namen als der "sloppy mode", einige davon werden bereits in der Sprache verwendet, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter zu implementieren.

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

Der strikte Modus wurde so gestaltet, dass der Übergang zu ihm allmählich erfolgen kann. Es ist möglich, jede Datei individuell zu ändern und sogar den Code zum strikten Modus auf Funktionsebene zu überführen.

Sie können ein Codebasis in den strikten Modus migrieren, indem Sie zuerst `"use strict"` zu einem Teil des Quellcodes hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werfen die folgenden Fälle ein {{jsxref("SyntaxError")}}, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwenden von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentnamen
- Die Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Vorwegnahme zukünftiger Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Die Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Doppelte Property-Namen in einem Objektliteral `{a: 1, b: 3, a: 7}` zu deklarieren. Diese Einschränkung wurde später entfernt ([bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht entdeckt werden können, solange der Code vom Runtime geparst wird.

### Neue Laufzeitfehler

JavaScript schlug in Kontexten, in denen etwas getan wurde, was ein Fehler sein sollte, früher einfach fehl. Der strikte Modus wirft in solchen Fällen. Wenn sich solche Fälle in Ihrer Codebasis befinden, wird es notwendig sein, Tests durchzuführen, um sicherzustellen, dass nichts kaputt ist. Sie können solche Fehler auf Funktionen-Ebene screenen.

- Das Zuweisen zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Früher setzte dies eine Eigenschaft auf dem globalen Objekt, was selten die erwartete Wirkung ist. Wenn Sie wirklich einen Wert auf das globale Objekt setzen möchten, weisen Sie ihn ausdrücklich als Eigenschaft auf `globalThis` zu.
- Nicht gelungene Zuweisung an eine Objekt-Eigenschaft (z. B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im "sloppy mode" hätte dies stillschweigend fehlschlagen.
- Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im "sloppy mode" hätte dies stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Test-Suite diese Art von subtilem Unterschied nicht erfasst. Eine gründliche Überprüfung Ihrer Codebasis wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantiken Ihres Codes nicht beeinflussen. Zum Glück kann diese gründliche Überprüfung schrittweise auf Funktionsebene durchgeführt werden.

- `this`
  - : Im "sloppy mode" würden Funktionsaufrufe wie `f()` das globale Objekt als den `this`-Wert übergeben. Im strikten Modus ist es nun `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt umgeboxt (oder das globale Objekt für `undefined` und `null`). Im strikten Modus wird der Wert direkt ohne Umwandlung oder Ersetzung übergeben.
- `arguments`
  - : Im "sloppy mode" führte das Ändern eines Wertes im `arguments`-Objekt zur Änderung des entsprechenden benannten Arguments. Dies machte Optimierungen kompliziert für JavaScript-Engine und machte den Code schwerer lesbar/verstehbar. Im strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten als den benannten Argumenten initialisiert, aber Änderungen an dem `arguments`-Objekt oder den benannten Argumenten werden nicht gegenseitig reflektiert.
- `eval`
  - : Im strikten Modus-Code schafft `eval` keine neue Variable im Geltungsbereich, von dem es aufgerufen wurde. Natürlich wird im strikten Modus der String mit strikten Modus-Regeln evaluiert. Ausführliche Tests sind notwendig, um sicherzustellen, dass nichts kaputt ist. Die Vermeidung der Verwendung von eval, wenn es nicht wirklich notwendig ist, könnte eine weitere pragmatische Lösung sein.
- Block-Scoped-Funktionsdeklarationen
  - : Im "sloppy mode" können Funktionsdeklarationen innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
