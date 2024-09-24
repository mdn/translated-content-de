---
title: "GPU: Eigenschaft wgslLanguageFeatures"
short-title: wgslLanguageFeatures
slug: Web/API/GPU/wgslLanguageFeatures
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`wgslLanguageFeatures`** der {{domxref("GPU")}}-Schnittstelle gibt ein {{domxref("WGSLLanguageFeatures")}}-Objekt zurück, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen stehen WebGPU in allen Browsern zur Verfügung, die die API unterstützen. Wir empfehlen, dass Sie alle Erweiterungen, die Sie verwenden möchten, gründlich testen.

## Wert

Eine Instanz des {{domxref("WGSLLanguageFeatures")}}-Objekts. Dies ist ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

```js
if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Return the size of the set
console.log(wgslFeatures.size);

// Iterate through all the set values using values()
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
