---
title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: 96ad6377c054e9cb446613b8afa80bfeaa202150
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

## Syntax

Das `class`-Attribut ist eine Liste von Klassennamen, getrennt durch {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}.

Jeder Klassenname kann beliebige Unicode-Zeichen enthalten (außer natürlich ASCII-Leerzeichen). Wenn jedoch Klassenbezeichner in CSS-Selektoren verwendet werden, sei es von JavaScript mittels APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die Werte des class-Attributs gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, wenn ein Wert des class-Attributs kein gültiger CSS-Bezeichner ist (zum Beispiel `my?class` oder `1234`), muss er vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für class-Attribute wählen, die gültige CSS-Bezeichner sind, die keine Maskierung erfordern.

## Beschreibung

Klassen erlauben es CSS und JavaScript, spezifische Elemente über [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.

Obwohl die Spezifikation keine Anforderungen an die Namen von Klassen stellt, werden Webentwickler ermutigt, Namen zu verwenden, die den semantischen Zweck des Elements beschreiben, anstatt die Darstellung des Elements. Zum Beispiel _attribute_, um ein Attribut zu beschreiben, statt _italics_, obwohl ein Element dieser Klasse kursiv dargestellt werden kann. Semantische Namen bleiben logisch, auch wenn sich die Präsentation der Seite ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`element.className`](/de/docs/Web/API/Element/className)
- [`element.classList`](/de/docs/Web/API/Element/classList)
- [Einführung in CSS](/de/docs/Learn_web_development/Core/Styling_basics)
