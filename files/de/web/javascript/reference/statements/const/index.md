---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Die **`const`**-Deklaration deklariert blockweite lokale Variablen. Der Wert einer Konstante kann mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) nicht durch Neuzuweisung geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann ein beliebiger gültiger Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `const`-Deklarationen sind in Blöcken sowie in Funktionen eingeschränkt.
- `const`-Deklarationen können erst nach der Deklarationsstelle aufgerufen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-gehoistet")}} angesehen.
- `const`-Deklarationen erstellen keine Eigenschaften an {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im selben Umfang [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen, keine Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions). Das bedeutet, dass Sie eine einzelne `const`-Deklaration nicht als Blockkörper verwenden können (was sinnvoll ist, da es keinen Weg gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in der gleichen Deklaration angeben. (Dies ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erzeugt eine unveränderliche Referenz auf einen Wert. Es bedeutet _nicht_, dass der gehaltene Wert unveränderlich ist — nur dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt zum Beispiel ein Objekt ist, bedeutet dies, dass die Inhalte des Objekts (z.B. seine Eigenschaften) verändert werden können. Sie sollten `const`-Deklarationen verstehen als "eine Variable erstellen, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" — oder, "unveränderliche {{Glossary("binding", "Bindings")}} erstellen", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich der von [MDN](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` gegenüber {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Umfang nicht neu zugewiesen wird. Dies macht die Absicht klar, dass der Typ (oder Wert, im Falle eines primitiven Wertes) einer Variable sich niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiva, die mutiert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird _{{Glossary("binding", "Bindingsliste")}}_ genannt und ist durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer von späteren Variablen können sich in der Liste auf frühere Variablen beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine übliche Konvention ist die Verwendung von ausschließlich Großbuchstaben, insbesondere für Primitive, da diese wirklich unveränderlich sind.

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

### Block-Scope

Es ist wichtig, die Natur des Block-Scopings zu beachten.

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

Allerdings sind Objektschlüssel nicht geschützt, daher wird die folgende Anweisung ohne Probleme ausgeführt.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Dasselbe gilt für Arrays. Die Zuweisung eines neuen Arrays zur Variable führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Dennoch ist es möglich, Elemente in das Array zu pushen und es damit zu verändern.

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

Für weitere Informationen siehe [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
