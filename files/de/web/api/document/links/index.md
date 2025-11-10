---
title: "Dokument: links-Eigenschaft"
short-title: links
slug: Web/API/Document/links
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("DOM") }}

Die **`links`**-Schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine Sammlung aller {{HTMLElement("area")}}-Elemente und {{HTMLElement("a")}}-Elemente in einem Dokument zurück, die einen Wert für das [href](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut haben.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

```js
for (const link of document.links) {
  const linkHref = document.createTextNode(link.href);
  const lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
