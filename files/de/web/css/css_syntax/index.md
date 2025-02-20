---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt allgemein die Struktur und Syntax von Cascading Stylesheets (CSS). Es definiert CSS als die Sprache zur Beschreibung der Darstellung strukturierter Dokumente (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), [Funktionen](/de/docs/Web/CSS/CSS_Functions) oder [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule). Vielmehr erläutert es, wie all diese Features definiert werden sollten und wie Benutzeragenten CSS parsen sollen.

## At-Regeln

- keine

> [!NOTE]
> Das Modul erklärt ausdrücklich, dass {{cssxref("@charset")}} keine tatsächliche At-Regel ist, sondern eine nicht erkannte Legacy-Regel, die beim Überprüfen der Grammatik eines Stylesheets ausgelassen werden sollte. Die einzige gültige Verwendung von `@charset` ist am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert und vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions)
- [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Style-Regel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{Glossary("parse", "parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerzeichen")}}

## Leitfäden

- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcken, Regelsets und Anweisungen.

- [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantischer Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [Fehlerbehandlung der CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick darüber, wie der Benutzeragent ungültige CSS verarbeitet.

- [CSS lernen – Erste Schritte: CSS-Syntax](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)

  - : Einführung in CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

[CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}}-Flag
- [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}-Funktion

[CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul:

- {{cssxref("@media")}} At-Regel
- {{cssxref("@supports")}} At-Regel

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model)-API:

- [`cssText`](/de/docs/Web/API/CSSValue/cssText)-Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule)-Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode

{{Glossary("WHATWG", "WHATWG")}}-Spezifikation:

- {{HTMLElement("style")}}-Element
- {{HTMLElement("link")}}-Element
- [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut
- [`rel`](/de/docs/Web/HTML/Attributes/rel#stylesheet)-Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
