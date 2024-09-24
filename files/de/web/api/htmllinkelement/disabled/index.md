---
title: "HTMLLinkElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: 3b5e12e7abd1204735c35aa760294c907e4159cb
---

{{APIRef("HTML DOM")}}

Die **`disabled`**-Eigenschaft des {{domxref("HTMLLinkElement")}}-Interfaces ist ein boolescher Wert, der angibt, ob der Link deaktiviert ist. Es wirkt sich nur auf Style-Sheet-Links aus (wenn die `rel`-Eigenschaft auf `stylesheet` gesetzt ist).

Wenn das `disabled`-Attribut beim Laden im HTML angegeben ist, wird das Stylesheet während des Seitenladevorgangs nicht geladen. Stattdessen wird das Stylesheet erst geladen, wenn die `disabled`-Eigenschaft auf `false` gesetzt oder entfernt wird. Wird die `disabled`-Eigenschaft mittels JavaScript gesetzt, wird das Stylesheet aus der {{domxref("Document.styleSheets")}}-Liste des Dokuments entfernt.

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
console.log(el.disabled); // Ausgabe: true

// Setzen Sie die disabled-Eigenschaft auf true, um das Stylesheet zu aktivieren

el.disabled = false;
console.log(el.disabled); // Ausgabe: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLScriptElement.integrity")}}
- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
