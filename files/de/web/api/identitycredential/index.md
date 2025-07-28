---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`** Interface der [Federierten Credential-Management-API (FedCM)](/de/docs/Web/API/FedCM_API) stellt ein Benutzeridentitäts-Credential dar, das aus einem erfolgreichen föderierten Anmeldevorgang stammt.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity` Option inkludiert, wird mit einer `IdentityCredential` Instanz erfüllt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorgänger, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.configURL`](/de/docs/Web/API/IdentityCredential/configURL) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des für die Anmeldung verwendeten {{Glossary("Identity_provider", "IdP")}} angibt.
- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung mit [automatischer Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wurde.

## Statische Methoden

- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) {{experimental_inline}}
  - : Trennt das für die Erlangung des Credentials verwendete föderierte Anmeldekonto.

## Beispiele

### Grundlegende föderierte Anmeldung

{{Glossary("Relying_party", "Vertrauensparteien")}} (RPs) können `navigator.credentials.get()` mit der `identity` Option aufrufen, um eine Anfrage zu stellen, dass Benutzer sich über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation beim RP anmelden. Eine typische Anfrage könnte so aussehen:

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

Wenn erfolgreich, wird dieser Aufruf mit einer `IdentityCredential` Instanz erfüllt. Aus dieser könnten Sie beispielsweise den [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) Wert zurückgeben:

```js
console.log(identityCredential.token);
```

Lesen Sie im [Federierten Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) nach, um mehr Details darüber zu erfahren, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang einleiten, der im [FedCM Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
