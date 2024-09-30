---
title: "ClipboardEvent: ClipboardEvent() Konstruktor"
short-title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

Der **`ClipboardEvent()`** Konstruktor gibt ein neues [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent) zurück, das ein Ereignis darstellt, welches Informationen über Änderungen der Zwischenablage bereitstellt, also Ereignisse wie [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event).

## Syntax

```js-nolint
new ClipboardEvent(type)
new ClipboardEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `ClipboardEvent`.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn auf `copy`, `cut` oder `paste`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `clipboardData` {{optional_inline}}
      - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt, das die Daten enthält, die das Zwischenablagen-Ereignis betreffen. Standardmäßig ist es `null`.
    - `dataType` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der den MIME-Typ der im `data`-Argument enthaltenen Daten enthält. Standardmäßig ist er `""`.
    - `data` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der die Daten enthält, die das Zwischenablagen-Ereignis betreffen. Standardmäßig ist er `""`.

### Rückgabewert

Ein neues [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- Das [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent) Interface, zu dem es gehört.
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
