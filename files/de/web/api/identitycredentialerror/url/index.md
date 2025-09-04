---
title: "IdentityCredentialError: url-Eigenschaft"
short-title: url
slug: Web/API/IdentityCredentialError/url
l10n:
  sourceCommit: f1251a98115e7a6d566331512256dcbbc4cf7c24
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte **`url`**-Eigenschaft des [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)-Interfaces ist die URL, die auf menschenlesbare Informationen über den Fehler verweist, die den Benutzern angezeigt werden sollen, zum Beispiel, wie der Fehler behoben werden kann oder wie der Kundenservice kontaktiert werden kann.

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
- [ID-Assertionsfehler-Antworten](/de/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)
