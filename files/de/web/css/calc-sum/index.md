---
title: <calc-sum>
slug: Web/CSS/calc-sum
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der **`<calc-sum>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Ausdruck, der eine Berechnung in einer beliebigen [CSS-Mathematikfunktion](/de/docs/Web/CSS/CSS_Functions#math_functions) durchführt. Der Ausdruck führt eine grundlegende arithmetische Operation der Addition und Subtraktion zwischen zwei Werten aus.

## Syntax

Der `<calc-sum>`-Typ definiert zwei numerische Werte und eines der folgenden [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) zwischen ihnen.

- `+`

  - : Addiert zwei Zahlen.

- `-`

  - : Subtrahiert die rechte Zahl von der linken.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Die Operanden im Ausdruck können jeden {{cssxref("&lt;length&gt;")}}-Syntaxwert haben. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Unterschiedliche Einheitentypen können in einem einzigen Ausdruck verwendet werden. Zum Beispiel ist das Subtrahieren von `px` von `%`, wie in `calc(100% - 10px)`, ein gültiger Ausdruck.

Auch das Einbeziehen von [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) in `calc-sum`-Ausdrücken ist erlaubt. Der folgende Code `calc(10px + var(--variable))`, ist ein gültiger Ausdruck.

Die `+` und `-` Operatoren **müssen von {{Glossary("whitespace", "Leerzeichen")}} umgeben sein**. Beispielsweise wird `calc(50% -8px)` als Prozentwert gefolgt von einer negativen Länge geparst — ein ungültiger Ausdruck — während `calc(50% - 8px)` ein Prozentwert ist, gefolgt von einem Subtraktionsoperator und einer Länge. Ebenso wird `calc(8px + -50%)` als Länge gefolgt von einem Additionsoperator und einem negativen Prozentsatz behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
