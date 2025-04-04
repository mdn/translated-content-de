---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`**-Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert eine Benutzeridentitätsberechtigung, die aus einer erfolgreichen föderierten Anmeldung resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der die Option `identity` enthält, wird mit einer `IdentityCredential`-Instanz erfüllt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob die föderierte Anmeldung unter Nutzung der [automatischen Wieder-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzereingriff) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wurde.

## Beispiele

Vertrauenswürdige Parteien (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mit Identitätsföderation bei der RP anmelden. Eine typische Anfrage sieht folgendermaßen aus:

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

Bei Erfolg wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Davon könnten Sie beispielsweise den Wert von [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) zurückgeben:

```js
console.log(identityCredential.token);
```

Schauen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
