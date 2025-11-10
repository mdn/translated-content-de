---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel bespricht die grundlegende Grammatik, Variablendeklarationen, Datentypen und Literale von JavaScript.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitive** (Groß- und Kleinschreibung wird unterschieden) und verwendet die **Unicode**-Zeichensatzkodierung. Zum Beispiel könnte das Wort "Früh" (was im Deutschen "früh" bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht gleich `Früh`, da JavaScript zwischen Groß- und Kleinschreibung unterscheidet.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn sie in einer eigenen Zeile geschrieben ist. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als bewährte Praxis angesehen, nach jeder Anweisung ein Semikolon zu schreiben, auch wenn es nicht strikt notwendig ist. Diese Praxis verringert die Wahrscheinlichkeit, dass sich Fehler in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen konvertiert, welche _Tokens_, _Steuerzeichen_, _Zeilenabschlüsse_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabulatoren und Zeilenumbrüche werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax für **Kommentare** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht verschachteln. Dies tritt häufig auf, wenn Sie versehentlich eine `*/`-Sequenz in Ihrem Kommentar einfügen, was den Kommentar beenden würde.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster aufbrechen. Zum Beispiel, indem Sie einen Backslash einfügen:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung ignoriert.

> [!NOTE]
> Sie könnten auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, der dazu verwendet wird, den Pfad zu einer bestimmten JavaScript-Engine anzugeben, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional mit einem Wert initialisiert wird.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine lokal, blockbasierte Variable, die optional mit einem Wert initialisiert wird.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockbasierte, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, auch {{Glossary("Identifier", "Bezeichner")}} genannt, folgen bestimmten Regeln.

Ein JavaScript-Bezeichner beginnt normalerweise mit einem Buchstaben, einem Unterstrich (`_`) oder einem Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript case-sensitive ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Für weitere Details siehe die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)-Referenz.) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für gültige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine lokal blockierte Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mithilfe der [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel, `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem gleichnamigen Schlüssel aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung zu nicht deklarierten Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initialisierer_. Die Deklaration ermöglicht den späteren Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variablen einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initialisierer optional. Wird eine Variable ohne Initialisierer deklariert, erhält sie den Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art von Zuweisung nach der Deklaration verbieten, und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für alle Codeausführungen im Skriptmodus.
- Modulbereich: Der Bereich für Codeausführungen im Modus "Modul".
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, einem zusätzlichen Bereich angehören:

- Blockbereich: Der Bereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie für jeden anderen Code im aktuellen Dokument verfügbar ist. Deklarieren Sie eine Variable innerhalb einer Funktion, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf den [Blocksatz](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) begrenzt sein, in dem sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Variablen, die mit `var` erstellt werden, sind jedoch nicht auf den Block beschränkt, sondern nur lokal zum _Funktions- (oder globalen Bereich)_, in dem sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Block beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen Hoisting

`var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoistet")}}, was bedeutet, dass Sie überall in ihrem Bereich auf die Variable verweisen können, selbst wenn ihre Deklaration noch nicht erreicht wurde. Sie können sich `var`-Deklarationen als "an die Spitze ihres Funktions- oder globalen Bereichs gehoben" vorstellen. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert ist, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoistet wird, nicht jedoch ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden genauso interpretiert wie:

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so nahe wie möglich an der Spitze der Funktion platziert werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoistet werden, ist eine Definitionsdebatte. Das Referenzieren der Variable im Block vor der Variablendeklaration resultiert immer in einem {{jsxref("ReferenceError")}}, da sich die Variable von Beginn des Blocks bis zur Verarbeitung der Deklaration in einer "[temporalen Todeszone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration aber nicht ihren Wert hoisten, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoistet — Sie können die Funktion sicher überall in ihrem Bereich aufrufen. Siehe den {{Glossary("Hoisting", "Hopsten")}} Glossareintrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind tatsächlich Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der `window.variable`-Syntax lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies dient dazu, eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bereitzustellen.

Folglich können Sie von einem Fenster oder Rahmen aus auf globale Variablen zugreifen, die in einem anderen Fenster oder Rahmen deklariert sind, indem Sie den Namen des `window`- oder `frame`-Fensters angeben. Wenn zum Beispiel eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie von einem `iframe` aus auf diese Variable als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Schlüsselwort erstellen. Die Syntax eines Konstanten-Bezeichners ist die gleiche wie bei jedem Variablen-Bezeichner: Er muss mit einem Buchstaben, einem Unterstrich oder einem Dollarzeichen (`$`) beginnen, und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während der Skriptausführung weder durch Zuweisung geändert noch neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Bereichsregeln für Konstanten sind die gleichen wie für `let`-blockbasierte Variablen.

Sie können keine Konstante mit dem gleichen Namen wie eine Funktion oder Variable im gleichen Bereich deklarieren. Zum Beispiel:

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

`const` verhindert jedoch nur _Zuweisungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen werden, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Auch der Inhalt eines Arrays wird nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Datenstrukturen und Typen

### Datentypen

Der neueste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen, die {{Glossary("Primitive", "Primitives")}} sind:
  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen null-Wert bezeichnet. (Da JavaScript case-sensitive ist, ist `null` nicht das gleiche wie `Null`, `NULL` oder irgendeine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine ganze Zahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Präzision. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Folge von Zeichen, die einen Textwert darstellen. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie Ihnen, nützliche Operationen mit Ihren Anwendungen auszuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch gesehen eine Art von Objekt sind, können Sie Objekte als benannte Container für Werte betrachten und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentypumwandlung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variable den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen nach Bedarf während der Skriptausführung automatisch umgewandelt werden.

Sie könnten beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variable einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken mit numerischen und String-Werten mit dem `+`-Operator wandelt JavaScript numerische Werte in Strings um. Zum Beispiel beachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren wandelt JavaScript numerische Werte _nicht_ in Strings um. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Strings in Zahlen umwandeln

Falls ein Wert, der eine Zahl darstellt, als String gespeichert ist, gibt es Methoden zur Umwandlung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung für Dezimalzahlen eingeschränkt.

> [!NOTE]
> Eine bewährte Praxis für `parseInt` besteht darin, immer den _Radix_ Parameter einzuschließen. Der Radix-Parameter wird verwendet, um das zu verwendende Zahlensystem zu spezifizieren.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist der `+` (unäres Plus)-Operator. Dieser führt implizit eine [Nummernumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, was derselbe Prozess ist wie die {{jsxref("Number()")}}-Funktion.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte — keine Variablen —, die Sie buchstäblich in Ihr Skript einfügen. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
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

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Beispielsweise wird ein Array, das mit einem Literal im globalen Bereich definiert ist, einmal erstellt, wenn das Skript geladen wird. Befindet sich das Array-Literal jedoch innerhalb einer Funktion, wird jedes Mal ein neues Array instanziiert, wenn diese Funktion aufgerufen wird.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommata in Array-Literalen

Wenn Sie zwei Kommata direkt hintereinander in einem Array-Literal verwenden, lässt das Array einen leeren Slot für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächliche `undefined`-Wert. Bei der Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Slots übersprungen. Der Zugriff mit Index `fish[1]` liefert jedoch weiterhin `undefined`.

Wenn Sie ein abschließendes Komma am Ende der Liste der Elemente hinzufügen, wird das Komma ignoriert.

Im folgenden Beispiel hat das Array `myList` eine `length` von drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommata in der Liste kennzeichnen ein neues Element.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel hat das Array `myList` eine `length` von vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel hat das Array `myList` eine `length` von vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> [!NOTE]
> [Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, weil das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommata ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente ausdrücklich als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf ihr Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei Literale: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den Wahr- und Falschwerten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Booleans-Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript numerische Literale umfassen Ganzzahlen in verschiedenen Basen sowie Fließkommaliterale in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale unsigniert sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator angewendet auf das numerische Literal `123.4` interpretiert werden.

#### Ganzzahlenliterale

Ganzzahlen- und {{jsxref("BigInt")}}-Literale können in dezimalem (Basis 10), hexadezimalem (Basis 16), oktalem (Basis 8) und binärem (Basis 2) Format geschrieben werden.

- Ein _dezimal_ Ganzzahlenliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahlenliteral oder ein führendes `0o` (oder `0O`) gibt an, dass es sich um ein _oktayl_ handelt. Oktale Ganzzahlenliterale können nur die Ziffern `0` – `7` enthalten.
- Ein führendes `0x` (oder `0X`) gibt ein _hexadezimales_ Ganzzahlenliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- und Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Ein führendes `0b` (oder `0B`) gibt ein _binäres_ Ganzzahlenliteral an. Binäre Ganzzahlenliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix bei einem Ganzzahlenliteral gibt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die führende Null-Oktal-Syntax wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahl-Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Weitere Informationen finden Sie unter [Numerische Literale in der Referenz zur lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Fließkommaliterale

Ein Fließkommaliteral kann die folgenden Teile haben:

- Eine unsignierte Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruchteil (eine andere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer ganzen Zahl, die mit Vorzeichen versehen sein kann (vorangestellt von `+` oder `-`). Ein Fließkommaliteral muss mindestens eine Ziffer haben und entweder einen Dezimalpunkt oder ein `e` (oder `E`).

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

### Objekt-Literale

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren aus Eigenschaftsnamen und assoziierten Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objekt-Literal am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht so, wie Sie es erwarten), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenfolge `"Saturn"` zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort zugewiesen, das Ergebnis der Ausführung der Funktion `(carTypes("Honda"))`; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Zusätzlich können Sie für den Namen einer Eigenschaft ein numerisches oder String-Literal verwenden oder ein Objekt in ein anderes einbetten. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Eigenschaftsnamen von Objekten können jede Zeichenkette sein, einschließlich der leeren Zeichenkette. Wenn der Eigenschaftsname kein gültiger JavaScript {{Glossary("Identifier", "Bezeichner")}} oder keine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Dot (`.`) Eigenschaft benutzt werden.

```js-nolint example-bad
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernnotation (`[]`) aufgerufen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt-Literale

Objekt-Literale unterstützen eine Reihe von vereinfachten Syntaxen, die das Setzen des Prototyps bei der Konstruktion, die Kurzform für `foo: foo` Zuweisungen, das Definitionen von Methoden, das Durchführen von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Insgesamt bringen diese Vereinfachungen Objekt-Literale und Klassendeklarationen näher zusammen und ermöglichen es, dass objektbasierte Designs von denselben Annehmlichkeiten profitieren können.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return `d ${super.toString()}`;
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp-Literale

Ein RegExp-Literal (das später [im Detail](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein RegExp-Literal.

```js
const re = /ab+c/;
```

### String-Literale

Ein String-Literal ist null oder mehr Zeichen, eingeschlossen in doppelte (`"`) oder einfache (`'`) Anführungszeichen. Ein String muss von Anführungszeichen desselben Typs begrenzt werden (d.h. entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen spezifisch ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede Methode des {{jsxref("String")}}-Objekts auf einem String-Literal verwenden. JavaScript wandelt das String-Literal automatisch in ein temporäres String-Objekt um, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden mit dem Rückwärtigen Akzent (`` ` ``) ([Gravis](https://en.wikipedia.org/wiki/Grave_accent))-Zeichen anstelle von doppelten oder einfachen Anführungszeichen eingeklammert.

Template-Literale bieten syntaktischen Zucker zum Erstellen von Zeichenketten. (Dies ist vergleichbar mit String-Interpolation-Features in Perl, Python und mehr.)

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

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zum Spezifizieren eines Template-Literales zusammen mit einem Aufruf an eine "Tag"-Funktion zu dessen Parsen. Ein getagtes Template ist nur eine präzisere und semantische Methode, um eine Funktion zu nennen, die eine Zeichenkette und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion geht dem Template-Literal voran — wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` heißt. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftreten könnten, und vermeidet das lästige `[object Object]`.

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

Da getaggte Template-Literale nur syntaktisches Zucker für Funktionsaufrufe sind, können Sie das obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies könnte an die `console.log`-Art der Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Spezielle Zeichen in Strings verwenden

Neben normalen Zeichen können Sie auch spezielle Zeichen in Strings einbinden, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Zeichenfolgen verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                         |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                      |
| `\f`        | Form Feed                                                                                                                                                                                                                                                        |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                       |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                    |
| `\t`        | Tabulator                                                                                                                                                                                                                                                        |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                             |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                       |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                      |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                                |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben ist. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben ist. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben ist. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                         |

#### Zeichen maskieren

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorangestellter Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb einer Zeichenfolge einfügen, indem Sie ihm einen Backslash voranstellen. Dies wird als _Maskierung_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen doppelten Backslash innerhalb einer Zeichenfolge zu enthalten, müssen Sie das Backslash-Zeichen maskieren. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche maskieren, indem Sie ihnen einen Backslash voranstellen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, lesen Sie auch die folgenden Kapitel in diesem Leitfaden:

- [Leitfaden für Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

Im nächsten Kapitel werden wir uns die Konstruktionen zum Steuerfluss und zur Fehlerbehandlung ansehen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
