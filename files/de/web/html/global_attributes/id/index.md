---
title: id
slug: Web/HTML/Global_attributes/id
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) definiert eine Kennung (ID), die im gesamten Dokument eindeutig sein muss.

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

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (unter Verwendung eines [Fragment-Identifiers](/de/docs/Web/URI#fragment)), beim Skripting oder beim Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, wenn wie folgt markiert:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Paragraphen-Element in JavaScript mit Code wie diesem zugreifen:

```js
const content = window.preamble.textContent;
```

### Syntax

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht-konforme IDs, die Leerzeichen enthalten, so als wären die Leerzeichen Teil der ID. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen darf der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn er jedoch in CSS-Selektoren verwendet wird, entweder von JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor seiner Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind, die kein Maskieren erfordern.

Außerdem sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch mit `window["1234"]` darauf zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS-[ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
