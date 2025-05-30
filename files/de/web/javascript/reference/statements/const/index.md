---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert blocklokale Variablen. Der Wert einer Konstanten kann nicht durch Zuweisung verändert werden, indem der [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) verwendet wird, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierten Variable. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Initialwert der Variable. Es kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der Deklaration mittels {{jsxref("Statements/let", "let")}} sehr ähnlich:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `const`-Deklarationen können erst nach der Deklarationsstelle zugegriffen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als {{Glossary("Hoisting", "nicht gehoben")}} angesehen.
- `const`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können nicht [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden durch jegliche andere Deklaration im gleichen Gültigkeitsbereich.
- `const` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine alleinige `const`-Deklaration nicht als Rumpf eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt einen unveränderlichen Verweis auf einen Wert. Dies bedeutet _nicht_, dass der Wert, den sie hält, unveränderlich ist — nur, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Beispielsweise bedeutet dies im Fall eines Objekts, dass die Inhalte des Objekts (z.B. seine Eigenschaften) geändert werden können. Sie sollten `const`-Deklarationen so verstehen, dass sie eine Variable erstellen, deren _Identität_ konstant bleibt, nicht deren _Wert_ konstant bleibt — oder dass sie unveränderliche {{Glossary("binding", "Bindungen")}} erstellen, nicht unveränderliche Werte.

Viele Stilrichtlinien (einschließlich der [MDN's](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` anstelle von {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Bereich nicht neu zugewiesen wird. Dies macht deutlich, dass sich der Typ einer Variablen (oder der Wert im Fall eines primitiven Typs) niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiven, die mutiert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und ist durch Kommas getrennt, wobei die Kommas _nicht_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer von späteren Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende const-Verwendung

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine gängige Konvention ist die Verwendung von ausschließlich Großbuchstaben, insbesondere für primitive Typen, da sie wirklich unveränderlich sind.

```js
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

console.log(`my favorite number is: ${MY_FAV}`);
```

```js-nolint example-bad
// Re-assigning to a constant variable throws an error
MY_FAV = 20; // TypeError: Assignment to constant variable

// Redeclaring a constant throws an error
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### Blockumfang

Es ist wichtig, die Natur des Blockumfangs zu beachten.

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

`const` funktioniert auch mit Objekten und Arrays. Ein Versuch, das Objekt zu überschreiben, führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Jedoch sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung problemlos ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Das Gleiche gilt für Arrays. Einem neuen Array die Variable zuzuweisen, führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch möglich, Einträge in das Array zu pushen und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für mehr Informationen siehe [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
