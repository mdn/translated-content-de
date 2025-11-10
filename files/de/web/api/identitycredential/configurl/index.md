---
title: "IdentityCredential: configURL-Eigenschaft"
short-title: configURL
slug: Web/API/IdentityCredential/configURL
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`configURL`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die eine Zeichenkette zurückgibt, die die URL der Konfigurationsdatei des {{Glossary("Identity_provider", "Identity Providers")}} (IdP) angibt, der für die Anmeldung verwendet wird.

Weitere Informationen finden Sie unter [Konfigurationsdatei bereitstellen](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).

## Wert

Eine Zeichenkette.

## Beispiele

### Grundlagen der föderierten Anmeldung und Zugriff auf die `configURL`

{{Glossary("Relying_party", "Vertrauenswürdige Parteien")}} (RP) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identity Provider (IdP) bei der RP anmelden können, indem sie die Identitätsföderation nutzen. Eine Anfrage, die einen einzigen Anbieter angibt, würde folgendermaßen aussehen:

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

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf die `configURL` des IdP zuzugreifen, der für die Anmeldung verwendet wurde.

Weitere Details, wie dies funktioniert, finden Sie in der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf wird den Anmeldeablauf auslösen, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
