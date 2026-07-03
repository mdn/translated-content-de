---
title: "IdentityCredential: Eigenschaft configURL"
short-title: configURL
slug: Web/API/IdentityCredential/configURL
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`configURL`**-Eigenschaft des schreibgeschützten [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt eine Zeichenkette zurück, die die Konfigurationsdatei-URL des für die Anmeldung verwendeten {{Glossary("Identity_provider", "Identity Providers")}} (IdP) angibt.

Weitere Informationen finden Sie unter [Bereitstellen einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).

## Wert

Eine Zeichenkette.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `configURL`

{{Glossary("Relying_party", "Vertrauensparteien")}} (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit Benutzer sich bei der RP über einen Identity Provider (IdP) mit Identitätsföderation anmelden. Eine Anfrage, die einen einzelnen Anbieter angibt, würde folgendermaßen aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
        },
      ],
    },
  });

  console.log(identityCredential.configURL);
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf die `configURL` des für die Anmeldung verwendeten IdP zuzugreifen.

Sehen Sie sich das [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang einleiten, der im [FedCM-Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
