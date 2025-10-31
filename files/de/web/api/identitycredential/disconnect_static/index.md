---
title: "IdentityCredential: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`disconnect()`**-statische Methode der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle trennt ein angegebenes federiertes Anmeldekonto von dem {{Glossary("Identity_provider", "IdP")}}, der für die Bereitstellung der Berechtigungsnachweise verwendet wird.

Danach erfordert die Nutzung dieses Kontos für eine federierte Anmeldung, dass der Prozess der federierten Anmeldung erneut gestartet wird.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:
    - `accountHint`
      - : Ein Zeichenfolgenhinweis, den der IdP verwendet, um das zu trennende Konto zu identifizieren. Der Hinweis kann eine beliebige Zeichenfolge sein, solange der [Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) das Konto identifizieren kann – zum Beispiel eine E-Mail-Adresse oder Benutzer-ID. Dies wird nicht unbedingt mit der Kontonummer übereinstimmen, die vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellt wird.
    - `clientId`
      - : Eine Zeichenfolge, die den Client-Identifikator des {{Glossary("Relying_party", "RP")}} angibt, wie er im `clientId`-Attribut der `providers` [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions#clientid) während der Anmeldung angegeben ist.
    - `configURL`
      - : Eine Zeichenfolge, die die Konfigurationsdatei-URL des IdP angibt, wie sie im `configURL`-Attribut der `providers` [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions#configurl) während der Anmeldung angegeben ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `configURL` des IdP ungültig ist oder der `disconnect_endpoint` fehlt.
    - Der Ursprung des Dokuments nicht mit der `configURL` übereinstimmt.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Browser keine Verbindung zum IdP herstellen kann.
    - Die Anfrage von einer [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}}-Richtlinie abgelehnt wird.
    - Ein weiterer `disconnect()`-Aufruf zuvor gemacht wurde und noch nicht gelöst ist.
    - Die FedCM API global deaktiviert wurde.
    - Die `configURL` des IdP weder sicher noch [potenziell vertrauenswürdig](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das einbettende `<iframe>` keine passende {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt hat, um die Nutzung von `disconnect()` zu erlauben, oder wenn die FedCM API global durch eine Richtlinie im übergeordneten Dokument deaktiviert ist.

## Beispiele

### Grundlegende Nutzung von `disconnect()`

Das RP kann ein angegebenes federiertes Anmeldekonto vom zugehörigen IdP trennen, indem es `disconnect()` aufruft. Diese Funktion kann aus einem übergeordneten RP-Frame aufgerufen werden.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

Damit ein `disconnect()`-Aufruf funktioniert, muss der IdP einen [`disconnect_endpoint`](/de/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in seine Konfigurationsdatei aufnehmen. Weitere Details zur zugrunde liegenden HTTP-Kommunikation finden Sie im Abschnitt [Der Disconnect-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
