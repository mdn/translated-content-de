---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den größten Teil seiner Syntax von Java, C und C++, wurde jedoch auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungssensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (das 'früh' auf Deutsch bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, weil JavaScript groß- und kleinschreibungssensitiv ist.

In JavaScript werden Anweisungen als {{Glossary("Statement", "Statements")}} bezeichnet und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn diese alleinstehend in einer Zeile geschrieben wird. Wenn jedoch mehr als eine Anweisung in einer Zeile erwünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es gilt jedoch als bewährte Methode, immer ein Semikolon nach einer Anweisung zu setzen, selbst wenn es nicht strikt notwendig ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass sich Bugs in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenabschlüsse_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Zeilenumbruchzeichen werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht verschachteln. Dies tritt oft auf, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar einfügen, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen. Zum Beispiel durch Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die ungefähr so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentar**-Syntax bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine blockbezogene, lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockbezogene, unveränderbare benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen der Variablen, sogenannte {{Glossary("Identifier", "Bezeichner")}}, unterliegen bestimmten Regeln.

Ein JavaScript-Bezeichner beginnt normalerweise mit einem Buchstaben, einem Unterstrich (`_`) oder einem Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Für weitere Details siehe die Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für gültige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit den Schlüsselwörtern {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine blockbezogene lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem gleichnamigen Schlüssel aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte es früher, nicht deklarierte Variablen zuzuweisen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initialisierer_. Die Deklaration ermöglicht den späteren Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} zu werfen, während der Initialisierer der Variablen einen Wert zuweist. Bei `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` äquivalent zu `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie nach der Deklaration jede Art von Zuweisung verbieten, und sie implizit mit `undefined` zu initialisieren, wäre wahrscheinlich ein Programmierfehler.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann einem der folgenden {{Glossary("Scope", "Bereiche")}} angehören:

- Globaler Bereich: Der Standardbereich für alle im Skriptmodus ausgeführten Codes.
- Modulisierungsbereich: Der Bereich für im Modus laufen Modul.
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wurde.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) definiert sind, einem zusätzlichen Bereich angehören:

- Blockbereich: Der Bereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wurde.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie für jeden anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf den [Blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) begrenzt werden, in dem sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Allerdings sind mit `var` erstellte Variablen nicht blockbezogen, sondern nur lokal zu der _Funktion (oder dem globalen Bereich)_, in der sich der Block befindet.

Beispielsweise wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablenverziehung

Mit `var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoben")}}, was bedeutet, dass Sie auf die Variable an jeder Stelle in ihrem Bereich verweisen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Sie können `var`-Deklarationen als "angehoben" an den Anfang ihres Funktions- oder globalen Bereichs betrachten. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, weil nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoben wird, nicht aber ihre _Wertzuteilung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden so interpretiert, als ob sie wie folgt wären:

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

Aufgrund der Hebung sollten alle `var`-Anweisungen in einer Funktion möglichst nahe am Anfang der Funktion platziert werden. Diese bewährte Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist umstritten. Das Verweisen auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable von Anfang des Blocks bis zur Verarbeitung der Deklaration in einer "[zeitlichen Toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Anders als `var`-Deklarationen, die nur die Deklaration heben, aber nicht ihren Wert, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben — Sie können die Funktion sicher überall in ihrem Bereich aufrufen. Siehe den {{Glossary("Hoisting", "Hebung")}} Glossareintrag für eine weitere Diskussion.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

Auf Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bieten.

Daher können Sie von einem Fenster oder Rahmen aus auf globale Variablen zugreifen, die in einem anderen Fenster oder Rahmen deklariert wurden, indem Sie den `window`- oder `frame`-Namen angeben. Wenn beispielsweise eine Variable namens `phoneNumber` in einem Dokument deklariert wird, können Sie von einem `iframe` aus auf diese Variable als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine unveränderliche, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstantenbezeichners ist dieselbe wie jeder andere Variablenbezeichner: Er muss mit einem Buchstaben, einem Unterstrich oder einem Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrichzeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während der Skriptausführung weder durch Zuweisung geändert noch erneut deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Geltungsbereichsregeln für Konstanten sind dieselben wie für `let`-blockbezogene Variablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im selben Geltungsbereich deklarieren. Zum Beispiel:

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

Allerdings verhindert `const` nur _Neuzuweisungen_, jedoch nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

- Sieben Datentypen, die {{Glossary("Primitive", "Primitive")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort zur Bezeichnung eines Nullwerts. (Da JavaScript groß- und kleinschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine übergeordnete Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Präzision. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie Ihnen nützliche Operationen mit Ihren Anwendungen auszuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch eine Art von Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen, und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentyp-Konvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie bei der Deklaration einer Variablen den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen bei Bedarf während der Skriptausführung automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und string-Werte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Strings. Zum Beispiel betrachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript numerische Werte _nicht_ in Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Strings in Zahlen konvertieren

Falls ein Wert, der eine Zahl darstellt, als String im Speicher liegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung bei Dezimalzahlen weniger geeignet.

> [!NOTE]
> Eine bewährte Methode bei `parseInt` ist es, immer den _Radix_-Parameter anzugeben. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist der `+` (unäre Plus) Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ stellen Werte in JavaScript dar. Diese sind feste Werte—nicht Variablen—die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objektliterale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seinen Elementen initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees` Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Wenn beispielsweise ein Array mit einem Literal im globalen Bereich definiert wird, wird es einmal erstellt, wenn das Skript geladen wird. Ist jedoch das Array-Literal innerhalb einer Funktion, wird bei jedem Aufruf dieser Funktion ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erzeugen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie in einem Array-Literal zwei Kommas hintereinander setzen, bleibt im Array ein leerer Platz für das unbestimmte Element. Das folgende Beispiel erstellt das `fish` Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht dasselbe wie der tatsächliche Wert `undefined` ist. Bei der Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Stellen übersprungen. Jedoch gibt das Zugreifen auf den Index `fish[1]` weiterhin `undefined` zurück.

Wenn Sie ein abschließendes Komma am Ende der Elementliste hinzufügen, wird das Komma ignoriert.

Im folgenden Beispiel ist die `length` des Arrays drei. Es gibt kein `myList[3]`. Alle anderen Kommas in der Liste kennzeichnen ein neues Element.

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

> **Anmerkung:** [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen dabei, die git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Hinzufügen eines Elements zum Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie Ihren eigenen Code schreiben, sollten Sie jedoch die fehlenden Elemente ausdrücklich als `undefined` deklarieren oder zumindest einen Kommentar hinzufügen, um auf dessen Fehlen hinzuweisen. Dadurch wird die Klarheit und Wartbarkeit Ihres Codes erhöht.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript-Zahlenliterale umfassen Ganzzahlliterale in verschiedenen Basen sowie Gleitkommaliterale in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale ohne Vorzeichen sind. Trotzdem sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator interpretiert werden, der auf das numerische Literal `123.4` angewendet wird.

#### Ganzzahlliterale

Ganzzahlliterale und {{jsxref("BigInt")}}-Literale können in dezimal (Basis 10), hexadezimal (Basis 16), oktal (Basis 8) und binär (Basis 2) geschrieben werden.

- Ein _dezimaler_ Ganzzahlliteral ist eine Ziffernfolge ohne führende `0` (Null).
- Eine führende `0` (Null) in einem Ganzzahlliteral oder ein führendes `0o` (oder `0O`) zeigt an, dass es sich um _oktal_ handelt. Oktale Ganzzahlliterale können nur die Ziffern `0` – `7` enthalten.
- Ein führendes `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Ein führendes `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlliteral an. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix bei einem Ganzzahlliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die Oktalkurzform mit führender Null wie `0123n` nicht erlaubt ist, aber `0o123n` in Ordnung ist.

Einige Beispiele für Ganzzahlliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale im Referenzhandbuch zur lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommaliterale

Ein Gleitkommaliteral kann die folgenden Teile haben:

- Eine unsignierte dezimale Ganzzahl,
- ein Dezimaltrennzeichen (`.`),
- ein Bruchteil (eine weitere Dezimalzahl),
- ein Exponent.

Der Exponententeil ist ein `e` oder `E` gefolgt von einer Ganzzahl, die positiv oder negativ sein kann (eingeleitet durch `+` oder `-`). Ein Gleitkommaliteral muss mindestens eine Ziffer haben und entweder ein Dezimaltrennzeichen oder `e` (oder `E`).

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

Ein Objektliteral ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugeordneten Werten eines Objekts, eingeschlossen in geschwungenen Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Beginn einer Anweisung! Dies wird zu einem Fehler führen (oder nicht wie erwartet verhalten), da `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objektliteral. Das erste Element des Objekts `car` definiert eine Eigenschaft `myCar` und weist ihr eine neue Zeichenkette `"Saturn"` zu; das zweite Element, die Eigenschaft `getCar`, wird sofort mit dem Ergebnis des Aufrufs der Funktion `(carTypes("Honda"))` initialisiert; das dritte Element, die Eigenschaft `special`, verwendet eine vorhandene Variable (`sales`).

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

Darüber hinaus können Sie einen numerischen oder Zeichenfolgenliteral für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können jede Zeichenkette sein, einschließlich der leeren Zeichenkette. Wenn der Eigenschaftsname kein gültiger JavaScript {{Glossary("Identifier", "Bezeichner")}} oder keine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`)-Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernotation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Verbesserte Objektliterale

Objektliterale unterstützen eine Reihe von Kurzschriftsyntaxen, die das Setzen des Prototyps bei der Erstellung, eine Kurzfassung für `foo: foo`-Zuweisungen, das Definieren von Methoden, das Verwenden von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Zusammen nähern sich diese auch Objektliteralen und Klassendeklarationen näher an und ermöglichen es, dass objektbasiertes Design von einigen der gleichen Annehmlichkeiten profitiert.

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

Ein Regulärer Ausdruck-Literal (der [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) im Detail definiert ist) ist ein Muster, das von Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regulärer Ausdruck-Literal.

```js
const re = /ab+c/;
```

### String-Literale

Ein Stringliteral ist null oder mehr Zeichen in doppelten (`"`) oder einfachen (`'`) Anführungszeichen eingeschlossen. Ein String muss von Anführungszeichen desselben Typs begrenzt sein (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede der Methoden des {{jsxref("String")}}-Objekts auf einem Stringliteral-Wert aufrufen. JavaScript konvertiert das Stringliteral automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem Stringliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template Literals werden durch das Back-Tick (`` ` ``) ([Gravis](https://de.wikipedia.org/wiki/Akzent_gravis)) Zeichen umschlossen, statt durch doppelte oder einfache Anführungszeichen.

Template Literals bieten syntaktischen Zucker für die Konstruktion von Zeichenketten. (Dies ist ähnlich wie String-Interpolation-Funktionen in Perl, Python und mehr.)

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

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf einer "Tag"-Funktion zu spezifizieren, die es analysiert. Ein Tagged Template ist nur eine übersichtliche und semantische Art, eine Funktion zu invokieren, die eine Zeichenkette und einen Satz relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal — wie im folgenden Beispiel, bei dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftauchen könnten, und umgeht das lästige `[object Object]`.

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

Da Tagged Template Literale nur Zucker von Funktionsaufrufen sind, können Sie das oben genannte als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Das könnte an die `console.log`-Art der Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Man kann sehen, wie das Tagged Template natürlicher liest als eine herkömmliche "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Spezielle Zeichen in Zeichenketten verwenden

Zusätzlich zu normalen Zeichen können Sie auch spezielle Zeichen in Zeichenketten einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Zeichenketten verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                           |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                         |
| `\f`        | Seitenvorschub                                                                                                                                                                                                                                                      |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                          |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                       |
| `\t`        | Tabulator                                                                                                                                                                                                                                                           |
| `\v`        | Vertikaltabulator                                                                                                                                                                                                                                                   |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                          |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                         |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                                   |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben wird. Beispielsweise ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch zwei hexadezimale Ziffern `XX` zwischen `00` und `FF` angegeben wird. Beispielsweise ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                                 |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben wird. Beispielsweise ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepoint-Escapes. Beispielsweise ist `\u{2F804}` gleichbedeutend mit den Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                   |

#### Zeichen entziehen

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorausgehender Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb einer Zeichenkette durch einen vorausgehenden Backslash einfügen. Dies wird als _Escaping_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen literalen Backslash in einer Zeichenkette einzufügen, müssen Sie das Backslash-Zeichen entziehen. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenkette zuzuweisen, verwenden Sie das Folgende:

```js
const home = "c:\\temp";
```

Sie können Zeilenumbrüche auch durch ein vorausgehendes Backslash entziehen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenkette entfernt.

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
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werfen wir einen Blick auf Kontrollfluss-Konstrukte und Fehlerbehandlung.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
