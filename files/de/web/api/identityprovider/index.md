---
title: IdentityProvider
slug: Web/API/IdentityProvider
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`IdentityProvider`**-Interface der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) repräsentiert einen {{Glossary("Identity_provider", "IdP")}} und bietet Zugriff auf zugehörige Informationen und Funktionen.

{{InheritanceDiagram}}

## Statische Methoden

- [`close()`](/de/docs/Web/API/IdentityProvider/close_static) {{experimental_inline}}
  - : Bietet ein manuelles Signal an den Browser, dass ein Anmeldevorgang eines IdP abgeschlossen ist. Dies ist notwendig, um beispielsweise den Anmeldedialog des IdP zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP die Datenerfassung vom Benutzer beendet hat.
- [`getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static) {{experimental_inline}}
  - : Liefert Informationen über einen zuvor angemeldeten Benutzer bei seiner Rückkehr zu einem IdP, die genutzt werden können, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen.

## Beispiele

### Grundlegende Nutzung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die [`getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)-Methode verwendet werden kann, um Informationen über einen zuvor angemeldeten Benutzer von einem spezifischen IdP zurückzugeben.

```js
// Iframe displaying a page from the https://idp.example origin
const userInfo = await IdentityProvider.getUserInfo({
  configURL: "https://idp.example/fedcm.json",
  clientId: "client1234",
});

// IdentityProvider.getUserInfo() returns an array of user information.
if (userInfo.length > 0) {
  // Returning accounts should be first, so the first account received
  // is guaranteed to be a returning account
  const name = userInfo[0].name;
  const givenName = userInfo[0].given_name;
  const displayName = givenName || name;
  const picture = userInfo[0].picture;
  const email = userInfo[0].email;

  // …

  // Render a personalized sign-in button using the information returned above
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
