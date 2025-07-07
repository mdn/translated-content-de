---
title: HTML id globales Attribut
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 8552ea571cb0a51504a5985dbe44f2e0370159b8
---

{{HTMLSidebar("Global_attributes")}}

Das **`id`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) definiert eine Kennung (ID), die innerhalb des gesamten Dokuments eindeutig sein muss.

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

Der Wert eines ID-Attributs darf keine {{Glossary("Whitespace#in_html", "ASCII-Leerzeichen")}}-Zeichen enthalten. Browser behandeln nicht konforme IDs, die Leerzeichen enthalten, so, als wären die Leerzeichen Teil der ID. Im Gegensatz zum [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut, das durch Leerzeichen getrennte Werte zulässt, können Elemente nur einen einzigen ID-Wert haben.

Technisch kann der Wert eines ID-Attributs jedes andere Unicode-Zeichen enthalten. Wenn es jedoch in CSS-Selektoren verwendet wird, sei es von JavaScript über APIs wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder in CSS-Stylesheets, müssen ID-Attributwerte gültige [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. Das bedeutet, dass wenn ein ID-Attributwert kein gültiger CSS-Bezeichner ist (zum Beispiel `my?id` oder `1234`), er vor der Verwendung in einem Selektor entweder mit der [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)-Methode oder [manuell](/de/docs/Web/CSS/ident#escaping_characters) maskiert werden muss.

Aus diesem Grund wird Entwicklern empfohlen, für ID-Attribute Werte zu wählen, die gültige CSS-Bezeichner sind und kein Maskieren erfordern.

Auch sind nicht alle gültigen ID-Attributwerte gültige JavaScript-Bezeichner. Zum Beispiel ist `1234` ein gültiger Attributwert, aber kein gültiger JavaScript-Bezeichner. Das bedeutet, dass der Wert kein gültiger Variablenname ist, sodass Sie nicht auf das Element mit Code wie `window.1234` zugreifen können. Allerdings können Sie darauf mit `window["1234"]` zugreifen.

## Beschreibung

Der Zweck des ID-Attributs besteht darin, ein einzelnes Element beim Verlinken (mithilfe eines [Fragmentidentifikators](/de/docs/Web/URI/Reference/Fragment)), beim Skripten oder beim Styling (mit {{Glossary("CSS", "CSS")}}) zu identifizieren.

Sie können auf Elemente mit ID-Attributen als globale Eigenschaften des `window`-Objekts zugreifen, wobei der Eigenschaftsname der ID-Wert und der Eigenschaftswert das entsprechende Element ist. Zum Beispiel, gegeben diesem Markup:

```html
<p id="preamble"></p>
```

Können Sie auf dieses Absatz-Element in JavaScript mit folgendem Code zugreifen:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Es ist gefährlich und wird nicht empfohlen, sich auf das Muster `window["id-value"]` oder `window.idValue` zu verlassen, da es zu unerwarteten Konflikten mit bestehenden oder zukünftigen APIs im Browser führen kann.
> Zum Beispiel, wenn ein Browser in Zukunft eine eingebaute globale Eigenschaft namens `preamble` einführt, könnte Ihr Code möglicherweise nicht mehr auf das HTML-Element zugreifen.
> Um solche Konflikte zu vermeiden, verwenden Sie immer die Methoden [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) oder [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf Elemente über die ID zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`Element.id`](/de/docs/Web/API/Element/id), das dieses Attribut widerspiegelt.
- Die Methode [`Document.getElementById`](/de/docs/Web/API/Document/getElementById).
- CSS [ID-Selektoren](/de/docs/Web/CSS/ID_selectors).
