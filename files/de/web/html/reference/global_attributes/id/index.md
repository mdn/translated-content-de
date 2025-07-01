---
title: HTML id globales Attribut
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss.

{{InteractiveExample("HTML Demo: id", "tabbed-shorter")}}

```html interactive-example
<p>A normal, boring paragraph. Try not to fall asleep.</p>

<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid #696969;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting::before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## Syntax

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht-konforme IDs, die Leerzeichen enthalten, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn ID-Attribut-Werte jedoch in CSS-Selektoren verwendet werden, entweder von JavaScript aus mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stilen, müssen sie gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein ID-Attribut-Wert kein gültiger CSS-Bezeichner ist (z.B. `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Deshalb wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

Auch sind nicht alle gültigen ID-Attribut-Werte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie das Element nicht mit Code wie `window.1234` aufrufen können. Sie können jedoch darauf zugreifen mit `window["1234"]`.

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (mit einem [Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment)), Skripten oder Stylen (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, bei folgendem Markup:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Auf dieses Verhalten zu vertrauen ist gefährlich und nicht empfohlen. Es kann zu unerwarteten Konflikten mit einigen existierenden oder zukünftigen APIs im Browser führen. Zum Beispiel, wenn Browser eine neue globale Eigenschaft namens `preamble` einführen, wird derselbe Code nicht mehr auf das HTML-Element zugreifen können. Verwenden Sie stattdessen `document.getElementById()` oder `document.querySelector()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), welches dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
