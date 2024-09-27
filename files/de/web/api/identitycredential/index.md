---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`**-Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert ein Benutzeridentitätsnachweis, das aus einem erfolgreichen föderierten Anmeldeverfahren resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, führt zur Erfüllung mit einer `IdentityCredential`-Instanz.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung mittels [automatischer Wiederverbindung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) erfolgt ist oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Beispiele

Anerkennungsparteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage an Benutzer zu stellen, sich über einen Identitätsanbieter (IdP) mittels Identitätsföderation beim RP anzumelden. Eine typische Anfrage würde so aussehen:

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

Wenn erfolgreich, wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Aus dieser könnten Sie beispielsweise den [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token)-Wert zurückgeben:

```js
console.log(identityCredential.token);
```

Schauen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um mehr Details darüber zu erfahren, wie dies funktioniert. Dieser Aufruf startet den Anmeldeprozess, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
