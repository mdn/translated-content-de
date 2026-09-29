---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("HTML DOM")}}

Die **`MimeTypeArray`**-Schnittstelle gibt ein Array von [`MimeType`](/de/docs/Web/API/MimeType)-Instanzen zurück, die jeweils Informationen über unterstützte Browser-Plugins enthalten. Dieses Objekt wird von der veralteten Eigenschaft [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) zurückgegeben.

Diese Schnittstelle war ein [Versuch, eine unveränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156), und wird nur noch unterstützt, damit Code, der sie bereits verwendet, weiterhin funktioniert. Moderne APIs stellen Listenstrukturen mit Typen dar, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren. Dadurch stehen viele Array-Methoden zur Verfügung. Zugleich können für ihre Verwendung zusätzliche Vorgaben gelten, etwa dass ihre Elemente schreibgeschützt sind.

## Instanzeigenschaften

- [`MimeTypeArray.length`](/de/docs/Web/API/MimeTypeArray/length) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Die Anzahl der Elemente im Array.

## Instanzmethoden

- [`MimeTypeArray.item()`](/de/docs/Web/API/MimeTypeArray/item) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Index zurück.
- [`MimeTypeArray.namedItem()`](/de/docs/Web/API/MimeTypeArray/namedItem) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Namen zurück.

## Beispiel

Das folgende Beispiel prüft, ob ein Plugin für den MIME-Typ „application/pdf“ verfügbar ist, und protokolliert gegebenenfalls dessen Beschreibung.

```js
const mimeTypes = navigator.mimeTypes;
const pdf = mimeTypes.namedItem("application/pdf");

if (pdf) {
  console.log(pdf.description);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
