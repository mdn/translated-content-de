---
title: "PictureInPictureEvent: PictureInPictureEvent() Konstruktor"
short-title: PictureInPictureEvent()
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
l10n:
  sourceCommit: ee99bfdebd8f9c691a06afec0895285a3bf2da2a
---

{{APIRef("Picture-in-Picture API")}}

Der **`PictureInPictureEvent()`** Konstruktor gibt ein neues [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent) Objekt zurück.

## Syntax

```js-nolint
new PictureInPictureEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Events darstellt. Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn auf `enterpictureinpicture`, `leavepictureinpicture` oder `resize`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `pictureInPictureWindow`
      - : Ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow).

### Rückgabewert

Ein neues [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent), zu der es gehört.
