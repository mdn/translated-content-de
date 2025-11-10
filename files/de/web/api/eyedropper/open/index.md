---
title: "EyeDropper: open() Methode"
short-title: open()
slug: Web/API/EyeDropper/open
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

Die **`EyeDropper.open()`** Methode startet den Pipettenmodus und gibt ein Versprechen zurück, das erfüllt wird, sobald der Benutzer eine Farbe ausgewählt und den Pipettenmodus verlassen hat.

## Syntax

```js-nolint
open()
open(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, um ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Signal zu übergeben:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Pipettenmodus wird abgebrochen, wenn die `AbortSignal`-Methode [`abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich aufgelöst wird, wenn der Benutzer eine Pixel-Farbe vom Bildschirm auswählt.

Das Versprechen wird zu einem Objekt mit der folgenden Eigenschaft aufgelöst:

- `sRGBHex`
  - : Ein String, der die ausgewählte Farbe im hexadezimalen sRGB-Format (`#aabbcc`) darstellt.

### Ausnahmen

Ausnahmen werden nicht geworfen, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `open()` nicht durch eine {{Glossary("Transient_activation", "transiente Benutzeraktivierung")}} aufgerufen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits eine andere Pipette geöffnet wurde.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Auswahl durch Drücken der <kbd>Esc</kbd>-Taste abbricht oder wenn die Auswahl durch einen [`AbortController`](/de/docs/Web/API/AbortController), der als Argument an `open()` übergeben wird, abgebrochen wird.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Auswahl aus anderen Gründen fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EyeDropper`](/de/docs/Web/API/EyeDropper) Schnittstelle, zu der es gehört.
