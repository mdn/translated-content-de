---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Syntaxmodul** beschreibt im Allgemeinen die Struktur und Syntax von Cascading Stylesheets oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) oder [at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule). Stattdessen erläutert es, wie all diese Funktionen definiert werden sollten und wie Benutzeragenten CSS parsen sollten.

## At-rules

- keine

> [!NOTE]
> Das Modul stellt ausdrücklich fest, dass {{cssxref("@charset")}} keine tatsächliche at-rule ist, sondern eine nicht anerkannte Legacy-Regel, die beim Überprüfen eines Stylesheets auf Grammatikfehler ausgelassen werden sollte. Die einzige gültige Verwendung von `@charset` befindet sich ganz am Anfang eines Stylesheets, wo sie als spezielle Bytesequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

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
- {{Glossary("parse", "Parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerzeichen")}}

## Leitfäden

- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/CSS_syntax/Syntax)

  - : Erklärt die Gesamt-CSS-Syntax und wie Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen die Stilregeln bilden.

- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick darüber, wie Browser ungültiges CSS behandeln.

- [Lernen Sie die ersten Schritte mit CSS: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors):

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade):

- {{cssxref("@import")}} at-rule
- {{cssxref("important")}} Flag
- [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

Modul [CSS benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables):

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}} Funktion

Modul [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules):

- {{cssxref("@media")}} at-rule
- {{cssxref("@supports")}} at-rule

API [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model):

- [`cssText`](/de/docs/Web/API/CSSValue/cssText) Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule) Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace) Methode

Spezifikation {{Glossary("WHATWG", "WHATWG")}}:

- {{HTMLElement("style")}} Element
- {{HTMLElement("link")}} Element
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut
- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS at-rule Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
