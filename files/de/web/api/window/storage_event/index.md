---
title: "Window: storage Ereignis"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`storage`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

Dieses Ereignis ist nicht abbrechbar und propagiert nicht.

> [!NOTE]
> Dies funktioniert nicht im gleichen [Browsing-Kontext](/de/docs/Glossary/browsing_context), der die Änderungen vornimmt — es ist vielmehr ein Weg, dass andere Browsing-Kontexte in der Domain, die den Speicher verwenden, alle vorgenommenen Änderungen synchronisieren können. Browsing-Kontexte auf anderen Domains können nicht auf dieselben Speicherobjekte zugreifen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("storage", (event) => {});
onstorage = (event) => {};
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("StorageEvent")}}

## Ereigniseigenschaften

- [`key`](/de/docs/Web/API/StorageEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Schlüssel des geänderten Speicheritems zurück.
    Das `key`-Attribut ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers verursacht wird.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des geänderten Speicheritems zurück.
    Dieser Wert ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers aufgerufen wurde
    oder das Speicheritem aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des geänderten Speicheritems zurück.
    Dieser Wert ist `null`, wenn das Speicheritem neu hinzugefügt wurde
    und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, das das betroffene Speicherobjekt darstellt.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Ereignishandler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onstorage` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Protokollieren Sie das `sampleList`-Element in der Konsole, wenn das `storage`-Ereignis ausgelöst wird:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

Die gleiche Aktion kann mit der Ereignis-Handler-Eigenschaft `onstorage` erreicht werden:

```js
window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Reaktion auf Speicheränderungen mit dem StorageEvent](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
