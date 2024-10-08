---
title: "URL: revokeObjectURL() statische Methode"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`revokeObjectURL()`** statische Methode der [`URL`](/de/docs/Web/API/URL)-Schnittstelle
gibt eine bestehende Objekt-URL frei, die zuvor durch den Aufruf von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

Rufen Sie diese Methode auf, wenn Sie die Nutzung einer Objekt-URL abgeschlossen haben, um dem Browser mitzuteilen, dass die Referenz zur Datei nicht länger aufbewahrt werden soll.

> [!NOTE]
> Diese Methode ist _nicht_ in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar, aufgrund von
> Problemen mit dem Lebenszyklus der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle und dem potenziellen Risiko von Speicherlecks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Ein String, der eine Objekt-URL repräsentiert, die zuvor durch den Aufruf von
    [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [Verwendung von Objekt-URLs zum Anzeigen von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zum Anzeigen von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
