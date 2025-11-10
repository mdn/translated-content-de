---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder legale Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}}:

- `const`-Deklarationen sind auf Blöcke sowie auf Funktionen beschränkt.
- `const`-Deklarationen können nur nach dem Erreichen des Deklarationsortes zugegriffen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als {{Glossary("Hoisting", "nicht-hoisted")}} angesehen.
- `const`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnen [_Deklarationen, nicht \_Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie keine alleinstehende `const`-Deklaration als Körper eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen seinen Wert in derselben Deklaration angeben. (Das macht Sinn, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt einen unveränderlichen Verweis auf einen Wert. Das bedeutet _nicht_, dass der von ihr gehaltene Wert unveränderlich ist – lediglich, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Im Falle eines Objekts bedeutet dies beispielsweise, dass der Inhalt des Objekts (z.B. seine Eigenschaften) verändert werden kann. Sie sollten `const`-Deklarationen verstehen als "erstellen Sie eine Variable, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" — oder, "erstellen Sie unveränderliche {{Glossary("binding", "Bindungen")}}", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` anstelle von {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht deutlich, dass sich der Typ einer Variablen (oder der Wert, im Fall eines primitiven Werts) niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitive, die mutiert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindung")}}sliste_ bezeichnet und ist durch Kommas getrennt, wobei die Kommas _keine_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer von späteren Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinschreibung deklariert werden, aber eine häufige Konvention ist die Verwendung von reinen Großbuchstaben, insbesondere für primitive Werte, da diese wirklich unveränderlich sind.

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

`const` funktioniert auch bei Objekten und Arrays. Ein Versuch, das Objekt zu überschreiben, wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Jedoch sind Objekt-Schlüssel nicht geschützt, daher wird die folgende Anweisung ohne Probleme ausgeführt.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Dasselbe gilt für Arrays. Die Zuweisung eines neuen Arrays zur Variable wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Dennoch ist es möglich, Elemente in das Array zu schieben und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

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
