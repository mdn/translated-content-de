---
title: "Fenster: storage Ereignis"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`storage`**-Ereignis der {{domxref("Window")}}-Schnittstelle wird ausgelöst, wenn ein Speicherbereich (`localStorage` oder `sessionStorage`) im Kontext eines anderen Dokuments geändert wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

> [!NOTE]
> Dies funktioniert nicht im selben {{Glossary("browsing context")}}, der die Änderungen vornimmt – es ist tatsächlich eine Möglichkeit für andere Browsing-Kontexte auf der Domain, die den Speicher verwenden, jede Änderung zu synchronisieren, die vorgenommen wird. Browsing-Kontexte auf anderen Domains können nicht auf dieselben Speicherobjekte zugreifen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("storage", (event) => {});
onstorage = (event) => {};
```

## Ereignistyp

Ein {{domxref("StorageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("StorageEvent")}}

## Ereigniseigenschaften

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : Gibt einen String mit dem Schlüssel für das geänderte Speicherelement zurück.
    Das `key`-Attribut ist `null`, wenn die Änderung durch die Storage-`clear()`-Methode verursacht wurde.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn die Änderung durch die Storage-`clear()`-Methode veranlasst wurde
    oder das Speicherelement aus dem Speicher entfernt wurde.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des geänderten Speicherelements zurück.
    Dieser Wert ist `null`, wenn das Speicherelement neu hinzugefügt wurde
    und daher keinen vorherigen Wert hat.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("Storage")}}-Objekt zurück, das das betroffene Speicherobjekt darstellt.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onstorage` auch auf folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

Protokollieren Sie das `sampleList`-Element in der Konsole, wenn das `storage`-Ereignis ausgelöst wird:

```js
window.addEventListener("storage", () => {
  // Wenn sich der lokale Speicher ändert, geben Sie die Liste
  // in der Konsole aus.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

Die gleiche Aktion kann mit der `onstorage`-Ereignishandler-Eigenschaft erreicht werden:

```js
window.onstorage = () => {
  // Wenn sich der lokale Speicher ändert, geben Sie die Liste
  // in der Konsole aus.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Web Storage API", "", "", "nocode")}}
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Reagieren auf Speicheränderungen mit dem StorageEvent](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
