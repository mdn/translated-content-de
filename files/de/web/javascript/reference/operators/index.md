---
title: Ausdrücke und Operatoren
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Dieses Kapitel dokumentiert alle JavaScript-Sprachoperatoren, Ausdrücke und Schlüsselwörter.

## Ausdrücke und Operatoren nach Kategorie

Für ein alphabetisches Verzeichnis siehe die Seitenleiste links.

### Primäre Ausdrücke

Grundlegende Schlüsselwörter und allgemeine Ausdrücke in JavaScript. Diese Ausdrücke haben die höchste Priorität (höher als [Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : Das `this`-Schlüsselwort bezieht sich auf eine spezielle Eigenschaft eines Ausführungskontextes.
- [Literals](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Grundlegende `null`-, Boolean-, Zahlen- und String-Literale.
- {{jsxref("Array", "[]")}}
  - : Array-Initialisierer/Literalsyntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Objekt-Initialisierer/Literalsyntax.
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
  - : Reguläre Ausdrücke Literalsyntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Template-Literalsyntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Gruppierungsoperator.

### Linke Ausdrücke

Linke Werte sind das Ziel einer Zuweisung.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Mitgliedsoperatoren ermöglichen den Zugriff auf eine Eigenschaft oder Methode eines Objekts (`object.property` und `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Der operatorische Verkettungsoperator gibt `undefined` zurück, anstatt einen Fehler zu verursachen, wenn eine Referenz {{Glossary("Nullish", "nullish")}} ([`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)) ist.
- {{jsxref("new")}}
  - : Der `new`-Operator erstellt eine Instanz eines Konstruktors.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In Konstruktoren bezieht sich `new.target` auf den Konstruktor, der durch {{jsxref("new")}} aufgerufen wurde.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : Ein Objekt, das kontextspezifische Metadaten einem JavaScript-Modul zur Verfügung stellt.
- {{jsxref("Operators/super", "super")}}
  - : Das `super`-Schlüsselwort ruft den Elternkonstruktor auf oder ermöglicht den Zugriff auf Eigenschaften des Elternobjekts.
- {{jsxref("Operators/import", "import()")}}
  - : Die `import()`-Syntax ermöglicht das asynchrone und dynamische Laden eines Moduls in eine potenziell nicht modulare Umgebung.

### Inkrement- und Dekrement-Operatoren

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

- {{jsxref("delete")}}
  - : Der `delete`-Operator löscht eine Eigenschaft eines Objekts.
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
  - : Pausiert und setzt eine asynchrone Funktion fort und wartet auf die Erfüllung/Ablehnung des Versprechens.

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

### Relationsoperatoren

Ein Vergleichsoperator vergleicht seine Operanden und gibt einen booleschen Wert basierend darauf zurück, ob der Vergleich wahr ist.

- {{jsxref("Operators/Less_than", "&lt;")}} (Weniger als)
  - : Weniger-als-Operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Größer als)
  - : Größer-als-Operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Kleiner-gleich-Operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Größer-gleich-Operator.
- {{jsxref("instanceof")}}
  - : Der `instanceof`-Operator bestimmt, ob ein Objekt eine Instanz eines anderen Objekts ist.
- {{jsxref("Operators/in", "in")}}
  - : Der `in`-Operator bestimmt, ob ein Objekt eine gegebene Eigenschaft hat.

> [!NOTE]
> `=>` ist [kein Operator](#what_are_operators), sondern die Notation für [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Gleichheitsoperatoren

Das Ergebnis der Auswertung eines Gleichheitsoperators ist immer vom Typ boolean basierend darauf, ob der Vergleich wahr ist.

- {{jsxref("Operators/Equality", "==")}}
  - : Gleichheitsoperator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Ungleichheitsoperator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strenger Gleichheitsoperator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strenger Ungleichheitsoperator.

### Bitweise Schiebeoperatoren

Operationen, um alle Bits des Operanden zu verschieben.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitweiser Linksverschiebungsoperator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitweiser Rechtsverschiebungsoperator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitweiser unsignierter Rechtsverschiebungsoperator.

### Binäre bitweise Operatoren

Bitweise Operatoren behandeln ihre Operanden als Menge von 32 Bits (Nullen und Einsen) und geben Standard-JavaScript-Numerische Werte zurück.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitweises UND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitweises ODER.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitweises XOR.

### Binäre logische Operatoren

Logische Operatoren implementieren boolesche (logische) Werte und haben ein [Kurzschlussverhalten](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logisches UND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logisches ODER.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish Coalescing Operator.

### Bedingungsoperator (ternär)

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Der bedingte Operator gibt basierend auf dem logischen Wert der Bedingung einen von zwei Werten zurück.

### Zuweisungsoperatoren

Ein Zuweisungsoperator weist den Wert seines rechten Operanden seinem linken Operanden zu.

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
  - : Bitweise UND Zuweisung.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitweise XOR Zuweisung.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitweise OR Zuweisung.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentiationszuweisung.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logische UND Zuweisung.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logische OR Zuweisung.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish Coalescing Zuweisung.
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Destrukturierung ermöglicht es Ihnen, die Eigenschaften eines Arrays oder Objekts Variablen mit einer Syntax zuzuweisen, die Array- oder Objektliternal ähnelt.

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
  - : Pausiert und setzt eine Generatorfunktion fort.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegiert an eine andere Generatorfunktion oder ein iterierbares Objekt.

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Die Spread-Syntax erlaubt es, ein iterierbares Objekt, wie ein Array oder ein String, an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Arrayliterale) erwartet werden. In einem Objektliteral enumeriert die Spread-Syntax die Eigenschaften eines Objekts und fügt die Schlüssel-Wert-Paar dem zu erstellenden Objekt hinzu.

### Komma-Operator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Der Komma-Operator ermöglicht es, mehrere Ausdrücke in einer einzigen Anweisung auszuführen und gibt das Ergebnis des letzten Ausdrucks zurück.

## Was sind Operatoren?

Wie die Sektion [Was sind Anweisungen, Deklarationen und Ausdrücke?](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) erklärt, ist ein Ausdruck ein grundlegender Baustein, der zu einem Wert ausgewertet wird. Anweisungen, Deklarationen und Ausdrücke können alle bestimmte Slots definieren, in denen Ausdrücke akzeptiert werden. Wo ein Ausdruck Slots für weitere verschachtelte Ausdrücke enthält, werden die Teile, die keine Slots sind, als Operatoren bezeichnet.

Zum Beispiel ist die Syntax für einen [Additionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/Addition) `expression + expression` (wenn Sie die Spezifikation lesen, werden die Operanden _AdditiveExpression_ und _MultiplicativeExpression_ genannt, die beide Untergruppen von _Expression_ sind, aber das ist der Mechanismus der Spezifikation zur Definition von [Priorität und Assoziativität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), der für unsere Zwecke irrelevant ist). Abgesehen von den beiden Ausdrucksslots führt der Code nur `+` ein: den _Additionsoperator_. Ähnlich ist die Syntax für einen [yield-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/yield) `yield expression`, sodass `yield` als der Operator bekannt ist. Mit anderen Worten, jeder Operator entspricht einem Ausdruck.

MDN betrachtet auch Ausdrücke ohne Slots wie [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) als Operatoren gemäß der obigen Definition, obwohl wir sie fast immer nur als "Syntax" oder "Ausdruck" bezeichnen.

Ein Ausdruck muss keine feste Anzahl an Slots haben. Zum Beispiel kann der Arrayliteral-Ausdruck `[expression, expression, expression]` eine beliebige Anzahl an Ausdrucksslots haben. Der `[,,]`-Teil könnte als "Operator" bezeichnet werden. MDN vermeidet diese Nutzung, aber Sie können sie in funktionalen Programmiersprachen wie [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html) sehen.

Die Definition von Operatoren wird bei bestimmten anderen Code-Entitäten unschärfer: Was ist, wenn ein Ausdruck einen Slot hat, der kein Ausdruck ist, oder eine Code-Entität kombiniert mit einem Ausdruck macht keinen Ausdruck aus? Bezeichnen wir diese Code-Entität immer noch als Operator?

- Im [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Ausdruck `foo?.bar` ist `foo` ein Ausdruck, aber `bar` muss ein Bezeichner sein und wird nicht zu einem Wert ausgewertet. Betrachten wir `?.` immer noch als Operator?
- Im [Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Ausdruck `arg => body` könnte `body` ein Ausdruck sein (obwohl es auch ein Blockkörper sein kann), und `arg` ist nur eine Argumentliste. Betrachten wir `=>` immer noch als Operator?
- In der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo` ist `foo` ein Ausdruck, aber das Ganze ist kein Ausdruck, weil es nicht zu einem Wert ausgewertet wird—es macht nur in bestimmten anderen Ausdrücken wie Funktionsaufrufen, Array- und Objektliteralen Sinn. Betrachten wir `...` immer noch als Operator?

Der Begriff "Operator" ist in JavaScript nicht präzise definiert, daher gibt MDN keine definitive Antwort. Unser Ansatz ist, all diese Konstrukte unter "Operatoren" zu gruppieren, aber sie formal nicht als Operatoren zu bezeichnen. Viele nützliche Konzepte über Operatoren, wie [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), gelten dennoch für sie, unabhängig von ihrer genauen Natur.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
