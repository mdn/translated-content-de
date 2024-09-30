---
title: <calc-sum>
slug: Web/CSS/calc-sum
l10n:
  sourceCommit: 62ebcab471aceef4d843e57e310dae4ab1eda94a
---

{{CSSRef}}

Der **`<calc-sum>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Ausdruck, der eine Berechnung in einer beliebigen [CSS-Mathematikfunktion](/de/docs/Web/CSS/CSS_Functions#math_functions) durchführt. Der Ausdruck führt eine grundlegende arithmetische Operation von Addition und Subtraktion zwischen zwei Werten aus.

## Syntax

Der `<calc-sum>`-Typ definiert zwei numerische Werte und einen der folgenden [arithmetischen Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators) zwischen ihnen.

- `+`

  - : Addiert zwei Zahlen miteinander.

- `-`

  - : Subtrahiert die rechte Zahl von der linken.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Die Operanden im Ausdruck können jeden Wert der {{cssxref("&lt;length&gt;")}}-Syntax haben. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Verschiedene Einheitentypen können in einem einzigen Ausdruck verwendet werden. Zum Beispiel ist das Subtrahieren von `px` von `%`, wie in `calc(100% - 10px)`, ein gültiger Ausdruck.

Das Einbinden von [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) in `calc-sum`-Ausdrücken ist ebenfalls erlaubt. Der folgende Code `calc(10px + var(--variable))` ist ein gültiger Ausdruck.

Die `+` und `-` Operatoren **müssen von [Leerzeichen](/de/docs/Glossary/whitespace) umgeben sein**. Zum Beispiel wird `calc(50% -8px)` als Prozentsatz gefolgt von einer negativen Länge geparst — ein ungültiger Ausdruck — während `calc(50% - 8px)` als Prozentsatz gefolgt von einem Subtraktionsoperator und einer Länge gilt. Ebenso wird `calc(8px + -50%)` als Länge gefolgt von einem Additionsoperator und einem negativen Prozentsatz behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
