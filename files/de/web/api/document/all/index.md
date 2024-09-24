---
title: "Dokument: all-Eigenschaft"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`all`**-Eigenschaft der {{DOMxRef("Document")}}-Schnittstelle gibt eine {{DOMxRef("HTMLAllCollection")}} zurück, die am Dokumentknoten verwurzelt ist.

Anstatt `document.all` zu verwenden, um eine {{DOMxRef("HTMLAllCollection")}} aller Elemente des Dokuments in Dokumentreihenfolge zurückzugeben, können Sie {{DOMxRef("Document.querySelectorAll")}} verwenden, um eine {{DOMxRef("NodeList")}} aller Elemente des Dokuments in Dokumentreihenfolge zurückzugeben:

```js
const allElements = document.querySelectorAll("*");
```

## Wert

Eine {{DOMxRef("HTMLAllCollection")}}, die jedes Element im Dokument enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
