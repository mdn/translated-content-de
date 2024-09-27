---
title: "URL: createObjectURL() statische Methode"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`createObjectURL()`** statische Methode der [`URL`](/de/docs/Web/API/URL) Schnittstelle erstellt einen String, der eine URL enthält, die das im Parameter angegebene Objekt darstellt.

Die Lebensdauer der URL ist an das [`document`](/de/docs/Web/API/Document) im Fenster gebunden, in dem sie erstellt wurde. Die neue Objekt-URL repräsentiert das angegebene [`File`](/de/docs/Web/API/File)-Objekt oder [`Blob`](/de/docs/Web/API/Blob)-Objekt.

Um eine Objekt-URL freizugeben, rufen Sie [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) auf.

> [!NOTE]
> Dieses Feature ist _nicht_ in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar, da es möglicherweise Speicherlecks verursachen kann.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameter

- `object`
  - : Ein [`File`](/de/docs/Web/API/File)-, [`Blob`](/de/docs/Web/API/Blob)- oder [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt, für das eine Objekt-URL erstellt werden soll.

### Rückgabewert

Ein String, der eine Objekt-URL enthält, die verwendet werden kann, um auf den Inhalt des angegebenen Quell-`object` zu verweisen.

## Beispiele

Siehe [Verwendung von Objekt-URLs zum Anzeigen von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Anwendungshinweise

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, selbst wenn Sie bereits eine für dasselbe Objekt erstellt haben. Jede dieser URLs muss freigegeben werden, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen, wenn Sie sie nicht mehr benötigen.

Browser geben Objekt-URLs automatisch frei, wenn das Dokument entladen wird. Für optimale Leistung und Speichernutzung sollten Sie sie jedoch explizit entladen, wenn es sichere Zeitpunkte dafür gibt.

### Verwendung von Objekt-URLs für Media Streams

In älteren Versionen der Media Source-Spezifikation war es erforderlich, einen Stream an ein {{HTMLElement("video")}}-Element anzuhängen, indem eine Objekt-URL für den [`MediaStream`](/de/docs/Web/API/MediaStream) erstellt wurde. Dies ist nicht mehr notwendig, und Browser entfernen die Unterstützung für diese Vorgehensweise.

> [!WARNING]
> Wenn Sie noch Code haben, der sich auf
> `createObjectURL()` verlässt, um Streams an Media
> Elemente anzuhängen, müssen Sie Ihren Code aktualisieren, um [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zum Anzeigen von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
