---
title: "DragEvent: DragEvent() Konstruktor"
short-title: DragEvent()
slug: Web/API/DragEvent/DragEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Drag and Drop API")}}

Dieser Konstruktor wird verwendet, um ein synthetisches [`DragEvent`](/de/docs/Web/API/DragEvent)-Objekt zu erstellen.

Obwohl dieses Interface einen Konstruktor hat, ist es nicht möglich, ein nützliches [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt aus einem Skript zu erstellen, da [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte über ein Verarbeitungs- und Sicherheitsmodell verfügen, das vom Browser während von Drag-and-Drop-Vorgängen koordiniert wird.

Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

## Syntax

```js-nolint
new DragEvent(type)
new DragEvent(type, dragEventInit)
```

### Parameter

- `type`

  - : Ein String, der den Namen des Ereignisses darstellt (siehe [DragEvent-Ereignistypen](/de/docs/Web/API/DragEvent#event_types)).

- `eventInitDict` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `dataTransfer` {{optional_inline}}
      - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer). Standardwert ist `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
