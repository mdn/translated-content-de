---
title: "`class` HTML Globales Attribut"
short-title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`class`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist eine Liste von Klassen des Elements, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>Narrator: This is the beginning of the play.</p>

<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255 0 0 / 0.25);
  padding: 10px;
}

.editorial::before {
  content: "Editor: ";
}
```

## Syntax

Das `class` Attribut ist eine Liste von Klassenwerten, die durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} getrennt sind.

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Wenn jedoch Klassenwerte in CSS-Selektoren verwendet werden, entweder aus JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die Klassenwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/Reference/Values/ident) sein. Das bedeutet, dass wenn ein Klassenwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?class` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/Reference/Values/ident#escaping_characters) escaped werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für Klassenattribute auswählen, die gültige CSS-Bezeichner sind und kein Escaping erfordern.

## Beschreibung

Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, wird Webentwicklern empfohlen, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben und nicht die Präsentation des Elements. Zum Beispiel _attribute_, um ein Attribut zu beschreiben, anstatt _italics_, obwohl ein Element dieser Klasse möglicherweise in _Kursivschrift_ dargestellt wird. Semantische Namen bleiben logisch, selbst wenn sich die Präsentation der Seite ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn_web_development/Core/Styling_basics)
