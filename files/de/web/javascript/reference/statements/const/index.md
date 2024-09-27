---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-lokale Variablen. Der Wert einer Konstanten kann nicht durch erneute Zuordnung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) ist, können dessen Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntax

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN`
  - : Anfangswert der Variable. Es kann jeder legale Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}}:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `const`-Deklarationen können erst nach der Deklarationsstelle erreicht werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen häufig als [nicht-hoisted](/de/docs/Glossary/Hoisting) angesehen.
- `const`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie im obersten Skript-Level deklariert werden.
- `const`-Deklarationen können nicht durch eine andere Deklaration im selben Bereich [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine alleinstehende `const`-Deklaration nicht als Blockkörper verwenden können (was sinnvoll ist, da es keinen Zugriff auf die Variable gibt).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen dessen Wert in derselben Deklaration angeben. (Das ist sinnvoll, da er später nicht mehr geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt eine unveränderliche Referenz auf einen Wert. Dies bedeutet _nicht_, dass der von ihr gehaltene Wert unveränderlich ist — nur, dass der Variablenbezeichner nicht neu zugeteilt werden kann. Zum Beispiel bedeutet dies im Fall eines Objekts, dass der Inhalt des Objekts (z.B. seine Eigenschaften) verändert werden kann. Sie sollten `const`-Deklarationen als "Variable erstellen, deren _Identität_ konstant bleibt", nicht "deren _Wert_ konstant bleibt" — oder, "unveränderliche [Bindungen](/de/docs/Glossary/binding) erstellen", nicht "unveränderliche Werte".

Viele Stilrichtlinien (einschließlich der [MDN-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen die Verwendung von `const` anstelle von {{jsxref("Statements/let", "let")}}, wann immer eine Variable in ihrem Bereich nicht neu zugeordnet wird. Dies macht die Absicht klar, dass sich der Typ einer Variablen (oder der Wert im Fall eines primitiven Typs) niemals ändern kann. Andere bevorzugen möglicherweise `let` für Nicht-Primitiven, die geändert werden.

Die Liste, die dem `const`-Schlüsselwort folgt, wird eine _[Bindungsliste](/de/docs/Glossary/binding)_ genannt und durch Kommata getrennt, wobei die Kommata _nicht_ [Kommata-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer von späteren Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine übliche Konvention ist die Verwendung von Großbuchstaben, insbesondere für primitive Datentypen, da sie wirklich unveränderlich sind.

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

### Block-Beschränkung

Es ist wichtig, die Natur der Block-Beschränkung zu beachten.

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

Jedoch sind Objektschlüssel nicht geschützt, so dass die folgende Anweisung problemlos ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Gleiches gilt für Arrays. Die Zuweisung eines neuen Arrays an die Variable führt zu einem Fehler "Zuweisung an konstante Variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Dennoch ist es möglich, Elemente zum Array hinzuzufügen und es somit zu verändern.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann ebenfalls ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für mehr Informationen, siehe [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
