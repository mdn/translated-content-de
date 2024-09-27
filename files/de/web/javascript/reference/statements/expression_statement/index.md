---
title: Ausdrucksanweisung
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Eine **Ausdrucksanweisung** ist ein Ausdruck, der an einer Stelle verwendet wird, an der eine Anweisung erwartet wird. Der Ausdruck wird ausgewertet und das Ergebnis verworfen – daher ist er sinnvoll nur bei Ausdrücken, die Nebeneffekte haben, wie zum Beispiel beim Ausführen einer Funktion oder beim Aktualisieren einer Variablen.

## Syntax

```js-nolint
expression;
```

- `expression`
  - : Ein beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll. Es gibt [bestimmte Ausdrücke](#verbotene_ausdrücke), die mit anderen Anweisungen zweideutig sein können und daher verboten sind.

## Beschreibung

Neben den [dedizierten Anweisungssyntaxen](/de/docs/Web/JavaScript/Reference/Statements) können Sie auch fast jeden [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators) als eigenständige Anweisung verwenden. Die Ausdrucksanweisungssyntax erfordert ein Semikolon am Ende, aber der Prozess der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) fügt möglicherweise eines für Sie ein, wenn das Fehlen eines Semikolons zu einer ungültigen Syntax führt.

Da der Ausdruck ausgewertet und dann verworfen wird, steht das Ergebnis des Ausdrucks nicht zur Verfügung. Daher muss der Ausdruck einen Nebeneffekt haben, um nützlich zu sein. Ausdrucksanweisungen sind häufig:

- Funktionsaufrufe (`console.log("Hallo");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [Markierte Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators), einschließlich zusammengesetzter Zuweisungen
- [Inkrement- und Dekrement-Operatoren](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) und [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*)

Andere können ebenfalls Nebeneffekte haben, wenn sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) aufrufen oder [Typkonvertierungen](/de/docs/Web/JavaScript/Data_structures#type_coercion) auslösen.

### Verbotene Ausdrücke

Damit ein Ausdruck als Anweisung verwendet werden kann, darf er nicht mit anderen Anweisungssyntaxen zweideutig sein. Daher darf der Ausdruck nicht mit einem der folgenden Token beginnen:

- `function`: was eine [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) wäre, nicht ein [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`: was eine [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) wäre, nicht ein [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) oder [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`: was eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) wäre, nicht ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- `let[`: was eine [`let`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/let) mit [Array-Dekonstruktion](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) wäre, nicht ein [Property-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf eine Variable namens `let` (`let` kann nur in [nicht-striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words) ein Bezeichner sein)
- `{`: was eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) wäre, nicht ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)

Daher sind alle folgenden syntaktisch ungültig:

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

Noch gefährlicher ist, dass der Code manchmal zufällig gültige Syntax haben kann, aber nicht das ist, was Sie beabsichtigen.

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

Um diese Probleme zu vermeiden, können Sie Klammern verwenden, sodass die Anweisung eindeutig eine Ausdrucksanweisung ist.

```js example-good
(function foo() {
  console.log("foo");
})();
```

## Beispiele

### Vermeidung von Kontrollflussanweisungen

Sie können fast alle Kontrollflussanweisungen vermeiden, indem Sie Ausdrucksanweisungen verwenden. Zum Beispiel kann `if...else` durch [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) ersetzt werden. Iterative Anweisungen wie `for` oder `for...of` können durch [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) ersetzt werden.

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
> Dies zeigt nur eine Fähigkeit der Sprache. Übermäßiger Gebrauch von Ausdrucksanweisungen als Ersatz für Kontrollflussanweisungen kann den Code wesentlich weniger lesbar machen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Anweisungen und Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
