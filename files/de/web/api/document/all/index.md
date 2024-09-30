---
title: "Document: all-Eigenschaft"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`all`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die am Dokumentknoten verankert ist.

Statt `document.all` zu verwenden, um eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) aller Elemente des Dokuments in Dokumentreihenfolge zurückzugeben, können Sie [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) verwenden, um eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente des Dokuments in Dokumentreihenfolge zurückzugeben:

```js
const allElements = document.querySelectorAll("*");
```

## Wert

Eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection), die jedes Element im Dokument enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
