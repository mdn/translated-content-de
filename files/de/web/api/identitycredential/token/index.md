---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`token`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle gibt das Token zurück, das zur Validierung des zugehörigen Anmeldevorgangs verwendet wird.

Das Token enthält Benutzeridentitätsinformationen, die mit dem {{Glossary("digital_certificate", "digitalen Zertifikat")}} des Identity Providers (IdP) signiert wurden.

Die vertrauende Partei (RP) sendet das Token an ihren Server, um das Zertifikat zu validieren, und im Erfolgsfall kann sie die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Benutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), ihn in ihren Dienst einzutragen, falls er ein neuer Benutzer ist, usw.

Wenn der Benutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, lehnt der zugehörige [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem Fehler ab und die RP kann den Benutzer zur IdP-Anmeldeseite leiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM-API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Nutzung, und die RP muss den Anweisungen des IdP folgen (siehe z.B. [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie dieses korrekt verwenden.

## Wert

Ein String.

## Beispiele

Vertrauensparteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identity Provider (IdP) mit Identitätsföderation beim RP anmelden. Eine typische Anfrage würde folgendermaßen aussehen:

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

Sehen Sie sich die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) an, um mehr darüber zu erfahren, wie dies funktioniert. Dieser Aufruf wird den in [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss starten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)
