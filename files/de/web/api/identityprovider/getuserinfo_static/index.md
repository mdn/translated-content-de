---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode des [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Interfaces gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und Anmeldetaste bereitzustellen. Diese Methode muss innerhalb eines {{Glossary("Identity_provider", "IdP")}}-Ursprungs im {{htmlelement("iframe")}} aufgerufen werden, damit Skripte der {{Glossary("Relying_party", "verlassenden Partei")}} (RP) nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem sich ein Benutzer auf einer RP-Website angemeldet hat.

Dieses Muster ist bereits bei Websites üblich, die Identitätsföderation zur Anmeldung verwenden, aber `getUserInfo()` bietet eine Möglichkeit, dies zu erreichen, ohne sich auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu verlassen.

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameter

- `config`
  - : Ein Konfigurationsobjekt, das folgende Eigenschaften enthalten kann:
    - `configURL`
      - : Die URL der [Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für den Identitätsanbieter, von dem Sie Benutzerinformationen abrufen möchten.
    - `clientId`
      - : Die Client-ID der RP, die vom IdP ausgestellt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, von denen jedes Informationen zu einem separaten Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder abgekürzter Name) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbildes des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Browser nicht in der Lage ist, eine Verbindung zum IdP herzustellen oder wenn `getUserInfo()` vom obersten Dokument aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zum Erlauben der Nutzung von `getUserInfo()` gesetzt hat oder wenn die FedCM API global durch eine im obersten Dokument festgelegte Richtlinie deaktiviert ist.

## Beschreibung

Wenn `getUserInfo()` aufgerufen wird, wird der Browser eine Anfrage an den angegebenen IdP's [Kontolisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur senden, wenn beide der folgenden Bedingungen zutreffen:

- Der Benutzer hat sich zuvor im gleichen Browser-Instanz beim RP mit dem IdP über FedCM angemeldet, und die Daten wurden nicht gelöscht.
- Der Benutzer ist beim IdP in derselben Browser-Instanz angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden und der Ursprung der eingebetteten Seite muss zur `configURL` des IdP passen. Darüber hinaus muss das einbettende HTML die Verwendung explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Beispiele

### Grundlegende Nutzung von `IdentityProvider.getUserInfo()`

Das folgende Beispiel zeigt, wie die Methode [`getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static) verwendet werden kann, um Informationen über einen zuvor angemeldeten Benutzer von einem bestimmten IdP zurückzugeben.

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
