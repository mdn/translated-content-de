---
title: "HTMLMediaElement: disableRemotePlayback Eigenschaft"
short-title: disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

Die **`disableRemotePlayback`**-Eigenschaft der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle bestimmt, ob das Medienelement eine Remote-Wiedergabe-Benutzeroberfläche haben darf.

## Wert

Ein boolescher Wert, der angibt, ob das Medienelement eine Remote-Wiedergabe-Benutzeroberfläche haben darf. (`false` bedeutet "nicht deaktiviert", was "aktiviert" bedeutet)

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

- [Das `disableremoteplayback` Attribut des `<audio>` Elements](/de/docs/Web/HTML/Element/audio#disableremoteplayback)
- [Das `disableremoteplayback` Attribut des `<video>` Elements](/de/docs/Web/HTML/Element/video#disableremoteplayback)
