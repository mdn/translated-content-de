---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider) Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmelde-Schaltfläche zu bieten. Diese Methode muss aus einem {{Glossary("Identity_provider", "IdP")}} Ursprungs-{{htmlelement("iframe")}} aufgerufen werden, damit {{Glossary("Relying_party", "relying party")}} (RP) Skripte nicht auf die Daten zugreifen können. Dies muss geschehen, nachdem sich ein Benutzer bei einer RP-Seite angemeldet hat.

Dieses Muster ist bereits auf Webseiten verbreitet, die Identitätsföderation zur Anmeldung verwenden, aber `getUserInfo()` bietet einen Weg, dies ohne [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

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
      - : Die vom IdP ausgegebene Client-Kennung der RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die jeweils Informationen zu einem separaten Benutzerkonto enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Wird ausgelöst, wenn der Browser keine Verbindung zum IdP herstellen kann oder wenn `getUserInfo()` vom obersten Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Verwendung von `getUserInfo()` zuzulassen oder wenn die FedCM-API global durch eine auf dem obersten Dokument gesetzte Richtlinie deaktiviert ist.

## Beschreibung

Wenn `getUserInfo()` aufgerufen wird, stellt der Browser nur dann eine Anfrage an den angegebenen [Accounts-Listen-Endpunkt] des IdP, um die Benutzerinformationen abzurufen, wenn die beiden folgenden Bedingungen erfüllt sind:

- Der Benutzer hat sich zuvor mit dem IdP über FedCM im selben Browserfenster bei der RP angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist beim IdP im selben Browserfenster angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Zusätzlich muss das einbettende HTML seine Verwendung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Beispiele

### Grundlegende Verwendung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die `IdentityProvider.getUserInfo()`-Methode verwendet werden kann, um Informationen über einen zuvor angemeldeten Benutzer von einem bestimmten IdP zurückzugeben.

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
