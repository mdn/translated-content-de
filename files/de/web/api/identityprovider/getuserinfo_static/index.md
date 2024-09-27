---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode des [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Interfaces liefert Informationen über einen angemeldeten Benutzer, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldeschaltfläche bereitzustellen. Diese Methode muss innerhalb eines Identitätsanbieter (IdP)-Ursprungs-{{htmlelement("iframe")}} aufgerufen werden, sodass RP-Skripte nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem ein Benutzer sich bei einer Relying Party (RP)-Seite angemeldet hat.

Dieses Muster ist bereits auf Seiten üblich, die Identitätsföderation für das Anmelden verwenden. `getUserInfo()` bietet jedoch eine Möglichkeit dies zu erreichen, ohne auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) zurückzugreifen.

## Nutzungshinweise

Wenn `getUserInfo()` aufgerufen wird, wird der Browser eine Anfrage an den IdP [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für Benutzerinformationen nur dann stellen, wenn beide der folgenden Bedingungen zutreffen:

- Der Benutzer hat sich zuvor über FedCM im selben Browser-Instanz bei der RP mit dem IdP angemeldet, und die Daten wurden nicht gelöscht.
- Der Benutzer ist im selben Browser-Instanz beim IdP angemeldet.

`getUserInfo()` muss von innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Zusätzlich muss die einbettende HTML den Gebrauch ausdrücklich über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) erlauben:

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
      - : Die Clientkennung der RP, die vom IdP ausgestellt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die jeweils Informationen über ein separates Benutzerkonto enthalten. Jedes Objekt enthält folgende Eigenschaften:

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
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder wenn `getUserInfo()` aus dem Top-Level-Dokument heraus aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) zum Erlauben der Nutzung von `getUserInfo()` gesetzt hat oder wenn die FedCM-API global durch eine auf dem Top-Level-Dokument gesetzte Richtlinie deaktiviert ist.

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
