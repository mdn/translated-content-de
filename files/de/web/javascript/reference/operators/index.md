---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: f693fdeb65be430fdf3b7fc5cdf44a10a13f2bbf
---

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, -ausdrücke und -Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Präzedenz (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das Schlüsselwort `this` verweist auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, Boolean-, Zahlen- und String-Literale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierer-/Literal-Syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierer-/Literal-Syntax.
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
  - : Syntax für reguläre Ausdrucksliterale.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literal-Syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Ausdrücke auf der linken Seite

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member-Operatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der optionale Verkettungsoperator gibt `undefined` zurück, statt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("new")}}
  - : Der Operator `new` erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der durch {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten für ein JavaScript-Modul verfügbar macht.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den übergeordneten Konstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die Syntax `import()` ermöglicht das asynchrone und dynamische Laden eines Moduls in eine potenziell nicht modulare Umgebung.
- {{jsxref("Operators/import/defer", "import.defer()")}}
  - : Die Syntax `import.defer()` lädt ein Modul dynamisch und verschiebt die synchrone Auswertung, bis auf die Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
- {{jsxref("Operators/import/source", "import.source()")}}
  - : Die Syntax `import.source()` führt zu einem Objekt, das den kompilierten Quellcode des Moduls darstellt, ohne dessen Abhängigkeiten zu laden, es zu verknüpfen oder es auszuwerten.

### Inkrement und Dekrement

Postfix-/Präfix-Inkrement- und Postfix-/Präfix-Dekrementoperatoren.

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
  - : Der Operator `delete` löscht eine Eigenschaft aus einem Objekt.
- {{jsxref("Operators/void", "void")}}
  - : Der Operator `void` wertet einen Ausdruck aus und verwirft dessen Rückgabewert.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Der Operator `typeof` bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plusoperator konvertiert seinen Operanden in den Typ Number.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in den Typ Number und negiert ihn anschließend.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Hält eine asynchrone Funktion an und setzt sie fort und wartet auf die Erfüllung/Ablehnung des Promise.

### Arithmetische Operatoren

Arithmetische Operatoren nehmen numerische Werte (entweder Literale oder Variablen) als ihre Operanden und geben einen einzelnen numerischen Wert zurück.

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

Ein Vergleichsoperator vergleicht seine Operanden und gibt abhängig davon, ob der Vergleich wahr ist, einen Boolean-Wert zurück.

- {{jsxref("Operators/Less_than", "&lt;")}} (Kleiner als)
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-gleich-Operator.
- {{jsxref("instanceof")}}
  - : Der Operator `instanceof` bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der Operator `in` bestimmt, ob ein Objekt eine bestimmte Eigenschaft hat.

> [!NOTE]
> `=>` ist [kein Operator](#what_are_operators), sondern die Notation für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitsoperators hat immer den Typ Boolean, abhängig davon, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Schiebeoperatoren

Operationen zum Verschieben aller Bits des Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser vorzeichenloser Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als Satz von 32 Bits (Nullen und Einsen) und geben standardmäßige numerische JavaScript-Werte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises AND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren implementieren Boolean-Werte (logische Werte) und weisen ein [Kurzschlussverhalten](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) auf.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches AND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches OR.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish-Coalescing-Operator.

### Bedingungsoperator (ternär)

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der Bedingungsoperator gibt abhängig vom logischen Wert der Bedingung einen von zwei Werten zurück.

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
  - : Destructuring ermöglicht es Ihnen, die Eigenschaften eines Arrays oder Objekts mithilfe einer Syntax, die Array- oder Objektliteralen ähnelt, Variablen zuzuweisen.

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

Wie im Abschnitt [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erläutert wird, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können jeweils bestimmte Stellen definieren, an denen Ausdrücke akzeptiert werden. Wenn ein Ausdruck Stellen für weitere verschachtelte Ausdrücke enthält, werden die Teile, die keine solchen Stellen sind, als Operatoren bezeichnet.

Beispielsweise lautet die Syntax für einen [Additions](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Ausdruck `expression + expression` (wenn Sie die Spezifikation lesen, werden die Operanden _AdditiveExpression_ und _MultiplicativeExpression_ genannt, die beide Teilmengen von _Expression_ sind; dies ist jedoch der Mechanismus der Spezifikation zur Definition von [Präzedenz und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) und für unsere Zwecke nicht relevant). Abgesehen von den beiden Ausdrucksstellen ist die eingeführte Codeeinheit lediglich `+`: der _Additionsoperator_. Ebenso lautet die Syntax für einen [yield](/de/docs/Web/JavaScript/Reference/Operators/yield)-Ausdruck `yield expression`, daher wird `yield` als Operator bezeichnet. Mit anderen Worten: Jeder Operator entspricht einem Ausdruck.

MDN betrachtet gemäß der obigen Definition auch Ausdrücke ohne Stellen wie [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als Operatoren, obwohl wir sie fast immer einfach als „Syntax“ oder „Ausdruck“ bezeichnen.

Ein Ausdruck muss keine feste Anzahl von Stellen annehmen. Beispielsweise kann der Array-Literal-Ausdruck `[expression, expression, expression]` eine beliebige Anzahl von Ausdrucksstellen annehmen. Der Teil `[,,]` könnte als „Operator“ bezeichnet werden. MDN vermeidet diese Verwendung, aber Sie könnten ihr in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) begegnen.

Die Definition von Operatoren wird bei bestimmten anderen Codeeinheiten unschärfer: Was ist, wenn ein Ausdruck eine Stelle enthält, die kein Ausdruck ist, oder wenn eine mit einem Ausdruck kombinierte Codeeinheit keinen Ausdruck ergibt? Bezeichnen wir diese Codeeinheit dann noch als Operator?

- Im Ausdruck für [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `foo?.bar` ist `foo` ein Ausdruck, aber `bar` muss ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` weiterhin als Operator?
- Im Ausdruck für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body` kann `body` ein Ausdruck sein (obwohl es auch ein Blockrumpf sein kann), und `arg` ist lediglich eine Argumentliste. Betrachten wir `=>` weiterhin als Operator?
- In der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, aber das Ganze ist kein Ausdruck, da es nicht zu einem Wert ausgewertet wird – es ergibt nur in bestimmten anderen Ausdrücken wie Funktionsaufrufen, Array-Literalen und Objektliteralen Sinn. Betrachten wir `...` weiterhin als Operator?

Der Begriff „Operator“ ist in JavaScript nicht präzise definiert, daher gibt MDN keine endgültige Antwort. Unser Ansatz besteht darin, all diese Konstrukte unter „Operatoren“ zusammenzufassen, aber zu vermeiden, sie formell als Operatoren zu bezeichnen. Viele nützliche Konzepte zu Operatoren, etwa die [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten unabhängig von ihrer genauen Natur weiterhin für sie.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
