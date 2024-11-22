---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: cf0a0c16ca0a20c87262618d846408162f97dbdb
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`WGSLLanguageFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setartiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das die vom WebGPU implementierten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern, die die API unterstützen, für WebGPU verfügbar. Wir empfehlen, dass Sie alle Erweiterungen, die Sie verwenden möchten, gründlich testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in den [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass der genaue Satz von Funktionen je nach Implementierung und physischen Geräten variiert und sich im Laufe der Zeit ändern kann.

| Funktionsname                                                                                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="readonly_and_readwrite_storage_textures">`readonly_and_readwrite_storage_textures`</a> | Wenn verfügbar, ermöglicht es die `"read-only"` und `"read-write"` [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access)-Werte beim Festlegen der Typen von Storage-Texture-Bind-Group-Einträgen in einem Bind-Group-Layout festzulegen. Diese ermöglichen es WSGL-Code, Storage-Texturen zu lesen bzw. zu lesen/schreiben.                                                                                                                                                                         |
| <a name="unrestricted_pointer_parameters">`unrestricted_pointer_parameters`</a>                 | <p>Löst Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden erlaubt:</p><ul><li>Parameterzeiger zu Speicher-, Uniform- und Workgroup-Adressräumen, die an benutzerdefinierte Funktionen übergeben werden.</li><li>Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.</li></ul><p>Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.</p> |

## Instanzeigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setartigen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte in der Menge zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [setartigen](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert in der Menge vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iteratorobjekt zurück, das **Werte** für jedes Element in der Menge in Einfügereihenfolge ausgibt.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iteratorobjekt zurück, das **ein Array von `[value, value]`** für jedes Element in der Menge in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft die bereitgestellte Rückruffunktion einmal für jeden in der Menge vorhandenen Wert in Einfügereihenfolge auf.

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

### Menge berechnen und durch Werte iterieren

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
