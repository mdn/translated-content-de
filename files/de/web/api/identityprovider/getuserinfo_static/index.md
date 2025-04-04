---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`getUserInfo()`** des [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Interfaces liefert Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen. Diese Methode muss innerhalb eines Identitätsproviders (IdP)-Ursprungs-{{htmlelement("iframe")}} aufgerufen werden, damit RP-Skripte nicht auf die Daten zugreifen können. Dies muss geschehen, nachdem ein Benutzer sich bei einer relying party (RP)-Seite angemeldet hat.

Dieses Muster ist bereits auf Websites üblich, die Identitätsföderation zur Anmeldung nutzen, aber `getUserInfo()` bietet eine Möglichkeit, dies ohne die Verwendung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Anwendungshinweise

Wenn `getUserInfo()` aufgerufen wird, stellt der Browser eine Anfrage an den IdP [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur dann, wenn beide der folgenden Bedingungen erfüllt sind:

- Der Benutzer hat sich zuvor mit dem IdP über FedCM auf derselben Browserinstanz beim RP angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist beim IdP auf derselben Browserinstanz angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Darüber hinaus muss die einbettende HTML-Seite die Verwendung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameter

- `config`
  - : Ein Konfigurationsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für den Identitätsprovider, von dem Sie Benutzerinformationen erhalten möchten.
    - `clientId`
      - : Die vom IdP ausgestellte Client-Kennung des RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, von denen jedes Informationen zu einem separaten Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Rufnamen (Spitz- oder abgekürzter Name) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbildes des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder wenn `getUserInfo()` aus dem obersten Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, die die Verwendung von `getUserInfo()` erlaubt, oder wenn die FedCM-API global durch eine auf dem obersten Dokument festgelegte Richtlinie deaktiviert ist.

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

  // Render the personalized sign-in button using the information above
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
