---
title: "MediaKeySession: generateRequest()-Methode"
short-title: generateRequest()
slug: Web/API/MediaKeySession/generateRequest
l10n:
  sourceCommit: 4edb5ff2a85b0ede46e2ccb9ea23f91e75d80662
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `generateRequest()`-Methode des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, nachdem eine Lizenzanfrage basierend auf den Initialisierungsdaten generiert wurde.

## Syntax

```js-nolint
generateRequest(initDataType, initData)
```

### Parameter

- `initDataType`
  - : Ein String, der das Format des `initData`-Parameters angibt. Dies muss einer der folgenden Werte sein:
    - `"cenc"`: Der `initData`-Parameter verwendet das [`"cenc"`](https://www.w3.org/TR/eme-initdata-cenc/)-Format.
    - `"keyids"`: Der `initData`-Parameter verwendet das [`"keyids"`](https://www.w3.org/TR/eme-initdata-keyids/)-Format.
    - `"webm"`: Der `initData`-Parameter verwendet das [`"webm"`](https://www.w3.org/TR/eme-initdata-webm/)-Format.
- `initData`

  - : Initialisierungsdaten für die Anfrage, im durch `initDataType` angegebenen Format. Es ist eine Instanz eines der folgenden Typen:

    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("DataView")}}
    - {{jsxref("TypedArray")}}

### Rückgabewert

Ein {{jsxref('Promise')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `initDataType` ein leerer String ist, wenn `initData` ein leeres Array ist, oder wenn das bereitgestellte `initData` gemäß dem angegebenen `initDataType` nicht gültig ist.
- [`DOMException`](/de/docs/Web/API/DOMException) `NotSupportedError`
  - : Wird ausgelöst, wenn die mit dem `MediaKeySession`-Objekt verknüpfte Key System-Implementierung den bereitgestellten `initDataType` nicht unterstützt, wenn die bereinigten Initialisierungsdaten leer sind, oder wenn die bereinigten Initialisierungsdaten vom Content Decryption Module (CDM) nicht unterstützt werden.
- [`DOMException`](/de/docs/Web/API/DOMException) `QuotaExceededError`
  - : Wird ausgelöst, wenn die Operation aufgrund eines Mangels an Ressourcen seitens des User-Agents oder des CDM fehlschlägt.
- [`DOMException`](/de/docs/Web/API/DOMException) `InvalidStateError`
  - : Wird ausgelöst, wenn sich das `MediaKeySession`-Objekt in einem `closing`- oder `closed`-Zustand befindet oder wenn es bereits initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
