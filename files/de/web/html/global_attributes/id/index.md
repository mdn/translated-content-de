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

Der Zweck des ID-Attributs ist es, ein einzelnes Element beim Verlinken (mit einem [Fragmentbezeichner](/de/docs/Web/URI#fragment)), beim Skripting oder Stylen (mit [CSS](/de/docs/Glossary/CSS)) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, bei folgendem Markup:

```html
<p id="preamble"></p>
```

Könnten Sie auf das Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

### Syntax

Der Wert eines ID-Attributs darf keine [ASCII-Leerzeichen](/de/docs/Glossary/Whitespace#in_html) enthalten. Browser behandeln nicht-konforme IDs, die Leerzeichen enthalten, so, als wären die Leerzeichen Teil der ID. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut, welches durch Leerzeichen getrennte Werte erlaubt, können Elemente nur einen einzigen ID-Wert haben.

Technisch gesehen darf der Wert für ein ID-Attribut jedes andere Unicode-Zeichen enthalten. Wenn sie jedoch in CSS-Selektoren verwendet werden, entweder von JavaScript aus mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stilen, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass, wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)-Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) escaped werden muss.

Aus diesem Grund wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind, die kein Escaping erfordern.

Zudem sind nicht alle gültigen ID-Attributwerte auch gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Sie können jedoch darauf zugreifen mit `window["1234"]`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die [`Document.getElementById`](/de/docs/Web/API/Document/getElementById)-Methode.
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
