---
title: <calc-sum>
slug: Web/CSS/calc-sum
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<calc-sum>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Ausdruck, der eine Berechnung in einer der [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) ausführt. Der Ausdruck führt eine grundlegende arithmetische Operation der Addition oder Subtraktion zwischen zwei Werten durch.

## Syntax

Der `<calc-sum>`-Typ definiert zwei numerische Werte und einen der folgenden [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) dazwischen.

- `+`

  - : Addiert zwei Zahlen miteinander.

- `-`

  - : Subtrahiert die rechte Zahl von der linken.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Die Operanden des Ausdrucks können jeden Wert im {{cssxref("&lt;length&gt;")}}-Syntaxformat haben. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Die Typen der beiden Operanden müssen übereinstimmen. Bei Längen kann `0` nicht als `0px` (oder eine andere Längeneinheit) interpretiert werden. Stattdessen muss eine explizite Einheit angegeben werden: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist. Prozentwerttypen werden basierend auf dem Kontext aufgelöst. Beispielsweise ist `margin-top: calc(50% + 20px);` gültig, da `margin-top` Prozentsätze in Längen auflöst.

Das Einbeziehen von [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) in `calc-sum`-Ausdrücken ist ebenfalls erlaubt. Der folgende Code `calc(10px + var(--variable))` ist ein gültiger Ausdruck.

Die Operatoren `+` und `-` **müssen von {{Glossary("whitespace", "Leerzeichen")}} umgeben sein**. Zum Beispiel wird `calc(50% -8px)` als "ein Prozentsatz, gefolgt von einer negativen Länge" geparst — was ein ungültiger Ausdruck ist — während `calc(50% - 8px)` als "ein Prozentsatz, gefolgt von einem Subtraktionsoperator und einer Länge" angesehen wird. Ebenso wird `calc(8px + -50%)` als "eine Länge, gefolgt von einem Additionsoperator und einem negativen Prozentsatz" behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
