---
title: DOMStringList
slug: Web/API/DOMStringList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

Das **`DOMStringList`**-Interface ist ein veralteter Typ, der von einigen APIs zurückgegeben wird und eine nicht modifizierbare Liste von Strings (`DOMString`) darstellt.

Dieses Interface war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code, der es verwendet, nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für deren Nutzung auferlegt werden (wie zum Beispiel, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `DOMStringList` vermeiden sollten. Sie erstellen `DOMStringList`-Objekte nicht selbst, sondern beziehen sie aus APIs wie `Location.ancestorOrigins`, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

Dieses Interface wird in [IndexedDB](/de/docs/Web/API/IndexedDB_API) und in der {{domxref("Location")}} API verwendet:

- {{domxref("IDBDatabase.objectStoreNames")}}
- {{domxref("IDBObjectStore.indexNames")}}
- {{domxref("Location.ancestorOrigins")}}

## Instanzeigenschaften

- {{domxref("DOMStringList.length")}} {{ReadOnlyInline}}
  - : Gibt die Größe der Liste zurück.

## Instanzmethoden

- {{domxref("DOMStringList.item()")}}
  - : Gibt einen String aus der Liste mit dem angegebenen Index zurück.
- {{domxref("DOMStringList.contains()")}}
  - : Gibt einen Boolean zurück, der angibt, ob der gegebene String in der Liste enthalten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
