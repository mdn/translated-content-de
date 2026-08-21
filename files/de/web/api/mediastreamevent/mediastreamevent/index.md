---
title: "MediaStreamEvent: MediaStreamEvent() Konstruktor"
short-title: MediaStreamEvent()
slug: Web/API/MediaStreamEvent/MediaStreamEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Der **`MediaStreamEvent()`** Konstruktor erstellt ein neues [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent) Objekt.

## Syntax

```js-nolint
 new MediaStreamEvent(type, options)
```

### Werte

- `type`
  - : Ein String mit dem Namen des Ereignisses, wie `addstream` oder `removestream`.
- `options`
  - : Ein Objekt, das zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften folgende Eigenschaften haben kann:
    - `stream`
      - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den Stream darstellt, der durch das Ereignis betroffen ist.

### Rückgabewert

Ein neues [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent) Objekt.

## Beispiel

```js
// s is a MediaStream
const event = new MediaStreamEvent("addstream", { stream: s });
```

## Spezifikationen

_Dieses Feature ist nicht mehr Teil einer Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
