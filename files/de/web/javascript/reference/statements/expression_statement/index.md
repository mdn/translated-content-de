---
title: Ausdrucksstatement
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Ein **Ausdrucksstatement** ist ein Ausdruck, der an einer Stelle verwendet wird, an der ein Statement erwartet wird. Der Ausdruck wird ausgewertet und sein Ergebnis wird verworfen – daher macht es nur Sinn für Ausdrücke, die Nebeneffekte haben, wie das Ausführen einer Funktion oder das Aktualisieren einer Variablen.

## Syntax

```js-nolint
expression;
```

- `expression`
  - : Ein beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll. Es gibt [bestimmte Ausdrücke](#verbotene_ausdrücke), die mit anderen Statements mehrdeutig sein können und daher verboten sind.

## Beschreibung

Neben den [dedizierten Statement-Syntaxen](/de/docs/Web/JavaScript/Reference/Statements) können Sie fast jeden [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators) als eigenes Statement verwenden. Die Syntax eines Ausdrucksstatements erfordert ein Semikolon am Ende, aber der Prozess der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) kann eines einsetzen, wenn das Fehlen eines Semikolons zu ungültiger Syntax führt.

Da der Ausdruck ausgewertet und dann verworfen wird, ist das Ergebnis des Ausdrucks nicht verfügbar. Daher muss der Ausdruck einen Nebeneffekt haben, damit er nützlich ist. Häufig sind Ausdrucksstatements:

- Funktionsaufrufe (`console.log("Hello");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [Gekennzeichnete Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators), einschliesslich zusammengesetzter Zuweisungen
- [Inkrement- und Dekrementoperatoren](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*)

Andere können ebenfalls Nebeneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typkonversionen](/de/docs/Web/JavaScript/Data_structures#type_coercion) auslösen.

### Verbotene Ausdrücke

Damit ein Ausdruck als Statement verwendet werden kann, darf er nicht mit anderen Statement-Syntaxen mehrdeutig sein. Daher darf der Ausdruck nicht mit einem der folgenden Tokens beginnen:

- `function`: wäre eine [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*), kein [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`: wäre eine [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*), kein [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) oder [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`: wäre eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class), kein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- `let[`: wäre eine [`let`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/let) mit [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), kein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf einer Variablen namens `let` (`let` kann nur ein Bezeichner im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words) sein)
- `{`: wäre ein [Block-Statement](/de/docs/Web/JavaScript/Reference/Statements/block), kein [Objekt-Literal](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)

Daher sind alle folgenden ungültig:

```js-nolint example-bad
function foo() {
  console.log("foo");
}(); // SyntaxError: Unerwartetes Token '('

// Aus irgendeinem Grund haben Sie eine Variable namens `let`
var let = [1, 2, 3];
let[0] = 4; // SyntaxError: Ungültiges Destrukturierungs-Zuweisungsziel

{
  foo: 1,
  bar: 2, // SyntaxError: Unerwartetes Token ':'
};
```

Gefährlicher ist, dass der Code manchmal zufällig gültige Syntax hat, aber nicht das ist, was Sie beabsichtigen.

```js-nolint example-bad
// Aus irgendeinem Grund haben Sie eine Variable namens `let`
var let = [1, 2, 3];

function setIndex(index, value) {
  if (index >= 0) {
    // Beabsichtigt, dem Array `let` zuzuweisen, aber stattdessen wird eine zusätzliche Variable erstellt!
    let[index] = value;
  }
}

setIndex(0, [1, 2]);
console.log(let); // [1, 2, 3]

// Dies ist kein Objekt-Literal, sondern ein Block-Statement,
// bei dem `foo` ein Label und `1` ein Ausdrucksstatement ist.
// Dies passiert oft in der Konsole
{ foo: 1 };
```

Um diese Probleme zu vermeiden, können Sie Klammern verwenden, sodass das Statement eindeutig ein Ausdrucksstatement ist.

```js example-good
(function foo() {
  console.log("foo");
})();
```

## Beispiele

### Vermeidung von Kontrollfluss-Statements

Sie können den fast vollständigen Verzicht auf Kontrollfluss-Statements durch Ausdrucksstatements erreichen. Zum Beispiel kann `if...else` durch [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) ersetzt werden. Iterative Statements wie `for` oder `for...of` können durch [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) ersetzt werden.

```js
// Verwendung von Kontrollfluss-Statements
function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// Verwendung von Ausdrucksstatements
function range2(start, end) {
  start > end && ([start, end] = [end, start]);
  return Array.from({ length: end - start }, (_, i) => start + i);
}
```

> [!WARNING]
> Dies zeigt nur eine Fähigkeit der Sprache. Der übermäßige Einsatz von Ausdrucksstatements als Ersatz für Kontrollfluss-Statements kann den Code erheblich weniger lesbar machen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Statements und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
