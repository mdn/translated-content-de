---
title: "Document: implementation-Eigenschaft"
short-title: implementation
slug: Web/API/Document/implementation
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`implementation`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt ein [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Objekt zurück, das dem aktuellen Dokument zugeordnet ist.

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

Die DOM-Level-1-Empfehlung des W3C spezifizierte nur die Methode `hasFeature`. Mit ihr lässt sich feststellen, ob ein Browser ein DOM-Modul unterstützt (siehe das obige Beispiel und [Welche Unterstützung gibt Ihr User-Agent an?](https://www.w3.org/2003/02/06-dom-support.html)). Sofern verfügbar, bieten andere Methoden von `DOMImplementation` Funktionen zur Steuerung von Vorgängen außerhalb eines einzelnen Dokuments. Beispielsweise umfasst die Schnittstelle `DOMImplementation` die Methode `createDocumentType`, mit der DTDs für ein oder mehrere von der Implementierung verwaltete Dokumente erstellt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
