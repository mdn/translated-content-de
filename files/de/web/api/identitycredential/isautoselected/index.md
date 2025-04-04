---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`isAutoSelected`** des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces zeigt an, ob der föderierte Anmeldevorgang mithilfe der [automatischen Re-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzerinteraktion) durchgeführt wurde oder nicht.

Automatische Re-Authentifizierung kann auftreten, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option von Wert `"optional"` oder `"silent"` ausgeführt wird. Es ist für einen vertrauenden Anbieter (RP) nützlich zu wissen, ob eine automatische Re-Authentifizierung stattgefunden hat, sowohl für Analyse-/Leistungsbewertungen als auch für UX-Zwecke — eine automatische Anmeldung kann einen anderen Benutzerfluss rechtfertigen als eine nicht-automatische Anmeldung.

## Wert

Ein Boolean-Wert. `true` zeigt an, dass die automatische Re-Authentifizierung verwendet wurde; `false` zeigt an, dass sie nicht verwendet wurde.

## Beispiele

Vertrauenswürdige Anbieter (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um Benutzer dazu aufzufordern, sich über einen Identitätsanbieter (IdP) bei dem RP mittels Identitätsföderation anzumelden. Das Verhalten der automatischen Re-Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Weitere Details dazu, wie dies funktioniert, finden Sie im [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldefluss, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
