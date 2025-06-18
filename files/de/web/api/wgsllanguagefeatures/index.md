---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern verfügbar, die die API unterstützen. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Satz an verfügbaren Funktionen je nach Implementierung und physischen Geräten variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`

  - : Erlaubt **DP4a**-GPU-Instruktionen (Dot Product of 4 Elements and Accumulate) über Ihren WGSL-Code zu verwenden. Diese führen effizient 8-Bit-Integer-Dot-Produkte aus, um die Berechnung zu beschleunigen, sparen Speicher- und Netzwerkbandbreite und verbessern die Leistung im Vergleich zu den entsprechenden `f32`-Versionen. Sie werden häufig in maschinellen Lernmodellen in der Inferenz innerhalb von KI-Frameworks verwendet.

    Insbesondere wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code Folgendes verwenden:

    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren aus 8-Bit-Integern packen, um als Eingaben zu Dot-Produkt-Instruktionen verwendet zu werden (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Pack- und Unpack-Instruktionen mit gepackten 4-Komponenten-Vektoren aus 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `readonly_and_readwrite_storage_textures`

  - : Wenn verfügbar, können die Werte `"read-only"` und `"read-write"` für [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) gesetzt werden, wenn Speicher-Texture-Bind-Group-Entry-Typen in einem Bind-Group-Layout spezifiziert werden. Diese ermöglichen es, dass WGSL-Code Speicher-Texturen lesen und Speicher-Texturen lesen/schreiben kann.

- `unrestricted_pointer_parameters`

  - : Lockerung der Einschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind folgende Dinge erlaubt:

    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppen-Adressräume, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanzeigenschaften

Die folgende Eigenschaft steht allen schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten zur Verfügung:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten zur Verfügung:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in der Reihenfolge der Einfügung ausgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in der Reihenfolge der Einfügung enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden im Set vorhandenen Wert in der Reihenfolge der Einfügung auf.

## Beispiele

### Überprüfen, ob eine Erweiterung verfügbar ist

```js
if (
  navigator.gpu.wgslLanguageFeatures.has(
    "readonly_and_readwrite_storage_textures",
  )
) {
  console.log("Read-only and read-write storage textures are available");
}
```

### Setgröße zurückgeben und durch Werte iterieren

```js
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
