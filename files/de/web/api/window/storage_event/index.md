---
title: "Window: storage event"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: bc2cef34be29df5439a5a6162bd9e5b07d173571
---

{{APIRef}}

Das **`storage`** Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn ein anderes Dokument, das denselben Speicherbereich (entweder [`localStorage`](/de/docs/Web/API/Window/localStorage) oder [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) wie das aktuelle Fenster teilt, diesen Speicherbereich aktualisiert. Das Ereignis wird _nicht_ im Fenster, das die Änderung vorgenommen hat, ausgelöst.

- Bei `localStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die im gleichen Ursprung wie das initiierende Dokument sind. Dies schließt andere Tabs mit demselben Ursprung ein.
- Bei `sessionStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die im gleichen Ursprung und im gleichen obersten Browsing-Kontext wie das initiierende Dokument sind. Dies schließt nur eingebettete iframes ein, falls vorhanden, im selben Tab, und nicht andere Tabs.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisbubbling aus.

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
  - : Gibt einen String mit dem Schlüssel des Storage-Items zurück, das geändert wurde.
    Das `key`-Attribut ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers verursacht wurde.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des Storage-Items zurück, das geändert wurde.
    Dieser Wert ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers hervorgerufen wurde,
    oder das Storage-Item aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des Storage-Items zurück, das geändert wurde.
    Dieser Wert ist `null`, wenn das Storage-Item neu hinzugefügt wurde
    und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, das das betroffene Speicherobjekt darstellt.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher sich geändert hat.

## Ereignishandler-Aliase

Neben der `Window`-Schnittstelle steht die Ereignis-Handler-Eigenschaft `onstorage` auch auf den folgenden Zielen zur Verfügung:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Protokollieren Sie das `sampleList`-Item in der Konsole, wenn das `storage`-Ereignis ausgelöst wird:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

Die gleiche Aktion kann durch die Verwendung der `onstorage`-Ereignis-Handler-Eigenschaft erreicht werden:

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
- [Reaktionen auf Speicheränderungen mit dem StorageEvent](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
