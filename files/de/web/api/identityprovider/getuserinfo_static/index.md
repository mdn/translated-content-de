---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine persönliche Willkommensnachricht und Anmelde-Schaltfläche bereitzustellen. Diese Methode muss innerhalb eines Ursprungs-Iframe des Identitätsanbieters (IdP) aufgerufen werden, damit RP-Skripte nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem sich ein Benutzer bei einer drittparteiabhängigen (RP)-Site angemeldet hat.

Dieses Muster ist bereits auf Websites üblich, die Identitätsföderation für die Anmeldung nutzen, aber `getUserInfo()` bietet eine Möglichkeit, dies zu erreichen, ohne auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) angewiesen zu sein.

## Nutzungshinweise

Wenn `getUserInfo()` aufgerufen wird, sendet der Browser eine Anfrage an den IdP [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur dann, wenn beide der folgenden Bedingungen erfüllt sind:

- Der Benutzer hat sich zuvor mit dem IdP über FedCM in derselben Browserinstanz bei der RP angemeldet, und die Daten wurden nicht gelöscht.
- Der Benutzer ist mit derselben Browserinstanz beim IdP angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Site muss mit der `configURL` des IdP übereinstimmen. Zusätzlich muss das einbettende HTML seine Nutzung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

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
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) des Identitätsanbieters, von dem Sie Benutzerinformationen erhalten möchten.
    - `clientId`
      - : Der vom IdP ausgegebene Client-Identifikator der RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, wobei jedes Objekt Informationen über ein separates Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder abgekürzter Name) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbilds des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die bereitgestellte `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder `getUserInfo()` vom obersten Dokument aus aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, die die Nutzung von `getUserInfo()` erlaubt oder wenn die FedCM API global durch eine auf das oberste Dokument festgelegte Richtlinie deaktiviert ist.

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
