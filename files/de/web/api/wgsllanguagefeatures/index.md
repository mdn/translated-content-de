---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: f96831c18cfe5cc7d1e4c2fa321c83964c6bab89
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set), das die [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet, die von der WebGPU-Implementierung unterstützt werden.

Das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft aufgerufen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in WebGPU in allen Browsern verfügbar, die die API unterstützen. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind unter [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass die genaue Menge verfügbarer Funktionen je nach Implementierung und physischem Gerät variiert und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Ermöglicht **DP4a** (Dot-Produkt von 4 Elementen und Akkumulation) GPU-Instruktionen, die über Ihren WGSL-Code verwendet werden können. Diese führen effizient 8-Bit-Integer-Dot-Produkte aus, um die Berechnung zu beschleunigen, den Speicher- und Netzwerkbandbreitenbedarf zu reduzieren und die Leistung im Vergleich zu den äquivalenten `f32`-Versionen zu verbessern. Sie werden häufig in maschinellen Lernmodellen zur Inferenzierung innerhalb von KI-Frameworks verwendet.

    Speziell, wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code verwenden:
    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integers packen, um als Eingaben für Dot-Produkt-Instruktionen verwendet zu werden (über die `dot4U8Packed()` und `dot4I8Packed()` eingebauten Funktionen).
    - Pack- und Unpack-Instruktionen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integers (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht WGSL-Shader-Code, Komponenten komplexer Datentypen mit der gleichen Punkt-Notation (`.`) zuzugreifen, unabhängig davon, ob Sie direkt mit den Daten oder mit einem Zeiger darauf arbeiten.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` ist als bequemere Schreibweise für `(*foo).bar` verfügbar. Der Asterisk (`*`) würde normalerweise benötigt, um den Zeiger in eine "Referenz" zu verwandeln, die dereferenziert werden kann, aber nun sind Zeiger und Referenzen nahezu austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punkt-Operator (`.`) funktioniert genau so, wie Sie es gewohnt sind, um direkt auf Mitglieder zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann gibt `pa[i]` direkten Zugriff auf die Speicherstelle, an der das `i`te Element dieses Arrays gespeichert ist.

    Siehe [Syntaxzucker für Dereferenzieren von Kompositen in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) für weitere Details und ein Beispiel.

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglichen die `"read-only"` und `"read-write"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)-Werte, beim Festlegen von Speichertextur-Bindegruppen-Typen in einem Bindegruppenlayout verwendet zu werden. Diese ermöglichen WGSL-Code, Speichertexturen zu lesen und zu beschreiben bzw. zu lesen und zu schreiben.

- `subgroup_id`
  - : Wenn verfügbar, sind die [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) eingebauten WGSL-Werte in Rechenshaders nutzbar. Diese verbessern den Prozess der Arbeitsscheduling über Untergruppen, indem sie den Speicher indexieren, um überlappende Speicherzugriffe zu vermeiden. Sehen Sie [WGSL subgroup_id extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension) für weitere Details.
    > [!NOTE]
    > Damit die `subgroup_id` WGSL-Funktion nutzbar ist, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups)-Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `subgroup_uniformity`
  - : Wenn verfügbar, ändert den Gültigkeitsbereich der Uniformitätsanalyse für die Untergruppe und die Quad eingebauten Funktionen auf die Untergruppenebene (anstatt der Arbeitsgruppeneebene). Diese Funktion ermöglicht die Betrachtung von Untergruppenfunktionalität als uniform in mehr Fällen, verbessert die Benutzerfreundlichkeit für Entwickler und reduziert die Notwendigkeit, Uniformitätsprüfungen ganz zu deaktivieren. Eine praktische Auswirkung ist, dass mehr Werte als untergruppenuniform betrachtet werden, wie der [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) eingebaute Wert. Sehen Sie [WGSL subgroup_uniformity extension](https://developer.chrome.com/blog/new-in-webgpu-145#wgsl_subgroup_uniformity_extension) für weitere Details.

- `texture_and_sampler_let`
  - Wenn verfügbar, erlaubt es WGSL-Shaders, Textur- und Sampler-Objekte in `let`-Deklarationen zu speichern.

- `uniform_buffer_standard_layout`
  - : Wenn verfügbar, nutzen Uniformpuffer die gleichen [Speicherlayout-Einschränkungen](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints) wie Speicherpuffer, was es einfacher macht, Datenstrukturen über beide Arten von Puffern hinweg zu teilen. Das bedeutet, dass Uniformpuffer nicht mehr eine 16-Byte-Ausrichtung bei Array-Elementen haben müssen oder verschachtelte Strukturoffsets auf ein Vielfaches von 16 Bytes aufgefüllt werden müssen.

    Siehe [WGSL uniform_buffer_standard_layout extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension) für weitere Details.

- `unrestricted_pointer_parameters`
  - : Lockert Einschränkungen bei Zeigern, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind folgende erlaubt:
    - Parameterzeiger zu Speicher-, Uniform- und Arbeitsgruppenadressräumen, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanzeigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem gegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge ausgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden im Set enthaltenen Wert in Einfügereihenfolge auf.

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
