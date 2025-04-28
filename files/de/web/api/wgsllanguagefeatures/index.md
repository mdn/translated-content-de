---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft aufgerufen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern, die die API unterstützen, verfügbar. Es wird empfohlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind unter [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Funktionsumfang je nach Implementierung und physischem Gerät variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`

  - : Ermöglicht **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Anweisungen, die über Ihren WGSL-Code verwendet werden können. Diese führen effizient 8-Bit-Integer-Dot-Produkte aus, um die Berechnung zu beschleunigen, Speicher und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in maschinellen Lernmodellen bei der Inferenzierung innerhalb von KI-Frameworks verwendet.

    Insbesondere wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code Folgendes verwenden:

    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern packen, um als Eingaben zu Dot-Produkt-Anweisungen zu dienen (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Packer- und Entpacker-Anweisungen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `readonly_and_readwrite_storage_textures`

  - : Wenn verfügbar, erlaubt es die Festlegung der `"read-only"` und `"read-write"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) Werte beim Spezifizieren von Speichertextur-Bindgruppeneintragstypen in einem Bindgruppen-Layout. Diese ermöglichen es WGSL-Code, Speichertexturen zu lesen und Speichertexturen zu lesen/schreiben.

- `unrestricted_pointer_parameters`

  - : Lockert die Einschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden zulässig:

    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppenspeicheradressen können an vom Benutzer deklarierte Funktionen übergeben werden.
    - Zeiger auf Strukturelemente und Array-Elemente können an vom Benutzer deklarierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden im Set vorhandenen Wert in Einfügereihenfolge auf.

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
