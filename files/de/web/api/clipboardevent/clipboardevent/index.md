---
title: "ClipboardEvent: ClipboardEvent() Konstruktor"
short-title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

Der **`ClipboardEvent()`** Konstruktor gibt ein neues {{domxref("ClipboardEvent")}} zurück, das ein Ereignis darstellt, welches Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellt, nämlich die Ereignisse {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} und {{domxref("Element/paste_event", "paste")}}.

## Syntax

```js-nolint
new ClipboardEvent(type)
new ClipboardEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `ClipboardEvent`.
    Es ist zwischen Groß- und Kleinschreibung zu unterscheiden und Browser setzen es auf `copy`, `cut` oder `paste`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `clipboardData` {{optional_inline}}
      - : Ein {{domxref("DataTransfer")}} Objekt, das die Daten enthält, die mit dem Zwischenablageereignis verbunden sind. Standardmäßig `null`.
    - `dataType` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der den MIME-Typ der im `data`-Argument enthaltenen Daten enthält. Standardmäßig `""`.
    - `data` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der die Daten enthält, die mit dem Zwischenablageereignis verbunden sind. Standardmäßig `""`.

### Rückgabewert

Ein neues {{domxref("ClipboardEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignisse im Zusammenhang mit dem Kopieren: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- Die {{domxref("ClipboardEvent")}} Schnittstelle, zu der es gehört.
- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API)
