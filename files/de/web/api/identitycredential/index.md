---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityCredential`** Interface der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert ein Benutzeridentitätsnachweis, das aus einer erfolgreichen föderierten Anmeldung resultiert.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option beinhaltet, wird mit einer Instanz von `IdentityCredential` erfüllt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorgänger, [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.configURL`](/de/docs/Web/API/IdentityCredential/configURL) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des {{Glossary("Identity_provider", "IdP")}} angibt, der für die Anmeldung verwendet wird.
- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung unter Verwendung von [automatischer Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzerbeteiligung) durchgeführt wurde oder nicht.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{experimental_inline}}
  - : Gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

## Statische Methoden

- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
  - : Trennt das föderierte Anmeldekonto, das zur Erlangung des Nachweises verwendet wurde.

## Beispiele

### Grundlegende föderierte Anmeldung

{{Glossary("Relying_party", "Vertrauenswürdige Parteien")}} (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) bei der RP anmelden, unter Verwendung von Identitätsföderation. Eine typische Anfrage sieht folgendermaßen aus:

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

Bei Erfolg wird dieser Aufruf mit einer `IdentityCredential`-Instanz erfüllt. Aus dieser könnte man zum Beispiel den [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) Wert zurückgeben:

```js
console.log(identityCredential.token);
```

Lesen Sie mehr über die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API), um mehr darüber zu erfahren, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, der in [FedCM sign-in flow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
