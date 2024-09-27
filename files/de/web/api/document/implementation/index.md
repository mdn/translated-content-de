---
title: "Document: implementation-Eigenschaft"
short-title: implementation
slug: Web/API/Document/implementation
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.implementation`**-Eigenschaft gibt ein [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Objekt zurück, das mit dem aktuellen Dokument verknüpft ist.

## Wert

Ein [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Objekt.

## Beispiele

```js
const modName = "HTML";
const modVer = "2.0";
const conformTest = document.implementation.hasFeature(modName, modVer);

console.log(`DOM ${modName} ${modVer} supported?: ${conformTest}`);

// Log: "DOM HTML 2.0 supported?: true" (hasFeature always returns true)
```

> [!WARNING]
> Verwenden Sie dies nicht zur Feature-Erkennung. Die Methode `hasFeature()` gibt immer true zurück.

## Hinweise

Die DOM-Level-1-Empfehlung des W3C spezifizierte nur die `hasFeature`-Methode, die eine Möglichkeit darstellt, um festzustellen, ob ein DOM-Modul von einem Browser unterstützt wird (siehe Beispiel oben und [Was behauptet Ihr User-Agent zu unterstützen?](https://www.w3.org/2003/02/06-dom-support.html)). Wenn verfügbar, bieten andere `DOMImplementation`-Methoden Dienste zur Steuerung von Dingen außerhalb eines einzelnen Dokuments. Zum Beispiel enthält die `DOMImplementation`-Schnittstelle eine `createDocumentType`-Methode, mit der DTDs für ein oder mehrere Dokumente erstellt werden können, die von der Implementierung verwaltet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
