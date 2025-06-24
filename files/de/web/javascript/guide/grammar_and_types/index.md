---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt JavaScript's grundlegende Grammatik, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde jedoch auch von Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitive** (beachtet Groß- und Kleinschreibung) und verwendet den **Unicode**- Zeichensatz. Zum Beispiel kann das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Die Variable `früh` ist jedoch nicht dasselbe wie `Früh`, da JavaScript zwischen Groß- und Kleinschreibung unterscheidet.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn es auf einer eigenen Zeile steht. Sollten jedoch mehrere Anweisungen in einer Zeile erwünscht sein, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als beste Praxis angesehen, nach einer Anweisung immer ein Semikolon zu schreiben, auch wenn es nicht unbedingt erforderlich ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass Fehler in den Code gelangen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts analysiert und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenabschluss_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Zeilenumbrüche werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax für **Kommentare** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht verschachteln. Dies geschieht häufig, wenn versehentlich eine `*/`-Sequenz in Ihren Kommentar eingefügt wird, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen, zum Beispiel durch Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Ausführung des Skripts verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies nennt man **Hashbang-Kommentar**-Syntax und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Weitere Informationen finden Sie unter [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments).

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional auf einen Wert initialisiert wird.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-skopierte, lokale Variable, die optional auf einen Wert initialisiert wird.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-skopierte, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, genannt {{Glossary("Identifier", "Identifikatoren")}}, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifikator beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript case-sensitive ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Für weitere Details siehe die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)-Referenz.) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren zu repräsentieren.

Einige Beispiele für legale Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel: `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel: `let y = 13`. Diese Syntax kann verwendet werden, um eine block-skopierte lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel: `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem gleichnamigen Schlüssel in unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher das Zuweisen an nicht deklarierte Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) ein Fehler und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42`, wird der Teil `let x` als _Deklaration_ bezeichnet und der Teil `= 42` als _Initialisierer_. Die Deklaration erlaubt den späteren Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variable einen Wert zuweist. Bei `var`- und `let`-Deklarationen ist der Initialisierer optional. Wird eine Variable ohne Initialisierer deklariert, erhält sie den Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie nach der Deklaration jegliche Art von Zuweisung verbieten und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für alle im Skriptmodus ausgeführten Codes.
- Modulbereich: Der Bereich für im Modus „Modul“ ausgeführte Codes.
- Funktionsbereich: Der mit einer {{Glossary("function", "Funktion")}} erstellte Bereich.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert sind, zu einem zusätzlichen Bereich gehören:

- Blockbereich: Der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Bereich.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch dem [Blocksatz](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) zugeordnet werden, in dem sie deklariert wurden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Variablen, die mit `var` erstellt wurden, sind jedoch nicht block-skopiert, sondern nur lokal zu der _Funktion (oder dem globalen Bereich)_, in der sich der Block befindet.

Beispielsweise wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

`var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoisted")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Bereich zugreifen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Sie können `var`-Deklarationen als "angehoben" an den Anfang ihres Funktions- oder globalen Bereichs betrachten. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wurde, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoben wird, nicht jedoch ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden gleich interpretiert wie:

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

Aufgrund von Hoisting sollten alle `var`-Anweisungen in einer Funktion so nah wie möglich an den Anfang der Funktion gestellt werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionsfrage. Der Zugriff auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable in einer "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" vom Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert heben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben - Sie können die Funktion sicher überall in ihrem Bereich aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}} Glossarbeitrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

Auf Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der `window.variable`-Syntax lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle unter verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie auf globale Variablen, die in einem Fenster oder Rahmen deklariert sind, aus einem anderen Fenster oder Rahmen zugreifen, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel: Wenn eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie auf diese Variable aus einem `iframe` als `parent.phoneNumber` zugreifen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Schlüsselwort erstellen. Die Syntax eines Konstanten-Identifikators ist dieselbe wie bei einem Variablen-Identifikator: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrichzeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert nicht durch Zuweisung ändern oder neu deklariert werden, während das Skript ausgeführt wird. Sie muss auf einen Wert initialisiert werden. Die Bereichsregeln für Konstanten sind dieselben wie für `let`-Blockbereichsvariablen.

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

`const` verhindert jedoch nur _Zuweisungen_, aber keine _Modifikationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

