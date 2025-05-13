---
title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
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

#exciting:before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## Syntax

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht-konforme IDs mit Leerzeichen, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wird der Wert jedoch in CSS-Selektoren verwendet, entweder von JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die ID-Attributwerte gültige [CSS-Identifikatoren](/de/docs/Web/CSS/ident) sein. Das bedeutet, wenn ein ID-Attributwert kein gültiger CSS-Identifikator ist (zum Beispiel `my?id` oder `1234`), dann muss er vor der Nutzung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden.

Aus diesem Grund wird Entwicklern empfohlen, Werte für ID-Attribute zu wählen, die gültige CSS-Identifikatoren sind und kein Maskieren erfordern.

Auch sind nicht alle gültigen Werte von ID-Attributen gültige JavaScript-Identifikatoren. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Identifikator. Dies bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht mit Code wie `window.1234` auf das Element zugreifen können. Sie können jedoch mit `window["1234"]` darauf zugreifen.

## Beschreibung

Der Zweck des ID-Attributs ist es, ein einzelnes Element beim Verlinken (mit einem [Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment)), beim Scripting oder beim Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, gegebenenfalls ein Markup wie:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Paragraph-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Sich auf dieses Verhalten zu verlassen, ist gefährlich und wird nicht empfohlen. Es kann zu unerwarteten Konflikten mit einigen bestehenden oder zukünftigen APIs im Browser führen. Wenn zum Beispiel Browser eine neue globale Eigenschaft namens `preamble` einführen, dann wird derselbe Code nicht mehr in der Lage sein, auf das HTML-Element zuzugreifen. Verwenden Sie stattdessen `document.getElementById()` oder `document.querySelector()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die [`Document.getElementById`](/de/docs/Web/API/Document/getElementById) Methode.
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
