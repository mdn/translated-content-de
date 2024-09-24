---
title: "Dokument: Implementierungseigenschaft"
short-title: Implementierung
slug: Web/API/Document/implementation
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.implementation`** Eigenschaft gibt ein
{{domxref("DOMImplementation")}} Objekt zurück, das mit dem aktuellen Dokument verknüpft ist.

## Wert

Ein {{domxref("DOMImplementation")}} Objekt.

## Beispiele

```js
const modName = "HTML";
const modVer = "2.0";
const conformTest = document.implementation.hasFeature(modName, modVer);

console.log(`DOM ${modName} ${modVer} supported?: ${conformTest}`);

// Log: "DOM HTML 2.0 supported?: true" (hasFeature always returns true)
```

> [!WARNING]
> Verwenden Sie dies nicht zur Erkennung von Funktionen. Die `hasFeature()` Methode gibt immer true zurück.

## Hinweise

Die W3C DOM Level 1 Empfehlung spezifizierte nur die `hasFeature` Methode, die eine Möglichkeit bietet, festzustellen, ob ein DOM-Modul von einem Browser unterstützt wird (siehe Beispiel oben und [Welche Funktionen unterstützt Ihr User-Agent?](https://www.w3.org/2003/02/06-dom-support.html)). Falls verfügbar, bieten andere `DOMImplementation` Methoden Dienste zur Steuerung von Funktionen außerhalb eines einzelnen Dokuments. Zum Beispiel enthält die `DOMImplementation` Schnittstelle eine `createDocumentType` Methode, mit der DTDs für eines oder mehrere von der Implementierung verwaltete Dokumente erstellt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
