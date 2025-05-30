---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{jsSidebar("Mehr")}}

> [!NOTE]
> Manchmal wird der Standard, der Nicht-Strikte Modus, als _{{Glossary("Sloppy_mode", "sloppy mode")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber es ist ratsam, sich dessen bewusst zu sein, für den Fall.

Der strikte Modus von JavaScript ist eine Möglichkeit, sich in eine eingeschränkte Variante von JavaScript "einzuwählen" und damit implizit den "{{Glossary("Sloppy_mode", "sloppy mode")}}" abzuwählen. Der strikte Modus ist nicht nur eine Teilmenge: Er hat _absichtlich_ andere Semantik als normaler Code. Strikt-Modus-Code und Nicht-Strikt-Modus-Code können koexistieren, sodass Skripte schrittweise in den Strikten Modus wechseln können.

Der strikte Modus macht mehrere Änderungen an der normalen JavaScript-Semantik:

1. Beseitigt einige stille JavaScript-Fehler, indem sie in Fehler umgewandelt werden.
2. Behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strikt-Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im Strikten Modus ist.
3. Verbietet einige Syntax, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert wird.

## Aufrufen des strikten Modus

Der strikte Modus gilt für _ganze Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}` Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute, an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergebene Strings und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte, und das Aufrufen des Strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den Strikten Modus für ein gesamtes Skript aufzurufen, platzieren Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) vor allen anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso, um den Strikten Modus für eine Funktion aufzurufen, platzieren Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) im Funktionskörper vor allen anderen Anweisungen.

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

Die `"use strict"` Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strikter Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im Strikten Modus, ohne dass eine Anweisung erforderlich ist, um ihn zu aktivieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind Strikt-Modus-Code, einschließlich sowohl [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der Umgang mit Syntax und Laufzeitverhalten ändert sich im Strikten Modus. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler als (Syntaxfehler oder zur Laufzeit) umwandeln
- Änderungen, die die Auflösung von Variablenreferenzen vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die das Schreiben von "sicherem" JavaScript erleichtern
- Änderungen, die die zukünftige Entwicklung von ECMAScript vorwegnehmen.

### Umwandeln von Fehlern in Fehler

Im Strikten Modus werden einige zuvor akzeptierte Fehler in Fehler umgewandelt. JavaScript wurde entwickelt, um es Anfängern einfach zu machen, und manchmal gibt es Operationen, die eigentlich Fehler sein sollten, eine nicht-fehlerhafte Semantik. Manchmal löst dies das unmittelbare Problem, aber manchmal schafft es schlimmere Probleme in der Zukunft. Der Strikte Modus behandelt diese Fehler als Fehler, damit sie entdeckt und schnell behoben werden.

#### Zuweisen zu nicht deklarierten Variablen

Der Strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im Sloppy Modus führt das versehentliche Schreiben einer Variable in einer Zuweisung dazu, dass eine neue Eigenschaft im globalen Objekt erstellt wird und weiterhin "arbeitet". Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im Strikten Modus einen Fehler:

<!-- cSpell:ignore mistypeVarible -->

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlgeschlagene Zuweisung zu Objekteigenschaften

Der Strikte Modus führt für Zuweisungen, die ansonsten stillschweigend fehlschlagen würden, zu einer Ausnahme. Es gibt drei Möglichkeiten, wie eine Eigenschaftszuweisung fehlschlagen kann:

- Zuweisung zu einer nicht schreibbaren Dateneigenschaft
- Zuweisung zu einer nur lesenden Zugriffs-Funktionseigenschaft
- Zuweisung zu einer neuen Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht-schreibbare globale Variable. Im Sloppy Modus macht das Zuweisen zu `NaN` nichts; der Entwickler erhält kein Fehlerrückmeldung. Im Strikten Modus wirft das Zuweisen zu `NaN` eine Ausnahme.

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

Versuche, eine nicht-konfigurierbare oder anderweitig unlöschbare ([z.B. wird sie von einem Proxy mithilfe des [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handlers, der `false` zurückgibt, abgefangen) Eigenschaft im Strikten Modus zu löschen, werfen einen Fehler (wo der Versuch zuvor keinen Effekt gehabt hätte).

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der Strikte Modus verbietet auch das Löschen einfacher Namen. `delete name` im Strikten Modus ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, sollte er mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) verwendet werden, um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der Strikte Modus erfordert, dass Funktionsparameter-Namen eindeutig sind. Im Sloppy Modus verbirgt das gleiche Argument, das zuletzt aufgerufen wurde, frühere gleichnamige Argumente. Diese früheren Argumente bleiben durch [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, sodass sie nicht vollständig unzugänglich sind. Dennoch ergibt dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte einen Tippfehler verbergen), sodass doppelte Argumentnamen im Strikten Modus einen Syntaxfehler darstellen:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im Nicht-Strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder destrukturierte Parameter hat.

#### Veraltete Oktalliterale

Der Strikte Modus [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im Sloppy Modus wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Anfängerentwickler glauben manchmal, dass ein führendes Nullpräfix keine semantische Bedeutung hat, sodass sie es möglicherweise als Ausrichtungswerkzeug verwenden – aber dies ändert die Bedeutung der Zahl! Eine führende Nullsyntax für Oktalzahlen ist selten nützlich und kann versehentlich verwendet werden, weshalb der Strikte Modus sie als Syntaxfehler betrachtet:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Methode zur Angabe von Oktalliteralen ist das `0o` Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, was `"%"` entspricht, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}} Zeichencode-Nummern im Oktal darzustellen. Im Strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formell ist es nicht erlaubt, ein `\` gefolgt von einer Dezimalziffer, die nicht `0` ist, zu haben, oder `\0` gefolgt von einer Dezimalziffer; zum Beispiel `\9` und `\07`.

#### Setzen von Eigenschaften auf primitive Werte

Der Strikte Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass das Setzen von Eigenschaften im Sloppy Modus ignoriert wird (keine Wirkung). Im Strikten Modus wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden früher als {{jsxref("SyntaxError")}} im Strikten Modus betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), die Duplikate zur Laufzeit möglich machen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Es wird immer als rückwärtskompatibel angesehen, Code, der früher Fehler ausgelöst hat, nicht mehr als Fehler zu behandeln. Dies ist ein guter Teil der Sprache, die streng darauf ist, Fehler zu werfen: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Blickmanagements

Der strikte Modus vereinfacht, wie Variablennamen einer bestimmten Variablen-Definition im Code zugeordnet werden. Viele Compiler-Optimierungen hängen davon ab, sagen zu können, dass die Variable _X_ an _diesem_ Ort gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Namen zu Variablen-Definitionen im Code bis zur Laufzeit durchzuführen. Der strikte Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler den Strikt-Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der Strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` ist, dass jeder Name im Block zur Laufzeit entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen im umgebenden (oder sogar globalen) Bereich zugeordnet werden könnte; es ist unmöglich, dies vorher zu wissen. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass es keine Möglichkeit gibt, dass ein Name in `with` zur Laufzeit auf eine unbekannte Stelle verweist:

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

Die Alternative, das Objekt einer kurzen Namensvariablen zuzuweisen und dann auf die entsprechende Eigenschaft dieser Variablen zuzugreifen, steht bereit, um `with` zu ersetzen.

#### Nicht durchlässiges eval

Im strikten Modus [führt `eval` keine neuen Variablen in den umgebenden Bereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im Sloppy Modus führt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Bereich ein. Dies bedeutet, dass im Allgemeinen in einer Funktion, die `eval` enthält, jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (da dieses `eval` möglicherweise eine neue Variable eingeführt hat, die die äußere Variable verdecken würde). Im Strikten Modus erstellt `eval` Variablen nur für den ausgewerteten Code, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der String, der `eval()` übergeben wird, im Strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-scopierte Funktionsdeklarationen

Die JavaScript-Sprachspezifikation erlaubte seit ihrem Beginn keine Funktionsdeklarationen, die in Blockanweisungen verschachtelt waren. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde für die Sprachspezifikation unmöglich, alle Implementierungen in Einklang zu bringen. Daher sind [block-scopierte Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im Strikten Modus spezifiziert (während sie im Strikten Modus einmal verboten waren), während das Sloppy-Modus-Verhalten unter Browsern weiterhin divergiert.

### Vereinfachung von eval und arguments

Der Strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr magisch. Beide beinhalten eine beträchtliche Menge an magischem Verhalten im Sloppy Modus: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, das benannte Argumente mit seinen indizierten Eigenschaften synchronisiert. Der Strikte Modus macht große Fortschritte, `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern der Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können nicht an eine andere Stelle im Sprachsyntax gebunden oder zugewiesen werden. Alle diese Versuche, dies zu tun, sind Syntaxfehler:

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

Strikter Modus-Code synchronisiert die Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer Sloppy-Modus-Funktion, deren erstes Argument `arg` ist, setzt das Setzen von `arg` auch `arguments[0]` und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für Strikt-Modus-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

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

Der Strikte Modus erleichtert das Schreiben von "sicherem" JavaScript. Einige Websites bieten jetzt Möglichkeiten, wie Benutzer JavaScript schreiben können, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf private Informationen des Benutzers zugreifen, sodass ein solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalität zu zensieren. JavaScripts Flexibilität macht es im Wesentlichen unmöglich, dies ohne viele Laufzeitüberprüfungen zu tun. Bestimmte Sprachfunktionen sind so weit verbreitet, dass das Durchführen von Laufzeitüberprüfungen erhebliche Leistungskosten verursacht. Einige Anpassungen im Strikten Modus, sowie die Anforderung, dass benutzerübermitteltes JavaScript Strikt-Modus-Code sein muss und es auf eine bestimmte Weise aufgerufen wird, reduzieren den Bedarf an diesen Laufzeitüberprüfungen erheblich.

#### Keine this-Substitution

Der im Strikten Modus an eine Funktion übergebene Wert `this` wird nicht dazu gezwungen, ein Objekt zu sein (auch bekannt als "boxing"). Für eine Sloppy-Modus-Funktion ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn `this` mit einem objektbewerteten Wert aufgerufen wurde, oder der "geboxte" Wert von `this`, wenn es mit einem primitiven Wert aufgerufen wurde, oder das globale Objekt, wenn es mit `undefined` oder `null` aufgerufen wurde. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist automatisches Boxing ein Leistungskostenfaktor, sondern das Aussetzen des globalen Objekts in Browsern ist ein Sicherheitsrisiko, da das globale Objekt Zugriff auf Funktionalität bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für eine Strikt-Modus-Funktion das angegebene `this` nicht zu einem Objekt "geboxt", und wenn nicht spezifiziert, ist `this` `undefined` anstelle von [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernen von Stack-Walking-Eigenschaften

Im Strikten Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen haben früher einige Erweiterungsfunktionen implementiert, die es möglich machten, den übergeordneten Anrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` im Begriff ist, aufgerufen zu werden, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie es "gesichertem" Code ermöglichen, auf "privilegierte" Funktionen und deren (möglicherweise ungesicherte) Argumente zuzugreifen. Wenn `fun` im Strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die beim Setzen oder Abrufen einen Fehler auslösen:

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

In ähnlicher Weise wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im Sloppy Modus bezieht sich `arguments.callee` auf die umschließende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umschließende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie das Inlining von Funktionen, da es ermöglicht werden muss, einen Verweis auf die un-inline-ite Funktion bereitzustellen, wenn `arguments.callee` zugegriffen wird. `arguments.callee` für Strikt-Modus-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler auslöst, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
function f() {
  return arguments.callee;
}
f(); // throws a TypeError
```

### Zukunftssicher machen von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der Strikte Modus reserviert einige mehr Namen als der Sloppy Modus, von denen einige bereits in der Sprache verwendet werden und einige für die Zukunft reserviert sind, um zukünftige Syntaxerweiterungen einfacher zu implementieren.

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

Der Strikte Modus wurde so gestaltet, dass der Übergang in ihn schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und sogar den Code bis auf die Funktionsebene in den Strikten Modus zu überführen.

Sie können eine Codebasis in den Strikten Modus migrieren, indem Sie zunächst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden die folgenden Fälle einen {{jsxref("SyntaxError")}} auslösen, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwenden von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Verwenden von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen oder Funktionsargumentnamen
- Verwenden eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Aussicht auf zukünftige Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, und `yield`
- Deklarieren zweier Funktionsparameter mit demselben Namen `function f(a, b, b) {}`
- Deklarieren desselben Eigenschaften-Namens zweimal in einem Objektliteral `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie offensichtliche Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht entdeckt werden können, solange der Code vom Laufzeitsystem geparst wird.

### Neue Laufzeitfehler

JavaScript schlug früher in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte, stillschweigend fehl. Der Strikte Modus wirft in solchen Fällen nun einen Fehler. Wenn Ihre Codebasis solche Fälle enthält, wird das Testen notwendig sein, um sicherzustellen, dass nichts defekt ist. Sie können nach solchen Fehlern auf Funktionsebenen-Schranke suchen.

- Das Zuweisen zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Früher wurde dadurch eine Eigenschaft auf dem globalen Objekt gesetzt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert auf das globale Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft von `globalThis` zu.
- Das Fehlschlagen bei der Zuweisung zu einer Eigenschaft eines Objekts (z.B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im Sloppy Modus würde dies stillschweigend fehlschlagen.
- Das Löschen einer nicht-löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im Sloppy Modus würde dies stillschweigend fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im Strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass ein Testsatz diese Art von subtilem Unterschied nicht erfasst. Eine sorgfältige Überprüfung Ihrer Codebasis wird wahrscheinlich notwendig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinträchtigen. Zum Glück kann diese sorgfältige Überprüfung schrittweise auf Funktionsebenen durchgeführt werden.

- `this`
  - : Im Sloppy Modus, würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im Strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt (oder das globale Objekt für `undefined` und `null`) "geboxt". Im Strikten Modus wird der Wert direkt ohne Umwandlung oder Ersatz übergeben.
- `arguments`
  - : Im Sloppy Modus, das Ändern eines Werts im `arguments`-Objekt ändert das entsprechende benannte Argument. Dies machte Optimierungen für JavaScript-Engines kompliziert und machte den Code schwerer lesbar/verstehbar. Im Strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten werden nicht wechselseitig widergespiegelt.
- `eval`
  - : Im Strikten Modus erstellt `eval` keine neue Variable im Bereich, von dem aus es aufgerufen wurde. Auch wird natürlich im Strikten Modus der String mit Regeln des Strikten Modus ausgewertet. Umfassende Tests müssen durchgeführt werden, um sicherzustellen, dass nichts kaputt geht. Wenn Sie `eval` nicht wirklich benötigen, kann eine andere pragmatische Lösung sein, es nicht zu verwenden.
- Block-scopierte Funktionsdeklarationen
  - : Im Sloppy Modus kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im Strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
