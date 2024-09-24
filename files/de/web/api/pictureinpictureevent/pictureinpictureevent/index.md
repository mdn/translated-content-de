---
title: "PictureInPictureEvent: PictureInPictureEvent() Konstruktor"
short-title: PictureInPictureEvent()
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
l10n:
  sourceCommit: ee99bfdebd8f9c691a06afec0895285a3bf2da2a
---

{{APIRef("Picture-in-Picture API")}}

Der **`PictureInPictureEvent()`** Konstruktor gibt ein neues {{domxref("PictureInPictureEvent")}} Objekt zurück.

## Syntax

```js-nolint
new PictureInPictureEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses darstellt. Er ist case-sensitiv und Browser setzen ihn auf `enterpictureinpicture`, `leavepictureinpicture` oder `resize`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `pictureInPictureWindow`
      - : Ein {{domxref("PictureInPictureWindow")}}.

### Rückgabewert

Ein neues {{domxref("PictureInPictureEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("PictureInPictureEvent")}} Interface, zu dem es gehört.
