---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Das **CSS-Syntax** Modul beschreibt in allgemeinen Begriffen die Struktur und Syntax von kaskadierenden Stylesheets oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) oder [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule). Vielmehr wird erläutert, wie all diese Funktionen definiert werden sollten und wie Benutzeragenten CSS parsen sollten.

## Referenz

### At-Rules und Deskriptoren

- keine

> [!NOTE]
> Das Modul gibt ausdrücklich an, dass {{cssxref("@charset")}} keine tatsächliche At-Regel ist, sondern eine nicht erkannte Legacy-Regel, die bei der Überprüfung der Grammatik eines Stylesheets ausgelassen werden sollte. Die einzige gültige Verwendung von `@charset` ist ganz am Anfang eines Stylesheets, wo es als spezielle Bytesequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichenflucht](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_descriptor", "CSS-Deskriptor")}}
- {{Glossary("Parse", "Parsieren")}}
- {{Glossary("Stylesheet", "Stylesheet")}}
- {{Glossary("Whitespace", "Leerzeichen")}}

## Leitfäden

- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - : Erklärt die gesamte CSS-Syntax und wie Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen die Stilregeln bilden.

- [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
  - : Übersicht, wie Browser ungültiges CSS behandeln.

- [Erste Schritte mit CSS lernen: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

[CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}} Flag
- [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}} Funktion

[CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul:

- {{cssxref("@media")}} At-Regel
- {{cssxref("@supports")}} At-Regel

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

- [`cssText`](/de/docs/Web/API/CSSValue/cssText) Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule) Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace) Methode

{{Glossary("WHATWG", "WHATWG")}} Spezifikation:

- {{HTMLElement("style")}} Element
- {{HTMLElement("link")}} Element
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut
- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
