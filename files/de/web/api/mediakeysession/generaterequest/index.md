---
title: "MediaKeySession: generateRequest()-Methode"
short-title: generateRequest()
slug: Web/API/MediaKeySession/generateRequest
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die `generateRequest()`-Methode des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, nachdem eine Lizenzanfrage basierend auf Initialisierungsdaten generiert wurde.

## Syntax

```js-nolint
generateRequest(initDataType, initData)
```

### Parameter

- `initDataType`
  - : Ein String, der das Format des `initData`-Parameters angibt. Dies muss einer der folgenden Werte sein:
    - `"cenc"`: Der `initData`-Parameter verwendet das [`"cenc"`](https://w3c.github.io/encrypted-media/format-registry/initdata/cenc.html)-Format.
    - `"keyids"`: Der `initData`-Parameter verwendet das [`"keyids"`](https://w3c.github.io/encrypted-media/format-registry/initdata/keyids.html)-Format.
    - `"webm"`: Der `initData`-Parameter verwendet das [`"webm"`](https://w3c.github.io/encrypted-media/format-registry/initdata/webm.html)-Format.
- `initData`
  - : Initialisierungsdaten für die Anfrage, im Format, das durch `initDataType` spezifiziert ist. Es ist eine Instanz eines der folgenden Typen:
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("DataView")}}
    - {{jsxref("TypedArray")}}

### Rückgabewert

Ein {{jsxref('Promise')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `initDataType` ein leerer String ist, wenn `initData` ein leeres Array ist oder wenn die bereitgestellten `initData` nicht gültig gemäß dem angegebenen `initDataType` sind.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die mit dem `MediaKeySession`-Objekt assoziierte Key-System-Implementierung den bereitgestellten `initDataType` nicht unterstützt, wenn die bereinigten Initialisierungsdaten leer sind oder wenn die bereinigten Initialisierungsdaten nicht vom Inhaltsentschlüsselungsmodul (CDM) unterstützt werden.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Operation aufgrund eines Ressourcenmangels des User-Agents oder CDM fehlschlägt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sich das `MediaKeySession`-Objekt in einem `closing`- oder `closed`-Zustand befindet, oder wenn es bereits initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
