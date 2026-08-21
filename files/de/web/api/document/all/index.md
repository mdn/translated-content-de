---
title: "Dokument: all-Eigenschaft"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die schreibgeschützte **`all`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die im Dokument-Knoten verwurzelt ist.

Statt `document.all` zu verwenden, um eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) aller Elemente des Dokuments in Dokumentenreihenfolge zurückzugeben, können Sie [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) verwenden, um eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente des Dokuments in Dokumentenreihenfolge zurückzugeben:

```js
const allElements = document.querySelectorAll("*");
```

## Wert

Eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection), die jedes Element im Dokument enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
