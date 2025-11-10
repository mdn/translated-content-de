---
title: "IdentityCredential: Token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`token`** des [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Interfaces gibt das Token zurück, das zur Überprüfung der zugehörigen Anmeldung verwendet wird.

Das Token enthält Nutzeridentitätsinformationen, die mit dem {{Glossary("Identity_provider", "IdP")}}-{{Glossary("digital_certificate", "digitalen Zertifikat")}} signiert wurden.

Die {{Glossary("Relying_party", "Vertrauenswürdige Partei")}} (RP) sendet das Token an ihren Server, um das Zertifikat zu validieren. Bei Erfolg kann sie die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um den Nutzer in ihren Dienst anzumelden (eine neue Sitzung zu starten), den Nutzer bei ihrem Dienst zu registrieren, wenn er ein neuer Nutzer ist, usw.

Wenn der Nutzer sich noch nie beim IdP angemeldet hat oder abgemeldet ist, lehnt der zugehörige [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem Fehler ab, und die RP kann den Nutzer zur IdP-Anmeldeseite weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des validierenden Tokens sind für die FedCM API und für den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Nutzung, und die RP muss die vom IdP bereitgestellten Anweisungen befolgen (siehe [Google ID-Token auf Ihrer Serverseite verifizieren](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) zum Beispiel), um sicherzustellen, dass sie das Token korrekt verwenden.

## Wert

Ein String.

## Beispiele

### Grundlegende föderierte Anmeldung und Zugriff auf das `token`

Vertrauenswürdige Parteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Nutzer über einen Identitätsanbieter (IdP) bei der RP anmelden, indem sie Identitätsföderation nutzen. Eine typische Anfrage könnte folgendermaßen aussehen:

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

Ein erfolgreicher [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf das `token` zuzugreifen, das zur Validierung der Anmeldung verwendet wird.

Schauen Sie sich den [Föderierten Anmeldedatenverwaltungs-API (FedCM)](/de/docs/Web/API/FedCM_API)-Leitfaden für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Föderierte Anmeldedatenverwaltungs-API](https://developer.chrome.com/docs/identity/fedcm/overview)
