---
title: "IdentityCredential: configURL-Eigenschaft"
short-title: configURL
slug: Web/API/IdentityCredential/configURL
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`configURL`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle gibt einen String zurück, der die URL der Konfigurationsdatei des {{Glossary("Identity_provider", "Identitätsanbieters")}} (IdP) angibt, der für die Anmeldung verwendet wird.

Weitere Informationen finden Sie unter [Bereitstellung einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).

## Wert

Ein String.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `configURL`

{{Glossary("Relying_party", "Relying Parties")}} (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mithilfe von Identitätsföderation beim RP anmelden. Eine Anfrage, die einen einzigen Anbieter angibt, würde so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
        },
      ],
    },
  });

  console.log(identityCredential.configURL);
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option beinhaltet, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um die `configURL` des IdP zuzugreifen, der für die Anmeldung verwendet wurde.

Weitere Details, wie dies funktioniert, finden Sie im [API zur Verwaltung föderierter Anmeldeinformationen (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf wird den Anmeldeprozess einleiten, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [API zur Verwaltung föderierter Anmeldeinformationen](https://privacysandbox.google.com/cookies/fedcm)
