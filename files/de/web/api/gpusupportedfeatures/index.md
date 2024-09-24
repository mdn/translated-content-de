---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUSupportedFeatures`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} ist ein einem [`Set`-ähnlichen Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem {{domxref("GPUAdapter")}} unterstützt werden.

Auf das `GPUSupportedFeatures`-Objekt für den aktuellen Adapter wird über die {{domxref("GPUAdapter.features")}}-Eigenschaft zugegriffen.

Sie sollten beachten, dass nicht alle Funktionen in allen Browsern, die WebGPU unterstützen, verfügbar sein werden, selbst wenn die Funktionen durch die zugrunde liegende Hardware unterstützt werden. Dies könnte aufgrund von Einschränkungen im zugrunde liegenden System, Browser oder Adapter der Fall sein. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise nicht garantieren, dass eine Funktion auf eine Weise bereitgestellt wird, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, um die Unterstützung für diese Funktion zu implementieren, oder hat sich einfach noch nicht damit befasst.

Wenn Sie hoffen, eine bestimmte zusätzliche Funktion in einer WebGPU-Anwendung zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Wir haben nicht die genaue Menge der zusätzlichen Funktionen aufgelistet, die in WebGPU verwendet werden können, da sie zwischen Implementierungen und physischen Geräten variieren und sich im Laufe der Zeit ändern werden. Für eine Liste verweisen wir auf den [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index) in der Spezifikation.

## Instanzen-Eigenschaften

Die folgenden Eigenschaften sind allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten stehenden Links verweisen auf die Referenzseite des globalen Objekts {{jsxref("Set")}}).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzen-Methoden

Die folgenden Methoden sind allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die untenstehenden Links verweisen auf die Referenzseite des globalen Objekts {{jsxref("Set")}}).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfügungsreihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügungsreihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft eine bereitgestellte Callback-Funktion einmal für jeden im Set vorhandenen Wert in Einfügungsreihenfolge auf.

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
