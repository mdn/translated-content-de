---
title: "blob: URLs"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

**Blob- (oder Objekt-)URLs**, URLs mit dem Präfix `blob:`, ermöglichen die Integration von [`Blob`](/de/docs/Web/API/Blob)s und [`MediaSource`](/de/docs/Web/API/MediaSource)s mit anderen APIs, die nur für die Verwendung mit URLs entworfen wurden, wie etwa das {{HTMLElement("img")}}-Element. Blob-URLs können auch verwendet werden, um zu navigieren sowie Downloads von lokal generierten Daten auszulösen. Sie sind als opake Bezeichner konzipiert (das heißt, Sie sollten sie nicht manuell schreiben) und sollten mit den Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) verwaltet werden.

Blob-URLs sind ähnlich wie [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data), da beide ermöglichen, im Speicher befindliche Ressourcen als URLs darzustellen; der Unterschied besteht darin, dass Data-URLs Ressourcen in sich selbst einbetten und strikte Größenbeschränkungen haben, während Blob-URLs ein unterstützendes `Blob` oder `MediaSource` erfordern und größere Ressourcen darstellen können.

## Syntax

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : Das Schema der URL.
- `<origin>`
  - : Der [Ursprung](/de/docs/Web/API/URL/origin) des Erstellers dieser URL. Wenn der Ursprung des Erstellers opak ist, dann ist dieser Teil implementierungsdefiniert.
- `<uuid>`
  - : Eine {{Glossary("UUID", "UUID")}}.

## Nutzungshinweise

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, selbst wenn Sie bereits eine für dasselbe Objekt erstellt haben. Jede davon muss durch Aufruf von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigegeben werden, wenn Sie sie nicht mehr benötigen. Solange eine Objekt-URL aktiv ist, kann das zugrunde liegende Objekt nicht durch den Garbage Collector entfernt werden und könnte zu Speicherlecks führen.

Browser werden Objekt-URLs automatisch freigeben, wenn das Dokument entladen wird; jedoch sollten Sie, für optimale Leistung und Speichernutzung, wenn es sichere Zeitpunkte gibt, an denen Sie sie explizit entladen können, dies tun.

Dennoch sollten Sie vermeiden, die Objekt-URL zu früh freizugeben. Ein häufiges Anti-Muster ist das folgende:

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

Das sofortige Widerrufen der Blob-URL, nachdem das Bild gerendert wurde, würde das Bild für Benutzerinteraktionen unbrauchbar machen (zum Beispiel, wenn man mit der rechten Maustaste klickt, um das Bild zu speichern oder in einem neuen Tab zu öffnen). Für langlebige Anwendungen sollten Sie Objekt-URLs nur widerrufen, wenn die Ressource für den Benutzer nicht mehr zugänglich ist (zum Beispiel, wenn das Bild aus dem DOM entfernt wird).

### Speicherpartitionierung

Der Zugriff auf Ressourcen über Blob-URLs unterliegt denselben Einschränkungen wie alle anderen Speichermethoden, das heißt, [Statuspartitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning). Blob-URLs haben einen zugeordneten Ersteller-Ursprung (der in der URL selbst gespeichert ist) und können nur aus Umgebungen abgerufen werden, in denen der Speicher-Schlüssel mit dem der Erstellungsumgebung übereinstimmt. Blob-URL-_Navigierungen_ unterliegen nicht dieser Einschränkung, obwohl Browser möglicherweise Datenschutzmaßnahmen wie [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) für Cross-Site-Navigierungen zu einer Blob-URL durchsetzen.

### Verwendung von Objekt-URLs für Medienstreams

In älteren Versionen der Media Source-Spezifikation erforderte das Anhängen eines Streams an ein {{HTMLElement("video")}}-Element das Erstellen einer Objekt-URL für den [`MediaStream`](/de/docs/Web/API/MediaStream). Dies ist nicht mehr notwendig, und Browser entfernen die Unterstützung dafür.

> [!WARNING]
> Wenn Sie noch Code haben, der auf `createObjectURL()` angewiesen ist, um Streams an Media-Elemente anzuhängen, müssen Sie Ihren Code aktualisieren, um [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` einzustellen.

### Abrufen mit dem Range-Header

Blob-URLs unterstützen das Abrufen mit dem [`Range`](/de/docs/Web/HTTP/Reference/Headers/Range)-Header, um Teilinhalte anzufordern. Dies ist besonders nützlich beim Arbeiten mit großen Blobs, da es Ihnen ermöglicht, nur die notwendigen Teile des Blobs abzurufen, anstatt den gesamten Inhalt. Für ein Beispiel siehe [Abrufen eines Bereichs von einer Blob-URL](/de/docs/Web/HTTP/Reference/Headers/Range#fetching_a_range_from_a_blob_url).

## Beispiele

### Gültige Blob-URLs

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### Erstellen von Blob-URLs

In diesem Beispiel erstellen wir zuerst ein [`Blob`](/de/docs/Web/API/Blob) von einem {{HTMLElement("canvas")}}, erstellen eine Blob-URL dazu und hängen schließlich die URL an ein {{HTMLElement("img")}}-Element an.

```js
const canvas = document.querySelector("canvas");
canvas.toBlob((blob) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwendung von Objekt-URLs zur Anzeige von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
- [IANA-Liste der URI-Schemen](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
