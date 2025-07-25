---
title: "IdentityCredential: isAutoSelected-Eigenschaft"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die schreibgeschützte **`isAutoSelected`**-Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt an, ob der föderierte Anmeldevorgang unter Verwendung der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (d.h. ohne Benutzermediation) durchgeführt wurde oder nicht.

Eine automatische Reauthentifizierung kann auftreten, wenn ein Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Wert der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für eine {{Glossary("Relying_party", "verantwortliche Partei")}} (RP) zu wissen, ob eine automatische Reauthentifizierung für Analysen/Leistungsbewertungen und für UX-Zwecke stattgefunden hat — eine automatische Anmeldung kann einen anderen UI-Ablauf als eine nicht-automatische Anmeldung rechtfertigen.

## Wert

Ein boolescher Wert. `true` zeigt an, dass eine automatische Reauthentifizierung verwendet wurde; `false` zeigt an, dass dies nicht der Fall war.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `isAutoSelected`

RPs können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über eine {{Glossary("Identity_provider", "IdP")}} bei der RP anmelden können, indem sie die Identitätsföderation verwenden. Das Verhalten der automatischen Reauthentifizierung wird durch die [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option im `get()`-Aufruf gesteuert:

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

Ein erfolgreicher [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der eine `identity`-Option enthält, erfüllt sich mit einer `IdentityCredential`-Instanz, die verwendet werden kann, um auf die `isAutoSelected`-Eigenschaft zuzugreifen: Diese ist gleich `true`, wenn eine automatische Reauthentifizierung stattgefunden hat.

Sehen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den Anmeldeprozess, der im [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
