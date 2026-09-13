---
title: "Window: storage event"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`storage`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn ein anderes Dokument, das denselben Speicherbereich (entweder [`localStorage`](/de/docs/Web/API/Window/localStorage) oder [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) mit dem aktuellen Fenster teilt, diesen Speicherbereich aktualisiert. Das Ereignis wird _nicht_ im Fenster, das die Änderung vorgenommen hat, ausgelöst.

- Für `localStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die sich im selben Ursprung wie das auslösende Dokument befinden. Dazu gehören andere Tabs mit demselben Ursprung.
- Für `sessionStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die sich im selben Ursprung und im selben übergeordneten Browsing-Kontext wie das auslösende Dokument befinden. Dies schließt nur eingebettete iframes, falls vorhanden, im selben Tab ein, jedoch nicht andere Tabs.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbeling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("storage", (event) => { })

onstorage = (event) => { }
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("StorageEvent")}}

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandlereigenschaft `onstorage` auch auf den folgenden Zielen verfügbar:

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

Die gleiche Aktion kann mit der `onstorage`-Ereignishandlereigenschaft erreicht werden:

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
