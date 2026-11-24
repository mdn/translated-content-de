---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Dieses Kapitel dokumentiert alle Operatoren, Ausdrücke und Schlüsselwörter der JavaScript-Sprache.

## Ausdrücke und Operatoren nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das Schlüsselwort `this` verweist auf eine besondere Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolesche, Zahlen- und String-Literale.
- {{jsxref("Operators/Array_initializer", "[]")}}
  - : Syntax für Array-Initialisierer und Array-Literale.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Syntax für Objekt-Initialisierer und Objekt-Literale.
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
  - : Syntax für Literale regulärer Ausdrücke.
- {{jsxref("Template_literals", "`string`")}}
  - : Syntax für Template-Literale.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Ausdrücke auf der linken Seite

Werte auf der linken Seite sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member-Operatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der Operator für optionales Verketten gibt `undefined` zurück, statt einen Fehler auszulösen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- [Funktionsaufruf](/de/docs/Web/JavaScript/Reference/Operators/Function_call)
  - : Wertet den Körper einer Funktion mit den angegebenen Argumenten aus und gibt das Ergebnis zurück.
- {{jsxref("new")}}
  - : Der Operator `new` erzeugt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der mit {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das einem JavaScript-Modul kontextspezifische Metadaten bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den Konstruktor der Elternklasse auf oder ermöglicht den Zugriff auf Eigenschaften des Elternobjekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die Syntax `import()` ermöglicht es, ein Modul asynchron und dynamisch in einer Umgebung zu laden, die möglicherweise keine Modulumgebung ist.
- {{jsxref("Operators/import/defer", "import.defer()")}}
  - : Die Syntax `import.defer()` lädt ein Modul dynamisch und verschiebt seine synchrone Auswertung, bis auf Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
- {{jsxref("Operators/import/source", "import.source()")}}
  - : Die Syntax `import.source()` liefert ein Objekt, das den kompilierten Quellcode des Moduls repräsentiert, ohne dessen Abhängigkeiten zu laden, das Modul zu verknüpfen oder es auszuwerten.

### Inkrement und Dekrement

Postfix- und Präfixoperatoren für Inkrement und Dekrement.

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
  - : Der Operator `typeof` ermittelt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plusoperator konvertiert seinen Operanden in den Typ Number.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator konvertiert seinen Operanden in einen numerischen Wert und negiert ihn anschließend.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Hält eine asynchrone Funktion an, setzt sie später fort und wartet darauf, dass das Promise erfüllt oder abgelehnt wird.

### Arithmetische Operatoren

Arithmetische Operatoren verwenden numerische Werte (Literale oder Variablen) als Operanden und geben einen einzelnen numerischen Wert zurück.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Potenzierungsoperator.
- {{jsxref("Operators/Multiplication", "*")}}
  - : Multiplikationsoperator.
- {{jsxref("Operators/Division", "/")}}
  - : Divisionsoperator.
- {{jsxref("Operators/Remainder", "%")}}
  - : Restwertoperator.
- {{jsxref("Operators/Addition", "+")}} (Plus)
  - : Additionsoperator.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Subtraktionsoperator.

### Vergleichsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, der davon abhängt, ob der Vergleich zutrifft.

- {{jsxref("Operators/Less_than", "&lt;")}} (Kleiner als)
  - : Kleiner-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-oder-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-oder-gleich-Operator.
- {{jsxref("instanceof")}}
  - : Der Operator `instanceof` ermittelt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der Operator `in` ermittelt, ob ein Objekt eine bestimmte Eigenschaft besitzt.

> [!NOTE]
> `=>` ist [kein Operator](#what_are_operators), sondern die Schreibweise für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Die Auswertung eines Gleichheitsoperators liefert stets einen booleschen Wert, der davon abhängt, ob der Vergleich zutrifft.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Verschiebeoperatoren

Operationen zum Verschieben aller Bits eines Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebeoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebeoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser vorzeichenloser Rechtsverschiebeoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Folge von Bits (Nullen und Einsen), wobei sie für Zahlen 32 Bit verwenden, und geben eine Zahl oder einen BigInt-Wert zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises AND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren verarbeiten boolesche (logische) Werte und verwenden [Kurzschlussauswertung](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches AND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches OR.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish-Coalescing-Operator.

### Bedingter (ternärer) Operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der bedingte Operator gibt abhängig vom logischen Wert der Bedingung einen von zwei Werten zurück.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weist seinem linken Operanden einen Wert zu, der auf dem Wert seines rechten Operanden basiert.

- {{jsxref("Operators/Assignment", "=")}}
  - : Zuweisungsoperator.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Multiplikationszuweisung.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Divisionszuweisung.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Restwertzuweisung.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Additionszuweisung.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Subtraktionszuweisung.
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Linksverschiebezuweisung.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Rechtsverschiebezuweisung.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Vorzeichenlose Rechtsverschiebezuweisung.
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
  - : Destrukturierung ermöglicht es Ihnen, Eigenschaften eines Arrays oder Objekts Variablen zuzuweisen. Dazu wird eine Syntax verwendet, die Array- oder Objektliteralen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Hält eine Generatorfunktion an und setzt sie später fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Mit der Spread-Syntax lässt sich ein iterierbarer Wert, beispielsweise ein Array oder String, an Stellen aufspreizen, an denen null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem neu erstellten Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator ermöglicht die Auswertung mehrerer Ausdrücke in einer einzigen Anweisung und gibt das Ergebnis des letzten Ausdrucks zurück.

## Was sind Operatoren?

Wie der Abschnitt [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erläutert, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können jeweils bestimmte Stellen festlegen, an denen Ausdrücke zulässig sind. Wenn ein Ausdruck solche Stellen für weitere verschachtelte Ausdrücke enthält, werden die Teile, die keine solchen Stellen sind, als Operatoren bezeichnet.

Die Syntax eines [Additionsausdrucks](/de/docs/Web/JavaScript/Reference/Operators/Addition) lautet beispielsweise `expression + expression`. In der Spezifikation heißen die Operanden _AdditiveExpression_ und _MultiplicativeExpression_. Beide sind Teilmengen von _Expression_; diese Unterscheidung dient dort jedoch lediglich dazu, [Priorität und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) festzulegen, und ist für unsere Zwecke unerheblich. Abgesehen von den beiden Stellen für Ausdrücke kommt als Codebestandteil nur `+` hinzu: der _Additionsoperator_. Entsprechend lautet die Syntax eines [yield-Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/yield) `yield expression`, weshalb `yield` als Operator bezeichnet wird. Mit anderen Worten: Jedem Operator entspricht ein Ausdruck.

MDN betrachtet nach der obigen Definition auch Ausdrücke ohne Stellen für weitere Ausdrücke, etwa [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), als Operatoren. Meist bezeichnen wir sie allerdings einfach als „Syntax“ oder „Ausdruck“.

Ein Ausdruck muss nicht eine feste Anzahl solcher Stellen enthalten. Der Array-Literalausdruck `[expression, expression, expression]` kann beispielsweise beliebig viele Ausdrücke aufnehmen. Der Teil `[,,]` könnte als „Operator“ bezeichnet werden. MDN vermeidet diese Verwendung, Sie können ihr jedoch in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) begegnen.

Bei bestimmten anderen Codebestandteilen wird die Definition von Operatoren weniger eindeutig: Was ist, wenn ein Ausdruck eine Stelle enthält, an der kein Ausdruck steht, oder wenn ein Codebestandteil zusammen mit einem Ausdruck keinen Ausdruck ergibt? Bezeichnen wir diesen Codebestandteil dann trotzdem als Operator?

- Im Ausdruck `foo?.bar` mit [optionalem Verketten](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist `foo` ein Ausdruck, aber `bar` muss ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` dennoch als Operator?
- Im [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body` kann `body` ein Ausdruck sein (aber auch ein Anweisungsblock), während `arg` lediglich eine Argumentliste ist. Betrachten wir `=>` dennoch als Operator?
- In der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, das gesamte Konstrukt jedoch nicht: Es wird nicht zu einem Wert ausgewertet, sondern ist nur innerhalb bestimmter anderer Ausdrücke wie Funktionsaufrufen, Array-Literalen und Objekt-Literalen sinnvoll. Betrachten wir `...` dennoch als Operator?

Der Begriff „Operator“ ist in JavaScript nicht präzise definiert. Daher gibt MDN keine abschließende Antwort. Wir fassen alle diese Konstrukte unter „Operatoren“ zusammen, vermeiden es aber, sie ausdrücklich als Operatoren zu bezeichnen. Viele nützliche Konzepte im Zusammenhang mit Operatoren, etwa die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten unabhängig von ihrer genauen Einordnung auch für diese Konstrukte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
