---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der {{domxref("IdentityProvider")}} Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen. Diese Methode muss innerhalb eines Identitätsanbieter-Ursprungs{{htmlelement("iframe")}} aufgerufen werden, damit RP-Skripte nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem sich ein Benutzer bei einer relying party (RP) Website angemeldet hat.

Dieses Muster ist bereits auf Websites üblich, die Identitätsföderation für die Anmeldung nutzen, aber `getUserInfo()` bietet eine Möglichkeit, dies ohne die Nutzung von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) zu erreichen.

## Verwendungshinweise

Wenn `getUserInfo()` aufgerufen wird, wird der Browser eine Anfrage an den IdP [Accounts-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur stellen, wenn beide der unten stehenden Bedingungen zutreffen:

- Der Benutzer hat sich zuvor über FedCM mit dem IdP bei der RP auf demselben Browser-Exemplar angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist beim IdP auf demselben Browser-Exemplar angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Zusätzlich muss das einbettende HTML seine Nutzung ausdrücklich über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) erlauben:

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
  - : Ein Konfigurationsobjekt, das folgende Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für den Identitätsanbieter, von dem Sie Benutzerinformationen erhalten möchten.
    - `clientId`
      - : Die Client-ID der RP, die vom IdP ausgegeben wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, von denen jedes Informationen darstellt, die ein separates Benutzerkonto repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder abgekürzten Namen) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbilds des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder wenn `getUserInfo()` aus dem obersten Dokument aufgerufen wird.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) gesetzt hat, um die Nutzung von `getUserInfo()` zu erlauben, oder wenn die FedCM-API global durch eine auf das oberste Dokument gesetzte Richtlinie deaktiviert ist.

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
