---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 5398febc2911d5f95c795c0c73b924b1b6716fc3
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standard-, nicht-strikte Modus als _{{Glossary("Sloppy_mode", "Sloppy-Modus")}}_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, falls dies auftritt.

Der strikte Modus von JavaScript ist eine Möglichkeit, auf eine eingeschränktere Variante von JavaScript umzusteigen und damit implizit den "{{Glossary("Sloppy_mode", "Sloppy-Modus")}}" abzulehnen. Der strikte Modus ist nicht nur eine Teilmenge: Er hat _bewusst_ andere Semantiken als normaler Code. Browser, die den strikten Modus nicht unterstützen, führen strikten Modus-Code mit anderem Verhalten aus als Browser, die dies tun. Verlassen Sie sich daher nicht auf den strikten Modus, ohne die Unterstützung der relevanten Aspekte des strikten Modus zu prüfen. Strikter Modus-Code und nicht-strikter Modus-Code können nebeneinander existieren, sodass Skripte schrittweise in den strikten Modus wechseln können.

Der strikte Modus verändert mehrere Aspekte der normalen JavaScript-Semantik:

1. Wandelt einige JavaScript-stillen Fehler in Fehler, die geworfen werden.
2. Korrigiert Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strikter Modus-Code kann manchmal schneller ausgeführt werden als identischer Code, der nicht im strikten Modus ist.
3. Verbietet einige Syntaxen, die wahrscheinlich in zukünftigen Versionen von ECMAScript definiert werden.

## Aktivierung des strikten Modus

Der strikte Modus gilt für _ganze Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, hat keine Wirkung. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, Zeichenfolgen, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) übergeben werden, und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte, und die Aktivierung des strikten Modus in ihnen funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript zu aktivieren, setzen Sie die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) vor jede andere Anweisung.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strikter Modus für Funktionen

Ebenso setzen Sie, um den strikten Modus für eine Funktion zu aktivieren, die _genaue_ Anweisung `"use strict";` (oder `'use strict';`) in den Körper der Funktion vor jede andere Anweisung.

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

