---
title: Strikter Modus
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("More")}}

> [!NOTE]
> Manchmal wird der Standardmodus, der nicht streng ist, als _[sloppy mode](/de/docs/Glossary/Sloppy_mode)_ bezeichnet. Dies ist kein offizieller Begriff, aber seien Sie sich dessen bewusst, falls es wichtig wird.

Der strikte Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu _entscheiden_, womit man sich implizit gegen den "[sloppy mode](/de/docs/Glossary/Sloppy_mode)" entscheidet. Der strikte Modus ist nicht nur ein Teilbereich: Er hat _absichtlich_ andere Semantiken als normaler Code. Browser, die den strikten Modus nicht unterstützen, führen strikten Modus-Code mit anderem Verhalten aus als Browser, die dies tun. Verlassen Sie sich daher nicht auf den strikten Modus, ohne vorher die relevanten Aspekte des strikten Modus im Hinblick auf die Unterstützung zu testen. Strikter Modus-Code und Nicht-strikter Modus-Code können koexistieren, sodass Skripte schrittweise in den strikten Modus überführt werden können.

Der strikte Modus nimmt mehrere Änderungen an den normalen JavaScript-Semantiken vor:

1. Beseitigt einige stille JavaScript-Fehler, indem diese in Fehler umgewandelt werden.
2. Behebt Fehler, die es JavaScript-Engines erschweren, Optimierungen durchzuführen: Strikter Modus-Code kann manchmal schneller ausgeführt werden als identischer Code im Nicht-strikten Modus.
3. Verbietet einige Syntaxen, die in zukünftigen ECMAScript-Versionen wahrscheinlich definiert werden.

## Aufrufen des strikten Modus

