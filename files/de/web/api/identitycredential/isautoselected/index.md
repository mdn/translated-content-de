---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}{{non-standard_header}}

Die schreibgeschützte **`isAutoSelected`** Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces zeigt an, ob der föderierte Anmeldevorgang unter Verwendung der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzereingriff) durchgeführt wurde oder nicht.

Eine automatische Reauthentifizierung kann erfolgen, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für einen vertrauenden Dritten (RP) zu wissen, ob eine automatische Reauthentifizierung erfolgt ist, um Analysen/Leistungsbewertungen durchzuführen und für UX-Zwecke — eine automatische Anmeldung könnte einen anderen UI-Fluss als eine nicht-automatische Anmeldung erfordern.

## Wert

Ein boolescher Wert. `true` zeigt an, dass eine automatische Reauthentifizierung verwendet wurde; `false` gibt an, dass dies nicht der Fall war.

## Beispiele

RPs können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass sich Benutzer über einen Identitätsanbieter (IdP) mithilfe der Identitätsföderation beim RP anmelden. Das Verhalten der automatischen Reauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Sehen Sie sich das [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang starten, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
