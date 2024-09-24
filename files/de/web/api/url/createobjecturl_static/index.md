---
title: "URL: statische Methode createObjectURL()"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`createObjectURL()`** statische Methode des {{domxref("URL")}}-Interfaces
erzeugt eine Zeichenkette, die eine URL enthält, die das im Parameter angegebene Objekt darstellt.

Die Lebensdauer der URL ist an das {{domxref("document")}}
im Fenster gebunden, in dem sie erstellt wurde. Die neue Objekt-URL repräsentiert das angegebene
{{domxref("File")}}-Objekt oder {{domxref("Blob")}}-Objekt.

Um eine Objekt-URL freizugeben, rufen Sie {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}} auf.

> [!NOTE]
> Diese Funktion ist _nicht_ in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar, da sie
> möglicherweise Speicherlecks verursachen kann.

## Syntax

```js-nolint
URL.createObjectURL(object)
```

### Parameter

- `object`
  - : Ein {{domxref("File")}}, {{domxref("Blob")}} oder {{domxref("MediaSource")}}-Objekt,
    für das eine Objekt-URL erstellt werden soll.

### Rückgabewert

Eine Zeichenkette, die eine Objekt-URL enthält, die verwendet werden kann, um
den Inhalt des angegebenen Quellobjekts zu referenzieren.

## Beispiele

Siehe [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Hinweise zur Verwendung

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, auch wenn
Sie bereits eine für dasselbe Objekt erstellt haben. Jede dieser URLs muss durch
einen Aufruf von {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} freigegeben werden, wenn Sie sie nicht mehr benötigen.

Browser geben Objekt-URLs automatisch frei, wenn das Dokument entladen wird; jedoch
für optimale Leistung und Speichernutzung, sollten Sie diese zu sicheren Zeitpunkten,
zu denen Sie sie explizit entladen können, freigeben.

### Verwendung von Objekt-URLs für Medienstreams

In älteren Versionen der Media Source-Spezifikation erforderte das Anhängen eines Streams an ein
{{HTMLElement("video")}}-Element das Erstellen einer Objekt-URL für den
{{domxref("MediaStream")}}. Dies ist nicht mehr notwendig, und Browser entfernen die
Unterstützung dafür.

> [!WARNING]
> Wenn Sie noch Code haben, der auf
> `createObjectURL()` angewiesen ist, um Streams an Medienelemente anzuhängen,
> müssen Sie Ihren Code aktualisieren, um {{domxref("HTMLMediaElement.srcObject", "srcObject")}} direkt auf den `MediaStream` zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
