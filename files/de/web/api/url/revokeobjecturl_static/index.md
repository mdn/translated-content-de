---
title: "URL: Die statische Methode revokeObjectURL()"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die statische Methode **`revokeObjectURL()`** der {{domxref("URL")}}-Schnittstelle gibt eine bestehende Objekt-URL frei, die zuvor durch den Aufruf von {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} erstellt wurde.

Rufen Sie diese Methode auf, wenn Sie mit einer Objekt-URL fertig sind, um dem Browser mitzuteilen, dass die Referenz auf die Datei nicht mehr behalten werden muss.

> [!NOTE]
> Diese Methode ist _nicht_ verfügbar in [Service Workers](/de/docs/Web/API/Service_Worker_API), aufgrund von Problemen mit dem Lebenszyklus der {{domxref("Blob")}}-Schnittstelle und dem Potenzial für Speicherlecks.

## Syntax

```js-nolint
URL.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Ein String, der eine Objekt-URL darstellt, die zuvor durch den Aufruf von {{domxref("URL.createObjectURL_static", "createObjectURL()")}} erstellt wurde.

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
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
