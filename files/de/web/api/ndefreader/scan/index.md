---
title: "NDEFReader: scan()-Methode"
short-title: scan()
slug: Web/API/NDEFReader/scan
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `scan()`-Methode der {{DOMxRef("NDEFReader")}}-Schnittstelle aktiviert ein Lesegerät und gibt ein {{jsxref("Promise")}} zurück, das entweder aufgelöst wird, wenn eine NFC-Tag-Leseoperation geplant ist, oder abgelehnt wird, wenn ein Hardware- oder Berechtigungsfehler auftritt. Diese Methode löst eine Berechtigungsabfrage aus, wenn die "nfc"-Berechtigung nicht zuvor erteilt wurde.

## Syntax

```js-nolint
scan(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `signal`
      - : Ein {{DOMxRef("AbortSignal")}}, das das Abbrechen dieser `scan()`-Operation ermöglicht.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das sofort nach Planung der Leseoperationen für den NFC-Adapter aufgelöst wird.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen wird das zurückgegebene Promise abgelehnt und eine {{domxref("DOMException")}} übergeben, deren `name` einer der folgenden ist:

- `AbortError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Scan-Operation mit dem im `options`-Argument übergebenen {{DOMxRef("AbortSignal")}} abgebrochen wurde.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn bereits ein Scan läuft.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Berechtigung für diese Operation verweigert wurde.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn kein kompatibler NFC-Adapter für Web NFC vorhanden ist oder keine Verbindung hergestellt werden kann.

## Beispiele

### Behandeln von Scan-Fehlern

Dieses Beispiel zeigt, was passiert, wenn ein Scan-Promise abgelehnt wird und `readingerror` ausgelöst wird.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan erfolgreich gestartet.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Fehler! Daten vom NFC-Tag können nicht gelesen werden. Anderes Tag ausprobieren?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF-Nachricht gelesen.");
    };
  })
  .catch((error) => {
    console.log(`Fehler! Scan konnte nicht gestartet werden: ${error}.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
