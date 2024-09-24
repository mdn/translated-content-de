---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

Die **`const`**-Deklaration deklariert block-skopierte lokale Variablen. Der Wert einer Konstante kann durch erneute Zuweisung mit dem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Assignment) nicht geändert werden, aber wenn eine Konstante ein [Objekt](/de/docs/Web/JavaScript/Data_structures#objects) ist, können ihre Eigenschaften hinzugefügt, aktualisiert oder entfernt werden.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntax

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Identifikator](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN`
  - : Initialwert der Variablen. Dies kann jeder gültige Ausdruck sein.

## Beschreibung

Die `const`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `const`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `const`-Deklarationen können nur nach dem Erreichen des Ortes der Deklaration zugegriffen werden (siehe [Temporäre Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `const`-Deklarationen allgemein als [nicht-gehoistet](/de/docs/Glossary/Hoisting) angesehen.
- `const`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden.
- `const`-Deklarationen können durch keine andere Deklaration im selben Gültigkeitsbereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.
- `const` beginnt [_Deklarationen_, nicht _Anweisungen_](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Das bedeutet, dass Sie eine alleinstehende `const`-Deklaration nicht als Rumpf eines Blocks verwenden können (was sinnvoll ist, da es keine Möglichkeit gibt, auf die Variable zuzugreifen).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ein Initialisierer für eine Konstante ist erforderlich. Sie müssen ihren Wert in derselben Deklaration angeben. (Das ist sinnvoll, da sie später nicht geändert werden kann.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Die `const`-Deklaration erstellt einen unveränderlichen Verweis auf einen Wert. Es bedeutet nicht, dass der Wert, den sie hält, unveränderlich ist — nur, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Im Fall, dass der Inhalt ein Objekt ist, bedeutet dies, dass der Inhalt des Objekts (z.B. seine Eigenschaften) geändert werden kann. Sie sollten `const`-Deklarationen als "erstelle eine Variable, deren _Identität_ konstant bleibt", und nicht "deren _Wert_ konstant bleibt" — oder, "erstelle unveränderliche {{Glossary("binding", "Bindings")}}", und nicht "unveränderliche Werte", verstehen.

Viele Stilrichtlinien (einschließlich der [MDN's](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#variable_declarations)) empfehlen, `const` über {{jsxref("Statements/let", "let")}} zu verwenden, wann immer eine Variable in ihrem Gültigkeitsbereich nicht neu zugewiesen wird. Dies macht die Absicht klar, dass sich der Typ (oder Wert, im Fall eines Primitivtyps) einer Variablen niemals ändern kann. Andere könnten `let` für Nicht-Primitives bevorzugen, die mutiert werden.

Die Liste, die dem Schlüsselwort `const` folgt, wird eine _{{Glossary("binding")}}-Liste_ genannt und durch Kommata getrennt, wobei die Kommata _nicht_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen.

## Beispiele

### Grundlegende Verwendung von const

Konstanten können mit Groß- oder Kleinbuchstaben deklariert werden, aber eine übliche Konvention ist die Verwendung von nur Großbuchstaben, insbesondere für Primitives, da sie wirklich unveränderlich sind.

```js
// definieren Sie MY_FAV als Konstante und geben Sie ihr den Wert 7
const MY_FAV = 7;

console.log("meine Lieblingsnummer ist: " + MY_FAV);
```

```js-nolint example-bad
// Das Zuweisen zu einer konstanten Variablen wirft einen Fehler
MY_FAV = 20; // TypeError: Assignment to constant variable

// Das Neuerklären einer Konstante wirft einen Fehler
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### Block-Scope

Es ist wichtig, die Natur des Block-Scope zu beachten.

```js-nolint
const MY_FAV = 7;

if (MY_FAV === 7) {
  // Dies ist in Ordnung, da es sich in einem neuen Block-Scope befindet
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // var-Deklarationen sind nicht auf Blöcke beschränkt, daher wirft dies einen Fehler
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7
```

### const bei Objekten und Arrays

`const` funktioniert auch bei Objekten und Arrays. Der Versuch, das Objekt zu überschreiben, wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Allerdings sind Objektschlüssel nicht geschützt, sodass die folgende Anweisung problemlos ausgeführt wird.

```js
MY_OBJECT.key = "otherValue";
```

Sie müssten {{jsxref("Object.freeze()")}} verwenden, um ein Objekt unveränderlich zu machen.

Gleiches gilt für Arrays. Das Zuweisen eines neuen Arrays zur Variablen wirft einen Fehler "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Dennoch ist es möglich, Elemente in das Array hinzuzufügen und es so zu mutieren.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht es, mehrere Variablen gleichzeitig zu erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Konstanten im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
