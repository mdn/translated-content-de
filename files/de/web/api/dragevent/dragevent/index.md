---
title: "DragEvent: DragEvent()-Konstruktor"
short-title: DragEvent()
slug: Web/API/DragEvent/DragEvent
l10n:
  sourceCommit: d9f1de09c4649a1fbd3e154d8fcf6279b52e5bb9
---

{{APIRef("HTML Drag and Drop API")}}

Dieser Konstruktor wird verwendet, um ein synthetisches [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekt zu erstellen.

Obwohl diese Schnittstelle einen Konstruktor hat, ist es nicht möglich, ein nützliches [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt aus einem Skript zu erstellen, da [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte ein Verarbeitungs- und Sicherheitsmodell haben, das während Drag-and-Drop-Vorgängen vom Browser koordiniert wird.

Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

## Syntax

```js-nolint
new DragEvent(type)
new DragEvent(type, dragEventInit)
```

### Parameter

- `type`

  - : Ein String, der den Namen des Ereignisses repräsentiert (siehe [DragEvent-Ereignistypen](/de/docs/Web/API/DragEvent#event_types)).

- `eventInitDict` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `dataTransfer` {{optional_inline}}

      - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer). Standardmäßig `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
