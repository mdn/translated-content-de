---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische Methode **`getUserInfo()`** der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Begrüßungsnachricht und einen Anmeldeknopf bereitzustellen. Diese Methode muss innerhalb eines Identitätsanbieter (IdP)-Ursprungs-{{htmlelement("iframe")}} aufgerufen werden, damit RP-Skripte nicht auf die Daten zugreifen können. Dies muss geschehen, nachdem ein Benutzer bei einer vertrauenden Partei (RP)-Website angemeldet wurde.

Dieses Muster ist bereits auf Websites üblich, die Identitätsföderation für die Anmeldung nutzen, aber `getUserInfo()` bietet eine Möglichkeit, dies ohne den Einsatz von [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Nutzungshinweise

Wenn `getUserInfo()` aufgerufen wird, wird der Browser eine Anfrage an den IdP [Accounts-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur dann senden, wenn beide der folgenden Bedingungen zutreffen:

- Der Benutzer hat sich zuvor mit dem IdP über FedCM in derselben Browserinstanz bei der RP angemeldet und die Daten wurden nicht gelöscht.
- Der Benutzer ist in derselben Browserinstanz beim IdP angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden und der Ursprung der eingebetteten Website muss mit der `configURL` des IdP übereinstimmen. Darüber hinaus muss das einbettende HTML seine Nutzung ausdrücklich über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

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
      - : Die vom IdP ausgegebene Client-Kennung der RP.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, von denen jedes Informationen über ein separates Benutzerkonto enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen (Spitz- oder Kurzname) des Benutzers darstellt.
- `picture`
  - : Ein String, der die URL des Profilbilds des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser den IdP nicht erreichen kann oder wenn `getUserInfo()` vom Top-Level-Dokument aus aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Nutzung von `getUserInfo()` zu erlauben oder wenn die FedCM API global durch eine Richtlinie auf dem Top-Level-Dokument deaktiviert ist.

## Beispiele

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
