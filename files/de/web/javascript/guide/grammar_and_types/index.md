---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

In diesem Kapitel werden die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale behandelt.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitive** (beachtet Groß- und Kleinschreibung) und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (was "früh" auf Deutsch bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber, die Variable `früh` ist nicht identisch mit `Früh`, da JavaScript zwischen Groß- und Kleinschreibung unterscheidet.

In JavaScript werden Anweisungen als {{Glossary("Statement", "statements")}} bezeichnet und durch Semikolons (;) getrennt.

Ein Semikolon ist nicht notwendig, wenn eine Anweisung in einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Semikolon-Einfügung ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als Best Practice angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht unbedingt erforderlich ist. Diese Praxis verringert die Wahrscheinlichkeit, dass sich Fehler in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenabschlüsse_, _Kommentare_ oder {{Glossary("whitespace", "Whitespaces")}} sein können. (Leerzeichen, Tabulatoren und Zeilenumbruchzeichen werden als Whitespace betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist die gleiche wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Block-Kommentare können nicht geschachtelt werden. Dies passiert häufig, wenn Sie versehentlich eine `*/`-Sequenz in Ihrem Kommentar einfügen, die den Kommentar schließt.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das Muster `*/` aufspalten. Zum Beispiel, indem Sie einen Backslash einfügen:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Whitespaces und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten am Anfang einiger JavaScript-Dateien eine dritte Art von Kommentarsyntax sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-scope, lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-scope, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, {{Glossary("Identifier", "Bezeichner")}} genannt, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifikator beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript case-sensitive ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Für weitere Details siehe die Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)). Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für gültige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine lokale Variable mit Block-Bereich zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu entpacken. Zum Beispiel, `const { bar } = foo`. Dies erstellt eine Variable mit dem Namen `bar` und weist ihr den Wert zu, der dem gleichnamigen Schlüssel aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie benutzt werden. JavaScript erlaubte früher das Zuweisen zu nicht deklarierten Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte völlig vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42`, wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initializer_. Die Deklaration ermöglicht den Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initializer der Variable einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initializer optional. Wenn eine Variable ohne Initializer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` äquivalent zu `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jegliche Art von Zuweisung nach der Deklaration verbieten, und die implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für alle im Skriptmodus laufenden Codes.
- Modulbereich: Der Bereich für im Modulmodus laufenden Code.
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, einem zusätzlichen Bereich angehören:

- Blockbereich: Der Bereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf die [blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt werden, in der sie deklariert sind.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Jedoch sind mit `var` erstellte Variablen nicht blockbereichsbeschränkt, sondern nur lokal zu der _Funktion (oder dem globalen Bereich)_, in der sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext ist (oder der Funktionskontext, wenn der Code Teil einer Funktion ist). Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var` deklarierte Variablen werden {{Glossary("Hoisting", "gehoistet")}}, das bedeutet, Sie können die Variable überall in ihrem Bereich referenzieren, auch wenn ihre Deklaration noch nicht erreicht ist. Sie können `var`-Deklarationen als nach oben "angehoben" in ihrem Funktions- oder globalen Bereich verstehen. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert ist, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoisted wird, nicht jedoch ihre _Wertzuweisung_.

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

Aufgrund des Hoisting sollten alle `var`-Anweisungen in einer Funktion so nah wie möglich an den Beginn der Funktion platziert werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoisted sind, ist eine Frage der Definition. Das Referenzieren der Variablen im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da die Variable in einer "[temporalen Todeszone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" vom Beginn des Blocks bis zur Verarbeitung der Deklaration ist.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Anders als `var`-Deklarationen, die nur die Deklaration und nicht ihren Wert hoisten, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoisted — Sie können die Funktion sicher überall in ihrem Bereich aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}} Glossarbeitrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind tatsächlich Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), daher können Sie auf globale Variablen mit der Syntax `window.variable` lesen und zugreifen. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und festzulegen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bereitstellen.

