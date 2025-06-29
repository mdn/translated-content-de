---
title: JavaScript Sprachübersicht
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, eingebauten Standardobjekten und Methoden. Seine Syntax basiert auf den Sprachen Java und C – viele Strukturen aus diesen Sprachen gelten ebenfalls für JavaScript. JavaScript unterstützt objektorientiertes Programmieren mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionales Programmieren, da Funktionen {{Glossary("First-class_Function", "First-Class")}} Objekte sind, die leicht durch Ausdrücke erstellt und wie andere Objekte übergeben werden können.

Diese Seite dient als schnelle Übersicht über verschiedene JavaScript-Sprachmerkmale, geschrieben für Leser mit Hintergrund in anderen Sprachen, wie C oder Java.

## Datentypen

Lassen Sie uns mit den Bausteinen einer jeden Sprache beginnen: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): verwendet für alle Zahlenwerte (Ganzzahlen und Fließkommazahlen) außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): verwendet für beliebig große Ganzzahlen.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): verwendet zur Speicherung von Text.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` - normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): verwendet zur Erstellung von eindeutigen Identifikatoren, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): zeigt einen absichtlichen Nicht-Wert an.

Alles andere wird als ein [Object](/de/docs/Web/JavaScript/Guide/Data_structures#objects) angesehen. Zu den gebräuchlichen Objekttypen gehören:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen – sie sind nur ein besonderer Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Doppelpräzisions-Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Präzisionsverlust dargestellt werden können, und Gleitkommazahlen bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

So ist eine _scheinbare Ganzzahl_ in Wirklichkeit _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann die Fließkomma-Arithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie z.B. Bitoperationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis anzuzeigen (binär, oktal, dezimal oder hexadezimal) oder ein Exponent-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist eine Ganzzahl beliebiger Länge. Sein Verhalten ist ähnlich wie bei C's Ganzzahltypen (z.B. wird bei der Division auf Null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet Standard-Mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenfolge in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das die Zeichenfolge für eine Ganzzahl parst.
- {{jsxref("parseFloat()")}}, das die Zeichenfolge für eine Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die eine Zeichenfolge so parst, als ob es ein Zahlenliteral wäre und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (Abkürzung für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen werden `NaN` zurückgeben – zum Beispiel, wenn versucht wird, eine nicht-numerische Zeichenfolge zu parsen, oder wenn [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert angewendet wird. Eine Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operanden in eine mathematische Operation einbringen, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht mit sich selbst gleich ist (gemäß IEEE 754-Spezifikation).

### Zeichenketten

Zeichenketten in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte eine willkommene Nachricht für alle sein, die sich mit Internationalisierung beschäftigen mussten. Genauer gesagt, sie sind [UTF-16-codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können entweder mit einfachen oder mit doppelten Anführungszeichen geschrieben werden — JavaScript hat keine Unterscheidung zwischen Zeichen und Zeichenketten. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenkette, die aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge einer Zeichenkette (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu ermitteln, greifen Sie auf deren [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Strings haben [Utility-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenkette zu manipulieren und Informationen über die Zeichenkette zu erhalten. Da alle Primitiven aus Designgründen unveränderlich sind, geben diese Methoden neue Zeichenketten zurück.

Der `+`-Operator ist für Zeichenketten überladen: Wenn einer der Operanden eine Zeichenkette ist, führt er eine Zeichenfolgenverkettung anstelle einer Zahlenaddition durch. Eine spezielle [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax erlaubt es Ihnen, Zeichenketten mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu Pythons f-Strings oder C#'s interpolierten Zeichenfolgen verwenden Template-Literals Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nichtwert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das die Abwesenheit eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen booleschen Typ mit möglichen Werten `true` und `false` – beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Zeichenfolgen (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Umwandlung stillschweigend vornimmt, wenn es einen Boolean erwartet, zum Beispiel in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was Werte bedeutet, die in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symbol-Typ wird oft verwendet, um eindeutige Identifikatoren zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellte Symbol ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Mehr darüber können Sie im [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) nachlesen.

## Variablen

Variablen in JavaScript werden mit einem der drei Schlüsselwörter deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Block-Level-Variablen zu deklarieren. Die deklarierte Variable ist ab dem _Block_, in dem sie eingeschlossen ist, verfügbar.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte niemals geändert werden sollen. Die Variable ist ab dem _Block_, in dem sie deklariert ist, verfügbar.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ – sie verhindern keine _Mutationen_ des Variablenwertes, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschendes Verhalten haben (zum Beispiel sind sie nicht blockbereichsbezogen) und werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie später sowieso nicht ändern können.

`let`- und `const`-deklarierte Variablen beanspruchen immer noch den gesamten Bereich, in dem sie definiert sind, und sich befinden in einer Region, die als [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bezeichnet wird, bevor die tatsächliche Deklarationszeile erreicht wird. Dies hat einige interessante Wechselwirkungen mit dem Variablenschatten, die in anderen Sprachen nicht vorkommen.

```js
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);
```

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, da vor der Zeile `const x = 2` `x` immer noch den Parameter `x` im oberen Bereich referenzieren sollte. In JavaScript wirft dies jedoch bei der ersten `console.log`: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) werden nur mit Werten, aber nicht mit Variablen verknüpft. Bei `let`-deklarierten Variablen können Sie ihren Typ durch Neuzuweisung jederzeit ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

Die numerischen Operatoren von JavaScript umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch einen zusammengesetzten Zuweisungsoperator wie `+=` und `-=`, der sich auf `x = x operator y` ausdehnt.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um zu inkrementieren und zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenfolgenverkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie einer Zahl (oder einem anderen Wert) eine Zeichenfolge hinzufügen, wird alles zuerst in eine Zeichenfolge umgewandelt. Dies könnte Sie verwirren:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenfolge zu etwas ist eine nützliche Möglichkeit, es in eine Zeichenfolge umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` gemacht werden, die sowohl für Zeichenfolgen als auch für Zahlen funktionieren. Für Gleichheit führt der [Doppel-Gleiche-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Triple-Gleiche-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppel-Gleiche- und der Triple-Gleiche-Operator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitoperatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren logische Operatoren nicht nur mit booleschen Werten – sie funktionieren nach der "Wahrheitsbewertung" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&`- und `||`-Operatoren verwenden Kurzschlusslogik, was bedeutet, dass das Ausführen ihres zweiten Operanden vom ersten abhängig ist. Dies ist nützlich, um nach null-Objekten zu überprüfen, bevor deren Attribute zugegriffen werden:

```js
const name = o && o.getName();
```

Oder um Werte (wenn falsye Werte ungültig sind) zu cachen:

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operator-Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt ein paar erwähnenswerte Punkte:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, jedoch können sie keines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional – die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Allerdings gibt es bestimmte Vorsicht zu beachten, da Semikolons, anders als in Python, immer noch Teil der Syntax sind.

Für einen tiefen Einblick in die JavaScript-Grammatik, siehe die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie verkettet verwenden:

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else`-Zweig, der aus einer einzelnen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegende Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Körper der Schleife mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for` loop](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie in C und Java: Es ermöglicht Ihnen, die Steuerinformationen für Ihre Schleife in einer einzigen Zeile anzugeben.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei weitere prominente for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerablen](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Zweige basierend auf Gleichheitsüberprüfungen verwendet werden.

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

Ähnlich wie in C sind Fall-Klauseln konzeptionell dasselbe wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), daher wird bei fehlendem `break` weiter zum nächsten Level "durchgefallen". Sie sind jedoch keine tatsächlichen Sprungtabellen – jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur Zeichenfolgen- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis eines dem zu matchenden Wert gleich ist. Der Vergleich erfolgt zwischen beiden mit dem `===`-Operator.

Anders als einige Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung geworfen werden. Viele eingebaute Operationen könnten ebenfalls auslösen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des erfassten Fehlers nicht bestimmen, da alles von einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise annehmen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz handelt, wie im oben stehenden Beispiel. Es gibt einige Unterklassen von `Error`, die eingebaut sind, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt keinen bedingten Catch in JavaScript – wenn Sie nur einen Fehlertyp handhaben möchten, müssen Sie alles erfassen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle neu auslösen.

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("Seems like a parameter is out of range:", e);
    console.log("Retrying...");
    buildMySite("./website");
  } else {
    // Don't know how to handle other error types; throw them so
    // something else up in the call stack may catch and handle it
    throw e;
  }
}
```

Wenn ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste von Kontrollflussanweisungen, siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Sie ähneln damit:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hash-Tabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen – Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, verändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaTcript/Reference/Global_Objects/Symbol) — selbst Array-Indizes, die kanonisch Ganzzahlen sind, sind eigentlich unter der Haube Zeichenfolgen.

