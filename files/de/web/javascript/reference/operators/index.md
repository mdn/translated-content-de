---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Für eine alphabetische Liste siehe die Seitenleiste links.

### Primärausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das `this` Schlüsselwort bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontextes.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolean-, Zahlen- und String-Literale.
- {{jsxref("Array", "[]")}}
  - : Array-Initializer/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initializer/Literal-Syntax.
- {{jsxref("Operators/function", "function")}}
  - : Das `function` Schlüsselwort definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das `class` Schlüsselwort definiert einen Klassen-Ausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das `function*` Schlüsselwort definiert einen Generator-Funktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die `async function*` Schlüsselwörter definieren einen asynchronen Generator-Funktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Reguläre Ausdruck-Literal-Syntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literal-Syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linksseitige Ausdrücke

Linkswerte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Mitgliedsoperatoren bieten Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Verkettungsoperator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn ein Verweis {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)) ist.
- {{jsxref("new")}}
  - : Der `new` Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der durch {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten zu einem JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das `super` Schlüsselwort ruft den Elternkonstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des Elternobjekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()` Syntax erlaubt das asynchrone und dynamische Laden eines Moduls in eine möglicherweise nicht-modulare Umgebung.

### Inkrement und Dekrement

Postfix-/Präfix-Inkrement und Postfix-/Präfix-Dekrement-Operatoren.

- {{jsxref("Operators/Increment", "A++")}}
  - : Postfix-Inkrementoperator.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Postfix-Dekrementoperator.
- {{jsxref("Operators/Increment", "++A")}}
  - : Präfix-Inkrementoperator.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Präfix-Dekrementoperator.

### Unäre Operatoren

Eine unäre Operation ist eine Operation mit nur einem Operanden.

- {{jsxref("delete")}}
  - : Der `delete` Operator löscht eine Eigenschaft aus einem Objekt.
- {{jsxref("Operators/void", "void")}}
  - : Der `void` Operator wertet einen Ausdruck aus und verwirft dessen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der `typeof` Operator bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plus-Operator konvertiert seinen Operanden in den Zahlentyp.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in den Zahlentyp und negiert ihn dann.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Pausiert und setzt eine asynchrone Funktion fort und wartet auf die Erfüllung/Ablehnung des Versprechens.

### Arithmetische Operatoren

Arithmetische Operatoren verwenden numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzelnen numerischen Wert zurück.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Exponentialoperator.
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
  - : Kleiner-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-oder-gleich-Operator.
- {{jsxref("instanceof")}}
  - : Der `instanceof` Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in` Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft hat.

> [!NOTE]
> `=>` ist kein Operator, sondern die Notation für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitsoperators ist immer vom Typ boolean, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweisen Verschiebungsoperatoren

Operationen zum Verschieben aller Bits des Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser unveränderter Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als Satz von 32 Bits (Nullen und Einsen) und geben Standard-JavaScript-Zahlenwerte zurück.

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

### Bedingungsoperator (ternär)

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der Bedingungsoperator gibt einen von zwei Werten basierend auf dem logischen Wert der Bedingung zurück.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weist den Wert seines rechten Operanden an seinen linken Operanden zu.

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
  - : Unveränderte Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitweises UND-Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweises XOR-Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweises ODER-Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentialzuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logisches UND-Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logisches ODER-Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish Coalescing Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Mit Destructuring können Sie die Eigenschaften eines Arrays oder Objekts Variablen zuweisen, indem Sie eine Syntax verwenden, die Array- oder Objekt-Literalen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausiert und setzt eine Generatorfunktion fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegieren an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax erlaubt es einem iterierbaren Objekt, wie einem Array oder String, an Stellen erweitert zu werden, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator erlaubt es, mehrere Ausdrücke in einer einzigen Anweisung auszuwerten und gibt das Ergebnis des letzten Ausdrucks zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
