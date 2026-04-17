---
title: "`id` HTML globales Attribut"
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der innerhalb des gesamten Dokuments eindeutig sein muss.

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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, so, als ob die Leerzeichen Teil der ID wären. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, welches durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzelnen ID-Wert haben.

Technisch gesehen kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn dieser jedoch in CSS-Selektoren verwendet wird, sei es von JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die Werte des ID-Attributs gültige [CSS-Bezeichner](/de/docs/Web/CSS/Reference/Values/ident) sein. Das bedeutet, dass, wenn ein ID-Attributswert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) Methode oder [manuell](/de/docs/Web/CSS/Reference/Values/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler für ID-Attribute Werte wählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

Des Weiteren sind nicht alle gültigen ID-Attributswerte auch gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributswert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, und daher kann man nicht mit Code wie `window.1234` auf das Element zugreifen. Jedoch kann man es mit `window["1234"]` erreichen.

## Beschreibung

Der Zweck des ID-Attributs ist es, ein einzelnes Element zu identifizieren, wenn es verlinkt (unter Verwendung eines [Fragmentbezeichners](/de/docs/Web/URI/Reference/Fragment)), gescriptet oder gestylt wird (mit {{Glossary("CSS", "CSS")}}).

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Eigenschaftsname der ID-Wert ist und der Eigenschaftswert das entsprechende Element. Beispiel: Gegeben dieses Markup:

```html
<p id="preamble"></p>
```

Sie können auf dieses Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Sich auf das Muster `window["id-value"]` oder `window.idValue` zu verlassen, ist gefährlich und wird nicht empfohlen, da es zu unerwarteten Konflikten mit vorhandenen oder zukünftigen APIs im Browser führen kann.
> Wenn z. B. ein Browser in der Zukunft eine eingebaute globale Eigenschaft namens `preamble` einführt, könnte Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie stets die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf Elemente über die ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die [`Document.getElementById`](/de/docs/Web/API/Document/getElementById) Methode.
- CSS [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors).