Der strikte Modus gilt für _gesamte Skripte_ oder für _einzelne Funktionen_. Er gilt nicht für [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), die in `{}`-Klammern eingeschlossen sind; der Versuch, ihn auf solche Kontexte anzuwenden, bewirkt nichts. [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)-Code, [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Code, [Ereignishandler](/de/docs/Web/HTML/Attributes#event_handler_attributes)-Attribute, an [`setTimeout()`](/de/docs/Web/API/setTimeout) übergebene Strings und verwandte Funktionen sind entweder Funktionskörper oder ganze Skripte, und das Aufrufen des strikten Modus darin funktioniert wie erwartet.

### Strikter Modus für Skripte

Um den strikten Modus für ein gesamtes Skript aufzurufen, platzieren Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) vor allen anderen Anweisungen.

```js
// Ganzes Skript im strikten Modus
"use strict";
const v = "Hallo! Ich bin ein Skript im strikten Modus!";
```

### Strikter Modus für Funktionen

Um den strikten Modus für eine Funktion aufzurufen, platzieren Sie die _exakte_ Anweisung `"use strict";` (oder `'use strict';`) im Funktionskörper vor allen anderen Anweisungen.

```js
function myStrictFunction() {
  // Funktionsniveau Strikter Modus
  "use strict";
  function nested() {
    return "Ich auch!";
  }
  return `Hallo! Ich bin eine Funktion im strikten Modus! ${nested()}`;
}
function myNotStrictFunction() {
  return "Ich bin nicht strikt.";
}
```

Die `"use strict"`-Direktive kann nur auf den Funktionskörper mit einfachen Parametern angewendet werden. Die Verwendung von `"use strict"` in Funktionen mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern ist ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" nicht in Funktion mit Standardparameter erlaubt
  "use strict";
  return a + b;
}
```

### Strikter Modus für Module

Der gesamte Inhalt von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) befindet sich automatisch im strikten Modus, ohne dass eine Anweisung erforderlich ist, um ihn zu aktivieren.

```js
function myStrictFunction() {
  // weil dies ein Modul ist, bin ich standardmäßig strikt
}
export default myStrictFunction;
```

### Strikter Modus für Klassen

Alle Teile eines [class](/de/docs/Web/JavaScript/Reference/Classes)-Körpers sind strikter Modus-Code, einschließlich sowohl [Klassen-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) als auch [Klassen-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/class).

```js
class C1 {
  // Alle hier befindlichen Codezeilen werden im strikten Modus ausgewertet
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, da test() im strikten Modus ist

const C2 = class {
  // Alle hier befindlichen Codezeilen werden im strikten Modus ausgewertet
};

// Der Code hier ist möglicherweise nicht im strikten Modus
delete Object.prototype; // Wird keinen Fehler auslösen
```

## Änderungen im strikten Modus

Der strikte Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in diese Kategorien:

- Änderungen, die Fehler in Fehler umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die vereinfachen, wie Variablenreferenzen aufgelöst werden
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die es einfacher machen, "sicheres" JavaScript zu schreiben
- Änderungen, die die zukünftige Entwicklung von ECMAScript antizipieren.

### Fehler in Fehler umwandeln

Der strikte Modus ändert einige zuvor akzeptierte Fehler in Fehler um. JavaScript wurde so entworfen, dass es für Anfänger leicht zugänglich ist, und manchmal gibt es Operationen, die eigentlich Fehler sein sollten, ohne Fehlermeldungen aus. Manchmal behebt dies das unmittelbare Problem, aber manchmal führt dies zu schlimmeren Problemen in der Zukunft. Der strikte Modus behandelt diese Fehler als Fehler, damit sie entdeckt und unverzüglich behoben werden.

#### Zuweisung an nicht deklarierte Variablen

Der strikte Modus macht es unmöglich, versehentlich globale Variablen zu erstellen. Im sloppy Modus verursacht das Vertippen einer Variablen bei einer Zuweisung die Erstellung einer neuen Eigenschaft im globalen Objekt und "funktioniert" weiter. Zuweisungen, die versehentlich globale Variablen erstellen würden, werfen im strikten Modus einen Fehler:

```js
"use strict";
let mistypeVariable;

// Angenommen, es existiert keine globale Variable mistypeVarible
// Diese Zeile wirft einen ReferenceError aufgrund der
// Falschschreibung von "mistypeVariable" (Fehlen eines "a")
mistypeVarible = 17;
```

#### Kann nicht an Objekteigenschaften zugewiesen werden

Der strikte Modus bewirkt, dass Zuweisungen, die andernfalls stillschweigend fehlschlagen würden, eine Ausnahme auslösen. Es gibt drei Möglichkeiten, wie eine Eigenschaften-Zuweisung fehlschlagen kann:

- Zuweisung an eine nicht schreibbare Daten-Eigenschaft
- Zuweisung an eine nur-Leser Zugriffseigenschaft
- Zuweisung an eine neue Eigenschaft auf einem [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekt

Zum Beispiel ist [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) eine nicht-schreibbare globale Variable. Im sloppy Modus bewirkt die Zuweisung an `NaN` nichts; der Entwickler erhält kein Fehlerrückmeldung. Im strikten Modus löst die Zuweisung an `NaN` eine Ausnahme aus.

```js
"use strict";

// Zuweisung an eine nicht-schreibbare globale Variable
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Zuweisung an eine nicht-schreibbare Eigenschaft
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Zuweisung an eine nur-Leser-Eigenschaft
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// Zuweisung an eine neue Eigenschaft auf einem nicht erweiterbaren Objekt
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError
```

#### Löschen von Objekteigenschaften schlägt fehl

Versuche, eine nicht-konfigurierbare oder anderweitig nicht-löschbare Eigenschaft (z.B. wird sie von einem Proxy-Handler [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) abgefangen, der `false` zurückgibt) zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete), werfen im strikten Modus eine Ausnahme, was vorher keinen Effekt hatte:

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Der strikte Modus verbietet auch das Löschen von einfachen Namen. `delete name` im strikten Modus ist ein Syntaxfehler:

```js-nolint example-bad
"use strict";

var x;
delete x; // Syntaxfehler
```

Wenn der Name eine konfigurierbare globale Eigenschaft ist, verwenden Sie [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), um sie zu löschen.

```js example-good
"use strict";

delete globalThis.x;
```

#### Doppelte Parameternamen

Der strikte Modus fordert, dass Funktionsparameternamen eindeutig sind. Im sloppy Modus verdeckt das zuletzt duplizierte Argument vorher identisch benannte Argumente. Diese vorherigen Argumente bleiben über [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) verfügbar, daher sind sie nicht vollständig unzugänglich. Doch dieses Verdecken ergibt wenig Sinn und ist wahrscheinlich unerwünscht (es könnte beispielsweise ein Tippfehler sein), daher sind im strikten Modus doppelte Argumentnamen ein Syntaxfehler:

```js-nolint example-bad
function sum(a, a, c) {
  // Syntaxfehler
  "use strict";
  return a + a + c; // falsch, falls dieser Code ausgeführt würde
}
```

Es ist auch ein Syntaxfehler im Nicht-strikten Modus, doppelte Parameternamen zu haben, wenn die Funktion einen Standardparameter, Restparameter oder destrukturierten Parameter hat.

#### Alte oktale Literale

Der strikte Modus [verbietet ein `0`-präfixiertes oktales Literal](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_literal). Im sloppy Modus wird eine Zahl, die mit `0` beginnt, wie `0644`, als oktale Zahl interpretiert (`0644 === 420`), wenn alle Ziffern kleiner als 8 sind. Anfängliche Entwickler glauben manchmal, dass ein führendes Nullpräfix keine semantische Bedeutung hat, also könnten sie es als Ausrichtungswerkzeug verwenden — aber das ändert die Bedeutung der Zahl! Eine führende Null-Syntax für das Oktal ist selten nützlich und kann versehentlich verwendet werden, daher macht der strikte Modus es zu einem Syntaxfehler:

```js-nolint example-bad
"use strict";
const sum =
  015 + // Syntaxfehler
  197 +
  142;
```

Die standardisierte Methode zur Darstellung von oktalen Literalen ist über das `0o`-Präfix. Zum Beispiel:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Oktale Escape-Sequenzen, wie `"\45"`, was gleich `"%"` ist, können verwendet werden, um Zeichen durch extended-{{Glossary("ASCII")}}-Zeichencodes in Oktal darzustellen. Im strikten Modus ist dies ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence). Formal gesehen, ist es verboten, `\`, gefolgt von einer Dezimalziffer außer `0`, oder `\0` gefolgt von einer Dezimalziffer zu haben; zum Beispiel `\9` und `\07`.

#### Setzen von Eigenschaften auf primitive Werte

Der strikte Modus verbietet das Festlegen von Eigenschaften auf [primitive](/de/docs/Glossary/Primitive) Werte. Der Zugriff auf eine Eigenschaft eines primitiven Wertes erstellt implizit ein Wrapper-Objekt, das nicht beobachtbar ist, sodass im sloppy Modus das Festlegen von Eigenschaften ignoriert wird (no-op). Im strikten Modus wird ein {{jsxref("TypeError")}} geworfen.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Doppelte Eigenschaftsnamen

Doppelte Eigenschaftsnamen wurden früher im strikten Modus als {{jsxref("SyntaxError")}} betrachtet. Mit der Einführung von [berechneten Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), die eine Duplizierung zur Laufzeit ermöglichen, wurde diese Einschränkung in ES2015 entfernt.

```js
"use strict";
const o = { p: 1, p: 2 }; // Syntaxfehler vor ECMAScript 2015
```

> [!NOTE]
> Code, der früher Fehler verursacht hat, nicht mehr fehlerhaft zu machen, wird immer als rückwärtskompatibel angesehen. Dies ist ein guter Aspekt der Sprache, die strikt ist, was das Werfen von Fehlern angeht: Es lässt Raum für zukünftige semantische Änderungen.

### Vereinfachung des Scopemanagements

Der strikte Modus vereinfacht, wie Variablennamen bestimmten Variablendefinitionen im Code zugeordnet werden. Viele Compiler-Optimierungen verwenden die Fähigkeit, zu sagen, dass Variable _X_ in _diesem_ Speicherort gespeichert ist: Dies ist entscheidend für die vollständige Optimierung von JavaScript-Code. JavaScript macht manchmal diese grundlegende Zuordnung von Name zu Variablendefinition im Code unmöglich, bis zur Laufzeit. Der strikte Modus beseitigt die meisten Fälle, in denen dies geschieht, sodass der Compiler strikten Modus-Code besser optimieren kann.

#### Entfernung der with-Anweisung

Der strikte Modus verbietet [`with`](/de/docs/Web/JavaScript/Reference/Statements/with). Das Problem bei `with` ist, dass jeder Name innerhalb des Blocks entweder auf eine Eigenschaft des übergebenen Objekts oder auf eine Variable im umgebenden (oder sogar globalen) Bereich zur Laufzeit abgebildet werden könnte; es ist unmöglich, dies im Voraus festzustellen. Der strikte Modus macht `with` zu einem Syntaxfehler, sodass es keine Chance gibt, dass ein Name in einem `with` zur Laufzeit auf einen unbekannten Ort verweist:

```js-nolint example-bad
"use strict";
const x = 17;
with (obj) {
  // Syntaxfehler
  // Wäre dies nicht der strikte Modus, wäre dies dann const x, oder
  // wäre es stattdessen obj.x? Es ist allgemein unmöglich,
  // dies zu sagen, ohne den Code auszuführen, sodass der Name
  // nicht optimiert werden kann.
  x;
}
```

Die einfache Alternative des Zuweisens des Objekts an eine Variable mit kurzem Namen und dann des Zugriffs auf die entsprechende Eigenschaft dieser Variable, steht bereit, um `with` zu ersetzen.

#### Nicht-leckendes eval

Im strikten Modus führt [`eval` nicht dazu, dass neue Variablen im umgebenden Bereich eingeführt werden](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Im sloppy Modus führt `eval("var x;")` eine Variable `x` in den umgebenden Funktions- oder globalen Bereich ein. Dies bedeutet allgemein gesagt, dass in einer Funktion mit einem Aufruf an `eval` jeder Name, der nicht auf ein Argument oder eine lokale Variable verweist, bei der Laufzeit einer bestimmten Definition zugeordnet werden muss (weil dieses `eval` möglicherweise eine neue Variable eingeführt hat, die die äußere Variable verbergen würde). Im strikten Modus erstellt `eval` Variablen nur für den Code, der ausgewertet wird, sodass `eval` keinen Einfluss darauf hat, ob sich ein Name auf eine äußere Variable oder eine lokale Variable bezieht:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Ob der String, der `eval()` übergeben wird, im strikten Modus ausgewertet wird, hängt davon ab, wie `eval()` aufgerufen wird ([direktes eval oder indirektes eval](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-scoped Funktionsdeklarationen

Die JavaScript-Sprachspezifikation hatte seit ihrem Beginn keine Funktionsdeklarationen verschachtelt in Block-Anweisungen erlaubt. Allerdings war es so intuitiv, dass die meisten Browser es als Erweiterungsgrammatik implementierten. Leider divergierten die Implementierungs-Semantiken, und es wurde unmöglich für die Sprachspezifikation, alle Implementierungen zu vereinbaren. Daher sind [Block-scoped Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) nur ausdrücklich im strikten Modus spezifiziert (während sie früher im nicht-strikten Modus disallowed waren), während das Verhalten im sloppy Modus weiterhin in den Browsern unterschiedlich bleibt.

### Vereinfachung von eval und arguments

Der strikte Modus macht [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) und [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) weniger magisch bizarr. Beide beinhalten im sloppy Modus eine erhebliche Menge magischen Verhaltens: `eval`, um Bindungen hinzuzufügen oder zu entfernen und Bindungswerte zu ändern, und `arguments`, um benannte Argumente mit seinen indizierten Eigenschaften zu synchronisieren. Der strikte Modus mach signifikante Fortschritte in Richtung der Behandlung von `eval` und `arguments` als Schlüsselwörter.

#### Verhinderung von Bindung oder Zuweisung an eval und arguments

Die Namen `eval` und `arguments` können in der Sprachsyntax nicht gebunden oder zugewiesen werden. Alle diese Versuche, dies zu tun, sind Syntaxfehler:

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

#### Kein Synchronisation zwischen Parametern und Argument-Indices

Strikter Modus-Code synchronisiert keine Indizes des `arguments`-Objekts mit jeder Parameterbindung. In einer Funktiopn im sloppy Modus, bei der das erste Argument `arg` ist, setzt `arg` auch `arguments[0]`, und umgekehrt (es sei denn, es wurden keine Argumente übergeben oder `arguments[0]` wird gelöscht). `arguments`-Objekte für Funktionen im strikten Modus speichert die ursprünglichen Argumente beim Aufruf der Funktion. `arguments[i]` verfolgt nicht den Wert des entsprechenden benannten Arguments und umgekehrt.

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

Der strikte Modus macht es einfacher, "sicheres" JavaScript zu schreiben. Einige Websites bieten jetzt Möglichkeiten für Benutzer, JavaScript zu schreiben, das von der Website _im Auftrag anderer Benutzer_ ausgeführt wird. JavaScript in Browsern kann auf die Privatinformationen des Benutzers zugreifen, sodass solches JavaScript teilweise transformiert werden muss, bevor es ausgeführt wird, um den Zugriff auf verbotene Funktionalität zu zensieren. JavaScript's Flexibilität macht es effektiv unmöglich, dies ohne viele Laufzeitprüfungen zu tun. Bestimmte Sprachfunktionen sind so allgegenwärtig, dass die Durchführung von Laufzeitprüfungen eine beträchtliche Leistungseinbuße darstellt. Eine wenige Änderungen im strikten Modus, sowie die Anforderung, dass benutzereingereichtes JavaScript strikt sein muss und auf eine bestimmte Weise aufgerufen werden muss, reduzieren den Bedarf an diesen Laufzeitprüfungen erheblich.

#### Keine this Substitution

Der Wert, der als `this` an eine Funktion im strikten Modus übergeben wird, wird nicht zwangsweise in ein Objekt umgewandelt (a.k.a. "Boxed"). Für eine Funktion im sloppy Modus ist `this` immer ein Objekt: entweder das bereitgestellte Objekt, wenn es mit einem objektbewerteten `this` aufgerufen wird; oder der Boxed-Wert von `this`, wenn es mit einem primitiven Wert als `this` aufgerufen wird; oder das globale Objekt, wenn es mit `undefined` oder `null` als `this` aufgerufen wird. (Verwenden Sie [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes `this` zu spezifizieren.) Nicht nur dass das automatische Boxen eine Leistungseinbuße darstellt, sondern es ist auch ein Sicherheitsrisiko, das globale Objekt in Browsern freizugeben, weil das globale Objekt Zugriff auf Funktionalitäten bietet, die "sichere" JavaScript-Umgebungen einschränken müssen. Daher wird für eine Funktion im strikten Modus das angegebene `this` nicht in ein Objekt umgewandelt, und wenn nicht angegeben, ist `this` `undefined` statt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

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

#### Entfernung stack-walking Eigenschaften

In strict mode ist es nicht mehr möglich, "den JavaScript-Stack zu durchlaufen". Viele Implementierungen hatten früher einige Erweiterungsfunktionen implementiert, die es möglich machten, das aufgerufene caller einer Funktion zu erkennen. Wenn eine Funktion `fun` mitten in der Ausführung ist, ist [`fun.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) die Funktion, die fun zuletzt aufgerufen hat, und [`fun.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) sind die `arguments` für diesen Aufruf von `fun`. Beide Erweiterungen sind problematisch für "sicheres" JavaScript, weil sie "gesichertem" Code erlauben, auf "privilegierte" Funktionalitäten und ihre (potenziell unsicheren) Argumente zuzugreifen. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.arguments` nicht löschbare Eigenschaften, die einen Fehler werfen, wenn sie gesetzt oder abgerufen werden:

```js
function restricted() {
  "use strict";
  restricted.caller; // TypeError wird geworfen
  restricted.arguments; // TypeError wird geworfen
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

Ähnlich wird [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) nicht mehr unterstützt. Im sloppy Modus bezieht sich `arguments.callee` auf die umgebende Funktion. Dieser Anwendungsfall ist schwach: Benennen Sie die umgebende Funktion! Darüber hinaus behindert `arguments.callee` erheblich Optimierungen wie das Inline von Funktionen, weil es möglich gemacht werden muss, einen Verweis auf die nicht-inline-Funktion bereitzustellen, wenn `arguments.callee` abgerufen wird. `arguments.callee` für Funktionen im strikten Modus ist eine nicht löschbare Eigenschaft, die einen Fehler wirft, wenn sie gesetzt oder abgerufen wird:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // TypeError wird geworfen
```

### Zukunftssichere Gestaltung von JavaScript

#### Zusätzliche reservierte Wörter

[Reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) sind Bezeichner, die nicht für Variablennamen verwendet werden können. Im strikten Modus sind einige zusätzliche Namen reserviert als im sloppy Modus, von denen einige bereits in der Sprache verwendet werden, und einige sind für die Zukunft reserviert, um zukünftige Syntaxerweiterungen leichter implementieren zu können.

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

Der strikte Modus wurde so entworfen, dass der Übergang zu ihm schrittweise gemacht werden kann. Es ist möglich, jede Datei individuell zu ändern und sogar den Code auf die Funktionsebene im strikten Modus einzuführen.

Sie können eine Codebasis in den strikten Modus migrieren, indem Sie zunächst `"use strict"` zu einem Quellcode hinzufügen und dann alle Ausführungsfehler beheben, während Sie auf semantische Unterschiede achten.

### Syntaxfehler

Beim Hinzufügen von `'use strict';` werden die folgenden Fälle einen {{jsxref("SyntaxError")}} werfen, bevor das Skript läuft:

- Oktalsyntax `const n = 023;`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung
- Das Verwenden von [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf einen Variablennamen `delete myVariable`;
- Verwenden von [`eval`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) oder [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) als Variable oder Funktionsargumentname
- Verwenden einer der neu [reservierten Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in Aussicht auf zukünftige Sprachfeatures): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, und `yield`
- Deklaration von zwei Funktionsparametern mit demselben Namen `function f(a, b, b) {}`
- Doppelte Eigenschaftsnamen in einem Objektliteral `{a: 1, b: 3, a: 7}` zu deklarieren. Diese Einschränkung wurde später entfernt ([bug 1041128](https://bugzil.la/1041128)).

Diese Fehler sind gut, weil sie offensichtliche Fehler oder schlechte Praktiken aufdecken. Sie treten auf, bevor der Code ausgeführt wird, sodass sie leicht zu entdecken sind, solange der Code vom Laufzeitsystem analysiert wird.

### Neue Laufzeitfehler

JavaScript hat früher in Kontexten, in denen das, was getan wurde, ein Fehler sein sollte, stillschweigend versagt. Der strikte Modus wirft in solchen Fällen einen Fehler. Wenn Ihre Codebasis solche Fälle enthält, wird das Testen notwendig sein, um sicherzustellen, dass nichts kaputt geht. Sie können solche Fehler auf der Funktionsebene strukturieren.

- Die Zuweisung an eine nicht deklarierte Variable wirft einen {{jsxref("ReferenceError")}}. Dies setzte zuvor eine Eigenschaft im globalen Objekt, was selten der erwartete Effekt ist. Wenn Sie wirklich einen Wert im globalen Objekt setzen möchten, weisen Sie ihn explizit als Eigenschaft auf `globalThis` zu.
- Das Fehlschlagen einer Zuweisung zu einer Objekteigenschaft (z.B. ist sie nur lesbar) wirft einen {{jsxref("TypeError")}}. Im sloppy Modus wäre dies stillschweigend fehlgeschlagen.
- Das Löschen einer nicht löschbaren Eigenschaft wirft einen {{jsxref("TypeError")}}. Im sloppy Modus wäre dies stillschweigend fehlgeschlagen.
- Der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller), oder [`strictFunction.arguments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) wirft einen {{jsxref("TypeError")}}, wenn die Funktion im strikten Modus ist. Wenn Sie `arguments.callee` verwenden, um die Funktion rekursiv aufzurufen, können Sie stattdessen einen benannten Funktionsausdruck verwenden.

### Semantische Unterschiede

Diese Unterschiede sind sehr subtile Unterschiede. Es ist möglich, dass eine Test-Suite solche subtilen Unterschiede nicht erfasst. Eine sorgfältige Überprüfung Ihrer Codebasis wird wahrscheinlich nötig sein, um sicherzustellen, dass diese Unterschiede die Semantik Ihres Codes nicht beeinflussen. Glücklicherweise kann diese sorgfältige Überprüfung schrittweise auf Funktionsebene durchgeführt werden.

- `this`
  - : Im sloppy Modus würden Funktionsaufrufe wie `f()` das globale Objekt als `this`-Wert übergeben. Im strikten Modus ist es jetzt `undefined`. Wenn eine Funktion mit [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) aufgerufen wurde, wenn der Wert eine primitive Wert war, wurde dieser in ein Objekt umgewandelt (oder das globale Objekt für `undefined` und `null`). Im strikten Modus wird der Wert direkt ohne Konvertierung oder Ersetzung übergeben.
- `arguments`
  - : Im sloppy Modus änderte das Ändern eines Wertes im `arguments`-Objekt das entsprechende benannte Argument. Dies machte Optimierungen für JavaScript-Engine kompliziert und das Verstehen des Codes schwerer. Im strikten Modus wird das `arguments`-Objekt erstellt und mit den gleichen Werten wie die benannten Argumente initialisiert, aber Änderungen an entweder dem `arguments`-Objekt oder den benannten Argumenten werden nicht gegenseitig reflektiert.
- `eval`
  - : Im strikten Modus-Code erstellt `eval` keine neue Variable im Umfang, aus dem es aufgerufen wurde. Natürlich wird der String auch mit den Regeln des strikten Modus ausgewertet. Gründliche Tests sind erforderlich, um sicherzustellen, dass nichts kaputt geht. Wenn Sie eval nicht wirklich benötigen, könnte eine andere pragmatische Lösung sein, es zu vermeiden.
- Block-scoped Funktionsdeklarationen
  - : Im sloppy Modus könnte eine Funktionsdeklaration innerhalb eines Blocks außerhalb des Blocks sichtbar und sogar aufrufbar sein. Im strikten Modus ist eine Funktionsdeklaration in einem Block nur innerhalb des Blocks sichtbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
