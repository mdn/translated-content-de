---
title: "IdentityCredentialError: url-Eigenschaft"
short-title: url
slug: Web/API/IdentityCredentialError/url
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}

Die **`url`**-Schreibgeschützte Eigenschaft des [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)-Interfaces ist die URL, die auf menschenlesbare Informationen über den Fehler verweist, die den Benutzern angezeigt werden können, wie etwa Anweisungen zur Behebung des Fehlers oder Kontaktinformationen zum Kundenservice.

## Wert

Ein String, der die URL für weitere Informationen über den Fehler angibt.

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
- [ID-Assertion-Fehlerantworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
