---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt kann über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft zugegriffen werden.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind für WebGPU in allen Browsern verfügbar, die die API unterstützen. Wir empfehlen, alle Erweiterungen, die Sie verwenden möchten, gründlich zu testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in der [WGSL-Spezifikation für Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) definiert. Beachten Sie, dass die genaue Menge der verfügbaren Funktionen je nach Implementierung und physischem Gerät variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Ermöglicht **DP4a** (Dot Product von 4 Elementen und Akkumulieren) GPU-Instruktionen über Ihren WGSL-Code zu verwenden. Diese führen effizient 8-Bit-Integer-Dot-Produkte aus, um die Berechnung zu beschleunigen, Speicher und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in Inferenzmodellen des maschinellen Lernens innerhalb von KI-Frameworks verwendet.

    Insbesondere, wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code verwenden:
    - 32-Bit-Integer-Skalare, die 4-Komponenten-Vektoren von 8-Bit-Integern packen, um als Eingänge für Dot-Produkt-Instruktionen verwendet zu werden (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Pack- und Unpack-Instruktionen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht WGSL-Shader-Code den Zugriff auf Komponenten komplexer Datentypen mit der gleichen Punkt (`.`)-Syntax, unabhängig davon, ob Sie direkt mit den Daten arbeiten oder mit einem Zeiger darauf.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` ist als bequemere Möglichkeit verfügbar, `(*foo).bar` zu schreiben. Der Stern (`*`) wäre normalerweise notwendig, um den Zeiger in eine "Referenz" umzuwandeln, die dereferenziert werden kann, aber jetzt sind sowohl Zeiger als auch Referenzen fast austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punktoperator (`.`) funktioniert genau so, wie Sie es gewohnt sind, um Mitglieder direkt zuzugreifen.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann bietet `pa[i]` direkten Zugriff auf die Speicherstelle, an der das `i`-te Element dieses Arrays gespeichert ist.

    Siehe [Syntaxzucker für das Dereferenzieren von Kompositionsobjekten in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) für weitere Details und ein Beispiel.

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglicht die `"readonly"` und `"readwrite"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)-Werte beim Spezifizieren von Speichertypen in einem Bind-Group-Layout gesetzt werden. Diese ermöglichen es dem WGSL-Code, Speicherttexturen zu lesen und sowohl zu lesen als auch zu schreiben.

- `subgroup_id`
  - : Wenn verfügbar, sind die WGSL-eingebauten Werte [`subgroup_id`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-subgroup_id) und [`num_subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-num_subgroups) in Rechen-Shadern benutzbar. Diese verbessern den Prozess der Arbeitsverteilung über Untergruppen, indem sie den Speicher indexieren, um überlappende Speicherzugriffe zu vermeiden. Siehe [WGSL subgroup_id-Erweiterung](https://developer.chrome.com/blog/new-in-webgpu-144#wgsl_subgroup_id_extension) für mehr Details.
    > [!NOTE]
    > Damit das `subgroup_id` WGSL-Feature nutzbar ist, muss die [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups)-Erweiterung im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).

- `unrestricted_pointer_parameters`
  - : Lockert die Einschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Bei Verfügbarkeit sind folgende Dinge erlaubt:
    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsraumadressräume, die an vom Benutzer deklarierte Funktionen übergeben werden.
    - Zeiger zu Strukturmitgliedern und Arrayelementen, die an vom Benutzer deklarierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für mehr Details.

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden Wert im Set in Einfügereihenfolge auf.

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
