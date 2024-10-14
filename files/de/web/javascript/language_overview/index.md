---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C – viele Strukturen aus diesen Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "First-Class")}} Objekte sind, die leicht über Ausdrücke erstellt und wie jedes andere Objekt weitergegeben werden können.

Diese Seite dient als kurze Übersicht über verschiedene JavaScript-Sprachmerkmale, geschrieben für Leser mit Hintergrund in anderen Sprachen wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme manipulieren Werte, und alle diese Werte gehören zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): Wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) außer für _sehr_ große Ganzzahlen verwendet.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): Wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): Zum Speichern von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` – üblicherweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): Zum Erstellen von eindeutigen Bezeichnern, die nicht kollidieren, verwendet.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): Zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): Zeigt einen absichtlichen Nicht-Wert an.

Alles andere wird als [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen – sie sind nur ein spezieller Typ von Objekt, das aufgerufen werden kann.

### Zahlen

JavaScript verfügt über zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Double-Precision Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne Präzisionsverlust. Gleitkommazahlen können bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. In Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Integer_ ist in der Tat _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann die Gleitkomma-Arithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bit-Operationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponentsuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein beliebig langes Integer. Sein Verhalten ähnelt den Integer-Typen in C (z.B. wird bei der Division zu Null gekürzt), außer dass er sich unbegrenzt vergrößern kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix spezifiziert.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[Arithmetikoperatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik, etc. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt stellt standardmäßige mathematische Funktionen und Konstanten bereit.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenkette in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das die Zeichenkette für eine Ganzzahl parst.
- {{jsxref("parseFloat()")}}, das die Zeichenkette für eine Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die eine Zeichenkette parst, als wäre sie ein Zahlenliteral, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Kurzform für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück – zum Beispiel beim Versuch, eine nicht-numerische Zeichenkette zu parsen oder [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) bei einem negativen Wert zu verwenden. Division durch Null erzeugt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand einer mathematischen Operation bereitstellen, wird das Ergebnis auch `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß IEEE 754-Spezifikation).

### Zeichenketten

