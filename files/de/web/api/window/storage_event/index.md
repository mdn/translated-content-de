---
title: "Window: storage Ereignis"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`storage`** Ereignis des [`Window`](/de/docs/Web/API/Window) Interfaces wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments modifiziert wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

> [!NOTE]
> Dies funktioniert nicht im selben {{Glossary("browsing_context", "Browsing-Kontext")}}, der die Änderungen vornimmt — es ist wirklich eine Möglichkeit für andere Browsing-Kontexte auf der Domain, die den Speicher verwenden, jegliche vorgenommenen Änderungen zu synchronisieren. Browsing-Kontexte auf anderen Domains können nicht auf dieselben Speicherobjekte zugreifen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("storage", (event) => {});
onstorage = (event) => {};
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("StorageEvent")}}

## Ereigniseigenschaften

- [`key`](/de/docs/Web/API/StorageEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Schlüssel des geänderten Speicherelements zurück.
    Das `key` Attribut ist `null`, wenn die Änderung durch die `clear()` Methode des Speichers verursacht wurde.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn die Änderung durch die `clear()` Methode des Speichers aufgerufen wurde
    oder das Speicherelement aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn das Speicherelement neu hinzugefügt wurde
    und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage) Objekt zurück, das das betroffene Speicherobjekt repräsentiert.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Alias für Ereignishandler

Zusätzlich zum `Window` Interface ist die Ereignishandler-Eigenschaft `onstorage` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Protokollieren Sie das `sampleList` Element in der Konsole, wenn das `storage` Ereignis ausgelöst wird:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

Dieselbe Aktion kann mit der `onstorage` Ereignishandler-Eigenschaft erreicht werden:

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
- [Reagieren auf Speicheränderungen mit dem StorageEvent](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
