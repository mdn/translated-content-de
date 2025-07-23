---
title: "URL: createObjectURL() statische Methode"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`createObjectURL()`** statische Methode der [`URL`](/de/docs/Web/API/URL) Schnittstelle
erzeugt einen String, der eine [Blob-URL](/de/docs/Web/URI/Reference/Schemes/blob) enthält und auf das im Parameter angegebene Objekt zeigt.

Für weitere Informationen siehe [Blob-URLs](/de/docs/Web/URI/Reference/Schemes/blob).

Um eine Objekt-URL freizugeben, rufen Sie [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) auf.

> [!NOTE]
> Diese Funktion ist _nicht_ in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar, da sie
> potenziell zu Speicherlecks führen kann.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameter

- `object`
  - : Ein [`Blob`](/de/docs/Web/API/Blob) (wie eine [`File`](/de/docs/Web/API/File)) oder ein [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt,
    für das eine Objekt-URL erstellt werden soll.

### Rückgabewert

Ein String, der eine Objekt-URL enthält, die verwendet werden kann, um auf die
Inhalte des angegebenen Quell-`objects` zu verweisen.

## Beispiele

Siehe [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Blob-URLs](/de/docs/Web/URI/Reference/Schemes/blob)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
