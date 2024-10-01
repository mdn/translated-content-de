---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Dieses Kapitel dokumentiert alle Operatoren, Ausdrücke und Schlüsselwörter der JavaScript-Sprache.

## Ausdrücke und Operatoren nach Kategorie

Für eine alphabetische Liste siehe die Seitenleiste links.

### Primärausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("Operators/this", "this")}}
  - : Das `this`-Schlüsselwort bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontextes.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolesche-, Zahlen- und Zeichenfolgenliterale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierungs-/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objektinitialisierungs-/Literal-Syntax.
- {{jsxref("Operators/function", "function")}}
  - : Das `function`-Schlüsselwort definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das `class`-Schlüsselwort definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das `function*`-Schlüsselwort definiert einen Generator-Funktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : Das `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die Schlüsselwörter `async function*` definieren einen asynchronen Generator-Funktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Reguläre Ausdrucksliteral-Syntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literal-Syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linksseitige Ausdrücke

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member-Operatoren bieten Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Verkettungsoperator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn ein Verweis {{Glossary("Nullish", "nullish")}} ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("Operators/new", "new")}}
  - : Der `new`-Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new%2Etarget", "new.target")}}
  - : In Konstruktoren bezieht sich `new.target` auf den durch {{jsxref("Operators/new", "new")}} aufgerufenen Konstruktor.
- {{jsxref("Operators/import%2Emeta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten in einem JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das `super`-Schlüsselwort ruft den übergeordneten Konstruktor auf oder erlaubt den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()`-Syntax ermöglicht das asynchrone und dynamische Laden eines Moduls in eine möglicherweise nicht-modulare Umgebung.

### Inkrementierung und Dekrementierung

Postfix-/Präfix-Inkrementierungs- und Postfix-/Präfix-Dekrementierungsoperatoren.

- {{jsxref("Operators/Increment", "A++")}}
  - : Postfix-Inkrementierungsoperator.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Postfix-Dekrementierungsoperator.
- {{jsxref("Operators/Increment", "++A")}}
  - : Präfix-Inkrementierungsoperator.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Präfix-Dekrementierungsoperator.

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
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Stoppt und setzt eine asynchrone Funktion fort und wartet auf die Erfüllung/Ablehnung des Versprechens.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzelnen numerischen Wert zurück.

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

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Less_than", "&lt;")}} (Weniger als)
  - : Weniger-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Weniger-als-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-als-oder-gleich-Operator.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Der `instanceof`-Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in`-Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft hat.

> **Note:** `=>` ist kein Operator, sondern die Notation für [Arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Bewertung eines Gleichheitsoperators ist immer vom Typ boolesch, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Shift-Operatoren

Operationen zum Verschieben aller Bits des Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser unsignierter Rechtsverschiebungsoperator.

### Binäre Bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als ein Set von 32 Bits (Nullen und Einsen) und geben Standard-JavaScript-Zahlenwerte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren implementieren boolesche (logische) Werte und haben ein [Short-Circuiting](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)-Verhalten.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches ODER.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish Coalescing Operator.

### Bedingter (ternärer) Operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der bedingte Operator gibt einen von zwei Werten zurück, basierend auf dem logischen Wert der Bedingung.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden basierend auf dem Wert seines rechten Operanden einen Wert zu.

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
  - : Bitweise UND-Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweise XOR-Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweise ODER-Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentiationszuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logische UND-Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logische ODER-Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish-Coalescing-Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : Die Destrukturierungszuweisung ermöglicht es, die Eigenschaften eines Arrays oder Objekts Variablen zuzuweisen, mit einer Syntax, die den Array- oder Objektliteralen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Stoppt und setzt eine Generatorfunktion fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Überträgt an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax ermöglicht es, ein Iterierbares, wie ein Array oder eine Zeichenfolge, in Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral werden durch die Spread-Syntax die Eigenschaften eines Objekts aufgezählt und die Schlüssel-Wert-Paare dem erstellten Objekt hinzugefügt.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator erlaubt es, mehrere Ausdrücke in einer einzelnen Anweisung auszuwerten und das Ergebnis des letzten Ausdrucks zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