Objekte werden normalerweise mit der Literal-Syntax erstellt:

```js
const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [zugegriffen werden](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Bei der Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern erlauben hingegen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

```js
// Dot notation
obj.name = "Simon";
const name = obj.name;

// Bracket notation
obj["name"] = "Simon";
const name = obj["name"];

// Can use a variable to define a key
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");
```

Der Zugriff auf Eigenschaften kann verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, so dass, sofern nichts explizit das Objekt kopiert, Mutationen eines Objekts von außen sichtbar wären.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei getrennt erstellte Objekte niemals gleich (`!==`) sein werden, da sie verschiedene Referenzen sind. Wenn Sie zwei Referenzen des gleichen Objekts halten, wäre eine Mutation durch das andere beobachtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr zu Objekten und Prototypen, siehe die [`Object`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen zur Objekterstellersyntax, siehe seine [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details zu Objektprototypen und Vererbung weggelassen, da Sie in der Regel Vererbung mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (den Sie möglicherweise als abstrus gehört haben). Um mehr darüber zu erfahren, siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich ein spezieller Objekttyp. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlicherweise nur mit `[]`-Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger Zahlindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird als ein [_dürftiges Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es in der Mitte nicht besetzte Plätze gibt, und das wird die Engine dazu bringen, es von einem Array in eine Hash-Tabelle zu deoptimieren. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Indexierung außerhalb der Grenzen wirft keinen Fehler. Wenn Sie einen nicht vorhandenen Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und können beliebig wachsen oder schrumpfen.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife iteriert werden, wie Sie es in anderen C-ähnlichen Sprachen können:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die dem C++/Java-Syntax `for (int x : arr)` entspricht:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays kommen mit einer Fülle von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array durchlaufen — zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Callback-Funktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Neben Objekten sind Funktionen der Kernbestandteil, JavaScript zu verstehen. Die einfachste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter übernehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal zu dieser Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabeanweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion ohne Übergabe der erwarteten Parameter aufrufen, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parameter-Syntaxes. Zum Beispiel ermöglicht die [Restparameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller zusätzlichen Parameter, die vom Aufrufer übergeben werden, in einem Array, ähnlich Pythons `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

