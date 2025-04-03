---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`**-Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert ein Benutzeridentitätsnachweis, der aus einer erfolgreichen föderierten Anmeldung resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, erfüllt sich mit einer `IdentityCredential`-Instanz.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorgänger, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung mithilfe der [automatischen Neu-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Beispiele

Vertrauensparteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage für Benutzer zu stellen, sich über einen Identitätsanbieter (IdP) mittels Identitätsföderation beim RP anzumelden. Eine typische Anfrage könnte folgendermaßen aussehen:

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

Bei Erfolg wird dieser Aufruf sich mit einer `IdentityCredential`-Instanz erfüllen. Daraus könnten Sie z.B. den Wert von [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) zurückgeben:

```js
console.log(identityCredential.token);
```

Schauen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um weitere Details darüber zu erfahren, wie dies funktioniert. Dieser Aufruf startet den Anmeldevorgang, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
