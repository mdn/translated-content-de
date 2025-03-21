---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: 28da811a08240c53da000bfdd8319338290e3f0b
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`isAutoSelected`** der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle gibt an, ob der föderierte Anmeldevorgang unter Verwendung der [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzereinwirkung) durchgeführt wurde oder nicht.

Eine automatische Neuauthentifizierung kann auftreten, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist für eine vertrauende Partei (RP) nützlich zu wissen, ob eine automatische Neuauthentifizierung für Analysen/Leistungsbewertung und für UX-Zwecke stattfand — eine automatische Anmeldung kann einen anderen UI-Fluss rechtfertigen als eine nicht-automatische Anmeldung.

## Wert

Ein boolescher Wert. `true` gibt an, dass die automatische Neuauthentifizierung verwendet wurde; `false` gibt an, dass sie nicht verwendet wurde.

## Beispiele

Vertrauende Parteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identitätsanbieter (IdP), unter Verwendung der Identitätsföderation, beim RP anmelden. Das Verhalten der automatischen Neuauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im Aufruf von `get()` gesteuert:

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

Schauen Sie sich das [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang starten, der im [FedCM-Anmeldeprozess](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
