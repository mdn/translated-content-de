---
title: Ausdrucks-Anweisung
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Eine **Ausdrucks-Anweisung** ist ein Ausdruck, der an einer Stelle verwendet wird, an der eine Anweisung erwartet wird. Der Ausdruck wird ausgewertet und sein Ergebnis verworfen – daher macht es nur für Ausdrücke mit Nebeneffekten Sinn, wie das Ausführen einer Funktion oder das Aktualisieren einer Variable.

## Syntax

```js-nolint
expression;
```

- `expression`
  - : Ein beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll. Es gibt [bestimmte Ausdrücke](#verbotene_ausdrücke), die mit anderen Anweisungen mehrdeutig sein können und daher verboten sind.

## Beschreibung

Abgesehen von den [dedizierten Anweisungssyntaxen](/de/docs/Web/JavaScript/Reference/Statements) können Sie auch fast jeden [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators) als eigenständige Anweisung verwenden. Die Ausdrucks-Anweisungssyntax erfordert ein Semikolon am Ende, aber der Prozess der [Automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) kann eines für Sie einfügen, falls das Fehlen eines Semikolons zu ungültiger Syntax führt.

Da der Ausdruck ausgewertet und dann verworfen wird, ist das Ergebnis des Ausdrucks nicht verfügbar. Daher muss der Ausdruck einen Nebeneffekt haben, um nützlich zu sein. Ausdrucks-Anweisungen sind allgemein:

- Funktionsaufrufe (`console.log("Hello");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [Gekennzeichnete Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators), einschließlich zusammengesetzter Zuweisungen
- [Inkrement- und Dekrement-Operatoren](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*)

Andere können auch Nebeneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typumwandlungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) auslösen.

### Verbotene Ausdrücke

Damit ein Ausdruck als Anweisung verwendet werden kann, darf er nicht mit anderen Anweisungssyntaxen mehrdeutig sein. Der Ausdruck darf daher nicht mit einem der folgenden Token beginnen:

- `function`: würde eine [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sein, kein [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`: würde eine [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) sein, kein [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) oder [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`: würde eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) sein, kein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- `let[`: würde eine [`let`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/let) mit [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein, kein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf einer Variablen namens `let` (`let` kann nur ein Bezeichner im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words) sein)
- `{`: würde eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) sein, kein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)

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

Gefährlicher ist, dass der Code manchmal zufällig eine gültige Syntax hat, aber nicht das ist, was beabsichtigt war.

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

Um diese Probleme zu vermeiden, können Sie Klammern verwenden, sodass die Anweisung eindeutig eine Ausdrucks-Anweisung ist.

```js example-good
(function foo() {
  console.log("foo");
})();
```

## Beispiele

### Vermeidung von Kontrollfluss-Anweisungen

Sie können die Verwendung von Kontrollfluss-Anweisungen fast vollständig vermeiden, indem Sie Ausdrucks-Anweisungen verwenden. Zum Beispiel kann `if...else` durch [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) ersetzt werden. Iterative Anweisungen wie `for` oder `for...of` können durch [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) ersetzt werden.

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
> Dies demonstriert nur eine Fähigkeit der Sprache. Übermäßiger Einsatz von Ausdrucks-Anweisungen als Ersatz für Kontrollfluss-Anweisungen kann den Code viel weniger lesbar machen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
