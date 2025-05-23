---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde jedoch auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungssensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, weil JavaScript groß- und kleinschreibungssensitiv ist.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn sie auf einer eigenen Zeile geschrieben wird. Aber wenn mehr als eine Anweisung auf einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln zur automatischen Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen lesen Sie die detaillierte Referenz über die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als beste Praxis angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht streng benötigt wird. Diese Praxis verringert die Wahrscheinlichkeit, dass Fehler in den Code eingeschleust werden.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen umgewandelt, die _Token_, _Steuerzeichen_, _Zeilenenden_, _Kommentare_ oder {{Glossary("whitespace", "Whitespace")}} sind. (Leerzeichen, Tabulatoren und Zeilenumbrüche gelten als Whitespace.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Blockkommentare können nicht verschachtelt werden. Dies passiert oft, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar aufnehmen, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das Muster `*/` unterbrechen. Zum Beispiel durch Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Whitespace und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird **Hashbang-Kommentar**-Syntax genannt und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für mehr Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine blockweite, lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockweite, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, genannt {{Glossary("Identifier", "Identifikatoren")}}, folgen bestimmten Regeln.

Ein JavaScript-Identifikator beginnt in der Regel mit einem Buchstaben, einem Unterstrich (`_`) oder einem Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Für weitere Details siehe die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) Referenz.) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren darzustellen.

