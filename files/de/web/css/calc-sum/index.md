---
title: <calc-sum>
slug: Web/CSS/calc-sum
l10n:
  sourceCommit: 73349b0441acc8e32cd435b94ab4bd4c4bb9ee18
---

{{CSSRef}}

Der **`<calc-sum>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Ausdruck, der eine Berechnung in einer beliebigen [CSS-Math-Funktion](/de/docs/Web/CSS/CSS_Functions#math_functions) ausführt. Der Ausdruck führt eine grundlegende arithmetische Operation der Addition und Subtraktion zwischen zwei Werten durch.

## Syntax

Der `<calc-sum>` Typ definiert zwei numerische Werte und einen der folgenden [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) zwischen ihnen.

- `+`

  - : Addiert zwei Zahlen zusammen.

- `-`

  - : Subtrahiert die rechte Zahl von der linken.

### Formale Syntax

{{CSSSyntax}}

## Beschreibung

Die Operanden im Ausdruck können jeden {{cssxref("&lt;length&gt;")}}-Syntaxwert darstellen. Sie können {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;integer&gt;")}} verwenden.

Die Typen der beiden Operanden müssen übereinstimmen. Für Längenangaben können Sie `0` nicht als `0px` (oder eine andere Längeneinheit) interpretieren. Stattdessen müssen Sie eine eindeutige Einheit angeben: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist. Prozentwert-Typen werden basierend auf dem Kontext aufgelöst. Zum Beispiel ist `margin-top: calc(50% + 20px);` gültig, da `margin-top` Prozentwerte zu Längen auflöst.

Die Einbeziehung von [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) in `calc-sum`-Ausdrücken ist ebenfalls zulässig. Der folgende Code `calc(10px + var(--variable))` ist ein gültiger Ausdruck.

Die Operatoren `+` und `-` **müssen von {{Glossary("whitespace", "Leerraum")}} umgeben sein**. Beispielsweise wird `calc(50% -8px)` als "ein Prozentwert, dem eine negative Länge folgt" geparst – was ein ungültiger Ausdruck ist – während `calc(50% - 8px)` als "ein Prozentwert, gefolgt von einem Subtraktionsoperator und einer Länge" interpretiert wird. Ebenso wird `calc(8px + -50%)` als "eine Länge, gefolgt von einem Additionsoperator und einem negativen Prozentwert" behandelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
