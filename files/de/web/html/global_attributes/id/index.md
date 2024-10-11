---
title: id
slug: Web/HTML/Global_attributes/id
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) definiert einen Bezeichner (ID), der im gesamten Dokument einzigartig sein muss.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

## Beschreibung

Der Zweck des ID-Attributs ist es, ein einzelnes Element beim Verlinken (mittels eines [Fragment-Bezeichners](/de/docs/Web/URI#fragment)), Scripting oder Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Elemente mit ID-Attributen sind als globale Eigenschaften verfügbar. Der Eigenschaftsname ist das ID-Attribut, und der Eigenschaftswert ist das Element. Zum Beispiel, bei einem Markup wie:

```html
<p id="preamble"></p>
```

könnten Sie auf das Absatz-Element in JavaScript mit einem Code wie diesem zugreifen:

```js
const content = window.preamble.textContent;
```

### Syntax

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerraumzeichen")}} enthalten. Browser behandeln nicht-konforme IDs, die Leerzeichen enthalten, als ob das Leerzeichen Teil der ID wäre. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut, welches durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzelnen ID-Wert haben.

Technisch kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn der ID-Attributwert jedoch in CSS-Selektoren verwendet wird, entweder von JavaScript mit APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, muss der ID-Attributwert ein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), muss er, bevor er in einem Selektor verwendet wird, entweder mit der Methode [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) geleitet werden.

Daher wird empfohlen, dass Entwickler Werte für ID-Attribute wählen, die gültige CSS-Bezeichner sind und kein Escaping erfordern.

Außerdem sind nicht alle gültigen ID-Attributwerte auch gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert aber kein gültiger JavaScript-Bezeichner. Dies bedeutet, dass der Wert kein gültiger Variablenname ist, sodass das Element nicht mit Code wie `window.1234` zugänglich ist. Allerdings können Sie darauf zugreifen, indem Sie `window["1234"]` verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
