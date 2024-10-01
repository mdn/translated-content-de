---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann nicht durch Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) ist, können deren Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntax

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jeder muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder legale Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}}:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen eingeschränkt.
- `const`-Deklarationen können nur nach dem Ort der Deklaration erreicht werden (siehe [temporale Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht gehoben")}} betrachtet.
- `const`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im gleichen Bereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie keine `const`-Deklaration allein als Blockkörper verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das macht Sinn, da er später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderliche Referenz auf einen Wert. Das bedeutet _nicht_, dass der gehaltene Wert unveränderlich ist — nur, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt ein Objekt ist, bedeutet dies zum Beispiel, dass der Inhalt des Objekts (z.B. seine Eigenschaften) verändert werden kann. Sie sollten `const`-Deklarationen als "erstellen Sie eine Variable, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" verstehen — oder "erstellen Sie unveränderliche {{Glossary("binding", "Bindungen")}}", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich [MDN's](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` über {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Bereich nicht neu zugewiesen wird. Dies macht die Absicht klar, dass sich der Typ (oder Wert im Fall eines primitiven Werts) einer Variablen niemals ändern kann. Andere ziehen `let` für nicht-primitives vor, die verändert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine gängige Konvention ist die Verwendung von Großbuchstaben, insbesondere für primitive Datentypen, da sie wirklich unveränderlich sind.

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

Objektschlüssel sind jedoch nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Dasselbe gilt für Arrays. Ein neues Array der Variablen zuzuweisen, führt zu einem Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Es ist jedoch möglich, Elemente in das Array zu pushen und es so zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht es, mehrere Variablen auf einmal zu erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierende Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