Einige Beispiele für legale Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit den Schlüsselwörtern {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine blockweite lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Syntax zu entpacken. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem gleichen Namensschlüssel aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte es früher, nicht deklarierte Variablen zuzuweisen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` wird als _Initialisierung_ bezeichnet. Die Deklaration ermöglicht es der Variable, später im Code ohne {{jsxref("ReferenceError")}} darauf zuzugreifen, während der Initialisierer einen Wert an die Variable zuweist. In `var` und `let` Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen entspricht `let x = 42` `let x; x = 42`.

Bei `const`-Deklarationen ist immer ein Initialisierer erforderlich, da sie jegliche Zuweisung nach der Deklaration verbieten und implizit mit `undefined` zu initialisieren wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für allen Code, der im Skriptmodus ausgeführt wird.
- Modulbereich: Der Bereich für Code, der im Modus „Modul“ läuft.
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden, einem zusätzlichen Bereich angehören:

- Blockbereich: Der Bereich, der mit einem Paar von geschweiften Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie in jedem anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let` und `const`-Deklarationen können auch auf die [Block-Anweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in der sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Allerdings sind mit `var` erstellte Variablen nicht auf Blockbereiche beschränkt, sondern nur für die _Funktion (oder den globalen Bereich)_, in dem sich der Block befindet, lokal.

Zum Beispiel wird der folgende Code `5` protokollieren, weil der Bereich von `x` der globale Kontext ist (oder der Funktionskontext, wenn der Code Teil einer Funktion ist). Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var` deklarierte Variablen werden {{Glossary("Hoisting", "hochgehoben")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Bereich verweisen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Sie können `var`-Deklarationen so betrachten, dass sie an die Spitze ihres Funktions- oder globalen Bereichs "hochgehoben" werden. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, weil nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ hochgehoben wird, nicht aber die _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden interpretiert wie:

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so nah wie möglich an die Spitze der Funktion platziert werden. Diese beste Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` hochgehoben werden, ist eine Definitionsfrage. Der Zugriff auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, weil sich die Variable in einer "[zeitlichen Todzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" befindet, vom Beginn des Blocks bis die Deklaration verarbeitet wird.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert hochheben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig hochgehoben — Sie können die Funktion jederzeit in ihrem Bereich sicher aufrufen. Weitere Diskussionen finden Sie unter dem Eintrag {{Glossary("Hoisting", "Hoisting")}} im Glossar.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und festlegen können. In allen Umgebungen kann die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und festzulegen. Dies soll ein konsistentes Interface zwischen verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie auf globale Variablen, die in einem Fenster oder Rahmen deklariert wurden, von einem anderen Fenster oder Rahmen zugreifen, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie auf diese Variable aus einem `iframe` als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Schlüsselwort erstellen. Die Syntax eines Konstantenidentifikators ist die gleiche wie bei jedem Variablenidentifikator: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstriche enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert während der Ausführung des Skripts weder durch Zuweisung ändern noch erneut deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Bereichsregeln für Konstanten sind die gleichen wie für `let`-Blockbereichsvariablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im selben Bereich deklarieren. Zum Beispiel:

```js-nolint example-bad
// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;
}
```

Jedoch verhindert `const` nur _Neuzuweisungen_, nicht aber _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Auch der Inhalt eines Arrays ist nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Datenstrukturen und Typen

### Datentypen

Der neueste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen, die {{Glossary("Primitive", "Primitiven")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript groß- und kleinschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Folge von Zeichen, die einen Textwert darstellen. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen fundamentalen Elemente der Sprache. Während Funktionen technisch gesehen eine Art Objekt sind, können Sie sich Objekte als benannte Container für Werte und Funktionen als Prozeduren vorstellen, die Ihr Skript ausführen kann.

### Konvertierung von Datentypen

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variablen den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen während der Skriptausführung bei Bedarf automatisch konvertiert werden.

Sie könnten zum Beispiel eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und String-Werte mit dem `+` Operator beinhalten, konvertiert JavaScript numerische Werte in Strings. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte in Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertierung von Strings in Zahlen

Falls ein Wert, der eine Zahl darstellt, im Arbeitsspeicher als String vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` liefert nur ganze Zahlen zurück, sodass seine Verwendung für Dezimalzahlen eingeschränkt ist.

> [!NOTE]
> Eine beste Praxis für `parseInt` ist es, immer das _radix_-Parameter einzuschließen. Das radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, eine Zahl aus einem String zu erhalten, ist der `+` (unärer Plus) Operator. Dieser führt implizit eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die derselbe Prozess wie die {{jsxref("Number()")}}-Funktion ist.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte – keine Variablen –, die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolesche Literale](#boolesche_literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal, wenn das Literal ausgewertet wird, ein neues Array-Objekt. Zum Beispiel wird ein Array, das mit einem Literal im globalen Kontext definiert ist, einmal erstellt, wenn das Skript geladen wird. Wenn das Array-Literal jedoch innerhalb einer Funktion liegt, wird jedes Mal ein neues Array erstellt, wenn diese Funktion aufgerufen wird.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommata in Array-Literalen

Wenn Sie zwei Kommata nacheinander in ein Array-Literal einfügen, lässt das Array einen leeren Platz für das nicht angegebene Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe wie der tatsächliche `undefined`-Wert ist. Bei der Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Stellen übersprungen. Der Zugriff auf den Index `fish[1]` gibt jedoch weiterhin `undefined` zurück.

Wenn Sie nach der Elementliste ein abschließendes Komma hinzufügen, wird das Komma ignoriert.

Im folgenden Beispiel ist die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommata in der Liste zeigen ein neues Element an.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel beträgt die `length` des Arrays vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel beträgt die `length` des Arrays vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Note:** [Nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen, Git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, weil das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht modifiziert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommata ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf deren Fehlen hinzuweisen. Dadurch erhöht sich die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolesche Literale

Der Boolesche Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Booleschen Werte `true` und `false` mit den wahr und falsch Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Booleschen Datentyp. Siehe {{jsxref("Boolean")}} für mehr Informationen.

### Numerische Literale

JavaScript numerische Literale beinhalten Ganzzahlliterale in verschiedenen Basen sowie Fließkommaliterale in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale unsigniert sind. Dennoch sind Code-Fragmente wie `-123.4` in Ordnung, da sie als unäres `-`-Operator auf das numerische Literal `123.4` angewendet interpretiert werden.

#### Ganzzahlliterale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können im Dezimal-System (Basis 10), Hexadezimal-System (Basis 16), Oktalsystem (Basis 8) und Binärsystem (Basis 2) geschrieben werden.

- Ein _dezimales_ Ganzzahlliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahlliteral oder ein führendes `0o` (oder `0O`) zeigt an, dass es sich um ein _oktal_ handelt. Oktal-Ganzzahlliterale können nur die Ziffern `0` – `7` enthalten.
- Ein führendes `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß-/Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Ein führendes `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlliteral an. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n` Suffix bei einem Ganzzahlliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann eine der oben genannten Basen verwenden. Beachten Sie, dass die führende Null-Oktalsyntax wie `0123n` nicht erlaubt ist, aber `0o123n` in Ordnung ist.

Einige Beispiele für Ganzzahlliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der lexikalischen Grammatik-Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Fließkomma-Literale

Ein Fließkommaliteral kann die folgenden Teile haben:

- Eine unsignierte Dezimalzahl,
- Einen Dezimalpunkt (`.`),
- Einen Bruchteil (eine weitere Dezimalzahl),
- Einen Exponenten.

Der Exponentteil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die signiert sein kann (mit `+` oder `-` vorangestellt). Ein Fließkommaliteral muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kurz gefasst lautet die Syntax:

```plain
[digits].[digits][(E|e)[(+|-)]digits]
```

Zum Beispiel:

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### Objekt-Literale

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren aus Eigenschaftsnamen und den zugeordneten Werten eines Objekts, eingeschlossen in geschweiften Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objekt-Literal am Anfang einer Anweisung! Dies führt zu einem Fehler (oder funktioniert nicht wie erwartet), weil das `{` als Anfang eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String, `"Saturn"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort dem Ergebnis zugewiesen, das durch den Aufruf der Funktion `(carTypes("Honda"))` hervorgerufen wird; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Darüber hinaus können Sie ein numerisches oder String-Literal für den Eigenschaftsnamen verwenden oder ein Objekt in ein anderes einbetten. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Die Namen von Objekteigenschaften können beliebige Zeichenfolgen sein, einschließlich der leeren Zeichenfolge. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Identifikator")}} oder eine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`) Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammer-Notation (`[]`) abgerufen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt-Literale

Objektliterale unterstützen eine Reihe von Kurzformen, darunter das Setzen des Prototyps bei der Erstellung, Kurzformen für `foo: foo` Zuweisungen, das Definieren von Methoden, das Erstellen von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken.

Zusammen bringen diese auch Objektliterale und Klassendeklarationen näher zusammen und ermöglichen es dem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp-Literale

Ein Regex-Literal (das im Detail [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### String-Literale

Ein String-Literal besteht aus null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Ein String muss durch Anführungszeichen des gleichen Typs begrenzt sein (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede der Methoden des {{jsxref("String")}}-Objekts auf einen String-Literalwert aufrufen. JavaScript konvertiert das String-Literal automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden durch das Back-Tick-Zeichen (`` ` ``) ([Gravis](https://de.wikipedia.org/wiki/Gravis-Taste)) anstelle von doppelten oder einfachen Anführungszeichen umschlossen.

Template-Literale bieten syntaktischen Zucker zum Erstellen von Strings. (Dies ähnelt den String-Interpolationsfunktionen in Perl, Python und mehr.)

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const name = "Lev",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zur Angabe eines Template-Literals zusammen mit einem Aufruf einer "Tag"-Funktion für seine Analyse. Ein getaggtes Template ist einfach eine prägnantere und semantischere Möglichkeit, eine Funktion aufzurufen, die eine Zeichenkette und eine Reihe relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal — wie im folgenden Beispiel, bei dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion wird die Argumente interpolieren und Objekte oder Arrays, die möglicherweise auftauchen, serialisieren, wobei das lästige `[object Object]` vermieden wird.

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
```

Da getaggte Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das obige als äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies erinnert möglicherweise an die `console.log`-Stil-Interpolation:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat erklärt werden müssen.

#### Verwenden von Sonderzeichen in Strings

Neben den normalen Zeichen können Sie auch Sonderzeichen in Strings einschließen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                          |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                       |
| `\f`        | Formularvorschub                                                                                                                                                                                                                                                  |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                        |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                     |
| `\t`        | Tabulator                                                                                                                                                                                                                                                         |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                              |
| `\'`        | Apostroph oder einzelnes Anführungszeichen                                                                                                                                                                                                                        |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                       |
| `\\`        | Rückschrägstrich                                                                                                                                                                                                                                                  |
| `\XXX`      | Das Zeichen mit der Latin-1-Kodierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben wird. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Kodierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben wird. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben wird. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepoint-Escape-Sequenzen. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escape-Sequenzen `\uD87E\uDC04`.                                                                                                                                        |

#### Zeichen entschärfen

Für Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein vorangestellter Rückschrägstrich ignoriert, aber diese Nutzung wird als veraltet betrachtet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings einfügen, indem Sie ihm einen Rückschrägstrich voranstellen. Dies wird als _Entschärfen_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis hiervon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen literalen Rückschrägstrich innerhalb eines Strings zu verwenden, müssen Sie das Rückschrägstrich-Zeichen entschärfen. Zum Beispiel, um den Dateipfad `c:\temp` einem String zuzuweisen, verwenden Sie Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche entschärfen, indem Sie ihnen einen Rückschrägstrich voranstellen. Der Rückschrägstrich und der Zeilenumbruch werden beide aus dem Wert des Strings entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Mehr Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, lesen Sie auch die folgenden Kapitel in diesem Leitfaden:

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns Steuerflusskonstrukte und Fehlerbehandlung ansehen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
