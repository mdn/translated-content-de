---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode des [`IdentityProvider`](/de/docs/Web/API/IdentityProvider) Interfaces gibt Informationen über einen Benutzer zurück, der sich angemeldet hat. Diese Informationen können verwendet werden, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen. Diese Methode muss aus einem {{Glossary("Identity_provider", "IdP")}} Origin innerhalb eines {{htmlelement("iframe")}} aufgerufen werden, damit Skripte der {{Glossary("Relying_party", "Relying Party")}} (RP) nicht auf die Daten zugreifen können. Dies muss geschehen, nachdem sich ein Benutzer bei einer RP-Seite angemeldet hat.

Dieses Muster ist bereits auf Websites üblich, die Identitätsföderation für die Anmeldung verwenden, aber `getUserInfo()` bietet eine Möglichkeit, dies ohne den Einsatz von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameter

- `config`
  - : Ein Konfigurationsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für den Identitätsanbieter, von dem Sie Benutzerinformationen abrufen möchten.
    - `clientId`
      - : Die Client-Kennung der RP, die vom IdP ausgestellt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, von denen jedes Informationen zu einem separaten Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder abgekürzten Namen) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbildes des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Verbindung zum IdP herzustellen oder wenn `getUserInfo()` vom obersten Dokument aus aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` über keine gesetzte {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verfügt, die die Nutzung von `getUserInfo()` erlaubt, oder wenn die FedCM API global durch eine im obersten Dokument gesetzte Richtlinie deaktiviert ist.

## Beschreibung

Wenn `getUserInfo()` aufgerufen wird, wird der Browser eine Anfrage an den angegebenen [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP zur Benutzerinformationen senden, nur wenn beide der folgenden Bedingungen zutreffen:

- Der User hat sich zuvor mit dem IdP über FedCM in der gleichen Browser-Instanz bei der RP angemeldet, und die Daten wurden nicht gelöscht.
- Der User ist beim IdP in der gleichen Browser-Instanz angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Website muss mit der `configURL` des IdP übereinstimmen. Darüber hinaus muss das einbettende HTML seine Nutzung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Beispiele

### Grundlegende Nutzung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die `IdentityProvider.getUserInfo()` Methode verwendet werden kann, um Informationen über einen zuvor angemeldeten Benutzer von einem bestimmten IdP zurückzugeben.

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
