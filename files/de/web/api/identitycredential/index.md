---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`IdentityCredential`**-Schnittstelle der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert eine Benutzeridentitätsanmeldung, die aus einem erfolgreichen föderierten Anmeldevorgang resultiert.

Ein erfolgreicher Aufruf von {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}, der eine `identity`-Option einschließt, wird mit einer Instanz von `IdentityCredential` erfüllt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, {{domxref("Credential")}}._

- {{domxref("IdentityCredential.isAutoSelected")}} {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung mithilfe der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d. h. ohne Benutzermediation) durchgeführt wurde oder nicht.
- {{domxref("IdentityCredential.token")}} {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Beispiele

Dritte Parteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit Benutzer sich bei der RP über einen Identitätsanbieter (IdP) mittels Identitätsföderation anmelden. Eine typische Anfrage sieht so aus:

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
}
```

Bei Erfolg wird dieser Aufruf mit einer Instanz von `IdentityCredential` erfüllt. Aus dieser könnten Sie zum Beispiel den Wert von {{domxref("IdentityCredential.token")}} zurückgeben:

```js
console.log(identityCredential.token);
```

Weitere Informationen über die Funktionsweise finden Sie in der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldeprozess.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
