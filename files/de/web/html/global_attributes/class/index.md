---
title: class
slug: Web/HTML/Global_attributes/class
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar("Global_attributes")}}

Das **`class`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist eine Liste der Klassen des Elements, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

{{EmbedInteractiveExample("pages/tabbed/attribute-class.html","tabbed-standard")}}

## Beschreibung

Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, wird Webentwicklern empfohlen, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Präsentation des Elements. Zum Beispiel _attribute_, um ein Attribut zu beschreiben, anstatt _italics_, obwohl ein Element dieser Klasse möglicherweise kursiv dargestellt wird. Semantische Namen bleiben logisch, auch wenn sich die Präsentation der Seite ändert.

### Syntax

Das `class`-Attribut ist eine Liste von Klassenwerten, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Allerdings müssen beim Einsatz in CSS-Selektoren, sei es über JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, die Klassenattributwerte gültige [CSS-Identifikatoren](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein Klassenattributwert kein gültiger CSS-Identifikator ist (z. B. `my?class` oder `1234`), er vor der Verwendung in einem Selektor maskiert werden muss, entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters).

Aus diesem Grund wird empfohlen, dass Entwickler Werte für Klassenattribute wählen, die gültige CSS-Identifikatoren sind und keine Maskierung erfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn_web_development/Core/Styling_basics)
