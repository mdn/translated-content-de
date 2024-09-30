---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die Schnittstelle **`MimeTypeArray`** gibt ein Array von [`MimeType`](/de/docs/Web/API/MimeType)-Instanzen zurück, von denen jede Informationen über unterstützte Browser-Plugins enthält. Dieses Objekt wird von der veralteten Eigenschaft [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) zurückgegeben.

Diese Schnittstelle war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bereits existierenden Code nicht zu brechen, der sie verwendet. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken auf ihre Nutzung angewandt werden (wie zum Beispiel, dass ihre Elemente schreibgeschützt sind).

## Instanz-Eigenschaften

- [`MimeTypeArray.length`](/de/docs/Web/API/MimeTypeArray/length) {{Deprecated_Inline}}
  - : Die Anzahl der Elemente im Array.

## Instanz-Methoden

- [`MimeTypeArray.item()`](/de/docs/Web/API/MimeTypeArray/item) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Index zurück.
- [`MimeTypeArray.namedItem()`](/de/docs/Web/API/MimeTypeArray/namedItem) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Namen zurück.

## Beispiel

Das folgende Beispiel testet, ob ein Plugin für den 'application/pdf'-MIME-Typ verfügbar ist und falls ja, wird die Beschreibung protokolliert.

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
