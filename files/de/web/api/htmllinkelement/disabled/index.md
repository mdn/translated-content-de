---
title: "HTMLLinkElement: disabled Eigenschaft"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`disabled`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein boolescher Wert, der angibt, ob der Link deaktiviert ist. Sie hat nur eine Wirkung bei Stylesheet-Links (wenn die `rel`-Eigenschaft auf `stylesheet` gesetzt ist).

Wenn das `disabled`-Attribut im HTML beim Laden der Seite angegeben wird, wird das Stylesheet nicht während des Seitenladevorgangs geladen. Stattdessen wird das Stylesheet nur geladen, wenn die `disabled`-Eigenschaft auf `false` gesetzt oder entfernt wird. Wenn die `disabled`-Eigenschaft per JavaScript gesetzt wird, wird das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt.

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
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
