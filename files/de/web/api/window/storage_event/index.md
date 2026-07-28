---
title: "Window: storage event"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

Das **`storage`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn ein anderes Dokument, das denselben Speicherbereich (entweder [`localStorage`](/de/docs/Web/API/Window/localStorage) oder [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) wie das aktuelle Fenster teilt, diesen Speicherbereich aktualisiert. Das Ereignis wird _nicht_ auf dem Fenster ausgelöst, das die Änderung vorgenommen hat.

- Für `localStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die denselben Ursprung wie das auslösende Dokument haben. Dazu gehören andere Tabs mit demselben Ursprung.
- Für `sessionStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} innerhalb desselben Ursprungs und desselben Top-Level-Browsing-Kontextes wie das auslösende Dokument ausgelöst. Dies schließt nur eingebettete iframes im selben Tab ein und nicht andere Tabs.

Dieses Ereignis kann nicht abgebrochen werden und es blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("storage", (event) => { })

onstorage = (event) => { }
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("StorageEvent")}}

## Ereignis-Handler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onstorage` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Protokollieren Sie das `sampleList`-Element in die Konsole, wenn das `storage`-Ereignis ausgelöst wird:

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
- [Reagieren auf Speicheränderungen mit dem StorageEvent](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
