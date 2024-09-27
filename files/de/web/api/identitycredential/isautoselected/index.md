---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`isAutoSelected`** des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces zeigt an, ob der föderierte Anmeldeprozess mit [automatischer Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.

Automatische Wiederanmeldung kann erfolgen, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist für einen Dienstanbieter (RP) nützlich zu wissen, ob eine automatische Wiederanmeldung für Analysen/Leistungsbewertung und für UX-Zwecke stattfand — eine automatische Anmeldung kann einen anderen UI-Ablauf rechtfertigen als eine nicht automatische Anmeldung.

## Wert

Ein boolescher Wert. `true` zeigt an, dass eine automatische Wiederanmeldung verwendet wurde; `false` zeigt an, dass dies nicht der Fall war.

## Beispiele

Dienstanbieter können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zur Anmeldung bei einem Identitätsanbieter (IdP) mittels Identitätsföderation zu stellen. Das Verhalten der automatischen Wiederanmeldung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Weitere Details zu diesem Prozess finden Sie in der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldeprozess.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
