---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: bd24c97c059464e426fc24461cf4ceb4b2cd0809
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`token`**-Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

Die FedCM-API definiert nicht die Struktur des `token`-Objekts oder was der RP damit tun soll: Dies hängt vollständig vom föderierten Identitätsprotokoll ab, das der IdP implementiert.

Wenn ein RP sich entscheidet, mit einem bestimmten IdP zu arbeiten, wird dieser Anweisungen bereitstellen, wie der zurückgegebene `token`-Wert interpretiert und verwendet werden soll.

## Wert

Beliebiger Typ.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `token`

Reliance Parties (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identitätsanbieter (IdP) bei der RP anmelden, und dabei Identitätsföderation verwenden. Eine typische Anfrage sieht folgendermaßen aus:

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

  console.log(identityCredential.token);
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf das `token` zuzugreifen, das zur Validierung der Anmeldung verwendet wird.

Sehen Sie sich [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um weitere Details zu erhalten, wie dies funktioniert. Dieser Aufruf wird den Anmeldeablauf starten, der in [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
