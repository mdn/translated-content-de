---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript leiht sich den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **großschreibungssensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (das im Deutschen "früh" bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript großschreibungssensitiv ist.

In JavaScript werden Anweisungen [statements](/de/docs/Glossary/Statement) genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn sie in einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht wird, müssen sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur JavaScript [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).)

Es gilt jedoch als beste Praxis, nach jeder Anweisung immer ein Semikolon zu setzen, selbst wenn es nicht unbedingt erforderlich ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass sich Fehler in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Linienabschlüsse_, _Kommentare_ oder [whitespace](/de/docs/Glossary/whitespace) sind. (Leerzeichen, Tabs und Zeilenumbrüche werden als Whitespace betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht schachteln. Dies passiert oft, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar einfügen, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen. Zum Beispiel, indem Sie einen Rückwärtsschrägstrich einfügen:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Whitespace und werden während der Skriptausführung verworfen.

> [!NOTE]
> Am Anfang einiger JavaScript-Dateien sehen Sie möglicherweise eine dritte Art von Kommentarsyntax, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentar**-Syntax bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Weitere Details finden Sie unter [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments).

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional auf einen Wert initialisiert werden kann.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-skopierte, lokale Variable, die optional auf einen Wert initialisiert werden kann.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-skopierte, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, genannt [identifiers](/de/docs/Glossary/Identifier), müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifikator beginnt in der Regel mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript großschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Für weitere Details siehe die Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren darzustellen.

Einige Beispiele für legale Namen sind `Number_hits, `temp99`, `$credit`und`\_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel, `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel, `let y = 13`. Diese Syntax kann verwendet werden, um eine block-skopierte lokale Variable zu deklarieren. (Siehe [Variablenscope](#variablenscope) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu entpacken. Zum Beispiel, `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der im Objekt `foo` dem gleichnamigen Schlüssel entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher das Zuweisen an nicht deklarierte Variablen, wodurch eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variabel entstand. Dies ist im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) ein Fehler und sollte grundsätzlich vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initialisierer_. Die Deklaration ermöglicht den späteren Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variablen einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, erhält sie den Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` äquivalent zu `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art von Zuweisung nach der Deklaration verbieten und die implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenscope

Eine Variable kann zu einem der folgenden [Scopes](/de/docs/Glossary/Scope) gehören:

- Globaler Scope: Der Standard-Scope für alle im Skriptmodus ausgeführten Code.
- Modul-Scope: Der Scope für Code, der im Modus Modul ausgeführt wird.
- Funktionsscope: Der Scope, der mit einer [Funktion](/de/docs/Glossary/function) erstellt wurde.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, zu einem zusätzlichen Scope gehören:

- Block-Scope: Der Scope, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wurde.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie für jeden anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf den [Block-Anweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt werden, in dem sie deklariert sind.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Im Gegensatz dazu sind mit `var` erstellte Variablen nicht block-skopiert, sondern nur lokal zur _Funktion (oder globaler Scope)_, in der sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da der Scope von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Scope von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

`var`-deklarierte Variablen werden [gehoben](/de/docs/Glossary/Hoisting), das bedeutet, dass Sie in ihrem Scope überall auf die Variable zugreifen können, auch wenn ihre Deklaration noch nicht erreicht wurde. Man kann sich `var`-Deklarationen als an den Anfang ihres Funktionen- oder globalen Scopes "gezogen" vorstellen. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert ist, ist der Wert immer `undefined`, weil nur ihre _Deklaration_ und die _Standardinitialisierung (mit `undefined`)_ gehoben wird, nicht aber die _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden wie folgt interpretiert:

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so nah wie möglich an den Anfang der Funktion gesetzt werden. Diese Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionsfrage. Die Referenzierung der Variablen im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable in einer "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert heben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben — Sie können die Funktion sicher überall in ihrem Scope aufrufen. Siehe den [Hoisting](/de/docs/Glossary/Hoisting)-Lexikoneintrag für eine ausführlichere Diskussion.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie globale Variablen, die in einem Fenster oder Frame deklariert wurden, von einem anderen Fenster oder Frame aus zugreifen, indem Sie den entsprechenden `window`- oder `frame`-Namen angeben. Zum Beispiel können Sie auf eine Variable namens `phoneNumber`, die in einem Dokument deklariert ist, von einem `iframe` aus als `parent.phoneNumber` zugreifen.

### Konstanten

Sie können mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} eine schreibgeschützte, benannte Konstanten erstellen. Die Syntax eines Konstantenidentifikators ist dieselbe wie bei jedem Variablenidentifikator: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrichzeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während des Skriptausführens weder durch Zuweisung geändert noch neu deklariert werden. Sie muss auf einen Wert initialisiert werden. Die Scope-Regeln für Konstanten sind dieselben wie die für `let` block-skopierte Variablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im selben Scope deklarieren. Beispielsweise:

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

