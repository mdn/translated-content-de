---
title: "blob: URLs"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

**Blob- (oder Objekt-)URLs**, URLs mit dem Präfix des `blob:`-Schemas, ermöglichen die Integration von [`Blob`](/de/docs/Web/API/Blob)s und [`MediaSource`](/de/docs/Web/API/MediaSource)s mit anderen APIs, die nur für die Verwendung mit URLs ausgelegt sind, wie etwa dem {{HTMLElement("img")}}-Element. Blob-URLs können auch verwendet werden, um zu lokal generierten Daten zu navigieren oder Downloads davon auszulösen. Sie sind als opake Identifikatoren konzipiert (das heißt, Sie sollten sie nicht selbst schreiben) und sollten mit den Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) verwaltet werden.

Blob-URLs ähneln [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data), da beide die Darstellung von Ressourcen im Arbeitsspeicher als URLs ermöglichen. Der Unterschied besteht darin, dass Data-URLs Ressourcen selbst einbetten und starken Größenbeschränkungen unterliegen, während Blob-URLs ein zugrunde liegendes `Blob` oder `MediaSource` erfordern und größere Ressourcen darstellen können.

## Syntax

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : Das Schema der URL.
- `<origin>`
  - : Der [Ursprung](/de/docs/Web/API/URL/origin) des Erstellers dieser URL. Wenn der Ursprung des Erstellers opak ist, ist dieser Teil implementierungsdefiniert.
- `<uuid>`
  - : Eine {{Glossary("UUID", "UUID")}}.

## Nutzungshinweise

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, auch wenn Sie bereits eine für dasselbe Objekt erstellt haben. Jede dieser URLs muss durch Aufrufen von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigegeben werden, wenn Sie sie nicht mehr benötigen. Solange eine Objekt-URL aktiv ist, kann das zugrunde liegende Objekt nicht durch die Garbage Collection bereinigt werden und kann Speicherlecks verursachen.

Browser geben Objekt-URLs automatisch frei, wenn das Dokument entladen wird. Für optimale Leistung und Speichernutzung sollten Sie sie jedoch explizit freigeben, wenn dies zu einem sicheren Zeitpunkt möglich ist.

Vermeiden Sie jedoch, die Objekt-URL zu früh freizugeben. Ein häufiges Anti-Pattern ist das folgende:

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

Das sofortige Widerrufen der Blob-URL, nachdem das Bild gerendert wurde, würde das Bild für Benutzerinteraktionen unbrauchbar machen, beispielsweise für das Speichern des Bildes per Rechtsklick oder das Öffnen in einem neuen Tab. Bei langlebigen Anwendungen sollten Sie Objekt-URLs erst widerrufen, wenn die Ressource für den Benutzer nicht mehr zugänglich ist, etwa wenn das Bild aus dem DOM entfernt wird.

### Speicherpartitionierung

Der Zugriff auf Ressourcen über Blob-URLs unterliegt denselben Einschränkungen wie alle anderen Speichermechanismen, d.h. der [Zustandspartitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning). Blob-URLs verfügen über einen zugeordneten Ersteller-Ursprung (der in der URL selbst gespeichert ist) und können nur aus Umgebungen abgerufen werden, deren Speicherschlüssel mit dem der Erstellerumgebung übereinstimmt. Blob-URL-_Navigationen_ unterliegen dieser Einschränkung nicht, obwohl Browser Datenschutzmaßnahmen wie [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) für websiteübergreifende Navigationen zu einer Blob-URL durchsetzen können.

### Verwenden von Objekt-URLs für Medienstreams

In älteren Versionen der Media-Source-Spezifikation erforderte das Anhängen eines Streams an ein {{HTMLElement("video")}}-Element die Erstellung einer Objekt-URL für den [`MediaStream`](/de/docs/Web/API/MediaStream). Dies ist nicht mehr erforderlich, und Browser entfernen die Unterstützung dafür.

> [!WARNING]
> Wenn Sie noch Code haben, der auf `createObjectURL()` angewiesen ist, um Streams an Medienelemente anzuhängen, müssen Sie Ihren Code aktualisieren, um [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` zu setzen.

### Abrufen mit dem `Range`-Header

Blob-URLs unterstützen das Abrufen mit dem [`Range`](/de/docs/Web/HTTP/Reference/Headers/Range)-Header, um Teilinhalte anzufordern. Dies ist besonders nützlich bei der Arbeit mit großen Blobs, da Sie nur die erforderlichen Teile des Blobs statt des gesamten Inhalts abrufen können. Ein Beispiel finden Sie unter [Abrufen eines Bereichs aus einer Blob-URL](/de/docs/Web/HTTP/Reference/Headers/Range#fetching_a_range_from_a_blob_url).

## Beispiele

### Gültige Blob-URLs

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### Erstellen von Blob-URLs

In diesem Beispiel erstellen wir zunächst ein [`Blob`](/de/docs/Web/API/Blob) aus einem {{HTMLElement("canvas")}}, erstellen eine Blob-URL dafür und hängen die URL schließlich an ein {{HTMLElement("img")}}-Element an.

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

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Verwenden von Objekt-URLs zum Anzeigen von Bildern](/de/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes)
