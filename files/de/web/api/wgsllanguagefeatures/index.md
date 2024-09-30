---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`WGSLLanguageFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set), das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern verfügbar, die die API unterstützen. Es wird empfohlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die verfügbaren WGSL-Spracherweiterungen können zwischen Implementierungen und physischen Geräten variieren und sich im Laufe der Zeit ändern; daher haben wir sie hier nicht aufgeführt. Eine vollständige Liste finden Sie unter [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation.

## Instanzeigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verfügbar:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden im Set vorhandenen Wert in Einfügereihenfolge auf.

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
