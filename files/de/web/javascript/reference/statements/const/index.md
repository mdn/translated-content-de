---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`const`**-Deklaration deklariert lokale Variablen mit Block-Scope. Der Wert einer Konstanten kann nicht durch eine erneute Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden. Wenn eine Konstante jedoch ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) ist, können dessen Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

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
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Dies kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist {{jsxref("Statements/let", "let")}} sehr ähnlich:

- `const`-Deklarationen gelten innerhalb von Blöcken und Funktionen.
- Auf `const`-Deklarationen kann erst zugegriffen werden, nachdem die Deklarationsstelle erreicht wurde (siehe [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen üblicherweise als {{Glossary("Hoisting", "nicht gehoistet")}} angesehen.
- `const`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können im selben Gültigkeitsbereich nicht durch eine andere Deklaration [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` leitet [_Deklarationen_, keine _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) ein. Daher können Sie eine einzelne `const`-Deklaration nicht ohne Block als Rumpf einer `if`-Anweisung verwenden (was sinnvoll ist, da es sonst keine Möglichkeit gäbe, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Für eine Konstante ist ein Initialisierer erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erzeugt eine unveränderliche Referenz auf einen Wert. Das bedeutet _nicht_, dass der referenzierte Wert unveränderlich ist – lediglich, dass dem Variablenbezeichner kein neuer Wert zugewiesen werden kann. Wenn der Wert beispielsweise ein Objekt ist, kann dessen Inhalt (z. B. seine Eigenschaften) geändert werden. Verstehen Sie `const`-Deklarationen als „eine Variable erstellen, deren _Identität_ konstant bleibt“, nicht als „eine Variable erstellen, deren _Wert_ konstant bleibt“ – oder als „unveränderliche {{Glossary("binding", "Bindungen")}} erstellen“, nicht als „unveränderliche Werte erstellen“.

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript#variable_declarations)) empfehlen, `const` statt {{jsxref("Statements/let", "let")}} zu verwenden, wenn einer Variablen innerhalb ihres Gültigkeitsbereichs kein neuer Wert zugewiesen wird. So wird deutlich, dass sich der Typ einer Variablen (oder bei einem primitiven Wert ihr Wert) nicht ändern kann. Andere bevorzugen möglicherweise `let` für nicht primitive Werte, die verändert werden.

Die Liste nach dem Schlüsselwort `const` wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und durch Kommas getrennt. Diese Kommas sind _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), und die `=`-Zeichen sind _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Initialisierer späterer Variablen können auf frühere Variablen in der Liste verweisen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden. Üblicherweise werden jedoch ausschließlich Großbuchstaben verwendet, insbesondere für primitive Werte, da diese tatsächlich unveränderlich sind.

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

Es ist wichtig, die Funktionsweise des Block-Scopes zu beachten.

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

### const bei Objekten und Arrays

`const` funktioniert auch bei Objekten und Arrays. Der Versuch, dem Variablenbezeichner ein anderes Objekt zuzuweisen, löst den Fehler „Assignment to constant variable“ aus.

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Objekteigenschaften sind jedoch nicht geschützt, sodass die folgende Anweisung problemlos ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Um ein Objekt unveränderlich zu machen, müssen Sie {{jsxref("Object.freeze()")}} verwenden.

Dasselbe gilt für Arrays. Wird der Variablen ein neues Array zugewiesen, wird der Fehler „Assignment to constant variable“ ausgelöst.

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist dennoch möglich, Elemente zum Array hinzuzufügen und es dadurch zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. So können mehrere Variablen gleichzeitig erstellt werden.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
