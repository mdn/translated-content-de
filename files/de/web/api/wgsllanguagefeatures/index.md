---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 69c9bd804959412056a66ad9c36312c1dff928d8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures` Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern, die die API unterstützen, für WebGPU verfügbar. Wir empfehlen, dass Sie alle Erweiterungen, die Sie nutzen möchten, gründlich testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass das genaue Set von Funktionen je nach Implementierung und physischem Gerät variieren und sich im Laufe der Zeit ändern kann.

- `linear_indexing`
  - : Bietet die folgenden eingebauten Werte, um die manuelle Indexberechnung aus 3D-Koordinaten zu erleichtern, die Lesbarkeit von WGSL-Code zu verbessern und häufige wiederkehrende Berechnungen im Prozess zu eliminieren.
    - `global_invocation_index`: Die lineare Position des aktuellen Aufrufs innerhalb des gesamten Compute-Shader-Gitters. Ein `u32`-Eingabewert, der basierend auf dem `global_invocation_id`, `workgroup_size` und `num_workgroups` berechnet wird.
    - `workgroup_index`: Die lineare Position der aktuellen Arbeitsgruppe im gesamten Compute-Shader-Gitter. Ein `u32`-Eingabewert, bei dem alle Aufrufe innerhalb derselben Arbeitsgruppe denselben Index teilen.

    Siehe [WGSL linear_indexing extension](https://developer.chrome.com/blog/new-in-webgpu-147-148#wgsl_linear_indexing_extension) für weitere Details und ein Beispiel.

- `packed_4x8_integer_dot_product`
  - : Erlaubt die Nutzung von **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Instruktionen über Ihren WGSL-Code. Diese führen effizient 8-Bit-Integer-Dot-Produkte aus, um die Berechnung zu beschleunigen, Speicher und Netzwerkkapazitäten zu sparen und die Leistung im Vergleich zu den äquivalenten `f32`-Versionen zu verbessern. Sie werden häufig in Maschinenlernmodellen zum Inferenzieren innerhalb von KI-Frameworks verwendet.

    Speziell wenn `packed_4x8_integer_dot_product` verfügbar ist, kann der WGSL-Code verwenden:
    - 32-Bit-Ganzzahl-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Ganzzahlen packen, um als Eingaben für Dot-Produkt-Instruktionen genutzt zu werden (über die `dot4U8Packed()` und `dot4I8Packed()` eingebauten Funktionen).
    - Pack- und Unpack-Instruktionen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Ganzzahlen (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht WGSL-Shader-Code den Zugriff auf Komponenten komplexer Datentypen mit demselben Punkt-(`.`)-Syntax, unabhängig davon, ob Sie direkt mit den Daten oder mit einem Zeiger darauf arbeiten.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` ist als bequemere Schreibweise für `(*foo).bar` verfügbar. Der Stern (`*`) wäre normalerweise notwendig, um den Zeiger in eine "Referenz" umzuwandeln, die dereferenziert werden kann, aber jetzt sind Zeiger und Referenzen fast austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punkt-Operator (`.`) funktioniert genau wie gewohnt, um Mitglieder direkt zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann gibt `pa[i]` Ihnen direkten Zugriff auf den Speicherort, an dem das `i`-te Element dieses Arrays gespeichert ist.

    Siehe [Syntax sugar for dereferencing composites in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) für weitere Details und ein Beispiel.

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglicht es, die `"read-only"` und `"read-write"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) Werte festzulegen, wenn Speichertextur-Bind-Group-Eintragstypen in einem Bind-Group-Layout spezifiziert werden. Diese ermöglichen WGSL-Code das Lesen von Speichertexturen und das Lesen/Schreiben von Speichertexturen.

- `subgroup_id`
  - : Wenn verfügbar, sind die [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) eingebauten Werte in Compute-Shadern nutzbar. Diese verbessern das Planen von Arbeiten über Subgruppen hinweg, indem sie den Speicher indexieren, um überlappende Speicherzugriffe zu vermeiden. Siehe [WGSL subgroup_id extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension) für weitere Details.
    > [!NOTE]
    > Damit das `subgroup_id` WGSL-Feature nutzbar ist, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `subgroup_uniformity`
  - : Wenn verfügbar, ändert es den Umfang der Uniformitätsanalyse für die Subgruppen- und Quad-eingebauten Funktionen auf die Subgruppenebene (anstatt auf die Arbeitsgruppenebene). Dieses Feature ermöglicht es, dass Subgruppenfunktionalität in mehr Fällen als uniform betrachtet wird, was die Nutzbarkeit für Entwickler verbessert und die Notwendigkeit verringert, Uniformitätsprüfungen vollständig zu deaktivieren. Eine praktische Auswirkung ist, dass mehr Werte als Subgruppen-uniform betrachtet werden, wie der [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) eingebaute Wert. Siehe [WGSL subgroup_uniformity extension](https://developer.chrome.com/blog/new-in-webgpu-145#wgsl_subgroup_uniformity_extension) für weitere Details.

- `texture_and_sampler_let`
  - : Wenn verfügbar, erlaubt es WGSL-Shadern, Textur- und Sampler-Objekte in `let`-Deklarationen zu speichern.

- `uniform_buffer_standard_layout`
  - : Wenn verfügbar, verwenden Uniform-Buffer dieselben [Speicherlayout-Einschränkungen](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints) wie Speicher-Buffer, was es erleichtert, Datenstrukturen über beide Arten von Buffern hinweg zu teilen. Dies bedeutet, dass Uniform-Buffer nicht mehr zu einer 16-Byte-Ausrichtung bei Array-Elementen oder dazu gezwungen sind, die Offsets von geschachtelten Strukturen auf ein Vielfaches von 16 Byte aufzufüllen.

    Siehe [WGSL uniform_buffer_standard_layout extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension) für weitere Details.

- `unrestricted_pointer_parameters`
  - : Lockert Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden, auf. Wenn verfügbar, sind die folgenden erlaubt:
    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppen-Speicherräume, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Pointers As Function Parameters](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanzeigenschaften

Die folgende Eigenschaft steht allen schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten zur Verfügung:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten zur Verfügung:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen boolean zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge ausgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein **Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden im Set in Einfügereihenfolge vorhandenen Wert auf.

## Beispiele

### Prüfen, ob eine Erweiterung verfügbar ist

```js
if (
  navigator.gpu.wgslLanguageFeatures.has(
    "readonly_and_readwrite_storage_textures",
  )
) {
  console.log("Read-only and read-write storage textures are available");
}
```

### Set-Größe zurückgeben und Werte durchlaufen

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
