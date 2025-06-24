---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Operators")}}

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Primärausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Präzedenz (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("Operators/this", "this")}}
  - : Das `this`-Schlüsselwort bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontextes.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolean-, Zahlen- und Zeichenfolgenliterale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierungs-/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierungs-/Literal-Syntax.
- {{jsxref("Operators/function", "function")}}
  - : Das `function`-Schlüsselwort definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das `class`-Schlüsselwort definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das `function*`-Schlüsselwort definiert einen Generator-Funktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : Das `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die `async function*`-Schlüsselwörter definieren einen asynchronen Generator-Funktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Syntax für reguläre Ausdrücke.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literal-Syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linkshändige Ausdrücke

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member-Operatoren bieten Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Chaining-Operator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("Operators/new", "new")}}
  - : Der `new`-Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren bezieht sich `new.target` auf den Konstruktor, der durch {{jsxref("Operators/new", "new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten in einem JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das `super`-Schlüsselwort ruft den Elternkonstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des Elternobjekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()`-Syntax ermöglicht es, ein Modul asynchron und dynamisch in eine potenziell nicht-modulare Umgebung zu laden.

### Inkrement und Dekrement

Postfix/Präfix-Inkrement und Postfix/Präfix-Dekrement-Operatoren.

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
  - : Der `void`-Operator wertet einen Ausdruck aus und verwirft seinen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der `typeof`-Operator bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plus-Operator konvertiert seinen Operanden in einen Zahlentyp.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in einen Zahlentyp und negiert ihn dann.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweise NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Pausiert und setzt eine asynchrone Funktion fort und wartet auf die Erfüllung/Ablehnung des Versprechens.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzigen numerischen Wert zurück.

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

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen boolean-Wert zurück, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Less_than", "&lt;")}} (Kleiner als)
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-oder-gleich-Operator.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Der `instanceof`-Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in`-Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft besitzt.

> [!NOTE] > `=>` ist kein Operator, sondern die Notation für [Arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

### Bitweise Schiebeoperatoren

Operationen, um alle Bits des Operanden zu verschieben.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksschiebeoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsschiebeoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser nicht signierter Rechtsschiebeoperator.

### Binäre Bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Menge von 32 Bits (Nullen und Einsen) und geben standardmäßige JavaScript-Zahlenwerte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre Logische Operatoren

Logische Operatoren setzen boolean (logische) Werte um und haben ein [Kurzzusammenbrechen](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) Verhalten.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches ODER.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish Coalescing Operator.

### Bedingungsoperator (ternärer Operator)

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der Bedingungsoperator gibt einen von zwei Werten basierend auf dem logischen Wert der Bedingung zurück.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden einen Wert basierend auf dem Wert seines rechten Operanden zu.

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
  - : Linksschiebezuweisung.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Rechtsschiebezuweisung.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Nicht signierte Rechtsschiebezuweisung.
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
  - : Nullish Coalescing Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Destrukturierung ermöglicht es Ihnen, die Eigenschaften eines Arrays oder Objekts Variablen zuzuweisen, indem sie eine Syntax verwenden, die ähnlich wie Array- oder Objektliterale aussieht.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausiert und setzt einen Generator-Funktion fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generator-Funktion oder iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Spread-Syntax erlaubt es, ein iterierbares Objekt, wie ein Array oder eine Zeichenfolge, an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

### Komma-Operator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Komma-Operator erlaubt es, mehrere Ausdrücke in einer einzigen Anweisung auszuwerten und gibt das Ergebnis des letzten Ausdrucks zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorenpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
