---
title: DOMStringList
slug: Web/API/DOMStringList
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`DOMStringList`** Interface ist ein veralteter Typ, der von einigen APIs zurückgegeben wird und eine nicht-modifizierbare Liste von Strings (`DOMString`) darstellt.

Dieses Interface war ein [Versuch, eine nicht-modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um bestehende Codes nicht zu zerstören, die es nutzen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar sind und gleichzeitig zusätzliche Semantiken für deren Nutzung auferlegt werden (zum Beispiel, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `DOMStringList` vermeiden sollten. Sie erstellen `DOMStringList` Objekte nicht selbst, sondern erhalten sie von APIs wie `Location.ancestorOrigins`, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig bei den semantischen Unterschieden zu einem echten Array.

Dieses Interface wird in [IndexedDB](/de/docs/Web/API/IndexedDB_API) und in der [`Location`](/de/docs/Web/API/Location) API verwendet:

- [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames)
- [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames)
- [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins)

## Instanzeigenschaften

- [`DOMStringList.length`](/de/docs/Web/API/DOMStringList/length) {{ReadOnlyInline}}
  - : Gibt die Größe der Liste zurück.

## Instanzmethoden

- [`DOMStringList.item()`](/de/docs/Web/API/DOMStringList/item)
  - : Gibt einen String aus der Liste mit dem angegebenen Index zurück.
- [`DOMStringList.contains()`](/de/docs/Web/API/DOMStringList/contains)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der gegebene String in der Liste enthalten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
