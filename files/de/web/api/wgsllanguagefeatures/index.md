---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 7b753f510ca41b5b067b200b6eb3698027503e2e
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`WGSLLanguageFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) berichtet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern verfügbar, die die API unterstützen. Es wird empfohlen, Erweiterungen, die Sie nutzen möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Satz der verfügbaren Funktionen je nach Implementierung und physischem Gerät variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Ermöglicht die Verwendung von **DP4a** (Dot Product of 4 Elements and Accumulate) GPU-Anweisungen über Ihren WGSL-Code. Diese führen effizient 8-Bit-Integer-Punktprodukte aus, um Berechnungen zu beschleunigen, Speicher und Netzwerkkapazitäten zu sparen und die Leistung im Vergleich zu den äquivalenten `f32`-Versionen zu verbessern. Diese werden häufig in Inferenz-Modellen des maschinellen Lernens innerhalb von KI-Frameworks verwendet.

    Konkret kann bei Verfügbarkeit von `packed_4x8_integer_dot_product` WGSL-Code Folgendes nutzen:
    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern packen, um sie als Eingaben für Punktprodukt-Anweisungen zu verwenden (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Pack- und Unpack-Anweisungen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht es WGSL-Shader-Code, Komponenten von komplexen Datentypen mit demselben Punkt (`.`)-Syntax sowohl direkt auf die Daten als auch über einen Zeiger darauf zuzugreifen.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist, ist `foo.bar` eine bequemere Möglichkeit, `(*foo).bar` zu schreiben. Der Asterisk (`*`) würde normalerweise benötigt, um den Zeiger in eine "Referenz" zu verwandeln, die dereferenziert werden kann, aber jetzt sind Zeiger und Referenzen fast austauschbar.
    - Wenn `foo` kein Zeiger ist, funktioniert der Punktoperator (`.`) genau so, wie Sie es gewohnt sind, um Mitglieder direkt zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann ermöglicht `pa[i]` den direkten Zugriff auf die Speicherstelle, an der das `i`-te Element dieses Arrays gespeichert ist.

    Weitere Informationen und ein Beispiel finden Sie unter [Syntax sugar for dereferencing composites in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl).

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglicht es, die Werte `"read-only"` und `"read-write"` von [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) festzulegen, wenn Speichertextur-Bindegruppen-Eintragstypen in einem Bindegruppen-Layout spezifiziert werden. Diese ermöglichen WGSL-Code, Speichertexturen zu lesen und zu schreiben.

- `subgroup_id`
  - : Wenn verfügbar, sind die WGSL-eingebauten Werte [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) in Berechnungsshaders nutzbar. Diese verbessern den Prozess der Arbeitsverteilung über Untergruppen, indem sie Speicher indexieren, um überschneidende Speicherzugriffe zu vermeiden. Weitere Details finden Sie in der [WGSL subgroup_id extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension).
    > [!NOTE]
    > Um die `subgroup_id` WGSL-Funktion nutzbar zu machen, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `subgroup_uniformity`
  - : Wenn verfügbar, ändert sich der Umfang der Gleichmäßigkeitsanalyse für die Untergruppen- und Quad-Eingabefunktionen zur Untergruppenebene (anstatt zur Arbeitsgruppenebene). Diese Funktion ermöglicht es, die Untergruppenfunktionalität in mehr Fällen als gleichmäßig zu betrachten, verbessert die Benutzerfreundlichkeit für Entwickler und reduziert die Notwendigkeit, Gleichmäßigkeitsprüfungen vollständig zu deaktivieren. Eine praktische Auswirkung ist, dass mehr Werte als untergruppengleich angesehen werden, wie z.B. der eingebaute Wert [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id). Weitere Details finden Sie in der [WGSL subgroup_uniformity extension](https://developer.chrome.com/blog/new-in-webgpu-145#wgsl_subgroup_uniformity_extension).

- `uniform_buffer_standard_layout`
  - : Wenn verfügbar, nutzen Uniformpuffer dieselben [Speicherlayout-Beschränkungen](https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints) wie Speicherkapazitätspuffer, was das Teilen von Datenstrukturen zwischen beiden Arten von Puffern erleichtert. Das bedeutet, dass Uniformpuffer nicht mehr eine 16-Byte-Ausrichtung auf Array-Elemente haben müssen oder Offsets von geschachtelten Strukturen auf ein Vielfaches von 16 Byte polstern müssen.

    Siehe [WGSL uniform_buffer_standard_layout extension](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_uniform_buffer_standard_layout_extension) für weitere Details.

- `unrestricted_pointer_parameters`
  - : Lockert Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind folgende Punkte erlaubt:
    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppenadressenräume können an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturelemente und Array-Elemente können an benutzerdefinierte Funktionen übergeben werden.

      Weitere Informationen finden Sie unter [Pointers As Function Parameters](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/).

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [set-ähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [set-ähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden im Set vorhandenen Wert in Einfügereihenfolge auf.

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