Im obigen Code enthält die Variable `args` alle Werte, die der Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ dem Ort, an dem er deklariert wurde, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der in die Funktion übergeben wird, in der `firstValue`-Variablen und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie sie bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _verbreiten_. Zum Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, diese mit [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu implementieren, die es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparamenter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)-Syntax, die erlaubt, dass ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt Ihnen, anonyme Funktionen zu erstellen – das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

```js
// Note that there's no function name before the parentheses
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

Das macht die anonyme Funktion aufrufbar, indem Sie `avg()` mit einigen Argumenten aufrufen — das heißt, es ist semantisch gleichbedeutend mit der Deklaration der Funktion mit der `function avg(){}` Deklarationssyntax.

Es gibt eine weitere Möglichkeit, anonyme Funktionen zu definieren – indem man einen [Arrow Function Expression](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet.

```js
// Note that there's no function name before the parentheses
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// You can omit the `return` when simply returning an expression
const sum = (a, b, c) => a + b + c;
```

Arrow-Funktionen sind nicht semantisch identisch mit Funktionsausdrücken — für weitere Informationen, siehe seine [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Eine andere Art, wie anonyme Funktionen nützlich sein können: Sie können in einem einzigen Ausdruck gleichzeitig deklariert und aufgerufen werden, genannt {{Glossary("IIFE", "Sofort ausgeführte Funktionsausdrücke (IIFE)")}}:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [das Emulieren privater Methoden mit Closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv zu rufen. Dies ist besonders nützlich im Umgang mit Baumstrukturen, wie sie im Browser DOM gefunden werden.

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Funktionsausdrücke können auch benannt werden, was ihnen ermöglicht, rekursiv zu sein.

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

Der der Funktion zugegebene Name wie oben ist nur für das eigene Scope der Funktion verfügbar. Dies ermöglicht mehr Optimierungen durch die Engine und resultiert in besser lesbarem Code. Der Name wird auch im Debugger und einigen Stack-Traces angezeigt, was Ihnen beim Debugging Zeit sparen kann.

Wenn Sie an funktionale Programmierung gewöhnt sind, sollten Sie sich der Leistungsimplikationen von Rekursion in JavaScript bewusst sein. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, wurde sie nur von JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit der Wiederherstellung von Stack-Traces und der Debuggierfähigkeit. Für tiefe Rekursion sollten Sie statt dessen Iterationen verwenden, um Stack-Overflow zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Dies bedeutet, dass sie an Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Guide/Closures) ohne explizite Erfassung, wodurch Sie bequem funktionale Programmierstile anwenden können.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie können ihnen Eigenschaften hinzufügen oder ändern, genauso wie wir es im Abschnitt über Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von geschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Scope ihrer Übergeordneten Funktion zugreifen können:

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

Dies bietet eine große Menge an Nützlichkeit beim Schreiben von wartbarerem Code. Wenn eine aufgerufene Funktion von einer oder zwei anderen Funktionen abhängt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen darin verschachteln. Dies hält die Anzahl der Funktionen, die im globalen Scope sind, gering.

Dies ist auch ein großartiger Widerstand zur Versuchung von globalen Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Geschachtelte Funktionen können Variablen in ihren Elternteilen gemeinsam nutzen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die sehr ähnlich ist wie Sprachen wie Java.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
```

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die vom Schriftstxt angegebenen Methoden und Eigenschaften enthält. Klassen erzwingen keine Codeorganisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie adhoc die Erstellung einer Klasse sein kann: es ist nur ein Ausdruck, der aus einem Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };

