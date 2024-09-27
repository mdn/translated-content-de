---
title: Strenger Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der nicht streng ist, als _[sloppy mode](/de/docs/Glossary/Sloppy_mode)_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, nur für den Fall.

Der strenge Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden und damit implizit aus dem "[sloppy mode](/de/docs/Glossary/Sloppy_mode)" auszusteigen. Der strenge Modus ist nicht nur eine Teilmenge: Er hat _absichtlich_ unterschiedliche Semantiken im Vergleich zu normalem Code. Browser, die den strengen Modus nicht unterstützen, führen strengen Modus-Code mit anderem Verhalten aus als Browser, die dies tun. Verlassen Sie sich daher nicht auf den strengen Modus, ohne die Unterstützung der relevanten Aspekte des strengen Modus zu testen. Strenger Modus-Code und nicht-strenger Modus-Code können koexistieren, sodass Skripte schrittweise in den strengen Modus wechseln können.

Der strenge Modus ändert mehrere Aspekte der normalen JavaScript-Semantiken:

1. Er eliminiert einige der stillschweigenden JavaScript-Fehler, indem er diese in Fehler umwandelt.
2. Er behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strenger Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strengen Modus ist.
3. Er verbietet einige Syntaxelemente, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivieren des strengen Modus

Der strenge Modus gilt für _gesamte Skripte_ oder für _individuelle Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, bewirkt nichts. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, an [`setTimeout()`](/de/docs/Web/API/setTimeout) übergebene Zeichenfolgen und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte, und die Aktivierung des strengen Modus in ihnen funktioniert wie erwartet.

### Strenger Modus für Skripte

Um den strengen Modus für ein gesamtes Skript zu aktivieren, platzieren Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor allen anderen Anweisungen.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strenger Modus für Funktionen

Um den strengen Modus für eine Funktion zu aktivieren, platzieren Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) im Funktionskörper vor allen anderen Anweisungen.

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

