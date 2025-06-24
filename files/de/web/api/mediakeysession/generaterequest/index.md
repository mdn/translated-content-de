---
title: "MediaKeySession: generateRequest() Methode"
short-title: generateRequest()
slug: Web/API/MediaKeySession/generateRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die Methode `generateRequest()` der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, nachdem eine Lizenzanforderung basierend auf Initialisierungsdaten erstellt wurde.

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
  - : Initialisierungsdaten für die Anfrage, im Format, das durch `initDataType` spezifiziert wird. Es ist eine Instanz eines der folgenden Typen:
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("DataView")}}
    - {{jsxref("TypedArray")}}

### Rückgabewert

Ein {{jsxref('Promise')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn `initDataType` ein leerer String ist, wenn `initData` ein leeres Array ist, oder wenn die bereitgestellten `initData` nicht gültig gemäß dem angegebenen `initDataType` sind.
- [`DOMException`](/de/docs/Web/API/DOMException) `NotSupportedError`
  - : Wird ausgelöst, wenn die Schlüssel-System-Implementierung, die mit dem `MediaKeySession`-Objekt verbunden ist, den bereitgestellten `initDataType` nicht unterstützt, wenn die bereinigten Initialisierungsdaten leer sind, oder wenn die bereinigten Initialisierungsdaten vom Content Decryption Module (CDM) nicht unterstützt werden.
- [`DOMException`](/de/docs/Web/API/DOMException) `QuotaExceededError`
  - : Wird ausgelöst, wenn der Vorgang aufgrund von Ressourcennot auf dem Benutzeragenten oder CDM fehlschlägt.
- [`DOMException`](/de/docs/Web/API/DOMException) `InvalidStateError`
  - : Wird ausgelöst, wenn sich das `MediaKeySession`-Objekt in einem `closing`- oder `closed`-Zustand befindet oder wenn es bereits initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
