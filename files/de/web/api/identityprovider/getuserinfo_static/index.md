---
title: "IdentityProvider: `getUserInfo()` statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider) Schnittstelle liefert Informationen über einen Benutzer, der angemeldet ist, welche verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldebutton bereitzustellen. Diese Methode muss aus einem {{Glossary("Identity_provider", "IdP")}} Ursprung {{htmlelement("iframe")}} aufgerufen werden, sodass {{Glossary("Relying_party", "relying party")}} (RP) Skripte nicht auf die Daten zugreifen können. Dies muss geschehen, nachdem ein Benutzer sich bei einer RP-Site angemeldet hat.

Dieses Muster ist bereits auf Websites, die Identitätsföderation für die Anmeldung nutzen, üblich, aber `getUserInfo()` bietet einen Weg, dies ohne die Abhängigkeit von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameter

- `config`
  - : Ein Konfigurationsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des Identitätsanbieters, von dem Sie Benutzerinformationen erhalten möchten.
    - `clientId`
      - : Die von der IdP ausgegebene Client-Kennung der RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, wobei jedes Objekt Informationen über ein separates Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder abgekürzten Namen) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbilds des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Verbindung zur IdP herzustellen oder wenn `getUserInfo()` aus dem obersten Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Verwendung von `getUserInfo()` zu erlauben, oder wenn die FedCM-API global durch eine Richtlinie im obersten Dokument deaktiviert ist.

## Beschreibung

Wenn `getUserInfo()` aufgerufen wird, sendet der Browser eine Anfrage an den angegebenen IdP [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur unter den folgenden Bedingungen:

- Der Benutzer hat sich zuvor mit der FedCM beim RP mit dem IdP im gleichen Browser angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist im gleichen Browser beim IdP angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Darüber hinaus muss die eingebettete HTML die Nutzung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Beispiele

### Grundlegende Verwendung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die `IdentityProvider.getUserInfo()`-Methode genutzt werden kann, um Informationen über einen bereits angemeldeten Benutzer von einem bestimmten IdP zurückzugeben.

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

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