class Admin extends withAuthentication(Person) {
  // …
}
```

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Felder und Methoden werden durch Voranstellen eines Hash `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Namens des Elements und unterscheidet es von einer normalen Zeichenfolgen-Schlüssel-Eigenschaft. (Denken Sie an `#` als `_` in Python.) Anders als in den meisten anderen Sprachen gibt es absolut keine Möglichkeit, ein privates Element außerhalb des Klassenkörpers zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu verschiedenen Klassenmerkmalen können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus single-threaded. Es gibt keine [Parallelisierung](https://en.wikipedia.org/wiki/Parallel_computing); nur [Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrones Programmieren wird durch eine [Event-Loop](/de/docs/Web/JavaScript/Reference/Execution_model) angetrieben, die es einem Satz von Aufgaben ermöglicht, in die Warteschlange gestellt und auf Fertigstellung überprüft zu werden.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- auf {{jsxref("Global_Objects/Promise", "Promise")}}-Basierte
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, das eine syntaktische Zucker für Versprechen ist

Zum Beispiel, hier ist, wie ein Datei-Lesevorgang in JavaScript aussehen könnte:

```js
// Callback-based
fs.readFile(filename, (err, content) => {
  // This callback is invoked when the file is read, which could be after a while
  if (err) {
    throw err;
  }
  console.log(content);
});
// Code here will be executed while the file is waiting to be read

// Promise-based
fs.readFile(filename)
  .then((content) => {
    // What to do when the file is read
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// Code here will be executed while the file is waiting to be read

// Async/await
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

Die Kernsprache spezifiziert keine asynchronen Programmiermerkmale, aber es ist entscheidend, wenn mit der externen Umgebung interagiert wird – von [Benutzerberechtigungen anfordern](/de/docs/Web/API/Permissions_API), zu [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch), zu [Dateien lesen](https://nodejs.org/api/fs.html). Wenn die potenziell lang laufenden Operationen asynchron erfolgen, wird sichergestellt, dass andere Prozesse während des Wartens weiterhin ausgeführt werden können – zum Beispiel wird der Browser nicht einfrieren, während auf den Benutzer gewartet wird, um auf eine Schaltfläche zu klicken, um die Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Wenn Sie beispielsweise ein Versprechen haben, können Sie auf das letztendliche Ergebnis nur über die Methode [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) zugreifen. Ähnlich kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, was üblicherweise eine asynchrone Funktion oder ein Modul ist. Versprechen blockieren _nie_ — nur die Logik, die von dem Ergebnis des Versprechens abhängt, wird aufgeschoben; alles andere wird währenddessen weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie vielleicht Versprechen als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) an, die mit `then()` gemappt werden können (sie sind jedoch keine _richtigen_ Monaden, da sie sich automatisch abflachen; z.B. können Sie kein `Promise<Promise<T>>` haben).

In der Tat hat das single-threaded-Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, dank seiner nicht blockierenden IO, die es ermöglicht, eine große Anzahl von Datenbank- oder Dateisystemanforderungen sehr leistungsfähig zu bearbeiten. Dennoch werden CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, den Hauptthread weiterhin blockieren. Um echte Parallelisierung zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrones Programmieren zu erfahren, können Sie [über die Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder das [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, identifiziert durch ihren Dateipfad oder ihre URL. Sie können die Anweisungen {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Anders als Haskell, Python, Java, etc., ist die JavaScript-Modulauflösung vollständig vom Host definiert — sie basiert in der Regel auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls anstelle eines Projektwurzelpfades sind.

Jedoch bietet die JavaScript-Sprache keine Standardbibliotheksmodule — alle Kernfunktionen werden von globalen Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) angetrieben. Dies ist auf die lange Geschichte des Mangels eines Modulsystems in JavaScript zurückzuführen und darauf, dass das Einschalten des Modulsystems einige Änderungen an der Laufzeitumgebung erforderlich macht.

Verschiedene Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und basiert hauptsächlich auf dem Dateisystem, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Module-Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Merkmale auf _Sprachebene_ sind, während andere auf _Laufzeitebene_ sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernsprache-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Berechnungslogik. Sie behandelt keine Eingabe/Ausgabe — tatsächlich ist das Verhalten eines JavaScript-Programms ohne zusätzliche Laufzeitebene-APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) völlig nicht beobachtbar.

Eine Laufzeit, oder ein Host, ist etwas, das Daten an die JavaScript-Engine (den Interpreter) liefert, zusätzliche globale Eigenschaften bereitstellt und Haken für die Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, Datenlesen, Nachrichten drucken, Netzwerkanfragen senden, etc. sind alle Laufzeit-evel-Operationen. Seit ihrer Entstehung wurde JavaScript in verschiedenen Umgebungen angenommen, so dass wie Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (die APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellen), etc. JavaScript erfolgreich in Web integriert wurde (was sein primäres Ziel war), mobile Apps, Desktop-Apps, serverseitige Apps, Serverless, eingebettete Systeme und mehr. Während Sie über JavaScript-Kernfunktionen lernen, ist es auch wichtig, Host-bereitgestellte Funktionen zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Merkmale mit anderen Sprachen verglichen werden. Wenn Sie mehr über die Sprache selbst und die Nuancen jedes Merkmals erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aus Platz- und Komplexitätsgründen ausgelassen haben, aber die Sie selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
