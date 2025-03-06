---
title: Ausdrucksstatement
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Statements")}}

Ein **Ausdrucksstatement** ist ein Ausdruck, der an einer Stelle verwendet wird, an der ein Statement erwartet wird. Der Ausdruck wird ausgewertet und sein Ergebnis wird verworfen – daher macht es nur für Ausdrücke Sinn, die Nebeneffekte haben, wie das Ausführen einer Funktion oder das Aktualisieren einer Variablen.

## Syntax

```js-nolint
expression;
```

- `expression`
  - : Ein beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll. Es gibt [bestimmte Ausdrücke](#verbotene_ausdrücke), die mit anderen Statements verwechselt werden können und daher verboten sind.

## Beschreibung

Abgesehen von den [dedizierten Statementsyntaxen](/de/docs/Web/JavaScript/Reference/Statements) können Sie auch fast jeden [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators) als eigenständiges Statement verwenden. Die Ausdrucksstatementsyntax erfordert ein Semikolon am Ende, aber der Prozess der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) kann eines für Sie einfügen, wenn das Fehlen eines Semikolons zu einer ungültigen Syntax führt.

Da der Ausdruck ausgewertet und dann verworfen wird, ist das Ergebnis des Ausdrucks nicht verfügbar. Daher muss der Ausdruck einen Nebeneffekt haben, damit er nützlich ist. Ausdrucksstatements sind üblicherweise:

- Funktionsaufrufe (`console.log("Hello");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [Getaggte Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators), einschließlich zusammengesetzter Zuweisungen
- [Inkrement- und Dekrementoperatoren](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*)

Andere können ebenfalls Nebeneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

### Verbotene Ausdrücke

Damit ein Ausdruck als Statement verwendet werden kann, darf er nicht mit anderen Statement-Syntaxen verwechselt werden. Daher darf der Ausdruck nicht mit einem der folgenden Tokens beginnen:

- `function`: was eine [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) wäre, nicht aber ein [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`: was eine [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) wäre, nicht aber ein [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) oder [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`: was eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) wäre, nicht aber ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- `let[`: was eine [`let`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/let) mit [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) wäre, nicht aber ein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf einer Variable namens `let` (`let` kann nur im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words) ein Bezeichner sein)
- `{`: was ein [Block-Statement](/de/docs/Web/JavaScript/Reference/Statements/block) wäre, nicht aber ein [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)

Daher sind alle folgenden ungültig:

```js-nolint example-bad
function foo() {
  console.log("foo");
}(); // SyntaxError: Unexpected token '('

// For some reason, you have a variable called `let`
var let = [1, 2, 3];
let[0] = 4; // SyntaxError: Invalid destructuring assignment target

{
  foo: 1,
  bar: 2, // SyntaxError: Unexpected token ':'
};
```

Noch gefährlicher ist, dass der Code manchmal eine gültige Syntax hat, aber nicht das ist, was Sie beabsichtigen.

```js-nolint example-bad
// For some reason, you have a variable called `let`
var let = [1, 2, 3];

function setIndex(index, value) {
  if (index >= 0) {
    // Intend to assign to the array `let`, but instead creates an extra variable!
    let[index] = value;
  }
}

setIndex(0, [1, 2]);
console.log(let); // [1, 2, 3]

// This is not an object literal, but a block statement,
// where `foo` is a label and `1` is an expression statement.
// This often happens in the console
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

Sie können fast alle Kontrollfluss-Statements durch Ausdrucksstatements vermeiden. Zum Beispiel kann `if...else` durch [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) ersetzt werden. Iterative Statements wie `for` oder `for...of` können durch [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) ersetzt werden.

```js
// Using control flow statements
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

// Using expression statements
function range2(start, end) {
  start > end && ([start, end] = [end, start]);
  return Array.from({ length: end - start }, (_, i) => start + i);
}
```

> [!WARNING]
> Dies demonstriert lediglich eine Fähigkeit der Sprache. Ein übermäßiger Gebrauch von Ausdrucksstatements als Ersatz für Kontrollfluss-Statements kann den Code wesentlich weniger lesbar machen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Statements und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
