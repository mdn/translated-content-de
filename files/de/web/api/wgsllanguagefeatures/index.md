---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern verfügbar, die die API unterstützen. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in der WGSL-Spezifikation unter [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) definiert. Beachten Sie, dass der genaue Umfang der verfügbaren Funktionen je nach Implementierung und physischem Gerät variiert und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Erlaubt **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Anweisungen, die über Ihren WGSL-Code verwendet werden. Diese führen effizient 8-Bit-Integer-Skalarprodukt-Berechnungen durch, um die Berechnung zu beschleunigen, Speicher und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in Machine Learning-Modellen für Inferenz innerhalb von KI-Frameworks verwendet.

    Insbesondere wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code:
    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern packen, als Eingaben für Skalarprodukt-Anweisungen nutzen (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Pack- und Entpack-Anweisungen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integern nutzen (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht es WGSL-Shader-Code, Komponenten komplexer Datentypen mit der gleichen Punkt-Schreibweise (`.`) zuzugreifen, unabhängig davon, ob Sie direkt mit den Daten oder mit einem Zeiger darauf arbeiten.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` ist eine bequemere Möglichkeit, um `(*foo).bar` zu schreiben. Das Sternchen (`*`) wäre normalerweise erforderlich, um den Zeiger in eine "Referenz" zu verwandeln, die dereferenziert werden kann, aber jetzt sind sowohl Zeiger als auch Referenzen fast austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punkt-Operator (`.`) funktioniert genau so, wie Sie es gewohnt sind, um direkt auf Mitglieder zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann gibt Ihnen `pa[i]` direkten Zugriff auf die Speicherstelle, an der das `i`te Element dieses Arrays gespeichert ist.

    Siehe [Syntax sugar for dereferencing composites in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) für weitere Details und ein Beispiel.

- `readonly_and_readwrite_storage_textures`
  - : Erlaubt es, die Werte `"read-only"` und `"read-write"` für [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) zu setzen, wenn Speichertexturbindungsgruppen-Eintragstypen in einem Bindungsgruppen-Layout angegeben werden. Diese ermöglichen es WGSL-Code, Speichertexturen zu lesen bzw. Schreib-/Lesezugriff auf Speichertexturen zu haben.

- `subgroup_id`
  - : Wenn verfügbar, können die WGSL-eingebauten Werte [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) in Berechnungsshadern verwendet werden. Sie verbessern den Prozess der Aufgabenplanung über Subgruppen, indem sie Speicher adressieren, um überlappende Speicherzugriffe zu vermeiden. Siehe [WGSL subgroup_id extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension) für weitere Details.
    > [!NOTE]
    > Damit das `subgroup_id` WGSL-Feature genutzt werden kann, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `subgroup_uniformity`
  - : Wenn verfügbar, ändert es den Umfang der Uniformitätsanalyse für die Subgruppen- und Quad-eingebauten Funktionen auf die Subgruppenebene (anstatt der Arbeitsgruppenebene). Diese Funktion ermöglicht es, dass Subgruppen-Funktionalität in mehr Fällen als einheitlich betrachtet wird, was die Benutzerfreundlichkeit für Entwickler verbessert und die Notwendigkeit reduziert, Uniformitätsprüfungen vollständig zu deaktivieren. Eine praktische Folge ist, dass mehr Werte als subgruppen-einheitlich betrachtet werden, wie zum Beispiel der eingebaute Wert [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id). Siehe [WGSL subgroup_uniformity extension](https://developer.chrome.com/blog/new-in-webgpu-145#wgsl_subgroup_uniformity_extension) für weitere Details.

- `texture_and_sampler_let`
  - : Wenn verfügbar, erlaubt es WGSL-Shadern, Texture- und Sampler-Objekte in `let`-Deklarationen zu speichern.

- `uniform_buffer_standard_layout`
  - : Wenn verfügbar, verwenden Uniformpuffer die gleichen [Speicherlayout-Beschränkungen](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints) wie Speicherpuffer, was es erleichtert, Datenstrukturen über beide Arten von Puffern zu teilen. Das bedeutet, dass Uniformpuffer nicht mehr dazu gezwungen sind, eine 16-Byte-Ausrichtung bei Array-Elementen zu haben oder die Versätze verschachtelter Strukturen auf ein Vielfaches von 16 Bytes zu füllen.

    Siehe [WGSL uniform_buffer_standard_layout extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension) für weitere Details.

- `unrestricted_pointer_parameters`
  - : Lockert die Einschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden erlaubt:
    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppenadressenräume, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Pointers As Function Parameters](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
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
