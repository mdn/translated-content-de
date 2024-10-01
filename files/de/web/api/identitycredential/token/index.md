---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`token`** des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt das Token zurück, das verwendet wird, um die zugehörige Anmeldung zu validieren.

Das Token enthält Informationen zur Benutzeridentität, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des Identitätsanbieters (IdP) signiert wurden.

Der verarbeitende Dienst (RP) sendet das Token an seinen Server, um das Zertifikat zu validieren, und kann im Erfolgsfall die (nun vertrauenswürdige) Identitätsinformation im Token verwenden, um den Benutzer in seinen Dienst einzuloggen (eine neue Sitzung zu starten), ihn für seinen Dienst zu registrieren, falls er ein neuer Benutzer ist, usw.

Falls der Benutzer sich nie beim IdP angemeldet hat oder abgemeldet ist, wird der zugehörige [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem Fehler abgelehnt, und der RP kann den Benutzer zur IdP-Loginseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM-API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Verwendung, und der RP muss den Anweisungen des IdP folgen (siehe beispielsweise [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass er es korrekt verwendet.

## Wert

Ein String.

## Beispiele

Verarbeitende Dienste (RPs) können `navigator.credentials.get()` mit der Option `identity` aufrufen, um eine Anfrage zu stellen, bei der sich Benutzer über einen Identitätsanbieter (IdP) über Identitätsföderation beim RP anmelden können. Eine typische Anfrage könnte so aussehen:

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

Ein erfolgreicher [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf das Token zuzugreifen, das zur Validierung der Anmeldung verwendet wird.

Sehen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um weitere Details darüber zu erfahren, wie dies funktioniert. Dieser Aufruf startet den in [FedCM sign-in flow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
