---
title: "IdentityCredential: configURL-Eigenschaft"
short-title: configURL
slug: Web/API/IdentityCredential/configURL
l10n:
  sourceCommit: 798f5efbce403e2366323afea025e5729b902e46
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`configURL`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle gibt einen String zurück, der die URL der Konfigurationsdatei des {{Glossary("Identity_provider", "Identity Providers")}} (IdP) angibt, der für die Anmeldung verwendet wird.

Weitere Informationen finden Sie unter [Bereitstellen einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).

## Wert

Ein String.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `configURL`

{{Glossary("Relying_party", "Vertrauende Parteien")}} (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identity Provider (IdP) beim RP anmelden, unter Verwendung der Identitätsföderation. Eine Anfrage, die einen einzelnen Anbieter angibt, würde so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
        },
      ],
    },
  });

  console.log(identityCredential.configURL);
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf die `configURL` des für die Anmeldung verwendeten IdP zuzugreifen.

Weitere Einzelheiten darüber, wie dies funktioniert, finden Sie in der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf wird den Anmeldeablauf starten, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
