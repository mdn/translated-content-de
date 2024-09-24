---
title: "Document: links Eigenschaft"
short-title: links
slug: Web/API/Document/links
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die **`links`** schreibgeschützte Eigenschaft des {{domxref("Document")}} Interfaces gibt eine Sammlung aller {{HTMLElement("area")}} Elementen und {{HTMLElement("a")}} Elementen in einem Dokument zurück, die einen Wert für das [href](/de/docs/Web/HTML/Element/a#href) Attribut haben.

## Wert

Ein {{domxref("HTMLCollection")}}.

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
