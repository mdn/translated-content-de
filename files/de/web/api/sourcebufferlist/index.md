---
title: SourceBufferList
slug: Web/API/SourceBufferList
l10n:
  sourceCommit: c92f85b4308f2494f52f56faf443df45f92d3419
---

{{APIRef("Media Source Extensions")}}

Die **`SourceBufferList`** Schnittstelle stellt eine einfache Containerliste für mehrere {{domxref("SourceBuffer")}} Objekte dar.

Die Quellpufferliste, die die `SourceBuffer`s enthält, die zu einer bestimmten `MediaSource` hinzugefügt wurden, kann über die {{domxref("MediaSource.sourceBuffers")}} Eigenschaft abgerufen werden.

Die einzelnen Quellpuffer können mithilfe der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]` abgerufen werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("SourceBufferList.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der {{domxref("SourceBuffer")}} Objekte in der Liste zurück.

## Instanzmethoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

## Ereignisse

- {{domxref("SourceBufferList.addsourcebuffer_event", "addsourcebuffer")}}
  - : Wird ausgelöst, wenn ein {{domxref("SourceBuffer")}} zur Liste hinzugefügt wird.
- {{domxref("SourceBufferList.removesourcebuffer_event", "removesourcebuffer")}}
  - : Wird ausgelöst, wenn ein {{domxref("SourceBuffer")}} aus der Liste entfernt wird.

## Beispiele

Dieses Beispiel zeigt, wie auf die aktiven Quellpuffer der {{domxref("MediaSource")}} zugegriffen wird, die mit einem bereits spielenden {{domxref("HTMLVideoElement")}} verbunden ist.

```js
// Video ist ein bereits spielendes Video mit einer MediaSource als srcObject
const video = document.querySelector("video");
const mediaSource = video.srcObject;
const sourceBufferList = mediaSource.activeSourceBuffers;
for (const sourceBuffer of sourceBufferList) {
  // Machen Sie etwas mit jedem SourceBuffer, wie zum Beispiel abort() aufrufen
  sourceBuffer.abort();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
