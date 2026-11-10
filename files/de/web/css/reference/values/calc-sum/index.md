---
title: "`<calc-sum>` CSS-Typ"
short-title: <calc-sum>
slug: Web/CSS/Reference/Values/calc-sum
l10n:
  sourceCommit: bc838d9946a95b501a9ce3e522929eebcce7a3e5
---

Der **`<calc-sum>`**-[CSS-Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt einen Ausdruck dar, der innerhalb einer [mathematischen CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) eine Berechnung durchführt. Der Ausdruck führt eine grundlegende arithmetische Operation aus: die Addition oder Subtraktion zweier Werte.

## Syntax

Der Typ `<calc-sum>` besteht aus zwei numerischen Werten und einem der folgenden [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) zwischen ihnen:

- `+`
  - : Addiert zwei Zahlen.

- `-`
  - : Subtrahiert die rechte Zahl von der linken.

## Beschreibung

Die Operanden im Ausdruck können Werte mit der Syntax von {{cssxref("&lt;length&gt;")}} sein. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Die Typen der beiden Operanden müssen zueinander passen. Bei Längen können Sie `0` nicht als Ersatz für `0px` (oder eine andere Längeneinheit) verwenden. Stattdessen müssen Sie eine Einheit ausdrücklich angeben: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist. Prozentwerte werden abhängig vom Kontext aufgelöst. Beispielsweise ist `margin-top: calc(50% + 20px);` gültig, da `margin-top` Prozentwerte als Längen auflöst.

Auch [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) dürfen in `calc-sum`-Ausdrücken verwendet werden. Der folgende Code, `calc(10px + var(--variable))`, ist ein gültiger Ausdruck.

Die Operatoren `+` und `-` **müssen von {{Glossary("whitespace", "Leerraum")}} umgeben sein**. Beispielsweise wird `calc(50% -8px)` als „ein Prozentwert, gefolgt von einer negativen Länge“ geparst – ein ungültiger Ausdruck. Dagegen wird `calc(50% - 8px)` als „ein Prozentwert, gefolgt von einem Subtraktionsoperator und einer Länge“ geparst. Ebenso wird `calc(8px + -50%)` als „eine Länge, gefolgt von einem Additionsoperator und einem negativen Prozentwert“ behandelt.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
