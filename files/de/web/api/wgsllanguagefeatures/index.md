---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`WGSLLanguageFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die vom WebGPU implementierten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern verfügbar, die die API unterstützen. Wir empfehlen, alle Erweiterungen, die Sie nutzen möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in der WGSL-Spezifikation unter [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) definiert. Beachten Sie, dass der genaue Satz an verfügbaren Funktionen je nach Implementierung und physischem Gerät variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`

  - : Ermöglicht die Nutzung von **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Anweisungen über Ihren WGSL-Code. Diese führen effizient 8-Bit-Integer-Skalarmultiplikationen durch, um Berechnungen zu beschleunigen, Speicher- und Netzwerkkapazitäten zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in maschinellen Lernmodellen beim Inferencing innerhalb von KI-Frameworks verwendet.

    Insbesondere, wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code verwenden:

    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern packen, um als Eingaben für Skalarmultiplikationsanweisungen verwendet zu werden (über die `dot4U8Packed()` und `dot4I8Packed()` eingebauten Funktionen).
    - Pack- und Entpack-Anweisungen mit verpackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebettete Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `readonly_and_readwrite_storage_textures`

  - : Wenn verfügbar, ermöglicht dies die Festlegung der `"read-only"`- und `"read-write"`-Werte für [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access), wenn Speichertextur-Bindungsgruppeneinträge in einem Bindungsguppierungs-Layout spezifiziert werden. Diese ermöglichen es dem WGSL-Code, Speichertexturen zu lesen und Speichertexturen zu lesen/schreiben.

- `unrestricted_pointer_parameters`

  - : Lockert die Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind Folgendes zulässig:

    - Parameterzeiger zu Speicher-, Uniform- und Workgroup-Addressräumen, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturelemente und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Weitere Einzelheiten finden Sie unter [Pointers As Function Parameters](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/).

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge zurückgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden im Set vorhandenen Wert in der Einfügereihenfolge auf.

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

### Set-Größe zurückgeben und durch Werte iterieren

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
