---
title: "GPU: wgslLanguageFeatures-Eigenschaft"
short-title: wgslLanguageFeatures
slug: Web/API/GPU/wgslLanguageFeatures
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`wgslLanguageFeatures`**-Eigenschaft der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt ein [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures)-Objekt zurück, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern, die die API unterstützen, für WebGPU verfügbar. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

## Wert

Ein [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures)-Objektinstanz. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
