---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt im Allgemeinen die Struktur und Syntax von Cascading Stylesheets, oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) oder [at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule). Vielmehr wird ausgeführt, wie all diese Funktionen definiert werden sollten und wie User Agents CSS parsen sollten.

## At-rules

- Keine

> [!NOTE]
> Das Modul erklärt ausdrücklich, dass {{cssxref("@charset")}} keine tatsächliche At-Regel ist, sondern eine nicht erkannte Legacy-Regel, die weggelassen werden sollte, wenn ein Stylesheet grammatikalisch überprüft wird. Die einzige gültige Verwendung von `@charset` befindet sich ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{Glossary("parse", "parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerzeichen")}}

## Leitfäden

- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen.

- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponenten-Wertetypen, Kombinatoren und Multiplikatoren.

- [Fehlerbehandlung der CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick, wie der User Agent ungültiges CSS behandelt.

- [CSS lernen: Erste Schritte - CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)

  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

[CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}} Flag
- [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
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
- [`class`](/de/docs/Web/HTML/Global_attributes/class) Attribut
- [`rel`](/de/docs/Web/HTML/Attributes/rel#stylesheet) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
