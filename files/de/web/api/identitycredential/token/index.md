---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`token`**-Eigenschaft der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle gibt das Token zurück, das zur Validierung des zugehörigen Logins verwendet wird.

Das Token enthält Benutzeridentitätsinformationen, die mit dem [digitalen Zertifikat](/de/docs/Glossary/digital_certificate) des Identitätsanbieters (IdP) signiert wurden.

Der vertrauenswürdige Dritte (RP) sendet das Token an seinen Server, um das Zertifikat zu validieren. Bei Erfolg kann er die (nunmehr verifizierten) Identitätsinformationen im Token verwenden, um den Benutzer bei seinem Dienst anzumelden (eine neue Sitzung zu starten), ihn bei seinem Dienst zu registrieren, wenn es sich um einen neuen Benutzer handelt, usw.

Falls der Benutzer noch nie bei dem IdP angemeldet war oder ausgeloggt ist, wird der zugehörige [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem Fehler abgelehnt, und der RP kann den Benutzer zur Anmeldeseite des IdP weiterleiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP entscheidet über die Syntax und Verwendung des Tokens, und der RP muss die vom IdP bereitgestellten Anweisungen befolgen (siehe beispielsweise [Überprüfen Sie das Google-ID-Token auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass es korrekt verwendet wird.

## Wert

Ein String.

## Beispiele

Vertrauenswürdige Dritte (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit Benutzer sich über einen Identitätsanbieter (IdP) mithilfe von Identitätsfederation beim RP anmelden. Eine typische Anfrage würde folgendermaßen aussehen:

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

Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die verwendet werden kann, um auf das Token zuzugreifen, das zur Validierung des Logins verwendet wird.

Weitere Informationen darüber, wie dies funktioniert, finden Sie in der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API). Dieser Aufruf leitet den in [FedCM Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss ein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
