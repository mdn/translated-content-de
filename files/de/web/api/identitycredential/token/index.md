---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`token`**-Eigenschaft des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

Das Token enthält Benutzeridentitätsinformationen, die mit dem {{Glossary("Identity_provider", "IdP")}}-{{Glossary("digital_certificate", "Digitale Zertifikat")}} signiert wurden.

Die {{Glossary("Relying_party", "relying party")}} (RP) sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Nutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), den Nutzer bei ihrem Dienst anzumelden, wenn er ein neuer Nutzer ist, usw.

Falls der Nutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, lehnt der zugehörige [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem Fehler ab und die RP kann den Nutzer auf die Anmeldeseite des IdP weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API sowie den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Nutzung, und die RP muss den vom IdP bereitgestellten Anweisungen folgen (siehe zum Beispiel [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es korrekt verwendet.

## Wert

Ein String.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf `token`

Relying Parties (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, damit sich Nutzer über einen Identitätsanbieter (IdP) via Identitätsföderation bei der RP anmelden. Eine typische Anfrage würde so aussehen:

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

  console.log(identityCredential.token);
}
```

Ein erfolgreicher [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der eine `identity`-Option enthält, erfüllt sich mit einer `IdentityCredential`-Instanz, die verwendet werden kann, um auf das `token` zuzugreifen, das zur Validierung der Anmeldung verwendet wird.

Weitere Details zu diesem Vorgang finden Sie im [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den in [FedCM sign-in flow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
