---
title: "MediaElementAudioSourceNode: Konstruktor MediaElementAudioSourceNode()"
short-title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`MediaElementAudioSourceNode()`** erstellt eine neue Objektinstanz von [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode).

## Syntax

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaElementAudioSourceNode` haben soll:
    - `mediaElement`
      - : Ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), das als Audioquelle verwendet wird.

### Rückgabewert

Eine neue Objektinstanz von [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode).

## Beispiele

```js
const ac = new AudioContext();
const mediaElement = document.createElement("audio");

const myAudioSource = new MediaElementAudioSourceNode(ac, {
  mediaElement,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
