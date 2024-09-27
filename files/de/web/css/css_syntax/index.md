---
title: CSS-Syntax
slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Syntax**-Modul beschreibt im Allgemeinen die Struktur und Syntax von Cascading Stylesheets oder CSS. Es definiert CSS als die Sprache zur Beschreibung der Darstellung von strukturierten Dokumenten (wie HTML und XML), im Web und anderswo.

Dieses Modul definiert keine Eigenschaften, [Datentypen](/de/docs/Web/CSS/CSS_Types), [Funktionen](/de/docs/Web/CSS/CSS_Functions) oder [At-Regeln](/de/docs/Web/CSS/At-rule). Vielmehr wird dargelegt, wie all diese Funktionen definiert werden sollten und wie Benutzeragenten CSS parsen sollten.

## At-Regeln

- keine

> [!NOTE]
> Das Modul gibt ausdrücklich an, dass {{cssxref("@charset")}} keine tatsächliche At-Regel ist, sondern eine nicht erkannte alte Regel, die beim Überprüfen der Grammatik eines Stylesheets weggelassen werden sollte. Die einzige gültige Verwendung von `@charset` ist ganz am Anfang eines Stylesheets, wo es als spezielle Byte-Sequenz interpretiert wird, die vor der Verarbeitung des Inhalts entfernt wird.

## Referenz

### Schlüsselkonzepte

- {{cssxref("at-rule")}}
- [Zeichen-Escaping](/de/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS-Kommentare](/de/docs/Web/CSS/Comments)
- [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions)
- [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [Stilregel](/de/docs/Web/API/CSSStyleRule)

### Glossarbegriffe

- [CSS-Deskriptor](/de/docs/Glossary/CSS_Descriptor)
- [parsen](/de/docs/Glossary/parse)
- [Stylesheet](/de/docs/Glossary/stylesheet)
- [Leerzeichen](/de/docs/Glossary/whitespace)

## Leitfäden

- [Syntax](/de/docs/Web/CSS/Syntax)

  - : Überblick über die CSS-Syntax, einschließlich CSS-Deklarationen, Deklarationsblöcken, Regelsätzen und Anweisungen.

- [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Erklärt die formale Grammatik zur Definition gültiger Werte für CSS-Eigenschaften und Funktionen sowie semantische Einschränkungen. Ein Leitfaden zum Verständnis von CSS-Komponentenwerttypen, Kombinatoren und Multiplikatoren.

- [CSS-Syntax-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Übersicht darüber, wie der Benutzeragent ungültiges CSS behandelt.

- [Lernen Sie CSS: Erste Schritte: CSS-Syntax](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax)

  - : Einführungsleitfaden zu CSS, einschließlich einer Einführung in die CSS-Syntax.

## Verwandte Konzepte

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul:

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)

[CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade)-Modul:

- {{cssxref("@import")}} At-Regel
- {{cssxref("important")}} Flag
- [Initialwerte](/de/docs/Web/CSS/initial_value)
- [Berechnete Werte](/de/docs/Web/CSS/computed_value)
- [Verwendete Werte](/de/docs/Web/CSS/used_value)
- [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
- [CSS-Eigenschaft](/de/docs/Glossary/Property/CSS)

[CSS-Benutzerdefinierte Eigenschaften für Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul:

- [benutzerdefinierte Eigenschaft (`--*`)](/de/docs/Web/CSS/--*)
- {{cssxref("var")}} Funktion

[CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul:

- {{cssxref("@media")}} At-Regel
- {{cssxref("@supports")}} At-Regel

[CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) API:

- [`cssText`](/de/docs/Web/API/CSSValue/cssText)-Eigenschaft
- [`insertRule(rule)`](/de/docs/Web/API/CSSStyleSheet/insertRule)-Methode
- [`replace(text)`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode

[WHATWG](/de/docs/Glossary/WHATWG)-Spezifikation:

- {{HTMLElement("style")}}-Element
- {{HTMLElement("link")}}-Element
- [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut
- [`rel`](/de/docs/Web/HTML/Attributes/rel#stylesheet)-Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
