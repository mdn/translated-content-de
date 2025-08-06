---
title: HTML id globales Attribut
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der innerhalb des gesamten Dokuments einzigartig sein muss.

{{InteractiveExample("HTML Demo: id", "tabbed-shorter")}}

```html interactive-example
<p>A normal, boring paragraph. Try not to fall asleep.</p>

<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid dimgrey;
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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht-konforme IDs, die Leerzeichen enthalten, so, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzelnen ID-Wert haben.

Technisch gesehen kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn er jedoch in CSS-Selektoren verwendet wird, sei es durch JavaScript mittels APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen ID-Attributwerte gültige [CSS-Identifikatoren](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein ID-Attributwert kein gültiger CSS-Identifikator ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung als Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Identifikatoren sind und kein Maskieren erfordern.

Außerdem sind nicht alle gültigen ID-Attributwerte auch gültige JavaScript-Identifikatoren. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Identifikator. Dies bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch darauf mit `window["1234"]` zugreifen.

## Beschreibung

Der Zweck des ID-Attributs ist es, ein einzelnes Element zu identifizieren, wenn über einen [Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment), Skripten oder das Styling (mit {{Glossary("CSS", "CSS")}}) darauf verwiesen, geskriptet oder gestylt wird.

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Eigenschaftsname der ID-Wert und der Eigenschaftswert das entsprechende Element ist. Zum Beispiel bei folgendem Markup:

```html
<p id="preamble"></p>
```

Sie können auf dieses Absatz-Element in JavaScript folgendermaßen zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Auf das Muster `window["id-value"]` oder `window.idValue` zu setzen, ist gefährlich und nicht empfehlenswert, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Wenn ein Browser beispielsweise in Zukunft eine eingebaute globale Eigenschaft namens `preamble` einführt, kann Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf Elemente nach ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS-[ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
