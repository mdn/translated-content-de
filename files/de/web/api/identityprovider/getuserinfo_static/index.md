---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider) Schnittstelle liefert Informationen über einen Benutzer, der sich angemeldet hat, die genutzt werden können, um eine personalisierte Willkommensnachricht und eine Anmelde-Schaltfläche bereitzustellen. Diese Methode muss aus einem identitätsanbieter- (IdP)-Herkunft {{htmlelement("iframe")}} aufgerufen werden, sodass RP-Skripte nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem sich ein Benutzer bei einer vertrauenden Stelle (RP) angemeldet hat.

Dieses Muster ist bereits auf Websites gebräuchlich, die Identitätsföderation zur Anmeldung verwenden, aber `getUserInfo()` bietet einen Weg, dies ohne die Abhängigkeit von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Nutzungshinweise

Wenn `getUserInfo()` aufgerufen wird, stellt der Browser nur dann eine Anfrage an den IdP [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint), um Benutzerinformationen zu erhalten, wenn beide der folgenden Bedingungen erfüllt sind:

- Der Benutzer hat sich zuvor mit FedCM auf derselben Browserinstanz mit dem IdP beim RP angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist mit dem IdP auf derselben Browserinstanz angemeldet.

`getUserInfo()` muss aus einem eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit dem `configURL` des IdP übereinstimmen. Darüber hinaus muss die einbettende HTML ausdrücklich seine Verwendung über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) erlauben:

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
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für den Identitätsanbieter, von dem Sie Benutzerinformationen erhalten möchten.
    - `clientId`
      - : Die vom IdP ausgestellte Client-Kennung des RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Array von Objekten erfüllt wird, wobei jedes Objekt Informationen über ein separates Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder Abkürzungsname) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbildes des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder `getUserInfo()` vom Top-Level-Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesetzt hat, um die Verwendung von `getUserInfo()` zu erlauben, oder wenn die FedCM API global durch eine im Top-Level-Dokument gesetzte Richtlinie deaktiviert ist.

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

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
