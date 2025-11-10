---
title: "URL: revokeObjectURL() statische Methode"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`revokeObjectURL()`** statische Methode des [`URL`](/de/docs/Web/API/URL) Interfaces
gibt eine vorhandene Objekt-URL frei, die zuvor durch Aufrufen von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

Weitere Informationen finden Sie unter [Blob-URLs](/de/docs/Web/URI/Reference/Schemes/blob).

Rufen Sie diese Methode auf, wenn Sie eine Objekt-URL nicht mehr benötigen, um dem Browser mitzuteilen, dass die Referenz auf die Datei nicht länger benötigt wird.

> [!NOTE]
> Diese Methode ist _nicht_ in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar, aufgrund von
> Problemen mit dem Lebenszyklus des [`Blob`](/de/docs/Web/API/Blob) Interfaces und dem Potenzial für Lecks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Ein Zeichenfolgenwert, der eine Objekt-URL darstellt, die zuvor durch
    den Aufruf von [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
