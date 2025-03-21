---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt im Allgemeinen die Struktur und Syntax von Cascading Stylesheets, oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) oder [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule). Vielmehr wird erläutert, wie all diese Funktionen definiert werden sollten und wie Benutzeragenten CSS analysieren sollten.

## At-Rules

- keine

> [!NOTE]
> Das Modul stellt ausdrücklich fest, dass {{cssxref("@charset")}} keine tatsächliche At-Rule ist, sondern eine nicht erkannte veraltete Regel, die weggelassen werden sollte, wenn ein Stylesheet auf Grammatik überprüft wird. Die einzige gültige Verwendung von `@charset` ist am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{Glossary("parse", "parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerzeichen")}}

## Leitfäden

- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcke, Regelmengen und Anweisungen.

- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [Fehlerbehandlung in der CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick darüber, wie der Benutzeragent ungültiges CSS behandelt.

- [CSS lernen – erste Schritte: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)

  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

[CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul:

- {{cssxref("@import")}} At-Rule
- {{cssxref("important")}}-Flag
- [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}-Funktion

[CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul:

- {{cssxref("@media")}} At-Rule
- {{cssxref("@supports")}} At-Rule

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

- [`cssText`](/de/docs/Web/API/CSSValue/cssText) Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule) Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace) Methode

{{Glossary("WHATWG", "WHATWG")}} Spezifikation:

- {{HTMLElement("style")}}-Element
- {{HTMLElement("link")}}-Element
- [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut
- [`rel`](/de/docs/Web/HTML/Attributes/rel#stylesheet)-Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-At-Rule-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
