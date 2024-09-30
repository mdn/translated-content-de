---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`IdentityCredential`**-Schnittstelle der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert eine Benutzeridentitätsnachweis, der aus einer erfolgreichen föderierten Anmeldung resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option beinhaltet, wird mit einer `IdentityCredential`-Instanz erfüllt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der anzeigt, ob die föderierte Anmeldung mithilfe der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Beispiele

Vertrauenswürdige Parteien (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation beim RP anmelden. Eine typische Anfrage könnte so aussehen:

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

Bei Erfolg wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Aus dieser könnte man zum Beispiel den [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token)-Wert zurückgeben:

```js
console.log(identityCredential.token);
```

Schauen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den im [FedCM-Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldevorgang.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
