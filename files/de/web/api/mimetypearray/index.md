---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die Schnittstelle **`MimeTypeArray`** gibt ein Array von [`MimeType`](/de/docs/Web/API/MimeType)-Instanzen zurück, von denen jede Informationen über unterstützte Browser-Plugins enthält. Dieses Objekt wird durch die veraltete Eigenschaft [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) zurückgegeben.

Diese Schnittstelle war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code nicht zu brechen, der sie bereits verwendet. Moderne APIs stellen Listenstrukturen mit Typen dar, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, und machen dadurch viele Array-Methoden verfügbar, während sie gleichzeitig zusätzliche Semantiken für deren Verwendung auferlegen (wie z.B. die Elemente schreibgeschützt zu machen).

## Instanz-Eigenschaften

- [`MimeTypeArray.length`](/de/docs/Web/API/MimeTypeArray/length) {{Deprecated_Inline}}
  - : Die Anzahl der Elemente im Array.

## Instanz-Methoden

- [`MimeTypeArray.item()`](/de/docs/Web/API/MimeTypeArray/item) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Index zurück.
- [`MimeTypeArray.namedItem()`](/de/docs/Web/API/MimeTypeArray/namedItem) {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Namen zurück.

## Beispiel

Im folgenden Beispiel wird getestet, ob ein Plugin für den 'application/pdf'-MIME-Typ verfügbar ist und, falls ja, wird seine Beschreibung protokolliert.

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
