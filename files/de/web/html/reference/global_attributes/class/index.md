---
title: HTML `class` Globales Attribut
short-title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
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
  background: rgb(255 0 0 / 0.25);
  padding: 10px;
}

.editorial::before {
  content: "Editor: ";
}
```

## Syntax

Das `class`-Attribut ist eine Liste von Klassenwerten, die durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} getrennt sind.

Jeder Klassenwert kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Wenn sie jedoch in CSS-Selektoren verwendet werden, entweder von JavaScript über APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen Klassenattributwerte gültige [CSS-Identifier](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein Klassenattributwert kein gültiger CSS-Identifier ist (zum Beispiel `my?class` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)-Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für Klassenattribute wählen, die gültige CSS-Identifier sind, die kein Maskieren erfordern.

## Beschreibung

Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Benennung von Klassen stellt, werden Webentwickler ermutigt, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Darstellung des Elements. Beispielsweise _attribut_, um ein Attribut zu beschreiben, anstatt _kursiv_, obwohl ein Element dieser Klasse kursiv dargestellt werden kann. Semantische Namen bleiben logisch, selbst wenn sich die Darstellung der Seite ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn_web_development/Core/Styling_basics)
