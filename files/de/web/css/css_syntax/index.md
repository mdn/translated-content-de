---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt allgemein die Struktur und Syntax von Cascading Stylesheets oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML), im Internet und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Types), [Funktionen](/de/docs/Web/CSS/CSS_Functions) oder [At-Rules](/de/docs/Web/CSS/At-rule). Es erläutert vielmehr, wie all diese Merkmale definiert werden sollten und wie Benutzeragenten CSS analysieren sollten.

## At-Rules

- keine

> [!NOTE]
> Das Modul erklärt ausdrücklich, dass {{cssxref("@charset")}} keine tatsächliche At-Rule ist, sondern eine nicht erkannte Legacy-Regel, die weggelassen werden sollte, wenn ein Stylesheet grammatikalisch überprüft wird. Die einzige gültige Nutzung von `@charset` ist ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Wichtige Konzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escape](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions)
- [Ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{Glossary("parse", "Parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerzeichen")}}

## Leitfäden

- [Syntax](/de/docs/Web/CSS/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen.

- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [Fehlerbehandlung der CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick, wie der Benutzeragent ungültiges CSS verarbeitet.

- [CSS lernen erste Schritte: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)

  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)

[CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} At-Rule
- {{cssxref("important")}} Flag
- [Anfangswerte](/de/docs/Web/CSS/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}} Funktion

[CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul:

- {{cssxref("@media")}} At-Rule
- {{cssxref("@supports")}} At-Rule

[CSS Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

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

- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
