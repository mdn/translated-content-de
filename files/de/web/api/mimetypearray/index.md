---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`MimeTypeArray`**-Schnittstelle gibt ein Array von {{domxref('MimeType')}}-Instanzen zurück, von denen jede Informationen über unterstützte Browser-Plugins enthält. Dieses Objekt wird von der veralteten {{domxref("Navigator.mimeTypes")}}-Eigenschaft zurückgegeben.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bereits bestehenden Code nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar gemacht werden und gleichzeitig zusätzliche Semantiken für ihre Verwendung auferlegt werden (wie z.B. das Festlegen ihrer Elemente auf schreibgeschützt).

## Instanz-Eigenschaften

- {{domxref("MimeTypeArray.length")}} {{Deprecated_Inline}}
  - : Die Anzahl der Elemente im Array.

## Instanz-Methoden

- {{domxref("MimeTypeArray.item()")}} {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Index zurück.
- {{domxref("MimeTypeArray.namedItem()")}} {{Deprecated_Inline}}
  - : Gibt das `MimeType`-Objekt mit dem angegebenen Namen zurück.

## Beispiel

Das folgende Beispiel testet, ob ein Plugin für den Mime-Typ 'application/pdf' verfügbar ist und protokolliert dessen Beschreibung, falls vorhanden.

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
