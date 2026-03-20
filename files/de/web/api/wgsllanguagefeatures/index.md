---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: a5acd8da14cc41b35cd479cda34f173e8702f992
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setartiges Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set), das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures` Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern, die die API unterstützen, für WebGPU verfügbar. Wir empfehlen Ihnen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Satz an verfügbaren Funktionen je nach Implementierung und physischem Gerät variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Erlaubt die Nutzung von **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Anweisungen über Ihren WGSL-Code. Diese führen effizient 8-Bit-Ganzzahlergebnisprodukte aus, um Berechnungen zu beschleunigen, Speicher- und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32` Versionen zu verbessern. Diese werden häufig in maschinellen Lernmodellen bei der Inferenz innerhalb von KI-Frameworks eingesetzt.

    Speziell, wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code verwenden:
    - 32-Bit-Ganzzahl-Skalare packen 4-Komponenten-Vektoren von 8-Bit-Ganzzahlen, um als Eingaben für Dot-Produkt-Anweisungen (über die `dot4U8Packed()` und `dot4I8Packed()` eingebauten Funktionen) verwendet zu werden.
    - Pack- und Entpack-Anweisungen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Ganzzahlen (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht es, dass WGSL-Shader-Code Komponenten komplexer Datentypen unter Verwendung der gleichen Punkt (`.`) Syntax zugreift, unabhängig davon, ob Sie direkt mit den Daten oder mit einem Zeiger darauf arbeiten.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` kann als bequemere Schreibweise für `(*foo).bar` verwendet werden. Das Asterisk (`*`) wäre normalerweise erforderlich, um den Zeiger in eine "Referenz" zu verwandeln, die dereferenziert werden kann, aber jetzt sind Zeiger und Referenzen nahezu austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punkt (`.`) Operator funktioniert genau so, wie Sie es gewohnt sind, um direkt auf Mitglieder zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann gibt `pa[i]` Ihnen direkten Zugang zu der Speicherstelle, an der das `i`-te Element dieses Arrays gespeichert ist.

    Weitere Details und ein Beispiel finden Sie unter [Syntaxzucker für das Dereferenzieren von Kompositen in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl).

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglicht es das Setzen der `"read-only"` und `"read-write"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) Werte, wenn Speichertextur-Bindgruppe-Eintragstypen in einem Bindgrupp-Layout spezifiziert werden. Diese ermöglichen es WGSL-Code, Speichertexturen zu lesen und Speichertexturen zu lesen/schreiben.

- `subgroup_id`
  - : Wenn verfügbar, sind die WGSL-eingebauten Werte [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) in Rechenshaders nutzbar. Diese verbessern den Prozess der Arbeitsplanung über Untergruppen hinweg, indem der Speicher indiziert wird, um überlappende Speicherzugriffe zu vermeiden. Weitere Details finden Sie unter [WGSL subgroup_id-Erweiterung](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension).
    > [!NOTE]
    > Damit die `subgroup_id` WGSL-Funktion nutzbar ist, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `uniform_buffer_standard_layout`
  - : Wenn verfügbar, verwenden Uniform-Puffer die gleichen [Speicherlayout-Einschränkungen](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints) wie Speicherpuffer, was es erleichtert, Datenstrukturen zwischen beiden Pufferarten zu teilen. Das bedeutet, Uniform-Puffer sind nicht mehr verpflichtet, 16-Byte-Ausrichtung bei Array-Elementen zu haben oder verschachtelte Struktur-Offsets auf ein Vielfaches von 16 Bytes zu polstern.

    Weitere Details finden Sie unter [WGSL uniform_buffer_standard_layout Erweiterung](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension).

- `unrestricted_pointer_parameters`
  - : Lockert die Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden erlaubt:
    - Parameterzeiger zu Speicher-, Uniform- und Arbeitsgruppen-Adressräumen, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Weitere Details finden Sie unter [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/).

## Instanzeigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setartigen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [setartigen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem gegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in der Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in der Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden Wert im Set in der Einfügereihenfolge auf.

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
