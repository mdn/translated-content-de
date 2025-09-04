---
title: "IdentityCredentialError: Eigenschaft error"
short-title: error
slug: Web/API/IdentityCredentialError/error
l10n:
  sourceCommit: f1251a98115e7a6d566331512256dcbbc4cf7c24
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`error`** der Schnittstelle [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ist entweder einer der Werte aus der [OAuth 2.0 genannten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String, der weitere Informationen über den Fehler gibt.

## Wert

Einer der Werte aus der [OAuth 2.0 genannten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String.

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
- [Fehlerantworten bei ID-Bestätigungen](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
