---
title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`class`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist eine Liste der Klassen des Elements, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

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
  background: rgb(255, 0, 0, 0.25);
  padding: 10px;
}

.editorial:before {
  content: "Editor: ";
}
```

## Beschreibung

Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, werden Webentwickler ermutigt, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Präsentation des Elements. Zum Beispiel _attribute_ zur Beschreibung eines Attributs statt _italics_, obwohl ein Element dieser Klasse kursiv dargestellt werden kann. Semantische Namen bleiben logisch, selbst wenn sich die Präsentation der Seite ändert.

### Syntax

Das `class` Attribut ist eine Liste von Klassenwerten, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (natürlich außer ASCII-Leerzeichen). Wenn jedoch in CSS-Selektoren, entweder aus JavaScript mithilfe von APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, Klassenattributwerte verwendet werden, müssen diese gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, wenn ein Klassenattributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?class` oder `1234`), muss er vor der Verwendung in einem Selektor entweder mithilfe der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für Klassenattribute wählen, die gültige CSS-Bezeichner sind und keine Maskierung erfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn_web_development/Core/Styling_basics)
