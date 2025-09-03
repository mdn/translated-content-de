---
title: "IdentityCredentialError: error-Eigenschaft"
short-title: error
slug: Web/API/IdentityCredentialError/error
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}

Die **`error`**-Eigenschaft des [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)-Interfaces ist entweder einer der Werte, die in der [OAuth 2.0-spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) aufgeführt sind, oder ein beliebiger String, der mehr Informationen über den Fehler gibt.

## Wert

Einer der Werte, die in der [OAuth 2.0-spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) aufgeführt sind, oder ein beliebiger String.

## Beispiele

```js
try {
  const cred = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://idp.example/manifest.json",
          clientId: "1234",
        },
      ],
    },
  });
} catch (e) {
  const error = e.error;
  const url = e.url;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [ID Assertion-Fehlermeldungen](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
