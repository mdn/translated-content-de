---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Dieses Kapitel dokumentiert alle Operatoren, Ausdrücke und Schlüsselwörter der JavaScript-Sprache.

## Ausdrücke und Operatoren nach Kategorien

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das Schlüsselwort `this` verweist auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, boolesche, Zahlen- und Zeichenfolgenliterale.
- {{jsxref("Array", "[]")}}
  - : Syntax für Array-Initialisierer und -Literale.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Syntax für Objektinitialisierer und -Literale.
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

Ausdrücke auf der linken Seite sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member-Operatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der Operator für optionale Verkettung gibt `undefined` zurück, statt einen Fehler auszulösen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ist ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("new")}}
  - : Der Operator `new` erzeugt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der mit {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten für ein JavaScript-Modul bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den Konstruktor der übergeordneten Klasse auf oder ermöglicht den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die Syntax `import()` ermöglicht es, ein Modul asynchron und dynamisch in eine Umgebung zu laden, die möglicherweise keine Modulumgebung ist.
- {{jsxref("Operators/import/defer", "import.defer()")}}
  - : Die Syntax `import.defer()` lädt ein Modul dynamisch und verschiebt die synchrone Auswertung, bis auf Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
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
  - : Der Operator `typeof` bestimmt den Typ eines gegebenen Objekts.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : Der unäre Plusoperator wandelt seinen Operanden in den Typ Number um.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : Der unäre Negationsoperator wandelt seinen Operanden in einen numerischen Wert um und negiert ihn anschließend.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitweiser NICHT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NICHT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Pausiert eine asynchrone Funktion, wartet auf die Erfüllung oder Ablehnung des Promise und setzt die Funktion anschließend fort.

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

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, je nachdem, ob der Vergleich zutrifft.

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
  - : Der Operator `in` bestimmt, ob ein Objekt eine bestimmte Eigenschaft besitzt.

> [!NOTE]
> `=>` ist [kein Operator](#what_are_operators), sondern die Schreibweise für [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Die Auswertung eines Gleichheitsoperators ergibt stets einen booleschen Wert, der davon abhängt, ob der Vergleich zutrifft.

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

Bitweise Operatoren behandeln ihre Operanden als eine Folge von Bits (Nullen und Einsen), wobei sie für Zahlen 32 Bits verwenden, und geben eine Zahl oder einen BigInt-Wert zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises exklusives ODER.

### Binäre logische Operatoren

Logische Operatoren verarbeiten boolesche (logische) Werte und verwenden eine [Kurzschlussauswertung](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches ODER.
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
  - : Linksverschiebungszuweisung.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Rechtsverschiebungszuweisung.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Vorzeichenlose Rechtsverschiebungszuweisung.
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
  - : Nullish-Coalescing-Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Mit Destrukturierung können Sie Eigenschaften eines Arrays oder Objekts Variablen zuweisen. Dabei wird eine Syntax verwendet, die Array- oder Objektliteralen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausiert eine Generatorfunktion und setzt sie wieder fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Mit der Spread-Syntax kann ein iterierbares Objekt, etwa ein Array oder eine Zeichenfolge, an Stellen expandiert werden, an denen null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem zu erstellenden Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator ermöglicht es, mehrere Ausdrücke in einer einzigen Anweisung auszuwerten, und gibt das Ergebnis des letzten Ausdrucks zurück.

## Was sind Operatoren?

Wie im Abschnitt [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erläutert, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können jeweils bestimmte Stellen definieren, an denen Ausdrücke zulässig sind. Wenn ein Ausdruck Stellen für weitere, verschachtelte Ausdrücke enthält, werden die Teile, die keine solchen Stellen sind, als Operatoren bezeichnet.

Die Syntax für einen [Additionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Addition) lautet beispielsweise `expression + expression` (in der Spezifikation heißen die Operanden _AdditiveExpression_ und _MultiplicativeExpression_. Beide sind Teilmengen von _Expression_; dies ist jedoch lediglich der Mechanismus, mit dem die Spezifikation [Priorität und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) definiert, und für unsere Zwecke unerheblich). Abgesehen von den beiden Stellen für Ausdrücke besteht das eingeführte Codeelement nur aus `+`: dem _Additionsoperator_. Entsprechend lautet die Syntax eines [yield-Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/yield) `yield expression`, weshalb `yield` als Operator bezeichnet wird. Mit anderen Worten: Jedem Operator entspricht ein Ausdruck.

MDN betrachtet gemäß der obigen Definition auch Ausdrücke ohne Stellen für weitere Ausdrücke, etwa [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), als Operatoren. Allerdings bezeichnen wir sie fast immer einfach als „Syntax“ oder „Ausdruck“.

Ein Ausdruck muss keine feste Anzahl solcher Stellen enthalten. Beispielsweise kann der Array-Literalausdruck `[expression, expression, expression]` eine beliebige Anzahl von Stellen für Ausdrücke enthalten. Der Teil `[,,]` könnte als „Operator“ bezeichnet werden. MDN vermeidet diese Verwendung, sie kann Ihnen jedoch in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) begegnen.

Bei bestimmten anderen Codeelementen wird die Definition von Operatoren unschärfer: Was ist, wenn ein Ausdruck eine Stelle enthält, die selbst kein Ausdruck ist, oder wenn ein Codeelement zusammen mit einem Ausdruck keinen Ausdruck ergibt? Bezeichnen wir dieses Codeelement dann weiterhin als Operator?

- Im Ausdruck `foo?.bar` mit [optionaler Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist `foo` ein Ausdruck, aber `bar` muss ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` trotzdem als Operator?
- Im [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body` kann `body` ein Ausdruck sein (aber auch ein Block), während `arg` lediglich eine Argumentliste ist. Betrachten wir `=>` trotzdem als Operator?
- Bei der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, aber das Ganze ist kein Ausdruck, da es nicht zu einem Wert ausgewertet wird. Es ist nur innerhalb bestimmter anderer Ausdrücke sinnvoll, etwa bei Funktionsaufrufen sowie in Array- und Objektliteralen. Betrachten wir `...` trotzdem als Operator?

Der Begriff „Operator“ ist in JavaScript nicht genau definiert, daher gibt MDN keine endgültige Antwort. Wir fassen all diese Konstrukte unter „Operatoren“ zusammen, vermeiden es aber, sie ausdrücklich als Operatoren zu bezeichnen. Viele nützliche Konzepte für Operatoren, etwa die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten unabhängig von ihrer genauen Einordnung auch für diese Konstrukte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
