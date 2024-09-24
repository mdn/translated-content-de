---
title: "MediaStreamEvent: MediaStreamEvent() Konstruktor"
short-title: MediaStreamEvent()
slug: Web/API/MediaStreamEvent/MediaStreamEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Der **`MediaStreamEvent()`** Konstruktor erstellt ein neues {{domxref("MediaStreamEvent")}} Objekt.

## Syntax

```js-nolint
 new MediaStreamEvent(type, options)
```

### Werte

- `type`
  - : Ein String mit dem Namen des Events, wie `addstream` oder `removestream`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `stream`
      - : Ein {{domxref("MediaStream")}}, das den Stream repräsentiert, der durch das Event betroffen ist.

### Rückgabewert

Ein neues {{domxref("MediaStreamEvent")}} Objekt.

## Beispiel

```js
// s ist ein MediaStream
const event = new MediaStreamEvent("addstream", { stream: s });
```

## Spezifikationen

_Diese Funktion ist nicht mehr Teil einer Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
