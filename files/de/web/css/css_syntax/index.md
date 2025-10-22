---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Syntax**-Modul beschreibt allgemein den Aufbau und die Syntax von Cascading Stylesheets, oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung strukturierter Dokumente (wie HTML und XML), im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) oder [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule). Vielmehr wird erläutert, wie all diese Funktionen definiert werden sollten und wie Benutzeragenten CSS analysieren sollten.

## Referenz

### At-Regeln und Deskriptoren

- keine

> [!NOTE]
> Das Modul stellt explizit fest, dass {{cssxref("@charset")}} keine tatsächliche At-Regel ist, sondern eine nicht erkannte Altsyntax, die ausgelassen werden sollte, wenn ein Stylesheet auf Grammatik geprüft wird. Die einzige gültige Verwendung von `@charset` befindet sich ganz am Anfang eines Stylesheets, wo sie als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichenmaskierung](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_descriptor", "CSS-Deskriptor")}}
- {{Glossary("Parse", "Parsen")}}
- {{Glossary("Stylesheet", "Stylesheet")}}
- {{Glossary("Whitespace", "Leerzeichen")}}

## Leitfäden

- [Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - : Erklärt die Gesamtstruktur der CSS-Syntax und wie Deklarationen, Deklarationsblöcke, Regelsätze und Anweisungen die Stilregeln bilden.

- [Syntax der Wertdefinition](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen, zusammen mit semantischen Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
  - : Übersicht darüber, wie Browser ungültiges CSS behandeln.

- [Erste Schritte mit CSS lernen: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

[CSS-Überschattung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}} Flag
- [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
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

- [CSS At-Regelfunktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
