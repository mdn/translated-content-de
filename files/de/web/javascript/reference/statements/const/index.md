---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann nicht durch Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen begrenzt.
- `const`-Deklarationen können erst nach Erreichen des Deklarationsortes zugegriffen werden (siehe [zeitlicher toter Bereich](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-hoisted")}} angesehen.
- `const`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Scripts deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [Deklarationen, nicht Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie keine alleinstehende `const`-Deklaration als Körper eines Blocks verwenden können (was sinnvoll ist, da es keinen Weg gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da sie später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderbare Referenz auf einen Wert. Sie bedeutet _nicht_, dass der Wert selbst unveränderlich ist — nur dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt ein Objekt ist, bedeutet dies, dass die Inhalte des Objekts (z. B. seine Eigenschaften) verändert werden können. Sie sollten `const`-Deklarationen verstehen als "erstelle eine Variable, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" — oder "erstelle unveränderliche {{Glossary("binding", "Bindings")}}", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` über {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht klar, dass der Typ (oder der Wert, im Falle einer primitiven Variable) einer Variablen sich niemals ändern kann. Andere bevorzugen möglicherweise `let` für nicht-primitives, das verändert wird.

Die Liste, die dem `const`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Binding")}}-Liste_ bezeichnet und durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer von späteren Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine gängige Konvention ist die Verwendung von nur Großbuchstaben, besonders für Primitive, da sie wirklich unveränderlich sind.

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

Es ist wichtig, die Natur des Block-Skopings zu beachten.

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

`const` funktioniert auch bei Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, führt zu einem Fehler "Zuweisung an konstante Variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Allerdings sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Dasselbe gilt für Arrays. Die Zuweisung eines neuen Arrays zur Variablen führt zu einem Fehler "Zuweisung an konstante Variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch weiterhin möglich, Elemente in das Array zu pushen und es dadurch zu verändern.

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

Für weitere Informationen siehe [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
