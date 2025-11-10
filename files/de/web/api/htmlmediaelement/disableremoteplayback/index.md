---
title: "HTMLMediaElement: disableRemotePlayback Eigenschaft"
short-title: disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Remote Playback API")}}

Die **`disableRemotePlayback`** Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interfaces bestimmt, ob das Media-Element eine Fernwiedergabe-UI haben darf.

## Wert

Ein boolescher Wert, der anzeigt, ob das Media-Element eine Fernwiedergabe-UI haben darf. (`false` bedeutet "nicht deaktiviert", was "aktiviert" bedeutet)

## Beispiel

```js
const obj = document.createElement("audio");
obj.disableRemotePlayback = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das `disableremoteplayback` Attribut des `<audio>` Elements](/de/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback)
- [Das `disableremoteplayback` Attribut des `<video>` Elements](/de/docs/Web/HTML/Reference/Elements/video#disableremoteplayback)
