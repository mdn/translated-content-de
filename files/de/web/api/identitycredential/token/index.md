---
title: "IdentityCredential: token-Eigenschaft"
short-title: token
slug: Web/API/IdentityCredential/token
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`token`**-Eigenschaft der {{domxref("IdentityCredential")}}-Schnittstelle gibt das Token zurück, das zur Validierung der zugehörigen Anmeldung verwendet wird.

Das Token enthält Benutzeridentitätsinformationen, die mit dem {{glossary("digital certificate")}} des Identitätsanbieters (IdP) signiert wurden.

Der vertrauende Teilnehmer (RP) sendet das Token an seinen Server, um das Zertifikat zu validieren, und kann im Erfolgsfall die (nun vertrauenswürdigen) Identitätsinformationen im Token verwenden, um die Benutzer in ihren Dienst einzuloggen (eine neue Sitzung zu starten), wenn der Benutzer neu ist, den Benutzer für ihren Dienst zu registrieren, usw.

Wenn der Benutzer sich noch nie beim IdP angemeldet hat oder ausgeloggt ist, wird der zugehörige {{domxref("CredentialsContainer.get", "get()")}}-Aufruf mit einem Fehler abgelehnt und der RP kann den Benutzer zur Anmeldeseite des IdP leiten, um sich anzumelden oder ein Konto zu erstellen.

> [!NOTE]
> Die genaue Struktur und der Inhalt des Validierungstokens sind für die FedCM API und den Browser undurchsichtig. Der IdP legt die Syntax und Verwendung fest, und der RP muss den Anweisungen des IdP folgen (siehe z.B. [Überprüfen Sie das Google ID-Token auf Ihrer Serverseite](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)), um sicherzustellen, dass sie es korrekt verwenden.

## Wert

Ein String.

## Beispiele

Vertrauensparteien (RPs) können `navigator.credentials.get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit Benutzer sich über einen Identitätsanbieter (IdP) mit Identity-Föderation beim RP anmelden. Eine typische Anfrage würde so aussehen:

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

Ein erfolgreicher {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Aufruf, der eine `identity`-Option enthält, wird mit einer `IdentityCredential`-Instanz erfüllt, die zum Zugriff auf das Token verwendet werden kann, um die Anmeldung zu validieren.

Schauen Sie sich das [FedCM API für das Management von Föderierten Anmeldeinformationen](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf startet den in [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)
