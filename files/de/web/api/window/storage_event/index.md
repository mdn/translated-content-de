---
title: "Window: storage-Ereignis"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`storage`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn ein anderes Dokument, das denselben Speicherbereich (entweder [`localStorage`](/de/docs/Web/API/Window/localStorage) oder [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) wie das aktuelle Fenster nutzt, diesen Speicherbereich aktualisiert. Das Ereignis wird _nicht_ in dem Fenster ausgelöst, das die Änderung vorgenommen hat.

- Bei `localStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die denselben Origin wie das auslösende Dokument haben. Dazu gehören auch andere Tabs mit demselben Origin.
- Bei `sessionStorage` wird das Ereignis in allen anderen {{Glossary("browsing_context", "Browsing-Kontexten")}} ausgelöst, die denselben Origin und denselben übergeordneten Browsing-Kontext wie das auslösende Dokument haben. Dazu gehören nur eingebettete iframes im selben Tab, sofern vorhanden, aber keine anderen Tabs.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("storage", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstorage = (event) => { }
```

## Ereignistyp

Ein [`StorageEvent`](/de/docs/Web/API/StorageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("StorageEvent")}}

## Aliase für die Ereignisbehandlung

Neben der `Window`-Schnittstelle ist die Ereignisbehandlungs-Eigenschaft `onstorage` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Geben Sie den Eintrag `sampleList` auf der Konsole aus, wenn das `storage`-Ereignis ausgelöst wird:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

Dasselbe lässt sich mit der Ereignisbehandlungs-Eigenschaft `onstorage` erreichen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onstorage` hinzugefügte Ereignis-Listener ersetzt werden:

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
- [Auf Speicheränderungen mit dem StorageEvent reagieren](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