Folglich können Sie auf globale Variablen, die in einem Fenster oder Rahmen deklariert wurden, aus einem anderen Fenster oder Rahmen zugreifen, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel, wenn eine Variable mit dem Namen `phoneNumber` in einem Dokument deklariert ist, können Sie von einem `iframe` aus auf diese Variable als `parent.phoneNumber` referenzieren.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstantenbezeichners ist die gleiche wie bei jedem Variablenbezeichner: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert nicht durch Zuweisung ändern oder während der Skriptausführung neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Regelungen für Konstantenbereiche sind die gleichen wie für `let` block-bereichsbasierte Variablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im gleichen Bereich deklarieren. Zum Beispiel:

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

- Sieben Datentypen, die {{Glossary("Primitive", "primitive")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert angibt. (Da JavaScript case-sensitive ist, ist `null` nicht identisch mit `Null`, `NULL` oder einer anderen Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind das andere grundlegende Element der Sprache. Während Funktionen technisch eine Art von Objekt sind, können Sie Objekte als benannte Container für Werte betrachten und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentypkonvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie den Datentyp einer Variablen bei deren Deklaration nicht angeben müssen. Es bedeutet auch, dass Datentypen bei Bedarf während der Skriptausführung automatisch konvertiert werden.

So könnten Sie zum Beispiel eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und string-Werte mit dem `+` Operator enthalten, konvertiert JavaScript numerische Werte zu Strings. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte zu Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Strings in Zahlen konvertieren

Falls ein Wert, der eine Zahl darstellt, im Speicher als String vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` liefert nur ganze Zahlen, daher ist seine Verwendung für Dezimalwerte eingeschränkt.

> [!NOTE]
> Eine weitere Best Practice für `parseInt` ist, immer den _Radix_-Parameter anzugeben. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, eine Zahl aus einem String abzurufen, ist der `+` (unäres Plus) Operator. Dieser führt implizit eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, welche derselbe Prozess wie die {{jsxref("Number()")}} Funktion ist.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte — keine Variablen — die Sie _buchstäblich_ in Ihrem Skript bereitstellen. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckigen Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als dessen Elemente initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees` Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Zum Beispiel wird ein Array, das mit einem Literal im globalen Bereich definiert ist, einmal erstellt, wenn das Skript geladen wird. Wenn das Array-Literal jedoch innerhalb einer Funktion ist, wird jedes Mal ein neues Array instanziiert, wenn diese Funktion aufgerufen wird.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommata in Array-Literalen

Wenn Sie zwei Komma in einer Reihe in einem Array-Literal setzen, lässt das Array einen leeren Slot für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish` Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau das gleiche ist wie der tatsächliche `undefined` Wert. Wenn Sie Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, werden leere Slots übersprungen. Jedoch, Index-Zugriff `fish[1]` gibt immer noch `undefined` zurück.

Wenn Sie ein nachgestelltes Komma am Ende der Liste von Elementen einschließen, wird das Komma ignoriert.

Im folgenden Beispiel ist die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommata in der Liste zeigen ein neues Element an.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Hinweis:** [Nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) tragen dazu bei, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Hinzufügen eines Elements am Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens von zusätzlichen Kommata ist wichtig für das Verständnis von JavaScript als Sprache.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf ihr Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den True- und False-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript numerische Literale umfassen Ganzzahl-Literale in verschiedenen Basen sowie Gleitkomma-Literale in Basis 10.

Beachten Sie, dass die Sprachspezifikation erfordert, dass Numerikale kein Vorzeichen haben. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-` Operator interpretiert werden, der auf das numerische Literal `123.4` angewendet wird.

#### Ganze Zahlen

Integer und {{jsxref("BigInt")}}-Literale können in dezimal (Basis 10), hexadezimal (Basis 16), oktal (Basis 8) und binär (Basis 2) geschrieben werden.

- Ein _dezimaler_ Ganzzahl-Literal ist eine Sequenz von Ziffern ohne vorangestellte `0` (Null).
- Eine führende `0` (Null) auf einem Ganzzahl-Literal oder eine führende `0o` (oder `0O`) zeigt an, dass es sich bei dem Literal um einen _oktal_-Wert handelt. Oktal-Ganzzahl-Literale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahl-Literal an. Hexadezimale Zahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahl-Literal an. Binäre Ganzzahl-Literale können nur die Ziffern `0` und `1` enthalten.
- Ein nachfolgendes `n` Suffix an einem Ganzzahl-Literal zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann eine der oben genannten Basen verwenden. Beachten Sie, dass die Oktal-Syntax mit führender Null wie `0123n` nicht erlaubt ist, aber `0o123n` in Ordnung ist.

Einige Beispiele für Ganze Zahlen sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der lexikalischen Grammatik-Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkomma-Literale

Ein Gleitkomma-Literal kann die folgenden Teile haben:

- Eine unvorzeichenbehaftete Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die ein Vorzeichen haben kann (vorangestellt durch `+` oder `-`). Ein Gleitkomma-Literal muss mindestens eine Ziffer enthalten und entweder einen Dezimalpunkt oder `e` (oder `E`).

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

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objekt-Literal am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da `{` als Beginn eines Blocks interpretiert wird.

Das Folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car` Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String zu, `"Saturn"`; das zweite Element, die `getCar` Eigenschaft, wird sofort das Ergebnis der Ausführung der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special` Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Zusätzlich können Sie ein numerisches oder string Literal für den Namen einer Eigenschaft verwenden oder ein Objekt in einem anderen verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Strings sein, einschließlich des leeren Strings. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Bezeichner")}} oder keine Zahl wäre, muss er in Anführungszeichen gesetzt werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`)-Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernotation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt-Literale

Objekt-Literale unterstützen eine Reihe von Kürzelsyntaxen, die das Festlegen des Prototyps bei der Erstellung, Kürzel für `foo: foo` Zuweisungen, das Definieren von Methoden, das Durchführen von `super` Calls und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Zusammen bringen diese Kürzel auch Objekt-Literale und Klassendeklarationen näher zusammen und ermöglichen es einem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

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

Ein Regex-Literal (das später [detailliert](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### String-Literale

Ein String-Literal ist null oder mehr Zeichen, eingeschlossen in doppelten (`"`) oder einfachen (`'`) Anführungszeichen. Ein String muss durch gleiche Anführungszeichen begrenzt sein (d.h. entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen spezifisch ein `String`-Objekt verwenden. Für Details zu `String`-Objekten siehe {{jsxref("String")}}.

Sie können jede der {{jsxref("String")}}-Objektmethoden auf einem String-Literalwert aufrufen. JavaScript konvertiert das String-Literal automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden vom umgekehrten Akzentzeichen (`` ` ``) (dem [Gravis](https://en.wikipedia.org/wiki/Grave_accent)) Zeichen statt von doppelten oder einfachen Anführungszeichen umgeben.

Template-Literale bieten syntaktischen Zucker zum Erstellen von Strings. (Dies ist ähnlich wie String-Interpolation-Funktionen in Perl, Python und mehr.)

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

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf einer "Tag"-Funktion zum Parsen festzulegen. Ein getaggtes Template ist einfach eine präzisere und semantischere Art, eine Funktion aufzurufen, die einen String und eine Reihe relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion geht dem Template-Literal voraus — wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftreten können, und vermeidet das lästige `[object Object]`.

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

Da getaggte Template-Literale lediglich syntaktischer Zucker für Funktionsaufrufe sind, können Sie das obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies mag an die `console.log`-Style-Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher gelesen wird als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwendung von Sonderzeichen in Strings

Zusätzlich zu normalen Zeichen können Sie auch Sonderzeichen in Strings einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                |
| `\b`        | Backspace                                                                                                                                                                                                                                                |
| `\f`        | Formularvorschub                                                                                                                                                                                                                                         |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                               |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                            |
| `\t`        | Tabulator                                                                                                                                                                                                                                                |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                     |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                               |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                              |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                        |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377`. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF`. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, angegeben durch die vier hexadezimalen Ziffern `XXXX`. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` identisch mit den Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                |

#### Zeichen Escapen

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorangehender Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings einfügen, indem Sie ihm einen Backslash voranstellen. Dies wird als _Escapen_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen wörtlichen Backslash innerhalb eines Strings einzuschließen, müssen Sie das Backslash-Zeichen escapen. Zum Beispiel, um den Dateipfad `c:\temp` einem String zuzuweisen, verwenden Sie Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche escapen, indem Sie ihnen einen Backslash voranstellen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert des Strings entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, sehen Sie sich auch die folgenden Kapitel in diesem Leitfaden an:

- [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns Steuerflusskonstrukte und die Fehlerbehandlung ansehen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
