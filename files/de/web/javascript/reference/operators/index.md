---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: b251b9bd2932d837806d743051b60aeab778d0f1
---

Dieses Kapitel dokumentiert alle Operatoren, Ausdrücke und Schlüsselwörter der JavaScript-Sprache.

## Ausdrücke und Operatoren nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das Schlüsselwort `this` verweist auf eine spezielle Eigenschaft eines Ausführungskontexts.
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, Boolean-, Zahlen- und String-Literale.
- {{jsxref("Array", "[]")}}
  - : Syntax für Array-Initialisierer und Array-Literale.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Syntax für Objektinitialisierer und Objektliterale.
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
- [Funktionsaufruf](/de/docs/Web/JavaScript/Reference/Operators/Function_call)
  - : Wertet den Rumpf einer Funktion mit den angegebenen Argumenten aus und gibt das Ergebnis zurück.
- {{jsxref("new")}}
  - : Der Operator `new` erzeugt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren verweist `new.target` auf den Konstruktor, der durch {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das einem JavaScript-Modul kontextspezifische Metadaten bereitstellt.
- {{jsxref("Operators/super", "super")}}
  - : Das Schlüsselwort `super` ruft den Konstruktor der übergeordneten Klasse auf oder ermöglicht den Zugriff auf Eigenschaften des übergeordneten Objekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die Syntax `import()` ermöglicht es, ein Modul asynchron und dynamisch in eine Umgebung zu laden, die möglicherweise keine Modulumgebung ist.
- {{jsxref("Operators/import/defer", "import.defer()")}}
  - : Die Syntax `import.defer()` lädt ein Modul dynamisch und verzögert seine synchrone Auswertung, bis auf Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
- {{jsxref("Operators/import/source", "import.source()")}}
  - : Die Syntax `import.source()` liefert ein Objekt, das den kompilierten Quellcode des Moduls repräsentiert, ohne dessen Abhängigkeiten zu laden, es zu verknüpfen oder auszuwerten.

### Inkrement und Dekrement

Operatoren für Postfix- und Präfix-Inkrement sowie Postfix- und Präfix-Dekrement.

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
  - : Bitweiser NOT-Operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logischer NOT-Operator.
- {{jsxref("Operators/await", "await")}}
  - : Unterbricht eine asynchrone Funktion, wartet auf die Erfüllung oder Zurückweisung eines Promises und setzt die Funktion anschließend fort.

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

### Relationale Operatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert zurück, der angibt, ob der Vergleich zutrifft.

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

Die Auswertung eines Gleichheitsoperators ergibt stets einen booleschen Wert, der angibt, ob der Vergleich zutrifft.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strikter Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strikter Ungleichheitsoperator.

### Bitweise Verschiebungsoperatoren

Operationen zum Verschieben aller Bits eines Operanden.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser vorzeichenloser Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als eine Folge von Bits (Nullen und Einsen), verwenden bei Zahlen 32 Bits und geben eine Zahl oder einen BigInt-Wert zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises AND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren verarbeiten boolesche (logische) Werte und weisen ein [Kurzschlussverhalten](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) auf.

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

Ein Zuweisungsoperator weist seinem linken Operanden einen Wert zu, der vom Wert seines rechten Operanden abhängt.

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
  - : Mit Destrukturierung können Sie Eigenschaften eines Arrays oder Objekts Variablen zuweisen. Dabei verwenden Sie eine Syntax, die Array- oder Objektliteralen ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Unterbricht eine Generatorfunktion und setzt sie später fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax ermöglicht es, ein iterierbares Objekt, etwa ein Array oder einen String, an Stellen zu entfalten, an denen null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem neu erstellten Objekt hinzu.

### Kommaoperator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Kommaoperator ermöglicht es, mehrere Ausdrücke in einer einzigen Anweisung auszuwerten, und gibt das Ergebnis des letzten Ausdrucks zurück.

## Was sind Operatoren?

Wie der Abschnitt [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erläutert, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können jeweils bestimmte Stellen definieren, an denen Ausdrücke zulässig sind. Enthält ein Ausdruck solche Stellen für weitere verschachtelte Ausdrücke, werden die Teile, die keine solchen Stellen sind, als Operatoren bezeichnet.

Die Syntax eines [Additionsausdrucks](/de/docs/Web/JavaScript/Reference/Operators/Addition) lautet beispielsweise `expression + expression` (in der Spezifikation heißen die Operanden _AdditiveExpression_ und _MultiplicativeExpression_; beide sind Teilmengen von _Expression_. Diese Bezeichnungen dienen dort jedoch dazu, [Priorität und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) festzulegen, und sind für unsere Zwecke unerheblich). Abgesehen von den beiden Stellen für Ausdrücke besteht das eingeführte Codeelement nur aus `+`: dem _Additionsoperator_. Ebenso lautet die Syntax eines [yield-Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/yield) `yield expression`; daher wird `yield` als Operator bezeichnet. Mit anderen Worten: Jedem Operator entspricht ein Ausdruck.

MDN betrachtet gemäß der obigen Definition auch Ausdrücke ohne solche Stellen, etwa [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), als Operatoren. Allerdings bezeichnen wir sie fast immer einfach als „Syntax“ oder „Ausdruck“.

Ein Ausdruck muss keine feste Anzahl von Stellen für weitere Ausdrücke haben. Beispielsweise kann ein Array-Literal-Ausdruck wie `[expression, expression, expression]` beliebig viele solcher Stellen enthalten. Der Teil `[,,]` könnte als „Operator“ bezeichnet werden. MDN vermeidet diese Verwendung, doch in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) kann sie Ihnen begegnen.

Bei bestimmten anderen Codeelementen wird die Definition von Operatoren unscharf: Was ist, wenn ein Ausdruck eine Stelle enthält, die selbst kein Ausdruck ist, oder wenn ein Codeelement zusammen mit einem Ausdruck keinen Ausdruck ergibt? Bezeichnen wir dieses Codeelement dann weiterhin als Operator?

- Im Ausdruck `foo?.bar` mit [optionaler Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist `foo` ein Ausdruck. `bar` muss jedoch ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` trotzdem als Operator?
- Im [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body` kann `body` ein Ausdruck sein (aber auch ein Anweisungsblock), während `arg` lediglich eine Argumentliste ist. Betrachten wir `=>` trotzdem als Operator?
- In der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, aber das Ganze ist kein Ausdruck, weil es nicht zu einem Wert ausgewertet wird. Es ist nur innerhalb bestimmter anderer Ausdrücke sinnvoll, etwa bei Funktionsaufrufen sowie in Array- und Objektliteralen. Betrachten wir `...` trotzdem als Operator?

Der Begriff „Operator“ ist in JavaScript nicht genau definiert. Daher gibt MDN keine abschließende Antwort. Wir fassen alle diese Konstrukte unter „Operatoren“ zusammen, vermeiden es aber, sie ausdrücklich als Operatoren zu bezeichnen. Viele wichtige Konzepte im Zusammenhang mit Operatoren, etwa die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten unabhängig von ihrer genauen Einordnung auch für diese Konstrukte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