Die Direktive `"use strict"` kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strenger Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strengen Modus, ohne dass eine Anweisung erforderlich ist, um ihn zu initiieren.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strenger Modus für Klassen

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) sind strikt Modus-Code, einschließlich sowohl der [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch der [Klassenexpressionen](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der strenge Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Laufzeit- oder Syntaxfehler umwandeln
- Änderungen zur Vereinfachung, wie Variablenreferenzen aufgelöst werden
- Änderungen zur Vereinfachung von `eval` und `arguments`
- Änderungen zur Erleichterung der Erstellung von "sicherem" JavaScript
- Änderungen zur Antizipation zukünftiger ECMAScript-Entwicklungen.

### Umwandlung von Fehlern in Runtime-Fehler

Der strenge Modus verwandelt einige früher akzeptierte Fehler in Runtime- oder Syntaxfehler. JavaScript wurde entwickelt, um Anfängern den Einstieg zu erleichtern und gelegentlich werden Operationen, die Fehler sein sollten, mit nicht-fehlerhaften Semantiken versehen. Manchmal behebt dies unmittelbar das Problem, manchmal schafft es aber auch größere Probleme in der Zukunft. Der strenge Modus behandelt diese Fehler als solche, sodass sie entdeckt und umgehend behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der strenge Modus verhindert die Möglichkeit, versehentlich globale Variablen zu erstellen. Im sloppy mode führt das falsche Schreiben einer Variablen in einer Zuweisung zur Erstellung einer neuen Eigenschaft am globalen Objekt und "funktioniert" weiter. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strengen Modus einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlerhafte Zuweisung zu Objekteigenschaften

Der strenge Modus erzwingt Zuweisungen, die andernfalls kommentarlos fehlschlagen würden, um eine Ausnahme zu werfen. Es gibt drei Möglichkeiten, bei einer Eigenschaftenzuweisung zu scheitern:

- Zuweisung zu einer nicht schreibbaren Dateneigenschaft
- Zuweisung zu einer schreibgeschützten Zugriffseigenschaft
- Zuweisung zu einer neuen Eigenschaft in einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht schreibbare globale Variable. Im sloppy mode bewirkt die Zuweisung an `NaN` nichts; der Entwickler erhält kein Fehlerinformations-Feedback. Im strengen Modus wirft die Zuweisung an `NaN` eine Ausnahme.

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

#### Löschen von Objekteigenschaften schlägt fehl

Versuche, eine nicht konfigurierbare oder auf andere Weise nicht löschbare (z.B. es wird von einem Proxy's [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Handler abgefangen, der `false` zurückgibt) Eigenschaft zu löschen, werfen im strengen Modus einen Fehler (wo, bevor der Versuch keinen Effekt gehabt hätte):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der strenge Modus verbietet auch das Löschen gewöhnlicher Namen. Das `delete name` im strengen Modus ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // syntax error
```

Handelt es sich bei dem Namen um eine konfigurierbare globale Eigenschaft, fügen Sie [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) hinzu, um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strenge Modus erfordert, dass Funktionsparameternamen eindeutig sind. Im sloppy mode verbirgt das letzte duplizierte Argument alle vorher identisch benannten Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, sind also nicht vollständig unzugänglich. Dennoch ergibt dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte ein Tippfehler sein), sodass im strengen Modus doppelte Argumentnamen ein Syntaxfehler sind:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im nicht-strengen Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, einen Restparameter oder einen destrukturierten Parameter hat.

#### Veraltete Oktalliterale

Der strenge Modus [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy mode wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Anfänger glauben manchmal, dass ein führendes Nullpräfix keine semantische Bedeutung hat, daher könnten sie es als Ausrichtungsgerät verwenden — aber dies ändert die Bedeutung der Zahl! Eine führend-Null-Syntax für das Oktal ist selten nützlich und kann versehentlich verwendet werden, weshalb der strenge Modus es zu einem Syntaxfehler macht:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Die standardisierte Methode zur Bezeichnung von Oktalliteralen erfolgt über das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, die `"%"` entspricht, können verwendet werden, um Zeichen durch erweiterte-[ASCII](/de/docs/Glossary/ASCII)-Zeichencodenummern im Oktal darzustellen. Im strengen Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler gesprochen, es ist unzulässig `\` gefolgt von jeglicher Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu haben; zum Beispiel `\9` und `\07`.

#### Eigenschaften auf primitiven Werten setzen

Der strenge Modus verbietet das Setzen von Eigenschaften auf [primitive](/de/docs/Glossary/Primitive) Werte. Der Zugriff auf eine Eigenschaft eines primitiven Werts erstellt implizit ein nicht beobachtbares Wrapper-Objekt, daher wird das Setzen von Eigenschaften im sloppy mode ignoriert (no-op). Im strengen Modus wird ein {{jsxref("TypeError")}} ausgelöst.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftennamen

Doppelte Eigenschaftennamen galten einst als {{jsxref("SyntaxError")}} im strengen Modus. Mit der Einführung von [berechneten Eigenschaftennamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die Duplikate zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 aufgehoben.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Code, der zuvor fehlerhaft war und in keiner Weise mehr fehlerhaft ist, gilt immer als abwärtskompatibel. Dies ist ein guter Aspekt der Tatsache, dass die Sprache streng darauf bedacht ist, Fehler zu werfen: Sie lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Gültigkeitsbereichsmanagements

Der strenge Modus vereinfacht, wie Variablennamen zu bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compiler-Optimierungen beruhen auf der Möglichkeit zu sagen, dass die Variable _X_ an _dieser_ Stelle gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht es manchmal erforderlich, dass diese grundlegende Zuordnung von Namen zu Variablendefinitionen im Code erst zur Laufzeit durchgeführt wird. Der strenge Modus entfernt die meisten Fälle, in denen dies passiert, sodass der Compiler strengen Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der strenge Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem mit `with` besteht darin, dass jeder Name innerhalb des Blocks entweder einer Eigenschaft des übergebenen Objekts oder einer Variablen im umgebenden (oder sogar globalen) Gültigkeitsbereich zur Laufzeit zugeordnet werden kann; es ist unmöglich, vorher zu wissen, welche. Der strenge Modus macht `with` zu einem Syntaxfehler, sodass es keine Möglichkeit gibt, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

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

Die einfache Alternative, das Objekt einem kurzen Namen zuzuordnen und dann auf die entsprechende Eigenschaft dieses Namens zuzugreifen, kann `with` ersetzen.

#### Nicht-leckendes eval

Im strengen Modus [führt `eval` keine neuen Variablen in den umgebenden Gültigkeitsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy mode führt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder den globalen Gültigkeitsbereich ein. Dies bedeutet, dass, allgemein gesprochen, in einer Funktion, die einen Aufruf zu `eval` enthält, jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit auf eine bestimmte Definition abgebildet werden muss (weil dieses `eval` möglicherweise eine neue Variable eingeführt haben könnte, die die äußere Variable verbirgt). Im strengen Modus erstellt `eval` nur für den evaluierten Code Variablen, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob die an `eval()` übergebene Zeichenfolge im strengen Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-skopierte Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte von Anfang an keine Funktionsdeklarationen erlaubt, die in Blockanweisungen geschachtelt sind. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungs-Grammatik implementiert haben. Leider divergierten die semantischen Implementierungen, und es wurde unmöglich für die Sprachspezifikation, alle Implementierungen zu vereinen. Daher sind [block-skopierte Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur im strengen Modus ausdrücklich spezifiziert (während sie im strengen Modus einst verboten waren), während das sloppy mode-Verhalten zwischen den Browsern divergent bleibt.

### Einfachere Behandlung von eval und arguments

Der strenge Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger bizarr und magisch. Beide beinhalten eine beträchtliche Menge an magischem Verhalten im sloppy mode: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der strenge Modus unternimmt große Anstrengungen, um `eval` und `arguments` als Schlüsselwörter zu behandeln.

#### Verhindern von Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können weder syntaktisch gebunden noch zugewiesen werden. Alle diese Versuche, dies zu tun, sind Syntaxfehler:

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

#### Keine Synchronisierung zwischen Parametern und Argument-Indizes

Strenger Modus-Code synchronisiert nicht die Indizes des `arguments`-Objekts mit jeder Parameterbindung. In einer Funktion im sloppy mode, deren erstes Argument `arg` ist, setzt das Setzen von `arg` auch `arguments[0]`, und umgekehrt (es sei denn, keine Argumente wurden bereitgestellt oder `arguments[0]` wurde gelöscht). `arguments`-Objekte für strengen Modus-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

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

Der strenge Modus erleichtert das Schreiben von "sicherem" JavaScript. Einige Websites bieten nun Möglichkeiten an, für Benutzer JavaScript bereitzustellen, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, weshalb solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionen zu zensieren. JavaScript's Flexibilität macht es effektiv unmöglich, dies ohne viele Laufzeit-Prüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass das Durchführen von Laufzeit-Prüfungen erhebliche Leistungskosten verursacht. Einige Anpassungen im strengen Modus sowie die Anforderung, dass vom Benutzer bereitgestelltes JavaScript strengen Modus-Code ist und auf eine bestimmte Weise aufgerufen wird, reduzieren den Bedarf an diesen Laufzeit-Prüfungen erheblich.

#### Keine Ersetzung von this

Der im strengen Modus an eine Funktion übergebene Wert von `this` wird nicht gezwungen, ein Objekt (sog. „boxed“) zu werden. Für eine Funktion im sloppy mode ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektwertigen `this` aufgerufen wird; oder der boxed Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` anzugeben.) Nicht nur ist das automatische Boxen ein Leistungskostenfaktor, sondern das Exponieren des globalen Objekts in Browsern ist ein Sicherheitsrisiko, weil das globale Objekt Zugriff auf Funktionen bietet, die „sichere“ JavaScript-Umgebungen einschränken müssen. Daher wird für eine Funktion im strengen Modus das angegebene `this` nicht in ein Objekt geboxed, und wenn es nicht angegeben ist, ist `this` `undefined` statt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung stackbesichtigender Eigenschaften

Im strengen Modus ist es nicht mehr möglich, den JavaScript Stack "abzulaufen". Viele Implementierungen verwendeten früher Erweiterungsfunktionen, die es ermöglichen, den aufgerufenen Caller einer Funktion zu erkennen. Wenn eine Funktion `fun` mitten im Aufruf ist, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für „sicheres“ JavaScript, weil sie es ermöglichen, auf "privilegierte" Funktionen und ihre (möglicherweise nicht gesicherten) Argumente zuzugreifen. Wenn `fun` im strengen Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die einen Fehler werfen, wenn sie gesetzt oder abgerufen werden:

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

Ebenso wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy mode bezieht sich `arguments.callee` auf die umschließende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umschließende Funktion! Darüber hinaus enthält `arguments.callee` erheblich Optimierungen wie Inlining-Funktionen, da es möglich gemacht werden muss, eine Referenz auf die nicht-inline-Funktion bereitzustellen, wenn auf `arguments.callee` zugegriffen wird. `arguments.callee` für strikte Modus-Funktionen ist eine nicht löschbare Eigenschaft, die einen Fehler wirft, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der strenge Modus reserviert einige zusätzliche Namen im Vergleich zum sloppy mode, einige davon werden bereits in der Sprache verwendet, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen einfacher zu implementieren.

- `implements`
- `interface`
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)

## Übergang in den strengen Modus

Der strenge Modus wurde so entworfen, dass der Übergang zu ihm schrittweise erfolgen kann. Es ist möglich, jede Datei individuell zu ändern und sogar auf functions-Ebene Streng-Modus-Code zu transformieren.

Sie können einen Codebestand in den strengen Modus migrieren, indem Sie zuerst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Wenn Sie `'use strict';` hinzufügen, werden die folgenden Fälle einen {{jsxref("SyntaxError")}} werfen, bevor das Skript ausgeführt wird:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) bei einem Variablennamen `delete myVariable`;
- Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargument-Name
- Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Erwartung zukünftiger Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Erklärung von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Doppelte Eigenschaftennamen in einem Objektliteral `{a: 1, b: 3, a: 7}` deklarieren. Diese Einschränkung wurde später entfernt ([Bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, da sie einfache Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht erkennbar sind, solange der Code vom Laufzeitsystem geparst wird.

### Neue Laufzeitfehler

JavaScript scheiterte früher kommentarlos in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Im strengen Modus wird in solchen Fällen geworfen. Wenn Ihr Codebestand solche Fälle enthält, sind Tests erforderlich, um sicherzustellen, dass nichts kaputt geht. Sie können solche Fehler auf Funktionenebene durchsehen.

- Die Zuweisung an eine nicht deklarierte Variable löst einen {{jsxref("ReferenceError")}} aus. Dies würde früher eine Eigenschaft auf dem globalen Objekt setzen, das selten der erwartete Effekt ist. Wenn Sie wirklich eine Eigenschaft am globalen Objekt setzen möchten, weisen Sie sie explizit als Eigenschaft auf `globalThis` zu.
- Das Scheitern der Zuweisung einer Objekteigenschaft (z.B. sie ist schreibgeschützt) löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde dies kommentarlos fehlschlagen.
- Das Löschen einer nicht löschbaren Eigenschaft löst einen {{jsxref("TypeError")}} aus. Im sloppy mode würde dies kommentarlos fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) löst einen {{jsxref("TypeError")}} aus, wenn die Funktion im strengen Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Testsuite diese Art subtile Unterschiede nicht aufdeckt. Eine sorgfältige Überprüfung Ihres Codebestands wird wahrscheinlich erforderlich sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise bis auf die Funktionsebene durchgeführt werden.

- `this`
  - : Im sloppy mode würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strengen Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert ein primitiver Wert war, wurde dieser in ein Objekt geboxed (oder das globale Objekt für `undefined` und `null`). Im strengen Modus wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im sloppy mode würde das Ändern eines Wertes im `arguments`-Objekt das entsprechende benannte Argument ändern. Dies machte Optimierungen kompliziert für JavaScript-Engines und machte Code schwieriger zu lesen/verstehen. Im strengen Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen entweder im `arguments`-Objekt oder in den benannten Argumenten werden nicht gegenseitig reflektiert.
- `eval`
  - : Im strengen Modus erstellt `eval` keine neue Variable im Gültigkeitsbereich, aus dem es aufgerufen wurde. Natürlich wird der String im strengen Modus evaluiert. Umfangreiche Tests werden erforderlich sein, um sicherzustellen, dass nichts kaputt geht. Die Verwendung von `eval` zu vermeiden, wenn Sie es nicht wirklich benötigen, könnte eine weitere pragmatische Lösung sein.
- Block-Skopierte Funktionsdeklarationen
  - : Im sloppy mode könnte eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strengen Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
