---
title: "IdentityProvider: getUserInfo() statische Methode"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getUserInfo()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle gibt Informationen über einen angemeldeten Benutzer zurück, die verwendet werden können, um eine personalisierte Willkommensnachricht und einen Anmelde-Button bereitzustellen. Diese Methode muss von einem Identitätsanbieter-Ursprung (IdP) aus innerhalb eines {{htmlelement("iframe")}} aufgerufen werden, sodass RP-Skripte nicht auf die Daten zugreifen können. Dies muss erfolgen, nachdem ein Benutzer sich bei einer relying party (RP)-Seite angemeldet hat.

Dieses Muster ist bereits bei Websites üblich, die Identitätsföderation für die Anmeldung verwenden, aber `getUserInfo()` bietet eine Möglichkeit, dies ohne den Einsatz von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) zu erreichen.

## Nutzungshinweise

Wenn `getUserInfo()` aufgerufen wird, sendet der Browser eine Anfrage an den IdP [Accounts-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) für die Benutzerinformationen nur dann, wenn beide der folgenden Bedingungen zutreffen:

- Der Benutzer hat sich zuvor mit dem IdP über FedCM bei der RP im selben Browser-Instance angemeldet, und die Daten wurden nicht gelöscht.
- Der Benutzer ist beim IdP im selben Browser-Instance angemeldet.

`getUserInfo()` muss innerhalb eines eingebetteten `<iframe>` aufgerufen werden, und der Ursprung der eingebetteten Seite muss mit der `configURL` des IdP übereinstimmen. Zusätzlich muss das einbettende HTML den Gebrauch explizit über die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlauben:

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
      - : Die Client-Kennung der RP, die vom IdP ausgestellt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, wobei jedes Objekt Informationen darstellt, die einem separaten Benutzerkonto entsprechen. Jedes Objekt enthält die folgenden Eigenschaften:

- `email`
  - : Ein String, der die E-Mail-Adresse des Benutzers darstellt.
- `name`
  - : Ein String, der den vollständigen Namen des Benutzers darstellt.
- `givenName`
  - : Ein String, der den Vornamen des Benutzers (Spitz- oder Kurzname) darstellt.
- `picture`
  - : Ein String, der die URL des Profilbildes des Benutzers darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `configURL` ungültig ist oder wenn der Ursprung des eingebetteten Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht mit dem IdP verbinden kann oder wenn `getUserInfo()` vom Dokument auf oberster Ebene aufgerufen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Nutzung von `getUserInfo()` zu erlauben, oder wenn die FedCM API global durch eine im Dokument auf oberster Ebene gesetzte Richtlinie deaktiviert ist.

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