Zeichenketten in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte für jeden, der sich mit Internationalisierung befassen musste, eine willkommene Nachricht sein. Genau genommen sind sie [UTF-16-codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Zeichenketten können entweder mit einfachen oder doppelten Anführungszeichen geschrieben werden – JavaScript unterscheidet nicht zwischen Zeichen und Zeichenketten. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenkette, die aus diesem einen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge einer Zeichenkette (in {{Glossary("Code_unit", "Code-Einheiten")}}) zu ermitteln, rufen Sie ihre [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft auf.

Zeichenketten haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenkette zu manipulieren und Informationen über die Zeichenkette zu erhalten. Da alle Primitiven von Design her unveränderlich sind, geben diese Methoden neue Zeichenketten zurück.

Der `+`-Operator ist für Zeichenketten überladen: Wenn einer der Operanden eine Zeichenkette ist, wird Zeichenkettenverkettung statt Zahladdition durchgeführt. Eine spezielle [Template-Literal-](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax ermöglicht es Ihnen, Zeichenketten mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu Pythons f-Strings oder C#'s interpolierten Zeichenketten verwenden Template-Literale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen von Werten anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt-](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablen-Deklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boolean-Typ, mit den möglichen Werten `true` und `false` – beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Zeichenketten (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Konvertierung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Konvertierung stillschweigend durchführt, wenn es einen Boolean erwartet, wie in einer `if`-Anweisung (siehe [Steuerstrukturen](#steuerstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was bedeutet, dass Werte in Booleschen Kontexten zu `true` und `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellt wird, ist garantiert eindeutig. Zusätzlich gibt es registrierte Symbole, die geteilte Konstanten sind, und bekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Sie können mehr darüber in der [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht die Deklaration von Blockvariablen. Die deklarierte Variable ist ab dem umschlossenen _Block_ verfügbar.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte niemals geändert werden sollen. Die Variable ist ab dem in _Block_ deklarierten Abschnitt verfügbar.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuordnungen_ – sie verhindern nicht _Mutationen_ des Variablenwerts, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können unerwartetes Verhalten haben (zum Beispiel sind sie nicht block-scope), und sie werden im modernen JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, hat sie den Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierung deklarieren, da Sie sie später sowieso nicht mehr ändern können.

Mit `let` und `const` deklarierte Variablen belegen den gesamten Gültigkeitsbereich, in dem sie definiert sind, und befinden sich in einer bekannten Region als [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz), bevor die tatsächliche Deklarationszeile durchlaufen wird. Dies hat einige interessante Interaktionen mit Variablenschatten, die in anderen Sprachen nicht vorkommen.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da vor der Zeile `const x = 2` `x` immer noch auf den Parameter `x` im oberen Gültigkeitsbereich verweisen sollte. In JavaScript würde dies aufgrund der Tatsache, dass jede Deklaration den gesamten Gültigkeitsbereich belegt, bei der ersten `console.log`-Zeile einen Fehler auslösen: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie in [dem vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, jedoch nicht mit Variablen verbunden. Für `let`-deklarierte Variablen können Sie deren Typ durch Neuzuordnung immer ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponenzierung). Werte werden unter Verwendung von `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsgegenstück wie `+=` und `-=`, das sich zu `x = x operator y` erweitert.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` zum Inkrementieren und Dekrementieren verwenden. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenkettenverkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder einem anderen Wert) hinzufügen, wird alles zuerst in eine Zeichenkette konvertiert. Dies könnte Sie möglicherweise aus dem Tritt bringen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist eine nützliche Möglichkeit, es selbst in eine Zeichenkette zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Zeichenketten als auch für Zahlen funktionieren. Der [Doppelgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) führt eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen übergeben, was teilweise interessante Ergebnisse liefern kann. Andererseits versucht der [Dreifachgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung, und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppelgleichheits- und Dreifachgleichheitsoperator haben auch ihre Gegenstücke zur Ungleichheit: `!=` und `!==`.

JavaScript hat auch [Bitoperationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [Logikoperationen](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren Logikoperatoren nicht nur mit Booleschen Werten – sie funktionieren nach der "Wahrheitsgehalt" des Werts.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&`- und `||`-Operatoren verwenden eine Kurzschlusslogik, was bedeutet, dass sie ihren zweiten Operanden nur ausführen, wenn der erste wahr ist. Dies ist nützlich, um auf Null-Objekte zu prüfen, bevor Sie ihre Attribute aufrufen:

```js
const name = o && o.getName();
```

Oder um Werte zu cachen (wenn falsche Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste der Operatoren siehe die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Möglicherweise sind Sie besonders an der [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert.

## Grammatik

Die JavaScript-Grammatik ähnelt sehr der C-Familie. Es gibt einige Punkte, die erwähnt werden sollten:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie können nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind gewöhnlich `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional – die Sprache [fügt sie automatisch](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) ein, wenn erforderlich. Allerdings gibt es bestimmte Vorbehalte, die beachtet werden müssen, da Semikolons im Gegensatz zu Python dennoch Teil der Syntax sind.

Für einen tiefgehenden Blick auf die JavaScript-Grammatik siehe die [Referenzseite zur lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Steuerstrukturen

JavaScript hat eine ähnliche Gruppe von Steuerstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

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

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste eignet sich für grundlegende Schleifen; die zweite für Schleifen, bei denen sichergestellt werden soll, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

Die [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) von JavaScript ist dieselbe wie in C und Java: Sie ermöglicht die Angabe der Steuerinformationen für Ihre Schleife in einer einzigen Zeile.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei weitere bedeutende Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), das über [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), das alle [enumerierbaren](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Zweige basierend auf Gleichheitsprüfungen verwendet werden.

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

Ähnlich wie in C sind Fallklammern konzeptionell dasselbe wie [Label](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung zur nächsten Ebene "durchfallen" wird. Allerdings sind sie eigentlich keine Sprungtabellen – jeder Ausdruck kann Teil der `case`-Anweisung sein, nicht nur Zeichenfolgen- oder Zahlenliterale, und sie werden einzeln ausgewertet, bis eins dem zu vergleichenden Wert entspricht. Der Vergleich erfolgt zwischen den beiden unter Verwendung des `===`-Operators.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung ausgelöst werden. Viele eingebaute Operationen können ebenfalls werfen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des gerade abgefangenen Fehlers nicht erkennen, da alles von einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise annehmen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt keinen bedingten Catch in JavaScript – wenn Sie nur einen bestimmten Fehler behandeln möchten, müssen Sie alles abfangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Für eine umfassende Liste der Kontrollflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Als solche sind sie ähnlich wie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen – Eigenschaften können jederzeit hinzugefügt, gelöscht, neu angeordnet, verändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Zeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) – selbst Array-Indizes, die im Kanon Ganzzahlen sind, sind tatsächlich unter der Haube Zeichenketten.

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

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [abgerufen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Wenn Sie die Punktnotation verwenden, muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Eigenschaftszugriffe können verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, sodass, wenn nichts explizit das Objekt kopiert, Mutationen eines Objekts für die Außenwelt sichtbar sind.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sind, weil sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen des gleichen Objekts halten, würde das ändern eines, durch das andere beobachtbar sein.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr zu Objekten und Prototypen, siehe die [`Object`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen zur Objektinitialisierer-Syntax lesen Sie die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details zu Objektprototypen und Vererbung ausgelassen, da Sie normalerweise Vererbung mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (der als schwierig bekannt ist). Um mehr darüber zu erfahren, siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich eine spezielle Art von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mithilfe der `[]`-Syntax abgerufen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer um eins größer als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind nach wie vor Objekte – Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger Indexnummern. Das einzige "magische" daran ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird ein [_lückenhaftes Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) genannt, da es unbewohnte Slots in der Mitte gibt und die Engine veranlassen wird, es von einem Array in eine Hashtabelle zu optimieren. Stellen Sie sicher, dass Ihr Array dicht bevölkert ist!

Ein Index außerhalb des Bereichs wirft keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie den Wert `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und sich beliebig vergrößern oder verkleinern.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife iteriert werden, wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die der `for (int x : arr)`-Syntax in C++/Java entspricht:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays haben eine Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array iterieren – beispielsweise würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Rückruffunktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen der Kernbestandteil, um JavaScript zu verstehen. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter nehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabe-Anweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion ohne die Erwartung ihrer Parameter aufrufen, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Anzahl von anderen Parametersyntaxen. Zum Beispiel erlaubt die [Restparameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), alle vom Aufrufer übergebenen zusätzlichen Parameter in ein Array zu sammeln, ähnlich wie Pythons `*args`. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es keine `**kwargs`.)

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

Im obigen Code enthalten die Variable `args` alle Werte, die an die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ seiner Deklaration, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der in die Funktion übergeben wurde, in der Variablen `firstValue` und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie sie bereits in einem Array halten, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _erweitern_. Zum Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mithilfe des [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, das es Objekten ermöglicht, bequem gepackt und entpackt zu werden.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) Syntax, die es versäumten Parametern (oder denen, die als `undefined` übergeben werden) ermöglicht, einen Standardwert zu haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript ermöglicht es Ihnen, anonyme Funktionen zu erstellen – das heißt, Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, unmittelbar einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird – das heißt, es ist semantisch äquivalent zur Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren – mit einem [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind nicht semantisch äquivalent zu Funktionsausdrücken – für weitere Informationen siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine andere Möglichkeit, wie anonyme Funktionen nützlich sein können: Sie können gleichzeitig in einem einzigen Ausdruck deklariert und aufgerufen werden, dies wird {{Glossary("IIFE", "Sofort aufgerufenem Funktionsausdruck (IIFE)")}} genannt:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie über das [Emulieren privater Methoden mit Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich für den Umgang mit Baumstrukturen, wie sie im DOM des Browsers zu finden sind.

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

Funktionsausdrücke können ebenfalls benannt sein, was es ihnen ermöglicht, rekursiv zu sein.

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

Der im obigen Beispiel angegebene Name ist nur im eigenen Funktionsumfang der Funktion verfügbar. Dies ermöglicht dem Motor mehr Optimierungen und führt zu lesbarerem Code. Der Name wird auch im Debugger und einigen Stack-Traces angezeigt, was Ihnen beim Debugging Zeit sparen kann.

Wenn Sie funktionale Programmierung gewohnt sind, seien Sie sich der Leistungsimplikationen der Rekursion in JavaScript bewusst. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, wurde sie nur von JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit, Stack-Traces und Debugging wiederherzustellen. Für tiefe Rekursion sollten Sie in Betracht ziehen, Iteration zu verwenden, um Stapelüberläufe zu vermeiden.

### Funktionen sind Objekte erster Klasse

JavaScript-Funktionen sind Objekte erster Klasse. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Zusätzlich unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) ohne explizites Erfassen, was es Ihnen ermöglicht, bequem funktionale Programmierstile anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind – wie alles andere in JavaScript – und dass Sie ihnen wie früher in der Objektesektion gesehen, Eigenschaften hinzufügen oder ändern können.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind auch innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer Elternfunktion zugreifen können:

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

Dies bietet eine große Menge an Nutzen beim Schreiben pflegbaren Codes. Wenn eine aufgerufene Funktion von einer oder zwei anderen Funktionen abhängt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen innerhalb davon schachteln. Dies hält die Anzahl der Funktionen, die im globalen Gültigkeitsbereich sind, niedrig.

Dies ist auch eine großartige Möglichkeit, dem Reiz globaler Variablen entgegenzuwirken. Wenn Sie komplexen Code schreiben, ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihren Eltern teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zusammen zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [Klassen](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die sehr ähnlich zu Sprachen wie Java ist.

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

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifiziert hat. Klassen erzwingen keine Codeorganisation – zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: Es ist nur ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) genannt.

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

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Eigenschaften werden durch ein Hash `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftennamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen – auch nicht in abgeleiteten Klassen.

Für eine detaillierte Anleitung zu verschiedenen Klassenfunktionen können Sie die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus einspurig. Es gibt kein [Parallelisieren](https://en.wikipedia.org/wiki/Parallel_computing); nur [Nebenläufigkeit](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrone Programmierung wird durch eine [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) ermöglicht, die es ermöglicht, einen Satz von Aufgaben in die Warteschlange zu stellen und auf deren Abschluss zu prüfen.

Es gibt drei idiomatische Wege, um asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, was eine syntaktische Zucker für Promises ist

Zum Beispiel könnte eine Datei-Lese-Operation in JavaScript so aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmierfunktionen, aber es ist entscheidend bei der Interaktion mit der externen Umgebung – vom [Anfragen von Benutzerberechtigungen](/de/docs/Web/API/Permissions_API), über das [Einholen von Daten](/de/docs/Web/API/Fetch_API/Using_Fetch), bis hin zum [Lesen von Dateien](https://nodejs.org/api/fs.html). Das Asynchrone Halten der potenziell langlaufenden Operationen stellt sicher, dass andere Prozesse dennoch laufen können, während dieser wartet – zum Beispiel wird der Browser nicht einfrieren, während er darauf wartet, dass der Benutzer auf eine Schaltfläche klickt, um die Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Promise haben, können Sie nur auf das endgültiges Ergebnis über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode zugreifen. Ebenso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, der normalerweise eine async-Funktion oder ein Modul ist. Promises sind _niemals blockierend_ – nur die Logik, die von dem Ergebnis des Promises abhängt, wird verschoben; alles andere wird weiterhin gleichzeitig ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie Promises möglicherweise als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>), die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, weil sie sich automatisch abflachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das Einfaden-Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, aufgrund seines nicht-blockierenden IO, das die Bearbeitung einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsfähig macht. CPU-gebundene (computational-intensive) Aufgaben, die reines JavaScript sind, blockieren jedoch immer noch den Haupt-Thread. Um echtes Parallelisieren zu erreichen, müssen Sie möglicherweise [Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie über das [Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn/JavaScript/Asynchronous) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java, etc. wird die Modulauflösung von JavaScript vollständig hostdefiniert – sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls, anstatt zu einem Projektstammpfad, sind.

Allerdings bietet die JavaScript-Sprache keine Standardbibliotheksmodule – alle Kernfunktionen werden durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies ist darauf zurückzuführen, dass JavaScript lange Zeit ohne Modulsystem auskam und die Tatsache, dass die Teilnahme am Modulsystem einige Änderungen an der Runtime-Einrichtung erfordert.

Unterschiedliche Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und ist größtenteils dateisystembasiert, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind, und Module aus HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Module-Leitfadenseite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Funktionen _sprachebene_ sind, während andere _laufzeitebene_ sind.

JavaScript ist eine Allzweckscript-Sprache. Die [Core-Sprachspezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Berechnungslogik. Sie befasst sich nicht mit Ein-/Ausgabe – ohne zusätzliche laufzeitebene APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)), ist das Verhalten eines JavaScript-Programms vollständig unbeobachtbar.

Eine Laufzeit, oder ein Host, ist etwas, das dem JavaScript-Engine (dem Interpreter) Daten zuführt, zusätzliche globale Eigenschaften bereitstellt und Hooks für den Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, das Lesen von Daten, das Drucken von Nachrichten, das Senden von Netzwerkanfragen, etc. sind alles laufzeitebene Operationen. Seit seiner Einführung wurde JavaScript in verschiedenen Umgebungen übernommen, wie z.B. Browsern (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt), etc. JavaScript wurde erfolgreich in das Web integriert (was sein Hauptzweck war), Mobile Apps, Desktop Apps, serverseitige Apps, Serverless, eingebettete Systeme und mehr. Während Sie über JavaScript-Kernfunktionen lernen, ist es auch wichtig, hostbereitgestellte Funktionen zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie über alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal auch Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Funktionen mit anderen Sprachen verglichen werden. Wenn Sie mehr über die Sprache selbst und die Nuancen jeder Funktion erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Platz und Komplexität ausgelassen haben, die Sie selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
