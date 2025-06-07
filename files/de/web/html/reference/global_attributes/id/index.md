---
title: HTML id-Globalattribut
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss.

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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}-Zeichen enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn jedoch in CSS-Selektoren, entweder von JavaScript aus mittels APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, ID-Attributwerte verwendet werden, müssen diese gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) escaped werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind, die kein Escaping erfordern.

Außerdem sind nicht alle gültigen ID-Attributwerte auch gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht mit Code wie `window.1234` auf das Element zugreifen können. Sie können jedoch mit `window["1234"]` darauf zugreifen.

## Beschreibung

Das Ziel des ID-Attributs ist es, ein einzelnes Element beim Verlinken (unter Verwendung eines [Fragment-Bezeichners](/de/docs/Web/URI/Reference/Fragment)), Scripting oder Stylen (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, bei folgendem Markup:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Paragraph-Element in JavaScript so zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Auf dieses Verhalten zu vertrauen, ist riskant und wird nicht empfohlen. Es kann zu unerwarteten Konflikten mit einigen vorhandenen oder zukünftigen APIs im Browser führen. Wenn Browser zum Beispiel eine neue globale Eigenschaft namens `preamble` einführen, dann wird derselbe Code nicht mehr auf das HTML-Element zugreifen können. Verwenden Sie `document.getElementById()` oder `document.querySelector()` stattdessen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [Globalattribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
