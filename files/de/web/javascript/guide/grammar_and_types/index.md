---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitive** (beachtet die Groß- und Kleinschreibung) und verwendet die **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript auf Groß- und Kleinschreibung achtet.

In JavaScript werden Anweisungen [statements](/de/docs/Glossary/Statement) genannt und mit Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn diese in einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Eingabe von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Weitere Informationen finden Sie in der ausführlichen Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als Best Practice angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht unbedingt nötig ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass sich Fehler in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenenden_, _Kommentare_ oder [Leerzeichen](/de/docs/Glossary/whitespace) sind. (Leerzeichen, Tabulatoren und Zeilenumbrüche werden als Leerzeichen betrachtet.)

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

In diesem Fall müssen Sie das `*/`-Muster aufbrechen. Zum Beispiel durch das Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die in etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, um den Pfad zu einer bestimmten JavaScript-Engine anzugeben, die das Skript ausführen soll. Weitere Einzelheiten finden Sie unter [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments).

## Deklarationen

JavaScript kennt drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine blockbegrenzte, lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockbegrenzte, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, sogenannte [Bezeichner](/de/docs/Glossary/Identifier), unterliegen bestimmten Regeln.

Ein JavaScript-Bezeichner beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript case-sensitive ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Weitere Informationen finden Sie in der Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für erlaubte Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine blockbegrenzte lokale Variable zu deklarieren. (Siehe [Variablengeltungsbereich](#variablengeltungsbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu entpacken. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem Schlüssel desselben Namens aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher das Zuweisen von nicht deklarierten Variablen, was eine **[nicht erklärte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42`, wird der Teil `let x` als _Deklaration_ und der Teil `= 42` als _Initialisierer_ bezeichnet. Die Deklaration ermöglicht es, später im Code auf die Variable zuzugreifen, ohne einen {{jsxref("ReferenceError")}} zu werfen, während der Initialisierer der Variablen einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` äquivalent zu `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art von Zuweisung nach der Deklaration verbieten und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablengeltungsbereich

Eine Variable kann zu einem der folgenden [Geltungsbereiche](/de/docs/Glossary/Scope) gehören:

- Globaler Geltungsbereich: Der Standard-Geltungsbereich für alle im Skriptmodus laufenden Code.
- Modul-Geltungsbereich: Der Geltungsbereich für Code, der im Modulmodus ausgeführt wird.
- Funktionsgeltungsbereich: Der Geltungsbereich, der mit einer [Funktion](/de/docs/Glossary/function) erstellt wird.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden, zu einem zusätzlichen Geltungsbereich gehören:

- Block-Geltungsbereich: Der Geltungsbereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, weil sie für jeden anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, weil sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf die [Blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in der sie deklariert sind.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Allerdings sind Variablen, die mit `var` erstellt wurden, nicht auf Blockebene beschränkt, sondern nur lokal zum _Funktion (oder globaler Geltungsbereich)_, in dem sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, weil der Geltungsbereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Geltungsbereich von `x` ist nicht auf den direkten Block der `if`-Anweisung beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variable Hoisting

Mit `var` deklarierte Variablen werden [gehoistet](/de/docs/Glossary/Hoisting), was bedeutet, dass Sie auf die Variable überall in ihrem Geltungsbereich verweisen können, auch wenn ihre Deklaration noch nicht erreicht wurde. Sie können sich `var`-Deklarationen als "an die Spitze ihres Funktions- oder globalen Geltungsbereichs angehoben" vorstellen. Allerdings ist der Wert immer `undefined`, wenn Sie auf eine Variable zugreifen, bevor sie deklariert wird, da nur ihre _Deklaration_ und _Default-Initialisierung (mit `undefined`)_ gehoistet werden, aber nicht ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden so interpretiert:

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

Aufgrund des Hoisting sollten alle `var`-Anweisungen in einer Funktion möglichst nah an den Anfang der Funktion platziert werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoistet werden, ist eine Frage der Definition. Der Bezug zur Variablen im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, weil die Variable in einer "[temporalen Todzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Deklarationsverarbeitung liegt.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration aber nicht den Wert hoisten, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoistet — Sie können die Funktion sicher überall in ihrem Geltungsbereich aufrufen. Weitere Informationen finden Sie im [Glossar-Eintrag zum Hoisting](/de/docs/Glossary/Hoisting).

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der `window.variable`-Syntax lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies dient dazu, eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeitumgebungen bereitzustellen.

Folglich können Sie auf globale Variablen zugreifen, die in einem Fenster oder Frame deklariert sind, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie diese Variable von einem `iframe` aus als `parent.phoneNumber` referenzieren.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstanten-Bezeichners ist die gleiche wie bei jedem Variablen-Bezeichner: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während des Skriptlaufes durch Zuweisung weder geändert noch erneut deklariert werden. Sie muss bei der Deklaration initialisiert werden. Die Geltungsbereichsregeln für Konstanten sind die gleichen wie für blockübergreifende `let`-Variablen.

Sie können keine Konstante mit dem gleichen Namen wie eine Funktion oder Variable im gleichen Geltungsbereich deklarieren. Zum Beispiel:

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

`const` verhindert jedoch nur _Neuzuweisungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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
  2. [null](/de/docs/Glossary/null). Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript case-sensitive ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder irgendeine andere Variante.)
  3. [undefined](/de/docs/Glossary/undefined). Eine globale Eigenschaft, deren Wert nicht definiert ist.
  4. [Number](/de/docs/Glossary/Number). Eine ganze Zahl oder Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. [BigInt](/de/docs/Glossary/BigInt). Eine ganze Zahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. [String](/de/docs/Glossary/String). Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und [Object](/de/docs/Glossary/Object)

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch eine Art von Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentypumwandlung

JavaScript ist eine _dynamisch typisierte_ Sprache. Dies bedeutet, Sie müssen nicht den Datentyp einer Variablen angeben, wenn Sie sie deklarieren. Dies bedeutet auch, dass Datentypen während der Skriptausführung bei Bedarf automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie der gleichen Variablen einen Zeichenfolgenwert zuweisen, wie zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, führt diese Zuordnung nicht zu einer Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und Zeichenfolgenwerte mit dem `+` Operator beinhalten, wandelt JavaScript numerische Werte in Zeichenfolgen um. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren _konvertiert_ JavaScript numerische Werte _nicht_ in Zeichenfolgen. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertierung von Zeichenfolgen zu Zahlen

Falls ein Wert, der eine Zahl darstellt, im Speicher als Zeichenfolge vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, sodass seine Verwendung bei Dezimalzahlen eingeschränkt ist.

> [!NOTE]
> Eine bewährte Vorgehensweise für `parseInt` ist, immer den _radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um das zu verwendende Zahlensystem anzugeben.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einer Zeichenfolge zu erhalten, ist der `+` (unäre Plus) Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte—keine Variablen—die Sie buchstäblich in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Zahlenliterale](#zahlenliterale)
- [Objektliterale](#objektliterale)
- [RegExp-Literale](#regexp-literale)
- [Zeichenfolgenliterale](#zeichenfolgenliterale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, und ist in eckige Klammern (`[]`) eingeschlossen. Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seinen Elementen initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Zum Beispiel wird ein Array, das mit einem Literal im globalen Geltungsbereich definiert ist, einmal beim Laden des Skripts erstellt. Wenn das Array-Literal jedoch innerhalb einer Funktion ist, wird jedes Mal ein neues Array instanziiert, wenn diese Funktion aufgerufen wird.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie in einem Array-Literal zwei Kommas hintereinander setzen, lässt das Array an der Stelle des nicht angegebenen Elements einen leeren Slot. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, werden Sie sehen:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der eigentliche `undefined`-Wert. Bei der Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Slots übersprungen. Dennoch wird beim Index-Zugriff `fish[1]` weiterhin `undefined` zurückgegeben.

Wenn Sie ein abschließendes Komma am Ende der Liste der Elemente einfügen, wird das Komma ignoriert.

Im folgenden Beispiel ist die `length` des Arrays drei. Es gibt kein `myList[3]`. Alle anderen Kommas in der Liste geben ein neues Element an.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Hinweis:** [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen dabei, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Hinzufügen eines Elements ans Ende nur eine Zeile ergänzt, aber nicht die vorherige Zeile ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis für das Verhalten von zusätzlichen Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf deren Abwesenheit hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den true und false Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Weitere Informationen finden Sie in {{jsxref("Boolean")}}.

### Zahlenliterale

JavaScript-Zahlenliterale umfassen ganze Zahlenliterale in verschiedenen Basen sowie Gleitkommaliterale in der Basis-10.

Beachten Sie, dass die Sprachspezifikation erfordert, dass Zahlenliterale nicht signiert sind. Nichtsdestotrotz sind Code-Fragmente wie `-123.4` in Ordnung, da sie als unäres `-` Operator auf das Zahlenliteral `123.4` interpretiert werden.

#### Ganzzahlenliterale

Ganzzahlen- und {{jsxref("BigInt")}}-Literale können in Dezimal (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _dezimaler_ Ganzzahlliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahlliteral oder eine führende `0o` (oder `0O`) zeigt an, dass es sich um einen _oktal_ Zahl handelt. Oktale Ganzzahlenliterale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- und Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlliteral an. Binäre Ganzzahlenliterale können nur die Ziffern `0` und `1` enthalten.
- Ein anhängendes `n` bei einem Ganzzahlliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass eine oktale Syntax mit führenden Nullen wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahlenliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für mehr Informationen siehe [Zahlenliterale in der lexikalischen Grammatik-Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommaliterale

Ein Gleitkommaliteral kann die folgenden Teile haben:

- Eine führende Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einem ganzzahligen Wert, der signiert sein kann (mit `+` oder `-` vorangestellt). Ein Gleitkommaliteral muss mindestens eine Ziffer, und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kurz gesagt, die Syntax ist:

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

### Objektliterale

Ein Objektliteral ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da `{` als der Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objektliteral. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenfolge, `"Saturn"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort dem Ergebnis der Ausführung der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Außerdem können Sie eine numerische oder Zeichenfolgendarstellung für den Namen einer Eigenschaft verwenden oder ein Objekt in einem anderen verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können jede Zeichenfolge sein, einschließlich der leeren Zeichenfolge. Wenn der Eigenschaftsname kein gültiger JavaScript-[Bezeichner](/de/docs/Glossary/Identifier) oder keine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`) -Eigenschaften aufgerufen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernnotation (`[]`) aufgerufen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objektliterale

Objektliterale unterstützen eine Reihe von Kurznotationen, die das Prototyp-Setzen bei Konstruktion, Kurznotation für `foo: foo`-Zuweisungen, Methodendefinitionen, `super`-Aufrufe und die Berechnung von Eigenschaftsnamen mit Ausdrücken einschließen.

Zusammen bringen sie auch Objektliterale und Klassen-Deklarationen näher zusammen und ermöglichen, dass objektbasiertes Design von einigen der gleichen Annehmlichkeiten profitiert.

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

Ein Regex-Literal ist ein Muster, das in Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### Zeichenfolgenliterale

Ein Zeichenfolgenliteral ist null oder mehr Zeichen, eingeschlossen in Doppel- (`"`) oder einfachen (`'`) Anführungszeichen. Eine Zeichenfolge muss durch Anführungszeichen desselben Typs begrenzt werden (d. h. entweder beide einfachen Anführungszeichen, oder beide doppelten Anführungszeichen).

Die folgenden sind Beispiele für Zeichenfolgenliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Zeichenfolgenliterale verwenden, es sei denn, Sie müssen explizit ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können eine beliebige Methode des {{jsxref("String")}}-Objekts auf einen Zeichenfolgenliteralwert aufrufen. JavaScript konvertiert das Zeichenfolgenliteral automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem Zeichenfolgenliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden durch das Akzentzeichen (`` ` ``) ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) statt durch doppelte oder einfache Anführungszeichen eingeschlossen.

Template-Literale bieten syntaktischen Zucker zur Konstruktion von Zeichenfolgen. (Dies ist ähnlich den Zeichenfolgeninterpolationsfunktionen in Perl, Python und mehr.)

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

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf einer "Tag"-Funktion zur Analyse anzugeben. Ein Tagged Template ist einfach eine kürzere und semantische Möglichkeit, eine Funktion aufzurufen, die eine Zeichenfolge und eine Reihe von relevanten Werten verarbeitet. Der Name der Template-Tag-Funktion steht dem Template-Literal voran — wie im folgenden Beispiel, wo die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion wird die Argumente interpolieren und alle Objekte oder Arrays, die auftreten könnten, serialisieren, um das lästige `[object Object]` zu vermeiden.

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

Da Tagged Template Literale nur Zucker für Funktionsaufrufe sind, können Sie das Obige als äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies erinnert vielleicht an die `console.log`-Art der Interpolation:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie sich das Tagged Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwendung von Sonderzeichen in Zeichenfolgen

Zusätzlich zu herkömmlichen Zeichen können Sie auch Sonderzeichen in Zeichenfolgen einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen, die Sie in JavaScript-Zeichenfolgen verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                               |
| `\b`        | Rückschritt                                                                                                                                                                                                                                             |
| `\f`        | Formularvorschub                                                                                                                                                                                                                                        |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                              |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                           |
| `\t`        | Tabulator                                                                                                                                                                                                                                               |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                    |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                              |
| `\"`        | Doppelte Anführungszeichen                                                                                                                                                                                                                              |
| `\\`        | Rückwärtsschrägstrich (Backslash)-Zeichen                                                                                                                                                                                                                |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch bis zu drei Oktalzahlen `XXX` zwischen `0` und `377`. Zum Beispiel ist `\251` die Oktalsequenz für das Copyright-Symbol.                                                                         |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch die zwei Hexadezimalzahlen `XX` zwischen `00` und `FF`. Zum Beispiel ist `\xA9` die Hexadezimalsequenz für das Copyright-Symbol.                                                                  |
| `\uXXXX`    | Das Unicode-Zeichen, angegeben durch die vier Hexadezimalstellen `XXXX`. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` das gleiche wie die einfachen Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                   |

#### Zeichen maskieren

Für Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein vorangestellter Rückwärtsschrägstrich ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen in eine Zeichenfolge einfügen, indem Sie ihm einen Rückwärtsschrägstrich voranstellen. Dies wird als _Maskieren_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen wörtlichen Rückwärtsschrägstrich in eine Zeichenfolge einzufügen, müssen Sie das Rückwärtsschrägstrich-Zeichen maskieren. Um zum Beispiel den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche maskieren, indem Sie ihnen einen Rückwärtsschrägstrich voranstellen. Der Rückwärtsschrägstrich und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, siehe auch die folgenden Kapitel in diesem Leitfaden:

- [Leitfaden zur Steuerfluss- und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden zu Ausdrücken und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

Im nächsten Kapitel werden wir uns mit Steuerflusskonstrukten und Fehlerbehandlung befassen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
