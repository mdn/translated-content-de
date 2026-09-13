---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

In diesem Kapitel werden alle JavaScript-Sprachoperatoren, -ausdrücke und -schlüsselwörter dokumentiert.

## Ausdrücke und Operatoren nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste auf der linken Seite.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Präzedenz (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das Schlüsselwort `this` verweist auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolesche, Zahlen- und String-Literale.
- {{jsxref("Array", "[]")}}
  - : Syntax für Array-Initialisierung/-Literale.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Syntax für Objekt-Initialisierung/-Literale.
- {{jsxref("Operators/function", "function")}}
  - : Das Schlüsselwort `function` definiert einen Funktionsausdruck.
- {{jsxref("Operators/class", "class")}}
  - : Das Schlüsselwort `class` definiert einen Klassenausdruck.
- {{jsxref("Operators/function*", "function*")}}
  - : Das Schlüsselwort `function*` definiert einen Generatorfunktionsausdruck.
- {{jsxref("Operators/async_function", "async function")}}
  - : `async function` definiert einen asynchronen Funktionsausdruck.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Die Schlüsselwörter `async function*` definieren einen asynchronen Generatorfunktionsausdruck.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Syntax für Reguläre-Ausdrücke-Literale.
- {{jsxref("Template_literals", "`string`")}}
  - : Syntax für Template-Literale.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Ausdrücke auf der linken Seite

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Eigenschaftszugreifer", "", 1)}}
  - : Member-Operatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Verkettungsoperator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)) ist.
