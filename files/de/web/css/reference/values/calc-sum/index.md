---
title: <calc-sum>
slug: Web/CSS/Reference/Values/calc-sum
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<calc-sum>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Ausdruck, der eine Berechnung in einer beliebigen [CSS-Mathematikfunktion](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) durchführt. Der Ausdruck führt eine grundlegende arithmetische Operation der Addition und Subtraktion zwischen zwei Werten aus.

## Syntax

Der `<calc-sum>` Typ definiert zwei numerische Werte und einen der folgenden [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) zwischen ihnen.

- `+`
  - : Addiert zwei Zahlen.

- `-`
  - : Subtrahiert die rechte Zahl von der linken.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Die Operanden im Ausdruck können jeden Wert im {{cssxref("&lt;length&gt;")}}-Syntaxformat annehmen. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Die Typen der beiden Operanden müssen übereinstimmen. Bei Längenangaben können Sie nicht `0` verwenden, um `0px` (oder eine andere Längeneinheit) zu bedeuten. Stattdessen müssen Sie eine explizite Einheit hinzufügen: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist. Prozentwerttypen werden basierend auf dem Kontext aufgelöst. Zum Beispiel ist `margin-top: calc(50% + 20px);` gültig, weil `margin-top` Prozentwerte in Längen auflöst.

Das Einfügen von [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) in `calc-sum`-Ausdrücke ist ebenfalls erlaubt. Der folgende Code `calc(10px + var(--variable))`, ist ein gültiger Ausdruck.

Die `+` und `-` Operatoren **müssen von {{Glossary("whitespace", "Leerzeichen")}} umgeben sein**. Zum Beispiel wird `calc(50% -8px)` als "ein Prozentwert gefolgt von einer negativen Länge" interpretiert — was ein ungültiger Ausdruck ist — während `calc(50% - 8px)` als "ein Prozentwert gefolgt von einem Subtraktionsoperator und einer Länge" verstanden wird. Ebenso wird `calc(8px + -50%)` als "eine Länge gefolgt von einem Additionsoperator und einem negativen Prozentwert" behandelt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
