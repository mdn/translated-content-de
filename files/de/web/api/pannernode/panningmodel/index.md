---
title: "PannerNode: Eigenschaft panningModel"
short-title: panningModel
slug: Web/API/PannerNode/panningModel
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `panningModel` des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein enumerierter Wert, der bestimmt, welcher Räumlichkeitsalgorithmus verwendet wird, um das Audio in einem 3D-Raum zu positionieren.

Die möglichen Werte sind:

- `equalpower`: Repräsentiert den Equal-Power-Panning-Algorithmus, der im Allgemeinen als einfach und effizient angesehen wird. `equalpower` ist der Standardwert.
- `HRTF`: Erzeugt eine Stereoausgabe von höherer Qualität als `equalpower` — es wird eine Faltung mit gemessenen Impulsantworten von menschlichen Probanden verwendet.

## Wert

Ein Enum — siehe [`PanningModelType`](https://webaudio.github.io/web-audio-api/#idl-def-PanningModelType).

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
