---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die schreibgeschützte **`isAutoSelected`**-Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt an, ob der föderierte Anmeldeprozess unter Verwendung der [automatischen Wiederverifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzereingriff) durchgeführt wurde oder nicht.

Eine automatische Wiederverifizierung kann erfolgen, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` erfolgt. Es ist nützlich für einen Vertrauenswürdigen Dritten (RP) zu wissen, ob eine automatische Wiederverifizierung für Analyse-/Leistungsbewertungen und für UX-Zwecke stattgefunden hat — eine automatische Anmeldung könnte einen anderen UI-Fluss rechtfertigen als eine nicht automatische Anmeldung.

## Wert

Ein boolescher Wert. `true` bedeutet, dass die automatische Wiederverifizierung verwendet wurde; `false` bedeutet, dass sie nicht verwendet wurde.

## Beispiele

Vertrauenswürdige Dritte (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage an Benutzer zu stellen, sich über einen Identitätsanbieter (IdP) mittels Identitätsföderation beim RP anzumelden. Das Verhalten der automatischen Wiederverifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Weitere Details finden Sie im [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldeprozess, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
