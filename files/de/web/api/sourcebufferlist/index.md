---
title: SourceBufferList
slug: Web/API/SourceBufferList
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SourceBufferList`**-Schnittstelle stellt eine einfache Containerliste für mehrere [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte dar.

Die Quellpufferliste, die die `SourceBuffer`s enthält, die einem bestimmten `MediaSource` hinzugefügt wurden, kann über die Eigenschaft [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) abgerufen werden.

Die einzelnen Quellpuffer können mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]` zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SourceBufferList.length`](/de/docs/Web/API/SourceBufferList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in der Liste zurück.

## Instanz-Methoden

_Erbt Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

- [`addsourcebuffer`](/de/docs/Web/API/SourceBufferList/addsourcebuffer_event)
  - : Wird ausgelöst, wenn ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) zur Liste hinzugefügt wird.
- [`removesourcebuffer`](/de/docs/Web/API/SourceBufferList/removesourcebuffer_event)
  - : Wird ausgelöst, wenn ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der Liste entfernt wird.

## Beispiele

Dieses Beispiel zeigt, wie auf die aktiven Quellpuffer der [`MediaSource`](/de/docs/Web/API/MediaSource) zugegriffen wird, die mit einem bereits spielenden [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verbunden ist.

```js
// Video is an already playing video using a MediaSource srcObject
const video = document.querySelector("video");
const mediaSource = video.srcObject;
const sourceBufferList = mediaSource.activeSourceBuffers;
for (const sourceBuffer of sourceBufferList) {
  // Do something with each SourceBuffer, such as call abort()
  sourceBuffer.abort();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
