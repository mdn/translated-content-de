---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 84ba257fb5e776926bb6dda340b0aa88300246b3
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`WGSLLanguageFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [setähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set), das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

Auf das `WGSLLanguageFeatures`-Objekt wird über die [`GPU.wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures)-Eigenschaft zugegriffen.

> [!NOTE]
> Nicht alle WGSL-Spracherweiterungen sind in allen Browsern verfügbar, die die API unterstützen. Es wird empfohlen, dass Sie alle Erweiterungen, die Sie verwenden möchten, gründlich testen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden WGSL-Spracherweiterungen sind in [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in der WGSL-Spezifikation definiert. Beachten Sie, dass das genaue Set an verfügbaren Funktionen je nach Implementierung und physischen Geräten variieren kann und sich im Laufe der Zeit ändern kann.

- `packed_4x8_integer_dot_product`
  - : Ermöglicht die Nutzung von **DP4a** (Dot Product von 4 Elementen und Akkumulieren) GPU-Anweisungen über Ihren WGSL-Code. Diese führen 8-Bit-Integer-Punktprodukte effizient aus, um Berechnungen zu beschleunigen, Speicher und Netzwerkbandbreite zu sparen und die Leistung im Vergleich zu den entsprechenden `f32`-Versionen zu verbessern. Sie werden häufig in Maschinenlernmodellen beim Inferencing innerhalb von KI-Frameworks verwendet.

    Insbesondere, wenn `packed_4x8_integer_dot_product` verfügbar ist, kann WGSL-Code verwenden:
    - Packing von 32-Bit-Integer-Scalaren in 4-Komponenten-Vektoren von 8-Bit-Integern, um als Eingaben für Punktprodukt-Anweisungen zu dienen (über die eingebauten Funktionen `dot4U8Packed()` und `dot4I8Packed()`).
    - Pack- und Unpack-Anweisungen mit gepackten 4-Komponenten-Vektoren von 8-Bit-Integern (über eingebaute Funktionen wie `pack4xI8()` und `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Ermöglicht WGSL-Shader-Code, auf Komponenten komplexer Datentypen mit der gleichen Punkt-Notation (`.`) zuzugreifen, unabhängig davon, ob Sie direkt mit den Daten oder mit einem Zeiger darauf arbeiten.

    Wenn `pointer_composite_access` verfügbar ist:
    - Wenn `foo` ein Zeiger ist: `foo.bar` steht als bequemere Schreibweise für `(*foo).bar` zur Verfügung. Der Stern (`*`) würde normalerweise benötigt, um den Zeiger in eine "Referenz" zu verwandeln, die dereferenziert werden kann, aber jetzt sind sowohl Zeiger als auch Referenzen fast austauschbar.
    - Wenn `foo` kein Zeiger ist: Der Punkt-Operator (`.`) funktioniert genau so wie gewohnt für den direkten Zugriff auf Mitglieder.
    - Wenn `pa` ein Zeiger ist, der die Startadresse eines Arrays speichert, dann gibt `pa[i]` direkten Zugriff auf die Speicherstelle, an der das `i`te Element dieses Arrays gespeichert ist.

    Siehe [Syntaxzucker für das Dereferenzieren von Komposita in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) für weitere Details und ein Beispiel.

- `readonly_and_readwrite_storage_textures`
  - : Wenn verfügbar, ermöglicht das Setzen der Werte `"read-only"` und `"read-write"` für [`storageTexture.access`](/de/docs/Web/API/GPUDevice/createBindGroupLayout#access) bei der Angabe von Speichertyp-Bindungsgruppen in einem Bindungsgruppen-Layout. Diese ermöglichen WGSL-Code das Lesen von Speichertypen bzw. das Lesen/Schreiben von Speichertypen.

- `unrestricted_pointer_parameters`
  - : Lockert die Beschränkungen für Zeiger, die an WGSL-Funktionen übergeben werden. Wenn verfügbar, sind die folgenden Aktionen erlaubt:
    - Parameterzeiger auf Speicher-, Uniform- und Arbeitsgruppenadressräume, die an benutzerdefinierte Funktionen übergeben werden.
    - Zeiger auf Strukturmitglieder und Array-Elemente, die an benutzerdefinierte Funktionen übergeben werden.

      Siehe [Zeiger als Funktionsparameter](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) für weitere Details.

## Instanz-Eigenschaften

Die folgende Eigenschaft ist für alle schreibgeschützten [setähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verfügbar:

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte in der Menge zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [setähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verfügbar:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt ein boolesches Ergebnis zurück, das angibt, ob ein Element mit dem angegebenen Wert in der Menge vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **Werte** für jedes Element in der Menge in Einfüge-Reihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element in der Menge in Einfüge-Reihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft die bereitgestellte Callback-Funktion einmal für jeden Wert in der Menge in Einfüge-Reihenfolge auf.

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

### Setgröße zurückgeben und durch Werte iterieren

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
