---
title: "Fenster: storage-Ereignis"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`storage`**-Ereignis des [`Window`](/de/docs/Web/API/Window)-Interfaces wird ausgelöst, wenn ein anderes Dokument, das dieselbe Speichereinheit (entweder [`localStorage`](/de/docs/Web/API/Window/localStorage) oder [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) wie das aktuelle Fenster teilt, diese Speichereinheit aktualisiert. Das Ereignis wird _nicht_ auf dem Fenster ausgelöst, das die Änderung vorgenommen hat.

- Bei `localStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die denselben Ursprung wie das auslösende Dokument haben. Dies schließt andere Tabs mit demselben Ursprung ein.
- Bei `sessionStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die denselben Ursprung und denselben obersten Browsing-Kontext wie das auslösende Dokument haben. Dies schließt nur eingebettete iframes im selben Tab ein, jedoch nicht andere Tabs.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("storage", (event) => { })

onstorage = (event) => { }
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("StorageEvent")}}

## Ereigniseigenschaften

- [`key`](/de/docs/Web/API/StorageEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Schlüssel des geänderten Speicherelements zurück.
    Das `key`-Attribut ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers verursacht wurde.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers ausgelöst wurde,
    oder das Speicherelement aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn das Speicherelement neu hinzugefügt wurde
    und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, das das betroffene Speicherobjekt darstellt.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher sich geändert hat.

## Ereignishandler-Aliasse

Zusätzlich zum `Window`-Interface ist die Ereignishandlereigenschaft `onstorage` auch auf den folgenden Zielen verfügbar:

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

Die gleiche Aktion kann durch die Verwendung der `onstorage`-Ereignishandlereigenschaft erreicht werden:

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
- [Die Web Storage API verwenden](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Auf Speicheränderungen mit dem StorageEvent reagieren](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
