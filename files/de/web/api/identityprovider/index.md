---
title: IdentityProvider
slug: Web/API/IdentityProvider
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`IdentityProvider`**-Schnittstelle der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) repräsentiert einen Identitätsanbieter (IdP) und bietet Zugriff auf zugehörige Informationen und Funktionen.

{{InheritanceDiagram}}

## Statische Methoden

- {{domxref("IdentityProvider.close_static", "close()")}} {{experimental_inline}}
  - : Bietet ein manuelles Signal an den Browser, dass ein Anmeldevorgang beim IdP abgeschlossen ist. Dies ist beispielsweise erforderlich, um das IdP-Anmeldedialogfeld zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP die Datenerfassung vom Benutzer abgeschlossen hat.
- {{domxref("IdentityProvider.getUserInfo_static", "getUserInfo()")}} {{experimental_inline}}
  - : Gibt Informationen über einen zuvor angemeldeten Benutzer bei seiner Rückkehr zu einem IdP zurück, welche genutzt werden können, um eine personalisierte Willkommensnachricht und Schaltfläche zur Anmeldung bereitzustellen.

## Beispiele

```js
// Iframe, das eine Seite vom Ursprung https://idp.example anzeigt
const user_info = await IdentityProvider.getUserInfo({
  configUrl: "https://idp.example/fedcm.json",
  clientId: "client1234",
});

// IdentityProvider.getUserInfo() gibt ein Array von Benutzerinformationen zurück.
if (user_info.length > 0) {
  // Zurückkehrende Konten sollten zuerst sein, also ist das erste empfangene Konto
  // garantiert ein zurückkehrendes Konto
  const name = user_info[0].name;
  const given_name = user_info[0].given_name;
  const display_name = given_name ? given_name : name;
  const picture = user_info[0].picture;
  const email = user_info[0].email;

  // ...

  // Rendern Sie eine personalisierte Anmeldeschaltfläche mit den oben zurückgegebenen Informationen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
