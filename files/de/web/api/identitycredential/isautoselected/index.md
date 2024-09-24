---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`isAutoSelected`** Nur-Lese-Eigenschaft des {{domxref("IdentityCredential")}} Interfaces zeigt an, ob der föderierte Anmeldeablauf mithilfe der [automatischen Re-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.

Eine automatische Re-Authentifizierung kann stattfinden, wenn ein {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` gemacht wird. Es ist nützlich für einen vertrauenden Teilnehmer (RP) zu wissen, ob eine automatische Re-Authentifizierung stattfand, um Analysen/Leistungsbewertungen und für UX-Zwecke durchzuführen — eine automatische Anmeldung kann einen anderen UI-Ablauf erfordern als eine nicht-automatische Anmeldung.

## Wert

Ein boolescher Wert. `true` zeigt an, dass eine automatische Re-Authentifizierung verwendet wurde; `false` zeigt an, dass dies nicht der Fall war.

## Beispiele

RPs können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mittels Identitätsföderation beim RP anmelden können. Das Verhalten der automatischen Re-Authentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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
    mediation: "optional", // dies ist der Standard
  });

  // isAutoSelected ist true, wenn eine automatische Re-Authentifizierung stattgefunden hat.
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

Schauen Sie sich das [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um mehr darüber zu erfahren, wie dies funktioniert. Dieser Aufruf wird den in [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldeablauf einleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
