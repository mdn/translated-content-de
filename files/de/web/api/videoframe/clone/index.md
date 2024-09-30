---
title: "VideoFrame: clone()-Methode"
short-title: clone()
slug: Web/API/VideoFrame/clone
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`clone()`**-Methode des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces erstellt ein neues `VideoFrame`-Objekt, das auf die gleiche Medienressource wie das Original verweist.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein neues geklontes [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `VideoFrame`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Im folgenden Beispiel wird eine Kopie von `VideoFrame` als `videoFrame2` geklont.

```js
let videoFrame2 = VideoFrame.clone();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
