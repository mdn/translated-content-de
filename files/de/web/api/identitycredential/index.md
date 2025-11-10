---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`** Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert ein Benutzeridentitätsnachweis, der aus einem erfolgreichen föderierten Sign-In resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option einschließt, wird mit einer `IdentityCredential`-Instanz erfüllt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.configURL`](/de/docs/Web/API/IdentityCredential/configURL) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des genutzten {{Glossary("Identity_provider", "IdP")}} für das Sign-In spezifiziert.
- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob das föderierte Sign-In mithilfe von [Auto-reauthentication](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung des zugehörigen Sign-Ins verwendet wird.

## Statische Methoden

- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) {{experimental_inline}}
  - : Trennt das verwendete föderierte Sign-In-Konto, um das Credential zu erhalten.

## Beispiele

### Einfaches föderiertes Sign-In

{{Glossary("Relying_party", "Relying parties")}} (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identity Provider (IdP) bei der RP anmelden, indem Identitätsföderation verwendet wird. Ein typischer Aufruf sieht folgendermaßen aus:

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

Bei Erfolg wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Daraus könnten Sie zum Beispiel den [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token)-Wert zurückgeben:

```js
console.log(identityCredential.token);
```

Werfen Sie einen Blick auf die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details, wie dies funktioniert. Dieser Aufruf startet den Sign-In-Fluss, der im [FedCM Sign-In-Fluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
