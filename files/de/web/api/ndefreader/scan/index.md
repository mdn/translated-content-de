---
title: "NDEFReader: scan()-Methode"
short-title: scan()
slug: Web/API/NDEFReader/scan
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `scan()`-Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Interfaces aktiviert ein Lesegerät und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine NFC-Tag-Leseoperation geplant ist, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsanfrage aus, wenn die "nfc"-Berechtigung zuvor nicht erteilt wurde.

## Syntax

```js-nolint
scan(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das es ermöglicht, diese `scan()`-Operation abzubrechen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das sofort aufgelöst wird, nachdem Leseoperationen für den NFC-Adapter geplant wurden.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt und ein [`DOMException`](/de/docs/Web/API/DOMException) übergeben, dessen `name` einer der folgenden ist:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Scan-Operation mit dem im `options`-Argument übergebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn bereits ein laufender Scan vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Berechtigung für diese Operation abgelehnt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein NFC-Adapter mit Web NFC kompatibel ist oder eine Verbindung nicht hergestellt werden kann.

## Beispiele

### Umgang mit Scan-Fehlern

Dieses Beispiel zeigt, was passiert, wenn ein Scan-Promise abgelehnt wird und `readingerror` ausgelöst wird.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Error! Cannot read data from the NFC tag. Try a different one?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  })
  .catch((error) => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
