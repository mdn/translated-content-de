---
title: "blob: URLs"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

**Blob (oder Objekt) URLs**, URLs mit dem Präfix `blob:`-Schema, ermöglichen die Integration von [`Blob`](/de/docs/Web/API/Blob)s und [`MediaSource`](/de/docs/Web/API/MediaSource)s mit anderen APIs, die nur für die Verwendung mit URLs entwickelt wurden, wie das {{HTMLElement("img")}}-Element. Blob-URLs können auch verwendet werden, um zu navigieren sowie Downloads von lokal generierten Daten auszulösen. Sie sind als opake Kennungen konzipiert (das heißt, Sie sollten sie nicht manuell schreiben) und sollten mit den Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) verwaltet werden.

Blob-URLs sind ähnlich wie [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data), da sie beide die Darstellung von im Speicher befindlichen Ressourcen als URLs ermöglichen; der Unterschied besteht darin, dass Data-URLs Ressourcen in sich selbst einbetten und erhebliche Größenbeschränkungen haben, während Blob-URLs ein unterstützendes `Blob` oder `MediaSource` erfordern und größere Ressourcen darstellen können.

## Syntax

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : Das Schema der URL.
- `<origin>`
  - : Der [Ursprung](/de/docs/Web/API/URL/origin) des Erstellers dieser URL. Wenn der Ursprung des Erstellers opak ist, dann ist dieser Teil implementierungsdefiniert.
- `<uuid>`
  - : Ein {{Glossary("UUID", "UUID")}}.

## Verwendungshinweise

### Speicherverwaltung

Jedes Mal, wenn Sie `createObjectURL()` aufrufen, wird eine neue Objekt-URL erstellt, auch wenn Sie bereits eine für dasselbe Objekt erstellt haben. Jede davon muss freigegeben werden, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen, wenn Sie sie nicht mehr benötigen. Solange eine Objekt-URL aktiv ist, kann das zugrunde liegende Objekt nicht gesammelt werden, was möglicherweise zu Speicherlecks führt.

Browser geben Objekt-URLs automatisch frei, wenn das Dokument entladen wird. Für eine optimale Leistung und Speichernutzung sollten Sie sie jedoch explizit entladen, wenn es sichere Zeiten gibt.

Vermeiden Sie jedoch, die Objekt-URL zu früh freizugeben. Ein häufiges Anti-Pattern ist das folgende:

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

Das sofortige Widerrufen der Blob-URL, nachdem das Bild gerendert wurde, würde das Bild für Benutzerinteraktionen unbenutzbar machen (wie das Rechtsklicken zum Speichern des Bildes oder das Öffnen in einem neuen Tab). Bei langlebigen Anwendungen sollten Sie Objekt-URLs nur widerrufen, wenn die Ressource dem Benutzer nicht mehr zugänglich ist (wie wenn das Bild aus dem DOM entfernt wird).

### Speicherpartitionierung

Der Zugriff auf Ressourcen über Blob-URLs unterliegt denselben Einschränkungen wie alle anderen Speichermethoden, das heißt [State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning). Blob-URLs haben einen zugehörigen Ersteller-Ursprung (der in der URL selbst gespeichert ist) und können nur aus Umgebungen abgerufen werden, in denen der Speicherschlüssel mit dem der Erstellerumgebung übereinstimmt. Blob-URL-Navigationen unterliegen dieser Einschränkung nicht, obwohl Browser möglicherweise Datenschutzmaßnahmen wie [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) für Cross-Site-Navigationen zu einer Blob-URL durchsetzen.

### Verwendung von Objekt-URLs für Medienstreams

In älteren Versionen der Media Source-Spezifikation erforderte das Anhängen eines Streams an ein {{HTMLElement("video")}}-Element das Erstellen einer Objekt-URL für den [`MediaStream`](/de/docs/Web/API/MediaStream). Dies ist nicht mehr notwendig, und Browser entfernen die Unterstützung dafür.

> [!WARNING]
> Wenn Ihr Code noch auf `createObjectURL()` angewiesen ist, um Streams an Medienelemente anzuhängen, müssen Sie Ihren Code aktualisieren, um [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` zu setzen.

## Beispiele

### Gültige Blob-URLs

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### Erstellen von Blob-URLs

In diesem Beispiel erstellen wir zuerst ein [`Blob`](/de/docs/Web/API/Blob) aus einem {{HTMLElement("canvas")}}, erzeugen eine Blob-URL dafür und fügen die URL schließlich einem {{HTMLElement("img")}}-Element hinzu.

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
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