Allerdings verhindert `const` nur _Neuzuordnungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

- Sieben Datentypen, die [Primitives](/de/docs/Glossary/Primitive) sind:

  1. [Boolean](/de/docs/Glossary/Boolean). `true` und `false`.
  2. [null](/de/docs/Glossary/null). Ein spezielles Schlüsselwort, das einen Null-Wert bezeichnet. (Da JavaScript großschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. [undefined](/de/docs/Glossary/undefined). Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. [Number](/de/docs/Glossary/Number). Eine Ganzzahl oder Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. [BigInt](/de/docs/Glossary/BigInt). Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. [String](/de/docs/Glossary/String). Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und [Object](/de/docs/Glossary/Object)

Obwohl diese Datentypen relativ wenig sind, ermöglichen sie nützliche Operationen mit Ihren Anwendungen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen fundamentalen Elemente der Sprache. Während Funktionen technisch eine Art Objekt sind, können Sie sich Objekte als benannte Container für Werte und Funktionen als Prozeduren vorstellen, die Ihr Skript ausführen kann.

### Datentyp-Konvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variablen den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen bei Bedarf während der Skriptausführung automatisch konvertiert werden.

Ein Beispiel: Sie könnten eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später der gleichen Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, führt diese Zuweisung nicht zu einer Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und Zeichenkettenwerte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Zeichenketten. Zum Beispiel:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript numerische Werte _nicht_ in Zeichenketten. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertierung von Zeichenketten zu Zahlen

Falls ein Wert, der eine Zahl darstellt, als Zeichenkette im Speicher vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung für Dezimalzahlen eingeschränkt.

> [!NOTE]
> Eine beste Praxis für `parseInt` besteht darin, immer den _Radix_-Parameter anzugeben. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, eine Zahl aus einer Zeichenkette abzurufen, ist der `+` (unäre Plus)-Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte - keine Variablen -, die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert und seine `length` auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Beispiel: Ein Array, das mit einem Literal im globalen Scope definiert ist, wird einmal erstellt, wenn das Skript geladen wird. Wenn sich das Array-Literal jedoch innerhalb einer Funktion befindet, wird jedes Mal, wenn diese Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie zwei Kommas in einer Zeile in einem Array-Literal verwenden, lässt das Array einen leeren Platz für das nicht definierte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass der zweite Eintrag "leer" ist, was nicht genau dasselbe wie der tatsächliche `undefined`-Wert ist. Wenn Sie Array-durchlaufende Methoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, werden leere Slots übersprungen. Der Zugriff auf den Index `fish[1]` ergibt jedoch weiterhin `undefined`.

Wenn Sie ein angehängtes Komma am Ende der Liste der Elemente einschließen, wird das Komma ignoriert.

Im folgenden Beispiel beträgt die `length` des Arrays drei. Es gibt kein `myList[3]`. Alle anderen Kommas in der Liste geben ein neues Element an.

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

> **Hinweis:** [Anhängende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen, Git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, weil das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, aber nicht die vorherige Zeile ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar hinzufügen, um auf das Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boole'sche Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den wahr/falsch-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist eine Hülle um den primitiven Boole'schen Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript numerische Literale umfassen Ganzzahlen in verschiedenen Basen sowie Gleitkomma-Literale in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale ohne Vorzeichen sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator interpretiert werden, der auf das numerische Literal `123.4` angewendet wird.

#### Ganzzahl-Literale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können in dezimal (Basis 10), hexadezimal (Basis 16), oktal (Basis 8) und binär (Basis 2) geschrieben werden.

- Ein _dezimales_ Ganzzahl-Literal ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahl-Literal oder eine führende `0o` (oder `0O`) zeigt an, dass es im _Oktal_ ist. Oktal-Ganzzahl-Literale dürfen nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahl-Literal an. Hexadezimale Ganzzahlen dürfen Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Der Fall eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahl-Literal an. Binäre Ganzzahl-Literale dürfen nur die Ziffern `0` und `1` enthalten.
- Ein führendes `n`-Suffix auf einem Ganzzahl-Literal gibt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die Syntax für führende Null-Oktale wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahl-Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der lexikalen Grammatik-Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkomma-Literale

Ein Gleitkomma-Literal kann folgende Teile haben:

- Ein dezimales Ganzzahl ohne Vorzeichen,
- Ein Dezimalpunkt (`.`),
- Ein Bruchteil (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die vorzeichenbehaftet sein kann (mit `+` oder `-` davor). Ein Gleitkomma-Literal muss mindestens eine Ziffer haben und entweder einen Dezimalpunkt oder `e` (oder `E`).

Etwas prägnanter ist die Syntax:

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

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String zu, `"Saturn"`; das zweite Element, die `getCar`-Eigenschaft, wird sofort dem Ergebnis der Ausführung der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine bestehende Variable (`sales`).

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

Zusätzlich können Sie eine numerische oder Zeichenketten-Literal für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes verschachteln. Das folgende Beispiel nutzt diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Strings sein, einschließlich des leeren Strings. Wenn der Eigenschaftsname kein gültiger JavaScript-[Identifikator](/de/docs/Glossary/Identifier) oder eine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`) Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Stattdessen muss mit der Klammernotation (`[]`) darauf zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt-Literale

Objekt-Literale unterstützen eine Reihe von Kurznotationen, die das Setzen des Prototyps bei der Konstruktion umfassen, Kurznotation für `foo: foo`-Zuweisungen, Definition von Methoden, Super-Aufrufe machen, und Berechnung von Eigenschaftsnamen mit Ausdrücken.

Diese Kurznotionen bringen zusammen Objekt-Literale und Klassen-Deklarationen näher zusammen und ermöglichen es, dass objektbasierte Entwürfe von einigen der gleichen Annehmlichkeiten profitieren.

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

Ein RegEx-Literal (das im Detail [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein RegEx-Literal.

```js
const re = /ab+c/;
```

### String-Literale

Ein String-Literal ist null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Ein String muss durch Anführungszeichen desselben Typs begrenzt sein (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen ausdrücklich ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede der {{jsxref("String")}}-Objektmethoden auf einem String-Literalwert aufrufen. JavaScript konvertiert das String-Literal automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden von dem Akzent-Backtick (`` ` ``) ([Gravis/Grave accent](https://de.wikipedia.org/wiki/Gravis)) Zeichen anstelle von doppelten oder einfachen Anführungszeichen umschlossen.

Template-Literale bieten eine syntaktische Zucker für die Konstruktion von Strings. (Dies ist ähnlich den String-Interpolation-Funktionen in Perl, Python und mehr.)

```js-nolint
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`
```

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf an eine „Tag“-Funktion für seine Analyse anzugeben. Ein Tagged Template ist nur eine prägnantere und semantischere Möglichkeit, eine Funktion aufzurufen, die einen String und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal — wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftreten könnten, und vermeidet das lästige `[object Object]`.

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

Da Tagged Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies könnte an die `console.log`-Stilinterpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das Tagged Template natürlicher liest als eine traditionelle „Formatter“-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwenden spezieller Zeichen in Strings

Zusätzlich zu gewöhnlichen Zeichen können Sie auch spezielle Zeichen in Strings einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                |
| `\b`        | Rückschritt                                                                                                                                                                                                                                              |
| `\f`        | Form-Feed                                                                                                                                                                                                                                                |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                               |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                            |
| `\t`        | Tabulator                                                                                                                                                                                                                                                |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                     |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                               |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                              |
| `\\`        | Rückwärtsschrägstrich                                                                                                                                                                                                                                    |
| `\XXX`      | Das Zeichen mit der Latin-1 Codierung, angegeben durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377`. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1 Codierung, angegeben durch die zwei hexadezimalen Ziffern `XX` zwischen `00` und `FF`. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                            |
| `\uXXXX`    | Das Unicode-Zeichen, angegeben durch die vier hexadezimalen Ziffern `XXXX`. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepoint-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die einfachen Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                       |

#### Zeichen maskieren

Für nicht in der Tabelle aufgeführte Zeichen wird ein vorhergehender Rückwärtsschrägstrich ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen in einen String einfügen, indem Sie ihm einen Rückwärtsschrägstrich voranstellen. Dies ist bekannt als das _Entkommen_ des Anführungszeichens. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen literal Rückwärtsschrägstrich in einem String einzuschließen, müssen Sie das Rückwärtsschrägstrich-Zeichen maskieren. Zum Beispiel, um den Dateipfad `c:\temp` einem String zuzuweisen, verwenden Sie das Folgende:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche maskieren, indem Sie ihnen einen Rückwärtsschrägstrich voranstellen. Der Rückwärtsschrägstrich und der Zeilenumbruch werden beide aus dem Wert des Strings entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über JavaScripts Sprachkonstrukte zu erfahren, siehe auch die folgenden Kapitel in diesem Leitfaden:

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir einen Blick auf Kontrollflusskonstrukte und Fehlerbehandlung werfen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
