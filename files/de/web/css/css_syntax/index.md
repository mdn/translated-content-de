---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt allgemein die Struktur und Syntax von Cascading Stylesheets, oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML) im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Types), [Funktionen](/de/docs/Web/CSS/CSS_Functions) oder [At-Regeln](/de/docs/Web/CSS/At-rule). Vielmehr wird erläutert, wie all diese Features definiert werden sollten und wie Benutzeragenten CSS parsen sollten.

## At-Regeln

- keine

> [!NOTE]
> Das Modul stellt explizit klar, dass {{cssxref("@charset")}} keine eigentliche At-Regel ist, sondern eine nicht erkannte Legacy-Regel, die bei der Grammatikprüfung eines Stylesheets ausgelassen werden sollte. Die einzige gültige Verwendung von `@charset` ist ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird und vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichen-Fluchtsequenzen](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions)
- [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Styling-Regel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- {{Glossary("CSS_Descriptor", "CSS-Deskriptor")}}
- {{Glossary("parse", "parsen")}}
- {{Glossary("stylesheet", "Stylesheet")}}
- {{Glossary("whitespace", "Leerraum")}}

## Leitfäden

- [Syntax](/de/docs/Web/CSS/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcke, Regelsets und Anweisungen.

- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Erläutert die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und -Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentwerttypen, Kombinatoren und Vielfachen.

- [CSS-Syntax Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Überblick darüber, wie der Benutzeragent ungültige CSS verarbeitet.

- [Erste Schritte in CSS: CSS-Syntax](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax)

  - : Einführender Leitfaden zu CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)

[CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade) Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}} Markierung
- [Anfangswerte](/de/docs/Web/CSS/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "CSS-Eigenschaft")}}

[CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul:

- [Benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}} Funktion

[CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul:

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

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
