---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert lokal block-skopierte Variablen. Der Wert einer Konstante kann nicht durch Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}}:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `const`-Deklarationen können nur nach ihrem Deklarationsort aufgerufen werden (siehe [temporäre Toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-gehoistete")}} angesehen.
- `const`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im selben Geltungsbereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine einzelne `const`-Deklaration nicht als Körper eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Dies ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderliche Referenz auf einen Wert. Das bedeutet _nicht_, dass der Wert selbst unveränderlich ist — nur dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt beispielsweise ein Objekt ist, bedeutet dies, dass der Inhalt des Objekts (z.B. seine Eigenschaften) verändert werden kann. Sie sollten `const`-Deklarationen als "erstelle eine Variable, deren _Identität_ konstant bleibt", verstehen, nicht "deren _Wert_ konstant bleibt" — oder, "erstelle unveränderliche {{Glossary("binding", "Bindings")}}", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich [MDNs](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, `const` gegenüber {{jsxref("Statements/let", "let")}} zu verwenden, wann immer eine Variable innerhalb ihres Geltungsbereichs nicht neu zugewiesen wird. Dies macht die Absicht klar, dass der Typ einer Variablen (oder der Wert, im Falle eines primitiven Typs) sich niemals ändern kann. Andere könnten `let` für Nicht-Primitiva bevorzugen, die geändert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Binding")}} Liste_ bezeichnet und durch Kommas getrennt, wobei die Kommas _keine_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine häufige Konvention ist die Verwendung von Großbuchstaben, insbesondere für Primitive, da diese wirklich unveränderlich sind.

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

### Block-Skopierung

Es ist wichtig, die Natur der Block-Skopierung zu beachten.

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

`const` funktioniert auch bei Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Allerdings sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Man müsste {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Das Gleiche gilt für Arrays. Die Zuweisung eines neuen Arrays zur Variablen führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Dennoch ist es möglich, Elemente in das Array hinzuzufügen und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann ebenfalls ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

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
