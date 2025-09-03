---
title: "IdentityCredentialError: IdentityCredentialError() Konstruktor"
short-title: IdentityCredentialError()
slug: Web/API/IdentityCredentialError/IdentityCredentialError
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

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
      - : Ein String. Dies kann entweder einer der in der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) aufgelisteten Werte oder ein beliebiger String sein.
    - `url` {{optional_inline}}
      - : Eine URL, die auf lesbare Informationen über den Fehler verweist, die den Nutzern angezeigt werden sollen, wie z.B. wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert werden kann.

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
