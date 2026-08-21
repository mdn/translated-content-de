---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Das **`MimeTypeArray`** Interface gibt ein Array von [`MimeType`](/de/docs/Web/API/MimeType)-Instanzen zurück, die jeweils Informationen über unterstützte Browser-Plugins enthalten. Dieses Objekt wird von der veralteten [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes)-Eigenschaft zurückgegeben.

Dieses Interface war ein [Versuch, eine unveränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um Code, der es bereits verwendet, nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken bei der Verwendung auferlegen (wie beispielsweise das Festlegen, dass ihre Elemente schreibgeschützt sind).

## Instanz-Eigenschaften

- [`MimeTypeArray.length`](/de/docs/Web/API/MimeTypeArray/length) {{Deprecated_Inline}}
  - : Die Anzahl der Elemente im Array.

## Instanz-Methoden

- [`MimeTypeArray.item()`](/de/docs/Web/API/MimeTypeArray/item) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Index zurück.
- [`MimeTypeArray.namedItem()`](/de/docs/Web/API/MimeTypeArray/namedItem) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Namen zurück.

## Beispiel

Das folgende Beispiel testet, ob ein Plugin für den 'application/pdf'-MIME-Typ verfügbar ist und wenn ja, protokolliert es dessen Beschreibung.

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
