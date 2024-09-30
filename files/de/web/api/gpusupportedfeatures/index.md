---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSupportedFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Auf das `GPUSupportedFeatures`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features) Eigenschaft zugegriffen.

Es ist wichtig zu beachten, dass nicht alle Funktionen in allen Browsern, die WebGPU unterstützen, verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte durch Einschränkungen im zugrunde liegenden System, Browser oder Adapter verursacht werden. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise die Bereitstellung einer Funktion in einer mit einem bestimmten Browser kompatiblen Weise nicht garantieren.
- Der Browser-Anbieter hat möglicherweise noch keinen sicheren Weg gefunden, die Unterstützung für diese Funktion zu implementieren, oder hat es einfach noch nicht geschafft.

Wenn Sie planen, eine spezifische zusätzliche Funktion in einer WebGPU-Anwendung zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Wir haben nicht den genauen Satz zusätzlicher Funktionen aufgelistet, die in WebGPU genutzt werden können, da er je nach Implementierung und physischen Geräten unterschiedlich ist und sich im Laufe der Zeit ändern wird. Eine Liste finden Sie im [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index) der Spezifikation.

## Instanz-Eigenschaften

Die folgenden Eigenschaften sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten aufgeführten Links führen zur {{jsxref("Set")}} globalen Objekt-Referenzseite).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten aufgeführten Links führen zur {{jsxref("Set")}} globalen Objekt-Referenzseite).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt ein Boolean zurück, das angibt, ob ein Element mit dem gegebenen Wert im Set vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfügereihenfolge ausgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft eine bereitgestellte Rückruffunktion einmal für jeden Wert im Set in Einfügereihenfolge auf.

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
