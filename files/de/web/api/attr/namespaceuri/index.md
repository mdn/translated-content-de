---
title: "Eigenschaft: namespaceURI von Attr"
short-title: namespaceURI
slug: Web/API/Attr/namespaceURI
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`namespaceURI`**-Eigenschaft der {{domxref("Attr")}}-Schnittstelle gibt die Namespace-URI des Attributs zurück oder `null`, wenn das Element nicht in einem Namespace ist.

Die Namespace-URI wird bei der Erstellung des {{domxref("Attr")}} festgelegt und kann nicht geändert werden. Ein Attribut mit einem Namespace kann mithilfe von {{domxref("Element.setAttributeNS()")}} erstellt werden.

> [!NOTE]
> Ein Attribut erbt seinen Namespace nicht von dem Element, an dem es angefügt ist. Wenn einem Attribut kein Namespace explizit zugewiesen wird, hat es keinen Namespace.

Der Browser führt keine Namespace-Validierung durch. Es liegt am JavaScript-Anwendungscode, die notwendigen Überprüfungen vorzunehmen. Beachten Sie auch, dass das Namespace-Präfix, sobald es einem bestimmten Attributknoten zugeordnet ist, nicht geändert werden kann.

## Wert

Ein String, der die URI des Namespaces enthält, oder `null`, wenn das Attribut nicht in einem Namespace ist.

## Beispiel

Das folgende Beispiel zeigt die Ergebnisse für ein Attribut mit Präfix im Fall eines HTML-Elements und eines SVG-Elements. Da HTML keine Namespaces behandelt, wird in diesem Fall immer `null` zurückgegeben. Im Fall des SVG-Elements wird die URI des XML-Namespaces zurückgegeben, `http://www.w3.org/XML/1998/namespace`.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Klicken Sie mich</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Wert für &lt;svg&gt; anzeigen</button>
  <button>Wert für &lt;label&gt; anzeigen</button>
</p>

<p>
  Namespace-URI des Attributs <code>xml:lang</code>:
  <output id="result">Keine.</output>
</p>
```

### JavaScript

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.namespaceURI;
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften {{domxref("Attr.name")}}, die den qualifizierten Namen des Attributs zurückgeben, {{domxref("Attr.localName")}}, den lokalen Teil des Namens, und {{domxref("Attr.prefix")}}, das Namespace-Präfix.
- Die {{domxref("Element.namespaceURI")}}-Eigenschaft, die äquivalent zu dieser ist, aber für ein {{domxref("Element")}}.
- Die Methode {{domxref("Element.setAttributeNS()")}}, die ein Attribut mit einem gegebenen Namespace erstellt.
