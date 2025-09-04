---
title: "IdentityCredentialError: IdentityCredentialError() Konstruktor"
short-title: IdentityCredentialError()
slug: Web/API/IdentityCredentialError/IdentityCredentialError
l10n:
  sourceCommit: f1251a98115e7a6d566331512256dcbbc4cf7c24
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`IdentityCredentialError()`** Konstruktor erstellt ein neues [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) Objekt.

## Syntax

```js-nolint
new IdentityCredentialError()
new IdentityCredentialError(message)
new IdentityCredentialError(message, options)
```

### Parameter

- `message`
  - : Eine Beschreibung des Fehlers. Wenn nicht vorhanden, wird der leere String `''` verwendet.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `error` {{optional_inline}}
      - : Ein String. Dies kann entweder einer der Werte aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) sein oder ein beliebiger String.
    - `url` {{optional_inline}}
      - : Eine URL, die auf menschenlesbare Informationen über den Fehler verweist, um den Nutzern anzuzeigen, wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert werden kann.

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
- [ID Assertion Error Responses](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
