---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann nicht durch Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) ist, können dessen Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

{{InteractiveExample("JavaScript Demo: Statement - Const")}}

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
  - : Der Name der zu deklarierenden Variable. Jeder Name muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN`
  - : Der Initialwert der Variablen. Es kann ein beliebiger legaler Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `const`-Deklarationen sind sowohl an Blöcke als auch an Funktionen gebunden.
- Auf `const`-Deklarationen kann erst nach ihrer Deklaration zugegriffen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen oft als {{Glossary("Hoisting", "nicht gehoben")}} betrachtet.
- `const`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können im selben Bereich von keiner anderen Deklaration [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen_, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine `const`-Deklaration nicht allein als Körper eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierungswert für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderliche Referenz auf einen Wert. Es bedeutet _nicht_, dass der Wert, den sie enthält, unveränderlich ist — nur, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt beispielsweise ein Objekt ist, bedeutet das, dass die Inhalte des Objekts (z. B. seine Eigenschaften) verändert werden können. Sie sollten `const`-Deklarationen im Sinne von „erstelle eine Variable, deren _Identität_ konstant bleibt“ verstehen, nicht „deren _Wert_ konstant bleibt“ – oder, „erstelle unveränderliche {{Glossary("binding", "Bindungen")}}“, nicht „unveränderliche Werte“.

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, `const` anstelle von {{jsxref("Statements/let", "let")}} zu verwenden, wann immer eine Variable in ihrem Bereich nicht neu zugewiesen wird. Dadurch wird die Absicht klargestellt, dass der Typ einer Variablen (oder der Wert im Fall eines primitiven Typs) sich niemals ändern kann. Andere ziehen `let` für Nicht-Primitives vor, die verändert werden.

Die Liste, die dem Schlüsselwort `const` folgt, wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und ist durch Kommata getrennt. Die Kommata sind jedoch _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), und die `=`-Zeichen sind _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Die Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Nutzung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine übliche Konvention ist die Verwendung von ausschließlich Großbuchstaben, insbesondere für Primitives, da diese tatsächlich unveränderlich sind.

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

### Block-Skoping

Es ist wichtig, das Verhalten des Block-Skopings zu beachten.

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

`const` funktioniert auch bei Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, führt zu einem Fehler „Assignment to constant variable“.

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Jedoch sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung problemlos ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Das Gleiche gilt für Arrays. Ein neues Array der Variablen zuzuweisen, führt zu einem Fehler „Assignment to constant variable“.

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch möglich, Elemente in das Array einzufügen und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann ebenfalls ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
