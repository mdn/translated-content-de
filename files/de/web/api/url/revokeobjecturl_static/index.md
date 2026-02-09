---
title: "URL: revokeObjectURL() statische Methode"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: 879e68dbfa6b0275c66988a0d92ae5f2c0103958
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`revokeObjectURL()`** statische Methode der [`URL`](/de/docs/Web/API/URL) Schnittstelle
gibt eine bestehende Objekt-URL frei, die zuvor durch Aufrufen von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

Für weitere Informationen siehe [Blob-URLs](/de/docs/Web/URI/Reference/Schemes/blob).

Rufen Sie diese Methode auf, wenn Sie eine Objekt-URL nicht mehr benötigen, um dem Browser mitzuteilen, dass er die Referenz zur Datei nicht länger aufrechterhalten soll.

Wenn das `objectURL`-Argument, das übergeben wird, keine aktuell aktive Objekt-URL ist — zum Beispiel, wenn es sich um eine ungültige URL, eine Nicht-Objekt-URL oder eine bereits widerrufene URL handelt — dann hat der Aufruf dieser Methode keine Wirkung.

> [!NOTE]
> Diese Methode ist _nicht_ verfügbar in [Service Workers](/de/docs/Web/API/Service_Worker_API) aufgrund von Problemen mit dem Lebenszyklus der [`Blob`](/de/docs/Web/API/Blob) Schnittstelle und dem Potential für Lecks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Ein String, der eine Objekt-URL darstellt, die zuvor durch Aufrufen von
    [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

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
