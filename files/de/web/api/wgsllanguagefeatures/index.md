---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: e3c2148d226a4a1143fbe0dbde1af50a7400b971
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die vom WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft aufgerufen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern, die die API unterstützen, für WebGPU verfügbar. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Satz an verfügbaren Funktionen zwischen Implementierungen und physischen Geräten variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`

  - : Erlaubt **DP4a**-GPU-Anweisungen (Dot Product of 4 Elements and Accumulate), die über Ihren WGSL-Code verwendet werden können. Diese führen effizient 8-Bit-Integer-Punktprodukte aus, um Berechnungen zu beschleunigen, Speicher und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in inferenzierenden Maschinenlernmodellen innerhalb von KI-Frameworks eingesetzt.

    Insbesondere kann bei Verfügbarkeit von `packed_4x8_integer_dot_product` WGSL-Code verwenden:

    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern verpacken, um als Eingaben für Punktproduktanweisungen verwendet zu werden (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Verpackungs- und Entpackungsanweisungen mit verpackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `readonly_and_readwrite_storage_textures`

  - : Ermöglicht, wenn verfügbar, die Angabe der Werte `"read-only"` und `"read-write"` für [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access), wenn Speichertextur-Bindgruppen-Eintragstypen in einem Bindgruppenlayout angegeben werden. Diese erlauben WGSL-Code das Lesen von Speichertexturen oder das Lesen und Schreiben von Speichertexturen.

- `unrestricted_pointer_parameters`

  - : Lockert die Einschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden erlaubt:

    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppenspeicher, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanzeigenschaften

Die folgende Eigenschaft ist in allen schreibgeschützten [set-ähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten verfügbar:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind in allen schreibgeschützten [set-ähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem gegebenen Wert im Set vorhanden ist oder nicht.
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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
