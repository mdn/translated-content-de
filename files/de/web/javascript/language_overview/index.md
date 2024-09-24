---
title: JavaScript Sprache Überblick
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C — viele Strukturen dieser Sprachen sind auch auf JavaScript anwendbar. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen [First-Class](/de/docs/Glossary/First-class_Function) Objekte sind, die leicht über Ausdrücke erstellt und wie jedes andere Objekt übergeben werden können.

Diese Seite dient als kurzer Überblick über verschiedene JavaScript-Sprachmerkmale, verfasst für Leser mit Erfahrung in anderen Sprachen wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören immer zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) verwendet, außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` — normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): wird zum Erstellen einzigartiger Bezeichner verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): zeigt einen absichtlichen Nicht-Wert an.

Alles andere ist als ein [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine besonderen Datenstrukturen — sie sind lediglich ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript verfügt über zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Gleitkommawert mit doppelter Genauigkeit](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne dass Präzision verloren geht, und Gleitkommazahlen können bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, nicht 1
```

Ein _scheinbarer Ganzer_ ist also tatsächlich _implizit eine Gleitkommazahl_. Aufgrund der IEEE 754 Kodierung kann die Gleitkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bit-Operationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, die die Basis (binär, oktal, dezimal oder hexadezimal) anzeigen, oder ein Exponenten-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein ganzzahliger Wert beliebiger Länge. Sein Verhalten ähnelt den Ganzzahltypen in C (z.B. wird bei der Division zu Null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden durch ein Zahlenliteral und ein `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt stellt Standard-Mathematikfunktionen und -konstanten bereit.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das den String auf eine Ganzzahl analysiert.
- {{jsxref("parseFloat()")}}, das den String auf eine Gleitkommazahl analysiert.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die einen String analysiert, als ob er ein Zahlenliteral wäre, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Kurzform für `Number()` verwenden.

Zahlenwerte umfassen auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück — zum Beispiel, wenn versucht wird, eine nicht-numerische Zeichenkette zu analysieren oder [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert anzuwenden. Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand für eine mathematische Operation bereitstellen, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht mit sich selbst gleich ist (laut IEEE 754-Spezifikation).

### Zeichenfolgen

Zeichenfolgen in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte für jeden Willkommen sein, der sich mit der Internationalisierung beschäftigt hat. Genau genommen sind sie [UTF-16-kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hallo, Welt");
console.log("你好，世界！"); // Fast alle Unicode-Zeichen können in String-Literalen buchstäblich geschrieben werden
```

Zeichenfolgen können mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript hat keine Unterscheidung zwischen Zeichen und Zeichenfolgen. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenfolge, die aus diesem einzelnen Zeichen besteht.

```js
console.log("Hallo"[1] === "e"); // true
```

Um die Länge einer Zeichenfolge (in [Codeeinheiten](/de/docs/Glossary/Code_unit)) zu ermitteln, greifen Sie auf ihre [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Zeichenfolgen haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenfolge zu manipulieren und Informationen über die Zeichenfolge zu erhalten. Da alle primitiven Typen von Haus aus unveränderlich sind, geben diese Methoden neue Zeichenfolgen zurück.

Der `+` Operator ist für Zeichenfolgen überladen: Wenn einer der Operanden eine Zeichenfolge ist, führt er eine Zeichenfolgenverknüpfung anstelle von Zahlenaddition aus. Eine spezielle [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax ermöglicht es, Zeichenfolgen mit eingebetteten Ausdrücken kürzer zu schreiben. Im Gegensatz zu Pythons f-strings oder C# interpolierten Zeichenfolgen verwenden Template Literale Backticks (keine einfachen oder doppelten Anführungszeichen).

```js
const age = 25;
console.log("Ich bin " + age + " Jahre alt."); // Zeichenfolgenverkettung
console.log(`Ich bin ${age} Jahre alt.`); // Template Literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit auf `undefined`.

JavaScript hat einen Boolean-Typ, mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Zeichenfolgen (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten erforderlich, da JavaScript diese Umwandlung stillschweigend durchführt, wenn es einen Boolean erwartet, wie beispielsweise in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "[truthy](/de/docs/Glossary/Truthy)" und "[falsy](/de/docs/Glossary/Falsy)", was Werte bedeutet, die in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellte Symbol ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Mehr darüber können Sie in der [Symbolreferenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Variablen auf Block-Ebene zu deklarieren. Die deklarierte Variable ist in dem _Block_ verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable ist *nicht* hier sichtbar

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable ist nur hier sichtbar
}

// myLetVariable ist *nicht* hier sichtbar
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable ist in dem _Block_ verfügbar, in dem sie deklariert wurde.

```js
const Pi = 3.14; // Variable Pi deklarieren
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // wird einen Fehler werfen, weil Sie eine konstante Variable nicht ändern können.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht _Mutationen_ des Variablenwerts, wenn es ein Objekt ist.

```js
const obj = {};
obj.a = 1; // kein Fehler
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen aufweisen (zum Beispiel sind sie nicht blockgebunden) und sind im modernen JavaScript-Code nicht zu empfehlen.

Wenn Sie eine Variable ohne Zuweisung eines Wertes deklarieren, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne einen Initialisierer deklarieren, da Sie sie später ohnehin nicht ändern können.

Mit `let` und `const` deklarierte Variablen nehmen weiterhin den gesamten Bereich ein, in dem sie definiert sind, und befinden sich in einem Bereich, der als [zeitliche Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, bevor die eigentliche Deklarationszeile erreicht wird. Dies hat einige interessante Wechselwirkungen mit der Variablenüberschattung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, weil vor der Zeile `const x = 2` `x` noch auf den Parameter `x` im oberen Bereich verweisen sollte. In JavaScript würde dies wegen der Tatsache, dass jede Deklaration den gesamten Bereich einnimmt, einen Fehler bei der ersten `console.log`-Zeile werfen: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie in [dem vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen verknüpft. Bei mit `let` deklarierten Variablen können Sie den Typ immer durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Potenzieren). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch einen zusammengesetzten Zuweisungsgegenpart wie `+=` und `-=`, die sich auf `x = x operator y` erweitern.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um jeweils zu inkrementieren und zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenfolgenkonkatenation durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenfolge zu einer Zahl (oder einem anderen Wert) hinzufügen, wird alles zuerst in eine Zeichenfolge umgewandelt. Dies könnte Sie verwirren:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenfolge zu etwas ist ein nützlicher Weg, es selbst in eine Zeichenfolge umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Zeichenfolgen als auch für Zahlen funktionieren. Für die Gleichheit führt der [Doppelgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typkonvertierung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Auf der anderen Seite versucht der [Dreifachgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typkonvertierung und wird in der Regel bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppelgleichheits- und der Dreifachgleichheitsoperator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitoperatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswert ist, dass logische Operatoren nicht nur mit booleschen Werten funktionieren — sie arbeiten nach der "Wahrheitswertehaftigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0, weil 0 "falsch" ist
const b = "Hello" || "world"; // "Hello", weil sowohl "Hello" als auch "Welt" "wahr" sind
```

Die `&&` und `||` Operatoren verwenden Kurzschlusslogik, was bedeutet, dass sie ihren zweiten Operanden je nach erstem ausführen. Dies ist nützlich, um null-Objekte zu überprüfen, bevor auf ihre Attribute zugegriffen wird:

```js
const name = o && o.getName();
```

Oder um Werte zu zwischenspeichern (wenn falsige Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten insbesondere an der [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt ein paar Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie dürfen nicht zu den [reservierten Wörtern](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) gehören.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind in der Regel `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional — die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Es gibt jedoch bestimmte Vorsichtsmaßnahmen, seit Semikolons im Gegensatz zu Python immer noch Teil der Syntax sind.

Für einen tiefen Einblick in die JavaScript-Grammatik lesen Sie die [Referenzseite für die lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript verfügt über eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; man kann sie miteinander verbinden:

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

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else`-Zweig, der aus einer einzigen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Erstere sind gut für grundlegende Schleifen; letztere sind für Schleifen gedacht, bei denen sichergestellt werden soll, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // eine Endlosschleife!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for` loop](/de/docs/Web/JavaScript/Reference/Statements/for) ist dasselbe wie in C und Java: Es ermöglicht Ihnen, die Steuerinformationen für Ihre Schleife auf einer einzigen Zeile bereitzustellen.

```js
for (let i = 0; i < 5; i++) {
  // Wird 5 mal ausgeführt
}
```

JavaScript enthält auch zwei weitere prominente for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [zählbaren](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // mach etwas mit dem Wert
}

for (const property in object) {
  // mach etwas mit dem Objekt-Eigenschaft
}
```

Die `switch`-Anweisung kann für mehrere Verzweigungen basierend auf Gleichheitsprüfung verwendet werden.

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

Ähnlich wie in C sind case-Klauseln konzeptionell dasselbe wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung auf die nächste Ebene "durchfällt". Sie sind jedoch keine Sprungtabellen — jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur Zeichenfolgen- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis einer dem zu vergleichenden Wert entspricht. Der Vergleich erfolgt zwischen den beiden mit dem `===` Operator.

Anders als bei einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung geworfen werden. Viele eingebaute Operationen können ebenfalls werfen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site-Verzeichnis existiert nicht");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht bestimmen, da alles von einer `throw`-Anweisung aus geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt kein bedingtes Caching in JavaScript — wenn Sie nur einen bestimmten Fehlertyp behandeln möchten, müssen Sie alles abfangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("Scheint, als wäre ein Parameter außerhalb des Bereichs:", e);
    console.log("Wiederholen...");
    buildMySite("./website");
  } else {
    // Unbekannter Fehlertyp; werfen Sie ihn, damit er möglicherweise von weiter oben im Aufrufstapel abgefangen und behandelt werden kann
    throw e;
  }
}
```

Wenn ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste von Kontrollflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Daher ähneln sie:

- Wörterbüchern in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziativen Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen, haben Objekte in JavaScript keine festen Formen — Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, mutiert oder dynamisch abgefragt werden. Objekt-Schlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind unter der Haube tatsächlich Strings.

Objekte werden in der Regel mit der Literal-Syntax erstellt:

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

Objekteigenschaften können mit [Punkten](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder eckigen Klammern (`[]`) zugegriffen werden. Bei Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen erlauben es, auf das Objekt mit einem dynamischen Schlüsselwert zuzugreifen.

```js
// Punktnotation
obj.name = "Simon";
const name = obj.name;

// Klammernotation
obj["name"] = "Simon";
const name = obj["name"];

// Kann einen Variablen verwenden, um einen Schlüssel zu definieren
const userName = prompt("was ist Ihr Schlüssel?");
obj[userName] = prompt("was ist sein Wert?");
```

Eigenschaftszugriff kann ineinander geschachtelt werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, sodass es sei denn, etwas kopiert das Objekt explizit, Mutationen an einem Objekt außerhalb sichtbar wären.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sein werden, weil sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen desselben Objekts halten, wäre eine Mutation bei der anderen sichtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Mehr zu Objekten und Prototypen finden Sie auf der [Referenzseite des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Weitere Informationen zur Objektsyntax finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, weil Sie Vererbung normalerweise mit [Klassen](#klassen) ohne Wechselwirkung mit dem zugrunde liegenden Mechanismus (von dem Sie vielleicht gehört haben, dass er abstrus ist) erreichen können. Um mehr darüber zu erfahren, lesen Sie [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind tatsächlich ein spezieller Objekttyp. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit der `[]`-Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer um eins größer als der höchste Index im Array.

Arrays werden in der Regel mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen jede beliebige Eigenschaft zuweisen, einschließlich beliebiger Zahlenindizes. Die einzige "Magie" besteht darin, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das obige Array wird als ein [_spärliches Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es unbewohnte Slots in der Mitte gibt, und wird dazu führen, dass die Engine es von einem Array in eine Hashtabelle deoptimiert. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Out-of-bounds Indizierung wirft keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

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

Arrays können mit der `for`-Schleife durchlaufen werden, wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Mach etwas mit a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die gleichbedeutend mit dem C++/Java `for (int x : arr)`-Syntax ist:

```js
for (const currentValue of a) {
  // Mach etwas mit currentValue
}
```

Arrays kommen mit einer Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele davon würden das Array iterieren — zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Rückruffunktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Neben Objekten sind Funktionen der Kernbestandteil des Verständnisses von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter annehmen. Der Funktionskörper kann beliebig viele Anweisungen enthalten und kann eigene Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabeanweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion ohne Übergabe der erwarteten Parameter aufrufen, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als erwartet werden, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Entspricht add(undefined, undefined)

add(2, 3, 4); // 5
// die ersten beiden summierten; 4 wurde ignoriert
```

Es gibt eine Reihe anderer Parametersyntaxen. Zum Beispiel erlaubt die [Rest-Parameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), dass alle zusätzlichen Parameter, die vom Aufrufer übergeben werden, in einem Array gesammelt werden, ähnlich zu Pythons `*args`. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es kein `**kwargs`.)

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

Im obigen Code enthält die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ seiner Deklaration, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der in die Funktion übergeben wurde, in der Variablen `firstValue` und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array haben, können Sie den [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als eine Liste von Elementen zu _verbreiten_. Zum Beispiel: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, die es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Beachten Sie die { } Klammern: Dies ist die Destrukturierung eines Objekts
function area({ width, height }) {
  return width * height;
}

// Die { } Klammern hier erstellen ein neues Objekt
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparametervalue_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)-Syntax, die es ermöglicht, ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert zu erhalten.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, anstelle von NaN
```

### Anonyme Funktionen

JavaScript ermöglicht es Ihnen, anonyme Funktionen zu erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente an andere Funktionen übergeben, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

```js
// Beachten Sie, dass vor den runden Klammern kein Funktionsname steht
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

Das macht die anonyme Funktion durch den Aufruf von `avg()` mit einigen Argumenten aufrufbar — das heißt, es ist semantisch gleichwertig mit der Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren — mit einem [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```js
// Beachten Sie, dass vor den runden Klammern kein Funktionsname steht
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// Sie können das `return` auslassen, wenn Sie einfach einen Ausdruck zurückgeben
const sum = (a, b, c) => a + b + c;
```

Pfeilfunktionen sind nicht semantisch gleichwertig mit Funktionsausdrücken — für weitere Informationen siehe [die Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Art und Weise, in der anonyme Funktionen nützlich sein können: Sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, genannt ein [Sofort aufgerufener Funktionsausdruck (IIFE)](/de/docs/Glossary/IIFE):

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [private Methoden mit Closures emulieren](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures).

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich für den Umgang mit Baumstrukturen, wie sie im Browser DOM zu finden sind.

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

Funktionsausdrücke können ebenfalls benannt werden, was es ihnen ermöglicht, rekursiv zu sein.

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

Der Name, der einem Funktionsausdruck wie oben angegeben wurde, ist nur im Gültigkeitsbereich der Funktion selbst verfügbar. Dies ermöglicht es der Engine, mehr Optimierungen durchzuführen und resultiert in einem lesbareren Code. Der Name erscheint auch im Debugger und in einigen Stack-Traces, was Ihnen Zeit beim Debuggen spart.

Wenn Sie sich an funktionale Programmierung gewöhnt haben, achten Sie auf die Leistungsimplikationen von Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, hat nur JavaScriptCore (verwendet von Safari) es implementiert, aufgrund der Schwierigkeit, Stacktraces wiederherzustellen und der Debugbarkeit. Für tiefe Rekursion sollten Sie stattdessen Iteration verwenden, um Stacküberlauf zu vermeiden.

### Funktionen sind Objekte erster Klasse

JavaScript-Funktionen sind Objekte erster Klasse. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) out-of-the-box ohne explizite Erfassung, wodurch Sie funktionale Programmierstile bequem anwenden können.

```js
// Funktion, die eine Funktion zurückgibt
const add = (x) => (y) => x + y;
// Funktion, die eine Funktion akzeptiert
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und dass Sie ihnen genauso wie wir es vorher im Abschnitt Objekte gesehen haben, Eigenschaften hinzufügen oder ändern können.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer Elternfunktion zugreifen können:

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc kann das nicht verwenden
    return a + b;
  }
  return nestedFunc(); // 5
}
```

Dies bietet eine große Menge an Nutzen beim Schreiben von wartbarerem Code. Wenn eine aufgerufene Funktion auf eine oder zwei andere Funktionen angewiesen ist, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen innerhalb davon verschachteln. Dies verringert die Anzahl der Funktionen, die sich im globalen Gültigkeitsbereich befinden.

Dies ist auch eine großartige Gegenmaßnahme zum Reiz globaler Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu Code führt, der schwer zu warten ist. Verschachtelte Funktionen können Variablen in ihrem Eltern verwenden, so dass Sie diesen Mechanismus verwenden können, um Funktionen zusammenzubrpcken, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die sehr ähnlich zu Sprachen wie Java ist.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hallo, ich bin ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
```

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifiziert hat. Klassen erzwingen keine Codeorganisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: es ist lediglich ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch das Voranstellen von `static` erstellt. Private Eigenschaften werden durch das Voranstellen eines Hash `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftsnamen. (Betrachten Sie `#` als `_` in Python.) Anders als in den meisten anderen Sprachen gibt es absolut keinen Weg, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu verschiedenen Klassenmerkmalen können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus einspurig. Es gibt keine [Parallelisierung](https://en.wikipedia.org/wiki/Parallel_computing); nur [Nebenläufigkeit](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrone Programmierung wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die es ermöglicht, eine Reihe von Aufgaben in die Warteschlange zu stellen und auf ihre Fertigstellung zu warten.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basierte (wie [`setTimeout()`](/de/docs/Web/API/setTimeout))
- [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basiert
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), was eine syntaktische Zucker für Promises ist

Hier ist zum Beispiel, wie ein Datei-Lesevorgang in JavaScript aussehen könnte:

```js
// Callback-basiert
fs.readFile(filename, (err, content) => {
  // Dieser Callback wird aufgerufen, wenn die Datei gelesen wird, was nach einer Weile sein könnte
  if (err) {
    throw err;
  }
  console.log(content);
});
// Der Code hier wird ausgeführt, während die Datei darauf wartet, gelesen zu werden

// Promise-basiert
fs.readFile(filename)
  .then((content) => {
    // Was zu tun ist, wenn die Datei gelesen wird
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// Der Code hier wird ausgeführt, während die Datei darauf wartet, gelesen zu werden

// Async/await
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

Die Kernsprache gibt keine asynchronen Programmiermerkmale vor, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert — von [Benutzerberechtigungen abfragen](/de/docs/Web/API/Permissions_API), über [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch), bis hin zum [Dateien lesen](https://nodejs.org/api/fs.html). Das Asynchronhalten potenziell langlaufender Operationen stellt sicher, dass andere Prozesse weiterhin ausgeführt werden können, während auf diesen gewartet wird — zum Beispiel wird der Browser nicht einfrieren, während er darauf wartet, dass der Benutzer einen Knopf klickt, um die Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Promise haben, können Sie nur über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode auf das Endergebnis zugreifen. Ebenso kann [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) nur im asynchronen Kontext verwendet werden, was normalerweise eine asynchrone Funktion oder ein Modul ist. Promises blockieren _nie_ — nur die Logik, die auf das Ergebnis des Promises angewiesen ist, wird verschoben; alles andere wird in der Zwischenzeit weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, können Sie Promises als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) erkennen, die mit `then()` abgebildet werden können (allerdings sind sie keine _richtigen_ Monaden, weil sie sich automatisch abflachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das einspassige Modell Node.js zu einer beliebten Wahl für die serverseitige Programmierung gemacht, aufgrund ihrer nicht blockierenden IO, die das Handhaben einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsfähig macht. CPU-gebundene (rechenintensive) Aufgaben, die in reinem JavaScript sind, blockieren jedoch weiterhin den Hauptthread. Um echte Parallelisierung zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie über [die Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn/JavaScript/Asynchronous)-Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeitumgebungen unterstützt wird. Ein Modul ist in der Regel eine Datei, die durch ihr Dateipath oder URL identifiziert wird. Sie können die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)- und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Nicht exportierte Variablen sind lokal für das Modul
const b = 2;

export const a = 1;
```

Anders als Haskell, Python, Java usw., ist die JavaScript-Modulauflösung vollständig hostdefiniert — sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum aktuellen Modulpfad anstelle irgendeines Projektstammverzeichnisses sind.

Jedoch bietet die JavaScript-Sprache keine Standardbibliotheksmodule — alle Kernfunktionen werden von globalen Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verkraftet. Dies liegt an der langjährigen Geschichte von JavaScript, die kein Modulsystem hatte, und der Tatsache, dass das Opt-in in das Modulsystem einige Änderungen an der Laufzeitkonfiguration mit sich bringt.

Verschiedene Laufzeitumgebungen können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und basiert größtenteils auf Dateisystemen, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Weitere Informationen finden Sie auf der [Leitfaden-Seite zu Modulen](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Den ganzen Text hindurch haben wir mehrfach erwähnt, dass bestimmte Funktionen _auf Sprachebene_ sind, während andere _auf Laufzeitebene_ sind.

JavaScript ist eine allgemein-purpose Skriptsprache. Die [Kernsprachespezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Rechenlogik. Es behandelt keinen Ein-/Ausgang — tatsächlich ist das Verhalten eines JavaScript-Programms ohne zusätzliche laufzeitbezogene APIs (am bemerkenswertesten [`console.log()`](/de/docs/Web/API/console/log_static)) vollständig unbeobachtet.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) leitet, zusätzliche globale Eigenschaften bereitstellt und Hooks für die Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, Dateneingabe, Nachrichten drucken, Netzwerkabfragen senden usw. sind alle auf Laufzeitebene. Seit ihrer Entstehung wurde JavaScript in verschiedenen Umgebungen angenommen, wie z.B. Browsern (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt) usw. JavaScript wurde erfolgreich in Web (für das es ursprünglich erdacht wurde), Mobile-Apps, Desktop-Apps, serverseitige Apps, serverlose, eingebettete Systeme und vieles mehr integriert. Während Sie über die grundlegenden JavaScript-Funktionen lernen, ist es auch wichtig zu verstehen, welche Funktionen vom Host bereitgestellt werden, um das Wissen anzuwenden. Beispielsweise können Sie alles über [Web-Plattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal auch von Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick in die Art und Weise, wie verschiedene JavaScript-Funktionen im Vergleich zu anderen Sprachen stehen. Wenn Sie mehr über die Sprache selbst und die Nuancen der einzelnen Funktionen erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Raum und Komplexität ausgelassen haben, die Sie jedoch selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
