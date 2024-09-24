---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die vom WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die {{domxref("GPU.wgslLanguageFeatures")}}-Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen stehen WebGPU in allen Browsern, die die API unterstützen, zur Verfügung. Wir empfehlen, dass Sie alle Erweiterungen, die Sie verwenden möchten, gründlich testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die verfügbaren WGSL-Spracherweiterungen können je nach Implementierung und physischem Gerät variieren und sich im Laufe der Zeit ändern; wir haben sie daher hier nicht aufgelistet. Für eine vollständige Liste konsultieren Sie bitte die [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation.

## Instanzeigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte in der Menge zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert in der Menge vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element in der Menge in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element in der Menge in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden in Einfügereihenfolge in der Menge vorhandenen Wert auf.

## Beispiele

```js
if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Die Größe der Menge zurückgeben
console.log(wgslFeatures.size);

// Alle Werte der Menge mit values() durchlaufen
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
