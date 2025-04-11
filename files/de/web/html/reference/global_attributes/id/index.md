---
title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss.

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

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (mittels eines [Fragmentbezeichners](/de/docs/Web/URI#fragment)), Skripting oder Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen stehen als globale Eigenschaften zur Verfügung. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Beispielsweise kann man auf das folgende Markup wie folgt zugreifen:

```html
<p id="preamble"></p>
```

Sie könnten auf das Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

### Syntax

Ein ID-Attributwert darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzelnen ID-Wert haben.

Technisch gesehen kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Bei der Verwendung in CSS-Selektoren, entweder von JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen ID-Attributwerte jedoch gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), muss er vor der Verwendung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)-Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden.

Aus diesem Grund wird Entwicklern empfohlen, Werte für ID-Attribute zu wählen, die gültige CSS-Bezeichner sind, die kein Escaping erfordern.

Auch sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht mit Code wie `window.1234` auf das Element zugreifen können. Sie können jedoch darauf zugreifen, indem Sie `window["1234"]` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), welches dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
