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

Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) zu selektieren und zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, werden Webentwickler dazu ermutigt, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Präsentation des Elements zu benennen. Zum Beispiel _attribute_, um ein Attribut zu beschreiben, anstatt _italics_, obwohl ein Element dieser Klasse möglicherweise kursiv dargestellt wird. Semantische Namen bleiben logisch, auch wenn sich die Präsentation der Seite ändert.

### Syntax

Das `class`-Attribut ist eine Liste von Klassenwerten, die durch [ASCII-Leerzeichen](/de/docs/Glossary/Whitespace#in_html) getrennt sind.

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Wenn er jedoch in CSS-Selektoren verwendet wird, sei es aus JavaScript mittels APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die Werte des `class`-Attributs gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein Klassenwert kein gültiger CSS-Bezeichner ist (z. B. `my?class` oder `1234`), er vor der Verwendung in einem Selektor entweder durch die Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für `class`-Attribute wählen, die gültige CSS-Bezeichner sind, die keine Maskierung erfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn/CSS)
