---
title: class
slug: Web/HTML/Global_attributes/class
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{HTMLSidebar("Global_attributes")}}

Das **`class`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist eine Liste der Klassen des Elements, getrennt durch [ASCII-Leerzeichen](/de/docs/Glossary/Whitespace#in_html).

{{EmbedInteractiveExample("pages/tabbed/attribute-class.html","tabbed-standard")}}

## Beschreibung

Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie {{domxref("document.getElementsByClassName()")}} auszuwählen und zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, werden Webentwickler ermutigt, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Darstellung des Elements. Zum Beispiel _attribute_, um ein Attribut zu beschreiben, anstatt _italics_, obwohl ein Element dieser Klasse möglicherweise in _italics_ dargestellt wird. Semantische Namen bleiben logisch, auch wenn sich die Darstellung der Seite ändert.

### Syntax

Das `class` Attribut ist eine Liste von Klassenwerten, getrennt durch [ASCII-Leerzeichen](/de/docs/Glossary/Whitespace#in_html).

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Wenn sie jedoch in CSS-Selektoren verwendet werden, entweder von JavaScript unter Verwendung von APIs wie {{domxref("Document.querySelector()")}} oder in CSS-Stylesheets, müssen Klassenattributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein Klassenattributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?class` oder `1234`), er entweder mit der Methode {{domxref("CSS.escape_static", "CSS.escape()")}} oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss, bevor er in einem Selektor verwendet wird.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für Klassenattribute wählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [Einführung in CSS](/de/docs/Learn/CSS)
