---
title: "HTMLLinkElement: Eigenschaft disabled"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: 7c68e9bbf680784817e6415336c7dde5ae96360a
---

{{APIRef("HTML DOM")}}

Die **`disabled`**-Eigenschaft der Schnittstelle [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) ist ein boolescher Wert, der angibt, ob der Link deaktiviert ist. Sie wirkt sich nur auf Stylesheet-Links aus (Eigenschaft `rel` auf `stylesheet` gesetzt).

Wenn das `disabled`-Attribut im HTML beim Laden spezifiziert ist, wird das Stylesheet nicht während des Seitenladens geladen. Stattdessen wird das Stylesheet nur geladen, wenn die `disabled`-Eigenschaft auf `false` gesetzt oder entfernt wird. Das Festlegen der `disabled`-Eigenschaft mit JavaScript führt dazu, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

Sie spiegelt das `disabled`-Attribut des {{HTMLElement("link")}}-Elements wider.

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

// Set the disabled property to false to enable the stylesheet
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
