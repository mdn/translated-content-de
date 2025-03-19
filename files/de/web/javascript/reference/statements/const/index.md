---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

{{jsSidebar("Statements")}}

Die **`const`** Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann nicht durch erneute Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

{{InteractiveExample("JavaScript Demo: const declaration")}}

```js interactive-example
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42
```

## Syntax

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein rechtmäßiges JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder legale Ausdruck sein.

## Beschreibung

Die `const` Deklaration ist der von {{jsxref("Statements/let", "let")}} sehr ähnlich:

- `const` Deklarationen sind auf Blöcke sowie Funktionen beschränkt.
- Auf `const` Deklarationen kann erst nach der Deklarationsstelle zugegriffen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const` Deklarationen häufig als {{Glossary("Hoisting", "nicht-hoisted")}} betrachtet.
- `const` Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie im obersten Bereich eines Skripts deklariert werden.
- `const` Deklarationen können nicht durch eine andere Deklaration im selben Geltungsbereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen, keine \_Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `const` Deklaration nicht als Rumpf eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const` Deklaration erstellt eine unveränderliche Referenz auf einen Wert. Es bedeutet _nicht_, dass der Wert selbst unveränderlich ist — nur dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt ein Objekt ist, bedeutet dies zum Beispiel, dass der Inhalt des Objekts (z.B. seine Eigenschaften) verändert werden kann. Sie sollten `const` Deklarationen als "eine Variable erstellen, deren _Identität_ konstant bleibt", verstehen, nicht "deren _Wert_ konstant bleibt" — oder, "unveränderliche {{Glossary("binding", "Bindings")}} erstellen", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich [MDN's](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` gegenüber {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Bereich nicht neu zugewiesen wird. Das macht die Absicht klar, dass sich der Typ einer Variablen (oder im Fall eines primitiven Wertes der Wert) niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiven, die mutiert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird _{{Glossary("binding", "Binding")}} Liste_ genannt und durch Kommas getrennt, wobei die Kommas _nicht_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=` Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende const Verwendung

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine gängige Konvention ist die Verwendung von Großbuchstaben, insbesondere für Primitive, da sie wirklich unveränderlich sind.

```js
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

console.log("my favorite number is: " + MY_FAV);
```

```js-nolint example-bad
// Re-assigning to a constant variable throws an error
MY_FAV = 20; // TypeError: Assignment to constant variable

// Redeclaring a constant throws an error
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### Geltungsbereich von Blöcken

Es ist wichtig, die Natur des Blockscopings zu beachten.

```js-nolint
const MY_FAV = 7;

if (MY_FAV === 7) {
  // This is fine because it's in a new block scope
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // var declarations are not scoped to blocks so this throws an error
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7
```

### const in Objekten und Arrays

`const` funktioniert auch auf Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Die Schlüssel von Objekten sind jedoch nicht geschützt, sodass die folgende Anweisung ohne Problem ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Das Gleiche gilt für Arrays. Das Zuweisen eines neuen Arrays zur Variablen wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch möglich, Elemente zum Array hinzuzufügen und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
