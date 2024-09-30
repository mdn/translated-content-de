---
title: "URL: createObjectURL() statische Methode"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`createObjectURL()`** statische Methode der [`URL`](/de/docs/Web/API/URL)-Schnittstelle
erstellt eine Zeichenkette, die eine URL enthält, die das im Parameter angegebene Objekt darstellt.

Die Lebensdauer der URL ist an das [`document`](/de/docs/Web/API/Document)
im Fenster gebunden, in dem sie erstellt wurde. Die neue Objekt-URL repräsentiert das angegebene
[`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekt.

Um eine Objekt-URL freizugeben, rufen Sie [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) auf.

> [!NOTE]
> Diese Funktion ist in [Service Workers](/de/docs/Web/API/Service_Worker_API) _nicht_ verfügbar, da sie potenzielle Speicherlecks verursachen könnte.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameter

- `object`
  - : Ein [`File`](/de/docs/Web/API/File)-, [`Blob`](/de/docs/Web/API/Blob)- oder [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt,
    für das eine Objekt-URL erstellt werden soll.

### Rückgabewert

Eine Zeichenkette, die eine Objekt-URL enthält, die zum Referenzieren der Inhalte
des angegebenen Quell-`object` verwendet werden kann.

## Beispiele

Siehe [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Verwendungshinweise

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, selbst wenn
Sie bereits eine für dasselbe Objekt erstellt haben. Jede dieser URLs muss freigegeben werden,
indem [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufgerufen wird, wenn Sie sie nicht mehr benötigen.

Browser geben Objekt-URLs automatisch frei, wenn das Dokument entladen wird; allerdings
sollten Sie aus Gründen der optimalen Leistung und Speichernutzung die URLs explizit freigeben, wenn es sichere Zeitpunkte gibt.

### Verwendung von Objekt-URLs für Medienströme

In älteren Versionen der Media Source-Spezifikation erforderte das Anhängen eines Streams an ein
{{HTMLElement("video")}}-Element die Erstellung einer Objekt-URL für den
[`MediaStream`](/de/docs/Web/API/MediaStream). Dies ist nicht mehr notwendig, und die Browser entfernen
die Unterstützung dafür.

> [!WARNING]
> Falls Ihr Code noch darauf angewiesen ist,
> `createObjectURL()` zu verwenden, um Streams an Medienelemente anzuhängen,
> müssen Sie Ihren Code aktualisieren, um [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
