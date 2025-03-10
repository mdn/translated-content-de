---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Operators")}}

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Für ein alphabetisches Verzeichnis siehe die Seitenleiste auf der linken Seite.

### Primärausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Vorrangigkeit (höher als die [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("Operators/this", "this")}}
  - : Das Schlüsselwort `this` bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolesche, Zahlen- und Zeichenfolgenliterale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierungs-/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierungs-/Literal-Syntax.
- {{jsxref("Operators/function", "function")}}
  - : Das Schlüsselwort `function` definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das Schlüsselwort `class` definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das Schlüsselwort `function*` definiert einen Generator-Funktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : Das `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die Schlüsselwörter `async function*` definieren einen asynchronen Generator-Funktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Reguläre Ausdruck-Literal-Syntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literal-Syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linke Ausdrücke

Linkswerte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Mit Member-Operatoren kann auf eine Eigenschaft oder Methode eines Objekts zugegriffen werden (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Verkettungsoperator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn ein Verweis {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)) ist.
- {{jsxref("Operators/new", "new")}}
  - : Der `new`-Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren bezieht sich `new.target` auf den Konstruktor, der von {{jsxref("Operators/new", "new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten für ein JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den Eltern-Konstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des Elternobjekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()`-Syntax ermöglicht das asynchrone und dynamische Laden eines Moduls in ein möglicherweise nicht modulares Umfeld.

### Inkrement- und Dekrementoperatoren

Postfix/Präfix-Inkrement- und Postfix/Präfix-Dekrementoperatoren.

- {{jsxref("Operators/Increment", "A++")}}
  - : Postfix-Inkrement-Operator.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Postfix-Dekrement-Operator.
- {{jsxref("Operators/Increment", "++A")}}
  - : Präfix-Inkrement-Operator.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Präfix-Dekrement-Operator.

### Unäre Operatoren

Eine unäre Operation ist eine Operation mit nur einem Operanden.

- {{jsxref("Operators/delete", "delete")}}
  - : Der `delete`-Operator löscht eine Eigenschaft aus einem Objekt.
- {{jsxref("Operators/void", "void")}}
  - : Der `void`-Operator wertet einen Ausdruck aus und verwirft dessen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der `typeof`-Operator bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plus-Operator konvertiert seinen Operanden in den Zahlentyp.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in den Zahlentyp und negiert ihn dann.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NICHT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NICHT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Pausieren und Fortsetzen einer asynchronen Funktion und Warten auf die Erfüllung/Ablehnung des Versprechens.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen Zahlenwerte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzelnen Zahlenwert zurück.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Exponentiationsoperator.
- {{jsxref("Operators/Multiplication", "*")}}
  - : Multiplikationsoperator.
- {{jsxref("Operators/Division", "/")}}
  - : Divisionsoperator.
- {{jsxref("Operators/Remainder", "%")}}
  - : Restoperator.
- {{jsxref("Operators/Addition", "+")}} (Plus)
  - : Additionsoperator.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Subtraktionsoperator.

### Relationale Operatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

- {{jsxref("Operators/Less_than", "&lt;")}} (Kleiner als)
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-als-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-als-oder-gleich-Operator.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Der `instanceof`-Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in`-Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft hat.

> **Note:** `=>` ist kein Operator, sondern die Notation für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitsoperators ist immer vom Typ boolean, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strenger Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strenger Ungleichheitsoperator.

### Bitweise Verschiebungsoperatoren

Operationen zum Verschieben aller Bits des Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser Unsigned-Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Menge von 32 Bit (Nullen und Einsen) und geben Standard-JavaScript-Zahlenwerte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren implementieren boolesche (logische) Werte und haben [Kurzschlussverhalten](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches ODER.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish Coalescing Operator.

### Bedingungsoperator (ternärer Operator)

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der Bedingungsoperator gibt einen von zwei Werten zurück, basierend auf dem logischen Wert der Bedingung.

### Zuweisungsoperatoren

Ein Zuweisungsoperator ordnet seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.

- {{jsxref("Operators/Assignment", "=")}}
  - : Zuweisungsoperator.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Multiplikationszuweisung.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Divisionszuweisung.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Restzuweisung.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Additionszuweisung.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Subtraktionszuweisung.
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Linksverschiebungszuweisung.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Unsigned-Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitweises UND-Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweises XOR-Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweises ODER-Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentiationszuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logische UND-Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logische ODER-Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish-Coalescing-Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Das Destructuring erlaubt Ihnen, die Eigenschaften eines Arrays oder Objekts Variablen zuzuweisen, unter Verwendung einer Syntax, die ähnlich wie bei Array- oder Objektliteralen aussieht.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausieren und Fortsetzen einer Generatorfunktion.
- {{jsxref("Operators/yield*", "yield*")}}
  - : An einen anderen Generator-Funktion oder iterierbares Objekt delegieren.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax erlaubt es, ein iterables Objekt, wie ein Array oder eine Zeichenfolge, in Bereichen zu erweitern, in denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Werte-Paare dem erzeugten Objekt hinzu.

### Komma-Operator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Komma-Operator erlaubt es, mehrere Ausdrücke in einer einzigen Anweisung zu evaluieren und gibt das Ergebnis des letzten Ausdrucks zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operator-Vorrangigkeit](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
