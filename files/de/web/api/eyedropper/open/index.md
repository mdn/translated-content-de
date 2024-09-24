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

  - : Ein Optionsobjekt, um ein {{domxref("AbortSignal")}} Signal zu übergeben:

    - `signal` {{optional_inline}}
      - : Ein {{domxref("AbortSignal")}}. Der Pipettenmodus wird abgebrochen, wenn die `AbortSignal`-Methode {{domxref("AbortController/abort()", "abort()")}} aufgerufen wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich aufgelöst wird, wenn der Benutzer eine Pixelfarbe vom Bildschirm auswählt.

Das Promise löst sich in ein Objekt mit der folgenden Eigenschaft auf:

- `sRGBHex`
  - : Ein String, der die ausgewählte Farbe im hexadezimalen sRGB-Format darstellt (`#aabbcc`).

### Ausnahmen

Ausnahmen werden nicht ausgelöst, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `open()` nicht über eine [flüchtige Benutzeraktivierung](/de/docs/Glossary/Transient_activation) aufgerufen wird.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn bereits eine andere Pipette geöffnet ist.
- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer die Auswahl mit der <kbd>Esc</kbd>-Taste abbricht oder wenn die Auswahl durch einen {{domxref("AbortController")}}, der als Argument an `open()` übergeben wird, abgebrochen wird.
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Auswahl aus anderen Gründen fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("EyeDropper")}} Interface, zu dem es gehört.
