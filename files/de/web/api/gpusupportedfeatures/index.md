---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSupportedFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Das `GPUSupportedFeatures`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features)-Eigenschaft abgerufen.

Sie sollten beachten, dass nicht alle Funktionen in WebGPU in allen unterstützenden Browsern verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte aufgrund von Einschränkungen im zugrunde liegenden System, Browser oder Adapter der Fall sein. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise die Exponierung einer Funktion nicht in einer Weise garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, die Unterstützung für diese Funktion zu implementieren, oder hat möglicherweise noch keine Zeit dafür gefunden.

Wenn Sie hoffen, eine spezifische zusätzliche Funktion in einer WebGPU-Anwendung zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Wir haben nicht die exakte Menge der zusätzlichen Funktionen aufgeführt, die in WebGPU verwendet werden können, da diese zwischen Implementierungen und physischen Geräten variieren und sich im Laufe der Zeit ändern wird. Für eine Liste verweisen wir auf den [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index) in der Spezifikation.

## Instanzeigenschaften

Die folgenden Eigenschaften sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die untenstehenden Links verweisen auf die {{jsxref("Set")}}-Referenzseite des globalen Objekts).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die untenstehenden Links verweisen auf die {{jsxref("Set")}}-Referenzseite des globalen Objekts).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in der Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in der Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft eine bereitgestellte Rückruffunktion einmal für jeden im Set vorhandenen Wert in der Einfügereihenfolge auf.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterFeatures = adapter.features;

  // Return the size of the set
  console.log(adapterFeatures.size);

  // Check whether a feature is supported by the adapter
  console.log(adapterFeatures.has("texture-compression-astc"));

  // Iterate through all the set values using values()
  const valueIterator = adapterFeatures.values();
  for (const value of valueIterator) {
    console.log(value);
  }

  // Iterate through all the set values using keys()
  const keyIterator = adapterFeatures.keys();
  for (const value of keyIterator) {
    console.log(value);
  }

  // Iterate through all the set values using entries()
  const entryIterator = adapterFeatures.entries();
  for (const entry of entryIterator) {
    console.log(entry[0]);
  }

  // Iterate through all the set values using forEach()
  adapterFeatures.forEach((value) => {
    console.log(value);
  });

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
