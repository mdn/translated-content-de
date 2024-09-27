---
title: IdentityProvider
slug: Web/API/IdentityProvider
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityProvider`** Interface der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) repräsentiert einen Identity Provider (IdP) und bietet Zugriff auf zugehörige Informationen und Funktionalitäten.

{{InheritanceDiagram}}

## Statische Methoden

- [`close()`](/de/docs/Web/API/IdentityProvider/close_static) {{experimental_inline}}
  - : Stellt ein manuelles Signal für den Browser bereit, dass ein IdP-Anmeldefluss abgeschlossen ist. Dies ist beispielsweise erforderlich, um den IdP-Anmeldedialog zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP das Sammeln von Daten vom Benutzer beendet hat.
- [`getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static) {{experimental_inline}}
  - : Gibt Informationen über einen vorher angemeldeten Benutzer bei seiner Rückkehr zu einem IdP zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen.

## Beispiele

```js
// Iframe displaying a page from the https://idp.example origin
const user_info = await IdentityProvider.getUserInfo({
  configUrl: "https://idp.example/fedcm.json",
  clientId: "client1234",
});

// IdentityProvider.getUserInfo() returns an array of user information.
if (user_info.length > 0) {
  // Returning accounts should be first, so the first account received
  // is guaranteed to be a returning account
  const name = user_info[0].name;
  const given_name = user_info[0].given_name;
  const display_name = given_name ? given_name : name;
  const picture = user_info[0].picture;
  const email = user_info[0].email;

  // ...

  // Render a personalized sign-in button using the information returned above
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