- {{jsxref("new")}}
  - : Der Operator `new` erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der durch {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten für ein JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den übergeordneten Konstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die Syntax `import()` ermöglicht das asynchrone und dynamische Laden eines Moduls in eine potenziell nicht modulare Umgebung.
- {{jsxref("Operators/import/source", "import.source()")}}
  - : Die Syntax `import.source()` führt zu einem Objekt, das den kompilierten Quellcode des Moduls darstellt, ohne dessen Abhängigkeiten zu laden, es zu verknüpfen oder auszuwerten.

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

- {{jsxref("delete")}}
  - : Der Operator `delete` löscht eine Eigenschaft aus einem Objekt.
- {{jsxref("Operators/void", "void")}}
  - : Der Operator `void` wertet einen Ausdruck aus und verwirft seinen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der Operator `typeof` bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plus-Operator konvertiert seinen Operanden in den Typ Number.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in den Typ Number und negiert ihn anschließend.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Hält eine asynchrone Funktion an und setzt sie fort und wartet auf die Erfüllung/Ablehnung des Promise.

### Arithmetische Operatoren

Arithmetische Operatoren verwenden numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzelnen numerischen Wert zurück.

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

### Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, der darauf basiert, ob der Vergleich wahr ist.

- {{jsxref("Operators/Less_than", "&lt;")}} (Kleiner als)
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-oder-gleich-Operator.
- {{jsxref("instanceof")}}
  - : Der Operator `instanceof` bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der Operator `in` bestimmt, ob ein Objekt eine bestimmte Eigenschaft hat.

> [!NOTE]
> `=>` ist [kein Operator](#what_are_operators), sondern die Notation für [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitsoperators ist immer vom Typ boolean und hängt davon ab, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Verschiebungsoperatoren

Operationen zum Verschieben aller Bits des Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser vorzeichenloser Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als einen Satz aus 32 Bits (Nullen und Einsen) und geben standardmäßige numerische JavaScript-Werte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises AND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren implementieren boolesche (logische) Werte und weisen [Kurzschlussverhalten](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) auf.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches AND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches OR.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish-Coalescing-Operator.

### Bedingter (ternärer) Operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der bedingte Operator gibt basierend auf dem logischen Wert der Bedingung einen von zwei Werten zurück.

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
  - : Vorzeichenlose Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitweise AND-Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweise XOR-Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweise OR-Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Potenzierungszuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logische AND-Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logische OR-Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish-Coalescing-Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Destrukturierung ermöglicht es Ihnen, die Eigenschaften eines Arrays oder Objekts mithilfe einer Syntax, die Array- oder Objektliteralen ähnelt, Variablen zuzuweisen.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Hält eine Generatorfunktion an und setzt sie fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax ermöglicht es, ein iterierbares Objekt wie ein Array oder einen String an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem erstellten Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator ermöglicht die Auswertung mehrerer Ausdrücke in einer einzelnen Anweisung und gibt das Ergebnis des letzten Ausdrucks zurück.

## Was sind Operatoren?

Wie im Abschnitt [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erklärt wird, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können jeweils spezifische Positionen definieren, an denen Ausdrücke akzeptiert werden. Wenn ein Ausdruck Positionen für weitere verschachtelte Ausdrücke enthält, werden die Teile, die keine Positionen sind, als Operatoren bezeichnet.

Beispielsweise lautet die Syntax für einen [Additionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Addition) `expression + expression` (wenn Sie die Spezifikation lesen, werden die Operanden _AdditiveExpression_ und _MultiplicativeExpression_ genannt, die beide Teilmengen von _Expression_ sind; dies ist jedoch der Mechanismus der Spezifikation zur Definition von [Präzedenz und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und für unsere Zwecke nicht relevant). Abgesehen von den beiden Ausdruckspositionen ist die eingeführte Codeeinheit nur `+`: der _Additionsoperator_. Ebenso lautet die Syntax für einen [yield]-Ausdruck(/de/docs/Web/JavaScript/Reference/Operators/yield) `yield expression`, daher wird `yield` als Operator bezeichnet. Mit anderen Worten entspricht jeder Operator einem Ausdruck.

MDN betrachtet gemäß der obigen Definition auch Ausdrücke ohne Positionen wie [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als Operatoren, obwohl wir sie fast immer lediglich als „Syntax“ oder „Ausdruck“ bezeichnen.

Ein Ausdruck muss keine feste Anzahl von Positionen annehmen. Beispielsweise kann der Array-Literalausdruck `[expression, expression, expression]` eine beliebige Anzahl von Ausdruckspositionen annehmen. Der Teil `[,,]` könnte als „Operator“ bezeichnet werden. MDN vermeidet diese Verwendung, aber Sie können ihr in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) begegnen.

Die Definition von Operatoren wird bei bestimmten anderen Codeeinheiten unschärfer: Was ist, wenn ein Ausdruck eine Position enthält, die kein Ausdruck ist, oder eine mit einem Ausdruck kombinierte Codeeinheit keinen Ausdruck ergibt? Bezeichnen wir diese Codeeinheit weiterhin als Operator?

- Im Ausdruck für [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `foo?.bar` ist `foo` ein Ausdruck, aber `bar` muss ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` weiterhin als Operator?
- Im Ausdruck für eine [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body` könnte `body` ein Ausdruck sein (obwohl es auch ein Blockrumpf sein kann), und `arg` ist lediglich eine Argumentliste. Betrachten wir `=>` weiterhin als Operator?
- In der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, aber das Ganze ist kein Ausdruck, weil es nicht zu einem Wert ausgewertet wird – es ist nur in bestimmten anderen Ausdrücken wie Funktionsaufrufen, Array-Literalen und Objektliteralen sinnvoll. Betrachten wir `...` weiterhin als Operator?

Der Begriff „Operator“ ist in JavaScript nicht präzise definiert, daher gibt MDN keine endgültige Antwort. Unser Ansatz besteht darin, all diese Konstrukte unter „Operatoren“ zu gruppieren, jedoch zu vermeiden, sie formell als Operatoren zu bezeichnen. Viele nützliche Konzepte zu Operatoren, wie etwa die [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten unabhängig von ihrer genauen Natur weiterhin für sie.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
