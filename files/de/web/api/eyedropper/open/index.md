---
title: "EyeDropper: open() Methode"
short-title: open()
slug: Web/API/EyeDropper/open
l10n:
  sourceCommit: 14b8422d5857643fe6126b8c0e1f8cfdc576b55b
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

Die **`EyeDropper.open()`** Methode startet den Pipettenmodus und gibt ein Promise zurück, das erfüllt wird, sobald der Benutzer eine Farbe ausgewählt und den Pipettenmodus verlassen hat.

## Syntax

```js-nolint
open()
open(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, um ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Signal zu übergeben:

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Pipettenmodus wird abgebrochen, wenn die `abort()` Methode des `AbortSignal`s aufgerufen wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das letztendlich aufgelöst wird, wenn der Benutzer eine Pixelfarbe vom Bildschirm auswählt.

Das Promise wird zu einem Objekt mit der folgenden Eigenschaft aufgelöst:

- `sRGBHex`
  - : Ein String, der die ausgewählte Farbe im hexadezimalen sRGB-Format darstellt (`#aabbcc`).

### Ausnahmen

Ausnahmen werden nicht geworfen, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn `open()` nicht über eine {{Glossary("Transient_activation", "vorübergehende Benutzeraktivierung")}} aufgerufen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn bereits ein anderer Farbwähler geöffnet ist.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Benutzer die Auswahl durch Drücken der <kbd>Esc</kbd>-Taste abbricht oder wenn die Auswahl durch einen übergebenen [`AbortController`](/de/docs/Web/API/AbortController) zu `open()` abgebrochen wird.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Auswahl aus anderen Gründen fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`EyeDropper`](/de/docs/Web/API/EyeDropper) Interface, zu dem es gehört.
