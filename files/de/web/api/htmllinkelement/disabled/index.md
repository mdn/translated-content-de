---
title: "HTMLLinkElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: 3b5e12e7abd1204735c35aa760294c907e4159cb
---

{{APIRef("HTML DOM")}}

Die **`disabled`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle ist ein boolescher Wert, der darstellt, ob der Link deaktiviert ist. Sie hat nur einen Effekt bei Stylesheet-Links (wenn die `rel`-Eigenschaft auf `stylesheet` gesetzt ist).

Wenn das `disabled`-Attribut in HTML spezifiziert ist, wenn die Seite geladen wird, wird das Stylesheet nicht während des Seitenladevorgangs geladen. Stattdessen wird das Stylesheet nur geladen, wenn die `disabled`-Eigenschaft auf `false` gesetzt oder entfernt wird. Wenn die `disabled`-Eigenschaft mit JavaScript gesetzt wird, wird das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt.

Es spiegelt das `disabled`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  disabled
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.disabled); // Output: true

// Set the disabled property to true to enable the stylesheet

el.disabled = false;
console.log(el.disabled); // Output: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