- Sieben Datentypen, die {{Glossary("Primitive", "primitiv")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript case-sensitive ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine ganze Zahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine ganze Zahl mit beliebiger Präzision. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenig sind, ermöglichen sie es Ihnen, mit Ihren Anwendungen nützliche Operationen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch eine Art Objekt sind, können Sie Objekte als benannte Container für Werte und Funktionen als Prozeduren betrachten, die Ihr Skript ausführen kann.

### Datentypkonvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variable deren Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen bei der Skriptausführung je nach Bedarf automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable folgendermaßen definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen Zeichenfolgewert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+'-Operator

In Ausdrücken, die numerische und Zeichenfolgenwerte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Zeichenfolgen. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte in Zeichenfolgen. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertieren von Zeichenfolgen in Zahlen

Falls ein Wert, der eine Zahl darstellt, im Speicher als Zeichenfolge vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` gibt nur ganze Zahlen zurück, sodass seine Verwendung für Dezimalzahlen eingeschränkt ist.

> [!NOTE]
> Eine bewährte Vorgehensweise bei `parseInt` ist, immer den _Radix_-Parameter einzubeziehen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einer Zeichenfolge zu erhalten, ist der `+` (unärer Plus)-Operator. Dieser führt implizit eine [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, was demselben Vorgang wie die {{jsxref("Number()")}}-Funktion entspricht.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Es handelt sich um feste Werte, keine Variablen, die Sie in Ihrem Skript _buchstäblich_ angeben. Dieser Abschnitt beschreibt die folgenden Typen von Literalen:

- [Arrayliterale](#arrayliterale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objektliterale](#objektliterale)
- [RegExp-Literale](#regexp-literale)
- [Zeichenfolgenliterale](#zeichenfolgenliterale)

### Arrayliterale

Ein Arrayliteral ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Arrayelement darstellt, eingeschlossen in eckigen Klammern (`[]`). Wenn Sie ein Array unter Verwendung eines Arrayliterales erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Arrayliteral erstellt bei jeder Auswertung des Literals ein neues Arrayobjekt. Beispielsweise wird ein im globalen Bereich definiertes Arrayliteral einmal erstellt, wenn das Skript geladen wird. Befindet sich das Arrayliteral jedoch in einer Funktion, wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Arrayliterale erstellen `Array`-Objekte. Weitere Details zu `Array`-Objekten finden Sie in der {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections).

#### Zusätzliche Kommas in Arrayliteralen

Wenn Sie zwei Kommas in einem Arrayliteral hintereinander setzen, lässt das Array einen leeren Platz für das nicht angegebene Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächliche `undefined`-Wert. Bei Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Stellen übersprungen. Der Zugriffsindex `fish[1]` gibt jedoch weiterhin `undefined` zurück.

Wenn Sie ein nachgestelltes Komma am Ende der Liste der Elemente hinzufügen, wird das Komma ignoriert.

Im folgenden Beispiel beträgt die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommas in der Liste zeigen ein neues Element an.

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

> [!NOTE] > [Nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen, git diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements an das Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf ihr Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolesche Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Booleschen Werte `true` und `false` mit den Werten `true` und `false` des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Weitere Informationen finden Sie unter {{jsxref("Boolean")}}.

### Numerische Literale

JavaScript numerische Literale umfassen Ganzzahlen in verschiedenen Basen sowie Gleitkommazahlen in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale unsigniert sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator interpretiert werden, der auf das numerische Literal `123.4` angewendet wird.

#### Ganzzahlen Literale

Ganzzahlen- und {{jsxref("BigInt")}}-Literale können in Dezimalzahlen (Basis 10), Hexadezimalzahlen (Basis 16), Oktalzahlen (Basis 8) und Binärzahlen (Basis 2) geschrieben werden.

- Ein _dezimales_ Ganzzahlenliteral ist eine Ziffernfolge ohne führende `0` (Null).
- Eine führende `0` (Null) in einem Ganzzahlenliteral oder eine führende `0o` (oder `0O`) zeigt an, dass es sich um _Oktal_ handelt. Oktal-Ganzzahlenliterale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlenliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- und Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlenliteral an. Binäre Ganzzahlenliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix in einem Ganzzahlenliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die führende-Null-Oktalnotation wie `0123n` nicht erlaubt ist, aber `0o123n` kein Problem darstellt.

Einige Beispiele für Ganzzahlenliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Weitere Informationen finden Sie unter [Numerische Literale in der lexikalischen Grammatikreferenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommazahlen Literale

Ein Gleitkommazahlenliteral kann die folgenden Teile haben:

- Eine unsignierte Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruchteil (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die signiert sein kann (vorhergegangenen von `+` oder `-`). Ein Gleitkommazahlenliteral muss mindestens eine Ziffer enthalten und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kurz gesagt, die Syntax ist:

```plain
[digits].[digits][(E|e)[(+|-)]digits]
```

Beispielsweise:

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### Objektliterale

Ein Objektliteral ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objektliteral. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihm eine neue Zeichenfolge, `"Saturn"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort auf das Ergebnis der Aufrufung der Funktion `(carTypes("Honda"))` gesetzt; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Darüber hinaus können Sie einen numerischen oder Zeichenfolgenliteral für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes einbetten. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Zeichenfolgen sein, einschließlich der leeren Zeichenfolge. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Identifikator")}} oder keine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`) Eigenschaft zugegriffen werden.

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

#### Erweiterte Objektliterale

Objektliterale unterstützen eine Reihe von Kurznotationen, die das Festlegen des Prototyps bei der Konstruktion, die Kurzform für `foo: foo`-Zuweisungen, das Definieren von Methoden, die Ausführung von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Zusammen bringen diese auch Objektliterale und Klassendeklarationen näher zusammen und erlauben objektbasiertem Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

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

Ein Regex-Literal (das später [detailliert definiert](/de/docs/Web/JavaScript/Guide/Regular_expressions)) wird, ist ein Muster eingeschlossen zwischen Schrägstrichen. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### Zeichenfolgenliterale

Ein Zeichenfolgenliteral ist null oder mehr Zeichen, eingeschlossen in doppelten (`"`) oder einfachen (`'`) Anführungszeichen. Eine Zeichenfolge muss durch Anführungszeichen desselben Typs begrenzt sein (das heißt, entweder beide einfachen Anführungszeichen oder beide doppelten Anführungszeichen).

Die folgenden sind Beispiele für Zeichenfolgenliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Zeichenfolgenliterale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden. Weitere Informationen zu `String`-Objekten finden Sie in {{jsxref("String")}}.

Sie können alle Methoden des {{jsxref("String")}}-Objekts für einen Zeichenfolgenliteralwert aufrufen. JavaScript konvertiert den Zeichenfolgenliteral automatisch in ein temporäres `String`-Objekt, ruft die Methode auf und verwirft dann das temporäre `String`-Objekt. Sie können auch die `length`-Eigenschaft mit einem Zeichenfolgenliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Vorlagenliterale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Vorlagenliterale sind durch das Back-Tick-Zeichen (`` ` ``) ([Akzent](https://de.wikipedia.org/wiki/Backtick)) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Vorlagenliterale bieten syntaktischen Zucker zum Erstellen von Zeichenfolgen. (Dies ist ähnlich wie String-Interpolation-Funktionen in Perl, Python und mehr.)

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

[Getaggte Vorlagen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zum Spezifizieren eines Vorlagenliterals zusammen mit einem Aufruf einer "Tag"-Funktion zu dessen Verarbeitung. Ein getaggtes Template ist lediglich eine kürzere und semantische Art, eine Funktion zu schreiben, die eine Zeichenfolge und eine Reihe relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal – wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftauchen können, und vermeidet so das lästige `[object Object]`.

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

Da getaggte Vorlagenliterale nur syntaktischer Zucker für Funktionsaufrufe sind, können Sie das obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies kann an den `console.log`-Stil der Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwendung von Sonderzeichen in Zeichenfolgen

Zusätzlich zu gewöhnlichen Zeichen können Sie auch Sonderzeichen in Zeichenfolgen einschließen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Zeichenfolgen verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                      |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                   |
| `\f`        | Seitenvorschub                                                                                                                                                                                                                                                |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                    |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                 |
| `\t`        | Tabulator                                                                                                                                                                                                                                                     |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                          |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                    |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                   |
| `\\`        | Rückwärtsschrägstrich-Zeichen                                                                                                                                                                                                                                 |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei Oktalziffern `XXX` zwischen `0` und `377` angegeben ist. Zum Beispiel ist `\251` die Oktalsequenz für das Copyright-Symbol.                                                                      |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch zwei Hexadezimalziffern `XX` zwischen `00` und `FF` angegeben ist. Zum Beispiel ist `\xA9` die Hexadezimalsequenz für das Copyright-Symbol.                                                                  |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier Hexadezimalziffern `XXXX` angegeben ist. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepoint-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                      |

#### Zeichen entkommen

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorangestellter Rückwärtsschrägstrich ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen in eine Zeichenfolge einfügen, indem Sie ihm ein Rückwärtsschrägstrich voranstellen. Dies wird als _Entkommentieren_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen buchstäblichen Rückwärtsschrägstrich in eine Zeichenfolge aufzunehmen, müssen Sie das Rückwärtsschrägstrich-Zeichen entkommen. Zum Beispiel um den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie das Folgende:

```js
const home = "c:\\temp";
```

Sie können Zeilenumbrüche auch durch Voranstellen eines Rückwärtsschrägstrichs entkommen. Der Rückwärtsschrägstrich und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über JavaScripts Sprachkonstrukte zu erfahren, lesen Sie auch die folgenden Kapitel in diesem Leitfaden:

- [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)-Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)-Leitfaden

Im nächsten Kapitel werfen wir einen Blick auf Steuerflusskonstrukte und Fehlerbehandlung.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
