---
title: Globales HTML-Attribut id
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`id`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der innerhalb des gesamten Dokuments einzigartig sein muss.

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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, so, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen darf der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn jedoch in CSS-Selektoren verwendet, entweder aus JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Dies bedeutet, dass ein ID-Attributwert, der kein gültiger CSS-Bezeichner ist (z.B. `my?id` oder `1234`), vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute auswählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

Auch sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch auf es mit `window["1234"]` zugreifen.

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (unter Verwendung eines [Fragmentbezeichners](/de/docs/Web/URI/Reference/Fragment)), beim Skripting oder beim Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Eigenschaftsname der ID-Wert und der Eigenschaftswert das entsprechende Element ist. Zum Beispiel, bei folgendem Markup:

```html
<p id="preamble"></p>
```

Können Sie auf dieses Absatz-Element in JavaScript mit dem folgenden Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Das Verlassen auf das Muster `window["id-wert"]` oder `window.idWert` ist gefährlich und wird nicht empfohlen, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Wenn zum Beispiel ein Browser in Zukunft eine integrierte globale Eigenschaft namens `preamble` einführt, kann Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf Elemente anhand ihrer ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), die dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS-[ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors).
