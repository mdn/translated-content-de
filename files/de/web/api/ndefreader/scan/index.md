---
title: "NDEFReader: scan()-Methode"
short-title: scan()
slug: Web/API/NDEFReader/scan
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `scan()`-Methode des [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Interfaces aktiviert ein Lesegerät und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn ein NFC-Tag-Lesevorgang geplant ist, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsanfrage aus, wenn die Berechtigung "nfc" nicht zuvor erteilt wurde.

## Syntax

```js-nolint
scan(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das das Abbrechen dieses `scan()`-Vorgangs ermöglicht.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das unmittelbar nach
der Planung von Lesevorgängen für den NFC-Adapter aufgelöst wird.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt,
wobei ein [`DOMException`](/de/docs/Web/API/DOMException) übergeben wird, dessen `name` einer der folgenden ist:

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Scanvorgang mit dem im `options`-Argument übergebenen [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn bereits ein laufender Scan vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Berechtigung für diesen Vorgang abgelehnt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein NFC-Adapter kompatibel mit Web NFC vorhanden ist oder keine Verbindung hergestellt werden kann.

## Beispiele

### Scannen von Fehlern behandeln

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
