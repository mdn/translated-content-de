---
title: "MediaKeySession: Methode generateRequest()"
short-title: generateRequest()
slug: Web/API/MediaKeySession/generateRequest
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die Methode `generateRequest()` des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, nachdem eine Lizenzanfrage basierend auf den Initialisierungsdaten generiert wurde.

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

  - : Initialisierungsdaten für die Anfrage, im Format, das bei `initDataType` angegeben ist. Es handelt sich um eine Instanz eines der folgenden Typen:

    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("DataView")}}
    - {{jsxref("TypedArray")}}

### Rückgabewert

Ein {{jsxref('Promise')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `initDataType` ein leerer String ist, wenn `initData` ein leeres Array ist oder wenn die bereitgestellten `initData` nicht gemäß dem angegebenen `initDataType` gültig sind.
- [`DOMException`](/de/docs/Web/API/DOMException) `NotSupportedError`
  - : Wird ausgelöst, wenn die mit dem `MediaKeySession`-Objekt assoziierte Schlüsselimplementierung das bereitgestellte `initDataType` nicht unterstützt, wenn die bereinigten Initialisierungsdaten leer sind oder wenn die bereinigten Initialisierungsdaten vom Inhaltsentschlüsselungsmodul (CDM) nicht unterstützt werden.
- [`DOMException`](/de/docs/Web/API/DOMException) `QuotaExceededError`
  - : Wird ausgelöst, wenn die Operation aufgrund von Ressourcenmangel beim Benutzeragenten oder CDM fehlschlägt.
- [`DOMException`](/de/docs/Web/API/DOMException) `InvalidStateError`
  - : Wird ausgelöst, wenn das `MediaKeySession`-Objekt sich in einem `closing`- oder `closed`-Zustand befindet oder wenn es bereits initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
