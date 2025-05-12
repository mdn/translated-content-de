---
title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 96ad6377c054e9cb446613b8afa80bfeaa202150
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

## Syntax

Der Wert eines ID-Attributes darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln IDs, die Leerzeichen enthalten und nicht den Konventionen entsprechen, so, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzigen ID-Wert haben.

Technisch kann der Wert eines ID-Attributes jedes andere Unicode-Zeichen enthalten. Wenn jedoch in CSS-Selektoren, entweder aus JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, verwendet wird, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass ein ID-Attributwert, der kein gültiger CSS-Bezeichner ist (z.B. `my?id` oder `1234`), vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird Entwicklern empfohlen, Werte für ID-Attribute zu wählen, die gültige CSS-Bezeichner sind und keine Maskierung erfordern.

Auch sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch darauf zugreifen mit `window["1234"]`.

## Beschreibung

Der Zweck des ID-Attributes besteht darin, ein einzelnes Element beim Verlinken (mit einem [Fragmentbezeichner](/de/docs/Web/URI#fragment)), Skripting oder Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel könnte man bei einem Markup wie:

```html
<p id="preamble"></p>
```

auf das Absatz-Element in JavaScript mit Code wie folgendem zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Sich auf dieses Verhalten zu verlassen, ist gefährlich und wird nicht empfohlen. Es kann zu unerwarteten Konflikten mit einigen bestehenden oder zukünftigen APIs im Browser führen. Wenn Browser zum Beispiel eine neue globale Eigenschaft namens `preamble` einführen, kann derselbe Code nicht mehr auf das HTML-Element zugreifen. Verwenden Sie stattdessen `document.getElementById()` oder `document.querySelector()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
