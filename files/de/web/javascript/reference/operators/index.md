---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Für eine alphabetische Auflistung siehe die Seitenleiste links.

### Primärausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("Operators/this", "this")}}
  - : Das `this` Schlüsselwort bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`, boolesche, Zahlen- und Zeichenkettenliterale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierer/Literalsyntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierer/Literalsyntax.
- {{jsxref("Operators/function", "function")}}
  - : Das `function` Schlüsselwort definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das `class` Schlüsselwort definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das `function*` Schlüsselwort definiert einen Generator-Funktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : Das `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die `async function*` Schlüsselwörter definieren einen asynchronen Generator-Funktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Reguläre Ausdrucks-Literalsyntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Vorlage-Literalsyntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linke Seite von Ausdrücken

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Mitglieder-Operatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der Operator für optionale Verkettung gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn ein Verweis [nullish](/de/docs/Glossary/Nullish) ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("Operators/new", "new")}}
  - : Der `new` Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new%2Etarget", "new.target")}}
  - : In Konstruktoren bezieht sich `new.target` auf den Konstruktor, der durch {{jsxref("Operators/new", "new")}} aufgerufen wurde.
- {{jsxref("Operators/import%2Emeta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten zu einem JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das `super` Schlüsselwort ruft den übergeordneten Konstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()` Syntax ermöglicht das asynchrone und dynamische Laden eines Moduls in eine potenziell nicht-modulartige Umgebung.

### Inkrement- und Dekrementoperatoren

Postfix/Präfix-Inkrement- und Postfix/Präfix-Dekrementoperatoren.

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

- {{jsxref("Operators/delete", "delete")}}
  - : Der `delete` Operator löscht eine Eigenschaft aus einem Objekt.
- {{jsxref("Operators/void", "void")}}
  - : Der `void` Operator wertet einen Ausdruck aus und verwirft dessen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der `typeof` Operator bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plus-Operator konvertiert seinen Operanden in den Zahlentyp.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Vorzeichenwechsel-Operator konvertiert seinen Operanden in den Zahlentyp und negiert ihn dann.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Pausiert und setzt eine asynchrone Funktion fort und wartet auf die Erfüllung/Ablehnung des Versprechens.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzigen numerischen Wert zurück.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Potenzierungsoperator.
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
  - : Kleiner als Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer als Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner oder gleich Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer oder gleich Operator.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Der `instanceof` Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in` Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft besitzt.

> **Note:** `=>` ist kein Operator, sondern die Notation für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Bewertung eines Gleichheitsoperators ist immer vom Typ boolean, basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Verschiebungsoperatoren

Operationen, um alle Bits des Operanden zu verschieben.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser unsignierter Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Gruppe von 32 Bits (Nullen und Einsen) und geben standardmäßige JavaScript-Zahlenwerte zurück.

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
  - : Linksverschiebungszuweisung.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Unsigned Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitweise UND-Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweise XOR-Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweise ODER-Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Potenzierungszuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logische UND-Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logische ODER-Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish Coalescing Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : Destrukturierende Zuweisung ermöglicht es, die Eigenschaften eines Arrays oder Objekts Variablen zuzuweisen, indem eine Syntax verwendet wird, die Array- oder Objektliteralen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausiert und setzt eine Generatorfunktion fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : An eine andere Generatorfunktion oder ein iterierbares Objekt delegieren.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax ermöglicht es, ein Iterable, wie ein Array oder eine Zeichenkette, dort zu erweitern, wo null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator ermöglicht es, mehrere Ausdrücke in einer einzigen Anweisung auszuwerten und gibt das Ergebnis des letzten Ausdrucks zurück.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
