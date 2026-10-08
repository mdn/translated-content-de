---
title: "IdentityProvider: statische Methode getUserInfo()"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`getUserInfo()`** der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück. Diese können verwendet werden, um eine personalisierte Willkommensnachricht und eine Anmeldeschaltfläche anzuzeigen. Die Methode muss innerhalb eines vom {{Glossary("Identity_provider", "IdP")}} stammenden {{htmlelement("iframe")}} aufgerufen werden, damit Skripte der {{Glossary("Relying_party", "Relying Party")}} (RP) nicht auf die Daten zugreifen können. Der Aufruf muss erfolgen, nachdem sich der Benutzer bei einer RP-Website angemeldet hat.

Dieses Muster ist auf Websites, die Identity Federation für die Anmeldung verwenden, bereits verbreitet. `getUserInfo()` ermöglicht es jedoch, es ohne [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) umzusetzen.

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameter

- `config`
  - : Ein Konfigurationsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des Identitätsanbieters, von dem Sie Benutzerinformationen abrufen möchten.
    - `clientId`
      - : Die vom IdP vergebene Client-Kennung der RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird. Jedes Objekt enthält Informationen zu einem eigenen Benutzerkonto und hat die folgenden Eigenschaften:

- `email`
  - : Ein String mit der E-Mail-Adresse des Benutzers.
- `name`
  - : Ein String mit dem vollständigen Namen des Benutzers.
- `givenName`
  - : Ein String mit dem Vornamen oder einer Kurzform des Namens des Benutzers.
- `picture`
  - : Ein String mit der URL des Profilbilds des Benutzers.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder der Origin des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder `getUserInfo()` aus dem Top-Level-Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}}-[Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) hat, die die Verwendung von `getUserInfo()` erlaubt, oder wenn die FedCM API durch eine Richtlinie des Top-Level-Dokuments global deaktiviert ist.

## Beschreibung

Wenn `getUserInfo()` aufgerufen wird, sendet der Browser nur dann eine Anfrage an den [Endpunkt für die Kontenliste](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des angegebenen IdP, um Benutzerinformationen abzurufen, wenn beide folgenden Bedingungen erfüllt sind:

- Der Benutzer hat sich zuvor über FedCM beim IdP auf derselben Browserinstanz bei der RP angemeldet, und die Daten wurden nicht gelöscht.
- Der Benutzer ist auf derselben Browserinstanz beim IdP angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Origin der eingebetteten Website muss mit der `configURL` des IdP übereinstimmen. Außerdem muss der einbettende HTML-Code die Verwendung über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}}-[Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Beispiele

### Grundlegende Verwendung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die Methode `IdentityProvider.getUserInfo()` verwendet werden kann, um Informationen über einen Benutzer abzurufen, der sich zuvor über einen bestimmten IdP angemeldet hat.

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

  // Render the personalized sign-in button using the information above
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
