---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann nicht durch Zuweisung mittels des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN`
  - : Anfangswert der Variable. Es kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `const`-Deklarationen können erst nach dem Erreichen der Deklarationsstelle zugegriffen werden (siehe [temporale Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht-hoisted")}} angesehen.
- `const`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert sind.
- `const`-Deklarationen können durch keine andere Deklaration im selben Geltungsbereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` leitet [_Deklarationen_, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) ein. Das bedeutet, dass Sie eine einzelne `const`-Deklaration nicht als Körper eines Blocks verwenden können (was sinnvoll ist, da es keinen Zugriff auf die Variable gibt).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen seinen Wert in derselben Deklaration angeben. (Das ist sinnvoll, da es später nicht mehr geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderliche Referenz zu einem Wert. Es bedeutet _nicht_, dass der Wert, den sie hält, unveränderlich ist — nur dass der Variablenbezeichner nicht neu zugewiesen werden kann. Beispielsweise, wenn der Inhalt ein Objekt ist, bedeutet das, dass die Inhalte des Objekts (z.B. seine Eigenschaften) verändert werden können. Sie sollten `const`-Deklarationen verstehen als "erstellen Sie eine Variable, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" — oder, "erstellen Sie unveränderliche {{Glossary("binding", "Bindungen")}}", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, `const` über {{jsxref("Statements/let", "let")}} zu verwenden, wann immer eine Variable nicht in ihrem Geltungsbereich neu zugewiesen wird. Dies macht die Absicht klar, dass der Typ einer Variablen (oder der Wert im Falle eines primitiven Typs) sich niemals ändern kann. Andere mögen `let` für Nicht-Primitiven, die verändert werden, bevorzugen.

Die Liste, die auf das `const`-Schlüsselwort folgt, wird _{{Glossary("binding", "Binding-Liste")}}_ genannt und ist durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine gängige Konvention ist die Verwendung von Großbuchstaben, insbesondere für primitive Werte, da diese wirklich unveränderlich sind.

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

`const` funktioniert auch mit Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, führt zu einem Fehler "Zuweisung zu einer konstanten Variablen".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Allerdings sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Dasselbe gilt für Arrays. Wenn Sie ein neues Array der Variablen zuweisen, wird ein Fehler "Zuweisung zu einer konstanten Variablen" ausgelöst.

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch möglich, Elemente in das Array zu schieben und es somit zu verändern.

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

Für weitere Informationen siehe [Destructuring-Assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
