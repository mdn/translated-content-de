---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`token`**-Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

Die FedCM-API definiert nicht die Struktur des `token`-Objekts oder was der RP damit tun sollte: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Wenn ein RP sich entscheidet, mit einem bestimmten IdP zu arbeiten, wird dieser Anweisungen geben, wie der zurückgegebene `token`-Wert interpretiert und verwendet werden soll.

## Wert

Jeder Typ.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `token`

Relying Parties (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit Benutzer sich über einen Identitätsanbieter (IdP) beim RP anmelden können, indem Identity Federation genutzt wird. Eine typische Anfrage würde folgendermaßen aussehen:

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

  console.log(identityCredential.token);
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option beinhaltet, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf das `token` zuzugreifen, das zur Validierung der Anmeldung genutzt wurde.

Schauen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang starten, der im [FedCM-Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
