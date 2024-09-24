---
title: "VideoColorSpace: VideoColorSpace() Konstruktor"
short-title: VideoColorSpace()
slug: Web/API/VideoColorSpace/VideoColorSpace
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoColorSpace()`** Konstruktor erstellt ein neues {{domxref("VideoColorSpace")}} Objekt, das einen Videofarbraum darstellt.

## Syntax

```js-nolint
new VideoColorSpace()
new VideoColorSpace(options)
```

### Parameter

Alle Werte sind auf `null` voreingestellt, wenn sie nicht vorhanden sind.

- `options` {{optional_inline}}
  - : Ein Objekt, das folgendes enthält:
    - `primaries` {{optional_inline}}
      - : Einer der folgenden Strings:
        - `"bt709"`
        - `"bt470bg"`
        - `"smpte170m"`
    - `transfer` {{optional_inline}}
      - : Einer der folgenden Strings:
        - `"bt709"`
        - `"smpte170m"`
        - `"iec61966-2-1"`
    - `matrix` {{optional_inline}}
      - : Einer der folgenden Strings:
        - `"rgb"`
        - `"bt709"`
        - `"bt470bg"`
        - `"smpte170m"`
    - `fullRange` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, `true`, wenn Vollbereichs-Farbwerte im Video verwendet werden.

## Beispiele

Das folgende Beispiel erstellt ein neues `VideoColorSpace` Objekt mit {{domxref("VideoColorSpace.primaries")}} auf `"bt709"` gesetzt und {{domxref("VideoColorSpace.primaries")}} auf `true` gesetzt.

```js
const options = {
  primaries: "bt709",
  fullRange: true,
};

const colorSpace = new VideoColorSpace(options);
console.log(colorSpace);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
