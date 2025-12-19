---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: 798f5efbce403e2366323afea025e5729b902e46
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`** Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert ein Benutzeridentitätsnachweis, der aus einem erfolgreichen föderierten Anmeldeprozess hervorgeht.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.configURL`](/de/docs/Web/API/IdentityCredential/configURL) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des genutzten {{Glossary("Identity_provider", "IdP")}} für die Anmeldung spezifiziert.
- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob die föderierte Anmeldung mittels [automatischer Wiederauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Nutzervermittlung) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Statische Methoden

- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) {{experimental_inline}}
  - : Trennt das genutzte Konto der föderierten Anmeldung, um das Berechtigungsnachweis zu erhalten.

## Beispiele

### Grundlegende föderierte Anmeldung

{{Glossary("Relying_party", "Vertrauende Parteien")}} (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mit Identitäts-Föderation bei der RP anmelden. Eine typische Anfrage sieht folgendermaßen aus:

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
}
```

Bei Erfolg wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Daraus könnte man zum Beispiel den Wert von [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) zurückgeben:

```js
console.log(identityCredential.token);
```

Sehen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details darüber an, wie dies funktioniert. Dieser Aufruf startet den Anmeldeablauf, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