Die `"use strict"`-Direktive kann nur auf den Körper von Funktionen mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [Rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

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

Alle Teile des Körpers einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) befinden sich im strikten Modus, einschließlich sowohl der [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch der [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

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

Der strikte Modus verändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Fehler umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie Variablenreferenzen aufgelöst werden
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehler in Fehler umwandeln

Der strikte Modus wandelt einige früher anerkannte Fehler in Fehler um. JavaScript wurde entwickelt, um für Anfänger einfach zu sein, und manchmal verleiht es Operationen, die Fehler sein sollten, eine nicht-fehlerhafte Semantik. Manchmal behebt dies das sofortige Problem, aber manchmal entstehen dadurch schlimmere Probleme in der Zukunft. Der strikte Modus behandelt diese Fehler als Fehler, sodass sie entdeckt und umgehend behoben werden können.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im Sloppy-Modus wird durch einen Tippfehler bei einer Variablen in einer Zuweisung eine neue Eigenschaft am globalen Objekt erstellt und weiter "funktioniert". Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strikten Modus einen Fehler:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Fehlende Zuweisungen zu Objekteigenschaften

Der strikte Modus lässt Zuweisungen, die andernfalls stillschweigend fehlschlagen würden, stattdessen eine Ausnahme auslösen. Es gibt drei Möglichkeiten, eine Objekteigenschaftszuweisung zu scheitern:

- Zuweisung an eine nicht beschreibbare Dateneigenschaft
- Zuweisung an eine nur-Lese-Zugriffseigenschaft
- Zuweisung an eine neue Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht beschreibbare globale Variable. Im Sloppy-Modus hat die Zuweisung an `NaN` keine Wirkung; der Entwickler erhält keine Rückmeldung über das Scheitern. Im strikten Modus wirft die Zuweisung an `NaN` eine Ausnahme.

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

#### Fehlendes Löschen von Objekteigenschaften

Versuche, eine nicht konfigurierbare oder anderweitig nicht löschbare (z. B. wird sie von einem Proxy-Handler [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) abgefangen, der `false` zurückgibt) Eigenschaft zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), werfen im strikten Modus (wo der Versuch vorher keine Wirkung hatte):

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

Wenn der Name eine konfigurierbare globale Eigenschaft ist, fügen Sie ihm [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voran, um ihn zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus erfordert, dass Funktionsparameternamen eindeutig sind. Im Sloppy-Modus verbirgt das letzte doppelte Argument vorher identisch benannte Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugänglich, sodass sie nicht vollständig unzugänglich sind. Trotzdem ergibt dieses Verbergen wenig Sinn und ist wahrscheinlich unerwünscht (es könnte z. B. einen Tippfehler verbergen), daher sind im strikten Modus doppelte Argumentnamen ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

Es ist auch ein Syntaxfehler im Non-Strict-Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder destrukturierten Parameter hat.

#### Legacy-Oktalliterale

Der strikte Modus [verbietet ein `0`-präfixiertes Oktalliteral](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im Sloppy-Modus wird eine Zahl, die mit einer `0` beginnt, wie `0644`, als Oktalzahl (`0644 === 420`) interpretiert, wenn alle Ziffern kleiner als 8 sind. Anfänger glauben manchmal, dass ein führendes Null-Präfix keine semantische Bedeutung hat, sodass sie es möglicherweise als Ausrichtungsgerät verwenden - aber das ändert die Bedeutung der Zahl! Ein führendes Null-Syntax für die Oktalen ist selten nützlich und kann versehentlich verwendet werden, daher macht der strikte Modus sie zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

Der standardisierte Weg zur Kennzeichnung von Oktalliteralen ist über das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, welches gleich `"%"` ist, können verwendet werden, um Zeichen durch erweiterte-{{Glossary("ASCII", "ASCII")}}-Zeichencodenummern im Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formaler ist es untersagt, `\` gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu haben; z. B. `\9` und `\07`.

#### Eigenschaften auf primitiven Werten setzen

Der strikte Modus verbietet das Setzen von Eigenschaften auf {{Glossary("Primitive", "primitive")}} Werte. Der Zugriff auf eine Eigenschaft auf einem primitiven Wert erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im Sloppy-Modus das Setzen von Eigenschaften ignoriert wird (kein Effekt). Im strikten Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden früher im strikten Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> [!NOTE]
> Wenn Code, der früher Fehler verursacht hat, zu nicht-Fehlern wird, wird das immer als rückwärtskompatibel betrachtet. Dies ist ein guter Teil der Sprache, die strikt darauf bedacht ist, Fehler zu werfen: Es schafft Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scope-Managements

Der strikte Modus vereinfacht, wie Variablennamen auf bestimmte Variablendefinitionen im Code abbilden. Viele Compiler-Optimierungen hängen davon ab, dass man sagen kann, dass die Variable _X_ an _diesem_ Ort gespeichert ist: Dies ist entscheidend, um JavaScript-Code vollständig zu optimieren. JavaScript macht manchmal diese grundlegende Zuordnung von Namen zu Variablendefinitionen im Code unmöglich bis zur Laufzeit. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, sodass der Compiler den strikten Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` ist, dass jeder Name innerhalb des Blocks entweder auf eine Eigenschaft des übergebenen Objekts oder auf eine Variable im umgebenden (oder sogar globalen) Scope zur Laufzeit abbildet; es ist unmöglich, vorher zu wissen, welche. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass keine Chance besteht, dass ein Name in einem `with` zur Laufzeit auf eine unbekannte Position verweist:

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

#### Nicht-leckendes eval

Im strikten Modus [stellt `eval` keine neuen Variablen im umgebenden Scope bereit](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im Sloppy-Modus führt `eval("var x;")` eine Variable `x` im umgebenden Funktions- oder globalen Scope ein. Das bedeutet, dass im Allgemeinen jede Funktion, die einen Aufruf von `eval` enthält, jede Variable, die nicht auf ein Argument oder eine lokale Variable verweist, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verbergen würde). Im strikten Modus erstellt `eval` nur für den ausgewerteten Code Variablen, sodass `eval` nicht beeinflussen kann, ob ein Name auf eine äußere Variable oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob die an `eval()` übergebene Zeichenfolge im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-skopierte Funktionsdeklarationen

Die JavaScript-Sprachspezifikation ließ von Anfang an keine Funktionsdeklarationen zu, die in Blockanweisungen verschachtelt sind. Es war jedoch so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Semantiken der Implementierungen, und es wurde unmöglich, dass die Sprachspezifikation alle Implementierungen in Einklang bringt. Daher sind [block-skopierte Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur explizit im strikten Modus spezifiziert (während sie einst im strikten Modus unzulässig waren), während das Verhalten im Sloppy-Modus zwischen den Browsern divergiert bleibt.

### Vereinfachung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger seltsam magisch. Beide beinhalten im Sloppy-Modus eine beträchtliche Menge an magischem Verhalten: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments` synchronisieren benannte Argumente mit seinen indizierten Eigenschaften. Der strikte Modus macht große Fortschritte bei der Behandlung von `eval` und `arguments` als Schlüsselwörter.

#### Verhindern von Bindung oder Zuweisung von eval und arguments

Die Namen `eval` und `arguments` können nicht in der Sprachsyntax gebunden oder zugewiesen werden. All diese Versuche, dies zu tun, sind Syntaxfehler:

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

#### Kein Synchronisieren zwischen Parametern und Argumentindizes

Strikter Modus-Code synchronisiert Indizes des `arguments`-Objekts nicht mit jeder Parameterbindung. In einer Sloppy-Modus-Funktion, deren erstes Argument `arg` ist, setzt das Ändern von `arg` auch `arguments[0]` und umgekehrt (es sei denn, es wurden keine Argumente bereitgestellt oder `arguments[0]` wird gelöscht). `arguments`-Objekte für strikte Modus-Funktionen speichern die ursprünglichen Argumente, als die Funktion aufgerufen wurde. `arguments[i]` verfolgt den Wert des entsprechenden benannten Arguments nicht, noch verfolgt ein benanntes Argument den Wert des entsprechenden `arguments[i]`.

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

Der strikte Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten, wie Benutzer JavaScript schreiben können, das von der Website _im Namen anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen, daher muss solches JavaScript teilweise transformiert werden, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalitäten zu zensieren. Die Flexibilität von JavaScript macht es tatsächlich unmöglich, dies ohne zahlreiche Laufzeitüberprüfungen zu tun. Einige Sprachfunktionen sind so weit verbreitet, dass das Durchführen von Laufzeitüberprüfungen erhebliche Leistungskosten mit sich bringt. Einige einfache Anpassungen im strikten Modus und die Anforderung, dass von Benutzern eingereichtes JavaScript im strikten Modus-Code ist und auf bestimmte Weise aufgerufen wird, reduzieren die Notwendigkeit dieser Laufzeitüberprüfungen erheblich.

#### Keine this-Substitution

Der im strikten Modus an eine Funktion übergebene Wert `this` wird nicht in ein Objekt (d.h. "geboxt") gezwungen. Für eine Funktion im Sloppy-Modus ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn mit einem objektwertigen `this` aufgerufen; oder der geboxt Wert von `this`, wenn mit einem primitivwertigen `this` aufgerufen; oder das globale Objekt, wenn mit `undefined` oder `null` als `this` aufgerufen. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` festzulegen.) Automatisches Boxing ist nicht nur ein Leistungskosten, sondern die Ausstellung des globalen Objekts in Browsern ist ein Sicherheitsproblem, da das globale Objekt Zugriff auf Funktionalitäten bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher für eine Funktion im strikten Modus wird das angegebene `this` nicht in ein Objekt geboxt, und wenn nicht angegeben, ist `this` `undefined` anstatt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung von Eigenschaften, die das Stack-Walking unterstützen

Im strikten Modus ist es nicht mehr möglich, den JavaScript-Stack zu "durchlaufen". Viele Implementierungen verwendeten einige Erweiterungsfunktionalitäten, die es möglich machten, den stromaufwärtigen Aufrufer einer Funktion zu erkennen. Wenn eine Funktion `fun` gerade aufgerufen wird, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die `fun` am wenigsten aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diese Aufrufung von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, da sie es "gesichertem" Code ermöglichen, auf "privilegierte" Funktionen und deren (möglicherweise nicht gesicherte) Argumente zuzugreifen. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht-löschbare Eigenschaften, die eine Ausnahme werfen, wenn sie gesetzt oder abgerufen werden:

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

Ähnlich wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im Sloppy-Modus bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Zudem behindert `arguments.callee` wesentliche Optimierungen wie das Inline von Funktionen erheblich, da es möglich gemacht werden muss, einen Verweis auf die nicht-inlineierte Funktion bereitzustellen, wenn auf `arguments.callee` zugegriffen wird. `arguments.callee` für Funktionen im strikten Modus ist eine nicht-löschbare Eigenschaft, die einen Fehler auslöst, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Zukunftssicherung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht als Variablennamen verwendet werden können. Der strikte Modus reserviert einige Namen mehr als der Sloppy-Modus, von denen einige bereits in der Sprache verwendet werden und andere für die Zukunft reserviert sind, um zukünftige Syntaxerweiterungen einfacher implementieren zu können.

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

Der strikte Modus wurde so konzipiert, dass der Übergang schrittweise erfolgen kann. Es ist möglich, jede Datei einzeln zu ändern und sogar Code auf die Funktionsebene in den strikten Modus zu überführen.

Sie können einen Codebestand in den strikten Modus migrieren, indem Sie zuerst `"use strict"` zu einem Stück Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';`, werfen die folgenden Fälle vor der Skriptausführung einen {{jsxref("SyntaxError")}}:

- Octal-Syntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Die Verwendung von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einem Variablennamen `delete myVariable`;
- Die Verwendung von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variablen- oder Funktionsargumentname
- Die Verwendung eines der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Bezug auf zukünftige Sprachfunktionen): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`
- Die Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Die Deklaration desselben Eigenschaftsnamens zweimal in einem Objekt-Literal `{a: 1, b: 3, a: 7}`. Diese Einschränkung wurde später entfernt ([Fehler 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, da sie schlichtweg Fehler oder schlechte Praktiken aufzeigen. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code vom Runtime-Umgebung analysiert wird.

### Neue Laufzeitfehler

JavaScript hat früher lautlos versagt in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte. Der strikte Modus wirft in solchen Fällen. Wenn Ihr Codebestand solche Fälle enthält, sind Tests notwendig, um sicherzustellen, dass nichts kaputt geht. Sie können solche Fehler auf der Funktionseben schrittweise überprüfen.

- Die Zuweisung zu einer nicht deklarierten Variablen wirft einen {{jsxref("ReferenceError")}}. Dies setzte früher eine Eigenschaft am globalen Objekt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert für das globale Objekt festlegen möchten, weisen Sie ihn explizit als Eigenschaft auf `globalThis` zu.
- Das Scheitern beim Zuweisen zu einer Objekteigenschaft (z.B. sie ist schreibgeschützt) wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies lautlos fehlschlagen.
- Das Löschen einer nicht-löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im Sloppy-Modus würde dies lautlos fehlschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller), oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass ein Testsuite solche subtile Unterschiede nicht erfasst. Eine sorgfältige Überprüfung Ihres Codebestands ist wahrscheinlich notwendig, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise auf Funktionsebene durchgeführt werden.

- `this`
  - : Im Sloppy-Modus werden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wird der Wert direkt ohne Konvertierung oder Ersatz übergeben, wenn es sich um einen primitivwertigen Wert handelt (oder das globale Objekt für `undefined` und `null`). Im strikten Modus wird der Wert direkt ohne Konvertierung oder Ersatz übergeben.
- `arguments`
  - : Im Sloppy-Modus modifiziert das Ändern eines Wertes im `arguments`-Objekt das entsprechende benannte Argument. Dies erschwerte Optimierungen für JavaScript-Engine und machte den Code schwerer lesbar/verstehbar. Im strikten Modus wird das `arguments`-Objekt erstellt und mit denselben Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten sind nicht wechselseitig.
- `eval`
  - : Im strikten Modus erstellt `eval` keine neue Variable im Scope, aus dem es aufgerufen wurde. Auch wird die Zeichenfolge natürlich im strikten Modus bewertet. Sorgfältiges Testen ist notwendig, um sicherzustellen, dass nichts kaputt geht. Das Nicht-Verwenden von eval, wenn Sie es nicht wirklich benötigen, könnte eine weitere pragmatische Lösung sein.
- Block-skopierte Funktionsdeklarationen
  - : Im Sloppy-Modus kann eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration innerhalb eines Blocks nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
