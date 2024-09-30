---
title: "Document: scripts-Eigenschaft"
short-title: scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`scripts`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine Liste der {{HTMLElement("script")}}-Elemente im Dokument zurück. Das zurückgegebene Objekt ist eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Sie können diese wie ein Array verwenden, um alle Elemente in der Liste zu erhalten.

## Beispiele

Dieses Beispiel überprüft, ob die Seite {{HTMLElement("script")}}-Elemente enthält.

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
