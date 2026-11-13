---
title: "Document: scripts-Eigenschaft"
short-title: scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`scripts`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt eine Liste der {{HTMLElement("script")}}-Elemente im Dokument zurück. Das zurückgegebene Objekt ist eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Sie können wie bei einem Array auf die Elemente der Liste zugreifen.

## Beispiele

Dieses Beispiel prüft, ob die Seite {{HTMLElement("script")}}-Elemente enthält.

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
