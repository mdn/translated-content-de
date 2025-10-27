---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die schreibgeschützte **`isAutoSelected`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle zeigt an, ob der föderierte Anmeldefluss mithilfe von [automatischer Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.

Eine automatische Neuauthentifizierung kann erfolgen, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist für eine {{Glossary("Relying_party", "relying party")}} (RP) hilfreich zu wissen, ob eine automatische Neuauthentifizierung erfolgt ist, um Analysen/Leistungsbewertungen durchzuführen und für UX-Zwecke — eine automatische Anmeldung kann einen anderen UI-Fluss erfordern als eine nicht-automatische Anmeldung.

## Wert

Ein boolescher Wert. `true` zeigt an, dass die automatische Neuauthentifizierung verwendet wurde; `false` zeigt an, dass sie nicht verwendet wurde.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `isAutoSelected`

RPs können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit Benutzer sich über einen {{Glossary("Identity_provider", "IdP")}} beim RP anmelden, wobei die Identitätsföderation verwendet wird. Das Verhalten der automatischen Neuauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
    mediation: "optional", // this is the default
  });

  // isAutoSelected is true if auto-reauthentication occurred.
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity` Option umfasst, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf die `isAutoSelected`-Eigenschaft zuzugreifen: Diese wird `true` entsprechen, wenn eine automatische Neuauthentifizierung stattgefunden hat.

Weitere Informationen über die Funktionsweise finden Sie in [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldefluss, der im [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)
