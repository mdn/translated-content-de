---
title: HTML-id-Globalattribut
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`id`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss.

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

Der Wert des ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn diese jedoch in CSS-Selektoren verwendet werden, entweder durch JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stilblättern, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) vor der Verwendung in einem Selektor entkommen werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind, die keine Escapes benötigen.

Nicht alle gültigen ID-Attributwerte sind auch gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht mit Code wie `window.1234` auf das Element zugreifen können. Allerdings können Sie mit `window["1234"]` darauf zugreifen.

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element zu identifizieren, wenn es verlinkt (unter Verwendung eines [Fragment-Bezeichners](/de/docs/Web/URI/Reference/Fragment)), gescriptet oder gestylt (mit {{Glossary("CSS", "CSS")}}) wird.

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Eigenschaftsname der ID-Wert und der Eigenschaftswert das entsprechende Element ist. Zum Beispiel bei folgendem Markup:

```html
<p id="preamble"></p>
```

Sie können auf dieses Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Das Verlassen auf das Muster `window["id-value"]` oder `window.idValue` ist gefährlich und wird nicht empfohlen, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Zum Beispiel, wenn ein Browser in der Zukunft eine eingebaute globale Eigenschaft namens `preamble` einführt, könnte Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer die [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um auf Elemente über die ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die [`Document.getElementById`](/de/docs/Web/API/Document/getElementById) Methode.
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
