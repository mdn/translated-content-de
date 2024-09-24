---
title: id
slug: Web/HTML/Global_attributes/id
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (mit einem [Fragmentbezeichner](/de/docs/Web/URI#fragment)), Skripting oder Stylen (mit {{glossary("CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Name der Eigenschaft ist das ID-Attribut, und der Wert der Eigenschaft ist das Element. Zum Beispiel, bei einem Markup wie:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Paragraph-Element in JavaScript mit einem Code wie folgendem zugreifen:

```js
const content = window.preamble.textContent;
```

### Syntax

Der Wert eines ID-Attributs darf keine [ASCII-Leerzeichen](/de/docs/Glossary/Whitespace#in_html) enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, so, als ob das Leerzeichen Teil der ID ist. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn jedoch selektiert in CSS, entweder durch JavaScript mit APIs wie {{domxref("Document.querySelector()")}} oder in CSS-Stylesheets, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der Methode {{domxref("CSS.escape_static", "CSS.escape()")}} oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird Entwicklern empfohlen, Werte für ID-Attribute zu wählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

Außerdem sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch darauf zugreifen mit `window["1234"]`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}}, das dieses Attribut widerspiegelt.
- Die Methode {{domxref("Document.getElementById")}}.
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
