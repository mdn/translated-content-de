---
title: IdentityCredential
slug: Web/API/IdentityCredential
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`IdentityCredential`**-Schnittstelle der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) repräsentiert einen Identitätsnachweis eines Benutzers, der aus einer erfolgreichen föderierten Anmeldung hervorgeht.

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `identity` liefert eine `IdentityCredential`-Instanz.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`Credential`](/de/docs/Web/API/Credential)._

- [`IdentityCredential.configURL`](/de/docs/Web/API/IdentityCredential/configURL) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge mit der URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des für die Anmeldung verwendeten {{Glossary("Identity_provider", "IdP")}}.
- [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die föderierte Anmeldung mittels [automatischer Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Mitwirkung des Benutzers) durchgeführt wurde.
- [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt das Token zurück, mit dem die zugehörige Anmeldung validiert wird.

## Statische Methoden

- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) {{experimental_inline}}
  - : Trennt die Verbindung zu dem für den Erhalt des Identitätsnachweises verwendeten Konto für die föderierte Anmeldung.

## Beispiele

### Grundlegende föderierte Anmeldung

{{Glossary("Relying_party", "Relying Parties")}} (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um Benutzer zur Anmeldung bei der RP über einen Identitätsanbieter (IdP) mittels Identitätsföderation aufzufordern. Eine typische Anfrage sieht so aus:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
        },
      ],
    },
  });
}
```

Bei Erfolg liefert dieser Aufruf eine `IdentityCredential`-Instanz. Daraus können Sie beispielsweise den Wert von [`IdentityCredential.token`](/de/docs/Web/API/IdentityCredential/token) zurückgeben:

```js
console.log(identityCredential.token);
```

Weitere Informationen zur Funktionsweise finden Sie unter [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den unter [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldevorgang.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
