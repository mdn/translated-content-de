---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt im Allgemeinen die Struktur und Syntax von Stylesheets, oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung strukturierter Dokumente (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Types), [Funktionen](/de/docs/Web/CSS/CSS_Functions) oder [at-Rules](/de/docs/Web/CSS/At-rule). Stattdessen erläutert es, wie all diese Merkmale definiert werden sollten und wie User Agents CSS parsen sollten.

## At-Rules

- keine

> [!NOTE]
> Das Modul gibt ausdrücklich an, dass {{cssxref("@charset")}} keine tatsächliche at-Rule ist, sondern eine nicht erkannte Legacy-Regel, die beim Grammatik-Check eines Stylesheets ausgelassen werden sollte. Die einzige gültige Verwendung von `@charset` ist ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Wichtige Konzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions)
- [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{glossary("parse")}}
- {{glossary("stylesheet")}}
- {{glossary("whitespace")}}

## Anleitungen

- [Syntax](/de/docs/Web/CSS/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcke, Regelsätze und Anweisungen.

- [Wertdefinition Syntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und Funktionen, zusammen mit semantischen Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponenten-Werttypen, Kombinatoren und Multiplikatoren.

- [Behandlung von CSS-Syntaxfehlern](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick, wie der User Agent ungültiges CSS behandelt.

- [Lernen Sie die ersten Schritte in CSS: CSS-Syntax](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax)

  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)

[CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} at-Rule
- {{cssxref("important")}} Flag
- [Anfangswerte](/de/docs/Web/CSS/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul:

- [benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}} Funktion

[CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul:

- {{cssxref("@media")}} at-Rule
- {{cssxref("@supports")}} at-Rule

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

- {{domxref("CSSValue.cssText", "cssText")}} Eigenschaft
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}} Methode
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}} Methode

[WHATWG](/de/docs/Glossary/WHATWG) Spezifikation:

- {{HTMLElement("style")}} Element
- {{HTMLElement("link")}} Element
- [`class`](/de/docs/Web/HTML/Global_attributes/class) Attribut
- [`rel`](/de/docs/Web/HTML/Attributes/rel#stylesheet) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
