---
title: DOMStringList
slug: Web/API/DOMStringList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

Die **`DOMStringList`**-Schnittstelle ist ein veralteter Typ, der von einigen APIs zurückgegeben wird und eine nicht modifizierbare Liste von Zeichenfolgen (`DOMString`) darstellt.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code nicht zu brechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen über Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, was viele Array-Methoden verfügbar macht und gleichzeitig zusätzliche Semantiken für deren Verwendung auferlegt (wie z.B. das Read-Only-Machen ihrer Elemente).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `DOMStringList` vermeiden sollten. Sie erstellen `DOMStringList`-Objekte nicht selbst, sondern erhalten sie von APIs wie `Location.ancestorOrigins`, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

Diese Schnittstelle wird im [IndexedDB](/de/docs/Web/API/IndexedDB_API) und in der [`Location`](/de/docs/Web/API/Location)-API verwendet:

- [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames)
- [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames)
- [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins)

## Instanzeigenschaften

- [`DOMStringList.length`](/de/docs/Web/API/DOMStringList/length) {{ReadOnlyInline}}
  - : Gibt die Größe der Liste zurück.

## Instanzmethoden

- [`DOMStringList.item()`](/de/docs/Web/API/DOMStringList/item)
  - : Gibt eine Zeichenfolge aus der Liste mit dem angegebenen Index zurück.
- [`DOMStringList.contains()`](/de/docs/Web/API/DOMStringList/contains)
  - : Gibt einen Boolean zurück, der angibt, ob die angegebene Zeichenfolge in der Liste enthalten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
