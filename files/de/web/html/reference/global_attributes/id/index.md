---
title: HTML id global attribute
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: b756b8ef42bfd3b9e2f3d46fb44d41e2d3f15e25
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert eine Kennung (ID), die innerhalb des gesamten Dokuments einzigartig sein muss.

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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}} enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, so, als ob das Leerzeichen Teil der ID ist. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut, das durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen kann der Wert für ein ID-Attribut jedes andere Unicode-Zeichen enthalten. Wenn dieser jedoch in CSS-Selektoren verwendet wird, entweder aus JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen die Werte der ID-Attribute gültige [CSS-Identifikatoren](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass ein ID-Attributwert, der kein gültiger CSS-Identifikator ist (zum Beispiel `my?id` oder `1234`), vor der Verwendung in einem Selektor entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird Entwicklern empfohlen, Werte für ID-Attribute zu wählen, die gültige CSS-Identifikatoren sind und keine Maskierung erfordern.

Auch sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Identifikatoren. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Identifikator. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch mit `window["1234"]` darauf zugreifen.

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element zu identifizieren, wenn es verlinkt (unter Verwendung eines [Fragmentbezeichners](/de/docs/Web/URI/Reference/Fragment)), gescriptet oder gestylt (mit {{Glossary("CSS", "CSS")}}) wird.

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Name der Eigenschaft der ID-Wert und der Eigenschaftswert das entsprechende Element ist. Zum Beispiel, bei folgendem Markup:

```html
<p id="preamble"></p>
```

Können Sie auf dieses Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Sich auf das Muster `window["id-value"]` oder `window.idValue` zu verlassen, ist riskant und nicht empfohlen, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Wenn zum Beispiel ein Browser in Zukunft eine eingebaute globale Eigenschaft namens `preamble` einführt, könnte Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer die Methode [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder {{domxref("Document.querySelector()")}}, um auf Elemente über ihre ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), welches dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
