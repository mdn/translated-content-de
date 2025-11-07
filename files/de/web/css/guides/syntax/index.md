---
title: CSS-Schreibweise
short-title: Syntax
slug: Web/CSS/Guides/Syntax
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Syntax**-Modul beschreibt im Allgemeinen die Struktur und Syntax von Cascading Style Sheets oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types), [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) oder [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules). Vielmehr wird erläutert, wie all diese Features definiert werden sollten und wie Benutzeragenten CSS analysieren sollten.

## Referenz

### At-Rules und Deskriptoren

- keine

> [!NOTE]
> Das Modul gibt ausdrücklich an, dass {{cssxref("@charset")}} keine tatsächliche At-Rule ist, sondern eher eine nicht anerkannte Altregel, die weggelassen werden sollte, wenn ein Stylesheet grammatikalisch geprüft wird. Die einzige gültige Verwendung von `@charset` befindet sich ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

### Wichtige Konzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/Reference/Values/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions)
- [Ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_descriptor", "CSS-Deskriptor")}}
- {{Glossary("Parse", "Parsen")}}
- {{Glossary("Stylesheet", "Stylesheet")}}
- {{Glossary("Whitespace", "Leerraum")}}

## Leitfäden

- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - : Erklärt die allgemeine CSS-Syntax und wie Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen die Stilregeln bilden.

- [Wertdefinition-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen, zusammen mit semantischen Einschränkungen. Ein Leitfaden zum Verständnis der CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
  - : Überblick darüber, wie Browser ungültiges CSS behandeln.

- [Erste Schritte mit CSS lernen: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)

[CSS-Cascading und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul:

- {{cssxref("@import")}} At-Rule
- {{cssxref("important")}}-Flag
- [Initialwerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/Guides/Cascading_variables)-Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}-Funktion

[CSS-Bedingte Regeln](/de/docs/Web/CSS/Guides/Conditional_rules)-Modul:

- {{cssxref("@media")}} At-Rule
- {{cssxref("@supports")}} At-Rule

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

- [`cssText`](/de/docs/Web/API/CSSValue/cssText) Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule)-Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode

{{Glossary("WHATWG", "WHATWG")}}-Spezifikation:

- {{HTMLElement("style")}}-Element
- {{HTMLElement("link")}}-Element
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut
- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet)-Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul
